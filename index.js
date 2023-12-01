const express = require('express')
const app = express()
const port = 8055

const sendMail = require('./controllers/sendMail.js')

app.get('/', (req, res) => res.send('Hello Welcome to our server !'))

app.get('/mail',sendMail)

const start = async () =>{
    try {
        app.listen(port, () => console.log(`Mail sender app listening on port ${port}!`))
    } catch (error) {
        console.log("Error starting the application")
        }
}
start()