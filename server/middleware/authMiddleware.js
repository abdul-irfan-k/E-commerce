import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import axios from 'axios'

export const verifyAuthenticatedUser = asyncHandler(async (req, res, next) => {
    const acessToken = req.cookies.acessToken
    const refreshToken = req.cookies.refreshToken

    if (!acessToken | !refreshToken) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    jwt.verify(acessToken, process.env.ACESS_TOKEN_SECRET, (err, decode) => {
        if (err) {
            console.log('jwt verify error ')
            res.status(401)
            throw new Error('Not Authorized, token fail')
        }

        req.user = { id: decoded.id, username: decoded.username }
        next()
    })

})


