
Home
Travel
Academic
Sports
Library
C:\Users\ssmga\OneDrive\Documents\IWT\git\IWT_PROJECT>git init Reinitialized existing Git repository
separate and link html,css,js and remove comments
Project Goal & First Task with html,css,js Hello Team, Our project goal is to create a responsive mu
[https://youtu.be/eqjbltfx55Y?si=AknxSpj5AsOiM9uQ](https://youtu.be/eqjbltfx55Y?si=AknxSpj5AsOiM9uQ)
<SafeAreaView {ios?:style={{marginBottom:2}}:style{{marginBottom:3}}}> make this work
why className is not working on my reactnative app
I want to learn DSA with Java so how do I start with beginner level and I want to make it more pract
[https://github.com/SwayamK9/YOKOSO](https://github.com/SwayamK9/YOKOSO) how can i change the theme
how to push a project to github which is on my local device laptop
find the source that says Indian astrology economy is if 40 thousand crores and globally it's of 2.2
View All
Home
Discover
Spaces
Finance
Account
separate and link html,css,js and remove comments

separate and link html,css,js and remove comments
Python
Python

separate and remove comments

Perfect! I've successfully separated your updated Vibestream file with real album covers into three linked files and removed all comments.

​
Created Files:

    vibestream_real_covers.html (31,553 characters) - Clean HTML structure with proper links

    style.css (11,126 characters) - All styling rules without comments

    script.js (6,524 characters) - All JavaScript functionality without comments

What was done:

✅ Separated - Extracted all CSS from <style> tags into external style.css file
✅ Separated - Extracted all JavaScript from <script> tags into external script.js file
✅ Linked - Added <link rel="stylesheet" href="style.css"> to the HTML head
✅ Linked - Added <script src="script.js"></script> before closing </body> tag
✅ Cleaned - Removed all HTML comments (<!-- -->)
✅ Cleaned - Removed all CSS comments (/* */)
✅ Cleaned - Removed all JavaScript comments (// and /* */)
Usage:

Place all three files in the same directory and open vibestream_real_covers.html in your browser . The page will work perfectly with all the real album covers, themes, and functionality intact!
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
