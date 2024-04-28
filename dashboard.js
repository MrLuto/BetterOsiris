function getinfo() {
    const domain = localStorage.getItem('domain');
    const token = localStorage.getItem('token');

    console.log(domain, token);
}

function logout() {
    localStorage.removeItem('domain');
    localStorage.removeItem('token');
    window.location.href = 'token-login.html';
}
