jQuery(document).ready(function($) {
	var offset = 92;
	var wSize = window.innerWidth 
				|| document.documentElement.clientWidth 
				|| document.body.clientWidth;
	if(wSize < 768) {
		offset = 87;
	} else {
		offset = 92;
	}
	$(window).resize(function(event) {
		wSize = window.innerWidth 
				|| document.documentElement.clientWidth 
				|| document.body.clientWidth;
		if(wSize < 768) {
			offset = 87;
		} else {
			offset = 92;
		}
		console.log(offset);
	});
	$('.nav.navbar-nav.navbar-right li a').on('click', function(e) {
		e.preventDefault();
		var href = e.target.href;
		href = href.split('#')[1];
		var top = $('#' + href).closest('section').offset().top - offset;
		window.scrollTo({
			top: top,
			behavior: "smooth"
		});
	});

	$(document).click(function (event) {
		var clickover = $(event.target);
		var $navbar = $(".navbar-collapse");               
		var _opened = $navbar.hasClass("in");
		if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
			$navbar.collapse('hide');
		}
	});
});

	
	

