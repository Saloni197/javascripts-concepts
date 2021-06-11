//JavaScript function to clone an array


let new_arr = [];
function array_Clone(arra1) {
    for(i=0;i<arra1.length;i++){
    new_arr[i] = arra1[i];}
    return (new_arr)
       };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0],1,4,5]));