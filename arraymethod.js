// push
let a = [10,20,30,40,50]
a.push(60)
console.log(a);

// pop
let b =[10,20,30,40,50]
b.pop()
console.log(b);

// shift
let c = [10,20,30,40,50]
c.shift()
console.log(c);

// unshift
let d = [10,20,30,40,50]
d.unshift(9)
console.log(d);

// splice 
//syntax
// variable name.splice(index,splice num,value){}

//0 it is use to add a value in the given index number and it will move forword the already existing value
//1 it is use to add a value in the given index number and it will remove the already existing value (like) kind of replace

let days = ["sunday","monday","tuesday","thuresday","friday","saturday"]
days.splice(3,1,"wednesday")
console.log(days);

// sort
let ab = ["b","d","a","f","c","e"]
console.log(ab.sort());

// reverse
let rev ="jeeva"
console.log(rev.split("").reverse().join(""));
