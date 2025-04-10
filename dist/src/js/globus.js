

import * as THREE from "https://cdn.skypack.dev/three@0.133.1/build/three.module";
import {OrbitControls} from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls";

const containerEl = document.querySelector(".globe-wrapper");
const canvas3D = containerEl.querySelector("#globe-3d");
const canvas2D = containerEl.querySelector("#globe-2d-overlay");
const popupEl = containerEl.querySelector(".globe-popup");

let renderer, scene, camera, rayCaster, controls, group;
let overlayCtx = canvas2D.getContext("2d");
let coordinates2D = [0, 0];
let pointerPos;
let clock, mouse, pointer, globe, globeMesh;
let popupVisible;
let earthTexture, mapMaterial;
let popupOpenTl, popupCloseTl;

let dragged = false;

let plusWidth = 250;

if(window.outerWidth > 1280){

    if(window.outerWidth>1700){
        window.outerWidth = 100;
    }

    if(window.outerWidth>1500){
      window.outerWidth = 0;
  }

    initScene();
    window.addEventListener("resize", updateSize);

}
function initScene() {
  renderer = new THREE.WebGLRenderer({canvas: canvas3D, alpha: true});
  renderer.setPixelRatio(2);

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1.1, 1.1, 1.1, -1.1, 0, 3);
  camera.position.z = 1.1;

  rayCaster = new THREE.Raycaster();
  rayCaster.far = 1.15;
  mouse = new THREE.Vector2(-1, -1);
  clock = new THREE.Clock();

  createOrbitControls();

  popupVisible = false;

  new THREE.TextureLoader().load(
    "https://ksenia-k.com/img/earth-map-colored.png",
    (mapTex) => {
      earthTexture = mapTex;
      earthTexture.repeat.set(1, 1);
      createGlobe();
      createPointer();
      // createPopupTimelines();
      addCanvasEvents();
      updateSize();
      render();
    });
}


function createOrbitControls() {
  controls = new OrbitControls(camera, canvas3D);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.minPolarAngle = .4 * Math.PI;
  controls.maxPolarAngle = .4 * Math.PI;
  controls.autoRotate = true;

  let timestamp;
  controls.addEventListener("start", () => {
    timestamp = Date.now();
  });
  controls.addEventListener("end", () => {
    dragged = (Date.now() - timestamp) > 600;
  });
}

function createGlobe() {
  const globeGeometry = new THREE.IcosahedronGeometry(1, 22);
  mapMaterial = new THREE.ShaderMaterial({
    vertexShader: document.getElementById("vertex-shader-map").textContent,
    fragmentShader: document.getElementById("fragment-shader-map").textContent,
    uniforms: {
      u_map_tex: {type: "t", value: earthTexture},
      u_dot_size: {type: "f", value: 0},
      u_pointer: {type: "v3", value: new THREE.Vector3(.0, .0, 1.)},
      u_time_since_click: {value: 0},
    },
    alphaTest: false,
    transparent: true
  });

  globe = new THREE.Points(globeGeometry, mapMaterial);
  scene.add(globe);

  globeMesh = new THREE.Mesh(globeGeometry, new THREE.MeshBasicMaterial({
    color: 0x222222,
    transparent: true,
    opacity: .05
  }));
  scene.add(globeMesh);
}

function createPointer() {
  const geometry = new THREE.SphereGeometry(.04, 16, 16);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00000,
    transparent: true,
    opacity: 0
  });
  pointer = new THREE.Mesh(geometry, material);
  scene.add(pointer);
}


function updateOverlayGraphic() {
  let activePointPosition = pointer.position.clone();
  activePointPosition.applyMatrix4(globe.matrixWorld);
  const activePointPositionProjected = activePointPosition.clone();
  activePointPositionProjected.project(camera);
  coordinates2D[0] = (activePointPositionProjected.x + 1) * containerEl.offsetWidth * .5;
  coordinates2D[1] = (1 - activePointPositionProjected.y) * containerEl.offsetHeight * .5;

  const matrixWorldInverse = controls.object.matrixWorldInverse;
  activePointPosition.applyMatrix4(matrixWorldInverse);

  if (activePointPosition.z > -1) {
    if (popupVisible === false) {
      popupVisible = true;
      // showPopupAnimation(false);
    }

    let popupX = coordinates2D[0];
    popupX -= (activePointPositionProjected.x * containerEl.offsetWidth * .3);

    let popupY = coordinates2D[1];
    const upDown = (activePointPositionProjected.y > .6);
    popupY += (upDown ? 20 : -20);

    gsap.set(popupEl, {
      x: popupX,
      y: popupY,
      xPercent: -35,
      yPercent: upDown ? 0 : -100
    });

    popupY += (upDown ? -5 : 5);
    const curveMidX = popupX + activePointPositionProjected.x * 100;
    const curveMidY = popupY + (upDown ? -.5 : .1) * coordinates2D[1];

    drawPopupConnector(coordinates2D[0], coordinates2D[1], curveMidX, curveMidY, popupX, popupY);

  } else {
    if (popupVisible) {
      popupOpenTl.pause(0);
      popupCloseTl.play(0);
    }
    popupVisible = false;
  }
}

function addCanvasEvents() {
  containerEl.addEventListener("mousemove", (e) => {
    updateMousePosition(e.clientX, e.clientY);
  });

  containerEl.addEventListener("click", (e) => {
    if (!dragged) {
      updateMousePosition(
        e.targetTouches ? e.targetTouches[0].pageX : e.clientX,
        e.targetTouches ? e.targetTouches[0].pageY : e.clientY,
      );

      const res = checkIntersects();
      if (res.length) {
        pointerPos = res[0].face.normal.clone();
        pointer.position.set(res[0].face.normal.x, res[0].face.normal.y, res[0].face.normal.z);
        mapMaterial.uniforms.u_pointer.value = res[0].face.normal;
        popupEl.innerHTML = cartesianToLatLong();
        showPopupAnimation(true);
        clock.start()
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
  // if (pointer) {
  //   updateOverlayGraphic();
  // }
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function updateSize() {
  const minSide = .65 * Math.min(window.innerWidth, window.innerHeight) + plusWidth;
  containerEl.style.width = minSide + "px";
  containerEl.style.height = minSide + "px";
  renderer.setSize(minSide, minSide);
  canvas2D.width = canvas2D.height = minSide;
  mapMaterial.uniforms.u_dot_size.value = .04 * minSide;
}


//  ---------------------------------------
//  HELPERS

// popup content
function cartesianToLatLong() {
  const pos = pointer.position;
  const lat = 90 - Math.acos(pos.y) * 180 / Math.PI;
  const lng = (270 + Math.atan2(pos.x, pos.z) * 180 / Math.PI) % 360 - 180;
  return formatCoordinate(lat, 'N', 'S') + ",&nbsp;" + formatCoordinate(lng, 'E', 'W');
}

function formatCoordinate(coordinate, positiveDirection, negativeDirection) {
  const direction = coordinate >= 0 ? positiveDirection : negativeDirection;
  return `${Math.abs(coordinate).toFixed(4)}°&nbsp${direction}`;
}


// popup show / hide logic
function createPopupTimelines() {
  popupOpenTl = gsap.timeline({
    paused: true
  })
    .to(pointer.material, {
      duration: .2,
      opacity: 1,
    }, 0)
    .fromTo(canvas2D, {
      opacity: 0
    }, {
      duration: .3,
      opacity: 1
    }, .15)
    .fromTo(popupEl, {
      opacity: 0,
      scale: .9,
      transformOrigin: "center bottom"
    }, {
      duration: .1,
      opacity: 1,
      scale: 1,
    }, .15 + .1);

  popupCloseTl = gsap.timeline({
    paused: true
  })
    .to(pointer.material, {
      duration: .3,
      opacity: .2,
    }, 0)
    .to(canvas2D, {
      duration: .3,
      opacity: 0
    }, 0)
    .to(popupEl, {
      duration: 0.3,
      opacity: 0,
      scale: 0.9,
      transformOrigin: "center bottom"
    }, 0);
}

function showPopupAnimation(lifted) {
  if (lifted) {
    let positionLifted = pointer.position.clone();
    positionLifted.multiplyScalar(1.3);
    gsap.from(pointer.position, {
      duration: .25,
      x: positionLifted.x,
      y: positionLifted.y,
      z: positionLifted.z,
      ease: "power3.out"
    });
  }
  popupCloseTl.pause(0);
  popupOpenTl.play(0);
}


// overlay (line between pointer and popup)
function drawPopupConnector(startX, startY, midX, midY, endX, endY) {
  overlayCtx.strokeStyle = "#000000";
  overlayCtx.lineWidth = 3;
  overlayCtx.lineCap = "round";
  overlayCtx.clearRect(0, 0, containerEl.offsetWidth, containerEl.offsetHeight);
  overlayCtx.beginPath();
  overlayCtx.moveTo(startX, startY);
  overlayCtx.quadraticCurveTo(midX, midY, endX, endY);
  overlayCtx.stroke();
}




// //Globus Banner
// !function() {
//     "use strict";

//     const COLOR_DEFAULT = "green";      // Белый для обычных точек на глобусе
//     const COLOR_ACTIVE = "red";       // Оранжевый для активных точек на глобусе
//     const COLOR_BG_DEFAULT = "blue";   // Серый для фона
//     const COLOR_BG_ACTIVE = "red";    // Оранжевый для активных точек фона
//     const COLOR_BG_CLOSE = "purple";     // Тёмно-серый для близких точек фона
//     const COLOR_TARGET = "blue";       // Цвет линий прицела
//     const COLOR_CURSOR = "blue";    // Зелёный для курсора

//     function run() {
//         requestAnimationFrame(run);
//         pointer.ease(15);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Фон
//         cb = "";
//         ctx.beginPath();
//         for (let i = 0, n = points.length; i < n; i++) {
//             points[i].background();
//         }
//         ctx.fill();

//         // Прицел
//         ctx.fillStyle = COLOR_TARGET;
//         ctx.fillRect(pointer.ex - 1, 0, 1, canvas.height);
//         ctx.fillRect(0, pointer.ey - 1, canvas.width, 1);
//         ctx.beginPath();
//         ctx.fillStyle = COLOR_CURSOR;
//         ctx.arc(pointer.ex, pointer.ey, 3, 0, Math.PI * 2);
//         ctx.fill();

//         // 3D-глобус
//         cb = "";
//         ctx.beginPath();
//         for (let i = 0, n = points.length; i < n; i++) {
//             points[i].globe();
//         }
//         ctx.fill();
//     }

//     // Конструктор точки
//     function Point(x, y) {
//         this.x = 0;
//         this.y = 0;
//         this.c = false;
//         this.x0 = x;
//         this.y0 = y;
//         this.dist = 0;
//         this.dx = 0;
//         this.dy = 0;
//     }

//     // Отрисовка фона
//     Point.prototype.background = function() {
//         this.dx = (pointer.ex - mx) - this.x0 * 11;
//         this.dy = (pointer.ey - my) - this.y0 * 11;
//         this.dist = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
//         const c = this.dist < 140 ? COLOR_BG_CLOSE : (this.c ? COLOR_BG_ACTIVE : COLOR_BG_DEFAULT);
//         if (c !== cb) {
//             ctx.fill();
//             ctx.beginPath();
//             ctx.fillStyle = c;
//             cb = c;
//         }
//         const x = this.x0 * 11 + mx;
//         const y = this.y0 * 11 + my;
//         ctx.moveTo(x, y);
//         ctx.arc(x, y, 4, 0, Math.PI * 2);
//     };

//     // Отрисовка глобуса
//     Point.prototype.globe = function() {
//         if (this.dist < 140) {
//             const scale = Math.cos(0.5 * Math.PI * this.dist / 140);
//             this.x = (this.x0 * 11) - (this.dx * scale) - (11 * 24) - pointer.ex + canvas.width;
//             this.y = (this.y0 * 11) - (this.dy * scale) - (11 * 11) - pointer.ey + canvas.height;
//             const c = this.c ? COLOR_ACTIVE : COLOR_DEFAULT;
//             if (c !== cb) {
//                 ctx.fill();
//                 ctx.beginPath();
//                 ctx.fillStyle = c;
//                 cb = c;
//             }
//             ctx.moveTo(this.x, this.y);
//             ctx.arc(this.x, this.y, scale * 7, 0, Math.PI * 2);
//         }
//     };

//     // Настройка canvas
//     const canvas = {
//         width: 0,
//         height: 0,
//         elem: document.createElement("canvas"),
//         resize() {
//             this.width = this.elem.width = this.elem.offsetWidth;
//             this.height = this.elem.height = this.elem.offsetHeight;
//             mx = (this.width * 0.5) - (11 * 22);
//             my = (this.height * 0.5) - (11 * 11);
//         }
//     };
//     const ctx = canvas.elem.getContext("2d");
//     document.body.appendChild(canvas.elem);
//     window.addEventListener('resize', canvas.resize.bind(canvas), false);

//     // Управление указателем
//     const pointer = {
//         x: 0, y: 0,
//         ex: 0, ey: 0,
//         isDown: false,
//         move(e) {
//             e.preventDefault();
//             const p = e.targetTouches ? e.targetTouches[0] : e;
//             this.x = p.clientX;
//             this.y = p.clientY;
//         },
//         down(e) {
//             e.preventDefault();
//             if (!this.isDown) {
//                 this.isDown = true;
//                 let dm = 9999, c = null;
//                 for (let i = 0; i < points.length; i++) {
//                     const p = points[i];
//                     const dx = p.x - this.x;
//                     const dy = p.y - this.y;
//                     const d = Math.sqrt(dx * dx + dy * dy);
//                     if (d < 10 && d < dm) {
//                         dm = d;
//                         c = p;
//                     }
//                 }
//                 if (c) {
//                     c.c = true;
//                     coordData += key.charAt(c.x0) + key.charAt(c.y0);
//                     window.location.hash = coordData;
//                     document.getElementById('link').href = 'https://codepen.io/ge1doot/debug/JdzXjb/#' + coordData;
//                 }
//             }
//         },
//         up(e) {
//             e.preventDefault();
//             this.isDown = false;
//         },
//         ease(steps) {
//             this.ex += (this.x - this.ex) / steps;
//             this.ey += (this.y - this.ey) / steps;
//         }
//     };

//     canvas.elem.addEventListener("mousedown", pointer.down.bind(pointer), false);
//     canvas.elem.addEventListener("touchstart", pointer.down.bind(pointer), false);
//     window.addEventListener("mousemove", pointer.move.bind(pointer), false);
//     canvas.elem.addEventListener("touchmove", pointer.move.bind(pointer), false);
//     window.addEventListener("mouseup", pointer.up.bind(pointer), false);
//     window.addEventListener("touchend", pointer.up.bind(pointer), false);

//     const points = [];
//     let mx, my, cb;
//     let coordData = '';

//     // Разжатие мира
//     const world = "001F8C0C400031F30E7FE000FF964FFFFF00FFB067FFFE001FF03FFFFA001FF07FFFFC003F806BFFF4001F8020FFF4001D007FFFF4000E80FFE7F0000600FFC6680001E07FC2180001F00FC0780001FC0F81730001FC0F80940000FC0F400F0020780F403F00007006001F00006000000640006000000080006000000000002000000000";
//     let bits = "", k = 0;
//     for (let i = 0; i < world.length; i += 2) {
//         const o = parseInt(world.substring(i, i + 2), 16).toString(2);
//         bits += "00000000".substring(0, 8 - o.length) + o;
//     }
//     for (let y = 0; y < 22; y++) {
//         for (let x = 0; x < 48; x++) {
//             if (bits.charAt(k++) === "1") points.push(new Point(x, y));
//         }
//     }

//     // Декодирование хэша
//     const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     const hash = window.location.hash.substr(1);
//     for (let i = 0; i < hash.length; i += 2) {
//         const x = key.indexOf(hash.charAt(i));
//         const y = key.indexOf(hash.charAt(i + 1));
//         for (let j = 0; j < points.length; j++) {
//             const p = points[j];
//             if (x === p.x0 && y === p.y0) {
//                 p.c = true;
//                 break;
//             }
//         }
//     }

//     // Старт
//     canvas.resize();
//     pointer.x = canvas.width * 0.5;
//     pointer.y = canvas.height * 0.5;
//     run();
// }();