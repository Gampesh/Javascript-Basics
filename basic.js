// without Strict mode
/*

(function(){
	var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
*/

// with strict mode
'use strict';

(function(){
	var a = b = 3; // This line will throw ReferenceError: b is not defined
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));