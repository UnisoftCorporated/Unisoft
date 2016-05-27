// ========================================================================================

var prueba = "[Prueba] Hola Mundo";
function extraer (texto, etqini, etqfin, i, vector) {
    var ind0, ind1, parte ="";
    ind0 = texto.indexOf(etqini);
    if (ind0 >= 0) {
        ind1 = texto.indexOf(etqfin);
        if (ind1 > ind0)
            parte = texto.substring(ind0+etqini.length, ind1);
    }
    if (parte != "" && i != undefined && vector != undefined) {
        //contar(parte, vector);
    }
    return parte;
}
test("Prueba extraer por etiqueta personal",function () {
    equal(extraer(prueba, '[', ']', 1, [0,1]), "Prueba" );
    ok(extraer(prueba, '[', ']', 1, [0,1]), "okay" );
    ok(extraer(prueba, '(', ')', 1, []), "okay" );
    ok(extraer(prueba, '[', ']', -1, [0,1]), "okay" );
    ok(extraer("", '[', ']', 1000, [0,1]), "okay" );
    ok(extraer("", '[', ']', 1000, [0,1]), "okay" );
    ok(extraer("", '[', ']', 0.4, [0,1]), "okay" );
    ok(extraer("", '[', ']', 0.4, ''), "okay" );
    ok(extraer("prueba", '[', ']', 1000, [8,9,]), "okay" );
    ok(extraer('a', '', 1, [0,1]), "okay" );
    ok(extraer("[imp]", '[',']', 1, [0,1,8,5]), "okay" );
    ok(extraer("[prueba]", 25, 1, [0,1]), "okay" );
    equal(extraer(prueba, '[', ']', 96.3, [0.5,1.5]), "Prueba" );
    equal(extraer(prueba, '[', ']', 'a', [0,1]), "Prueba" );
    equal(extraer("58.25", '[', ']', 'a', [0,1]), "Prueba" );
    equal(extraer("[58.25]", '[', ']', 'a', [0,1]), "58.25" );
    ok(extraer("[34]", '(', ')', 'pl', [0,1,9,8]), "okay" );
    ok(extraer("(hola)", '(', ')', 1000, [0,1,9,8]), "okay" );
    ok(extraer("[hola]", '(', ')', 1000, [0,1,9,8]), "okay" );
    ok(extraer("(hola)", '(', ')', -1000, [0,1]), "okay" );
    
});

// ========================================================================================