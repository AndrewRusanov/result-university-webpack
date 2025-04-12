import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  let currentAudio = null;
  let isPlaying = false;
  let currentSound = null;
  let volume = 0.5;

  const volumeControl = document.getElementById("volume");
  const soundButtons = document.querySelectorAll(".sound-btn");
  const firstButton = soundButtons[0];

  volumeControl.value = volume;
  document.body.style.backgroundImage = `url(assets/${firstButton.dataset.bg})`;

  soundButtons.forEach((button) => {
    const bgImage = button.dataset.bg;
    button.style.backgroundImage = `url(assets/${bgImage})`;
  });

  volumeControl.addEventListener("input", (event) => {
    volume = parseFloat(event.target.value);
    if (currentAudio) {
      currentAudio.volume = volume;
    }
  });

  soundButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const sound = button.dataset.sound;
      const bgImage = button.dataset.bg;
      const btnIcon = button.dataset.icon;

      document.body.style.backgroundImage = `url(assets/${bgImage})`;

      if (currentSound === sound && isPlaying) {
        pauseAudio();
        button.classList.remove("active");
        const btnImage = button.children[0];
        btnImage.src = "assets/icons/pause.svg";
      } else {
        stopCurrentAudio();
        playAudio(sound);
        currentSound = sound;
        setActiveButton(button);
        const btnImage = button.children[0];
        btnImage.src = `assets/icons/${btnIcon}`;
      }
    });
  });

  function playAudio(sound) {
    currentAudio = new Audio(`assets/sounds/${sound}.mp3`);
    currentAudio.volume = volume;
    currentAudio.loop = true;
    currentAudio.play();
    isPlaying = true;
  }

  function pauseAudio() {
    if (currentAudio) {
      currentAudio.pause();
      isPlaying = false;
    }
  }

  function stopCurrentAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    isPlaying = false;
    currentSound = null;
  }

  function setActiveButton(activeButton) {
    soundButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    activeButton.classList.add("active");
  }
});
