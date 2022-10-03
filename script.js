gsap.fromTo(".element_4", { x: -5 }, { x: 5, duration: .5, repeat: -1, yoyo: true, repeatDelay: .2 })

gsap.fromTo(".element_6", { rotate: -2 }, { rotate: 2, duration: .8, repeat: -1, yoyo: true })

let hitStatus = true;
var element = ".element_6"
var elm = document.querySelector(".element_6");
Draggable.create(element, {
    type: "x", edgeResistance: .95, bounds: {
        top: 0, left: 80, width: 200, height: 100,
    }, onDragEnd: function () {
        if (hitStatus) {
            gsap.to(".element_4", { display: "block", opacity: 1, duration: .5 });
            gsap.to(".element_6", { duration:.8, x: 0, y: 0});
        }
    }, onDrag: function () {
        if (this.hitTest(".element_5", 55) && hitStatus) {
            hitStatus = false;
            console.log('hitted');
            hitHair();
        }
    },
    onDragStart: function () {
        gsap.to(".element_4", { display: "none", opacity: 0, duration: .5 });
    }
})


function hitHair() {
    gsap.timeline()
        .to(".element_2", { duration: 1, display: 'none', opacity: 0 })
        .to(".element_3", { duration: 1, display: 'none', opacity: 0 }, "<")
        .to(".element_4", { duration: 1, display: 'none', opacity: 0 }, "<")
        .to(".element_6", { duration: 1, display: 'none', opacity: 0 }, "<")
        .to(".element_5", { duration: 1, display: 'none', opacity: 0 }, "<")
        .fromTo(".element_9", { opacity: 0 }, { duration: 1, display: 'block', opacity: 1 }, "<")
        .fromTo(".element_7", { opacity: 0 }, { duration: 1, display: 'block', opacity: 1 }, "<1")
        .fromTo(".element_8", { opacity: 0 }, { duration: 1, display: 'block', opacity: 1 }, "<")
        .to(".element_9", { duration: 1, display: 'none', opacity: 0 }, ">")
        .fromTo(".element_10", { opacity: 0 }, { duration: 1, display: 'block', opacity: 1 }, "<.2")
        .to(".element_11", { duration: 1, display: 'block', opacity: 1 }, "<")
        .to(".element_11", { duration: 1, scaleX: 1.1, scaleY: 1.1, yoyo: true, repeat: -1 }, ">")

}