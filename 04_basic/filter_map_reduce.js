// const coding=["js","ruby","java","python"]


//  const values=  coding.forEach((items)=>{//(********foreach does't return any values**********)
//      console.log(items);
//      return items
// })
// console.log(values);


// const mynum=[1,2,3,4,5,6,7,8,9,10]
//  const newnum=mynum.filter((num)=>num>4)
// const newnum=mynum.filter((num)=>{//(*****when we use object {} curly bracket then menderory return key word is used**************)
//     return num>4
// })

// const newnum=[]
// mynum.forEach((num)=>{
//      if(num>4){
//           newnum.push(num)
//      }

// })


//  console.log(newnum);
const books=[
    {title:'book one',gener:'fiction',punlish:1981,editition: 2004},
    {title:'book two',gener:'fiction',punlish:1982,editition: 2005},
    {title:'book three',gener:'fiction',punlish:1981,editition: 2006},
    {title:'book four',gener:'fiction',punlish:1981,editition: 2007},
    {title:'book five',gener:'history',punlish:1984,editition: 2008},
    {title:'book six',gener:'fiction',punlish:1985,editition: 2009},
    {title:'book seven',gener:'history',punlish:1981,editition: 2010},
    {title:'book eight',gener:'fiction',punlish:1985,editition: 2004},
    {title:'book nine',gener:'fiction',punlish:1984,editition: 2002},
    {title:'book tens',gener:'fiction',punlish:1981,editition: 2003},

]
let userbooks=books.filter((bk)=>bk.gener==='history')
userbooks=books.filter((bk)=>{
    return bk.editition>=2008 && bk.gener==="history"
})
console.log(userbooks);