function mybutton() {
     document.getElementById("button").innerHTML =" 18000 150 9999"; 
 }

    window.addEventListener('scroll', function() {
         const element = document.getElementById('myElement');
         const scrollPosition = window.scrollY; 
         const windowHeight = window.innerHeight; 
         const newOpacity = 1 - (scrollPosition / windowHeight);
         element.style.opacity = Math.max(0, Math.min(newOpacity, 1));
     });
     let n = function(a) {
         let u = window.getComputedStyle(a, null)
           , l = u.getPropertyValue("position")
           , _ = u.getPropertyValue("overflow")
           , f = u.getPropertyValue("display");
         (!l || l === "static") && (a.style.position = "relative"),
         _ !== "hidden" && (a.style.overflow = "hidden"),
         (!f || f === "inline") && (a.style.display = "block"),
         a.clientHeight === 0 && (a.style.height = "100%"),
        a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
     }