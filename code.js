// script.js

// Get a reference to the button by its ID
const bot = document.getElementById('bot');
const player = document.getElementById('player');
const how = document.getElementById('how');

// Add a click event listener to the button
bot.addEventListener('click', function () {
    alert('bot Clicked');
});
player.addEventListener('click', function () {
    alert('player Clicked');
});
how.addEventListener('click', function () {
    alert('how Clicked');
});