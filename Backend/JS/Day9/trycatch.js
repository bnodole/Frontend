var food_name = "Salad";

function SearchFood() {
    return new Promise((resolve) => {
        console.log("Searching Food... " + food_name);

        setTimeout(() => {
            console.log("Food Found: " + food_name);
            resolve();
        }, 2000);
    });
}

function OrderCount() {
    let order_id = 0;

    return () => {
        order_id++;
        return order_id;
    };
}

let order_no = OrderCount();

function OrderFood() {
    return new Promise((resolve) => {
        console.log("Ordering Food... " + food_name);

        setTimeout(() => {
            let id = order_no();
            console.log("Order ID: " + id + " Food Name: " + food_name);
            resolve(id);
        }, 3000);
    });
}

function Payment(id) {
    return new Promise((resolve) => {
        console.log("Ongoing Payment for id " + id);

        setTimeout(() => {
            console.log("Payment Successful for id: " + id);
            resolve();
        }, 6000);
    });
}

//ASYNC FUNCTION
// async function food() {
//     await SearchFood();

//     let id = await OrderFood();

//     await Payment(id);

//     return "Order Completed";
// }

// food()
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

//TRY CATCH
async function food() {
    try {
        await SearchFood();

        let id = await OrderFood();

        await Payment(id);

        console.log("Order Complete")
    } catch (error) {
        console.log(error);
        throw error;
    }
}

food();