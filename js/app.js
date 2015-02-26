
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

  	// Start a new game when the user clicks the "New Game" button
  	$(".new").click(newGame);

  	// Run the game when the user submits a value
  	$(".game form").submit(submitValue);


  	/* Functions
  	---------------------------------------------------*/


  	// Reload the page to start a new game  
  	function newGame(){
  		location.reload();
  	}
  	
  	// Take the value supplied and respond accordingly
  	function submitValue(e) {

  		// Prevent page reload
  		e.preventDefault();
  		// Take the value supplied
  		var userGuess = $("#userGuess").val();
  		// If it is not an integer between 0 and 100, display a message
  		if ( userGuess > 100 || userGuess < 0 || isNaN(+userGuess) || userGuess.indexOf(".") !== -1 || /^\s+$/.test(userGuess) ) {
  			$("#feedback").html("Please, supply an integer between 1 and 100.");
  		// Else, it is a valid numeric value. Run the game
  		} else {
			feedback(secretNum, userGuess);
	  		counter();
	  		guessList(userGuess);
	  	}
	  	// Clean the text input afterwards
  		$("#userGuess").val("");
  		
  	}

  	// Give the appropiate feedback to the user input
  	function feedback(num, input){

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

  	// Track how many guess the user has made
  	function counter(){
  		var count = $("#count").html();
  		count++;
  		return $("#count").html(count);
  	};

  	// Supply new item to the list of numbers the user has guessed so far
  	function guessList(input){
  		var newItem = "";
  		newItem += "<li>";
  		newItem += input;
  		newItem += "</li>";
  		$("#guessList").append(newItem);
  	};


});


