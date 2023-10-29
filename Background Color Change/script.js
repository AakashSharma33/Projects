document.addEventListener('DOMContentLoaded', function () {
    const changeColorButton = document.getElementById('change-color-button');
    const colors = ['#3498db', '#e74c3c', '#27ae60', '#f1c40f'];

    changeColorButton.addEventListener('click', function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});
