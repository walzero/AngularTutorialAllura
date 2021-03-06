class NegociacaoService {
    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/semana');

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    switch (xhr.status) {
                        case 200:
                            resolve(JSON.parse(xhr.responseText)
                                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                            break;

                        default:
                            console.log(xhr.responseText);
                            reject('Nāo foi possível obter as negociações da semana');
                            break;
                    }
                }
            }

            xhr.send();
        });
    }

    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/anterior');

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    switch (xhr.status) {
                        case 200:
                            resolve(JSON.parse(xhr.responseText)
                                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                            break;

                        default:
                            console.log(xhr.responseText);
                            reject('Nāo foi possível obter as negociações da semana anterior');
                            break;
                    }
                }
            }

            xhr.send();
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/retrasada');

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    switch (xhr.status) {
                        case 200:
                            resolve(JSON.parse(xhr.responseText)
                                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                            break;

                        default:
                            console.log(xhr.responseText);
                            reject('Nāo foi possível obter as negociações da semana retrasada');
                            break;
                    }
                }
            }

            xhr.send();
        });
    }
}