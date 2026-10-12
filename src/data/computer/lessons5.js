// Computer Science lessons for Form 5, the GCE Ordinary Level year, following the
// 2026/2027 national harmonised scheme of work: information systems and the
// SDLC, system software, databases and SQL, data structures, sorting and
// searching, translation and testing, networks, green computing and ICT law, a
// database project and GCE revision. Original text written for this app.
// **double asterisks** mark key terms. `examples` are worked examples.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Class work',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_5 = [
  // ---------- Information systems ----------
  L('cs-is-f5', 'cs-f5-infosys', '1.1', 'Information systems: components and functions', 10, ['Information systems'], [
    'An **information system (IS)** is an organised way of collecting, processing, storing and distributing data to give useful **information** to the people who need it. A school’s records system, a hospital’s patient records, an electricity company’s billing system and a mobile money service are all information systems.',
    'Every information system has five **components**:\n- **People:** the users and the IT staff who run it.\n- **Hardware:** computers, phones, servers, printers and the network.\n- **Software:** the programs, including the database management system.\n- **Data:** the raw facts the system works on, such as names, marks and payments.\n- **Procedures:** the rules and steps people follow, such as how to enter marks or make a backup.\nIf one component is missing or poor, the whole system suffers: good software with untrained people still gives wrong results.',
    'An information system carries out four **functions**:\n- **Collect** (input): capture data, for example marks typed in by teachers.\n- **Process:** calculate, sort, check and compare, for example averages and positions.\n- **Store:** keep data safely for later use, in a database with backups.\n- **Distribute** (output): give the information to the right people, for example report cards to parents.',
    'Information is only useful if it is **accurate**, **relevant**, **up to date**, **complete** and arrives **on time**. A report card printed after the school year has ended is too late to help.',
    'Common kinds of information system:\n- A **transaction processing system** records day-to-day events, such as each mobile money transfer or each sale at a shop.\n- A **management information system** summarises those records to help managers decide, for example a report of fees still unpaid in each class.',
  ], 'is-components', 'Five components: **P**eople, **H**ardware, **S**oftware, **D**ata, **P**rocedures. Four functions: **collect, process, store, distribute**.',
  ['Which component of an information system are the rules for entering marks?', ['Procedures', 'Hardware', 'Data', 'Software'], 'Procedures are the steps people follow.'],
  [['Information system', 'An organised way of collecting, processing, storing and distributing data to give useful information.'], ['Procedure', 'A set of rules or steps that people follow when using a system.'], ['Transaction processing system', 'A system that records each day-to-day event, such as a sale or a payment.']],
  [
    { q: 'Describe the school report-card system as an information system: name its five components and show its four functions.', steps: ['**Components:** people (teachers, the records officer), hardware (computers, a printer), software (a school management program), data (students’ names, marks), procedures (deadlines and rules for entering marks).', '**Collect:** teachers enter each sequence mark.', '**Process:** the program calculates averages and positions.', '**Store:** the marks are kept in the database and backed up.', '**Distribute:** report cards are printed for students and parents.'] },
  ]),

  L('cs-sdlc-f5', 'cs-f5-infosys', '1.2', 'The system development life cycle', 12, ['Information systems', 'SDLC'], [
    'A new information system is built in stages called the **system development life cycle (SDLC)**. In the traditional (waterfall) approach each stage is finished before the next begins, but the team may go back to an earlier stage when a problem is found.',
    '**1. Feasibility study:** is the new system worth building? It checks five points, remembered as **TELOS**: **T**echnical (can it be built with the technology available?), **E**conomic (do the benefits outweigh the costs?), **L**egal (does it obey the law, for example on personal data?), **O**perational (will people be able and willing to use it?) and **S**chedule (can it be ready in time?).',
    '**2. Analysis:** the analyst studies the present system and the users’ needs. Fact-finding methods are:\n- **interviews** with key users\n- **questionnaires** for many users\n- **observation** of people at work\n- **inspecting documents** such as forms and reports.\nThe result is a list of **requirements**: what the new system must do.',
    '**3. Design:** plans how the system will meet the requirements: the inputs (forms and screens), the outputs (reports), the data structures (tables, fields, keys), the processes (algorithms) and the security.',
    '**4. Implementation:** the system is programmed, the hardware is installed, data is moved across and users are trained. Then the old system is replaced by one of four **changeover** methods:\n- **Direct:** the old system stops and the new one starts at once. Quick and cheap, but risky.\n- **Parallel:** both run together for a time. Safe, but double work.\n- **Phased:** the new system replaces the old part by part.\n- **Pilot:** one department or branch tries it first.',
    '**5. Testing:** checks that the system works and meets the requirements, using normal, extreme and abnormal test data.\n**6. Maintenance:** keeps the system working:\n- **corrective** maintenance fixes errors found in use\n- **adaptive** maintenance changes it for new needs, laws or hardware\n- **perfective** maintenance makes it faster or easier to use.',
    'Throughout, **documentation** is written: **user documentation** (how to use the system, for its users) and **technical documentation** (how it works, for the programmers who will maintain it).',
  ], 'sdlc-cycle', 'Changeover: **direct** = fast but risky; **parallel** = safest but costly; **phased** = part by part; **pilot** = one place first.',
  ['Which changeover method is safest for a hospital’s patient records?', ['Parallel', 'Direct', 'None', 'Random'], 'The old system is still there if the new one fails.'],
  [['SDLC', 'System development life cycle: the stages of building a new system.'], ['Feasibility study', 'The study that decides whether a new system is worth building.'], ['Changeover', 'The way the old system is replaced by the new one.'], ['Adaptive maintenance', 'Changing a system to meet new needs, laws or hardware.']],
  [
    { q: 'A secondary school in Bamenda wants to replace its paper fee records with a computer system. Suggest a fact-finding method for the bursar and one for all the parents, and a changeover method, with reasons.', steps: ['**Bursar:** an **interview**, because one person knows the details of the present system.', '**Parents:** a **questionnaire**, because there are hundreds of them and their answers can be counted.', '**Changeover:** **parallel**, keeping the paper records for one term, because fee records must not be lost if the new system has errors.'] },
  ]),

  // ---------- System software ----------
  L('cs-syssoft-f5', 'cs-f5-system', '2.1', 'System software and application software', 9, ['Software'], [
    '**System software** runs and looks after the computer itself, so that application software can work. It includes:\n- the **operating system**, such as Windows, Linux or Android\n- **utility programs**: antivirus, backup, disk clean-up, file compression\n- **translators**: compilers, interpreters and assemblers\n- **device drivers**, which let the operating system control hardware.\nThe start-up program stored in ROM is **firmware**.',
    '**Application software** does the user’s own tasks:\n- **General-purpose** software can be used for many jobs: word processors, spreadsheets, presentation software, web browsers, database programs.\n- **Special-purpose** software does one kind of job: a payroll program, a school management system, a mobile money app, a game.',
    'Application software can be **off-the-shelf** or **bespoke**:\n- **Off-the-shelf** software is made for many customers. It is cheaper, available at once, well tested and supported, but it may not fit the organisation’s needs exactly.\n- **Bespoke** (custom-made) software is written for one organisation. It does exactly what is needed, but it costs more, takes longer to produce and may contain more undiscovered errors.',
  ], 'compile-chain', 'System software runs **the computer**; application software does **your task**.',
  ['A school orders a program written only for its own timetable. This is:', ['Bespoke software', 'Off-the-shelf software', 'A utility', 'An operating system'], 'It is made to order for one customer.'],
  [['System software', 'Software that runs and maintains the computer itself.'], ['Utility program', 'A program that helps maintain the computer, such as antivirus or backup.'], ['Bespoke software', 'Software written specially for one organisation.'], ['Off-the-shelf software', 'Software made for many customers and sold ready to use.']],
  [
    { q: 'Give two advantages and one disadvantage of off-the-shelf software for a small shop.', steps: ['**Advantage:** it is **cheaper**, because the cost is shared by many buyers.', '**Advantage:** it is **available immediately** and has been tested by many users.', '**Disadvantage:** it may have features the shop does not need, or lack one it does.'] },
  ]),

  L('cs-oscore-f5', 'cs-f5-system', '2.2', 'Inside the operating system', 11, ['Operating systems'], [
    'The **operating system (OS)** manages the computer’s resources and gives the user and the programs a way to use them. Its central part, always kept in memory, is the **kernel**, which controls the processor, memory and devices.',
    '**Memory management:**\n- The OS gives each running program its own part of RAM and stops programs from overwriting each other.\n- It takes the memory back when a program closes.\n- When RAM is full, it uses **virtual memory**: part of the disk acts as extra RAM. Memory is divided into equal blocks called **pages**, which are moved between RAM and disk as needed. Too much of this swapping makes the computer slow.',
    '**Process management:** a **process** is a program that is running. A single processor core runs only one process at a time, but the OS **schedules** them so quickly that they seem to run together (**multitasking**).\n- In **round robin** scheduling each process gets a short **time slice** in turn.\n- In **priority** scheduling, urgent processes go first.',
    '**Interrupts:** an **interrupt** is a signal that makes the processor pause its work to deal with an event, then return to it. Examples are a key being pressed, a printer running out of paper, a timer, or an error such as dividing by zero. The OS runs a short **interrupt service routine** for each kind.',
    'Other jobs of the operating system:\n- **Device management:** through **drivers**, and by **spooling** print jobs into a queue on the disk so the user can keep working.\n- **File management:** creating, naming, saving, copying and deleting files in folders.\n- **Security:** user accounts, passwords and access rights.\n- **User interface:** a **command-line interface** (typed commands) or a **graphical user interface** (windows, icons, menus and a pointer).',
    'Kinds of operating system include **single-user multitasking** (a laptop), **multi-user** (a server shared by many), **real-time** (responding at once, as in traffic lights or an aircraft), **embedded** (in a washing machine or a smart meter) and **mobile** (Android, iOS).',
  ], 'os-roles', 'The OS is a manager: **memory, processes, devices, files, security** and the **user interface**.',
  ['A printer runs out of paper while printing. What tells the processor?', ['An interrupt', 'A compiler', 'A database', 'A trace table'], 'The interrupt makes the OS show a message.'],
  [['Kernel', 'The core of the operating system that controls the hardware.'], ['Process', 'A program that is being run.'], ['Interrupt', 'A signal that makes the processor pause to deal with an event.'], ['Spooling', 'Holding jobs, such as print jobs, in a queue on disk until a device is ready.'], ['Virtual memory', 'Part of the disk used as extra RAM.']],
  [
    { q: 'Explain how a single-core processor seems to play music while a student types an essay.', steps: ['Both programs are **processes**.', 'The operating system gives each one a short **time slice** of the processor in turn (**round robin**).', 'The switching happens many times a second, so both seem to run at the same time: this is **multitasking**.'] },
  ]),

  // ---------- Databases ----------
  L('cs-db-f5', 'cs-f5-databases', '3.1', 'Relational databases, fields and keys', 11, ['Databases'], [
    'A **database** is an organised collection of related data, stored so that it can be searched, sorted and updated easily. It is managed by a **database management system (DBMS)**, such as Microsoft Access, LibreOffice Base or MySQL.',
    'Keeping data in separate files (**flat files**) causes problems. The same data is stored many times (**redundancy**), and copies can disagree (**inconsistency**), for example a student’s class changed in one file but not in another.',
    'A **relational database** stores data in **tables** (relations) that are linked by keys. Each data item is stored only once, which saves space and keeps the data **consistent**.\n- A **record** (row) holds all the data about one item, such as one student.\n- A **field** (column) holds one kind of data, such as Name.\n- Each field has a **data type**: text, integer, real (decimal), Boolean (yes or no), date or currency.',
    'Keys:\n- The **primary key** is a field whose value is different in every record, so it identifies each record, such as StudentID.\n- A **foreign key** is a field in one table that is the primary key of another table. It **links** the tables, such as ClassID in the STUDENT table.\n- A **composite key** is a primary key made of two or more fields together, such as StudentID and SubjectID in a table of marks.',
    '**Referential integrity** means every foreign key value must match an existing primary key. A database with this rule will not let you give a student a class that does not exist.',
    'Advantages of a database:\n- less repeated data and fewer inconsistencies\n- data shared by many users at once\n- powerful searching with queries\n- security through passwords and access rights\n- easier backups.',
  ], 'db-table', 'Primary key = **identifies** a record. Foreign key = **links** to another table.',
  ['In a STUDENT table, ClassID is the primary key of the CLASS table. In STUDENT it is a:', ['Foreign key', 'Primary key', 'Composite key', 'Record'], 'It links each student to a class.'],
  [['Database', 'An organised collection of related data that can be searched and updated.'], ['Primary key', 'A field whose value identifies each record uniquely.'], ['Foreign key', 'A field that is the primary key of another table, used to link tables.'], ['Redundancy', 'The same data stored more than once.'], ['Referential integrity', 'The rule that every foreign key must match an existing primary key.']],
  [
    { q: 'Choose a suitable data type for each field: StudentID (S001), DateOfBirth, FeesPaid (in FCFA), IsBoarder.', steps: ['StudentID: **text**, because it contains a letter.', 'DateOfBirth: **date**.', 'FeesPaid: **currency** or **integer** (FCFA has no decimal part).', 'IsBoarder: **Boolean**, because it is yes or no.'] },
  ]),

  L('cs-erd-f5', 'cs-f5-databases', '3.2', 'Entity-relationship diagrams', 11, ['Databases', 'Design'], [
    'Before building tables, a designer draws an **entity-relationship diagram (ERD)**.\n- An **entity** is a thing about which data is stored, such as STUDENT, CLASS or SUBJECT. Each entity becomes a table.\n- An **attribute** is a property of an entity, such as Name or DateOfBirth. Each attribute becomes a field.\n- A **relationship** shows how entities are linked.',
    'There are three kinds of relationship:\n- **One-to-one (1:1):** one student has one school identity card.\n- **One-to-many (1:M):** one class has many students, but each student is in one class.\n- **Many-to-many (M:N):** one student takes many subjects, and each subject is taken by many students.',
    'In the usual notation, a relationship is a line between the entity boxes. A single bar marks the **"one"** end and a **crow’s foot** (three short lines) marks the **"many"** end.',
    'A relational database cannot store a many-to-many relationship directly. It is broken into **two one-to-many relationships** through a new **link entity**. STUDENT and SUBJECT are joined through ENROLMENT, which holds StudentID and SubjectID as foreign keys, together with data that belongs to the pair, such as the Mark.',
    'To draw an ERD:\n- List the entities in the problem (the nouns are often the entities).\n- Give each one its attributes and choose its primary key.\n- Decide each relationship and its type.\n- Resolve any many-to-many relationship with a link entity.\n- Add the foreign keys at the "many" ends.',
  ], 'erd-school', 'The foreign key always goes in the table at the **many** end of a relationship.',
  ['Students take many subjects; each subject has many students. How is this stored?', ['With a link table holding both keys', 'In one table with repeated fields', 'It cannot be stored', 'With a foreign key in SUBJECT only'], 'The link table turns M:N into two 1:M relationships.'],
  [['Entity', 'A thing about which data is stored; it becomes a table.'], ['Attribute', 'A property of an entity; it becomes a field.'], ['One-to-many', 'A relationship in which one item is linked to many others.'], ['Link entity', 'An entity that breaks a many-to-many relationship into two one-to-many relationships.']],
  [
    { q: 'A clinic records DOCTORS and PATIENTS. A doctor sees many patients and a patient may see many doctors, each time on a date. Design the entities.', steps: ['The relationship DOCTOR to PATIENT is **many-to-many**.', 'Add a link entity **APPOINTMENT**.', 'DOCTOR(DoctorID PK, Name, Speciality); PATIENT(PatientID PK, Name, Phone).', 'APPOINTMENT(AppointmentID PK, DoctorID FK, PatientID FK, Date, Time).', 'DOCTOR 1 to many APPOINTMENT; PATIENT 1 to many APPOINTMENT.'] },
  ]),

  // ---------- SQL and validation ----------
  L('cs-sql-f5', 'cs-f5-sql', '4.1', 'Structured Query Language (SQL)', 12, ['Databases', 'SQL'], [
    '**SQL** (Structured Query Language) is the standard language for creating and using relational databases. Its commands are written in capitals by custom, and each statement ends with a semicolon.',
    '**CREATE TABLE** makes a table, giving each field and its data type and naming the primary key:\nCREATE TABLE Students (\n    StudentID VARCHAR(4) PRIMARY KEY,\n    Name VARCHAR(40),\n    ClassID VARCHAR(4),\n    Mark INTEGER\n);\nVARCHAR(40) means text of up to 40 characters.',
    '**INSERT INTO** adds a record. The values are given in the same order as the fields, and text is written in single quotes:\nINSERT INTO Students VALUES (\'S001\', \'Ngono Marie\', \'F5A\', 14);',
    '**SELECT** finds data. Its parts are:\n- **SELECT** the fields to show. An asterisk (*) means every field.\n- **FROM** the table.\n- **WHERE** a condition, using = <> < > <= >= and the words AND, OR and NOT.\n- **ORDER BY** a field, **ASC** (ascending, the default) or **DESC** (descending).\nFor example: SELECT Name, Mark FROM Students WHERE ClassID = \'F5A\' AND Mark >= 10 ORDER BY Mark DESC;',
    'Two more commands change data:\n- **UPDATE** Students SET Mark = 15 WHERE StudentID = \'S003\'; changes one student’s mark.\n- **DELETE FROM** Students WHERE StudentID = \'S009\'; removes one record.\nAlways include WHERE with UPDATE and DELETE: without it, **every** record is changed or deleted.',
  ], 'sql-query', 'Order of a query: **SELECT** fields, **FROM** table, **WHERE** condition, **ORDER BY** field.',
  ['Which query lists the names of Form 5A students in alphabetical order?', ["SELECT Name FROM Students WHERE ClassID = 'F5A' ORDER BY Name ASC;", 'SELECT Students FROM Name ORDER BY F5A;', "INSERT INTO Students WHERE ClassID = 'F5A';", "CREATE TABLE Name WHERE ClassID = 'F5A';"], 'SELECT the field, FROM the table, WHERE the condition, ORDER BY the field.'],
  [['SQL', 'Structured Query Language, used to create and query relational databases.'], ['Query', 'A request for data that meets given conditions.'], ['WHERE', 'The part of a query that keeps only the records meeting a condition.'], ['ORDER BY', 'The part of a query that sorts the results.']],
  [
    { q: 'Write a query to show the Name and Mark of every student who scored below 10, lowest mark first.', steps: ['SELECT Name, Mark', 'FROM Students', 'WHERE Mark < 10', 'ORDER BY Mark ASC;'] },
    { q: 'Write an SQL statement to add the student S004, Abena Grace, in F5B, with a mark of 11.', steps: ["INSERT INTO Students VALUES ('S004', 'Abena Grace', 'F5B', 11);", 'The text values are in single quotes; the number 11 is not.'] },
  ]),

  L('cs-validate-f5', 'cs-f5-sql', '4.2', 'Data capture, verification and validation', 10, ['Databases', 'Data quality'], [
    'Data must be **captured** before it can be processed:\n- **Manual** capture: typing on a keyboard, often from paper forms.\n- **Automatic** capture: **OMR** reads shaded marks, as on GCE multiple-choice answer sheets; **OCR** turns printed text into editable text; **barcode** and **QR code** readers; **RFID** tags; **MICR** reads the magnetic numbers on cheques; and **sensors**.\nAutomatic methods are faster and make fewer mistakes.',
    'When data is typed, two common mistakes are **transcription errors** (a wrong character, such as 0 for O) and **transposition errors** (characters swapped, such as 72 for 27).',
    '**Verification** checks that data has been **copied correctly** from its source:\n- **Double entry:** the data is typed twice and the computer compares the two.\n- **Visual check** (proofreading): the data on screen is compared with the original.',
    '**Validation** is done automatically by the program and checks that data is **sensible**:\n- **Range check:** a mark is between 0 and 20.\n- **Type check:** an age is a number.\n- **Length check:** a Cameroon mobile number has 9 digits.\n- **Presence check:** the name is not left empty.\n- **Format check:** a date is written DD/MM/YYYY.\n- **Lookup (list) check:** the class is one of F5A, F5B or F5C.\n- **Check digit:** the last digit of a barcode or ISBN is calculated from the other digits, so most typing mistakes are detected.',
    'Validation cannot prove that data is **correct**, only that it is **reasonable**. A mark of 12 passes the range check even if the real mark was 15. That is why verification and validation are used together.',
  ], 'validation-checks', '**Verification**: copied correctly? **Validation**: sensible? You need both.',
  ['A student’s mark of 17 is typed as 71. Which check catches it?', ['A range check (0 to 20)', 'A presence check', 'A type check', 'A length check of 2 digits'], '71 is outside the allowed range.'],
  [['Verification', 'Checking that data has been copied correctly from its source.'], ['Validation', 'Automatic checks that data is sensible and reasonable.'], ['Transposition error', 'A mistake in which two characters are swapped.'], ['Check digit', 'A digit calculated from the others and added to a code, to detect errors.'], ['OMR', 'Optical mark recognition: reading shaded marks on a form.']],
  [
    { q: 'Suggest a validation check for each field of a registration form: Phone (6XX XXX XXX), Class, Age (11 to 25), Name.', steps: ['**Phone:** length check (9 digits) and format check (starts with 6).', '**Class:** lookup check against the list of classes.', '**Age:** range check, 11 to 25, and type check (a number).', '**Name:** presence check.'] },
  ]),

  // ---------- Data structures ----------
  L('cs-arrays-f5', 'cs-f5-structures', '5.1', 'One- and two-dimensional arrays', 11, ['Data structures', 'Arrays'], [
    'An **array** is a set of data items of the **same type**, stored under **one name**, each found by its position, the **index**. Instead of 40 separate variables for 40 marks, one array holds them all.',
    'In pseudocode an array is often declared with its first and last index:\nDECLARE Marks : ARRAY[1:40] OF INTEGER\nMarks[3] is the third mark. Some languages start counting at 0 instead: in **Python** the first item of a list is marks[0]. Always check where the indexes start.',
    'Arrays and FOR loops go together. To find the total and the highest mark:\ntotal ← 0\nhighest ← Marks[1]\nFOR i ← 1 TO 40\n    total ← total + Marks[i]\n    IF Marks[i] > highest THEN highest ← Marks[i] ENDIF\nNEXT i\naverage ← total / 40',
    'A **two-dimensional (2D) array** stores data in **rows and columns**, like a table. Marks[2, 3] (or marks[2][3]) is the item in row 2, column 3. For example, each row can be a student and each column a test. To visit every item you need **nested loops**: an outer loop for the rows and an inner loop for the columns.',
  ], 'array-2d', 'One loop for a 1D array; **two nested loops** for a 2D array.',
  ['In Python, marks = [12, 15, 9]. What is marks[1]?', ['15', '12', '9', 'An error'], 'Python counts from 0, so marks[1] is the second item.'],
  [['Array', 'A set of items of the same type stored under one name and found by an index.'], ['Index', 'The position number of an item in an array.'], ['2D array', 'An array of rows and columns, like a table.'], ['Nested loop', 'A loop inside another loop.']],
  [
    { q: 'Marks[1:3, 1:3] holds the marks of 3 students (rows) in 3 tests (columns). Write pseudocode to output each student’s average.', steps: ['FOR row ← 1 TO 3', '    total ← 0', '    FOR col ← 1 TO 3', '        total ← total + Marks[row, col]', '    NEXT col', '    OUTPUT total / 3', 'NEXT row', 'total is set back to 0 for each student, inside the outer loop.'] },
  ]),

  L('cs-adt-f5', 'cs-f5-structures', '5.2', 'Stacks, queues and linked lists', 11, ['Data structures'], [
    'An **abstract data type (ADT)** is a way of organising data together with the operations allowed on it. Three important ones are the stack, the queue and the linked list.',
    'A **stack** is **last in, first out (LIFO)**, like a pile of plates.\n- **Push** adds an item to the top; **pop** removes the item at the top.\n- A **top pointer** shows where the top is.\n- Pushing onto a full stack causes **overflow**; popping from an empty stack causes **underflow**.\n- Uses: the **Undo** button, the browser’s **Back** button, and keeping track of procedure calls in a running program.',
    'A **queue** is **first in, first out (FIFO)**, like people waiting at a bank counter.\n- Items are added at the **rear** (enqueue) and removed from the **front** (dequeue).\n- **Front** and **rear pointers** show the two ends.\n- Uses: documents waiting for a **printer**, the **keyboard buffer**, and processes waiting for the CPU.',
    'A **linked list** stores items in **nodes**. Each node holds the **data** and a **pointer** to the next node. A **start pointer** shows the first node, and the last node’s pointer is **null**. To insert an item in order, only the pointers need to change: no other items have to be moved, as they would in an array.',
  ], 'stack-queue', 'Stack = **LIFO**, push and pop at the top. Queue = **FIFO**, join at the rear, leave from the front.',
  ['Which structure suits the Undo button of a word processor?', ['A stack', 'A queue', 'A 2D array', 'A linked list of pictures'], 'The last action done is the first one undone.'],
  [['Stack', 'A last-in, first-out structure; items are pushed and popped at the top.'], ['Queue', 'A first-in, first-out structure; items join at the rear and leave from the front.'], ['Pointer', 'A value that shows where another item is stored.'], ['Overflow', 'Trying to add an item to a full structure.'], ['Underflow', 'Trying to remove an item from an empty structure.']],
  [
    { q: 'An empty stack receives: push 4, push 7, pop, push 2, push 9, pop. What is on the stack, and what is at the top?', steps: ['push 4: [4]', 'push 7: [4, 7]', 'pop removes 7: [4]', 'push 2: [4, 2]; push 9: [4, 2, 9]', 'pop removes 9: [4, 2]', 'The stack holds **4 and 2**, with **2 at the top**.'] },
  ]),

  // ---------- Sorting and searching ----------
  L('cs-sort-f5', 'cs-f5-algorithms', '6.1', 'Sorting: bubble sort and selection sort', 12, ['Algorithms', 'Sorting'], [
    'Sorting puts items in order, **ascending** (smallest first) or **descending**. Sorted data is easier to read and can be searched with a fast binary search.',
    '**Bubble sort** goes through the list comparing each pair of **neighbours**, and **swaps** them if they are in the wrong order. One complete run through the list is a **pass**. After each pass, the largest remaining item has "bubbled" to its place at the end. The passes are repeated until a pass makes **no swaps**:\nREPEAT\n    swapped ← FALSE\n    FOR i ← 1 TO n − 1\n        IF List[i] > List[i + 1] THEN\n            temp ← List[i]\n            List[i] ← List[i + 1]\n            List[i + 1] ← temp\n            swapped ← TRUE\n        ENDIF\n    NEXT i\nUNTIL swapped = FALSE',
    'Note the variable **temp**: to swap two values you must keep one of them safely first, or it is lost.',
    '**Selection sort** finds the **smallest** item in the unsorted part of the list and swaps it into the first unsorted position. The sorted part grows from the left by one item each pass.',
    'Both are simple, but slow for long lists: for n items they can need about n × n comparisons. Faster methods exist, but bubble sort and selection sort are the ones to trace in the GCE.',
  ], 'bubble-sort', 'Bubble sort: compare **neighbours**, swap, repeat **until a pass makes no swap**.',
  ['Why does the swap use a variable called temp?', ['To keep one value safe while the other is copied over it', 'To count the passes', 'To store the list length', 'To print the list'], 'Without it one of the two values would be lost.'],
  [['Bubble sort', 'A sort that compares neighbouring items and swaps them when out of order.'], ['Selection sort', 'A sort that repeatedly moves the smallest unsorted item into place.'], ['Pass', 'One complete run through the list.'], ['Swap', 'Exchanging the places of two items.']],
  [
    { q: 'Show each pass of a bubble sort on 5, 3, 8, 1 (ascending).', steps: ['Pass 1: 3, 5, 1, 8 (swaps: 5 and 3, then 8 and 1).', 'Pass 2: 3, 1, 5, 8 (swap: 5 and 1).', 'Pass 3: 1, 3, 5, 8 (swap: 3 and 1).', 'Pass 4: no swaps, so the sort stops. Result: **1, 3, 5, 8**.'] },
    { q: 'Show selection sort on 5, 3, 8, 1.', steps: ['Smallest of all is 1: swap with 5 → 1, 3, 8, 5.', 'Smallest of 3, 8, 5 is 3: already in place → 1, 3, 8, 5.', 'Smallest of 8, 5 is 5: swap with 8 → **1, 3, 5, 8**.'] },
  ]),

  L('cs-search-f5', 'cs-f5-algorithms', '6.2', 'Searching: linear search and binary search', 11, ['Algorithms', 'Searching'], [
    '**Linear search** checks the items **one by one** from the start until the item is found or the list ends. It works on **any** list, sorted or not, but it is slow for long lists: for 1 000 items it may make 1 000 comparisons.\nfound ← FALSE\ni ← 1\nWHILE found = FALSE AND i <= n DO\n    IF List[i] = target THEN found ← TRUE\n    ELSE i ← i + 1\n    ENDIF\nENDWHILE',
    '**Binary search** works only on a **sorted** list. It looks at the **middle** item:\n- If it is the target, the search ends.\n- If the target is **smaller**, the right half is thrown away.\n- If the target is **larger**, the left half is thrown away.\nIt repeats on the half that is left. The positions are kept in **low** and **high**, and the middle is mid ← (low + high) DIV 2. If low becomes greater than high, the item is **not in the list**.',
    'Each comparison **halves** the list, so binary search is very fast: 1 000 items need at most about 10 comparisons, because 2 to the power 10 is 1 024. One million items need only about 20.',
    'Choose the method: for a short or unsorted list use linear search; for a long, sorted list, such as the candidates of a national examination listed by number, use binary search.',
  ], 'binary-search', 'Binary search: list must be **sorted**; look at the **middle**; throw away **half** each time.',
  ['Why can binary search not be used on an unsorted list?', ['It decides which half to discard by comparing with the middle, which only works if the list is in order', 'It is too slow', 'It only works with text', 'It needs exactly 10 items'], 'In an unsorted list the target could be in either half.'],
  [['Linear search', 'A search that checks every item in turn from the start.'], ['Binary search', 'A search of a sorted list that halves the part searched at each step.'], ['DIV', 'Whole-number division, used to find the middle position.']],
  [
    { q: 'Use binary search to look for 8 in 3, 7, 11, 15, 19, 24, 30, 36, 41 (indexes 0 to 8).', steps: ['low 0, high 8, mid 4: 19. 8 < 19, so high ← 3.', 'low 0, high 3, mid 1: 7. 8 > 7, so low ← 2.', 'low 2, high 3, mid 2: 11. 8 < 11, so high ← 1.', 'Now low (2) > high (1): **8 is not in the list**, found after only 3 comparisons.'] },
  ]),

  L('cs-dryrun-f5', 'cs-f5-algorithms', '6.3', 'Dry-running algorithms with arrays', 11, ['Algorithms', 'Exam skills'], [
    'Many GCE questions give an algorithm, as pseudocode or a flowchart, and ask what it does. You answer by **dry-running** it with a **trace table**.',
    'For algorithms with arrays, give the trace table a column for the **loop counter**, one for the **array item** being looked at, one for each **other variable**, and one for the **output**. Read the item from the array using the current value of the counter.',
    'For a **flowchart**:\n- Start at the Start terminal and follow the arrows.\n- At each **decision** diamond, work out the condition with the current values and take the Yes or No path.\n- A path that goes back up the chart is a **loop**: keep going round until the decision lets you out.',
    'After the trace, say in words **what the algorithm does**, for example "it finds the highest mark and the position of the first student who got it". Examiners often ask for this purpose as well as the output.',
  ], 'trace-table', 'Trace with columns for **i**, **List[i]**, every variable and the **output**. Then state the **purpose**.',
  ['After tracing an algorithm, examiners often also ask you to:', ['State its purpose in words', 'Rewrite it in another language', 'Count its lines', 'Draw its hardware'], 'Show you understand what the steps achieve.'],
  [['Dry run', 'Working through an algorithm by hand to find what it does.'], ['Purpose', 'What an algorithm achieves, described in words.']],
  [
    { q: 'Trace: Marks = [12, 17, 9, 17] (indexes 1 to 4). max ← Marks[1]; pos ← 1; FOR i ← 2 TO 4: IF Marks[i] > max THEN max ← Marks[i]; pos ← i ENDIF; NEXT i; OUTPUT max, pos.', steps: ['Start: max = 12, pos = 1.', 'i = 2: Marks[2] = 17 > 12, so max = 17, pos = 2.', 'i = 3: Marks[3] = 9, not > 17: no change.', 'i = 4: Marks[4] = 17, not > 17 (equal): no change.', 'Output: **17, 2**. Purpose: it finds the highest mark and the position of the **first** student with that mark.'] },
  ]),

  // ---------- Programming ----------
  L('cs-exec-f5', 'cs-f5-programming', '7.1', 'From source code to a running program', 10, ['Programming', 'Translators'], [
    'A program goes through several stages between being typed and being run:\n- The programmer writes **source code** in a high-level language.\n- A **compiler** translates the whole program into **object code** (machine code), or an **interpreter** translates and runs it line by line.\n- A **linker** joins the object code with code from **libraries**, such as ready-made routines for maths or printing, into one executable program.\n- A **loader** copies the program into RAM.\n- The **CPU** runs the machine code instructions with the fetch-decode-execute cycle.',
    'Errors can appear at each stage: **syntax errors** during translation, **linking errors** if a library routine cannot be found, and **runtime** or **logic** errors while the program runs.',
    '**Python** is usually described as interpreted. In fact it first compiles the source code into an intermediate form called **bytecode**, which the Python interpreter (a virtual machine) then runs. This is why a Python program can run on any computer that has Python installed.',
    'Compiler or interpreter? A **compiler** gives a fast, stand-alone program and hides the source code, which suits software for sale. An **interpreter** shows errors one at a time and lets you test small parts quickly, which suits learning and development.',
  ], 'compile-chain', 'Source code → **translator** → object code → **linker** → **loader** → the **CPU** runs it.',
  ['Which program joins object code with library routines?', ['The linker', 'The loader', 'The editor', 'The interpreter'], 'The loader then places the program in RAM.'],
  [['Object code', 'The machine code produced by translating source code.'], ['Linker', 'A program that joins object code and library code into one executable program.'], ['Loader', 'A program that copies an executable program into memory to run.'], ['Library', 'A collection of ready-made routines that programs can use.'], ['Bytecode', 'An intermediate code, such as Python’s, run by a virtual machine.']],
  [
    { q: 'A program fails with the message "undefined reference to sqrt". At which stage did it fail, and why?', steps: ['The program was translated, so it is **not** a syntax error.', 'The routine sqrt is in a maths **library** that the **linker** could not find.', 'So the failure is a **linking error**: the library must be added when the program is built.'] },
  ]),

  L('cs-pylists-f5', 'cs-f5-programming', '7.2', 'Coding with arrays: Python lists and Flowgorithm', 12, ['Programming', 'Python'], [
    'In Python an array is written as a **list**:\n- marks = [12, 15, 9] makes a list; marks[0] is 12, the first item.\n- len(marks) gives the number of items, 3.\n- marks.append(14) adds an item at the end.\n- sum(marks) and max(marks) give the total and the highest value.\n- A **2D list** is a list of lists: grid = [[1, 2], [3, 4]], and grid[1][0] is 3.',
    'Two ways to loop through a list:\n- for m in marks: takes each value in turn.\n- for i in range(len(marks)): takes each index in turn, so marks[i] can be read or changed.',
    'Translating pseudocode into Python needs care: pseudocode arrays often start at 1, Python lists at 0; ← becomes =; IF ... THEN ... ENDIF becomes if ...: with an indented block; OUTPUT becomes print().',
    '**Flowgorithm** is a free program in which you build a program by placing **flowchart shapes**: input, output, assign, if, while and for. You can **run** the flowchart, watch the variables change, and see the same program written in Python and other languages. It is a good bridge from flowcharts to real code.',
  ], 'python-if', 'Pseudocode Marks[1] is usually Python **marks[0]**: lists start at **0**.',
  ['What does len([4, 8, 15, 16]) return?', ['4', '16', '3', '43'], 'len gives the number of items.'],
  [['List', 'Python’s ordered collection of items, used as an array.'], ['append', 'A list method that adds an item at the end.'], ['Flowgorithm', 'A program for building and running programs as flowcharts.']],
  [
    { q: 'Write Python that reads 5 marks into a list and prints the marks above the average.', steps: ['marks = []', 'for i in range(5):', '    marks.append(float(input("Mark: ")))', 'average = sum(marks) / len(marks)', 'for m in marks:', '    if m > average:', '        print(m)', 'The average is found only after all 5 marks are in the list.'] },
  ]),

  L('cs-testing-f5', 'cs-f5-programming', '7.3', 'Testing strategies: white-box and black-box', 10, ['Programming', 'Testing'], [
    '**White-box testing** (structural testing) is done by someone who can **see the code**, usually the programmer. Tests are chosen so that **every path**, branch and loop is tried at least once. Dry runs with trace tables are a form of white-box testing.',
    '**Black-box testing** (functional testing) treats the program as a closed box: the tester gives **inputs** and checks that the **outputs** are what the specification says, without looking at the code.',
    'Programs are tested at several levels:\n- **Unit testing:** each module on its own.\n- **Integration testing:** modules working together.\n- **System testing:** the whole system.\n- **Alpha testing:** by staff of the company that wrote the software.\n- **Beta testing:** by selected real users outside the company, before release.\n- **Acceptance testing:** by the client, to agree that the system meets the requirements.',
    'Test data comes in three kinds (Form 4 used the words boundary and erroneous for the last two):\n- **Normal** (realistic) data: typical valid values.\n- **Extreme** (boundary) data: valid values at the very edges of the range.\n- **Abnormal** (erroneous) data: invalid values that must be rejected.',
  ], 'box-testing', 'White-box: **see the code**, test every path. Black-box: **inputs and outputs** against the specification.',
  ['A teacher tests a marks program by typing marks and checking the report, without seeing the code. This is:', ['Black-box testing', 'White-box testing', 'Linking', 'Compiling'], 'Only inputs and outputs are checked.'],
  [['White-box testing', 'Testing with knowledge of the code, trying every path.'], ['Black-box testing', 'Testing inputs and outputs against the specification without seeing the code.'], ['Beta testing', 'Testing by real users outside the company before release.'], ['Acceptance testing', 'Testing by the client to agree the system meets the requirements.']],
  [
    { q: 'Write a black-box test plan for a field that accepts a mark from 0 to 20.', steps: ['Test 1, normal: 13. Expected: accepted.', 'Test 2, extreme: 0. Expected: accepted.', 'Test 3, extreme: 20. Expected: accepted.', 'Test 4, abnormal: 21. Expected: rejected with a message.', 'Test 5, abnormal: "twelve". Expected: rejected with a message.'] },
  ]),

  // ---------- Networks ----------
  L('cs-osi-f5', 'cs-f5-networks', '8.1', 'The OSI and TCP/IP models, packets and routing', 12, ['Networks', 'Protocols'], [
    'Network communication is a big job, so it is split into **layers**. Each layer does one part of the work and serves the layer above it. Hardware and software from different makers can then work together, and one layer can change without changing the others.',
    'The **OSI model** has seven layers, from the top:\n- **7 Application:** services for user programs, such as web (HTTP), e-mail (SMTP) and file transfer (FTP).\n- **6 Presentation:** formats the data, and encrypts and compresses it.\n- **5 Session:** opens, manages and closes a conversation between two computers.\n- **4 Transport:** splits data into segments and makes sure they all arrive (TCP).\n- **3 Network:** gives logical (IP) addresses and chooses routes.\n- **2 Data link:** sends frames between neighbouring devices using MAC addresses, and detects errors.\n- **1 Physical:** sends the bits as electrical, light or radio signals.\nA way to remember them from 7 down to 1: **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing.',
    'The Internet uses the simpler **TCP/IP model** of four layers: **application** (OSI 5 to 7), **transport** (OSI 4), **internet** (OSI 3) and **network access** (OSI 1 and 2).',
    'Data is sent in **packets**. Each packet has:\n- a **header**: the source and destination IP addresses and the packet number\n- a **payload**: a piece of the data\n- a **trailer**: an error check such as a checksum.',
    'In **packet switching**, the packets of one message travel separately. **Routers** read each header and forward the packet towards its destination, hop by hop, using a **routing table**. Routing protocols, such as RIP and OSPF, help routers choose good routes. Packets may take different routes and arrive out of order; the receiver puts them back in order by their numbers and asks again for any that are missing or damaged. A traditional telephone call used **circuit switching** instead: one fixed path was reserved for the whole call.',
  ], 'osi-tcpip', 'OSI, top to bottom: **All People Seem To Need Data Processing** (7 to 1).',
  ['In which OSI layer are IP addresses used and routes chosen?', ['Network (layer 3)', 'Physical (layer 1)', 'Session (layer 5)', 'Presentation (layer 6)'], 'Routers work at the network layer.'],
  [['OSI model', 'A seven-layer model of network communication.'], ['TCP/IP model', 'The four-layer model used on the Internet.'], ['Packet switching', 'Sending data as separate packets that may take different routes.'], ['Router', 'A device that forwards packets between networks towards their destination.'], ['Checksum', 'A value calculated from data, used to detect errors.']],
  [
    { q: 'Explain how a photo sent from Bafoussam to Yaoundé travels by packet switching.', steps: ['The photo is split into numbered **packets**, each with a **header** holding the destination IP address.', '**Routers** forward each packet towards Yaoundé; packets may take **different routes**.', 'At the destination the packets are **reordered by number**, checked with the trailer’s **checksum**, and any missing ones are sent again.', 'The photo is rebuilt from the packets.'] },
  ]),

  L('cs-infra-f5', 'cs-f5-networks', '8.2', 'Internet infrastructure, DNS and web hosting', 10, ['Networks', 'Internet'], [
    'The Internet is a network of networks. Homes, schools and businesses connect through an **Internet service provider (ISP)**. In Cameroon these include CAMTEL, MTN, Orange and Nexttel. ISPs connect to national and international **backbones** of fibre-optic cable. Cameroon is linked to the rest of the world by **submarine fibre-optic cables** that come ashore at Douala, Limbe and Kribi.',
    'A **gateway** connects networks that use different protocols. The router in a home or school acts as the **default gateway** to the Internet: traffic for any address outside the local network is sent to it.',
    '**DNS servers** form a hierarchy:\n- **Root servers** know where to find the servers for each ending.\n- **Top-level domain** servers handle endings such as .com and .cm. In Cameroon, the **.cm** domain is run by **ANTIC**.\n- **Authoritative** servers hold the addresses for each domain.\nYour ISP’s resolver asks them in turn and keeps answers for a while (caching), so popular sites are found quickly.',
    'A website must be stored on a server that is always on and connected: this is **web hosting**. Kinds include **shared hosting** (many sites on one server, cheap), a **virtual private server**, a **dedicated server**, and **cloud hosting** that grows with demand. The owner also registers a **domain name** through a registrar.',
    'Files can be transferred in two ways:\n- **Client-server:** the file is downloaded from one server, by FTP or HTTP. It is easy to control and keep safe, but the server can become overloaded.\n- **Peer-to-peer (P2P):** pieces of the file come from many users’ computers at once, as in BitTorrent. It is fast for popular files, but there is no central control, and it is often misused to share pirated films and music.',
  ], 'packet-switching', 'ISP connects you; **DNS** finds the address; the **host** stores the site; the **gateway** leads out of your network.',
  ['Which organisation runs the .cm domain?', ['ANTIC', 'ENEO', 'The GCE Board', 'MINESEC'], 'ANTIC is the National Agency for ICT.'],
  [['ISP', 'Internet service provider: a company that connects customers to the Internet.'], ['Gateway', 'A device that connects networks using different protocols.'], ['Web hosting', 'Keeping a website on a server that is always on and connected.'], ['Domain name', 'A name, such as minesec.gov.cm, that stands for an IP address.']],
  [
    { q: 'A school wants its own website. List what it needs and who provides each.', steps: ['A **domain name**, for example ending in .cm, bought through a **registrar** (the .cm domain is run by ANTIC).', '**Web hosting**: space on a server from a hosting company or cloud provider.', 'The website’s **pages**, designed and uploaded to the host.', 'DNS records pointing the domain name to the host’s **IP address**.'] },
  ]),

  // ---------- Society and law ----------
  L('cs-green-f5', 'cs-f5-society', '9.1', 'Health, green computing and e-waste', 10, ['Health and safety', 'Environment'], [
    'Health risks of heavy computer use, revised from Form 4:\n- **Repetitive strain injury (RSI)** from repeated typing and clicking.\n- **Carpal tunnel syndrome**: pain, numbness and tingling in the hand when a nerve (the median nerve) is squeezed in the wrist.\n- **Computer vision syndrome**: tired, dry eyes, blurred vision and headaches.\nPrevent them with good posture, straight wrists, the 20-20-20 rule and regular breaks.',
    '**Green computing** means using computers in ways that **save energy** and **protect the environment**:\n- Turn on **power management**, so the screen and computer sleep or hibernate when idle, and switch equipment off at night.\n- Choose energy-efficient equipment: laptops use less power than desktops, and LED screens less than old ones.\n- Print less: use print preview, print on both sides, share files instead of copies.\n- Where possible, use renewable energy, such as solar panels for a school laboratory.',
    '**E-waste** is discarded electronic equipment: old phones, computers, batteries and screens. It contains **toxic** materials such as **lead** (in old screens and solder), **mercury** (in old screen backlights) and **cadmium** (in some batteries). When e-waste is **burned** or **dumped**, these poisons get into the air, soil and water and harm people’s lungs, nerves and kidneys.',
    'Dealing with e-waste properly:\n- **reduce:** keep devices longer\n- **repair** and **refurbish** them\n- **donate** working devices to schools or community groups\n- **recycle** through approved collectors or take-back schemes\n- **wipe** personal data before giving a device away.',
  ], 'ewaste-steps', 'Never burn or dump e-waste: **lead, mercury and cadmium** poison air, soil and water.',
  ['Why should data be wiped from a phone before it is donated?', ['So the next owner cannot read the old owner’s personal data', 'To make it lighter', 'To recharge the battery', 'To change its colour'], 'Deleted files can often be recovered unless wiped.'],
  [['Green computing', 'Using computers in ways that save energy and protect the environment.'], ['E-waste', 'Discarded electronic equipment.'], ['Carpal tunnel syndrome', 'Pain and numbness caused by pressure on a nerve in the wrist.'], ['Power management', 'Settings that put equipment to sleep when it is not in use.']],
  [
    { q: 'Suggest four ways a school computer laboratory can be greener.', steps: ['Set every computer to **sleep** after 10 minutes and **switch everything off** at the end of the day.', 'Replace old screens with **LED** screens when they wear out.', 'Use **print preview** and print on **both sides** of the paper.', 'Send old machines to an **approved recycler**, after wiping the data, instead of dumping them.'] },
  ]),

  L('cs-law-f5', 'cs-f5-society', '9.2', 'ICT institutions, laws and software licences', 11, ['Law', 'Ethics'], [
    'Three public bodies govern ICT in Cameroon:\n- **MINPOSTEL**, the Ministry of Posts and Telecommunications, sets government policy for telecommunications and ICT.\n- **ART**, the Telecommunications Regulatory Board (Agence de Régulation des Télécommunications), regulates and controls the telecommunications operators, watches over fair competition and protects consumers.\n- **ANTIC**, the National Agency for Information and Communication Technologies, leads on electronic security, acts as the root certification authority, runs the **.cm** domain and responds to cyber attacks.',
    'The main laws, met in Form 4, are:\n- Law No. 2010/012 on cybersecurity and cybercriminality\n- Law No. 2010/013 on electronic communications\n- Law No. 2010/021 on electronic commerce\n- Law No. 2024/017 on the protection of personal data\n- Law No. 2000/011 on copyright and neighbouring rights.',
    '**Software licences** set the rules for using software:\n- **Proprietary** (commercial) software: you buy a licence to use it, the source code is secret, and copying is forbidden. Examples: Microsoft Windows and Office.\n- **Freeware:** free to use, but the source code stays closed.\n- **Shareware:** free to try for a period or with limited features, then paid for.\n- **Open-source** software: the source code is public and anyone may use, study, change and share it. Some open-source licences, such as the GPL, require changed versions to stay open; others, such as the MIT licence, allow almost any use. Examples: Linux, LibreOffice, Python.',
    '**Software piracy** is copying, installing, selling or sharing software without a valid licence, for example installing one licence on thirty computers, using a "crack" to unlock software, or selling copied discs. It breaks copyright law, robs the people who made the software, and pirated copies often carry **malware**.',
  ], 'ict-bodies', 'Policy: **MINPOSTEL**. Operators: **ART**. Security and .cm: **ANTIC**.',
  ['A school that cannot afford licences wants an office suite legally and free. It should choose:', ['Open-source software such as LibreOffice', 'A cracked copy', 'A borrowed licence key', 'A pirated disc'], 'Open-source software is free and legal to install on every computer.'],
  [['MINPOSTEL', 'Cameroon’s Ministry of Posts and Telecommunications.'], ['ART', 'The Telecommunications Regulatory Board, which regulates telecom operators in Cameroon.'], ['Open source', 'Software whose source code anyone may use, study, change and share.'], ['Software licence', 'The legal permission and rules for using a piece of software.'], ['Piracy', 'Using or sharing software without a valid licence.']],
  [
    { q: 'Compare proprietary and open-source software for a school laboratory.', steps: ['**Cost:** proprietary software needs a paid licence for each computer; open-source software is free.', '**Source code:** proprietary is secret; open source can be studied and changed, which is useful for learning.', '**Support:** proprietary software has the maker’s support; open source relies on communities and paid helpers.', '**Familiarity:** students may meet proprietary software at work, so many schools teach both.'] },
  ]),

  // ---------- Project ----------
  L('cs-dbproject-f5', 'cs-f5-project', '10.1', 'Building a school library database', 14, ['Databases', 'Project'], [
    '**The brief:** the school library wants to record its books and borrowers, see who has which book, list overdue books, and count how many books each class borrows.',
    '**1. Requirements:** list what the system must store (books, borrowers, loans) and the outputs it must give (a list of overdue books, loans per class).',
    '**2. Design (ERD):**\n- BOOK(BookID PK, Title, Author, Copies)\n- BORROWER(BorrowerID PK, Name, Class)\n- LOAN(LoanID PK, BookID FK, BorrowerID FK, DateOut, DueDate, Returned)\nA borrower makes many loans and a book is lent many times, so LOAN is the link entity between BOOK and BORROWER.',
    '**3. Build the tables** with suitable data types: text for Title, integer for Copies, date for DateOut and DueDate, Boolean for Returned. Set the primary keys, and link the foreign keys to them.',
    '**4. Validation:** Copies has a range check (1 to 50); Class has a lookup check (the school’s class list); DueDate must be after DateOut; BookID and BorrowerID have presence checks.',
    '**5. Queries:** for example, the overdue books on 15 November 2026:\nSELECT BookID, BorrowerID, DueDate FROM Loan WHERE DueDate < \'2026-11-15\' AND Returned = FALSE ORDER BY DueDate;',
    '**6. Test and evaluate:** test each validation rule with normal, extreme and abnormal data; check each query gives the right records; then compare the finished database with the requirements and suggest improvements, such as SMS reminders for overdue books.',
  ], 'db-project', 'Brief → requirements → **ERD** → tables → **validation** → **queries** → test → evaluate.',
  ['In the library database, why is Title not a good primary key for BOOK?', ['Two different books can have the same title', 'Titles are too short', 'Titles are numbers', 'Titles never change'], 'A primary key must be unique for every record.'],
  [['Design brief', 'A short description of what a client wants a system to do.'], ['Requirement', 'Something the finished system must do.'], ['Evaluation', 'Judging the finished system against its requirements.']],
  [
    { q: 'Write a query to list the names of borrowers in Form 5A, in alphabetical order.', steps: ['SELECT Name', 'FROM Borrower', "WHERE Class = 'F5A'", 'ORDER BY Name ASC;'] },
  ]),

  // ---------- GCE revision ----------
  L('cs-paper1-f5', 'cs-f5-gce', '11.1', 'GCE Paper 1: rapid multiple-choice drills', 10, ['Exam skills', 'Revision'], [
    'Paper 1 tests the **whole syllabus** of Forms 1 to 5 with multiple-choice questions. Speed comes from knowing the facts well and from practice: work through past questions in timed sets.',
    'Topics that come up again and again:\n- **Boolean logic:** gates, truth tables, simple expressions.\n- **Number systems:** binary, denary and hexadecimal; storage units.\n- **Hardware:** the CPU and its registers, the fetch-decode-execute cycle, memory and storage, input and output devices.\n- **Software:** the operating system, utilities and translators.\n- **Networks:** LAN, MAN and WAN, topologies, IP addresses, protocols, the OSI layers.\n- **Data:** databases and keys, validation and verification.\n- **Society:** health, security threats and Cameroon’s ICT laws.',
    'Method: read the whole question, underline words such as NOT and EXCEPT, work out the answer before looking at the options, eliminate the options you know are wrong, and keep moving: mark a hard question and come back to it.',
  ], 'logic-gates', 'Practise in **timed sets**, and correct every wrong answer before moving on.',
  ['For A = 1 and B = 0, what is NOT (A AND B)?', ['1', '0', '2', 'It cannot be worked out'], 'A AND B = 0, and NOT 0 = 1.'],
  [['Timed practice', 'Answering past questions within a set time to build speed.'], ['Elimination', 'Ruling out options that are certainly wrong.']],
  [
    { q: 'Hexadecimal 2F is: A 47 B 32 C 215 D 31', steps: ['2F = 2 × 16 + 15.', '32 + 15 = 47.', 'Answer: **A**.'] },
    { q: 'Which protocol encrypts web pages between a browser and a server? A HTTP B FTP C HTTPS D SMTP', steps: ['HTTP and FTP send data as plain text; SMTP sends e-mail.', 'HTTPS uses TLS encryption.', 'Answer: **C**.'] },
  ]),

  L('cs-paper2-f5', 'cs-f5-gce', '11.2', 'GCE Paper 2: structured answers and mock examinations', 12, ['Exam skills', 'Revision'], [
    'Paper 2 asks for **written answers**: designing and tracing algorithms, completing trace tables, writing SQL, and explaining systems analysis, networks and data. Read the **command word** before you start:\n- **State** or **name:** a short answer.\n- **Describe:** the main features, in detail.\n- **Explain:** reasons, with "because".\n- **Compare:** similarities and differences, point by point.\n- **Write an algorithm:** pseudocode or a flowchart.',
    'Use the **marks** as a guide: a 4-mark question usually needs four separate points. Use the terms of the subject, such as "primary key", "time slice" or "packet header", not vague words.',
    'Common mistakes to avoid:\n- totals and counters not set to 0 before a loop\n- a loop that runs once too many or too few\n- an OUTPUT placed inside a loop when it belongs after it\n- SQL with the parts in the wrong order, or text values without quotes\n- confusing validation with verification, or a stack with a queue\n- describing "the computer" in general when the question is about a named system.',
    '**Mock examinations** in Term 3 copy the real conditions: the same time, no notes, silence. Afterwards, correct every mistake, list your weak topics, and revise them first. In the last weeks, practise sorting traces and database designs quickly, and read examiners’ advice published by the GCE Board.',
  ], 'trace-table', 'Command word first, marks second: **4 marks = 4 points**.',
  ['A question says "Explain why binary search is faster than linear search" (2 marks). The best answer:', ['Each comparison halves the part of the list to search, so far fewer comparisons are needed', 'Binary search is newer', 'It is faster', 'Because it uses binary numbers'], '"Explain" needs a reason, and 2 marks need a clear point with its consequence.'],
  [['Command word', 'The word in a question, such as state or explain, that says what kind of answer is needed.'], ['Mock examination', 'A practice examination under real exam conditions.']],
  [
    { q: 'Answer: "Describe the difference between validation and verification" (2 marks).', steps: ['**Validation** is an automatic check by the program that data is **sensible**, for example a range check.', '**Verification** checks that data has been **copied correctly** from its source, for example by double entry.'] },
  ]),
];
