const timeline = gsap.timeline({ defaults: { duration: 1.5 } });
timeline.from(".gsap", { y: "-100%", ease: "bounce" });

function locationFunction() {
  var x = document.getElementById("location");
  if (!x.style.display || x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function teamFunction() {
  var x = document.getElementById("team");
  if (!x.style.display || x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
