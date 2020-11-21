const database = firebase.database();
const auth = firebase.auth();

const logoutBtn = document.getElementById('logoutBtn');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const ciudad = document.getElementById('ciudad');
const title = document.getElementById('title');


//Para saber quien es el usuario autenticado
auth.onAuthStateChanged(
    (user) => {

        if(user !== null){

            console.log(user.uid);
            database.ref('semana14/users/'+user.uid).once(
                'value',
                (data)=>{
                    let userDB = data.val();
                    title.innerHTML = 'Bienvenido '+userDB.nombre;
                    nombre.innerHTML = userDB.nombre + ' ' + userDB.apellido;
                    correo.innerHTML = userDB.correo;
                    ciudad.innerHTML = userDB.ciudad;
                }
            );
        }else{
            window.location.href = "login.html";
        }


    }
);





logoutBtn.addEventListener('click', ()=>{
    auth.signOut().then(
        ()=>{
            window.location.href = "login.html";
        }
    ).catch(
        (error)=>{
            alert(error.message);
        }
    );
});

