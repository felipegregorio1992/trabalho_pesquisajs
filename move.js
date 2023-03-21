function limpa_formulário() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
} 
else {
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

       
        if(validacep.test(cep)) {

            
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            
            var script = document.createElement('script');

     
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

          
            document.body.appendChild(script);

        }
        else {
    
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
 
        limpa_formulário_cep();
    }
};


var checkbox = document.getElementById("myCheckbox");
var button = document.getElementById("myButton");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

button.addEventListener("click", function() {

});

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      alert("Aceito os termos e condições de uso do site. Meus dados serão utilizados para fins de cadastro e contato. Caso não deseje receber nossas novidades, basta desmarcar a caixa de seleção. Possivelmente, você receberá um e-mail de confirmação para participar de nossa famosa Centopeia Humana.");
    } else {
      alert("Checkbox desmarcado!");
    }
  });

  window.addEventListener("load", function() {
    alert("Bem vindo ao site de cadastro de clientes");
        
  });
  

