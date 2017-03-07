//Data Structures
//Binary Search Tree JavaScript implementation
//Methods: push(val)
//Source: https://khan4019.github.io/front-end-Interview-Questions/bst.html
//
//A node should have a value, a left value, and a right value
function Node(data) {
    this.value = data;
    this.left = null;
    this.right = null;
}
//Binary Search Tree Constructor
function BinarySearchTree(){
	this.root = null;
}

BinarySearchTree.prototype.push = function(value){
	var root = this.root;

	//If there is no root element create one
	//1st element to be created
	if(!root){
		this.root = new Node(value);
		return;
	}

	var currentNode = root;
	var newNode = new Node(value);

	while(currentNode){
		if(value < currentNode.value) {
			if(!currentNode.left){
				currentNode.left = newNode;
			}
			else{
				currentNode = currentNode.left;
			}
		}
		else{
			if(!currentNode.right){
				currentNode.right = newNode;
			}
			else{
				currentNode = currentNode.right;
			}
		}
	}
}
