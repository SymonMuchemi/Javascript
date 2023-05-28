const form = document.getElementById('form');
const name = document.getElementById('username');
const nameError = document.getElementById('Username-error');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const pwd = document.getElementById('password');
const pwdError = document.getElementById('pwd-error');
const pwd2 = document.getElementById('password2');
const pwd2Error = document.getElementById('pwd2-error')

form.addEventListener('submit', e => {
    e.preventDefault();
    validateTheInputs();
});

function validateTheInputs() {
     const nameValue = name.value.trim();
     const emailValue = email.value.trim();
     const pwdValue = pwd.value.trim();
     const pwd2Value = pwd2.value.trim();

     if (nameValue === '') {
         nameError.style.display = 'block';
         name.style.borderColor = '#ff3860';
     } else {
         nameError.style.display = 'none';
         name.style.borderColor = '#09c372'
     }
    console.log(checkEmail(emailValue));
    if(checkEmail(emailValue)){
        emailError.style.display = 'none';
        email.style.borderColor = '#09c372';
    }else {
        emailError.style.display = 'block';
        email.style.borderColor = '#ff3860';
    }

    if (pwdValue.length < 8){
         pwdError.style.display = 'block';
         pwd.style.borderColor = '#ff3860'
     }else{
         pwdError.style.display = 'none';
         pwd.style.borderColor = '#09c372'
     }

     if (pwd2Value !== pwdValue){
         pwd2Error.style.display = 'block';
         pwd2.style.borderColor = '#ff3860'
     }else {
         pwd2Error.style.display = 'none';
         pwd2.style.borderColor = '#09c372'
     }
}
function checkEmail(email){
    const regex = new RegExp(/^[\w.-]+@[\w.-]+\.\w+$/); // in case of an error, change the regex to /^[\w\.-]+@[\w\.-]+\.\w+$/
    return regex.test(email);
}