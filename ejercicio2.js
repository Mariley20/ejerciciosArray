
var assert = require('assert');

function calculandoFilter(numCelular,numValido){
    
    var resultado = numCelular.filter(function(n){
      var tresUltimos = n.substr(n.length-3, n.length);
      var tresPrimeros = n.substr(0, 3);
      return tresPrimeros  == numValido || tresUltimos == numValido;
    });
    return resultado;
}

describe('prueba 1', function(){
	it("calcularFilter1", function(){
		var res = calculandoFilter(['784123123','355676784','3423543554'],'784');
		assert.equal('784123123,355676784', res)
	});
});