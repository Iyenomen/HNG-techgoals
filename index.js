//  UTC time update
function updateUTCTime() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time-utc').textContent = `Time UTC: ${timeString}`;
}

// Update the time every second
setInterval(updateUTCTime, 1000);

// Initial call to display the time immediately on load
updateUTCTime();

// Weekdays update
function updateDay() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayString = days[now.getUTCDay()];
    document.getElementById('days').textContent = `Day: ${dayString}`;
}

window.onload = function() {
    updateDay();
    setInterval(updateDay, 86400000); 
}