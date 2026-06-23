let desktop = ["Monitor", "Laptop","Mic","Mouse","Keyboard","Phone"];

const ol = document.createElement("ol");
ol.start = 4;
desktop.forEach(element=>{
    const li = document.createElement("li");
    li.textContent = element;
    ol.appendChild(li);
});
document.body.appendChild(ol);

// ol.style.color ="red";
// ol.style.textDecorationLine = "underline";
ol.style = "font-size:40px; font-weight:bold; color:red; text-decoration-line:underline";