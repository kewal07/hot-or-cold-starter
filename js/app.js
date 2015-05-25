
$(document).ready(function(){
	
	var randomNumber,userGuess,guessCount;
	newGame();

	/*--- New game function is called whenever the page is refreshed or the user clicks on the New Game button ---*/
	function newGame(){
		clearAll();
	}

	/*--- Submit guess function ---*/
	$('#guessButton').click(function(){
		userGuess = $('#userGuess').val();
		if(userGuess.length == 0){
			$('#feedback').html("You have to enter a number :)");
			$("#feedback").html("Make your Guess! ");
			$("#userGuess").val("");
			$('#count').empty();
		}
		else{
				if(isNaN(userGuess)){
					$('#feedback').html("You have to enter numbers only :)");
				}
				else {
						console.log(guessCount);
						userGuess = parseInt(userGuess);
						if(userGuess <= 0){
							$('#feedback').html("Please enter a number between 1 and 100 only");
						}
						else if(userGuess == randomNumber){
							guessCount++;
							$('ul#guessList').append('<li>'+userGuess+'</li>');
							$('#feedback').html("Bravo!!! You guessed it");
							$('#count').html(guessCount);
							$(this).prop("disabled",true);
							$(this).removeClass("buttonHover");
						}
						else{
							guessCount++;
							$('ul#guessList').append('<li>'+userGuess+'</li>');
							$('#count').html(guessCount);
							var diff = Math.abs(userGuess-randomNumber);
							if(diff==1){
								$("#feedback").html("You are getting very very hot! Almost there! ");
							}
							else if(diff >=2 && diff <=5){
								$("#feedback").html("You are getting hot");
							}
							else if(diff >=6 && diff <=10){
								$("#feedback").html("You are getting very very warm!");
							}
							else if(diff >=11 && diff <=20){
								$("#feedback").html("You are getting warmer!");
							}
							else if(diff >=21 && diff <=35){
								$("#feedback").html("You are getting warm!");
							}
							else if(diff >=36 && diff <=50){
								$("#feedback").html("You need to keep guessing");
							}
							else if(diff >=51 && diff <=65){
								$("#feedback").html("You are getting cold!");
							}
							else if(diff >=66 && diff <=80){
								$("#feedback").html("You are getting very cold!");
							}
							else if(diff >=81 && diff <=90){
								$("#feedback").html("You keep getting cold");
							}
							else if(diff >=91 && diff <=95){
								$("#feedback").html("You are getting very very very cold");
							}
							else{
								$("#feedback").html("You are getting very very cold. Hello South Pole!");
							}
						}
					
					}
			    $('#userGuess').val("");
			}
		console.log("ok1");
	});
	/*--- Clears all existing guesses and numbers ---*/
	function clearAll(){
		randomNumber = Math.floor((Math.random() * 100) + 1);
		console.log(randomNumber);
		guessCount = 0;
		console.log("clearAll");
		$("#feedback").html("Make your Guess! ");
		$("#userGuess").val("");
		$('#count').empty();
		$('#guessButton').prop("disabled",false);
		$('#guessButton').addClass("buttonHover");
		$('ul#guessList').empty();
	}

	/*--- New Game Button ---*/
	$("a.new").click(function(){
		newGame();
	});
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


