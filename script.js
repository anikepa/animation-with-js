const elems = document.querySelectorAll(".elems")
const imagediv = document.querySelector('#img')

elems.forEach(function (elem) {


    elem.addEventListener("mousemove", function () {
        let img = elem.getAttribute("data-image")
        let w = elem.getAttribute("data-width")
        let h = elem.getAttribute("data-height")
        imagediv.style.backgroundImage = `url(${img})`
        imagediv.style.width = w;
        imagediv.style.height = h;


    })


    document.addEventListener("mousemove", function (dets) {
        imagediv.style.left = `${dets.x - 150}px`;
        imagediv.style.top = `${dets.y - 100}px`;


    })
})
