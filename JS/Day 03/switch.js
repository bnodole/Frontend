function CheckDay(days){
    days.forEach(element => {
        switch (element) {
            case "Sunday":
                console.log(element + "- Working Days");
                break;
            case "Monday":
                console.log(element + "- Working Days");
                break;
            case "Tuesday":
                console.log(element + "- Working Days");
                break;
            case "Wednesday":
                console.log(element + "- Working Days");
                break;
            case "Thrusday":
                console.log(element + "- Holiday");
                break;
            case "Friday":
                console.log(element + "- Holiday");
                break;
            case "Saturday":
                console.log(element + "- Holiday");
                break;
            default:
                console.log("Invalid Day");
                break;
        }
    });
}

var day = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
CheckDay(day);