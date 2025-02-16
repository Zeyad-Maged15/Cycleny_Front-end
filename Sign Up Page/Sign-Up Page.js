document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.createElement('p'); // Create a message element if not already present

    // Check if passwords match
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        document.getElementById('signup-form').appendChild(message);
        return;
    }

    fetch('https://cyclenyweb2.runasp.net/api/SignUp/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username: name, email, password, confirmPassword }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('API Response:', data);
        if (data.success) {
            message.style.color = 'green';
            message.textContent = 'Sign-up successful! Redirecting to login...';
            document.getElementById('signup-form').appendChild(message);

            setTimeout(() => {
                window.location.href = '../Login Page/login.html'; // Redirect to login page
            }, 1500);
        } else {
            message.textContent = data.message || 'Sign-up failed';
            message.style.color = 'red';
            document.getElementById('signup-form').appendChild(message);
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        message.textContent = 'Error: ' + error.message;
        message.style.color = 'red';
        document.getElementById('signup-form').appendChild(message);
    });
});
