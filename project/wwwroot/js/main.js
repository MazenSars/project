// Verify login info
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Regular expressions for email and password validation
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^ (?=.* [a - zA - Z])(?=.*\d)(?=.* [!#$ %&?]).{ 8, }$/;

// Remove error classes initially
emailInput.classList.remove('error');
passwordInput.classList.remove('error');
const url = 'api/login'; // Your API endpoint URL

document.getElementById("btn").addEventListener("click", function (event) {
    // Get the input value
    const inputValue = document.getElementById("email").value;

    // Check if the input value is empty
    if (inputValue.trim() === "") {
        alert("Enter a Valid Email");
        event.preventDefault();
    }
    // Email validation
    else if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
    // Password validation
    /*else if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.classList.add('error');
        alert('Please enter a valid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        event.preventDefault();
    }
    else return;*/
});