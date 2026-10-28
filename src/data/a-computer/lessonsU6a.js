// A Level Computer Science lessons (0795), Upper Sixth, Term 1: relational
// databases and SQL, software quality and design, advanced object-oriented
// programming, files, low-level programming, logic circuits and the first
// phase of the project. Original text written for this app.

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

export const LESSONS_CU6A = [
  // ---------- 1. Normalisation ----------
  L('acs-db-1', 'acs-u6-normalisation', '1.1', 'The relational model: keys, relationships and dependencies', 18, ['Databases'], [
    'A **relational database** keeps data in **tables** (relations). Each row is a **record** (tuple) and each column an **attribute**. Every table has a **primary key** that identifies each record; a **composite key** is made of two or more attributes; any attribute that could serve as the key is a **candidate key**.',
    'A **foreign key** is an attribute that is the primary key of another table. It links the tables and allows **referential integrity**: the database refuses a fee payment for a StudentID that does not exist.',
    'An **entity-relationship diagram** shows the entities and the relationships between them: one-to-one, one-to-many or many-to-many. A many-to-many relationship, such as students and subjects, is replaced by a **link table** (ENROLMENT) holding both foreign keys.',
    'A **functional dependency** A → B means that each value of A fixes exactly one value of B: StudentID → Name. Badly designed tables repeat data and suffer **anomalies**: an **update** anomaly (a teacher’s phone number must be changed in many rows), an **insertion** anomaly (a new subject cannot be added until a student takes it) and a **deletion** anomaly (deleting the last student in a club loses the club’s details).',
  ], 'erd-school', 'Write every dependency as an arrow, such as StudentID → Name, before you start splitting tables.',
  ['In ENROLMENT(StudentID, SubjectID, Mark), the primary key is:', ['the composite key (StudentID, SubjectID)', 'StudentID alone', 'Mark', 'SubjectID alone'], 'A student takes many subjects.'],
  [['Primary key', 'An attribute, or set of attributes, that identifies each record uniquely.'], ['Foreign key', 'An attribute that is the primary key of another table, linking the two.'], ['Functional dependency', 'A → B: each value of A fixes one value of B.']],
  [
    { q: 'Give the primary and foreign keys in STUDENT(StudentID, Name, ClassID), CLASS(ClassID, ClassName, Teacher) and ENROLMENT(StudentID, SubjectID, Mark).', steps: ['Primary keys: StudentID; ClassID; the composite (StudentID, SubjectID).', 'STUDENT.ClassID is a foreign key to CLASS.', '**ENROLMENT.StudentID and ENROLMENT.SubjectID are foreign keys to STUDENT and SUBJECT.**'] },
    { q: 'List the functional dependencies in RESULT(StudentID, SubjectID, Name, SubjectName, Mark).', steps: ['StudentID → Name.', 'SubjectID → SubjectName.', '**(StudentID, SubjectID) → Mark**: the mark needs both.'] },
    { q: 'A table CLUB(StudentID, Name, Club, ClubPatron) holds one row per member. Give one example of each anomaly.', steps: ['Update: a new patron for the Science club must be typed into every member’s row.', 'Insertion: a new club with no members yet cannot be recorded.', '**Deletion: removing the last member of the Chess club also removes the name of its patron.**'] },
  ]),

  L('acs-db-2', 'acs-u6-normalisation', '1.2', 'Normalising to first, second and third normal form', 20, ['Databases'], [
    '**Normalisation** splits data into well-designed tables so that each fact is stored once. It removes redundancy and the anomalies it causes. (Key fields are written in bold here.)',
    '**First normal form (1NF)**: every field holds a single value, there are no repeating groups, and the table has a primary key. A repeating group is moved to a new table whose key includes the original key.',
    '**Second normal form (2NF)**: the table is in 1NF and has no **partial dependency**, that is no non-key attribute depends on only part of a composite key. A table with a single-field key in 1NF is already in 2NF.',
    '**Third normal form (3NF)**: the table is in 2NF and has no **transitive dependency**, that is no non-key attribute depends on another non-key attribute. In short, every non-key attribute depends on the key, the whole key and nothing but the key. The cost is more tables, joined again in queries.',
  ], 'acs-normal-forms', 'Look for repeating groups (1NF), then parts of a composite key (2NF), then non-key to non-key arrows (3NF).',
  ['In STUDENT(StudentID, Name, ClassID, ClassTeacher), ClassTeacher depends on ClassID. This is:', ['a transitive dependency, removed for 3NF', 'a partial dependency', 'a repeating group', 'already in 3NF'], 'ClassID is not the key.'],
  [['Normalisation', 'Organising data into tables so that each fact is stored once.'], ['Partial dependency', 'A non-key attribute depending on only part of a composite key.'], ['Transitive dependency', 'A non-key attribute depending on another non-key attribute.']],
  [
    { q: 'Normalise to 1NF: STUDENT(StudentID, Name, ClassID, ClassTeacher, {SubjectID, SubjectName, Mark}), where the braces are a repeating group.', steps: ['Move the repeating group to its own table and include StudentID in its key.', 'STUDENT(**StudentID**, Name, ClassID, ClassTeacher).', '**RESULT(StudentID, SubjectID, SubjectName, Mark)** with the composite key (**StudentID**, **SubjectID**).'] },
    { q: 'Take those tables to 2NF.', steps: ['In RESULT, SubjectName depends on SubjectID alone: a partial dependency.', 'Move it out: SUBJECT(**SubjectID**, SubjectName).', '**RESULT(StudentID, SubjectID, Mark)** keeps only the mark, which needs the whole key; STUDENT has a single key, so it is in 2NF.'] },
    { q: 'Take them to 3NF and list the final tables.', steps: ['In STUDENT, ClassTeacher depends on ClassID, a non-key attribute: a transitive dependency.', 'Move it out: CLASS(**ClassID**, ClassTeacher), leaving STUDENT(**StudentID**, Name, ClassID).', '**STUDENT, CLASS, SUBJECT and RESULT**, each fact stored once.'] },
    { q: 'Normalise LOAN(LoanID, StudentID, StudentName, BookID, Title, DateOut).', steps: ['The key LoanID is a single field, so the table is in 2NF.', 'StudentName depends on StudentID and Title on BookID: transitive dependencies.', '**STUDENT(StudentID, StudentName), BOOK(BookID, Title), LOAN(LoanID, StudentID, BookID, DateOut).**'] },
  ]),

  // ---------- 2. SQL ----------
  L('acs-sql-1', 'acs-u6-sql', '2.1', 'SQL: defining tables, changing data and summarising it', 18, ['Databases'], [
    'The **data definition language** creates the structure:\nCREATE TABLE Student (StudentID CHAR(6) PRIMARY KEY, Name VARCHAR(40) NOT NULL, ClassID CHAR(4), FOREIGN KEY (ClassID) REFERENCES Class(ClassID));\nALTER TABLE changes a table and DROP TABLE removes it.',
    'The **data manipulation language** changes the data: INSERT INTO Student VALUES (\'S00123\', \'Ngwa Bih\', \'U6S2\'); UPDATE Student SET ClassID = \'U6S1\' WHERE StudentID = \'S00123\'; DELETE FROM Student WHERE StudentID = \'S00123\';. Without WHERE, UPDATE and DELETE change every row.',
    'SELECT columns FROM table WHERE condition ORDER BY column ASC or DESC. Conditions can use AND, OR, NOT, BETWEEN 10 AND 15, IN (\'U6S1\', \'U6S2\'), LIKE \'N%\' (% stands for any characters) and IS NULL.',
    '**Aggregate functions** COUNT, SUM, AVG, MIN and MAX summarise rows. **GROUP BY** makes one group per value, and **HAVING** filters the groups: SELECT ClassID, AVG(Mark) FROM Result GROUP BY ClassID HAVING AVG(Mark) >= 12;. WHERE filters rows before grouping; HAVING filters groups after.',
  ], 'acs-sql-group', 'WHERE works on rows, HAVING on groups.',
  ['SELECT COUNT(*) FROM Student WHERE ClassID = \'U6S2\' returns:', ['the number of students in U6S2', 'their names', 'every student', 'the class teacher'], 'COUNT(*) counts rows.'],
  [['Data definition language', 'SQL statements that create and change the structure of tables.'], ['Aggregate function', 'A function such as COUNT or AVG that summarises many rows.'], ['HAVING', 'The clause that filters the groups made by GROUP BY.']],
  [
    { q: 'Write SQL to list each class with more than 40 students and the number in it.', steps: ['Count students per class: SELECT ClassID, COUNT(*) FROM Student GROUP BY ClassID', 'Keep only the large groups: HAVING COUNT(*) > 40', '**SELECT ClassID, COUNT(*) FROM Student GROUP BY ClassID HAVING COUNT(*) > 40;**'] },
    { q: 'Fees holds (S1, 25 000), (S2, 40 000), (S1, 15 000), (S3, 10 000). What does SELECT StudentID, SUM(Amount) FROM Fees GROUP BY StudentID HAVING SUM(Amount) >= 40000; return?', steps: ['Totals: S1 40 000, S2 40 000, S3 10 000.', 'HAVING keeps totals of at least 40 000.', '**S1 40 000 and S2 40 000.**'] },
    { q: 'A clerk types UPDATE Student SET ClassID = \'U6S1\'; to move one student. What goes wrong and how is it fixed?', steps: ['With no WHERE clause, every student is moved to U6S1.', 'The statement must name the student.', '**UPDATE Student SET ClassID = \'U6S1\' WHERE StudentID = \'S00123\';**'] },
  ]),

  L('acs-sql-2', 'acs-u6-sql', '2.2', 'Joins and nested subqueries', 18, ['Databases'], [
    'A **join** combines rows from two tables using a matching field, usually a foreign key and the primary key it refers to:\nSELECT Student.Name, Class.ClassName FROM Student INNER JOIN Class ON Student.ClassID = Class.ClassID;\nThe older form FROM Student, Class WHERE Student.ClassID = Class.ClassID gives the same result as an inner join.',
    'An **INNER JOIN** keeps only rows that match in both tables. A **LEFT JOIN** keeps every row of the left table and fills the missing columns with NULL; a **RIGHT JOIN** does the same for the right table.',
    'A **subquery** is a SELECT inside another statement. With IN it gives a list: SELECT Name FROM Student WHERE StudentID IN (SELECT StudentID FROM Fees WHERE Amount >= 40000);. With a comparison it gives one value: WHERE Mark > (SELECT AVG(Mark) FROM Result).',
    'To find records with no match, use NOT IN with a subquery, or a LEFT JOIN with WHERE the right-hand key IS NULL: both find students who have paid nothing.',
  ], 'acs-joins', 'Name the table before each column in a join, such as Student.Name, so the query is never ambiguous.',
  ['A LEFT JOIN of Student and Fees keeps a student who has paid nothing:', ['yes, with NULL in the Fees columns', 'no, never', 'only if the student is in Upper Sixth', 'only once a payment is made'], 'Every left row is kept.'],
  [['Join', 'Combining rows of two tables on a matching field.'], ['LEFT JOIN', 'A join that keeps every row of the left table, with NULLs where nothing matches.'], ['Subquery', 'A SELECT statement nested inside another statement.']],
  [
    { q: 'Student: S1 Ngwa, S2 Bih, S3 Fon, S4 Akwi. Fees: (S1, 25 000), (S2, 40 000), (S1, 15 000), (S3, 10 000). How many rows do the inner join and the left join on StudentID give?', steps: ['Inner join: Ngwa twice, Bih once, Fon once: 4 rows. Akwi has no payment, so she is left out.', 'Left join: those 4 rows and Akwi with NULL.', '**4 rows and 5 rows.**'] },
    { q: 'Write a query for the names of students who have paid nothing, and give the answer for the data above.', steps: ['SELECT Name FROM Student', 'WHERE StudentID NOT IN (SELECT StudentID FROM Fees);', '**Akwi.**'] },
    { q: 'Which students made a single payment larger than the average payment?', steps: ['The average payment is 90 000 ÷ 4 = 22 500.', 'SELECT DISTINCT Name FROM Student INNER JOIN Fees ON Student.StudentID = Fees.StudentID WHERE Amount > (SELECT AVG(Amount) FROM Fees);', '**Ngwa (25 000) and Bih (40 000).**'] },
  ]),

  L('acs-sql-3', 'acs-u6-sql', '2.3', 'Transactions, ACID and relational algebra', 18, ['Databases'], [
    'A **transaction** is a group of operations that must succeed or fail as one. Moving 10 000 FCFA between accounts is a debit and a credit:\nBEGIN TRANSACTION; UPDATE Account SET Balance = Balance - 10000 WHERE AccNo = 1; UPDATE Account SET Balance = Balance + 10000 WHERE AccNo = 2; COMMIT;\nIf anything fails, **ROLLBACK** undoes the changes already made.',
    '**ACID**: **atomicity** (all of the transaction or none of it), **consistency** (rules such as "a balance never falls below 0" hold before and after), **isolation** (transactions running at the same time do not see each other’s half-finished work) and **durability** (once committed, the change survives a crash, thanks to the log).',
    'When two users update the same record at once, one update can be lost. **Record locking** lets only one transaction change a record at a time; others wait. Locks can cause deadlock, which the database detects and breaks by rolling one transaction back.',
    '**Relational algebra** describes queries on tables: **selection** σ chooses rows (σ Mark ≥ 15 (Result)), **projection** π chooses columns (π Name (Student)), **join** combines tables on matching fields, and **union**, **intersection** and **difference** combine tables with the same columns.',
  ], 'acs-acid', 'σ is SQL’s WHERE, π is the column list after SELECT, and join is JOIN … ON.',
  ['A power cut after the debit but before the credit leaves both accounts as they were. This shows:', ['atomicity', 'projection', 'normalisation', 'isolation only'], 'All or nothing.'],
  [['Transaction', 'A group of database operations that succeed or fail together.'], ['Atomicity', 'The ACID property that a transaction happens completely or not at all.'], ['Selection and projection', 'Relational algebra operations choosing rows and choosing columns.']],
  [
    { q: 'Translate π Name (σ Mark ≥ 15 (Result JOIN Student)) into SQL.', steps: ['The join: FROM Result INNER JOIN Student ON Result.StudentID = Student.StudentID.', 'σ becomes WHERE Mark >= 15; π becomes SELECT Name.', '**SELECT Name FROM Result INNER JOIN Student ON Result.StudentID = Student.StudentID WHERE Mark >= 15;**'] },
    { q: 'Two clerks each read a balance of 50 000 FCFA; one adds 10 000, the other takes away 5 000, and both write back. What goes wrong, and how does locking prevent it?', steps: ['They write 60 000 and 45 000; whichever is written last wins, and the other change is lost.', 'With locking, the first clerk locks the record; the second must wait until the first commits.', '**The second then reads 60 000 and writes 55 000, the correct balance.**'] },
    { q: 'Club A has members {Ngwa, Bih, Fon} and Club B {Bih, Akwi}. Give A ∪ B, A ∩ B and A − B.', steps: ['Union: everyone in either: Ngwa, Bih, Fon, Akwi.', 'Intersection: in both: Bih.', '**Difference A − B: in A but not B: Ngwa and Fon.**'] },
  ]),

  // ---------- 3. Quality and testing ----------
  L('acs-qa-1', 'acs-u6-quality', '3.1', 'Software quality attributes and how to measure them', 17, ['Software engineering'], [
    'Good software is **correct** (it meets its requirements) and **reliable** (it works over long periods without failing). Reliability is measured by the **mean time between failures** (MTBF) and **availability** by the percentage of time the system is working.',
    '**Usability** is how easily users learn and use it: measured by timing tasks, counting errors and asking users. **Efficiency** is its use of time and memory, such as the response time. **Scalability** is coping with more users or data.',
    '**Maintainability** depends on readable code, comments, meaningful names and modules. **Portability** is running on other devices or operating systems. **Robustness** is handling bad input and unexpected events without crashing. **Security** protects the data.',
    '**Error handling** makes software robust: validate every input, catch exceptions, show messages that tell the user what to do, record errors in a log, and fail safely, keeping data intact. Writing code that expects things to go wrong is **defensive programming**.',
  ], 'acs-quality', 'A quality claim needs a number: a response time, an MTBF, a percentage available.',
  ['Mean time between failures measures:', ['reliability', 'usability', 'portability', 'scalability'], 'The longer, the more reliable.'],
  [['Reliability', 'Working correctly over long periods without failure.'], ['Usability', 'How easily and efficiently users can learn and use a system.'], ['Robustness', 'Handling bad input and unexpected events without crashing.']],
  [
    { q: 'A fees system ran for 2000 hours and failed 4 times. Find the MTBF. If it was down 10 hours in a 30-day month, find its availability.', steps: ['MTBF = 2000 ÷ 4 = 500 hours.', 'A 30-day month is 720 hours, so it worked 710 hours.', '**Availability = 710 ÷ 720 ≈ 98.6 %.**'] },
    { q: 'Ten users took on average 3 minutes and made 2 errors each to register a student. After a redesign they took 1.5 minutes and made none. What has improved, and how is it shown?', steps: ['Usability: both efficiency and the error rate improved.', 'The evidence is measured: time per task halved and errors fell from 2 to 0.', '**A usability claim backed by measurements.**'] },
    { q: 'Make reading an age robust in Python.', steps: ['while True:\n    try:\n        age = int(input("Age: "))', '        if 10 <= age <= 25:\n            break\n        print("Enter an age from 10 to 25.")', '    except ValueError:\n        print("Type the age as a number, such as 17.")\n**Bad input gives a helpful message instead of a crash.**'] },
  ]),

  L('acs-qa-2', 'acs-u6-quality', '3.2', 'Testing strategies and test data', 18, ['Software engineering'], [
    '**Unit testing** checks each module alone. **Integration testing** checks modules working together: top-down with **stubs** standing in for modules not yet written, or bottom-up with **drivers** that call the modules being tested. **System testing** checks the whole system, and **acceptance testing** is done by the client against the requirements. **Alpha testing** is done in-house; **beta testing** by real users before release. **Regression testing** reruns old tests after each change.',
    '**White-box** testing uses the code: every path and branch is tried at least once. **Black-box** testing uses only the specification: inputs and expected outputs. **Dry runs** with trace tables check logic by hand.',
    'Test data: **normal** data (typical valid values), **boundary** data (values at the limits and just either side of them) and **erroneous** data (wrong type or out of range), which must be rejected.',
    'A **test plan** gives, for each test, its number and purpose, the data, its type, the expected result, the actual result and evidence such as a screenshot. Failed tests are fixed and run again.',
  ], 'test-data', 'For a range of 0 to 20, test −1, 0, 20 and 21: the two limits and one value just outside each.',
  ['A stub is used in:', ['top-down integration testing, in place of a module not yet written', 'acceptance testing', 'beta testing', 'normalisation'], 'It returns a fixed value.'],
  [['Stub', 'A simple stand-in for a module that has not been written yet.'], ['Boundary data', 'Test values at the limits of a valid range and just outside them.'], ['Regression testing', 'Running earlier tests again after a change.']],
  [
    { q: 'Choose test data for a whole-number mark from 0 to 20.', steps: ['Normal: 12, accepted.', 'Boundary: 0 and 20 accepted; −1 and 21 rejected.', '**Erroneous: "twelve" and 35, rejected with a message.**'] },
    { q: 'grade(m) returns "A" if m ≥ 15, "B" if m ≥ 10, else "C". Give white-box tests that cover every path and both boundaries.', steps: ['One test per path: 16 → A, 12 → B, 5 → C.', 'Boundaries: 15 → A, 14 → B, 10 → B, 9 → C.', '**Seven tests cover every branch and both limits.**'] },
    { q: 'The fee report module is ready but the module that reads payments is not. How can the report be tested?', steps: ['Replace the payment module with a stub that returns three fixed payments.', 'Run the report and compare it with the totals worked out by hand.', '**When the real module is ready, run the same tests again: integration testing.**'] },
  ]),

  // ---------- 4. Design methods ----------
  L('acs-des-1', 'acs-u6-design', '4.1', 'Top-down design, stepwise refinement and structure charts', 17, ['Software engineering'], [
    '**Top-down design** starts with the whole problem and breaks it into sub-problems, then breaks each of those again (**stepwise refinement**) until every step is simple enough to code as one module.',
    'For example, "Produce report cards" becomes Read marks, Calculate results and Print cards; Calculate results becomes Work out averages and Rank the students.',
    'A **structure chart** draws the modules as boxes, with a line from each module to those it calls. Small arrows show what is passed: an arrow with an open circle is **data** (marks, an average) and one with a filled circle is a **flag** (control information, such as "file found"). A diamond shows a choice between modules and a curved arrow shows a module called repeatedly.',
    'Top-down design gives manageable modules that different people can write and test, but decisions made at the top can be hard to change later.',
  ], 'acs-structure-chart', 'Each box in a structure chart should do one job that you can name with a verb.',
  ['In a structure chart, an arrow with a filled circle carries:', ['a flag (control information)', 'data such as marks', 'a loop', 'a file'], 'Open circles carry data.'],
  [['Top-down design', 'Breaking a problem into smaller and smaller sub-problems.'], ['Stepwise refinement', 'Repeatedly breaking each step into more detailed steps.'], ['Structure chart', 'A diagram of the modules of a program and the data passed between them.']],
  [
    { q: 'Refine "Process a fee payment" by two levels.', steps: ['Level 1: Find the student; Record the payment; Issue a receipt.', 'Level 2: Find the student → Read StudentID, Look it up, Show the name; Record the payment → Check the amount, Add to the Fees table, Update the balance.', '**Issue a receipt → Format the receipt, Send it by SMS or print it.**'] },
    { q: 'Describe the structure chart for "Produce report cards".', steps: ['Top box: Produce report cards, calling Read marks, Calculate results and Print cards.', 'Read marks passes marks (data) up; Calculate results calls Work out averages and Rank students, passing averages down to Rank.', '**Print cards receives the averages and positions; Read marks also returns an "end of file" flag.**'] },
  ]),

  L('acs-des-2', 'acs-u6-design', '4.2', 'Bottom-up design, modularity, cohesion and coupling', 17, ['Software engineering'], [
    '**Bottom-up design** builds and tests small general modules first, such as validating a date, working out an average or sending an SMS, then combines them into larger ones. It makes good use of existing **libraries**. Real projects often mix top-down planning with bottom-up building.',
    '**Divide and conquer** as a design method splits a problem into independent parts of the same kind, solves them and combines the answers, as in merge sort and binary search.',
    '**Cohesion** is how closely the contents of a module belong together: a module that does exactly one job (functional cohesion) is best. **Coupling** is how much modules depend on each other: modules that share only the parameters they need (data coupling) are best; modules that share global variables are tightly coupled and break each other.',
    'A **library** of tested routines saves time and errors, but the programmer must understand its interface and respect its licence.',
  ], 'acs-coupling', 'Aim for high cohesion and low coupling: each module does one job and needs as little as possible from the others.',
  ['A module called PrintSaveAndEmailReport has:', ['low cohesion: it does three jobs', 'high cohesion', 'no coupling', 'perfect design'], 'Split it into three modules.'],
  [['Bottom-up design', 'Building and testing small modules first, then combining them.'], ['Cohesion', 'How closely the parts of one module belong to one job.'], ['Coupling', 'How much modules depend on each other.']],
  [
    { q: 'Two subroutines both read and change a global list marks. Rewrite the design with lower coupling.', steps: ['Make average(marks) take the list as a parameter and return the average.', 'Make add_mark(marks, m) take the list and the mark and return the new list.', '**Each subroutine now states what it uses, so either can be tested or changed alone.**'] },
    { q: 'A team is building a mobile money fees app and already has a tested SMS library and a date-checking module. Which design approach suits, and why?', steps: ['Bottom-up for the parts that exist: reuse the SMS library and date module.', 'Top-down to plan the new parts: payment, receipts, reports.', '**A mix: plan from the top, build up from the tested modules.**'] },
  ]),

  // ---------- 5. Advanced object-oriented programming ----------
  L('acs-aoop-1', 'acs-u6-advanced-oop', '5.1', 'Abstract classes, dynamic binding and interfaces', 18, ['Object-oriented programming'], [
    'An **abstract class** describes what its subclasses have in common but cannot itself make objects. An **abstract method** is declared without a body; every concrete subclass must override it.',
    'In Python:\nfrom abc import ABC, abstractmethod\nclass Account(ABC):\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self._balance = balance\n    @abstractmethod\n    def monthly_charge(self):\n        pass\nclass Savings(Account):\n    def monthly_charge(self):\n        return 0\nclass Current(Account):\n    def monthly_charge(self):\n        return 1500\nAccount("Ama", 0) raises a TypeError, because Account is abstract.',
    '**Dynamic binding**: which version of a method runs is decided when the program runs, from the class of the object. A loop over a list of accounts calls a.monthly_charge() and each object answers in its own way: this is how polymorphism works.',
    'An **interface** lists methods a class promises to provide, with no code. In Java: interface Payable { double amountDue(); } and class Invoice implements Payable { … }. A class can inherit from one class but implement many interfaces.',
  ], 'acs-abstract', 'Make a class abstract when "an object of this class" makes no sense on its own, such as a plain Shape or Account.',
  ['Account("Ama", 0) fails because:', ['Account is abstract and cannot be instantiated', 'Ama is not a number', 'the balance is 0', 'it has no constructor'], 'Only subclasses make objects.'],
  [['Abstract class', 'A class that cannot be instantiated and serves as a base for subclasses.'], ['Abstract method', 'A method declared without a body, which subclasses must override.'], ['Dynamic binding', 'Choosing which method runs at run time from the object’s class.']],
  [
    { q: 'accounts = [Savings("Ngwa", 5000), Current("Bih", 20000), Current("Fon", 8000)]. What does sum(a.monthly_charge() for a in accounts) return?', steps: ['Savings returns 0; each Current returns 1500.', '0 + 1500 + 1500.', '**3000 FCFA**: each object’s own method ran.'] },
    { q: 'Design an abstract class Shape with abstract methods area() and perimeter(), and a subclass Square.', steps: ['class Shape(ABC): with @abstractmethod def area(self) and @abstractmethod def perimeter(self).', 'class Square(Shape): def __init__(self, side): self.side = side', '**def area(self): return self.side ** 2 and def perimeter(self): return 4 * self.side.** Square(3) gives 9 and 12.'] },
  ]),

  L('acs-aoop-2', 'acs-u6-advanced-oop', '5.2', 'Association, aggregation and composition', 17, ['Object-oriented programming'], [
    'An **association** links objects of two classes, such as a Teacher who teaches a Class. A UML class diagram draws it as a line with **multiplicities** at each end: 1, 0..1, 0..* or 1..*.',
    '**Aggregation** is a "has a" link in which the parts can exist without the whole: a Department has Teachers, who still exist if the department closes. UML shows a **hollow diamond** at the whole.',
    '**Composition** is a stronger "has a" link in which the parts belong to one whole and are destroyed with it: a ReportCard has its Lines. UML shows a **filled diamond** at the whole. In code, the whole usually creates its parts in its constructor:\nclass Car:\n    def __init__(self, make, power):\n        self.make = make\n        self.engine = Engine(power)',
    'Use inheritance only for a true "is a" relationship. Where the link is "has a", **composition is preferred**: it is more flexible, since a part can be swapped, and it keeps the classes less tightly coupled.',
  ], 'acs-composition', 'Ask "is a" or "has a"? Then ask whether the part can live without the whole.',
  ['A book and its pages are best modelled as:', ['composition', 'aggregation', 'inheritance', 'no relationship'], 'The pages do not exist without the book.'],
  [['Association', 'A link between objects of two classes.'], ['Aggregation', 'A "has a" link whose parts can exist without the whole.'], ['Composition', 'A "has a" link whose parts are created and destroyed with the whole.']],
  [
    { q: 'Name the relationship: (i) Library and Book, (ii) Book and Page, (iii) Student and Person, (iv) Member and Loan.', steps: ['(i) Aggregation: books exist apart from the library.', '(ii) Composition: pages belong to one book. (iii) Inheritance: a Student is a Person.', '**(iv) Association: a member takes out loans.**'] },
    { q: 'Each class has 1 or more students and each student belongs to exactly one class. Write the multiplicities.', steps: ['At the Student end of the line: 1..*.', 'At the Class end: 1.', '**A line from Class (1) to Student (1..*).**'] },
    { q: 'Write a ReportCard class that is composed of Line objects.', steps: ['class Line:\n    def __init__(self, subject, mark):\n        self.subject = subject\n        self.mark = mark', 'class ReportCard:\n    def __init__(self, name):\n        self.name = name\n        self.lines = []\n    def add(self, subject, mark):\n        self.lines.append(Line(subject, mark))', '**The card creates its own lines, and they disappear with it.**'] },
  ]),

  // ---------- 6. Files and exceptions ----------
  L('acs-file-1', 'acs-u6-files', '6.1', 'Text files and exception handling', 18, ['Programming'], [
    'Files keep data after a program ends. In Python, open("marks.txt", mode) opens a file: "r" to read, "w" to write (an existing file is emptied first) and "a" to append. f.readline() reads one line, for line in f reads them all, f.write(text + "\\n") writes a line, and f.close() closes it. with open(…) as f: closes the file automatically, even after an error.',
    'A comma-separated line such as Ngwa,14 is split into fields with line.strip().split(","); numbers must be converted with int() or float().',
    'An **exception** is an error raised while a program runs, such as FileNotFoundError, ValueError or ZeroDivisionError. try: holds code that may fail; except handles a particular exception; else runs only if nothing went wrong; finally always runs. raise signals an error from your own code.',
    'Catch specific exceptions, give a message the user can act on, and never hide errors with an empty, catch-all except.',
  ], 'acs-exceptions', 'Open files with with, and catch the exceptions you expect by name.',
  ['try: x = int("12a") except ValueError: print("bad") finally: print("done") prints:', ['bad, then done', 'done only', 'bad only', '12a'], 'finally always runs.'],
  [['Exception', 'An error raised while a program is running.'], ['Append mode', 'Opening a file to add to its end without erasing it.'], ['finally block', 'Code that runs whether or not an exception occurred.']],
  [
    { q: 'marks.txt holds lines such as Ngwa,14. Write Python to print the average mark, with a message if the file is missing.', steps: ['try:\n    with open("marks.txt") as f:\n        marks = [int(line.strip().split(",")[1]) for line in f]', '    print("Average:", sum(marks) / len(marks))', 'except FileNotFoundError:\n    print("marks.txt was not found.")\n**The with block closes the file; a missing file gives a clear message.**'] },
    { q: 'Add the line Akwi,17 to marks.txt without losing what is there.', steps: ['Open in append mode, "a", not "w".', 'with open("marks.txt", "a") as f:', '**    f.write("Akwi,17\\n")**'] },
    { q: 'What happens if the file holds a line Fon,absent?', steps: ['int("absent") raises ValueError, which the code above does not catch.', 'Add except ValueError: print("A mark in the file is not a number.")', '**Or skip that line and carry on, counting it as absent.**'] },
  ]),

  L('acs-file-2', 'acs-u6-files', '6.2', 'Record files: serial, sequential and random access', 18, ['Programming'], [
    'A **record** is a group of fields about one item. Stored as **fixed-length** records in a binary file, record k begins at byte (k − 1) × record size, so the program can jump straight to it.',
    'A **serial** file keeps records in the order they arrive: adding is quick, but finding a record means reading from the start. Logs of transactions are serial. A **sequential** file keeps records in order of a key: it suits **batch processing** such as monthly fee statements, but inserting a record means copying the file.',
    'A **random-access** (direct-access) file uses a **hashing algorithm** to turn the key into an address, such as key MOD the number of slots. Two keys with the same address cause a **collision**, stored in the next free slot (linear probing) or in an overflow area.',
    'An **indexed sequential** file keeps records in key order with an index of keys and positions, so it supports both batch processing and quick look-ups.',
  ], 'acs-file-access', 'Batch work in key order: sequential. One record at a time, fast: random access.',
  ['With 64-byte records, record 5 starts at byte:', ['256', '320', '64', '5'], '(5 − 1) × 64.'],
  [['Serial file', 'A file of records in the order they arrived.'], ['Sequential file', 'A file of records sorted by a key field.'], ['Hashing algorithm', 'A calculation that turns a key into a storage address.']],
  [
    { q: 'Store keys 1027, 2045, 3012 and 4037 in slots 0 to 9 using key MOD 10 and linear probing.', steps: ['1027 → 7, 2045 → 5, 3012 → 2.', '4037 → 7, which is taken: try slot 8, which is free.', '**Slots 2, 5, 7 and 8.**'] },
    { q: 'How is 4037 found again later?', steps: ['Hash it: slot 7, which holds 1027, not 4037.', 'Look in the next slot, 8: it holds 4037.', '**Found after two reads**; a search stops at an empty slot if the key is absent.'] },
    { q: 'Choose a file organisation for: (i) the monthly payroll, (ii) an ATM checking one balance, (iii) a security log.', steps: ['(i) Sequential: every record is processed in key order.', '(ii) Random access: one record must be found at once.', '**(iii) Serial: events are added in the order they happen.**'] },
  ]),

  // ---------- 7. Assembly and bits ----------
  L('acs-asm-1', 'acs-u6-assembly', '7.1', 'Tracing assembly programs with loops', 18, ['Low-level programming'], [
    'The instruction set used here: LDA, STA, ADD, SUB, INP, OUT, BRA (always), BRZ (if the accumulator is 0), BRP (if it is 0 or more), HLT and DAT (reserves a memory location with a starting value). Labels name lines and memory locations.',
    'A **loop** keeps a counter in memory, changes it each time round and tests it with BRZ or BRP to decide whether to jump back.',
    'A **trace table** has a column for each instruction run, the accumulator, each memory variable and the output. Each row shows the values after one instruction.',
    'Each instruction is a set of **register transfers**. ADD TOTAL is fetched as usual, then MAR ← address of TOTAL; MDR ← [TOTAL]; ACC ← [ACC] + [MDR].',
  ], 'acs-asm-trace', 'Write one row per instruction and only change the columns that instruction changes.',
  ['With COUNT DAT 3, the countdown loop outputs:', ['3, 2, 1', '3, 2, 1, 0', '2, 1, 0', '1, 2, 3'], 'BRZ ends it when COUNT reaches 0.'],
  [['DAT', 'A directive that reserves a memory location with a starting value.'], ['Trace table', 'A table of the values after each instruction runs.'], ['Register transfer', 'Copying data between registers and memory, written such as ACC ← [MDR].']],
  [
    { q: 'Trace: LOOP LDA COUNT; OUT; SUB ONE; STA COUNT; BRZ END; BRA LOOP; END HLT; COUNT DAT 3; ONE DAT 1.', steps: ['ACC 3, output 3; ACC 2, COUNT 2; not zero, so back to LOOP.', 'Output 2; COUNT 1; back. Output 1; ACC 0, COUNT 0.', '**BRZ jumps to END: the outputs are 3, 2, 1.**'] },
    { q: 'Trace with inputs 5, 8, 0: LOOP INP; BRZ DONE; ADD TOTAL; STA TOTAL; BRA LOOP; DONE LDA TOTAL; OUT; HLT; TOTAL DAT 0.', steps: ['INP 5; ADD gives 5; TOTAL 5. INP 8; ADD gives 13; TOTAL 13.', 'INP 0: BRZ jumps to DONE.', '**LDA TOTAL and OUT give 13**: the program adds numbers until 0 is entered.'] },
    { q: 'Write the register transfers for the execute stage of SUB ONE.', steps: ['MAR ← address of ONE.', 'MDR ← [ONE], read along the data bus.', '**ACC ← [ACC] − [MDR].**'] },
  ]),

  L('acs-asm-2', 'acs-u6-assembly', '7.2', 'Shifts and bit masks', 17, ['Low-level programming'], [
    'In a **logical shift left**, every bit moves one place left and 0 enters on the right: an unsigned number doubles, and a 1 shifted out of the top is lost. In a **logical shift right**, 0 enters on the left and the number halves, dropping any remainder.',
    'An **arithmetic shift right** copies the sign bit into the top place, so a two’s complement number keeps its sign: 11110000 (−16) becomes 11111000 (−8). In a **rotate** (circular shift), the bit leaving one end enters at the other; rotates are used in hashing and cryptography.',
    'A **mask** picks out bits: **AND** with a mask clears the bits where the mask has 0 and keeps the others, so it also tests a bit; **OR** sets the bits where the mask has 1; **XOR** flips them.',
    'Shifts and masks give fast multiplication and division by powers of 2, pack several on/off settings into one byte, and find a network address (the IP address AND the subnet mask).',
  ], 'acs-shifts', 'AND clears, OR sets, XOR flips: only where the mask says so.',
  ['10110110 AND 00001111 is:', ['00000110', '10111111', '10111001', '00001111'], 'The top four bits are cleared.'],
  [['Logical shift', 'Moving every bit left or right, with 0 entering at the end.'], ['Arithmetic shift right', 'A right shift that copies the sign bit, keeping a number’s sign.'], ['Mask', 'A bit pattern used with AND, OR or XOR to clear, set or flip chosen bits.']],
  [
    { q: 'Shift 00010110 left two places, and then the original right one place.', steps: ['00010110 is 22.', 'Left two: 01011000 = 88, which is 22 × 4.', '**Right one: 00001011 = 11, which is 22 ÷ 2.**'] },
    { q: 'Byte 01101101: test bit value 4, set bit value 2, and flip the low four bits.', steps: ['AND 00000100 gives 00000100, not 0: the bit is set.', 'OR 00000010 gives 01101111.', '**XOR 00001111 gives 01100010.**'] },
    { q: 'Find the network address of 192.168.10.37 with mask 255.255.255.192, working on the last byte.', steps: ['37 = 00100101 and 192 = 11000000.', 'AND: 00000000.', '**192.168.10.0**: the mask clears the host bits.'] },
  ]),

  // ---------- 8. Logic circuits ----------
  L('acs-logic-1', 'acs-u6-circuits', '8.1', 'Boolean algebra and Karnaugh maps', 20, ['Logic'], [
    'Notation: A·B is A AND B, A + B is A OR B, A′ is NOT A (also written with a bar over A) and A ⊕ B is A XOR B.',
    'The laws: A + 0 = A and A·1 = A; A + 1 = 1 and A·0 = 0; A + A = A and A·A = A; A + A′ = 1 and A·A′ = 0; (A′)′ = A; the commutative and associative laws; distribution A·(B + C) = A·B + A·C and A + B·C = (A + B)·(A + C); **absorption** A + A·B = A and A·(A + B) = A; and **De Morgan’s laws** (A·B)′ = A′ + B′ and (A + B)′ = A′·B′.',
    'A **Karnaugh map** puts the truth table in a grid whose rows and columns follow the **Gray code** order 00, 01, 11, 10, so neighbouring cells differ in one variable. Group the 1s in rectangles of 1, 2, 4 or 8 cells, as large as possible; groups may overlap and wrap round the edges.',
    'Each group gives one AND term made of the variables that stay the same across it; the simplified expression ORs the terms together. Fewer, larger groups give fewer gates.',
  ], 'acs-kmap', 'In a Karnaugh map, a group of 2 removes one variable and a group of 4 removes two.',
  ['A·B + A·B′ simplifies to:', ['A', 'B', '1', 'A + B'], 'A·(B + B′) = A·1.'],
  [['Absorption law', 'A + A·B = A and A·(A + B) = A.'], ['De Morgan’s laws', '(A·B)′ = A′ + B′ and (A + B)′ = A′·B′.'], ['Karnaugh map', 'A grid of a truth table used to group 1s and simplify an expression.']],
  [
    { q: 'Simplify A·B + A·B′ + A′·B.', steps: ['A·B + A·B′ = A·(B + B′) = A.', 'A + A′·B = (A + A′)·(A + B) by distribution, and A + A′ = 1.', '**A + B.**'] },
    { q: 'Use a Karnaugh map to simplify F = A′·B·C′ + A′·B·C + A·B·C.', steps: ['The 1s are in cells 010, 011 and 111.', 'Group 010 with 011: A′·B. Group 011 with 111: B·C.', '**F = A′·B + B·C.**'] },
    { q: 'Use De Morgan to write (A + B′)′ without a bar over a bracket.', steps: ['(A + B′)′ = A′·(B′)′.', '(B′)′ = B.', '**A′·B.**'] },
  ]),

  L('acs-logic-2', 'acs-u6-circuits', '8.2', 'Half adders, full adders and ripple-carry adders', 18, ['Logic'], [
    'A **half adder** adds two bits A and B. Its sum is S = A ⊕ B and its carry is C = A·B: 1 + 1 gives sum 0, carry 1. It needs one XOR gate and one AND gate.',
    'A **full adder** adds A, B and a carry in, Cin: S = A ⊕ B ⊕ Cin and Cout = A·B + Cin·(A ⊕ B). It is built from two half adders and an OR gate.',
    'A **ripple-carry adder** chains n full adders, each passing its carry to the next, to add two n-bit numbers. It is simple, but the carry must ripple through every stage, so it gets slower as n grows.',
    'For two’s complement numbers, **overflow** has happened when the carry into the sign bit differs from the carry out of it.',
  ], 'acs-full-adder', 'Full adder: sum is the XOR of all three inputs; carry out is 1 when at least two inputs are 1.',
  ['A full adder with A = 1, B = 1, Cin = 1 gives:', ['S = 1, Cout = 1', 'S = 0, Cout = 1', 'S = 1, Cout = 0', 'S = 0, Cout = 0'], '1 + 1 + 1 = 3 = binary 11.'],
  [['Half adder', 'A circuit adding two bits, giving a sum and a carry.'], ['Full adder', 'A circuit adding two bits and a carry in.'], ['Ripple-carry adder', 'Full adders chained so each carry passes to the next.']],
  [
    { q: 'Complete the half adder truth table.', steps: ['A = 0, B = 0: S 0, C 0. A = 0, B = 1: S 1, C 0.', 'A = 1, B = 0: S 1, C 0.', '**A = 1, B = 1: S 0, C 1.**'] },
    { q: 'Add 0110 and 0111 with a 4-bit ripple-carry adder, showing the carries.', steps: ['Bit 0: 0 + 1 = 1, carry 0. Bit 1: 1 + 1 = 0, carry 1.', 'Bit 2: 1 + 1 + 1 = 1, carry 1. Bit 3: 0 + 0 + 1 = 1, carry 0.', '**1101 = 13, which is 6 + 7.**'] },
    { q: 'How many gates does a 4-bit ripple-carry adder of full adders need?', steps: ['Each full adder has 2 XOR, 2 AND and 1 OR gates: 5 gates.', '4 full adders.', '**20 gates.**'] },
  ]),

  L('acs-logic-3', 'acs-u6-circuits', '8.3', 'Flip-flops, multiplexers, encoders and decoders', 18, ['Logic'], [
    'In a **combinational** circuit the outputs depend only on the inputs now. In a **sequential** circuit they also depend on what is stored; the storing element is the **flip-flop**, which holds one bit.',
    'An **SR latch** is two NOR gates, each feeding back into the other. S = 1 sets Q to 1; R = 1 resets Q to 0; S = R = 0 keeps Q as it was; S = R = 1 is not allowed. A **D flip-flop** copies its input D to Q at the rising edge of the clock and holds it until the next edge; a register is a row of D flip-flops. A **JK flip-flop** also toggles when J = K = 1.',
    'A **multiplexer** chooses one of 2ⁿ inputs using n select lines: a 4-to-1 multiplexer has select lines S1 and S0. A **demultiplexer** sends one input to one of several outputs.',
    'A **decoder** turns an n-bit input into one active output out of 2ⁿ, and is used to pick a memory chip from address bits. An **encoder** does the reverse: it gives the n-bit code of the active input, as when a keypad reports which key is pressed.',
  ], 'acs-flipflop', 'S = R = 0 means "remember". The flip-flop keeps what it last stored.',
  ['A multiplexer with 16 inputs needs:', ['4 select lines', '16 select lines', '2 select lines', '8 select lines'], '2⁴ = 16.'],
  [['Flip-flop', 'A sequential circuit that stores one bit.'], ['Multiplexer', 'A circuit that selects one of several inputs using select lines.'], ['Decoder', 'A circuit with n inputs and 2ⁿ outputs, exactly one of them active.']],
  [
    { q: 'An SR latch starts with Q = 0. Give Q after: S = 1, R = 0; then S = 0, R = 0; then S = 0, R = 1.', steps: ['S = 1 sets Q to 1.', 'S = R = 0 keeps Q at 1: the latch remembers.', '**R = 1 resets Q to 0.**'] },
    { q: 'A 4-to-1 multiplexer has inputs I0 to I3. Which input reaches the output when S1 S0 = 10?', steps: ['10 in binary is 2.', 'The select lines choose input number 2.', '**I2.**'] },
    { q: 'A 3-to-8 decoder receives 101. Which output is active?', steps: ['101 in binary is 5.', 'Exactly one of outputs 0 to 7 is active.', '**Output 5.**'] },
  ]),

  // ---------- 9. Project phase I ----------
  L('acs-proj-1', 'acs-u6-prototype', '9.1', 'Building the back end: tables, data capture and validation', 18, ['Project'], [
    'Turn the normalised design into tables: choose each field’s data type and size, set the primary keys, link the foreign keys with **referential integrity** switched on, and index fields that are searched often. Record all of this in a **data dictionary**.',
    'Design **data capture** to prevent mistakes: drop-down lists for fixed choices, input masks for codes, sensible default values, and importing existing records instead of retyping them.',
    '**Validation** checks that data is sensible: presence, type, range, length, format, lookup and check digit. Each rule needs a clear error message. **Verification** checks that data was copied correctly: double entry, or a visual check against the original document. Neither proves the data is true.',
    'Keep **evidence** as you build: screenshots of the tables, relationships, forms and each validation rule rejecting bad data, and write each step in the project log.',
  ], 'validation-checks', 'Give every field in the data dictionary its validation rule and the message the user will see.',
  ['A mobile number field accepting only 9 digits starting with 6 uses:', ['length and format checks', 'a range check only', 'a presence check only', 'verification'], 'Cameroon mobile numbers have 9 digits.'],
  [['Data dictionary', 'A table describing every field: name, type, size, key and validation.'], ['Referential integrity', 'The rule that every foreign key value matches an existing primary key.'], ['Verification', 'Checking that data was entered exactly as in the source.']],
  [
    { q: 'Write data dictionary rows for STUDENT(StudentID, Name, DateOfBirth, Phone, ClassID).', steps: ['StudentID: text, 6, primary key, format S + 5 digits. Name: text, 40, presence.', 'DateOfBirth: date, range check for a sensible age. Phone: text, 9, length and format (starts with 6).', '**ClassID: text, 4, foreign key to CLASS, lookup check.**'] },
    { q: 'Write a Python function that validates a mark and returns a message.', steps: ['def check_mark(text):\n    if text.strip() == "":\n        return "Enter a mark."', '    if not text.isdigit():\n        return "The mark must be a whole number."', '    if not 0 <= int(text) <= 20:\n        return "The mark must be from 0 to 20."\n    return "OK"\n**Presence, type and range checks, each with its own message.**'] },
  ]),
];
