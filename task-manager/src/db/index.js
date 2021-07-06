const express = require('express')
require('./mongoose.js') 
// const User = require('../models/user.js')
// const Task = require('../models/task.js')
// const user = require('../models/user.js')
const userRouter = require('../router/user.js')
const taskRouter = require('../router/task.js')

const app = express()
const port = process.env.PORT || 3000


// app.use((req,res,next) => {
//     if(req.method === 'GET'){
//         res.send('get request are disable')
//     }else{
//         next()
//     }
// })

const multer = require('multer');
const upload = multer({
  dest:'images',
  limits:{
    fileSize:1000000
  },
  fileFilter(req,file,cb){
     if(!file.originalname.match(/\.(doc|docx)$/)){
       return cb(new Error('please upload doc file'))
     }
     cb(undefined,true)
  }
})
app.post('/upload',upload.single('upload'),(req,res)=>{
  res.send()
},(error,req,res,next)=>{
  res.status(400).send({error:error.message})
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, ()=>{
    console.log("server is up on port " +port)
})

// const bcrypt = require('bcryptjs')
// //const jwt = require('jsonwebtoken')

// const myFunction = async()=>{
//   const password = '23@kavita'
//   const hashedPassword = await bcrypt.hash(password, 2)

//   console.log(password)
//   console.log(hashedPassword)

//   const isMatch = await bcrypt.compare("23@kavita" ,hashedPassword)
//   console.log(isMatch)
// }
// myFunction()

// // const myFunction2 = async () =>{
// //   const token = jwt.sign({}.'')
// // }
// // myFunction2()

// // const myFunction = async () => {
// //     const password = 'Red12345!'
// //     const hashedPassword = await bcrypt.hash(password, 8)

// //     console.log(password)
// //     console.log(hashedPassword)

// //     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
// //     console.log(isMatch)
// // }

// //myFunction()

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisiscourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisiscourse')
//     console.log(data)
// }

// myFunction()