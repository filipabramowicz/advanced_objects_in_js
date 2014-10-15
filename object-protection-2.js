"use strict";

var obj = {};

Object.defineProperty(obj, "foo", {
    value: "foo" ,
    writable: true,
    configurable: true
});

Object.seal(obj);

// Can change but cannot delete after Object.seal

console.log(obj.foo);   // logs "foo"
obj.foo = "bar";
console.log(obj.foo);   // logs "bar"
delete obj.foo;         // TypeError, cannot delete