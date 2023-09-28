const scroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true,
});

function videoconAnimation() {
  var videocon = document.querySelector(".video-container");
  var playbtn = document.querySelector(".play");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 0,
      top: dets.y - 0,
    });
  });
}
videoconAnimation();
function h1() {
  gsap.from(".main .change", {
    y: 200,
    opacity: 0,
    delay: 0.3,
  });
  gsap.from(".main .the", {
    y: 200,
    opacity: 0,
    delay: 0.5,
  });
  gsap.from(".main .course", {
    y: 200,
    opacity: 0,
    delay: 0.6,
  });
  gsap.from(".main .video-container", {
    y: 200,
    opacity: 0,
    delay: 0.8,
  });
}
h1();
