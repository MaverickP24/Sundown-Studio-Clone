// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function loader() {
    var loader = document.querySelector(".loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loader(); 