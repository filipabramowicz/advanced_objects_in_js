function Foo (stuff) {
    this.stuff = stuff;
}

Foo.prototype.valueOf= function() {
    return this.stuff.length;
}

var f = new Foo("foo");
console.log(1 + f);     // logs 4
