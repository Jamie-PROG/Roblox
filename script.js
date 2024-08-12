document.addEventListener('DOMContentLoaded', () => {
    const musicControl = document.getElementById('music-control');
    const musicIcon = document.getElementById('music-icon');
    const backgroundMusic = document.getElementById('background-music');
    let isPlaying = false;

    // Attempt to load and play music on user interaction with the page
    function startMusic() {
        backgroundMusic.play().then(() => {
            isPlaying = true;
            musicIcon.src = 'music-on-icon.png';
        }).catch(() => {
            console.log("Autoplay prevented. User interaction is required to play the music.");
        });
    }

    // Play music automatically once the user interacts with the page
    document.body.addEventListener('click', startMusic, { once: true });

    // Toggle music on click
    musicControl.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicIcon.src = 'music-off-icon.png';
        } else {
            backgroundMusic.play();
            musicIcon.src = 'music-on-icon.png';
        }
        isPlaying = !isPlaying;
    });
});
