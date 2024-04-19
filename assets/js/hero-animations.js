// Wave animation code
function waveHand() {
  const waveElement = document.querySelector('#hi-there .wave');
  waveElement.classList.add('wave-animate');
  setTimeout(() => {
    waveElement.classList.remove('wave-animate');
    scheduleNextWave();
  }, 2000); // Change this number to adjust the duration of the wave animation
}

function scheduleNextWave() {
  const interval = getRandomInterval();
  setTimeout(() => {
    waveHand();
  }, interval);
}

function getRandomInterval() {
  const minInterval = 15000; // 15 seconds
  const maxInterval = 100000; // 100 seconds
  return Math.floor(Math.random() * (maxInterval - minInterval + 1) + minInterval);
}

// Typewriter effect code
var textArray = [
  "design for a more human-centred world.",
  "create meaningful experiences for people.",
  "build solutions that meet real-world needs.",
  "innovate with empathy and understanding.",
  "develop human-centred approaches to service delivery.",
  "design for positive social impact.",
  "improve accessibility and inclusion in public spaces.",
  "meet the needs of their communities.",
  "design services that are easy to understand and use."
];
var currentIndex = 0;
var textBackground = document.getElementById("text-background");
var currentText = '';
var currentTextIndex = 0;
var isDeleting = false;
var writeSpeed = 50; // Typing speed in milliseconds
var deleteSpeed = 25; // Deleting speed in milliseconds

function animateText() {
  var newText = textArray[currentIndex];
  var textDiff = currentText.length - newText.length;

  if (isDeleting) {
    currentText = currentText.slice(0, -1);
    currentTextIndex--;
  } else {
    currentText = newText.substring(0, currentTextIndex + 1);
    currentTextIndex++;
  }

  textBackground.textContent = currentText;

  if (!isDeleting && currentText === newText) {
    isDeleting = true;
    setTimeout(function() {
      requestAnimationFrame(animateText);
    }, 1500);
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % textArray.length;
    setTimeout(function() {
      requestAnimationFrame(animateText);
    }, writeSpeed);
  } else if (isDeleting) {
    setTimeout(function() {
      requestAnimationFrame(animateText);
    }, deleteSpeed);
  } else {
    setTimeout(function() {
      requestAnimationFrame(animateText);
    }, writeSpeed);
  }
}

// Start the animations
document.addEventListener('DOMContentLoaded', () => {
  waveHand();
  animateText();
});