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