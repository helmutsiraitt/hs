// hamburger menu
const hamburger = document.querySelector('.hamburger-container');
const menu = document.querySelector('nav ul');
const body = document.querySelector('body');
hamburger.addEventListener('click', function() {
     this.classList.toggle('active');
     menu.classList.toggle('open-menu');
     body.classList.toggle('bodyactive');
});

// smooth scrolling 
const links = document.querySelectorAll('nav a');
links.forEach(function(link) {
     link.addEventListener('click', function(e) {
           event.preventDefault();
          const elemen = e.currentTarget.getAttribute('href') === '#' ? 'header' : e.currentTarget.getAttribute('href');
          const targetPosition = document.querySelector(elemen).offsetTop;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1500;
          let start = null;
          function animation(timestamp) {
                 if(!start) start = timestamp;
                 const progress = timestamp - start;
                  window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
                 if(progress < duration) window.requestAnimationFrame(animation)
          }
           window.requestAnimationFrame(animation);
          
             hamburger.classList.toggle('active');
             menu.classList.toggle('open-menu');    
             body.classList.toggle('bodyactive');
     });
});

// back to top btn
const backtoTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
      if( window.pageYOffset > 300 ){ 
           if(!backtoTopButton.classList.contains("btnEntrance")){
            backtoTopButton.classList.remove("btnExit")
               backtoTopButton.classList.add("btnEntrance");
           // show backToButton
               backtoTopButton.style.display = "block";
           }   
      }
      else{ 
             if(backtoTopButton.classList.contains("btnEntrance")) {
               backtoTopButton.classList.remove("btnEntrance");
               backtoTopButton.classList.add("btnExit");
             //  hide backToButton
              setTimeout(function() {
                backtoTopButton.style.display = "none";     
            },250);

           }   
      } 
}


backtoTopButton.addEventListener("click", smoothScrollBackToTop);
function smoothScrollBackToTop(event){
       const targetPosition = 0;
       const startPosition = window.pageYOffset;
       const distance = targetPosition - startPosition;
           const duration = 750;  
          let start = null;
          window.requestAnimationFrame(step);
          function step(timestamp) {
                 if(!start) start = timestamp;
                 var progress = timestamp - start;
                 window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
                 if(progress < duration) window.requestAnimationFrame(step)
          }

}

function easeInOutQuad(t, b, c, d){
      t /= d/2;
      if(t < 1) return c/2*t*t+b;
      t--;
      return -c/2 * (t*(t-2) - 1) +b;
};