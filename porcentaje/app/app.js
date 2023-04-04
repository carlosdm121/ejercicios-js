let numero = prompt("Ingresa un número:");
let porcentaje = prompt("Ingresa el porcentaje que deseas obtener del número:");

let resultado = (parseInt(numero) * parseInt(porcentaje)) / 100;

alert("El " + porcentaje + "% de " + numero + " es: " + resultado);