document.getElementById("bonus-btn").addEventListener("click", function(){
    const coupon1 = "dsc5rmd2026";
    const coupon2 = "dsc10rmd2026";
    const coupon3 = "dsc20rmd2026";

    const couponNumber = getValueFromInput("bonus-number");
    if(couponNumber===coupon1){
        let offerBalance = getBalanace() + (getBalanace() * 0.05);
        console.log(offerBalance)
        setBalance(offerBalance);
    }
    else if(couponNumber===coupon2){
        let offerBalance = getBalanace() + (getBalanace() * 0.1);
        console.log(offerBalance)
        setBalance(offerBalance);
    }
    else if(couponNumber===coupon3){
        let offerBalance = getBalanace() + (getBalanace() * 0.2);
        console.log(offerBalance)
        setBalance(offerBalance);
    }else{
        alert("Invalid Coupon");
        return;
    }
})