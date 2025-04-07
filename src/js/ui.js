/*----- JS для динамических элементов ------*/
function activationAccordion(ACCORDIONS){
    ACCORDIONS.forEach((accordion) => {
        const ACCORDION_HEAD = accordion.querySelector('.js-accordion-head');
        const ACCORDION_BODY = accordion.querySelector('.js-accordion-body');
        ACCORDION_HEAD.addEventListener('click', ()=>{

            accordion.classList.toggle('open-accordion');
        })
    })
}


function activationShowMore(show_more){
    if(window.innerWidth <= 768){
        show_more.forEach(item => {
            const CONTAINER = item.querySelector('.js-show-more-container');
            const BUTTON = item.querySelector('.js-show-more-button');
            const BLOCKS = CONTAINER.querySelectorAll('.js-show-more-block');
    
            BLOCKS.forEach((block, index) => {
                if(index >= 3){
                    block.style.display = 'none';
                }
            })
            
            BUTTON.addEventListener('click', ()=>{
                BLOCKS.forEach(block =>{
                    block.removeAttribute("style");
                })
                item.classList.add('show-more-activate');
            })
        })
    }
    window.addEventListener('resize', ()=>{
        if(window.innerWidth <= 768){
            show_more.forEach(item => {
                const CONTAINER = item.querySelector('.js-show-more-container');
                const BUTTON = item.querySelector('.js-show-more-button');
                const BLOCKS = CONTAINER.querySelectorAll('.js-show-more-block');
        
                BLOCKS.forEach((block, index) => {
                    if(index >= 3){
                        block.style.display = 'none';
                    }
                })
                
                BUTTON.addEventListener('click', ()=>{
                    BLOCKS.forEach(block =>{
                        block.removeAttribute("style");
                    })
                    item.classList.add('show-more-activate');
                })
            })
        }
        else{
            show_more.forEach(item => {
                const CONTAINER = item.querySelector('.js-show-more-container');
                const BLOCKS = CONTAINER.querySelectorAll('.js-show-more-block');
                BLOCKS.forEach(block =>{
                    block.removeAttribute("style");
                })
            })
        }
    })
    
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    const ACCORDIONS = document.querySelectorAll('.js-accordion');
    activationAccordion(ACCORDIONS);

    const SHOW_MORE = document.querySelectorAll('.js-show-more');
    
    activationShowMore(SHOW_MORE);
})

//Раскрытие/скрытие текста
const textContents = document.querySelectorAll('.text-content');
textContents.forEach((textContent, index) => {
    const body = textContent.querySelector('.text-content__body');
    const show = textContent.querySelector('.text-content__show');

    show?.addEventListener('click', () => {
        textContent.classList.add('text-content--active');
        textContentBodyHandler(body, show);
    });
    
    const hide = textContent.querySelector('.text-content__hide');
    hide?.addEventListener('click', () => {
        textContent.classList.remove('text-content--active');
        textContentBodyHandler(body, show, index);
    });

    let resizeTimeout;
    setTimeout(() => textContentBodyHandler(body, show), 500);
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => textContentBodyHandler(body, show), 100);
    });
});

function textContentBodyHandler(body, show) {
    if (!body.classList.contains('text-content__body--clamp')) {
        return;
    }

    if (body.scrollHeight > body.clientHeight) {
        show?.classList.remove('text-content__show--inactive');
    } else {
        show?.classList.add('text-content__show--inactive');
    }
}
function changeTabList(tab, tabs, tab_list){
    tabs?.querySelector('.active').classList.remove('active');
    let tab_item = tab_list?.querySelectorAll('.js-tab-item');
    tab_item?.forEach( item => {  
        item.classList.remove('active');
        if(item.getAttribute('data-tabs-item') === tab.getAttribute('data-tabs-item'))
        {
            tab.classList.add('active');
            item.classList.add('active');
        }
    })

}

const TAB_CONTAINER = document.querySelectorAll(".js-tab-container");

TAB_CONTAINER?.forEach(item => {
    const TABS = item.querySelector('.js-tabs');
    const LIST = item.querySelector('.js-tab-list');
    TABS?.querySelectorAll('.js-tab').forEach(item => {
        item.addEventListener('click', ()=>{
            changeTabList(item, TABS, LIST);
        })
    });
})

//================ CUSTOM SELECT =================//
document.addEventListener('DOMContentLoaded', ()=>{
const selectSingle = document.querySelectorAll('.mog-select');
selectSingle.forEach(item => {
    const selectSingle_title = item.querySelector('.mog-select__title');
    const selectSingle_labels = item.querySelectorAll('.mog-select__label');


    selectSingle_title.addEventListener('click', () => {
    if ('active' === item.getAttribute('data-state')) {
        item.setAttribute('data-state', '');
    } else {
        item.setAttribute('data-state', 'active');
    }
    });

    for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.innerHTML = `<span class="overflow-hidden-90">${evt.target.textContent}</span>`;
        item.setAttribute('data-state', '');
    });
    }

    const reset = document.querySelector('.mog-select-reset');
    reset?.addEventListener('click', () => {
    selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
    });
    })

})





function changeSelectItem(option, items) {
    items.forEach(item => {
        item.classList.remove('active');
        if(item.getAttribute('data-selected-item') == option.getAttribute('data-selected-item'))
        {
            item.classList.add('active');
        }
    })
}

const SELECTS = document.querySelectorAll(".js-select");
SELECTS?.forEach(select => {
    const OPTIONS_BLOCK = select.querySelector(".js-select-options");
    const OPTIONS = select.querySelectorAll(".js-select-option");
    const LIST = select.querySelector(".js-select-list");
    const LIST_ITEMS = select.querySelectorAll(".js-select-item");
    
    OPTIONS?.forEach(item => {
        item.addEventListener('click', ()=>{
            changeSelectItem(item, LIST_ITEMS);
        })
    })
})