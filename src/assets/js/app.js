// $(document).foundation();

$(document).ready(function(){
	Site.init();
});

var Site = {
	init: function() {
		if ( $(window).width() > 640 ) {
			Site.scrollmagic();
		}
		Site.mobileMenu();
	},
	mobileMenu: function(){
		$(document).on('click', '.menu-toggle', function(event){
			event.preventDefault();
			$('body').toggleClass('menu-open');
			return false;
		})
		$(document).on('click', '.menu a', function(){
			$('body').removeClass('menu-open');
		})
	},
	scrollmagic: function() {
		var controller = new ScrollMagic.Controller();
		var images = $('.parallax');
		var windowHeight = $(window).height();

		$.each(images, function(index, image){
			var tween = new TweenMax.fromTo(image, 1, { transform: 'translateY(-4em)' }, { transform: 'translateY(12em)' })
			var scene = new ScrollMagic.Scene({
					duration: windowHeight*2,
					triggerElement: image,
					triggerHook: 1,
				})
				.setTween( tween )
				.addTo(controller)
		});
	}
}