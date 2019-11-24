import dotenv from 'dotenv'
import express, { response } from 'express'
import request from 'request'
dotenv.config()

const app = express()
const port = 8080
const webhookURL: string = process.env.WEBHOOK_URL as string

if (!webhookURL) {
  console.log(`You must enter a URL for the WEBHOOK_URL in the .env file!`)
  process.exit()
}

app.use(express.json())

app.post('/', (req, res) => {
  request.post(webhookURL, {
    json: req.body,
  })
  res.end('POST sent successfully')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
