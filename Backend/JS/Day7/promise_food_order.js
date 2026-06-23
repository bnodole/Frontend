var food_name = "Salad";

function SearchFood() {
    return new Promise((resolve,reject)=>{
        console.log("Searching Food..." + food_name);
        setTimeout(()=>{
            console.log("Food Found: "+food_name);
            resolve();
        },2000);
    });
}

function OrderCount() {
    let order_id = 0;
    return ()=>{
        order_id++;
        return order_id;
    }
}

let order_no = OrderCount();

function OrderFood() {
    return new Promise((resolve)=>{
        console.log("Ordering Food..." + food_name);
        setTimeout(() => {
            let id = order_no();
            console.log("Ordering Food id: "+id +" Food Name"+ food_name);
            resolve(id);
        }, 3000);
    });
}

function Payment(id) {
    return new Promise(()=>{
        console.log("Ongoing Payment for id" + id);
        setTimeout(() => {
            console.log("Payment Successfull for id: "+id);
        }, 6000);
    });
}

// SearchFood(()=>{
//     OrderFood((id)=>{
//         Payment(id);
//     });
// });

SearchFood()
.then(()=>OrderFood())
.then((id)=>Payment(id))
.catch(()=>{
    console.log("Error ordering food");
});