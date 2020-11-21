const emailET = document.getElementById('emailET');
const sendBtn = document.getElementById('sendBtn');
const auth = firebase.auth();

sendBtn.addEventListener('click', ()=>{
    auth.sendPasswordResetEmail(emailET.value).then(
        ()=>{
            alert('Email enviado');
        }
    ).catch(
        (error)=>{
            alert(error);
        }
    );
});