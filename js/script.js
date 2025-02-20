//menu + burger
$(document).ready(function(event){
	$('.icon-menu').click(function(event){//при клике по бургеру
		$('.icon-menu,.menu-nav').toggleClass('menu-open');
		$('body').toggleClass('lock');//при открытом меню блокируется прокрутка
	});
});

//title header
$(document).ready(function() {
	function checkWidth() {
	  var windowWidth = $('body').innerWidth();
	  if(windowWidth < 768){
		$('.hero__subtitle').html('Добро пожаловать');
		$('.hero__title').html('В наш ресторан');
		$('.hero__button').html('МЕНЮ');
		$('.card-food__text').html('Гамбургер мини 220 ₽');
	  }
	  else{
		$('.hero__subtitle').html('Добро пожаловать в');
		$('.hero__title').html('Наш ресторан');
		$('.hero__button').html('VIEW MENU');
		$('.card-food__text').html('Гамбургер мини --------------------- 220 ₽');
	  }
}
checkWidth(); // проверит при загрузке страницы

$(window).resize(function(){
	checkWidth(); // проверит при изменении размера окна
  });
});
	

//swiper
const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true, //бесконечная прокрутка слайдов
	//autoplay: true, //автоматическая прокрутка слайдов
	effect: 'fade',
	fadeEffect:{
		crossFade: true
	},
	spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
	mousewheel: true,
    keyboard: true,
});