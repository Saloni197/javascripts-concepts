var arr = [1,2,3,4,5]
var sum = 0;
var mul = 1;
for(let i in arr){
    sum += arr[i]
    mul *= arr[i];


}
console.log(`Sum is - ${sum}`);
console.log(`Multiplication is - ${mul}`);