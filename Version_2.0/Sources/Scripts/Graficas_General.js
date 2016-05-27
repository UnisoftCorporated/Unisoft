<script src="Chart.js"></script>
   <script>
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);};
    var randomColorFactor = function() {
        return Math.round(Math.random() * 255);};
    var randomColor = function(opacity) {
        return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.5') + ')';};
    var config = {
        type: 'radar',
        data: {labels: ["Fabian Cano", "Cristina Cespedes", "Cristian Alba", "Andrea Ochoa", "Fabian Barrios"],
            datasets: [{
			    label: "Duplicado",
			    borderColor: randomColor(0.4),
                backgroundColor: randomColor(0.5),
                pointBorderColor: randomColor(0.7),
                pointBackgroundColor: randomColor(0.5),
                pointBorderWidth: 1,
                data: [20, 62, 28, 58, 84]},]},
        options:
		{legend: {position: 'top',},title: {
			display: true,text: 'Gráfica estadísticas de interacción'},scale: {reverse: false,ticks: {beginAtZero: true}}}};
    window.onload = function() {
		window.myRadar = new Chart(document.getElementById("canvas"), config);};
    $('#randomizeData').click(function() {
        $.each(config.data.datasets, 
		function(i, dataset) {dataset.data = dataset.data.map(function() {
                return randomScalingFactor();});});
        window.myRadar.update();});
		</script>