//Object Shorthand
const name = "Kavita";
const age = 23;
const user = {
    name,
    userage: age,
   location: "Ambala"
};
console.log(user);

//destructuring
const product = {
    label:"Red Notebook",
    price: 50,
    stock: 200,
    sellingPrice:60
}
// const label = product.label;
// const stock = product.stock;
// console.log(label, stock)

const {label,stock} = product
console.log(label)
console.log(stock)

//function object destructuring
const transaction = (type,{label,price,stock}) =>{
    console.log(type,label,price,stock)
}
transaction('Place Order', product)
