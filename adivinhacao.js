// Gera um número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let historico = [];
let limiteTentativas = 5;
console.log("by: @erickwrq")

function guessNumber() {
    

    let chute = Number(document.getElementById("guessInput").value);

    let resultado = document.getElementById("result");
    let historicoTexto = document.getElementById("historico");

    // Verifica se o número é válido
    if (chute < 1 || chute > 100 || isNaN(chute)) {
        resultado.textContent = "Digite um número entre 1 e 100.";
        return;
    }

    // Conta a tentativa e salva no histórico

    if (historico.includes(chute)){
        resultado.textContent = "Você já tentou esse número crlh!";
        return;
    }
    
    tentativas++;
    historico.push(chute);
    
    console.log("push", chute);

    historicoTexto.textContent = "Historico: " + historico.join(", ");

    // Verifica se acertou
    if (chute === numeroSecreto) {

        resultado.textContent = "Você acertou. Vou fingir que fiquei impressionado.";

        // Reinicia o jogo
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        tentativas = 0;
        historico = [];

    }

    // Verifica se acabou as tentativas
    else if (tentativas >= limiteTentativas) {

        resultado.textContent = " Perdeu otário kkkk\nEra: " + numeroSecreto;

        // Reinicia o jogo
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        tentativas = 0;
        historico = [];

    }

    // Dicas
    else if (chute < numeroSecreto) {

        resultado.textContent =  "📈 O número é maior, só não maior que o Santos Futebol Clube";

    }

    else {

        resultado.textContent = "📉 Abaixa esse chute, tá mais perdido que o thaciano em campo";

    }

}
