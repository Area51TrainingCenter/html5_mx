
//document.write('<h1>Hola Mundo</h1>');

var precio = 5;
var cantidad;
var total;

//var precio, cantidad, total;
//var precio=5, cantidad=14, total=precio*cantidad;



cantidad = 14;
total = precio * cantidad;

var titulo = document.getElementById('valor');

titulo.textContent = 'El precio es: ' + total;

/* ======= VARBLES STRING ====== */
var usuario;
var mensaje;

usuario = 'JORGE ';
mensaje = 'Bienvenido al sistema.';

var nombre = document.getElementById('nombre');
var contenido = document.getElementById('contenido');

nombre.textContent = usuario;
contenido.textContent = mensaje;

/* ======= VARBLES BOOLEAM ====== */

var enStock;
var shipping;
enStock = true;
shipping = false;

var ele1 = document.getElementById('stock');
var ele2 = document.getElementById('shipping');

ele1.className = enStock;
ele2.className = shipping;

/********* ARRAY *********/

var color;
color = ['red', 'black', 'lime'];
color[1] = 'beige';

var colorElemento = document.getElementById('miColor');
colorElemento.textContent = color[0]+'-'+color[1]+'-'+color[2];

/********* OPERADORES ARITMETICOS *********/

var subtotal = 13 + 1 * 5;
subtotal = (13 + 1) * 5;

/*******IVG ***/
var precios = [5,6,3];

document.getElementById('total').textContent = 'S/. ' + (precios[0]+precios[1]+precios[2]);
document.getElementById('igv').textContent = 'S/. ' + (precios[0]+precios[1]+precios[2])*0.18;
var total = precios[0]+precios[1]+precios[2];
var roundIGV = Math.round(total * 0.18 * 10) / 10;


var igv = document.getElementById('igv');
igv.textContent = 'S/.' + roundIGV;













/******************/
