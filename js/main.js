document.addEventListener('DOMContentLoaded', function() {
    const headerBtn = document.querySelector('.header-btn');
    const closeBtn = document.querySelector('.header__btn-close');
    const navMenu = document.querySelector('.nav-menu');
  
    headerBtn.addEventListener('click', function() {
      navMenu.classList.add('show');  // Menyuni ko'rinadigan qilib animatsiya qilish
      headerBtn.style.display = 'none';  // Bosilgandan keyin tugma yashirinadi
      closeBtn.style.display = 'block';  // Yopish tugmasi ko'rinadi
    });
  
    closeBtn.addEventListener('click', function() {
      navMenu.classList.remove('show');  // Menyuni qayta yashirish
      closeBtn.style.display = 'none';  // Yopish tugmasi yashiriladi
      headerBtn.style.display = 'block';  // Qayta ochish tugmasi ko'rinadi
    });
  });
  