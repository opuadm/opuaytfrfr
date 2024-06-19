document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.start-button');
    const startMenu = document.querySelector('.start-menu');

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

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.taskbarbutton');
    const startMenu = document.querySelector('.taskbar');

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
