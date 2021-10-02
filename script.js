function validar(){
    var name = document.forms["RegForm"]["Name"];
    var password = document.forms["RegForm"]["Password"];

    if(name.value ==""){
        alert("Porfavor Ingrese su nombre");
        name.focus();
        return false;
    }

    if(password.value ==""){
        alert("Porfavor Ingrese su password");
        password.focus();
        return false;
    }

    return true;
}