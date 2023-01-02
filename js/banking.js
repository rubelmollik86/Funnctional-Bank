function getInputevalue(inputId) {
    const inputeField = document.getElementById(inputId);
    const inputAmountText = inputeField.value;
    const totalAmount = parseFloat(inputAmountText);
    // clear input clear
    inputeField.value = '';
    return totalAmount;
}




// Balance Deposite and add total balance
document.getElementById('Deposite-Button').addEventListener('click', function () {

    // const depositeInpute = document.getElementById('Input-Deposite');
    // const depositeAmountText = depositeInpute.value;
    // const depositeAmount = parseFloat(depositeAmountText);
    const depositeAmount = getInputevalue('Input-Deposite');


    // get current deposite
    const depositeTotal = document.getElementById('Deposite-Total');
    const depositeTotalText = depositeTotal.innerText;
    const previousdepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousdepositeTotal + depositeAmount;

    // Update Balance
    const TotalBalance = document.getElementById('Total-Balance');
    const TotalBalanceText = TotalBalance.innerText;
    const PreviousTotalBalance = parseFloat(TotalBalanceText);
    TotalBalance.innerText = PreviousTotalBalance + depositeAmount;


})

// Withdraw balance and subtraction total balance

document.getElementById('Withdraw-Button').addEventListener('click', function () {
    // const WithdrawInput = document.getElementById('input-withdraw');
    // const withdrawAmountText = WithdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawAmount = getInputevalue('input-withdraw')

    // update withdraw total
    const dithdrawTotal = document.getElementById('withdraw-total');
    const withdraTotalText = dithdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdraTotalText);
    dithdrawTotal.innerText = previousWithdrawAmount + withdrawAmount;

    

    // Update Balance after withdraw
    const BalanceTotal = document.getElementById('Total-Balance');
    const BalanceTotalText = BalanceTotal.innerText;
    const prviousBalanceTotal = parseFloat(BalanceTotalText);
    BalanceTotal.innerText = prviousBalanceTotal - withdrawAmount;

});
