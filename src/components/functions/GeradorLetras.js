export const gerarLetras = () => {
    const caracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let resultado = "";
    
    for (let i = 0; i < 10; i++) {
        const indice = Math.floor(Math.random() * caracters.length);
        resultado += caracters[indice];
    }
    
    return resultado
}