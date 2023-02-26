
gsap.to("h1",{
    x:1000,
    
    color:"red",
    duration:2,
    delay:.5,
    ease:"bounce",// power2.inOut,linear,bounce,back,SlowMo,elastic
    stagger:1,
    repeat:-2,
    repeatDelay: 1,
    repeatRefresh: true,
    onComplete:function (){
        gsap.to("h1",{y:100})
    }
    })
gsap.to('h1',{
    color:'white',
    y:100,
    duration:2,
    overwrite:'all',
})

// Select the element to animate
const myElement = document.getElementById("my-element");

// Create the animation timeline
const animationTimeline = gsap.timeline({repeat: -1, repeatRefresh: true});

// Add animation to the timeline
animationTimeline.to(myElement, {
  x: 200,
  duration: 2,
  ease: "power2.inOut"
})
.to(myElement, {
  x: 0,
  duration: 2,
  ease: "power2.inOut"
});
