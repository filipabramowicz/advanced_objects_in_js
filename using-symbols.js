var obj = {};

// works in ECMAScrpt6
var foo = Symbol("foo");

obj[foo] = "foobar";

console.log(obj[foo]);

// Symbols are unique and immutable
console.log(Symbol("foo") === Symbol("foo"));       // console logs false