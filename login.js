// Mock database stored in localStorage
const mockDatabase = [
    {
        email: "testuser@example.com",
        password: "password123", // Store plain passwords only for demonstration!
    },
];

// Save mock data to localStorage (if not already saved)
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(mockDatabase));
}

// Handle login form submission
const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    // Check credentials
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        loginMessage.textContent = "Login successful!";
        loginMessage.classList.add("success");
        loginMessage.classList.remove("error");
        // Redirect to another page (e.g., homepage.html)
        window.location.href = "index.html";
    } else {
        loginMessage.textContent = "Invalid email or password.";
        loginMessage.classList.add("error");
        loginMessage.classList.remove("success");
    }
});
