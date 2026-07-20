const saleProducts = [

    {
        id: 101,
        name: "Linen Blend Shirt",
        price: 1199,
        oldPrice: 1999,
        discount: "-40%",
        image: "images/sale/Linen Blend Shirt.png",
        colors: ["green", "gray"],
        brand: "us polo"
    },

    {
        id: 102,
        name: "Floral Print Dress",
        price: 1499,
        oldPrice: 2999,
        discount: "-50%",
        image: "images/sale/Floral Print Dress.png",
        colors: ["white", "pink", "gray"]
    },

    {
        id: 103,
        name: "Essential Hoodie",
        price: 1299,
        oldPrice: 1999,
        discount: "-35%",
        image: "images/sale/Essential Hoodie.png",
        colors: ["gray", "black"]
    },

    {
        id: 104,
        name: "Ribbed Tank Top",
        price: 599,
        oldPrice: 999,
        discount: "-40%",
        image: "images/sale/Ribbed Tank Top.png",
        colors: ["black", "gray", "green"]
    },

    {
        id: 105,
        name: "Straight Fit Jeans",
        price: 1099,
        oldPrice: 1899,
        discount: "-45%",
        image: "images/sale/Straight Fit Jeans.png",
        colors: ["white", "blue"]
    },

    {
        id: 106,
        name: "Kids Cotton Set",
        price: 699,
        oldPrice: 999,
        discount: "-30%",
        image: "images/sale/Kids Cotton Set.png",
        colors: ["blue", "gray", "pink"]
    },

    {
        id: 107,
        name: "Polo T-Shirt",
        price: 599,
        oldPrice: 999,
        discount: "-60%",
        image: "images/sale/polo.png",
        colors: ["green", "black"]
    },

    {
        id: 108,
        name: "Oversized Shirt",
        price: 899,
        oldPrice: 1699,
        discount: "-45%",
        image: "images/sale/Oversized Shirt.png",
        colors: ["white", "blue", "pink"]
    },

    {
        id: 109,
        name: "Puffer Jacket",
        price: 2499,
        oldPrice: 4999,
        discount: "-50%",
        image: "images/sale/puffered jacket.png",
        colors: ["black", "gray", "green"]
    },

    {
        id: 110,
        name: "Printed Top",
        price: 699,
        oldPrice: 1499,
        discount: "-40%",
        image: "images/sale/printed top.png",
        colors: ["white", "beige", "pink"]
    },

    {
        id: 111,
        name: "Polo T-Shirt",
        price: 599,
        oldPrice: 999,
        discount: "-60%",
        image: "images/sale/polo.png",
        colors: ["green", "black"]
    },

    {
        id: 112,
        name: "Oversized Shirt",
        price: 899,
        oldPrice: 1699,
        discount: "-45%",
        image: "images/sale/Oversized Shirt.png",
        colors: ["white", "blue", "pink"]
    },


];

let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

let cart =
    JSON.parse(localStorage.getItem("cart")) || [];








const saleContainer =
    document.getElementById("saleProductContainer");

saleProducts.forEach(product => {

    saleContainer.innerHTML += `


    

<div class="col-lg-2 col-md-4 col-6">

<div class="sale-card">

<div class="sale-image">

<span class="discount">
${product.discount}
</span>

<div class="sale-heart" onclick="toggleWishlist(${product.id})">

<i class="fa ${wishlist.find(item => item.id === product.id)
            ? 'fa-heart'
            : 'fa-heart-o'
        }"></i>

</div>



<a href="product-details.html?id=${product.id}">

<img src="${product.image}" class="img-fluid">

</a>

</div>

<div class="sale-content">


<button
class="sale-cart-btn"

onclick="addToCart(${product.id})">

<i class="fa fa-shopping-cart"></i>

Add To Cart

</button>

<h5>

${product.name}

</h5>

<div class="price">

<span class="new-price">

₹${product.price}

</span>

<span class="old-price">

₹${product.oldPrice}

</span>

</div>

<div class="color-dots">

${product.colors.map(color => `

<span class="dot ${color}"></span>

`).join("")}

</div>

</div>

</div>

</div>

`;

});


function toggleWishlist(id) {

    const product =
        saleProducts.find(item => item.id === id);

    const exist =
        wishlist.find(item => item.id === id);

    if (exist) {

        wishlist =
            wishlist.filter(item => item.id !== id);

    }

    else {

        wishlist.push(product);

    }

    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );

    location.reload();

}

function addToCart(id) {

    const product =
        saleProducts.find(item => item.id === id);

    const exist =
        cart.find(item => item.id === id);

    if (exist) {

        exist.quantity++;

    }

    else {

        cart.push({

            ...product,

            quantity: 1

        });

    }

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    alert(product.name + " Added To Cart");

}