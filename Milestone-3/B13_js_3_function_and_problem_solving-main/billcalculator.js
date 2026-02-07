function calcBill(prices,items){ 
    let itemCount = {};
    for(const item of items){
        if(itemCount.hasOwnProperty(item)){
            itemCount[item]++;
        }
        else{
            itemCount[item] = 1;
        }
    }

    let total = 0;
    for(const item in itemCount){
        let quantity = itemCount[item];
        let price = prices[item];
        // console.log(item,"=>", quantity, "=>", price);
        total = total + (price*quantity);
    }


    return{
        total,
        itemCount
    }
}

let output = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
console.log(output);


let output2 = calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 }, [
  "egg",
  "egg",
  "rice",
  "oil",
  "egg",
  "sugar",
]);
console.log(output2);