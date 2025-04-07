const $forms = document.querySelectorAll(".js-form");
$forms.forEach(($form) => {
    const $inputs = $form.querySelectorAll(".input");
    const $selects = $form.querySelectorAll(".select");

    $inputs.forEach(($input) => {
        const $field = $input.querySelector(".input__field");
        $field.addEventListener("focus", () => $input.classList.remove("input--error"));
    });

    $selects.forEach(($select) => {
        const $field = $select.querySelector(".select__field");
        $field.addEventListener("focus", () => $select.classList.remove("select--error"));
    });

    $form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isError = false;
        let $firstErrorField = null;

        $inputs.forEach(($input) => {
            const isToggleInput = $input.closest(".js-toggle-item") && !$input.closest(".js-toggle-item-active");
            const isSwitchInput = $input.closest(".js-switch-item") && !$input.closest(".js-switch-item-active");
            if (isToggleInput || isSwitchInput) {
                return;
            }

            if (!validateItem({ $item: $input, fieldClass: "input__field" })) {
                isError = true;

                addError({
                    $item: $input,
                    itemErrorClass: "input--error",
                    fieldClass: "input__field",
                    errorLabelClass: "input__error",
                });

                if (!$firstErrorField) {
                    $firstErrorField = $input;
                }
            }
        });

        $selects.forEach(($select) => {
            const isToggleSelect = $select.closest(".js-toggle-item") && !$select.closest(".js-toggle-item-active");
            const isSwitchSelect = $select.closest(".js-switch-item") && !$select.closest(".js-switch-item-active");
            if (isToggleSelect || isSwitchSelect) {
                return;
            }

            if (!validateItem({ $item: $select, fieldClass: "select__field" })) {
                isError = true;

                addError({
                    $item: $select,
                    itemErrorClass: "select--error",
                    fieldClass: "select__field",
                    errorLabelClass: "select__error",
                });

                if (!$firstErrorField) {
                    $firstErrorField = $select;
                }
            }
        });

        if (isError) {
            $firstErrorField.scrollIntoView({ block: "center" });
        } else {
            const successFormEvent = new CustomEvent("formSuccess", {
                detail: {
                    form: $form,
                },
            });
            document.dispatchEvent(successFormEvent);
        }
    });
});

document.addEventListener("formSuccess", (e) => {
    const $form = e.detail.form;
    if ($form.classList.contains("js-form-order")) {
        console.log("Order form success");
        // const formData = new FormData($form);

        clearForm($form);
    }

    if ($form.classList.contains("js-form-callback-install")) {
        console.log("Callback install form success");
        // const formData = new FormData($form);

        clearForm($form);
    }
});

function validateItem({ $item, fieldClass }) {
    const $field = $item.querySelector(`.${fieldClass}`);
    const validateType = $field.dataset.validate;

    if (validateType !== undefined && !validateEmpty($field.value)) {
        return false;
    } else if (validateType === "phone" && !validatePhone($field.value)) {
        return false;
    } else if (validateType === "email" && !validateEmail($field.value)) {
        return false;
    }

    return true;
}

function addError({ $item, itemErrorClass, fieldClass, errorLabelClass }) {
    const $field = $item.querySelector(`.${fieldClass}`);
    const $error = $item.querySelector(`.${errorLabelClass}`);
    const defaultError = "Некорректный формат ввода";

    $item.classList.add(itemErrorClass);
    $error.innerText = $field.dataset.errorText ?? defaultError;
}

function validateEmpty(text) {
    if (text.length < 1) {
        return false;
    }

    return true;
}

function validatePhone(text) {
    if (!/(?:\+|\d)[\d\-\(\) ]{16,}\d/g.test(text)) {
        return false;
    }

    return true;
}

function validateEmail(text) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text);
}

export function clearForm($form) {
    const $inputs = $form.querySelectorAll(".input");
    $inputs.forEach(($input) => {
        const $field = $input.querySelector(".input__field");
        $field.value = "";

        $input.classList.remove("input--error");
    });

    const $selects = $form.querySelectorAll(".select");
    $selects.forEach(($select) => {
        const $field = $select.querySelector(".select__field");
        $field.value = "";

        $select.classList.remove("select--error");
    });
}

export default {
    clearForm,
};
