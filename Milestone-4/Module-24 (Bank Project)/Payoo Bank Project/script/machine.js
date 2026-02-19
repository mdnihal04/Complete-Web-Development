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

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");


    const selected = document.getElementById(id);
    selected.classList.remove("hidden")

}