const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isValidEmail = email => {
    if (!email) return false;
    return emailRegex.test(String(email).toLowerCase());
}


const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === ''){
        setError(username, 'username is required');
    }else{
        setSuccess(username);
    }

    if (emailValue === ''){
        setError(email, 'Email is required');
    }else if (!isValidEmail()) {
        setError(email, 'Provide a valid email');
    }else {
        setSuccess(email);
    }

    if (passwordvalue === ''){
        setError(password, 'Password is required');
    }
    else if (passwordvalue.length < 8){
        setError(password, 'Password must be at least 8 characters');
    }
    else {
        setSuccess(password);
    }

    if (password2Value === ''){
        setError(password2, 'Please confirm your password');
    }
    else if(password2Value !== passwordvalue){
        setError(password2, 'Password mismatch');
    }
    else    {
        setSuccess(password2)
    }
}