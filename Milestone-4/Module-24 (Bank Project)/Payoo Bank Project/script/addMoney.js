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

        // 1. Get history Container
        const history = document.getElementById("history-container");
        // 2. Create new child div
        const newHistory = document.createElement("div");
        // 3. Add innerHtml in new div
        newHistory.innerHTML=`
         <div class="transaction-card p-5 bg-base-100">
         Add Money Success From
         ${bankAccount} , 
         ACC-NO ${accNo} | at ${new Date()}
         </div>`

        // 4. Append child div to history/parent div
        history.append(newHistory);

    }else{
        alert("Invalid Pin");
        return;
    }
})