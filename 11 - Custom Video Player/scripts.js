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
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}


function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}


function handleProgress() {
    const percent = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}


function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
document.addEventListener('keydown', (e) => {
    if (e.code === "Space") togglePlay(e)
})


skipButtons.forEach(btn => 
    btn.addEventListener('click', skip) 
)

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
    mouseDown && scrub(e)
});


let mouseDown = false;
progress.addEventListener('mousedown', () => {
    mouseDown = true;
})

progress.addEventListener('mouseup', () => {
    mouseDown = false;
})

