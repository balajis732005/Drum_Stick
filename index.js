/*
document.querySelector(".drum").addEventListener("click",clickHandle);
//This querySlector will select only the first button in the list , even if all elements have same class name
*/
function playSound(inputAudio){
    var audioToPlay="./sounds/"+inputAudio+".mp3";
    console.log(inputAudio);
    var audio = new Audio(audioToPlay);
    audio.play();
}
function clickHandle(key){
    switch(key){
        case "q":
            playSound("tom-1");
            break;
        case "w":
            playSound("tom-2");
            break;
        case "e":
            playSound("tom-3");
            break;
        case "r":
            playSound("tom-4");
            break;
        case "t":
            playSound("crash");
            break;
        case "y":
            playSound("kick-bass");
            break;
        case "u":
            playSound("snare");
            break;
    }
}
function animation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}
function forMouse(){
    var buttonInnerHTML = this.innerHTML;
    clickHandle(buttonInnerHTML);
    animation(buttonInnerHTML);
}
function forKeyboard(event){
    clickHandle(event.key);
    animation(event.key);
}
//To apply for all button use loops
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",forMouse);
    document.addEventListener("keypress",forKeyboard);
}
