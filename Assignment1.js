// Item constructor to create new item objects
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Function to add an item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
    console.log("Item added:", item);
}

// Function to update an item in the inventory
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
        console.log(`Item with id ${id} updated:`, item);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        const deletedItem = inventory.splice(index, 1);
        console.log(`Item with id ${id} deleted:`, deletedItem[0]);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}

// Function to get an item by id
function getItem(inventory, id) {
    const item = inventory.find(item => item.id === id);
    return item || `Item with id ${id} not found.`;
}

// Function to print the inventory
function printInventory(inventory) {
    console.log("Current Inventory:");
    console.log(JSON.stringify(inventory, null, 2));
}

// Example Usage
let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

console.log("Initial Inventory:");
printInventory(inventory);

// Add an item
addItem(inventory, new Item(3, 'Orange', 15, 0.7));
printInventory(inventory);

// Update an item
updateItem(inventory, 2, { quantity: 30 });
printInventory(inventory);

// Delete an item
deleteItem(inventory, 2);
printInventory(inventory);

// Get an item
console.log("Get item with id 1:", getItem(inventory, 1));