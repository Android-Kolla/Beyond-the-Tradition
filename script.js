// Wait for the page to load
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

// Smooth navigation
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.href;
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = href;
        }, 1000); // Match the transition duration
    });
});



    // Optional hover sound effect
    const links = document.querySelectorAll(".social-link");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            const audio = new Audio("hover-sound.mp3");
            audio.play();
        });
    });

