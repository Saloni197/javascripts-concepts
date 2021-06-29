const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/task-mamager-api',
{useNewUrlParser:true,useCreateIndex:true
})

 const user = mongoose.model('User',{
     name:{
       type:String,
       required:true,
       trim: true
     },
     email:{
        type:String,
        required:true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }

        }
     },
     password:{
         type:String,
         required:true,
         minlength:7,
         trim:true,
         validate(value){
             if(value.toLowerCase().includes('password')){
                 throw new Error("PASSWORD doesnt contain password")
             }

         }
     },
     age:{
        type:Number,
        default:0,
        validate (value){
            if(value < 0){
                throw new Error("age must be a positive number")
            }
        }
     }
 })

 const user1 = new user({
     name:"  Kavita     ",
     //age:23,
     email:'KAVITAKavita@gmail.com',
     password:'kAVITAa'
 })

 user1.save().then(() =>{
  console.log(user1)
 }).catch((error)=>{
   console.log("error!!",error)
 })

// const Tasks = mongoose.model('task',{
//     description:{
//         type:String
//     },completed:{
//         type:Boolean
//      }
// })
  
// const task = new Tasks({
//     description:"development",
//     completed: false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//   console.log("Error!",error)
// })