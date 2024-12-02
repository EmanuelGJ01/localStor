
function RegistroUsuario(){
    const user = {
        nombre:document.getElementById("name").value,
        email:document.getElementById("email").value,
        apellido:document.getElementById("apellido").value,
        password:document.getElementById("password").value

    }

    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    alert("Tu registro ha sido un exito")
    window.location.href = 'Inicio.html'
}