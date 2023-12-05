// codigo aabaixo correto funcioanndo
document.addEventListener('DOMContentLoaded', function() {
    exibirContas();
});

function adicionarConta() {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const vencimento = document.getElementById('vencimento').value;

    if (nome && valor && vencimento) {
        // Enviar dados para o servidor (usando AJAX ou fetch)
        // Implemente a lógica do backend aqui
        // Por exemplo, usando fetch:
        fetch('adicionar_conta.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, valor, vencimento }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                exibirContas()
                limparFormulario();
            } else {
                alert('Erro ao adicionar conta.');
            }
        });
    } else {
        alert('Preencha todos os campos.');
    }
    
}

function exibirContas() {
    // Obter dados do servidor (usando AJAX ou fetch)
    // Implemente a lógica do backend aqui
    // Por exemplo, usando fetch:
    fetch('obter_contas.php')
    .then(response => response.json())
    .then(data => {
        const listaContas = document.getElementById('listaContas');
        listaContas.innerHTML = '';

        if (data.length > 0) {
            data.forEach(conta => {
                const contaDiv = document.createElement('div');
                contaDiv.innerHTML = `
                    <p><strong> ${conta.id} - </strong>
                    Empresa: ${conta.nome} 
                    Valor R$ ${conta.valor} 
                    Vencimento: ${conta.vencimento}</p><br>
                `;
                listaContas.appendChild(contaDiv);
            });
        } else {
            listaContas.innerHTML = '<p>Nenhuma conta cadastrada.</p>';
        }
    });
}   

function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("vencimento").value = "";
}


// codigo abaixo tentando tratar pra remover contas
/*
document.addEventListener('DOMContentLoaded', function() {
    exibirContas();
});

function adicionarConta() {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const vencimento = document.getElementById('vencimento').value;

    if (nome && valor && vencimento) {
        // Enviar dados para o servidor (usando AJAX ou fetch)
        // Implemente a lógica do backend aqui
        // Por exemplo, usando fetch:
        fetch('adicionar_conta.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, valor, vencimento }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                exibirContas();
            } else {
                alert('Erro ao adicionar conta.');
            }
        });
    } else {
        alert('Preencha todos os campos.');
    }
}

function exibirContas() {
    // Obter dados do servidor (usando AJAX ou fetch)
    // Implemente a lógica do backend aqui
    // Por exemplo, usando fetch:
    fetch('obter_contas.php')
    .then(response => response.json())
    .then(data => {
        const listaContas = document.getElementById('listaContas');
        listaContas.innerHTML = '';

        if (data.length > 0) {
            data.forEach(conta => {
                const contaDiv = document.createElement('div');
                contaDiv.innerHTML = `
                    <p><strong>${conta.nome}</strong> - R$ ${conta.valor} (Vencimento: ${conta.vencimento})</p>
                    <!-- Adicione esses botões dentro da div 'contaDiv' no loop que exibe as contas -->
                    
                `;
                listaContas.appendChild(contaDiv);
            });
        } else {
            listaContas.innerHTML = '<p>Nenhuma conta cadastrada.</p>';
        }
    });
}

// ...

function exibirContas() {
    // ...

    if (data.length > 0) {
        data.forEach(conta => {
            const contaDiv = document.createElement('div');
            contaDiv.innerHTML = `
                <p><strong>${conta.nome}</strong> - R$ ${conta.valor.toFixed(2)} (Vencimento: ${conta.vencimento})</p>
                <button onclick="removerConta(${conta.id})">Remover</button>
                <button onclick="pagarConta(${conta.id})">Pagar</button>
            `;
            listaContas.appendChild(contaDiv);
        });
    }

    // ...
}

function removerConta() {
    // Implemente a lógica de remoção no backend (usando AJAX ou fetch)
    // Por exemplo, usando fetch:
    fetch('remover_conta.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            exibirContas();
        } else {
            alert('Erro ao remover conta.');
        }
    });
}

function pagarConta() {
    // Implemente a lógica de pagamento no backend (usando AJAX ou fetch)
    // Por exemplo, usando fetch:
    fetch('pagar_conta.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            exibirContas();
        } else {
            alert('Erro ao marcar conta como paga.');
        }
    });
}
*/