function addNum1(a){
    return function addNum2(b){
        return function addNum3(c){
        return a+b+c;
    }
  }
}
var num1 = addNum1(10);
var num2 = num1(6);
var addition = num2(4);
console.log(addition);


//or
console.log(addNum1(20)(5)(6));