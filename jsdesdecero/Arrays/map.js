let comida = [
    {principal : "fritos" , postre: "helado"} ,
    {principal : "sopa" , postre: "galleta "} ,
    {principal : "pizza" , postre: "queso"} ,
    {principal : "hotdog" , postre: "hielo"} ,
    {principal : "pollo" , postre: "pudin"} 
]


let principal = comida.map(function(comidax){
    return  comidax.postre
})



let xprincipal = []


for (let index = 0; index < comida.length; index++) {
    xprincipal.push(comida[index].postre)
}





function uno(){
    dos();
}


function dos(){
    console.log("hola desde la 2")
}

uno()


//Funcion anonima 

setTimeout(function(){
    console.log("hola")
},300)

console.log("hola")