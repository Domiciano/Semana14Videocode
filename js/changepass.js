const newPassET = document.getElementById('newPassET');
const saveBtn = document.getElementById('saveBtn');
const auth = firebase.auth();
let currentUser = null;

auth.onAuthStateChanged(
    (user) => {
        if(user !== null){
            currentUser = user;
        }else{
            window.location.href = 'login.html';
        }
    }
);

saveBtn.addEventListener('click', ()=>{
    if(currentUser!==null){
        currentUser.updatePassword(newPassET.value).then(
            ()=>{
                alert('Contraseña cambiada');
                window.location.href='index.html';
            }
        ).catch(
            (error)=>{
                alert(error);
            }
        );
    }
});