// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("Double-click secret activated!");
});

let longPressTimer;
const secretBtn = document.getElementById("secretBtn");

secretBtn.addEventListener("mousedown", () => {
  longPressTimer = setTimeout(() => {
    alert("Long press secret activated!");
  }, 1000);
});

secretBtn.addEventListener("mouseup", () => {
  clearTimeout(longPressTimer);
});

document.getElementById("keypressInput").addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// 2. Interactive Elements
document.getElementById("colorChangeBtn").addEventListener("click", function () {
  this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

const images = [
  "https://via.placeholder.com/300x200?text=Slide+1",
  "https://via.placeholder.com/300x200?text=Slide+2",
  "https://via.placeholder.com/300x200?text=Slide+3"
];
let currentImage = 0;

document.getElementById("nextImage").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("slideshowImage").src = images[currentImage];
});
// Local images
const slideshowImages = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
];

let currentSlideIndex = 0;

const slideshowImgElement = document.getElementById("slideshowImage");
const nextImageBtn = document.getElementById("nextImage");

nextImageBtn.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex + 1) % slideshowImages.length;
  slideshowImgElement.src = slideshowImages[currentSlideIndex];
});


const tabs = document.querySelectorAll(".tab");
const tabContent = document.getElementById("tabContent");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabContent.textContent = `You selected Tab ${tab.dataset.tab}`;
  });
});

// 3. Form Validation
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

emailInput.addEventListener("input", () => {
  const regex = /^\S+@\S+\.\S+$/;
  if (!regex.test(emailInput.value)) {
    emailFeedback.textContent = "Invalid email format";
  } else {
    emailFeedback.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters";
  } else {
    passwordFeedback.textContent = "";
  }
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  if (!emailInput.value || !passwordInput.value || passwordInput.value.length < 8) {
    alert("Please fix form errors before submitting.");
    e.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});
