
var assert = require('assert');

function calculandoForEach(cadenaNumeros,x){
  var numMultiplos = "";
  cadenaNumeros.forEach(function multiplos(value){
    if(value % x == 0){
      numMultiplos += value +",";
    }
  });
  return numMultiplos;
}
describe('Prueba 1', function(){
	it('calculandoForEach-1', function(){
		var res = calculandoForEach([7,21,44,80,77,35],7);
		assert.equal('7,21,77,35,', res)
	});
	it('calculandoForEach-2', function(){
		var res = calculandoForEach([7,21,45,80,77,35],'5');
		assert.equal('45,80,35,', res)
	});
	
});