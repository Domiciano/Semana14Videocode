const database = firebase.database();
const auth = firebase.auth();

const correo = document.getElementById('correo');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');


auth.onAuthStateChanged(
    (user)=>{
        if(user !== null){
            if(user.emailVerified){
                window.location.href = "index.html";
            }else{
                auth.signOut().then(
                    ()=>{
                        alert('Primero debe verificar su cuenta');
                    }
                );
            }
        }      
    }
);


loginBtn.addEventListener('click', ()=>{
    auth.signInWithEmailAndPassword(correo.value, password.value).then(
        (data)=>{
            console.log('Login ok');
        }
    ).catch(
        (error)=>{
            alert(error.message);
        }
    );
});