const timeline = gsap.timeline({ defaults: { duration: 1.5 } });
timeline.from(".gsap", { y: "-100%", ease: "bounce" });
