var prototypeDef = {
    bar: "protoBar"
};

// Properties create in the properties desriptor argument overwrite the values
// in the prototype argument

var propertiesDef = {
    bar: {
        value: "instanceBar"
    },
    log: {
        value: function() {
            console.log(this.bar);
        }
    }
};

var foo = Object.create(prototypeDef, propertiesDef);
foo.log();