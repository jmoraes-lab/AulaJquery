fetch('https://api-aluno.meuapp.net.br/api/eventos', {
    method: 'GET'
})
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (dados) {
        dados.forEach(function (item) {
            document.querySelector('#dados').innerHTML += `
            <tr>
            <td><button class="btn btn-danger">Apagar</button></td>
            <td>${item.nome}</td>
            <td>${item.contato}</td>
            <td>${item.data} - ${item.hora}</td>
            <td>${item.endereco.logradouro}, ${item.endereco.bairro}</td>
            </tr>
            `;
        })
    })