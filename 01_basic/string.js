const name="aniket"
const lastnmae="chaursiya"
//console.log(name+lastnmae+"kumar"); outdatetate sentext
console.log(`hello my name is ${name} and my lastname is ${lastnmae}`);


const gameName=new String('aniket')// create string string is storage in key value pair
console.log(gameName[0]);
console.log(gameName.__proto__);//return object
console.log(gameName.length);
console.log(gameName.toUpperCase()); //function 
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));


const newgame=gameName.substring(0 ,4)
console.log(newgame);
//const anotherString=gameName.slice(0,4);
const anotherString=gameName.slice(-6,4);
console.log(gameName);

const newStringone="      amiket      "
console.log(newStringone);
console.log(newStringone.trim());

const url ="https://aniket.com/aniket%20chaursiya"
console.log(url);
console.log(url.replace('%20','_'));
console.log(url.includes('aniket'));
console.log(url.includes('kumar'));
console.log(url.split('//'));///return array fron string