var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();


var arr1 = "john".split(''); // array['n', 'h', '0', 'j']
var arr2 = arr1.reverse(); // array['j', 'o', 'h', 'n'] arr1 and arr2 is having same reference.
var arr3 = "jones".split('');  // array['j', 'o', 'h', 'n']
arr2.push(arr3);  // array['j', 'o', 'h', 'n', array['j', 'o', 'n', 'e', 's'] ]
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); // 5 and array['j', 'o', 'n', 'e', 's']
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); // 5 and array['j', 'o', 'n', 'e', 's']


