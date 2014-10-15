var obj = {
    foo : "foo"  
};

obj.bar = "bar";
console.log(obj);       // logs Object {foo: "foo", bar: "bar"}

Object.preventExtensions(obj);


// preventExtensions does not prevent deletion of configurable properties
delete obj.bar;
console.log(obj);       // logs Object {foo: :foo}

// preventExtensions does not prevent changes to existing writeable properties
obj.bar = "bar";
console.log(obj);       // still logs Object {foo: "foo"}

obj.foo = "foobar";
console.log(obj);       // logs {foo: "foobar"} can still change values