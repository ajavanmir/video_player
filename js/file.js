/*
Copyright amir javanmir
Released on: March 26, 2025
*/
let myplayer = document.querySelector(".myplayer");
let media = myplayer.querySelector("video");
let controls = myplayer.querySelector(".controls__btns");
let play = controls.querySelector(".play");
let prev = controls.querySelector(".rewind");
let next = controls.querySelector(".forward");
let volume = controls.querySelector(".volume");
let fullScreen = controls.querySelector(".fullscreen");
let timerArea = controls.querySelector(".timer");
let currentTimeEl = timerArea.querySelector(".currentTime");
let videoTime = timerArea.querySelector(".videoTime");
let timerBar = myplayer.querySelector(".controls__progressbar input");

let volumeIcon = controls.querySelector(".volume .icon");
let progressBar = controls.querySelector(".volume .volume__progress");
let volumeProgressInput = progressBar.querySelector("input");

volumeIcon.addEventListener("click",function(){
    progressBar.classList.toggle("active");
})

media.volume = 0.5;
volumeProgressInput.addEventListener("input",function(){
    media.volume = (this.value / 100);
    this.style.background = `linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 ${this.value}%)`;
});

play.addEventListener("click", function () {
    videoTime.textContent = getTime(media.duration);
    if (media.paused) {
        changeIcon();
        media.play();
    } else {
        changeIcon();
        media.pause();
    }
})

media.addEventListener("timeupdate", function () {
    let currentTime = media.currentTime;
    currentTimeEl.textContent = getTime(currentTime);
    let barLength = (media.currentTime / media.duration) * 100;
    timerBar.style = `background: linear-gradient(90deg, rgba(230,126,34,1) ${barLength}%, #e1e1e1 0%);`;
    timerBar.value = barLength;
})

timerBar.addEventListener("input", function () {
    this.style = `background: linear-gradient(90deg, rgba(230,126,34,1) ${this.value}%, #e1e1e1 0%);`;
    let calcCurrentTime = media.duration / (100 / this.value);
    media.currentTime = calcCurrentTime;
})

prev.addEventListener("click", function () {
    media.currentTime -= 10;
})

next.addEventListener("click", function () {
    media.currentTime += 10;
})

fullScreen.addEventListener("click",function(){
    if(!document.fullscreenElement){
        myplayer.requestFullscreen();
    }else if(document.exitFullscreen){
        document.exitFullscreen();
    }
})

function changeIcon() {
    let icon = play.querySelector("i");
    icon.classList.toggle("ion-md-play");
    icon.classList.toggle("ion-md-pause");
}

function getTime(time) {
    let minutes = Math.floor(time / 60).toString().padStart(2, "0");
    let seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}