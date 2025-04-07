const $toggleItemsCheckboxes = document.querySelectorAll(".js-toggle-checkbox");
$toggleItemsCheckboxes.forEach(($checkbox) => {
    const name = $checkbox.dataset.toggleName;

    $checkbox.addEventListener("change", () => {
        const $items = document.querySelectorAll(`.js-toggle-item[data-toggle-name="${name}"]`);

        if ($checkbox.checked) {
            $items.forEach(($item) => $item.classList.add("js-toggle-item-active"));
        } else {
            $items.forEach(($item) => $item.classList.remove("js-toggle-item-active"));
        }
    });
});

const $switchItemCheckboxes = document.querySelectorAll(".js-switch-checkbox");
$switchItemCheckboxes.forEach(($checkbox, index) => {
    const name = $checkbox.dataset.switchName;

    $checkbox.addEventListener("change", () => {
        const $items = document.querySelectorAll(`.js-switch-item[data-switch-name="${name}"]`);

        $items.forEach(($item) => $item.classList.remove("js-switch-item-active"));

        if ($checkbox.checked) {
            $items[index]?.classList.add("js-switch-item-active");
        }
    });
});
