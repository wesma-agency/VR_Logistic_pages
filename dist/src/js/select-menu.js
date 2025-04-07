const selectMenuOptions = document.querySelectorAll(".select-menu__option");
selectMenuOptions.forEach((option) => {
    const selectMenu = option.closest('.select-menu');
    const btn = selectMenu.querySelector('.select-menu__btn');
    const btnValue = btn.querySelector('.select-menu__btn-value');
    const btnValueAddition = btn.querySelector('.select-menu__btn-value-addition');

    option.addEventListener('click', () => {
        btnValue.innerText = option.dataset.optionValue || '';
        if (btnValueAddition) {
            btnValueAddition.innerText = option.dataset.optionValueAddition || '';
        }

        selectMenu.classList.remove('dropdown--active');
        btn.classList.remove('dropdown__btn--active');

        selectMenu.querySelector('.select-menu__option--active')?.classList.remove('select-menu__option--active');
        option.classList.add('select-menu__option--active');
    });
});