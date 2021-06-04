const hamburgerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('.nav');
const contentEl = document.querySelector('.content');
const hamburgerBarsEl = document.getElementsByTagName('span');

function toggleNav(){
  hamburgerEl.addEventListener("click", function(event){
    navEl.classList.toggle('open');
    contentEl.classList.toggle('shift');
    [...hamburgerBarsEl].forEach(bar => {
      bar.classList.toggle('change')
    })
      
  });
}

toggleNav();