// document.getElementById('submit').addEventListener('click', function(){
//     document.getElementById('creation').submit()
// })
// connecting create account button to a form for submit


document.getElementById('submit').addEventListener('click', function(){
    checkPassword();    
})

function checkPassword() {
    let password = document.getElementById('password');
    let confirmPassowrd = document.getElementById('confirm-password');
    if (password.value.length != 0){
        if (password.value === confirmPassowrd.value){
            password.classList.replace('error', 'correct');
            confirmPassowrd.classList.replace('error', 'correct');
        } else {
            password.classList.replace('correct', 'error');
            confirmPassowrd.classList.replace('correct', 'error');
        }
    }
}

