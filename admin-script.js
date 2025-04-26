// Admin credentials
const adminId = "the_matrix_123";
const adminPassword = "Matrix@3504";

const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const enteredId = document.getElementById('adminId').value;
  const enteredPassword = document.getElementById('adminPassword').value;
  
  if (enteredId === adminId && enteredPassword === adminPassword) {
    alert("Login Successful! Redirecting to Admin Panel...");
    window.location.href = "adminpanel.html"; // Redirect page (you can create admin-dashboard.html)
  } else {
    errorMessage.textContent = "Invalid Admin ID or Password.";
  }
});

const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('adminPassword');

togglePassword.addEventListener('click', function () {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);

  // Toggle eye / eye-slash icon
  this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
});