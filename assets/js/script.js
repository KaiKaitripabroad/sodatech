const modeBtn = document.getElementById("mode-toggle");
const body = document.body;
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const profileImg = document.getElementById("profile-img");
const originalSrc = "./assets/img/profile-image.png"; // 元の画像パス
const hoverSrc = "./assets/img/chickens.png"; // ホバー時の画像パス
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // アイコンも切り替え
  if (body.classList.contains("dark-mode")) {
    modeBtn.textContent = "☀️";
  } else {
    modeBtn.textContent = "🌙";
  }
});

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active"); // アニメーション切り替え
  nav.classList.toggle("active"); // メニュー開閉
});

// マウスが乗ったとき
profileImg.addEventListener("mouseenter", () => {
  profileImg.src = hoverSrc;
});

// マウスが離れたとき
profileImg.addEventListener("mouseleave", () => {
  profileImg.src = originalSrc;
});

let current = 0;
let slideInterval;
// スライド切り替え
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// 次へ
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// 前へ
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// 自動再生
function startAutoPlay() {
  slideInterval = setInterval(nextSlide, 4000); // 4秒ごとに切り替え
}

function stopAutoPlay() {
  clearInterval(slideInterval);
}

// イベント設定
next.addEventListener("click", () => {
  nextSlide();
  stopAutoPlay();
  startAutoPlay();
});

prev.addEventListener("click", () => {
  prevSlide();
  stopAutoPlay();
  startAutoPlay();
});

// 最初のスライドと自動再生開始
showSlide(current);
startAutoPlay();
