// call back 

function box1(callback){
    setTimeout(() => {
        console.log("loading");
        callback()
    },5000);
}
function box2 (callback){
    setTimeout(() => {
        console.log("loading sucessfull");
        callback()
    }, 1000);
}
function box3 (callback){
    setTimeout(() => {
        console.log("finish");
        
    }, 2000);
}
box1(()=>{
    box2(()=>{
        box3(()=>{})
    })
});
