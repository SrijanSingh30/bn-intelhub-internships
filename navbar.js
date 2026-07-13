//============================
// NAVBAR COUNTS
//============================



//----------------------------
// Update Cart Count
//----------------------------

function updateNavbarCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCount = document.querySelector(".cart span");

    if (cartCount) {

        let total = 0;

        cart.forEach(item => {

            total += item.quantity || 1;

        });

        cartCount.innerHTML = total;

    }

}


//----------------------------
// Update Wishlist Count
//----------------------------

function updateNavbarWishlist() {

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const wishCount = document.querySelector(".wishlist-icon span");

    if (wishCount) {

        wishCount.innerHTML = wishlist.length;

    }

}

//----------------------------
// Load
//----------------------------

updateNavbarCart();

updateNavbarWishlist();