jQuery(function ($) {
	'use strict';

	function widthButtonsBlock() {
		var ww = document.body.clientWidth;
		var items = document.querySelectorAll('.buttons-content-animate .item');
		for(var i = 0; i < items.length; i++) {
			items[i].style.width = ww + 'px';
		}

		setTimeout(function () {
			// Scrolling container height
			var wh = window.innerHeight;
			var buttonsSignIn = $('.buttons-sign-in').height();
			var moreSuggestionsSection = document.getElementsByClassName('more-suggestions-section')[0];
			moreSuggestionsSection.style.maxHeight = (wh - buttonsSignIn - 40) + 'px';

			// Custom scroll update size
			$('#scrollContent').perfectScrollbar('update');

		}, 100);

	}
	widthButtonsBlock();
	window.addEventListener('resize', widthButtonsBlock, false);

	// Toggle function
	function toggleButtons() {
		document.querySelectorAll('.buttons-content-animate')[0].classList.toggle("active");
		document.querySelectorAll('.other-options')[0].classList.toggle("active");
		document.querySelectorAll('.back')[0].classList.toggle("active");
	}

	// Other options
	var otherBtn = document.querySelectorAll('.other-options')[0];
	otherBtn.addEventListener('click', function () {
		document.querySelectorAll('.input-main')[0].classList.toggle("active");
		document.querySelectorAll('.buttons-main')[0].classList.toggle("active");
		toggleButtons();
	}, false);

	// Back button
	var backBtn = document.querySelectorAll('.back')[0];
	backBtn.addEventListener('click', function () {
		document.querySelectorAll('.buttons-main')[0].classList.toggle("active");
		document.querySelectorAll('.input-main')[0].classList.toggle("active");
		toggleButtons();
	}, false);

	// Form email sign in
	var form = document.getElementById('form');
	form.addEventListener('submit', function () {
		console.log('submit');
	}, false);

	// Checkbox mouse hover
	$('.more-suggestions-section input[type=checkbox]').click(function () {
		if ($(this).prop('checked')) {
			$(this).next().on('mouseleave', function () {
				$(this).addClass('isHover');
			});
		} else {
			$(this).next().off('mouseleave');
			$(this).next().removeClass('isHover');
		}
		formSendMoreSuggestions();
	});

	// Checkbox click and send data if user is logged
	function formSendMoreSuggestions() {
		var dataMoreSuggestions = $('#moreSuggestionsSection').serializeArray(); // arry
		// var dataMoreSuggestions = $('#moreSuggestionsSection').serialize(); // standart

		var isLoginUser = false;

		if(isLoginUser) {

			$.ajax({
				type: "POST",
				url: config.moreSuggestionsSendUrl,
				data: dataMoreSuggestions,
				error: function () {
					console.log('Internet error');
				},
				success: function (result) {
					if (result == 200) {
						console.log('subscribing')
					}
					else {
						console.log('Fatal error');
					}
				}
			});

		} else {
			console.log(dataMoreSuggestions);
		}
	}

	// Custom scroll
	setTimeout(function () {
		Ps.initialize($('#scrollContent')[0]);
	}, 100);
});