function Agendamento(){

	var clazz ={
		para : function(consulta){
			var umDiaEmMillisegundo = 1000*60*60*24;
			var vinteDiasEmMillisegundos = umDiaEmMillisegundo*20;
			
			var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMillisegundos);
			while(novaData.getDay() == 0 || novaData.getDay == 6) novaData = new Date(novaData.getTime()+umDiaEmMillisegundo)
			
			var novaConsulta = new Consulta(consulta.getNome(),consulta.getProcedimentos(),consulta.isParticular(),true,novaData);
			return novaConsulta;
		}
	};

	return clazz;
}

/*Opcional: Números romanos
Se você quiser praticar TDD ainda mais, resolva o problema dos numerais romanos. Escreva uma classe que recebe uma string (por exemplo, "I", "IV", "XVI", etc) e a transforme em número (1, 4, 16, etc).*/