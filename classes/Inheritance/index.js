/////// Inheritance in Classes ///////////////////////

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabits extends Animal{
    name = "rabit"
    run(){
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish"
    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    name = "hawk"
    fly(){
        console.log(`This ${this.name} is flying`)
    }
}


const rabbit = new Rabits();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();