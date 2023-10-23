//const tinderuser= new Object()//singalton object
const tinderuser= {}
tinderuser.id="123abc"
tinderuser.name="aniket"
tinderuser.isloggin=false
//console.log(tinderuser);

const regularuser={
    email:"aniket@gmail,com",
    full_name: {
          user_nmae:{//nexted object
            first_name:"aniket",
            last_name:"chaursiya",
          }
    }
}

console.log(regularuser.full_name.user_nmae);//way to accassing the the data in object

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={4:"a",5:"b"}
//const obj4={obj1,obj2,obj3}
//const obj4=Object.assign({},obj1,obj2,obj3)//{}traget and source assign
//const obj4={...obj1,...obj2,...obj3}//ny spriting method


//console.log(obj4);

const user=[
    {
        id:1,
        email:"aniket@gmail.com"
    },
    {
        d:3,
        email:"aniket@gmail.com"
    },
    {
        d:2,
        email:"aniket@gmail.com"
    }
]
console.log(user[1].email);

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggin'));//return true 




