var pieData = [
				{
					value: 16,
					color: "#e3e860",
					highlight: "#a9ad47",
					label: "Enviados"
				},
				{
					value: 11,
					color: "#eb5d82",
					highlight: "#b74865",
					label: "Recibidos"
				}
			];
	var barChartData = {
		labels : ["Enviados","Recibidos","Importantes"],
		datasets : [
			{
				fillColor : "#6b9dfa",
				strokeColor : "#ffffff",
				highlightFill: "#1864f2",
				highlightStroke: "#ffffff",
				data : [90,30,10]
			}
		]
	}	
		var lineChartData = {
			labels : ["Importante","Ayuda","Error","Pregunta","Tarea","Invalido","Duplicado","Solucion"],
			datasets : [
				{
					label: "Cristian Alba",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "#6b9dfa",
					pointColor : "#1e45d7",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [1,2,3,4,5,6,7,8,9]
				},
				{
					label: "Cristina Cespedes",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "#6b9dfa",
					pointColor : "#1e45d7",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [10,11,12,21,14,22,3,26]
				}
			]
		}
var ctx = document.getElementById("chart-area").getContext("2d");
var ctx3 = document.getElementById("chart-area3").getContext("2d");
var ctx4 = document.getElementById("chart-area4").getContext("2d");
window.myPie = new Chart(ctx).Pie(pieData);			
window.myPie = new Chart(ctx3).Bar(barChartData, {responsive:true});
window.myPie = new Chart(ctx4).Line(lineChartData, {responsive:true});
