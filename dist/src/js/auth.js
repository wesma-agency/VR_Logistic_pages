import { clearForm } from "./form";
import { openPopup, closePopup } from "./popup";

document.addEventListener("formSuccess", (e) => {
    const $form = e.detail.form;
    if ($form.classList.contains("js-form-login")) {
        console.log("Login form success");

        // const formData = new FormData($form);
        // for (const [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }

        clearForm($form);
    }

    if ($form.classList.contains("js-form-register")) {
        console.log("Register form success");
        clearForm($form);
    }

    if ($form.classList.contains("js-form-forgot")) {
        clearForm($form);

        const $passwordForgotPopup = document.querySelector('.popup[data-popup-name="password-forgot"]');
        closePopup($passwordForgotPopup, false, false);

        const $passwordResetPopup = document.querySelector('.popup[data-popup-name="password-reset"]');
        openPopup($passwordResetPopup, false, false);
    }
});
