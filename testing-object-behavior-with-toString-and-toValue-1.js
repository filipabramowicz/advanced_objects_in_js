function Foo (stuff) {
    this.stuff = stuff;
};

Foo.prototype.toString = function() {
    return this.stuff;
};

// Neat way to use toString might be to make the object hashable

var f = new Foo("foo");
var obj = {};
obj[f] = true;
console.log(obj);       // logs {foo: true}