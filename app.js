// This is how we import our own modules. 
/* const add = require('./utils.js');
const sum = add(4, -2);
console.log(sum); */

const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

// Create add command
yargs.command({
  command: 'add', 
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }, 
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  }
});


// Create remove command
yargs.command({
  command: 'remove', 
  discribe: 'Remove a new note', 
  handler: function () {
    console.log('Removing a new note!');
  }
});


// Create list command
yargs.command({
  command: 'list', 
  discribe: 'List a new note', 
  handler: function () {
    console.log('Listing out all notes!');
  }
});


// Create read command
yargs.command({
  command: 'read', 
  discribe: 'Read a new note', 
  handler: function () {
    console.log('Reading a new note!');
  }
});

// add, remove, read, list


//console.log(yargs.argv);
yargs.parse();
/* 
By printing yargs at the bottom of our application, 
we are able to see the parsed code in our terminal with node. 
 */


