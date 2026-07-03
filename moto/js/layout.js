document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    if (!body) return;

    const sharedHeader = `
        <div class="top-header fixed-top">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-4 d-flex left-info">
                        <a href="tel:+919876543210"><i class="fa fa-phone"></i> +91 9876543210</a>
                        <a href="mailto:support@ridexgarage.com"><i class="fa fa-envelope"></i> support@ridexgarage.com</a>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center shipping-text">
                        Free Shipping on orders above ₹999
                    </div>
                    <div class="col-lg-4 col-md-4 text-right right-info">
                        <a href="shop.html#products"><i class="fa fa-map-marker"></i> Track Order</a>
                        <a href="login.html"><i class="fa fa-user"></i> Login </a>
                        <a href="register.html"><i class="fa fa-user"></i>Register</a>
                    </div>
                </div>
            </div>
        </div>`;

    const sharedNavbar = `
        <nav class="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="images/logo.png" alt="Moto Hub Logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMenu">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">ABOUT US</a></li>
                        <li class="nav-item"><a class="nav-link" href="shop.html">SHOP</a></li>
                        <li class="nav-item"><a class="nav-link" href="parts.html">PARTS</a></li>
                        <li class="nav-item"><a class="nav-link" href="accessories.html">ACCESSORIES</a></li>
                        <li class="nav-item"><a class="nav-link" href="brands.html">BRANDS</a></li>
                        <li class="nav-item"><a class="nav-link" href="garage.html">GARAGE</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">CONTACT</a></li>
                    </ul>
                    <div class="header-icons">
                        <a href="shop.html#products">
                            <i class="fa fa-search"></i>
                        </a>
                        <a href="shop.html#products" class="icon-box">
                            <i class="fa fa-heart-o"></i>
                            <span class="badge-count">0</span>
                        </a>
                        <a href="cart.html" class="icon-box">
                            <i class="fa fa-shopping-bag"></i>
                            <span class="badge-count" id="cartCount">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>`;

    const sharedFooter = `
        <footer class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <img src="images/logo.png" class="footer-logo" alt="Moto Hub logo">
                        <p class="footer-text">Premium Bike Parts & Accessories For Every Rider.</p>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4">
                        <h5>QUICK LINKS</h5>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop.html#products">Parts</a></li>
                            <li><a href="index.html#brands">Categories</a></li>
                            <li><a href="mailto:support@ridexgarage.com">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4">
                        <h5>CATEGORIES</h5>
                        <ul>
                            <li><a href="shop.html#products">Engine Parts</a></li>
                            <li><a href="shop.html#products">Brakes</a></li>
                            <li><a href="shop.html#products">Tyres</a></li>
                            <li><a href="shop.html#products">Chains</a></li>
                            <li><a href="shop.html#products">Helmets</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4">
                        <h5>CUSTOMER SERVICE</h5>
                        <ul>
                            <li><a href="shop.html#products">Track Order</a></li>
                            <li><a href="shop.html#products">Returns</a></li>
                            <li><a href="shop.html#products">Privacy Policy</a></li>
                            <li><a href="shop.html#products">Terms & Conditions</a></li>
                            <li><a href="shop.html#products">FAQs</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <h5>CONTACT</h5>
                        <ul class="contact-info">
                            <li><i class="fa fa-map-marker"></i> Ranchi, Jharkhand</li>
                            <li><i class="fa fa-phone"></i> +91 9876543210</li>
                            <li><i class="fa fa-envelope"></i> support@ridexgarage.com</li>
                            <li><i class="fa fa-clock-o"></i> Mon - Sat : 9:00 AM - 8:00 PM</li>
                        </ul>
                        <h6 class="payment-title">PAYMENT METHODS</h6>
                        <img src="images/visacard.jpeg" class="payment-img" alt="Payment methods">
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="row align-items-center">
                        <div class="col-md-6">© 2025 RIDEX GARAGE. ALL RIGHTS RESERVED.</div>
                        <div class="col-md-6 text-md-right"><a href="shop.html#products">Privacy Policy</a> | <a href="shop.html#products">Terms & Conditions</a></div>
                    </div>
                </div>
            </div>
            <a href="#top" class="scroll-top">
                <i class="fa fa-angle-up"></i>
            </a>
        </footer>`;

    const existingHeader = body.querySelector('.top-header');
    const existingNav = body.querySelector('.navbar');
    const existingFooter = body.querySelector('footer.footer-section');

    if (existingHeader) existingHeader.remove();
    if (existingNav) existingNav.remove();
    if (existingFooter) existingFooter.remove();
    const scrollTop = body.querySelector('.scroll-top');
    if (scrollTop) scrollTop.remove();

    body.insertAdjacentHTML('afterbegin', sharedHeader + sharedNavbar);
    body.insertAdjacentHTML('beforeend', sharedFooter);
    // inject shared header-icons stylesheet to ensure consistent icon styling
    const linkId = 'shared-header-icons-stylesheet';
    if (!document.getElementById(linkId)){
        const link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        link.href = 'css/header-icons.css';
        document.head.appendChild(link);
    }
});
