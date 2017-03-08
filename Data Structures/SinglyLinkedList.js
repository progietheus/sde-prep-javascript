//Singly-Linked list JavaScript implementation
//Methods: add(value), searchNodeAt(position), remove(position)
//Source: https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
//
//A node should have data and a pointer to the next node
function Node(data) {
    this.data = data;
    this.next = null;
}

//A Singly Linked List
function SinglyLinkedList() {
    this._length = 0; //the number of nodes in a list
    this.head = null; //points to the head of the list-the node at the front of the list
}

SinglyLinkedList.prototype.add = function(value) {
	//Create a node 
	//We create a node and set currentNode to the head, which at first is null
    var node = new Node(value),
        currentNode = this.head;

    //1st use-case: an empty list
    //Since currentNode is null, we enter this function
    if (!currentNode) {
    	//we assigned the new node created as the head
        this.head = node;
        //we increase the length of the list by 1 
        this._length++;
        //we return the node: SinglyLinkedList { _length: 1, head: Node { data: value, next: null } }
        return node;
    }

    //2nd use-case: a non-empty list
    //3rd use-case: a non-empty list*
    //The 2nd time arround we alreadyt have a node in the list, so we append to the list
    //In the 2nd run we skip this and go to line 41 since we have no next pointer
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    //2nd time around we assign the newly created node as the next pointer for the previously created node
    currentNode.next = node;
    //increase the length property by 1
    this._length++;
    //return the node.
    return node;
};

SinglyLinkedList.prototype.searchNodeAt = function(position) {
	//We assign the head as the currentNode
	//we define the length of the list
	//Initialize count for a counter
	//default an error message
	var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position 
    // if the list is empty we fail
    // if the list is being asked to fetch a position outside of the bounds it also fails
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position 
    // we iterate through the list by accessing the .next property where the next node object is defined
    // we do this as many times as defined by the position, incrementing our counter
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 	//return the discovered node
    return currentNode;
};

SinglyLinkedList.prototype.remove = function(position) {
	//We assign the head as the currentNode
	//we define the length of the list
	//Initialize count for a counter
	//default an error message
	//initialized beforeNodeToDelete to capture the node that is before the node to be deleted
	//initialized nodeToDelete to capture the node that is to be deletred
	//initialized deletedNode to return the node that was deleted
	var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        //update the currentNode to the next node
        currentNode = currentNode.next;
        count++;
    }
 	//update the previous nodes pointer to the pointer of the deleted node
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
};

