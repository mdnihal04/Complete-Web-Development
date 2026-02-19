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

function addHistory(img, eventName, amount){
    // let eventName = eventName
    const history = document.getElementById("history-container");
    const newHistory = document.createElement("div");

    // const now = new Date();
    // const time = now.toLocaleString("en-US", {
    // day: "2-digit",
    // month: "short",
    // year: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // hour12: true
    // });


    const now = new Date();
    const inputDate = new Date(); // you can change this if needed

    // Remove time part for correct comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    inputDate.setHours(0, 0, 0, 0);

    let dayText;

    if (inputDate.getTime() === today.getTime()) {
    dayText = "Today";
    } else if (inputDate.getTime() === yesterday.getTime()) {
    dayText = "Yesterday";
    } else {
    dayText = inputDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

    // Time part
    const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
    });

    console.log(dayText, time)
    newHistory.innerHTML=  `
        <div class="transaction-card p-5 bg-base-100 flex justify-between items-center rounded-xl">
                <div class="left flex flex-row gap-2">
                    <div class="w-11 p-2 bg-base-200 rounded-full flex justify-center items-center">
                        <img src="./assets/${img}.png" alt="">
                    </div>
                    <div>
                        <h2 class="text- font-bold">${eventName} | Tk: ${amount}</h2>
                        <p class="text-neutral/80">${dayText} ${time}</p>
                    </div>
                </div>
                <div class="right">
                    <img src="./assets/Frame.png" class="cursor-pointer" alt="">
                </div>
            </div>`
    //  <div class="transaction-card p-5 bg-base-100">
    //  Cashout Taka ${cashoutAmount} Success to
    //  ${cashoutNumber} | at ${new Date()}
    //  </div>`
    
    history.append(newHistory);
}