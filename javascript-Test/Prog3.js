
//JavaScript function to get the first element of an array. Passing a parameter
//'n' will return the first 'n' elements of the array.


var arr_extract = (arr,numOfElement) => {
    if (arr == null){
        return  0;
    }
    else if(numOfElement == null){
        return arr[0];
    }
    else if(numOfElement < 0 ){
        return [];
    }
    else{
        return arr.slice(0,numOfElement)
    }
} 
console.log(arr_extract([7, 9, 0, -2],5))

console.log(arr_extract([7, 9, 0, -2]));
console.log(arr_extract([],2));
console.log(arr_extract([7, 9, 0, -2],3));
console.log(arr_extract([7, 9, 0, -2],6));
console.log(arr_extract([7, 9, 0, -2],-3));