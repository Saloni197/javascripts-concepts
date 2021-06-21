const yargs = require('yargs');
const chalk = require('chalk')
// const command = process.argv[2];
console.log(process.argv);

// if(command === 'add'){
//     console.log("This is third argument of command");
// }
//     else if(command === 'remove'){
//     console.log("this is equal to goyal argument");
//     }
//     else 
//     {
//         console.log("this is about node js command line argument")
//     }
//add
yargs.command({
    command: 'add',
    descibe: 'add a new node',
    builder: {
        title: {
            descibe: "note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            descibe: "node body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log("adding a new note!",argv)
    }
})
//remove
yargs.command({
    command: 'remove',
    descibe: "remove a new node",
    handler: function(){
        console.log("remove the command successfully")
    }
})
//read
yargs.command({
    command: 'read',
    descibe: 'this is read command',
    handler: function(){
        console.log("read that command");
    }
})
//list 
yargs.command({
    command: 'list',
    descibe: 'list command',
    handler: function(){
        console.log("listing out nodes")
    }
})
//console.log(yargs.argv);
yargs.parse();