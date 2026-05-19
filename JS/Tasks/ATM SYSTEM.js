const pin = 1234;
var available_blc = 1000;

let withdrawl_blc = 500;
let entered_pin = 1234;

if(pin == entered_pin){
    if(withdrawl_blc > 0 && withdrawl_blc <= available_blc){
        console.log("Withdrawl Success!!");
        available_blc = available_blc - withdrawl_blc;
        console.log("Blc Remaining: "+ available_blc);
    }else{
        console.log("Not Enough Balance");
    }
}else{
    console.log("Incorrect Pin Entered");
}