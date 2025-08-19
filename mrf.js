// map 
// filter
// reduce

// syntax 
// variable name.map((value, index,accumulator)=>)

    let mp = [10,20,30,40,50]
    let sum = mp.map((v,i,a)=>a*10)
    console.log(sum);
    

// reduce
// syntax
// variable name.reduce((actualarray,accumulator)=>)

    let a = [10,20,30,40,50]
    let red = a.reduce((x,y)=>x+y)
    console.log(red);
    