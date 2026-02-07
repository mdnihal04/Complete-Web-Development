// Task-1 ==> Find lowest number in array
function lowArrayNumber(numbers) {
    let smallNumber = numbers[0];
    for(const number of numbers){
        if(number < smallNumber){
            smallNumber = number;
        }
    }
    return smallNumber;
}

let arr = [167, 190, 120, 165, 137,100];
console.log(lowArrayNumber(arr));


// Task-2 ==> Find smallest name in array
function smallName(arr) {
    let smallName = arr[0];
    for(const name of arr){
        if(name.length < smallName.length){
            smallName = name;
        }
    }
    return smallName
}

let arr = ['rahim', 'robin', 'rafi', 'ron', 'rashed',"ro"];
console.log(smallName(arr));




// Task-3==> Budget Calculator

function calculateElectronicsBudget(laptopqty, tabletqty, mobileqty){
    let laptop = 35000;
    let tablet = 15000;
    let mobile = 20000;

    let laptopPresentPrice = laptop * laptopqty;
    let tabletPresentPrice = tablet * tabletqty;
    let mobilePresentPrice = mobile * mobileqty;

    const totalMoneyRequired = laptopPresentPrice + tabletPresentPrice + mobilePresentPrice;
    return totalMoneyRequired;
}


console.log(calculateElectronicsBudget(1, 2, 4));


// Task-4 ==> Average finder

function findAveragePhonePrice(phones){
    let totalItem = 0;
    let totalPrice = 0;
    for(const phone of phones){
        let phonePrice = phone.price;
        totalPrice += phonePrice;
        totalItem++;
    }

    let totalAverage = totalPrice/totalItem;
    return totalAverage.toFixed(2);
}


const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ];
console.log(findAveragePhonePrice(phones));


// Task-5 ==> function for total incremented salary

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];


function totalMonthlySalary(employees){
    let total = 0;
    for(const employee of employees){
        const salary = employee.starting + (employee.experience * employee.increment);
        total += salary;
    }
    return total;
}


console.log(totalMonthlySalary(employees))