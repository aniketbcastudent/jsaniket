// //nexted scope//cloger
// // function one(){
// //     const uesernmae="aniket";
// //     function two(){
// //         const lastname="kumar"//allow to access because with in function
// //         console.log(uesernmae);
// //     }
// //     //console.log(lastname);//not allow two access because scope allow to access nly with in function 
// //     two()
// // }
// // one()
// //(******************)//console.log(one(5));//(************************************)
// function one(num){//normal function
//    return num+1;
// }
// console.log(one(6));
// //(*********************) addtwo()//not allow to access  this teachinque iis class (*********howsting**********)
// const addtwo =function(num){// (************this is called exprection function**************)
//     return num+2
// }
// // addtwo()

// //(***********arrow function*************)
// const user ={
//     username:"aniket",
//     price:"999",
//     welcomemessage :function(){
//         console.log(`${this.username},welcome to website`);//(*****this key word refer to curent contex ********)
//         //console.log(this);//(*****this key word refer to curent contex ********)
//     }
// }
// user.welcomemessage()
// user.username="kumar"//(*****this key word refer to curent contex ********)

//console.log(this);//(*********return empty object {}*********** only in node engine*********)


// function oneone(){
//     let uesernmae="aniket"
//     console.log(this.uesernmae);//(*******output is undefine***** because this key is only use in object not in function ***********)
// }
// oneone()



//(********arrow fumction****************)

// const oneone=()=>{//(********arrow function***********)
//         let uesernmae="aniket"
//         console.log(this.uesernmae)
//     }
// oneone()


// const add = (num1, num2)=>{
//   return num1+num2
// }

// const add = (num1, num2)=> num1+num2//(********implect return  **************)

// const add = (num1, num2)=> (num1+num2)

const add = (num1, num2)=> ({username:"aniket"})//(**********object return only in ()parthenes bracket***********)


console.log(add(3,4));
  
  


