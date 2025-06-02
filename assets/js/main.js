const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn'); // Corrected class name
const loginBtn = document.querySelector('.login-btn'); // Ensure this matches your HTML

// Event listener for the register button
registerBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior if it's an anchor tag
    container.classList.add('active'); // Add 'active' class to show the registration form
});

// Event listener for the login button
loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior if it's an anchor tag
    container.classList.remove('active'); // Remove 'active' class to show the login form
});
