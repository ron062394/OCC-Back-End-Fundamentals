//order.js
const calculateTotal = (cartItems) => {
    let total = 0;
    for (const item of cartItems) {
        total += item.price;
    }
    return total;
}

module.exports = calculateTotal;