window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition >= documentHeight) {
    document.body.classList.add("bounce");

    setTimeout(() => {
      document.body.classList.remove("bounce");
    }, 500);
  }
});

////////////////////////////////////////// REVIEW

let currentIndex = 0;
const slides = document.querySelectorAll('.review__box');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
    // Slayddagi o'zgarish
    document.querySelector('.review__out').scrollTo(slides[index].offsetLeft, 0);
    
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-slide'));
        changeSlide(currentIndex);
    });
});



//--------------------------------------- BURGER BTN ---------------------------//

const burgerBtn = document.querySelector('.header__mini-item-img');
const burgerMenu = document.getElementById('burgerMenu');
const closeBtn = document.querySelector('.close-btn');
const searchInput = document.querySelector('.search-input');
const hasSubmenuItems = document.querySelectorAll('.has-submenu');


burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerMenu.classList.toggle('active');
});


closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
});


document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && e.target !== burgerBtn) {
        burgerMenu.classList.remove('active');
    }
});


hasSubmenuItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('active');
    });
});


searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            
            alert(`Searching for: ${searchTerm}`);
            searchInput.value = '';
        }
    }
});