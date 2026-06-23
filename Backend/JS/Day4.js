// function Test(){
//     var a = 10;
// }

// // console.log(a); //Error
// {
//     var b = 10;
// }
// console.log(b);//Prints

//CALLBACK FUNCTION
// function First(){
//     console.log("first");
// }

// function Second(a){
//     console.log("second");
//     a();
// }

// Second(First);

//HOSTING FUNCTION
// Test();

// function Test(){
//     console.log("Hosting Function");
// }

//CLOSURE FUNCTION
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let myCounter = counter();
// myCounter();
// myCounter();
// myCounter();
// myCounter();
// myCounter();

//COHERSION FUNCTION
// let a = 1+[]+0;
// console.log(a);
// console.log(typeof a);

// let b = {} + [];
// console.log(b);
// console.log(typeof b);

// console.log(Boolean([]));
// console.log(Boolean([])==false);

// let c = [] == false;
// console.log(c);

// let d = [] + false;
// console.log(d);

// let e = null + true;
// console.log(e);

// console.log(d-e);
// console.log("10"-5);
// console.log("10"+5);
// console.log("10"*5);

// console.log([] + []);
// console.log(undefined == undefined);
// console.log(undefined === undefined);
// console.log(NaN == NaN);

//Default Parameter

// function DefParam(a = 10){
//     console.log(a);
// }

// DefParam();
// DefParam(30);

//Spraite Operator(IDK)
let a = [1,2,3,4];
let b = [1,2,3,4];

let c = [a,b];
let d = [...a,...b];

console.log(c);
console.log(d);

let x = {f:10,g:20};
let y = {f:10,h:20};

let z = {...x,...y};
console.log(z);