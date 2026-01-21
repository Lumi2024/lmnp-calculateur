document.getElementById("lmnpForm").addEventListener("submit", e => {
e.preventDefault();


const price = +document.getElementById("price").value;
const rentMonthly = +document.getElementById("rent").value;
const charges = +document.getElementById("charges").value;
const taxes = +document.getElementById("taxes").value;
const amort = +document.getElementById("amort").value;


const rentAnnual = rentMonthly * 12;
const net = rentAnnual - charges - taxes - amort;
const yieldNet = (net / price) * 100;


document.getElementById("result").innerHTML = `
<h2>Résultats</h2>
<p>Revenu brut annuel : <strong>${rentAnnual.toLocaleString()} €</strong></p>
<p>Revenu net annuel : <strong>${net.toLocaleString()} €</strong></p>
<p>Rendement net : <strong>${yieldNet.toFixed(2)} %</strong></p>
`;


window.updateChart(net);
});
