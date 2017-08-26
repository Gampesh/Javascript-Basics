// Without Clousers
for (var i = 0; i < 5; i++) {
    // setTimeout(function() { console.log(i); }, i * 1000 );
}

console.log("=============================================================================");
// With Clousers

for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}

console.log("=============================================================================");

var myObject = { foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func: this.foo = " + this.foo); // bar
        (function() {
            console.log("inner func: this.foo = " + this.foo); // undefined
        }());
    }
};
myObject.func();

console.log("=============================================================================");

(function(){
    var p = q = 10;
})( );

console.log("p = "+ typeof p !== 'undefined'); // true
console.log("q = "+typeof q !== 'undefined'); // true

console.log("=============================================================================");

(function(x) {
    return (function(y) {
        console.log("Value of X is " + x);
    })(2)
})(1);

console.log("=============================================================================");

(function() {
    console.log("["+1+"]");
    setTimeout(function(){ console.log("["+2+"]")}, 1000);
    setTimeout(function(){ console.log("["+3+"]")}, 0);
    console.log("["+4+"]");
})();
