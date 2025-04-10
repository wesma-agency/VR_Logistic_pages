'use strict';
/* LIBRARIS */
import { CountUp } from './count-up';
import { createWaypoint } from './waypoints';
// import { createWaypoint } from './three.min.js';

// import Swiper from 'swiper/bundle';
import '../style/scss/style.scss';
import './simplebar';
import './map';
import './form';
import './imask';
import './checkbox';
import './textarea';
import './dropdown';
import './smooth-scroll';
import './popup';
import './auth';
import './contacts';
import './accordion';
import './filters';
import './select-menu';
import './header';
import './search-popup';



function openMenu(ui_menu, ui_close, ui_body){
    ui_menu.classList.add("active-menu");
    ui_body.classList.add("active-bloor")
    ui_close.addEventListener("click", ()=>{
        ui_menu.classList.remove("active-menu");
        ui_body.classList.remove("active-bloor")
    })
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    const UI = {
        MENU: document.querySelector(".js-menu"),
        MENU_BUTTON: document.querySelector(".js-open-menu"),
        MENU_CLOSE: document.querySelector(".js-close-menu"),
        BODY: document.querySelector("body"),
    }
    UI.MENU_BUTTON.addEventListener('click', ()=>{ 
        openMenu(UI.MENU, UI.MENU_CLOSE, UI.BODY);
    })
})

function countStart(dom = document){
    const $counters = dom.querySelectorAll(".js-count-up"),
          options = {
            useEasing: true,
            useGrouping: true,
            separator: ",",
            decimal: "."
          };
  
    $counters.forEach( (item) => {
      const value = item.dataset.value;
      const counter = new CountUp(item, value, options);
      counter.start();
    });
  }
  


document.addEventListener('DOMContentLoaded', () => {

    const aboutCompany = document.getElementById('section-about-company');
    const waypointAboutCompany = createWaypoint({
        element: '#section-about-company',
        offset: '50%',
        handler: ()=> {
        countStart(aboutCompany);
        // waypointAboutCompany.destroy(); // удалить waypoint после срабатывания (один раз)
        },
        triggerOnce: true // сработает только один раз
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const tabSelects = document.querySelectorAll('.js-tab-select');
    tabSelects.forEach((tabSelect) =>{
       
        const button = tabSelect.querySelector('.js-tab-select__button');
        // const container = tabSelect.querySelector('.js-tab-select-container');
        // const tabsContainer = tabSelect.querySelector('.js-tabs');
        const tabs = tabSelect.querySelectorAll('.js-tab');

        // const tabsListsContainer = tabSelect.querySelector('.js-tab-lists');
        const tabsLists = tabSelect.querySelectorAll('.js-tab-list');
    //адапивим под select, если разрешение меньше указанного
        tabs.forEach((tab) => {
            tab.querySelector('input').addEventListener('change',(event) => {
                const wrapper = tab.querySelector('.tab-wrapper');
                if(event.target.checked){
                    tabsLists.forEach((list)=>{
                        list.classList.remove('active');
                        if(list.getAttribute('data-tab-list') ==  tab.getAttribute('data-tab-list')){
                            list.classList.add('active');
                        }
                    })
                    button.classList.remove('active');
                    button.innerHTML= wrapper.outerHTML;
                }
            })
        })
       

        if(window.outerWidth < 900){
            tabSelect.classList.add('select');
            button.addEventListener('click', ()=>{
                button.classList.toggle('active')
            })
        }

    
    })

})