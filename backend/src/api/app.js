const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser')
const router = require('../routes')
const err = require('../middlewares/errorHandler')

app.use(express.json())
app.use('/image', express.static(path.join(__dirname, '..', 'uploads')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(router)
app.use(err)
module.exports = app
