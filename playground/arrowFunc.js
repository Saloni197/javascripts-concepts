// const square = function(x){
//     return x * x;
// }

// const square = (x) =>{
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(4));

debugger
const eventt = {
    name: 'Birthday Party',
    guestName : ['Kavita','Atul','Akash'],

    guestList () {
        // const that = this
        console.log('Guest list for ' + this.name)

        this.guestName.forEach((guest) => { 
            console.log(guest + ' is attending  '+ this.name)
        })
    }
}
eventt.guestList();   