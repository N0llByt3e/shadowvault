


//countdown
let countdown = 1;
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    countdownElement.textContent = countdown;
    if (countdown <= 0) {
        window.location.href = "/home/home.html"; 
    } else {
        countdown--;
        setTimeout(updateCountdown, 1000);
    }
}
updateCountdown();

document.getElementById('welcomeButton').addEventListener('click', function() {
    alert("Hey don't click me again.");
})
