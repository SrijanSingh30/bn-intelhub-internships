const params = new URLSearchParams(window.location.search);

const collection = params.get("collection");

const collectionData = {

    linen: {
        title: "Linen Collection",
        description: "Premium Linen Collection For Every Season"
    },

    denim: {
        title: "Denim Collection",
        description: "Classic Denim Styles"
    },

    athleisure: {
        title: "Athleisure Collection",
        description: "Comfort Meets Style"
    },

    monochrome: {
        title: "Monochrome Collection",
        description: "Minimal Fashion"
    },

    printed: {
        title: "Printed Collection",
        description: "Bold Printed Designs"
    },

    winter: {
        title: "Winter Collection",
        description: "Stay Warm In Style"
    }

};



const currentCollection = collectionData[collection];

if (!currentCollection) {

    window.location.href = "collections.html";

}

document.getElementById("collectionTitle").textContent =
    currentCollection.title;

document.getElementById("collectionDescription").textContent =
    currentCollection.description;

document.querySelector(".collection-banner").style.backgroundImage =
    `url(${currentCollection.banner})`;



/*=========================================
            PRODUCT DATABASE
==========================================*/

const allProducts = [

    // ================= LINEN =================
    {
        id: 37,
        collection: "linen",
        name: "Premium Linen Shirt",
        price: 1499,
        oldPrice: 1999,
        image: "images/products/linen/l1.png"
    },

    {
        id: 38,
        collection: "linen",
        name: "Slim Fit Linen Pant",
        price: 1799,
        oldPrice: 2299,
        image: "images/products/linen/l2.png"
    },

    {
        id: 39,
        collection: "linen",
        name: "Linen Casual Shirt",
        price: 1599,
        oldPrice: 2099,
        image: "images/products/linen/l3.png"
    },



    // ================= DENIM =================

    {
        id: 40,
        collection: "denim",
        name: "Blue Denim Jacket",
        price: 2499,
        oldPrice: 2999,
        image: "images/products/denim/d1.png"
    },

    {
        id: 41,
        collection: "denim",
        name: "Regular Denim Jeans",
        price: 1899,
        oldPrice: 2399,
        image: "images/products/denim/d2.png"
    },

    {
        id: 42,
        collection: "denim",
        name: "Denim Shirt",
        price: 1699,
        oldPrice: 2199,
        image: "images/products/denim/d3.png"
    },



    // ================= ATHLEISURE =================

    {
        id: 43,
        collection: "athleisure",
        name: "Gym T-Shirt",
        price: 999,
        oldPrice: 1499,
        image: "images/products/athleisure/a1.png"
    },

    {
        id: 44,
        collection: "athleisure",
        name: "Joggers",
        price: 1499,
        oldPrice: 1899,
        image: "images/products/athleisure/a2.png"
    },

    {
        id: 45,
        collection: "athleisure",
        name: "Sports Hoodie",
        price: 2299,
        oldPrice: 2799,
        image: "images/products/athleisure/a3.png"
    },



    // ================= MONOCHROME =================

    {
        id: 46,
        collection: "monochrome",
        name: "Black Shirt",
        price: 1499,
        oldPrice: 1899,
        image: "images/products/monochrome/m1.png"
    },

    {
        id: 47,
        collection: "monochrome",
        name: "White Shirt",
        price: 1499,
        oldPrice: 1899,
        image: "images/products/monochrome/m2.png"
    },

    {
        id: 48,
        collection: "monochrome",
        name: "Grey Trouser",
        price: 1699,
        oldPrice: 2199,
        image: "images/products/monochrome/m3.png"
    },



    // ================= PRINTED =================

    {
        id: 49,
        collection: "printed",
        name: "Printed Shirt",
        price: 1399,
        oldPrice: 1799,
        image: "images/products/printed/p1.png"
    },

    {
        id: 50,
        collection: "printed",
        name: "Graphic Tee",
        price: 899,
        oldPrice: 1199,
        image: "images/products/printed/p2.png"
    },

    {
        id: 51,
        collection: "printed",
        name: "Printed Kurta",
        price: 1799,
        oldPrice: 2399,
        image: "images/products/printed/p3.png"
    },



    // ================= WINTER =================

    {
        id: 52,
        collection: "winter",
        name: "Winter Hoodie",
        price: 2499,
        oldPrice: 2999,
        image: "images/products/winter/w1.png"
    },

    {
        id: 53,
        collection: "winter",
        name: "Puffer Jacket",
        price: 3499,
        oldPrice: 4199,
        image: "images/products/winter/w2.png"
    },

    {
        id: 54,
        collection: "winter",
        name: "Wool Sweater",
        price: 2199,
        oldPrice: 2699,
        image: "images/products/winter/w3.png"
    }
];

const filteredProducts = allProducts.filter(product => {

    return product.collection === collection;

});

document.getElementById("totalProducts").innerHTML =
    `${filteredProducts.length} Products`;


const productContainer =
    document.getElementById("productContainer");

function displayProducts(products) {

    productContainer.innerHTML = "";

    products.forEach(product => {

        productContainer.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="collection-card">

                <div class="card-image">

                    <img
    src="${product.image}"
    class="img-fluid"
    onerror="this.src='images/no-image.png'">


    <button class="wishlist-btn">
    <i class="fa fa-heart-o"></i>
</button>

                </div>

                <div class="card-content">

                    <h5>${product.name}</h5>

                  <div class="rating">
    ⭐⭐⭐⭐⭐
    <span>(4.8)</span>
</div>

<div class="price">

    <span class="new-price">
        ₹${product.price}
    </span>

    <span class="old-price">
        ₹${product.oldPrice}
    </span>

</div>

<div class="card-buttons">

    <button class="cart-btn">
        Add To Cart
    </button>

    <a href="product-details.html?id=${product.id}"
       class="details-btn">
        View Details
    </a>

</div>

                </div>

            </div>

        </div>

        `;

    });

}



displayProducts(filteredProducts);