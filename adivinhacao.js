// Gera um número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let historico = [];
let limiteTentativas = 5;

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
    tentativas++;
    historico.push(chute);

    historicoTexto.textContent = "Histórico: " + historico.join(", ");

    // Verifica se acertou
    if (chute === numeroSecreto) {

        resultado.textContent = "Acertou! fez o minímo igual ela fez por vc! 👍 " + tentativas + " tentativas!";

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

        resultado.textContent =  "📈 Tá mirando onde? No rodapé da tela? KKK"

    }

    else {

        resultado.textContent = "📉 Abaixa esse chute, tá mais perdido que o thaciano em campo";

    }

}
