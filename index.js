document.querySelectorAll("img")
.forEach(img => {
    VanillaTilt.init(img, {
        max: 15,
        reverse: true,
        easing: "ease-in-out",
        "full-page-listening": true,
    });
});

document.querySelectorAll("h1, p")
.forEach(text => {
    VanillaTilt.init(text, {
        max: 25,
        easing: "ease-in-out",
        "full-page-listening": true,
    });
});