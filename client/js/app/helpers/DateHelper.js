class DateHelper {

    constructor() {
        throw new Error('DateHelper nao necessita de instanciacao!');
    }
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        if (!/^\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('A data precisa estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}