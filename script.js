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

        function playSong(title, artist, coverUrl) {
            document.getElementById('trackTitle').textContent = title;
            document.getElementById('trackArtist').textContent = artist;

            if (coverUrl) {
                document.getElementById('miniCover').innerHTML = `<img src="${coverUrl}" alt="${title}">`;
            }

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

        const allSongs = [
            {title: 'Blinding Lights', artist: 'The Weeknd', cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop', duration: 200},
            {title: 'Perfect', artist: 'Ed Sheeran', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop', duration: 263},
            {title: 'Shallow', artist: 'Lady Gaga & Bradley Cooper', cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=100&h=100&fit=crop', duration: 216},
            {title: 'First Person Shooter', artist: 'Drake ft. J. Cole', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop', duration: 248},
            {title: 'Like That', artist: 'Future, Metro Boomin, Kendrick Lamar', cover: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop', duration: 267},
            {title: 'Bones', artist: 'Imagine Dragons', cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=100&h=100&fit=crop', duration: 164},
            {title: 'The Emptiness Machine', artist: 'Linkin Park', cover: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=100&h=100&fit=crop', duration: 189},
            {title: 'Clair de Lune', artist: 'Claude Debussy', cover: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=100&h=100&fit=crop', duration: 300},
            {title: 'Für Elise', artist: 'Ludwig van Beethoven', cover: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=100&h=100&fit=crop', duration: 175},
            {title: 'Destiny', artist: 'Alesso & SACHA', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop', duration: 190},
            {title: 'Ocean', artist: 'Calvin Harris & Jessie Reyez', cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop', duration: 207}
        ];

        let currentSongIndex = 0;

        function previousTrack() {
            currentSongIndex = (currentSongIndex - 1 + allSongs.length) % allSongs.length;
            const song = allSongs[currentSongIndex];
            songDuration = song.duration;
            playSong(song.title, song.artist, song.cover);
        }

        function nextTrack() {
            currentSongIndex = (currentSongIndex + 1) % allSongs.length;
            const song = allSongs[currentSongIndex];
            songDuration = song.duration;
            playSong(song.title, song.artist, song.cover);
        }

        window.currentTheme = 'default';
