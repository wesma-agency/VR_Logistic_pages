const $anchors = document.querySelectorAll('a[href*="#"]');
$anchors.forEach(($anchor) => {
    $anchor.addEventListener("click", (e) => {
        const id = $anchor.getAttribute("href");
        if (id[0] === "#") {
            e.preventDefault();
        }

        if (id === "#") {
            return;
        }

        const $elem = document.querySelector(id);
        if ($elem) {
            const header = document.querySelector('.header');
            const offsetTop = $elem.getBoundingClientRect().top - header.offsetHeight;
            window.scrollBy({ top: offsetTop, left: 0, behavior: "smooth" });
        }
    });
});
