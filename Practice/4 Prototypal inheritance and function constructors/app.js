

function Person(firstname, lastname) {
	this.lastname = lastname;
	this.firstname = firstname;
}

//var john = new Person('john', 'doe');
//console.log(john.firstname + john.lastname);
// object created 


// what about the prototype.
// prop and methods can be aatched to it
Person.prototype.greet = function(){
	console.log('Hello, '+ this.firstname+' '+ this.lastname);
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane', 'Doe');

john.greet();
jane.greet();

console.log(john.__proto__);
console.log(john.__proto__ === jane.__proto__);
