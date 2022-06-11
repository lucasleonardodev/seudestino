const elementoResposta = document.querySelector("#resposta")
const iptPergunta = document.querySelector("#ipt-pergunta")
const btnPergunta = document.querySelector("#btn")
const respostas = [
    "Sim!",
    "Não!",
    "Com certeza!",
    "Acredito que isso é impossível.",
    "Pergunte mais tarde.",
    "Absolutamente, SIM!",
    "Infelizmente não.",
    "Isso não será possível.",
    "Concentre-se e pergunte novamente.",
    "Será difícil mas sim.",
    "Sinto muito mas a resposta é não.",
]

function fazerPergunta() {

    if (iptPergunta.value == "") {
        alert("Escreva uma pergunta")
        return
    }

    btnPergunta.setAttribute("disabled", true)

    const pergunta = "<div>" + iptPergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    setTimeout(function () {
        elementoResposta.style.opacity = 0;
        btnPergunta.removeAttribute("disabled")
    }, 3000)
}