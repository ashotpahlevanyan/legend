jQuery(document).ready(function($) {
	$('.nav.navbar-nav.navbar-right li a').on('click', function(e) {
		e.preventDefault();
		var href = e.target.href;
		href = href.split('#')[1];
		var top = $('#' + href).closest('section').offset().top - 92;
		window.scrollTo({
			top: top,
			behavior: "smooth"
		});
	});
});

	
	

