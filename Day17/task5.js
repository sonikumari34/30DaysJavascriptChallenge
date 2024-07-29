//task 5:
//implement :
class Queue{
    constructor(maxsize){
        this.items=[];
        this.maxsize=maxsize;
    }

    enQ(element){
        if(this.isFull()){
            console.log("The queue is full");
            return;
        }
      this.items.push(element);
    }
    deque(){
        if(this.isEmpty()){
            console.log("empty que");
        }
        return this.items.shift();
    }
    front(){
        if(this.isEmpty()){
            console.log("The queue is empty");
            return null;
        }
        return this.items[0];
    }
    isEmpty(){
       return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    isFull(){
       return this.items.length===this.maxsize;
    }
    print(){
        console.log(this.items.join(' '));
    }
}
const queue = new Queue();
/*queue.enQ(10);
queue.enQ(20);
queue.enQ(30);
queue.print(); // Output: 10 20 30

queue.enQ(40); // Output: The queue is full
queue.enQ(50);
console.log(queue.deque()); // Output: 10
console.log(queue.front()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.isFull()); // Output: false
queue.print(); // Output: 20 30*/ 
queue.enQ(' print Document 1');
queue.enQ(' print Document 2');
queue.enQ(' print Document 3');

queue.print();
console.log(queue.deque());
console.log(queue.deque());



