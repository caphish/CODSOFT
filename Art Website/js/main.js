const contactForm= document.getElementById('contact-form');
  const contactMessage= document.getElementById('contact-message');
  const contactUser= document.getElementById('contact-user');


  const sendEmail= (e) =>{
    e.preventDefault();

    if(contactUser.value===''){
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

       contactMessage.textContent= 'You must enter your email' ;

       setTimeout(()=>{
        contactMessage.textContent='';
       },3000);
    } else{
        emailjs.sendForm('service_54k6ktr','template_96gus84','#contact-form','TlfDk305jb6oa9rrE')
        .then(()=>{
            contactMessage.classList.add('color-green');
            contactMessage.textContent= 'You Registered Successfully';

            setTimeout(()=>{
                contactMessage.textContent='';
            
            },3000);
        },(error)=>{
            alaert("OOPS! SOMETHING WENT WRONG", error);
        });
        contactUser.value='';
    }
  }


  contactForm.addEventListener('submit', sendEmail);

  const animate= ScrollReveal({
    origin: "top",
    distance: "60px",
    delay: "1000",
    duration:"2500"
  });
  animate.reveal("nav");
  animate.reveal(".home_header",{ origin:"left"});
  animate.reveal(".scroll_down",{ origin:"right"});
  animate.reveal(".about h2 ",{ interval:"100"});
  animate.reveal(".about p ",{ interval:"100"});
  animate.reveal(".blog_header ",{ interval:"100"});
  animate.reveal(".blog-1 ",{ origin:"left"});
  animate.reveal(".blog-2 ",{ origin:"right"});
  animate.reveal(".blog-3 ",{ origin:"left"});
  animate.reveal(".works_header ",{ interval:"100"});
  animate.reveal(".works_grid",{ interval:"100"});
  animate.reveal(".teams_header ",{ interval:"100"});
  animate.reveal(".team_grid",{ interval:"100"});
  animate.reveal(".newsletter h2",{ interval:"100"});
  animate.reveal(".newsletter p",{ interval:"100"});
  animate.reveal(".newsletterform",{ interval:"100"});
  animate.reveal(".testimonials h2",{ interval:"100"});
  animate.reveal(".testimonial_grid",{ interval:"100"});
  animate.reveal(".footer",{ interval:"100"});