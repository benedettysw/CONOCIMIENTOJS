let Nombre = "miguel"

switch (Nombre){
    case 'miguel': {
        console.log("hola miguel")
        break
    }

    case 'angek': {
        console.log("hola miguel")
        break
    } 
    
    case 3: {
        console.log("hola miguel")
        break

    }
    case true: {
        console.log("hola miguel")
        break
    }
}




let nombre = 'miguel'


let reglas = /^[a-zA-Z]+$/;

if (nombre == 'miguel') {
    console.log("eres miguel")

} else if (!reglas.test(nombre)) {
    console.log("solo txt")


} else {
    console.log("no eres miguel")

}







//ALTERNATIVA
const diaSemana = {
    domigo: 0,
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6
}

const dia = diaSemana['lunes']

console.log(dia)