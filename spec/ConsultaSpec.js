describe("Consulta",function(){
	var guilherme;

	beforeEach(function(){
		guilherme = new PacienteBuilder().constroi();
	});

	describe("Consulta do tipo retorno",function(){
		it("nao deve cobrar nada se for um retorno",function(){
			var consulta = new Consulta(guilherme,[],true,true);
			expect(consulta.preco()).toEqual(0);
		});
	});
	

	it("deve cobrar 25 por cada procedimeno comum",function(){
		var consulta = new Consulta(guilherme,['proc1','proc2'],false,false);
		expect(consulta.preco()).toEqual(50);
	});

	it("deve cobrar preco especifico dependendo do procedimento",function(){
		var consulta = new Consulta(guilherme,["procedimento-comum","raio-x","procedimento-comum","gesso"],false,false);
		expect(consulta.preco()).toEqual(25+55+25+32);
	});
})