function dameElDia(num ){

    let dias = ["lunes", "martes", "miercoles", "jueves", "sabado","domingo"]

    return dias[num];

}

let valor = new Date().getDay();

console.log (dameElDia(valor-1));