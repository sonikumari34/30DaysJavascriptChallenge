//Day 17 Data Structures
//Tasks/Activities:

//task 1:Implement a node class to represent an element in a linked list with value and next.
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Example usage:
  const firstNode = new Node(1);
  const secondNode = new Node(2);
  const thirdNode = new Node(3);
  const fourthNode = new Node(4);
  firstNode.next = secondNode;
  secondNode.next=thirdNode;
  thirdNode.next=fourthNode;
  
  console.log(firstNode); 
  console.log(secondNode); 
  console.log(thirdNode); 
  console.log(fourthNode); 


  

