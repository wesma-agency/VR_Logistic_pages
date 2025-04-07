import { lockBody, unlockBody, isLockedBody } from "./utils";

const $openBtns = document.querySelectorAll(".js-open-popup");
$openBtns.forEach(($btn) => {
    $btn.addEventListener("click", () => {
        const name = $btn.dataset.popupName;
        const $popup = document.querySelector(`.popup[data-popup-name="${name}"`);
        if (!name || !$popup || $popup.classList.contains("popup--active")) {
            return;
        }

        const isBtnClosePopup = $btn.classList.contains("js-close-popup");
        openPopup($popup, true, !isBtnClosePopup);
    });
});

const $popups = document.querySelectorAll(".popup");
$popups.forEach(($popup) => {
    const $closeBtns = $popup.querySelectorAll(".js-close-popup");
    $closeBtns.forEach(($closeBtn) => {
        $closeBtn?.addEventListener("click", () => {
            const isBtnOpenPopup = $closeBtn.classList.contains("js-open-popup");
            closePopup($popup, !isBtnOpenPopup, !isBtnOpenPopup);
        });
    });

    const $backdrop = $popup.querySelector(".popup__backdrop");
    $backdrop?.addEventListener("click", () => closePopup($popup));

    const $dialog = $popup.querySelector(".popup__dialog");
    $dialog?.addEventListener("click", (e) => {
        if (e.target === $dialog) {
            closePopup($popup);
        }
    });
});

window.addEventListener("load", () => {
    $popups.forEach(($popup) => $popup.classList.add("popup--show"));
});

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-open-popup") || e.target.closest(".js-open-popup")) {
        return;
    }

    const $activePopup = document.querySelector(".popup--active.popup--close-outside");
    const isInner = e.target.closest(".popup") && !e.target.classList.contains("popup");
    if (!$activePopup || isInner) {
        return;
    }

    closePopup($activePopup);
});

export function closePopup($popup, needUnlockBody = true, needTransition = true) {
    if (!needTransition) {
        togglePopupTransition($popup);
    }

    $popup.classList.remove("popup--active");

    $popup.addEventListener(
        "transitionend",
        () => {
            if (needUnlockBody) {
                unlockBody();
            }
        },
        { once: true }
    );
}

export function openPopup($popup, needLockBody = true, needTransition = true) {
    if (!needTransition) {
        togglePopupTransition($popup);
    }

    $popup.classList.add("popup--active");

    if (!isLockedBody()) {
        lockBody(`popup-${$popup.dataset.popupName}`);
    }
}

function togglePopupTransition($popup) {
    $popup.classList.add("popup--no-transition");
    requestAnimationFrame(() => {
        $popup.classList.remove("popup--no-transition");
    });
}

export default {
    openPopup,
    closePopup,
};
