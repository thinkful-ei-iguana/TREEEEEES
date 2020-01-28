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

// Q5
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

// Q6

function searchTreeOrNot(tree) {
  if (tree.left) {
    if (tree.left.value > tree.value) {
      return false;
    }
    searchTreeOrNot(tree.left);
  }

  if (tree.right) {
    if (tree.right.value < tree.value) {
      return false;
    }
    searchTreeOrNot(tree.right);
  }

  return true;
}
console.log(searchTreeOrNot(BST));

//Q7
function thirdLargest(tree) {
  let largestNode = tree;
  while (largestNode.right) {
    largestNode = largestNode.right;
  }

  let parent = largestNode.parent;

  if (largestNode.left) {
    return parent.value;
  }
  if (parent.left) {
    return parent.left.value;
  }
  return parent.parent.value;
}

console.log(thirdLargest(BST));

//Q8
const newBST = new BinarySearchTree();
newBST.insert(5, 5);
newBST.insert(3, 3);
newBST.insert(7, 7);
newBST.insert(1, 1);
newBST.insert(9, 9);

function isBalanced(tree) {
  if (tree === null) return 0;
  if (tree.left === null && tree.right === null) {
    return 1;
  }

  const leftHeight = findHeight(tree.left) + 1;
  const rightHeight = findHeight(tree.right) + 1;
  return Math.abs(leftHeight - rightHeight) <= 1;
}

console.log(isBalanced(newBST));

//Q9
