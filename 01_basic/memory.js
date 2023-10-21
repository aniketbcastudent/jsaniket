//stack,(primitive)copy is created   heap(non primitive) reference is created 
//primitive data type 
let  myvarriable="aniket";

let anothername=myvarriable;
anothername="chaursiya"
 //myvarriable=anothername;
console.log(anothername);
console.log(myvarriable);//=> primitive datatype is created is copy 


let  userone={//object
    email:"aniketkumar89566@gmail.com",
    upi:"user@ybl"
}
let usertwo=userone//reference is created memoey is seared

usertwo.email="aniketchaursiya89566@gmail.com"
console.log(userone.email);
console.log(usertwo.email);
