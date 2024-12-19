document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('time-display');
    const fetchTimeButton = document.getElementById('fetch-time');

    fetchTimeButton.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/time');
            const data = await response.json();
            timeDisplay.textContent = `Current Time: ${data.currentTime}`;
        } catch (error) {
            timeDisplay.textContent = 'Error fetching time';
        }
    });
});