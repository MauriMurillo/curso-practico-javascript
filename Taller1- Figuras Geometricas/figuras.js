function perimeterSquare(lado){
    return lado * 4;
}
function areaSquare(lado){
    return lado ** 2;
}
function perimetertriangle(lado1,lado2,lado3){
    return Number(lado1) + Number(lado2) + Number(lado3);
}
function areatriangle(base,altura){
    return (base * altura) / 2;
}
function perimeterCircle(radius){
    return  2 * radius * Math.PI;
}
function areaCircle(radius){
    return (radius ** 2 ) * Math.PI;
}

function Square(){
    var input  = document.getElementById("side-square");
    var side = input.value;
    var output = document.getElementById("perimeter-square");
    var output2 = document.getElementById("area-square");
    output.value = perimeterSquare(side);
    output2.value = areaSquare(side);
}
function Triangle(){
    var input1 = document.getElementById("base-triangle");
    var input2 = document.getElementById("height-triangle");
    var input3 = document.getElementById("side2-triangle");
    var input4 = document.getElementById("side3-triangle");
    var base = input1.value;
    var height = input2.value;
    var side2 = input3.value;
    var side3 = input4.value;
    var output = document.getElementById("perimeter-triangle");
    var output2 = document.getElementById("area-triangle");
    output.value = perimetertriangle(base,side2,side3);
    output2.value = areatriangle(base,height);
}
function Circle(){
    var input  = document.getElementById("radius-circle");
    var radius = input.value;
    var output = document.getElementById("perimeter-circle");
    var output2 = document.getElementById("area-circle");
    output.value = perimeterCircle(radius).toFixed(3);
    output2.value = areaCircle(radius).toFixed(3);
}
