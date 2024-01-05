document.getElementById('submit-deposite').addEventListener('click',function(){
    const depositeField = document.getElementById('deposite-field');
    const stringDepositeAmount = depositeField.value;
    const depositeAmount = parseFloat(stringDepositeAmount);

    depositeField.value = '';

    if(isNaN(depositeAmount)){
        alert('Please Provide A Valid Number');
        return;
    }
    // console.log(depositeAmount);

    const depositeBalance = document.getElementById('deposite-balance');
    const stringDeposite = depositeBalance.innerText;
    const deposite = parseFloat(stringDeposite);
    // console.log(deposite);
     depositeBalance.innerText = deposite+depositeAmount;
    // console.log(setDeposite);

    const previousTotalBalance = document.getElementById('total-balance');
    const stringTotalBalance = previousTotalBalance.innerText;
    const totalBalance = parseFloat(stringTotalBalance);

    previousTotalBalance.innerText = totalBalance+depositeAmount;

    
})

document.getElementById('submit-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('Withdraw-field');
    const stringWithdrawAmount = withdrawField.value;
    const withdrawAmount = parseFloat(stringWithdrawAmount);

    withdrawField.value = '';

    if(isNaN(withdrawAmount)){
        alert('Please Provide A Valid Number');
        return;
    }
    // console.log(withdrawAmount);

    const previousWithdrawBalance = document.getElementById('Withdraw-balance');
    const stringWithdraw = previousWithdrawBalance.innerText;
    const withdrawBalance = parseFloat(stringWithdraw);

    

    const previousTotalBalance = document.getElementById('total-balance');
    const stringTotalBalance = previousTotalBalance.innerText;
    const totalBalance = parseFloat(stringTotalBalance);

    
    if(totalBalance>=withdrawAmount){
        previousWithdrawBalance.innerText = withdrawAmount+withdrawBalance;
        previousTotalBalance.innerText = totalBalance-withdrawAmount;
    }
    else{
        alert('Not Enought Balance');
    }

    
})