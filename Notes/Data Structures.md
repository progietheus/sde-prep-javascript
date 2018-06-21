
# Data Structures
## Linked Lists

### Structure
- Head is the first element
- Tail is the last element
- Each element in a singly linked list contains a pointer to the next element in the list


### Typical Operations

- Updating the head of the list
- Traversing the list to find a specific element
- Inserting or removing elements

### Notes 
- A doubly linked list contains a pointer to the next and previous elements
- Circular linked lists have no head or tail

## Trees and Graphs
### Structure
- The first node is the **root** node
- A tree is made up of nodes
- With 0, 1, or more references to other nodes
- Each node has only one node referecing *it*
### Typical Operations
#### Searches - Sometimes it's slow O(n) to search an unordered / unbalanced tree, such as a family tree or org. chart, so you want to use searches
- Breadth-First Search
- Depth-First Search
#### Traversals


### Notes
- Parent is a node that points to other nodes
- Child is a child of any node that points to it
- Descendants are all the nodes that can be reached by following a path of child nodes
- Ancestor is a ny node for which the node is a descendant
- Leaves are nodes that do not have any children
- Always good to start recursively even though it may not be most efficient
### Types
- **Binary Trees** - Each node has no more than 2 children, referred to as *left* and *right*
- **Binary Search Trees** - The value in the left child is less than or equal to the parent and the right is greater than or equal to the parent node
  - Their run time is O(Log(n)) because it eliminates half of the remaining nodes from the search every iteration
  - You can find smallest element or largest element by following the left or right children nodes respectively
  - Worst Case: the nodes only have one child, so it becomes a linked list with O(n) complexity
  - Print out each node is O(n) complexity
  - Given a node you can find the next highest node in O(log(n))
- **Heaps** - a *max-heap* is where each child of a node has a value less than or equal to the nodes own value & a *min-heap* is when a each child is great than or equal to its parent. The root node always has the largest value.
  - If extracting max value has to be fast, use a heap.
