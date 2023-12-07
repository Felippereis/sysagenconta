let expenses = [];

        function addExpense() {
            const expenseInput = document.getElementById('expense');
            const expenseValue = parseFloat(expenseInput.value);

            if (!isNaN(expenseValue)) {
                expenses.push(expenseValue);
                updateExpenseList();
                calculateTotal();
            }

            expenseInput.value = '';
        }

        function updateExpenseList() {
            const expenseListElement = document.getElementById('expenseList');
            expenseListElement.innerHTML = '';
            
            expenses.forEach(expense => {
                const listItem = document.createElement('li');
                listItem.textContent = `R$ ${expense.toFixed(2)}`;
                expenseListElement.appendChild(listItem);
            });
        }

        function calculateTotal() {
            const total = expenses.reduce((acc, expense) => acc + expense, 0);
            const resultElement = document.getElementById('resultado');
            resultElement.textContent = `Total: R$ ${total.toFixed(2)}`;
        }

function calculateIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight !== '' && height !== '') {
        var imc = weight / (height * height);
        displayResult(imc);
    } else {
        alert('Por favor, preencha peso e altura.');
    }
}

function displayResult(imc) {
    var resultElement = document.getElementById('result');
    var resultMessage;

    if (imc < 18.5) {
        resultMessage = 'Abaixo do peso';
    } else if (imc < 25) {
        resultMessage = 'Peso normal';
    } else if (imc < 30) {
        resultMessage = 'Sobrepeso';
    } else {
        resultMessage = 'Obesidade';
    }

    resultElement.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>' + 'Classificação: ' + resultMessage;
}