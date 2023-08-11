import axios from 'axios'
import bcrypt from 'bcrypt'
import AsyncHandler from 'express-async-handler'
import Userschema from '../model/userModel.js'
import OTP from '../model/otpModel.js'
import User from '../model/userModel.js'
import Coupon from '../model/couponModel.js'
import { twilioSendMessage } from '../utils/twilio..js'
import { nodemMailerSendEmail } from '../utils/nodemailer.js'
import jwt from 'jsonwebtoken'

export const signUpUser = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { name, email, phone, password, comfirmPassword } = req.body

    const isCorrectInput = (name.length > 2)
    if (!isCorrectInput) return res.json({ isValid: false, errorType: 'INVALIDINPUT' })

    const isPasswordMatched = password == comfirmPassword
    if (!isPasswordMatched) return res.json({ isValid: false, errorType: 'PASSWORDNOTMATCHED' })

    const isAlreadUserAccount = await Userschema.findOne({ email })
    if (isAlreadUserAccount) return res.json({ isValid: false, errorType: 'ALREADYUSERFOUND' })

    const user = new Userschema({ name, email, phone, password })
    user.save()

    const userAuthToken = await jwt.sign({ id: user._id, username: user.name }, process.env.USER_AUTH_TOKEN_SECRET, { expiresIn: '1h' })
    const userRefreshToken = await jwt.sign({ id: user._id, username: user.name }, process.env.USER_REFRESH_TOKEN_SECRET, { expiresIn: '1h' })
    res.cookie("userAuthToken", userAuthToken, { httpOnly: true, sometime: "strict" })
    res.cookie("userRefreshToken", userRefreshToken, { httpOnly: true, sometime: "strict" })
})


export const loginUser = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { email, password, phone } = req.body

    const user = await Userschema.findOne({ $or: [{ email }, { phone }] })
    if (!user) throw new Error()
    if (!user) return res.status(400).json({ isValid: false, errorType: 'USERNOTFOUND' })

    const isCorrectPassword = await bcrypt.compare(password, user.password)
    if (!isCorrectPassword) return res.json({ isValid: false, errorType: 'NOTCORRECTPASSWORD' })

    const userAuthToken = await jwt.sign({ id: user._id, username: user.name }, process.env.USER_AUTH_TOKEN_SECRET, { expiresIn: '1h' })
    const userRefreshToken = await jwt.sign({ id: user._id, username: user.name }, process.env.USER_REFRESH_TOKEN_SECRET, { expiresIn: '1h' })
    res.cookie("userAuthToken", userAuthToken, { httpOnly: true, sometime: "strict" })
    res.cookie("userRefreshToken", userRefreshToken, { httpOnly: true, sometime: "strict" })
})


export const loginWithGithub = async (req, res) => {
    try {
        const { code } = req.body
        const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, CLIENT_PORT } = process.env

        axios.post('https://github.com/login/oauth/access_token', {
            client_id: GITHUB_CLIENT_ID, client_secret: GITHUB_CLIENT_SECRET, redirect_uri: `${CLIENT_PORT || 'http://localhost:3000'}/github`, code,
        })
            .then(({ data }) => {
                const params = Object.fromEntries(new URLSearchParams(data))
                if (!params.access_token) return
                axios.get('https://api.github.com/user/emails',
                    { headers: { 'Authorization': `token ${params.access_token}` } })
                    .then(async ({ data }) => {
                        console.log(data)
                        console.log(data[0].email)

                        const user = await User.findOne({ email: data[0].email })
                        console.log(user)

                        if (!user) return
                        const { userAuthToken, userRefreshToken } = userTokenHandler(user)
                        res.cookie("userAuthToken", userAuthToken, { httpOnly: true, sometime: "strict" })
                        res.cookie("userRefreshToken", userRefreshToken, { httpOnly: true, sometime: "strict" })

                    })
                    .catch(err => console.log('--------------error', err))
            })
    } catch (error) {
        console.log(error)
    }
}




export const loginWithLinkedIn = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { code } = req.body
    const { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, CLIENT_PORT } = process.env

    const { data: LinkedinRes } = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
        redirect_uri: `${CLIENT_PORT || 'http://localhost:3000'}/linkedin`,
        client_id: LINKEDIN_CLIENT_ID,
        grant_type: 'authorization_code',
        client_secret: LINKEDIN_CLIENT_SECRET,
        code
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded;' } })
    if (!LinkedinRes.access_token) return

    const { data: linkedinEmailRequestRes } = await axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
        { headers: { "Authorization": `Bearer ${LinkedinRes.access_token}` } })
    if (!linkedinEmailRequestRes) return
    const email = linkedinEmailRequestRes.elements[0]['handle~'].emailAddress
    const user = await Userschema.findOne({ email })
    if (!user) return
    const { userAuthToken, userRefreshToken } = userTokenHandler(user)
    res.cookie("userAuthToken", userAuthToken, { httpOnly: true, sometime: "strict" })
    res.cookie("userRefreshToken", userRefreshToken, { httpOnly: true, sometime: "strict" })
})


export const loginWithTwitter = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const { code } = req.body
    const { CLIENT_PORT, TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET } = process.env
    console.log(code)
    const BasicBearer = btoa(TWITTER_CLIENT_ID + ':' + TWITTER_CLIENT_SECRET)
    const data = await axios.post('https://api.twitter.com/2/oauth2/token',
        {
            grant_type: 'authorization_code', client_id: TWITTER_CLIENT_ID,
            redirect_uri: `${CLIENT_PORT || 'http://localhost:3000'}/twitter`, code_verifier: 'challenge',
            code: code, scope: 'tweet.read%20users.read%20follows.read%20follows.write'
        },
        {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;', Authorization: `Basic ${BasicBearer}` }
        }).then(({ data }) => {
            console.log(data)
        })
        .catch(err => console.log('err', err))
})


export const sendMessage = (req, res) => {
    try {
        console.log(req.url)
        const { phone, verificationType } = req.body
        twilioSendMessage(phone, 'signup otp', 6454654)
            .then((msg) => {
                res.status(200).json(msg)
            })
            .catch(err => res.status(400).json({ isError: true, isMessageSended: false }))
    } catch (error) {
        console.log(error)
    }
}

export const sendOtpWithEmail = (req, res) => {
    try {
        console.log(req.url)
        const { email } = req.body

        nodemMailerSendEmail(email, 'sending the email', 'hello', '<button> click me </button>', 5555, 'SIGNUP')
            .then(() => res.status(200).json({ isError: false, isMessageSended: true })).
            catch(err => {
                res.status(400).json({ isError: true, isMessageSended: false })
            })
    } catch (error) {
        console.log('------------')
        console.log(error)
    }
}

export const verifyAccount = async (req, res) => {
    try {
        console.log(req.url)
        const { verificationType, email, phone, verificationUsing, otp } = req.body
        const data = await OTP.findOne({ $or: [{ email }, { phone }] })
        const userid = req.id
        console.log(data.verifyAccount(otp))

        if (data == null) return res.status(400).json({ isValid: false, errorType: 'OTPDATANOTFOUND' })
        if (!data.verifyAccount(otp)) return res.status(400).json({ isValid: false, errorType: 'INVALIDOTP' })

        if (verificationType == 'SIGNUP') await User.findOneAndUpdate({ $or: [{ email, phone }], verificationType, id: userid }, { isVerifiedAccount: true })
    } catch (error) {
        res.status(400).json()
    }
}

export const requestVerifyUser = async (req, res) => {
    try {
        console.log(req.url)

    } catch (error) {

    }
}



export const verifyCoupon = async (req, res) => {
    try {
        console.log(req.url)
        const { code } = req.body
        const coupon = Coupon.findOne({ code })
        if (coupon == null) return res.status(400).json({ isValid: false, errorType: 'COUPONNOTFOUND' })

        const currentDate = Date.now()
        if (currentDate > parseInt(coupon.endDate)) return res.status(400).json({ isValid: false, errorType: 'EXPIREDCOUPON' })
        if (currentDate < parseInt(coupon.startDate)) return res.status(400).json({ isValid: false, errorType: 'COUPONISNOTSTARTED' })
        return res.status(200).json({ isValid: true, coupon })
    } catch (error) {
        return res.status(400).json()
    }
}


export const editProfileImage = AsyncHandler(async (req, res) => {
    console.log(req.url)
    const profileImageUrl = 'user/image/' + req.file.filename
    await Userschema.findByIdAndUpdate(req.userid, { profileImageUrl })
})




// utility function 
const userTokenHandler = async (user) => {
    const userAuthToken = await jwt.sign({ id: user._id, username: user.name }, process.env.USER_AUTH_TOKEN_SECRET, { expiresIn: '1h' })
    const userRefreshToken = await jwt.sign({ id: user._id, username: user.name }, process.env.USER_REFRESH_TOKEN_SECRET, { expiresIn: '1d' })
    return { userAuthToken, userRefreshToken }
}