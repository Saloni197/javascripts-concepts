function randon_num(number){
    return [Math.floor(Math.random()*number.length)];
}
console.log(randon_num([5,8,9]));