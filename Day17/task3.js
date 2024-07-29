class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty";
        }
        return this.items[this.items.length-1];
    }
    print(){
        console.log(this.items.join(' '));
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size(){
       return this.items.length;
    }
    
}

const stack=new Stack();
/*stack.push(2);
stack.push(4);
stack.push(6);
stack.push(5);
stack.push(8);
stack.print();
stack.pop();
stack.pop();
stack.print();
console.log(stack.peek());
console.log(stack.size()); */

//task 4:
console.log("\n");
stack.push('s');
stack.push('o');
stack.push('n');
stack.push('i');
stack.print();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

