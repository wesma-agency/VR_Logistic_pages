const $textareas = document.querySelectorAll(".input__field--area");
$textareas.forEach(($textarea) => {
    if ($textarea.dataset.noResize !== undefined) return;

    textareaSizeHandler($textarea);
    $textarea.addEventListener("input", () => textareaSizeHandler($textarea));
    window.addEventListener("resize", () => textareaSizeHandler($textarea));
});

function textareaSizeHandler($textarea) {
    if ($textarea.dataset.resizeMobile !== undefined && window.innerWidth > 767) {
        $textarea.style.height = "";
        return;
    }

    const minHeight = $textarea.dataset.minHeight ? +$textarea.dataset.minHeight : 80;
    $textarea.style.height = `${minHeight}px`;

    const height = Math.min(Math.max(minHeight, $textarea.scrollHeight), 500);
    $textarea.style.height = `${height}px`;
}
