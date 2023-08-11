import { createRequire } from 'module'
import OTP from '../model/otpModel.js'
const require = createRequire(import.meta.url)

export const twilioSendMessage = (phone, message, otp, verificationType = 'SIGNUP') => {
    return new Promise((resolve, reject) => {
        const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
        twilioClient.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: '+91' + phone,
        })
            .then(async (msg) => {
                await OTP.deleteMany({ phone })
                const newOtp = new OTP({ phone, otp, verificationType })
                await newOtp.save()
                resolve(msg)
            })
            .catch(err => {
                console.log(err)
                reject(err)})
    })
}