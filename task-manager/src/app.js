const express = require('express')
require('./mongoose.js') 
// const User = require('../models/user.js')
// const Task = require('../models/task.js')
// const user = require('../models/user.js')
const userRouter = require('../router/user.js')
const taskRouter = require('../router/task.js')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//module.exports = app
