// Parallax

const parallaxBg = document.querySelector(".parallax-bg");
const parallaxBox = document.querySelector(".parallax-box")
window.addEventListener("scroll", function () { 
    let offset = window.pageYOffset;
    parallaxBg.style.backgroundPositionY = offset * 0.7 + 'px'
    parallaxBox.style.top =  offset * 0.15 + 'px'
 })

// title change color
const title = document.querySelector('.nameTitle');
const sectionNav = document.querySelector('#nav-bar')

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const sectionNavOptions = {
    rootMargin: "-450px 0px 0px 0px"
};

const sectionNavObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            title.classList.add("changeTitle")
        } else {
            title.classList.remove("changeTitle")
        }
    })
}, sectionNavOptions)

sectionNavObserver.observe(sectionNav)

// appear and slide on scroll

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const apperarOnScroll = new IntersectionObserver(function (entries, apperarOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            apperarOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    apperarOnScroll.observe(fader);
});

sliders.forEach(slider => {
    apperarOnScroll.observe(slider)
})

// Scroll smooth

function toScroll(where) {
    document.getElementById(where).scrollIntoView({ behavior: "smooth" })
}

// Slider

function width() {
    if (innerWidth < 700) {
        document.addEventListener("DOMContentLoaded", function () {
            new Splide(".splide", {
                perPage: 1,
                perMove: 1,
                rewind: true,
            }).mount();
        });
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            new Splide(".splide", {
                perPage: 3,
                perMove: 1,
                rewind: true,
            }).mount();
        });
    }
}

width()

