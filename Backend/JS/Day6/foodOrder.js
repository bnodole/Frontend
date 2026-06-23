var food_name = "Salad";

function SearchFood(callback) {
    console.log("Searching Food..." + food_name);
    setTimeout(()=>{
        console.log("Food Found: "+food_name);
        callback();
    },2000);
}

function OrderCount() {
    let order_id = 0;
    return ()=>{
        order_id++;
        return order_id;
    }
}

let order_no = OrderCount();

function OrderFood(callback) {
    console.log("Ordering Food..." + food_name);
    setTimeout(() => {
        let id = order_no();
        console.log("Ordering Food id: "+id +" Food Name"+ food_name);
        callback(id);
    }, 3000);
}

function Payment(id) {
    console.log("Ongoing Payment for id" + id);
    setTimeout(() => {
        console.log("Payment Successfull for id: "+id);
    }, 6000);
}

SearchFood(()=>{
    OrderFood((id)=>{
        Payment(id);
    });
});