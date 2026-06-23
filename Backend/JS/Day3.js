//Rest Operator
// function add(...a) {
//     let sum = 0;
//     for(let i of a){
//         sum+=i;
//     }
//     return sum;
// }

// console.log(add(1,2,3,4,5));
// console.log(add(1,2,3));
// console.log(add(1,2));


// console.log(Math.random()); //only returns from 0 -1
// console.log(Math.floor(Math.random() * 10)); // to get an integer number

// let a = [1,2,3,4,5];
// console.log(a.reverse());
// console.log(a.slice(1,4));
// console.log(a.splice(1,4));

// Array length
// let arr = new Array(1,2,3,4,5);
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// let data = {title: "Book Name", price: 100};
// console.log(data.title);



//FILTER AND MAP

// let num = [1,2,3,4,5,6,7,8];
// let even = num.filter((b)=>b%2==0); //In Array
// console.log(even);
// num.filter(((b)=>b%2==0)).map((c)=>console.log(c));

let students = [
    {name:"Ram", course: "BTech"},
    {name:"Sita", course: "BCA"},
    {name:"Hari", course: "BscCSIT"},
    {name:"Gita", course: "BCA"},
    {name:"Shyam", course: "BCA"},
    {name:"Shyam", course: "BscCSIT"},
    {name:"Shyam", course: "BTech"},
    {name:"Shyam", course: "BscCSIT"},
    {name:"Shyam", course: "BCA"},
];

// students.filter((a)=>a.course === "BCA" || a.course === "BTech").map((c)=>console.log(c));

// //Course Count
// let courseCount= {};
// students.forEach((c)=>(courseCount[c.course] = (courseCount[c.course] || 0) + 1));
// console.log(courseCount);

//SORTING

students.sort((a, b) => {
    // First compare courses
    if (a.course < b.course) return -1;
    if (a.course > b.course) return 1;

    // If courses are the same, compare names
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    // Both course and name are the same
    return 0;
});

console.log(students);