function Foo (stuff) {
    this.stuff = stuff;
}

Foo.prototype.toString = function() {
    return this.stuff;
}

var f = new Foo("foo");
console.log(f + "bar");     // logs "foobar"
