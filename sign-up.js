const firstnameinput = document.getElementById('firstname');
const middlenameinput = document.getElementById('middlename');
const lastnameinput = document.getElementById('lastname');
const githubinput = document.getElementById('git');
const linkedininput = document.getElementById('Linkedin'); 
const submitButton = document.getElementById('submitButton');
const emailinput = document.getElementById('email');
const passwordinput = document.getElementById('password'); 


submitButton.addEventListener('click', function (event) {
    if (!isCharacterOnly(firstnameinput.value)) {
        alert("First Name should only contain characters.");
        event.preventDefault();
    }
    if (!isCharacterOnly(middlenameinput.value)) {
        alert("Middle Name should only contain characters.");
        event.preventDefault();
    }
    if (!isCharacterOnly(lastnameinput.value)) {
        alert("Last Name should only contain characters.");
        event.preventDefault();
    }
     if (!isValidEmail(emailinput.value)) { 
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
    if (!isValidURL(githubinput.value)) { 
        alert("Please enter a valid GitHub URL.");
        event.preventDefault();
    }
    if (!isValidURL(linkedininput.value)) {
        alert("Please enter a valid LinkedIn URL.");
        event.preventDefault();
    }
    if (!isValidPassword(passwordinput.value)) { 
        alert("Password should contain at least 8 characters including 1 number and 1 special character.");
        event.preventDefault();
        console.log(passwordinput.value)
    }
})
function isCharacterOnly(inputValue) {
    return /^[A-Za-z]+$/.test(inputValue);
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidURL(url) {
    const urlRegex = /^(https?:\/\/)?(www\.)?[a-z0-9\-]+(\.[a-z]{2,})(\/[^\s]*)?$/i;
    return urlRegex.test(url);
}
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
}