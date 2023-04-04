

document.querySelector(".w ").addEventListener("click", playW);
document.querySelector(".a ").addEventListener("click", playA);
document.querySelector(".s ").addEventListener("click", playS);
document.querySelector(".d ").addEventListener("click", playD);
document.querySelector(".j ").addEventListener("click", playJ);
document.querySelector(".k ").addEventListener("click", playK);
document.querySelector(".l ").addEventListener("click", playL);


for (i=0;i<=document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("keydown",  playaudio);
function playaudio(e){

    switch (e.key) {

        case "w":
            playW();
         
            break;
        case "a":
            playA();
            break;
        case "s":
            playS();
            break;
        case "d":
            playD();
            break;
        case "j":
            playJ();
            break;
        case "k":
            playK();
            break;   
        case "l":
            playL();
            break;             
}
document.querySelector("."+e.key).classList.add("pressed");

}
document.querySelectorAll(".drum")[i].addEventListener("keyup",  function(e){document.querySelector("."+e.key).classList.remove("pressed")});
}

  

function playW(){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
   
}
function playA(){
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
   
}
function playS(){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
   
}
function playD(){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
   
}
function playJ(){
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
   
}
function playK(){
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
   
}
function playL(){
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
   
}


  
    
    





