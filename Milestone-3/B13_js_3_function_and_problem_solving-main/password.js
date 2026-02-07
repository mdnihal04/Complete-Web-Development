function passwordChecker(password){
    let reasons = [];
    let hasUppercase = false;
    let hasNumber = false;
    let hasSpace = password.includes(" ");
    let length = password.length;

    for(let i = 0; i <=length; i++){
        let character = password[i];

        if(character>="0" && character<= "9"){
            hasNumber = true;
        }
        if(character>="A" && character<= "Z"){
            hasUppercase = true;
        }


    }

    if (hasNumber == false) {
        reasons.push("Missing number");
    }

    if (hasUppercase == false) {
        reasons.push("Missing uppercase");
    }

    if (hasSpace==true){
        reasons.push("Space found")
    }

    let isValid;
    if (reasons.length === 0) {
        isValid = true;
    } else {
        isValid = false;
    }

    return{
        valid: isValid,
        reasons
    }
}

console.log(passwordChecker("Helloworld89"));
console.log(passwordChecker("helloworld  "));