const $dropdowns = document.querySelectorAll(".dropdown");
$dropdowns.forEach(($dropdown) => {
    const $btn = $dropdown.querySelector(".dropdown__btn");
    $btn.addEventListener("click", (e) => dropdownHandler($dropdown, $btn, e));

    const $closeBtns = $dropdown.querySelectorAll(".js-close-dropdown");
    $closeBtns.forEach(($closeBtn) => {
        $closeBtn.addEventListener("click", () => {
            $dropdown.classList.remove("dropdown--active");
            $btn.classList.remove("dropdown__btn--active");
        });
    });
});

window.addEventListener("click", (e) => {
    const $activeDropdown = document.querySelector(".dropdown--active");
    const isInner = e.target.closest(".dropdown") && !e.target.classList.contains("dropdown");
    if (!$activeDropdown || isInner) {
        return;
    }

    $activeDropdown.classList.remove("dropdown--active");

    const $activeBtn = $activeDropdown.querySelector(".dropdown__btn");
    $activeBtn.classList.remove("dropdown__btn--active");
});

function dropdownHandler($dropdown, $btn, e) {
    e.stopPropagation();

    const isActive = $dropdown.classList.contains("dropdown--active");

    document.querySelectorAll(".dropdown--active").forEach(($activeDropdown) => {
        $activeDropdown.classList.remove("dropdown--active");
        const $activeBtn = $activeDropdown.querySelector(".dropdown__btn");
        $activeBtn.classList.remove("dropdown__btn--active");
    });

    if (!isActive) {
        $dropdown.classList.add("dropdown--active");
        $btn.classList.add("dropdown__btn--active");
    }
}
