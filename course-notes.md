1. npm init (using defualt values)
2. npm i validator 
  - See npm docs on this module. 
3. npm i nodemon -g
  - Allows us to save and changes without having to run node app.js everytime we make a change.
4. npm i chalk
  - Utilizes colors for visual purposes only. 
5. npm i yargs
  - Allows us to parse our arguments to readable code. 


```js
  console.log(process.argv[2]);
//Argument Vector - Its an array of all arguments provided.
/* This allows us to sample with user input  */
/*
When we run 'node app.js Rachel we get the following response. 

[ '/usr/local/bin/node',
  '/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/notes-app/app.js',
  'Rachel' ] */
```

Yargs vs. default argv

AndrewRcheliMac:notes-app arvanbuskirk$ node app.js add --title="Things to buy"
[ '/usr/local/bin/node',
  '/Users/arvanbuskirk/Desktop/Coding/nodeJS-Udemy/notes-app/app.js',

  'add', (default)
  '--title=Things to buy' ]

    YARGS
{ _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
