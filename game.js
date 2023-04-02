let buttonColours = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []

let level = 0
let started = false;

$(document).keypress(function () {
    if (!started) {
        $('#level-title').text('Level ' + level);

        setTimeout(() => {
            nextSequence()
        }, 500);
        started = true;
    }
});

$('.btn').click(function () {
    let useChousenColour = $(this).attr('id');
    userClickedPattern.push(useChousenColour);
    // console.log(userClickedPattern);
    playSound(useChousenColour)
    animatePress(useChousenColour)
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('success');

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }
    } else {
        console.log('wrong');
        playSound('wrong')
        $('body').addClass('game-over')

        setTimeout(() => {
            $('body').removeClass('game-over')
            $('h1').text('Game Over, Press Any Key to Restart')
        }, 200);

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++
    $('#level-title').text('Level ' + level);

    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    setTimeout(() => {
        animation(randomChosenColour);
        playSound(randomChosenColour);
    }, 500);
}

function playSound(color) {
    let audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function animation(color) {
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass('pressed');

    setTimeout(() => {
        $("#" + currentColour).removeClass('pressed');
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
