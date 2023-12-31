// JavaScript code to change the text dynamically
const greetings = ["Hello", "Jambo", "Shikwamo", "Wendete", "Ûvoo waku", "Ebariba", "Mugie","Chamgei", "Sopa"];
let currentGreetingIndex = 0;
const h1Element = document.querySelector('#greeting');

function changeGreeting() {
  h1Element.textContent = greetings[currentGreetingIndex];
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
}

// Call the changeGreeting function to start changing the text
setInterval(changeGreeting, 500); // Change the text every 0.5 seconds


// OVERLAY EFFECT (WELCOME)
TweenMax.to("#overlay", 2, {
    top: "-120%",
    delay: 4,
    ease: "Expo.easeInOut"
  });