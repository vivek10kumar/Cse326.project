function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "I hope you understood my point!") {
        return "Thanks for your time, I Agree with you..";
    }else if (input == "See you later") {
        return "Yeah!, Have a great day ahead!";
    }else if (input == "Good Bye") {
        return "Talk to you later!";
    }else if (input == "Good Bye") {
        return "Talk to you later!";
    } 
	else {
        return "I am not agree with you!";
    }
}