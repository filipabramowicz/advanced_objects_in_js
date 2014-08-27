var obj = {};

Object.defineProperty(obj, "foo", {
    value: "bar",
    // configurable allows to prevent the property from being deleted from the object
    // allows also to prevent from being modified in the future with another call to 
    // defineProperty
    configurable: true,
    // writable enables to write the property and change its value
    writable: true
});

console.log(obj.foo);
obj.foo = "foobar";
console.log(obj.foo);
delete obj.foo;
console.log(obj.test);