var obj = {};

Object.defineProperty(obj, "foo", {
    value: "bar"
});

// Uncaught TypeError: Cannot redefine propoerty: foo
Object.defineProperty(obj, "foo", {
   value: "foobar"
});