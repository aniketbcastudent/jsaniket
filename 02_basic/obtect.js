//singleton makeing construter created by this key word(object.create)
//object literals

//object literals
const mysym= Symbol("key1")
const jsuser={//object
    name:"aniket",//key and value are storing the data
    full_name:"aniket chaursiya",
    [mysym]:"mykey1",//way to declear symbil key
    age:23,//accesing the element object name.key
    location: "buxar",
    email:"aniketkumar@gmail.com",
    isLoggedIn:false,
    lastLogindays:["monday","sunday"],
}

// console.log(jsuser.email)
// console.log(jsuser["email"])//two way to accesing the object element
// console.log(jsuser["full_name"]);
// console.log(jsuser[mysym]);//ny symbol  method to accsing the object element


// jsuser.email="aniket@6606"
// console.log(jsuser.email);//override the vale from email by = oprater.
// Object.freeze(jsuser) //by this syntex we can't change the value.
// jsuser.email="aniket@6606kumar"//we can't change the value
// console.log(jsuser.email);
// console.log(jsuser);



jsuser.greeting= function(){
    console.log("hello aniket");
}

jsuser.greetingtwo= function(){
    console.log(`hello js user ${this.name}`);//by this key we are accssing the object element
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

