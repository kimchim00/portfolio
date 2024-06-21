

const navMenu = document.getElementById('sidebar'),
 navToggle = document.getElementById('nav_toggle'), 
 navClose = document.getElementById('nav_close')
/*===== SIDEBAR SHOW =====*/
 if(navToggle) {
navToggle.addEventListener("click", () => { 
    navMenu.classList.add('show-sidebar')
})
}




if(navClose) {
navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-sidebar')
})
}



const tabs = document.querySelectorAll('[data-target]'),
     tabContent = document.querySelectorAll('[data-content]')
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)
            tabContent.forEach (tabContents => {
                 tabContents.classList.remove("skills_active")
            })
        target.classList.add('skills_active')

        tabs.forEach (tab=> { 
            tab.classList.remove("skills_active")
    })
        tab.classList.add('skills_active')
    })
})



let mixerPortfolio = mixitup('.work_container', {

    selectors:{
        target: '.work_card'
    },
    animation: {
        duration: 300
    }

});

const linkWork=document.querySelectorAll('.work_item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener("click", activeWork))


let swiper = new Swiper (".testimonials_container",{
    spaceBetween: 24,
    Loop: true,
    grabCursor: true,
    pagination: {
    el: ".swiper-pagination", clickable: true,

},
breakpoints: { 
    576: {
    slidesPerView: 1,
    
    },
    768: {
    slidesPerView: 2,
    spaceBetween: 48,
    }}
});



const inputs = document.querySelectorAll(".input");
function focusFunc() {

let parent = this.parentNode; 
parent.classList.add("focus");
}
function blurFunc() {
let parent = this.parentNode;
if(this.value=="") {
parent.classList.remove("focus");
}
}
inputs.forEach((input) => {
input.addEventListener("focus", focusFunc);
input.addEventListener("blur", blurFunc);
})

