


document.getElementById("form-validate").addEventListener('submit',function(event){
    console.log(event);
   event.preventDefault(); // to avoid reload
    let userName = document.getElementById("userName").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()
    let confirmPassword = document.getElementById("confirmPassword").value.trim()

    if(userName== ""){
        document.getElementById("username-error").innerText="Name is Required"
    }

    if(email== ""){
        document.getElementById("email-error").innerText="E-Mail is Required"
    }
})