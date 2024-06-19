document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.start-button');
    const startMenu = document.querySelector('.start-menu');

    if (startButton && startMenu) {
        startButton.addEventListener('click', function () {
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
    const startButton = document.querySelector('.toggle1');
    const startMenu = document.querySelector('.taskbar');

    if (startButton && startMenu) {
        startButton.addEventListener('click', function () {
            if (startMenu.style.display === 'none' || startMenu.style.display === '') {
                startMenu.style.display = 'flex';
            } else {
                startMenu.style.display = 'none';
            }
        });
    } else {
        console.log('Elements not found');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.toggle2');
    const startMenu = document.querySelector('.taskbar');

    if (startButton && startMenu) {
        startButton.addEventListener('click', function () {
            if (startMenu.style.display === 'none' || startMenu.style.display === '') {
                startMenu.style.display = 'flex';
            } else {
                startMenu.style.display = 'none';
            }
        });
    } else {
        console.log('Elements not found');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.toggle2');
    const startMenu = document.querySelector('.start-menu');

    if (startButton && startMenu) {
        startButton.addEventListener('click', function () {
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
