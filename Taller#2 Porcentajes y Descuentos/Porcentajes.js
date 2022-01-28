var cupones = {
    "nfl2022": 10,
    "vamosrams": 20,
    "Ruffo": 50,
    "Kira": 50
}

function aplicardescuento(precio,descuento){
    var preciofinal = precio * ((100-descuento)/100);
    return preciofinal;
}
function CalcularDescuento(){
    const input1 = document.getElementById("precio");
    const precio = input1.value;
    const input2 = document.getElementById("descuento");
    const descuento = input2.value;
    const output = document.getElementById("resultado");
    output.innerText = "Precio con descuento $" + String(aplicardescuento(precio,descuento).toFixed(2));
}
function AplicarCupon(){
    const input = document.getElementById("coupon");
    const codigo = input.value;
    const input1 = document.getElementById("precio");
    const precio = input1.value;
    const input2 = document.getElementById("descuento");
    const descuento = input2.value;
    const output = document.getElementById("resultadocupon");
    output.innerText = "Precio con Cupon $" + String(aplicardescuento(aplicardescuento(precio,descuento).toFixed(2),cupones[codigo]));
}