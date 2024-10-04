alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.randoom() * numeroMaximo + 1); // let = armazena informação.
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute nao for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;// PARA nao continua
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
    tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // codigo tenario
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);

//if (tentativas > 1) {
    //alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}