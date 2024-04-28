const domain = localStorage.getItem('domain');
const token = localStorage.getItem('token');

if (domain && token) {
  // Redirect to the dashboard
  window.location.href = 'dashboard.html';
} else {
  // Redirect to the login page
  window.location.href = 'token-login.html';
}