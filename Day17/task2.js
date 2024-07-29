class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    addToEnd(value){
        const newNode=new Node(value);
        if(this.head==null){
            this.head=newNode;
        }else{
            let current=this.head;
            while(current.next!=null){
               current=current.next;

            }
            current.next=newNode;
        }
    }
    removeFromEnd(){
        if(this.head==null){
            console.log("This list is empty.");
            return;
        }
        if(this.head.next===null){
            this.head=null;
            return;
        }
        else{
            let current=this.head;
            while(current.next.next!==null){
                current=current.next;
            }
            current.next=null;

        }
    }

    display(){
        if(this.head === null){
            console.log("empty list");
            return;
        }
        let current=this.head;
        let listValues="";
        while(current!==null){
            listValues+=current.value + " -> ";
            current=current.next;

        }
        listValues+="null";
        console.log(listValues);
    }
}

const list = new LinkedList();
list.addToEnd(1);
list.addToEnd(2);
list.addToEnd(3);
list.display(); 

list.removeFromEnd();
list.display(); 

