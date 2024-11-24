// Handle sign-up form submission
const signupForm = document.getElementById("signup-form");
const signupMessage = document.getElementById("signup-message");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        signupMessage.textContent = "Email is already registered!";
        signupMessage.classList.add("error");
        signupMessage.classList.remove("success");
    } else if (password !== confirmPassword) {
        signupMessage.textContent = "Passwords do not match!";
        signupMessage.classList.add("error");
        signupMessage.classList.remove("success");
    } else {
        // Save new user to the mock database (localStorage)
        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        signupMessage.textContent = "Registration successful!";
        signupMessage.classList.add("success");
        signupMessage.classList.remove("error");

        // Redirect to the login page
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500); // Redirect after 1.5 seconds
    }
});
