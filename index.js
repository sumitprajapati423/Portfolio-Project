// --------------------------manu icon----------
let MenuBar = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');

MenuBar.onclick = () => {
  MenuBar.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


let DarkModeIcon = document.querySelector('#darkmoon-icon');

DarkModeIcon.onclick = ()=> {
  DarkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-moon')
}


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset =sec.offsetTop - 7000;
    let height= sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [herf*='+ id +']').classList.add('active');
      });
    };
  } )


let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);


//  ------------ remove menu icon navbar when click navbar  link (sroll)----------
MenuBar.classList.remove('bx-x');
navbar.classList.remove('active');

};

let menu= document.querySelector('#menu-bars');
let navbar= document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-bars');
  navbar.classList.toggle('active');
};

// ------------scroll--------------------
ScrollReveal({
     reset: true,
     distance:'80px',
     duration:2000,
     delay:200
    });

    ScrollReveal().reveal('.home-contact, .heading ', { origin: 'top' });






