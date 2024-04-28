function isValidDomain(domain) {
  // Reguliere expressie om een geldig domein te controleren
  const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?:\/\S*)?$/;

  // Controleer of de gegeven tekenreeks overeenkomt met het domeinpatroon
  return domainRegex.test(domain);
}
  
  function login() {
    // Get the values from the input fields
    const domain = document.getElementById('domain').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert("still under developement please use the token login")
    window.location.href = 'token-login.html';
  
    // Controleer of het domein en de token geldig zijn
    if (isValidDomain(domain)) {
      // call api met path /api/collections/osiris_users/auth-with-password
      fetch(`${domain}/api/collections/osiris_users/auth-with-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Opslaan van de waarden in de lokale opslag
          localStorage.setItem('domain', domain);
          localStorage.setItem('token', data.token);
  
          // Redirect naar het dashboard
          window.location.href = 'dashboard.html';
        })
        .catch((error) => {
          alert('Voer een geldig domein en een geldige token in.');
        });
      // Opslaan van de waarden in de lokale opslag
      localStorage.setItem('domain', domain);
      localStorage.setItem('token', token);

      // Redirect naar het dashboard
      window.location.href = 'dashboard.html';
    } else {
        alert('Voer een geldig domein en een geldige token in.');
    }
  }
  