function fun() {
    var d = 1;
    this.e = 2;
    f = 3;
} // This will work

function fun() {
"use strict";
    var d = 1;
    this.e = 2;
    f = 3;
} // This will not be working


// In javascript functions are first class citizen (we can pass, accept fucntion as argument)
// As in java Objects are first class citizen



/*
Below code will converted like below

var fun_hoisting;
function fun2_hoisting() {
    console.log(this);
}
fun_hoisting(); // THis will throw error as not a function
fun2_hoisting();

*/

fun_hoisting(); fun2_hoisting();
var fun_hoisting = function () {
    console.log(this);
};
function fun2_hoisting() {
    console.log(this);
}


