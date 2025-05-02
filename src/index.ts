import "./index.scss";

interface SoundButton extends HTMLButtonElement {
  dataset: {
    sound: string;
    bg: string;
    icon: string;
  };
}

document.addEventListener("DOMContentLoaded", () => {
  let currentAudio: HTMLAudioElement | null = null;
  let isPlaying = false;
  let currentSound: string | null = null;
  let volume = 0.5;

  const volumeControl = document.getElementById("volume") as HTMLInputElement;
  const soundButtons = document.querySelectorAll(
    ".sound-btn"
  ) as NodeListOf<SoundButton>;
  const firstButton = soundButtons[0];

  volumeControl.value = `${volume}`;
  document.body.style.backgroundImage = `url(assets/${firstButton.dataset.bg})`;

  soundButtons.forEach((button: SoundButton) => {
    const bgImage = button.dataset.bg;
    button.style.backgroundImage = `url(assets/${bgImage})`;
  });

  volumeControl.addEventListener("input", (event: Event) => {
    const target = event.target as HTMLInputElement;
    volume = parseFloat(target.value);
    if (currentAudio) {
      currentAudio.volume = volume;
    }
  });

  soundButtons.forEach((button: SoundButton) => {
    button.addEventListener("click", () => {
      const { sound, bg, icon } = button.dataset;
      const btnImage = button.children[0] as HTMLImageElement;

      document.body.style.backgroundImage = `url(assets/${bg})`;

      if (currentSound === sound && isPlaying) {
        pauseAudio();
        button.classList.remove("active");
        btnImage.src = "assets/icons/pause.svg";
      } else {
        stopCurrentAudio();
        playAudio(sound);
        currentSound = sound;
        setActiveButton(button);
        btnImage.src = `assets/icons/${icon}`;
      }
    });
  });

  function playAudio(sound: string) {
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

  function setActiveButton(activeButton: SoundButton) {
    soundButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    activeButton.classList.add("active");
  }
});
