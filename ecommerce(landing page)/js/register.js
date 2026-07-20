const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    if (firstName === "") {
        alert("Enter First Name");
        return;
    }

    if (lastName === "") {
        alert("Enter Last Name");
        return;
    }

    if (email === "") {
        alert("Enter Email");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        alert("Invalid Email");
        return;
    }

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone)) {
        alert("Enter a valid Indian mobile number.");
        document.getElementById("phone").focus();
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (!terms) {
        alert("Please accept Terms & Conditions");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find(user => user.email === email);

    if (alreadyExists) {
        alert("Email already registered");
        return;
    }

    users.push({
        firstName,
        lastName,
        email,
        phone,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "login.html";

});


const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

}); 