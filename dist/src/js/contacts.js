const $locations = document.querySelector(".locations");
if ($locations) {
    const $moreBtn = $locations.querySelector(".locations__more");
    $moreBtn.addEventListener("click", () => $locations.classList.add("locations--active"));
}
