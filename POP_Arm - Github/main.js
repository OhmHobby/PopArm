//I didn't use this js code anymore
// References to DOM elements
const popcat = document.querySelector("#popcat");
const counter = document.querySelector('#target');
const score = 0;

// The two images of the POP CAT
const openMouthImg = "./images/armo.jpg";
const closeMouthImg = "./images/armc.jpg";

// The two Popping sounds
const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

// Event Handlers (Desktops)
popcat.addEventListener("mousedown", openMouth);
popcat.addEventListener("mouseup", closeMouth);

// Event Handers (Touch Screens)
popcat.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
    addToCounter();
})

popcat.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})

// The functions which will perform the cool stuff
function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}

function addToCounter(){
    score++;
    counter.innerHTML = score;
}

