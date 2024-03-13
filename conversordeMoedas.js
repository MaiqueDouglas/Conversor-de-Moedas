function calcular() {
    const taxaEuroReal = 5.44;
    const taxaDollarReal = 4.97;
    const taxaLibraReal = 6.40;
  
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const valorOrigem = parseFloat(document.getElementById('valorOrigem').value);
  
    let valorConvertido;
  
    switch (moedaOrigem) {
      case 'euro':
        valorConvertido = valorOrigem * taxaEuroReal;
        break;
      case 'dollar':
        valorConvertido = valorOrigem * taxaDollarReal;
        case 'libra':
            valorConvertido = valorOrigem * taxaLibraReal;
            break;
          default:
            alert('Moeda de origem inválida');
            return; 
        }
      
        document.getElementById('valorConvertido').value = valorConvertido.toFixed(2);
      }
    
    