// ===============================
// Product Page JavaScript
// ===============================

// Main Image
const mainImage = document.getElementById("mainImage");

// Thumbnails
const thumbnails = document.querySelectorAll(".thumb");

// Color Buttons
const colorButtons = document.querySelectorAll(".color");

// Quantity Elements
const quantityInput = document.getElementById("qty");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

// ===============================
// Thumbnail Image Change
// ===============================

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {

        // Remove active class from previous thumbnail
        document
            .querySelector(".thumb.active")
            .classList.remove("active");

        // Add active class to clicked thumbnail
        this.classList.add("active");

        // Change Main Image
        mainImage.src = this.src.replace("80x80", "500x400");
    });
});

// ===============================
// Increase Quantity
// ===============================

plusBtn.addEventListener("click", function () {

    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;

});

// ===============================
// Decrease Quantity
// ===============================

minusBtn.addEventListener("click", function () {

    let quantity = parseInt(quantityInput.value);

    if (quantity > 1) {
        quantityInput.value = quantity - 1;
    }

});

// ===============================
// Color Selection
// ===============================

function updateProductImageForColor(colorName) {
    const selectedColor = (colorName || "").toLowerCase();
    const thumbnailImages = Array.from(document.querySelectorAll(".thumb"));

    if (!mainImage || !thumbnailImages.length) return;

    let targetIndex = 0;
    if (selectedColor.includes("silver") && thumbnailImages[1]) {
        targetIndex = 1;
    } else if (selectedColor.includes("titanium") && thumbnailImages[2]) {
        targetIndex = 2;
    }

    const targetThumb = thumbnailImages[targetIndex] || thumbnailImages[0];

    thumbnailImages.forEach((thumb, index) => {
        thumb.classList.toggle("active", index === targetIndex);
    });

    mainImage.src = targetThumb.src.includes("80x80")
        ? targetThumb.src.replace("80x80", "500x400")
        : targetThumb.src;
}

if (colorButtons.length) {
    colorButtons.forEach((button) => {
        button.addEventListener("click", function () {
            colorButtons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
            updateProductImageForColor(this.innerText.trim());
        });
    });

    const activeColorButton = document.querySelector(".color.active");
    if (activeColorButton) {
        updateProductImageForColor(activeColorButton.innerText.trim());
    }
}

// ===============================
// Add to Cart
// ===============================

const cartStorageKey = "motoCart";

function getCartItems() {
    return JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
}

function saveCartItems(items) {
    localStorage.setItem(cartStorageKey, JSON.stringify(items));
}

function updateCartBadge() {
    const count = getCartItems().reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.querySelectorAll(".badge-count, [data-cart-count]").forEach((badge) => {
        badge.textContent = count;
    });
}

function parseProductPrice(priceText) {
    const match = priceText.match(/₹\s*([0-9,]+)/);
    if (!match) return 0;
    return Number(match[1].replace(/,/g, '')) || 0;
}

function getProductDetails() {
    const nameEl = document.querySelector("h2");
    const priceEl = document.querySelector("h3");
    const imageEl = document.querySelector(".product-box img");
    const selectedColor = document.querySelector(".color.active");

    if (!nameEl || !priceEl || !imageEl) {
        return null;
    }

    const name = nameEl.innerText.trim();
    const price = parseProductPrice(priceEl.innerText);
    const quantity = parseInt(quantityInput.value, 10) || 1;
    const color = selectedColor ? selectedColor.innerText.trim() : "";

    return {
        id: name.replace(/\s+/g, "-").toLowerCase(),
        name,
        price,
        image: imageEl.src,
        color,
        quantity,
    };
}

function addProductToCart(product) {
    const cart = getCartItems();
    const existingItem = cart.find((item) => item.id === product.id && item.color === product.color);

    if (existingItem) {
        existingItem.quantity += product.quantity;
    } else {
        cart.push(product);
    }

    saveCartItems(cart);
    updateCartBadge();
}

const addToCartButton = document.querySelector(".add-to-cart");
const buyNowButton = document.querySelector(".buy-now");

if (addToCartButton && document.querySelector(".product-box img")) {
    addToCartButton.addEventListener("click", (event) => {
        event.preventDefault();
        const product = getProductDetails();
        if (!product) return;
        addProductToCart(product);
        const originalText = addToCartButton.innerText;
        addToCartButton.innerText = "Added To Cart";
        setTimeout(() => {
            addToCartButton.innerText = originalText;
        }, 1400);
    });
}

if (buyNowButton && document.querySelector(".product-box img")) {
    buyNowButton.addEventListener("click", (event) => {
        event.preventDefault();
        const product = getProductDetails();
        if (!product) return;
        addProductToCart(product);
        window.location.href = "cart.html";
    });
}

updateCartBadge();

// ===========================
// Swiper Slider
// ===========================

const relatedSlider = new Swiper(".relatedSlider", {

    // Infinite Loop
    loop: true,

    // Space Between Cards
    spaceBetween: 20,

    // Cursor
    grabCursor: true,

    // Speed
    speed: 800,

    // Autoplay
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // Navigation Arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Responsive Breakpoints
    breakpoints: {

        // Mobile
        0: {
            slidesPerView: 1,
        },

        // Small Tablet
        576: {
            slidesPerView: 2,
        },

        // Tablet
        768: {
            slidesPerView: 3,
        },

        // Laptop
        992: {
            slidesPerView: 4,
        },

        // Desktop
        1200: {
            slidesPerView: 5,
        }

    }

});


// ===========================
// Pause Slider on Hover
// ===========================

const slider = document.querySelector(".relatedSlider");

slider.addEventListener("mouseenter", () => {
    relatedSlider.autoplay.stop();
});

slider.addEventListener("mouseleave", () => {
    relatedSlider.autoplay.start();
});
const box = document.querySelector(".service-box");

document.querySelector(".next").onclick = () => {

    box.scrollBy({

        left: 260,

        behavior: "smooth"

    });

}

document.querySelector(".prev").onclick = () => {

    box.scrollBy({

        left: -260,

        behavior: "smooth"

    });

}