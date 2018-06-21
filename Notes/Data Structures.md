
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
- Breadth-First Search - Here you start with the root, move the second level and move from left to right, then move from left to right across the 3rd level, etc. Continues until you find your node or come to the end. *It is necessary to track the child nodes for all nodes on a given level while searching that level, so BFS uses additional memory. It examines the lower levels last, but the top levels first*
- Depth-First Search - Here we follow one branch of the tree down as many levels as possible until the target node is found or the end is reached. *It uses less memory since it does not need to store all the child pointers as each level. It does not examine any single level last*
#### Traversals - This is like a search but instead of stopping when you find a target node, you visit every node in the tree. *Often used to perform some operation on each node in the tree*
 - Depth-First Traversals
  - Preorder - performs the operation first on the node itself then on the left and finally on the right. A node is always visited before any of its children.
  - Inorder - first operation is the the nodes left descendants, then on itself, then finally on the rights. 
  - Postorder - first operation is on the left descedants, then on the right descendants, then on itself. A node is always visted after its children.


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
