class car{
    constructor(brand,color,price){
        this.brand=brand;
        this.color=color;
        this.price=price
    }
    output(){console.log(`I need ${this.brand} car\nIts fully colored by ${this.color} color\nThe minimum of the car price is ${this.price}`)}
}
const pro = new car("BMW","Black","75lakhs");
pro.output();