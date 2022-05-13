const express = require("express")
const path = require('path')
const fs = require ('fs')
const { send } = require("process")
const { progressions } = require("./data/progressions.json")
const app = express()

const PORT = 3001

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/api/progressions', (req, res) => {
    const results = progressions
    res.json(results)
})

app.get('/loops', (req, res) => {
    res.sendFile(path.join(__dirname, './public/loops.html'))
})
app.listen(PORT, () => {
    console.log(`API server now on ${PORT}`)
})