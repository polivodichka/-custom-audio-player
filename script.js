
let audio = document.querySelector('#audio-player');

const playBtn = document.querySelector('#play');
playBtn.onclick = play;
//document.querySelector('#volume').oninput = volume;
document.querySelector('#progress').oninput = currentTimeUpdate;


let display;
let progress = document.querySelector('#progress');


audio.ontimeupdate = progressUpdate;
function play(){
    if(document.querySelector('#play.active')){
        audio.pause();
        playBtn.classList.remove('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#play`;
    }
    else{        
        audio.play();
        playBtn.classList.toggle('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#pause`;
    }
    
}


function backToStart(){
    audio.pause();
    audio.currentTime = 0;    
    audio.play();
}
function previous(){
    console.log('previous');
}

const previousBtn = document.querySelector('#previous');
previousBtn.onclick = backToStart;
previousBtn.addEventListener('dblclick', e =>{
    previous();
})

function next(){
    console.log('next');
}

const nextBtn = document.querySelector('#next');
nextBtn.onclick = next;

/*function speedUp(){
    audio.play();
    audio.playbackRate *= 2;
}
function speedDown(){
    audio.play();
    audio.playbackRate /= 2;
}
function speedNormal(){
    audio.play();
    audio.playbackRate = 1;
}*/
function volume(){
    let v = this.value;
    
    console.log(v);
    audio.volume = v/100;
}
function progressUpdate(){
    let duration = audio.duration;
    let currentTime = audio.currentTime;
    progress.value = 10000 * currentTime / duration;
    document.querySelector('#currentTime').textContent = formatTime(currentTime);
    document.querySelector('#duration').textContent = formatTime(duration);
}
function currentTimeUpdate(){
    console.log('hey')
    let v = this.value;
    console.log(v);
    let duration = audio.duration;
    audio.pause();
    audio.currentTime = v * duration / 10000;
    audio.play();
}

function formatTime(str){
    let time = Math.round(+str);
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return (minutes<10?'0'+minutes:minutes) + ':' + (seconds<10?'0'+seconds:seconds);
}
