function element_contain(arr,element){
    for(var i= 0 ; i < arr.length ; ++i){
       if(arr[i] == element){
            return true; 
         }
    }
}
console.log(element_contain([8,6,21,35,25,74,89], 25));
