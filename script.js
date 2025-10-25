let currentBalance = 0;

function deposit() {
    const balanceInput = document.getElementById('balance');
    const transactionInput = document.getElementById('transaction');
    const resultElement = document.getElementById('result');
    const newBalanceElement = document.getElementById('newBalance');
    
    const balance = parseFloat(balanceInput.value) || 0;
    const depositAmount = parseFloat(transactionInput.value) || 0;
    
    if (depositAmount <= 0) {
        resultElement.textContent = "Please enter a valid deposit amount.";
        resultElement.style.color = "#e74c3c";
        return;
    }
    
    currentBalance = balance + depositAmount;
    
    resultElement.textContent = `Deposited: $${depositAmount.toFixed(2)}`;
    resultElement.style.color = "#27ae60";
    newBalanceElement.textContent = `New Balance: $${currentBalance.toFixed(2)}`;
    
    // Update balance input with new balance
    balanceInput.value = currentBalance.toFixed(2);
    transactionInput.value = "";
}

function withdraw() {
    const balanceInput = document.getElementById('balance');
    const transactionInput = document.getElementById('transaction');
    const resultElement = document.getElementById('result');
    const newBalanceElement = document.getElementById('newBalance');
    
    const balance = parseFloat(balanceInput.value) || 0;
    const withdrawAmount = parseFloat(transactionInput.value) || 0;
    
    if (withdrawAmount <= 0) {
        resultElement.textContent = "Please enter a valid withdrawal amount.";
        resultElement.style.color = "#e74c3c";
        return;
    }
    
    if (withdrawAmount > balance) {
        resultElement.textContent = "Insufficient funds for withdrawal.";
        resultElement.style.color = "#e74c3c";
        return;
    }
    
    currentBalance = balance - withdrawAmount;
    
    resultElement.textContent = `Withdrawn: $${withdrawAmount.toFixed(2)}`;
    resultElement.style.color = "#e74c3c";
    newBalanceElement.textContent = `New Balance: $${currentBalance.toFixed(2)}`;
    
    // Update balance input with new balance
    balanceInput.value = currentBalance.toFixed(2);
    transactionInput.value = "";
}

function calculateInterest() {
    const balanceInput = document.getElementById('balance');
    const transactionInput = document.getElementById('transaction');
    const resultElement = document.getElementById('result');
    const newBalanceElement = document.getElementById('newBalance');
    
    const balance = parseFloat(balanceInput.value) || 0;
    const interestRate = parseFloat(transactionInput.value) || 0;
    
    if (interestRate <= 0) {
        resultElement.textContent = "Please enter a valid interest rate.";
        resultElement.style.color = "#e74c3c";
        return;
    }
    
    const interest = balance * (interestRate / 100);
    currentBalance = balance + interest;
    
    resultElement.textContent = `Interest Earned: $${interest.toFixed(2)} (${interestRate}%)`;
    resultElement.style.color = "#3498db";
    newBalanceElement.textContent = `New Balance: $${currentBalance.toFixed(2)}`;
    
    // Update balance input with new balance
    balanceInput.value = currentBalance.toFixed(2);
    transactionInput.value = "";
}

function resetCalculator() {
    document.getElementById('balance').value = "";
    document.getElementById('transaction').value = "";
    document.getElementById('result').textContent = "";
    document.getElementById('newBalance').textContent = "";
    currentBalance = 0;
}