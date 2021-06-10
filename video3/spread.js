function sumAdd(a,b,...args){
    var sum = 0;
    let multiply = a * b;
    for(let num of args)
{
    sum += num ;
}
return [sum , multiply];
}
console.log(sumAdd(2,5,8));
console.log(sumAdd(2,8));
console.log(sumAdd(3,8,1,1,1,1));