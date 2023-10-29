function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.innerHTML = `  ${hours}  :  ${minutes}  :  ${seconds}`;
}

setInterval(updateTime, 1000); // Update the time every second

updateTime(); // Initial call to display the time

