
function toScroll(where) {
    document.getElementById(where).scrollIntoView({behavior: "smooth"})
}

function width() {
    if(innerWidth < 700) {
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

