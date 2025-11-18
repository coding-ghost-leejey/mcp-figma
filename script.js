// DOM 요소 가져오기
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const signInBtn = document.getElementById("signInBtn");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
const createAccountBtn = document.getElementById("createAccountBtn");

// 시간 업데이트 함수
function updateTime() {
  const timeElement = document.querySelector(".time");
  if (timeElement) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    timeElement.textContent = `${hours}:${minutes}`;
  }
}

// 페이지 로드 시 시간 설정 및 주기적 업데이트
updateTime();
setInterval(updateTime, 60000); // 1분마다 업데이트

// 입력 필드 포커스 효과
[usernameInput, passwordInput].forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.01)";
  });

  input.addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)";
  });
});

// Sign In 버튼 클릭 이벤트
signInBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // 로그인 처리 (실제 구현 시 API 호출 등)
  console.log("Sign In attempt:", { username, password });

  // 버튼 클릭 애니메이션
  this.style.transform = "scale(0.98)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 150);

  // 성공 메시지 (실제로는 서버 응답에 따라 처리)
  alert("Sign in successful! (This is a demo)");
});

// Forgot Password 버튼 클릭 이벤트
forgotPasswordBtn.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("Forgot Password clicked");

  // 버튼 클릭 애니메이션
  this.style.transform = "scale(0.98)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 150);

  alert("Password reset link will be sent to your email.");
});

// Create Account 버튼 클릭 이벤트
createAccountBtn.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("Create Account clicked");

  // 버튼 클릭 애니메이션
  this.style.transform = "scale(0.98)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 150);

  alert("Redirecting to sign up page...");
});

// Enter 키로 로그인
passwordInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    signInBtn.click();
  }
});

// 입력 필드 유효성 검사
usernameInput.addEventListener("input", function () {
  if (this.value.length > 0) {
    this.style.color = "#dedede";
  }
});

passwordInput.addEventListener("input", function () {
  if (this.value.length > 0) {
    this.style.color = "#dedede";
  }
});

// 페이지 로드 애니메이션
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// 배터리 아이콘 애니메이션 (선택사항)
function animateBattery() {
  const batteryFill = document.querySelector(".battery-fill");
  if (batteryFill) {
    // 배터리 레벨 시뮬레이션 (실제로는 시스템 정보 필요)
    const batteryLevel = 75; // 0-100
    batteryFill.style.width = `${(batteryLevel / 100) * 16}px`;
  }
}

animateBattery();
