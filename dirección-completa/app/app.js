let calle = prompt("Ingresa el nombre de la calle:");
let numero = prompt("Ingresa el número de la calle:");
let departamento = prompt("Ingresa el departamento (opcional):");
let codigoPostal = prompt("Ingresa el código postal:");
let ciudad = prompt("Ingresa el nombre de la ciudad:");
let pais = prompt("Ingresa el nombre del país:");

let direccion = calle + " " + numero + " ";
if (departamento !== "") {
  direccion += "depto " + departamento + " ";
}
direccion += codigoPostal + " " + ciudad + ", " + pais;

alert("Tu dirección completa es:\n" + direccion);