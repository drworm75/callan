
$("#reveal").on('click', function() {
	$(this).parent('div').prev('div').find('.hidden').removeClass('hidden');
	$(this).replaceWith("<p>Callan is a great facilitator, leading the class to the answer without giving us the answer.  Help from Callan is $3.00, or a box of girl scout cookies.</p>");
	console.log($(this).parent('div'));
});
