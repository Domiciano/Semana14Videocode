const database = firebase.database();
const auth = firebase.auth();


const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const ciudad = document.getElementById('ciudad');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const regBtn = document.getElementById('regBtn');

var isSigningUp = false;

auth.onAuthStateChanged(
    (user) =>{
        if(user !== null){
            if(isSigningUp){
                //Depositar los datos
                let userDB = {
                    id: user.uid,
                    nombre: nombre.value,
                    apellido: apellido.value,
                    ciudad: ciudad.value,
                    correo: correo.value,
                    password: password.value
                };
                database.ref('semana14/users/'+userDB.id).set(userDB).then(
                    ()=>{
                        window.location.href = "index.html";        
                    }
                );
            }else{
                window.location.href = "index.html";
            }
        }
    }
);


regBtn.addEventListener('click', ()=>{
    isSigningUp = true;
    auth.createUserWithEmailAndPassword(correo.value, password.value);
});
