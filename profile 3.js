document.querySelectorAll(".sidebar nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById(this.getAttribute("href").substring(1)).scrollIntoView({ behavior: "smooth" });
    });
});
