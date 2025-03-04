var clubes = [];

function adicionarClube() {
    var inClube = document.getElementById("inClube");

    var clube = inClube.value;

    if (clube == "") {
        alert("Insira um clube...")
        inClube.focus();
        return;
    } else {
        clubes.push(clube);
        listarClubes();
    }
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);

function listarClubes() {

    lista = "";
    for (i = 0; i < clubes.length; i++) {
        lista +=  (i + 1) + ". " + clubes[i] + "\n"
    }

    document.getElementById("outClubes").textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function montarTabela() {

    copia = [];
    for (i = 0; i < clubes.length; i++){
        copia.push(clubes[i]);
    }

    if (clubes.length % 2 == 0){
    lista = "";
    for (i = 0; i < clubes.length / 2; i++) {
        var primeiro_time = copia[0];
        var ultimo_time = copia.length - 1;
        var ultimo_time_2 = copia[ultimo_time];
        lista += primeiro_time + " x " + ultimo_time_2 + "\n"

        copia.shift(0);
        copia.pop();
    }
    document.getElementById("outClubes").textContent = lista;
    } else {
        alert("Numero não é par, impossivel montar a tabela");
        inClube.focus();
    }
}

var btMontarTabela = document.getElementById("btMontarTabela");
btMontarTabela.addEventListener("click", montarTabela);

