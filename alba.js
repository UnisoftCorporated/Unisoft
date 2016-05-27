
			function comprobar (user,cant,etiqueta){
			var asigna = user +" "+ cant +" "+etiqueta;
			
			return cant;
			} 	

test("Prueba comprobar",function () {
	
    ok(comprobar('cristian', 1,'RECIBIDOS'), "okay" );
	ok(comprobar('cristian', 999999, 'HOLA'), "okay" );
	ok(comprobar('cristian', -999999, 'enviado'), "okay" );
	ok(comprobar('', 999999, 'yes'), "okay" );
	ok(comprobar('cristian', '', 'RECIBIDOS'), "okay" );
  	ok(comprobar('cristian', 999999, ''), "okay" );
	equal(comprobar('cristian', 1, 'stp'), "okay" );
	equal(comprobar('cristian', 1, 'RECIBIDOS'), 1.5 );
	equal(comprobar('', 1, 'hola'), 1 );
	equal(comprobar('cristian', 1, 'error'), "okay" );
	ok(comprobar(188, '', ['hola,dos']), "okay" );
	ok(comprobar('adios', '#', []), "okay" );
	ok(comprobar([5,4], 'yes', 'error'), "okay" );
	ok(comprobar('marca', ['no',5], ['hola,dos']), "okay" );
	equal(comprobar('cantidad',[''],''),"[]" );
	ok(comprobar(1.7, '', 'adios'), "okay" );
	ok(comprobar(188, '', true), "okay" );
	ok(comprobar('', '', ''), "okay" );
	ok(comprobar(188, 100, -0.0000000000000000001), "okay" );
	equal(comprobar('ayer', true, 'ayuda'), true );
});