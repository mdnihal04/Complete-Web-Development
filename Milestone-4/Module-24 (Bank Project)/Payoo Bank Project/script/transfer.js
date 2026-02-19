document.getElementById("transfer-btn").addEventListener("click", function(){
    const transferNumber = getValueFromInput("transfer-number");
    if(transferNumber.length != 11){
        alert("Invalid Agent Number");
        return;
    }

    const transferAmount = getValueFromInput("transfer-amount");

    let balanceAmount = getBalanace();
    const newBalance = balanceAmount - Number(transferAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }


    const pin = getValueFromInput("transfer-pin");
    if(pin === "2026"){
        alert("Transfer Successful")
        setBalance(newBalance);
        addHistory("opt-3","Money Transferred", transferAmount);
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