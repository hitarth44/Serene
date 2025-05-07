// Google Sign In (Mockup for now)
function signInWithGoogle() {
  alert("Google Sign In is currently under development.");
}

// Email Sign In
document.getElementById('signin-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  alert(`Welcome back, ${email}!`);
  window.location.href = "index.html";
});
