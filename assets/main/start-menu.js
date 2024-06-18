document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');

    if (startButton && startMenu) {
        console.log('Elements found');
        
        startButton.addEventListener('click', function () {
            console.log('Start button clicked');
            if (startMenu.style.display === 'none' || startMenu.style.display === '') {
                startMenu.style.display = 'block';
            } else {
                startMenu.style.display = 'none';
            }
        });
    } else {
        console.log('Elements not found');
    }
});
