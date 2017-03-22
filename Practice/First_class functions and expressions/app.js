//var a = 1;
//var b = 2;
//var c = a+b;

//console.log(a||b||c);

function greet() {
	console.log('hi');
}

greet();

// functions are first class
function logGreeting(fn) {
	fn();
}
logGreeting(greet);

// function expression
'Cava'
var greetMe = function() {
 	console.log('Welcome on board');
}
greetMe();

// it's first class 
logGreeting(greetMe);

// use the function expression on the fly
logGreeting(function(){
		console.log('Welcome on board');
});


