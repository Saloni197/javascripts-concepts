const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
     }
},{
    timestamps:true
})
const Tasks = mongoose.model('task',taskSchema)
    module.exports = Tasks