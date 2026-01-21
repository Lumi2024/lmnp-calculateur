let chart;


window.updateChart = function(baseNet) {
const data = [
baseNet,
baseNet * 1.03,
baseNet * 1.06,
baseNet * 1.09,
baseNet * 1.12
];


if (chart) chart.destroy();


chart = new Chart(document.getElementById("chart"), {
type: 'line',
data: {
labels: ['Année 1','Année 2','Année 3','Année 4','Année 5'],
datasets: [{
label: 'Rentabilité nette projetée (€)',
data: data,
borderWidth: 2
}]
}
});
};
