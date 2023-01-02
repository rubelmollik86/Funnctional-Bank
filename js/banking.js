function getInputevalue() {
    const depositeInpute = document.getElementById('Input-Deposite');
    const depositeAmountText = depositeInpute.value;
    const depositeAmount = parseFloat(depositeAmountText);
    // clear input clear
    depositeInpute.value = '';
    return depositeAmount;
}




// Balance Deposite and add total balance
document.getElementById('Deposite-Button').addEventListener('click', function () {

    // const depositeInpute = document.getElementById('Input-Deposite');
    // const depositeAmountText = depositeInpute.value;
    // const depositeAmount = parseFloat(depositeAmountText);
    const depositeAmount = getInputevalue();


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
    const WithdrawInput = document.getElementById('input-withdraw');
    const withdrawAmountText = WithdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);


    // update withdraw total
    const dithdrawTotal = document.getElementById('withdraw-total');
    const withdraTotalText = dithdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdraTotalText);
    dithdrawTotal.innerText = previousWithdrawAmount + withdrawAmount;

    // clear withdrW INPUT fild
    WithdrawInput.value = '';

    // Update Balance after withdraw
    const BalanceTotal = document.getElementById('Total-Balance');
    const BalanceTotalText = BalanceTotal.innerText;
    const prviousBalanceTotal = parseFloat(BalanceTotalText);
    BalanceTotal.innerText = prviousBalanceTotal - withdrawAmount;

});
