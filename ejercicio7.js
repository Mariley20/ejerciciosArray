var assert = require('assert');

function calcularFechaNacimiento(edades){
  var fecha = new Date();
  var ano = fecha.getFullYear();
  var aniosPares = "";
  edades.forEach(function anoNacimiento(value){
    if(value % 2 == 0 && value > 18){
      anio = ano - value;
      aniosPares += anio;
    }
  });
return aniosPares;
}

describe('Prueba 1', function(){
	it('calcularFechaNacimiento-1', function(){
		var res = calcularFechaNacimiento([20,16,89,6]);
		assert.equal('1997', res)
	});
	it('calcularFechaNacimiento-2', function(){
		var res = calcularFechaNacimiento([19,40,5,'12']);
		assert.equal(1977, res)
	});
});