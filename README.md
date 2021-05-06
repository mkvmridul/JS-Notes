**NOTE: for understanding the working of JS, go through the modules folder, you can import each module in the index.js**
for getting the empty scaffolding of this king of file structure, go though my git repo name **es6** 


# notes

**primitive vs non primitives**
So the fundamental difference between primitive and non-primitive is that primitive values are immutable and non-primitive values are mutable and Primitives are stored by value while Non-Primitive (objects) are stored by reference.

primitives eg: string, boolean etc
non-primitives eg: objects, null

----------------------------------------------
objects and arrays are passed as reference and not copies

for eg: 
let a = [1,2,3,16,7];
let b = a.sort(); 
console.log(b)// [1, 16, 2, 3, 7]; //note that its not in correct sorting because sort() expects string
console.log(a)// [1, 16, 2, 3, 7];


*****lets take another example****
var arr = [];
var v2 = arr.push(2);
What is the value of v2? If arrays behaved consistently with strings and numbers, v2 would contain a new array with one element – the number 2 – in it. However, this is not the case. Instead, the arr reference has been updated to contain the number, and v2 contains the new length of arr.


*****mutable object*****
var x = {
    foo: 'bar'
};
var  y = x;
x.foo = 'Something else';
console.log(y.foo); // Something else
console.log(x === y) // true

------------------------------------------------

**Arguments vs parameters?**

arg: from which the function is called
param: in which the function is called

-------------------------------------------------

**UML VS CLASS DIAGRAM**

class diagram is a subset of uml diagram which is used to represent the *****static view***** of the application
we can model the oop.
class diagram consists of classes, interfaces, associations etc


whereas 

UML is a general purpose visual modelling language use to visualize, construct and document softwares.

