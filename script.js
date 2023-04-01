function checkPassword(){
    let password = document.getElementById("Password").value
    let confirmedPassword = document.getElementById("confirmedPassword").value
    console.log(password, confirmedPassword)
    let message = document.getElementById("message")
    if(password.length != 0){
        if(password == confirmedPassword){
            message.textContent = "Password Matched"
            message.style.color = "green"
        } else {
            message.textContent = "Password didn't Matched"
            message.style.color = "red"
        }
    }
}