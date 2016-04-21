var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};
var config = {
    type: 'radar',
    data: {
        labels: ["Fabian Cano", "Cristina Cespedes", "Cristian Alba", "Andrea Ochoa", "Fabian Barrios"],
        datasets: [{
            label: "Correos Enviados",
            borderColor: randomColor(0.4),
            backgroundColor: randomColor(0.5),
            pointBorderColor: randomColor(0.7),
            pointBackgroundColor: randomColor(0.5),
            pointBorderWidth: 1,
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        },]
    },
    options: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Grafica tipo Radar'
        },
        scale: {
            reverse: false,
            ticks: {
                beginAtZero: true
            }
        }
    }
};
window.onload = function() {
    window.myRadar = new Chart(document.getElementById("canvas"), config);
};