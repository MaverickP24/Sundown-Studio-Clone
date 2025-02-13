const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loader() {
    var loader = document.querySelector(".loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)
}
loader(); 

// jab mouse enter karta hai elem container then fixed image should show up

var container = document.querySelector(".elem-cont");
var imgCont = document.querySelector(".fixedImage");
// console.log(container)
container.addEventListener("mouseenter",()=>{
    imgCont.style.display = "block";
})
container.addEventListener("mouseleave",()=>{
    imgCont.style.display = "none";
})
// flickker kar rha tha isliye lagaya niche wala par scroll ni horha ab
imgCont.addEventListener("mouseenter",()=>{
    imgCont.style.display = "block"
})


// ab meko images add krni hai  kaiseee kruuu;;;;

var allelem = document.querySelectorAll(".elem")

// console.log(allelem);
allelem.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        var img = e.getAttribute("img-data")
        console.log(img)
        imgCont.style.backgroundImage = `url(${img})`;
    })
})

var tabs = document.querySelectorAll(".tabs a");
var pg4img = document.querySelector(".page4-img img");

tabs.forEach((e) => {
    var img = e.getAttribute("img-data");
    var ind = e.getAttribute("tabindex");

    e.addEventListener("click", () => {
        tabs.forEach(a => {
            a.style.color = "#8a7f79";
            a.style.padding = "0 3vw";
        });

        pg4img.src = img;

        e.style.color = "#efeae3";
        e.style.padding = "0 1vw";
    });
});

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiperAnimation();