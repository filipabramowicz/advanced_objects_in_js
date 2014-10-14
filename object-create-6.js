var foo1Proto = {
    foo: "foo"
};

var foo2Proto = Object.create(foo1Proto);
foo2Proto.bar = "bar";

var foo = Object.create(foo2Proto);

// isPrototypeOf will walk down the prototype chain and return true if any prototype 
// matches the prototype object tested against

console.log(foo.foo, foo.bar); // logs "foo bar"
console.log(foo1Proto.isPrototypeOf(foo)); //logs true
console.log(foo2Proto.isPrototypeOf(foo)); //logs true