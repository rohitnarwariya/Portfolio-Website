
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-div'),
    smooth: true
});




function circleMouseFollower(){
    window.addEventListener("mousemove" , function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
circleMouseFollower();


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0;
     elem.addEventListener("mouseleave",function(dets){
    var diff = dets.clientY-elem.getBoundingClientRect().top;
    diffrot=dets.clientX-rotate;
    rotate=dets.clientX;
    gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:Power3,
        duration:.5,
        
    })
   });
   elem.addEventListener("mousemove",function(dets){
    var diff = dets.clientY-elem.getBoundingClientRect().top;
    diffrot=dets.clientX-rotate;
    rotate=dets.clientX;
    gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top:diff,
        left:dets.clientX,
        rotate:gsap.utils.clamp(-20,20,diffrot*.5),
    })
   });
});

