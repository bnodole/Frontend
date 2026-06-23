const sts = [
    { name: "Aarav", branch: "CS", marks: 92},
    { name: "Bikash", branch: "IT", marks: 95},
    { name: "Hari", branch: "CS", marks: 78},
    { name: "Dipesh", branch: "IT", marks: 92},
    { name: "Anita", branch: "CS", marks: 92},
    { name: "Bina", branch: "EE", marks: 88},
];

sts.sort((a,b)=>{
    if(a.branch > b.branch)
        return 1;
    if(a.branch < b.branch)
        return -1;
    if(a.marks > b.marks)
        return 1;
    if(a.marks < b.marks)
        return -1;
    if(a.name > b.name)
        return 1;
    if(a.name < b.name)
        return -1;
});

console.log(sts);

