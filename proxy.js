var obj = {
    foo: "foo"  
};

var handler = {
    get: function (target, name) {
        if (target.hasOwnProperty(name)) {
            return target(name);
        }
    }
};

var p = new Proxy(obj, handler);
console.log(p.foo);     // logs "foo"
console.log(p.bar);     // logs "foobar"
console.log(p.asdf);    // logs "foobar"