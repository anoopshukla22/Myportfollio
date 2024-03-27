const { default: Typed } = requestAnimationFrame("typed.js");

var typed = new Typed(".text", {
    Strings:["Frontend Developer" , "Youtuber" , "Web Developer"],
    typeSpeed:100,
    backDelay:1000,
    loop:true
})