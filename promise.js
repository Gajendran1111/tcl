// promise
 
// return new Promise((resolve, reject) => {})

    function go (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const a = true;
                if(a){
                    resolve("i am going to the shop")
                }
                else{
                    reject("i am not going to the shop")
                }    
            },5000);
        })
    }
    function buy (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const b =true 
                if(b){
                    resolve("i bought the product")
                }
                else{
                    reject("i am not bought the product")
                } 
            },3000);
        })
    }
    function change (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const c = false
                if(c){
                   resolve("collected the changes") 
                }
                else{
                    reject("forgot to collect the changes")
                }
            }, 2000);
        })
    }
    function back (){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d = true
                if(d){
                    resolve("Back to home")
                }
                else{
                    reject("back to ground")
                }
            }, 5000);
        })
    }
    // go()
    // .then(val =>{console.log(val); return buy()})
    // .then(val =>{console.log(val); return change()})
    // .catch(val =>{console.log(val); return back()})
    // .then(val =>{console.log(val);})

    async function js() {
        try {
        const x = await go()
        console.log(x);
        const y = await buy()
        console.log(y);
        const z = await change()
        console.log(z);
        const w = await back()
        console.log(w);
        } catch (error) {
            console.log(error);   
        }
    }
js();