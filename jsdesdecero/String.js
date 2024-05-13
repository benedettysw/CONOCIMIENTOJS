//PASAR UNA CADDENA  A OBJETO

let cadena = "casa , carro , tv , dinero"

console.log(typeof(cadena))

let objeto = cadena.split(",")

console.log(typeof(objeto))



//CREAR OBJETO

let xobjeto = {
    nombre: 'luis',
    apellido: 'diaz',
    edad : 27,
    pais: 'colombia'
}

let key = Object.keys(xobjeto);

let valor = Object.values(xobjeto);

valor

key




let mensaje = "hOla "


let minuscula  = mensaje.toLowerCase()


let mayuscula = mensaje.toUpperCase()
