function isPalindrome(str) {
    const normalizedStr = str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, "");

    let nomeInvertido = ""; 

    for (let i = normalizedStr.length - 1; i >= 0; i--) {
        nomeInvertido += normalizedStr.charAt(i);
    }
    
    return nomeInvertido === normalizedStr;
}

function arrayMaxMin(numeros) {
    if (numeros.length === 0) {
        return "A lista está vazia.";
    }

    let menor = numeros[0];
    let maior = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) menor = numeros[i];
        if (numeros[i] > maior) maior = numeros[i];
    }

    return [menor, maior];
}