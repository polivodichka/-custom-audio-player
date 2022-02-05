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
    path: "./assets/audio/Sia_-_Angel_By_The_Wings.mp3",
    textColor: '#000',
    text: "Oh so, your wounds they show\nI know you have never felt so alone\nBut hold on, head up, be strong\nOh hold on, hold on until you hear them come\nHere they come, oh\n\nTake an angel by the wings\nBeg her now for anything\nBeg her now for one more day\nTake an angel by the wings\nTime to tell her everything\nAsk her for the strength to stay\n\nYou can, you can do anything, anything\nYou can do anything\nYou can, you can do anything, anything\nYou can do anything\nYou can, you can do anything, anything\nYou can do anything\nYou can, you can do anything, anything\nYou can do anything\n\nLook up, call to the sky\nOh, look up and don't ask why, oh\n\nJust take an angel by the wings\nBeg her now for anything\nBeg her now for one more day\nTake an angel by the wings\nTime to tell her anything\nAsk her for the strength to stay\n\nYou can, you can do anything, anything\nYou can do anything\nYou can, you can do anything, anything\nYou can do anything\nYou can, you can do anything, anything\nYou can do anything\nYou can, you can do anything, anything\nYou can do anything\n\nYou can, you can do anything, anything\nYou can do anything\nYou can, you can do anything, anything\nYou can do anything\nYou can, you can do anything, anything\nYou can do anything\nYou can, you can do anything, anything\nYou can do anything"
},
{
    name: "She is on my mind",
    artist: "JP Cooper",
    image: "./assets/covers/on-my-mind.jpg",
    path: "./assets/audio/JP Cooper - She's On My Mind.mp3",
    textColor: '#fff',
    text: "She's on my mind, she's on my mind\nShe's on my mind, she's on my mind\nI can't sleep at night\n'Cause she ain't by my side\n\nI've seen a lot of pretty faces\nAin't nobody like you\nAnd I've never had a love like\nThe one we knew\nTell me why I had to play the clown\nAlways messing around\nCan't stop thinking how I let you down, down, down\n\nShe's on my mind, she's on my mind\nShe's on my mind, she's on my mind\nI can't sleep at night\n'Cause she ain't by my side\nShe's on my mind, she's on my mind\nShe's on my mind, she's on my mind\nI can't sleep at night\n'Cause she ain't by my side\nI can't sleep at night\n'Cause she ain't by my side\n\nMy friends say that she's a keeper\nBut I let her go\nDidn't know how much I need her\n'Til I was on my own\nI've been drinking but the truth won't drown\nNo, the truth won't drown\nBad medicine won't go down, down, down\n\nShe's on my mind, she's on my mind\nShe's on my mind, she's on my mind\nI can't sleep at night\n'Cause she ain't by my side\nShe's on my mind, she's on my mind\nShe's on my mind, she's on my mind\nI can't sleep at night\n'Cause she ain't by my side\n\nOoh, the cover's over\nIf I could dream I'd hold you\nCan't stop thinking, am I even\nOn your mind\nNow, the nights are colder\nMiss you on my shoulder\nMiss you there on my cheek\nEvery night\n\nShe's on my mind, she's on my mind\nShe's on my mind, she's on my mind\nI can't sleep at night\n'Cause she ain't by my side\n\nShe's on my mind, she's on my mind\nShe's on my mind, she's on my mind\nI can't sleep at night\n'Cause she ain't by my side\nShe's on my mind, she's on my mind\nShe's on my mind, she's on my mind\nI can't sleep at night\n'Cause she ain't by my side\n\nOoh, the cover's over\nMiss you on my shoulder\nMiss you there on my cheek\nEvery night\nShe's on my mind, she's on my mind\nShe's on my mind, she's on my mind\nI can't sleep at night\n'Cause she ain't by my side"
},
{
    name: "The Motto",
    artist: "Tiesto feat. Ava Max",
    image: "./assets/covers/the-motto.jpg",
    path: "./assets/audio/Tiesto feat. Ava Max - The Motto.mp3",
    textColor: '#fff',
    text: "That's the motto (Mhm)\nThrow it back with no chaser, with no trouble (Mhm)\nPoppin' that moet, baby, let's make some bubbles (Mhm)\nPuffin' on that gelato, wanna be seeing double\nGotta do what you gotta\n\nBelieve it, we ain't got no plans to leave here\nTell all of your friends to be here\nWe ain't gonna sleep all weekend\nOh, you know, you know, you know\n\nThat's the motto (Mhm)\nDrop a few bills then pop a few champagne bottles (Mhm)\nThrowin' that money like you just won the lotto (Mhm)\nWe been up all damn summer\nMakin' that bread and butter\nTell me, did I just stutter?\nThat's the motto (Mhm)\nDrop a few bills then pop a few champagne bottles (Mhm)\nThrowin' that money like you just won the lotto (Mhm)\nWe been up all damn summer\nMakin' that bread and butter\nTell me, did I just stutter?\nThat's the motto (I feel it)\nThat's the motto (I feel it)\n\nHopped in the range, can't feel my face\nThe window's down\nBack to my place\nMy birthday cake is comin' out (Oh)\nThe way it's hittin' like, I could go all night\nDon't want no bloodshot eyes\nSo hold my drink, let's fly\n\nBelieve it, we ain't got no plans to leave here\nTell all of your friends to be here\nWe ain't gonna sleep all weekend\nOh, you know, you know, you know\n\nThat's the motto (Mhm)\nDrop a few bills then pop a few champagne bottles (Mhm)\nThrowin' that money like you just won the lotto (Mhm)\nWe been up all damn summer (Oh)\nMakin' that bread and butter (Yeah)\nTell me, did I just stutter?\nThat's the motto (Mhm)\nDrop a few bills then pop a few champagne bottles (Mhm)\nThrowin' that money like you just won the lotto (Mhm)\nWe been up all damn summer (Oh)\nMakin' that bread and butter\nTell me, did I just stutter?\nThat's the motto\nThat's the motto (Oh)\n\n(I feel it)\n(I feel it, feel it)\n(I feel it)\n(I feel it, feel it)\n(I feel it)"
},
{
    name: "Flightless Bird, American Mouth",
    artist: "Iron & Wine",
    image: "./assets/covers/american-mouth.jpg",
    path: "./assets/audio/Iron & Wine - Flightless Bird, American Mouth.mp3",
    textColor: '#000',
    text: "I was a quick-wet boy\nDiving too deep for coins\nAll of your street light eyes\nWide on my plastic toys\nThen when the cops closed the fair\nI cut my long baby hair\nStole me a dog-eared map\nAnd called for you everywhere\n\nHave I found you?\nFlightless bird, jealous, weeping\nOr lost you?\nAmerican mouth\nBig pill looming\n\nNow I'm a fat house cat\nNursing my sore blunt tongue\nWatching the warm poison rats\nCurl through the wide fence cracks\nPissing on magazine photos\nThose fishing lures\nThrown in the cold and clean\nBlood of Christ mountain stream\n\nHave I found you?\nFlightless bird, grounded, bleeding\nOr lost you?\nAmerican mouth\nBig pill stuck going down"
},
{
    name: "All I Want",
    artist: "Kodaline",
    image: "./assets/covers/all-i-want.jpg",
    path: "./assets/audio/Kodaline - All I Want.mp3",
    textColor: '#000',
    text: "All I want is nothing more\nTo hear you knocking at my door\n'Cause if I could see your face once more\nI could die a happy man I'm sure\n\nWhen you said your last goodbye\nI died a little bit inside\nI lay in tears in bed all night\nAlone without you by my side\n\nBut if you loved me\nWhy'd you leave me?\nTake my body\nTake my body\nAll I want is\nAnd all I need is\nTo find somebody\nI'll find somebody like you\n\nOh oh\n\nSo you brought out the best of me\nA part of me I've never seen\nYou took my soul and wiped it clean\nOur love was made for movie screens\n\nBut if you loved me\nWhy'd you leave me?\nTake my body\nTake my body\nAll I want is\nAnd all I need is\nTo find somebody\nI'll find somebody\n\nOh\n\nIf you loved me\nWhy'd you leave me?\nTake my body\nTake my body\nAll I want is\nAnd all I need is\nTo find somebody\nI'll find somebody like you\n\nOh"
},
];

let save_track_list = Array.from(track_list);

audio.src = track_list[audio_index].path;
changeCoverTitleAuthor(audio_index);

const playBtn = document.querySelector('#play');
const playBtnCover = document.querySelector('#play_on_cover');

playBtn.onclick = play;
playBtnCover.onclick = play;
record_disk.onclick = showText;

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
        if (document.querySelector('.text.active')) { showText(); }
    } else {
        audio.play();
        playBtn.classList.toggle('active');
        document.getElementById('play-svg').href.baseVal = `sprite.svg#pause`;
        record_disk.classList.toggle('active');
    }
    RepeatIfNecessary();
    document.activeElement.blur();
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
    if (document.querySelector('.text.active')) { showText(); }

    document.activeElement.blur();
}

function next() {
    audio_index === track_list.length - 1 ? audio_index = 0 : ++audio_index;
    audio.src = track_list[audio_index].path;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    changeStopToPlayImg();
    changeCoverTitleAuthor(audio_index);
    if (document.querySelector('.text.active')) { showText(); }

    document.activeElement.blur();
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
    document.querySelector('.bgimg').style.backgroundImage = `url(${track_list[index].image})`;
    
    document.body.style.backgroundImage = `url(${track_list[index].image})`;
    document.body.style.color = track_list[index].textColor;
    document.querySelector('.mask').style.backgroundColor = track_list[index].textColor === '#fff' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)';
    document.body.style.setProperty('--svg-color', track_list[index].textColor);

    //ищем основной цвет

    //Так нельзя. А жаль((
    /*const fac = new FastAverageColor();
    let img = new Image();
    img.src = track_list[index].image;
    fac.getColorAsync(img)
        .then(color => {
            document.body.style.backgroundColor = color.rgba;
            document.body.style.color = color.isDark ? '#fff' : '#000';
            document.querySelector('.mask').style.backgroundColor = color.isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)';
            document.body.style.setProperty('--svg-color', color.isDark ? '#fff' : '#000');
            document.footer.style.setProperty('--svg-color', color.isDark ? '#fff' : '#000');
        })
        .catch(e => {
            console.log(e);
        });*/

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

        document.activeElement.blur();
    })
}

infoWindow.addEventListener("click", function (e) {
    document.body.classList.remove('_lock');
    infoBtn.classList.remove('_active');
    infoWindow.classList.remove('_active');
})

function showText() {
    if (document.querySelector('.text.active')) {
        document.querySelector('.text').classList.remove('active');
        document.querySelector('#text').textContent = '';
    } else {
        document.querySelector('.text').classList.toggle('active');
        document.querySelector('#text').textContent = track_list[audio_index].text;
    }
    document.activeElement.blur();
}
