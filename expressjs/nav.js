const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('welcom to my home page')
})

app.get('/about', (req, res) => {
  res.send('welcom to my about page')
})

app.get('/contact', (req, res) => {
    res.send('welcom to my contact page')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})