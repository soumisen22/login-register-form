// script.js

// Toggle password visibility
function togglePassword(fieldId, icon) {
  const input = document.getElementById(fieldId);
  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🙈"; // 🙈
  } else {
    input.type = "password";
    icon.textContent = "👁️"; // 👁️
  }
}

// Signup form validation
document.getElementById("signup-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  alert(`Account created for ${username} successfully!`);
  window.location.href = "login.html";
});

// Login form validation
document.getElementById("login-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username && password) {
    alert(`Welcome back, ${username}!`);
    // Optional: redirect to dashboard.html
  } else {
    alert("Please enter valid credentials.");
  }
});
