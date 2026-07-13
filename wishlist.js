let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlistContainer");

if (wishlist.length == 0) {

    container.innerHTML = `

<div class="text-center">

<h3>Your Wishlist Is Empty</h3>

<a href="men.html" class="btn btn-dark mt-3">

Continue Shopping

</a>

</div>

`;

}

else {

    wishlist.forEach(product => {

        container.innerHTML += `

<div class="wishlist-card">

<img src="${product.image}">

<div class="wishlist-info">

<h5>${product.name}</h5>

<p>

₹${product.price}

</p>

</div>

<div class="wishlist-actions">

<button
class="btn btn-success"

onclick="moveToCart(${product.id})">

Move To Cart

</button>

<button
class="btn btn-danger"

onclick="removeWishlist(${product.id})">

Remove

</button>

</div>

</div>

`;

    });

}
function removeWishlist(id) {

    wishlist = wishlist.filter(item => item.id != id);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    location.reload();

}

function moveToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = wishlist.find(item => item.id == id);

    const exist = cart.find(item => item.id == id);

    if (exist) {

        exist.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    removeWishlist(id);

}