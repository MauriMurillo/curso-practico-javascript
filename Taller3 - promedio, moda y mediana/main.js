function promedio(lista){
    let suma = 0;
    for (var item of lista) {
        suma = suma + Number(item);
    }
    let pro = (suma / lista.length);
    return pro;
}
function mediana(lista){
    lista.sort(function(a,b){return a - b});
    let mediana;
    if (lista.length%2 == 0) {
        mediana = Number(lista[lista.length/2]) + Number(lista[(lista.length/2)-1]);
        mediana = mediana/2;
    }else{
        mediana = lista[Math.floor(lista.length/2)];
    }
    return mediana;
}
function moda(lista){
    let moda = 0;
    let nummoda = 0;
    for (var item of lista){
        let aux = lista.filter( function(articulo){
            return articulo === item;
        });
        let auxnum = aux.length;
        if (auxnum > nummoda) {
            moda = item;
            nummoda = auxnum;
        }
    }
    // console.log(moda);
    // console.log(typeof(moda));
    return moda;
}
function imprimirlista(lista){
    let imprimir = "[ ";
    for (item of lista){
        imprimir += item;
        imprimir += ", ";
    }
    imprimir += " ]";
    return imprimir;
}

var ListaUsuario = [];
function Addvalue(){
    const input = document.getElementById("siguientevalor");
    const val = input.value;
    ListaUsuario.push(val);
    const output = document.getElementById("Lista");
    output.innerText = imprimirlista(ListaUsuario);
}
function Erasevalue(){
    const input = document.getElementById("siguientevalor");
    const val = input.value;
    ListaUsuario.pop(val);
    const output = document.getElementById("Lista");
    output.innerText = imprimirlista(ListaUsuario);
}
function Clear(){
    const input = document.getElementById("siguientevalor");
    const val = input.value;
    ListaUsuario = [];
    const output = document.getElementById("Lista");
    output.innerText = imprimirlista(ListaUsuario);
}
function Calculate(){
    const promedio_output = document.getElementById("promedio")
    promedio_output.innerText = "Promedio: " + Number(promedio(ListaUsuario)).toFixed(2);
    const mediana_output = document.getElementById("mediana")
    mediana_output.innerText = "Mediana: " + Number(mediana(ListaUsuario)).toFixed(2);
    const moda_output = document.getElementById("moda")
    moda_output.innerText = "Moda: " + Number(moda(ListaUsuario)).toFixed(2);
}
