//concepts of module

/**
 * Here you can export a function or a variable
 * You can also make  a default export for a default import
 */

const add = (a,b) => a+b;
const mul = (a,b) => a*b;

export {add, mul};
export default add;


/** 

	*Below is the code given to import a module from m1 and using the given function
	import add, {mul} from './module/m1';
	console.log(mul(1,444));

*/