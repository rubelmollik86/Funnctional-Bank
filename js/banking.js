function getInputevalue(inputId) {
    const inputeField = document.getElementById(inputId);
    const inputAmountText = inputeField.value;
    const totalAmount = parseFloat(inputAmountText);
    // clear input clear
    inputeField.value = '';
    return totalAmount;
}

function updateTotalField(totalFieldId, Amount){
    const totalAmount = document.getElementById(totalFieldId);
    const TotalText = totalAmount.innerText;
    const previousTotal = parseFloat(TotalText);
    totalAmount.innerText = previousTotal + Amount;
}




// Balance Deposite and add total balance
document.getElementById('Deposite-Button').addEventListener('click', function () {

    // const depositeInpute = document.getElementById('Input-Deposite');
    // const depositeAmountText = depositeInpute.value;
    // const depositeAmount = parseFloat(depositeAmountText);
    const depositeAmount = getInputevalue('Input-Deposite');


    // get and update deposite total
    // const depositeTotal = document.getElementById('Deposite-Total');
    // const depositeTotalText = depositeTotal.innerText;
    // const previousdepositeTotal = parseFloat(depositeTotalText);
    // depositeTotal.innerText = previousdepositeTotal + depositeAmount;

    updateTotalField('Deposite-Total', depositeAmount);

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

    // get and update withdraw total 
    // const dithdrawTotal = document.getElementById('withdraw-total');
    // const withdraTotalText = dithdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(withdraTotalText);
    // dithdrawTotal.innerText = previousWithdrawAmount + withdrawAmount;

    updateTotalField('withdraw-total', withdrawAmount);
    

    // Update Balance after withdraw
    const BalanceTotal = document.getElementById('Total-Balance');
    const BalanceTotalText = BalanceTotal.innerText;
    const prviousBalanceTotal = parseFloat(BalanceTotalText);
    BalanceTotal.innerText = prviousBalanceTotal - withdrawAmount;

});
