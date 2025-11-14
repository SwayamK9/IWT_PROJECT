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
let currentSong = null;

function playSong(title, artist, coverUrl) {
    currentSong = { title, artist, coverUrl };
    
    document.getElementById('trackTitle').textContent = title;
    document.getElementById('trackArtist').textContent = artist;
    document.getElementById('fullPlayerTitle').textContent = title;
    document.getElementById('fullPlayerArtist').textContent = artist;
    
    if (coverUrl) {
        document.getElementById('miniCover').innerHTML = `<img src="${coverUrl}" alt="Cover">`;
        document.getElementById('fullPlayerCover').src = coverUrl;
    }
    
    // Update like button state
    updateLikeButton();
    
    isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸️';
    document.getElementById('fullPlayBtn').textContent = '⏸️';
    currentProgress = 0;
    updateProgress();
    startProgress();
}

function togglePlay() {
    isPlaying = !isPlaying;
    const playIcon = isPlaying ? '⏸️' : '▶️';
    document.getElementById('playBtn').textContent = playIcon;
    document.getElementById('fullPlayBtn').textContent = playIcon;
    
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
    document.getElementById('fullProgressFill').style.width = percentage + '%';
    document.getElementById('currentTime').textContent = formatTime(currentProgress);
    document.getElementById('totalTime').textContent = formatTime(songDuration);
    document.getElementById('fullCurrentTime').textContent = formatTime(currentProgress);
    document.getElementById('fullTotalTime').textContent = formatTime(songDuration);
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
    document.getElementById('fullVolumeFill').style.width = percentage + '%';
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

// Full Screen Player
function openFullPlayer() {
    document.getElementById('fullPlayer').classList.add('active');
}

function closeFullPlayer() {
    document.getElementById('fullPlayer').classList.remove('active');
}

// Like Functionality
let likedSongs = [];

function toggleLike() {
    if (!currentSong) {
        alert('Please play a song first!');
        return;
    }
    
    const songKey = `${currentSong.title}-${currentSong.artist}`;
    const index = likedSongs.findIndex(s => `${s.title}-${s.artist}` === songKey);
    
    if (index > -1) {
        // Unlike
        likedSongs.splice(index, 1);
    } else {
        // Like
        likedSongs.push(currentSong);
    }
    
    updateLikeButton();
    updateLikedSongsCount();
    saveToLocalStorage();
}

function updateLikeButton() {
    if (!currentSong) return;
    
    const songKey = `${currentSong.title}-${currentSong.artist}`;
    const isLiked = likedSongs.some(s => `${s.title}-${s.artist}` === songKey);
    
    const likeIcon = isLiked ? '❤️' : '🤍';
    document.getElementById('likeIcon').textContent = likeIcon;
    document.getElementById('miniLikeIcon').textContent = likeIcon;
}

function updateLikedSongsCount() {
    const count = likedSongs.length;
    document.getElementById('likedSongsStatCount').textContent = count;
    document.getElementById('likedSongsCount').textContent = `${count} songs`;
}

// Playlist Management
let userPlaylists = [];
let songToAdd = null;

function showPlaylistModal() {
    if (!currentSong) {
        alert('Please play a song first!');
        return;
    }
    
    songToAdd = currentSong;
    renderPlaylistsList();
    document.getElementById('playlistModal').style.display = 'block';
}

function closePlaylistModal() {
    document.getElementById('playlistModal').style.display = 'none';
    songToAdd = null;
}

function showCreatePlaylist() {
    closePlaylistModal();
    document.getElementById('createPlaylistModal').style.display = 'block';
}

function closeCreatePlaylist() {
    document.getElementById('createPlaylistModal').style.display = 'none';
    document.getElementById('playlistName').value = '';
}

function handleCreatePlaylist(event) {
    event.preventDefault();
    
    const playlistName = document.getElementById('playlistName').value.trim();
    
    if (playlistName) {
        const newPlaylist = {
            id: Date.now(),
            name: playlistName,
            songs: songToAdd ? [songToAdd] : []
        };
        
        userPlaylists.push(newPlaylist);
        updatePlaylistsCount();
        renderUserPlaylists();
        saveToLocalStorage();
        closeCreatePlaylist();
        
        if (songToAdd) {
            alert(`"${songToAdd.title}" added to "${playlistName}"!`);
            songToAdd = null;
        } else {
            alert(`Playlist "${playlistName}" created successfully!`);
        }
    }
}

function renderPlaylistsList() {
    const container = document.getElementById('playlistsList');
    
    if (userPlaylists.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No playlists yet. Create one!</p>';
        return;
    }
    
    container.innerHTML = userPlaylists.map(playlist => `
        <div class="playlist-option" onclick="addSongToPlaylist(${playlist.id})">
            <div class="playlist-option-name">${playlist.name}</div>
            <div class="playlist-option-count">${playlist.songs.length} songs</div>
        </div>
    `).join('');
}

function addSongToPlaylist(playlistId) {
    if (!songToAdd) return;
    
    const playlist = userPlaylists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    // Check if song already exists
    const songKey = `${songToAdd.title}-${songToAdd.artist}`;
    const exists = playlist.songs.some(s => `${s.title}-${s.artist}` === songKey);
    
    if (exists) {
        alert(`"${songToAdd.title}" is already in "${playlist.name}"!`);
    } else {
        playlist.songs.push(songToAdd);
        alert(`"${songToAdd.title}" added to "${playlist.name}"!`);
        renderUserPlaylists();
        saveToLocalStorage();
    }
    
    closePlaylistModal();
}

function renderUserPlaylists() {
    const container = document.getElementById('userPlaylistsContainer');
    
    if (userPlaylists.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No playlists yet. Add songs to create playlists!</p>';
        return;
    }
    
    container.innerHTML = userPlaylists.map(playlist => `
        <div class="playlist-item" onclick="togglePlaylistSongs(${playlist.id})">
            <div class="playlist-header">
                <div class="playlist-name">${playlist.name}</div>
                <div class="playlist-count">${playlist.songs.length} songs</div>
            </div>
            <div class="playlist-songs" id="playlist-songs-${playlist.id}">
                ${playlist.songs.map(song => `
                    <div class="playlist-song">${song.title} - ${song.artist}</div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function togglePlaylistSongs(playlistId) {
    const songsDiv = document.getElementById(`playlist-songs-${playlistId}`);
    if (songsDiv) {
        songsDiv.classList.toggle('show');
    }
}

function updatePlaylistsCount() {
    document.getElementById('playlistsCount').textContent = userPlaylists.length;
}

// Login System with LocalStorage
let isLoggedIn = false;
let currentUser = null;

window.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
});

function saveToLocalStorage() {
    if (currentUser) {
        localStorage.setItem('vibestreamUser', JSON.stringify({
            ...currentUser,
            theme: window.currentTheme || 'default',
            likedSongs: likedSongs,
            playlists: userPlaylists
        }));
    }
}

function loadFromLocalStorage() {
    const savedUser = localStorage.getItem('vibestreamUser');
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        currentUser = userData;
        isLoggedIn = true;
        
        // Load liked songs and playlists
        likedSongs = userData.likedSongs || [];
        userPlaylists = userData.playlists || [];
        
        updateProfilePage();
        updateLikedSongsCount();
        updatePlaylistsCount();
        renderUserPlaylists();
        
        // Apply saved theme
        if (userData.theme && userData.theme !== 'default') {
            body.classList.add(`theme-${userData.theme}`);
            const themeBtn = document.querySelector(`[data-theme="${userData.theme}"]`);
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
        document.getElementById('profilePlaylists').style.display = 'block';
        
        updateLikedSongsCount();
        updatePlaylistsCount();
        renderUserPlaylists();
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        isLoggedIn = false;
        currentUser = null;
        likedSongs = [];
        userPlaylists = [];
        localStorage.removeItem('vibestreamUser');
        
        document.getElementById('profileName').textContent = 'Guest User';
        document.getElementById('profileEmail').textContent = 'Please login to continue';
        document.getElementById('mainLoginBtn').style.display = 'inline-block';
        document.getElementById('profileStats').style.display = 'none';
        document.getElementById('profileActions').style.display = 'none';
        document.getElementById('profileActivity').style.display = 'none';
        document.getElementById('profilePlaylists').style.display = 'none';
        
        body.className = '';
        themeButtons.forEach(btn => btn.classList.remove('active'));
        
        updateLikedSongsCount();
        updatePlaylistsCount();
        
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
        currentUser.settings = {
            publicProfile: document.getElementById('publicProfile').checked,
            showActivity: document.getElementById('showActivity').checked,
            allowFollowers: document.getElementById('allowFollowers').checked,
            emailNotif: document.getElementById('emailNotif').checked,
            pushNotif: document.getElementById('pushNotif').checked
        };
        
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
        likedSongs = [];
        userPlaylists = [];
        closeAccountSettings();
        
        document.getElementById('profileName').textContent = 'Guest User';
        document.getElementById('profileEmail').textContent = 'Please login to continue';
        document.getElementById('mainLoginBtn').style.display = 'inline-block';
        document.getElementById('profileStats').style.display = 'none';
        document.getElementById('profileActions').style.display = 'none';
        document.getElementById('profileActivity').style.display = 'none';
        document.getElementById('profilePlaylists').style.display = 'none';
        
        updateLikedSongsCount();
        updatePlaylistsCount();
        
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
    const playlistModal = document.getElementById('playlistModal');
    const createPlaylistModal = document.getElementById('createPlaylistModal');
    
    if (event.target === loginModal) {
        closeLoginPage();
    }
    if (event.target === editModal) {
        closeEditProfile();
    }
    if (event.target === settingsModal) {
        closeAccountSettings();
    }
    if (event.target === playlistModal) {
        closePlaylistModal();
    }
    if (event.target === createPlaylistModal) {
        closeCreatePlaylist();
    }
}

window.currentTheme = 'default';
