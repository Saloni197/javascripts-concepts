var fruits = [ 'Date', 'Apple', 'Banana', 'Mango', 'Orange', 'Fig'];
for (let i=0 ; i<fruits.length ; i++ ){
    console.log(fruits[i]);
}

for(let index in fruits){
    console.log(index + " = " + fruits[index]);

}

fruits.forEach((index,item) => {
    console.log(`${item} = ${index}`)
    
});