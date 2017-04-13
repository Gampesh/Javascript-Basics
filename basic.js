// without Strict mode
/*

(function(){
	var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
*/

// with strict mode
//'use strict';

(function(){
	var a = b = 3; // This line will throw ReferenceError: b is not defined
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3);// false

console.log(String(1000000000000000000000)); //1e+21
console.log(parseInt(1000000000000000000000, 10)); // 1

console.log( "=============================" );
// (function() {
// 	console.log(1);
// 	setTimeout(function(){console.log(2)}, 1000);
// 	setTimeout(function(){console.log(3)}, 0);
// 	console.log(4);
// })();
console.log( "=============================" );