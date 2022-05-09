const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {
    video.paused ? video.play() : video.pause();
}


function updateButton() {
    console.log(this);
    console.log(this.paused);
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
toggle.addEventListener('click', togglePlay);
document.addEventListener('keydown', (e) => {
    if (e.code === "Space") togglePlay(e)
})