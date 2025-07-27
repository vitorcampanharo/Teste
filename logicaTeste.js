let corAtual = 'blue';
const intervalo = setInterval(() => {
    document.body.style.backgroundColor = corAtual;
    corAtual = (corAtual === 'blue') ? 'green' : 'blue';
}, 500);

document.getElementById('btnParar').onclick = function() {
    clearInterval(intervalo);
};