/**
 * Created by sahug on 12/04/17.
 */
"use strict";
 eval ("var x = 2; console.log(x);");
//console.log(x); // without strict mode this will print 2 but with strict mode this will throw x is not allowed.
var a = {'x' : '23'};
console.log(a);
delete a.x;
console.log(a);
delete Object.prototype; // THis will throw error if we use Strict mode but wont give any error otherwise

function foo1()
{
    return {
        bar: "hello"
    };
}

function foo2()
{
    return
    {
        bar: "hello"
    };
}
