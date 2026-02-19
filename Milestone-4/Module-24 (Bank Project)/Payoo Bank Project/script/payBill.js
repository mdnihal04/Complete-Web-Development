document.getElementById("pay-money-btn").addEventListener("click", function(){

    const payBankAccount = getValueFromInput("pay-money-bank");
    if(payBankAccount == "Select a Bank"){
        alert("Please select a bank");
        return;
    }
    const payNumber = getValueFromInput("pay-money-number");
    if(payNumber.length != 11){
        alert("Invalid Bank Account Number");
        return;
    }

    const payAmount = getValueFromInput("pay-money-amount");

    let balanceAmount = getBalanace();
    const newBalance = balanceAmount - Number(payAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }


    const pin = getValueFromInput("pay-money-pin");
    if(pin === "2026"){
        alert("Transfer Successful")
        setBalance(newBalance);
        // const history = document.getElementById("history-container");
        // const newHistory = document.createElement("div");
        // newHistory.innerHTML=`
        //  <div class="transaction-card p-5 bg-base-100">
        //  Cashout Taka ${cashoutAmount} Success to
        //  ${cashoutNumber} | at ${new Date()}
        //  </div>`
        // history.append(newHistory);

    }else{
        alert("Invalid Pin");
        return;
    }
})