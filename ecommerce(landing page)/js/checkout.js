//============================
// CHECKOUT
//============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalItems = 0;
let totalPrice = 0;

cart.forEach(item => {

    totalItems += item.quantity;

    totalPrice += item.price * item.quantity;

});

document.getElementById("totalItems").innerHTML = totalItems;

document.getElementById("totalPrice").innerHTML = totalPrice;

document.getElementById("grandTotal").innerHTML = totalPrice;