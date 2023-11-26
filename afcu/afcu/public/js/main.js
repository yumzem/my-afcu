$(document).ready(() => {
    $("a").on("click", function (t) {
		t.preventDefault(), window.location.replace(window.location.href);
	});

    $('.cb-input-field').on('focus', function () {
        const inputField = $(this).parent().parent().parent().parent();
        const inputLabel = $(this).prev();

        inputField.addClass('cb-input--is-label-active cb-input--is-dirty cb-input--is-focused primary--text');
        inputLabel.addClass('cb-label--active primary--text');
    })

    $('.cb-input-field').on('blur', function () {
        const inputField = $(this).parent().parent().parent().parent();
        const inputLabel = $(this).prev();

        if ($(this).val() === '') {
            inputField.removeClass('cb-input--is-label-active cb-input--is-dirty cb-input--is-focused primary--text');
            inputLabel.removeClass('cb-label--active primary--text');
        } else {
            inputField.removeClass('cb-input--is-focused primary--text');
            inputLabel.removeClass('primary--text');
        }
    })

    
    $('#toggleBtn').on('click', function () {
        const inputField = $(this).parent().prev().children('.cb-input-field');

        if ($(this).hasClass('mdi-eye')) {
            $(this).removeClass("mdi-eye");
            $(this).addClass("mdi-eye-off");
            inputField.attr("type", "text");
        } else {
            $(this).removeClass("mdi-eye-off");
            $(this).addClass("mdi-eye");
            inputField.attr("type", "password");
        }
    });

    $('.cb-input-field').on('keyup blur', function () {
        const inputField = $(this).parent().parent().parent().parent();
        const inputLabel = $(this).prev();
        const inputLabelText = $(this).prev().text();
        const errorMsg = $(this).parent().parent().next().children().children().children();

        if ($(this).val().trim().length < 3) {
			inputField.addClass('cb-input--has-state error--text');
            inputLabel.addClass('error--text');
            errorMsg.addClass('error--text');
            errorMsg.html(`${inputLabelText} required`);
		} else {
			inputField.removeClass('cb-input--has-state error--text');
            inputLabel.removeClass('error--text');
            errorMsg.removeClass('error--text');
            errorMsg.html('');
		}

		var invalidInput = false;

		$(".cb-input-field").each(function () {
			if ($(this).val().trim().length < 3) {
				invalidInput = true;
			}
		});

		if (invalidInput) {
			$(".submitBtn").attr("disabled", true);
		} else {
			$(".submitBtn").attr("disabled", false);
		}
    })
})