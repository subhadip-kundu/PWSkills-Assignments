let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end of your shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'Honey' if you are allergic to honey
const allergicToHoney = true; // Set this to true if allergic to honey, false otherwise

if (allergicToHoney) {
    const honeyIndex = shoppingCart.indexOf('Honey');
    if (honeyIndex !== -1) {
        shoppingCart.splice(honeyIndex, 1);
    }
}

// Modify 'Tea' to 'Green Tea'
const indexOfTea = shoppingCart.indexOf('Tea');
if (indexOfTea !== -1) {
    shoppingCart[indexOfTea] = 'Green Tea';
}

console.log(shoppingCart);
