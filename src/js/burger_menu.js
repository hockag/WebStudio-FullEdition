document.querySelector('.burger-menu').addEventListener('click', function () {
    this.classList.toggle('active')
    document.querySelector('.header__nav').classList.toggle('open');
    document.querySelector('.header__right').classList.toggle('open');
    document.querySelector('.social-link').classList.toggle('open');
})