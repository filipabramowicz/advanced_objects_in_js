var obj = {};

Object.defineProperty(obj, "foo", {
    value: "bar",
    configurable: true
});

obj.foo = "foobar";

console.log(obj.foo);

// logs "bar" because configruable means we can redefine the object but
// not to change the value direclty

Object.defineProperty(obj, "foo", {
    value: "foobar",
    configurable: true
})

console.log(obj.foo);

// logs "foobar"