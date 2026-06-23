//Object
// let obj = {
//     username : "Ram",
//     email : "ram@gmail.com",
//     printName(){
//         return this.username;
//     }
// }

// console.log(obj.printName());

// function StsDet(a,b) {
//     this.name = a;
//     this.email = b;
//     this.PrintName = function(){
//         return this.name;
//     }
// }

// const sts1 = new StsDet("Ram","ram@gmail.com");
// const sts2 = new StsDet("Ram1","ram1@gmail.com");
// console.log(sts1.PrintName());
// console.log(sts2.PrintName());

//Object Keyword
// let sts = {
//     name: "Binod",
//     email: "test@gmail.com"
// };

// //Doing this assigns the whole object to the testSts
// let testSts = sts;
// console.log(testSts); //Prints the whole object

// //Doing this creates the object 
// let testSts1 = Object.create(sts);
// console.log(testSts1); //is empty and can be used to access the real values
// console.log(testSts1.name,testSts1.email);


//CLASS KEYWORD
// class Test{
//     constructor(a,b){
//         this.name = a;
//         this.email = b;
//     }
//     printName(){
//         return this.name;
//     }
// }

// const obj = new Test("Ram","test@gmail.com");
// console.log(obj.printName());

//Encapsulation(Keeping all functions and variables in a class)
// class BankingSys{
//     #balance = 0;
//     Add(a){
//         this.#balance += a;
//     }

//     Show(){
//         return this.#balance;
//     }
// }

// const cust1 = new BankingSys();
// cust1.Add(1000);
// console.log(cust1.Show());

//ABSTRACT
// class Car {
//     #StartProcess() {
//         console.log("Checking Fuels....Engine Status...");
//     }

//     start(){
//         this.#StartProcess();
//         console.log("Engine Started")
//     }
// }

// const Car1 = new Car();
// Car1.start();


//__proto__ (joins two objects)
// const greet = {
//     greetings: function(){
//         console.log("Hello")
//     }
// }

// const person = {
//     name: "Ram"
// }

// person.__proto__ = greet;
// console.log(person.name);
// person.greetings();

//call() method (calls other functions in one and can also pass its value through this keyword to other function)
// function Category(category){
//     this.category = category;
//     console.log(this);
// }

// function Food(name, price, category) {
//     this.name = name;
//     this.price = price;
//     Category.call(this,category);
// }

// new Food("Burger", 999, "Lunch");

//INHERITANCE
//inheritance using extend keyword
// class Car{
//     doors = 4;
//     wheels = 4;
//     PrintDoors(){
//         console.log(this.doors);
//     }
//     PrintWheels(){
//         console.log(this.wheels)
//     }
// }

// class Porsche extends Car{
//     doors = 2;
//     PrintDoors(){
//         console.log(this.doors);
//     }
// }

// const car1 = new Porsche();
// car1.PrintDoors();
// car1.PrintWheels();

//using call()
// function Animal(){
//     this.eat = function(){
//         console.log("can eat");
//     }
// }

// function Dog(){
//     Animal.call(this);
// }

// new Dog().eat();