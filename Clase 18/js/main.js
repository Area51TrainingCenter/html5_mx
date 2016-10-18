var servicios = {
  rest: true,
  piscina: false,
  gym:true,
  sauna:false
}

var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
var s3 = document.getElementById('s3');
var s4 = document.getElementById('s4');

s1.className = servicios.rest;
s2.className = servicios.piscina;
s3.className = servicios.gym;
s4.className = servicios.sauna;


var info = '<h2>Browser Window</h2><p>Width: ' + window.innerWidth + '</p>';
info += '<p>Height: ' + window.innerHeight + '</p><hr>';
info += '<p>History: ' + window.history.length + '</p>';
info += '<p>Screen Width: ' + window.screen.width + '</p>';
info += '<p>Screen Height: ' + window.screen.height + '</p>';

info += '<hr><h2>document Info</h2><p>Titulo: ' + document.title + '</p>';
info += '<p>URL: ' + document.URL + '</p>';
info += '<p>Modificado: ' + document.lastModified + '</p>';


var msj = 'Home sweet home ';

var txt = '<p><b>Lenght: </b>' + msj.length + '</p>';
txt += '<p><b>Uppercase: </b>' + msj.toUpperCase() + '</p>';
txt += '<p><b>Lowercase: </b>' + msj.toLowerCase() + '</p>';
txt += '<p><b>Caracter 5: </b>' + msj.charAt(5) + '</p>';
txt += '<p><b>Primer ee: </b>' + msj.indexOf('ee') + '</p>';
txt += '<p><b>Ultimo e: </b>' + msj.lastIndexOf('e') + '</p>';
txt += '<p><b>Char index 0-4: </b>' + msj.substring(0,4) + '</p>';
txt += '<p><b>Reemplazar: </b>' + msj.replace('me', 'x') + '</p>';


var elem = document.getElementById('detalles');
elem.innerHTML = txt;

//alert('Pagina actual: ' + window.location);


function datos(fecha){
  var y = fecha.substring(0,4);
  var m = fecha.substring(4,6);
  var d = fecha.substring(6,8);

  var rst = 'Tu edad es: ' + (2016-y);
  rst += '\nNaciste el: ' + d + '/' + m + '/' + y.substring(2,4);

  alert(rst);
}


datos('19900102');






/* ============== */
