class NegociacaoService {
    obterNegociacoesDaSemana(callbackFun) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                switch (xhr.status) {
                    case 200:
                        callbackFun(null, JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                        break;

                    default:
                        console.log(xhr.responseText);
                        callbackFun('Nāo foi possível obter as negociações');
                        break;
                }
            }
        }

        xhr.send();
    }
}