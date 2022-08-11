const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail == "" || password == "") {
        alert ("Усі поля повинні бути заповнені") 
        return       
    }

    const formData = {
        mail,
        password ,
    };

    console.log(formData);

    event.currentTarget.reset()

}
