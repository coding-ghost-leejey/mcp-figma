// DOM 요소 가져오기
const loginBtn = document.getElementById("loginBtn");
const ctaButton = document.getElementById("ctaButton");

// 로그인 버튼 클릭 이벤트
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("로그인 버튼 클릭");

  // 버튼 클릭 애니메이션
  this.style.transform = "scale(0.95)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 150);

  // 실제 구현 시 로그인 페이지로 이동
  alert("로그인 페이지로 이동합니다.");
  // window.location.href = "/login";
});

// CTA 버튼 클릭 이벤트
ctaButton.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("감사일기 시작하기 버튼 클릭");

  // 버튼 클릭 애니메이션
  this.style.transform = "scale(0.98)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 150);

  // 실제 구현 시 감사일기 작성 페이지로 이동
  alert("감사일기 작성 페이지로 이동합니다.");
  // window.location.href = "/write";
});

// 페이지 로드 애니메이션
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// 스크롤 시 헤더 효과
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
  }

  lastScroll = currentScroll;
});

// 부드러운 스크롤 효과
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// 기능 카드 호버 효과 강화
const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transition = "all 0.3s ease";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transition = "all 0.3s ease";
  });
});

// Intersection Observer를 사용한 스크롤 애니메이션
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// 관찰할 요소들
const animatedElements = document.querySelectorAll(
  ".feature-card, .hero-container"
);

animatedElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});
