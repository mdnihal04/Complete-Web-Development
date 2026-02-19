document.getElementById("cashout-btn").addEventListener("click",function(){
    // 1. Get the agent number & validate
    const cashoutNumber = document.getElementById("cashout-number").value
    if(cashoutNumber.length != 11){
        alert("Invalid Agent Number");
        return;
    }

    // 2. Get the amount, validate, convert to Number
    const cashoutAmount = document.getElementById("cashout-amount").value;
    // 3. Get the Current Balance, validate, convert to Number

    let balanceElement = document.getElementById("balance");
    let balanceAmount = balanceElement.innerText;
    // 4. Calculate new Balance

    const newBalance = Number(balanceAmount) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    // 5. Get the pin and verify
    const pin = document.getElementById("cashout-pin").value;
    if(pin === "2004"){
        // 5-1 true==> alert ==> set Balance
        alert("Cashout Successful")
        balanceElement.innerText = newBalance;

    }else{
        // 5-2 false ==> show error ==> Return
        alert("Invalid Pin");
        return;
    }
})