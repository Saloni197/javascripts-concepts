let num= 100, den = "s";

try {
     console.log(num/den);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log(error.name);
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}