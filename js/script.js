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

const body = document.querySelector('body')

var element = document.querySelectorAll('.telInput');
element.forEach(e => {
    var maskOptions = {
        mask: '+{7}(000)000-00-00',
        lazy: false
      };
    var mask = IMask(e, maskOptions);
})

const swiperNext = document.querySelector(".swiper-button-next")
const swiperPrev = document.querySelector(".swiper-button-prev")
const swiperSlide = document.querySelectorAll('.swiper-slide')
const progressBar = document.querySelector('.progressBar')


const carousel__item = document.querySelectorAll('.carousel__item')
counter = 0

swiperSlide[0].querySelectorAll('linearGradient stop').forEach((e, i) => {
    if (i % 2 === 0) {
        e.style.stopColor = "#F2C94C"
    } else {
        e.style.stopColor = "#F29C4C"
    }
})

const swiperPagin = document.querySelector(".swiper-pagination")
const swiperWrapper = document.querySelector(".swiper-wrapper")
const swiperSlides = document.querySelectorAll(".swiper-slide")


//setTimeout(() => swiperPagin.append('<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 10"></span>'), 500)
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

swiper.on('transitionStart', () => {
    for (let i = 0; i < swiperSlides.length; i++) {
        if (swiperWrapper.querySelector('.swiper-slide-active') === swiperSlides[i]) {
            console.log(i)
            if (i == 9) {
                if (body.clientWidth >= 992) {
                    progressBar.style.width = `${30 + (i - 1) * 40 + 20}%`
                } else if (body.clientWidth >= 768) {
                    progressBar.style.width = `${36 + (i - 1) * 46 + 23}%`
                } else if (body.clientWidth >= 461) {
                    progressBar.style.width = `${70 + (i - 1) * 88 + 39}%`
                } else {
                    progressBar.style.width = `${75 + (i - 1) * 88 + 39}%`
                } 
                
            } else {
                if (body.clientWidth >= 992) {
                    progressBar.style.width = `${30 + i * 40}%`
                } else if (body.clientWidth >= 768) {
                    progressBar.style.width = `${36 + i * 46}%`
                } else if (body.clientWidth >= 461) {
                    progressBar.style.width = `${70 + i * 88}%`
                } else {
                    progressBar.style.width = `${75 + i * 88}%`
                }
            }

            swiperSlides.forEach((e, j) => {
                if (j <= i) {
                    e.querySelectorAll('linearGradient stop').forEach((e, k) => {
                        if (k % 2 === 0) {
                            e.style.stopColor = "#F2C94C"
                        } else {
                            e.style.stopColor = "#F29C4C"
                        }
                    })    
                } else {
                    e.querySelectorAll('linearGradient stop').forEach((e, k) => {
                        if (k % 2 === 0) {
                            e.style.stopColor = "#bdbdbd"
                        } else {
                            e.style.stopColor = "#bdbdbd"
                        }
                    })  
                }
            })
        }
    }
})


$(document).ready(function(){
    transBtn.forEach(e => e.addEventListener("click", function (event) {
        event.preventDefault();

        if (event.target.classList.contains('burgerNavLink')) {
            burgerMenuPages.style.right = "-100%"
            body.style.overflow = "visible"
            setTimeout(() => burgerContacts.style.left = "100%", 500)
        }

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    }));

    if (body.clientWidth >= 993) {
        welcomePage.style.height = `${welcomeCarousel.clientHeight + 120}px`
        leftSideContent.style.height = `${welcomeCarousel.clientHeight + 120}px`
    }

    

    setTimeout(() => {
        var visitor_uid = AMOPIXEL_IDENTIFIER.getVisitorUid();
        console.log(visitor_uid)
    }, 500)
})

const amoforms_formDiscount = document.querySelector("#amoforms_formDiscount")
const testBtn = document.querySelector(".testBtn")


$("#amoforms_formDiscount").on('submit', (e) => {
    e.preventDefault()
    console.log($("#amoforms_formDiscount").serialize())
    console.log(1)
})

$("#amoforms_formDiscount").submit(function(e) {
    
    var url = "https://forms.amocrm.ru/queue/add";

    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    $.ajax({
           type: "POST",
           url: url,
           data: $("#amoforms_formDiscount").serialize(),
           success: function(data)
           {
               alert(data);
           }
         });

    e.preventDefault();
});

/*$("#amoforms_formDiscount").submit(function(e) {
    const headers  = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      }



         $.ajax({
            crossDomain: true,
            type: "POST",
            url: 'https://forms.amocrm.ru/queue/add',
            data: $("#amoforms_formDiscount").serialize(),
            dataType: "jsonp",                
            success: function(data)
            {
                alert(data);
            }
        });

    e.preventDefault();
});

/*wiperNext.addEventListener('click', () => {
        counter ++

        if (counter == 9) {
            if (body.clientWidth >= 992) {
                progressBar.style.width = `${30 + (counter - 1) * 40 + 20}%`
            } else if (body.clientWidth >= 768) {
                progressBar.style.width = `${38 + (counter - 1) * 46 + 20}%`
            }
            
        } else {
            if (body.clientWidth >= 992) {
                progressBar.style.width = `${30 + counter * 40}%`
            } else if (body.clientWidth >= 768) {
                progressBar.style.width = `${38 + counter * 46}%`
            }
        }

        swiperSlide[counter].querySelectorAll('linearGradient stop').forEach((e, i) => {
            if (i % 2 === 0) {
                e.style.stopColor = "#F2C94C"
            } else {
                e.style.stopColor = "#F29C4C"
            }
        })

        &:first-child {
            stop-color: #F2C94C;
        }

        &:last-child {
            stop-color: #F29C4C;
        }
    
})*/

const accordionBtn = document.querySelectorAll('.accordionBtn')

const accordionExample = document.querySelector('#accordionExample')
const accordionExample2 = document.querySelector('#accordionExample2')

$("#accordionExample2").on('show.bs.collapse', () => {
    $("#accordionExample .show").collapse('hide')
})

$("#accordionExample").on('show.bs.collapse', () => {
    $("#accordionExample2 .show").collapse('hide')
})

let boolAcc1 = false
let boolAcc2 = false

accordionBtn.forEach(e => e.addEventListener('click', (t) => {
    t.target.parentNode.classList.toggle('rotated')
    if (t.target.closest('ul') == accordionExample) {
        boolAcc1 = t.target.parentNode.classList.contains('rotated') ? true : false 
        
        accordionExample2.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
        accordionExample.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
        
        boolAcc1 ? t.target.parentNode.classList.add('rotated') : t.target.parentNode.classList.remove('rotated')
    }

    if (t.target.closest('ul') == accordionExample2) {
        boolAcc2 = t.target.parentNode.classList.contains('rotated') ? true : false 
        
        accordionExample2.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
        accordionExample.querySelectorAll('svg').forEach(e => e.classList.remove('rotated'))
        
        boolAcc2 ? t.target.parentNode.classList.add('rotated') : t.target.parentNode.classList.remove('rotated')   
    }
}))

const welcomeCarousel = document.querySelector('.welcomeCarousel')
const welcomePage = document.querySelector('.welcomePage')
const leftSideContent = document.querySelector('.leftSide .content')





  let transBtn = document.querySelectorAll('.transBtn')


const burger = document.querySelector('.burger')
const burgerMenuPages = document.querySelector('.burgerMenuPages')
const burgerCross = document.querySelectorAll('.burgerCross')

const contactsBtn = document.querySelector('.contactsBtn')
const burgerContacts = document.querySelector('.burgerContacts')

contactsBtn.addEventListener('click', () => {
    burgerContacts.style.left = "0"
})

burger.addEventListener('click', () => {
    burgerMenuPages.style.right = "0"
    body.style.overflow = "hidden"
})

const burgerGoBack = () => {
    burgerContacts.style.left = "100%"
}

burgerCross.forEach(e => {
    e.addEventListener('click', () => {
        burgerMenuPages.style.right = "-100%"
        body.style.overflow = "visible"
        setTimeout(() => burgerContacts.style.left = "100%", 500)
    })
})
 




/*
const code  = "AF"

const func = async function(code, page = 1) {
    let name
    fetch(`https://jsonmock.hackerrank.com/api/countries?page=${page}`)
        .then(response => response.json())
        .then(data => {
            let found = false
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].alpha2Code === code) {
                    found = true
                    name = data.data[i].name
                }
            }
            if (!found) {
                func(code, page + 1)
            }
           
        })
    console.log(name) 
}

const bruh = async function() {
    
    const name = await func(code)

    console.log(name)
    setTimeout(() => console.log(name), 1500)
}

bruh()*/