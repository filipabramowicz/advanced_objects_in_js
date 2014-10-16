var obj = {
    foo: "foo"
};

Object.defineProperty(obj, "bar", {
    value: "bar"
});

// Iterates over properties that are not enumerable
console.log(Object.getOwnPropertyNames(obj));   // logs foo, bar

// Iterates over properties
console.log(Object.keys(obj));                  // logs foo