const sts = [
    {id:1, name: "Ram", isActive:true},
    {id:2, name: "Shyam", isActive:false},
    {id:3, name: "Hari", isActive:true},
    {id:4, name: "Gita", isActive:true},
    {id:5, name: "Sita", isActive:true},
    {id:6, name: "Govind", isActive:false},
    {id:7, name: "Ram Hari", isActive:true},
    {id:8, name: "David", isActive:true},
    {id:9, name: "Jones", isActive:false},
    {id:10, name: "Haaland", isActive:false},
    {id:11, name: "Mbappe", isActive:true},
    {id:12, name: "Messi", isActive:false}
];

const summary = sts.reduce((acc,task)=>{
    acc.total++;
    if(task.isActive){
        acc.activests++;
    }else{
        acc.inactivests++;
    }
    return acc;
},{total:0, activests:0, inactivests:0});

console.log(summary);