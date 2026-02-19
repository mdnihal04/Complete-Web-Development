document.getElementById("add-money-btn").addEventListener("click",function(){
    // 1. Get Bank 
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert("Please select a bank");
        return;
    }

    // 2. Get bank account number
    const accNo = getValueFromInput("add-money-number");
    if(accNo.length != 11){
        alert("Invalid Acc No");
        return;
    }

    // 3. Get Add amount
    const amount = getValueFromInput("add-money-amount");

    // 4. Set Balance
    const newBalance = getBalanace() + Number(amount);

    // 5. Verify Pin
    const pin = getValueFromInput("add-money-pin");
    if(pin == "2026"){
        alert(`Add Money Successful from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);
    }else{
        alert("Invalid Pin");
        return;
    }
})