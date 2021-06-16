const validator = require('validator')

console.log(validator.isURL('https://kavita.io'))
console.log(validator.isURL('https//kavita.io'))
console.log(validator.isEmail('Kavita@gmail.com'))
console.log(validator.isEmail('Kavitagmail.com'))