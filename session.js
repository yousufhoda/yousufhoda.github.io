// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Check if 'username' exists in localStorage and set the input field value if it does
    if (localStorage.getItem('username')) {
        document.getElementById('username').value = localStorage.getItem('username');
    }

    // Check if 'email' exists in localStorage and set the input field value if it does
    if (localStorage.getItem('email')) {
        document.getElementById('email').value = localStorage.getItem('email');
    }

    // Check if 'message' exists in localStorage and set the textarea field value if it does
    if (localStorage.getItem('message')) {
        document.getElementById('message').value = localStorage.getItem('message');
    }

    // Listen for changes in the 'username' input field and store its value in localStorage
    document.getElementById('username').addEventListener('input', function () {
        localStorage.setItem('username', this.value);
    });

    // Listen for changes in the 'email' input field and store its value in localStorage
    document.getElementById('email').addEventListener('input', function () {
        localStorage.setItem('email', this.value);
    });

    // Listen for changes in the 'message' textarea and store its value in localStorage
    document.getElementById('message').addEventListener('input', function () {
        localStorage.setItem('message', this.value);
    });

    // Clear all stored data in localStorage when form is reset
    document.getElementById('myForm').addEventListener('reset', function () {
        localStorage.clear();
    });
});
