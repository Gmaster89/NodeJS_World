//require('./greet.js');
//greet(); wrong it is not defined, this is by design
//code in the module should never disturb the code in the rest of the app.

// if you want to use the greet here then use export in greet.js
// this construct will return greet which is defined here and imports code from greet.js
var greet = require ('./greet');
greet();

