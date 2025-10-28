const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Reset messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    successMessage.textContent = '';

    // Name validation
    if (nameInput.value.trim() === '') {
        setError(nameInput, 'Name is required');
        isValid = false;
    }

    // Email validation
    if (emailInput.value.trim() === '') {
        setError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        setError(emailInput, 'Enter a valid email');
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === '') {
        setError(messageInput, 'Message is required');
        isValid = false;
    }

    // Show success if all valid
    if (isValid) {
        successMessage.textContent = '✅ Form submitted successfully!';
        form.reset();
    }
});

// Helper functions
function setError(input, message) {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.error');
    error.textContent = message;
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
