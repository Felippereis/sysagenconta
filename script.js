let expenses = [];

function addExpense() {
    const expenseNameInput = document.getElementById('expenseName');
    const expenseAmountInput = document.getElementById('expenseAmount');

    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName !== '' && !isNaN(expenseAmount)) {
        const expense = { name: expenseName, amount: expenseAmount };
        expenses.push(expense);
        updateExpenseList();
        calculateTotal();
    }

    expenseNameInput.value = '';
    expenseAmountInput.value = '';
}

function updateExpenseList() {
    const expenseListElement = document.getElementById('expenseList');
    expenseListElement.innerHTML = '';
    
    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name}: R$ ${expense.amount.toFixed(2)}`;
        expenseListElement.appendChild(listItem);
    });
}

        function calculateTotal() {
            const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
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

function calculateCost() {
    /*
    const distance = parseFloat(document.getElementById('distance').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
    const price = parseFloat(document.getElementById('price').value);
    */
    const distanceInput = document.getElementById('distance');
    const consumptionInput = document.getElementById('consumption');
    const priceInput = document.getElementById('price');

    const distance = parseFloat(distanceInput.value);
    const consumption = parseFloat(consumptionInput.value);
    const price = parseFloat(priceInput.value);

    

    if (!isNaN(distance) && !isNaN(consumption) && !isNaN(price)) {
        const cost = (distance / consumption) * price;
        const resultElement = document.getElementById('resultgas');
        resultElement.textContent = `O custo total de gasolina é: R$ ${cost.toFixed(2)}`;
       // Zera os campos de entrada após o cálculo
       distanceInput.value = '';
       priceInput.value = '';
       consumptionInput.value = '';
        
    } else {
        alert('Por favor, preencha todos os campos com valores válidos.');
    }
       
}