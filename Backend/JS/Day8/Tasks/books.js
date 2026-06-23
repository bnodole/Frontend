const cardHolder = document.getElementById("cardHolder");

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>response.json())
.then((posts)=>{
    posts.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.innerText = element.title;

        const button = document.createElement("button");
        button.classList.add("view");
        button.innerText = "See More";

        button.addEventListener("click",()=>{
            window.location.href = `cardDetails.html?id=${element.id}`;
        });

        card.appendChild(title);
        card.appendChild(button);
        cardHolder.appendChild(card);
    });
})