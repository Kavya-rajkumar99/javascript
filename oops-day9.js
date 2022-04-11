class Car{
constructor(name,wheels,door,engine)
{
    this.name = name;
    this.wheels = wheels;
    this.door = door;
    this.engine = engine;
}
}
const ferrari = new Car("Ferrari",4,2,"V8")
console.log(ferrari,typeof ferrari)
const venue = new Car("Venue",4,4,"V3")
console.log(venue,typeof venue)
const bmwX6 = new Car("BMW X6",4,4,"V6")
console.log(bmwX6,typeof bmwX6)
const toyota = new Car("Toyota LandCruiser",4,5,"V8")
console.log(toyota,typeof toyota)

class Account{
    constructor(name,accNo,balance)
    {   //member variables
        this.name = name;
        this.accNo = accNo;
        this.balance = balance;
    }
    //class methods or member functions
    getBalance()
    {
        return `Your balance is ₹${this.balance}`
    }
    withdraw(amt)
    {
        if(this.balance>=amt)
        {
            this.balance = this.balance - amt;
            return this.getBalance()
        }
        else
           return `Insufficient funds. Your current balance is ₹${this.balance}`
    }
    deposit(amt)
    {
        this.balance = this.balance + amt;
        return this.getBalance()
    }
}
const acctHolder = new Account("Kavya",12345678,1_00_000)
console.log(acctHolder)
console.log(acctHolder.withdraw(40_000))
console.log(acctHolder.withdraw(80_000))
console.log(acctHolder.withdraw(20_000))
console.log(acctHolder.deposit(30_000))
console.log(acctHolder.getBalance())

