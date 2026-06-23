let datas = document.getElementById("datas");

fetch("https://jsonplaceholder.typicode.com/posts")
.then((respose)=>respose.json())
.then((posts)=>{
    const ol = document.createElement("ol");
    posts.forEach(element => {
        let userId = element.id;
        let id = element.id;
        let title = element.title;
        let body = element.body;
        const li = document.createElement("li");
        li.innerText="UserId: " + userId + "Id: "+ id + "Title: " + title +"Body: "+ body;
        ol.appendChild(li);
    });
    document.body.appendChild(ol);
});