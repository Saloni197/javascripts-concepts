// setTimeout(() => {
//     console.log("2 second timer")
// },2000);

// const names = ["Kavita","Mehak","Alia"];
// const shortNames = names.filter(() =>{
//     return names.length >= 5;
// })
const geocode = (address,callback) =>{
    setTimeout(() => {
        const data = {
            longitude : 0,
            lattitude : 0
        }
        callback(data)
        
    }, 2000);
    
}

geocode('Haryana',(data) =>{
    console.log(data)
})



const add = (a,b,callback) =>{
    setTimeout(() => {
        callback(a + b)
    }, 2000);

}

add(4,1,(sum) =>{
    console.log(sum)
})