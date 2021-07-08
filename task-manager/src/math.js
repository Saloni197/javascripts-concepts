const calculateTip = (total,tipPercent = .25)=>{
   const tip = total * tipPercent
   return total + tip
}

const add = (a,b)=> {
   a+b
}
module.exports = {
    calculateTip,add
}