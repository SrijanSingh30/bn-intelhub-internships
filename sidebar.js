// Collapse Filters

const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn => {

    btn.onclick = function () {

        const box = this.parentElement.nextElementSibling;

        box.classList.toggle("d-none");

    }

});

