function codigoMeet(url) {
    let partes = url.split("/");
    let codigo = partes[partes.length - 1];
    return codigo.replace(/-/g, "");
}

console.log(codigoMeet("https://meet.google.com/abc-defg-hij"));