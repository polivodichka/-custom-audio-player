
// Create the audio element for the player
let audio = document.createElement('audio');
let audio_index = 0;

let cover = document.querySelector('.cover_img');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let record_disk = document.querySelector('.record');

// Define the list of tracks that have to be played
let track_list = [
  {
    name: "Angel by the wings",
    artist: "Sia",
    image: "./assets/covers/sia-angel-by-the-wings.jpg",
    path: "./assets/audio/Sia_-_Angel_By_The_Wings.mp3"
  },
  {
    name: "She is on my mind",
    artist: "JP Cooper",
    image: "./assets/covers/on-my-mind.jpg",
    path: "./assets/audio/JP Cooper - She's On My Mind.mp3"
  },
  {
    name: "Remember The Name",
    artist: "Fort Minor, Styles of Beyond",
    image: "./assets/covers/remember-the-name.jpg",
    path: "./assets/audio/Fort Minor - Remember The Name.mp3"
  },
  {
    name: "The Motto",
    artist: "Tiesto feat. Ava Max",
    image: "./assets/covers/the-motto.jpg",
    path: "./assets/audio/Tiesto feat. Ava Max - The Motto.mp3"
  },
];

audio.src=track_list[audio_index].path;
changeCoverTitleAuthor(audio_index);

const playBtn = document.querySelector('#play');
const playBtnCover = document.querySelector('#play_on_cover');

playBtn.onclick = play;
playBtnCover.onclick = play;

document.querySelector('#volume').oninput = volume;

const progress = document.querySelector('#progress');
progress.oninput = currentTimeUpdate;

const nextBtn = document.querySelector('#next');
nextBtn.onclick = next;

const previousBtn = document.querySelector('#previous');
previousBtn.onclick = backToStart;
previousBtn.addEventListener('dblclick', function (e) {
    console.log('large');
});

audio.ontimeupdate = progressUpdate;


function play(){
    if(document.querySelector('#play.active')){
        audio.pause();
        playBtn.classList.remove('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#play`;
        record_disk.classList.remove('active');
    }
    else{        
        audio.play();
        playBtn.classList.toggle('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#pause`;
        record_disk.classList.toggle('active');
    }
    
    audio.onended = next;
    
}


function backToStart(){

    if (audio.currentTime > 5){
        audio.pause();
        audio.currentTime = 0;    
        audio.play();
    }
    else
    previous();
}

function changeStopToPlayImg(){
    if(!document.querySelector('#play.active')){        
        playBtn.classList.toggle('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#pause`;
        record_disk.classList.toggle('active');
    }
}

function previous(){
    audio_index===0?audio_index=track_list.length-1:--audio_index;
    audio.src=track_list[audio_index].path;
    audio.pause();
    audio.currentTime = 0;    
    audio.play();
    changeStopToPlayImg();   
    changeCoverTitleAuthor(audio_index);   
}

function next(){    
    audio_index===track_list.length-1?audio_index=0:++audio_index;
    audio.src=track_list[audio_index].path;
    audio.pause();
    audio.currentTime = 0;    
    audio.play();
    changeStopToPlayImg();
    changeCoverTitleAuthor(audio_index);
}

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
    document.querySelector('#duration').textContent = duration?formatTime(duration):"00:00";
}
function currentTimeUpdate(){
    console.log('hey')
    let v = this.value;
    console.log(v);
    let duration = audio.duration;
    audio.pause();
    audio.currentTime = v * duration / 10000;
    audio.play();
    changeStopToPlayImg();
}

function formatTime(str){
    let time = Math.round(+str);
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return (minutes<10?'0'+minutes:minutes) + ':' + (seconds<10?'0'+seconds:seconds);
}

function changeCoverTitleAuthor(index){
    cover.style.backgroundImage = `url(${track_list[index].image})`;
    title.textContent = track_list[index].name;
    author.textContent = track_list[index].artist;
}

//document.querySelector(".svg_mask").style.setProperty('--bg-color', 'salmon');
//document.body.style.setProperty('--bg-color', 'salmon');