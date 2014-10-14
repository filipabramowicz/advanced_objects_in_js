var i, inventory;

inventory = {
    "apples": 10,
    "oranges": 13
};

Object.defineProperty(inventory, "strawberries", {
    value: 3,
    enumerable: true,
});

for (i in inventory) {
    console.log(i, inventory[i]);
}