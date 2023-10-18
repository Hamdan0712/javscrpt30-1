const wholeBox = document.querySelectorAll(".key");
const singleDiv = document.querySelector;
// const audio = document.querySelector('audio[data-key*="65"]');

// const playing = document.querySelector(".playing");

wholeBox.forEach((box) => {
  box.addEventListener("click", function () {
    let dataKey = box.getAttribute("data-Key");
    const audio = document.querySelector(`audio[data-key*="${dataKey}"]`);
    audio.currentTime = 0;
    audio.play();
    box.classList.toggle("playing");
  });
});

window.addEventListener("keypress", function (e) {
  let keyPressed = e.key;
  let m = keyPressed.charCodeAt(keyPressed);
  const keyBox = document.querySelector(`div[data-key*="${m}"]`);

  const aud = document.querySelector(`audio[data-key*="${m}"]`);
  if (!aud) return;
  aud.currentTime = 0;
  aud.play();
  keyBox.classList.add("playing");
});

const removeTranstion = function (e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
};

wholeBox.forEach((box) => {
  box.addEventListener("transitionend", removeTranstion);
});
