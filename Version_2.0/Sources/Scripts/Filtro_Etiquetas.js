function extraer (texto, etqini, etqfin, i, vector) {
	var ind0, ind1, parte ="";
	ind0 = texto.indexOf(etqini);
	if (ind0 >= 0) {
		ind1 = texto.indexOf(etqfin);
		if (ind1 > ind0)
			parte = texto.substring(ind0+etqini.length, ind1);
	}
	if (parte != "" && i != undefined && vector != undefined) {
		contar(parte, vector);
	}
	return parte;
}
function contar (parte, vector) {
	switch (parte) {
		case "Importante":
			vector[0] = vector[0] + 1;
			break;
		case "Ayuda":
			vector[1] = vector[1] + 1;
			break;
		case "Error":
			vector[2] = vector[2] + 1;
			break;
		case "Pregunta":
			vector[3] = vector[3] + 1;
			break;
		case "Tarea":
			vector[4] = vector[4] + 1;
			break;
		case "Invalido":
			vector[5] = vector[5] + 1;
			break;
		case "Duplicado":
			vector[6] = vector[6] + 1;
			break;
		case "Solución":
			vector[7] = vector[7] + 1;
			break;
		default:
			break;
	}
	alert("Vector: "+vector);
}

/*
[Importante]
[Ayuda]
[Error]
[Pregunta]
[Tarea]
[Invalido]
[Duplicado]
[Solución]
*/