function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputMessage').textContent = encryptedText || "Ningún mensaje fue encontrado";
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputMessage').textContent = decryptedText || "Ningún mensaje fue encontrado";
}

function copyText() {
    const outputMessage = document.getElementById('outputMessage').textContent;
    navigator.clipboard.writeText(outputMessage).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}