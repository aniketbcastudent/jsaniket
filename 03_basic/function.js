function calculatecrtprice(...num1){//...rest oprater
   return num1
}
console.log(calculatecrtprice(2,34,56,67));


const user={
    username:"aniket",
    price:"1000",
}
function handleobject(anyobject){
    console.log(`usernmae is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
handleobject(
    {
        username:"aniket",
        price:"89485"
    }
)

 const myarr=[200,333,4555]
 function returnSecondValue(getArray){
    return getArray[2]
 }
console.log( returnSecondValue(myarr));