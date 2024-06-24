var tl= gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"1% 95%",
    end:"50% 50%",
    scrub:true,
}})

tl.to("#fanta",{
    top:"120%",
    left:"0%"
},'fanta')
tl.to("#orange-cut",{
    top:"150%",
    left:"20%"
},'fanta')
tl.to("#orange",{
    top:"165%",
    right:"5%",
    width:"18%"
},fanta)
tl.to("#lf1",{
    top:"120%",
    left:"88%",
    rotate:"10deg",
    
},fanta)
tl.to("#lf2",{
    top:"110%",
    right:"88%",
    rotate:"-110deg"
},fanta)
tl.to("#lf3",{
    top:"180%",
    right:"55%",
    rotate:"90deg"
},fanta)

var tl2= gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"1% 95%",
    end:"50% 50%",
    scrub:true,
}})


tl2.from("#sprite",{
    top:"110%",
    right:"-70%",
    rotate:"90deg"
},sprite)

tl2.from("#lemon",{
    top:"110%",
   left:"-0%",
    rotate:"90deg"
},sprite)

tl2.from("#coke",{
    top:"110%",
    right:"70%",
    rotate:"-90deg"
},sprite)

tl2.from("#apple",{
    top:"110%",
    right:"0%",
    rotate:"-90deg"
},sprite)

tl2.to("#fanta",{
    top:"223%",
    left:"33%",
},sprite)

tl2.to("#orange-cut",{
    top:"209%",
    left:"41%",
    width: "18%"
},sprite)

