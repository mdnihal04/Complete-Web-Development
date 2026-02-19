function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


function getBalanace(){
    let balanceElement = document.getElementById("balance");
    let balanceAmount = balanceElement.innerText;
    return Number(balanceAmount);
}


function setBalance(value){
    let balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}


function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout");
    const transfer = document.getElementById("transfer");
    const bonus = document.getElementById("bonus");
    const payBill = document.getElementById("pay-money");
    const history = document.getElementById("history");

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transfer.classList.add("hidden");
    bonus.classList.add("hidden");
    payBill.classList.add("hidden");
    history.classList.add("hidden");


    const selected = document.getElementById(id);
    selected.classList.remove("hidden")

}