let buttonColours = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []

$('.btn').click(function () {
    let useChousenColour = $(this).attr('id');
    userClickedPattern.push(useChousenColour);
    // console.log(userClickedPattern);
    playSound(useChousenColour)
    animatePress(useChousenColour)
});

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    animation(randomChosenColour);
    playSound(randomChosenColour);
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

// $('.button').click(function () {
//     console.log('hola')
//     $('button').css()
//     makeSound('class')
// })

// function makeSound(color) {
//     switch (color) {
//         case 'btn red':
//             let red = new Audio('sounds/red.mpe');
//             red.play()
//             break;

//         case 'btn blue':
//             let blue = new Audio('sounds/blue.mpe');
//             blue.play()
//             break;

//         case 'btn yellow':
//             let yellow = new Audio('sounds/yellow.mpe');
//             yellow.play()
//             break;

//         case 'btn green':
//             let green = new Audio('sounds/green.mpe');
//             green.play()
//             break;

//         default:
//             let wrong = new Audio('sounds/wrong.mpe');
//             wrong.play()
//             break;
//     };
// }