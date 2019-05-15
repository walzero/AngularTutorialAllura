class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this.inputData = $('#data');
        this.inputValor = $('#valor');
        this.inputQuantidade = $('#quantidade');
    }

    adiciona(event) {
        event.preventDefault();

        console.log(this.inputData.value);
        console.log(this.inputValor.value);
        console.log(this.inputQuantidade.value);
    }
}