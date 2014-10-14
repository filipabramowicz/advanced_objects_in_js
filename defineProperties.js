var foo = {};

Object.defineProperties(foo, {
   bar: {
       value: "foo",
       writeable: true
   },
   foo: {
       value: function() {
           console.log(this.bar);
       }
   }
});

foo.bar = "foobar";
foo.foo();