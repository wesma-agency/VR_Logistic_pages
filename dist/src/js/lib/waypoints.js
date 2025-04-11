export function createWaypoint(options) {
    const element = typeof options.element === 'string' ? document.querySelector(options.element) : options.element;
    const handler = options.handler;
    let offset = options.offset || 0;
    const context = options.context || window;
    const triggerOnce = options.triggerOnce || false;
    let triggered = false;
  
    if (!element || typeof handler !== 'function') {
      console.error('Waypoint: Необходимо указать element и handler.');
      return;
    }
  
    // Обработка offset
    if (typeof offset === 'string' && offset.endsWith('%')) {
      const percent = parseFloat(offset) / 100;
      offset = function() {
        return context === window ? window.innerHeight * percent : context.offsetHeight * percent; //для окна или контейнера прокрутки
      };
    } else if (typeof offset === 'function') {
      // offset уже является функцией
    } else {
      offset = parseInt(offset) || 0; // по умолчанию в пикселях
    }
  
    function checkWaypoint() {
      if (triggered && triggerOnce) {
        return;
      }
  
      const rect = element.getBoundingClientRect();
      let top; //позиция элемента относительно области просмотра
      if (context === window) {
          top = rect.top; // для окна браузера
      } else {
          const contextRect = context.getBoundingClientRect();
          top = rect.top - contextRect.top; // для контейнера прокрутки
      }
  
  
      let offsetValue;
      if (typeof offset === 'function') {
        offsetValue = offset();
      } else {
        offsetValue = offset;
      }
  
  
      // Определение направления прокрутки (простая реализация - можно улучшить)
      let direction = '';
      if (window.scrollY > lastScrollY && context === window) {
        direction = 'down';
      } else if (window.scrollY < lastScrollY && context === window) {
        direction = 'up';
      } else if (context !== window) {
        //Для контекста отличного от window направление прокрутки определить сложнее, упрощенный вариант
        direction = 'down';
      }
  
      lastScrollY = window.scrollY;
  
  
      if (top <= (offsetValue || 0) - (element.offsetHeight * (options.offsetBottom || 0))) { //offsetBottom - опция для обработки нижней границы
        handler.call(element, direction);
        triggered = true;
      }
    }
  
    let lastScrollY = window.scrollY; // Для определения направления прокрутки
  
    // Привязка обработчика к событию прокрутки
    context.addEventListener('scroll', checkWaypoint);
    window.addEventListener('resize', checkWaypoint); // Для пересчета offset при изменении размера окна
  
    // Первоначальная проверка (для случаев, когда элемент уже в области видимости)
    checkWaypoint();
  
    // Функция для удаления waypoint (необязательно, но полезно для очистки)
    function destroy() {
      context.removeEventListener('scroll', checkWaypoint);
      window.removeEventListener('resize', checkWaypoint); // Убираем и обработчик ресайза
    }
  
    return {
      destroy: destroy
    };
  }
  
  
//   // Пример использования:
//   document.addEventListener('DOMContentLoaded', () => {
//     const waypoint1 = createWaypoint({
//       element: '#section1',
//       offset: '50%',
//       handler: function(direction) {
//         console.log('Section 1 reached (direction:', direction, ')');
//         this.style.backgroundColor = 'lightblue'; // this указывает на элемент
//         waypoint1.destroy(); // удалить waypoint после срабатывания (один раз)
//       },
//       triggerOnce: true // сработает только один раз
//     });
  
//     const waypoint2 = createWaypoint({
//       element: '#section2',
//       offset: 100,
//       handler: function(direction) {
//         console.log('Section 2 reached (direction:', direction, ')');
//         this.style.backgroundColor = 'lightgreen';
//       },
//       context: document.querySelector('.scrollable-container'), //Прокручиваемый контейнер, а не window
//     });
  
  
//     const waypoint3 = createWaypoint({
//       element: '#section3',
//       offset: 0,
//       handler: function(direction) {
//         console.log('Section 3 reached (direction:', direction, ')');
//         this.style.backgroundColor = 'lightcoral';
//         waypoint3.destroy(); // удалить waypoint после срабатывания
//       },
//       triggerOnce: true
//     });
//   });