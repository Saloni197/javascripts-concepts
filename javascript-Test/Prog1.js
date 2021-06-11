//function to check whether an `input` is an array or not

function is_array(value){
    if (toString.apply(value) === "[object Array]"){
        return true
    }
    return false 
}
 // var a = toString.apply([1,4,5,7,8])
//  console.log(a)
console.log(is_array('Kavita'));
console.log(is_array(['w3resource','akash','atul']));
console.log(is_array([1, 2, 4, 0]));
