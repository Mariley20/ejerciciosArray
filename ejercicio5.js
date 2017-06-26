
var assert = require('assert');

function ConvertirTemperatura(temperaturas){
  var resultado = "";
  resultado += temperaturas.map(function(i){
    return (i * (9/5))+32;
  })
  return resultado;
}
describe('Prueba 1', function(){
	it('ConvertirTemperatura-1', function(){
		var res = ConvertirTemperatura([20,32,34,12,16]);
		assert.equal('68,89.6,93.2,53.6,60.8', res)
	});
	it('ConvertirTemperatura-2', function(){
		var res = ConvertirTemperatura([4,4,5,'12']);
		assert.equal('39.2,39.2,41,53.6', res)
	});
});