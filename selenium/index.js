function Buscador(){
    let buscar = document.getElementById("inputBuscador").value

    buscar === "log in"  ? window.location.href = "login.html" :
    buscar === "formulario" ? window.location.href = "formulario.html" :
    buscar === "home" ? window.location.href = "home.html" :
    malBuscado.innerHTML = "la busqueda no se encuentra";

}