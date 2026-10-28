// Extra questions for the Upper Sixth A Level Computer Science lessons (0795).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const QUESTIONS_U6 = {
  // ---------- Term 1 ----------
  'acs-db-1': [
    Q('Referential integrity stops:', ['a foreign key value that matches no primary key', 'two tables being joined', 'a table having a key', 'sorting'], 'No payment for a student who does not exist.'),
    Q('Any attribute that could serve as the primary key is a:', ['candidate key', 'foreign key', 'secondary index', 'record'], 'One candidate is chosen as the primary key.'),
    Q('In a relational table, a row is also called a:', ['tuple (record)', 'attribute', 'domain', 'key'], 'Columns are attributes.'),
    Q('StudentID → Name means:', ['each StudentID fixes exactly one Name', 'each Name fixes one StudentID', 'they are equal', 'Name is the key'], 'A functional dependency.'),
  ],
  'acs-db-2': [
    Q('A table with a repeating group is in:', ['unnormalised form (not 1NF)', '2NF', '3NF', 'every normal form'], 'Values must be single.'),
    Q('Which tables need checking for partial dependencies?', ['those with a composite key', 'those with no key', 'every table with one-field keys', 'none'], 'Part of a key needs at least two fields.'),
    Q('A disadvantage of normalising to 3NF is that:', ['queries need more joins', 'data is repeated more', 'anomalies increase', 'keys disappear'], 'The tables must be joined again.'),
    Q('In LOAN(LoanID, StudentID, StudentName), StudentName depends on StudentID. To reach 3NF:', ['move StudentName into a STUDENT table', 'add StudentName to the key', 'delete StudentID', 'do nothing'], 'Remove the transitive dependency.'),
  ],
  'acs-sql-1': [
    Q('DELETE FROM Fees; with no WHERE:', ['deletes every row of Fees', 'deletes nothing', 'deletes the table structure', 'is a syntax error'], 'Always write WHERE.'),
    Q('LIKE \'N%\' matches names that:', ['start with N', 'end with N', 'contain only N', 'have 1 letter'], '% stands for any characters.'),
    Q('Which keyword sorts from highest to lowest?', ['DESC', 'ASC', 'GROUP', 'HAVING'], 'ORDER BY Mark DESC.'),
    Q('NOT NULL in CREATE TABLE means:', ['the field must have a value', 'the field must be empty', 'the field is a key', 'the field is a number'], 'A presence check in the database.'),
  ],
  'acs-sql-2': [
    Q('A RIGHT JOIN keeps every row of:', ['the right table', 'the left table', 'neither', 'both, always'], 'With NULLs for the left columns.'),
    Q('In ON Student.ClassID = Class.ClassID, the fields matched are usually:', ['a foreign key and the primary key it refers to', 'two names', 'two marks', 'two random fields'], 'The link between the tables.'),
    Q('WHERE StudentID NOT IN (SELECT StudentID FROM Fees) finds students who:', ['have no fee payment', 'have paid most', 'have paid exactly once', 'are not in the Student table'], 'The subquery lists payers.'),
    Q('A subquery compared with > must return:', ['a single value', 'a whole table', 'two columns', 'no rows'], 'Such as an average.'),
  ],
  'acs-sql-3': [
    Q('Durability means that a committed transaction:', ['survives a crash', 'can be undone at any time', 'runs faster', 'is hidden from users'], 'Kept by the log.'),
    Q('Isolation means that:', ['transactions running together do not see each other’s unfinished changes', 'each user has a computer', 'data is encrypted', 'tables are separate'], 'Often done with locks.'),
    Q('Record locking prevents:', ['lost updates when two users change one record', 'all access to the database', 'normalisation', 'backups'], 'The second user waits.'),
    Q('In relational algebra, the difference A − B gives:', ['rows in A but not in B', 'rows in both', 'all rows', 'rows in B only'], 'Like EXCEPT.'),
  ],
  'acs-qa-1': [
    Q('Availability is measured as:', ['the percentage of time the system is working', 'the number of users', 'the program’s length', 'the screen size'], 'For example 98.6 %.'),
    Q('Portability means software:', ['can run on other devices or operating systems', 'is small', 'is free', 'is fast'], 'Moving between platforms.'),
    Q('Defensive programming means:', ['writing code that expects and handles things going wrong', 'refusing all input', 'hiding the code', 'writing no comments'], 'Validate and catch errors.'),
    Q('A system that ran 3000 hours with 6 failures has an MTBF of:', ['500 hours', '6 hours', '3000 hours', '18 000 hours'], '3000 ÷ 6.'),
  ],
  'acs-qa-2': [
    Q('A driver in bottom-up testing:', ['calls the module being tested and passes it test data', 'replaces a missing lower module', 'is the end user', 'drives a printer'], 'Stubs are used top-down.'),
    Q('Regression testing is done:', ['after changes, to check nothing that worked is now broken', 'before any code exists', 'only by users', 'once only'], 'Rerun old tests.'),
    Q('Black-box tests are designed from:', ['the specification of inputs and outputs', 'the code’s paths', 'the compiler', 'the database keys'], 'The code is not looked at.'),
    Q('For a range of 1 to 100, which values are boundary data?', ['0, 1, 100 and 101', '50 and 51', '−5 and 500', '"one"'], 'The limits and just outside.'),
  ],
  'acs-des-1': [
    Q('In top-down design, refinement stops when:', ['each step is simple enough to code as one module', 'the program is finished', 'there are ten modules', 'testing begins'], 'Then code it.'),
    Q('A disadvantage of top-down design is that:', ['early decisions at the top can be hard to change', 'modules cannot be tested', 'teams cannot share work', 'it needs no planning'], 'The structure is fixed early.'),
    Q('In a structure chart, a curved arrow over a line shows that a module is called:', ['repeatedly', 'once only', 'never', 'by the user'], 'A loop.'),
    Q('In a structure chart, a diamond shows:', ['a choice between modules', 'a loop', 'a data store', 'a parameter'], 'Selection.'),
  ],
  'acs-des-2': [
    Q('Data coupling means modules share:', ['only the parameters they need', 'global variables', 'everything', 'nothing at all'], 'The best kind of coupling.'),
    Q('Global variables shared by many modules cause:', ['tight coupling and hidden side effects', 'high cohesion', 'faster testing', 'no problems'], 'Any module can change them.'),
    Q('Bottom-up design makes good use of:', ['existing tested libraries', 'only new code', 'global variables', 'flowcharts only'], 'Build from parts that work.'),
    Q('A module that only validates dates has:', ['high (functional) cohesion', 'low cohesion', 'high coupling', 'no purpose'], 'One job.'),
  ],
  'acs-aoop-1': [
    Q('A concrete subclass of an abstract class must:', ['override every abstract method', 'have no methods', 'be abstract too', 'call no constructor'], 'Or it is abstract itself.'),
    Q('Dynamic binding is decided:', ['at run time', 'when the source is typed', 'by the user', 'at compile time always'], 'From the object’s actual class.'),
    Q('A class in Java can implement:', ['many interfaces but inherit from only one class', 'only one interface', 'no interfaces', 'many classes'], 'Interfaces add promises, not code.'),
    Q('Square(3).perimeter() with perimeter = 4 × side returns:', ['12', '9', '6', '3'], '4 × 3.'),
  ],
  'acs-aoop-2': [
    Q('In UML, aggregation is drawn with:', ['a hollow diamond at the whole', 'a filled diamond', 'a hollow triangle', 'a dashed line'], 'Parts can exist alone.'),
    Q('The multiplicity 0..* means:', ['zero or more', 'exactly one', 'at least one', 'none'], 'Any number, including none.'),
    Q('Composition is often preferred to inheritance because:', ['it is more flexible and keeps classes less coupled', 'it is shorter to type', 'inheritance is forbidden', 'it needs no classes'], 'Parts can be swapped.'),
    Q('A Department and its Teachers, who remain when it closes, show:', ['aggregation', 'composition', 'inheritance', 'polymorphism'], 'The parts survive.'),
  ],
  'acs-file-1': [
    Q('Mode "r" opens a file:', ['for reading', 'for writing', 'to delete it', 'to append'], 'Read.'),
    Q('line.strip().split(",") on "Ngwa,14\\n" gives:', ['["Ngwa", "14"]', '["Ngwa,14"]', '"Ngwa"', '14'], 'strip removes the newline.'),
    Q('The else block after try … except runs when:', ['no exception happened', 'an exception happened', 'always', 'never'], 'finally runs in both cases.'),
    Q('Opening a file that does not exist for reading raises:', ['FileNotFoundError', 'ValueError', 'ZeroDivisionError', 'nothing'], 'Catch it by name.'),
  ],
  'acs-file-2': [
    Q('Fixed-length records allow:', ['jumping straight to record k', 'only reading from the start', 'any size of record', 'no keys'], 'Position = (k − 1) × size.'),
    Q('Inserting a record into a sequential file usually needs:', ['copying the file with the new record in place', 'one write at the end', 'nothing', 'a hash function'], 'The order must be kept.'),
    Q('With 10 slots and key MOD 10, key 3456 goes to slot:', ['6', '3', '5', '4'], 'The remainder.'),
    Q('An indexed sequential file has:', ['records in key order plus an index', 'records at random', 'no keys', 'only one record'], 'Both batch and direct access.'),
  ],
  'acs-asm-1': [
    Q('STA TOTAL:', ['copies the accumulator into TOTAL', 'loads TOTAL into the accumulator', 'adds TOTAL', 'jumps to TOTAL'], 'Store.'),
    Q('BRA LOOP:', ['always jumps to LOOP', 'jumps if zero', 'jumps if positive', 'stops'], 'Branch always.'),
    Q('In the adding program, the input 0:', ['ends the loop and outputs the total', 'is added and the loop goes on', 'causes an error', 'is ignored'], 'BRZ DONE.'),
    Q('During the execute stage of ADD X, MDR holds:', ['the contents of X', 'the address of X', 'the next instruction', 'the result'], 'Then ACC ← [ACC] + [MDR].'),
  ],
  'acs-asm-2': [
    Q('Shifting 10000001 left one place (logical, 8 bits) gives:', ['00000010', '01000000', '00000011', '10000010'], 'The top 1 is lost.'),
    Q('A rotate left of 10000001 gives:', ['00000011', '00000010', '01000000', '10000000'], 'The top bit wraps to the bottom.'),
    Q('To test whether bit value 8 is set, AND with:', ['00001000', '11110111', '11111111', '00000000'], 'Non-zero means set.'),
    Q('x XOR x is always:', ['0', '1', 'x', 'NOT x'], 'Every bit cancels.'),
  ],
  'acs-logic-1': [
    Q('A·(A + B) simplifies to:', ['A', 'B', 'A·B', 'A + B'], 'Absorption.'),
    Q('(A + B)′ equals:', ['A′·B′', 'A′ + B′', 'A·B', 'A + B'], 'De Morgan.'),
    Q('The Gray code order of a K-map’s columns is:', ['00, 01, 11, 10', '00, 01, 10, 11', '11, 10, 01, 00', '01, 10, 00, 11'], 'One bit changes each step.'),
    Q('A K-map group of 4 cells in a 3-variable map leaves:', ['one variable', 'three variables', 'two variables', 'no variable'], 'Two are removed.'),
  ],
  'acs-logic-2': [
    Q('A half adder’s carry is:', ['A AND B', 'A XOR B', 'A OR B', 'NOT A'], '1 only for 1 + 1.'),
    Q('A full adder can be built from:', ['two half adders and an OR gate', 'one AND gate', 'three NOT gates', 'a flip-flop'], 'The OR joins the carries.'),
    Q('A ripple-carry adder gets slower with more bits because:', ['each carry must pass through every stage', 'it uses more power', 'XOR gates are slow', 'it needs a clock'], 'The carry ripples.'),
    Q('Full adder with A = 1, B = 0, Cin = 1 gives:', ['S = 0, Cout = 1', 'S = 1, Cout = 0', 'S = 1, Cout = 1', 'S = 0, Cout = 0'], '1 + 0 + 1 = 10 in binary.'),
  ],
  'acs-logic-3': [
    Q('A D flip-flop copies D to Q:', ['at the clock edge', 'whenever D changes', 'never', 'only when D = 0'], 'Then holds it.'),
    Q('A register is made of:', ['flip-flops, one per bit', 'adders', 'multiplexers only', 'decoders only'], 'Each stores one bit.'),
    Q('A JK flip-flop with J = K = 1 at the clock edge:', ['toggles', 'resets', 'sets', 'is invalid'], 'Q becomes Q′.'),
    Q('A 2-to-4 decoder has:', ['2 inputs and 4 outputs, one active', '4 inputs and 2 outputs', '2 select lines and 1 output', '4 flip-flops'], 'n to 2ⁿ.'),
  ],
  'acs-proj-1': [
    Q('A drop-down list in a form mainly:', ['stops invalid choices being typed', 'speeds up the processor', 'encrypts data', 'replaces keys'], 'Restricts input.'),
    Q('Indexes are added to fields that are:', ['searched often', 'never used', 'always empty', 'primary keys only'], 'They speed up searches.'),
    Q('Visual verification means:', ['checking the entered data against the source document', 'a range check', 'looking at the screen colour', 'a check digit'], 'By eye.'),
    Q('A check digit catches:', ['typing errors in codes such as ID numbers', 'empty fields', 'dates in the wrong format', 'slow queries'], 'Calculated from the other digits.'),
  ],

  // ---------- Terms 2 and 3 ----------
  'acs-comp-1': [
    Q('A Turing machine’s tape is:', ['unlimited in length', 'exactly 8 cells', 'a hard disk', 'read-only'], 'As long as needed.'),
    Q('A Turing machine stops when it reaches:', ['a halting state', 'the end of the tape', 'a blank always', 'the start state'], 'Or it may run for ever.'),
    Q('The binary increment machine on 0111 gives:', ['1000', '0110', '1111', '0000'], '7 + 1 = 8.'),
    Q('The stored-program computer reflects the idea of the:', ['universal Turing machine', 'half adder', 'hash table', 'firewall'], 'A program read as data.'),
  ],
  'acs-comp-2': [
    Q('Turing proved the halting problem undecidable by:', ['contradiction', 'testing many programs', 'a truth table', 'measuring time'], 'Assuming a solver exists.'),
    Q('O(n³) is:', ['polynomial, so tractable', 'exponential', 'undecidable', 'factorial'], 'A power of n.'),
    Q('The nearest-neighbour method for the travelling salesman is a:', ['heuristic', 'proof', 'Turing machine', 'normal form'], 'Good, not guaranteed best.'),
    Q('For 6 towns, the number of distinct round trips is:', ['60', '720', '120', '30'], '5!/2.'),
  ],
  'acs-rec-1': [
    Q('Each recursive call must move:', ['towards the base case', 'away from the base case', 'to a global variable', 'to a file'], 'Or it never ends.'),
    Q('When a call returns, its stack frame is:', ['popped', 'pushed', 'saved to disk', 'copied'], 'The stack unwinds.'),
    Q('digit_sum(905) is:', ['14', '9', '95', '45'], '9 + 0 + 5.'),
    Q('Python stops very deep recursion with:', ['RecursionError', 'ValueError', 'SyntaxError', 'nothing'], 'About 1000 calls.'),
  ],
  'acs-rec-2': [
    Q('The recursive Hanoi solution moves the largest disc:', ['once', 'twice', 'n times', 'never'], 'In the middle step.'),
    Q('Recursive fib(n) is slow because it is about:', ['O(2ⁿ)', 'O(n)', 'O(1)', 'O(log n)'], 'Repeated work.'),
    Q('Memoisation:', ['stores answers already calculated', 'removes the base case', 'uses more recursion', 'sorts the input'], 'So they are not recalculated.'),
    Q('Recursive binary search stops with "not found" when:', ['Low > High', 'Low = High', 'Mid = 0', 'the list is sorted'], 'Nothing left to search.'),
  ],
  'acs-route-1': [
    Q('Without VLSM, every subnet of a network has:', ['the same size', 'a different size', 'no mask', 'no gateway'], 'Wasting addresses.'),
    Q('A /30 subnet has how many usable addresses?', ['2', '4', '6', '0'], '2² − 2.'),
    Q('A /26 block must start at a multiple of:', ['64', '26', '32', '128'], 'Its own size.'),
    Q('Summarisation makes routing tables:', ['smaller', 'larger', 'slower', 'insecure'], 'One route for many.'),
  ],
  'acs-route-2': [
    Q('In RIP, 16 hops means:', ['unreachable', 'the best route', 'a default route', 'a loop is fine'], 'The limit is 15.'),
    Q('Static routes:', ['are typed in by an administrator and do not adapt', 'change automatically', 'use Dijkstra', 'are always faster'], 'Simple but fixed.'),
    Q('The protocol that links organisations across the Internet is:', ['BGP', 'RIP', 'DHCP', 'FTP'], 'Border Gateway Protocol.'),
    Q('In Dijkstra’s algorithm, the next vertex visited is:', ['the unvisited one with the smallest distance', 'the one with the largest distance', 'any neighbour', 'the last one added'], 'Its distance is then final.'),
  ],
  'acs-hw-1': [
    Q('A MAC address has:', ['48 bits', '32 bits', '128 bits', '8 bits'], 'Six bytes in hexadecimal.'),
    Q('A switch sends a frame for an unknown MAC address:', ['to all other ports (flooding)', 'nowhere', 'back to the sender', 'to the router only'], 'Until it learns where it is.'),
    Q('A modem:', ['converts digital data to signals for a line and back', 'routes packets by IP', 'stores MAC addresses', 'encrypts traffic'], 'Modulator-demodulator.'),
    Q('A bridge filters frames using:', ['MAC addresses', 'IP addresses', 'port numbers', 'domain names'], 'Layer 2.'),
  ],
  'acs-hw-2': [
    Q('In a bus topology, a break in the backbone:', ['stops the whole network', 'affects one device only', 'has no effect', 'speeds it up'], 'All share the cable.'),
    Q('The central switch of a star topology is:', ['a single point of failure', 'not needed', 'always wireless', 'a terminator'], 'If it fails, all stop.'),
    Q('Traffic between two VLANs must pass through:', ['a router', 'a hub', 'a terminator', 'nothing'], 'Where rules apply.'),
    Q('A weak Wi-Fi protection on its own is:', ['hiding the network name', 'WPA3 with a long passphrase', 'a guest network', 'turning off WPS'], 'Names are easily found.'),
  ],
  'acs-pki-1': [
    Q('A certificate includes the owner’s:', ['public key', 'private key', 'password', 'bank PIN'], 'The private key never leaves the owner.'),
    Q('Intermediate CA certificates are signed by:', ['a root CA', 'the website', 'the browser', 'nobody'], 'The chain of trust.'),
    Q('OCSP is used to:', ['check online whether a certificate has been revoked', 'issue IP addresses', 'route packets', 'compress files'], 'Online Certificate Status Protocol.'),
    Q('A browser shows a warning when the certificate’s name:', ['does not match the site’s address', 'is long', 'is in capitals', 'contains .cm'], 'It may be the wrong server.'),
  ],
  'acs-pki-2': [
    Q('In Diffie–Hellman, the values sent openly are:', ['p, g, A and B', 'a and b', 'the shared secret', 'nothing'], 'The secrets a and b are kept.'),
    Q('With p = 23 and g = 5, a secret a = 2 gives A =', ['2', '10', '25', '5'], '25 mod 23.'),
    Q('Fresh session keys for each connection give:', ['forward secrecy', 'slower pages', 'no encryption', 'shorter certificates'], 'Old sessions stay safe.'),
    Q('A VPN does not protect against:', ['malware already on the computer', 'eavesdropping on public Wi-Fi', 'seeing the server address', 'reading traffic in transit'], 'It only protects data in transit.'),
  ],
  'acs-law-1': [
    Q('ANTIC was created in:', ['2002', '2010', '2024', '1990'], 'Its powers were set out in Law No. 2010/012.'),
    Q('Spreading false news electronically is an offence under:', ['Law No. 2010/012', 'Law No. 2000/011', 'Law No. 2024/017', 'no law'], 'Cybercriminality.'),
    Q('SIM swap fraud aims to:', ['take over your phone number to receive your codes', 'repair your SIM', 'speed up your network', 'add credit'], 'Then empty accounts.'),
    Q('Law No. 2010/021 recognises:', ['electronic contracts', 'only paper contracts', 'no online trade', 'only cash payments'], 'Electronic commerce.'),
  ],
  'acs-law-2': [
    Q('Which of these is sensitive personal data?', ['health records', 'a school’s address', 'a book title', 'the weather'], 'It needs extra care.'),
    Q('Keeping data only as long as needed is:', ['storage limitation', 'consent', 'portability', 'normalisation'], 'Delete it after.'),
    Q('Asking for data to be deleted is the right to:', ['erasure', 'rectification', 'access', 'objection only'], 'Sometimes called the right to be forgotten.'),
    Q('Working only within your competence is a principle of:', ['professional ethics', 'normalisation', 'routing', 'recursion'], 'Do not claim skills you lack.'),
  ],
  'acs-proj-2': [
    Q('Technical documentation includes:', ['the data dictionary and structure charts', 'only screenshots of menus', 'the user’s password', 'the examiner’s comments'], 'For maintainers.'),
    Q('A bug log records:', ['each fault, its cause, its fix and the retest', 'only the final code', 'users’ names', 'test marks'], 'Evidence of debugging.'),
    Q('Each success criterion in the evaluation should be:', ['judged met, partly met or not met, with evidence', 'ignored', 'rewritten to fit', 'removed if failed'], 'Honest evaluation.'),
    Q('The final step of the project with the user is:', ['sign-off', 'normalisation', 'fact-finding', 'feasibility'], 'Formal acceptance.'),
  ],
  'acs-int-1': [
    Q('The phone gets the server’s IP address from:', ['DNS', 'DHCP', 'the CPU', 'TLS'], 'Name resolution.'),
    Q('The parent’s PIN is a form of:', ['authentication', 'encryption', 'routing', 'compression'], 'Proving who they are.'),
    Q('The amount entered is checked first by:', ['validation in the app', 'the router', 'DNS', 'the switch'], 'Sensible values only.'),
    Q('The receipt SMS is sent:', ['after the transaction is committed', 'before the PIN is entered', 'instead of the payment', 'by DNS'], 'Only once the payment is final.'),
  ],
  'acs-u6-paper1': [
    Q('The mantissa 1.0100000 (exponent 0) is:', ['−0.75', '0.75', '−0.25', '1.25'], '−1 + 0.25.'),
    Q('For /28, the block size in the last byte is:', ['16', '28', '8', '32'], '256 − 240.'),
    Q('(A + B)·(A + B′) simplifies to:', ['A', 'B', '1', 'A·B'], 'A + B·B′ = A.'),
    Q('The broadcast address of 192.168.1.20/30 is:', ['192.168.1.23', '192.168.1.20', '192.168.1.255', '192.168.1.24'], 'Block 20 to 23.'),
  ],
  'acs-u6-paper2': [
    Q('π Name (Student) in SQL is:', ['SELECT Name FROM Student', 'SELECT * FROM Student', 'DELETE Name', 'WHERE Name'], 'Projection of one column.'),
    Q('When a method is not in the object’s class, Python looks in:', ['its superclass', 'a random class', 'the global variables', 'nowhere'], 'Up the inheritance chain.'),
    Q('In a normalisation answer, examiners want:', ['each step with the dependency removed and why', 'only the final tables', 'the SQL only', 'a diagram only'], 'Show the reasoning.'),
    Q('A composite primary key in CREATE TABLE is written:', ['PRIMARY KEY (StudentID, SubjectID)', 'KEY StudentID, KEY SubjectID', 'PRIMARY StudentID SubjectID', 'FOREIGN KEY (StudentID, SubjectID)'], 'Both fields together.'),
  ],
  'acs-u6-clinic': [
    Q('Deleting a BST node with one child:', ['replaces it with its child', 'deletes the whole subtree', 'needs the in-order successor', 'is impossible'], 'The child moves up.'),
    Q('Finding an item in an unsorted linked list is:', ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'], 'Follow the pointers.'),
    Q('Enqueue on a circular queue is:', ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], 'Rear moves one place.'),
    Q('A loop FOR i ← 1 TO n followed by a separate loop FOR j ← 1 TO n is:', ['O(n)', 'O(n²)', 'O(2ⁿ)', 'O(log n)'], 'n + n = 2n.'),
  ],
  'acs-u6-paper3': [
    Q('In the practical paper you should save your work:', ['often, under the file names asked for', 'only at the end', 'never', 'under any name'], 'Protect your evidence.'),
    Q('With 140 working minutes for 100 marks, a 10-mark question gets about:', ['14 minutes', '10 minutes', '30 minutes', '5 minutes'], '1.4 minutes a mark.'),
    Q('When a question part runs over its time, you should:', ['move on and come back if time allows', 'keep going whatever happens', 'leave the room', 'start again'], 'Easier marks may wait elsewhere.'),
    Q('When explaining your project you should cover:', ['the problem, the user, the design, the testing and improvements', 'only the code', 'only the user’s name', 'nothing'], 'The whole story.'),
  ],
};
