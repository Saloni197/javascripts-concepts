//  function to get the last element of an array. Passing a parameter
// 'n' will return the last 'n' elements of the array.

let last_arr_extract = (arr,numOfElement) => {
    if(numOfElement == null){
        return arr[arr.length-1]; 
       
    }

    else if(numOfElement > 0){
        return arr.slice(Math.max(arr.length-numOfElement,0))

    }
    else if (arr == null){
        return [];
    }
}



console.log(last_arr_extract([7, 9, 0, -2]));
console.log(last_arr_extract([7, 9, 0, -2],3));
console.log(last_arr_extract([7, 9, 0, -2],6));
