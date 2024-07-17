var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function (){
    if(!started){
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
})

$(".box").click(function (){
    var clickedID = $(this).attr("id");
    handler(clickedID);
    playSound(clickedID);
    animateClick(clickedID);
    checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function (){
                nextSequence()
            },1000);
        }
    }else{
        var wrong = new Audio('./Sounds/wrong.mp3');
        wrong.play();

        $("body").addClass("game-over");
        $("h1").text("GAME OVER!! Press any key to restart");
        setTimeout(function (){
            $("body").removeClass("game-over")
        },200);
        startOver();
    }
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("." + randomChosenColour).fadeOut(100).fadeIn(100);
    switch(randomChosenColour){
        case 'red':
            var red = new Audio('./Sounds/red.mp3');
            red.play();
            break;
        case 'green':
            var green = new Audio('./Sounds/green.mp3');
            green.play(); 
            break;
        case 'blue':
            var blue = new Audio('./Sounds/blue.mp3');
            blue.play();
            break;
        case 'yellow':
            var yellow = new Audio('./Sounds/yellow.mp3');
            yellow.play();
            break;
    }
}

function handler(clickedID){
    var userChosenColour = clickedID;
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
}

function playSound(name){
    switch(name){
        case 'red':
            var red = new Audio('./Sounds/red.mp3');
            red.play();
            break;
        case 'green':
            var green = new Audio('./Sounds/green.mp3');
            green.play(); 
            break;
        case 'blue':
            var blue = new Audio('./Sounds/blue.mp3');
            blue.play();
            break;
        case 'yellow':
            var yellow = new Audio('./Sounds/yellow.mp3');
            yellow.play();
            break;
    }
}


function animateClick(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}




