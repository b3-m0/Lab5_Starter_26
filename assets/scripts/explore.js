// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  /** Declare variables
   *  voiceDropdown
   *  talkButton
   *  text area?
   *  face
   */
  const voiceSelect = document.querySelector('#voice-select');
  const talkButton = document.querySelector('button');
  const textArea = document.querySelector('textarea');
  const faceImg = document.querySelector('img');

  const synth = window.speechSynthesis;
  let voices = [];

  // Load voices into dropdown
  function loadVoices() {
    voices = synth.getVoices(); // get all available voices in browser
    voiceSelect.innerHTML = ''; // clear dropdown
    voices.forEach((voice, i) => {
      const option = document.createElement('option'); // create new option
      option.value = i; // value = its index number
      option.textContent = `${voice.name} (${voice.lang})`; // display text
      voiceSelect.appendChild(option); // add to dropdown
    });
  }

  loadVoices(); // call on page load
  synth.addEventListener('voiceschanged', loadVoices); // safety net

  // On event press to talk button, say text using chosen voice + swap face
  talkButton.addEventListener('click', function() {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    utterance.voice = voices[voiceSelect.value];

    // Swap to open mouth while speaking
    utterance.onstart = function() {
      faceImg.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = function() {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}