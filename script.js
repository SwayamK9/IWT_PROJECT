// Theme selection
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
        
        // Save theme preference
        if (isLoggedIn) {
            saveToLocalStorage();
        }
    });
});

// Navigation
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

// Music Player
let isPlaying = false;
let currentProgress = 0;
let songDuration = 225;
let progressInterval;

function playSong(title, artist, coverUrl) {
    document.getElementById('trackTitle').textContent = title;
    document.getElementById('trackArtist').textContent = artist;
    
    if (coverUrl) {
        document.getElementById('miniCover').innerHTML = `<img src="${coverUrl}" alt="Cover">`;
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

// Login System with LocalStorage
let isLoggedIn = false;
let currentUser = null;

// Load user data from localStorage on page load
window.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
});

function saveToLocalStorage() {
    if (currentUser) {
        localStorage.setItem('vibestreamUser', JSON.stringify({
            ...currentUser,
            theme: window.currentTheme || 'default'
        }));
    }
}

function loadFromLocalStorage() {
    const savedUser = localStorage.getItem('vibestreamUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        isLoggedIn = true;
        updateProfilePage();
        
        // Apply saved theme
        if (currentUser.theme && currentUser.theme !== 'default') {
            body.classList.add(`theme-${currentUser.theme}`);
            const themeBtn = document.querySelector(`[data-theme="${currentUser.theme}"]`);
            if (themeBtn) {
                themeButtons.forEach(btn => btn.classList.remove('active'));
                themeBtn.classList.add('active');
            }
        }
    }
}

function showLoginPage() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginPage() {
    document.getElementById('loginModal').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        currentUser = {
            name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
            email: email,
            bio: 'Music lover and Vibestream enthusiast',
            location: 'Music City',
            settings: {
                publicProfile: true,
                showActivity: true,
                allowFollowers: true,
                emailNotif: true,
                pushNotif: true
            }
        };
        
        isLoggedIn = true;
        saveToLocalStorage();
        updateProfilePage();
        closeLoginPage();
        
        alert('Login successful! Welcome to Vibestream.');
        
        // Redirect to home
        navLinks.forEach(l => l.classList.remove('active'));
        navLinks[0].classList.add('active');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById('home').classList.add('active');
    } else {
        alert('Please enter valid email and password!');
    }
}

function updateProfilePage() {
    if (isLoggedIn && currentUser) {
        document.getElementById('profileName').textContent = currentUser.name;
        document.getElementById('profileEmail').textContent = currentUser.email;
        document.getElementById('mainLoginBtn').style.display = 'none';
        document.getElementById('profileStats').style.display = 'grid';
        document.getElementById('profileActions').style.display = 'flex';
        document.getElementById('profileActivity').style.display = 'block';
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        isLoggedIn = false;
        currentUser = null;
        localStorage.removeItem('vibestreamUser');
        
        document.getElementById('profileName').textContent = 'Guest User';
        document.getElementById('profileEmail').textContent = 'Please login to continue';
        document.getElementById('mainLoginBtn').style.display = 'inline-block';
        document.getElementById('profileStats').style.display = 'none';
        document.getElementById('profileActions').style.display = 'none';
        document.getElementById('profileActivity').style.display = 'none';
        
        // Reset theme
        body.className = '';
        themeButtons.forEach(btn => btn.classList.remove('active'));
        
        alert('You have been logged out successfully!');
    }
}

// Edit Profile Functions
function showEditProfile() {
    if (currentUser) {
        document.getElementById('editName').value = currentUser.name;
        document.getElementById('editEmail').value = currentUser.email;
        document.getElementById('editBio').value = currentUser.bio || '';
        document.getElementById('editLocation').value = currentUser.location || '';
    }
    document.getElementById('editProfileModal').style.display = 'block';
}

function closeEditProfile() {
    document.getElementById('editProfileModal').style.display = 'none';
}

function handleEditProfile(event) {
    event.preventDefault();
    
    if (currentUser) {
        currentUser.name = document.getElementById('editName').value;
        currentUser.email = document.getElementById('editEmail').value;
        currentUser.bio = document.getElementById('editBio').value;
        currentUser.location = document.getElementById('editLocation').value;
        
        saveToLocalStorage();
        updateProfilePage();
        closeEditProfile();
        
        alert('Profile updated successfully!');
    }
}

// Account Settings Functions
function showAccountSettings() {
    if (currentUser && currentUser.settings) {
        document.getElementById('publicProfile').checked = currentUser.settings.publicProfile;
        document.getElementById('showActivity').checked = currentUser.settings.showActivity;
        document.getElementById('allowFollowers').checked = currentUser.settings.allowFollowers;
        document.getElementById('emailNotif').checked = currentUser.settings.emailNotif;
        document.getElementById('pushNotif').checked = currentUser.settings.pushNotif;
    }
    document.getElementById('settingsModal').style.display = 'block';
}

function closeAccountSettings() {
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}

function handleAccountSettings(event) {
    event.preventDefault();
    
    if (currentUser) {
        // Update privacy settings
        currentUser.settings = {
            publicProfile: document.getElementById('publicProfile').checked,
            showActivity: document.getElementById('showActivity').checked,
            allowFollowers: document.getElementById('allowFollowers').checked,
            emailNotif: document.getElementById('emailNotif').checked,
            pushNotif: document.getElementById('pushNotif').checked
        };
        
        // Handle password change
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (currentPassword || newPassword || confirmPassword) {
            if (!currentPassword) {
                alert('Please enter your current password');
                return;
            }
            if (newPassword !== confirmPassword) {
                alert('New passwords do not match!');
                return;
            }
            if (newPassword.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }
            alert('Password changed successfully!');
        }
        
        saveToLocalStorage();
        closeAccountSettings();
        alert('Settings saved successfully!');
    }
}

function deleteAccount() {
    const confirmation = prompt('This action cannot be undone. Type "DELETE" to confirm:');
    if (confirmation === 'DELETE') {
        localStorage.removeItem('vibestreamUser');
        isLoggedIn = false;
        currentUser = null;
        closeAccountSettings();
        
        document.getElementById('profileName').textContent = 'Guest User';
        document.getElementById('profileEmail').textContent = 'Please login to continue';
        document.getElementById('mainLoginBtn').style.display = 'inline-block';
        document.getElementById('profileStats').style.display = 'none';
        document.getElementById('profileActions').style.display = 'none';
        document.getElementById('profileActivity').style.display = 'none';
        
        alert('Your account has been deleted.');
    } else if (confirmation !== null) {
        alert('Account deletion cancelled. Please type "DELETE" exactly to confirm.');
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const editModal = document.getElementById('editProfileModal');
    const settingsModal = document.getElementById('settingsModal');
    
    if (event.target === loginModal) {
        closeLoginPage();
    }
    if (event.target === editModal) {
        closeEditProfile();
    }
    if (event.target === settingsModal) {
        closeAccountSettings();
    }
}

window.currentTheme = 'default';
