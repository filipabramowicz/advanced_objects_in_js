var prototypeDef = {
    protoArray: []
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

// The soluction to common shared array is initializing the value with null
// and then deifne it when needed or use a getter.

var foo = Object.create(prototypeDef, propertiesDef);
var bar = Object.create(prototypeDef, propertiesDef);

foo.protoArray.push("foobar");
console.log(bar.protoArray);
foo.propertyArray.push("foobar");
console.log(bar.propertyArray);