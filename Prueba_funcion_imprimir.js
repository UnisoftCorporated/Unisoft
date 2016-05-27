// ========================================================================================

var prueba = "[Prueba] Hola Mundo";
var prueba2 = "unisoft"
var prueba3 = 'NULL'
var a=3;
var b=8;
var c=12;
var prueba4 = "!hsdhf";

function appendPre(message) {
                var pre = document.getElementById('output');
                var textContent = document.createTextNode(message + '\n');
                return(textContent);
            }
test("Prueba imprimir en pantalla",function () {
    equal(appendPre(prueba), "Okay" );
    ok(appendPre( '['), "okay" );
    ok(appendPre( 1), "okay" );
    ok(appendPre([0,1]), "okay" );
    ok(appendPre(""), "okay" );
    ok(appendPre(-097656), "okay" );
    ok(appendPre(2,345), "okay" );
    ok(appendPre(true), "okay" );
    ok(appendPre(false), "okay" );
    ok(appendPre([3,4],[1,2]), "okay" );
    ok(appendPre(''), "okay" );
    equal(appendPre(prueba2), "Okay" );
    ok(appendPre(0), "okay" );
    ok(appendPre(98495808520), "okay" );
    ok(appendPre(prueba3), "okay" );
    ok(appendPre(34,234235,234), "okay" );
    ok(appendPre(a,b,c), "okay" );
    ok(appendPre(), "okay" );
    equal(appendPre(prueba4), "okay" );
    ok(appendPre(3*4), "okay" );


});

// ========================================================================================