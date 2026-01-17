// Navigation Sound Effect
function playNavSound() {
    try {
        const audio = new Audio('audio/sifi click 2.wav');
        audio.volume = 0.7;
        audio.play();
    } catch(error) {
        console.log('Audio error:', error);
    }
}
