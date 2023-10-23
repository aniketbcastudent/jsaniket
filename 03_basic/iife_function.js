//Immediately Invoked Function Expression (iife)use  to database connection 

(function chai(){//(*************iife function waper together in () breacket***********)
    //named iife 
    console.log(`db connected`);
})();//(*********menderty use to ; semicoma ***********)

((name) =>{//(************* this ia arrow funcrion iife function waper together in () breacket***********)
    
    console.log(`db connected ${name}`);
})("aniket")