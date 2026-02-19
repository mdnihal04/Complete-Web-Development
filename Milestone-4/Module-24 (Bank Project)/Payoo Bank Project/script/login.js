console.log("login Successful")


document.getElementById("login-btn").addEventListener("click",function(){
    // 1. get the mobile number from input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber)

    // 2. get the pin input

    const pin = document.getElementById("input-pin").value
    // 3. match pin and mobile number
    
    

    if(contactNumber=="01741815523" && pin=="2004"){
        // 3-1. true ==> alert ==> homepage
        alert("Login Success");
        window.location.assign("/home.html");
    }
    else{
        // 3-2 false ==> alert ==> return
        alert("login failed")
        return;

    }


})