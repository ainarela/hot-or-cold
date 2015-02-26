
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	/* HOT OR COLD GAME
  	------------------------------------------------*/

  	// Generate secret integer between 1 and 100 when the page loads
  	var secretNum = Math.floor(Math.random()*100)+1;
  	console.log(secretNum);

  	// Start a new game
  	$(".new").click(newGame);

  	// The user submits a guess
  	$("#guessButton").click( function submitValue(e) {
  		e.preventDefault();
  		var userGuess = $("#userGuess").val();
		feedback(secretNum, userGuess);
  		counter();
  		guessList(userGuess);
  		$("#userGuess").val("");
  		
  	});

  	// Reload the page to start a new game  
  	function newGame(){
  		location.reload();
  	}

  	// Track how many guess the user has made
  	function counter(){
  		var count = $("#count").html();
  		count++;
  		return $("#count").html(count);
  	};

  	// Give the appropiate feedback to the user input
  	function feedback(num, input){

  		// var input = $("#userGuess").val();
  		var distance = Math.abs(num - (+input));

  		if (distance > 0 && distance <= 10) {
  			$("#feedback").html("Very hot");
  		}
  		else if (distance > 10 && distance <= 20) {
  			$("#feedback").html("Hot");
  		}
  		else if (distance > 20 && distance <= 30) {
  			$("#feedback").html("Warm");
  		}
  		else if (distance > 30 && distance <= 50) {
  			$("#feedback").html("Cold");
  		}
  		else if (distance > 50) {
  			$("#feedback").html("Ice cold");
  		}
  		else if (distance == 0) {
  			$("#feedback").html("Congratulations! The secret number is "+num+".");
  		}
  	}

  	// Supply new item to the list of numbers the user has guessed so far
  	function guessList(input){
  		var newItem = "";
  		newItem += "<li>";
  		newItem += input;
  		newItem += "</li>";
  		$("#guessList").append(newItem);
  	};


  	



});


