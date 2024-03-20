const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            errorMessage.style.display = 'block';
        } else {
            // Perform login logic here
            console.log('Username:', username);
            console.log('Password:', password);
            errorMessage.style.display = 'none';
        }
    });
