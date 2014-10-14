function Foo() {
}

var prototypeDef = {
    protoArray: [],
};

var propertiesDef = {
    propertyArrayValue_: {
        value: null,
        writable: true
    },
    propertyArray: {
        get: function() {
            if (!this.propertyArrayValue_) {
                this.propertyArrayValue_ = [];
            }    
            return this.propertyArrayValue_;
        }
    }
};

var foo1 = new Foo();

// old way of using instanceof works with constructors
console.log(foo1 instanceof Foo); // logs true

// You check against the prototype object, not the constructor function
console.log(Foo.prototype.isPrototypeOf(foo1)); //true

var foo2 = Object.create(prototypeDef, propertiesDef);
// can't use instanceof with Object.create, test against prototype object...
console.log(foo2 instanceof Foo); // logs true
console.log(prototypeDef.isPrototypeOf(foo2)); //true