const express = require('express')

const router = express.Router()

const employee = [
    {
        name:"Kavita",
        mobile: 1258963214,
        department:'computer Science',
        salary: 50000,
        married: false

    }
]

router.get('/emp',(req,res)=>{
    res.send(employee)
    res.send('hello from kavita')
})
module.exports = router