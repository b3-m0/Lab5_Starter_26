// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.querySelector('#horn-select');
  const hornImg = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const button = document.querySelector('button');

  // Horn selection
  hornSelect.addEventListener('change', function() {
    const horn = hornSelect.value;
    hornImg.src = `assets/images/${horn}.svg`;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  // Volume slider
  volumeSlider.addEventListener('input', function() {
    const volume = parseInt(volumeSlider.value);
    audio.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Play button
  button.addEventListener('click', function() {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}