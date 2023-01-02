function getInputevalue(inputId) {
    const inputeField = document.getElementById(inputId);
    const inputAmountText = inputeField.value;
    const totalAmount = parseFloat(inputAmountText);
    // clear input clear
    inputeField.value = '';
    return totalAmount;
}

function updateTotalField(totalFieldId, Amount) {
    const totalAmount = document.getElementById(totalFieldId);
    const TotalText = totalAmount.innerText;
    const previousTotal = parseFloat(TotalText);
    totalAmount.innerText = previousTotal + Amount;
}

function updateBalance(Amount, isAdd) {
    const TotalBalance = document.getElementById('Total-Balance');
    const TotalBalanceText = TotalBalance.innerText;
    const PreviousTotalBalance = parseFloat(TotalBalanceText);
    if (isAdd == true) {
        TotalBalance.innerText = PreviousTotalBalance + Amount;
    }
    else {
        TotalBalance.innerText = PreviousTotalBalance - Amount;
    }
}




// Balance Deposite and add total balance
document.getElementById('Deposite-Button').addEventListener('click', function () {

    // const depositeInpute = document.getElementById('Input-Deposite');
    // const depositeAmountText = depositeInpute.value;
    // const depositeAmount = parseFloat(depositeAmountText);



    // get and update deposite total
    // const depositeTotal = document.getElementById('Deposite-Total');
    // const depositeTotalText = depositeTotal.innerText;
    // const previousdepositeTotal = parseFloat(depositeTotalText);
    // depositeTotal.innerText = previousdepositeTotal + depositeAmount;



    // Update Balance

    // const TotalBalance = document.getElementById('Total-Balance');
    // const TotalBalanceText = TotalBalance.innerText;
    // const PreviousTotalBalance = parseFloat(TotalBalanceText);
    // TotalBalance.innerText = PreviousTotalBalance + depositeAmount;

    const depositeAmount = getInputevalue('Input-Deposite');
    if (depositeAmount > 0) {
        updateTotalField('Deposite-Total', depositeAmount);
        updateBalance(depositeAmount, true);
    }



})

// Withdraw balance and subtraction total balance

document.getElementById('Withdraw-Button').addEventListener('click', function () {
    // const WithdrawInput = document.getElementById('input-withdraw');
    // const withdrawAmountText = WithdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);



    // get and update withdraw total 
    // const dithdrawTotal = document.getElementById('withdraw-total');
    // const withdraTotalText = dithdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(withdraTotalText);
    // dithdrawTotal.innerText = previousWithdrawAmount + withdrawAmount;




    // Update Balance after withdraw

    // const BalanceTotal = document.getElementById('Total-Balance');
    // const BalanceTotalText = BalanceTotal.innerText;
    // const prviousBalanceTotal = parseFloat(BalanceTotalText);
    // BalanceTotal.innerText = prviousBalanceTotal - withdrawAmount;

    const withdrawAmount = getInputevalue('input-withdraw')
    if (withdrawAmount > 0) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

});
