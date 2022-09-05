function ponteiro() {
    document.body.style.cursor = "url('imagens/mata_mosca.png'), auto";

}



var altura = 0
var largura = 0


function areaJogo() {

    altura = window.innerHeight
    largura = window.innerWidth
}


areaJogo()


var velocidade
var vidas
var dificuldade


function inicio(velocidade) {
    dificuldade = document.getElementById("dificuldades").value

    localStorage.setItem('vidas', '3')

    if (dificuldade === "-- Selecione o nivel --") {
        alert("Selecione um nível para começar")
    } else if (dificuldade === "Normal") {
        localStorage.setItem("velocidade", "3000")
        window.location.href = 'game.html'
    } else if (dificuldade == "Difícil") {
        localStorage.setItem("velocidade", "2000")
        window.location.href = 'game.html'
    } else {
        localStorage.setItem("velocidade", "1000")
        window.location.href = 'game.html'
    }
}


function reiniciar() {
    window.location.href = "index.html"
}

var titulo = document.title

if (titulo === "Game") {
    var vel = localStorage.getItem("velocidade")
    console.log(vel)

    const controleTempo = setInterval(() => { timer(); }, 1000);
    const moscaAparece = setInterval(() => { aparece(); }, vel);
}


var i = -1
var statos = false

function posicaoAleatoria() {

    var posicaoX = Math.floor(Math.random() * largura)
    var posicaoY = Math.floor(Math.random() * (altura - 150))

    var mosquito = document.createElement("img")
    mosquito.src = "imagens/mosca.png"
    mosquito.className = "mosquito1"
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"

    document.body.appendChild(mosquito)

    velocidade = parseInt(localStorage.getItem("velocidade"))

    let classeRandom = Math.ceil(Math.random() * 3)

    let classe = Math.ceil(Math.random() * 3)
    classe.toString

    mosquito.className = "mosquito" + classe

    var flip = Math.round(Math.random() * -1)

    if (flip == -1) {
        mosquito.style.transform = " scaleX(-1)"
    } else {
        mosquito.style.transform = "scaleX(1)"
    }


    mosquito.addEventListener("click", function () { statos = true; mosquito.remove() })

    if (statos == false) {

        i += 1
        if (i <= 3) {
            document.getElementById("i" + i).src = "imagens/coracao_vazio.png"


        } else {
            window.location.href = "gameOver.html"
        }
    }
    const deletar = setTimeout(() => { mosquito.remove(), statos = false }, velocidade)
}

function timer() {
    var controle = parseInt(document.getElementById("timer").innerHTML)

    document.getElementById("timer").innerHTML = controle -= 1

    if (controle == 0) {
        window.location.href = "vitoria.html"

        clearInterval(controleTempo)

    }
}

function aparece() {

    const moscaAparece = setTimeout(() => { posicaoAleatoria(); }, vel / 2);


}


