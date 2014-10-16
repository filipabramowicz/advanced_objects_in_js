var obj = {};

var foo = Symbol("foo");

// Symbols can be used with Object.defineProperty

Object.defineProperty(obj, foo, {
    value: "foobar" 
});

console.log(obj[foo]);      // logs foobar

// Properties added to object with symbols will not be iterated over in a forin loop
// but calling hasOwnProperty will work fine

console.log(obj.hasOwnProperty(foo));           // logs true

// Symbols will not appear in the returned array from a call to 
// Object.getWonPropertyNames bu there is a Object.getOwnPropertySymbols

console.log(Object.getOwnPropertyNames(obj));   // logs []

console.log(Object.getOwnPropertySymbols(obj)); // logs Symbol(foo)