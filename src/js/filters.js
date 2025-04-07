import { parseMaskedValue } from "./imask";
import noUiSlider from "nouislider";

const checkboxFilters = document.querySelectorAll(".checkbox-filter");
checkboxFilters.forEach((checkboxFilter) => {
    const showMore = checkboxFilter.querySelector(".checkbox-filter__showmore-btn");
    const hideMore = checkboxFilter.querySelector(".checkbox-filter__hidemore-btn");

    showMore?.addEventListener("click", () => checkboxFilter.classList.add("checkbox-filter--active"));
    hideMore?.addEventListener("click", () => checkboxFilter.classList.remove("checkbox-filter--active"));
});

const priceRanges = document.querySelectorAll(".price-range");
priceRanges.forEach((priceRange) => rangeHandler(priceRange, 'price-range'));

const inputRanges = document.querySelectorAll(".input-range");
inputRanges.forEach((priceRange) => rangeHandler(priceRange, 'input-range'));

function rangeHandler(range, name) {
    const inputMin = range.querySelector(`.${name}__value--min`);
    const inputMax = range.querySelector(`.${name}__value--max`);
    const slider = range.querySelector(`.${name}__slider`);

    inputMin?.addEventListener("blur", () => {
        const minValue = parseMaskedValue(inputMin);
        const maxValue = parseMaskedValue(inputMax);

        if (minValue && maxValue && minValue > maxValue) {
            inputMax._imask.value = inputMin._imask.value;
        }

        if (slider) {
            slider.noUiSlider.set(extractNumber(inputMin.value));
        }
    });

    inputMax?.addEventListener("blur", () => {
        const minValue = parseMaskedValue(inputMin);
        const maxValue = parseMaskedValue(inputMax);

        if (minValue > maxValue) {
            inputMax._imask.value = inputMin._imask.value;
        }

        if (slider) {
            slider.noUiSlider.set([null, extractNumber(inputMax.value)]);
        }
    });

    if (slider) {
        const data = {
            min: +slider.dataset.min,
            max: +slider.dataset.max,
            startMin: +slider.dataset.startMin,
            startMax: +slider.dataset.startMax,
            step: +slider.dataset.step,
            maxPercent: +slider.dataset.maxPercent,
        };
    
        const sliderStart = [];
        if (data.startMin || data.startMin === 0) sliderStart.push(data.startMin);
        if (data.startMax || data.startMax === 0) sliderStart.push(data.startMax);

        noUiSlider.create(slider, {
            start: sliderStart,
            connect: sliderStart.length === 1 ? "lower" : true,
            step: data.step,
            range: {
                min: data.min,
                max: data.max,
            },
            format: {
                from: (value) => parseFloat(value),
                to: (value) => parseFloat(value),
            },
        });
    
        slider.noUiSlider.on("update", (values) => {
            const minValue = `${values[0]}`;
            const maxValue = `${values[1]}`;
    
            if (inputMin) {
                inputMin._imask ? (inputMin._imask.value = minValue) : (inputMin.value = minValue);
            }
    
            if (inputMax) {
                inputMax._imask ? (inputMax._imask.value = maxValue) : (inputMax.value = maxValue);
            }
        });
    }
}

const tabsFilterItems = document.querySelectorAll(".tabs-filter__item");
tabsFilterItems.forEach((tabsFilterItem) => {
    tabsFilterItem.addEventListener("click", (e) => {
        const isClickClose = e.target.closest(".tabs-filter__close-btn");
        const isActiveItem = tabsFilterItem.classList.contains("tabs-filter__item--active");

        if (!isClickClose && !isActiveItem) {
            tabsFilterItem.classList.add("tabs-filter__item--active");
        }
    });

    const closeBtn = tabsFilterItem.querySelector(".tabs-filter__close-btn");
    closeBtn.addEventListener("click", () => {
        tabsFilterItem.classList.remove("tabs-filter__item--active");
    });
});

function extractNumber(str) {
    str = str.replace(/\s+/g, "");
    str = str.replace(",", ".");
    const match = str.match(/^(\d+(\.\d+)?)$/);
    return match ? parseFloat(match[0]) : null;
}