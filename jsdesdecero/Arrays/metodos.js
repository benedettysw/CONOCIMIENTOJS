

//---------------------------------------------------------METODOS---------------------------------------------------

//MI LISTA 

let objetos = ["carros" , "casa" , "celular"]



//PARA AGREGAR UN ELEMTO 

objetos.push("pc") //AGREGAR NUEVO ELEMENTO AL FINAL

objetos.unshift("moto") //AGREGA UN ELEMENTO AL PRIMER ELEMENTO



//PARA ELIMINAR UN ELEMETO 

objetos.pop();//ELIMINA EL ULTIMO ELEMENTO



objetos.shift();//ELIMINA EL PRIMER ELEMENTO






//FILTAR 



let misObejetos = objetos.filter(objetos1 => objetos1.includes('a'))




//SEGUNDA LISTA 
let frutas = ["manzana" , "mango", "a"] 




let todasmisListas = objetos.concat(frutas) //UNE LAS LISTA EN UNA 




todasmisListas.reverse()  //LOS ULTIMOS PRIMERO Y LOS PRIMERO ULTIMOS



todasmisListas.sort(); //EN ORDEN ALFABETICO
