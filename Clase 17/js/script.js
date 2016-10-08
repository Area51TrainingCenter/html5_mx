var mensaje = 'Bienvenidos a nuestro sistema.';



function showMsj(){
  var elem = document.getElementById('msj');
  elem.textContent = mensaje;
}
showMsj();


function suma(num1,num2){
  var elem = document.getElementById('msj');
  elem.textContent = num1+num2;
}
suma(5,8);


function getIGV(monto){
  var elem = document.getElementById('msj');
  elem.textContent = 'S/. ' + monto * 0.18;
}
getIGV(2000);

function getEdad(f_nac){
  return 2016 - f_nac;
}

var elem = document.getElementById('msj');
elem.textContent = getEdad(1988);


//======================

var persona = {

  nombre : 'Sergio',
  edad : 27,
  profesion : 'Ing',
  pasatiempos : ['futbol','ps4','ajedrez'],
  genero : true,
  sueldo : 5000,

  igv : function(bono){
          return (this.sueldo * 0.18)-bono;
        }

};

var t_nom = document.getElementById('nom');
t_nom.textContent = persona.igv(100);


//======================


function Persona(nombre, edad, genero){
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero
}

var ella = new Persona('Janeth', 23, 'Femenino');
var el = new Persona('Roberto', 34, 'Masculino');

var saludo = "Hola, mi nombre es " +
             ella.nombre + ", mi edad es "+
             ella.edad + ", un gusto conocerte.";

alert(saludo);













/**********************/
