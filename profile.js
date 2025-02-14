document.getElementById("toggle-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById(this.getAttribute("href").substring(1)).scrollIntoView({ behavior: "smooth" });
    });
});
