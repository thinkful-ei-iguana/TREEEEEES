const BinarySearchTree = require('./BST');

// Q3
// 
const BST = new BinarySearchTree();
BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
BST.insert(7, 7);
// console.log(BST);

const BSTL = new BinarySearchTree();
BSTL.insert('E', 'E');
BSTL.insert('A', 'A');
BSTL.insert('S', 'S');
BSTL.insert('Y', 'Y');
BSTL.insert('Q', 'Q');
BSTL.insert('U', 'U');
BSTL.insert('E', 'E');
BSTL.insert('S', 'S');
BSTL.insert('T', 'T');
BSTL.insert('I', 'I');
BSTL.insert('O', 'O');
BSTL.insert('N', 'N');
// console.log(BSTL);

// Q4
// Adds up all the values in the tree
// O(n)

// Q3
function findHeight(tree) {
  if (tree === null) return 0;
  if (tree.left === null && tree.right === null) {
    return 1;
  }

  const leftHeight = findHeight(tree.left) + 1;
  const rightHeight = findHeight(tree.right) + 1;
  return rightHeight > leftHeight ? rightHeight : leftHeight;
}

console.log(findHeight(BST));