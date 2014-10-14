var i, inventory;

inventory = {
    "apples": 10,
    "oranges": 13
};

Object.defineProperty(inventory, "strawberries", {
    value: 3,
});

console.log(inventory.propertyIsEnumerable("apples")); //console logs true
console.log(inventory.propertyIsEnumerable("strawberries")) // console logs false