//for off loop
// const arr =[1,2,3,4,5]
// for (const  num of arr) {//for of loop
//     console.log(num);
// }

// const ani="aniket"
// for (const an of ani) {
//     console.log(`Each char ${an}`);
// }

//Map
// const map = new Map()//unique value are store in map and map is not irratable
// map.set('usa','united states of america')
// map.set('IN','india')
// map.set('fr','france')
// map.set('IN','india')
// console.log(map);


// for (const key of map) {
//     console.log(key);
// }
// for (const [key, value] of map) {
//     console.log(key,':-',value);
// }

// const myobject={
//     'game':'nfs',
//     'game2':'spiderman'
// }
// for (const [key,value] of myobject) {
//     console.log(key,';-',value);
// }
// for (const key in  myobject) {
//   console.log(myobject[key]);
// }

// const prograing =["js","rb","py","cpp"]
// for (const key in prograing) {
//   console.log(prograing[key]);
// }


// const map = new Map()//unique value are store in map and map is not irratable
// map.set('usa','united states of america')
// map.set('IN','india')
// map.set('fr','france')
// map.set('IN','india')
// for (const key in map) {//Map is not irratable
//   console.log(key);
// }

// const coding=["js","ruby","java","python"]
// coding.forEach(function(items) {
//   console.log(items);
// })

// coding.forEach((items)=>{
//   console.log(items);
// })

// function print(items) {
//   console.log(items);
// }
// coding.forEach(print)
const coding=["js","ruby","java","python"]

coding.forEach((items,index,arr)=>{
       console.log(items,index,arr);
})
const mycoding=[
  {
    languagename:"javascript",
    languagefilename:"js"
  },
  {
    languagename:"python",
    languagefilename:"py"
  },
  {
    languagename:"cpp",
    languagefilename:"c++"
  },
]
mycoding.forEach((items)=>{
  console.log(items.languagename,items.languagefilename);
})