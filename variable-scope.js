var y = 1, x = y = typeof x;
console.log(x); // undefined
console.log(y); // undefined
console.log( typeof x); // string
console.log("%s %s", x, y);

console.log("%d %d", x, y);
/*

var y;
var x;
y=1;
x = y = typeof x; // assignment happens from right to left
console.log("%s %s", x, y);
console.log("%d %d", x, y);

*/
