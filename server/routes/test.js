import express from 'express'
import ejs from 'ejs'
import puppeteer from 'puppeteer'
import path from 'path'
const __dirname = path.resolve()

const app = express.Router()

app.post('/', async (req, res) => {
    try {
        console.log(req.url)
        ejs.renderFile(path.join(__dirname, './', 'public', 'file.ejs'), async (err, data) => {
            if (err) return console.log(err)
            const browser = await puppeteer.launch({ headless: 'new' })
            const page = await browser.newPage()
            await page.setContent(data, {
                waitUntil: 'domcontentloaded'
            })
            // await page.goto("https://www.deskpass.com/", {
            //     waitUntil: "networkidle2"
            // })
            await page.setViewport({ width: 1680, height: 1050 });
            await page.pdf({
                path: path.join(__dirname, './', 'public', 'sample.pdf'),
                format: "A4"
            })
            await browser.close()
            console.log('finished')
        })
    } catch (error) {
        console.log(error)
    }

})

export default app