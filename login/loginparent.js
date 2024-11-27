async function validateLogin(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch('http://localhost:3000/client/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            const data = await response.json(); // Get the response data
            console.log(data.token)
            localStorage.setItem('jwtToken', data.token); // Save the JWT token in local storage
            // Redirect to the course page on successful login
            window.location.href = 'courses.html';
        } else {
            const errorMsg = await response.text();
            document.getElementById('error-msg').innerText = errorMsg;
        }
    } catch (error) {
        console.error('Login error:', error); // Log the error details for debugging
        document.getElementById('error-msg').innerText = 'An error occurred. Please try again.';
    }
}

// Function to get the JWT token for further requests
function getJwtToken() {
    return localStorage.getItem('jwtToken'); // Retrieve the JWT token from local storage
}

