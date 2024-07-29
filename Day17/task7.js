// Task 7: Define the TreeNode class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 8: Define the BinaryTree class
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a new value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertRec(this.root, newNode);
        }
    }

    // Helper method to insert a new node recursively
    insertRec(currentNode, newNode) {
        if (currentNode.left === null) {
            currentNode.left = newNode;
        } else if (currentNode.right === null) {
            currentNode.right = newNode;
        } else {
            // If both children are occupied, choose the left child recursively
            this.insertRec(currentNode.left, newNode);
        }
    }

    // In-order traversal of the binary tree
    inOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value); // Use node.value instead of root.data
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

// Example usage
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

console.log("In-order Traversal:", tree.inOrderTraversal()); // [4, 2, 5, 1, 6, 3, 7]
