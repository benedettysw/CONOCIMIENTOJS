
let jugadores = ['Griezmann' ,'Messi','Haaland','Diaz']


let Puntuacion = [
    [80,70,70],
    [80,70,6],
    [70,90,95],
    [70,85,75],

]


function CalcularBest(Puntuacion){

    let promedio = [];

    for (let fila = 0; fila < Puntuacion.length; fila++) {
        let xfila = Puntuacion[fila];
        let suma = xfila.reduce((total , Puntuacion)=> total+Puntuacion,0);
        promedio[fila] = suma/xfila.length;

        
    }

    return promedio;
}


function thebest(jugadores,promedio){
    for (let xfila = 0; xfila < promedio.length; xfila++) {
        if(promedio[xfila]>=70){
            console.log(jugadores[xfila]+" SI ERES EL MEJOR")

        }else{
            console.log(jugadores[xfila]+" NO ERES EL MEJOR")

        }


    }
}


let promedios = CalcularBest(Puntuacion)
thebest(jugadores,promedios);
