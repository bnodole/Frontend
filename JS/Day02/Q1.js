var candidate_age= 31;
var candidate_exp = 4;
var isblacklisted = false;

if(!isblacklisted){
    if(candidate_age>=18){
        if(candidate_age> 30){
            console.log("Need Department Approval");
            return;
        }
        if(candidate_exp>=2){
            console.log("OK For JOB");
        }else{
            console.log("Need More Exp");
        }
    }else{
        if(candidate_exp >=2){
            console.log("Can be intern");
        }else{
            console.log("Can't Hire");
        }
    }
}else{
    console.log("Sorry Blacklisted");
}

// let n1 =0;
// let n2 =1;
// let sum = 0;

// for(let i = 0;i<10; i++){
//     console.log(n1);
//     sum = n1 +n2;
//     n1=n2;
//     n2 = sum;
// }