function captura(caractere) {
    var numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML += caractere


    var limite = document.getElementById('visor').innerText
    console.log(limite.length)
  if (limite.length >= 16){
    document.getElementById('visor').innerHTML = numero.substring(0,numero.length +1)
    alert("Limite de caracteres exedido")
  }
 

    

}

function apagarTudo(){
    document.getElementById('visor').innerHTML = ""
}

function apagar(){
   var numero = document.getElementById('visor').innerHTML
   document.getElementById('visor').innerHTML = numero.substring(0,numero.length-1)
}

function calcular(){
    var teste = document.getElementById('visor').innerHTML;
    
    if (teste){
      document.getElementById('visor').innerHTML = eval(teste);
    }

    else {
        document.getElementById('visor').innerHTML = "erro"
        
    }
}