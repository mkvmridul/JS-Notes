//function expression
const a = function  () {
	console.log('a called');
}
a(); //it can't be called above the assignment as hoisting is not done in function expression


b(); //b can be called before the actual function statement because of the hoisting
function b() { //function statement
	console.log('b called');
}

/**below is the example of named  function expression*/
//abc(); //it doesn't have outer scope thus it will through an error
const xyz = function abc(){
	//function abc scope is just inside this function
	console.log('xyz called');
} 



/**FIRST CLASS FUNCTIONS */

/**
 * The ability to use function as a value is first class function
 * And can be passed an argument and can be returned from a function
 * FIRST CLASS CITIZENS
 */

const fcf = function (){
	return function () {

	}
}

console.log(fcf()); //ƒ () {}

/*
Statements that begin with function are considered to be function declarations; 
by wrapping this function within (), it becomes a function expression which can then be executed with the subsequent (). 
These functions are not exposed in the global scope and you can even omit its name if you do not need to 
reference itself within the body.




*/