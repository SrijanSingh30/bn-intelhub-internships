const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    const user =
        users.find(item =>
            item.email === email &&
            item.password === password
        );

    if (!user) {

        alert("Invalid Email or Password");

        return;

    }

    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
    );

    alert("Login Successful");

    window.location.href = "index.html";

});