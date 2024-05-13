let nombres = ['miguel' , 'angel' , 'haaland','griezmann']


let nombre = 'angel'


function buscarNombre(nombres , nombre){
    nombre = nombre.toUpperCase()
    return nombres.includes(nombre)
}

let buscar = buscarNombre(nombres,nombre);


if (buscar == true){
    buscar
}else{
    console.log("no hay ")
}

