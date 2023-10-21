//date
let mydate =new Date();
// console.log(mydate);//return year and months
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
//console.log(typeof mydate);//retunn object
//let myCreatedDate =new Date(2023,5,2)
// let myCreatedDate =new Date(2023,5,2.5,2)
//let myCreatedDate =new Date("2023-01-14")//yy mm dd
//console.log(myCreatedDate.toLocaleString());

//let myTimeStame=Date.now();
// console.log(myTimeStame);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));//return second 

let newDate=new Date()
//console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{//object
    weekday:"long",
})
