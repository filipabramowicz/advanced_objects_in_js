"use strict";

var obj = {
    foo: "foo1"
};

Object.freeze(obj);

// All of the following will fail, and result in errors in strict mode
obj.foo = "foo2";       // cannot change values
obj.bar = "bar";        // cannot add a property
delete obj.foo;         // cannot delete a property
                        // cannot call defineProperty on a frozen object
Object.defineProperty(obj, "foo", {
    value: "foo2"
});

// Method to test if object is forze, sealed or not extensible
console.log(obj.isFrozen());
console.log(obj.isSealed());
console.log(obj.isExtensible());