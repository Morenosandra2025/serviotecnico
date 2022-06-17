function validar()
{
    var form = document.form;
    if(form.nombre.value==0){
        alert("el campo nombre esta vacio")
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }
    if(form.apellido.value==0){
        alert("el campo apellido esta vacio")
        form.apellido.value="";
        form.apellido.focus();
        return false;
    }
    if(form.email.value==0){
        alert("el campo correo esta vacio")
        form.email.value="";
        form.email.focus();
        return false;
    }
    if(form.mensaje.value==0){
        alert("el campo mensaje esta vacio")
        form.mensaje.value="";
        form.mensaje.focus();
        return false;
    }
    alert("tu consulta ha sido enviado con exito , ¡¡En la brevedad posible nos comunicaremos para ayudarte!!")
    form.submit();
}
