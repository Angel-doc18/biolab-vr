// Extra questions for the A Level Computer Science lessons (0795), Lower Sixth
// Terms 2 and 3: data structures, algorithms, programming and software
// engineering.
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const QUESTIONS_B = {
  // ---------- Lower Sixth, Terms 2 and 3 ----------
  'acs-ds-1': [
    Q('Popping from an empty stack causes:', ['underflow', 'overflow', 'a new item', 'a sorted stack'], 'There is nothing to remove.'),
    Q('With Top = 0 meaning empty, a push first:', ['adds 1 to Top, then stores the item', 'stores the item at 0', 'removes the top item', 'sets Top to n'], 'Top then points at the new item.'),
    Q('The reverse Polish expression 5 1 2 + 4 × + equals:', ['17', '20', '12', '9'], '5 + (1 + 2) × 4.'),
    Q('A record differs from an array because it:', ['can hold fields of different types', 'holds only numbers', 'has no name', 'is always sorted'], 'Name, form and mark together.'),
  ],
  'acs-ds-2': [
    Q('A queue is:', ['first in, first out', 'last in, first out', 'always sorted', 'accessed by index only'], 'Like people waiting in line.'),
    Q('The problem with a linear queue in an array is that:', ['cells freed at the front are not reused', 'it cannot hold numbers', 'it is LIFO', 'it never fills'], 'A circular queue fixes this.'),
    Q('A circular queue keeps a count of items so that it can tell:', ['a full queue from an empty one', 'the largest item', 'the type of data', 'the speed'], 'Front and Rear alone look the same in both.'),
    Q('Items of equal priority in a priority queue leave:', ['in order of arrival', 'at random', 'smallest first', 'last first'], 'Like an ordinary queue.'),
  ],
  'acs-ds-3': [
    Q('Inserting into a linked list is quick because:', ['only pointers change; no items are moved', 'the list is always sorted', 'it uses binary search', 'nodes are next to each other'], 'Arrays would need shifting.'),
    Q('A disadvantage of a linked list is that:', ['items cannot be reached directly by index', 'it cannot grow', 'it cannot be sorted', 'it has no end'], 'You must follow the pointers.'),
    Q('In a doubly linked list, each node has:', ['pointers to the next and the previous node', 'two data items and no pointers', 'only a pointer back', 'an index'], 'It can be walked both ways.'),
    Q('To delete Current, which follows Previous:', ['Previous.Next ← Current.Next', 'Current.Next ← Previous', 'Start ← null', 'Previous ← Current'], 'The list skips round it.'),
  ],
  'acs-ds-4': [
    Q('A node with no children is a:', ['leaf', 'root', 'branch pointer', 'parent'], 'The ends of the tree.'),
    Q('Post-order traversal visits:', ['left subtree, right subtree, node', 'node, left, right', 'left, node, right', 'right, left, node'], 'The node last.'),
    Q('Inserting 10, 20, 30, 40 in that order into a BST gives:', ['a lopsided tree like a linked list', 'a balanced tree', 'a graph with cycles', 'an empty tree'], 'Each value goes right.'),
    Q('A balanced BST of about 1000 nodes needs about how many comparisons to search?', ['10', '500', '1000', '100'], 'Its depth is about log₂ 1000.'),
  ],
  'acs-ds-5': [
    Q('For a graph with few edges, the more memory-efficient form is:', ['an adjacency list', 'an adjacency matrix', 'a binary tree', 'a stack'], 'Only real edges are stored.'),
    Q('A weighted graph gives each edge:', ['a value such as a distance or cost', 'a direction only', 'a name', 'nothing'], 'Used for route finding.'),
    Q('Depth-first search can be written with:', ['a stack or recursion', 'a queue only', 'a hash table', 'a sort'], 'It backtracks.'),
    Q('An adjacency matrix for 100 vertices has:', ['10 000 cells', '100 cells', '200 cells', '1000 cells'], 'n × n.'),
  ],
  'acs-alg-1': [
    Q('Linear search works on:', ['sorted and unsorted lists', 'sorted lists only', 'trees only', 'numbers only'], 'It checks each item.'),
    Q('Binary search of 1 000 000 sorted items takes at most about:', ['20 comparisons', '1000', '500 000', '100'], '2²⁰ ≈ 1 000 000.'),
    Q('Bubble sort can stop early when:', ['a pass makes no swaps', 'the first item is smallest', 'half the passes are done', 'the list has even length'], 'The list is then sorted.'),
    Q('Insertion sort is fastest on a list that is:', ['nearly sorted', 'in reverse order', 'random', 'very long'], 'Few items need moving.'),
  ],
  'acs-alg-2': [
    Q('Merge sort needs extra memory because:', ['it merges into a new list', 'it uses a pivot', 'it is recursive only', 'it sorts in place'], 'Quick sort works in place.'),
    Q('Quick sort’s worst case, O(n²), happens when:', ['the pivot is always the smallest or largest item', 'the list is random', 'n is even', 'the pivot is the median'], 'One part is empty each time.'),
    Q('Divide and conquer algorithms are often written:', ['recursively', 'with no loops', 'in assembly only', 'with a single comparison'], 'Each part is the same problem, smaller.'),
    Q('For 1000 items bubble sort makes up to about:', ['500 000 comparisons', '10 000', '1000', '1 000 000 000'], 'n(n − 1)/2 = 499 500.'),
  ],
  'acs-alg-3': [
    Q('Two nested loops, each running n times, are:', ['O(n²)', 'O(2n)', 'O(n)', 'O(log n)'], 'n × n.'),
    Q('A loop that halves its range each time is:', ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'], 'Like binary search.'),
    Q('Trying every combination of n on/off switches is:', ['O(2ⁿ)', 'O(n²)', 'O(n)', 'O(n log n)'], 'Each switch doubles the count.'),
    Q('The best case of linear search is:', ['O(1), when the target is the first item', 'O(n)', 'O(n²)', 'O(log n)'], 'One comparison.'),
  ],
  'acs-prog-1': [
    Q('In functional programming, programs are built from:', ['functions that return values without changing variables', 'objects and classes only', 'machine code', 'facts and rules'], 'For example Haskell.'),
    Q('An advantage of a low-level language is:', ['direct control of the hardware and fast, compact code', 'it runs on every processor', 'it is easy to read', 'it needs no translation for any machine'], 'Used for drivers.'),
    Q('An advantage of a high-level language is that it:', ['is portable and quicker to write and maintain', 'gives direct register access', 'needs no translator', 'is always faster'], 'One statement becomes many instructions.'),
    Q('C, Pascal and BASIC are mainly:', ['procedural languages', 'logic languages', 'markup languages', 'query languages'], 'Sequences of statements in procedures.'),
  ],
  'acs-prog-2': [
    Q('Comments are removed during:', ['lexical analysis', 'syntax analysis', 'code generation', 'linking'], 'They are not tokens.'),
    Q('Optimisation in a compiler:', ['makes the object code faster or smaller', 'finds syntax errors', 'loads the program', 'removes comments'], 'The last stage.'),
    Q('A loader:', ['copies a program into memory and starts it', 'translates source code', 'joins libraries', 'deletes files'], 'It sets the addresses.'),
    Q('Java bytecode runs on any machine that has:', ['a Java Virtual Machine', 'the Java source code', 'a C compiler', 'an assembler'], 'Compile once, run anywhere.'),
  ],
  'acs-oop-1': [
    Q('In Python, the constructor of a class is the method:', ['__init__', 'main', 'new', 'start'], 'It runs when the object is made.'),
    Q('In a method, self refers to:', ['the object the method is called on', 'the class', 'the program', 'the superclass'], 'Each object’s own data.'),
    Q('Attributes are:', ['the data an object holds', 'its methods', 'its class name', 'its constructor'], 'Such as name and form.'),
    Q('Making an object from a class is called:', ['instantiation', 'inheritance', 'encapsulation', 'compilation'], 'It creates an instance.'),
  ],
  'acs-oop-2': [
    Q('Encapsulation means:', ['keeping data private and reaching it only through methods', 'joining classes', 'running in parallel', 'compiling code'], 'It protects the object.'),
    Q('A getter method:', ['returns the value of an attribute', 'deletes an object', 'changes the class', 'prints every attribute'], 'For example get_balance().'),
    Q('Polymorphism lets:', ['different classes answer the same method call in their own way', 'one class have no methods', 'objects share one attribute', 'programs run without classes'], 'area() for every shape.'),
    Q('Overloading means:', ['several methods with the same name but different parameters', 'redefining an inherited method', 'too many objects', 'running out of memory'], 'Used in C++ and Java.'),
  ],
  'acs-oop-3': [
    Q('In a UML class diagram, − before an attribute means:', ['private', 'public', 'protected', 'static'], '+ is public, # protected.'),
    Q('Inheritance shows an:', ['"is a" relationship', '"has a" relationship', '"uses a" relationship', '"calls a" relationship'], 'A Teacher is a Person.'),
    Q('A subclass constructor in Python calls the superclass constructor with:', ['super().__init__(…)', 'self.__init__()', 'Person()', 'parent()'], 'Then it sets its own attributes.'),
    Q('Local variables are preferred to globals because:', ['subroutines stay independent and easy to test', 'they are faster to type', 'they last for the whole program', 'they can be changed from anywhere'], 'Fewer hidden side effects.'),
  ],
  'acs-se-1': [
    Q('The spiral model adds to each cycle:', ['a risk analysis', 'a sprint review', 'no testing', 'a feasibility study only at the end'], 'For large, risky projects.'),
    Q('A disadvantage of the waterfall model is that:', ['users see the product only at the end', 'it has no documents', 'it has no stages', 'it is always agile'], 'Late changes are costly.'),
    Q('Fixing a fault found after installation is:', ['corrective maintenance', 'adaptive maintenance', 'perfective maintenance', 'analysis'], 'Correcting an error.'),
    Q('In Scrum, a sprint usually lasts:', ['one to four weeks', 'one day', 'one year', 'the whole project'], 'It ends with working software.'),
  ],
  'acs-se-2': [
    Q('A process in a DFD is named with:', ['a verb phrase, such as Issue book', 'a person’s name', 'a file name', 'a number only'], 'It does something to data.'),
    Q('Every process must have:', ['at least one input and one output', 'a data store', 'two external entities', 'no flows'], 'Otherwise it does nothing useful.'),
    Q('Levels of a DFD balance when:', ['the flows in and out of the context diagram all appear at level 1', 'every level has the same number of processes', 'there are no data stores', 'all flows are unlabelled'], 'Nothing is lost or added.'),
    Q('A data store is drawn as:', ['an open-ended box', 'a circle', 'a stick figure', 'a diamond'], 'Labelled D1, D2 ….'),
  ],
  'acs-se-3': [
    Q('In a use-case diagram, an actor is drawn as:', ['a stick figure', 'an oval', 'a rectangle with a line', 'an arrow'], 'People or outside systems.'),
    Q('Use cases are drawn as:', ['ovals', 'stick figures', 'open-ended boxes', 'triangles'], 'Named with a verb phrase.'),
    Q('Borrow book always checks membership. This is shown with:', ['«include»', '«extend»', 'a data flow', 'inheritance'], 'It always happens.'),
    Q('Use-case descriptions are later used to write:', ['test cases', 'the database', 'the compiler', 'the invoices'], 'Each step can be tested.'),
  ],
  'acs-se-4': [
    Q('"The system must find any student in under 2 seconds" is:', ['a non-functional requirement', 'a functional requirement', 'a data flow', 'out of scope'], 'It says how well.'),
    Q('A questionnaire is good for:', ['collecting short answers from many people quickly', 'detailed follow-up questions', 'seeing work as it is done', 'reading old receipts'], 'Easy to analyse.'),
    Q('The scope of a project states:', ['what the system will and will not do', 'the programming language only', 'the user’s age', 'the final mark'], 'It keeps the project manageable.'),
    Q('A project log records:', ['meetings, decisions and progress from the start', 'only the final code', 'the examiner’s marks', 'passwords'], 'It shows how the project developed.'),
  ],
  'acs-l6-paper1': [
    Q('NOT (A OR B) equals:', ['NOT A AND NOT B', 'NOT A OR NOT B', 'A AND B', 'A OR B'], 'De Morgan’s law.'),
    Q('A XOR B is 1 when:', ['A and B differ', 'both are 1', 'both are 0', 'A is 1'], 'Exclusive OR.'),
    Q('The 8-bit two’s complement number 10000000 is:', ['−128', '128', '−0', '−127'], 'Only the top bit is set.'),
    Q('For 172.16.9.77/27, the network address is:', ['172.16.9.64', '172.16.9.0', '172.16.9.77', '172.16.9.95'], 'Blocks of 32: 64 to 95.'),
  ],
  'acs-l6-paper2': [
    Q('A trace table has:', ['a column for each variable and for the output', 'one column only', 'the program code', 'no rows'], 'One row per change.'),
    Q('A loop meant to visit A[1] to A[n] that runs FOR i ← 0 TO n has:', ['an off-by-one error', 'no error', 'a syntax error only', 'an infinite loop'], 'It reaches A[0] too.'),
    Q('After push 3, push 9, pop, push 4, pop, pop on an empty stack, the stack is:', ['empty', '[3]', '[3, 4]', '[9]'], 'Three pushes and three pops.'),
    Q('FOR i ← 1 TO n: FOR j ← 1 TO 10: … is:', ['O(n)', 'O(n²)', 'O(10)', 'O(log n)'], 'The inner loop runs a fixed 10 times.'),
  ],
};
