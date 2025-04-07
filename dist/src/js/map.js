// import iconSrc from "/icons/all/location-logo.svg";

// const customIcon = {
//   iconLayout: "default#image",
//   iconImageHref: iconSrc,
//   iconImageSize: [42, 52],
//   iconImageOffset: [-26, -42],
// };

// const $locationsMap = document.querySelector(".js-map-locations");
// if (typeof ymaps !== "undefined" && $locationsMap) {
//   ymaps.ready(() => initLocations(customIcon));
// }

// const $deliveryMap = document.querySelector(".js-map-delivery");
// if (typeof ymaps !== "undefined" && $deliveryMap) {
//   ymaps.ready(() => initDelivery(customIcon));
// }

// function initLocations(customIcon) {
//   const map = new ymaps.Map($locationsMap, {
//     center: [55.752574, 37.61856],
//     zoom: 9,
//   });

//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
//     map.behaviors.disable(["scrollZoom"]);
//   }

//   const clusterer = new ymaps.Clusterer({
//     clusterIcons: [
//       {
//         size: [0, 0],
//         offset: [-20, -20],
//       },
//     ],
//     clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
//       '<div class="custom-cluster">{{ properties.geoObjects.length }}</div>'
//     ),
//     groupByCoordinates: false,
//     clusterDisableClickZoom: false,
//   });

//   const locations = [
//     { coords: [55.54562302531325, 37.07630859325407], name: "ул. Островского, д.3", id: 1 },
//     { coords: [55.80057456894279, 37.97508399999998], name: "пр-т Ленина, д. 77", id: 2 },
//     { coords: [55.723034069011796, 37.2858154999999], name: "посёлок Барвиха, д. 40", id: 3 },
//   ];

//   const placemarks = locations.map((location) => {
//     const placemark = new ymaps.Placemark(
//       location.coords,
//       {},
//       customIcon
//     );

//     placemark.locationId = location.id;

//     return placemark;
//   });

//   clusterer.add(placemarks);

//   map.geoObjects.add(clusterer);

//   const $locationMapBtns = document.querySelectorAll('.js-location-btn[data-map="locations"]');
//   $locationMapBtns.forEach(($locationMapBtn) => {
//     const id = parseInt($locationMapBtn.dataset.locationId);
//     $locationMapBtn.addEventListener("click", () => {
//       placemarks.forEach((placemark) => {
//         if (placemark.locationId === id) {
//           placemark.events.fire("click");

//           const coords = placemark.geometry.getCoordinates();
//           map.setCenter(coords, map.getZoom(), { duration: 350 });
//         }
//       });
//     });
//   });
// }

// function initDelivery() {
//   const map = new ymaps.Map($deliveryMap, {
//     center: [55.752574, 37.61856],
//     zoom: 9,
//   });

//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
//     map.behaviors.disable(["scrollZoom"]);
//   }

//   const clusterer = new ymaps.Clusterer({
//     clusterIcons: [
//       {
//         size: [0, 0],
//         offset: [-20, -20],
//       },
//     ],
//     clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
//       '<div class="custom-cluster">{{ properties.geoObjects.length }}</div>'
//     ),
//     groupByCoordinates: false,
//     clusterDisableClickZoom: false,
//   });

//   const locations = [
//     { coords: [55.921622, 37.511742], name: "г. Долгопрудный, ул. Жуковского, д.7", id: 1 },
//     { coords: [55.812332, 37.637919], name: "г. Москва, ул. Мира, д.256", id: 2 },
//   ];

//   const placemarks = locations.map((location) => {
//     const placemark = new ymaps.Placemark(
//       location.coords,
//       {},
//       customIcon
//     );

//     placemark.locationId = location.id;

//     return placemark;
//   });

//   const $locationBtns = document.querySelectorAll(`.js-location-btn[data-map="delivery"]`);
//   $locationBtns.forEach(($locationBtn) => ($locationBtn.dataset.defaultText = $locationBtn.innerText.trim()));

//   placemarks.forEach((placemark) => {
//     placemark.events.add("click", () => {
//       const id = placemark.locationId;
//       placemarks.forEach((mark) => {
//         if (mark.locationId !== id) {
//           mark.options.set("iconOpacity", 0.5);
//         }
//       });

//       const $locationBtns = document.querySelectorAll(`.js-location-btn[data-map="delivery"]`);
//       $locationBtns.forEach(($locationBtn) => {
//         $locationBtn.classList.remove("js-location-btn-active");
//         $locationBtn.innerText = $locationBtn.dataset.defaultText;
//       });

//       const $thisLocationBtn = document.querySelector(`.js-location-btn[data-map="delivery"][data-location-id="${id}"]`);
//       $thisLocationBtn.innerText = $thisLocationBtn.dataset.selectText;
//       $thisLocationBtn.classList.add("js-location-btn-active");

//       placemark.options.set("iconOpacity", 1);
      
//       const coords = placemark.geometry.getCoordinates();
//       map.setCenter(coords, map.getZoom(), { duration: 350 });
//     });
//   });

//   clusterer.add(placemarks);

//   map.geoObjects.add(clusterer);

//   $locationBtns.forEach(($locationBtn) => {
//     const selectText = $locationBtn.dataset.selectText;
//     const id = parseInt($locationBtn.dataset.locationId);

//     if ($locationBtn.classList.contains("js-location-btn-active")) {
//       $locationBtn.innerText = selectText;
//       togglePlacemarks(map, placemarks, id);
//     }

//     $locationBtn.addEventListener("click", () => {
//       if ($locationBtn.classList.contains("js-location-btn-active")) {
//         return;
//       }

//       $locationBtns.forEach(($btn) => {
//         if ($btn !== $locationBtn) {
//           $btn.classList.remove("js-location-btn-active");
//           $btn.innerText = $locationBtn.dataset.defaultText;
//         }
//       });

//       $locationBtn.classList.add("js-location-btn-active");
//       $locationBtn.innerText = selectText;

//       togglePlacemarks(map, placemarks, id);
//     });
//   });
// }

// function togglePlacemarks(map, placemarks, id) {
//   placemarks.forEach((placemark) => {
//     if (placemark.locationId === id) {
//       placemark.options.set("iconOpacity", 1);
//       placemark.events.fire("click");

//       const coords = placemark.geometry.getCoordinates();
//       map.setCenter(coords, map.getZoom(), { duration: 350 });
//     } else {
//       placemark.options.set("iconOpacity", 0.5);
//     }
//   });
// }
