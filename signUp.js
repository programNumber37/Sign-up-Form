function validatePasswords() {
    const password = document.getElementById('user_password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match! Please try again.");
        return false;
    }
    return true;
}

const form = document.getElementById('signup-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validatePasswords()) {
        form.submit();
    }
});
