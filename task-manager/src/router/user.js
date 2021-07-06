const express = require('express')
const multer = require('multer')
//const sharp = require('sharp')
// const { ObjectID } = require('mongodb')
const User = require('../models/user')
//const auth = require('../middleware/auth.js')
const router = new express.Router()

router.post('/users', (req,res) =>{
    const user = new User(req.body)
    user.save().then(()=>{
       res.status(201).send(user)
    }).catch((e)=>{
          res.status(400).send(e)
    })
 })

 router.post('/users/login', async (req, res) => {
    try {

        const user = await User.findByCredentials(req.body.email, req.body.password)
       // const token = await user.generateAuthToken()
        res.send({user})
    } catch (e) {
        res.status(400).send(e.message)
    }
})


router.get('/users/logout', async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token) =>{
            return token.token !== req.token
        })
        console.log(user)
        await req.user.save()
            res.send()

    }catch(e){
         res.status(500).send()
    }
})
 
 router.get('/users',async (req,res) =>{
    try{ 
        const users = await User.find({})
        res.send(users)
     } catch (e) {
        res.status(500).send(e)
     }
 })
 
 router.get('/users/:id',(req,res)=>{
     const _id = req.params.id
 
     User.findById(_id).then((user) =>{
         if(!user){
             return res.status(404).send()
         }
         res.send(user)
     }).catch((e) =>{
         res.status(500).send()
     })
     
 })
 
 router.patch('/users/:id',async(req,res)=>{
     const updates = Object.keys(req.body)
     try{
         const user = await User.findById(req.params.id)
         
        updates.forEach((update)=>user[update] = req.body[update])
          
        await user.save()
         //const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
          if(!user){
          return res.status(404).send()
      }
 
      res.send(user)
 
     }catch(e){
       res.status(400).send(e)
     }
 })
 
 router.delete('/users/:id', async(req,res)=>{
     try{
     const user = await User.findByIdAndDelete(req.params.id)
 
     if(!user){
         return res.status(404).send()
     }
 
     res.send(user)
     }catch (e) {
      res.status(500).send()
     }
 })

 const upload = multer({
     dest:'avatars',
     limits:{
         fileSize:1000000
     },
     fileFilter(req,file,cb){
      if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
          return cb(new Error("Not in the form of JPG,JPEG,PNG"))
      }
      cb(undefined,true)

     }
 })

//  const errorMiddleware = (req,res,next)=>{
//    throw new Error("from my middleware")
//  }
 router.post('/users/me/avatar', upload.single('avatar'), (req,res)=>{
     res.send()
 },(error,req,res,next)=>{
    res.status(400).send({error:error.message})
 })

 router.delete('/users/me/avatar', async(req,res)=>{
   req.user.avatar = undefined
   await res.user.save()
   res.send()
 })

router.get('/user/:id/avatar' ,async (req,res) => {
  try{
        const user = await User.findById(req.params.id)

        if(!user ||!user.avatar){
            throw new Error()

        }
        res.set('content-Type','image/jpg')
        res.send(user.avatar)
  }catch{
      res.status(404).send()
  }
})

  
module.exports = router