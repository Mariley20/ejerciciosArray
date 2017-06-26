
var assert = require('assert');

function calculandoMap(arreglo){
  var resultado = "";
  resultado += arreglo.map(function(i){
    return ( i * 2 ) + 1;
  })
  return resultado;
}

describe('Prueba 1', function(){
	it('calculandoMap-1', function(){
		var res = calculandoMap([2,5,7,2,3,8,10]);
		assert.equal('5,11,15,5,7,17,21', res)
	});
	it('calculandoMap-2', function(){
		var res = calculandoMap([4,4,5,'12']);
		assert.equal('9,9,11,25', res)
	});
});