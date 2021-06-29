const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

//const db = MongoClient(databaseName)

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true},(error,result)=>{
   if(error){
       console.log("unable to connect!")
   }
  const db = result.db(databaseName)

   db.collection('tasks').insertMany
   ([
       {
       task :'development',
       completed:true
       },
       {
       task:"completing",
       completed:false
       }],
       (error,result)=>{
       if(error){
          console.log("error")
       }
       console.log(result)
   })
})