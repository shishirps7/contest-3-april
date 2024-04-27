function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailValue = emailInput.value.trim();

    if (emailValue.length < 3 || !emailValue.includes("@") || !emailValue.includes(".")) {
        emailError.textContent = "Make sure email is more than 3 characters and has @ and a .";
    } else {
        emailError.textContent = "";
        updateValidationMessage(); // Update validation message
    }
}

function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordValue = passwordInput.value.trim();

    if (passwordValue.length < 8) {
        passwordError.textContent = "Make sure password is more than 8 characters.";
    } else {
        passwordError.textContent = "";
        updateValidationMessage(); // Update validation message
    }
}

function updateValidationMessage() {
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const validationMessage = document.getElementById("validationMessage");
    const emailValue = document.getElementById("email").value.trim();
    const passwordValue = document.getElementById("password").value.trim();

    if (emailError.textContent === "" && passwordError.textContent === "" && emailValue !== "" && passwordValue !== "") {
        validationMessage.textContent = "All good to go!";
        validationMessage.style.color = "green";
    } else {
        validationMessage.textContent = "";
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const validationMessage = document.getElementById("validationMessage");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Validate email and password
    validateEmail();
    validatePassword();

    // Check if both email and password are valid
    if (emailError.textContent === "" && passwordError.textContent === "") {
        validationMessage.textContent = "All good to go!";
        validationMessage.style.color = "green";
    } else {
        validationMessage.textContent = "";
    }

    // Rest of the code for form submission...
}
