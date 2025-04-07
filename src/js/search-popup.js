const $popup = document.querySelector(".header__search-popup");
if ($popup) {
    const $input = document.querySelector(".header__input-search");
    $input.addEventListener("click", () => {
        $popup.classList.add("header__search-popup--active");
    });

    const $items = $popup.querySelectorAll(".search-popup__item");
    $items.forEach(($item) => {
        /* Кнопки для заполнения поля поиска */
        const $btn = $item.querySelector(".search-popup__btn");
        $btn.addEventListener("click", () => {
            const text = $btn.querySelector(".search-popup__btn-text")?.innerText;
            if (text) {
                $input.value = text;
                $popup.classList.remove("header__search-popup--active");
            }
        });

        /* Кнопка для удаления элемента из истории поиска */
        const $btnClear = $btn.querySelector(".search-popup__btn-clear");
        $btnClear?.addEventListener("click", (e) => {
            e.stopPropagation();
            const $section = $btn.closest(".search-popup__section");

            $item.remove();

            const itemsCount = $section.querySelectorAll(".search-popup__item").length;
            if (itemsCount === 0) {
                $section.remove();
            }
        });
    });

    /* Кнопки "Очистить" историю поиска */
    const $btnsSectionClear = $popup.querySelectorAll(".search-popup__section-clear");
    $btnsSectionClear.forEach(($btn) => {
        $btn.addEventListener("click", (e) => {
            e.stopPropagation();

            const $section = $btn.closest(".search-popup__section");
            $section.remove();
        });
    });

    /* Клик вне области окна */
    window.addEventListener("click", (e) => {
        const isInner = e.target.closest(".header__search-popup");
        if (!$popup.classList.contains("header__search-popup--active") || isInner || e.target.closest(".header__input-search")) {
            return;
        }

        $popup.classList.remove("header__search-popup--active");
    });
}
