function diasParaArequipa() {
    let hoy = new Date();
    let anio = hoy.getFullYear();
    let arequipa = new Date(anio, 7, 15); // agosto = 7

    if (hoy > arequipa) {
        arequipa = new Date(anio + 1, 7, 15);
    }

    let diff = arequipa - hoy;
    let dias = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return dias;
}

console.log("Faltan " + diasParaArequipa() + " días");