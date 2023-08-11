import express from 'express'
import bodyparser from 'body-parser'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import UserRouter from './routes/user.js'
import AdminRouter from './routes/admin.js'
import testRouter from './routes/test.js'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import cookieParser from 'cookie-parser'
dotenv.config()

import { createRequire } from 'module'
import { twilioSendMessage } from './utils/twilio..js'
import exp from 'constants'
const require = createRequire(import.meta.url)
const swaggerFile = require('./swaggerOutput.json')

const app = express()
const port = process.env.SERVER_PORT || 3000

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cookieParser())
app.set(express.static('public'))
app.use(express.static('public'))
app.use(cors(corsOptions))
app.use(bodyparser())
app.use(bodyparser.json());


app.use('/', UserRouter)
app.use('/api/admin',AdminRouter)

// app.use('/admin')
app.use('/test', testRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use((req,res) => console.log('all error route '))


connectDB(() => app.listen(port, () => console.log(`server running at http://localhost:${port}`)))