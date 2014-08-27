var obj = {
        foo: "bar",
};

// A normal object property
console.log(obj.foo);

obj.foo = "foobar";
console.log(obj.foo);


delete obj.foo;
console.log(obj.test);

// Third argument to defineProperty is called descriptor.
// Allows to customize poerty's accessibility and set a value

Object.defineProperty(obj, "foo", {
    value: "bar",
});

console.log(obj.foo);

obj.foo = "foobar";
console.log(obj.foo);

delete obj.foo;
console.log(obj.foo);