
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

  	// Give feedback to the user when a new value is submitted
  	$("#guessButton").click( function submitValue(e) {
  		e.preventDefault();
  		feedback(secretNum);
  	});

  	// Function that reloads the page in order to start a new game  
  	function newGame(){
  		location.reload();
  	}

  	// Function that gives the appropiate feedback to the user input
  	function feedback(num){

  		var input = $("#userGuess").val();
  		var distance = Math.abs(num - (+input));

  		if (distance > 0 && distance <= 10) {
  			alert("Very hot");
  		}
  		else if (distance > 10 && distance <= 20) {
  			alert("Hot");
  		}
  		else if (distance > 20 && distance <= 30) {
  			alert("Warm");
  		}
  		else if (distance > 30 && distance <= 50) {
  			alert("Cold");
  		}
  		else if (distance > 50) {
  			alert("Ice cold");
  		}
  		else if (distance == 0) {
  			alert("Congratulations!");
  		}
  		$("#userGuess").val("");

  	}


  	



});


