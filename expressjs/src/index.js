const path = require('path')
const express = require('express')
const app = express()
const port = 3000

// console.log(__dirname);

// console.log(path.join(__dirname, '../public'))
const staticPath = path.join(__dirname, '../public')

// built in middleware
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello World from about!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})