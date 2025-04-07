import SimpleBar from "simplebar";
import ResizeObserver from "resize-observer-polyfill";

window.ResizeObserver = ResizeObserver;

const $simplebars = document.querySelectorAll(".js-simplebar");
$simplebars.forEach(($simplebar) => {
  const simplebar = new SimpleBar($simplebar, {
    autoHide: false
  });
  const scrollContentEl = simplebar.getScrollElement();

  $simplebar._simplebar = simplebar;
  $simplebar._simplebar._updateScrollEndClass = () => updateScrollEndClass($simplebar);

  updateScrollEndClass($simplebar);
  scrollContentEl.addEventListener("scroll", () => updateScrollEndClass($simplebar));

});

function updateScrollEndClass($simplebar) {
  const scrollContentEl = $simplebar._simplebar.getScrollElement();
  const maxScroll = scrollContentEl.scrollHeight - scrollContentEl.clientHeight;
  const currentScroll = scrollContentEl.scrollTop;

  if (currentScroll >= maxScroll) {
    $simplebar.classList.add("simplebar-scroll-end");
  } else {
    $simplebar.classList.remove("simplebar-scroll-end");
  }
}
