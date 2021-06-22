const path = require('path')
const express = require('express')
//const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicpath = path.join(__dirname, '../public')
//app.set('view Engine','hbs')
app.use(express.static(publicpath))

// app.get('',(req,res) => {
//    res.render('index',{
//        title: 'weatherapp',
//        name: 'KAvita Goyal',
//    })
// })


app.get('',(req,res) =>{
    res.send("hello express")
})
app.get('/help',(req,res) =>{
    res.send('<h2>Weather</h2>')
})
app.get('/about',(req,res) => {
    res.send({
        name:'Kavita',
        age:23
    })
})
app.get('/weather',(req,res) =>{
    res.send('todays weather')
})
app.listen(3000,() => {
    console.log('server is up on port 3000')
})
