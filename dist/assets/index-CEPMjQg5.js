import * as THREE from "https://cdn.skypack.dev/three@0.133.1/build/three.module";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var CountUp = (
  /** @class */
  function() {
    function CountUp2(target, endVal, options) {
      var _this = this;
      this.target = target;
      this.endVal = endVal;
      this.options = options;
      this.version = "2.0.7";
      this.defaults = {
        startVal: 0,
        decimalPlaces: 0,
        duration: 2,
        useEasing: true,
        useGrouping: true,
        smartEasingThreshold: 999,
        smartEasingAmount: 333,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      };
      this.finalEndVal = null;
      this.useEasing = true;
      this.countDown = false;
      this.error = "";
      this.startVal = 0;
      this.paused = true;
      this.count = function(timestamp) {
        if (!_this.startTime) {
          _this.startTime = timestamp;
        }
        var progress = timestamp - _this.startTime;
        _this.remaining = _this.duration - progress;
        if (_this.useEasing) {
          if (_this.countDown) {
            _this.frameVal = _this.startVal - _this.easingFn(progress, 0, _this.startVal - _this.endVal, _this.duration);
          } else {
            _this.frameVal = _this.easingFn(progress, _this.startVal, _this.endVal - _this.startVal, _this.duration);
          }
        } else {
          if (_this.countDown) {
            _this.frameVal = _this.startVal - (_this.startVal - _this.endVal) * (progress / _this.duration);
          } else {
            _this.frameVal = _this.startVal + (_this.endVal - _this.startVal) * (progress / _this.duration);
          }
        }
        if (_this.countDown) {
          _this.frameVal = _this.frameVal < _this.endVal ? _this.endVal : _this.frameVal;
        } else {
          _this.frameVal = _this.frameVal > _this.endVal ? _this.endVal : _this.frameVal;
        }
        _this.frameVal = Number(_this.frameVal.toFixed(_this.options.decimalPlaces));
        _this.printValue(_this.frameVal);
        if (progress < _this.duration) {
          _this.rAF = requestAnimationFrame(_this.count);
        } else if (_this.finalEndVal !== null) {
          _this.update(_this.finalEndVal);
        } else {
          if (_this.callback) {
            _this.callback();
          }
        }
      };
      this.formatNumber = function(num) {
        var neg = num < 0 ? "-" : "";
        var result, x, x1, x2, x3;
        result = Math.abs(num).toFixed(_this.options.decimalPlaces);
        result += "";
        x = result.split(".");
        x1 = x[0];
        x2 = x.length > 1 ? _this.options.decimal + x[1] : "";
        if (_this.options.useGrouping) {
          x3 = "";
          for (var i = 0, len = x1.length; i < len; ++i) {
            if (i !== 0 && i % 3 === 0) {
              x3 = _this.options.separator + x3;
            }
            x3 = x1[len - i - 1] + x3;
          }
          x1 = x3;
        }
        if (_this.options.numerals && _this.options.numerals.length) {
          x1 = x1.replace(/[0-9]/g, function(w) {
            return _this.options.numerals[+w];
          });
          x2 = x2.replace(/[0-9]/g, function(w) {
            return _this.options.numerals[+w];
          });
        }
        return neg + _this.options.prefix + x1 + x2 + _this.options.suffix;
      };
      this.easeOutExpo = function(t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
      };
      this.options = __assign(__assign({}, this.defaults), options);
      this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber;
      this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo;
      this.startVal = this.validateValue(this.options.startVal);
      this.frameVal = this.startVal;
      this.endVal = this.validateValue(endVal);
      this.options.decimalPlaces = Math.max(this.options.decimalPlaces);
      this.resetDuration();
      this.options.separator = String(this.options.separator);
      this.useEasing = this.options.useEasing;
      if (this.options.separator === "") {
        this.options.useGrouping = false;
      }
      this.el = typeof target === "string" ? document.getElementById(target) : target;
      if (this.el) {
        this.printValue(this.startVal);
      } else {
        this.error = "[CountUp] target is null or undefined";
      }
    }
    CountUp2.prototype.determineDirectionAndSmartEasing = function() {
      var end = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > end;
      var animateAmount = end - this.startVal;
      if (Math.abs(animateAmount) > this.options.smartEasingThreshold) {
        this.finalEndVal = end;
        var up = this.countDown ? 1 : -1;
        this.endVal = end + up * this.options.smartEasingAmount;
        this.duration = this.duration / 2;
      } else {
        this.endVal = end;
        this.finalEndVal = null;
      }
      if (this.finalEndVal) {
        this.useEasing = false;
      } else {
        this.useEasing = this.options.useEasing;
      }
    };
    CountUp2.prototype.start = function(callback) {
      if (this.error) {
        return;
      }
      this.callback = callback;
      if (this.duration > 0) {
        this.determineDirectionAndSmartEasing();
        this.paused = false;
        this.rAF = requestAnimationFrame(this.count);
      } else {
        this.printValue(this.endVal);
      }
    };
    CountUp2.prototype.pauseResume = function() {
      if (!this.paused) {
        cancelAnimationFrame(this.rAF);
      } else {
        this.startTime = null;
        this.duration = this.remaining;
        this.startVal = this.frameVal;
        this.determineDirectionAndSmartEasing();
        this.rAF = requestAnimationFrame(this.count);
      }
      this.paused = !this.paused;
    };
    CountUp2.prototype.reset = function() {
      cancelAnimationFrame(this.rAF);
      this.paused = true;
      this.resetDuration();
      this.startVal = this.validateValue(this.options.startVal);
      this.frameVal = this.startVal;
      this.printValue(this.startVal);
    };
    CountUp2.prototype.update = function(newEndVal) {
      cancelAnimationFrame(this.rAF);
      this.startTime = null;
      this.endVal = this.validateValue(newEndVal);
      if (this.endVal === this.frameVal) {
        return;
      }
      this.startVal = this.frameVal;
      if (!this.finalEndVal) {
        this.resetDuration();
      }
      this.finalEndVal = null;
      this.determineDirectionAndSmartEasing();
      this.rAF = requestAnimationFrame(this.count);
    };
    CountUp2.prototype.printValue = function(val) {
      var result = this.formattingFn(val);
      if (this.el.tagName === "INPUT") {
        var input = this.el;
        input.value = result;
      } else if (this.el.tagName === "text" || this.el.tagName === "tspan") {
        this.el.textContent = result;
      } else {
        this.el.innerHTML = result;
      }
    };
    CountUp2.prototype.ensureNumber = function(n) {
      return typeof n === "number" && !isNaN(n);
    };
    CountUp2.prototype.validateValue = function(value) {
      var newValue = Number(value);
      if (!this.ensureNumber(newValue)) {
        this.error = "[CountUp] invalid start or end value: " + value;
        return null;
      } else {
        return newValue;
      }
    };
    CountUp2.prototype.resetDuration = function() {
      this.startTime = null;
      this.duration = Number(this.options.duration) * 1e3;
      this.remaining = this.duration;
    };
    return CountUp2;
  }()
);
function createWaypoint(options) {
  const element = typeof options.element === "string" ? document.querySelector(options.element) : options.element;
  const handler = options.handler;
  let offset = options.offset || 0;
  const context = options.context || window;
  const triggerOnce = options.triggerOnce || false;
  let triggered = false;
  if (!element || typeof handler !== "function") {
    console.error("Waypoint: Необходимо указать element и handler.");
    return;
  }
  if (typeof offset === "string" && offset.endsWith("%")) {
    const percent = parseFloat(offset) / 100;
    offset = function() {
      return context === window ? window.innerHeight * percent : context.offsetHeight * percent;
    };
  } else if (typeof offset === "function") ;
  else {
    offset = parseInt(offset) || 0;
  }
  function checkWaypoint() {
    if (triggered && triggerOnce) {
      return;
    }
    const rect = element.getBoundingClientRect();
    let top;
    if (context === window) {
      top = rect.top;
    } else {
      const contextRect = context.getBoundingClientRect();
      top = rect.top - contextRect.top;
    }
    let offsetValue;
    if (typeof offset === "function") {
      offsetValue = offset();
    } else {
      offsetValue = offset;
    }
    let direction = "";
    if (window.scrollY > lastScrollY && context === window) {
      direction = "down";
    } else if (window.scrollY < lastScrollY && context === window) {
      direction = "up";
    } else if (context !== window) {
      direction = "down";
    }
    lastScrollY = window.scrollY;
    if (top <= (offsetValue || 0) - element.offsetHeight * (options.offsetBottom || 0)) {
      handler.call(element, direction);
      triggered = true;
    }
  }
  let lastScrollY = window.scrollY;
  context.addEventListener("scroll", checkWaypoint);
  window.addEventListener("resize", checkWaypoint);
  checkWaypoint();
  function destroy() {
    context.removeEventListener("scroll", checkWaypoint);
    window.removeEventListener("resize", checkWaypoint);
  }
  return {
    destroy
  };
}
function countStart(dom = document) {
  const $counters = dom.querySelectorAll(".js-count-up"), options = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: "."
  };
  $counters.forEach((item) => {
    const value = item.dataset.value;
    const counter = new CountUp(item, value, options);
    counter.start();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const aboutCompany = document.getElementById("section-about-company");
  createWaypoint({
    element: "#section-about-company",
    offset: "50%",
    handler: () => {
      countStart(aboutCompany);
    },
    triggerOnce: true
    // сработает только один раз
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const tabSelects = document.querySelectorAll(".js-tab-select");
  tabSelects.forEach((tabSelect) => {
    const button = tabSelect.querySelector(".js-tab-select__button");
    const tabs = tabSelect.querySelectorAll(".js-tab");
    const tabsLists = tabSelect.querySelectorAll(".js-tab-list");
    tabs.forEach((tab) => {
      tab.querySelector("input").addEventListener("change", (event) => {
        const wrapper = tab.querySelector(".tab-wrapper");
        if (event.target.checked) {
          tabsLists.forEach((list) => {
            list.classList.remove("active");
            if (list.getAttribute("data-tab-list") == tab.getAttribute("data-tab-list")) {
              list.classList.add("active");
            }
          });
          button.classList.remove("active");
          button.innerHTML = wrapper.outerHTML;
        }
      });
    });
    if (window.outerWidth < 900) {
      tabSelect.classList.add("select");
      button.addEventListener("click", () => {
        button.classList.toggle("active");
      });
    }
  });
});
function activationAccordion(ACCORDIONS) {
  ACCORDIONS.forEach((accordion) => {
    const ACCORDION_HEAD = accordion.querySelector(".js-accordion-head");
    accordion.querySelector(".js-accordion-body");
    ACCORDION_HEAD.addEventListener("click", () => {
      accordion.classList.toggle("open-accordion");
    });
  });
}
function activationShowMore(show_more) {
  if (window.innerWidth <= 768) {
    show_more.forEach((item) => {
      const CONTAINER = item.querySelector(".js-show-more-container");
      const BUTTON = item.querySelector(".js-show-more-button");
      const BLOCKS = CONTAINER.querySelectorAll(".js-show-more-block");
      BLOCKS.forEach((block, index) => {
        if (index >= 3) {
          block.style.display = "none";
        }
      });
      BUTTON.addEventListener("click", () => {
        BLOCKS.forEach((block) => {
          block.removeAttribute("style");
        });
        item.classList.add("show-more-activate");
      });
    });
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      show_more.forEach((item) => {
        const CONTAINER = item.querySelector(".js-show-more-container");
        const BUTTON = item.querySelector(".js-show-more-button");
        const BLOCKS = CONTAINER.querySelectorAll(".js-show-more-block");
        BLOCKS.forEach((block, index) => {
          if (index >= 3) {
            block.style.display = "none";
          }
        });
        BUTTON.addEventListener("click", () => {
          BLOCKS.forEach((block) => {
            block.removeAttribute("style");
          });
          item.classList.add("show-more-activate");
        });
      });
    } else {
      show_more.forEach((item) => {
        const CONTAINER = item.querySelector(".js-show-more-container");
        const BLOCKS = CONTAINER.querySelectorAll(".js-show-more-block");
        BLOCKS.forEach((block) => {
          block.removeAttribute("style");
        });
      });
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const ACCORDIONS = document.querySelectorAll(".js-accordion");
  activationAccordion(ACCORDIONS);
  const SHOW_MORE = document.querySelectorAll(".js-show-more");
  activationShowMore(SHOW_MORE);
});
const textContents = document.querySelectorAll(".text-content");
textContents.forEach((textContent, index) => {
  const body = textContent.querySelector(".text-content__body");
  const show = textContent.querySelector(".text-content__show");
  show == null ? void 0 : show.addEventListener("click", () => {
    textContent.classList.add("text-content--active");
    textContentBodyHandler(body, show);
  });
  const hide = textContent.querySelector(".text-content__hide");
  hide == null ? void 0 : hide.addEventListener("click", () => {
    textContent.classList.remove("text-content--active");
    textContentBodyHandler(body, show);
  });
  let resizeTimeout;
  setTimeout(() => textContentBodyHandler(body, show), 500);
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => textContentBodyHandler(body, show), 100);
  });
});
function textContentBodyHandler(body, show) {
  if (!body.classList.contains("text-content__body--clamp")) {
    return;
  }
  if (body.scrollHeight > body.clientHeight) {
    show == null ? void 0 : show.classList.remove("text-content__show--inactive");
  } else {
    show == null ? void 0 : show.classList.add("text-content__show--inactive");
  }
}
function changeTabList(tab, tabs, tab_list) {
  tabs == null ? void 0 : tabs.querySelector(".active").classList.remove("active");
  let tab_item = tab_list == null ? void 0 : tab_list.querySelectorAll(".js-tab-item");
  tab_item == null ? void 0 : tab_item.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tabs-item") === tab.getAttribute("data-tabs-item")) {
      tab.classList.add("active");
      item.classList.add("active");
    }
  });
}
const TAB_CONTAINER = document.querySelectorAll(".js-tab-container");
TAB_CONTAINER == null ? void 0 : TAB_CONTAINER.forEach((item) => {
  const TABS = item.querySelector(".js-tabs");
  const LIST = item.querySelector(".js-tab-list");
  TABS == null ? void 0 : TABS.querySelectorAll(".js-tab").forEach((item2) => {
    item2.addEventListener("click", () => {
      changeTabList(item2, TABS, LIST);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const selectSingle = document.querySelectorAll(".mog-select");
  selectSingle.forEach((item) => {
    const selectSingle_title = item.querySelector(".mog-select__title");
    const selectSingle_labels = item.querySelectorAll(".mog-select__label");
    selectSingle_title.addEventListener("click", () => {
      if ("active" === item.getAttribute("data-state")) {
        item.setAttribute("data-state", "");
      } else {
        item.setAttribute("data-state", "active");
      }
    });
    for (let i = 0; i < selectSingle_labels.length; i++) {
      selectSingle_labels[i].addEventListener("click", (evt) => {
        selectSingle_title.innerHTML = `<span class="overflow-hidden-90">${evt.target.textContent}</span>`;
        item.setAttribute("data-state", "");
      });
    }
    const reset = document.querySelector(".mog-select-reset");
    reset == null ? void 0 : reset.addEventListener("click", () => {
      selectSingle_title.textContent = selectSingle_title.getAttribute("data-default");
    });
  });
});
function changeSelectItem(option, items) {
  items.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-selected-item") == option.getAttribute("data-selected-item")) {
      item.classList.add("active");
    }
  });
}
const SELECTS = document.querySelectorAll(".js-select");
SELECTS == null ? void 0 : SELECTS.forEach((select) => {
  select.querySelector(".js-select-options");
  const OPTIONS = select.querySelectorAll(".js-select-option");
  select.querySelector(".js-select-list");
  const LIST_ITEMS = select.querySelectorAll(".js-select-item");
  OPTIONS == null ? void 0 : OPTIONS.forEach((item) => {
    item.addEventListener("click", () => {
      changeSelectItem(item, LIST_ITEMS);
    });
  });
});
const containerEl = document.querySelector(".globe-wrapper");
const canvas3D = containerEl.querySelector("#globe-3d");
const canvas2D = containerEl.querySelector("#globe-2d-overlay");
const popupEl = containerEl.querySelector(".globe-popup");
let renderer, scene, camera, rayCaster, controls;
canvas2D.getContext("2d");
let clock, mouse, pointer, globe, globeMesh;
let earthTexture, mapMaterial;
let popupOpenTl, popupCloseTl;
let dragged = false;
let plusWidth = 0;
if (window.outerWidth > 1280) {
  if (window.outerWidth > 1500) {
    plusWidth = 0;
  }
  if (window.outerWidth > 1700) {
    plusWidth = 50;
  }
  initScene();
  window.addEventListener("resize", updateSize);
}
function initScene() {
  renderer = new THREE.WebGLRenderer({ canvas: canvas3D, alpha: true });
  renderer.setPixelRatio(2);
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
  camera.position.z = 1.1;
  rayCaster = new THREE.Raycaster();
  rayCaster.far = 1.15;
  mouse = new THREE.Vector2(-1, -1);
  clock = new THREE.Clock();
  createOrbitControls();
  new THREE.TextureLoader().load(
    "https://ksenia-k.com/img/earth-map-colored.png",
    (mapTex) => {
      earthTexture = mapTex;
      earthTexture.repeat.set(1, 1);
      createGlobe();
      createPointer();
      addCanvasEvents();
      updateSize();
      render();
    }
  );
}
function createOrbitControls() {
  controls = new OrbitControls(camera, canvas3D);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.minPolarAngle = 0.4 * Math.PI;
  controls.maxPolarAngle = 0.4 * Math.PI;
  controls.autoRotate = true;
  let timestamp;
  controls.addEventListener("start", () => {
    timestamp = Date.now();
  });
  controls.addEventListener("end", () => {
    dragged = Date.now() - timestamp > 600;
  });
}
function createGlobe() {
  const globeGeometry = new THREE.IcosahedronGeometry(1, 22);
  mapMaterial = new THREE.ShaderMaterial({
    vertexShader: document.getElementById("vertex-shader-map").textContent,
    fragmentShader: document.getElementById("fragment-shader-map").textContent,
    uniforms: {
      u_map_tex: { type: "t", value: earthTexture },
      u_dot_size: { type: "f", value: 0 },
      u_pointer: { type: "v3", value: new THREE.Vector3(0, 0, 1) },
      u_time_since_click: { value: 0 }
    },
    alphaTest: false,
    transparent: true
  });
  globe = new THREE.Points(globeGeometry, mapMaterial);
  scene.add(globe);
  globeMesh = new THREE.Mesh(globeGeometry, new THREE.MeshBasicMaterial({
    color: 2236962,
    transparent: true,
    opacity: 0.05
  }));
  scene.add(globeMesh);
}
function createPointer() {
  const geometry = new THREE.SphereGeometry(0.04, 16, 16);
  const material = new THREE.MeshBasicMaterial({
    color: 0,
    transparent: true,
    opacity: 0
  });
  pointer = new THREE.Mesh(geometry, material);
  scene.add(pointer);
}
function addCanvasEvents() {
  containerEl.addEventListener("mousemove", (e) => {
    updateMousePosition(e.clientX, e.clientY);
  });
  containerEl.addEventListener("click", (e) => {
    if (!dragged) {
      updateMousePosition(
        e.targetTouches ? e.targetTouches[0].pageX : e.clientX,
        e.targetTouches ? e.targetTouches[0].pageY : e.clientY
      );
      const res = checkIntersects();
      if (res.length) {
        res[0].face.normal.clone();
        pointer.position.set(res[0].face.normal.x, res[0].face.normal.y, res[0].face.normal.z);
        mapMaterial.uniforms.u_pointer.value = res[0].face.normal;
        popupEl.innerHTML = cartesianToLatLong();
        showPopupAnimation();
        clock.start();
      }
    }
  });
  function updateMousePosition(eX, eY) {
    mouse.x = (eX - containerEl.offsetLeft) / containerEl.offsetWidth * 2 - 1;
    mouse.y = -((eY - containerEl.offsetTop) / containerEl.offsetHeight) * 2 + 1;
  }
}
function checkIntersects() {
  rayCaster.setFromCamera(mouse, camera);
  const intersects = rayCaster.intersectObject(globeMesh);
  if (intersects.length) {
    document.body.style.cursor = "pointer";
  } else {
    document.body.style.cursor = "auto";
  }
  return intersects;
}
function render() {
  mapMaterial.uniforms.u_time_since_click.value = clock.getElapsedTime();
  checkIntersects();
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
function updateSize() {
  const minSide = 0.65 * Math.min(window.innerWidth, window.innerHeight) + plusWidth;
  containerEl.style.width = minSide + "px";
  containerEl.style.height = minSide + "px";
  renderer.setSize(minSide, minSide);
  canvas2D.width = canvas2D.height = minSide;
  mapMaterial.uniforms.u_dot_size.value = 0.04 * minSide;
}
function cartesianToLatLong() {
  const pos = pointer.position;
  const lat = 90 - Math.acos(pos.y) * 180 / Math.PI;
  const lng = (270 + Math.atan2(pos.x, pos.z) * 180 / Math.PI) % 360 - 180;
  return formatCoordinate(lat, "N", "S") + ",&nbsp;" + formatCoordinate(lng, "E", "W");
}
function formatCoordinate(coordinate, positiveDirection, negativeDirection) {
  const direction = coordinate >= 0 ? positiveDirection : negativeDirection;
  return `${Math.abs(coordinate).toFixed(4)}°&nbsp${direction}`;
}
function showPopupAnimation(lifted) {
  {
    let positionLifted = pointer.position.clone();
    positionLifted.multiplyScalar(1.3);
    gsap.from(pointer.position, {
      duration: 0.25,
      x: positionLifted.x,
      y: positionLifted.y,
      z: positionLifted.z,
      ease: "power3.out"
    });
  }
  popupCloseTl.pause(0);
  popupOpenTl.play(0);
}
