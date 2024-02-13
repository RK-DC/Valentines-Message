function checkPassword() {
    const password = document.getElementById('passwordInput').value;

    // Replace 'your_secret_password' with the actual secret password
    if (password === '1') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('homePage').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}


  