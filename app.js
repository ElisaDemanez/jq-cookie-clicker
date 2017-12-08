$(document).ready(function(){
	var compte = 0;
	var messages = ["Yo nerd", "Ye serious mate?","Ye really dumb","Oh ffs" ];
	var nb = 0;



	$('img').click(
		function(){
			// console.log('ok');
			compte ++;
			// console.log(compte);
			$('span').html(compte);

			if ((compte%20) == 0){
				var nb = Math.floor(Math.random() * messages.length);	
				console.log(nb);
				alert(messages[nb]);
			}
			// console.log(messages);
		});
	});



