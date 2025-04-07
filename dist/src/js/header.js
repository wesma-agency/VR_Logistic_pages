const category = document.querySelector('.header-category');
if (category) {
    const categoryContainer = document.querySelector(".header-category__list");
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const category = entry.target;
            if (entry.isIntersecting && category._simplebar) {
                category._simplebar.getScrollElement().scrollTop = 0;
                category._simplebar._updateScrollEndClass();
            }
        });
    });

    headerObserver.observe(categoryContainer);

    const categoryItems = document.querySelectorAll('.header-category__item');
    categoryItems.forEach((categoryItem, index) => {
        categoryItem.addEventListener('mouseenter', () => {
            const activeCategoryMainItem = category.querySelector('.header-category__main-item--active');
            activeCategoryMainItem?.classList.remove('header-category__main-item--active');

            const categoryMainItem = category.querySelectorAll('.header-category__main-item')[index];
            categoryMainItem.classList.add('header-category__main-item--active');

            const activeCategoryItem = category.querySelector('.header-category__item--active');
            activeCategoryItem?.classList.remove('header-category__item--active');

            categoryItem.classList.add('header-category__item--active');
        });
    });
}