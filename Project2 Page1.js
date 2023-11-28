`use strict`

let hambIcon = document.querySelector('li.nav-hambe-icon')
let closeIcon = document.querySelector('ul>li>i#close')
let plusIcon = document.querySelectorAll('ul>li>i.bx.bx-plus')
let minusIcon = document.querySelectorAll('ul>li>i.bx.bx-minus')
let hambSection = document.querySelector('section.hamb')
var ser = document.querySelector('#search-sec');
var ban = document.querySelector('#banner');
var fea = document.querySelector('#featured-product');
var gsl = document.querySelector('#grid-slider');
var secS = document.querySelector('#sec-support');
var foo = document.querySelector('footer');
var navv = document.querySelector('nav');

// ..........................................hamb section..........................................

window.addEventListener('resize', function () {
    if (window.innerWidth > 724) {
        hambSection.classList.add('hide')
        // ser.classList.remove('hide');
        ban.classList.remove('hide');
        fea.classList.remove('hide');
        gsl.classList.remove('hide');
        secS.classList.remove('hide');
        foo.classList.remove('hide');
        navv.classList.remove('hide');
        // serSec.classList.remove('hide');
    }
});

// hambIcon.style.backgroundColor = 'red'
hambIcon.addEventListener('click', () => {
    hambSection.classList.toggle('hide')
    ser.classList.add('hide');
    ban.classList.add('hide');
    fea.classList.add('hide');
    gsl.classList.add('hide');
    secS.classList.add('hide');
    foo.classList.add('hide');
    navv.classList.add('hide');
    // serSec.classList.add('hide');

})

closeIcon.addEventListener('click', () => {
    hambSection.classList.add('hide')
    ser.classList.remove('hide');
    ban.classList.remove('hide');
    fea.classList.remove('hide');
    gsl.classList.remove('hide');
    secS.classList.remove('hide');
    foo.classList.remove('hide');
    navv.classList.remove('hide');
})

let phoneHamb = document.querySelector('ul>li.hamb-phone')
let phoneAccordion = document.querySelector('ul>li.hamb-phone-items')
let lifeHamb = document.querySelector('ul>li.hamb-life')
let lifeAccordion = document.querySelector('ul>li.hamb-life-items')
let smartHamb = document.querySelector('ul>li.hamb-smart')
let smartAccordion = document.querySelector('ul>li.hamb-smart-items')


phoneHamb.addEventListener('click', () => {
    phoneAccordion.classList.toggle('hide')
    lifeAccordion.classList.add('hide')
    smartAccordion.classList.add('hide')
    phoneHamb.querySelector('i.bx.bx-minus').classList.toggle('hide')
    phoneHamb.querySelector('i.bx.bx-plus').classList.toggle('hide')
    smartHamb.querySelector('i.bx.bx-minus').classList.add('hide')
    smartHamb.querySelector('i.bx.bx-plus').classList.remove('hide')
    lifeHamb.querySelector('i.bx.bx-minus').classList.add('hide')
    lifeHamb.querySelector('i.bx.bx-plus').classList.remove('hide')
})

smartHamb.addEventListener('click', () => {
    smartAccordion.classList.toggle('hide')
    lifeAccordion.classList.add('hide')
    phoneAccordion.classList.add('hide')
    phoneHamb.querySelector('i.bx.bx-minus').classList.add('hide')
    phoneHamb.querySelector('i.bx.bx-plus').classList.remove('hide')
    smartHamb.querySelector('i.bx.bx-minus').classList.toggle('hide')
    smartHamb.querySelector('i.bx.bx-plus').classList.toggle('hide')
    lifeHamb.querySelector('i.bx.bx-minus').classList.add('hide')
    lifeHamb.querySelector('i.bx.bx-plus').classList.remove('hide')
})

lifeHamb.addEventListener('click', () => {
    lifeAccordion.classList.toggle('hide')
    phoneAccordion.classList.add('hide')
    smartAccordion.classList.add('hide')
    phoneHamb.querySelector('i.bx.bx-minus').classList.add('hide')
    phoneHamb.querySelector('i.bx.bx-plus').classList.remove('hide')
    smartHamb.querySelector('i.bx.bx-minus').classList.add('hide')
    smartHamb.querySelector('i.bx.bx-plus').classList.remove('hide')
    lifeHamb.querySelector('i.bx.bx-minus').classList.toggle('hide')
    lifeHamb.querySelector('i.bx.bx-plus').classList.toggle('hide')
})

// ..........................................banner section..........................................

// let playIcon = document.querySelector('div.banner-sabet-slider>i.bx-play')
// let pauseIcon = document.querySelector('div.banner-sabet-slider>i.bx-pause')
// playIcon.addEventListener('click', () => {
//     playIcon.classList.toggle('hide')
//     pauseIcon.classList.toggle('hide')
// })
// pauseIcon.addEventListener('click', () => {
//     playIcon.classList.toggle('hide')
//     pauseIcon.classList.toggle('hide')
// })

let bannerSlides = document.querySelectorAll('div.banner-slider')
let bannerChevLeft = document.querySelector('div#banner-sabet>i.bx.bxs-chevron-left')
let bannerChevRight = document.querySelector('div#banner-sabet>i.bx.bxs-chevron-right')
let bannerBottSlider = document.querySelectorAll('div.banner-sabet-slider>div.one>p')

let count = 0
let count1 = count
let intervalId;

function slidernext() {
    bannerSlides.forEach(e => {
        e.classList.add('hide');
    });
    if (count === bannerSlides.length - 1) {
        count = -1;
    }
    count++;
    bannerSlides[count].classList.remove('hide');
}

function sliderBott() {
    count1 = count;
    bannerBottSlider.forEach(e => {
        e.classList.remove('por');
    });
    bannerBottSlider[count1].classList.add('por');
}




intervalId = setInterval(() => {
    slidernext()
    sliderBott()
}, 5000);


bannerChevRight.addEventListener('click', () => {
    clearInterval(intervalId);
    bannerSlides.forEach(e => {
        e.classList.add('hide')
    })

    bannerBottSlider.forEach(e => {
        e.classList.remove('por');
    });
    if (count === bannerSlides.length - 1) {
        count = -1
    }
    count++
    count1 = count;
    bannerSlides[count].classList.remove('hide')
    bannerBottSlider[count1].classList.add('por');
    intervalId = setInterval(() => {
        slidernext()
        sliderBott()
    }, 5000);
})


bannerChevLeft.addEventListener('click', () => {
    clearInterval(intervalId);
    bannerSlides.forEach(e => {
        e.classList.add('hide')
    })
    bannerBottSlider.forEach(e => {
        e.classList.remove('por');
    });
    if (count === 0) {
        count = bannerSlides.length
    }
    count--
    count1 = count;
    bannerSlides[count].classList.remove('hide')
    bannerBottSlider[count1].classList.add('por');
    intervalId = setInterval(() => {
        slidernext()
        sliderBott()
    }, 5000);
})

// ..........................................featured section..........................................

let featuredItem = document.querySelectorAll('section#featured-product>ul>li')
let featuredItemContent = document.querySelectorAll('section#featured-product>div#grid-slider>div')

for (let i = 0; i < featuredItem.length; i++) {
    featuredItem[i].addEventListener('click', () => {
        for (let i = 0; i < featuredItem.length; i++) {
            featuredItem[i].classList.remove('select-decoration')
        }
        for (let j = 0; j < featuredItemContent.length; j++) {
            featuredItemContent[j].classList.add('hide')
        }
        featuredItemContent[i].classList.remove('hide')
        featuredItem[i].classList.add('select-decoration')
    })
}

// ..........................................swiper slider..........................................

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        724: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 2
        }
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 724) {
        swiper.params.slidesPerView = 1;
    } else if (window.innerWidth >= 724 && window.innerWidth < 1024) {
        swiper.params.slidesPerView = 2;
    } else {
        swiper.params.slidesPerView = 3;
    }
    swiper.update(); // Update the swiper instance after changing slidesPerView
});
// ..........................................search section..........................................

const searchIcon = document.querySelector('li.search');
const searchSec = document.querySelector('section#search-sec');

searchIcon.addEventListener('click', () => {
    searchSec.classList.remove('hide');
});

document.addEventListener('click', (event) => {
    if (!searchSec.contains(event.target) && !searchIcon.contains(event.target) && !searchSec.classList.contains('hide')) {
        searchSec.classList.add('hide');
    }
});



// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    var navItems1 = document.querySelectorAll('.nav-left-phone');
    var navItems2 = document.querySelectorAll('.nav-left-smart');
    var navItems3 = document.querySelectorAll('.nav-left-life');


    function addDarkClass() {
        ser.classList.add('dark');
        ban.classList.add('dark');
        fea.classList.add('dark');
        gsl.classList.add('dark');
        secS.classList.add('dark');
        foo.classList.add('dark');
    }

    function removeDarkClass() {
        ser.classList.remove('dark');
        ban.classList.remove('dark');
        fea.classList.remove('dark');
        gsl.classList.remove('dark');
        secS.classList.remove('dark');
        foo.classList.remove('dark');
    }

    navItems1.forEach(function (navItem) {
        navItem.addEventListener('mouseover', addDarkClass);
        navItem.addEventListener('mouseleave', removeDarkClass);
    });
    navItems2.forEach(function (navItem) {
        navItem.addEventListener('mouseover', addDarkClass);
        navItem.addEventListener('mouseleave', removeDarkClass);
    });
    navItems3.forEach(function (navItem) {
        navItem.addEventListener('mouseover', addDarkClass);
        navItem.addEventListener('mouseleave', removeDarkClass);
    });
});

// const logoIcon = document.querySelector('i.fa-brands.fa-xing')
// const HomeIcon = document.querySelector('i.bx.bxs-balloon')
// logoIcon.addEventListener('mouseenter', () => {
//     logoIcon.classList.add('hide')
//     HomeIcon.classList.remove('hide')
// });
// logoIcon.addEventListener('mouseleave', () => {
//     logoIcon.classList.remove('hide')
//     HomeIcon.classList.add('hide')
// });
// console.log('sadadaddad');