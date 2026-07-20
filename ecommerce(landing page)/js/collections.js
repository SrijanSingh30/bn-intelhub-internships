/* ==========================
   SHOP BY COLLECTION
========================== */

const collectionCards = document.querySelectorAll(".collection-card");

// Card Click
collectionCards.forEach((card, index) => {

    card.addEventListener("click", function (e) {

        // Heart button par click hua to page open na ho
        if (e.target.closest(".wishlist-btn")) return;

        switch (index) {

            case 0:
                window.location.href = "collection-products.html?collection=linen";
                break;

            case 1:
                window.location.href = "collection-products.html?collection=denim";
                break;

            case 2:
                window.location.href = "collection-products.html?collection=athleisure";
                break;

            case 3:
                window.location.href = "collection-products.html?collection=monochrome";
                break;

            case 4:
                window.location.href = "collection-products.html?collection=printed";
                break;

        }

    });

});


/* ==========================
   WISHLIST
========================== */

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach((button) => {

    button.addEventListener("click", function (e) {

        e.stopPropagation();

        const icon = this.querySelector("i");

        if (icon.classList.contains("fa-heart-o")) {

            icon.classList.remove("fa-heart-o");
            icon.classList.add("fa-heart");

            this.style.background = "#6d712c";
            this.style.color = "#fff";

        } else {

            icon.classList.remove("fa-heart");
            icon.classList.add("fa-heart-o");

            this.style.background = "#fff";
            this.style.color = "#666";

        }

    });

});


/* ==========================
   CARD HOVER EFFECT
========================== */

collectionCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});



/*=====================================
        FEATURED COLLECTION
======================================*/

const featuredCards =
    document.querySelectorAll(".featured-card");

featuredCards.forEach((card, index) => {

    card.addEventListener("click", function (e) {

        if (e.target.closest("a")) return;

        switch (index) {

            case 0:
                window.location.href = "collection-products.html?collection=linen";
                break;

            case 1:
                window.location.href = "collection-products.html?collection=denim";
                break;

            case 2:
                window.location.href = "collection-products.html?collection=athleisure";
                break;

            case 3:
                window.location.href = "collection-products.html?collection=monochrome";
                break;

            case 4:
                window.location.href = "collection-products.html?collection=printed";
                break;

            case 5:
                window.location.href = "collection-products.html?collection=winter";
                break;

        }

    });

});


/*=====================================
        SHOP NOW BUTTON
======================================*/

const shopButtons =
    document.querySelectorAll(".featured-content a");

shopButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.paddingLeft = "8px";

    });

    button.addEventListener("mouseleave", () => {

        button.style.paddingLeft = "0px";

    });

});


/*=====================================
        IMAGE HOVER
======================================*/

featuredCards.forEach(card => {

    const image =
        card.querySelector("img");

    card.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    card.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});


/*=====================================
      FADE ANIMATION
======================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-card");

        }

    });

}, {
    threshold: .2
});

featuredCards.forEach(card => {

    observer.observe(card);

});
/*====================================
        NEWSLETTER
====================================*/

const newsletterForm =
    document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            document.getElementById("newsletterEmail")
                .value
                .trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            alert("Please enter your email.");

            return;

        }

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        let subscribers =
            JSON.parse(localStorage.getItem("subscribers")) || [];

        const alreadyExists =
            subscribers.find(item => item.email === email);

        if (alreadyExists) {

            alert("This email is already subscribed.");

            return;

        }

        subscribers.push({

            email: email,

            date: new Date().toLocaleDateString()

        });

        localStorage.setItem(

            "subscribers",

            JSON.stringify(subscribers)

        );

        alert("🎉 Thank you for subscribing!");

        newsletterForm.reset();

    });

}