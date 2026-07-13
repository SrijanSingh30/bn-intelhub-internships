const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(item => item.id === id);

const container = document.getElementById("productDetails");
container.innerHTML = `

<div class="row">

    <div class="col-lg-6">

        <div class="product-image">

            <img src="${product.image}" class="img-fluid">

        </div>

    </div>

    <div class="col-lg-6">

        <div class="product-info">

            <h2>${product.name}</h2>

            <div class="product-rating">

                ⭐⭐⭐⭐⭐ (${product.rating})

            </div>

            <div class="product-price">

                ₹${product.price}

            </div>
            <div class="mt-3">

<span class="badge badge-success">

In Stock

</span>

</div>

           <div class="product-description">

<ul class="product-features">

<li> Premium quality fabric with soft and breathable material.</li>

<li> Comfortable regular fit suitable for all-day wear.</li>

<li> Durable stitching with long-lasting color and shape.</li>

<li> Perfect for casual, office, college, and daily use.</li>

<li> Easy to wash, wrinkle-resistant, and skin-friendly fabric.</li>

</ul>

</div>
            <div class="mt-4">

    <h5>Available Color</h5>

    <span class="badge badge-dark p-2">

        ${product.color}

    </span>

</div>

            <div class="sizes">

<h5>Available Sizes</h5>

${product.size.map(size => `

<button class="btn btn-outline-dark size-btn">

${size}

</button>

`).join("")}

</div>

           <div class="quantity-box mt-4">

<h5>Quantity</h5>

<div class="d-flex align-items-center">

<button class="btn btn-outline-dark"
onclick="decreaseQty()">

-

</button>

<input
type="text"
id="qty"
value="1"
readonly
class="form-control text-center mx-2"
style="width:70px;">

<button class="btn btn-outline-dark"
onclick="increaseQty()">

+

</button>

</div>

</div>

<br>

<button
class="btn btn-dark"
onclick="addToCart()">

<i class="fa fa-shopping-cart"></i>

Add To Cart

</button>

<button class="btn btn-success buy-btn">

Buy Now

</button>
            <hr>

<h5>Delivery</h5>

<p>🚚 Free Delivery in 3-5 Days</p>

<p>↩ 7 Days Easy Return</p>

<p>✔ 100% Original Product</p>

        </div>

    </div>

</div>

`;
let quantity = 1;

function increaseQty() {

    quantity++;

    document.getElementById("qty").value = quantity;

}

function decreaseQty() {

    if (quantity > 1) {

        quantity--;

        document.getElementById("qty").value = quantity;

    }

}
function addToCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find(item => item.id === product.id);

    if (exist) {

        exist.quantity += quantity;

    } else {

        cart.push({

            ...product,

            quantity: quantity

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart");

}