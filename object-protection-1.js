"use strict";

var obj = {};

Object.defineProperty(obj, "foo", {
    value: "foo" 
});

Object.seal(obj);
// Object.seal prevents new properties from being added. Also
// - prevents further configurability
// - removes the ability to delete properties
// - modification of existing properties is no longer allowed
// In strict mode it won't fail silently.

//Uncaught TypeError: Cannot redefine property: foo
Object.defineProperty(obj, "foo", {
    value: "bar" 
});