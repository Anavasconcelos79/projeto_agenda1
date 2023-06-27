const form = document.getElementById('formulario');
const nome = [];
const numero = [];

let linhas = " ";

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeCadastrado.value = "";
    inputNumeroTelefone.value = "";

    function atualizaTabela() {
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;
    }
}