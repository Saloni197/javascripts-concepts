let str = `This is about string functions`;

//print string length
console.log(str.length);

//access element of string at bigning and at end respectively
console.log(str[10]);
console.log(str[str.length - 5]);

//print string in lowercase and uppercase
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//print index of any element in string
console.log(str.indexOf('string',8));

//print true if element present on string
console.log(str.includes("is"));
console.log(str.includes("not"));

//startwith and endwith
console.log(str.startsWith("is"));
console.log(str.endsWith("functions"));

//print part of the string
console.log(str.slice(5,10)); //exclude 10th element 
console.log(str.substring(5,10));
console.log(str.substr(5,10)); //start from 5 and print length upto 10
console.log(str.slice(-5,-3));  //take string from the end start from 3







