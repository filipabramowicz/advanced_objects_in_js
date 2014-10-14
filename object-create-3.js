var prototypeDef = {
    protoArray: []
}

var propertiesDef = {
    propertyArray: {
        value: []
    }
}

// Setting non primitive type like an Array or Object as defined properties
// value in Object.create is probably a mistake since it creates a single
// instance shared by all created objects

var foo = Object.create(prototypeDef, propertiesDef);
var bar = Object.create(prototypeDef, propertiesDef);

foo.protoArray.push("foobar");
console.log(bar.protoArray);
foo.propertyArray.push("foobar");
console.log(bar.propertyArray);