const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

themeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        body.className = '';
        body.classList.add(`theme-${theme}`);
        themeButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        window.currentTheme = theme;
    });
});

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(page).classList.add('active');
    });
});

let isPlaying = false;
let currentProgress = 0;
let songDuration = 225;
let progressInterval;

function playSong(title, artist) {
    document.getElementById('trackTitle').textContent = title;
    document.getElementById('trackArtist').textContent = artist;
    const covers = ['🎵', '🎶', '🎧', '🎸', '🎹', '🎺', '🎻'];
    const randomCover = covers[Math.floor(Math.random() * covers.length)];
    document.getElementById('miniCover').textContent = randomCover;
    isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸️';
    currentProgress = 0;
    updateProgress();
    startProgress();
}

function togglePlay() {
    isPlaying = !isPlaying;
    document.getElementById('playBtn').textContent = isPlaying ? '⏸️' : '▶️';
    if (isPlaying) {
        startProgress();
    } else {
        stopProgress();
    }
}

function startProgress() {
    stopProgress();
    progressInterval = setInterval(() => {
        if (currentProgress < songDuration) {
            currentProgress += 1;
            updateProgress();
        } else {
            nextTrack();
        }
    }, 1000);
}

function stopProgress() {
    if (progressInterval) {
        clearInterval(progressInterval);
    }
}

function updateProgress() {
    const percentage = (currentProgress / songDuration) * 100;
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('currentTime').textContent = formatTime(currentProgress);
    document.getElementById('totalTime').textContent = formatTime(songDuration);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}

function seekTo(event) {
    const progressBar = event.currentTarget;
    const clickPosition = event.offsetX;
    const barWidth = progressBar.offsetWidth;
    const percentage = clickPosition / barWidth;
    currentProgress = Math.floor(percentage * songDuration);
    updateProgress();
}

function setVolume(event) {
    const volumeBar = event.currentTarget;
    const clickPosition = event.offsetX;
    const barWidth = volumeBar.offsetWidth;
    const percentage = (clickPosition / barWidth) * 100;
    document.getElementById('volumeFill').style.width = percentage + '%';
}

function previousTrack() {
    const titles = ['Yesterday', 'Memories', 'Throwback', 'Rewind'];
    const artists = ['Classic Band', 'Retro Artist', 'Old School'];
    songDuration = Math.floor(Math.random() * 120) + 150;
    playSong(
        titles[Math.floor(Math.random() * titles.length)],
        artists[Math.floor(Math.random() * artists.length)]
    );
}

function nextTrack() {
    const titles = ['Next Up', 'Coming Soon', 'Future Hits', 'New Wave'];
    const artists = ['Rising Star', 'New Artist', 'Fresh Talent'];
    songDuration = Math.floor(Math.random() * 120) + 150;
    playSong(
        titles[Math.floor(Math.random() * titles.length)],
        artists[Math.floor(Math.random() * artists.length)]
    );
}

window.currentTheme = 'default';
