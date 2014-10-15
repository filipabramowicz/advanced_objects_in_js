function Foo (stuff) {
    this.stuff = stuff;
};

Foo.prototype.valueOf = function() {
    return this.stuff.length;
};

Foo.prototype.toString = function() {
    return this.stuff;
};

var f = new Foo("foo");
console.log(f + "bar"); // logs "3bar" instead of "foobar"
console.log(1 + f);     // logs 4