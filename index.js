document.getElementById('loginButton').addEventListener('click', function() {
    const loginTab=window.open('index.html?page=login', '_blank');
})
document.getElementById('createAccountButton').addEventListener('click', function() {
    const registerTab=window.open('index.html?page=register', '_blank');
})
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    
    if (page === 'login') {
        document.getElementById('home-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    }
    if (page === 'register') {
        document.getElementById('home-section').style.display = 'none';
        document.getElementById('register-section').style.display = 'block';
    }
   
});