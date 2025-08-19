// settimeout

// asynchronous order 
function box1(){
    setTimeout(() => {
        console.log("loading");
        
    },5000);
}
function box2 (){
    setTimeout(() => {
        console.log("loading sucessfull");
        
    }, 1000);
}
box1();
box2();