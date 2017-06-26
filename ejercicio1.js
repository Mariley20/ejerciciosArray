
var assert = require('assert');

function calcularMultiplicacion(numMultiplica,numValido){
  var resultado = numMultiplica.reduce(function(valorAnterior,valorActual){
    return parseInt(valorAnterior) * parseInt(valorActual);
  }) * parseInt(numValido);
  return resultado;
}

describe('Prueba 1', function(){
	it('multiplicacion1', function(){
		var resSuma = calcularMultiplicacion([4,4,5,12],9);
		assert.equal(8640, resSuma)
	});
	it('multiplicacion2', function(){
		var resSuma = calcularMultiplicacion([4,4,5,'12'],'9');
		assert.equal(8640, resSuma)
	});
	it('multiplicacion3', function(){
		var resSuma = calcularMultiplicacion([4, ,5,'12'],'9');
		assert.equal(2160, resSuma)
	});
	it('multiplicacion4', function(){
		var resSuma = calcularMultiplicacion([4, ,5,'12'],'0');
		assert.equal(0, resSuma)
	});
});