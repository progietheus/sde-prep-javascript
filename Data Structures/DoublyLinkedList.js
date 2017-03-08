function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value,next,previous){
  this.value = value;
  this.next = next;
  this.previous = previous;
  
} 

LinkedList.prototype.addToHead = function(value){
  var newNode = new Node(value, this.head, null);
  
   if(this.head) 
    this.head.previous = newNode;
   else 
    this.tail = newNode;
    
   this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value, null, this.tail);
  
   if(this.tail) 
    this.tail.next = newNode;
   else 
    this.head = newNode;
    
   this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;
  var headVal = this.head.value;
  var newHead = this.head.next;
  if(this.head) this.head.previous = null;
  else this.tail = null;
  return val;
  
}

LinkedList.prototype.search = function(value){
  var currentNode = this.head;
  while(currentNode){
    if (currentNode.value === value) return currentNode;
    currentNode = currentNode.next
  }
  return null;
}

LinkedList.prototype.indexOf = function(value){
  var currentNode = this.head;
  var indexes = [];
  var count = 0;
  //find index of seearchvalue and return as array of index;
  while(currentNode){
    if(currentNode.value === value) indexes.push(count);
    currentNode = currentNode.next;
    count++;
  }
  return indexes;
}
