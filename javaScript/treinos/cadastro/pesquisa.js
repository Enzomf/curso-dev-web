
var infoProdutos = Array()

infoProdutos['produto'] = Array()
infoProdutos['quantidade'] = Array()
infoProdutos['preco'] = Array()

    

function cadastro(){

 
    var produto = document.getElementById("produto").value;
        
    var quantidade = document.getElementById("quantidade").value
    
    var preco = document.getElementById("preco").value
    preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);




    if (infoProdutos["produto"].indexOf(produto) === -1){
  
        infoProdutos['produto'].push(produto)
        infoProdutos['quantidade'].push(quantidade)
        infoProdutos['preco'].push(preco)
        document.getElementById('mensagem').style ="color: green; font-weight: bold;"
        document.getElementById('mensagem').innerHTML = ('produto cadastrado com sucesso')

       
        
    }else{

        document.getElementById('mensagem').style ="color: red; font-weight: bold;"
        document.getElementById('mensagem').innerHTML = ('Produto já cadastrado no sistema')
       
    }

    
   
}

function pesquisa(){
    document.getElementById('cabeçalhoPesquisa').innerHTML = ""
    document.getElementById('quantidade1').innerHTML = ""
    document.getElementById('precoPesquisa').innerHTML =""
    
    var item = document.getElementById('pesquisa').value
    
    var controle =  infoProdutos['produto'].indexOf(item)

   if ( controle === -1) {
       document.getElementById('cabeçalhoPesquisa').innerHTML = "Não possuimos esse produto"
   }else {
       document.getElementById('cabeçalhoPesquisa').innerHTML = infoProdutos['produto'][controle]
       document.getElementById('quantidade1').innerHTML = 'Quantidade disponível: ' + infoProdutos['quantidade'][controle]
       document.getElementById('precoPesquisa').innerHTML = "Valor de cada unidade: " + infoProdutos['preco'][controle]
       
   }


}
