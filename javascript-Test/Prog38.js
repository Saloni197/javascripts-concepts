function filter_array(arr){
    arr = arr.filter((value) => {
        if(value != null || value != false || value != 0 )
         return value;
   })
return arr;
}





console.log(filter_array([58, '', 'abcd', true, null, false, 0]));
//[58, "abcd", true]
