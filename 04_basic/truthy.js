// falsy values
//false, 0,-0,bigint,0n,null,undefined,NaN
//truthy values
//"0",'false'," ,[],{},function(){} 

const useremail=[]//if array is empty
if (useremail.length===0) {
    console.log("Array is empty"); 
}

const emptyobject={}
if (Object.keys(emptyobject).length===0) {
    console.log("object is empty");
}
//nullish Coalescing operator(??):null undefined
let val1
// val1 =5?? 10
// val1 =null??10
// val1 =undefined??15
// val1=null ?? 10??20
// console.log(val1);
//(****************//Terniary operator************)
//condition ? true: false 