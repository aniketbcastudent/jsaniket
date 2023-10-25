const nynums=[1,2,3]
//  const mytotal=nynums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc+currval
//  },0)
const mytotal=nynums.reduce((acc, currvalue)=>acc+currvalue,0)
 console.log(mytotal);
 const cource=[
    {
        itemsname:"python",
        price:2999
    },
    {
        itemsname:"python",
        price:2999
    },
    {
        itemsname:"python",
        price:2999
    },
    {
        itemsname:"python",
        price:2999
    },
 ]
  const pricetopay=cource.reduce((acc,items)=>acc+items.price,0)
  console.log(pricetopay);