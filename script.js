// Create the audio element for the player
let audio = document.createElement('audio');
let audio_index = 0;

let cover = document.querySelector('.cover_img');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let record_disk = document.querySelector('.record');

// Define the list of tracks that have to be played
let track_list = [{
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
    {
        name: "Flightless Bird, American Mouth",
        artist: "Iron & Wine",
        image: "./assets/covers/american-mouth.jpg",
        path: "./assets/audio/Iron & Wine - Flightless Bird, American Mouth.mp3"
    },
    {
        name: "All I Want",
        artist: "Kodaline",
        image: "./assets/covers/all-i-want.jpg",
        path: "./assets/audio/Kodaline - All I Want.mp3"
    },
];

let save_track_list = Array.from(track_list);

audio.src = track_list[audio_index].path;
changeCoverTitleAuthor(audio_index);

const playBtn = document.querySelector('#play');
const playBtnCover = document.querySelector('#play_on_cover');

playBtn.onclick = play;
playBtnCover.onclick = play;

audio.volume = 0.5;
document.querySelector('#volume').oninput = volume;

const progress = document.querySelector('#progress');
progress.oninput = currentTimeUpdate;

const nextBtn = document.querySelector('#next');
nextBtn.onclick = next;

const previousBtn = document.querySelector('#previous');
previousBtn.onclick = backToStart;

const muteBtn = document.querySelector('#mute');
muteBtn.onclick = mute;
muteBtn.addEventListener('mouseover', e => {
    document.querySelector('.volume').classList.toggle('hover');
})
muteBtn.addEventListener('mouseout', e => {
    document.querySelector('.volume').classList.remove('hover');
})
document.querySelector('.volume').addEventListener('mouseover', e => {
    document.querySelector('.volume').classList.toggle('hover');
})
document.querySelector('.volume').addEventListener('mouseout', e => {
    document.querySelector('.volume').classList.remove('hover');
})
audio.ontimeupdate = progressUpdate;

const shuffleBtn = document.querySelector('#shuffle');
shuffleBtn.onclick = shuffle;

const repeatBtn = document.querySelector('#repeat');
repeatBtn.onclick = repeat;



function play() {
    if (document.querySelector('#play.active')) {
        audio.pause();
        playBtn.classList.remove('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#play`;
        record_disk.classList.remove('active');
    } else {
        audio.play();
        playBtn.classList.toggle('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#pause`;
        record_disk.classList.toggle('active');
    }

    RepeatIfNecessary();
}


function backToStart() {

    if (audio.currentTime > 5) {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    } else
        previous();
}

function changeStopToPlayImg() {
    if (!document.querySelector('#play.active')) {
        playBtn.classList.toggle('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#pause`;
        record_disk.classList.toggle('active');
    }
}

function previous() {
    audio_index === 0 ? audio_index = track_list.length - 1 : --audio_index;
    audio.src = track_list[audio_index].path;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    changeStopToPlayImg();
    changeCoverTitleAuthor(audio_index);
}

function next() {
    audio_index === track_list.length - 1 ? audio_index = 0 : ++audio_index;
    audio.src = track_list[audio_index].path;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    changeStopToPlayImg();
    changeCoverTitleAuthor(audio_index);
}

function volume(plus = 0, minus = 0) {
    let v = this.value ? this.value : audio.volume * 100;
    v = v + plus <= 100 ? v + plus : v;
    v = v - minus >= 0 ? v - minus : v;
    audio.volume = v / 100;

    document.querySelector('#volume').value = v;
}

function progressUpdate() {
    let duration = audio.duration;
    let currentTime = audio.currentTime;
    progress.value = 10000 * currentTime / duration;
    document.querySelector('#currentTime').textContent = formatTime(currentTime);
    document.querySelector('#duration').textContent = duration ? formatTime(duration) : "00:00";
}

function currentTimeUpdate() {
    let v = this.value;
    let duration = audio.duration;
    audio.pause();
    audio.currentTime = v * duration / 10000;
    audio.play();
    changeStopToPlayImg();

    RepeatIfNecessary();
}

function formatTime(str) {
    let time = Math.round(+str);
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
}



function changeCoverTitleAuthor(index) {
    cover.style.backgroundImage = `url(${track_list[index].image})`;

    //ищем основной цвет
    const fac = new FastAverageColor();
    let img = new Image();
    img.src = track_list[index].image;
    fac.getColorAsync(img)
        .then(color => {
            document.body.style.backgroundColor = color.rgba;
            document.body.style.color = color.isDark ? '#fff' : '#000';
            document.body.style.setProperty('--svg-color', color.isDark ? '#fff' : '#000');
            document.footer.style.setProperty('--svg-color', color.isDark ? '#fff' : '#000');
        })
        .catch(e => {
            console.log(e);
        });

    title.textContent = track_list[index].name;
    author.textContent = track_list[index].artist;
}

function mute() {
    if (document.querySelector('#mute.active')) {
        audio.muted = false;
        muteBtn.classList.remove('active');
        document.getElementById('mute-svg').href.baseVal = `sprite.svg#volume`;
    } else {
        audio.muted = true;
        muteBtn.classList.toggle('active');
        document.getElementById('mute-svg').href.baseVal = `sprite.svg#mute`;
    }

    RepeatIfNecessary();

}

function shuffle() {

    if (shuffleBtn.classList.contains('off')) {
        track_list.sort(() => Math.random() - 0.5);
        shuffleBtn.classList.remove('off');
        audio_index = track_list.indexOf(save_track_list[audio_index]);
        changeCoverTitleAuthor(audio_index);
    } else {
        audio_index = save_track_list.indexOf(track_list[audio_index]);
        track_list = Array.from(save_track_list);
        shuffleBtn.classList.toggle('off');
        changeCoverTitleAuthor(audio_index);
    }

    shuffleBtn.focus();

}

function repeat() {

    if (repeatBtn.classList.contains('off')) {
        repeatBtn.classList.remove('off');
    } else if (!repeatBtn.classList.contains('off') && !repeatBtn.classList.contains('one')) {
        repeatBtn.classList.toggle('one');
        document.getElementById('repeat-svg').href.baseVal = `sprite.svg#repeat-one`;
    } else {
        repeatBtn.classList.remove('one');
        repeatBtn.classList.toggle('off');
        document.getElementById('repeat-svg').href.baseVal = `sprite.svg#repeat`;
    }

    RepeatIfNecessary();
}

function RepeatIfNecessary() {
    if (repeatBtn.classList.contains('off')) {
        audio.onended = audio_index < track_list.length - 1 ? next : play
    } else if (repeatBtn.classList.contains('one')) {
        audio.onended = restart;
    } else {
        audio.onended = next;
    }
}

function restart() {
    audio.play();
}


document.addEventListener('keydown', e => {
    e.code === 'Space' ? play() :
        (e.code === 'MediaTrackNext' || e.code === 'ArrowRight') ? next() :
        (e.code === 'MediaTrackPrevious' || e.code === 'ArrowLeft') ? backToStart() :
        e.code === 'ArrowUp' ? volume(1, 0) :
        e.code === 'ArrowDown' ? volume(0, 1) : 0;
})

const infoBtn = document.querySelector('.info');
const infoWindow = document.querySelector('.functionalInfo');
if (infoBtn) {
    infoBtn.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        infoBtn.classList.toggle('_active');
        infoWindow.classList.toggle('_active');
    })
}

infoWindow.addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    infoBtn.classList.remove('_active');
    infoWindow.classList.remove('_active');
})