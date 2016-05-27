
			function conteo (cant,labelIds,query) {							
				var cantidad = cant;				
				alert("integrante : "+query+ " label : "+labelIds + " cantidad : "+cantidad);				
			return cantidad;
			}	

test("Prueba conteo de mensajes",function () {
	
    ok(conteo(10, [', '], 'Hola'), "okay" );
	ok(conteo(1000000000, [','], 'Hola'), "okay" );
    ok(conteo(1000000000, ['Im,SE'], 'Hola'), "okay" );
	ok(conteo(0.4, ['Im,SE'], 'Hola'), "okay" );
	ok(conteo('a', ['Im,SE'], 'Hola'), "okay" );
	ok(conteo('cantidad', ['Im,SE'], 'Hola'), "okay" );
	ok(conteo(20, ['enviados,recibidos'], 'Hola'), "okay" );
	ok(conteo(20, '', 'Hola'), "okay" );
	ok(conteo('', ['Im,SE'], 'Hola'), "okay" );
	ok(conteo(30, ['Im,SE'], 10), "okay" );
	ok(conteo(10, ['Im,SE'], 0.45), "okay" );
	ok(conteo(10, ['Im,SE'], 'a'), "okay" );
	ok(conteo(10,'integrante',''), "okay" );
	equal(conteo(10,'' , 'integrante'),"10" );
	equal(conteo(10,'' , 'integrante'),"40" );
	equal(conteo(0.4,[''],''),"100" );
	equal(conteo('a',[''],''),"80.7" );
	equal(conteo('cantidad',[''],''),"[]" );
	equal(conteo('56',[''],'34'),"34" );
	equal(conteo('',['enviados'],'integrante'),"34" );    
});