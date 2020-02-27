// Smooth pageup

let upBtn = document.getElementById("up");
let win = document.getElementsByTagName("body");
upBtn.addEventListener("click", up);

window.addEventListener("scroll", function() {
  if (document.documentElement.scrollTop > 1000) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
});

let t;
function up() {
  var top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, (top + 100) / -10);
    // (top+100)/-10) - замедление в конце. Это количество пикселей, которое прокручивается вверх через каждые 0,02 секунды (число 20 в setTimeout)
    t = setTimeout("up()", 20);
  } else clearTimeout(t);
}

// Smooth scroll

const anchors = document.querySelectorAll("a.menu__link");

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}


// Menu

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu__item'),
  hamburger = document.querySelector('.humburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('humburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('humburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})



// Modal

let btnModal = document.getElementsByClassName('btn-modal'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup__close');

for(let i = 0; i < btnModal.length; i++){
  btnModal[i].addEventListener('click', function(){
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // блокируем скролл странице при активном модальном окне
  })
}

close.addEventListener('click', function(){
  overlay.style.display = 'none';
  document.body.style.overflow = '';
})