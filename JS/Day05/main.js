let heading = document.getElementById("heading");
heading.innerHTML = "<h3>Hello Binod</h3>";

let testDiv = document.getElementsByClassName("test");
testDiv[0].innerText = "Learning DOM";

let desc = document.getElementsByTagName("span");
desc[0].innerText = "Fun to learn DOM";

//Query Selector
let heading2 = document.querySelectorAll(".heading2");
heading2.forEach(element => {
    element.style.color = "red";
    element.style.backgroundColor = "yellow";
    element.style.borderRadius = "5px";
});

testDiv[0].addEventListener("mouseover", function () {
    testDiv[0].style.color = "red";
})
testDiv[0].addEventListener("mouseout", function () {
    testDiv[0].style.color = "black";
})