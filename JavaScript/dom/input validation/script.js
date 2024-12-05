const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');


passwordInput.addEventListener('input',($event)=>{
    if($event.target.value.length >= 6 && $event.target.value.length <= 12 ){
        submitButton.removeAttribute('disabled');
        
    }else{
        console.log($event.target.value)
        submitButton.setAttribute('disabled','true');
    }
})