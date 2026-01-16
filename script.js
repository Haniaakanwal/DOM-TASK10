const keyMap = {
  A: "A",
  S: "S",
  1: "1",
  D: "D",
  F: "F",
  G: "G",
  H: "H",
  J: "J",
  K: "K",
  L: "L",
  Z: "Z",
  X: "X",
  C: "C",
  V: "V",
  B: "B",
  N: "N",
  M: "M",
  2: "2",
  3: "3",
  4: "4",
  Q: "Q",
  W: "W",
  E: "E",
  R: "R",
  T: "T",
  Y: "Y",
  I: "U",
  O: "O",
  P: "P",
  I: "I",
};
const keys = document.querySelectorAll(".key");
const sounds = {
        Q: new Audio("./audio/A0.mp3"),
        W: new Audio("./audio/A1.mp3"),
        E: new Audio("./audio/A2.mp3"),
        R: new Audio("./audio/A3.mp3"),
        T: new Audio("./audio/A4.mp3"),
        Y: new Audio("./audio/A5.mp3"),
        U: new Audio("./audio/A6.mp3"),
        I: new Audio("./audio/A7.mp3"),
        O: new Audio("./audio/Fs7.mp3"),
        P: new Audio("./audio/C1.mp3"),
        A: new Audio("./audio/C2.mp3"),
        S: new Audio("./audio/C3.mp3"),
        D: new Audio("./audio/C4.mp3"),
        F: new Audio("./audio/C5.mp3"),
        G: new Audio("./audio/C6.mp3"),
        H: new Audio("./audio/C7.mp3"),
        J: new Audio("./audio/C8.mp3"),
        K: new Audio("./audio/Ds1.mp3"),
        L: new Audio("./audio/Ds2.mp3"),
        Z: new Audio("./audio/Ds3.mp3"),
        X: new Audio("./audio/Ds4.mp3"),
        C: new Audio("./audio/Ds5.mp3"),
        V: new Audio("./audio/Ds6.mp3"),
        B: new Audio("./audio/Ds7.mp3"),
        N: new Audio("./audio/Fs1.mp3"),
        M: new Audio("./audio/Fs2.mp3"),
        1: new Audio("./audio/Fs3.mp3"),
        2: new Audio("./audio/Fs4.mp3"),
        3: new Audio("./audio/Fs5.mp3"),
        4: new Audio("./audio/Fs6.mp3")
}

// mouse click event
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const note = key.dataset.note;
    playNote(note);
    animateKey(key);
  });
});

// keyboard event
document.addEventListener("keydown", (event) => {
  const note = keyMap[event.key];
  if (!note) return;

  playNote(note);

  const keyElement = document.querySelector(
    `[data-note="${note}"]`
  );
  animateKey(keyElement);
});

// play sound function
function playNote(note) {
  const sound = sounds[note];
  if (!sound) return;

  sound.currentTime = 0;
  sound.play();
}
// animation function
function animateKey(key) {
  if (!key) return;

  key.classList.add("active");

  setTimeout(() => {
    key.classList.remove("active");
  }, 100);
}