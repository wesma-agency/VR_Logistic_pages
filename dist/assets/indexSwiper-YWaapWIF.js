var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_indexSwiper_002 = __commonJS({
  "assets/indexSwiper-YWaapWIF.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
    }(void 0, function() {
      function e(e2) {
        return null !== e2 && "object" == typeof e2 && "constructor" in e2 && e2.constructor === Object;
      }
      function t(s2, a2) {
        void 0 === s2 && (s2 = {}), void 0 === a2 && (a2 = {}), Object.keys(a2).forEach((i2) => {
          void 0 === s2[i2] ? s2[i2] = a2[i2] : e(a2[i2]) && e(s2[i2]) && Object.keys(a2[i2]).length > 0 && t(s2[i2], a2[i2]);
        });
      }
      const s = { body: {}, addEventListener() {
      }, removeEventListener() {
      }, activeElement: { blur() {
      }, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() {
      } }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {
      }, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
      function a() {
        const e2 = "undefined" != typeof document ? document : {};
        return t(e2, s), e2;
      }
      const i = { document: s, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {
      }, pushState() {
      }, go() {
      }, back() {
      } }, CustomEvent: function() {
        return this;
      }, addEventListener() {
      }, removeEventListener() {
      }, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() {
      }, Date() {
      }, screen: {}, setTimeout() {
      }, clearTimeout() {
      }, matchMedia: () => ({}), requestAnimationFrame: (e2) => "undefined" == typeof setTimeout ? (e2(), null) : setTimeout(e2, 0), cancelAnimationFrame(e2) {
        "undefined" != typeof setTimeout && clearTimeout(e2);
      } };
      function r() {
        const e2 = "undefined" != typeof window ? window : {};
        return t(e2, i), e2;
      }
      class n extends Array {
        constructor(e2) {
          "number" == typeof e2 ? super(e2) : (super(...e2 || []), function(e3) {
            const t2 = e3.__proto__;
            Object.defineProperty(e3, "__proto__", { get: () => t2, set(e4) {
              t2.__proto__ = e4;
            } });
          }(this));
        }
      }
      function l(e2) {
        void 0 === e2 && (e2 = []);
        const t2 = [];
        return e2.forEach((e3) => {
          Array.isArray(e3) ? t2.push(...l(e3)) : t2.push(e3);
        }), t2;
      }
      function o(e2, t2) {
        return Array.prototype.filter.call(e2, t2);
      }
      function d(e2, t2) {
        const s2 = r(), i2 = a();
        let l2 = [];
        if (!t2 && e2 instanceof n) return e2;
        if (!e2) return new n(l2);
        if ("string" == typeof e2) {
          const s3 = e2.trim();
          if (s3.indexOf("<") >= 0 && s3.indexOf(">") >= 0) {
            let e3 = "div";
            0 === s3.indexOf("<li") && (e3 = "ul"), 0 === s3.indexOf("<tr") && (e3 = "tbody"), 0 !== s3.indexOf("<td") && 0 !== s3.indexOf("<th") || (e3 = "tr"), 0 === s3.indexOf("<tbody") && (e3 = "table"), 0 === s3.indexOf("<option") && (e3 = "select");
            const t3 = i2.createElement(e3);
            t3.innerHTML = s3;
            for (let e4 = 0; e4 < t3.childNodes.length; e4 += 1) l2.push(t3.childNodes[e4]);
          } else l2 = function(e3, t3) {
            if ("string" != typeof e3) return [e3];
            const s4 = [], a2 = t3.querySelectorAll(e3);
            for (let e4 = 0; e4 < a2.length; e4 += 1) s4.push(a2[e4]);
            return s4;
          }(e2.trim(), t2 || i2);
        } else if (e2.nodeType || e2 === s2 || e2 === i2) l2.push(e2);
        else if (Array.isArray(e2)) {
          if (e2 instanceof n) return e2;
          l2 = e2;
        }
        return new n(function(e3) {
          const t3 = [];
          for (let s3 = 0; s3 < e3.length; s3 += 1) -1 === t3.indexOf(e3[s3]) && t3.push(e3[s3]);
          return t3;
        }(l2));
      }
      d.fn = n.prototype;
      const c = { addClass: function() {
        for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
        const a2 = l(t2.map((e3) => e3.split(" ")));
        return this.forEach((e3) => {
          e3.classList.add(...a2);
        }), this;
      }, removeClass: function() {
        for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
        const a2 = l(t2.map((e3) => e3.split(" ")));
        return this.forEach((e3) => {
          e3.classList.remove(...a2);
        }), this;
      }, hasClass: function() {
        for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
        const a2 = l(t2.map((e3) => e3.split(" ")));
        return o(this, (e3) => a2.filter((t3) => e3.classList.contains(t3)).length > 0).length > 0;
      }, toggleClass: function() {
        for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
        const a2 = l(t2.map((e3) => e3.split(" ")));
        this.forEach((e3) => {
          a2.forEach((t3) => {
            e3.classList.toggle(t3);
          });
        });
      }, attr: function(e2, t2) {
        if (1 === arguments.length && "string" == typeof e2) return this[0] ? this[0].getAttribute(e2) : void 0;
        for (let s2 = 0; s2 < this.length; s2 += 1) if (2 === arguments.length) this[s2].setAttribute(e2, t2);
        else for (const t3 in e2) this[s2][t3] = e2[t3], this[s2].setAttribute(t3, e2[t3]);
        return this;
      }, removeAttr: function(e2) {
        for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].removeAttribute(e2);
        return this;
      }, transform: function(e2) {
        for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].style.transform = e2;
        return this;
      }, transition: function(e2) {
        for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].style.transitionDuration = "string" != typeof e2 ? `${e2}ms` : e2;
        return this;
      }, on: function() {
        for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
        let [a2, i2, r2, n2] = t2;
        function l2(e3) {
          const t3 = e3.target;
          if (!t3) return;
          const s3 = e3.target.dom7EventData || [];
          if (s3.indexOf(e3) < 0 && s3.unshift(e3), d(t3).is(i2)) r2.apply(t3, s3);
          else {
            const e4 = d(t3).parents();
            for (let t4 = 0; t4 < e4.length; t4 += 1) d(e4[t4]).is(i2) && r2.apply(e4[t4], s3);
          }
        }
        function o2(e3) {
          const t3 = e3 && e3.target && e3.target.dom7EventData || [];
          t3.indexOf(e3) < 0 && t3.unshift(e3), r2.apply(this, t3);
        }
        "function" == typeof t2[1] && ([a2, r2, n2] = t2, i2 = void 0), n2 || (n2 = false);
        const c2 = a2.split(" ");
        let p2;
        for (let e3 = 0; e3 < this.length; e3 += 1) {
          const t3 = this[e3];
          if (i2) for (p2 = 0; p2 < c2.length; p2 += 1) {
            const e4 = c2[p2];
            t3.dom7LiveListeners || (t3.dom7LiveListeners = {}), t3.dom7LiveListeners[e4] || (t3.dom7LiveListeners[e4] = []), t3.dom7LiveListeners[e4].push({ listener: r2, proxyListener: l2 }), t3.addEventListener(e4, l2, n2);
          }
          else for (p2 = 0; p2 < c2.length; p2 += 1) {
            const e4 = c2[p2];
            t3.dom7Listeners || (t3.dom7Listeners = {}), t3.dom7Listeners[e4] || (t3.dom7Listeners[e4] = []), t3.dom7Listeners[e4].push({ listener: r2, proxyListener: o2 }), t3.addEventListener(e4, o2, n2);
          }
        }
        return this;
      }, off: function() {
        for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
        let [a2, i2, r2, n2] = t2;
        "function" == typeof t2[1] && ([a2, r2, n2] = t2, i2 = void 0), n2 || (n2 = false);
        const l2 = a2.split(" ");
        for (let e3 = 0; e3 < l2.length; e3 += 1) {
          const t3 = l2[e3];
          for (let e4 = 0; e4 < this.length; e4 += 1) {
            const s3 = this[e4];
            let a3;
            if (!i2 && s3.dom7Listeners ? a3 = s3.dom7Listeners[t3] : i2 && s3.dom7LiveListeners && (a3 = s3.dom7LiveListeners[t3]), a3 && a3.length) for (let e5 = a3.length - 1; e5 >= 0; e5 -= 1) {
              const i3 = a3[e5];
              r2 && i3.listener === r2 || r2 && i3.listener && i3.listener.dom7proxy && i3.listener.dom7proxy === r2 ? (s3.removeEventListener(t3, i3.proxyListener, n2), a3.splice(e5, 1)) : r2 || (s3.removeEventListener(t3, i3.proxyListener, n2), a3.splice(e5, 1));
            }
          }
        }
        return this;
      }, trigger: function() {
        const e2 = r();
        for (var t2 = arguments.length, s2 = new Array(t2), a2 = 0; a2 < t2; a2++) s2[a2] = arguments[a2];
        const i2 = s2[0].split(" "), n2 = s2[1];
        for (let t3 = 0; t3 < i2.length; t3 += 1) {
          const a3 = i2[t3];
          for (let t4 = 0; t4 < this.length; t4 += 1) {
            const i3 = this[t4];
            if (e2.CustomEvent) {
              const t5 = new e2.CustomEvent(a3, { detail: n2, bubbles: true, cancelable: true });
              i3.dom7EventData = s2.filter((e3, t6) => t6 > 0), i3.dispatchEvent(t5), i3.dom7EventData = [], delete i3.dom7EventData;
            }
          }
        }
        return this;
      }, transitionEnd: function(e2) {
        const t2 = this;
        return e2 && t2.on("transitionend", function s2(a2) {
          a2.target === this && (e2.call(this, a2), t2.off("transitionend", s2));
        }), this;
      }, outerWidth: function(e2) {
        if (this.length > 0) {
          if (e2) {
            const e3 = this.styles();
            return this[0].offsetWidth + parseFloat(e3.getPropertyValue("margin-right")) + parseFloat(e3.getPropertyValue("margin-left"));
          }
          return this[0].offsetWidth;
        }
        return null;
      }, outerHeight: function(e2) {
        if (this.length > 0) {
          if (e2) {
            const e3 = this.styles();
            return this[0].offsetHeight + parseFloat(e3.getPropertyValue("margin-top")) + parseFloat(e3.getPropertyValue("margin-bottom"));
          }
          return this[0].offsetHeight;
        }
        return null;
      }, styles: function() {
        const e2 = r();
        return this[0] ? e2.getComputedStyle(this[0], null) : {};
      }, offset: function() {
        if (this.length > 0) {
          const e2 = r(), t2 = a(), s2 = this[0], i2 = s2.getBoundingClientRect(), n2 = t2.body, l2 = s2.clientTop || n2.clientTop || 0, o2 = s2.clientLeft || n2.clientLeft || 0, d2 = s2 === e2 ? e2.scrollY : s2.scrollTop, c2 = s2 === e2 ? e2.scrollX : s2.scrollLeft;
          return { top: i2.top + d2 - l2, left: i2.left + c2 - o2 };
        }
        return null;
      }, css: function(e2, t2) {
        const s2 = r();
        let a2;
        if (1 === arguments.length) {
          if ("string" != typeof e2) {
            for (a2 = 0; a2 < this.length; a2 += 1) for (const t3 in e2) this[a2].style[t3] = e2[t3];
            return this;
          }
          if (this[0]) return s2.getComputedStyle(this[0], null).getPropertyValue(e2);
        }
        if (2 === arguments.length && "string" == typeof e2) {
          for (a2 = 0; a2 < this.length; a2 += 1) this[a2].style[e2] = t2;
          return this;
        }
        return this;
      }, each: function(e2) {
        return e2 ? (this.forEach((t2, s2) => {
          e2.apply(t2, [t2, s2]);
        }), this) : this;
      }, html: function(e2) {
        if (void 0 === e2) return this[0] ? this[0].innerHTML : null;
        for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].innerHTML = e2;
        return this;
      }, text: function(e2) {
        if (void 0 === e2) return this[0] ? this[0].textContent.trim() : null;
        for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].textContent = e2;
        return this;
      }, is: function(e2) {
        const t2 = r(), s2 = a(), i2 = this[0];
        let l2, o2;
        if (!i2 || void 0 === e2) return false;
        if ("string" == typeof e2) {
          if (i2.matches) return i2.matches(e2);
          if (i2.webkitMatchesSelector) return i2.webkitMatchesSelector(e2);
          if (i2.msMatchesSelector) return i2.msMatchesSelector(e2);
          for (l2 = d(e2), o2 = 0; o2 < l2.length; o2 += 1) if (l2[o2] === i2) return true;
          return false;
        }
        if (e2 === s2) return i2 === s2;
        if (e2 === t2) return i2 === t2;
        if (e2.nodeType || e2 instanceof n) {
          for (l2 = e2.nodeType ? [e2] : e2, o2 = 0; o2 < l2.length; o2 += 1) if (l2[o2] === i2) return true;
          return false;
        }
        return false;
      }, index: function() {
        let e2, t2 = this[0];
        if (t2) {
          for (e2 = 0; null !== (t2 = t2.previousSibling); ) 1 === t2.nodeType && (e2 += 1);
          return e2;
        }
      }, eq: function(e2) {
        if (void 0 === e2) return this;
        const t2 = this.length;
        if (e2 > t2 - 1) return d([]);
        if (e2 < 0) {
          const s2 = t2 + e2;
          return d(s2 < 0 ? [] : [this[s2]]);
        }
        return d([this[e2]]);
      }, append: function() {
        let e2;
        const t2 = a();
        for (let s2 = 0; s2 < arguments.length; s2 += 1) {
          e2 = s2 < 0 || arguments.length <= s2 ? void 0 : arguments[s2];
          for (let s3 = 0; s3 < this.length; s3 += 1) if ("string" == typeof e2) {
            const a2 = t2.createElement("div");
            for (a2.innerHTML = e2; a2.firstChild; ) this[s3].appendChild(a2.firstChild);
          } else if (e2 instanceof n) for (let t3 = 0; t3 < e2.length; t3 += 1) this[s3].appendChild(e2[t3]);
          else this[s3].appendChild(e2);
        }
        return this;
      }, prepend: function(e2) {
        const t2 = a();
        let s2, i2;
        for (s2 = 0; s2 < this.length; s2 += 1) if ("string" == typeof e2) {
          const a2 = t2.createElement("div");
          for (a2.innerHTML = e2, i2 = a2.childNodes.length - 1; i2 >= 0; i2 -= 1) this[s2].insertBefore(a2.childNodes[i2], this[s2].childNodes[0]);
        } else if (e2 instanceof n) for (i2 = 0; i2 < e2.length; i2 += 1) this[s2].insertBefore(e2[i2], this[s2].childNodes[0]);
        else this[s2].insertBefore(e2, this[s2].childNodes[0]);
        return this;
      }, next: function(e2) {
        return this.length > 0 ? e2 ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e2) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
      }, nextAll: function(e2) {
        const t2 = [];
        let s2 = this[0];
        if (!s2) return d([]);
        for (; s2.nextElementSibling; ) {
          const a2 = s2.nextElementSibling;
          e2 ? d(a2).is(e2) && t2.push(a2) : t2.push(a2), s2 = a2;
        }
        return d(t2);
      }, prev: function(e2) {
        if (this.length > 0) {
          const t2 = this[0];
          return e2 ? t2.previousElementSibling && d(t2.previousElementSibling).is(e2) ? d([t2.previousElementSibling]) : d([]) : t2.previousElementSibling ? d([t2.previousElementSibling]) : d([]);
        }
        return d([]);
      }, prevAll: function(e2) {
        const t2 = [];
        let s2 = this[0];
        if (!s2) return d([]);
        for (; s2.previousElementSibling; ) {
          const a2 = s2.previousElementSibling;
          e2 ? d(a2).is(e2) && t2.push(a2) : t2.push(a2), s2 = a2;
        }
        return d(t2);
      }, parent: function(e2) {
        const t2 = [];
        for (let s2 = 0; s2 < this.length; s2 += 1) null !== this[s2].parentNode && (e2 ? d(this[s2].parentNode).is(e2) && t2.push(this[s2].parentNode) : t2.push(this[s2].parentNode));
        return d(t2);
      }, parents: function(e2) {
        const t2 = [];
        for (let s2 = 0; s2 < this.length; s2 += 1) {
          let a2 = this[s2].parentNode;
          for (; a2; ) e2 ? d(a2).is(e2) && t2.push(a2) : t2.push(a2), a2 = a2.parentNode;
        }
        return d(t2);
      }, closest: function(e2) {
        let t2 = this;
        return void 0 === e2 ? d([]) : (t2.is(e2) || (t2 = t2.parents(e2).eq(0)), t2);
      }, find: function(e2) {
        const t2 = [];
        for (let s2 = 0; s2 < this.length; s2 += 1) {
          const a2 = this[s2].querySelectorAll(e2);
          for (let e3 = 0; e3 < a2.length; e3 += 1) t2.push(a2[e3]);
        }
        return d(t2);
      }, children: function(e2) {
        const t2 = [];
        for (let s2 = 0; s2 < this.length; s2 += 1) {
          const a2 = this[s2].children;
          for (let s3 = 0; s3 < a2.length; s3 += 1) e2 && !d(a2[s3]).is(e2) || t2.push(a2[s3]);
        }
        return d(t2);
      }, filter: function(e2) {
        return d(o(this, e2));
      }, remove: function() {
        for (let e2 = 0; e2 < this.length; e2 += 1) this[e2].parentNode && this[e2].parentNode.removeChild(this[e2]);
        return this;
      } };
      function p(e2, t2) {
        return void 0 === t2 && (t2 = 0), setTimeout(e2, t2);
      }
      function u() {
        return Date.now();
      }
      function h(e2, t2) {
        void 0 === t2 && (t2 = "x");
        const s2 = r();
        let a2, i2, n2;
        const l2 = function(e3) {
          const t3 = r();
          let s3;
          return t3.getComputedStyle && (s3 = t3.getComputedStyle(e3, null)), !s3 && e3.currentStyle && (s3 = e3.currentStyle), s3 || (s3 = e3.style), s3;
        }(e2);
        return s2.WebKitCSSMatrix ? (i2 = l2.transform || l2.webkitTransform, i2.split(",").length > 6 && (i2 = i2.split(", ").map((e3) => e3.replace(",", ".")).join(", ")), n2 = new s2.WebKitCSSMatrix("none" === i2 ? "" : i2)) : (n2 = l2.MozTransform || l2.OTransform || l2.MsTransform || l2.msTransform || l2.transform || l2.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a2 = n2.toString().split(",")), "x" === t2 && (i2 = s2.WebKitCSSMatrix ? n2.m41 : 16 === a2.length ? parseFloat(a2[12]) : parseFloat(a2[4])), "y" === t2 && (i2 = s2.WebKitCSSMatrix ? n2.m42 : 16 === a2.length ? parseFloat(a2[13]) : parseFloat(a2[5])), i2 || 0;
      }
      function m(e2) {
        return "object" == typeof e2 && null !== e2 && e2.constructor && "Object" === Object.prototype.toString.call(e2).slice(8, -1);
      }
      function f(e2) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e2 instanceof HTMLElement : e2 && (1 === e2.nodeType || 11 === e2.nodeType);
      }
      function g() {
        const e2 = Object(arguments.length <= 0 ? void 0 : arguments[0]), t2 = ["__proto__", "constructor", "prototype"];
        for (let s2 = 1; s2 < arguments.length; s2 += 1) {
          const a2 = s2 < 0 || arguments.length <= s2 ? void 0 : arguments[s2];
          if (null != a2 && !f(a2)) {
            const s3 = Object.keys(Object(a2)).filter((e3) => t2.indexOf(e3) < 0);
            for (let t3 = 0, i2 = s3.length; t3 < i2; t3 += 1) {
              const i3 = s3[t3], r2 = Object.getOwnPropertyDescriptor(a2, i3);
              void 0 !== r2 && r2.enumerable && (m(e2[i3]) && m(a2[i3]) ? a2[i3].__swiper__ ? e2[i3] = a2[i3] : g(e2[i3], a2[i3]) : !m(e2[i3]) && m(a2[i3]) ? (e2[i3] = {}, a2[i3].__swiper__ ? e2[i3] = a2[i3] : g(e2[i3], a2[i3])) : e2[i3] = a2[i3]);
            }
          }
        }
        return e2;
      }
      function v(e2, t2, s2) {
        e2.style.setProperty(t2, s2);
      }
      function w(e2) {
        let { swiper: t2, targetPosition: s2, side: a2 } = e2;
        const i2 = r(), n2 = -t2.translate;
        let l2, o2 = null;
        const d2 = t2.params.speed;
        t2.wrapperEl.style.scrollSnapType = "none", i2.cancelAnimationFrame(t2.cssModeFrameID);
        const c2 = s2 > n2 ? "next" : "prev", p2 = (e3, t3) => "next" === c2 && e3 >= t3 || "prev" === c2 && e3 <= t3, u2 = () => {
          l2 = (/* @__PURE__ */ new Date()).getTime(), null === o2 && (o2 = l2);
          const e3 = Math.max(Math.min((l2 - o2) / d2, 1), 0), r2 = 0.5 - Math.cos(e3 * Math.PI) / 2;
          let c3 = n2 + r2 * (s2 - n2);
          if (p2(c3, s2) && (c3 = s2), t2.wrapperEl.scrollTo({ [a2]: c3 }), p2(c3, s2)) return t2.wrapperEl.style.overflow = "hidden", t2.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
            t2.wrapperEl.style.overflow = "", t2.wrapperEl.scrollTo({ [a2]: c3 });
          }), void i2.cancelAnimationFrame(t2.cssModeFrameID);
          t2.cssModeFrameID = i2.requestAnimationFrame(u2);
        };
        u2();
      }
      let b, x, y;
      function E() {
        return b || (b = function() {
          const e2 = r(), t2 = a();
          return { smoothScroll: t2.documentElement && "scrollBehavior" in t2.documentElement.style, touch: !!("ontouchstart" in e2 || e2.DocumentTouch && t2 instanceof e2.DocumentTouch), passiveListener: function() {
            let t3 = false;
            try {
              const s2 = Object.defineProperty({}, "passive", { get() {
                t3 = true;
              } });
              e2.addEventListener("testPassiveListener", null, s2);
            } catch (e3) {
            }
            return t3;
          }(), gestures: "ongesturestart" in e2 };
        }()), b;
      }
      function C(e2) {
        return void 0 === e2 && (e2 = {}), x || (x = function(e3) {
          let { userAgent: t2 } = void 0 === e3 ? {} : e3;
          const s2 = E(), a2 = r(), i2 = a2.navigator.platform, n2 = t2 || a2.navigator.userAgent, l2 = { ios: false, android: false }, o2 = a2.screen.width, d2 = a2.screen.height, c2 = n2.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p2 = n2.match(/(iPad).*OS\s([\d_]+)/);
          const u2 = n2.match(/(iPod)(.*OS\s([\d_]+))?/), h2 = !p2 && n2.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m2 = "Win32" === i2;
          let f2 = "MacIntel" === i2;
          return !p2 && f2 && s2.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o2}x${d2}`) >= 0 && (p2 = n2.match(/(Version)\/([\d.]+)/), p2 || (p2 = [0, 1, "13_0_0"]), f2 = false), c2 && !m2 && (l2.os = "android", l2.android = true), (p2 || h2 || u2) && (l2.os = "ios", l2.ios = true), l2;
        }(e2)), x;
      }
      function T() {
        return y || (y = function() {
          const e2 = r();
          return { isSafari: function() {
            const t2 = e2.navigator.userAgent.toLowerCase();
            return t2.indexOf("safari") >= 0 && t2.indexOf("chrome") < 0 && t2.indexOf("android") < 0;
          }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e2.navigator.userAgent) };
        }()), y;
      }
      Object.keys(c).forEach((e2) => {
        Object.defineProperty(d.fn, e2, { value: c[e2], writable: true });
      });
      var $ = { on(e2, t2, s2) {
        const a2 = this;
        if (!a2.eventsListeners || a2.destroyed) return a2;
        if ("function" != typeof t2) return a2;
        const i2 = s2 ? "unshift" : "push";
        return e2.split(" ").forEach((e3) => {
          a2.eventsListeners[e3] || (a2.eventsListeners[e3] = []), a2.eventsListeners[e3][i2](t2);
        }), a2;
      }, once(e2, t2, s2) {
        const a2 = this;
        if (!a2.eventsListeners || a2.destroyed) return a2;
        if ("function" != typeof t2) return a2;
        function i2() {
          a2.off(e2, i2), i2.__emitterProxy && delete i2.__emitterProxy;
          for (var s3 = arguments.length, r2 = new Array(s3), n2 = 0; n2 < s3; n2++) r2[n2] = arguments[n2];
          t2.apply(a2, r2);
        }
        return i2.__emitterProxy = t2, a2.on(e2, i2, s2);
      }, onAny(e2, t2) {
        const s2 = this;
        if (!s2.eventsListeners || s2.destroyed) return s2;
        if ("function" != typeof e2) return s2;
        const a2 = t2 ? "unshift" : "push";
        return s2.eventsAnyListeners.indexOf(e2) < 0 && s2.eventsAnyListeners[a2](e2), s2;
      }, offAny(e2) {
        const t2 = this;
        if (!t2.eventsListeners || t2.destroyed) return t2;
        if (!t2.eventsAnyListeners) return t2;
        const s2 = t2.eventsAnyListeners.indexOf(e2);
        return s2 >= 0 && t2.eventsAnyListeners.splice(s2, 1), t2;
      }, off(e2, t2) {
        const s2 = this;
        return !s2.eventsListeners || s2.destroyed ? s2 : s2.eventsListeners ? (e2.split(" ").forEach((e3) => {
          void 0 === t2 ? s2.eventsListeners[e3] = [] : s2.eventsListeners[e3] && s2.eventsListeners[e3].forEach((a2, i2) => {
            (a2 === t2 || a2.__emitterProxy && a2.__emitterProxy === t2) && s2.eventsListeners[e3].splice(i2, 1);
          });
        }), s2) : s2;
      }, emit() {
        const e2 = this;
        if (!e2.eventsListeners || e2.destroyed) return e2;
        if (!e2.eventsListeners) return e2;
        let t2, s2, a2;
        for (var i2 = arguments.length, r2 = new Array(i2), n2 = 0; n2 < i2; n2++) r2[n2] = arguments[n2];
        "string" == typeof r2[0] || Array.isArray(r2[0]) ? (t2 = r2[0], s2 = r2.slice(1, r2.length), a2 = e2) : (t2 = r2[0].events, s2 = r2[0].data, a2 = r2[0].context || e2), s2.unshift(a2);
        return (Array.isArray(t2) ? t2 : t2.split(" ")).forEach((t3) => {
          e2.eventsAnyListeners && e2.eventsAnyListeners.length && e2.eventsAnyListeners.forEach((e3) => {
            e3.apply(a2, [t3, ...s2]);
          }), e2.eventsListeners && e2.eventsListeners[t3] && e2.eventsListeners[t3].forEach((e3) => {
            e3.apply(a2, s2);
          });
        }), e2;
      } };
      var S = { updateSize: function() {
        const e2 = this;
        let t2, s2;
        const a2 = e2.$el;
        t2 = void 0 !== e2.params.width && null !== e2.params.width ? e2.params.width : a2[0].clientWidth, s2 = void 0 !== e2.params.height && null !== e2.params.height ? e2.params.height : a2[0].clientHeight, 0 === t2 && e2.isHorizontal() || 0 === s2 && e2.isVertical() || (t2 = t2 - parseInt(a2.css("padding-left") || 0, 10) - parseInt(a2.css("padding-right") || 0, 10), s2 = s2 - parseInt(a2.css("padding-top") || 0, 10) - parseInt(a2.css("padding-bottom") || 0, 10), Number.isNaN(t2) && (t2 = 0), Number.isNaN(s2) && (s2 = 0), Object.assign(e2, { width: t2, height: s2, size: e2.isHorizontal() ? t2 : s2 }));
      }, updateSlides: function() {
        const e2 = this;
        function t2(t3) {
          return e2.isHorizontal() ? t3 : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t3];
        }
        function s2(e3, s3) {
          return parseFloat(e3.getPropertyValue(t2(s3)) || 0);
        }
        const a2 = e2.params, { $wrapperEl: i2, size: r2, rtlTranslate: n2, wrongRTL: l2 } = e2, o2 = e2.virtual && a2.virtual.enabled, d2 = o2 ? e2.virtual.slides.length : e2.slides.length, c2 = i2.children(`.${e2.params.slideClass}`), p2 = o2 ? e2.virtual.slides.length : c2.length;
        let u2 = [];
        const h2 = [], m2 = [];
        let f2 = a2.slidesOffsetBefore;
        "function" == typeof f2 && (f2 = a2.slidesOffsetBefore.call(e2));
        let g2 = a2.slidesOffsetAfter;
        "function" == typeof g2 && (g2 = a2.slidesOffsetAfter.call(e2));
        const w2 = e2.snapGrid.length, b2 = e2.slidesGrid.length;
        let x2 = a2.spaceBetween, y2 = -f2, E2 = 0, C2 = 0;
        if (void 0 === r2) return;
        "string" == typeof x2 && x2.indexOf("%") >= 0 && (x2 = parseFloat(x2.replace("%", "")) / 100 * r2), e2.virtualSize = -x2, n2 ? c2.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : c2.css({ marginRight: "", marginBottom: "", marginTop: "" }), a2.centeredSlides && a2.cssMode && (v(e2.wrapperEl, "--swiper-centered-offset-before", ""), v(e2.wrapperEl, "--swiper-centered-offset-after", ""));
        const T2 = a2.grid && a2.grid.rows > 1 && e2.grid;
        let $2;
        T2 && e2.grid.initSlides(p2);
        const S2 = "auto" === a2.slidesPerView && a2.breakpoints && Object.keys(a2.breakpoints).filter((e3) => void 0 !== a2.breakpoints[e3].slidesPerView).length > 0;
        for (let i3 = 0; i3 < p2; i3 += 1) {
          $2 = 0;
          const n3 = c2.eq(i3);
          if (T2 && e2.grid.updateSlide(i3, n3, p2, t2), "none" !== n3.css("display")) {
            if ("auto" === a2.slidesPerView) {
              S2 && (c2[i3].style[t2("width")] = "");
              const r3 = getComputedStyle(n3[0]), l3 = n3[0].style.transform, o3 = n3[0].style.webkitTransform;
              if (l3 && (n3[0].style.transform = "none"), o3 && (n3[0].style.webkitTransform = "none"), a2.roundLengths) $2 = e2.isHorizontal() ? n3.outerWidth(true) : n3.outerHeight(true);
              else {
                const e3 = s2(r3, "width"), t3 = s2(r3, "padding-left"), a3 = s2(r3, "padding-right"), i4 = s2(r3, "margin-left"), l4 = s2(r3, "margin-right"), o4 = r3.getPropertyValue("box-sizing");
                if (o4 && "border-box" === o4) $2 = e3 + i4 + l4;
                else {
                  const { clientWidth: s3, offsetWidth: r4 } = n3[0];
                  $2 = e3 + t3 + a3 + i4 + l4 + (r4 - s3);
                }
              }
              l3 && (n3[0].style.transform = l3), o3 && (n3[0].style.webkitTransform = o3), a2.roundLengths && ($2 = Math.floor($2));
            } else $2 = (r2 - (a2.slidesPerView - 1) * x2) / a2.slidesPerView, a2.roundLengths && ($2 = Math.floor($2)), c2[i3] && (c2[i3].style[t2("width")] = `${$2}px`);
            c2[i3] && (c2[i3].swiperSlideSize = $2), m2.push($2), a2.centeredSlides ? (y2 = y2 + $2 / 2 + E2 / 2 + x2, 0 === E2 && 0 !== i3 && (y2 = y2 - r2 / 2 - x2), 0 === i3 && (y2 = y2 - r2 / 2 - x2), Math.abs(y2) < 1e-3 && (y2 = 0), a2.roundLengths && (y2 = Math.floor(y2)), C2 % a2.slidesPerGroup == 0 && u2.push(y2), h2.push(y2)) : (a2.roundLengths && (y2 = Math.floor(y2)), (C2 - Math.min(e2.params.slidesPerGroupSkip, C2)) % e2.params.slidesPerGroup == 0 && u2.push(y2), h2.push(y2), y2 = y2 + $2 + x2), e2.virtualSize += $2 + x2, E2 = $2, C2 += 1;
          }
        }
        if (e2.virtualSize = Math.max(e2.virtualSize, r2) + g2, n2 && l2 && ("slide" === a2.effect || "coverflow" === a2.effect) && i2.css({ width: `${e2.virtualSize + a2.spaceBetween}px` }), a2.setWrapperSize && i2.css({ [t2("width")]: `${e2.virtualSize + a2.spaceBetween}px` }), T2 && e2.grid.updateWrapperSize($2, u2, t2), !a2.centeredSlides) {
          const t3 = [];
          for (let s3 = 0; s3 < u2.length; s3 += 1) {
            let i3 = u2[s3];
            a2.roundLengths && (i3 = Math.floor(i3)), u2[s3] <= e2.virtualSize - r2 && t3.push(i3);
          }
          u2 = t3, Math.floor(e2.virtualSize - r2) - Math.floor(u2[u2.length - 1]) > 1 && u2.push(e2.virtualSize - r2);
        }
        if (0 === u2.length && (u2 = [0]), 0 !== a2.spaceBetween) {
          const s3 = e2.isHorizontal() && n2 ? "marginLeft" : t2("marginRight");
          c2.filter((e3, t3) => !a2.cssMode || t3 !== c2.length - 1).css({ [s3]: `${x2}px` });
        }
        if (a2.centeredSlides && a2.centeredSlidesBounds) {
          let e3 = 0;
          m2.forEach((t4) => {
            e3 += t4 + (a2.spaceBetween ? a2.spaceBetween : 0);
          }), e3 -= a2.spaceBetween;
          const t3 = e3 - r2;
          u2 = u2.map((e4) => e4 < 0 ? -f2 : e4 > t3 ? t3 + g2 : e4);
        }
        if (a2.centerInsufficientSlides) {
          let e3 = 0;
          if (m2.forEach((t3) => {
            e3 += t3 + (a2.spaceBetween ? a2.spaceBetween : 0);
          }), e3 -= a2.spaceBetween, e3 < r2) {
            const t3 = (r2 - e3) / 2;
            u2.forEach((e4, s3) => {
              u2[s3] = e4 - t3;
            }), h2.forEach((e4, s3) => {
              h2[s3] = e4 + t3;
            });
          }
        }
        if (Object.assign(e2, { slides: c2, snapGrid: u2, slidesGrid: h2, slidesSizesGrid: m2 }), a2.centeredSlides && a2.cssMode && !a2.centeredSlidesBounds) {
          v(e2.wrapperEl, "--swiper-centered-offset-before", -u2[0] + "px"), v(e2.wrapperEl, "--swiper-centered-offset-after", e2.size / 2 - m2[m2.length - 1] / 2 + "px");
          const t3 = -e2.snapGrid[0], s3 = -e2.slidesGrid[0];
          e2.snapGrid = e2.snapGrid.map((e3) => e3 + t3), e2.slidesGrid = e2.slidesGrid.map((e3) => e3 + s3);
        }
        if (p2 !== d2 && e2.emit("slidesLengthChange"), u2.length !== w2 && (e2.params.watchOverflow && e2.checkOverflow(), e2.emit("snapGridLengthChange")), h2.length !== b2 && e2.emit("slidesGridLengthChange"), a2.watchSlidesProgress && e2.updateSlidesOffset(), !(o2 || a2.cssMode || "slide" !== a2.effect && "fade" !== a2.effect)) {
          const t3 = `${a2.containerModifierClass}backface-hidden`, s3 = e2.$el.hasClass(t3);
          p2 <= a2.maxBackfaceHiddenSlides ? s3 || e2.$el.addClass(t3) : s3 && e2.$el.removeClass(t3);
        }
      }, updateAutoHeight: function(e2) {
        const t2 = this, s2 = [], a2 = t2.virtual && t2.params.virtual.enabled;
        let i2, r2 = 0;
        "number" == typeof e2 ? t2.setTransition(e2) : true === e2 && t2.setTransition(t2.params.speed);
        const n2 = (e3) => a2 ? t2.slides.filter((t3) => parseInt(t3.getAttribute("data-swiper-slide-index"), 10) === e3)[0] : t2.slides.eq(e3)[0];
        if ("auto" !== t2.params.slidesPerView && t2.params.slidesPerView > 1) if (t2.params.centeredSlides) (t2.visibleSlides || d([])).each((e3) => {
          s2.push(e3);
        });
        else for (i2 = 0; i2 < Math.ceil(t2.params.slidesPerView); i2 += 1) {
          const e3 = t2.activeIndex + i2;
          if (e3 > t2.slides.length && !a2) break;
          s2.push(n2(e3));
        }
        else s2.push(n2(t2.activeIndex));
        for (i2 = 0; i2 < s2.length; i2 += 1) if (void 0 !== s2[i2]) {
          const e3 = s2[i2].offsetHeight;
          r2 = e3 > r2 ? e3 : r2;
        }
        (r2 || 0 === r2) && t2.$wrapperEl.css("height", `${r2}px`);
      }, updateSlidesOffset: function() {
        const e2 = this, t2 = e2.slides;
        for (let s2 = 0; s2 < t2.length; s2 += 1) t2[s2].swiperSlideOffset = e2.isHorizontal() ? t2[s2].offsetLeft : t2[s2].offsetTop;
      }, updateSlidesProgress: function(e2) {
        void 0 === e2 && (e2 = this && this.translate || 0);
        const t2 = this, s2 = t2.params, { slides: a2, rtlTranslate: i2, snapGrid: r2 } = t2;
        if (0 === a2.length) return;
        void 0 === a2[0].swiperSlideOffset && t2.updateSlidesOffset();
        let n2 = -e2;
        i2 && (n2 = e2), a2.removeClass(s2.slideVisibleClass), t2.visibleSlidesIndexes = [], t2.visibleSlides = [];
        for (let e3 = 0; e3 < a2.length; e3 += 1) {
          const l2 = a2[e3];
          let o2 = l2.swiperSlideOffset;
          s2.cssMode && s2.centeredSlides && (o2 -= a2[0].swiperSlideOffset);
          const d2 = (n2 + (s2.centeredSlides ? t2.minTranslate() : 0) - o2) / (l2.swiperSlideSize + s2.spaceBetween), c2 = (n2 - r2[0] + (s2.centeredSlides ? t2.minTranslate() : 0) - o2) / (l2.swiperSlideSize + s2.spaceBetween), p2 = -(n2 - o2), u2 = p2 + t2.slidesSizesGrid[e3];
          (p2 >= 0 && p2 < t2.size - 1 || u2 > 1 && u2 <= t2.size || p2 <= 0 && u2 >= t2.size) && (t2.visibleSlides.push(l2), t2.visibleSlidesIndexes.push(e3), a2.eq(e3).addClass(s2.slideVisibleClass)), l2.progress = i2 ? -d2 : d2, l2.originalProgress = i2 ? -c2 : c2;
        }
        t2.visibleSlides = d(t2.visibleSlides);
      }, updateProgress: function(e2) {
        const t2 = this;
        if (void 0 === e2) {
          const s3 = t2.rtlTranslate ? -1 : 1;
          e2 = t2 && t2.translate && t2.translate * s3 || 0;
        }
        const s2 = t2.params, a2 = t2.maxTranslate() - t2.minTranslate();
        let { progress: i2, isBeginning: r2, isEnd: n2 } = t2;
        const l2 = r2, o2 = n2;
        0 === a2 ? (i2 = 0, r2 = true, n2 = true) : (i2 = (e2 - t2.minTranslate()) / a2, r2 = i2 <= 0, n2 = i2 >= 1), Object.assign(t2, { progress: i2, isBeginning: r2, isEnd: n2 }), (s2.watchSlidesProgress || s2.centeredSlides && s2.autoHeight) && t2.updateSlidesProgress(e2), r2 && !l2 && t2.emit("reachBeginning toEdge"), n2 && !o2 && t2.emit("reachEnd toEdge"), (l2 && !r2 || o2 && !n2) && t2.emit("fromEdge"), t2.emit("progress", i2);
      }, updateSlidesClasses: function() {
        const e2 = this, { slides: t2, params: s2, $wrapperEl: a2, activeIndex: i2, realIndex: r2 } = e2, n2 = e2.virtual && s2.virtual.enabled;
        let l2;
        t2.removeClass(`${s2.slideActiveClass} ${s2.slideNextClass} ${s2.slidePrevClass} ${s2.slideDuplicateActiveClass} ${s2.slideDuplicateNextClass} ${s2.slideDuplicatePrevClass}`), l2 = n2 ? e2.$wrapperEl.find(`.${s2.slideClass}[data-swiper-slide-index="${i2}"]`) : t2.eq(i2), l2.addClass(s2.slideActiveClass), s2.loop && (l2.hasClass(s2.slideDuplicateClass) ? a2.children(`.${s2.slideClass}:not(.${s2.slideDuplicateClass})[data-swiper-slide-index="${r2}"]`).addClass(s2.slideDuplicateActiveClass) : a2.children(`.${s2.slideClass}.${s2.slideDuplicateClass}[data-swiper-slide-index="${r2}"]`).addClass(s2.slideDuplicateActiveClass));
        let o2 = l2.nextAll(`.${s2.slideClass}`).eq(0).addClass(s2.slideNextClass);
        s2.loop && 0 === o2.length && (o2 = t2.eq(0), o2.addClass(s2.slideNextClass));
        let d2 = l2.prevAll(`.${s2.slideClass}`).eq(0).addClass(s2.slidePrevClass);
        s2.loop && 0 === d2.length && (d2 = t2.eq(-1), d2.addClass(s2.slidePrevClass)), s2.loop && (o2.hasClass(s2.slideDuplicateClass) ? a2.children(`.${s2.slideClass}:not(.${s2.slideDuplicateClass})[data-swiper-slide-index="${o2.attr("data-swiper-slide-index")}"]`).addClass(s2.slideDuplicateNextClass) : a2.children(`.${s2.slideClass}.${s2.slideDuplicateClass}[data-swiper-slide-index="${o2.attr("data-swiper-slide-index")}"]`).addClass(s2.slideDuplicateNextClass), d2.hasClass(s2.slideDuplicateClass) ? a2.children(`.${s2.slideClass}:not(.${s2.slideDuplicateClass})[data-swiper-slide-index="${d2.attr("data-swiper-slide-index")}"]`).addClass(s2.slideDuplicatePrevClass) : a2.children(`.${s2.slideClass}.${s2.slideDuplicateClass}[data-swiper-slide-index="${d2.attr("data-swiper-slide-index")}"]`).addClass(s2.slideDuplicatePrevClass)), e2.emitSlidesClasses();
      }, updateActiveIndex: function(e2) {
        const t2 = this, s2 = t2.rtlTranslate ? t2.translate : -t2.translate, { slidesGrid: a2, snapGrid: i2, params: r2, activeIndex: n2, realIndex: l2, snapIndex: o2 } = t2;
        let d2, c2 = e2;
        if (void 0 === c2) {
          for (let e3 = 0; e3 < a2.length; e3 += 1) void 0 !== a2[e3 + 1] ? s2 >= a2[e3] && s2 < a2[e3 + 1] - (a2[e3 + 1] - a2[e3]) / 2 ? c2 = e3 : s2 >= a2[e3] && s2 < a2[e3 + 1] && (c2 = e3 + 1) : s2 >= a2[e3] && (c2 = e3);
          r2.normalizeSlideIndex && (c2 < 0 || void 0 === c2) && (c2 = 0);
        }
        if (i2.indexOf(s2) >= 0) d2 = i2.indexOf(s2);
        else {
          const e3 = Math.min(r2.slidesPerGroupSkip, c2);
          d2 = e3 + Math.floor((c2 - e3) / r2.slidesPerGroup);
        }
        if (d2 >= i2.length && (d2 = i2.length - 1), c2 === n2) return void (d2 !== o2 && (t2.snapIndex = d2, t2.emit("snapIndexChange")));
        const p2 = parseInt(t2.slides.eq(c2).attr("data-swiper-slide-index") || c2, 10);
        Object.assign(t2, { snapIndex: d2, realIndex: p2, previousIndex: n2, activeIndex: c2 }), t2.emit("activeIndexChange"), t2.emit("snapIndexChange"), l2 !== p2 && t2.emit("realIndexChange"), (t2.initialized || t2.params.runCallbacksOnInit) && t2.emit("slideChange");
      }, updateClickedSlide: function(e2) {
        const t2 = this, s2 = t2.params, a2 = d(e2).closest(`.${s2.slideClass}`)[0];
        let i2, r2 = false;
        if (a2) {
          for (let e3 = 0; e3 < t2.slides.length; e3 += 1) if (t2.slides[e3] === a2) {
            r2 = true, i2 = e3;
            break;
          }
        }
        if (!a2 || !r2) return t2.clickedSlide = void 0, void (t2.clickedIndex = void 0);
        t2.clickedSlide = a2, t2.virtual && t2.params.virtual.enabled ? t2.clickedIndex = parseInt(d(a2).attr("data-swiper-slide-index"), 10) : t2.clickedIndex = i2, s2.slideToClickedSlide && void 0 !== t2.clickedIndex && t2.clickedIndex !== t2.activeIndex && t2.slideToClickedSlide();
      } };
      var M = { getTranslate: function(e2) {
        void 0 === e2 && (e2 = this.isHorizontal() ? "x" : "y");
        const { params: t2, rtlTranslate: s2, translate: a2, $wrapperEl: i2 } = this;
        if (t2.virtualTranslate) return s2 ? -a2 : a2;
        if (t2.cssMode) return a2;
        let r2 = h(i2[0], e2);
        return s2 && (r2 = -r2), r2 || 0;
      }, setTranslate: function(e2, t2) {
        const s2 = this, { rtlTranslate: a2, params: i2, $wrapperEl: r2, wrapperEl: n2, progress: l2 } = s2;
        let o2, d2 = 0, c2 = 0;
        s2.isHorizontal() ? d2 = a2 ? -e2 : e2 : c2 = e2, i2.roundLengths && (d2 = Math.floor(d2), c2 = Math.floor(c2)), i2.cssMode ? n2[s2.isHorizontal() ? "scrollLeft" : "scrollTop"] = s2.isHorizontal() ? -d2 : -c2 : i2.virtualTranslate || r2.transform(`translate3d(${d2}px, ${c2}px, 0px)`), s2.previousTranslate = s2.translate, s2.translate = s2.isHorizontal() ? d2 : c2;
        const p2 = s2.maxTranslate() - s2.minTranslate();
        o2 = 0 === p2 ? 0 : (e2 - s2.minTranslate()) / p2, o2 !== l2 && s2.updateProgress(e2), s2.emit("setTranslate", s2.translate, t2);
      }, minTranslate: function() {
        return -this.snapGrid[0];
      }, maxTranslate: function() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }, translateTo: function(e2, t2, s2, a2, i2) {
        void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === s2 && (s2 = true), void 0 === a2 && (a2 = true);
        const r2 = this, { params: n2, wrapperEl: l2 } = r2;
        if (r2.animating && n2.preventInteractionOnTransition) return false;
        const o2 = r2.minTranslate(), d2 = r2.maxTranslate();
        let c2;
        if (c2 = a2 && e2 > o2 ? o2 : a2 && e2 < d2 ? d2 : e2, r2.updateProgress(c2), n2.cssMode) {
          const e3 = r2.isHorizontal();
          if (0 === t2) l2[e3 ? "scrollLeft" : "scrollTop"] = -c2;
          else {
            if (!r2.support.smoothScroll) return w({ swiper: r2, targetPosition: -c2, side: e3 ? "left" : "top" }), true;
            l2.scrollTo({ [e3 ? "left" : "top"]: -c2, behavior: "smooth" });
          }
          return true;
        }
        return 0 === t2 ? (r2.setTransition(0), r2.setTranslate(c2), s2 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionEnd"))) : (r2.setTransition(t2), r2.setTranslate(c2), s2 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionStart")), r2.animating || (r2.animating = true, r2.onTranslateToWrapperTransitionEnd || (r2.onTranslateToWrapperTransitionEnd = function(e3) {
          r2 && !r2.destroyed && e3.target === this && (r2.$wrapperEl[0].removeEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r2.onTranslateToWrapperTransitionEnd), r2.onTranslateToWrapperTransitionEnd = null, delete r2.onTranslateToWrapperTransitionEnd, s2 && r2.emit("transitionEnd"));
        }), r2.$wrapperEl[0].addEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.$wrapperEl[0].addEventListener("webkitTransitionEnd", r2.onTranslateToWrapperTransitionEnd))), true;
      } };
      function P(e2) {
        let { swiper: t2, runCallbacks: s2, direction: a2, step: i2 } = e2;
        const { activeIndex: r2, previousIndex: n2 } = t2;
        let l2 = a2;
        if (l2 || (l2 = r2 > n2 ? "next" : r2 < n2 ? "prev" : "reset"), t2.emit(`transition${i2}`), s2 && r2 !== n2) {
          if ("reset" === l2) return void t2.emit(`slideResetTransition${i2}`);
          t2.emit(`slideChangeTransition${i2}`), "next" === l2 ? t2.emit(`slideNextTransition${i2}`) : t2.emit(`slidePrevTransition${i2}`);
        }
      }
      var k = { slideTo: function(e2, t2, s2, a2, i2) {
        if (void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === s2 && (s2 = true), "number" != typeof e2 && "string" != typeof e2) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e2}] given.`);
        if ("string" == typeof e2) {
          const t3 = parseInt(e2, 10);
          if (!isFinite(t3)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e2}] given.`);
          e2 = t3;
        }
        const r2 = this;
        let n2 = e2;
        n2 < 0 && (n2 = 0);
        const { params: l2, snapGrid: o2, slidesGrid: d2, previousIndex: c2, activeIndex: p2, rtlTranslate: u2, wrapperEl: h2, enabled: m2 } = r2;
        if (r2.animating && l2.preventInteractionOnTransition || !m2 && !a2 && !i2) return false;
        const f2 = Math.min(r2.params.slidesPerGroupSkip, n2);
        let g2 = f2 + Math.floor((n2 - f2) / r2.params.slidesPerGroup);
        g2 >= o2.length && (g2 = o2.length - 1);
        const v2 = -o2[g2];
        if (l2.normalizeSlideIndex) for (let e3 = 0; e3 < d2.length; e3 += 1) {
          const t3 = -Math.floor(100 * v2), s3 = Math.floor(100 * d2[e3]), a3 = Math.floor(100 * d2[e3 + 1]);
          void 0 !== d2[e3 + 1] ? t3 >= s3 && t3 < a3 - (a3 - s3) / 2 ? n2 = e3 : t3 >= s3 && t3 < a3 && (n2 = e3 + 1) : t3 >= s3 && (n2 = e3);
        }
        if (r2.initialized && n2 !== p2) {
          if (!r2.allowSlideNext && v2 < r2.translate && v2 < r2.minTranslate()) return false;
          if (!r2.allowSlidePrev && v2 > r2.translate && v2 > r2.maxTranslate() && (p2 || 0) !== n2) return false;
        }
        let b2;
        if (n2 !== (c2 || 0) && s2 && r2.emit("beforeSlideChangeStart"), r2.updateProgress(v2), b2 = n2 > p2 ? "next" : n2 < p2 ? "prev" : "reset", u2 && -v2 === r2.translate || !u2 && v2 === r2.translate) return r2.updateActiveIndex(n2), l2.autoHeight && r2.updateAutoHeight(), r2.updateSlidesClasses(), "slide" !== l2.effect && r2.setTranslate(v2), "reset" !== b2 && (r2.transitionStart(s2, b2), r2.transitionEnd(s2, b2)), false;
        if (l2.cssMode) {
          const e3 = r2.isHorizontal(), s3 = u2 ? v2 : -v2;
          if (0 === t2) {
            const t3 = r2.virtual && r2.params.virtual.enabled;
            t3 && (r2.wrapperEl.style.scrollSnapType = "none", r2._immediateVirtual = true), h2[e3 ? "scrollLeft" : "scrollTop"] = s3, t3 && requestAnimationFrame(() => {
              r2.wrapperEl.style.scrollSnapType = "", r2._swiperImmediateVirtual = false;
            });
          } else {
            if (!r2.support.smoothScroll) return w({ swiper: r2, targetPosition: s3, side: e3 ? "left" : "top" }), true;
            h2.scrollTo({ [e3 ? "left" : "top"]: s3, behavior: "smooth" });
          }
          return true;
        }
        return r2.setTransition(t2), r2.setTranslate(v2), r2.updateActiveIndex(n2), r2.updateSlidesClasses(), r2.emit("beforeTransitionStart", t2, a2), r2.transitionStart(s2, b2), 0 === t2 ? r2.transitionEnd(s2, b2) : r2.animating || (r2.animating = true, r2.onSlideToWrapperTransitionEnd || (r2.onSlideToWrapperTransitionEnd = function(e3) {
          r2 && !r2.destroyed && e3.target === this && (r2.$wrapperEl[0].removeEventListener("transitionend", r2.onSlideToWrapperTransitionEnd), r2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r2.onSlideToWrapperTransitionEnd), r2.onSlideToWrapperTransitionEnd = null, delete r2.onSlideToWrapperTransitionEnd, r2.transitionEnd(s2, b2));
        }), r2.$wrapperEl[0].addEventListener("transitionend", r2.onSlideToWrapperTransitionEnd), r2.$wrapperEl[0].addEventListener("webkitTransitionEnd", r2.onSlideToWrapperTransitionEnd)), true;
      }, slideToLoop: function(e2, t2, s2, a2) {
        if (void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === s2 && (s2 = true), "string" == typeof e2) {
          const t3 = parseInt(e2, 10);
          if (!isFinite(t3)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e2}] given.`);
          e2 = t3;
        }
        const i2 = this;
        let r2 = e2;
        return i2.params.loop && (r2 += i2.loopedSlides), i2.slideTo(r2, t2, s2, a2);
      }, slideNext: function(e2, t2, s2) {
        void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true);
        const a2 = this, { animating: i2, enabled: r2, params: n2 } = a2;
        if (!r2) return a2;
        let l2 = n2.slidesPerGroup;
        "auto" === n2.slidesPerView && 1 === n2.slidesPerGroup && n2.slidesPerGroupAuto && (l2 = Math.max(a2.slidesPerViewDynamic("current", true), 1));
        const o2 = a2.activeIndex < n2.slidesPerGroupSkip ? 1 : l2;
        if (n2.loop) {
          if (i2 && n2.loopPreventsSlide) return false;
          a2.loopFix(), a2._clientLeft = a2.$wrapperEl[0].clientLeft;
        }
        return n2.rewind && a2.isEnd ? a2.slideTo(0, e2, t2, s2) : a2.slideTo(a2.activeIndex + o2, e2, t2, s2);
      }, slidePrev: function(e2, t2, s2) {
        void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true);
        const a2 = this, { params: i2, animating: r2, snapGrid: n2, slidesGrid: l2, rtlTranslate: o2, enabled: d2 } = a2;
        if (!d2) return a2;
        if (i2.loop) {
          if (r2 && i2.loopPreventsSlide) return false;
          a2.loopFix(), a2._clientLeft = a2.$wrapperEl[0].clientLeft;
        }
        function c2(e3) {
          return e3 < 0 ? -Math.floor(Math.abs(e3)) : Math.floor(e3);
        }
        const p2 = c2(o2 ? a2.translate : -a2.translate), u2 = n2.map((e3) => c2(e3));
        let h2 = n2[u2.indexOf(p2) - 1];
        if (void 0 === h2 && i2.cssMode) {
          let e3;
          n2.forEach((t3, s3) => {
            p2 >= t3 && (e3 = s3);
          }), void 0 !== e3 && (h2 = n2[e3 > 0 ? e3 - 1 : e3]);
        }
        let m2 = 0;
        if (void 0 !== h2 && (m2 = l2.indexOf(h2), m2 < 0 && (m2 = a2.activeIndex - 1), "auto" === i2.slidesPerView && 1 === i2.slidesPerGroup && i2.slidesPerGroupAuto && (m2 = m2 - a2.slidesPerViewDynamic("previous", true) + 1, m2 = Math.max(m2, 0))), i2.rewind && a2.isBeginning) {
          const i3 = a2.params.virtual && a2.params.virtual.enabled && a2.virtual ? a2.virtual.slides.length - 1 : a2.slides.length - 1;
          return a2.slideTo(i3, e2, t2, s2);
        }
        return a2.slideTo(m2, e2, t2, s2);
      }, slideReset: function(e2, t2, s2) {
        return void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true), this.slideTo(this.activeIndex, e2, t2, s2);
      }, slideToClosest: function(e2, t2, s2, a2) {
        void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true), void 0 === a2 && (a2 = 0.5);
        const i2 = this;
        let r2 = i2.activeIndex;
        const n2 = Math.min(i2.params.slidesPerGroupSkip, r2), l2 = n2 + Math.floor((r2 - n2) / i2.params.slidesPerGroup), o2 = i2.rtlTranslate ? i2.translate : -i2.translate;
        if (o2 >= i2.snapGrid[l2]) {
          const e3 = i2.snapGrid[l2];
          o2 - e3 > (i2.snapGrid[l2 + 1] - e3) * a2 && (r2 += i2.params.slidesPerGroup);
        } else {
          const e3 = i2.snapGrid[l2 - 1];
          o2 - e3 <= (i2.snapGrid[l2] - e3) * a2 && (r2 -= i2.params.slidesPerGroup);
        }
        return r2 = Math.max(r2, 0), r2 = Math.min(r2, i2.slidesGrid.length - 1), i2.slideTo(r2, e2, t2, s2);
      }, slideToClickedSlide: function() {
        const e2 = this, { params: t2, $wrapperEl: s2 } = e2, a2 = "auto" === t2.slidesPerView ? e2.slidesPerViewDynamic() : t2.slidesPerView;
        let i2, r2 = e2.clickedIndex;
        if (t2.loop) {
          if (e2.animating) return;
          i2 = parseInt(d(e2.clickedSlide).attr("data-swiper-slide-index"), 10), t2.centeredSlides ? r2 < e2.loopedSlides - a2 / 2 || r2 > e2.slides.length - e2.loopedSlides + a2 / 2 ? (e2.loopFix(), r2 = s2.children(`.${t2.slideClass}[data-swiper-slide-index="${i2}"]:not(.${t2.slideDuplicateClass})`).eq(0).index(), p(() => {
            e2.slideTo(r2);
          })) : e2.slideTo(r2) : r2 > e2.slides.length - a2 ? (e2.loopFix(), r2 = s2.children(`.${t2.slideClass}[data-swiper-slide-index="${i2}"]:not(.${t2.slideDuplicateClass})`).eq(0).index(), p(() => {
            e2.slideTo(r2);
          })) : e2.slideTo(r2);
        } else e2.slideTo(r2);
      } };
      var z = { loopCreate: function() {
        const e2 = this, t2 = a(), { params: s2, $wrapperEl: i2 } = e2, r2 = i2.children().length > 0 ? d(i2.children()[0].parentNode) : i2;
        r2.children(`.${s2.slideClass}.${s2.slideDuplicateClass}`).remove();
        let n2 = r2.children(`.${s2.slideClass}`);
        if (s2.loopFillGroupWithBlank) {
          const e3 = s2.slidesPerGroup - n2.length % s2.slidesPerGroup;
          if (e3 !== s2.slidesPerGroup) {
            for (let a2 = 0; a2 < e3; a2 += 1) {
              const e4 = d(t2.createElement("div")).addClass(`${s2.slideClass} ${s2.slideBlankClass}`);
              r2.append(e4);
            }
            n2 = r2.children(`.${s2.slideClass}`);
          }
        }
        "auto" !== s2.slidesPerView || s2.loopedSlides || (s2.loopedSlides = n2.length), e2.loopedSlides = Math.ceil(parseFloat(s2.loopedSlides || s2.slidesPerView, 10)), e2.loopedSlides += s2.loopAdditionalSlides, e2.loopedSlides > n2.length && e2.params.loopedSlidesLimit && (e2.loopedSlides = n2.length);
        const l2 = [], o2 = [];
        n2.each((e3, t3) => {
          d(e3).attr("data-swiper-slide-index", t3);
        });
        for (let t3 = 0; t3 < e2.loopedSlides; t3 += 1) {
          const e3 = t3 - Math.floor(t3 / n2.length) * n2.length;
          o2.push(n2.eq(e3)[0]), l2.unshift(n2.eq(n2.length - e3 - 1)[0]);
        }
        for (let e3 = 0; e3 < o2.length; e3 += 1) r2.append(d(o2[e3].cloneNode(true)).addClass(s2.slideDuplicateClass));
        for (let e3 = l2.length - 1; e3 >= 0; e3 -= 1) r2.prepend(d(l2[e3].cloneNode(true)).addClass(s2.slideDuplicateClass));
      }, loopFix: function() {
        const e2 = this;
        e2.emit("beforeLoopFix");
        const { activeIndex: t2, slides: s2, loopedSlides: a2, allowSlidePrev: i2, allowSlideNext: r2, snapGrid: n2, rtlTranslate: l2 } = e2;
        let o2;
        e2.allowSlidePrev = true, e2.allowSlideNext = true;
        const d2 = -n2[t2] - e2.getTranslate();
        if (t2 < a2) {
          o2 = s2.length - 3 * a2 + t2, o2 += a2;
          e2.slideTo(o2, 0, false, true) && 0 !== d2 && e2.setTranslate((l2 ? -e2.translate : e2.translate) - d2);
        } else if (t2 >= s2.length - a2) {
          o2 = -s2.length + t2 + a2, o2 += a2;
          e2.slideTo(o2, 0, false, true) && 0 !== d2 && e2.setTranslate((l2 ? -e2.translate : e2.translate) - d2);
        }
        e2.allowSlidePrev = i2, e2.allowSlideNext = r2, e2.emit("loopFix");
      }, loopDestroy: function() {
        const { $wrapperEl: e2, params: t2, slides: s2 } = this;
        e2.children(`.${t2.slideClass}.${t2.slideDuplicateClass},.${t2.slideClass}.${t2.slideBlankClass}`).remove(), s2.removeAttr("data-swiper-slide-index");
      } };
      function L(e2) {
        const t2 = this, s2 = a(), i2 = r(), n2 = t2.touchEventsData, { params: l2, touches: o2, enabled: c2 } = t2;
        if (!c2) return;
        if (t2.animating && l2.preventInteractionOnTransition) return;
        !t2.animating && l2.cssMode && l2.loop && t2.loopFix();
        let p2 = e2;
        p2.originalEvent && (p2 = p2.originalEvent);
        let h2 = d(p2.target);
        if ("wrapper" === l2.touchEventsTarget && !h2.closest(t2.wrapperEl).length) return;
        if (n2.isTouchEvent = "touchstart" === p2.type, !n2.isTouchEvent && "which" in p2 && 3 === p2.which) return;
        if (!n2.isTouchEvent && "button" in p2 && p2.button > 0) return;
        if (n2.isTouched && n2.isMoved) return;
        const m2 = !!l2.noSwipingClass && "" !== l2.noSwipingClass, f2 = e2.composedPath ? e2.composedPath() : e2.path;
        m2 && p2.target && p2.target.shadowRoot && f2 && (h2 = d(f2[0]));
        const g2 = l2.noSwipingSelector ? l2.noSwipingSelector : `.${l2.noSwipingClass}`, v2 = !(!p2.target || !p2.target.shadowRoot);
        if (l2.noSwiping && (v2 ? function(e3, t3) {
          return void 0 === t3 && (t3 = this), function t4(s3) {
            if (!s3 || s3 === a() || s3 === r()) return null;
            s3.assignedSlot && (s3 = s3.assignedSlot);
            const i3 = s3.closest(e3);
            return i3 || s3.getRootNode ? i3 || t4(s3.getRootNode().host) : null;
          }(t3);
        }(g2, h2[0]) : h2.closest(g2)[0])) return void (t2.allowClick = true);
        if (l2.swipeHandler && !h2.closest(l2.swipeHandler)[0]) return;
        o2.currentX = "touchstart" === p2.type ? p2.targetTouches[0].pageX : p2.pageX, o2.currentY = "touchstart" === p2.type ? p2.targetTouches[0].pageY : p2.pageY;
        const w2 = o2.currentX, b2 = o2.currentY, x2 = l2.edgeSwipeDetection || l2.iOSEdgeSwipeDetection, y2 = l2.edgeSwipeThreshold || l2.iOSEdgeSwipeThreshold;
        if (x2 && (w2 <= y2 || w2 >= i2.innerWidth - y2)) {
          if ("prevent" !== x2) return;
          e2.preventDefault();
        }
        if (Object.assign(n2, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), o2.startX = w2, o2.startY = b2, n2.touchStartTime = u(), t2.allowClick = true, t2.updateSize(), t2.swipeDirection = void 0, l2.threshold > 0 && (n2.allowThresholdMove = false), "touchstart" !== p2.type) {
          let e3 = true;
          h2.is(n2.focusableElements) && (e3 = false, "SELECT" === h2[0].nodeName && (n2.isTouched = false)), s2.activeElement && d(s2.activeElement).is(n2.focusableElements) && s2.activeElement !== h2[0] && s2.activeElement.blur();
          const a2 = e3 && t2.allowTouchMove && l2.touchStartPreventDefault;
          !l2.touchStartForcePreventDefault && !a2 || h2[0].isContentEditable || p2.preventDefault();
        }
        t2.params.freeMode && t2.params.freeMode.enabled && t2.freeMode && t2.animating && !l2.cssMode && t2.freeMode.onTouchStart(), t2.emit("touchStart", p2);
      }
      function O(e2) {
        const t2 = a(), s2 = this, i2 = s2.touchEventsData, { params: r2, touches: n2, rtlTranslate: l2, enabled: o2 } = s2;
        if (!o2) return;
        let c2 = e2;
        if (c2.originalEvent && (c2 = c2.originalEvent), !i2.isTouched) return void (i2.startMoving && i2.isScrolling && s2.emit("touchMoveOpposite", c2));
        if (i2.isTouchEvent && "touchmove" !== c2.type) return;
        const p2 = "touchmove" === c2.type && c2.targetTouches && (c2.targetTouches[0] || c2.changedTouches[0]), h2 = "touchmove" === c2.type ? p2.pageX : c2.pageX, m2 = "touchmove" === c2.type ? p2.pageY : c2.pageY;
        if (c2.preventedByNestedSwiper) return n2.startX = h2, void (n2.startY = m2);
        if (!s2.allowTouchMove) return d(c2.target).is(i2.focusableElements) || (s2.allowClick = false), void (i2.isTouched && (Object.assign(n2, { startX: h2, startY: m2, currentX: h2, currentY: m2 }), i2.touchStartTime = u()));
        if (i2.isTouchEvent && r2.touchReleaseOnEdges && !r2.loop) {
          if (s2.isVertical()) {
            if (m2 < n2.startY && s2.translate <= s2.maxTranslate() || m2 > n2.startY && s2.translate >= s2.minTranslate()) return i2.isTouched = false, void (i2.isMoved = false);
          } else if (h2 < n2.startX && s2.translate <= s2.maxTranslate() || h2 > n2.startX && s2.translate >= s2.minTranslate()) return;
        }
        if (i2.isTouchEvent && t2.activeElement && c2.target === t2.activeElement && d(c2.target).is(i2.focusableElements)) return i2.isMoved = true, void (s2.allowClick = false);
        if (i2.allowTouchCallbacks && s2.emit("touchMove", c2), c2.targetTouches && c2.targetTouches.length > 1) return;
        n2.currentX = h2, n2.currentY = m2;
        const f2 = n2.currentX - n2.startX, g2 = n2.currentY - n2.startY;
        if (s2.params.threshold && Math.sqrt(f2 ** 2 + g2 ** 2) < s2.params.threshold) return;
        if (void 0 === i2.isScrolling) {
          let e3;
          s2.isHorizontal() && n2.currentY === n2.startY || s2.isVertical() && n2.currentX === n2.startX ? i2.isScrolling = false : f2 * f2 + g2 * g2 >= 25 && (e3 = 180 * Math.atan2(Math.abs(g2), Math.abs(f2)) / Math.PI, i2.isScrolling = s2.isHorizontal() ? e3 > r2.touchAngle : 90 - e3 > r2.touchAngle);
        }
        if (i2.isScrolling && s2.emit("touchMoveOpposite", c2), void 0 === i2.startMoving && (n2.currentX === n2.startX && n2.currentY === n2.startY || (i2.startMoving = true)), i2.isScrolling) return void (i2.isTouched = false);
        if (!i2.startMoving) return;
        s2.allowClick = false, !r2.cssMode && c2.cancelable && c2.preventDefault(), r2.touchMoveStopPropagation && !r2.nested && c2.stopPropagation(), i2.isMoved || (r2.loop && !r2.cssMode && s2.loopFix(), i2.startTranslate = s2.getTranslate(), s2.setTransition(0), s2.animating && s2.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i2.allowMomentumBounce = false, !r2.grabCursor || true !== s2.allowSlideNext && true !== s2.allowSlidePrev || s2.setGrabCursor(true), s2.emit("sliderFirstMove", c2)), s2.emit("sliderMove", c2), i2.isMoved = true;
        let v2 = s2.isHorizontal() ? f2 : g2;
        n2.diff = v2, v2 *= r2.touchRatio, l2 && (v2 = -v2), s2.swipeDirection = v2 > 0 ? "prev" : "next", i2.currentTranslate = v2 + i2.startTranslate;
        let w2 = true, b2 = r2.resistanceRatio;
        if (r2.touchReleaseOnEdges && (b2 = 0), v2 > 0 && i2.currentTranslate > s2.minTranslate() ? (w2 = false, r2.resistance && (i2.currentTranslate = s2.minTranslate() - 1 + (-s2.minTranslate() + i2.startTranslate + v2) ** b2)) : v2 < 0 && i2.currentTranslate < s2.maxTranslate() && (w2 = false, r2.resistance && (i2.currentTranslate = s2.maxTranslate() + 1 - (s2.maxTranslate() - i2.startTranslate - v2) ** b2)), w2 && (c2.preventedByNestedSwiper = true), !s2.allowSlideNext && "next" === s2.swipeDirection && i2.currentTranslate < i2.startTranslate && (i2.currentTranslate = i2.startTranslate), !s2.allowSlidePrev && "prev" === s2.swipeDirection && i2.currentTranslate > i2.startTranslate && (i2.currentTranslate = i2.startTranslate), s2.allowSlidePrev || s2.allowSlideNext || (i2.currentTranslate = i2.startTranslate), r2.threshold > 0) {
          if (!(Math.abs(v2) > r2.threshold || i2.allowThresholdMove)) return void (i2.currentTranslate = i2.startTranslate);
          if (!i2.allowThresholdMove) return i2.allowThresholdMove = true, n2.startX = n2.currentX, n2.startY = n2.currentY, i2.currentTranslate = i2.startTranslate, void (n2.diff = s2.isHorizontal() ? n2.currentX - n2.startX : n2.currentY - n2.startY);
        }
        r2.followFinger && !r2.cssMode && ((r2.freeMode && r2.freeMode.enabled && s2.freeMode || r2.watchSlidesProgress) && (s2.updateActiveIndex(), s2.updateSlidesClasses()), s2.params.freeMode && r2.freeMode.enabled && s2.freeMode && s2.freeMode.onTouchMove(), s2.updateProgress(i2.currentTranslate), s2.setTranslate(i2.currentTranslate));
      }
      function I(e2) {
        const t2 = this, s2 = t2.touchEventsData, { params: a2, touches: i2, rtlTranslate: r2, slidesGrid: n2, enabled: l2 } = t2;
        if (!l2) return;
        let o2 = e2;
        if (o2.originalEvent && (o2 = o2.originalEvent), s2.allowTouchCallbacks && t2.emit("touchEnd", o2), s2.allowTouchCallbacks = false, !s2.isTouched) return s2.isMoved && a2.grabCursor && t2.setGrabCursor(false), s2.isMoved = false, void (s2.startMoving = false);
        a2.grabCursor && s2.isMoved && s2.isTouched && (true === t2.allowSlideNext || true === t2.allowSlidePrev) && t2.setGrabCursor(false);
        const d2 = u(), c2 = d2 - s2.touchStartTime;
        if (t2.allowClick) {
          const e3 = o2.path || o2.composedPath && o2.composedPath();
          t2.updateClickedSlide(e3 && e3[0] || o2.target), t2.emit("tap click", o2), c2 < 300 && d2 - s2.lastClickTime < 300 && t2.emit("doubleTap doubleClick", o2);
        }
        if (s2.lastClickTime = u(), p(() => {
          t2.destroyed || (t2.allowClick = true);
        }), !s2.isTouched || !s2.isMoved || !t2.swipeDirection || 0 === i2.diff || s2.currentTranslate === s2.startTranslate) return s2.isTouched = false, s2.isMoved = false, void (s2.startMoving = false);
        let h2;
        if (s2.isTouched = false, s2.isMoved = false, s2.startMoving = false, h2 = a2.followFinger ? r2 ? t2.translate : -t2.translate : -s2.currentTranslate, a2.cssMode) return;
        if (t2.params.freeMode && a2.freeMode.enabled) return void t2.freeMode.onTouchEnd({ currentPos: h2 });
        let m2 = 0, f2 = t2.slidesSizesGrid[0];
        for (let e3 = 0; e3 < n2.length; e3 += e3 < a2.slidesPerGroupSkip ? 1 : a2.slidesPerGroup) {
          const t3 = e3 < a2.slidesPerGroupSkip - 1 ? 1 : a2.slidesPerGroup;
          void 0 !== n2[e3 + t3] ? h2 >= n2[e3] && h2 < n2[e3 + t3] && (m2 = e3, f2 = n2[e3 + t3] - n2[e3]) : h2 >= n2[e3] && (m2 = e3, f2 = n2[n2.length - 1] - n2[n2.length - 2]);
        }
        let g2 = null, v2 = null;
        a2.rewind && (t2.isBeginning ? v2 = t2.params.virtual && t2.params.virtual.enabled && t2.virtual ? t2.virtual.slides.length - 1 : t2.slides.length - 1 : t2.isEnd && (g2 = 0));
        const w2 = (h2 - n2[m2]) / f2, b2 = m2 < a2.slidesPerGroupSkip - 1 ? 1 : a2.slidesPerGroup;
        if (c2 > a2.longSwipesMs) {
          if (!a2.longSwipes) return void t2.slideTo(t2.activeIndex);
          "next" === t2.swipeDirection && (w2 >= a2.longSwipesRatio ? t2.slideTo(a2.rewind && t2.isEnd ? g2 : m2 + b2) : t2.slideTo(m2)), "prev" === t2.swipeDirection && (w2 > 1 - a2.longSwipesRatio ? t2.slideTo(m2 + b2) : null !== v2 && w2 < 0 && Math.abs(w2) > a2.longSwipesRatio ? t2.slideTo(v2) : t2.slideTo(m2));
        } else {
          if (!a2.shortSwipes) return void t2.slideTo(t2.activeIndex);
          t2.navigation && (o2.target === t2.navigation.nextEl || o2.target === t2.navigation.prevEl) ? o2.target === t2.navigation.nextEl ? t2.slideTo(m2 + b2) : t2.slideTo(m2) : ("next" === t2.swipeDirection && t2.slideTo(null !== g2 ? g2 : m2 + b2), "prev" === t2.swipeDirection && t2.slideTo(null !== v2 ? v2 : m2));
        }
      }
      function A() {
        const e2 = this, { params: t2, el: s2 } = e2;
        if (s2 && 0 === s2.offsetWidth) return;
        t2.breakpoints && e2.setBreakpoint();
        const { allowSlideNext: a2, allowSlidePrev: i2, snapGrid: r2 } = e2;
        e2.allowSlideNext = true, e2.allowSlidePrev = true, e2.updateSize(), e2.updateSlides(), e2.updateSlidesClasses(), ("auto" === t2.slidesPerView || t2.slidesPerView > 1) && e2.isEnd && !e2.isBeginning && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true), e2.autoplay && e2.autoplay.running && e2.autoplay.paused && e2.autoplay.run(), e2.allowSlidePrev = i2, e2.allowSlideNext = a2, e2.params.watchOverflow && r2 !== e2.snapGrid && e2.checkOverflow();
      }
      function D(e2) {
        const t2 = this;
        t2.enabled && (t2.allowClick || (t2.params.preventClicks && e2.preventDefault(), t2.params.preventClicksPropagation && t2.animating && (e2.stopPropagation(), e2.stopImmediatePropagation())));
      }
      function G() {
        const e2 = this, { wrapperEl: t2, rtlTranslate: s2, enabled: a2 } = e2;
        if (!a2) return;
        let i2;
        e2.previousTranslate = e2.translate, e2.isHorizontal() ? e2.translate = -t2.scrollLeft : e2.translate = -t2.scrollTop, 0 === e2.translate && (e2.translate = 0), e2.updateActiveIndex(), e2.updateSlidesClasses();
        const r2 = e2.maxTranslate() - e2.minTranslate();
        i2 = 0 === r2 ? 0 : (e2.translate - e2.minTranslate()) / r2, i2 !== e2.progress && e2.updateProgress(s2 ? -e2.translate : e2.translate), e2.emit("setTranslate", e2.translate, false);
      }
      let N = false;
      function B() {
      }
      const H = (e2, t2) => {
        const s2 = a(), { params: i2, touchEvents: r2, el: n2, wrapperEl: l2, device: o2, support: d2 } = e2, c2 = !!i2.nested, p2 = "on" === t2 ? "addEventListener" : "removeEventListener", u2 = t2;
        if (d2.touch) {
          const t3 = !("touchstart" !== r2.start || !d2.passiveListener || !i2.passiveListeners) && { passive: true, capture: false };
          n2[p2](r2.start, e2.onTouchStart, t3), n2[p2](r2.move, e2.onTouchMove, d2.passiveListener ? { passive: false, capture: c2 } : c2), n2[p2](r2.end, e2.onTouchEnd, t3), r2.cancel && n2[p2](r2.cancel, e2.onTouchEnd, t3);
        } else n2[p2](r2.start, e2.onTouchStart, false), s2[p2](r2.move, e2.onTouchMove, c2), s2[p2](r2.end, e2.onTouchEnd, false);
        (i2.preventClicks || i2.preventClicksPropagation) && n2[p2]("click", e2.onClick, true), i2.cssMode && l2[p2]("scroll", e2.onScroll), i2.updateOnWindowResize ? e2[u2](o2.ios || o2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, true) : e2[u2]("observerUpdate", A, true);
      };
      var X = { attachEvents: function() {
        const e2 = this, t2 = a(), { params: s2, support: i2 } = e2;
        e2.onTouchStart = L.bind(e2), e2.onTouchMove = O.bind(e2), e2.onTouchEnd = I.bind(e2), s2.cssMode && (e2.onScroll = G.bind(e2)), e2.onClick = D.bind(e2), i2.touch && !N && (t2.addEventListener("touchstart", B), N = true), H(e2, "on");
      }, detachEvents: function() {
        H(this, "off");
      } };
      const Y = (e2, t2) => e2.grid && t2.grid && t2.grid.rows > 1;
      var R = { addClasses: function() {
        const e2 = this, { classNames: t2, params: s2, rtl: a2, $el: i2, device: r2, support: n2 } = e2, l2 = function(e3, t3) {
          const s3 = [];
          return e3.forEach((e4) => {
            "object" == typeof e4 ? Object.keys(e4).forEach((a3) => {
              e4[a3] && s3.push(t3 + a3);
            }) : "string" == typeof e4 && s3.push(t3 + e4);
          }), s3;
        }(["initialized", s2.direction, { "pointer-events": !n2.touch }, { "free-mode": e2.params.freeMode && s2.freeMode.enabled }, { autoheight: s2.autoHeight }, { rtl: a2 }, { grid: s2.grid && s2.grid.rows > 1 }, { "grid-column": s2.grid && s2.grid.rows > 1 && "column" === s2.grid.fill }, { android: r2.android }, { ios: r2.ios }, { "css-mode": s2.cssMode }, { centered: s2.cssMode && s2.centeredSlides }, { "watch-progress": s2.watchSlidesProgress }], s2.containerModifierClass);
        t2.push(...l2), i2.addClass([...t2].join(" ")), e2.emitContainerClasses();
      }, removeClasses: function() {
        const { $el: e2, classNames: t2 } = this;
        e2.removeClass(t2.join(" ")), this.emitContainerClasses();
      } };
      var W = { init: true, direction: "horizontal", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: true, nested: false, createElements: false, enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: false, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, watchOverflow: true, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 0, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, preloadImages: true, updateOnImagesReady: true, loop: false, loopAdditionalSlides: 0, loopedSlides: null, loopedSlidesLimit: true, loopFillGroupWithBlank: false, loopPreventsSlide: true, rewind: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: true, _emitClasses: false };
      function q(e2, t2) {
        return function(s2) {
          void 0 === s2 && (s2 = {});
          const a2 = Object.keys(s2)[0], i2 = s2[a2];
          "object" == typeof i2 && null !== i2 ? (["navigation", "pagination", "scrollbar"].indexOf(a2) >= 0 && true === e2[a2] && (e2[a2] = { auto: true }), a2 in e2 && "enabled" in i2 ? (true === e2[a2] && (e2[a2] = { enabled: true }), "object" != typeof e2[a2] || "enabled" in e2[a2] || (e2[a2].enabled = true), e2[a2] || (e2[a2] = { enabled: false }), g(t2, s2)) : g(t2, s2)) : g(t2, s2);
        };
      }
      const j = { eventsEmitter: $, update: S, translate: M, transition: { setTransition: function(e2, t2) {
        const s2 = this;
        s2.params.cssMode || s2.$wrapperEl.transition(e2), s2.emit("setTransition", e2, t2);
      }, transitionStart: function(e2, t2) {
        void 0 === e2 && (e2 = true);
        const s2 = this, { params: a2 } = s2;
        a2.cssMode || (a2.autoHeight && s2.updateAutoHeight(), P({ swiper: s2, runCallbacks: e2, direction: t2, step: "Start" }));
      }, transitionEnd: function(e2, t2) {
        void 0 === e2 && (e2 = true);
        const s2 = this, { params: a2 } = s2;
        s2.animating = false, a2.cssMode || (s2.setTransition(0), P({ swiper: s2, runCallbacks: e2, direction: t2, step: "End" }));
      } }, slide: k, loop: z, grabCursor: { setGrabCursor: function(e2) {
        const t2 = this;
        if (t2.support.touch || !t2.params.simulateTouch || t2.params.watchOverflow && t2.isLocked || t2.params.cssMode) return;
        const s2 = "container" === t2.params.touchEventsTarget ? t2.el : t2.wrapperEl;
        s2.style.cursor = "move", s2.style.cursor = e2 ? "grabbing" : "grab";
      }, unsetGrabCursor: function() {
        const e2 = this;
        e2.support.touch || e2.params.watchOverflow && e2.isLocked || e2.params.cssMode || (e2["container" === e2.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      } }, events: X, breakpoints: { setBreakpoint: function() {
        const e2 = this, { activeIndex: t2, initialized: s2, loopedSlides: a2 = 0, params: i2, $el: r2 } = e2, n2 = i2.breakpoints;
        if (!n2 || n2 && 0 === Object.keys(n2).length) return;
        const l2 = e2.getBreakpoint(n2, e2.params.breakpointsBase, e2.el);
        if (!l2 || e2.currentBreakpoint === l2) return;
        const o2 = (l2 in n2 ? n2[l2] : void 0) || e2.originalParams, d2 = Y(e2, i2), c2 = Y(e2, o2), p2 = i2.enabled;
        d2 && !c2 ? (r2.removeClass(`${i2.containerModifierClass}grid ${i2.containerModifierClass}grid-column`), e2.emitContainerClasses()) : !d2 && c2 && (r2.addClass(`${i2.containerModifierClass}grid`), (o2.grid.fill && "column" === o2.grid.fill || !o2.grid.fill && "column" === i2.grid.fill) && r2.addClass(`${i2.containerModifierClass}grid-column`), e2.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t3) => {
          const s3 = i2[t3] && i2[t3].enabled, a3 = o2[t3] && o2[t3].enabled;
          s3 && !a3 && e2[t3].disable(), !s3 && a3 && e2[t3].enable();
        });
        const u2 = o2.direction && o2.direction !== i2.direction, h2 = i2.loop && (o2.slidesPerView !== i2.slidesPerView || u2);
        u2 && s2 && e2.changeDirection(), g(e2.params, o2);
        const m2 = e2.params.enabled;
        Object.assign(e2, { allowTouchMove: e2.params.allowTouchMove, allowSlideNext: e2.params.allowSlideNext, allowSlidePrev: e2.params.allowSlidePrev }), p2 && !m2 ? e2.disable() : !p2 && m2 && e2.enable(), e2.currentBreakpoint = l2, e2.emit("_beforeBreakpoint", o2), h2 && s2 && (e2.loopDestroy(), e2.loopCreate(), e2.updateSlides(), e2.slideTo(t2 - a2 + e2.loopedSlides, 0, false)), e2.emit("breakpoint", o2);
      }, getBreakpoint: function(e2, t2, s2) {
        if (void 0 === t2 && (t2 = "window"), !e2 || "container" === t2 && !s2) return;
        let a2 = false;
        const i2 = r(), n2 = "window" === t2 ? i2.innerHeight : s2.clientHeight, l2 = Object.keys(e2).map((e3) => {
          if ("string" == typeof e3 && 0 === e3.indexOf("@")) {
            const t3 = parseFloat(e3.substr(1));
            return { value: n2 * t3, point: e3 };
          }
          return { value: e3, point: e3 };
        });
        l2.sort((e3, t3) => parseInt(e3.value, 10) - parseInt(t3.value, 10));
        for (let e3 = 0; e3 < l2.length; e3 += 1) {
          const { point: r2, value: n3 } = l2[e3];
          "window" === t2 ? i2.matchMedia(`(min-width: ${n3}px)`).matches && (a2 = r2) : n3 <= s2.clientWidth && (a2 = r2);
        }
        return a2 || "max";
      } }, checkOverflow: { checkOverflow: function() {
        const e2 = this, { isLocked: t2, params: s2 } = e2, { slidesOffsetBefore: a2 } = s2;
        if (a2) {
          const t3 = e2.slides.length - 1, s3 = e2.slidesGrid[t3] + e2.slidesSizesGrid[t3] + 2 * a2;
          e2.isLocked = e2.size > s3;
        } else e2.isLocked = 1 === e2.snapGrid.length;
        true === s2.allowSlideNext && (e2.allowSlideNext = !e2.isLocked), true === s2.allowSlidePrev && (e2.allowSlidePrev = !e2.isLocked), t2 && t2 !== e2.isLocked && (e2.isEnd = false), t2 !== e2.isLocked && e2.emit(e2.isLocked ? "lock" : "unlock");
      } }, classes: R, images: { loadImage: function(e2, t2, s2, a2, i2, n2) {
        const l2 = r();
        let o2;
        function c2() {
          n2 && n2();
        }
        d(e2).parent("picture")[0] || e2.complete && i2 ? c2() : t2 ? (o2 = new l2.Image(), o2.onload = c2, o2.onerror = c2, a2 && (o2.sizes = a2), s2 && (o2.srcset = s2), t2 && (o2.src = t2)) : c2();
      }, preloadImages: function() {
        const e2 = this;
        function t2() {
          null != e2 && e2 && !e2.destroyed && (void 0 !== e2.imagesLoaded && (e2.imagesLoaded += 1), e2.imagesLoaded === e2.imagesToLoad.length && (e2.params.updateOnImagesReady && e2.update(), e2.emit("imagesReady")));
        }
        e2.imagesToLoad = e2.$el.find("img");
        for (let s2 = 0; s2 < e2.imagesToLoad.length; s2 += 1) {
          const a2 = e2.imagesToLoad[s2];
          e2.loadImage(a2, a2.currentSrc || a2.getAttribute("src"), a2.srcset || a2.getAttribute("srcset"), a2.sizes || a2.getAttribute("sizes"), true, t2);
        }
      } } }, _ = {};
      class V {
        constructor() {
          let e2, t2;
          for (var s2 = arguments.length, a2 = new Array(s2), i2 = 0; i2 < s2; i2++) a2[i2] = arguments[i2];
          if (1 === a2.length && a2[0].constructor && "Object" === Object.prototype.toString.call(a2[0]).slice(8, -1) ? t2 = a2[0] : [e2, t2] = a2, t2 || (t2 = {}), t2 = g({}, t2), e2 && !t2.el && (t2.el = e2), t2.el && d(t2.el).length > 1) {
            const e3 = [];
            return d(t2.el).each((s3) => {
              const a3 = g({}, t2, { el: s3 });
              e3.push(new V(a3));
            }), e3;
          }
          const r2 = this;
          r2.__swiper__ = true, r2.support = E(), r2.device = C({ userAgent: t2.userAgent }), r2.browser = T(), r2.eventsListeners = {}, r2.eventsAnyListeners = [], r2.modules = [...r2.__modules__], t2.modules && Array.isArray(t2.modules) && r2.modules.push(...t2.modules);
          const n2 = {};
          r2.modules.forEach((e3) => {
            e3({ swiper: r2, extendParams: q(t2, n2), on: r2.on.bind(r2), once: r2.once.bind(r2), off: r2.off.bind(r2), emit: r2.emit.bind(r2) });
          });
          const l2 = g({}, W, n2);
          return r2.params = g({}, l2, _, t2), r2.originalParams = g({}, r2.params), r2.passedParams = g({}, t2), r2.params && r2.params.on && Object.keys(r2.params.on).forEach((e3) => {
            r2.on(e3, r2.params.on[e3]);
          }), r2.params && r2.params.onAny && r2.onAny(r2.params.onAny), r2.$ = d, Object.assign(r2, { enabled: r2.params.enabled, el: e2, classNames: [], slides: d(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: () => "horizontal" === r2.params.direction, isVertical: () => "vertical" === r2.params.direction, activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, allowSlideNext: r2.params.allowSlideNext, allowSlidePrev: r2.params.allowSlidePrev, touchEvents: function() {
            const e3 = ["touchstart", "touchmove", "touchend", "touchcancel"], t3 = ["pointerdown", "pointermove", "pointerup"];
            return r2.touchEventsTouch = { start: e3[0], move: e3[1], end: e3[2], cancel: e3[3] }, r2.touchEventsDesktop = { start: t3[0], move: t3[1], end: t3[2] }, r2.support.touch || !r2.params.simulateTouch ? r2.touchEventsTouch : r2.touchEventsDesktop;
          }(), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: r2.params.focusableElements, lastClickTime: u(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: true, allowTouchMove: r2.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r2.emit("_swiper"), r2.params.init && r2.init(), r2;
        }
        enable() {
          const e2 = this;
          e2.enabled || (e2.enabled = true, e2.params.grabCursor && e2.setGrabCursor(), e2.emit("enable"));
        }
        disable() {
          const e2 = this;
          e2.enabled && (e2.enabled = false, e2.params.grabCursor && e2.unsetGrabCursor(), e2.emit("disable"));
        }
        setProgress(e2, t2) {
          const s2 = this;
          e2 = Math.min(Math.max(e2, 0), 1);
          const a2 = s2.minTranslate(), i2 = (s2.maxTranslate() - a2) * e2 + a2;
          s2.translateTo(i2, void 0 === t2 ? 0 : t2), s2.updateActiveIndex(), s2.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e2 = this;
          if (!e2.params._emitClasses || !e2.el) return;
          const t2 = e2.el.className.split(" ").filter((t3) => 0 === t3.indexOf("swiper") || 0 === t3.indexOf(e2.params.containerModifierClass));
          e2.emit("_containerClasses", t2.join(" "));
        }
        getSlideClasses(e2) {
          const t2 = this;
          return t2.destroyed ? "" : e2.className.split(" ").filter((e3) => 0 === e3.indexOf("swiper-slide") || 0 === e3.indexOf(t2.params.slideClass)).join(" ");
        }
        emitSlidesClasses() {
          const e2 = this;
          if (!e2.params._emitClasses || !e2.el) return;
          const t2 = [];
          e2.slides.each((s2) => {
            const a2 = e2.getSlideClasses(s2);
            t2.push({ slideEl: s2, classNames: a2 }), e2.emit("_slideClass", s2, a2);
          }), e2.emit("_slideClasses", t2);
        }
        slidesPerViewDynamic(e2, t2) {
          void 0 === e2 && (e2 = "current"), void 0 === t2 && (t2 = false);
          const { params: s2, slides: a2, slidesGrid: i2, slidesSizesGrid: r2, size: n2, activeIndex: l2 } = this;
          let o2 = 1;
          if (s2.centeredSlides) {
            let e3, t3 = a2[l2].swiperSlideSize;
            for (let s3 = l2 + 1; s3 < a2.length; s3 += 1) a2[s3] && !e3 && (t3 += a2[s3].swiperSlideSize, o2 += 1, t3 > n2 && (e3 = true));
            for (let s3 = l2 - 1; s3 >= 0; s3 -= 1) a2[s3] && !e3 && (t3 += a2[s3].swiperSlideSize, o2 += 1, t3 > n2 && (e3 = true));
          } else if ("current" === e2) for (let e3 = l2 + 1; e3 < a2.length; e3 += 1) {
            (t2 ? i2[e3] + r2[e3] - i2[l2] < n2 : i2[e3] - i2[l2] < n2) && (o2 += 1);
          }
          else for (let e3 = l2 - 1; e3 >= 0; e3 -= 1) {
            i2[l2] - i2[e3] < n2 && (o2 += 1);
          }
          return o2;
        }
        update() {
          const e2 = this;
          if (!e2 || e2.destroyed) return;
          const { snapGrid: t2, params: s2 } = e2;
          function a2() {
            const t3 = e2.rtlTranslate ? -1 * e2.translate : e2.translate, s3 = Math.min(Math.max(t3, e2.maxTranslate()), e2.minTranslate());
            e2.setTranslate(s3), e2.updateActiveIndex(), e2.updateSlidesClasses();
          }
          let i2;
          s2.breakpoints && e2.setBreakpoint(), e2.updateSize(), e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), e2.params.freeMode && e2.params.freeMode.enabled ? (a2(), e2.params.autoHeight && e2.updateAutoHeight()) : (i2 = ("auto" === e2.params.slidesPerView || e2.params.slidesPerView > 1) && e2.isEnd && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true), i2 || a2()), s2.watchOverflow && t2 !== e2.snapGrid && e2.checkOverflow(), e2.emit("update");
        }
        changeDirection(e2, t2) {
          void 0 === t2 && (t2 = true);
          const s2 = this, a2 = s2.params.direction;
          return e2 || (e2 = "horizontal" === a2 ? "vertical" : "horizontal"), e2 === a2 || "horizontal" !== e2 && "vertical" !== e2 || (s2.$el.removeClass(`${s2.params.containerModifierClass}${a2}`).addClass(`${s2.params.containerModifierClass}${e2}`), s2.emitContainerClasses(), s2.params.direction = e2, s2.slides.each((t3) => {
            "vertical" === e2 ? t3.style.width = "" : t3.style.height = "";
          }), s2.emit("changeDirection"), t2 && s2.update()), s2;
        }
        changeLanguageDirection(e2) {
          const t2 = this;
          t2.rtl && "rtl" === e2 || !t2.rtl && "ltr" === e2 || (t2.rtl = "rtl" === e2, t2.rtlTranslate = "horizontal" === t2.params.direction && t2.rtl, t2.rtl ? (t2.$el.addClass(`${t2.params.containerModifierClass}rtl`), t2.el.dir = "rtl") : (t2.$el.removeClass(`${t2.params.containerModifierClass}rtl`), t2.el.dir = "ltr"), t2.update());
        }
        mount(e2) {
          const t2 = this;
          if (t2.mounted) return true;
          const s2 = d(e2 || t2.params.el);
          if (!(e2 = s2[0])) return false;
          e2.swiper = t2;
          const i2 = () => `.${(t2.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let r2 = (() => {
            if (e2 && e2.shadowRoot && e2.shadowRoot.querySelector) {
              const t3 = d(e2.shadowRoot.querySelector(i2()));
              return t3.children = (e3) => s2.children(e3), t3;
            }
            return s2.children ? s2.children(i2()) : d(s2).children(i2());
          })();
          if (0 === r2.length && t2.params.createElements) {
            const e3 = a().createElement("div");
            r2 = d(e3), e3.className = t2.params.wrapperClass, s2.append(e3), s2.children(`.${t2.params.slideClass}`).each((e4) => {
              r2.append(e4);
            });
          }
          return Object.assign(t2, { $el: s2, el: e2, $wrapperEl: r2, wrapperEl: r2[0], mounted: true, rtl: "rtl" === e2.dir.toLowerCase() || "rtl" === s2.css("direction"), rtlTranslate: "horizontal" === t2.params.direction && ("rtl" === e2.dir.toLowerCase() || "rtl" === s2.css("direction")), wrongRTL: "-webkit-box" === r2.css("display") }), true;
        }
        init(e2) {
          const t2 = this;
          if (t2.initialized) return t2;
          return false === t2.mount(e2) || (t2.emit("beforeInit"), t2.params.breakpoints && t2.setBreakpoint(), t2.addClasses(), t2.params.loop && t2.loopCreate(), t2.updateSize(), t2.updateSlides(), t2.params.watchOverflow && t2.checkOverflow(), t2.params.grabCursor && t2.enabled && t2.setGrabCursor(), t2.params.preloadImages && t2.preloadImages(), t2.params.loop ? t2.slideTo(t2.params.initialSlide + t2.loopedSlides, 0, t2.params.runCallbacksOnInit, false, true) : t2.slideTo(t2.params.initialSlide, 0, t2.params.runCallbacksOnInit, false, true), t2.attachEvents(), t2.initialized = true, t2.emit("init"), t2.emit("afterInit")), t2;
        }
        destroy(e2, t2) {
          void 0 === e2 && (e2 = true), void 0 === t2 && (t2 = true);
          const s2 = this, { params: a2, $el: i2, $wrapperEl: r2, slides: n2 } = s2;
          return void 0 === s2.params || s2.destroyed || (s2.emit("beforeDestroy"), s2.initialized = false, s2.detachEvents(), a2.loop && s2.loopDestroy(), t2 && (s2.removeClasses(), i2.removeAttr("style"), r2.removeAttr("style"), n2 && n2.length && n2.removeClass([a2.slideVisibleClass, a2.slideActiveClass, a2.slideNextClass, a2.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s2.emit("destroy"), Object.keys(s2.eventsListeners).forEach((e3) => {
            s2.off(e3);
          }), false !== e2 && (s2.$el[0].swiper = null, function(e3) {
            const t3 = e3;
            Object.keys(t3).forEach((e4) => {
              try {
                t3[e4] = null;
              } catch (e5) {
              }
              try {
                delete t3[e4];
              } catch (e5) {
              }
            });
          }(s2)), s2.destroyed = true), null;
        }
        static extendDefaults(e2) {
          g(_, e2);
        }
        static get extendedDefaults() {
          return _;
        }
        static get defaults() {
          return W;
        }
        static installModule(e2) {
          V.prototype.__modules__ || (V.prototype.__modules__ = []);
          const t2 = V.prototype.__modules__;
          "function" == typeof e2 && t2.indexOf(e2) < 0 && t2.push(e2);
        }
        static use(e2) {
          return Array.isArray(e2) ? (e2.forEach((e3) => V.installModule(e3)), V) : (V.installModule(e2), V);
        }
      }
      function F(e2, t2, s2, i2) {
        const r2 = a();
        return e2.params.createElements && Object.keys(i2).forEach((a2) => {
          if (!s2[a2] && true === s2.auto) {
            let n2 = e2.$el.children(`.${i2[a2]}`)[0];
            n2 || (n2 = r2.createElement("div"), n2.className = i2[a2], e2.$el.append(n2)), s2[a2] = n2, t2[a2] = n2;
          }
        }), s2;
      }
      function U(e2) {
        return void 0 === e2 && (e2 = ""), `.${e2.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
      }
      function K(e2) {
        const t2 = this, { $wrapperEl: s2, params: a2 } = t2;
        if (a2.loop && t2.loopDestroy(), "object" == typeof e2 && "length" in e2) for (let t3 = 0; t3 < e2.length; t3 += 1) e2[t3] && s2.append(e2[t3]);
        else s2.append(e2);
        a2.loop && t2.loopCreate(), a2.observer || t2.update();
      }
      function Z(e2) {
        const t2 = this, { params: s2, $wrapperEl: a2, activeIndex: i2 } = t2;
        s2.loop && t2.loopDestroy();
        let r2 = i2 + 1;
        if ("object" == typeof e2 && "length" in e2) {
          for (let t3 = 0; t3 < e2.length; t3 += 1) e2[t3] && a2.prepend(e2[t3]);
          r2 = i2 + e2.length;
        } else a2.prepend(e2);
        s2.loop && t2.loopCreate(), s2.observer || t2.update(), t2.slideTo(r2, 0, false);
      }
      function Q(e2, t2) {
        const s2 = this, { $wrapperEl: a2, params: i2, activeIndex: r2 } = s2;
        let n2 = r2;
        i2.loop && (n2 -= s2.loopedSlides, s2.loopDestroy(), s2.slides = a2.children(`.${i2.slideClass}`));
        const l2 = s2.slides.length;
        if (e2 <= 0) return void s2.prependSlide(t2);
        if (e2 >= l2) return void s2.appendSlide(t2);
        let o2 = n2 > e2 ? n2 + 1 : n2;
        const d2 = [];
        for (let t3 = l2 - 1; t3 >= e2; t3 -= 1) {
          const e3 = s2.slides.eq(t3);
          e3.remove(), d2.unshift(e3);
        }
        if ("object" == typeof t2 && "length" in t2) {
          for (let e3 = 0; e3 < t2.length; e3 += 1) t2[e3] && a2.append(t2[e3]);
          o2 = n2 > e2 ? n2 + t2.length : n2;
        } else a2.append(t2);
        for (let e3 = 0; e3 < d2.length; e3 += 1) a2.append(d2[e3]);
        i2.loop && s2.loopCreate(), i2.observer || s2.update(), i2.loop ? s2.slideTo(o2 + s2.loopedSlides, 0, false) : s2.slideTo(o2, 0, false);
      }
      function J(e2) {
        const t2 = this, { params: s2, $wrapperEl: a2, activeIndex: i2 } = t2;
        let r2 = i2;
        s2.loop && (r2 -= t2.loopedSlides, t2.loopDestroy(), t2.slides = a2.children(`.${s2.slideClass}`));
        let n2, l2 = r2;
        if ("object" == typeof e2 && "length" in e2) {
          for (let s3 = 0; s3 < e2.length; s3 += 1) n2 = e2[s3], t2.slides[n2] && t2.slides.eq(n2).remove(), n2 < l2 && (l2 -= 1);
          l2 = Math.max(l2, 0);
        } else n2 = e2, t2.slides[n2] && t2.slides.eq(n2).remove(), n2 < l2 && (l2 -= 1), l2 = Math.max(l2, 0);
        s2.loop && t2.loopCreate(), s2.observer || t2.update(), s2.loop ? t2.slideTo(l2 + t2.loopedSlides, 0, false) : t2.slideTo(l2, 0, false);
      }
      function ee() {
        const e2 = this, t2 = [];
        for (let s2 = 0; s2 < e2.slides.length; s2 += 1) t2.push(s2);
        e2.removeSlide(t2);
      }
      function te(e2) {
        const { effect: t2, swiper: s2, on: a2, setTranslate: i2, setTransition: r2, overwriteParams: n2, perspective: l2, recreateShadows: o2, getEffectParams: d2 } = e2;
        let c2;
        a2("beforeInit", () => {
          if (s2.params.effect !== t2) return;
          s2.classNames.push(`${s2.params.containerModifierClass}${t2}`), l2 && l2() && s2.classNames.push(`${s2.params.containerModifierClass}3d`);
          const e3 = n2 ? n2() : {};
          Object.assign(s2.params, e3), Object.assign(s2.originalParams, e3);
        }), a2("setTranslate", () => {
          s2.params.effect === t2 && i2();
        }), a2("setTransition", (e3, a3) => {
          s2.params.effect === t2 && r2(a3);
        }), a2("transitionEnd", () => {
          if (s2.params.effect === t2 && o2) {
            if (!d2 || !d2().slideShadows) return;
            s2.slides.each((e3) => {
              s2.$(e3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
            }), o2();
          }
        }), a2("virtualUpdate", () => {
          s2.params.effect === t2 && (s2.slides.length || (c2 = true), requestAnimationFrame(() => {
            c2 && s2.slides && s2.slides.length && (i2(), c2 = false);
          }));
        });
      }
      function se(e2, t2) {
        return e2.transformEl ? t2.find(e2.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t2;
      }
      function ae(e2) {
        let { swiper: t2, duration: s2, transformEl: a2, allSlides: i2 } = e2;
        const { slides: r2, activeIndex: n2, $wrapperEl: l2 } = t2;
        if (t2.params.virtualTranslate && 0 !== s2) {
          let e3, s3 = false;
          e3 = i2 ? a2 ? r2.find(a2) : r2 : a2 ? r2.eq(n2).find(a2) : r2.eq(n2), e3.transitionEnd(() => {
            if (s3) return;
            if (!t2 || t2.destroyed) return;
            s3 = true, t2.animating = false;
            const e4 = ["webkitTransitionEnd", "transitionend"];
            for (let t3 = 0; t3 < e4.length; t3 += 1) l2.trigger(e4[t3]);
          });
        }
      }
      function ie(e2, t2, s2) {
        const a2 = "swiper-slide-shadow" + (s2 ? `-${s2}` : ""), i2 = e2.transformEl ? t2.find(e2.transformEl) : t2;
        let r2 = i2.children(`.${a2}`);
        return r2.length || (r2 = d(`<div class="swiper-slide-shadow${s2 ? `-${s2}` : ""}"></div>`), i2.append(r2)), r2;
      }
      Object.keys(j).forEach((e2) => {
        Object.keys(j[e2]).forEach((t2) => {
          V.prototype[t2] = j[e2][t2];
        });
      }), V.use([function(e2) {
        let { swiper: t2, on: s2, emit: a2 } = e2;
        const i2 = r();
        let n2 = null, l2 = null;
        const o2 = () => {
          t2 && !t2.destroyed && t2.initialized && (a2("beforeResize"), a2("resize"));
        }, d2 = () => {
          t2 && !t2.destroyed && t2.initialized && a2("orientationchange");
        };
        s2("init", () => {
          t2.params.resizeObserver && void 0 !== i2.ResizeObserver ? t2 && !t2.destroyed && t2.initialized && (n2 = new ResizeObserver((e3) => {
            l2 = i2.requestAnimationFrame(() => {
              const { width: s3, height: a3 } = t2;
              let i3 = s3, r2 = a3;
              e3.forEach((e4) => {
                let { contentBoxSize: s4, contentRect: a4, target: n3 } = e4;
                n3 && n3 !== t2.el || (i3 = a4 ? a4.width : (s4[0] || s4).inlineSize, r2 = a4 ? a4.height : (s4[0] || s4).blockSize);
              }), i3 === s3 && r2 === a3 || o2();
            });
          }), n2.observe(t2.el)) : (i2.addEventListener("resize", o2), i2.addEventListener("orientationchange", d2));
        }), s2("destroy", () => {
          l2 && i2.cancelAnimationFrame(l2), n2 && n2.unobserve && t2.el && (n2.unobserve(t2.el), n2 = null), i2.removeEventListener("resize", o2), i2.removeEventListener("orientationchange", d2);
        });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        const n2 = [], l2 = r(), o2 = function(e3, t3) {
          void 0 === t3 && (t3 = {});
          const s3 = new (l2.MutationObserver || l2.WebkitMutationObserver)((e4) => {
            if (1 === e4.length) return void i2("observerUpdate", e4[0]);
            const t4 = function() {
              i2("observerUpdate", e4[0]);
            };
            l2.requestAnimationFrame ? l2.requestAnimationFrame(t4) : l2.setTimeout(t4, 0);
          });
          s3.observe(e3, { attributes: void 0 === t3.attributes || t3.attributes, childList: void 0 === t3.childList || t3.childList, characterData: void 0 === t3.characterData || t3.characterData }), n2.push(s3);
        };
        s2({ observer: false, observeParents: false, observeSlideChildren: false }), a2("init", () => {
          if (t2.params.observer) {
            if (t2.params.observeParents) {
              const e3 = t2.$el.parents();
              for (let t3 = 0; t3 < e3.length; t3 += 1) o2(e3[t3]);
            }
            o2(t2.$el[0], { childList: t2.params.observeSlideChildren }), o2(t2.$wrapperEl[0], { attributes: false });
          }
        }), a2("destroy", () => {
          n2.forEach((e3) => {
            e3.disconnect();
          }), n2.splice(0, n2.length);
        });
      }]);
      const re = [function(e2) {
        let t2, { swiper: s2, extendParams: a2, on: i2, emit: r2 } = e2;
        function n2(e3, t3) {
          const a3 = s2.params.virtual;
          if (a3.cache && s2.virtual.cache[t3]) return s2.virtual.cache[t3];
          const i3 = a3.renderSlide ? d(a3.renderSlide.call(s2, e3, t3)) : d(`<div class="${s2.params.slideClass}" data-swiper-slide-index="${t3}">${e3}</div>`);
          return i3.attr("data-swiper-slide-index") || i3.attr("data-swiper-slide-index", t3), a3.cache && (s2.virtual.cache[t3] = i3), i3;
        }
        function l2(e3) {
          const { slidesPerView: t3, slidesPerGroup: a3, centeredSlides: i3 } = s2.params, { addSlidesBefore: l3, addSlidesAfter: o2 } = s2.params.virtual, { from: d2, to: c2, slides: p2, slidesGrid: u2, offset: h2 } = s2.virtual;
          s2.params.cssMode || s2.updateActiveIndex();
          const m2 = s2.activeIndex || 0;
          let f2, g2, v2;
          f2 = s2.rtlTranslate ? "right" : s2.isHorizontal() ? "left" : "top", i3 ? (g2 = Math.floor(t3 / 2) + a3 + o2, v2 = Math.floor(t3 / 2) + a3 + l3) : (g2 = t3 + (a3 - 1) + o2, v2 = a3 + l3);
          const w2 = Math.max((m2 || 0) - v2, 0), b2 = Math.min((m2 || 0) + g2, p2.length - 1), x2 = (s2.slidesGrid[w2] || 0) - (s2.slidesGrid[0] || 0);
          function y2() {
            s2.updateSlides(), s2.updateProgress(), s2.updateSlidesClasses(), s2.lazy && s2.params.lazy.enabled && s2.lazy.load(), r2("virtualUpdate");
          }
          if (Object.assign(s2.virtual, { from: w2, to: b2, offset: x2, slidesGrid: s2.slidesGrid }), d2 === w2 && c2 === b2 && !e3) return s2.slidesGrid !== u2 && x2 !== h2 && s2.slides.css(f2, `${x2}px`), s2.updateProgress(), void r2("virtualUpdate");
          if (s2.params.virtual.renderExternal) return s2.params.virtual.renderExternal.call(s2, { offset: x2, from: w2, to: b2, slides: function() {
            const e4 = [];
            for (let t4 = w2; t4 <= b2; t4 += 1) e4.push(p2[t4]);
            return e4;
          }() }), void (s2.params.virtual.renderExternalUpdate ? y2() : r2("virtualUpdate"));
          const E2 = [], C2 = [];
          if (e3) s2.$wrapperEl.find(`.${s2.params.slideClass}`).remove();
          else for (let e4 = d2; e4 <= c2; e4 += 1) (e4 < w2 || e4 > b2) && s2.$wrapperEl.find(`.${s2.params.slideClass}[data-swiper-slide-index="${e4}"]`).remove();
          for (let t4 = 0; t4 < p2.length; t4 += 1) t4 >= w2 && t4 <= b2 && (void 0 === c2 || e3 ? C2.push(t4) : (t4 > c2 && C2.push(t4), t4 < d2 && E2.push(t4)));
          C2.forEach((e4) => {
            s2.$wrapperEl.append(n2(p2[e4], e4));
          }), E2.sort((e4, t4) => t4 - e4).forEach((e4) => {
            s2.$wrapperEl.prepend(n2(p2[e4], e4));
          }), s2.$wrapperEl.children(".swiper-slide").css(f2, `${x2}px`), y2();
        }
        a2({ virtual: { enabled: false, slides: [], cache: true, renderSlide: null, renderExternal: null, renderExternalUpdate: true, addSlidesBefore: 0, addSlidesAfter: 0 } }), s2.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] }, i2("beforeInit", () => {
          s2.params.virtual.enabled && (s2.virtual.slides = s2.params.virtual.slides, s2.classNames.push(`${s2.params.containerModifierClass}virtual`), s2.params.watchSlidesProgress = true, s2.originalParams.watchSlidesProgress = true, s2.params.initialSlide || l2());
        }), i2("setTranslate", () => {
          s2.params.virtual.enabled && (s2.params.cssMode && !s2._immediateVirtual ? (clearTimeout(t2), t2 = setTimeout(() => {
            l2();
          }, 100)) : l2());
        }), i2("init update resize", () => {
          s2.params.virtual.enabled && s2.params.cssMode && v(s2.wrapperEl, "--swiper-virtual-size", `${s2.virtualSize}px`);
        }), Object.assign(s2.virtual, { appendSlide: function(e3) {
          if ("object" == typeof e3 && "length" in e3) for (let t3 = 0; t3 < e3.length; t3 += 1) e3[t3] && s2.virtual.slides.push(e3[t3]);
          else s2.virtual.slides.push(e3);
          l2(true);
        }, prependSlide: function(e3) {
          const t3 = s2.activeIndex;
          let a3 = t3 + 1, i3 = 1;
          if (Array.isArray(e3)) {
            for (let t4 = 0; t4 < e3.length; t4 += 1) e3[t4] && s2.virtual.slides.unshift(e3[t4]);
            a3 = t3 + e3.length, i3 = e3.length;
          } else s2.virtual.slides.unshift(e3);
          if (s2.params.virtual.cache) {
            const e4 = s2.virtual.cache, t4 = {};
            Object.keys(e4).forEach((s3) => {
              const a4 = e4[s3], r3 = a4.attr("data-swiper-slide-index");
              r3 && a4.attr("data-swiper-slide-index", parseInt(r3, 10) + i3), t4[parseInt(s3, 10) + i3] = a4;
            }), s2.virtual.cache = t4;
          }
          l2(true), s2.slideTo(a3, 0);
        }, removeSlide: function(e3) {
          if (null == e3) return;
          let t3 = s2.activeIndex;
          if (Array.isArray(e3)) for (let a3 = e3.length - 1; a3 >= 0; a3 -= 1) s2.virtual.slides.splice(e3[a3], 1), s2.params.virtual.cache && delete s2.virtual.cache[e3[a3]], e3[a3] < t3 && (t3 -= 1), t3 = Math.max(t3, 0);
          else s2.virtual.slides.splice(e3, 1), s2.params.virtual.cache && delete s2.virtual.cache[e3], e3 < t3 && (t3 -= 1), t3 = Math.max(t3, 0);
          l2(true), s2.slideTo(t3, 0);
        }, removeAllSlides: function() {
          s2.virtual.slides = [], s2.params.virtual.cache && (s2.virtual.cache = {}), l2(true), s2.slideTo(0, 0);
        }, update: l2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: i2, emit: n2 } = e2;
        const l2 = a(), o2 = r();
        function c2(e3) {
          if (!t2.enabled) return;
          const { rtlTranslate: s3 } = t2;
          let a2 = e3;
          a2.originalEvent && (a2 = a2.originalEvent);
          const i3 = a2.keyCode || a2.charCode, r2 = t2.params.keyboard.pageUpDown, d2 = r2 && 33 === i3, c3 = r2 && 34 === i3, p3 = 37 === i3, u3 = 39 === i3, h2 = 38 === i3, m2 = 40 === i3;
          if (!t2.allowSlideNext && (t2.isHorizontal() && u3 || t2.isVertical() && m2 || c3)) return false;
          if (!t2.allowSlidePrev && (t2.isHorizontal() && p3 || t2.isVertical() && h2 || d2)) return false;
          if (!(a2.shiftKey || a2.altKey || a2.ctrlKey || a2.metaKey || l2.activeElement && l2.activeElement.nodeName && ("input" === l2.activeElement.nodeName.toLowerCase() || "textarea" === l2.activeElement.nodeName.toLowerCase()))) {
            if (t2.params.keyboard.onlyInViewport && (d2 || c3 || p3 || u3 || h2 || m2)) {
              let e4 = false;
              if (t2.$el.parents(`.${t2.params.slideClass}`).length > 0 && 0 === t2.$el.parents(`.${t2.params.slideActiveClass}`).length) return;
              const a3 = t2.$el, i4 = a3[0].clientWidth, r3 = a3[0].clientHeight, n3 = o2.innerWidth, l3 = o2.innerHeight, d3 = t2.$el.offset();
              s3 && (d3.left -= t2.$el[0].scrollLeft);
              const c4 = [[d3.left, d3.top], [d3.left + i4, d3.top], [d3.left, d3.top + r3], [d3.left + i4, d3.top + r3]];
              for (let t3 = 0; t3 < c4.length; t3 += 1) {
                const s4 = c4[t3];
                if (s4[0] >= 0 && s4[0] <= n3 && s4[1] >= 0 && s4[1] <= l3) {
                  if (0 === s4[0] && 0 === s4[1]) continue;
                  e4 = true;
                }
              }
              if (!e4) return;
            }
            t2.isHorizontal() ? ((d2 || c3 || p3 || u3) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), ((c3 || u3) && !s3 || (d2 || p3) && s3) && t2.slideNext(), ((d2 || p3) && !s3 || (c3 || u3) && s3) && t2.slidePrev()) : ((d2 || c3 || h2 || m2) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), (c3 || m2) && t2.slideNext(), (d2 || h2) && t2.slidePrev()), n2("keyPress", i3);
          }
        }
        function p2() {
          t2.keyboard.enabled || (d(l2).on("keydown", c2), t2.keyboard.enabled = true);
        }
        function u2() {
          t2.keyboard.enabled && (d(l2).off("keydown", c2), t2.keyboard.enabled = false);
        }
        t2.keyboard = { enabled: false }, s2({ keyboard: { enabled: false, onlyInViewport: true, pageUpDown: true } }), i2("init", () => {
          t2.params.keyboard.enabled && p2();
        }), i2("destroy", () => {
          t2.keyboard.enabled && u2();
        }), Object.assign(t2.keyboard, { enable: p2, disable: u2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        const n2 = r();
        let l2;
        s2({ mousewheel: { enabled: false, releaseOnEdges: false, invert: false, forceToAxis: false, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), t2.mousewheel = { enabled: false };
        let o2, c2 = u();
        const h2 = [];
        function m2() {
          t2.enabled && (t2.mouseEntered = true);
        }
        function f2() {
          t2.enabled && (t2.mouseEntered = false);
        }
        function g2(e3) {
          return !(t2.params.mousewheel.thresholdDelta && e3.delta < t2.params.mousewheel.thresholdDelta) && (!(t2.params.mousewheel.thresholdTime && u() - c2 < t2.params.mousewheel.thresholdTime) && (e3.delta >= 6 && u() - c2 < 60 || (e3.direction < 0 ? t2.isEnd && !t2.params.loop || t2.animating || (t2.slideNext(), i2("scroll", e3.raw)) : t2.isBeginning && !t2.params.loop || t2.animating || (t2.slidePrev(), i2("scroll", e3.raw)), c2 = new n2.Date().getTime(), false)));
        }
        function v2(e3) {
          let s3 = e3, a3 = true;
          if (!t2.enabled) return;
          const r2 = t2.params.mousewheel;
          t2.params.cssMode && s3.preventDefault();
          let n3 = t2.$el;
          if ("container" !== t2.params.mousewheel.eventsTarget && (n3 = d(t2.params.mousewheel.eventsTarget)), !t2.mouseEntered && !n3[0].contains(s3.target) && !r2.releaseOnEdges) return true;
          s3.originalEvent && (s3 = s3.originalEvent);
          let c3 = 0;
          const m3 = t2.rtlTranslate ? -1 : 1, f3 = function(e4) {
            let t3 = 0, s4 = 0, a4 = 0, i3 = 0;
            return "detail" in e4 && (s4 = e4.detail), "wheelDelta" in e4 && (s4 = -e4.wheelDelta / 120), "wheelDeltaY" in e4 && (s4 = -e4.wheelDeltaY / 120), "wheelDeltaX" in e4 && (t3 = -e4.wheelDeltaX / 120), "axis" in e4 && e4.axis === e4.HORIZONTAL_AXIS && (t3 = s4, s4 = 0), a4 = 10 * t3, i3 = 10 * s4, "deltaY" in e4 && (i3 = e4.deltaY), "deltaX" in e4 && (a4 = e4.deltaX), e4.shiftKey && !a4 && (a4 = i3, i3 = 0), (a4 || i3) && e4.deltaMode && (1 === e4.deltaMode ? (a4 *= 40, i3 *= 40) : (a4 *= 800, i3 *= 800)), a4 && !t3 && (t3 = a4 < 1 ? -1 : 1), i3 && !s4 && (s4 = i3 < 1 ? -1 : 1), { spinX: t3, spinY: s4, pixelX: a4, pixelY: i3 };
          }(s3);
          if (r2.forceToAxis) if (t2.isHorizontal()) {
            if (!(Math.abs(f3.pixelX) > Math.abs(f3.pixelY))) return true;
            c3 = -f3.pixelX * m3;
          } else {
            if (!(Math.abs(f3.pixelY) > Math.abs(f3.pixelX))) return true;
            c3 = -f3.pixelY;
          }
          else c3 = Math.abs(f3.pixelX) > Math.abs(f3.pixelY) ? -f3.pixelX * m3 : -f3.pixelY;
          if (0 === c3) return true;
          r2.invert && (c3 = -c3);
          let v3 = t2.getTranslate() + c3 * r2.sensitivity;
          if (v3 >= t2.minTranslate() && (v3 = t2.minTranslate()), v3 <= t2.maxTranslate() && (v3 = t2.maxTranslate()), a3 = !!t2.params.loop || !(v3 === t2.minTranslate() || v3 === t2.maxTranslate()), a3 && t2.params.nested && s3.stopPropagation(), t2.params.freeMode && t2.params.freeMode.enabled) {
            const e4 = { time: u(), delta: Math.abs(c3), direction: Math.sign(c3) }, a4 = o2 && e4.time < o2.time + 500 && e4.delta <= o2.delta && e4.direction === o2.direction;
            if (!a4) {
              o2 = void 0, t2.params.loop && t2.loopFix();
              let n4 = t2.getTranslate() + c3 * r2.sensitivity;
              const d2 = t2.isBeginning, u2 = t2.isEnd;
              if (n4 >= t2.minTranslate() && (n4 = t2.minTranslate()), n4 <= t2.maxTranslate() && (n4 = t2.maxTranslate()), t2.setTransition(0), t2.setTranslate(n4), t2.updateProgress(), t2.updateActiveIndex(), t2.updateSlidesClasses(), (!d2 && t2.isBeginning || !u2 && t2.isEnd) && t2.updateSlidesClasses(), t2.params.freeMode.sticky) {
                clearTimeout(l2), l2 = void 0, h2.length >= 15 && h2.shift();
                const s4 = h2.length ? h2[h2.length - 1] : void 0, a5 = h2[0];
                if (h2.push(e4), s4 && (e4.delta > s4.delta || e4.direction !== s4.direction)) h2.splice(0);
                else if (h2.length >= 15 && e4.time - a5.time < 500 && a5.delta - e4.delta >= 1 && e4.delta <= 6) {
                  const s5 = c3 > 0 ? 0.8 : 0.2;
                  o2 = e4, h2.splice(0), l2 = p(() => {
                    t2.slideToClosest(t2.params.speed, true, void 0, s5);
                  }, 0);
                }
                l2 || (l2 = p(() => {
                  o2 = e4, h2.splice(0), t2.slideToClosest(t2.params.speed, true, void 0, 0.5);
                }, 500));
              }
              if (a4 || i2("scroll", s3), t2.params.autoplay && t2.params.autoplayDisableOnInteraction && t2.autoplay.stop(), n4 === t2.minTranslate() || n4 === t2.maxTranslate()) return true;
            }
          } else {
            const s4 = { time: u(), delta: Math.abs(c3), direction: Math.sign(c3), raw: e3 };
            h2.length >= 2 && h2.shift();
            const a4 = h2.length ? h2[h2.length - 1] : void 0;
            if (h2.push(s4), a4 ? (s4.direction !== a4.direction || s4.delta > a4.delta || s4.time > a4.time + 150) && g2(s4) : g2(s4), function(e4) {
              const s5 = t2.params.mousewheel;
              if (e4.direction < 0) {
                if (t2.isEnd && !t2.params.loop && s5.releaseOnEdges) return true;
              } else if (t2.isBeginning && !t2.params.loop && s5.releaseOnEdges) return true;
              return false;
            }(s4)) return true;
          }
          return s3.preventDefault ? s3.preventDefault() : s3.returnValue = false, false;
        }
        function w2(e3) {
          let s3 = t2.$el;
          "container" !== t2.params.mousewheel.eventsTarget && (s3 = d(t2.params.mousewheel.eventsTarget)), s3[e3]("mouseenter", m2), s3[e3]("mouseleave", f2), s3[e3]("wheel", v2);
        }
        function b2() {
          return t2.params.cssMode ? (t2.wrapperEl.removeEventListener("wheel", v2), true) : !t2.mousewheel.enabled && (w2("on"), t2.mousewheel.enabled = true, true);
        }
        function x2() {
          return t2.params.cssMode ? (t2.wrapperEl.addEventListener(event, v2), true) : !!t2.mousewheel.enabled && (w2("off"), t2.mousewheel.enabled = false, true);
        }
        a2("init", () => {
          !t2.params.mousewheel.enabled && t2.params.cssMode && x2(), t2.params.mousewheel.enabled && b2();
        }), a2("destroy", () => {
          t2.params.cssMode && b2(), t2.mousewheel.enabled && x2();
        }), Object.assign(t2.mousewheel, { enable: b2, disable: x2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        function r2(e3) {
          let s3;
          return e3 && (s3 = d(e3), t2.params.uniqueNavElements && "string" == typeof e3 && s3.length > 1 && 1 === t2.$el.find(e3).length && (s3 = t2.$el.find(e3))), s3;
        }
        function n2(e3, s3) {
          const a3 = t2.params.navigation;
          e3 && e3.length > 0 && (e3[s3 ? "addClass" : "removeClass"](a3.disabledClass), e3[0] && "BUTTON" === e3[0].tagName && (e3[0].disabled = s3), t2.params.watchOverflow && t2.enabled && e3[t2.isLocked ? "addClass" : "removeClass"](a3.lockClass));
        }
        function l2() {
          if (t2.params.loop) return;
          const { $nextEl: e3, $prevEl: s3 } = t2.navigation;
          n2(s3, t2.isBeginning && !t2.params.rewind), n2(e3, t2.isEnd && !t2.params.rewind);
        }
        function o2(e3) {
          e3.preventDefault(), (!t2.isBeginning || t2.params.loop || t2.params.rewind) && (t2.slidePrev(), i2("navigationPrev"));
        }
        function c2(e3) {
          e3.preventDefault(), (!t2.isEnd || t2.params.loop || t2.params.rewind) && (t2.slideNext(), i2("navigationNext"));
        }
        function p2() {
          const e3 = t2.params.navigation;
          if (t2.params.navigation = F(t2, t2.originalParams.navigation, t2.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), !e3.nextEl && !e3.prevEl) return;
          const s3 = r2(e3.nextEl), a3 = r2(e3.prevEl);
          s3 && s3.length > 0 && s3.on("click", c2), a3 && a3.length > 0 && a3.on("click", o2), Object.assign(t2.navigation, { $nextEl: s3, nextEl: s3 && s3[0], $prevEl: a3, prevEl: a3 && a3[0] }), t2.enabled || (s3 && s3.addClass(e3.lockClass), a3 && a3.addClass(e3.lockClass));
        }
        function u2() {
          const { $nextEl: e3, $prevEl: s3 } = t2.navigation;
          e3 && e3.length && (e3.off("click", c2), e3.removeClass(t2.params.navigation.disabledClass)), s3 && s3.length && (s3.off("click", o2), s3.removeClass(t2.params.navigation.disabledClass));
        }
        s2({ navigation: { nextEl: null, prevEl: null, hideOnClick: false, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), t2.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }, a2("init", () => {
          false === t2.params.navigation.enabled ? h2() : (p2(), l2());
        }), a2("toEdge fromEdge lock unlock", () => {
          l2();
        }), a2("destroy", () => {
          u2();
        }), a2("enable disable", () => {
          const { $nextEl: e3, $prevEl: s3 } = t2.navigation;
          e3 && e3[t2.enabled ? "removeClass" : "addClass"](t2.params.navigation.lockClass), s3 && s3[t2.enabled ? "removeClass" : "addClass"](t2.params.navigation.lockClass);
        }), a2("click", (e3, s3) => {
          const { $nextEl: a3, $prevEl: r3 } = t2.navigation, n3 = s3.target;
          if (t2.params.navigation.hideOnClick && !d(n3).is(r3) && !d(n3).is(a3)) {
            if (t2.pagination && t2.params.pagination && t2.params.pagination.clickable && (t2.pagination.el === n3 || t2.pagination.el.contains(n3))) return;
            let e4;
            a3 ? e4 = a3.hasClass(t2.params.navigation.hiddenClass) : r3 && (e4 = r3.hasClass(t2.params.navigation.hiddenClass)), i2(true === e4 ? "navigationShow" : "navigationHide"), a3 && a3.toggleClass(t2.params.navigation.hiddenClass), r3 && r3.toggleClass(t2.params.navigation.hiddenClass);
          }
        });
        const h2 = () => {
          t2.$el.addClass(t2.params.navigation.navigationDisabledClass), u2();
        };
        Object.assign(t2.navigation, { enable: () => {
          t2.$el.removeClass(t2.params.navigation.navigationDisabledClass), p2(), l2();
        }, disable: h2, update: l2, init: p2, destroy: u2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        const r2 = "swiper-pagination";
        let n2;
        s2({ pagination: { el: null, bulletElement: "span", clickable: false, hideOnClick: false, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: false, type: "bullets", dynamicBullets: false, dynamicMainBullets: 1, formatFractionCurrent: (e3) => e3, formatFractionTotal: (e3) => e3, bulletClass: `${r2}-bullet`, bulletActiveClass: `${r2}-bullet-active`, modifierClass: `${r2}-`, currentClass: `${r2}-current`, totalClass: `${r2}-total`, hiddenClass: `${r2}-hidden`, progressbarFillClass: `${r2}-progressbar-fill`, progressbarOppositeClass: `${r2}-progressbar-opposite`, clickableClass: `${r2}-clickable`, lockClass: `${r2}-lock`, horizontalClass: `${r2}-horizontal`, verticalClass: `${r2}-vertical`, paginationDisabledClass: `${r2}-disabled` } }), t2.pagination = { el: null, $el: null, bullets: [] };
        let l2 = 0;
        function o2() {
          return !t2.params.pagination.el || !t2.pagination.el || !t2.pagination.$el || 0 === t2.pagination.$el.length;
        }
        function c2(e3, s3) {
          const { bulletActiveClass: a3 } = t2.params.pagination;
          e3[s3]().addClass(`${a3}-${s3}`)[s3]().addClass(`${a3}-${s3}-${s3}`);
        }
        function p2() {
          const e3 = t2.rtl, s3 = t2.params.pagination;
          if (o2()) return;
          const a3 = t2.virtual && t2.params.virtual.enabled ? t2.virtual.slides.length : t2.slides.length, r3 = t2.pagination.$el;
          let p3;
          const u3 = t2.params.loop ? Math.ceil((a3 - 2 * t2.loopedSlides) / t2.params.slidesPerGroup) : t2.snapGrid.length;
          if (t2.params.loop ? (p3 = Math.ceil((t2.activeIndex - t2.loopedSlides) / t2.params.slidesPerGroup), p3 > a3 - 1 - 2 * t2.loopedSlides && (p3 -= a3 - 2 * t2.loopedSlides), p3 > u3 - 1 && (p3 -= u3), p3 < 0 && "bullets" !== t2.params.paginationType && (p3 = u3 + p3)) : p3 = void 0 !== t2.snapIndex ? t2.snapIndex : t2.activeIndex || 0, "bullets" === s3.type && t2.pagination.bullets && t2.pagination.bullets.length > 0) {
            const a4 = t2.pagination.bullets;
            let i3, o3, u4;
            if (s3.dynamicBullets && (n2 = a4.eq(0)[t2.isHorizontal() ? "outerWidth" : "outerHeight"](true), r3.css(t2.isHorizontal() ? "width" : "height", n2 * (s3.dynamicMainBullets + 4) + "px"), s3.dynamicMainBullets > 1 && void 0 !== t2.previousIndex && (l2 += p3 - (t2.previousIndex - t2.loopedSlides || 0), l2 > s3.dynamicMainBullets - 1 ? l2 = s3.dynamicMainBullets - 1 : l2 < 0 && (l2 = 0)), i3 = Math.max(p3 - l2, 0), o3 = i3 + (Math.min(a4.length, s3.dynamicMainBullets) - 1), u4 = (o3 + i3) / 2), a4.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e4) => `${s3.bulletActiveClass}${e4}`).join(" ")), r3.length > 1) a4.each((e4) => {
              const t3 = d(e4), a5 = t3.index();
              a5 === p3 && t3.addClass(s3.bulletActiveClass), s3.dynamicBullets && (a5 >= i3 && a5 <= o3 && t3.addClass(`${s3.bulletActiveClass}-main`), a5 === i3 && c2(t3, "prev"), a5 === o3 && c2(t3, "next"));
            });
            else {
              const e4 = a4.eq(p3), r4 = e4.index();
              if (e4.addClass(s3.bulletActiveClass), s3.dynamicBullets) {
                const e5 = a4.eq(i3), n3 = a4.eq(o3);
                for (let e6 = i3; e6 <= o3; e6 += 1) a4.eq(e6).addClass(`${s3.bulletActiveClass}-main`);
                if (t2.params.loop) if (r4 >= a4.length) {
                  for (let e6 = s3.dynamicMainBullets; e6 >= 0; e6 -= 1) a4.eq(a4.length - e6).addClass(`${s3.bulletActiveClass}-main`);
                  a4.eq(a4.length - s3.dynamicMainBullets - 1).addClass(`${s3.bulletActiveClass}-prev`);
                } else c2(e5, "prev"), c2(n3, "next");
                else c2(e5, "prev"), c2(n3, "next");
              }
            }
            if (s3.dynamicBullets) {
              const i4 = Math.min(a4.length, s3.dynamicMainBullets + 4), r4 = (n2 * i4 - n2) / 2 - u4 * n2, l3 = e3 ? "right" : "left";
              a4.css(t2.isHorizontal() ? l3 : "top", `${r4}px`);
            }
          }
          if ("fraction" === s3.type && (r3.find(U(s3.currentClass)).text(s3.formatFractionCurrent(p3 + 1)), r3.find(U(s3.totalClass)).text(s3.formatFractionTotal(u3))), "progressbar" === s3.type) {
            let e4;
            e4 = s3.progressbarOpposite ? t2.isHorizontal() ? "vertical" : "horizontal" : t2.isHorizontal() ? "horizontal" : "vertical";
            const a4 = (p3 + 1) / u3;
            let i3 = 1, n3 = 1;
            "horizontal" === e4 ? i3 = a4 : n3 = a4, r3.find(U(s3.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i3}) scaleY(${n3})`).transition(t2.params.speed);
          }
          "custom" === s3.type && s3.renderCustom ? (r3.html(s3.renderCustom(t2, p3 + 1, u3)), i2("paginationRender", r3[0])) : i2("paginationUpdate", r3[0]), t2.params.watchOverflow && t2.enabled && r3[t2.isLocked ? "addClass" : "removeClass"](s3.lockClass);
        }
        function u2() {
          const e3 = t2.params.pagination;
          if (o2()) return;
          const s3 = t2.virtual && t2.params.virtual.enabled ? t2.virtual.slides.length : t2.slides.length, a3 = t2.pagination.$el;
          let r3 = "";
          if ("bullets" === e3.type) {
            let i3 = t2.params.loop ? Math.ceil((s3 - 2 * t2.loopedSlides) / t2.params.slidesPerGroup) : t2.snapGrid.length;
            t2.params.freeMode && t2.params.freeMode.enabled && !t2.params.loop && i3 > s3 && (i3 = s3);
            for (let s4 = 0; s4 < i3; s4 += 1) e3.renderBullet ? r3 += e3.renderBullet.call(t2, s4, e3.bulletClass) : r3 += `<${e3.bulletElement} class="${e3.bulletClass}"></${e3.bulletElement}>`;
            a3.html(r3), t2.pagination.bullets = a3.find(U(e3.bulletClass));
          }
          "fraction" === e3.type && (r3 = e3.renderFraction ? e3.renderFraction.call(t2, e3.currentClass, e3.totalClass) : `<span class="${e3.currentClass}"></span> / <span class="${e3.totalClass}"></span>`, a3.html(r3)), "progressbar" === e3.type && (r3 = e3.renderProgressbar ? e3.renderProgressbar.call(t2, e3.progressbarFillClass) : `<span class="${e3.progressbarFillClass}"></span>`, a3.html(r3)), "custom" !== e3.type && i2("paginationRender", t2.pagination.$el[0]);
        }
        function h2() {
          t2.params.pagination = F(t2, t2.originalParams.pagination, t2.params.pagination, { el: "swiper-pagination" });
          const e3 = t2.params.pagination;
          if (!e3.el) return;
          let s3 = d(e3.el);
          0 !== s3.length && (t2.params.uniqueNavElements && "string" == typeof e3.el && s3.length > 1 && (s3 = t2.$el.find(e3.el), s3.length > 1 && (s3 = s3.filter((e4) => d(e4).parents(".swiper")[0] === t2.el))), "bullets" === e3.type && e3.clickable && s3.addClass(e3.clickableClass), s3.addClass(e3.modifierClass + e3.type), s3.addClass(t2.isHorizontal() ? e3.horizontalClass : e3.verticalClass), "bullets" === e3.type && e3.dynamicBullets && (s3.addClass(`${e3.modifierClass}${e3.type}-dynamic`), l2 = 0, e3.dynamicMainBullets < 1 && (e3.dynamicMainBullets = 1)), "progressbar" === e3.type && e3.progressbarOpposite && s3.addClass(e3.progressbarOppositeClass), e3.clickable && s3.on("click", U(e3.bulletClass), function(e4) {
            e4.preventDefault();
            let s4 = d(this).index() * t2.params.slidesPerGroup;
            t2.params.loop && (s4 += t2.loopedSlides), t2.slideTo(s4);
          }), Object.assign(t2.pagination, { $el: s3, el: s3[0] }), t2.enabled || s3.addClass(e3.lockClass));
        }
        function m2() {
          const e3 = t2.params.pagination;
          if (o2()) return;
          const s3 = t2.pagination.$el;
          s3.removeClass(e3.hiddenClass), s3.removeClass(e3.modifierClass + e3.type), s3.removeClass(t2.isHorizontal() ? e3.horizontalClass : e3.verticalClass), t2.pagination.bullets && t2.pagination.bullets.removeClass && t2.pagination.bullets.removeClass(e3.bulletActiveClass), e3.clickable && s3.off("click", U(e3.bulletClass));
        }
        a2("init", () => {
          false === t2.params.pagination.enabled ? f2() : (h2(), u2(), p2());
        }), a2("activeIndexChange", () => {
          (t2.params.loop || void 0 === t2.snapIndex) && p2();
        }), a2("snapIndexChange", () => {
          t2.params.loop || p2();
        }), a2("slidesLengthChange", () => {
          t2.params.loop && (u2(), p2());
        }), a2("snapGridLengthChange", () => {
          t2.params.loop || (u2(), p2());
        }), a2("destroy", () => {
          m2();
        }), a2("enable disable", () => {
          const { $el: e3 } = t2.pagination;
          e3 && e3[t2.enabled ? "removeClass" : "addClass"](t2.params.pagination.lockClass);
        }), a2("lock unlock", () => {
          p2();
        }), a2("click", (e3, s3) => {
          const a3 = s3.target, { $el: r3 } = t2.pagination;
          if (t2.params.pagination.el && t2.params.pagination.hideOnClick && r3 && r3.length > 0 && !d(a3).hasClass(t2.params.pagination.bulletClass)) {
            if (t2.navigation && (t2.navigation.nextEl && a3 === t2.navigation.nextEl || t2.navigation.prevEl && a3 === t2.navigation.prevEl)) return;
            const e4 = r3.hasClass(t2.params.pagination.hiddenClass);
            i2(true === e4 ? "paginationShow" : "paginationHide"), r3.toggleClass(t2.params.pagination.hiddenClass);
          }
        });
        const f2 = () => {
          t2.$el.addClass(t2.params.pagination.paginationDisabledClass), t2.pagination.$el && t2.pagination.$el.addClass(t2.params.pagination.paginationDisabledClass), m2();
        };
        Object.assign(t2.pagination, { enable: () => {
          t2.$el.removeClass(t2.params.pagination.paginationDisabledClass), t2.pagination.$el && t2.pagination.$el.removeClass(t2.params.pagination.paginationDisabledClass), h2(), u2(), p2();
        }, disable: f2, render: u2, update: p2, init: h2, destroy: m2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: i2, emit: r2 } = e2;
        const n2 = a();
        let l2, o2, c2, u2, h2 = false, m2 = null, f2 = null;
        function g2() {
          if (!t2.params.scrollbar.el || !t2.scrollbar.el) return;
          const { scrollbar: e3, rtlTranslate: s3, progress: a2 } = t2, { $dragEl: i3, $el: r3 } = e3, n3 = t2.params.scrollbar;
          let l3 = o2, d2 = (c2 - o2) * a2;
          s3 ? (d2 = -d2, d2 > 0 ? (l3 = o2 - d2, d2 = 0) : -d2 + o2 > c2 && (l3 = c2 + d2)) : d2 < 0 ? (l3 = o2 + d2, d2 = 0) : d2 + o2 > c2 && (l3 = c2 - d2), t2.isHorizontal() ? (i3.transform(`translate3d(${d2}px, 0, 0)`), i3[0].style.width = `${l3}px`) : (i3.transform(`translate3d(0px, ${d2}px, 0)`), i3[0].style.height = `${l3}px`), n3.hide && (clearTimeout(m2), r3[0].style.opacity = 1, m2 = setTimeout(() => {
            r3[0].style.opacity = 0, r3.transition(400);
          }, 1e3));
        }
        function v2() {
          if (!t2.params.scrollbar.el || !t2.scrollbar.el) return;
          const { scrollbar: e3 } = t2, { $dragEl: s3, $el: a2 } = e3;
          s3[0].style.width = "", s3[0].style.height = "", c2 = t2.isHorizontal() ? a2[0].offsetWidth : a2[0].offsetHeight, u2 = t2.size / (t2.virtualSize + t2.params.slidesOffsetBefore - (t2.params.centeredSlides ? t2.snapGrid[0] : 0)), o2 = "auto" === t2.params.scrollbar.dragSize ? c2 * u2 : parseInt(t2.params.scrollbar.dragSize, 10), t2.isHorizontal() ? s3[0].style.width = `${o2}px` : s3[0].style.height = `${o2}px`, a2[0].style.display = u2 >= 1 ? "none" : "", t2.params.scrollbar.hide && (a2[0].style.opacity = 0), t2.params.watchOverflow && t2.enabled && e3.$el[t2.isLocked ? "addClass" : "removeClass"](t2.params.scrollbar.lockClass);
        }
        function w2(e3) {
          return t2.isHorizontal() ? "touchstart" === e3.type || "touchmove" === e3.type ? e3.targetTouches[0].clientX : e3.clientX : "touchstart" === e3.type || "touchmove" === e3.type ? e3.targetTouches[0].clientY : e3.clientY;
        }
        function b2(e3) {
          const { scrollbar: s3, rtlTranslate: a2 } = t2, { $el: i3 } = s3;
          let r3;
          r3 = (w2(e3) - i3.offset()[t2.isHorizontal() ? "left" : "top"] - (null !== l2 ? l2 : o2 / 2)) / (c2 - o2), r3 = Math.max(Math.min(r3, 1), 0), a2 && (r3 = 1 - r3);
          const n3 = t2.minTranslate() + (t2.maxTranslate() - t2.minTranslate()) * r3;
          t2.updateProgress(n3), t2.setTranslate(n3), t2.updateActiveIndex(), t2.updateSlidesClasses();
        }
        function x2(e3) {
          const s3 = t2.params.scrollbar, { scrollbar: a2, $wrapperEl: i3 } = t2, { $el: n3, $dragEl: o3 } = a2;
          h2 = true, l2 = e3.target === o3[0] || e3.target === o3 ? w2(e3) - e3.target.getBoundingClientRect()[t2.isHorizontal() ? "left" : "top"] : null, e3.preventDefault(), e3.stopPropagation(), i3.transition(100), o3.transition(100), b2(e3), clearTimeout(f2), n3.transition(0), s3.hide && n3.css("opacity", 1), t2.params.cssMode && t2.$wrapperEl.css("scroll-snap-type", "none"), r2("scrollbarDragStart", e3);
        }
        function y2(e3) {
          const { scrollbar: s3, $wrapperEl: a2 } = t2, { $el: i3, $dragEl: n3 } = s3;
          h2 && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = false, b2(e3), a2.transition(0), i3.transition(0), n3.transition(0), r2("scrollbarDragMove", e3));
        }
        function E2(e3) {
          const s3 = t2.params.scrollbar, { scrollbar: a2, $wrapperEl: i3 } = t2, { $el: n3 } = a2;
          h2 && (h2 = false, t2.params.cssMode && (t2.$wrapperEl.css("scroll-snap-type", ""), i3.transition("")), s3.hide && (clearTimeout(f2), f2 = p(() => {
            n3.css("opacity", 0), n3.transition(400);
          }, 1e3)), r2("scrollbarDragEnd", e3), s3.snapOnRelease && t2.slideToClosest());
        }
        function C2(e3) {
          const { scrollbar: s3, touchEventsTouch: a2, touchEventsDesktop: i3, params: r3, support: l3 } = t2, o3 = s3.$el;
          if (!o3) return;
          const d2 = o3[0], c3 = !(!l3.passiveListener || !r3.passiveListeners) && { passive: false, capture: false }, p2 = !(!l3.passiveListener || !r3.passiveListeners) && { passive: true, capture: false };
          if (!d2) return;
          const u3 = "on" === e3 ? "addEventListener" : "removeEventListener";
          l3.touch ? (d2[u3](a2.start, x2, c3), d2[u3](a2.move, y2, c3), d2[u3](a2.end, E2, p2)) : (d2[u3](i3.start, x2, c3), n2[u3](i3.move, y2, c3), n2[u3](i3.end, E2, p2));
        }
        function T2() {
          const { scrollbar: e3, $el: s3 } = t2;
          t2.params.scrollbar = F(t2, t2.originalParams.scrollbar, t2.params.scrollbar, { el: "swiper-scrollbar" });
          const a2 = t2.params.scrollbar;
          if (!a2.el) return;
          let i3 = d(a2.el);
          t2.params.uniqueNavElements && "string" == typeof a2.el && i3.length > 1 && 1 === s3.find(a2.el).length && (i3 = s3.find(a2.el)), i3.addClass(t2.isHorizontal() ? a2.horizontalClass : a2.verticalClass);
          let r3 = i3.find(`.${t2.params.scrollbar.dragClass}`);
          0 === r3.length && (r3 = d(`<div class="${t2.params.scrollbar.dragClass}"></div>`), i3.append(r3)), Object.assign(e3, { $el: i3, el: i3[0], $dragEl: r3, dragEl: r3[0] }), a2.draggable && t2.params.scrollbar.el && t2.scrollbar.el && C2("on"), i3 && i3[t2.enabled ? "removeClass" : "addClass"](t2.params.scrollbar.lockClass);
        }
        function $2() {
          const e3 = t2.params.scrollbar, s3 = t2.scrollbar.$el;
          s3 && s3.removeClass(t2.isHorizontal() ? e3.horizontalClass : e3.verticalClass), t2.params.scrollbar.el && t2.scrollbar.el && C2("off");
        }
        s2({ scrollbar: { el: null, dragSize: "auto", hide: false, draggable: false, snapOnRelease: true, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag", scrollbarDisabledClass: "swiper-scrollbar-disabled", horizontalClass: "swiper-scrollbar-horizontal", verticalClass: "swiper-scrollbar-vertical" } }), t2.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }, i2("init", () => {
          false === t2.params.scrollbar.enabled ? S2() : (T2(), v2(), g2());
        }), i2("update resize observerUpdate lock unlock", () => {
          v2();
        }), i2("setTranslate", () => {
          g2();
        }), i2("setTransition", (e3, s3) => {
          !function(e4) {
            t2.params.scrollbar.el && t2.scrollbar.el && t2.scrollbar.$dragEl.transition(e4);
          }(s3);
        }), i2("enable disable", () => {
          const { $el: e3 } = t2.scrollbar;
          e3 && e3[t2.enabled ? "removeClass" : "addClass"](t2.params.scrollbar.lockClass);
        }), i2("destroy", () => {
          $2();
        });
        const S2 = () => {
          t2.$el.addClass(t2.params.scrollbar.scrollbarDisabledClass), t2.scrollbar.$el && t2.scrollbar.$el.addClass(t2.params.scrollbar.scrollbarDisabledClass), $2();
        };
        Object.assign(t2.scrollbar, { enable: () => {
          t2.$el.removeClass(t2.params.scrollbar.scrollbarDisabledClass), t2.scrollbar.$el && t2.scrollbar.$el.removeClass(t2.params.scrollbar.scrollbarDisabledClass), T2(), v2(), g2();
        }, disable: S2, updateSize: v2, setTranslate: g2, init: T2, destroy: $2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ parallax: { enabled: false } });
        const i2 = (e3, s3) => {
          const { rtl: a3 } = t2, i3 = d(e3), r3 = a3 ? -1 : 1, n2 = i3.attr("data-swiper-parallax") || "0";
          let l2 = i3.attr("data-swiper-parallax-x"), o2 = i3.attr("data-swiper-parallax-y");
          const c2 = i3.attr("data-swiper-parallax-scale"), p2 = i3.attr("data-swiper-parallax-opacity");
          if (l2 || o2 ? (l2 = l2 || "0", o2 = o2 || "0") : t2.isHorizontal() ? (l2 = n2, o2 = "0") : (o2 = n2, l2 = "0"), l2 = l2.indexOf("%") >= 0 ? parseInt(l2, 10) * s3 * r3 + "%" : l2 * s3 * r3 + "px", o2 = o2.indexOf("%") >= 0 ? parseInt(o2, 10) * s3 + "%" : o2 * s3 + "px", null != p2) {
            const e4 = p2 - (p2 - 1) * (1 - Math.abs(s3));
            i3[0].style.opacity = e4;
          }
          if (null == c2) i3.transform(`translate3d(${l2}, ${o2}, 0px)`);
          else {
            const e4 = c2 - (c2 - 1) * (1 - Math.abs(s3));
            i3.transform(`translate3d(${l2}, ${o2}, 0px) scale(${e4})`);
          }
        }, r2 = () => {
          const { $el: e3, slides: s3, progress: a3, snapGrid: r3 } = t2;
          e3.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e4) => {
            i2(e4, a3);
          }), s3.each((e4, s4) => {
            let n2 = e4.progress;
            t2.params.slidesPerGroup > 1 && "auto" !== t2.params.slidesPerView && (n2 += Math.ceil(s4 / 2) - a3 * (r3.length - 1)), n2 = Math.min(Math.max(n2, -1), 1), d(e4).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e5) => {
              i2(e5, n2);
            });
          });
        };
        a2("beforeInit", () => {
          t2.params.parallax.enabled && (t2.params.watchSlidesProgress = true, t2.originalParams.watchSlidesProgress = true);
        }), a2("init", () => {
          t2.params.parallax.enabled && r2();
        }), a2("setTranslate", () => {
          t2.params.parallax.enabled && r2();
        }), a2("setTransition", (e3, s3) => {
          t2.params.parallax.enabled && function(e4) {
            void 0 === e4 && (e4 = t2.params.speed);
            const { $el: s4 } = t2;
            s4.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t3) => {
              const s5 = d(t3);
              let a3 = parseInt(s5.attr("data-swiper-parallax-duration"), 10) || e4;
              0 === e4 && (a3 = 0), s5.transition(a3);
            });
          }(s3);
        });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        const n2 = r();
        s2({ zoom: { enabled: false, maxRatio: 3, minRatio: 1, toggle: true, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), t2.zoom = { enabled: false };
        let l2, o2, c2, p2 = 1, u2 = false;
        const m2 = { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, f2 = { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, g2 = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
        let v2 = 1;
        function w2(e3) {
          if (e3.targetTouches.length < 2) return 1;
          const t3 = e3.targetTouches[0].pageX, s3 = e3.targetTouches[0].pageY, a3 = e3.targetTouches[1].pageX, i3 = e3.targetTouches[1].pageY;
          return Math.sqrt((a3 - t3) ** 2 + (i3 - s3) ** 2);
        }
        function b2(e3) {
          const s3 = t2.support, a3 = t2.params.zoom;
          if (o2 = false, c2 = false, !s3.gestures) {
            if ("touchstart" !== e3.type || "touchstart" === e3.type && e3.targetTouches.length < 2) return;
            o2 = true, m2.scaleStart = w2(e3);
          }
          m2.$slideEl && m2.$slideEl.length || (m2.$slideEl = d(e3.target).closest(`.${t2.params.slideClass}`), 0 === m2.$slideEl.length && (m2.$slideEl = t2.slides.eq(t2.activeIndex)), m2.$imageEl = m2.$slideEl.find(`.${a3.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m2.$imageWrapEl = m2.$imageEl.parent(`.${a3.containerClass}`), m2.maxRatio = m2.$imageWrapEl.attr("data-swiper-zoom") || a3.maxRatio, 0 !== m2.$imageWrapEl.length) ? (m2.$imageEl && m2.$imageEl.transition(0), u2 = true) : m2.$imageEl = void 0;
        }
        function x2(e3) {
          const s3 = t2.support, a3 = t2.params.zoom, i3 = t2.zoom;
          if (!s3.gestures) {
            if ("touchmove" !== e3.type || "touchmove" === e3.type && e3.targetTouches.length < 2) return;
            c2 = true, m2.scaleMove = w2(e3);
          }
          m2.$imageEl && 0 !== m2.$imageEl.length ? (s3.gestures ? i3.scale = e3.scale * p2 : i3.scale = m2.scaleMove / m2.scaleStart * p2, i3.scale > m2.maxRatio && (i3.scale = m2.maxRatio - 1 + (i3.scale - m2.maxRatio + 1) ** 0.5), i3.scale < a3.minRatio && (i3.scale = a3.minRatio + 1 - (a3.minRatio - i3.scale + 1) ** 0.5), m2.$imageEl.transform(`translate3d(0,0,0) scale(${i3.scale})`)) : "gesturechange" === e3.type && b2(e3);
        }
        function y2(e3) {
          const s3 = t2.device, a3 = t2.support, i3 = t2.params.zoom, r2 = t2.zoom;
          if (!a3.gestures) {
            if (!o2 || !c2) return;
            if ("touchend" !== e3.type || "touchend" === e3.type && e3.changedTouches.length < 2 && !s3.android) return;
            o2 = false, c2 = false;
          }
          m2.$imageEl && 0 !== m2.$imageEl.length && (r2.scale = Math.max(Math.min(r2.scale, m2.maxRatio), i3.minRatio), m2.$imageEl.transition(t2.params.speed).transform(`translate3d(0,0,0) scale(${r2.scale})`), p2 = r2.scale, u2 = false, 1 === r2.scale && (m2.$slideEl = void 0));
        }
        function E2(e3) {
          const s3 = t2.zoom;
          if (!m2.$imageEl || 0 === m2.$imageEl.length) return;
          if (t2.allowClick = false, !f2.isTouched || !m2.$slideEl) return;
          f2.isMoved || (f2.width = m2.$imageEl[0].offsetWidth, f2.height = m2.$imageEl[0].offsetHeight, f2.startX = h(m2.$imageWrapEl[0], "x") || 0, f2.startY = h(m2.$imageWrapEl[0], "y") || 0, m2.slideWidth = m2.$slideEl[0].offsetWidth, m2.slideHeight = m2.$slideEl[0].offsetHeight, m2.$imageWrapEl.transition(0));
          const a3 = f2.width * s3.scale, i3 = f2.height * s3.scale;
          if (!(a3 < m2.slideWidth && i3 < m2.slideHeight)) {
            if (f2.minX = Math.min(m2.slideWidth / 2 - a3 / 2, 0), f2.maxX = -f2.minX, f2.minY = Math.min(m2.slideHeight / 2 - i3 / 2, 0), f2.maxY = -f2.minY, f2.touchesCurrent.x = "touchmove" === e3.type ? e3.targetTouches[0].pageX : e3.pageX, f2.touchesCurrent.y = "touchmove" === e3.type ? e3.targetTouches[0].pageY : e3.pageY, !f2.isMoved && !u2) {
              if (t2.isHorizontal() && (Math.floor(f2.minX) === Math.floor(f2.startX) && f2.touchesCurrent.x < f2.touchesStart.x || Math.floor(f2.maxX) === Math.floor(f2.startX) && f2.touchesCurrent.x > f2.touchesStart.x)) return void (f2.isTouched = false);
              if (!t2.isHorizontal() && (Math.floor(f2.minY) === Math.floor(f2.startY) && f2.touchesCurrent.y < f2.touchesStart.y || Math.floor(f2.maxY) === Math.floor(f2.startY) && f2.touchesCurrent.y > f2.touchesStart.y)) return void (f2.isTouched = false);
            }
            e3.cancelable && e3.preventDefault(), e3.stopPropagation(), f2.isMoved = true, f2.currentX = f2.touchesCurrent.x - f2.touchesStart.x + f2.startX, f2.currentY = f2.touchesCurrent.y - f2.touchesStart.y + f2.startY, f2.currentX < f2.minX && (f2.currentX = f2.minX + 1 - (f2.minX - f2.currentX + 1) ** 0.8), f2.currentX > f2.maxX && (f2.currentX = f2.maxX - 1 + (f2.currentX - f2.maxX + 1) ** 0.8), f2.currentY < f2.minY && (f2.currentY = f2.minY + 1 - (f2.minY - f2.currentY + 1) ** 0.8), f2.currentY > f2.maxY && (f2.currentY = f2.maxY - 1 + (f2.currentY - f2.maxY + 1) ** 0.8), g2.prevPositionX || (g2.prevPositionX = f2.touchesCurrent.x), g2.prevPositionY || (g2.prevPositionY = f2.touchesCurrent.y), g2.prevTime || (g2.prevTime = Date.now()), g2.x = (f2.touchesCurrent.x - g2.prevPositionX) / (Date.now() - g2.prevTime) / 2, g2.y = (f2.touchesCurrent.y - g2.prevPositionY) / (Date.now() - g2.prevTime) / 2, Math.abs(f2.touchesCurrent.x - g2.prevPositionX) < 2 && (g2.x = 0), Math.abs(f2.touchesCurrent.y - g2.prevPositionY) < 2 && (g2.y = 0), g2.prevPositionX = f2.touchesCurrent.x, g2.prevPositionY = f2.touchesCurrent.y, g2.prevTime = Date.now(), m2.$imageWrapEl.transform(`translate3d(${f2.currentX}px, ${f2.currentY}px,0)`);
          }
        }
        function C2() {
          const e3 = t2.zoom;
          m2.$slideEl && t2.previousIndex !== t2.activeIndex && (m2.$imageEl && m2.$imageEl.transform("translate3d(0,0,0) scale(1)"), m2.$imageWrapEl && m2.$imageWrapEl.transform("translate3d(0,0,0)"), e3.scale = 1, p2 = 1, m2.$slideEl = void 0, m2.$imageEl = void 0, m2.$imageWrapEl = void 0);
        }
        function T2(e3) {
          const s3 = t2.zoom, a3 = t2.params.zoom;
          if (m2.$slideEl || (e3 && e3.target && (m2.$slideEl = d(e3.target).closest(`.${t2.params.slideClass}`)), m2.$slideEl || (t2.params.virtual && t2.params.virtual.enabled && t2.virtual ? m2.$slideEl = t2.$wrapperEl.children(`.${t2.params.slideActiveClass}`) : m2.$slideEl = t2.slides.eq(t2.activeIndex)), m2.$imageEl = m2.$slideEl.find(`.${a3.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m2.$imageWrapEl = m2.$imageEl.parent(`.${a3.containerClass}`)), !m2.$imageEl || 0 === m2.$imageEl.length || !m2.$imageWrapEl || 0 === m2.$imageWrapEl.length) return;
          let i3, r2, l3, o3, c3, u3, h2, g3, v3, w3, b3, x3, y3, E3, C3, T3, $3, S3;
          t2.params.cssMode && (t2.wrapperEl.style.overflow = "hidden", t2.wrapperEl.style.touchAction = "none"), m2.$slideEl.addClass(`${a3.zoomedSlideClass}`), void 0 === f2.touchesStart.x && e3 ? (i3 = "touchend" === e3.type ? e3.changedTouches[0].pageX : e3.pageX, r2 = "touchend" === e3.type ? e3.changedTouches[0].pageY : e3.pageY) : (i3 = f2.touchesStart.x, r2 = f2.touchesStart.y), s3.scale = m2.$imageWrapEl.attr("data-swiper-zoom") || a3.maxRatio, p2 = m2.$imageWrapEl.attr("data-swiper-zoom") || a3.maxRatio, e3 ? ($3 = m2.$slideEl[0].offsetWidth, S3 = m2.$slideEl[0].offsetHeight, l3 = m2.$slideEl.offset().left + n2.scrollX, o3 = m2.$slideEl.offset().top + n2.scrollY, c3 = l3 + $3 / 2 - i3, u3 = o3 + S3 / 2 - r2, v3 = m2.$imageEl[0].offsetWidth, w3 = m2.$imageEl[0].offsetHeight, b3 = v3 * s3.scale, x3 = w3 * s3.scale, y3 = Math.min($3 / 2 - b3 / 2, 0), E3 = Math.min(S3 / 2 - x3 / 2, 0), C3 = -y3, T3 = -E3, h2 = c3 * s3.scale, g3 = u3 * s3.scale, h2 < y3 && (h2 = y3), h2 > C3 && (h2 = C3), g3 < E3 && (g3 = E3), g3 > T3 && (g3 = T3)) : (h2 = 0, g3 = 0), m2.$imageWrapEl.transition(300).transform(`translate3d(${h2}px, ${g3}px,0)`), m2.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s3.scale})`);
        }
        function $2() {
          const e3 = t2.zoom, s3 = t2.params.zoom;
          m2.$slideEl || (t2.params.virtual && t2.params.virtual.enabled && t2.virtual ? m2.$slideEl = t2.$wrapperEl.children(`.${t2.params.slideActiveClass}`) : m2.$slideEl = t2.slides.eq(t2.activeIndex), m2.$imageEl = m2.$slideEl.find(`.${s3.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m2.$imageWrapEl = m2.$imageEl.parent(`.${s3.containerClass}`)), m2.$imageEl && 0 !== m2.$imageEl.length && m2.$imageWrapEl && 0 !== m2.$imageWrapEl.length && (t2.params.cssMode && (t2.wrapperEl.style.overflow = "", t2.wrapperEl.style.touchAction = ""), e3.scale = 1, p2 = 1, m2.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m2.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m2.$slideEl.removeClass(`${s3.zoomedSlideClass}`), m2.$slideEl = void 0);
        }
        function S2(e3) {
          const s3 = t2.zoom;
          s3.scale && 1 !== s3.scale ? $2() : T2(e3);
        }
        function M2() {
          const e3 = t2.support;
          return { passiveListener: !("touchstart" !== t2.touchEvents.start || !e3.passiveListener || !t2.params.passiveListeners) && { passive: true, capture: false }, activeListenerWithCapture: !e3.passiveListener || { passive: false, capture: true } };
        }
        function P2() {
          return `.${t2.params.slideClass}`;
        }
        function k2(e3) {
          const { passiveListener: s3 } = M2(), a3 = P2();
          t2.$wrapperEl[e3]("gesturestart", a3, b2, s3), t2.$wrapperEl[e3]("gesturechange", a3, x2, s3), t2.$wrapperEl[e3]("gestureend", a3, y2, s3);
        }
        function z2() {
          l2 || (l2 = true, k2("on"));
        }
        function L2() {
          l2 && (l2 = false, k2("off"));
        }
        function O2() {
          const e3 = t2.zoom;
          if (e3.enabled) return;
          e3.enabled = true;
          const s3 = t2.support, { passiveListener: a3, activeListenerWithCapture: i3 } = M2(), r2 = P2();
          s3.gestures ? (t2.$wrapperEl.on(t2.touchEvents.start, z2, a3), t2.$wrapperEl.on(t2.touchEvents.end, L2, a3)) : "touchstart" === t2.touchEvents.start && (t2.$wrapperEl.on(t2.touchEvents.start, r2, b2, a3), t2.$wrapperEl.on(t2.touchEvents.move, r2, x2, i3), t2.$wrapperEl.on(t2.touchEvents.end, r2, y2, a3), t2.touchEvents.cancel && t2.$wrapperEl.on(t2.touchEvents.cancel, r2, y2, a3)), t2.$wrapperEl.on(t2.touchEvents.move, `.${t2.params.zoom.containerClass}`, E2, i3);
        }
        function I2() {
          const e3 = t2.zoom;
          if (!e3.enabled) return;
          const s3 = t2.support;
          e3.enabled = false;
          const { passiveListener: a3, activeListenerWithCapture: i3 } = M2(), r2 = P2();
          s3.gestures ? (t2.$wrapperEl.off(t2.touchEvents.start, z2, a3), t2.$wrapperEl.off(t2.touchEvents.end, L2, a3)) : "touchstart" === t2.touchEvents.start && (t2.$wrapperEl.off(t2.touchEvents.start, r2, b2, a3), t2.$wrapperEl.off(t2.touchEvents.move, r2, x2, i3), t2.$wrapperEl.off(t2.touchEvents.end, r2, y2, a3), t2.touchEvents.cancel && t2.$wrapperEl.off(t2.touchEvents.cancel, r2, y2, a3)), t2.$wrapperEl.off(t2.touchEvents.move, `.${t2.params.zoom.containerClass}`, E2, i3);
        }
        Object.defineProperty(t2.zoom, "scale", { get: () => v2, set(e3) {
          if (v2 !== e3) {
            const t3 = m2.$imageEl ? m2.$imageEl[0] : void 0, s3 = m2.$slideEl ? m2.$slideEl[0] : void 0;
            i2("zoomChange", e3, t3, s3);
          }
          v2 = e3;
        } }), a2("init", () => {
          t2.params.zoom.enabled && O2();
        }), a2("destroy", () => {
          I2();
        }), a2("touchStart", (e3, s3) => {
          t2.zoom.enabled && function(e4) {
            const s4 = t2.device;
            m2.$imageEl && 0 !== m2.$imageEl.length && (f2.isTouched || (s4.android && e4.cancelable && e4.preventDefault(), f2.isTouched = true, f2.touchesStart.x = "touchstart" === e4.type ? e4.targetTouches[0].pageX : e4.pageX, f2.touchesStart.y = "touchstart" === e4.type ? e4.targetTouches[0].pageY : e4.pageY));
          }(s3);
        }), a2("touchEnd", (e3, s3) => {
          t2.zoom.enabled && function() {
            const e4 = t2.zoom;
            if (!m2.$imageEl || 0 === m2.$imageEl.length) return;
            if (!f2.isTouched || !f2.isMoved) return f2.isTouched = false, void (f2.isMoved = false);
            f2.isTouched = false, f2.isMoved = false;
            let s4 = 300, a3 = 300;
            const i3 = g2.x * s4, r2 = f2.currentX + i3, n3 = g2.y * a3, l3 = f2.currentY + n3;
            0 !== g2.x && (s4 = Math.abs((r2 - f2.currentX) / g2.x)), 0 !== g2.y && (a3 = Math.abs((l3 - f2.currentY) / g2.y));
            const o3 = Math.max(s4, a3);
            f2.currentX = r2, f2.currentY = l3;
            const d2 = f2.width * e4.scale, c3 = f2.height * e4.scale;
            f2.minX = Math.min(m2.slideWidth / 2 - d2 / 2, 0), f2.maxX = -f2.minX, f2.minY = Math.min(m2.slideHeight / 2 - c3 / 2, 0), f2.maxY = -f2.minY, f2.currentX = Math.max(Math.min(f2.currentX, f2.maxX), f2.minX), f2.currentY = Math.max(Math.min(f2.currentY, f2.maxY), f2.minY), m2.$imageWrapEl.transition(o3).transform(`translate3d(${f2.currentX}px, ${f2.currentY}px,0)`);
          }();
        }), a2("doubleTap", (e3, s3) => {
          !t2.animating && t2.params.zoom.enabled && t2.zoom.enabled && t2.params.zoom.toggle && S2(s3);
        }), a2("transitionEnd", () => {
          t2.zoom.enabled && t2.params.zoom.enabled && C2();
        }), a2("slideChange", () => {
          t2.zoom.enabled && t2.params.zoom.enabled && t2.params.cssMode && C2();
        }), Object.assign(t2.zoom, { enable: O2, disable: I2, in: T2, out: $2, toggle: S2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
        s2({ lazy: { checkInView: false, enabled: false, loadPrevNext: false, loadPrevNextAmount: 1, loadOnTransitionStart: false, scrollingElement: "", elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }), t2.lazy = {};
        let n2 = false, l2 = false;
        function o2(e3, s3) {
          void 0 === s3 && (s3 = true);
          const a3 = t2.params.lazy;
          if (void 0 === e3) return;
          if (0 === t2.slides.length) return;
          const r2 = t2.virtual && t2.params.virtual.enabled ? t2.$wrapperEl.children(`.${t2.params.slideClass}[data-swiper-slide-index="${e3}"]`) : t2.slides.eq(e3), n3 = r2.find(`.${a3.elementClass}:not(.${a3.loadedClass}):not(.${a3.loadingClass})`);
          !r2.hasClass(a3.elementClass) || r2.hasClass(a3.loadedClass) || r2.hasClass(a3.loadingClass) || n3.push(r2[0]), 0 !== n3.length && n3.each((e4) => {
            const n4 = d(e4);
            n4.addClass(a3.loadingClass);
            const l3 = n4.attr("data-background"), c3 = n4.attr("data-src"), p3 = n4.attr("data-srcset"), u2 = n4.attr("data-sizes"), h2 = n4.parent("picture");
            t2.loadImage(n4[0], c3 || l3, p3, u2, false, () => {
              if (null != t2 && t2 && (!t2 || t2.params) && !t2.destroyed) {
                if (l3 ? (n4.css("background-image", `url("${l3}")`), n4.removeAttr("data-background")) : (p3 && (n4.attr("srcset", p3), n4.removeAttr("data-srcset")), u2 && (n4.attr("sizes", u2), n4.removeAttr("data-sizes")), h2.length && h2.children("source").each((e5) => {
                  const t3 = d(e5);
                  t3.attr("data-srcset") && (t3.attr("srcset", t3.attr("data-srcset")), t3.removeAttr("data-srcset"));
                }), c3 && (n4.attr("src", c3), n4.removeAttr("data-src"))), n4.addClass(a3.loadedClass).removeClass(a3.loadingClass), r2.find(`.${a3.preloaderClass}`).remove(), t2.params.loop && s3) {
                  const e5 = r2.attr("data-swiper-slide-index");
                  if (r2.hasClass(t2.params.slideDuplicateClass)) {
                    o2(t2.$wrapperEl.children(`[data-swiper-slide-index="${e5}"]:not(.${t2.params.slideDuplicateClass})`).index(), false);
                  } else {
                    o2(t2.$wrapperEl.children(`.${t2.params.slideDuplicateClass}[data-swiper-slide-index="${e5}"]`).index(), false);
                  }
                }
                i2("lazyImageReady", r2[0], n4[0]), t2.params.autoHeight && t2.updateAutoHeight();
              }
            }), i2("lazyImageLoad", r2[0], n4[0]);
          });
        }
        function c2() {
          const { $wrapperEl: e3, params: s3, slides: a3, activeIndex: i3 } = t2, r2 = t2.virtual && s3.virtual.enabled, n3 = s3.lazy;
          let c3 = s3.slidesPerView;
          function p3(t3) {
            if (r2) {
              if (e3.children(`.${s3.slideClass}[data-swiper-slide-index="${t3}"]`).length) return true;
            } else if (a3[t3]) return true;
            return false;
          }
          function u2(e4) {
            return r2 ? d(e4).attr("data-swiper-slide-index") : d(e4).index();
          }
          if ("auto" === c3 && (c3 = 0), l2 || (l2 = true), t2.params.watchSlidesProgress) e3.children(`.${s3.slideVisibleClass}`).each((e4) => {
            o2(r2 ? d(e4).attr("data-swiper-slide-index") : d(e4).index());
          });
          else if (c3 > 1) for (let e4 = i3; e4 < i3 + c3; e4 += 1) p3(e4) && o2(e4);
          else o2(i3);
          if (n3.loadPrevNext) if (c3 > 1 || n3.loadPrevNextAmount && n3.loadPrevNextAmount > 1) {
            const e4 = n3.loadPrevNextAmount, t3 = Math.ceil(c3), s4 = Math.min(i3 + t3 + Math.max(e4, t3), a3.length), r3 = Math.max(i3 - Math.max(t3, e4), 0);
            for (let e5 = i3 + t3; e5 < s4; e5 += 1) p3(e5) && o2(e5);
            for (let e5 = r3; e5 < i3; e5 += 1) p3(e5) && o2(e5);
          } else {
            const t3 = e3.children(`.${s3.slideNextClass}`);
            t3.length > 0 && o2(u2(t3));
            const a4 = e3.children(`.${s3.slidePrevClass}`);
            a4.length > 0 && o2(u2(a4));
          }
        }
        function p2() {
          const e3 = r();
          if (!t2 || t2.destroyed) return;
          const s3 = t2.params.lazy.scrollingElement ? d(t2.params.lazy.scrollingElement) : d(e3), a3 = s3[0] === e3, i3 = a3 ? e3.innerWidth : s3[0].offsetWidth, l3 = a3 ? e3.innerHeight : s3[0].offsetHeight, o3 = t2.$el.offset(), { rtlTranslate: u2 } = t2;
          let h2 = false;
          u2 && (o3.left -= t2.$el[0].scrollLeft);
          const m2 = [[o3.left, o3.top], [o3.left + t2.width, o3.top], [o3.left, o3.top + t2.height], [o3.left + t2.width, o3.top + t2.height]];
          for (let e4 = 0; e4 < m2.length; e4 += 1) {
            const t3 = m2[e4];
            if (t3[0] >= 0 && t3[0] <= i3 && t3[1] >= 0 && t3[1] <= l3) {
              if (0 === t3[0] && 0 === t3[1]) continue;
              h2 = true;
            }
          }
          const f2 = !("touchstart" !== t2.touchEvents.start || !t2.support.passiveListener || !t2.params.passiveListeners) && { passive: true, capture: false };
          h2 ? (c2(), s3.off("scroll", p2, f2)) : n2 || (n2 = true, s3.on("scroll", p2, f2));
        }
        a2("beforeInit", () => {
          t2.params.lazy.enabled && t2.params.preloadImages && (t2.params.preloadImages = false);
        }), a2("init", () => {
          t2.params.lazy.enabled && (t2.params.lazy.checkInView ? p2() : c2());
        }), a2("scroll", () => {
          t2.params.freeMode && t2.params.freeMode.enabled && !t2.params.freeMode.sticky && c2();
        }), a2("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          t2.params.lazy.enabled && (t2.params.lazy.checkInView ? p2() : c2());
        }), a2("transitionStart", () => {
          t2.params.lazy.enabled && (t2.params.lazy.loadOnTransitionStart || !t2.params.lazy.loadOnTransitionStart && !l2) && (t2.params.lazy.checkInView ? p2() : c2());
        }), a2("transitionEnd", () => {
          t2.params.lazy.enabled && !t2.params.lazy.loadOnTransitionStart && (t2.params.lazy.checkInView ? p2() : c2());
        }), a2("slideChange", () => {
          const { lazy: e3, cssMode: s3, watchSlidesProgress: a3, touchReleaseOnEdges: i3, resistanceRatio: r2 } = t2.params;
          e3.enabled && (s3 || a3 && (i3 || 0 === r2)) && c2();
        }), a2("destroy", () => {
          t2.$el && t2.$el.find(`.${t2.params.lazy.loadingClass}`).removeClass(t2.params.lazy.loadingClass);
        }), Object.assign(t2.lazy, { load: c2, loadInSlide: o2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        function i2(e3, t3) {
          const s3 = /* @__PURE__ */ function() {
            let e4, t4, s4;
            return (a4, i4) => {
              for (t4 = -1, e4 = a4.length; e4 - t4 > 1; ) s4 = e4 + t4 >> 1, a4[s4] <= i4 ? t4 = s4 : e4 = s4;
              return e4;
            };
          }();
          let a3, i3;
          return this.x = e3, this.y = t3, this.lastIndex = e3.length - 1, this.interpolate = function(e4) {
            return e4 ? (i3 = s3(this.x, e4), a3 = i3 - 1, (e4 - this.x[a3]) * (this.y[i3] - this.y[a3]) / (this.x[i3] - this.x[a3]) + this.y[a3]) : 0;
          }, this;
        }
        function r2() {
          t2.controller.control && t2.controller.spline && (t2.controller.spline = void 0, delete t2.controller.spline);
        }
        s2({ controller: { control: void 0, inverse: false, by: "slide" } }), t2.controller = { control: void 0 }, a2("beforeInit", () => {
          t2.controller.control = t2.params.controller.control;
        }), a2("update", () => {
          r2();
        }), a2("resize", () => {
          r2();
        }), a2("observerUpdate", () => {
          r2();
        }), a2("setTranslate", (e3, s3, a3) => {
          t2.controller.control && t2.controller.setTranslate(s3, a3);
        }), a2("setTransition", (e3, s3, a3) => {
          t2.controller.control && t2.controller.setTransition(s3, a3);
        }), Object.assign(t2.controller, { setTranslate: function(e3, s3) {
          const a3 = t2.controller.control;
          let r3, n2;
          const l2 = t2.constructor;
          function o2(e4) {
            const s4 = t2.rtlTranslate ? -t2.translate : t2.translate;
            "slide" === t2.params.controller.by && (!function(e5) {
              t2.controller.spline || (t2.controller.spline = t2.params.loop ? new i2(t2.slidesGrid, e5.slidesGrid) : new i2(t2.snapGrid, e5.snapGrid));
            }(e4), n2 = -t2.controller.spline.interpolate(-s4)), n2 && "container" !== t2.params.controller.by || (r3 = (e4.maxTranslate() - e4.minTranslate()) / (t2.maxTranslate() - t2.minTranslate()), n2 = (s4 - t2.minTranslate()) * r3 + e4.minTranslate()), t2.params.controller.inverse && (n2 = e4.maxTranslate() - n2), e4.updateProgress(n2), e4.setTranslate(n2, t2), e4.updateActiveIndex(), e4.updateSlidesClasses();
          }
          if (Array.isArray(a3)) for (let e4 = 0; e4 < a3.length; e4 += 1) a3[e4] !== s3 && a3[e4] instanceof l2 && o2(a3[e4]);
          else a3 instanceof l2 && s3 !== a3 && o2(a3);
        }, setTransition: function(e3, s3) {
          const a3 = t2.constructor, i3 = t2.controller.control;
          let r3;
          function n2(s4) {
            s4.setTransition(e3, t2), 0 !== e3 && (s4.transitionStart(), s4.params.autoHeight && p(() => {
              s4.updateAutoHeight();
            }), s4.$wrapperEl.transitionEnd(() => {
              i3 && (s4.params.loop && "slide" === t2.params.controller.by && s4.loopFix(), s4.transitionEnd());
            }));
          }
          if (Array.isArray(i3)) for (r3 = 0; r3 < i3.length; r3 += 1) i3[r3] !== s3 && i3[r3] instanceof a3 && n2(i3[r3]);
          else i3 instanceof a3 && s3 !== i3 && n2(i3);
        } });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ a11y: { enabled: true, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null, slideRole: "group", id: null } }), t2.a11y = { clicked: false };
        let i2 = null;
        function r2(e3) {
          const t3 = i2;
          0 !== t3.length && (t3.html(""), t3.html(e3));
        }
        function n2(e3) {
          e3.attr("tabIndex", "0");
        }
        function l2(e3) {
          e3.attr("tabIndex", "-1");
        }
        function o2(e3, t3) {
          e3.attr("role", t3);
        }
        function c2(e3, t3) {
          e3.attr("aria-roledescription", t3);
        }
        function p2(e3, t3) {
          e3.attr("aria-label", t3);
        }
        function u2(e3) {
          e3.attr("aria-disabled", true);
        }
        function h2(e3) {
          e3.attr("aria-disabled", false);
        }
        function m2(e3) {
          if (13 !== e3.keyCode && 32 !== e3.keyCode) return;
          const s3 = t2.params.a11y, a3 = d(e3.target);
          t2.navigation && t2.navigation.$nextEl && a3.is(t2.navigation.$nextEl) && (t2.isEnd && !t2.params.loop || t2.slideNext(), t2.isEnd ? r2(s3.lastSlideMessage) : r2(s3.nextSlideMessage)), t2.navigation && t2.navigation.$prevEl && a3.is(t2.navigation.$prevEl) && (t2.isBeginning && !t2.params.loop || t2.slidePrev(), t2.isBeginning ? r2(s3.firstSlideMessage) : r2(s3.prevSlideMessage)), t2.pagination && a3.is(U(t2.params.pagination.bulletClass)) && a3[0].click();
        }
        function f2() {
          return t2.pagination && t2.pagination.bullets && t2.pagination.bullets.length;
        }
        function g2() {
          return f2() && t2.params.pagination.clickable;
        }
        const v2 = (e3, t3, s3) => {
          n2(e3), "BUTTON" !== e3[0].tagName && (o2(e3, "button"), e3.on("keydown", m2)), p2(e3, s3), function(e4, t4) {
            e4.attr("aria-controls", t4);
          }(e3, t3);
        }, w2 = () => {
          t2.a11y.clicked = true;
        }, b2 = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t2.destroyed || (t2.a11y.clicked = false);
            });
          });
        }, x2 = (e3) => {
          if (t2.a11y.clicked) return;
          const s3 = e3.target.closest(`.${t2.params.slideClass}`);
          if (!s3 || !t2.slides.includes(s3)) return;
          const a3 = t2.slides.indexOf(s3) === t2.activeIndex, i3 = t2.params.watchSlidesProgress && t2.visibleSlides && t2.visibleSlides.includes(s3);
          a3 || i3 || e3.sourceCapabilities && e3.sourceCapabilities.firesTouchEvents || (t2.isHorizontal() ? t2.el.scrollLeft = 0 : t2.el.scrollTop = 0, t2.slideTo(t2.slides.indexOf(s3), 0));
        }, y2 = () => {
          const e3 = t2.params.a11y;
          e3.itemRoleDescriptionMessage && c2(d(t2.slides), e3.itemRoleDescriptionMessage), e3.slideRole && o2(d(t2.slides), e3.slideRole);
          const s3 = t2.params.loop ? t2.slides.filter((e4) => !e4.classList.contains(t2.params.slideDuplicateClass)).length : t2.slides.length;
          e3.slideLabelMessage && t2.slides.each((a3, i3) => {
            const r3 = d(a3), n3 = t2.params.loop ? parseInt(r3.attr("data-swiper-slide-index"), 10) : i3;
            p2(r3, e3.slideLabelMessage.replace(/\{\{index\}\}/, n3 + 1).replace(/\{\{slidesLength\}\}/, s3));
          });
        }, E2 = () => {
          const e3 = t2.params.a11y;
          t2.$el.append(i2);
          const s3 = t2.$el;
          e3.containerRoleDescriptionMessage && c2(s3, e3.containerRoleDescriptionMessage), e3.containerMessage && p2(s3, e3.containerMessage);
          const a3 = t2.$wrapperEl, r3 = e3.id || a3.attr("id") || `swiper-wrapper-${n3 = 16, void 0 === n3 && (n3 = 16), "x".repeat(n3).replace(/x/g, () => Math.round(16 * Math.random()).toString(16))}`;
          var n3;
          const l3 = t2.params.autoplay && t2.params.autoplay.enabled ? "off" : "polite";
          var o3;
          let d2, u3;
          o3 = r3, a3.attr("id", o3), function(e4, t3) {
            e4.attr("aria-live", t3);
          }(a3, l3), y2(), t2.navigation && t2.navigation.$nextEl && (d2 = t2.navigation.$nextEl), t2.navigation && t2.navigation.$prevEl && (u3 = t2.navigation.$prevEl), d2 && d2.length && v2(d2, r3, e3.nextSlideMessage), u3 && u3.length && v2(u3, r3, e3.prevSlideMessage), g2() && t2.pagination.$el.on("keydown", U(t2.params.pagination.bulletClass), m2), t2.$el.on("focus", x2, true), t2.$el.on("pointerdown", w2, true), t2.$el.on("pointerup", b2, true);
        };
        a2("beforeInit", () => {
          i2 = d(`<span class="${t2.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
        }), a2("afterInit", () => {
          t2.params.a11y.enabled && E2();
        }), a2("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          t2.params.a11y.enabled && y2();
        }), a2("fromEdge toEdge afterInit lock unlock", () => {
          t2.params.a11y.enabled && function() {
            if (t2.params.loop || t2.params.rewind || !t2.navigation) return;
            const { $nextEl: e3, $prevEl: s3 } = t2.navigation;
            s3 && s3.length > 0 && (t2.isBeginning ? (u2(s3), l2(s3)) : (h2(s3), n2(s3))), e3 && e3.length > 0 && (t2.isEnd ? (u2(e3), l2(e3)) : (h2(e3), n2(e3)));
          }();
        }), a2("paginationUpdate", () => {
          t2.params.a11y.enabled && function() {
            const e3 = t2.params.a11y;
            f2() && t2.pagination.bullets.each((s3) => {
              const a3 = d(s3);
              t2.params.pagination.clickable && (n2(a3), t2.params.pagination.renderBullet || (o2(a3, "button"), p2(a3, e3.paginationBulletMessage.replace(/\{\{index\}\}/, a3.index() + 1)))), a3.is(`.${t2.params.pagination.bulletActiveClass}`) ? a3.attr("aria-current", "true") : a3.removeAttr("aria-current");
            });
          }();
        }), a2("destroy", () => {
          t2.params.a11y.enabled && function() {
            let e3, s3;
            i2 && i2.length > 0 && i2.remove(), t2.navigation && t2.navigation.$nextEl && (e3 = t2.navigation.$nextEl), t2.navigation && t2.navigation.$prevEl && (s3 = t2.navigation.$prevEl), e3 && e3.off("keydown", m2), s3 && s3.off("keydown", m2), g2() && t2.pagination.$el.off("keydown", U(t2.params.pagination.bulletClass), m2), t2.$el.off("focus", x2, true), t2.$el.off("pointerdown", w2, true), t2.$el.off("pointerup", b2, true);
          }();
        });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ history: { enabled: false, root: "", replaceState: false, key: "slides", keepQuery: false } });
        let i2 = false, n2 = {};
        const l2 = (e3) => e3.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o2 = (e3) => {
          const t3 = r();
          let s3;
          s3 = e3 ? new URL(e3) : t3.location;
          const a3 = s3.pathname.slice(1).split("/").filter((e4) => "" !== e4), i3 = a3.length;
          return { key: a3[i3 - 2], value: a3[i3 - 1] };
        }, d2 = (e3, s3) => {
          const a3 = r();
          if (!i2 || !t2.params.history.enabled) return;
          let n3;
          n3 = t2.params.url ? new URL(t2.params.url) : a3.location;
          const o3 = t2.slides.eq(s3);
          let d3 = l2(o3.attr("data-history"));
          if (t2.params.history.root.length > 0) {
            let s4 = t2.params.history.root;
            "/" === s4[s4.length - 1] && (s4 = s4.slice(0, s4.length - 1)), d3 = `${s4}/${e3}/${d3}`;
          } else n3.pathname.includes(e3) || (d3 = `${e3}/${d3}`);
          t2.params.history.keepQuery && (d3 += n3.search);
          const c3 = a3.history.state;
          c3 && c3.value === d3 || (t2.params.history.replaceState ? a3.history.replaceState({ value: d3 }, null, d3) : a3.history.pushState({ value: d3 }, null, d3));
        }, c2 = (e3, s3, a3) => {
          if (s3) for (let i3 = 0, r2 = t2.slides.length; i3 < r2; i3 += 1) {
            const r3 = t2.slides.eq(i3);
            if (l2(r3.attr("data-history")) === s3 && !r3.hasClass(t2.params.slideDuplicateClass)) {
              const s4 = r3.index();
              t2.slideTo(s4, e3, a3);
            }
          }
          else t2.slideTo(0, e3, a3);
        }, p2 = () => {
          n2 = o2(t2.params.url), c2(t2.params.speed, n2.value, false);
        };
        a2("init", () => {
          t2.params.history.enabled && (() => {
            const e3 = r();
            if (t2.params.history) {
              if (!e3.history || !e3.history.pushState) return t2.params.history.enabled = false, void (t2.params.hashNavigation.enabled = true);
              i2 = true, n2 = o2(t2.params.url), (n2.key || n2.value) && (c2(0, n2.value, t2.params.runCallbacksOnInit), t2.params.history.replaceState || e3.addEventListener("popstate", p2));
            }
          })();
        }), a2("destroy", () => {
          t2.params.history.enabled && (() => {
            const e3 = r();
            t2.params.history.replaceState || e3.removeEventListener("popstate", p2);
          })();
        }), a2("transitionEnd _freeModeNoMomentumRelease", () => {
          i2 && d2(t2.params.history.key, t2.activeIndex);
        }), a2("slideChange", () => {
          i2 && t2.params.cssMode && d2(t2.params.history.key, t2.activeIndex);
        });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, emit: i2, on: n2 } = e2, l2 = false;
        const o2 = a(), c2 = r();
        s2({ hashNavigation: { enabled: false, replaceState: false, watchState: false } });
        const p2 = () => {
          i2("hashChange");
          const e3 = o2.location.hash.replace("#", "");
          if (e3 !== t2.slides.eq(t2.activeIndex).attr("data-hash")) {
            const s3 = t2.$wrapperEl.children(`.${t2.params.slideClass}[data-hash="${e3}"]`).index();
            if (void 0 === s3) return;
            t2.slideTo(s3);
          }
        }, u2 = () => {
          if (l2 && t2.params.hashNavigation.enabled) if (t2.params.hashNavigation.replaceState && c2.history && c2.history.replaceState) c2.history.replaceState(null, null, `#${t2.slides.eq(t2.activeIndex).attr("data-hash")}` || ""), i2("hashSet");
          else {
            const e3 = t2.slides.eq(t2.activeIndex), s3 = e3.attr("data-hash") || e3.attr("data-history");
            o2.location.hash = s3 || "", i2("hashSet");
          }
        };
        n2("init", () => {
          t2.params.hashNavigation.enabled && (() => {
            if (!t2.params.hashNavigation.enabled || t2.params.history && t2.params.history.enabled) return;
            l2 = true;
            const e3 = o2.location.hash.replace("#", "");
            if (e3) {
              const s3 = 0;
              for (let a2 = 0, i3 = t2.slides.length; a2 < i3; a2 += 1) {
                const i4 = t2.slides.eq(a2);
                if ((i4.attr("data-hash") || i4.attr("data-history")) === e3 && !i4.hasClass(t2.params.slideDuplicateClass)) {
                  const e4 = i4.index();
                  t2.slideTo(e4, s3, t2.params.runCallbacksOnInit, true);
                }
              }
            }
            t2.params.hashNavigation.watchState && d(c2).on("hashchange", p2);
          })();
        }), n2("destroy", () => {
          t2.params.hashNavigation.enabled && t2.params.hashNavigation.watchState && d(c2).off("hashchange", p2);
        }), n2("transitionEnd _freeModeNoMomentumRelease", () => {
          l2 && u2();
        }), n2("slideChange", () => {
          l2 && t2.params.cssMode && u2();
        });
      }, function(e2) {
        let t2, { swiper: s2, extendParams: i2, on: r2, emit: n2 } = e2;
        function l2() {
          if (!s2.size) return s2.autoplay.running = false, void (s2.autoplay.paused = false);
          const e3 = s2.slides.eq(s2.activeIndex);
          let a2 = s2.params.autoplay.delay;
          e3.attr("data-swiper-autoplay") && (a2 = e3.attr("data-swiper-autoplay") || s2.params.autoplay.delay), clearTimeout(t2), t2 = p(() => {
            let e4;
            s2.params.autoplay.reverseDirection ? s2.params.loop ? (s2.loopFix(), e4 = s2.slidePrev(s2.params.speed, true, true), n2("autoplay")) : s2.isBeginning ? s2.params.autoplay.stopOnLastSlide ? d2() : (e4 = s2.slideTo(s2.slides.length - 1, s2.params.speed, true, true), n2("autoplay")) : (e4 = s2.slidePrev(s2.params.speed, true, true), n2("autoplay")) : s2.params.loop ? (s2.loopFix(), e4 = s2.slideNext(s2.params.speed, true, true), n2("autoplay")) : s2.isEnd ? s2.params.autoplay.stopOnLastSlide ? d2() : (e4 = s2.slideTo(0, s2.params.speed, true, true), n2("autoplay")) : (e4 = s2.slideNext(s2.params.speed, true, true), n2("autoplay")), (s2.params.cssMode && s2.autoplay.running || false === e4) && l2();
          }, a2);
        }
        function o2() {
          return void 0 === t2 && (!s2.autoplay.running && (s2.autoplay.running = true, n2("autoplayStart"), l2(), true));
        }
        function d2() {
          return !!s2.autoplay.running && (void 0 !== t2 && (t2 && (clearTimeout(t2), t2 = void 0), s2.autoplay.running = false, n2("autoplayStop"), true));
        }
        function c2(e3) {
          s2.autoplay.running && (s2.autoplay.paused || (t2 && clearTimeout(t2), s2.autoplay.paused = true, 0 !== e3 && s2.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e4) => {
            s2.$wrapperEl[0].addEventListener(e4, h2);
          }) : (s2.autoplay.paused = false, l2())));
        }
        function u2() {
          const e3 = a();
          "hidden" === e3.visibilityState && s2.autoplay.running && c2(), "visible" === e3.visibilityState && s2.autoplay.paused && (l2(), s2.autoplay.paused = false);
        }
        function h2(e3) {
          s2 && !s2.destroyed && s2.$wrapperEl && e3.target === s2.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e4) => {
            s2.$wrapperEl[0].removeEventListener(e4, h2);
          }), s2.autoplay.paused = false, s2.autoplay.running ? l2() : d2());
        }
        function m2() {
          s2.params.autoplay.disableOnInteraction ? d2() : (n2("autoplayPause"), c2()), ["transitionend", "webkitTransitionEnd"].forEach((e3) => {
            s2.$wrapperEl[0].removeEventListener(e3, h2);
          });
        }
        function f2() {
          s2.params.autoplay.disableOnInteraction || (s2.autoplay.paused = false, n2("autoplayResume"), l2());
        }
        s2.autoplay = { running: false, paused: false }, i2({ autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: true, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: false } }), r2("init", () => {
          if (s2.params.autoplay.enabled) {
            o2();
            a().addEventListener("visibilitychange", u2), s2.params.autoplay.pauseOnMouseEnter && (s2.$el.on("mouseenter", m2), s2.$el.on("mouseleave", f2));
          }
        }), r2("beforeTransitionStart", (e3, t3, a2) => {
          s2.autoplay.running && (a2 || !s2.params.autoplay.disableOnInteraction ? s2.autoplay.pause(t3) : d2());
        }), r2("sliderFirstMove", () => {
          s2.autoplay.running && (s2.params.autoplay.disableOnInteraction ? d2() : c2());
        }), r2("touchEnd", () => {
          s2.params.cssMode && s2.autoplay.paused && !s2.params.autoplay.disableOnInteraction && l2();
        }), r2("destroy", () => {
          s2.$el.off("mouseenter", m2), s2.$el.off("mouseleave", f2), s2.autoplay.running && d2();
          a().removeEventListener("visibilitychange", u2);
        }), Object.assign(s2.autoplay, { pause: c2, run: l2, start: o2, stop: d2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ thumbs: { swiper: null, multipleActiveThumbs: true, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
        let i2 = false, r2 = false;
        function n2() {
          const e3 = t2.thumbs.swiper;
          if (!e3 || e3.destroyed) return;
          const s3 = e3.clickedIndex, a3 = e3.clickedSlide;
          if (a3 && d(a3).hasClass(t2.params.thumbs.slideThumbActiveClass)) return;
          if (null == s3) return;
          let i3;
          if (i3 = e3.params.loop ? parseInt(d(e3.clickedSlide).attr("data-swiper-slide-index"), 10) : s3, t2.params.loop) {
            let e4 = t2.activeIndex;
            t2.slides.eq(e4).hasClass(t2.params.slideDuplicateClass) && (t2.loopFix(), t2._clientLeft = t2.$wrapperEl[0].clientLeft, e4 = t2.activeIndex);
            const s4 = t2.slides.eq(e4).prevAll(`[data-swiper-slide-index="${i3}"]`).eq(0).index(), a4 = t2.slides.eq(e4).nextAll(`[data-swiper-slide-index="${i3}"]`).eq(0).index();
            i3 = void 0 === s4 ? a4 : void 0 === a4 ? s4 : a4 - e4 < e4 - s4 ? a4 : s4;
          }
          t2.slideTo(i3);
        }
        function l2() {
          const { thumbs: e3 } = t2.params;
          if (i2) return false;
          i2 = true;
          const s3 = t2.constructor;
          if (e3.swiper instanceof s3) t2.thumbs.swiper = e3.swiper, Object.assign(t2.thumbs.swiper.originalParams, { watchSlidesProgress: true, slideToClickedSlide: false }), Object.assign(t2.thumbs.swiper.params, { watchSlidesProgress: true, slideToClickedSlide: false });
          else if (m(e3.swiper)) {
            const a3 = Object.assign({}, e3.swiper);
            Object.assign(a3, { watchSlidesProgress: true, slideToClickedSlide: false }), t2.thumbs.swiper = new s3(a3), r2 = true;
          }
          return t2.thumbs.swiper.$el.addClass(t2.params.thumbs.thumbsContainerClass), t2.thumbs.swiper.on("tap", n2), true;
        }
        function o2(e3) {
          const s3 = t2.thumbs.swiper;
          if (!s3 || s3.destroyed) return;
          const a3 = "auto" === s3.params.slidesPerView ? s3.slidesPerViewDynamic() : s3.params.slidesPerView;
          let i3 = 1;
          const r3 = t2.params.thumbs.slideThumbActiveClass;
          if (t2.params.slidesPerView > 1 && !t2.params.centeredSlides && (i3 = t2.params.slidesPerView), t2.params.thumbs.multipleActiveThumbs || (i3 = 1), i3 = Math.floor(i3), s3.slides.removeClass(r3), s3.params.loop || s3.params.virtual && s3.params.virtual.enabled) for (let e4 = 0; e4 < i3; e4 += 1) s3.$wrapperEl.children(`[data-swiper-slide-index="${t2.realIndex + e4}"]`).addClass(r3);
          else for (let e4 = 0; e4 < i3; e4 += 1) s3.slides.eq(t2.realIndex + e4).addClass(r3);
          const n3 = t2.params.thumbs.autoScrollOffset, l3 = n3 && !s3.params.loop;
          if (t2.realIndex !== s3.realIndex || l3) {
            let i4, r4, o3 = s3.activeIndex;
            if (s3.params.loop) {
              s3.slides.eq(o3).hasClass(s3.params.slideDuplicateClass) && (s3.loopFix(), s3._clientLeft = s3.$wrapperEl[0].clientLeft, o3 = s3.activeIndex);
              const e4 = s3.slides.eq(o3).prevAll(`[data-swiper-slide-index="${t2.realIndex}"]`).eq(0).index(), a4 = s3.slides.eq(o3).nextAll(`[data-swiper-slide-index="${t2.realIndex}"]`).eq(0).index();
              i4 = void 0 === e4 ? a4 : void 0 === a4 ? e4 : a4 - o3 == o3 - e4 ? s3.params.slidesPerGroup > 1 ? a4 : o3 : a4 - o3 < o3 - e4 ? a4 : e4, r4 = t2.activeIndex > t2.previousIndex ? "next" : "prev";
            } else i4 = t2.realIndex, r4 = i4 > t2.previousIndex ? "next" : "prev";
            l3 && (i4 += "next" === r4 ? n3 : -1 * n3), s3.visibleSlidesIndexes && s3.visibleSlidesIndexes.indexOf(i4) < 0 && (s3.params.centeredSlides ? i4 = i4 > o3 ? i4 - Math.floor(a3 / 2) + 1 : i4 + Math.floor(a3 / 2) - 1 : i4 > o3 && s3.params.slidesPerGroup, s3.slideTo(i4, e3 ? 0 : void 0));
          }
        }
        t2.thumbs = { swiper: null }, a2("beforeInit", () => {
          const { thumbs: e3 } = t2.params;
          e3 && e3.swiper && (l2(), o2(true));
        }), a2("slideChange update resize observerUpdate", () => {
          o2();
        }), a2("setTransition", (e3, s3) => {
          const a3 = t2.thumbs.swiper;
          a3 && !a3.destroyed && a3.setTransition(s3);
        }), a2("beforeDestroy", () => {
          const e3 = t2.thumbs.swiper;
          e3 && !e3.destroyed && r2 && e3.destroy();
        }), Object.assign(t2.thumbs, { init: l2, update: o2 });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, emit: a2, once: i2 } = e2;
        s2({ freeMode: { enabled: false, momentum: true, momentumRatio: 1, momentumBounce: true, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: false, minimumVelocity: 0.02 } }), Object.assign(t2, { freeMode: { onTouchStart: function() {
          const e3 = t2.getTranslate();
          t2.setTranslate(e3), t2.setTransition(0), t2.touchEventsData.velocities.length = 0, t2.freeMode.onTouchEnd({ currentPos: t2.rtl ? t2.translate : -t2.translate });
        }, onTouchMove: function() {
          const { touchEventsData: e3, touches: s3 } = t2;
          0 === e3.velocities.length && e3.velocities.push({ position: s3[t2.isHorizontal() ? "startX" : "startY"], time: e3.touchStartTime }), e3.velocities.push({ position: s3[t2.isHorizontal() ? "currentX" : "currentY"], time: u() });
        }, onTouchEnd: function(e3) {
          let { currentPos: s3 } = e3;
          const { params: r2, $wrapperEl: n2, rtlTranslate: l2, snapGrid: o2, touchEventsData: d2 } = t2, c2 = u() - d2.touchStartTime;
          if (s3 < -t2.minTranslate()) t2.slideTo(t2.activeIndex);
          else if (s3 > -t2.maxTranslate()) t2.slides.length < o2.length ? t2.slideTo(o2.length - 1) : t2.slideTo(t2.slides.length - 1);
          else {
            if (r2.freeMode.momentum) {
              if (d2.velocities.length > 1) {
                const e5 = d2.velocities.pop(), s5 = d2.velocities.pop(), a3 = e5.position - s5.position, i3 = e5.time - s5.time;
                t2.velocity = a3 / i3, t2.velocity /= 2, Math.abs(t2.velocity) < r2.freeMode.minimumVelocity && (t2.velocity = 0), (i3 > 150 || u() - e5.time > 300) && (t2.velocity = 0);
              } else t2.velocity = 0;
              t2.velocity *= r2.freeMode.momentumVelocityRatio, d2.velocities.length = 0;
              let e4 = 1e3 * r2.freeMode.momentumRatio;
              const s4 = t2.velocity * e4;
              let c3 = t2.translate + s4;
              l2 && (c3 = -c3);
              let p2, h2 = false;
              const m2 = 20 * Math.abs(t2.velocity) * r2.freeMode.momentumBounceRatio;
              let f2;
              if (c3 < t2.maxTranslate()) r2.freeMode.momentumBounce ? (c3 + t2.maxTranslate() < -m2 && (c3 = t2.maxTranslate() - m2), p2 = t2.maxTranslate(), h2 = true, d2.allowMomentumBounce = true) : c3 = t2.maxTranslate(), r2.loop && r2.centeredSlides && (f2 = true);
              else if (c3 > t2.minTranslate()) r2.freeMode.momentumBounce ? (c3 - t2.minTranslate() > m2 && (c3 = t2.minTranslate() + m2), p2 = t2.minTranslate(), h2 = true, d2.allowMomentumBounce = true) : c3 = t2.minTranslate(), r2.loop && r2.centeredSlides && (f2 = true);
              else if (r2.freeMode.sticky) {
                let e5;
                for (let t3 = 0; t3 < o2.length; t3 += 1) if (o2[t3] > -c3) {
                  e5 = t3;
                  break;
                }
                c3 = Math.abs(o2[e5] - c3) < Math.abs(o2[e5 - 1] - c3) || "next" === t2.swipeDirection ? o2[e5] : o2[e5 - 1], c3 = -c3;
              }
              if (f2 && i2("transitionEnd", () => {
                t2.loopFix();
              }), 0 !== t2.velocity) {
                if (e4 = l2 ? Math.abs((-c3 - t2.translate) / t2.velocity) : Math.abs((c3 - t2.translate) / t2.velocity), r2.freeMode.sticky) {
                  const s5 = Math.abs((l2 ? -c3 : c3) - t2.translate), a3 = t2.slidesSizesGrid[t2.activeIndex];
                  e4 = s5 < a3 ? r2.speed : s5 < 2 * a3 ? 1.5 * r2.speed : 2.5 * r2.speed;
                }
              } else if (r2.freeMode.sticky) return void t2.slideToClosest();
              r2.freeMode.momentumBounce && h2 ? (t2.updateProgress(p2), t2.setTransition(e4), t2.setTranslate(c3), t2.transitionStart(true, t2.swipeDirection), t2.animating = true, n2.transitionEnd(() => {
                t2 && !t2.destroyed && d2.allowMomentumBounce && (a2("momentumBounce"), t2.setTransition(r2.speed), setTimeout(() => {
                  t2.setTranslate(p2), n2.transitionEnd(() => {
                    t2 && !t2.destroyed && t2.transitionEnd();
                  });
                }, 0));
              })) : t2.velocity ? (a2("_freeModeNoMomentumRelease"), t2.updateProgress(c3), t2.setTransition(e4), t2.setTranslate(c3), t2.transitionStart(true, t2.swipeDirection), t2.animating || (t2.animating = true, n2.transitionEnd(() => {
                t2 && !t2.destroyed && t2.transitionEnd();
              }))) : t2.updateProgress(c3), t2.updateActiveIndex(), t2.updateSlidesClasses();
            } else {
              if (r2.freeMode.sticky) return void t2.slideToClosest();
              r2.freeMode && a2("_freeModeNoMomentumRelease");
            }
            (!r2.freeMode.momentum || c2 >= r2.longSwipesMs) && (t2.updateProgress(), t2.updateActiveIndex(), t2.updateSlidesClasses());
          }
        } } });
      }, function(e2) {
        let t2, s2, a2, { swiper: i2, extendParams: r2 } = e2;
        r2({ grid: { rows: 1, fill: "column" } }), i2.grid = { initSlides: (e3) => {
          const { slidesPerView: r3 } = i2.params, { rows: n2, fill: l2 } = i2.params.grid;
          s2 = t2 / n2, a2 = Math.floor(e3 / n2), t2 = Math.floor(e3 / n2) === e3 / n2 ? e3 : Math.ceil(e3 / n2) * n2, "auto" !== r3 && "row" === l2 && (t2 = Math.max(t2, r3 * n2));
        }, updateSlide: (e3, r3, n2, l2) => {
          const { slidesPerGroup: o2, spaceBetween: d2 } = i2.params, { rows: c2, fill: p2 } = i2.params.grid;
          let u2, h2, m2;
          if ("row" === p2 && o2 > 1) {
            const s3 = Math.floor(e3 / (o2 * c2)), a3 = e3 - c2 * o2 * s3, i3 = 0 === s3 ? o2 : Math.min(Math.ceil((n2 - s3 * c2 * o2) / c2), o2);
            m2 = Math.floor(a3 / i3), h2 = a3 - m2 * i3 + s3 * o2, u2 = h2 + m2 * t2 / c2, r3.css({ "-webkit-order": u2, order: u2 });
          } else "column" === p2 ? (h2 = Math.floor(e3 / c2), m2 = e3 - h2 * c2, (h2 > a2 || h2 === a2 && m2 === c2 - 1) && (m2 += 1, m2 >= c2 && (m2 = 0, h2 += 1))) : (m2 = Math.floor(e3 / s2), h2 = e3 - m2 * s2);
          r3.css(l2("margin-top"), 0 !== m2 ? d2 && `${d2}px` : "");
        }, updateWrapperSize: (e3, s3, a3) => {
          const { spaceBetween: r3, centeredSlides: n2, roundLengths: l2 } = i2.params, { rows: o2 } = i2.params.grid;
          if (i2.virtualSize = (e3 + r3) * t2, i2.virtualSize = Math.ceil(i2.virtualSize / o2) - r3, i2.$wrapperEl.css({ [a3("width")]: `${i2.virtualSize + r3}px` }), n2) {
            s3.splice(0, s3.length);
            const e4 = [];
            for (let t3 = 0; t3 < s3.length; t3 += 1) {
              let a4 = s3[t3];
              l2 && (a4 = Math.floor(a4)), s3[t3] < i2.virtualSize + s3[0] && e4.push(a4);
            }
            s3.push(...e4);
          }
        } };
      }, function(e2) {
        let { swiper: t2 } = e2;
        Object.assign(t2, { appendSlide: K.bind(t2), prependSlide: Z.bind(t2), addSlide: Q.bind(t2), removeSlide: J.bind(t2), removeAllSlides: ee.bind(t2) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ fadeEffect: { crossFade: false, transformEl: null } }), te({ effect: "fade", swiper: t2, on: a2, setTranslate: () => {
          const { slides: e3 } = t2, s3 = t2.params.fadeEffect;
          for (let a3 = 0; a3 < e3.length; a3 += 1) {
            const e4 = t2.slides.eq(a3);
            let i2 = -e4[0].swiperSlideOffset;
            t2.params.virtualTranslate || (i2 -= t2.translate);
            let r2 = 0;
            t2.isHorizontal() || (r2 = i2, i2 = 0);
            const n2 = t2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e4[0].progress), 0) : 1 + Math.min(Math.max(e4[0].progress, -1), 0);
            se(s3, e4).css({ opacity: n2 }).transform(`translate3d(${i2}px, ${r2}px, 0px)`);
          }
        }, setTransition: (e3) => {
          const { transformEl: s3 } = t2.params.fadeEffect;
          (s3 ? t2.slides.find(s3) : t2.slides).transition(e3), ae({ swiper: t2, duration: e3, transformEl: s3, allSlides: true });
        }, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !t2.params.cssMode }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 } });
        const i2 = (e3, t3, s3) => {
          let a3 = s3 ? e3.find(".swiper-slide-shadow-left") : e3.find(".swiper-slide-shadow-top"), i3 = s3 ? e3.find(".swiper-slide-shadow-right") : e3.find(".swiper-slide-shadow-bottom");
          0 === a3.length && (a3 = d(`<div class="swiper-slide-shadow-${s3 ? "left" : "top"}"></div>`), e3.append(a3)), 0 === i3.length && (i3 = d(`<div class="swiper-slide-shadow-${s3 ? "right" : "bottom"}"></div>`), e3.append(i3)), a3.length && (a3[0].style.opacity = Math.max(-t3, 0)), i3.length && (i3[0].style.opacity = Math.max(t3, 0));
        };
        te({ effect: "cube", swiper: t2, on: a2, setTranslate: () => {
          const { $el: e3, $wrapperEl: s3, slides: a3, width: r2, height: n2, rtlTranslate: l2, size: o2, browser: c2 } = t2, p2 = t2.params.cubeEffect, u2 = t2.isHorizontal(), h2 = t2.virtual && t2.params.virtual.enabled;
          let m2, f2 = 0;
          p2.shadow && (u2 ? (m2 = s3.find(".swiper-cube-shadow"), 0 === m2.length && (m2 = d('<div class="swiper-cube-shadow"></div>'), s3.append(m2)), m2.css({ height: `${r2}px` })) : (m2 = e3.find(".swiper-cube-shadow"), 0 === m2.length && (m2 = d('<div class="swiper-cube-shadow"></div>'), e3.append(m2))));
          for (let e4 = 0; e4 < a3.length; e4 += 1) {
            const t3 = a3.eq(e4);
            let s4 = e4;
            h2 && (s4 = parseInt(t3.attr("data-swiper-slide-index"), 10));
            let r3 = 90 * s4, n3 = Math.floor(r3 / 360);
            l2 && (r3 = -r3, n3 = Math.floor(-r3 / 360));
            const d2 = Math.max(Math.min(t3[0].progress, 1), -1);
            let c3 = 0, m3 = 0, g3 = 0;
            s4 % 4 == 0 ? (c3 = 4 * -n3 * o2, g3 = 0) : (s4 - 1) % 4 == 0 ? (c3 = 0, g3 = 4 * -n3 * o2) : (s4 - 2) % 4 == 0 ? (c3 = o2 + 4 * n3 * o2, g3 = o2) : (s4 - 3) % 4 == 0 && (c3 = -o2, g3 = 3 * o2 + 4 * o2 * n3), l2 && (c3 = -c3), u2 || (m3 = c3, c3 = 0);
            const v2 = `rotateX(${u2 ? 0 : -r3}deg) rotateY(${u2 ? r3 : 0}deg) translate3d(${c3}px, ${m3}px, ${g3}px)`;
            d2 <= 1 && d2 > -1 && (f2 = 90 * s4 + 90 * d2, l2 && (f2 = 90 * -s4 - 90 * d2)), t3.transform(v2), p2.slideShadows && i2(t3, d2, u2);
          }
          if (s3.css({ "-webkit-transform-origin": `50% 50% -${o2 / 2}px`, "transform-origin": `50% 50% -${o2 / 2}px` }), p2.shadow) if (u2) m2.transform(`translate3d(0px, ${r2 / 2 + p2.shadowOffset}px, ${-r2 / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p2.shadowScale})`);
          else {
            const e4 = Math.abs(f2) - 90 * Math.floor(Math.abs(f2) / 90), t3 = 1.5 - (Math.sin(2 * e4 * Math.PI / 360) / 2 + Math.cos(2 * e4 * Math.PI / 360) / 2), s4 = p2.shadowScale, a4 = p2.shadowScale / t3, i3 = p2.shadowOffset;
            m2.transform(`scale3d(${s4}, 1, ${a4}) translate3d(0px, ${n2 / 2 + i3}px, ${-n2 / 2 / a4}px) rotateX(-90deg)`);
          }
          const g2 = c2.isSafari || c2.isWebView ? -o2 / 2 : 0;
          s3.transform(`translate3d(0px,0,${g2}px) rotateX(${t2.isHorizontal() ? 0 : f2}deg) rotateY(${t2.isHorizontal() ? -f2 : 0}deg)`), s3[0].style.setProperty("--swiper-cube-translate-z", `${g2}px`);
        }, setTransition: (e3) => {
          const { $el: s3, slides: a3 } = t2;
          a3.transition(e3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e3), t2.params.cubeEffect.shadow && !t2.isHorizontal() && s3.find(".swiper-cube-shadow").transition(e3);
        }, recreateShadows: () => {
          const e3 = t2.isHorizontal();
          t2.slides.each((t3) => {
            const s3 = Math.max(Math.min(t3.progress, 1), -1);
            i2(d(t3), s3, e3);
          });
        }, getEffectParams: () => t2.params.cubeEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ flipEffect: { slideShadows: true, limitRotation: true, transformEl: null } });
        const i2 = (e3, s3, a3) => {
          let i3 = t2.isHorizontal() ? e3.find(".swiper-slide-shadow-left") : e3.find(".swiper-slide-shadow-top"), r2 = t2.isHorizontal() ? e3.find(".swiper-slide-shadow-right") : e3.find(".swiper-slide-shadow-bottom");
          0 === i3.length && (i3 = ie(a3, e3, t2.isHorizontal() ? "left" : "top")), 0 === r2.length && (r2 = ie(a3, e3, t2.isHorizontal() ? "right" : "bottom")), i3.length && (i3[0].style.opacity = Math.max(-s3, 0)), r2.length && (r2[0].style.opacity = Math.max(s3, 0));
        };
        te({ effect: "flip", swiper: t2, on: a2, setTranslate: () => {
          const { slides: e3, rtlTranslate: s3 } = t2, a3 = t2.params.flipEffect;
          for (let r2 = 0; r2 < e3.length; r2 += 1) {
            const n2 = e3.eq(r2);
            let l2 = n2[0].progress;
            t2.params.flipEffect.limitRotation && (l2 = Math.max(Math.min(n2[0].progress, 1), -1));
            const o2 = n2[0].swiperSlideOffset;
            let d2 = -180 * l2, c2 = 0, p2 = t2.params.cssMode ? -o2 - t2.translate : -o2, u2 = 0;
            t2.isHorizontal() ? s3 && (d2 = -d2) : (u2 = p2, p2 = 0, c2 = -d2, d2 = 0), n2[0].style.zIndex = -Math.abs(Math.round(l2)) + e3.length, a3.slideShadows && i2(n2, l2, a3);
            const h2 = `translate3d(${p2}px, ${u2}px, 0px) rotateX(${c2}deg) rotateY(${d2}deg)`;
            se(a3, n2).transform(h2);
          }
        }, setTransition: (e3) => {
          const { transformEl: s3 } = t2.params.flipEffect;
          (s3 ? t2.slides.find(s3) : t2.slides).transition(e3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e3), ae({ swiper: t2, duration: e3, transformEl: s3 });
        }, recreateShadows: () => {
          const e3 = t2.params.flipEffect;
          t2.slides.each((s3) => {
            const a3 = d(s3);
            let r2 = a3[0].progress;
            t2.params.flipEffect.limitRotation && (r2 = Math.max(Math.min(s3.progress, 1), -1)), i2(a3, r2, e3);
          });
        }, getEffectParams: () => t2.params.flipEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !t2.params.cssMode }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: true, transformEl: null } }), te({ effect: "coverflow", swiper: t2, on: a2, setTranslate: () => {
          const { width: e3, height: s3, slides: a3, slidesSizesGrid: i2 } = t2, r2 = t2.params.coverflowEffect, n2 = t2.isHorizontal(), l2 = t2.translate, o2 = n2 ? e3 / 2 - l2 : s3 / 2 - l2, d2 = n2 ? r2.rotate : -r2.rotate, c2 = r2.depth;
          for (let e4 = 0, t3 = a3.length; e4 < t3; e4 += 1) {
            const t4 = a3.eq(e4), s4 = i2[e4], l3 = (o2 - t4[0].swiperSlideOffset - s4 / 2) / s4, p2 = "function" == typeof r2.modifier ? r2.modifier(l3) : l3 * r2.modifier;
            let u2 = n2 ? d2 * p2 : 0, h2 = n2 ? 0 : d2 * p2, m2 = -c2 * Math.abs(p2), f2 = r2.stretch;
            "string" == typeof f2 && -1 !== f2.indexOf("%") && (f2 = parseFloat(r2.stretch) / 100 * s4);
            let g2 = n2 ? 0 : f2 * p2, v2 = n2 ? f2 * p2 : 0, w2 = 1 - (1 - r2.scale) * Math.abs(p2);
            Math.abs(v2) < 1e-3 && (v2 = 0), Math.abs(g2) < 1e-3 && (g2 = 0), Math.abs(m2) < 1e-3 && (m2 = 0), Math.abs(u2) < 1e-3 && (u2 = 0), Math.abs(h2) < 1e-3 && (h2 = 0), Math.abs(w2) < 1e-3 && (w2 = 0);
            const b2 = `translate3d(${v2}px,${g2}px,${m2}px)  rotateX(${h2}deg) rotateY(${u2}deg) scale(${w2})`;
            if (se(r2, t4).transform(b2), t4[0].style.zIndex = 1 - Math.abs(Math.round(p2)), r2.slideShadows) {
              let e5 = n2 ? t4.find(".swiper-slide-shadow-left") : t4.find(".swiper-slide-shadow-top"), s5 = n2 ? t4.find(".swiper-slide-shadow-right") : t4.find(".swiper-slide-shadow-bottom");
              0 === e5.length && (e5 = ie(r2, t4, n2 ? "left" : "top")), 0 === s5.length && (s5 = ie(r2, t4, n2 ? "right" : "bottom")), e5.length && (e5[0].style.opacity = p2 > 0 ? p2 : 0), s5.length && (s5[0].style.opacity = -p2 > 0 ? -p2 : 0);
            }
          }
        }, setTransition: (e3) => {
          const { transformEl: s3 } = t2.params.coverflowEffect;
          (s3 ? t2.slides.find(s3) : t2.slides).transition(e3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e3);
        }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ creativeEffect: { transformEl: null, limitProgress: 1, shadowPerProgress: false, progressMultiplier: 1, perspective: true, prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }, next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 } } });
        const i2 = (e3) => "string" == typeof e3 ? e3 : `${e3}px`;
        te({ effect: "creative", swiper: t2, on: a2, setTranslate: () => {
          const { slides: e3, $wrapperEl: s3, slidesSizesGrid: a3 } = t2, r2 = t2.params.creativeEffect, { progressMultiplier: n2 } = r2, l2 = t2.params.centeredSlides;
          if (l2) {
            const e4 = a3[0] / 2 - t2.params.slidesOffsetBefore || 0;
            s3.transform(`translateX(calc(50% - ${e4}px))`);
          }
          for (let s4 = 0; s4 < e3.length; s4 += 1) {
            const a4 = e3.eq(s4), o2 = a4[0].progress, d2 = Math.min(Math.max(a4[0].progress, -r2.limitProgress), r2.limitProgress);
            let c2 = d2;
            l2 || (c2 = Math.min(Math.max(a4[0].originalProgress, -r2.limitProgress), r2.limitProgress));
            const p2 = a4[0].swiperSlideOffset, u2 = [t2.params.cssMode ? -p2 - t2.translate : -p2, 0, 0], h2 = [0, 0, 0];
            let m2 = false;
            t2.isHorizontal() || (u2[1] = u2[0], u2[0] = 0);
            let f2 = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
            d2 < 0 ? (f2 = r2.next, m2 = true) : d2 > 0 && (f2 = r2.prev, m2 = true), u2.forEach((e4, t3) => {
              u2[t3] = `calc(${e4}px + (${i2(f2.translate[t3])} * ${Math.abs(d2 * n2)}))`;
            }), h2.forEach((e4, t3) => {
              h2[t3] = f2.rotate[t3] * Math.abs(d2 * n2);
            }), a4[0].style.zIndex = -Math.abs(Math.round(o2)) + e3.length;
            const g2 = u2.join(", "), v2 = `rotateX(${h2[0]}deg) rotateY(${h2[1]}deg) rotateZ(${h2[2]}deg)`, w2 = c2 < 0 ? `scale(${1 + (1 - f2.scale) * c2 * n2})` : `scale(${1 - (1 - f2.scale) * c2 * n2})`, b2 = c2 < 0 ? 1 + (1 - f2.opacity) * c2 * n2 : 1 - (1 - f2.opacity) * c2 * n2, x2 = `translate3d(${g2}) ${v2} ${w2}`;
            if (m2 && f2.shadow || !m2) {
              let e4 = a4.children(".swiper-slide-shadow");
              if (0 === e4.length && f2.shadow && (e4 = ie(r2, a4)), e4.length) {
                const t3 = r2.shadowPerProgress ? d2 * (1 / r2.limitProgress) : d2;
                e4[0].style.opacity = Math.min(Math.max(Math.abs(t3), 0), 1);
              }
            }
            const y2 = se(r2, a4);
            y2.transform(x2).css({ opacity: b2 }), f2.origin && y2.css("transform-origin", f2.origin);
          }
        }, setTransition: (e3) => {
          const { transformEl: s3 } = t2.params.creativeEffect;
          (s3 ? t2.slides.find(s3) : t2.slides).transition(e3).find(".swiper-slide-shadow").transition(e3), ae({ swiper: t2, duration: e3, transformEl: s3, allSlides: true });
        }, perspective: () => t2.params.creativeEffect.perspective, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !t2.params.cssMode }) });
      }, function(e2) {
        let { swiper: t2, extendParams: s2, on: a2 } = e2;
        s2({ cardsEffect: { slideShadows: true, transformEl: null, rotate: true, perSlideRotate: 2, perSlideOffset: 8 } }), te({ effect: "cards", swiper: t2, on: a2, setTranslate: () => {
          const { slides: e3, activeIndex: s3 } = t2, a3 = t2.params.cardsEffect, { startTranslate: i2, isTouched: r2 } = t2.touchEventsData, n2 = t2.translate;
          for (let l2 = 0; l2 < e3.length; l2 += 1) {
            const o2 = e3.eq(l2), d2 = o2[0].progress, c2 = Math.min(Math.max(d2, -4), 4);
            let p2 = o2[0].swiperSlideOffset;
            t2.params.centeredSlides && !t2.params.cssMode && t2.$wrapperEl.transform(`translateX(${t2.minTranslate()}px)`), t2.params.centeredSlides && t2.params.cssMode && (p2 -= e3[0].swiperSlideOffset);
            let u2 = t2.params.cssMode ? -p2 - t2.translate : -p2, h2 = 0;
            const m2 = -100 * Math.abs(c2);
            let f2 = 1, g2 = -a3.perSlideRotate * c2, v2 = a3.perSlideOffset - 0.75 * Math.abs(c2);
            const w2 = t2.virtual && t2.params.virtual.enabled ? t2.virtual.from + l2 : l2, b2 = (w2 === s3 || w2 === s3 - 1) && c2 > 0 && c2 < 1 && (r2 || t2.params.cssMode) && n2 < i2, x2 = (w2 === s3 || w2 === s3 + 1) && c2 < 0 && c2 > -1 && (r2 || t2.params.cssMode) && n2 > i2;
            if (b2 || x2) {
              const e4 = (1 - Math.abs((Math.abs(c2) - 0.5) / 0.5)) ** 0.5;
              g2 += -28 * c2 * e4, f2 += -0.5 * e4, v2 += 96 * e4, h2 = -25 * e4 * Math.abs(c2) + "%";
            }
            if (u2 = c2 < 0 ? `calc(${u2}px + (${v2 * Math.abs(c2)}%))` : c2 > 0 ? `calc(${u2}px + (-${v2 * Math.abs(c2)}%))` : `${u2}px`, !t2.isHorizontal()) {
              const e4 = h2;
              h2 = u2, u2 = e4;
            }
            const y2 = c2 < 0 ? "" + (1 + (1 - f2) * c2) : "" + (1 - (1 - f2) * c2), E2 = `
        translate3d(${u2}, ${h2}, ${m2}px)
        rotateZ(${a3.rotate ? g2 : 0}deg)
        scale(${y2})
      `;
            if (a3.slideShadows) {
              let e4 = o2.find(".swiper-slide-shadow");
              0 === e4.length && (e4 = ie(a3, o2)), e4.length && (e4[0].style.opacity = Math.min(Math.max((Math.abs(c2) - 0.5) / 0.5, 0), 1));
            }
            o2[0].style.zIndex = -Math.abs(Math.round(d2)) + e3.length;
            se(a3, o2).transform(E2);
          }
        }, setTransition: (e3) => {
          const { transformEl: s3 } = t2.params.cardsEffect;
          (s3 ? t2.slides.find(s3) : t2.slides).transition(e3).find(".swiper-slide-shadow").transition(e3), ae({ swiper: t2, duration: e3, transformEl: s3 });
        }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !t2.params.cssMode }) });
      }];
      return V.use(re), V;
    });
  }
});
export default require_indexSwiper_002();
