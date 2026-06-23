const prm=new Promise((res,rej)=>{
    let da=true;
    if(da){
        res(); 
    }
    else{
        rej();
    }
});

function accept() {
    console.log("first");
}

function reject() {
    console.log("Sorry");
}

prm
.then(()=>accept())
.catch(()=>reject());