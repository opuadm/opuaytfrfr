document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');

    startButton.addEventListener('click', function () {
        if (startMenu.style.display === 'none' || startMenu.style.display === '') {
            startMenu.style.display = 'block';
        } else {
            startMenu.style.display = 'none';
        }
    });
});
