// Inicialização de variáveis globais
let totalJogos = 3; // Total de jogos disponíveis
let jogosAlugados = 1; // Número de jogos atualmente alugados

// Função para alterar o status de um jogo (alugar ou devolver)
function alterarStatus(id) {
    // Obter referência ao elemento do jogo clicado
    let gameClicado = document.getElementById(`game-${id}`);
    
    // Obter referências aos elementos de imagem e botão dentro do jogo
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    // Variáveis para armazenar o status atual e o novo status do jogo
    let statusAtual, novoStatus;

    // Verificar se a imagem possui a classe indicando que o jogo está alugado
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        statusAtual = 'devolver';
        novoStatus = 'devolvido';
    } else {
        statusAtual = 'alugar';
        novoStatus = 'alugado';
    }

    // Confirmar a mudança de status com o usuário
    if (confirmarMudancaStatus(statusAtual, novoStatus)) {
        // Atualizar a aparência e o estado interno do jogo com base no status atual
        if (imagem.classList.contains('dashboard__item__img--rented')) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            jogosAlugados++;
        }

        // Garantir que o número de jogos alugados nunca seja negativo
        if (jogosAlugados < 0) {
            jogosAlugados = 0;
        }
    }

    // Atualizar a exibição da contagem de jogos
    exibirContagemJogos();
}

// Função para confirmar a mudança de status com o usuário
function confirmarMudancaStatus(statusAtual, novoStatus) {
    let confirmar = confirm(`Deseja ${statusAtual} o jogo?`);
    if (confirmar) {
        alert(`O jogo foi ${novoStatus} com sucesso!`);
        return true;
    } else {
        alert(`Confirmação cancelada!`);
        return false;
    }
}

// Função para exibir a contagem de jogos na interface do usuário
function exibirContagemJogos() {
    // Atualizar os elementos HTML com as contagens atualizadas
    document.getElementById('totalJogos').textContent = totalJogos.toString();
    document.getElementById('jogosAlugados').textContent = jogosAlugados.toString();
    document.getElementById('jogosDisponiveis').textContent = (totalJogos - jogosAlugados).toString();
    
    // Exibir informações no console para fins de depuração
    console.log(`Total de jogos: ${totalJogos}`);
    console.log(`Jogos alugados: ${jogosAlugados}`);
    console.log(`Jogos disponíveis: ${totalJogos - jogosAlugados}`);
}
