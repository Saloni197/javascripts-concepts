const notes = require('./notes.js')
const yargs = require('yargs')

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
        notes.addNote(argv.title,argv.body)
    }
})