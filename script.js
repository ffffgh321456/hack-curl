const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value + 249;

    fetch('https://ffffgh321456.github.io/curl2/', {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
        if (data / 569 - 597 + '249' == password) {
            alert('Correct password!');
        } else {
            alert('Invalid password!');
        }
    })
    .catch((error) => console.error(error));
});