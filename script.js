let pass = document.querySelector('.pass');
let cnfrmPass = document.querySelector('.confrm-pass');
let submit = document.querySelector('button');
let form = document.querySelector('.form')
let failMessage = document.querySelector('.message');

submit.addEventListener('click', checkPassword);

function checkPassword(){
    let password = pass.value;
    let password1 = cnfrmPass.value;
    if(password != '' && password1 != ''){
        if(password === password1){
            form.submit();
        }
        else{
            pass.style.backgroundColor = '#f1807e';
            cnfrmPass.style.backgroundColor = '#f1807e';
            failMessage.textContent = '* Passwords donot match.'
            failMessage.style.color = 'red';
            event.preventDefault();
        }
    }
}
