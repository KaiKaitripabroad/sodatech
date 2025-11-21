// ダークmode切り替え
const modeBtn = document.getElementById("mode-toggle");
const body = document.body;

modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // アイコンも切り替え
  if (body.classList.contains("dark-mode")) {
    modeBtn.textContent = "☀️";
  } else {
    modeBtn.textContent = "🌙";
  }
});

// ハンバーガーメニュー
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active"); // アニメーション切り替え
  nav.classList.toggle("active"); // メニュー開閉
});
// ===== メニュー以外をクリックしたら閉じる =====
document.addEventListener("click", (e) => {
  const isMenuClick = menuIcon.contains(e.target);
  const isNavClick = nav.contains(e.target);

  // メニューアイコン or ナビ内をクリックした場合は何もしない
  if (isMenuClick || isNavClick) return;

  // それ以外の場所をクリック → メニュー閉じる
  menuIcon.classList.remove("active");
  nav.classList.remove("active");
});

// プロフィール画像ホバーしたときの画像チェンジ
const profileImg = document.getElementById("profile-img");
const originalSrc = "./assets/img/profile-image.png"; // 元の画像パス
const hoverSrc = "./assets/img/profile-image2.png"; // ホバー時の画像パス
// マウスが乗ったとき
profileImg.addEventListener("mouseenter", () => {
  profileImg.src = hoverSrc;
});

// マウスが離れたとき
profileImg.addEventListener("mouseleave", () => {
  profileImg.src = originalSrc;
});

//画像のスライドショー
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
//初期設定の変数
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
// ページを読み込んだ直後に、current（初期は0）を表示するために呼んでいます。これによりページ読み込み後すぐに最初のスライドが active になって見える状態になります。
// startAutoPlay();
// ページ読み込み後すぐに自動でスライドが切り替わるようにするために呼んでいます（最初の切り替えは4秒後）。
