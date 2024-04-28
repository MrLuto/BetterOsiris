function isValidDomain(domain) {
  // Reguliere expressie om een geldig domein te controleren
  const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?:\/\S*)?$/;

  // Controleer of de gegeven tekenreeks overeenkomt met het domeinpatroon
  return domainRegex.test(domain);
}

function isValidToken(token) {
  // Reguliere expressie om een geldige token te controleren
  const tokenRegex = /^Bearer [a-zA-Z0-9]+$/;

  // Controleer of de gegeven tekenreeks overeenkomt met het tokenpatroon
  return tokenRegex.test(token);
}

function login() {
  // Get the values from the input fields
  const domain = document.getElementById('domain').value;
  const token = document.getElementById('token').value;

  // Controleer of het domein en de token geldig zijn
  if (isValidDomain(domain) && isValidToken(token)) {
      // Opslaan van de waarden in de lokale opslag
      localStorage.setItem('domain', domain);
      localStorage.setItem('token', token);

      // Redirect naar het dashboard
      window.location.href = 'dashboard.html';
  } else {
      alert('Voer een geldig domein en een geldige token in.');
  }
}
