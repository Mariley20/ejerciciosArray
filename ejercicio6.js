var assert = require('assert');

function calcularProducto(numMultiplica){
  
  var resultado = numMultiplica.reduce(function(valorAnterior,valorActual){
    return parseInt(valorAnterior) * parseInt(valorActual);
  });
  
  return resultado;
}

describe('Prueba 1', function(){
	it('calcularProducto-1', function(){
		var res = calcularProducto([2,2,4,1,6]);
		assert.equal(96, res)
	});
	it('calcularProducto-2', function(){
		var res = calcularProducto([4,4,5,'12']);
		assert.equal(960, res)
	});
});