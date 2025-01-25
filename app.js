const express = require('express')
const app = express()

const path = require('path')

require('dotenv').config()

app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'public', 'views')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'))
})

const PORT = process.env.PORT

// app.post('/', (req, res) => {
//     const {name} = req.body

//     res.send(`Your name is ${name}`)
// })

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`)
})