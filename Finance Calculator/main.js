let price = document.getElementById('price')
let downPayment = document.getElementById('downPayment')
let loanTerm = document.getElementById('loanTerm')
let interestRate = document.getElementById('interestRate')
let calculate = document.getElementById('calculate')
let result = document.getElementById('result')

calculate.addEventListener('click', function(){
    const loanAmount = price - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    
    const result = document.getElementById("result");
    result.textContent = `Monthly payment: $${monthlyPayment.toFixed(2)}`;
})