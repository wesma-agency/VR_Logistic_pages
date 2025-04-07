import IMask from "imask";

const $inputs = document.querySelectorAll(".js-imask");
$inputs.forEach(($input) => {
    const mask = $input.dataset.mask;
    let imask = null;

    if (mask === "price") {
        const min = $input.dataset.maskMin ? parseFloat($input.dataset.maskMin) : 0;
        const max = $input.dataset.maskInputMax ? parseFloat($input.dataset.maskInputMax) : Infinity;
        
        imask = IMask($input, {
            mask: Number,
            scale: $input.dataset.maskScale ?? 0,
            min,
            max,
            signed: false,
            thousandsSeparator: " ",
            padFractionalZeros: true,
            normalizeZeros: true,
            radix: ",",
            mapToRadix: ["."],
        });

        $input.addEventListener("blur", () => {
            const currentValue = parseFloat(imask.unmaskedValue.replace(",", "."));
            if ($input.dataset.maskMax && !isNaN(currentValue) && currentValue > +$input.dataset.maskMax) {
                imask.value = $input.dataset.maskMax;
            }
        });
    } else {
        imask = IMask($input, { mask });
    }

    $input._imask = imask;
});

export function parseMaskedValue(input) {
    return parseFloat(input._imask.value.replace(/\s/g, "").replace(",", ".")) || '';
}

export default {
    parseMaskedValue,
};
