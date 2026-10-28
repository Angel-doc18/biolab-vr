// A Level Computer Science lessons (0795), Lower Sixth, Terms 2 and 3: data
// structures, algorithms and complexity, programming paradigms and
// object-oriented programming, software engineering, the project and the
// examination drills. Original text written for this app.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 and Paper 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_CL6B = [
  // ---------- 10. Abstract data types ----------
  L('acs-ds-1', 'acs-l6-adt', '10.1', 'Abstract data types, arrays, records and the stack', 18, ['Data structures'], [
    'An **abstract data type** (ADT) is defined by the data it holds and the operations allowed on it, not by how it is stored. A stack is a stack whether it is built from an array or from a linked list; the program using it only calls its operations.',
    'An **array** is a fixed number of elements of one type, reached by index: Mark[3], or Grid[row, column] for a 2-D array. A **record** groups fields of different types under one name, such as a student record with Name, Form and Mark. A **pointer** is a variable that holds the memory address of some data.',
    'A **stack** is last in, first out (LIFO). Its operations are **push** (add to the top), **pop** (remove the top), **peek** (look at the top), isEmpty and isFull. In an array Stack[1..n] with a pointer Top, which is 0 when the stack is empty:\nPUSH: IF Top = n THEN OUTPUT "Overflow" ELSE Top ← Top + 1; Stack[Top] ← Item\nPOP: IF Top = 0 THEN OUTPUT "Underflow" ELSE Item ← Stack[Top]; Top ← Top − 1',
    'Stacks hold the **return addresses** of subroutine calls (the call stack), save registers during interrupts, give the undo feature of an editor, check that brackets match, and evaluate **reverse Polish** expressions, where the operator follows its operands: 3 4 + means 3 + 4.',
  ], 'acs-stack-array', 'Pushing onto a full stack is overflow; popping an empty stack is underflow. Always test first.',
  ['After push 5, push 8, pop, push 3 on an empty stack, the top item is:', ['3', '8', '5', 'nothing'], '8 was popped, then 3 pushed.'],
  [['Abstract data type', 'A type defined by its data and operations, not by how it is stored.'], ['Record', 'A group of fields of different types, stored under one name.'], ['Stack', 'A last-in, first-out structure, used through push and pop.']],
  [
    { q: 'A stack of size 3 starts empty. Show the contents and Top after: push 5, push 8, pop, push 3, push 6, push 9.', steps: ['push 5: [5], Top 1; push 8: [5, 8], Top 2; pop removes 8: [5], Top 1.', 'push 3: [5, 3], Top 2; push 6: [5, 3, 6], Top 3.', '**push 9 fails with overflow**: the stack stays [5, 3, 6] with Top = 3.'] },
    { q: 'Evaluate the reverse Polish expression 6 2 3 + × with a stack.', steps: ['Push 6, push 2, push 3.', '+ pops 3 and 2 and pushes 5; the stack is [6, 5].', '× pops 5 and 6 and pushes **30**, the answer: 6 × (2 + 3).'] },
    { q: 'Use a stack to check the brackets in ( [ ] ( ) ).', steps: ['Push each opening bracket; on a closing bracket, pop and check it matches.', '( pushed, [ pushed, ] pops [, ( pushed, ) pops (, ) pops (.', '**Every closing bracket matched and the stack ends empty, so the brackets balance.**'] },
  ]),

  L('acs-ds-2', 'acs-l6-adt', '10.2', 'Queues: linear, circular and priority', 17, ['Data structures'], [
    'A **queue** is first in, first out (FIFO): items are **enqueued** at the **rear** and **dequeued** from the **front**. Queues hold documents waiting to print, keys in the keyboard buffer, processes waiting for the processor and packets waiting in a router.',
    'In a **linear queue** stored in an array, Front moves forward as items leave, so the cells at the start are wasted; moving every item forward after each removal is slow.',
    'A **circular queue** lets Rear wrap round from the last cell to the first. With cells 0 to n − 1: Rear ← (Rear + 1) MOD n, and the same for Front. A counter of items tells a full queue from an empty one:\nENQUEUE: IF Count = n THEN OUTPUT "Queue full" ELSE Rear ← (Rear + 1) MOD n; Q[Rear] ← Item; Count ← Count + 1\nDEQUEUE: IF Count = 0 THEN OUTPUT "Queue empty" ELSE Item ← Q[Front]; Front ← (Front + 1) MOD n; Count ← Count − 1',
    'In a **priority queue** each item has a priority; the highest priority leaves first, and items of equal priority leave in order of arrival. Operating systems use them to schedule processes, and hospitals to treat the most urgent patients first.',
  ], 'acs-circular-queue', 'In a circular queue, MOD n brings the pointer back to 0 after the last cell.',
  ['In a circular queue with cells 0 to 4, Rear is 4. After one more enqueue, Rear is:', ['0', '5', '4', '1'], '(4 + 1) MOD 5 = 0.'],
  [['Queue', 'A first-in, first-out structure.'], ['Circular queue', 'A queue in an array whose pointers wrap round to the start.'], ['Priority queue', 'A queue where items leave in order of priority.']],
  [
    { q: 'A circular queue has cells 0 to 4. Enqueue A, B, C, D; dequeue twice; then enqueue E and F. Give Front, Rear, Count and the contents.', steps: ['After A, B, C, D: cells 0 to 3, Front 0, Rear 3, Count 4.', 'Two dequeues remove A and B: Front 2, Count 2.', 'E goes to cell 4; F goes to (4 + 1) MOD 5 = 0. **Front 2, Rear 0, Count 4; cells 2, 3, 4, 0 hold C, D, E, F.**'] },
    { q: 'Jobs arrive in the order A (priority 2), B (1), C (3), D (1), where 1 is the highest priority. In what order are they served?', steps: ['Priority 1 first: B and D, in their order of arrival.', 'Then priority 2, A; then priority 3, C.', '**B, D, A, C.**'] },
  ]),

  // ---------- 11. Linked lists ----------
  L('acs-ds-3', 'acs-l6-linked-lists', '11.1', 'Linked lists: traversing, inserting and deleting', 18, ['Data structures'], [
    'A **linked list** is made of **nodes**, each holding data and a **pointer** to the next node. A **start pointer** (head) gives the first node and the last node has a **null pointer**. The nodes can be anywhere in memory, so adding or removing one changes only pointers and nothing has to be shifted; but there is no direct access by index: to reach the tenth item you follow nine pointers.',
    'To **insert** a node after the node Previous: first New.Next ← Previous.Next, then Previous.Next ← New. In the other order the address of the rest of the list would be lost. To insert at the start: New.Next ← Start, then Start ← New.',
    'To **delete** the node Current, which follows Previous: Previous.Next ← Current.Next. The removed node goes back to the **free list**.',
    'When a list is kept in arrays Data[ ] and Next[ ], the free cells are linked into a free list with its own pointer, and null is written as 0. A **doubly linked** list also has a pointer to the previous node, so it can be walked both ways; in a **circular** list the last node points back to the first.',
  ], 'acs-list-insert', 'When inserting, set the new node’s pointer before changing the old one.',
  ['To insert New after node P, the first step is:', ['New.Next ← P.Next', 'P.Next ← New', 'Start ← New', 'P.Next ← null'], 'Otherwise the rest of the list is lost.'],
  [['Node', 'One element of a linked list: data and a pointer.'], ['Null pointer', 'A pointer that points to nothing, marking the end of a list.'], ['Free list', 'The unused nodes, linked together, ready to be used.']],
  [
    { q: 'Cells: 1 Bamenda (next 4), 2 Limbe (next 0), 3 free (next 5), 4 Douala (next 2), 5 free (next 0). Start = 1, Free = 3. List the towns in order, then insert Garoua in alphabetical order.', steps: ['Follow the pointers: 1 Bamenda → 4 Douala → 2 Limbe → 0, the end.', 'Take cell 3 from the free list (Free ← 5) and put Garoua in it; it belongs between Douala and Limbe.', 'Next[3] ← Next[4] = 2, then Next[4] ← 3. **Bamenda → Douala → Garoua → Limbe.**'] },
    { q: 'In the same list, delete Bamenda, the first node.', steps: ['Start ← Next[1] = 4, so the list now begins at Douala.', 'Return cell 1 to the free list: Next[1] ← Free (5), then Free ← 1.', '**Douala → Garoua → Limbe; the free list is 1 → 5.**'] },
    { q: 'Write pseudocode to output every item of a linked list.', steps: ['Ptr ← Start', 'WHILE Ptr ≠ 0: OUTPUT Data[Ptr]; Ptr ← Next[Ptr]; ENDWHILE', '**The loop stops at the null pointer**, and works for an empty list too.'] },
  ]),

  // ---------- 12. Trees and graphs ----------
  L('acs-ds-4', 'acs-l6-trees-graphs', '12.1', 'Binary search trees and traversals', 18, ['Data structures'], [
    'In a **binary tree** each node has at most two children, left and right. The top node is the **root** and nodes with no children are **leaves**. In a **binary search tree** (BST), every value in a node’s left subtree is smaller than the node and every value in its right subtree is larger.',
    'To **insert** or **search**, start at the root and go left if the value is smaller, right if it is larger, until you find it or reach an empty place. A balanced tree of n nodes is about log₂ n levels deep, so a search takes about log₂ n comparisons; but values inserted already in order make a lopsided tree as slow as a linked list.',
    '**Traversals**: **pre-order** (node, left, right) copies a tree; **in-order** (left, node, right) gives a BST’s values in ascending order; **post-order** (left, right, node) deletes a tree safely and turns an expression tree into reverse Polish.',
    'A tree can be stored in arrays Left[ ], Data[ ] and Right[ ], with 0 for a missing child, and searched by following the pointers.',
  ], 'acs-bst', 'In-order traversal of a binary search tree always comes out sorted.',
  ['Inserting 50, 30, 70, 20 into an empty BST puts 20:', ['as the left child of 30', 'as the right child of 30', 'as the left child of 70', 'at the root'], '20 < 50, then 20 < 30.'],
  [['Binary search tree', 'A binary tree with smaller values on the left of each node and larger on the right.'], ['Leaf', 'A node with no children.'], ['Traversal', 'Visiting every node of a tree in a set order.']],
  [
    { q: 'Insert 50, 30, 70, 20, 40, 60, 80 into an empty BST and give the three traversals.', steps: ['50 is the root; 30 and 70 are its children; 20 and 40 go under 30; 60 and 80 under 70.', 'Pre-order: 50 30 20 40 70 60 80. In-order: 20 30 40 50 60 70 80.', '**Post-order: 20 40 30 60 80 70 50.**'] },
    { q: 'How many comparisons does a search for 60 take in that tree?', steps: ['60 > 50, so go right to 70.', '60 < 70, so go left to 60.', '**Found at the third comparison.**'] },
    { q: 'Draw the expression tree of (3 + 4) × 2 and give its post-order traversal.', steps: ['The root is ×, its left child is + (with children 3 and 4), its right child is 2.', 'Post-order visits left, right, node: 3 4 + 2 ×.', '**3 4 + 2 ×**, the reverse Polish form, which evaluates to 14.'] },
  ]),

  L('acs-ds-5', 'acs-l6-trees-graphs', '12.2', 'Graphs: adjacency matrices, lists and searching', 18, ['Data structures'], [
    'A **graph** is a set of **vertices** joined by **edges**. In a **directed** graph the edges have a direction; in a **weighted** graph each edge has a value such as a distance, a cost or a time. Graphs model road maps, computer networks, social networks and tasks that depend on each other.',
    'An **adjacency matrix** is an n × n table with the weight (or 1) where two vertices are joined and 0 where they are not: checking one edge is instant, but it takes n² cells even when there are few edges. An **adjacency list** gives each vertex a list of its neighbours, which saves memory when the graph has few edges.',
    '**Breadth-first search** (BFS) uses a **queue**: visit a vertex, then all its neighbours, then their neighbours, and so on. It finds the path with the fewest edges.',
    '**Depth-first search** (DFS) uses a **stack**, or recursion: follow one path as deep as it goes, then go back to the last vertex with an unvisited neighbour. It is used to solve mazes and to find whether two vertices are connected.',
  ], 'acs-graph', 'BFS uses a queue and works outwards in rings; DFS uses a stack and goes deep first.',
  ['Breadth-first search keeps the vertices waiting to be visited in:', ['a queue', 'a stack', 'a binary tree', 'a hash table'], 'First discovered, first visited.'],
  [['Vertex and edge', 'A point of a graph, and a line joining two points.'], ['Adjacency matrix', 'A table showing which vertices are joined, and by what weight.'], ['Breadth-first search', 'Visiting a graph ring by ring outwards, using a queue.']],
  [
    { q: 'A graph has edges A–B 4, A–C 2, B–D 5, C–D 8, C–E 10 and D–E 2. Give the row of the adjacency matrix for C.', steps: ['C is joined to A (2), D (8) and E (10).', 'C is not joined to B or to itself.', '**A 2, B 0, C 0, D 8, E 10.**'] },
    { q: 'Give the breadth-first order from A, taking neighbours in alphabetical order.', steps: ['Visit A; queue B, C. Visit B; queue D.', 'Visit C; D is already queued, so queue E. Visit D, then E.', '**A, B, C, D, E.**'] },
    { q: 'Give the depth-first order from A, taking neighbours in alphabetical order.', steps: ['A → B (first neighbour of A) → D (B’s only new neighbour).', 'From D: B is visited, so go to C. From C: A and D are visited, so go to E.', '**A, B, D, C, E.**'] },
  ]),

  // ---------- 13. Sorting and searching ----------
  L('acs-alg-1', 'acs-l6-sort-search', '13.1', 'Searching, bubble sort and insertion sort', 18, ['Algorithms'], [
    '**Linear search** checks each item in turn. It works on unsorted data and takes up to n comparisons, about n/2 on average.',
    '**Binary search** needs a sorted list. Compare the target with the middle item and throw away the half that cannot hold it:\nLow ← 1; High ← n; Found ← FALSE\nWHILE Low ≤ High AND NOT Found: Mid ← (Low + High) DIV 2; IF A[Mid] = Target THEN Found ← TRUE ELSE IF A[Mid] < Target THEN Low ← Mid + 1 ELSE High ← Mid − 1\nIt needs at most about log₂ n + 1 comparisons: 10 for 1000 items.',
    '**Bubble sort** compares neighbours and swaps them if they are in the wrong order; after each pass the largest remaining item has reached its place. If a pass makes no swap the list is sorted and the sort can stop. **Insertion sort** takes each item in turn and slides it left into its place among the items already sorted; it is quick on lists that are nearly sorted.',
    'Both sort **in place**, needing no extra memory, but both make about n²/2 comparisons in the worst case, which is too slow for long lists.',
  ], 'binary-search', 'For binary search, write Low, High and Mid in a trace table for every step.',
  ['Binary search for 37 in 3, 8, 15, 21, 29, 37, 44, 52, 60 first compares 37 with:', ['29', '37', '21', '44'], 'Mid = (1 + 9) DIV 2 = 5.'],
  [['Linear search', 'Checking each item in turn.'], ['Binary search', 'Halving a sorted list at each comparison.'], ['Insertion sort', 'Placing each item in turn into the sorted part of the list.']],
  [
    { q: 'Search for 37 in 3, 8, 15, 21, 29, 37, 44, 52, 60 (positions 1 to 9) by binary search.', steps: ['Low 1, High 9, Mid 5: A[5] = 29 < 37, so Low ← 6.', 'Mid (6 + 9) DIV 2 = 7: A[7] = 44 > 37, so High ← 6.', '**Mid 6: A[6] = 37, found at the third comparison.**'] },
    { q: 'Sort 5, 2, 4, 6, 1 by insertion sort, showing each step.', steps: ['Insert 2: 2 5 4 6 1. Insert 4: 2 4 5 6 1.', 'Insert 6: no move, 2 4 5 6 1.', '**Insert 1: 1 2 4 5 6.**'] },
    { q: 'Show the first pass of bubble sort on 5, 1, 4, 2, 8.', steps: ['5 and 1 swap: 1 5 4 2 8; 5 and 4 swap: 1 4 5 2 8.', '5 and 2 swap: 1 4 2 5 8; 5 and 8 stay.', '**After pass 1: 1 4 2 5 8, with three swaps; 8 is in its place.**'] },
  ]),

  L('acs-alg-2', 'acs-l6-sort-search', '13.2', 'Merge sort and quick sort', 18, ['Algorithms'], [
    '**Divide and conquer** splits a problem into smaller problems of the same kind, solves them, often by recursion, and combines their answers.',
    '**Merge sort** splits the list in half again and again until each part has one item, then **merges** pairs of sorted lists by repeatedly taking the smaller front item. There are about log₂ n levels with n items handled at each, so it always takes **O(n log n)** time, but it needs extra memory to merge into.',
    '**Quick sort** picks a **pivot**, **partitions** the list into the items smaller than the pivot and those larger, then quick sorts each part. On average it takes O(n log n) time and works in place; but if the pivot is always the smallest or largest item, as when the first item of an already sorted list is chosen, it slows to O(n²).',
    'For 1000 items bubble sort makes up to n(n − 1)/2 = 499 500 comparisons; merge sort makes fewer than n log₂ n ≈ 10 000.',
  ], 'acs-merge-sort', 'To merge two sorted lists, compare only their front items each time.',
  ['Merge sort takes, in every case:', ['O(n log n) time', 'O(n²) time', 'O(n) time', 'O(log n) time'], 'log n levels of n steps.'],
  [['Divide and conquer', 'Solving a problem by splitting it into smaller problems of the same kind.'], ['Merge', 'Combining two sorted lists into one sorted list.'], ['Pivot', 'The item quick sort uses to split the list.']],
  [
    { q: 'Sort 38, 27, 43, 3, 9, 82, 10, 15 by merge sort.', steps: ['Split into pairs and sort each: 27 38 | 3 43 | 9 82 | 10 15.', 'Merge the pairs: 3 27 38 43 | 9 10 15 82.', '**Merge the halves: 3 9 10 15 27 38 43 82.**'] },
    { q: 'How many comparisons does it take to merge 3 27 38 43 with 9 10 15 82?', steps: ['3–9, 27–9, 27–10, 27–15, 27–82, 38–82, 43–82: seven comparisons.', 'Each one moves the smaller item to the output.', '**7 comparisons**; then 82 is copied across with no more needed.'] },
    { q: 'Quick sort 7, 2, 9, 4, 8, 1, using the first item as the pivot.', steps: ['Pivot 7: smaller 2 4 1, larger 9 8.', 'Sort 2 4 1 with pivot 2: 1 | 2 | 4. Sort 9 8 with pivot 9: 8 | 9.', '**1 2 4 7 8 9.**'] },
  ]),

  // ---------- 14. Big-O ----------
  L('acs-alg-3', 'acs-l6-big-o', '14.1', 'Time and space complexity: Big-O notation', 18, ['Algorithms'], [
    '**Time complexity** describes how the number of steps an algorithm takes grows as the size n of its input grows; **space complexity** describes the memory it needs. **Big-O** notation keeps only the fastest-growing term and drops constants: 3n² + 5n + 2 is O(n²).',
    'The common classes, from best to worst: **O(1)** constant (reading A[i]), **O(log n)** logarithmic (binary search), **O(n)** linear (linear search, one loop), **O(n log n)** (merge sort), **O(n²)** quadratic (nested loops, bubble sort) and **O(2ⁿ)** exponential (trying every combination of n items).',
    'From code: a loop that runs n times is O(n); a loop inside another, each n times, is O(n²); a loop that halves its range each time is O(log n). Loops one after the other add, so the biggest term wins.',
    'An algorithm can have different **best**, **average** and **worst** cases. Linear search is O(1) at best, when the target is first, and O(n) at worst. Bubble sort that stops when a pass makes no swap is O(n) on a sorted list, and quick sort is O(n²) at worst.',
  ], 'acs-bigo', 'Find the loops, see how many times each runs, multiply nested loops, and keep the biggest term.',
  ['An algorithm takes 4n³ + 100n steps. Its time complexity is:', ['O(n³)', 'O(n)', 'O(4n³)', 'O(100n)'], 'Keep the biggest term and drop its constant.'],
  [['Time complexity', 'How the number of steps grows with the size of the input.'], ['Big-O notation', 'A way of writing complexity that keeps only the fastest-growing term.'], ['Worst case', 'The input that makes an algorithm take longest.']],
  [
    { q: 'Find the time complexity of: FOR i ← 1 TO n: FOR j ← 1 TO n: Total ← Total + A[i, j] (inner and outer loops), followed by FOR k ← 1 TO n: OUTPUT B[k].', steps: ['The nested loops run n × n = n² times.', 'The last loop runs n times: n² + n steps in all.', '**O(n²)**: the n term is dropped.'] },
    { q: 'An O(n²) sort takes 2 s for 1000 items. Estimate its time for 3000 items. How long would an O(n) algorithm that also takes 2 s for 1000 items take?', steps: ['Three times as many items: the O(n²) time grows 3² = 9 times, to about 18 s.', 'The O(n) time grows 3 times, to about 6 s.', '**About 18 s, against about 6 s.**'] },
    { q: 'Compare log₂ n, n log₂ n, n² and 2ⁿ for n = 1000.', steps: ['log₂ 1000 ≈ 10 and n log₂ n ≈ 10 000.', 'n² = 1 000 000.', '**2¹⁰⁰⁰ is about 10³⁰¹**: an exponential algorithm is useless at this size.'] },
  ]),

  // ---------- 15. Paradigms and translators ----------
  L('acs-prog-1', 'acs-l6-paradigms', '15.1', 'Programming paradigms and levels of language', 17, ['Programming'], [
    'A **paradigm** is a style of programming. In **procedural** (imperative) programming the program is a sequence of statements, grouped into procedures and functions, that change the values of variables: C, Pascal and BASIC, and Python written this way. In **object-oriented** programming, **classes** and **objects** combine data with the methods that act on it: Java, C++, C# and Python.',
    '**Declarative** languages state what result is wanted, not how to get it. **SQL** describes the records wanted from a database; **logic** languages such as **Prolog** hold **facts** and **rules** and answer **queries** by searching them. In **functional** programming (Haskell, and parts of Python and JavaScript) programs are built from functions that return values without changing variables.',
    '**Low-level** languages are machine code (binary, run directly by the processor) and assembly language (mnemonics, translated one for one). They are tied to one processor family, but are compact and fast and give direct control of the hardware.',
    '**High-level** languages read more like English and mathematics, run on many machines once translated, and one statement becomes many machine instructions; programs are quicker to write, read and maintain. The choice of language depends on the task, the libraries available, the team’s skills and the speed needed.',
  ], 'acs-paradigms', 'Procedural says how, step by step; declarative says what.',
  ['A language with facts, rules and queries, such as Prolog, is:', ['declarative (logic)', 'procedural', 'low-level', 'assembly'], 'It searches its rules for answers.'],
  [['Paradigm', 'A style of programming, such as procedural or object-oriented.'], ['Declarative language', 'A language that states the result wanted, not the steps.'], ['High-level language', 'A portable language close to human language, translated before it runs.']],
  [
    { q: 'Prolog facts: parent(ngwa, bih). parent(bih, akwi). Rule: grandparent(X, Z) :- parent(X, Y), parent(Y, Z). What does ?- grandparent(ngwa, Who). return?', steps: ['Prolog looks for Y with parent(ngwa, Y): Y = bih.', 'Then for Z with parent(bih, Z): Z = akwi.', '**Who = akwi.**'] },
    { q: 'Table Student(Name, Form, Mark). Write SQL for the names of Lower Sixth students with at least 15, best first.', steps: ['SELECT Name FROM Student', 'WHERE Form = \'Lower Sixth\' AND Mark >= 15', '**ORDER BY Mark DESC;** The query says what is wanted; the database decides how.'] },
    { q: 'Suggest a paradigm or language for: (i) a driver for a new printer, (ii) a report from the school’s records, (iii) a game with many kinds of character.', steps: ['(i) Low-level work: C or assembly, for direct control of the hardware.', '(ii) SQL, declarative, to query the database.', '**(iii) Object-oriented**: each kind of character becomes a class.'] },
  ]),

  L('acs-prog-2', 'acs-l6-paradigms', '15.2', 'Translators, the stages of compilation, linkers and loaders', 18, ['Programming'], [
    'An **assembler** translates assembly language. A **compiler** translates a whole high-level program into object code before it runs: it reports all the errors together, the result runs fast, and users do not need the source code. An **interpreter** translates and runs one statement at a time: it stops at the first error, which helps while testing, but runs more slowly and is needed every time the program runs.',
    'The **stages of compilation**: **lexical analysis** removes spaces and comments, splits the source into **tokens** (keywords, identifiers, operators, constants) and builds the **symbol table** of identifiers; **syntax analysis** checks the tokens against the grammar of the language, builds a parse tree and reports syntax errors, and semantic checks such as types are made with the symbol table; **code generation** produces object code; **optimisation** makes it faster or smaller, for example by removing instructions that do nothing.',
    'A **linker** joins the object code with library routines and other compiled modules into one executable file. A **loader** copies the program into memory, adjusting addresses for where it is placed, and starts it. **Static** libraries are copied into the program; **dynamic** libraries (DLLs) are shared and joined at run time.',
    'Some languages compile to **bytecode**, an intermediate code run by a **virtual machine**: Java on the Java Virtual Machine, and Python, which turns source into bytecode before interpreting it. The same bytecode runs on any machine with the virtual machine.',
  ], 'acs-compiler-stages', 'Lexical analysis: tokens and the symbol table. Syntax analysis: grammar. Then code generation and optimisation.',
  ['A missing closing bracket is found during:', ['syntax analysis', 'lexical analysis', 'code generation', 'loading'], 'The tokens break the grammar.'],
  [['Token', 'One meaningful unit of source code, such as a keyword or an identifier.'], ['Symbol table', 'The compiler’s table of identifiers and their types.'], ['Linker', 'A program that joins object code and libraries into one executable.']],
  [
    { q: 'List the tokens in total = total + mark * 2, and the entries in the symbol table.', steps: ['total (identifier), = (operator), total, + (operator), mark (identifier), * (operator), 2 (constant).', 'That is 7 tokens.', '**The symbol table holds total and mark.**'] },
    { q: 'At which stage is each error found? (i) the character @ in a variable name; (ii) IF with no THEN; (iii) adding text to a number.', steps: ['(i) Lexical analysis: @ cannot begin a valid token.', '(ii) Syntax analysis: the statement breaks the grammar.', '**(iii) Semantic checking with the symbol table, during syntax analysis: the types do not match.**'] },
    { q: 'A company sells an accounting program. Should it give customers compiled code or the source and an interpreter?', steps: ['Compiled code runs faster and needs no interpreter on each customer’s machine.', 'Customers do not see the source, so the company’s work stays protected.', '**Compiled code**; the developers still use an interpreter or debugger while writing it.'] },
  ]),

  // ---------- 16. Classes and objects ----------
  L('acs-oop-1', 'acs-l6-oop', '16.1', 'Classes, objects, attributes, methods and constructors', 18, ['Object-oriented programming'], [
    'A **class** is a template that defines **attributes** (the data) and **methods** (the procedures and functions) of a kind of object. An **object** is one **instance** of a class, with its own values of the attributes. Creating an object is **instantiation**, and it runs the class’s **constructor**, which sets the starting values.',
    'In Python:\nclass Student:\n    def __init__(self, name, form):\n        self.name = name\n        self.form = form\n        self.marks = []\n    def add_mark(self, mark):\n        self.marks.append(mark)\n    def average(self):\n        return sum(self.marks) / len(self.marks)\n__init__ is the constructor and self is the object the method is working on.',
    'Objects are created and used with dot notation: s = Student("Ngwa", "Lower Sixth"), then s.add_mark(14) and s.average(). Each object keeps its own name, form and marks.',
    'In C++ the same class is written class Student { private: string name; public: Student(string n) { name = n; } … }; and an object is made with Student s("Ngwa");.',
  ], 'acs-class', 'A class is the plan; objects are the things built from it.',
  ['In s = Student("Ama", "Lower Sixth"), s is:', ['an object, an instance of Student', 'a class', 'a method', 'a constructor'], 'Student is the class.'],
  [['Class', 'A template defining the attributes and methods of a kind of object.'], ['Object', 'One instance of a class, with its own attribute values.'], ['Constructor', 'The method that sets up a new object when it is created.']],
  [
    { q: 'After a = Student("Ama", "L6"), b = Student("Bih", "L6"), a.add_mark(12), a.add_mark(16), b.add_mark(10), what are a.average() and b.average()?', steps: ['a has the marks [12, 16]; b has [10].', 'a.average() = 28 ÷ 2 = 14.', '**14 and 10**: each object has its own list.'] },
    { q: 'Write a Python class BankAccount with a balance in FCFA, a deposit method and a withdraw method that refuses to overdraw.', steps: ['class BankAccount:\n    def __init__(self, owner):\n        self.owner = owner\n        self.balance = 0', '    def deposit(self, amount):\n        self.balance = self.balance + amount', '    def withdraw(self, amount):\n        if amount > self.balance:\n            return False\n        self.balance = self.balance - amount\n        return True\n**withdraw returns False and leaves the balance alone when there is not enough money.**'] },
  ]),

  L('acs-oop-2', 'acs-l6-oop', '16.2', 'Encapsulation, getters and setters, and polymorphism', 18, ['Object-oriented programming'], [
    '**Encapsulation** keeps an object’s data private and lets other code reach it only through the object’s methods. The data cannot then be put into an impossible state, and the inside of the class can change without breaking the code that uses it.',
    'In C++ and Java the keywords **private** and **public** set this. In Python a name starting with two underscores, such as self.__balance, is hidden from outside code, and one underscore is a polite warning. A **getter** returns a value (get_balance) and a **setter** changes it after checking it (set_mark refuses a mark outside 0 to 20).',
    '**Polymorphism** means "many forms": objects of different classes answer the same method call each in their own way. Circles and rectangles both have area(), each with its own formula, so a loop can ask every shape in a list for its area without knowing its class.',
    'C++ and Java also allow **overloading**: several methods with one name but different parameters, chosen when the program is compiled. Python does not overload by type; default parameter values do the same job.',
  ], 'acs-polymorphism', 'Private data, public methods: that is encapsulation.',
  ['A setter method should:', ['check a new value before storing it', 'print the value', 'delete the object', 'make the attribute public'], 'That keeps the object valid.'],
  [['Encapsulation', 'Hiding an object’s data so that it is reached only through its methods.'], ['Getter and setter', 'Methods that read and that check-and-change an attribute.'], ['Polymorphism', 'Different classes answering the same method call in their own way.']],
  [
    { q: 'Write a setter for a private mark attribute that only accepts marks from 0 to 20.', steps: ['def set_mark(self, mark):', '    if 0 <= mark <= 20:\n        self.__mark = mark\n        return True', '    return False\n**A mark of 25 is refused and the old mark stays.**'] },
    { q: 'Circle(2) and Rectangle(3, 4) are in a list shapes, each with an area() method. What does for s in shapes: print(round(s.area(), 2)) print?', steps: ['Circle.area() returns π × 2² = 12.566…, printed as 12.57.', 'Rectangle.area() returns 3 × 4 = 12.', '**12.57, then 12**: the same call, a different method for each class.'] },
  ]),

  // ---------- 17. Inheritance ----------
  L('acs-oop-3', 'acs-l6-inheritance', '17.1', 'Inheritance, overriding, UML class diagrams and scope', 18, ['Object-oriented programming'], [
    '**Inheritance** lets a **subclass** (derived class) take on the attributes and methods of its **superclass** (base class) and add or change some. It shows an "is a" link: a Teacher is a Person. Python writes class Teacher(Person): and C++ class Teacher : public Person.',
    'The subclass constructor calls the superclass constructor, in Python with super().__init__(name), and then sets its own attributes. **Overriding** is a subclass defining a method with the same name as an inherited one, which replaces it for objects of the subclass; the new method can still call the old one with super().',
    'A **UML class diagram** draws each class as a box in three parts: name, attributes and methods. **−** marks private, **+** public and **#** protected (visible to subclasses). Inheritance is a line with a hollow triangle pointing to the superclass.',
    '**Scope**: a **local** variable exists only inside the subroutine that declares it; a **global** variable can be used anywhere. Local variables and parameters keep subroutines independent, easy to test and reuse; globals can be changed from anywhere, which causes errors that are hard to trace. In Python a function must say global x before it can assign to a global x.',
  ], 'acs-inheritance', 'In a UML class diagram the hollow triangle always points at the superclass.',
  ['In class Teacher(Person):, which class is the superclass?', ['Person', 'Teacher', 'both', 'neither'], 'Teacher inherits from Person.'],
  [['Inheritance', 'A subclass taking on the attributes and methods of its superclass.'], ['Overriding', 'A subclass redefining a method it inherited.'], ['Scope', 'The part of a program in which a variable can be used.']],
  [
    { q: 'Person has describe() returning "I am " + name. Teacher(Person) adds subject and overrides describe() to return super().describe() + ", I teach " + subject. What does Teacher("Mr Fon", "Physics").describe() return?', steps: ['Teacher’s own describe() runs, because it overrides Person’s.', 'super().describe() gives "I am Mr Fon".', '**"I am Mr Fon, I teach Physics".**'] },
    { q: 'What does this print? x = 5; def f(): x = 10; print(x). Then f() and print(x).', steps: ['Inside f, x = 10 makes a new local x.', 'f() prints 10; the global x is untouched.', '**10, then 5.**'] },
    { q: 'Draw, in words, the UML class box for Student with private name and mark and public getMark().', steps: ['Top part: Student.', 'Middle: − name: String, − mark: Integer.', '**Bottom: + getMark(): Integer.**'] },
  ]),

  // ---------- 18. Life cycles ----------
  L('acs-se-1', 'acs-l6-sdlc', '18.1', 'Software development life cycles and models', 18, ['Software engineering'], [
    'The **software development life cycle** runs from a **feasibility study** (is the project technically, economically, legally and operationally possible, and in time?) through **analysis** of the requirements, **design**, **implementation** (coding), **testing**, **installation** and **evaluation**, to **maintenance**.',
    'In the **waterfall** model each stage is finished and signed off before the next begins. It gives clear documents and milestones and suits projects with fixed, well-understood requirements, but a change found late is expensive, and the users see the product only at the end.',
    '**Iterative** models build the system in repeated cycles; the **spiral** model adds a risk analysis to every cycle, for large, risky projects. **Agile** methods such as Scrum deliver working software in short **sprints**, usually of one to four weeks, with the users’ feedback after each, so changing requirements are welcome. **Rapid application development** (RAD) builds **prototypes** quickly with the users and refines them.',
    '**Maintenance** is **corrective** (fixing faults), **adaptive** (changing the system for a new law, operating system or payment method) or **perfective** (making it faster or adding features users ask for).',
  ], 'acs-models', 'Fixed requirements: waterfall. Changing requirements: agile. Users must see screens early: prototyping.',
  ['Updating a payroll program after the tax rate changes in a new finance law is:', ['adaptive maintenance', 'corrective maintenance', 'perfective maintenance', 'feasibility'], 'The system adapts to a new environment.'],
  [['Feasibility study', 'A study of whether a project is possible and worth doing.'], ['Sprint', 'A short, fixed period of agile development that ends with working software.'], ['Prototype', 'A quick early version used to try out ideas with users.']],
  [
    { q: 'Suggest a model for: (i) control software for a hospital radiotherapy machine, (ii) a new mobile app for a start-up unsure of its market, (iii) a fees system where the bursar wants to see screens early.', steps: ['(i) Waterfall, with full documentation and testing at each stage, because safety comes first.', '(ii) Agile, since the requirements will change as users react.', '**(iii) Prototyping (RAD)**, so the bursar can try the screens and ask for changes.'] },
    { q: 'Classify: (a) fixing a crash when reports print; (b) adding mobile money payments; (c) making the search faster.', steps: ['(a) Corrective: a fault is fixed.', '(b) Adaptive: a new payment method in the environment.', '**(c) Perfective: an improvement.**'] },
    { q: 'Give four things a feasibility study for a school fees system should look at.', steps: ['Technical: are there computers, a network and skilled staff?', 'Economic: do the savings justify the cost? Legal: does it meet Law No. 2024/017 on personal data?', '**Operational: will the staff use it? Schedule: can it be ready for the start of the year?**'] },
  ]),

  // ---------- 19. Analysis tools ----------
  L('acs-se-2', 'acs-l6-analysis', '19.1', 'Context diagrams and data flow diagrams', 18, ['Software engineering'], [
    'A **data flow diagram** (DFD) shows how data moves through a system. The **context diagram**, also called the level 0 DFD, shows the whole system as a single process, with the **external entities** around it and the data flowing between them. A **level 1** DFD opens that process into its main processes.',
    'The symbols: an **external entity** (a rectangle) is a person or system outside the system; a **process** (a numbered rounded box with a verb phrase, such as 2 Issue book) changes data; a **data store** (an open-ended box, D1 Loans) holds data; a **data flow** is a labelled arrow.',
    'The rules: every flow is labelled; data cannot pass directly between two entities, between two stores, or between an entity and a store: a process must come between; every process has at least one input and one output; and the flows in and out of the context diagram must all appear on the level 1 diagram (the levels **balance**).',
    'For a school library, the entities are Student and Librarian; level 1 processes could be 1 Register borrower, 2 Issue book and 3 Return book, with the stores D1 Borrowers, D2 Books and D3 Loans.',
  ], 'acs-dfd', 'Between any entity and any store there must be a process.',
  ['In a DFD, data may flow directly from:', ['an external entity to a process', 'an external entity to a data store', 'one data store to another', 'one external entity to another'], 'A process must handle the data.'],
  [['Context diagram', 'A DFD showing the whole system as one process with its external entities.'], ['External entity', 'A person or system outside the system that sends or receives data.'], ['Data store', 'A place where data is held, such as a file or a table.']],
  [
    { q: 'Describe the context diagram of a school fees system paid by mobile money.', steps: ['One process in the middle: Fees system.', 'Parent → payment details; Fees system → Parent: receipt. Mobile money operator → payment confirmation.', '**Fees system → Bursar: daily payments report.**'] },
    { q: 'A student’s DFD shows an arrow from Parent straight to D1 Fees. What is wrong and how is it fixed?', steps: ['Data cannot go from an entity to a store directly.', 'Something must check the payment and write it.', '**Add a process, 1 Record payment: Parent → 1 Record payment → D1 Fees.**'] },
  ]),

  L('acs-se-3', 'acs-l6-analysis', '19.2', 'UML use-case diagrams', 17, ['Software engineering'], [
    'A **use-case diagram** shows what a system does for the people and systems that use it. **Actors** (stick figures) are users or other systems outside; **use cases** (ovals, named with a verb phrase, such as Borrow book) are the things the system does; a rectangle marks the **system boundary**; lines join actors to the use cases they take part in.',
    '**«include»**: a use case that always uses another, such as Borrow book «include» Check membership. The dashed arrow goes from the base use case to the included one.',
    '**«extend»**: optional behaviour added only in some conditions, such as Pay fine extending Return book when the book is late. The dashed arrow goes from the extending use case to the base one. Actors can also be generalised: Student and Teacher are both kinds of Borrower.',
    'Each use case can be written up as a **use-case description**: its actors, the precondition, the main steps, the alternative steps and the result. These descriptions become the test cases later.',
  ], 'acs-use-case', 'Include: always happens. Extend: only sometimes.',
  ['Pay fine, which happens only when a book is returned late, is linked to Return book by:', ['«extend»', '«include»', 'inheritance', 'a data flow'], 'It is optional.'],
  [['Actor', 'A user or outside system that takes part in a use case.'], ['Use case', 'Something the system does for an actor, drawn as an oval.'], ['System boundary', 'The rectangle that separates the system from its actors.']],
  [
    { q: 'Draw, in words, a use-case diagram for paying school fees by mobile money.', steps: ['Actors: Parent, Bursar, and the Mobile money operator as an outside system.', 'Use cases inside the boundary: Pay fees, which «include» Verify student number; View balance; Produce report.', '**Print receipt «extend» Pay fees, for parents who want a paper copy.**'] },
    { q: 'Write a use-case description for Borrow book.', steps: ['Actors: Student, Librarian. Precondition: the student is registered.', 'Main steps: scan card, check membership («include»), scan book, record the loan, show the return date.', '**Alternative: the student has three books out, so the loan is refused. Result: the loan is stored.**'] },
  ]),

  // ---------- 20. The project ----------
  L('acs-se-4', 'acs-l6-project', '20.1', 'Choosing the project: the problem, the user and the specification', 18, ['Project'], [
    'The A Level coursework project, begun at the end of Lower Sixth and finished in Upper Sixth, is a real program for a real user. Choose a problem you can investigate: a school, a clinic, a shop or a group near you that keeps records on paper or struggles with a spreadsheet. Check the GCE Board’s current regulations for how the project is presented and marked.',
    '**Fact-finding**: **interview** the user (detailed answers, follow-up questions), give **questionnaires** to many users (quick to analyse, but answers are short), **observe** the work as it is done now, and study the **documents** in use: receipts, registers, forms.',
    '**Functional requirements** say what the system must do ("record a fee payment and print a receipt"); **non-functional requirements** say how well (it must find any student in under 2 seconds, keep data private, run on the school’s computers). Each requirement leads to a **measurable success criterion** that can be tested at the end.',
    'The **specification** pulls this together: the problem and the users, the scope (what is in and what is out), the requirements, the success criteria, the hardware and software, and a timeline. Keep a **project log** of each meeting and decision from the start.',
  ], 'acs-project', 'Write every success criterion so that a test can prove it was met.',
  ['"The system must print a receipt for every payment" is:', ['a functional requirement', 'a non-functional requirement', 'a success criterion only', 'out of scope'], 'It says what the system must do.'],
  [['Functional requirement', 'A statement of what the system must do.'], ['Non-functional requirement', 'A statement of how well the system must work, such as speed or security.'], ['Success criterion', 'A measurable test of whether a requirement has been met.']],
  [
    { q: 'A pharmacy in Buea writes its stock in an exercise book. Give two functional and two non-functional requirements for a new system.', steps: ['Functional: record each sale and reduce the stock; list drugs below their reorder level.', 'Non-functional: find any drug in under 2 seconds; only the pharmacist may change prices.', '**Each becomes a success criterion to test, for example "a search of 500 drugs takes less than 2 seconds".**'] },
    { q: 'Which fact-finding method suits each case? (i) the opinion of all 40 teachers; (ii) how the bursar handles a payment now; (iii) the details the receipts must show.', steps: ['(i) A questionnaire: quick to give to many people.', '(ii) Observation, or an interview with the bursar.', '**(iii) Document study**: look at the present receipts.'] },
  ]),

  // ---------- 21. Examination practice ----------
  L('acs-l6-paper1', 'acs-l6-papers', '21.1', 'Paper 1 drills: numbers, masks, the processor and logic', 20, ['Examination practice'], [
    'GCE A Level Computer Science is 0795 (0595 is the Ordinary Level paper and 0796 is A Level ICT). In the 2026 session, **Paper 1**, multiple choice, lasted **1½ hours** and **Paper 2**, problem solving, **2½ hours**, both on Tuesday 9 June; the **practical** was on Friday 15 May.',
    'Paper 1 rewards quick, sure working. For two’s complement, write the place values with −128 at the top. For subnet questions, write the byte of the mask that splits in binary and find the block size. For the processor, know which register feeds which bus and the order of the fetch steps.',
    '**Logic expressions**: AND is 1 only if both inputs are 1; OR is 1 if either is; NOT inverts; XOR is 1 if the inputs differ. **De Morgan’s laws**: NOT (A AND B) = NOT A OR NOT B, and NOT (A OR B) = NOT A AND NOT B. Substitute values carefully, working from the innermost brackets.',
    'Read every option before choosing: wrong options are usually the results of common mistakes, such as forgetting to add 1 when negating, or counting the network address as a host.',
  ], 'acs-gce', 'In Paper 1, work each answer out on rough paper before you look at the options.',
  ['With A = 1, B = 0 and C = 1, (A OR B) AND NOT C is:', ['0', '1', 'undefined', 'it depends on the order'], 'A OR B = 1, NOT C = 0, and 1 AND 0 = 0.'],
  [['De Morgan’s laws', 'NOT (A AND B) = NOT A OR NOT B; NOT (A OR B) = NOT A AND NOT B.'], ['XOR', 'Exclusive OR: 1 when the two inputs differ.'], ['Block size', 'The number of addresses in each subnet: 256 minus the splitting byte of the mask.']],
  [
    { q: 'Simplify NOT (NOT A AND B) and check it with A = 0, B = 1.', steps: ['By De Morgan: NOT (NOT A) OR NOT B = A OR NOT B.', 'With A = 0, B = 1: NOT A AND B = 1, so the original is 0; A OR NOT B = 0 OR 0 = 0.', '**A OR NOT B**, and both sides give 0.'] },
    { q: 'How many usable hosts are there in a /28 subnet?', steps: ['/28 leaves 32 − 28 = 4 host bits.', '2⁴ = 16 addresses, less the network and broadcast addresses.', '**14 hosts.**'] },
    { q: 'Which register receives the instruction from the MDR during the fetch?', steps: ['The MDR holds what was read from memory.', 'The instruction is copied to the register the control unit decodes from.', '**The current instruction register (CIR).**'] },
  ]),

  L('acs-l6-paper2', 'acs-l6-papers', '21.2', 'Paper 2 drills: pseudocode, trace tables, stacks and Big-O', 20, ['Examination practice'], [
    'Paper 2 asks you to write and follow algorithms. Use clear **pseudocode**: meaningful names, one statement a line, indentation inside loops and selections, and the closing words ENDIF, ENDWHILE and NEXT. Examiners mark the logic, not the syntax of any one language.',
    'A **dry run** follows an algorithm by hand, recording the value of every variable after each step in a **trace table**, with a column for each variable and for the output. It finds logic errors and shows what an unfamiliar algorithm does.',
    'For **array** questions, check the first and last positions: most errors are loops that run one step too far or stop one too soon. For **stack** and **queue** questions, write the pointer values after each operation and test for overflow and underflow.',
    'For **Big-O**, count how many times the innermost statement runs as a function of n, then keep the largest term. When the inner loop depends on the outer one, add up the counts.',
  ], 'trace-table', 'Draw the trace table before you start: one column per variable, one row per change.',
  ['A loop FOR i ← 1 TO n, with an inner loop FOR j ← i TO n, runs its inner statement about:', ['n²/2 times, so O(n²)', 'n times, so O(n)', 'log n times', 'n³ times'], 'n + (n − 1) + … + 1 = n(n + 1)/2.'],
  [['Pseudocode', 'A structured, language-independent way of writing an algorithm.'], ['Dry run', 'Working through an algorithm by hand.'], ['Trace table', 'A table recording the values of variables at each step of a dry run.']],
  [
    { q: 'Write pseudocode to reverse an array A[1..n] in place, and trace it for A = [4, 7, 1, 9].', steps: ['FOR i ← 1 TO n DIV 2: Temp ← A[i]; A[i] ← A[n − i + 1]; A[n − i + 1] ← Temp; NEXT i', 'n = 4, so i runs 1 to 2: i = 1 swaps A[1] and A[4]: [9, 7, 1, 4]; i = 2 swaps A[2] and A[3]: [9, 1, 7, 4].', '**[9, 1, 7, 4]**, with only n/2 swaps.'] },
    { q: 'Find the complexity of FOR i ← 1 TO n: FOR j ← i TO n: Count ← Count + 1.', steps: ['For i = 1 the inner loop runs n times, for i = 2 n − 1 times, … for i = n once.', 'Total: n(n + 1)/2 = n²/2 + n/2.', '**O(n²).**'] },
    { q: 'Trace: Total ← 0; FOR k ← 1 TO 4: IF k MOD 2 = 0 THEN Total ← Total + k ELSE Total ← Total − 1; NEXT k; OUTPUT Total.', steps: ['k = 1: odd, Total −1. k = 2: even, Total 1.', 'k = 3: odd, Total 0. k = 4: even, Total 4.', '**Output 4.**'] },
  ]),
];
