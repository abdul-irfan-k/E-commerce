import nodemailer from 'nodemailer'
import OTP from '../model/otpModel.js'

export const    nodemMailerSendEmail = (email, subject, text, html, otp, verificationType) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_EMAIL_PASSWORD
            }
        })
        const mailContainer = {
            from: process.env.NODEMAILER_EMAIL,
            to: email, subject, text, html
        }

        transporter.sendMail(mailContainer, async (err, info) => {
            if (err) return reject(err)
            console.log(info)
            await OTP.deleteMany({ email })
            const newOtp = new OTP({ email, otp, verificationType })
            await newOtp.save()
            resolve(null, { otpSended: true })
        })
    })
}