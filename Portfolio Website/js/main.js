let menu= document.querySelector(".menu-icon");
let navbar= document.querySelector(".navbar");

menu.onclick =() =>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

window.onscroll =() =>{
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};

const animate= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400'
  });

  animate.reveal('nav');
  animate.reveal('.header-image, .card-1, .con-1 , .con-3',{origin:"left"});
  animate.reveal('.header-content, .card-2 , .con-2', {origin:"right"});
  animate.reveal('.about-header, .about-subheader, .skills-header , .skills-grid , .skillset, .project-header, .project-subheader,.resume,.contact-header, .contact-upper ,  .timeline', {interval:100});
  animate.reveal('.footer-content, .socials', {origin:"bottom"});