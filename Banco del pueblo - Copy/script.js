// Script for Banco del Pueblo

// DOM Elements
const loanAmountInput = document.getElementById('loan-amount');
const interestRateInput = document.getElementById('interest-rate');
const loanTermInput = document.getElementById('loan-term');
const calculateButton = document.getElementById('calculate');
const resultDisplay = document.getElementById('result');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Authentication Mock
const users = [{username: 'user1', password: 'pass1'}, {username: 'user2', password: 'pass2'}];

function authenticate(username, password) {
    return users.some(user => user.username === username && user.password === password);
}

// Navigation
function navigateTo(page) {
    window.location.href = `${page}.html`;
}

// Mobile Menu
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Loan Calculation Logic
calculateButton.addEventListener('click', () => {
    const loanAmount = parseFloat(loanAmountInput.value);
    const interestRate = parseFloat(interestRateInput.value) / 100 / 12; // Monthly
    const loanTerm = parseInt(loanTermInput.value) * 12; // Months

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;

    resultDisplay.innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}<br>Total Payment: ${totalPayment.toFixed(2)}<br>Total Interest: ${totalInterest.toFixed(2)}`;
});
