$(document).foundation();

$(document).ready(function(){
	Site.init();
});

var Site = {
	init: function() {
		Site.scrollmagic();
	},
	scrollmagic: function() {
		// init controller
		var controller = new ScrollMagic.Controller();
		var images = $('.parallax');
		var windowHeight = $(window).height();

		$.each(images, function(index, image){
			// var tween = new TweenMax.fromTo(image, 1, { transform: 'translateY(12em)' }, { transform: 'translateY(-8em)' })
			var tween = new TweenMax.fromTo(image, 1, { transform: 'translateY(-4em)' }, { transform: 'translateY(12em)' })

			var scene = new ScrollMagic.Scene({
					duration: windowHeight*2,
					triggerElement: image,
					triggerHook: 1,
					// offset: 50*index
					// offset: 0
				})
				.setTween( tween )
				.addTo(controller)
		});


	}
}