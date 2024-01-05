document.getElementById('submit-btn').addEventListener('click',function(){
    // console.log('click button')
    const validEmail = document.getElementById('in-email');
    const email = validEmail.value;

    const validPassword = document.getElementById('in-password');
    const password = validPassword.value;
    // console.log(password);

    if(email === 'protik@gmail.com' && password === 'pro01'){
        window.location.href = 'bank.html';
    }
    else{
        console.log('Do Not Valid User')
    }
})