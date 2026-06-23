//Hierarchical Inheritance
// class Animal {
//     Eat(){
//         console.log("Eating...");
//     }
// }

// class Dog extends Animal{
//     Bark(){
//         console.log("Barking...")
//     }
// }

// class Cat extends Animal {
//     Meow(){
//         console.log("Meowing...")
//     }
// }

// const d = new Dog();
// const c = new Cat();

// d.Bark();
// d.Eat();
// c.Meow();
// c.Eat();


//Multiple Inheritance
// const canWalk = {
//     walk(){
//         console.log("Walking...");
//     }
// }

// const canEat = {
//     eat(){
//         console.log("Eating")
//     }
// }

// class Human{

// }

// Object.assign(Human.prototype,canEat,canWalk);

// const obj = new Human();
// obj.walk();
// obj.eat();

//Hybrid Inheritance
// class Animal{
//     eat(){
//         console.log("Eating...")
//     }
// }

// class Dog extends Animal{
//     bark(){
//         console.log("Barking...")
//     }
// }

// const run = {
//     run(){
//         console.log("Running...")
//     }
// }

// Object.assign(Dog.prototype,run);

// const d = new Dog();
// d.bark();
// d.eat();
// d.run();

//PROTOTYPE INHERITANCE
// const animal = {
//     sound(){
//         console.log("HAHAHHAHA")
//     }
// }

// const dog = Object.create(animal);
// dog.bark = function(){
//     console.log("Barking..")
// }

// dog.bark();
// dog.sound();

//POLYMORPHISM
// class A{
//     sound(){
//         console.log("ahahah")
//     }
// }

// class B extends A{
//     sound(){
//         console.log("HAHAHAHAH")
//     }
// }

// const obj = new B();
// obj.sound();

//Method Overriding
// class A{
//     sound(){
//         console.log("ahahah")
//     }
// }

// class B extends A{
//     sound(){
//         console.log("HAHAHAHAH")
//     }
// }

// const obj = new B();
// obj.sound();

//Method Overloading
// class Arithmetic{
//     constructor(value){
//         this.value = value;
//     }
//     add(other){
//         return this.value + other.value;
//     }
// }

// const a = new Arithmetic(10);
// const b = new Arithmetic(20);

// console.log(a.add(b));
