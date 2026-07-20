//============================
// NAVBAR COUNTS & USER STATE
//============================

function updateNavbarCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.querySelector(".cart span");

    if (cartCount) {
        const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCount.innerHTML = total;
    }
}

function updateNavbarWishlist() {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishCount = document.querySelector(".wishlist-icon span");

    if (wishCount) {
        wishCount.innerHTML = wishlist.length;
    }
}

function renderUserSection() {
    const userSection = document.getElementById("userSection");

    if (!userSection) {
        return;
    }

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        userSection.innerHTML = `
            <span class="user-name">Hi, ${loggedInUser.firstName}</span>
            <a href="#" id="logoutBtn">Logout</a>
        `;

        const logoutBtn = document.getElementById("logoutBtn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", function (e) {
                e.preventDefault();
                localStorage.removeItem("loggedInUser");
                window.location.href = "index.html";
                updateNavbarCart();
                updateNavbarWishlist();
            });
        }
    } else {
        userSection.innerHTML = `
            <a href="login.html">Login</a>
            |
            <a href="register.html">Register</a>
        `;
    }
}

function initNavbar() {
    updateNavbarCart();
    updateNavbarWishlist();
    renderUserSection();

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                const keyword = this.value.trim();

                if (keyword !== "") {
                    window.location.href = "new-arrivals.html?q=" + encodeURIComponent(keyword);
                }
            }
        });
    }
}

initNavbar();

window.addEventListener("storage", function () {
    updateNavbarCart();
    updateNavbarWishlist();
    renderUserSection();
});