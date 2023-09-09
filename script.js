// When the webpage content is fully loaded...
document.addEventListener("DOMContentLoaded", function () {
    // Get the HTML elements where we want to display the day and time
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Function to figure out what day it is
    function getCurrentDayOfWeek() {
        // Create a list of days of the week
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // Get today's date
        const today = new Date();
        // Find the corresponding day of the week and return it
        return daysOfWeek[today.getUTCDay()];
    }

    // Function to get the current UTC time
    function getCurrentUTCTime() {
        // Get the current time
        const now = new Date();
        // Defining how I want to format the time
        const options = { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
        };
        // Formating the time and return it as a string
        return now.toLocaleTimeString('en-US', options);
    }

    // Updating the HTML elements with the day and time information
    currentDayElement.textContent = getCurrentDayOfWeek();
    currentUTCTimeElement.textContent = getCurrentUTCTime();
});