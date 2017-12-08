$(document).ready(function(){
	var compte = 0;
	$('img').click(
		function(){
			// console.log('ok');
			compte ++;
			// console.log(compte);
			$('span').html(compte);

			if ((compte%20) == 0){
				alert( 'You nerd' );
			}

	
		});

});