
	var currentSlide = 1;
	var slider = (".slides");
	var slideCount = slider.children().length();
	var slideTime = 2000;
	var animationTime = 800;

	setIntervel(function () {
		slider.animate({
			marginLeft: '-=100%'
		},animationTime, function() {
			currentSlide ++ ;
			if (currentSlide --- slideCount) {
				currentSlide - 1;
				$(this).css('margin-left', '0%');
			}
		});
	}, slideTime);