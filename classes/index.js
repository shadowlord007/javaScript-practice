/////// Classes ///////////////

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(saleTex){
        return this.price + (this.price * saleTex)
    }
}

const saleTex = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pents", 15.99);
const product3 = new Product("Shoes", 100.00);

product1.displayProduct();

const total = product3.calculateTotal(saleTex);
console.log(`Total with sale tax: $${total.toFixed(2)}`);

product2.displayProduct();
product3.displayProduct();
