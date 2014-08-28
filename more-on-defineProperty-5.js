var i, inventory;

inventory = {
    "apples": 10,
    "oranges": 13
};

Object.defineProperty(inventory, "strawberries", {
    value: 3 
});

for (i in inventory) {
    console.log(i, inventory[i]);
}

// properties defined by defineProperty are by default not iterated over 
// in a for loop