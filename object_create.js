var prototypeDef = {
    protoBar: "protoBar",
    protoLog: function() {
        console.log(this.protoBar);
    }
};
var propertiesDef = {
    instanceBar: {
        value: "instanceBar"
    },
    instanceLog: {
        value: function() {
            console.log(this.instanceBar);
        }
    }
};

var foo = Object.create(prototypeDef, propertiesDef);
foo.protoLog();
foo.instanceLog();