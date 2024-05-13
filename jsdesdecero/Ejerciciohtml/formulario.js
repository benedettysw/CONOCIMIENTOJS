function datos(){

    let cedula = document.getElementById('cedula').value;

    let apellido = document.getElementById('apellido').value;

    let Nombre = document.getElementById('Nombre').value;

    let Edad = document.getElementById('Edad').value;

    


  

    if(cedula === "" || apellido === "" || Nombre === "" || Edad === "" ){
        alert("complete todo los campos")
        return;
    }



    if(cedula.length < 7 ){
        alert("la cedula deber ser mayor a 7 ")
        return ;
    }

    

    alert("su cedula es: "+cedula+"\n su apellido es: "+apellido+"\nsu nombre es: "+Nombre+"\nsu edad es: "+Edad)


}