document.getElementById("bonus-btn").addEventListener("click", function(){
    const coupon1 = "dsc5rmd2026";
    const coupon2 = "dsc10rmd2026";
    const coupon3 = "dsc20rmd2026";

    const couponNumber = getValueFromInput("bonus-number");
    if(couponNumber===coupon1){
        let bonusAmount = getBalanace() * 0.05;
        let offerBalance = getBalanace() + bonusAmount;
        setBalance(offerBalance);
        addHistory("opt-4", "Bonus Added", bonusAmount);

    }
    else if(couponNumber===coupon2){
        let bonusAmount = getBalanace() * 0.1;
        let offerBalance = getBalanace() + bonusAmount;
        setBalance(offerBalance);
        addHistory("opt-4", "Bonus Added", bonusAmount);
    }
    else if(couponNumber===coupon3){
        let bonusAmount= getBalanace() * 0.2;
        let offerBalance = getBalanace() + bonusAmount;
        setBalance(offerBalance);
        addHistory("opt-4", "Bonus Added", bonusAmount);
    }else{
        alert("Invalid Coupon");
        return;
    }
})