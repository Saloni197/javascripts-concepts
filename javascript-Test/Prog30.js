function remove_element(arr,del_num)
{
    var numDel = arr.indexOf(del_num);
    arr.splice(numDel,1);
    return arr;
} 


console.log(remove_element([2, 5, 9, 6], 5));
