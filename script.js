function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    let categoria;

    if (imc < 18.50) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.50 && imc < 24.99) {
        categoria = "Peso normal";
    } else if (imc >= 25.00 && imc < 29.99) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade"; 
    }

    return {
        imc: imc.toFixed(2),
        categoria: categoria
    };
}

document.getElementById('calcular').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (peso > 0 && altura > 0) {
        const resultado = calcularIMC(peso, altura);
        document.getElementById('resultado').innerText = `IMC: ${resultado.imc}, Categoria: ${resultado.categoria}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
    }
});
