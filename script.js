const form = document.getElementById('signup-form');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const termsCheckbox = document.getElementById('terms');
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const termsError = document.getElementById('termsError');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Reset error messages
    clearErrorMessages();

    // Validate fields
    let isValid = true;

    if (fullNameInput.value.trim() === '') {
        fullNameError.textContent = 'Please enter your full name.';
        isValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    }

    if (!termsCheckbox.checked) {
        termsError.textContent = 'Please accept the Terms and Conditions.';
        isValid = false;
    }

    // Submit form if all validations pass
    if (isValid) {
        // Handle form submission (e.g., send data to server)
        alert('Form submitted successfully!'); 
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearErrorMessages() {
    fullNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    termsError.textContent = '';
}
