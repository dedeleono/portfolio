$("#btn-about").click((e)=>{
    e.preventDefault();
    $("#p-carousel").carousel(0)
});

$("#btn-p").click((e)=>{
    e.preventDefault();
    $("#p-carousel").carousel(1)
});

$("#btn-contact").click((e)=>{
    e.preventDefault();
    $("#p-carousel").carousel(2)
});

$("#p-carousel").carousel({
    interval: false,
});

function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);
