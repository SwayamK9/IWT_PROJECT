:root {
    --primary: #32a88d;
    --secondary: #21808d;
    --background: #0f0f0f;
    --surface: #1a1a1a;
    --text: #ffffff;
    --text-secondary: #b3b3b3;
    --accent: #1db954;
    --card-bg: #282828;
}

.theme-romance {
    --primary: #ffb3d9;
    --secondary: #ff85c0;
    --background: linear-gradient(135deg, #ffeef8 0%, #ffe0f0 100%);
    --surface: #fff0f8;
    --text: #5a2e4a;
    --text-secondary: #8b5a7a;
    --accent: #ff69b4;
    --card-bg: #ffe6f2;
}

.theme-hiphop {
    --primary: #ffd700;
    --secondary: #00d4ff;
    --background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    --surface: #1f1f1f;
    --text: #ffffff;
    --text-secondary: #cccccc;
    --accent: #ffd700;
    --card-bg: #2a2a2a;
}

.theme-rock {
    --primary: #39ff14;
    --secondary: #dc143c;
    --background: linear-gradient(135deg, #0d0015 0%, #1a0a20 100%);
    --surface: #1a0f25;
    --text: #ffffff;
    --text-secondary: #b3b3b3;
    --accent: #39ff14;
    --card-bg: #251a30;
}

.theme-classical {
    --primary: #d4af37;
    --secondary: #8b7355;
    --background: linear-gradient(135deg, #fffef0 0%, #f5f0e6 100%);
    --surface: #faf7f0;
    --text: #3e2723;
    --text-secondary: #6d4c41;
    --accent: #d4af37;
    --card-bg: #f9f5eb;
}

.theme-edm {
    --primary: #ff10f0;
    --secondary: #00f0ff;
    --background: linear-gradient(135deg, #0a0014 0%, #1a0028 100%);
    --surface: #1a0a28;
    --text: #ffffff;
    --text-secondary: #e0b3ff;
    --accent: #ff10f0;
    --card-bg: #2a1a3a;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--background);
    color: var(--text);
    transition: all 0.5s ease;
    min-height: 100vh;
}

header {
    background: var(--surface);
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    position: sticky;
    top: 0;
    z-index: 100;
    transition: all 0.5s ease;
}

.header-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary);
    transition: color 0.5s ease;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

nav a:hover, nav a.active {
    color: var(--primary);
}

.theme-selector {
    background: var(--surface);
    padding: 2rem;
    margin: 2rem auto;
    max-width: 1400px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.5s ease;
}

.theme-selector h2 {
    margin-bottom: 1.5rem;
    color: var(--text);
    text-align: center;
}

.theme-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.theme-btn {
    background: var(--card-bg);
    border: 2px solid var(--primary);
    padding: 1.5rem 2rem;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    min-width: 150px;
}

.theme-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.theme-btn.active {
    background: var(--primary);
    color: var(--background);
}

.theme-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.theme-name {
    font-weight: bold;
    color: var(--text);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    padding-bottom: 120px;
}

.page-section {
    display: none;
}

.page-section.active {
    display: block;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--text);
}

.music-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.music-card {
    background: var(--card-bg);
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.music-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.album-cover {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    margin-bottom: 0.75rem;
    object-fit: cover;
}

.music-title {
    font-weight: bold;
    color: var(--text);
    margin-bottom: 0.25rem;
    font-size: 0.95rem;
}

.music-artist {
    font-size: 0.85rem;
    color: var(--text-secondary);
}

/* Profile Styles */
.profile-container {
    max-width: 900px;
    margin: 0 auto;
}

.profile-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.5s ease;
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.profile-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--primary);
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-info {
    flex: 1;
}

.profile-name {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: var(--text);
}

.profile-email {
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.login-btn {
    background: var(--primary);
    color: var(--background);
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.profile-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: var(--surface);
    border-radius: 8px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary);
    margin-bottom: 0.25rem;
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.profile-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.profile-btn {
    flex: 1;
    min-width: 150px;
    padding: 0.75rem 1.5rem;
    background: var(--surface);
    color: var(--text);
    border: 2px solid var(--primary);
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.profile-btn:hover {
    background: var(--primary);
    color: var(--background);
    transform: translateY(-2px);
}

.logout-btn-profile {
    background: transparent;
    border-color: #dc143c;
    color: #dc143c;
}

.logout-btn-profile:hover {
    background: #dc143c;
    color: white;
}

/* Profile Playlists */
.profile-playlists {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.5s ease;
}

.playlists-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.playlist-item {
    background: var(--surface);
    padding: 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.playlist-item:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.playlist-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.playlist-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text);
}

.playlist-count {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.playlist-songs {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--card-bg);
    display: none;
}

.playlist-songs.show {
    display: block;
}

.playlist-song {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background: var(--card-bg);
    border-radius: 4px;
    font-size: 0.9rem;
    color: var(--text);
}

.profile-activity {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.5s ease;
}

.activity-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.activity-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--surface);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.activity-item:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.activity-icon {
    font-size: 2rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    border-radius: 50%;
}

.activity-details {
    flex: 1;
}

.activity-text {
    color: var(--text);
    margin-bottom: 0.25rem;
}

.activity-time {
    font-size: 0.85rem;
    color: var(--text-secondary);
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s ease;
    overflow-y: auto;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-content {
    background: var(--surface);
    margin: 2% auto;
    padding: 2rem;
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    position: relative;
    animation: slideDown 0.3s ease;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    max-height: 90vh;
    overflow-y: auto;
}

@keyframes slideDown {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.close-btn {
    color: var(--text-secondary);
    float: right;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
    line-height: 1;
}

.close-btn:hover {
    color: var(--primary);
}

.login-container h2 {
    color: var(--primary);
    margin-bottom: 0.5rem;
    text-align: center;
}

.login-subtitle {
    text-align: center;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text);
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    background: var(--card-bg);
    border: 2px solid var(--surface);
    border-radius: 8px;
    color: var(--text);
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-group textarea {
    resize: vertical;
    min-height: 80px;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(50, 168, 141, 0.1);
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
}

.remember-me {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: var(--text);
}

.remember-me input {
    cursor: pointer;
}

.forgot-password {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

.forgot-password:hover {
    color: var(--accent);
}

.submit-btn {
    width: 100%;
    padding: 0.75rem;
    background: var(--primary);
    color: var(--background);
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.divider {
    text-align: center;
    margin: 1.5rem 0;
    position: relative;
}

.divider::before,
.divider::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: var(--text-secondary);
}

.divider::before {
    left: 0;
}

.divider::after {
    right: 0;
}

.divider span {
    background: var(--surface);
    padding: 0 1rem;
    color: var(--text-secondary);
}

.social-login {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.social-btn {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--text-secondary);
    border-radius: 8px;
    background: transparent;
    color: var(--text);
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.social-btn:hover {
    background: var(--card-bg);
    transform: translateY(-2px);
}

.signup-link {
    text-align: center;
    color: var(--text-secondary);
}

.signup-link a {
    color: var(--primary);
    text-decoration: none;
    font-weight: bold;
}

.signup-link a:hover {
    text-decoration: underline;
}

/* Settings Section Styles */
.settings-section {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--surface);
}

.settings-section:last-child {
    border-bottom: none;
}

.settings-section h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.setting-item {
    margin-bottom: 1rem;
    padding: 0.75rem;
    background: var(--card-bg);
    border-radius: 8px;
}

/* Playlists List in Modal */
.playlists-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-height: 400px;
    overflow-y: auto;
}

.playlist-option {
    padding: 1rem;
    background: var(--card-bg);
    border: 2px solid var(--surface);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.playlist-option:hover {
    border-color: var(--primary);
    transform: translateX(5px);
}

.playlist-option-name {
    font-weight: bold;
    color: var(--text);
}

.playlist-option-count {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Full Screen Player */
.full-player {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    background: var(--surface);
    z-index: 999;
    overflow: hidden;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.full-player.active {
    height: 100vh;
}

.full-player-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
}

.close-player-btn {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background: var(--card-bg);
    border: none;
    color: var(--text);
    font-size: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-player-btn:hover {
    background: var(--primary);
    transform: scale(1.1);
}

.full-player-cover {
    width: 300px;
    height: 300px;
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}

.full-player-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.full-player-info {
    text-align: center;
    margin-bottom: 2rem;
    width: 100%;
}

.full-player-info h2 {
    font-size: 2rem;
    color: var(--text);
    margin-bottom: 0.5rem;
}

.full-player-info p {
    font-size: 1.2rem;
    color: var(--text-secondary);
}

.full-player-progress {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.full-player-controls {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: center;
}

.full-control-btn {
    background: transparent;
    border: none;
    color: var(--text);
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.5rem;
}

.full-control-btn:hover {
    color: var(--primary);
    transform: scale(1.1);
}

.play-btn-full {
    font-size: 3rem;
    background: var(--primary);
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.full-player-volume {
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* Player Bar Styles */
.player-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--surface);
    padding: 1rem 2rem;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
    transition: all 0.5s ease;
    cursor: pointer;
    z-index: 99;
}

.player-bar:hover {
    background: var(--card-bg);
}

.player-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.now-playing {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 200px;
}

.mini-cover {
    width: 50px;
    height: 50px;
    background: var(--primary);
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
}

.mini-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.track-info {
    flex: 1;
}

.track-title {
    font-weight: bold;
    color: var(--text);
    font-size: 0.9rem;
}

.track-artist {
    font-size: 0.8rem;
    color: var(--text-secondary);
}

.player-controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.control-btn {
    background: transparent;
    border: none;
    color: var(--text);
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.5rem;
}

.control-btn:hover {
    color: var(--primary);
    transform: scale(1.1);
}

.play-btn {
    font-size: 2rem;
    background: var(--primary);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.volume-control {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 150px;
    justify-content: flex-end;
}

.progress-section {
    flex: 2;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.time-display {
    font-size: 0.85rem;
    color: var(--text-secondary);
    min-width: 45px;
}

.progress-bar {
    flex: 1;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 3px;
    width: 0%;
    transition: width 0.3s ease;
}

.progress-bar:hover .progress-fill {
    background: var(--accent);
}

.volume-slider {
    width: 100px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.volume-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 3px;
    width: 70%;
    transition: width 0.3s ease;
}

.volume-slider:hover .volume-fill {
    background: var(--accent);
}

.welcome-banner {
    background: var(--card-bg);
    padding: 3rem 2rem;
    border-radius: 12px;
    text-align: center;
    margin-bottom: 2rem;
    transition: all 0.5s ease;
}

.welcome-banner h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary);
}

.welcome-banner p {
    font-size: 1.2rem;
    color: var(--text-secondary);
}

/* Responsive Design */
@media (max-width: 768px) {
    nav ul {
        gap: 1rem;
        font-size: 0.9rem;
    }

    .theme-buttons {
        gap: 1rem;
    }

    .theme-btn {
        min-width: 120px;
        padding: 1rem;
    }

    .music-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1rem;
    }

    .player-content {
        flex-wrap: wrap;
        gap: 1rem;
    }

    .now-playing {
        width: 100%;
    }

    .progress-section {
        width: 100%;
        order: -1;
    }

    .player-controls {
        flex: 1;
    }

    .volume-control {
        flex: 1;
    }

    .profile-header {
        flex-direction: column;
        text-align: center;
    }

    .profile-stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .profile-actions {
        flex-direction: column;
    }

    .welcome-banner h1 {
        font-size: 2rem;
    }

    .welcome-banner p {
        font-size: 1rem;
    }

    .modal-content {
        width: 95%;
        padding: 1.5rem;
    }

    .full-player-cover {
        width: 250px;
        height: 250px;
    }

    .full-player-info h2 {
        font-size: 1.5rem;
    }

    .full-player-controls {
        gap: 1rem;
    }

    .full-control-btn {
        font-size: 1.5rem;
    }

    .play-btn-full {
        width: 60px;
        height: 60px;
        font-size: 2.5rem;
    }
}
