const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const forwardBtn = document.getElementById('forward');
const backwardBtn = document.getElementById('backward');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');


const songs = [
    { title: "Steal My Girl", artist: "One Direction", src: "Steal My Girl.mp3", cover: "song1.jpg" },
    { title: "Bebe Bapu Mere Naal", artist: "Harsh Likhari", src: "Bebe Bapu Mere Naal.mp3", cover: "song2.jpg" },
    { title: "Shikayat", artist: "AUR", src: "Shikayat.mp3", cover: "S3.jpg" },
    { title: "Hor Mohabbat Ki Hondi", artist: "Zeeshan Ali, Star Shah", src: "Hor Mohabbat Ki Hondi.mp3", cover: "S4.jpg" },
    { title: "Taste", artist: "Sabrina Carpenter", src: "Sabrina-Carpenter-Taste.mp3", cover: "S5.png" }
];


let currentSongIndex = 0;

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function playSong() {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function togglePlayPause() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function forwardSong() {
    audio.currentTime += 10; // Skip forward 10 seconds
}

function backwardSong() {
    audio.currentTime -= 10; // Skip backward 10 seconds
}

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

//Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
forwardBtn.addEventListener('click', forwardSong);
backwardBtn.addEventListener('click', backwardSong);
audio.addEventListener('timeupdate', updateProgress);

// Load the first song
loadSong(songs[currentSongIndex]);