var elemento = document.getElementById('titulo');
elemento.className = 'alerta';

var elementos = document.getElementsByClassName('hot');
if(elementos.length > 2){
  var el = elementos[2];
  el.className = 'cold';
}

var tagElements = document.getElementsByTagName('li');
var el2 = tagElements[0];
el2.className = 'cold';

//var queryElements = document.querySelector('li.hot');
//queryElements.className = 'green';

var els = document.querySelectorAll('li.hot');
console.log("Elementos hot: " + els[0]);
//els[0].className = 'green';

for(var i=0; i<els.length; i++){
  els[i].className = 'green';
}

var startItem = document.getElementById('dos');
var previo = startItem.previousElementSibling;
var next = startItem.nextElementSibling;

previo.className = 'hot';
next.className = 'green';

var padre = document.getElementsByTagName('ul')[1];
var primerHijo = padre.firstElementChild;
var ultimoHijo = padre.lastElementChild;

primerHijo.className = 'cold';
ultimoHijo.className = 'cold';

/* 0===========ADD AND REMOVE ELEMENTS ======== */

var newEl = document.createElement('li');
var newText = document.createTextNode('Arroz');

var elJunior = "<li>Maiz</li>";

newEl.appendChild(newText);

var lista3 = document.getElementsByTagName('ul')[2];
lista3.appendChild(newEl);


var manzanas = document.getElementById('two');
lista3.removeChild(manzanas);



function agregar(){
  var cont = document.createElement('div');
  var file = '<br>'+
    '<label for="">Concepto</label>'+
    '<input type="text" name="concepto" value="">'+
    '<label for="">Monto</label>'+
    '<input type="text" name="monto" value="">'+
    '<button onclick="remover(this);" type="button" name="button">[ - ]</button>';

  cont.innerHTML = file;
  var form = document.getElementById('miForm');
  form.appendChild(cont);
}

function remover(el){
  var form = document.getElementById('miForm');
  form.removeChild(el.parentElement);
}





/* ------ */
