class Mensagem {
    constructor(texto = '') {
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        console.log(`texto: ${texto}`);
        this._texto = texto;
    }
}