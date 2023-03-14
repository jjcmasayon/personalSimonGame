var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var started = true;
var level = 0;


$("body").keydown(function() {

    if(started === true) {
        $("#level-title").html("Level " + level);
        nextSequence();
        started = false;
        // console.log(started);
    }
});

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern[userClickedPattern.length - 1]);
    // console.log(gamePattern);
    checkAnswer(userClickedPattern.length - 1);
    // level++;
    // console.log(userClickedPattern);
    // console.log(userClickedPattern[level]);
    // console.log(userChosenColour);
    // console.log($(this).attr("id"));
});

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
            userClickedPattern = [];
          }
        
    }
    else {
        var audio5 = new Audio("sounds/wrong.mp3");
        audio5.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          $("#level-title").html("Game Over, Press Any Key to Restart 😛");
          startOver();
    }
}

// console.log(Math.trunc(randomNumber));

function nextSequence() {
    var randomNumber = Math.trunc(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    level++;
    $("#level-title").html("Level " + level);
    return gamePattern;
}



function playSound(name) {
    switch (name) {
        case "blue":
            var audio1 = new Audio("sounds/" + name+".mp3");
            audio1.play();
        break;
        case "green":
            var audio2 = new Audio("sounds/" + name+".mp3");
            audio2.play();
        break;
        case "red":
            var audio3 = new Audio("sounds/" + name+".mp3");
            audio3.play();
        break;
        case "yellow":
            var audio4 = new Audio("sounds/" + name+".mp3");
            audio4.play();
        break;

        default: console.log(name);

    }
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
    }, 100)

}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = true;
}



// console.log(randomChosenColour);
