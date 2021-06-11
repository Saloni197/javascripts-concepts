var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
let neww =  arr1.sort()
console.log(neww);

//or 
    arr1.sort(function(a, b){
        return a-b;
    });

console.log(arr1);
