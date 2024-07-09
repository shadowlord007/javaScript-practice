/////////// Static method in classes /////////////////////

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);

console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


/////////// mix properties and static method in classes /////////////////////

class User{
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`there are ${User.userCount} users online`)
    }

    sayGreeting() {console.log(`Hi, My name is ${this.username}`)}
}

const user1 = new User("awais");
const user2 = new User("Akram");
const user3 = new User("Hamza");

User.getUserCount();

user1.sayGreeting();
user2.sayGreeting();
user3.sayGreeting();


console.log(User.userCount);