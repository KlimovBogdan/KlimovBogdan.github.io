
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
const slider = document.querySelector(".slider__container")

!function(){"use strict";function o(o){var t=["MSIE ","Trident/","Edge/"];return new RegExp(t.join("|")).test(o)}function t(){function t(o,t){this.scrollLeft=o,this.scrollTop=t}function r(o){return.5*(1-Math.cos(Math.PI*o))}function i(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(o,t){return"Y"===t?o.clientHeight+h<o.scrollHeight:"X"===t?o.clientWidth+h<o.scrollWidth:void 0}function c(o,t){var e=l.getComputedStyle(o,null)["overflow"+t];return"auto"===e||"scroll"===e}function n(o){var t=s(o,"Y")&&c(o,"Y"),l=s(o,"X")&&c(o,"X");return t||l}function f(o){var t;do{t=(o=o.parentNode)===e.body}while(!1===t&&!1===n(o));return t=null,o}function a(o){var t,e,i,s=(y()-o.startTime)/v;t=r(s=s>1?1:s),e=o.startX+(o.x-o.startX)*t,i=o.startY+(o.y-o.startY)*t,o.method.call(o.scrollable,e,i),e===o.x&&i===o.y||l.requestAnimationFrame(a.bind(l,o))}function p(o,r,i){var s,c,n,f,p=y();o===e.body?(s=l,c=l.scrollX||l.pageXOffset,n=l.scrollY||l.pageYOffset,f=u.scroll):(s=o,c=o.scrollLeft,n=o.scrollTop,f=t),a({scrollable:s,method:f,startTime:p,startX:c,startY:n,x:r,y:i})}if(!("scrollBehavior"in e.documentElement.style&&!0!==l.__forceSmoothScrollPolyfill__)){var d=l.HTMLElement||l.Element,v=468,h=o(l.navigator.userAgent)?1:0,u={scroll:l.scroll||l.scrollTo,scrollBy:l.scrollBy,elementScroll:d.prototype.scroll||t,scrollIntoView:d.prototype.scrollIntoView},y=l.performance&&l.performance.now?l.performance.now.bind(l.performance):Date.now;l.scroll=l.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?p.call(l,e.body,void 0!==arguments[0].left?~~arguments[0].left:l.scrollX||l.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:l.scrollY||l.pageYOffset):u.scroll.call(l,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:l.scrollX||l.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:l.scrollY||l.pageYOffset))},l.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?u.scrollBy.call(l,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(l,e.body,~~arguments[0].left+(l.scrollX||l.pageXOffset),~~arguments[0].top+(l.scrollY||l.pageYOffset)))},d.prototype.scroll=d.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var o=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},d.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},d.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var o=f(this),t=o.getBoundingClientRect(),r=this.getBoundingClientRect();o!==e.body?(p.call(this,o,o.scrollLeft+r.left-t.left,o.scrollTop+r.top-t.top),"fixed"!==l.getComputedStyle(o).position&&l.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):l.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else u.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}}var l=window,e=document;"object"==typeof exports?module.exports={polyfill:t}:t()}();

const links = document.querySelectorAll(".transBtn a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  if (mobNav.classList.contains('opened')) {
      mobNav.classList.remove('opened')
  }

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

const legalBtn = document.querySelector('#legal')
const individualBtn = document.querySelector('#individual')
const stagesItems = document.querySelectorAll('.route li')

legalBtn.addEventListener('click', (e) => {
    if (!e.target.classList.contains("activeBtn")) {
        individualBtn.classList.remove("activeBtn")
        e.target.classList.add("activeBtn")

        stagesItems.forEach(e => e.style.color = '#ffffff')
        setTimeout(() => stagesItems.forEach(e => {
            stagesItems[2].innerHTML = `
                <h3 class="route__title">Доставка инструмента в ремонт</h3>
                <p class="route__descr">После обработки заявки наш водитель забирает инструмент, оставляя вам накладную</p>
            `
            stagesItems[1].innerHTML = `
                <h3 class="route__title">Уточнение деталей</h3>
                <p class="route__descr">Мы перезвоним вам в рабочее время для уточнения модели инструмента, его количества и адреса объекта</p>
            `
            stagesItems[5].innerHTML = `
                <h3 class="route__title">Ремонт инструмента</h3>
                <p class="route__descr">Мастера выполняют ремонт с использованием оригинальных запасных частей</p>
            `
            stagesItems[6].innerHTML = `
                <h3 class="route__title">Возврат инструмента</h3>
                <p class="route__descr">После ремонта водитель доставляет рабочий инструмент вам обратно на объект</p>
            `

            e.style.color = "#050212"
        }), 400)
    }
})

individualBtn.addEventListener('click', (e) => {
    if (!e.target.classList.contains("activeBtn")) {
        legalBtn.classList.remove("activeBtn")
        e.target.classList.add("activeBtn")

        stagesItems.forEach(e => e.style.color = '#ffffff')
        setTimeout(() => stagesItems.forEach(e => {
            stagesItems[2].innerHTML = `
                <h3 class="route__title">Сдача инструмента</h3>
                <p class="route__descr">С выданным номером заказа вы сдаете инструмент в любой удобный вам пункт выдачи СДЭК. Доставка для вас бесплатна в случае ремонта</p>
            `
            stagesItems[1].innerHTML = `
                <h3 class="route__title">Уточнение деталей</h3>
                <p class="route__descr">Мы перезвоним вам в рабочее время для уточнения модели инструмента и количества. Менеджер формирует заказ в личном кабинете СДЭК</p>
            `
            stagesItems[5].innerHTML = `
                <h3 class="route__title">Ремонт инструмента</h3>
                <p class="route__descr">Мастера выполняют ремонт в максимально короткий срок при наличии всех запчастей на складе</p>
            `
            stagesItems[6].innerHTML = `
                <h3 class="route__title">Возврат инструмента</h3>
                <p class="route__descr">Мы отправляем отремонтированный инструмент в любой удобный для вас пункт выдачи СДЭК</p>
            `
            
            e.style.color = "#050212"
        }), 400)
    }
})

const mobNav = document.querySelector('.mobNavMenu')
const mobClose = document.querySelector('.mobNavMenu .closeBtn')
const burger = document.querySelector('.burgerNav')

mobClose.addEventListener('click', () => {
    mobNav.classList.remove('opened')
})

burger.addEventListener('click', () => {
    mobNav.classList.add('opened')
})

