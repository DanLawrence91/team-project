const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline.from(".navbar", { y: "-100%", ease: "bounce" });

function myFunction() {
  var x = document.getElementById("location");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Function() {
  var x = document.getElementById("team");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}