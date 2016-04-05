function MaiorEMenor(){
	var maior;
	var menor;

	var clazz = {
		encontra:function(num){
		
			menor = Number.MAX_VALUE;
			maior = Number.MIN_VALUE;

			num.forEach(function(num){
				if(num < menor) menor = num;
				if(num > maior) maior = num;
			});
		},
		pegaMenor : function(){
			return menor;
		},
		pegaMaior : function(){
			return maior;
		}
	};

	return clazz;
}