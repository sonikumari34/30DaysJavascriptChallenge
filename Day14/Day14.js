//Tasks
//Activity 1: class defination
//task 1:
class Person{
     constructor(name,age){
        this.name=name;
        this.age=age;
     }
      greeting(){
          return `Hello, my name is ${this.name} and I am ${this.age} years old.`;

     }
      updateAge(newAge){
          this.age=newAge;
          console.log(`Updated age: ${this.age}`);
     }
     

};
const obj=new Person('Ruhi',10);
obj.greeting();
console.log(obj.name);
//task 2:
obj.updateAge(12);
console.log(obj.age);

//Activity:2
//task 3:
class Student extends Person{
     static studentCount=0;
    constructor(name,age,studentId){
     super(name,age);
     this.studentId=studentId;
     Student.studentCount++;
    }
    getStudentId(){
     return this.studentId;
    }
    
    greeting(){
     return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
    static logStudentCount(){
     console.log(`Total number of students: ${Student.studentCount}`);
    }

    
}
const student =new Student('Ruhi',16,'s12345');
console.log(`student ID:${student.getStudentId()}`);
console.log(student.greeting());
//task 6:
const student1=new Student('anita',20,'s2000');
const student2 = new Student('Jane Doe', 21, 'S12345');
const student3 = new Student('John Smith', 22, 'S12346');
Student.logStudentCount(); 


//static methods and properties
//task 5: 
class Employee{
     constructor(name,lastname,age){
       this.name=name;
       this.lastname=lastname;
       this.age=age;
     }
     //task 7:
   static greet(Employee){
     console.log(`Hello ${Employee.name}`);
     }
     get fullname(){
       return `${this.name} ${this.lastname}`;

     }
     //task 8:
     set FullNAME(Newname){
         this.name=Newname;
         this.lastname=Newname;
         console.log(`first name${Newname} and lastname:${Newname}`);

     }

     
}
const emp=new Employee('soni','kumari',16);
Employee.greet(emp);
 console.log(emp.fullname);
 emp.name='anshu';
 emp.lastname='kumari';
 console.log(emp.name);
 console.log(emp.lastname);
//emp.greet();

//task 9:

class Account{
     #balance;
     constructor(initalbalance){
          if(initalbalance>=0){
               this.#balance=initalbalance;

          }else{
               throw new Error('Inital balance must be non-negative');
          }
     }
     deposite(amount){
          if(amount>0){
               this.#balance+=amount;
               console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
          }
          else {
               console.log('Deposit amount must be positive');
           }

     }
     withDraw(amount){
          if(amount>0){
              
               if (amount <= this.#balance) {
                    this.#balance -= amount;
                    console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
                } else {
                    console.log('Insufficient funds');
                }
          }
          else {
               console.log('Withdrawal amount must be positive');
          }
     }
     getBalance(){
          return this.#balance;
     }
   

}
const  account=new Account(1000);
account.deposite(400);
account.withDraw(200);
account.withDraw(100);

console.log(`Current balance: $${account.getBalance()}`); 






