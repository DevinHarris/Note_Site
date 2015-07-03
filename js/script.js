$(document).ready(function() {

	$(window).scroll(function(event){
		var y = $(this).scrollTop();

		if (y >= 300) {
			$('#monitor').addClass('animate');
			$('#phone').addClass('animate');
		}

		if (y >= 650) {
			$('#money').addClass('animate grow-img');
			$('#trans').addClass('animate grow-img');
			$('#fast').addClass('animate grow-img');

			$('.center-icons span').addClass('animate');
		}

	});

});