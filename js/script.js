const modeBtn = document.getElementById("mode-toggle");
const body = document.body;
const profileImg = document.getElementById("profile-img");
const originalSrc = "images/profile-img.jpg";
const hoverSrc = "/img/chickens.png";

modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // アイコンも切り替え
  if (body.classList.contains("dark-mode")) {
    modeBtn.textContent = "☀️";
  } else {
    modeBtn.textContent = "🌙";
  }
});
// マウスが乗ったとき
profileImg.addEventListener("mouseenter", () => {
  profileImg.src = hoverSrc;
});

// マウスが離れたとき
profileImg.addEventListener("mouseleave", () => {
  profileImg.src = originalSrc;
});