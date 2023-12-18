function calcular() {
    var valorTotal = parseFloat(document.getElementById("valorTotal").value);
    var valorSucata = parseFloat(document.getElementById("valorSucata").value);
    var vidaUtil = parseFloat(document.getElementById("vidaUtil").value);
    var tempoUso = parseFloat(document.getElementById("tempoUso").value);

    if (
        isNaN(valorTotal) ||
        isNaN(valorSucata) ||
        isNaN(vidaUtil) ||
        isNaN(tempoUso)
    ) {
        alert("Por favor adcione números válidos.");
        return;
    }

    var vidaTotal = vidaUtil * 12;
    var taxaDepreciacaoAnual = (valorTotal - valorSucata) / vidaTotal;
    var depreciacaoTotalAnual = taxaDepreciacaoAnual * tempoUso
    var depreciacaoTotal = depreciacaoTotalAnual * vidaUtil
    var depreciacaoTotalMensal = depreciacaoTotalAnual / 12
    var resultadoTotalAnual = "Depreciação Total anual: R$" + depreciacaoTotalAnual.toFixed(2);
    var resultadoTotalMensal = "Depreciação Total mensal: R$" + depreciacaoTotalMensal.toFixed(2);
    var resultadoAnual = "Depreciação Total: R$" + depreciacaoTotal.toFixed(2);

    document.getElementById("resultadoTotalAnual").innerHTML = resultadoTotalAnual;
    document.getElementById("resultadoTotalMensal").innerHTML = resultadoTotalMensal;
    document.getElementById("resultadoAnual").innerHTML = resultadoAnual;


  }