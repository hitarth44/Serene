// Google Sign Up (Mockup for now)
function signUpWithGoogle() {
  alert("Google Sign Up is currently under development.");
}

// Email Sign Up
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  alert(`Welcome, ${fullname}! Your account has been created.`);
  window.location.href = "signin.html";
});
