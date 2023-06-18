function pegaCPF() {
    cpf = document.getElementById('cpf').value
  
    if (validarCPF(cpf)) {
      let result = document.getElementById('result');
      result.innerHTML = "CPF Válido";
      result.style.color = "green"
    } else {
      let result = document.getElementById('result');
      result.innerHTML = "CPF Inválido";
      result.style.color = "red"
    }
  }
  
  function validarCPF() {
    cpf = cpf.replace(/[^\d]+/g, '');
  
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    var soma = 0;
    for (var i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
  
    var resto = soma % 11;
    var digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
  
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
      return false;
    }
  
    soma = 0;
    for (var i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
  
    resto = soma % 11;
    var digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
  
    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
    }
  
    return true;
  }
  
