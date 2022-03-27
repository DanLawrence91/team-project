 const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .from('.navbar', { y: '-100%', ease: 'bounce' })

  $(".button-li").on("click",function(){
    const toActive = $(this).attr("data-active"); 
    
    gsap.to(".active", {backgroundColor: '#eeeeee', color: "#000000", scale: .3}) 
    $(".item.active").removeClass("active");
    
    gsap.to(toActive, {backgroundColor: '#008000', color: '#fff', scale: 1, stagger: .1}) 
    $(toActive).addClass("active");
  });

  console.clear();
  const butOn = document.querySelector("#butOn");
  const butOff = document.querySelector("#butOff");
  const target = document.querySelector(".box");
  
  butOn.addEventListener("click", () => (target.style.opacity = 1));
  butOff.addEventListener("click", () => gsap.set(target, { opacity: 0 }));