//string and class string
/*
let s1 = 'mridul'; //primitive
s1.toUpperCase();
console.log(s1); //mridul
console.log(s1.toUpperCase); //MRIDUL

let s2 = new String('mridul'); //object
s2.toUpperCase(); 
console.log(s2); //String {"mridul"}

console.log(window); 
// window.alert('a');
alert('a'); //you can omit window object as it is the most parent object

*/

/*---------------------------------Object literal-------------------------------------*/

/*
let obj = {
	name: 'mridul',
	email: 'mridul.verma965@gmail.com',
	getName: function()  {
		return `name is ${this.name}`;
	}
}
 
console.log(Object.keys(obj));
*/


/*---------------------------------Oop in ES5-------------------------------------*/

//constructor

/*
 function Vehicle(make,model) {
	 this.make = make;
	 this.model = model;
	 this.getSummary = () => {
		console.log(`make: ${make}  model: ${model}`);
	 }
}

const car = new Vehicle('maruti', '800');
car.getSummary();
// const bike = new Vehicle('honda', 'splender'); 
*/

//prototypes
/*
	here, you can write a method of a class outside the class scope using prototypes
*/

/*
 function Vehicle(make,model) {
	 this.make = make;
	 this.model = model;
}

//we use to  write outside because we may mostly only need to use the already properties and methods in class and not the prototypes
Vehicle.prototype.getSummary = function() {
		console.log(`make: ${this.make}  model: ${this.model}`);
 }
const car = new Vehicle('maruti', '800');
car.getSummary();
*/



/**INHERITANCE */

//constructor
function Book (id,title, author){
	this.id = id;
	this.title = title;
	this.author= author;
}

Book.prototype.getSummary = function(){
	console.log( `id: ${this.id} title:${this.title} author: ${this.author}` );
}

//Notes constructor
function Notes(id,title, author, year){
	Book.call(this,id, title, author);
	this.year = year;
}

Notes.prototype = Object.create(Book.prototype);

//change constructor which is set to Book
Notes.prototype.constructor = Notes; 

let n1 = new Notes(1,'road to failure','mridul', 2019);
console.log(n1);