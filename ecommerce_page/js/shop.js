const container = document.getElementById("productContainer");


//============================
// PAGE TYPE
//============================

const pageName = window.location.pathname
    .split("/")
    .pop();

const currentGender =
    pageName === "women.html"
        ? "Women"
        : "Men";


let cart = JSON.parse(localStorage.getItem("cart")) || [];

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function displayProducts(data) {

    container.innerHTML = "";

    const start = (currentPage - 1) * productsPerPage;

    const end = start + productsPerPage;

    const pageProducts = data.slice(start, end);

    pageProducts.forEach(product => {

        container.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="product-card">

<div class="product-image">

<a href="product-details.html?id=${product.id}">

<img src="${product.image}" class="img-fluid">

</a>

<button class="wishlist" onclick="addToWishlist(${product.id})">

    <i class="${wishlist.find(item => item.id === product.id)
                ? 'fa fa-heart'
                : 'fa fa-heart-o'
            }"></i>

</button>

</div>

<div class="product-info">

<h5>

<a href="product-details.html?id=${product.id}" class="product-link">

${product.name}

</a>

</h5>

<div class="rating">

★★★★★

<span>${product.rating}</span>

</div>

<h4>₹${product.price}</h4>

<button class="add-cart" onclick="addToCart(${product.id})">

    <i class="fa fa-shopping-cart"></i>

    Add To Cart

</button>

</div>

</div>

</div>

`;

    });

}



//============================
// FILTER STATE
//============================

let selectedCategory = "All";

let selectedPrice = 2999;

let selectedBrands = [];

let selectedColors = [];

let selectedSizes = [];

let sortValue = "Latest";

let currentPage = 1;

const productsPerPage = 6;

//============================
// APPLY ALL FILTERS
//============================

function applyFilters() {

    let filtered = [...products];
    // Gender Filter

    filtered = filtered.filter(product =>
        product.gender === currentGender
    );


    // Category

    if (selectedCategory != "All") {

        filtered = filtered.filter(product =>
            product.category === selectedCategory);

    }


    // Price

    filtered = filtered.filter(product =>
        product.price <= selectedPrice);


    // Brand

    if (selectedBrands.length > 0) {

        filtered = filtered.filter(product =>
            selectedBrands.includes(product.brand));

    }


    // Color

    if (selectedColors.length > 0) {

        filtered = filtered.filter(product =>
            selectedColors.includes(product.color));

    }


    // Size

    if (selectedSizes.length > 0) {

        filtered = filtered.filter(product =>

            product.size.some(size => selectedSizes.includes(size))

        );

    }


    //============================
    // SORTING
    //============================

    switch (sortValue) {

        case "Latest":

            filtered.sort((a, b) => b.id - a.id);

            break;

        case "Price Low To High":

            filtered.sort((a, b) => a.price - b.price);

            break;

        case "Price High To Low":

            filtered.sort((a, b) => b.price - a.price);

            break;

        case "Popularity":

            filtered.sort((a, b) => b.rating - a.rating);

            break;

    }

    // Show
    displayProducts(filtered);

    createPagination(filtered);

    document.getElementById("totalProducts").innerHTML =
        filtered.length;
}

// Category Filter

const categoryItems = document.querySelectorAll(".category-list li");

categoryItems.forEach(item => {

    item.addEventListener("click", function () {

        categoryItems.forEach(li => li.classList.remove("active"));

        this.classList.add("active");

        selectedCategory = this.dataset.category;

        applyFilters();

    });

});
//==============================
// PRICE FILTER
//==============================

const priceRange = document.getElementById("priceRange");

const priceValue = document.getElementById("priceValue");

priceRange.addEventListener("input", function () {

    selectedPrice = parseInt(this.value);

    priceValue.innerHTML = "₹" + selectedPrice;

    applyFilters();

});
//==============================
// BRAND FILTER
//==============================

const brandCheckboxes = document.querySelectorAll(

    '.check-list input[type="checkbox"]'

);

brandCheckboxes.forEach(box => {

    box.addEventListener("change", () => {

        selectedBrands = [];

        brandCheckboxes.forEach(item => {

            if (item.checked) {

                selectedBrands.push(item.value);

            }

        });

        applyFilters();

    });

});

//============================
// COLOR FILTER
//============================

const colorButtons = document.querySelectorAll(".color");

colorButtons.forEach(button => {

    button.addEventListener("click", function () {

        const color = this.dataset.color;

        // Toggle active class
        this.classList.toggle("active");

        // Clear previous selection
        selectedColors = [];

        // Collect active colors
        document.querySelectorAll(".color.active").forEach(item => {

            selectedColors.push(item.dataset.color);

        });

        applyFilters();

    });

});


//============================
// SIZE FILTER
//============================

const sizeCheckboxes = document.querySelectorAll(

    '.filter-box:nth-child(3) input[type="checkbox"]'

);

sizeCheckboxes.forEach(box => {

    box.addEventListener("change", () => {

        selectedSizes = [];

        sizeCheckboxes.forEach(item => {

            if (item.checked) {

                selectedSizes.push(item.value);

            }

        });

        applyFilters();

    });

});

//============================
// SORT PRODUCTS
//============================

const sortSelect = document.getElementById("sort");

sortSelect.addEventListener("change", function () {

    sortValue = this.value;

    applyFilters();

});
applyFilters();

//============================
// CART
//============================



updateCartCount();
updateWishlistCount();

function addToCart(id) {

    const product = products.find(item => item.id === id);

    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " Added To Cart");

}

function updateCartCount() {

    const cartCount = document.querySelector(".cart span");

    if (cartCount) {

        let totalItems = 0;

        cart.forEach(item => {

            totalItems += item.quantity;

        });

        cartCount.innerHTML = totalItems;

    }

}

//============================
// WISHLIST
//============================
function updateWishlistCount() {

    const wishlistCount = document.querySelector(".wishlist-icon span");

    if (wishlistCount) {

        wishlistCount.innerHTML = wishlist.length;

    }

}


function addToWishlist(id) {

    const product = products.find(item => item.id === id);

    const exist = wishlist.find(item => item.id === id);

    if (exist) {

        wishlist = wishlist.filter(item => item.id !== id);

    } else {

        wishlist.push(product);

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();

    applyFilters();

}
//============================
// GRID / LIST VIEW
//============================

const productContainer = document.getElementById("productContainer");

const gridBtn = document.getElementById("gridView");

const listBtn = document.getElementById("listView");

gridBtn.onclick = function () {

    productContainer.classList.remove("list-view");

}

listBtn.onclick = function () {

    productContainer.classList.add("list-view");

}

//============================
// PAGINATION
//============================

function createPagination(data) {

    const pagination = document.getElementById("pagination");

    pagination.innerHTML = "";

    const totalPages = Math.ceil(data.length / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {

        pagination.innerHTML += `

<button
class="page-btn ${i == currentPage ? 'active' : ''}"
onclick="changePage(${i})">

${i}

</button>

`;

    }

}

function changePage(page) {

    currentPage = page;

    applyFilters();

}

