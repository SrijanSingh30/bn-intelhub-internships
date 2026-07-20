let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartContainer");

let total = 0;

if (cart.length === 0) {

    container.innerHTML = `

<div class="text-center">

<h3>Your Cart Is Empty</h3>

<a href="men.html" class="btn btn-dark mt-3">

Continue Shopping

</a>

</div>

`;

}

else {

    cart.forEach(product => {

        total += product.price * product.quantity;

        container.innerHTML += `

<div class="cart-card">

<img src="${product.image}">

<div class="cart-info">

<h5>${product.name}</h5>

<p>Brand : ${product.brand}</p>

</div>

<div class="cart-price">

    <h5>₹${product.price}</h5>

    <br>

    <div class="qty-box">

        <button onclick="decreaseQty(${product.id})">

            -

        </button>

        <span>

            ${product.quantity}

        </span>

        <button onclick="increaseQty(${product.id})">

            +

        </button>

    </div>

    <h4>

        ₹${product.price * product.quantity}

    </h4>

    <button class="remove-btn"
onclick="removeProduct(${product.id})">

<i class="fa fa-trash"></i>

Remove

</button>

</div>
</div>

`;

    });

    container.innerHTML += `

<div class="cart-total">

<h3>Total : ₹${total}</h3>

<button class="checkout-btn"
onclick="goToCheckout()">

    Proceed To Checkout

</button>

</div>

`;

}

//===========================
// QUANTITY
//===========================

function increaseQty(id) {

    cart.forEach(product => {

        if (product.id === id) {

            product.quantity++;

        }

    });

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}

function decreaseQty(id) {

    cart.forEach(product => {

        if (product.id === id) {

            if (product.quantity > 1) {

                product.quantity--;

            }

        }

    });

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}

//============================
// REMOVE PRODUCT
//============================

function removeProduct(id) {

    if (confirm("Remove this product from cart?")) {

        cart = cart.filter(product => product.id !== id);

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    }

}
//============================
// GO TO CHECKOUT
//============================

function goToCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    window.location.href = "checkout.html";

}