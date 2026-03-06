particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 50,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": { 
          "value": ["#EE05F2", "#AB41D9", "#64278C", "#260D40", "#260D40"] 
        },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.7 },
        "size": { 
          "value": 3, /* Bolinhas menores */
          "random": true 
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#AB41D9", /* Usei um tom da paleta */
          "opacity": 0.5,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "out_mode": "bounce"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
          "repulse": { "distance": 100 },
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });


  


//     // botton top

//     const btnTopo = document.getElementById("btn_top");

// window.addEventListener("scroll", () => {
//   if (
//     window.scrollY + window.innerHeight >=
//     document.documentElement.scrollHeight - 200
//   ) {
//     btnTopo.classList.add("show");
//   } else {
//     btnTopo.classList.remove("show");
//   }
// });


// btnTopo.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// });