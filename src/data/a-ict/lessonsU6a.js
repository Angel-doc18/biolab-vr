// A Level ICT lessons (0796), Upper Sixth, Term 1: relational design,
// normalisation, SQL, project management, rapid development, data
// communication, network devices, network security, and algorithms with data
// exchange. Each lesson includes the week's practical lab. Original text
// written for this app.

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

export const LESSONS_IU6A = [
  // ---------- 1. Relational design ----------
  L('ait-rdb-1', 'ait-u6-relational', '1.1', 'From the ERD to the relational schema', 18, ['Databases'], [
    'A **conceptual model** (the ERD) says what data the organisation needs; the **relational schema** turns it into tables. Each **entity** becomes a table, each **attribute** a field, and each entity’s identifier becomes the **primary key**.',
    'A **one-to-many** relationship is stored by putting the primary key of the "one" side into the "many" side as a **foreign key**: one class has many students, so STUDENT gets ClassID. A **one-to-one** relationship is stored the same way with the foreign key made unique, or by merging the two tables when they are always used together.',
    'A **many-to-many** relationship becomes a **link table** whose key combines the two foreign keys, and which can hold facts about the link itself: ENROLMENT(StudentID, SubjectID, Mark).',
    'An attribute with several values, such as a parent’s phone numbers, goes into its own table (PHONE(StudentID, Number)) so that every field holds one value.',
  ], 'ait-erd-map', 'Draw the crow’s foot first: the foreign key always goes on the "many" side.',
  ['A teacher teaches many classes and each class has many teachers. In tables this needs:', ['a link table such as TEACHES(TeacherID, ClassID)', 'one foreign key in CLASS', 'one foreign key in TEACHER', 'no extra table'], 'Many-to-many.'],
  [['Relational schema', 'The set of tables, fields and keys that store a data model.'], ['Foreign key', 'A field holding the primary key of another table.'], ['Link table', 'A table that turns a many-to-many relationship into two one-to-many ones.']],
  [
    { q: 'Turn this ERD into tables: SCHOOL has many CLASSes; CLASS has many STUDENTs; STUDENT takes many SUBJECTs, each taken by many students.', steps: ['SCHOOL(SchoolID, Name, Town) and CLASS(ClassID, Name, SchoolID).', 'STUDENT(StudentID, Name, ClassID) and SUBJECT(SubjectID, Name).', '**ENROLMENT(StudentID, SubjectID, Mark) with the composite key (StudentID, SubjectID).**'] },
    { q: 'Each school has exactly one principal, and each principal runs one school. Show two ways to store this.', steps: ['Put PrincipalID in SCHOOL as a foreign key with a unique constraint.', 'Or merge the principal’s fields into SCHOOL if they are always used together.', '**The unique constraint keeps the link one-to-one.**'] },
  ]),

  L('ait-rdb-2', 'ait-u6-relational', '1.2', 'Integrity constraints and the multi-table lab', 18, ['Databases'], [
    '**Entity integrity**: every table has a primary key, and its value is never empty and never repeated.',
    '**Referential integrity**: every foreign key value must match an existing primary key, so there is no fee payment for a student who does not exist. Updates and deletes can be refused, or **cascaded** to the related rows.',
    '**Domain constraints** limit the values a field may take: a data type, a range (Mark between 0 and 20), a list (Gender M or F) or a format. **Business rules** come from the organisation: a student may borrow at most three books, a fee cannot be negative. Some are enforced by the DBMS (CHECK constraints, validation rules), others by the program or forms.',
    '**Lab (Microsoft Access):** create each table in Design View with its data types and primary key; open Database Tools → Relationships; drag each primary key onto its foreign key; tick Enforce Referential Integrity; then add validation rules and validation text to the fields.',
  ], 'ait-constraints', 'Name the constraint in your answer: entity, referential, domain or business rule.',
  ['"A mark must be between 0 and 20" is a:', ['domain constraint', 'referential constraint', 'primary key', 'link table'], 'It limits a field’s values.'],
  [['Entity integrity', 'Every row has a unique, non-empty primary key.'], ['Referential integrity', 'Every foreign key matches an existing primary key.'], ['Business rule', 'A rule of the organisation that the data must obey.']],
  [
    { q: 'Name the constraint each rule needs: (i) no two students share a StudentID; (ii) a loan must be for an existing book; (iii) a fee payment is more than 0 FCFA; (iv) at most three books on loan.', steps: ['(i) Entity integrity: StudentID is the primary key.', '(ii) Referential integrity on LOAN.BookID. (iii) A domain constraint: Amount > 0.', '**(iv) A business rule, checked when a loan is made.**'] },
    { q: 'Write the SQL for a Result table that keeps marks between 0 and 20 and links to Student.', steps: ['CREATE TABLE Result (StudentID CHAR(6), SubjectID CHAR(4), Mark INTEGER CHECK (Mark BETWEEN 0 AND 20),', 'PRIMARY KEY (StudentID, SubjectID),', '**FOREIGN KEY (StudentID) REFERENCES Student(StudentID));**'] },
  ]),

  // ---------- 2. Normalisation ----------
  L('ait-nf-1', 'ait-u6-normalisation', '2.1', 'Functional dependencies and anomalies', 17, ['Databases'], [
    'A **functional dependency** A → B means that each value of A fixes one value of B: StudentID → Name, ClassID → ClassTeacher. Writing the dependencies down is the first step of normalisation.',
    'A **flat file** keeps everything in one table, so facts are repeated, and that causes **anomalies**.',
    'An **update anomaly**: a class teacher’s name is stored in every student’s row, so changing it means changing many rows, and missing one leaves the data inconsistent. An **insertion anomaly**: a new class cannot be recorded until a student joins it. A **deletion anomaly**: deleting the last student of a class also deletes the class teacher’s name.',
    'Normalisation removes these by splitting the table so that each fact is stored once.',
  ], 'ait-anomalies', 'Every anomaly comes from a fact stored more than once, or stored with a fact it does not belong to.',
  ['Changing a class teacher’s name in 40 rows, and missing one, is an:', ['update anomaly', 'insertion anomaly', 'deletion anomaly', 'integrity constraint'], 'The copies now disagree.'],
  [['Functional dependency', 'A → B: each value of A fixes one value of B.'], ['Flat file', 'One table holding all the data, with facts repeated.'], ['Anomaly', 'A problem when inserting, updating or deleting caused by repeated data.']],
  [
    { q: 'List the dependencies in LOAN(LoanID, StudentID, StudentName, BookID, Title, DateOut).', steps: ['LoanID → StudentID, BookID, DateOut.', 'StudentID → StudentName.', '**BookID → Title.**'] },
    { q: 'Give one example of each anomaly in that table.', steps: ['Update: a student’s name must be corrected in every loan row.', 'Insertion: a new book cannot be recorded until someone borrows it.', '**Deletion: deleting a book’s only loan also loses its title.**'] },
  ]),

  L('ait-nf-2', 'ait-u6-normalisation', '2.2', 'Lab: splitting a flat file into normalised tables', 18, ['Databases'], [
    '**1NF**: every field holds one value, there are no repeating groups, and the table has a primary key.',
    '**2NF**: in 1NF, and no field depends on only part of a composite key.',
    '**3NF**: in 2NF, and no non-key field depends on another non-key field: every field depends on the key, the whole key and nothing but the key.',
    '**Lab:** start from a flat spreadsheet of fee payments, write its dependencies, then build the 3NF tables in the DBMS, copy the data in (Append queries in Access, or INSERT … SELECT in SQL), and check with a query that joining them gives back the original data.',
  ], 'acs-normal-forms', 'Check the result by joining the tables: you must get back exactly the rows you started with.',
  ['A non-key field depending on another non-key field is removed in:', ['3NF', '1NF', '2NF', 'no normal form'], 'A transitive dependency.'],
  [['First normal form', 'Single values in every field, no repeating groups, and a key.'], ['Second normal form', '1NF with no partial dependencies.'], ['Third normal form', '2NF with no transitive dependencies.']],
  [
    { q: 'Normalise FEES(ReceiptNo, StudentID, StudentName, ClassID, ClassTeacher, Amount, Date).', steps: ['The key ReceiptNo is a single field, so the table is in 2NF once it is in 1NF.', 'StudentName and ClassID depend on StudentID; ClassTeacher depends on ClassID: transitive dependencies.', '**PAYMENT(ReceiptNo, StudentID, Amount, Date), STUDENT(StudentID, StudentName, ClassID), CLASS(ClassID, ClassTeacher).**'] },
    { q: 'Write the SQL to fill CLASS from the flat table FLATFEES.', steps: ['Each class should appear once.', 'INSERT INTO Class (ClassID, ClassTeacher)', '**SELECT DISTINCT ClassID, ClassTeacher FROM FlatFees;**'] },
  ]),

  // ---------- 3. SQL ----------
  L('ait-sql-1', 'ait-u6-sql', '3.1', 'Inner and outer joins', 18, ['Databases'], [
    'A **join** combines rows from tables that share a field: SELECT Student.Name, Payment.Amount FROM Student INNER JOIN Payment ON Student.StudentID = Payment.StudentID;',
    'An **INNER JOIN** returns only rows that match in both tables. A **LEFT OUTER JOIN** returns every row of the left table, with NULL where nothing matches; a **RIGHT OUTER JOIN** does the same for the right table; a **FULL OUTER JOIN** returns all rows of both.',
    'To find rows with no match, use a LEFT JOIN and test the right-hand key: … LEFT JOIN Payment ON … WHERE Payment.StudentID IS NULL lists students who have paid nothing.',
    'Joins can be chained: Student JOIN Class ON … JOIN School ON … brings three tables together. Name the table before each field when two tables share a field name.',
  ], 'acs-joins', 'Inner: matches only. Left: everything on the left. Use IS NULL on the right key to find the missing.',
  ['Students who have paid nothing are found with:', ['a LEFT JOIN and WHERE Payment.StudentID IS NULL', 'an INNER JOIN', 'ORDER BY', 'a FULL JOIN only'], 'Unmatched left rows have NULL.'],
  [['INNER JOIN', 'A join returning only matching rows.'], ['LEFT OUTER JOIN', 'A join keeping every left row, with NULL where nothing matches.'], ['NULL', 'A marker meaning no value.']],
  [
    { q: 'Write SQL for each student’s name, class name and total paid.', steps: ['SELECT Student.Name, Class.Name, SUM(Payment.Amount)', 'FROM Student JOIN Class ON Student.ClassID = Class.ClassID JOIN Payment ON Student.StudentID = Payment.StudentID', '**GROUP BY Student.Name, Class.Name;**'] },
    { q: 'Student has 4 rows and Payment 6 rows for 3 of those students. How many rows do the inner and left joins give?', steps: ['Inner join: the 6 payments, each with its student.', 'Left join: the 6, plus 1 row with NULL for the student who has not paid.', '**6 and 7 rows.**'] },
  ]),

  L('ait-sql-2', 'ait-u6-sql', '3.2', 'Calculations, grouping and parameter queries', 18, ['Databases'], [
    '**Calculated fields** work out a value in the query: SELECT Name, Mark * 5 AS Percent FROM Result; or Amount * 1.1925 AS WithVAT, using Cameroon’s 19.25 % VAT.',
    '**Aggregate functions** (COUNT, SUM, AVG, MIN, MAX) summarise rows; **GROUP BY** makes one result per group, and **HAVING** filters the groups: SELECT ClassID, AVG(Mark) FROM Result GROUP BY ClassID HAVING AVG(Mark) > 12;',
    'A **parameter query** asks for a value each time it runs. In Access, a criterion written [Enter class:] opens a box; in SQL with a program, a placeholder (?) is filled safely with the value typed.',
    '**Lab:** build multi-table lookups (fees owed per class, top three students in each subject) as saved queries, then turn one into a parameter query so a clerk can choose the class.',
  ], 'acs-sql-group', 'WHERE filters rows before grouping; HAVING filters the groups after.',
  ['In Access, a criterion [Enter class:] makes a:', ['parameter query', 'calculated field', 'join', 'report'], 'It asks each time it runs.'],
  [['Calculated field', 'A value worked out in a query from other fields.'], ['Aggregate function', 'A function such as SUM or AVG that summarises rows.'], ['Parameter query', 'A query that asks for a value each time it runs.']],
  [
    { q: 'List each class with its number of students and average mark, best class first.', steps: ['SELECT ClassID, COUNT(*) AS Students, AVG(Mark) AS Average FROM Result', 'GROUP BY ClassID', '**ORDER BY Average DESC;**'] },
    { q: 'A price of 10 000 FCFA before VAT: what does the calculated field Price * 1.1925 give?', steps: ['19.25 % of 10 000 is 1 925.', '10 000 + 1 925.', '**11 925 FCFA.**'] },
  ]),

  // ---------- 4. Project management ----------
  L('ait-pm-1', 'ait-u6-project-mgmt', '4.1', 'PERT networks and the critical path', 20, ['Project management'], [
    'A project is broken into **activities** with durations and **dependencies** (which must finish before others start). A **PERT** or activity network draws them as arrows between numbered events, or as boxes joined by arrows.',
    'A **forward pass** finds each activity’s **earliest start** (ES): the largest earliest finish of all the activities before it. The project length is the largest earliest finish at the end.',
    'A **backward pass** from the end finds each activity’s **latest start** (LS) that does not delay the project. **Float** (slack) = LS − ES.',
    'Activities with zero float form the **critical path**: any delay on them delays the whole project, so managers watch them most closely.',
  ], 'ait-pert', 'Forward pass: take the largest. Backward pass: take the smallest. Zero float is critical.',
  ['Activity D has earliest start 5 and latest start 7. Its float is:', ['2', '5', '7', '12'], 'LS − ES.'],
  [['Critical path', 'The chain of activities with zero float, which sets the project length.'], ['Float', 'How long an activity can be delayed without delaying the project.'], ['Earliest start', 'The soonest an activity can begin, once all before it are finished.']],
  [
    { q: 'A analysis 2 weeks; B design 3 (after A); C build 4 (after B); D user guide 2 (after B); E testing 1 (after C and D). Find ES for each and the project length.', steps: ['A 0; B 2; C and D 5.', 'E starts after the later of C (5 + 4 = 9) and D (5 + 2 = 7): 9.', '**The project takes 9 + 1 = 10 weeks.**'] },
    { q: 'Find the float of D and the critical path.', steps: ['D must finish by 9 (when E starts), so its latest start is 9 − 2 = 7.', 'Float of D = 7 − 5 = 2; A, B, C and E have zero float.', '**Critical path A, B, C, E.**'] },
  ]),

  L('ait-pm-2', 'ait-u6-project-mgmt', '4.2', 'PERT estimates, Gantt charts and the project tools lab', 18, ['Project management'], [
    'When durations are uncertain, PERT uses three estimates: **optimistic** (o), **most likely** (m) and **pessimistic** (p). The expected time is **te = (o + 4m + p) ÷ 6**.',
    'A **Gantt chart** draws each activity as a bar against a calendar. It shows clearly who should be doing what each week, **milestones** (key points of no duration, drawn as diamonds) and progress, by shading the part done. It shows dependencies less clearly than a network, so the two are used together.',
    'Resources matter too: two activities in parallel may need the same person, so one must wait (resource levelling).',
    '**Lab:** enter the activities, durations and dependencies in a project tool (ProjectLibre or GanttProject, both free) or in a spreadsheet with bars made by conditional formatting; mark the critical path and the milestones; then update the chart with progress after a week.',
  ], 'ait-gantt', 'Use te = (o + 4m + p) ÷ 6 when the question gives three times for one activity.',
  ['Optimistic 3, most likely 5, pessimistic 13 days give an expected time of:', ['6 days', '5 days', '7 days', '21 days'], '(3 + 20 + 13) ÷ 6.'],
  [['Gantt chart', 'A chart of activities as bars against time.'], ['Milestone', 'A key point in a project with no duration.'], ['Three-point estimate', 'An expected time from optimistic, most likely and pessimistic estimates.']],
  [
    { q: 'An activity has o = 2, m = 4, p = 12 days. Find the expected time.', steps: ['te = (2 + 4 × 4 + 12) ÷ 6.', '= 30 ÷ 6.', '**5 days.**'] },
    { q: 'Why might a manager show a Gantt chart to the client but plan with a network?', steps: ['The Gantt chart shows dates and progress at a glance.', 'The network shows the dependencies and the critical path clearly.', '**Each shows what the other hides; most tools draw both.**'] },
  ]),

  // ---------- 5. RAD and JAD ----------
  L('ait-rad-1', 'ait-u6-rad', '5.1', 'Rapid application development and joint application development', 18, ['Systems development'], [
    '**Rapid application development** (RAD) delivers working systems quickly by building and refining **prototypes** with the users. Its phases are **requirements planning**, **user design** (users and developers shape prototypes together), **construction** and **cutover** (testing, data conversion, training and changeover).',
    'Work is **timeboxed**: each part has a fixed period, and if time runs short features are dropped, never the deadline. Features are ranked with **MoSCoW**: Must have, Should have, Could have, Won’t have this time.',
    '**Joint application development** (JAD) gathers users, managers and developers in workshops to agree requirements quickly. A neutral **facilitator** runs the sessions, a **scribe** records decisions, an executive **sponsor** gives authority, and the users and IT staff take part.',
    'RAD suits interactive business systems with users available and requirements that will change; it suits less well large, safety-critical systems that need full documentation, and quality can suffer under time pressure.',
  ], 'ait-rad', 'Timebox: the date is fixed, the features are not.',
  ['In a JAD workshop, the person who runs the session and keeps it on track is the:', ['facilitator', 'scribe', 'sponsor', 'end user'], 'A neutral leader.'],
  [['RAD', 'Rapid application development: quick delivery through prototypes and user involvement.'], ['Timebox', 'A fixed period in which a part of the system must be delivered.'], ['JAD', 'Joint application development: workshops where users and developers agree requirements.']],
  [
    { q: 'Rank these for a school fees app with MoSCoW: record payment, SMS receipt, monthly chart, paying by bank card.', steps: ['Must: record payment. Should: SMS receipt (parents expect it).', 'Could: monthly chart.', '**Won’t (this time): bank cards, since parents pay by mobile money.**'] },
    { q: 'Give one advantage and one risk of RAD for that app.', steps: ['Advantage: the bursar sees and shapes working screens within weeks.', 'Risk: documentation and testing may be cut to meet the timebox.', '**Plan short tests and a user guide into every timebox.**'] },
  ]),

  L('ait-rad-2', 'ait-u6-rad', '5.2', 'Lab: data entry forms with action buttons', 18, ['Systems development'], [
    'A good **data entry form** follows the order of the paper document it replaces, groups related fields, uses drop-down lists for fixed choices, and has clear labels and buttons.',
    'In Microsoft Access, the **Form Wizard** builds a form from a table or query; **Design View** arranges it; **Combo boxes** look up values from another table (choose the class by name, store its ClassID).',
    '**Action buttons** run tasks: the Command Button Wizard creates buttons for Save Record, New Record, Find Record, Print and Close Form; behind each is a **macro** or VBA code.',
    'Test the form with normal, boundary and erroneous data, and show it to a user: watching them use it reveals what needs to change in the next prototype.',
  ], 'ait-moscow', 'Each button should do one clear thing and be named with a verb: Save, Print, Close.',
  ['A drop-down list that shows class names but stores ClassID is a:', ['combo box that looks up another table', 'text box', 'command button', 'report'], 'It prevents typing errors.'],
  [['Data entry form', 'A screen for entering and editing records.'], ['Combo box', 'A drop-down list that can look up values in another table.'], ['Macro', 'A saved series of actions that a button can run.']],
  [
    { q: 'Design a payment entry form for the bursar.', steps: ['Fields in receipt order: date (default today), student (combo box by name), amount, method (drop-down: MTN MoMo, Orange Money, cash).', 'Buttons: Save payment, Print receipt, New payment, Close.', '**Validation: amount over 0 and at most the balance owed, with a clear message.**'] },
    { q: 'Users keep forgetting to save. How can the form help?', steps: ['Put Save as the first, largest button.', 'Ask before closing a changed record.', '**Show a confirmation, such as "Payment saved", after each save.**'] },
  ]),

  // ---------- 6. Data communication ----------
  L('ait-dc-1', 'ait-u6-datacomm', '6.1', 'Serial, parallel, synchronous and asynchronous transmission', 18, ['Data communication'], [
    '**Serial** transmission sends bits one after another on one line: used for USB, Ethernet and long distances. **Parallel** transmission sends several bits at once on several lines: fast over short distances, but the bits can drift out of step (skew) on long cables.',
    '**Asynchronous** transmission sends each character on its own, framed by a **start bit** (0) and one or more **stop bits** (1), so the receiver knows where it begins; there is no shared clock. It is simple but adds overhead: 8 data bits need 10 bits.',
    '**Synchronous** transmission sends large blocks timed by a shared clock signal (or clock information within the data), with a few synchronising bytes per block: efficient for big transfers.',
    'Direction: **simplex** (one way only, such as radio broadcast), **half-duplex** (both ways, not at once, such as a walkie-talkie) and **full-duplex** (both ways at once, such as a phone call).',
  ], 'ait-sync-async', 'Asynchronous: per character, start and stop bits. Synchronous: per block, shared timing.',
  ['Sending 1000 characters asynchronously with 1 start and 1 stop bit uses:', ['10 000 bits', '8000 bits', '9000 bits', '1000 bits'], '10 bits per character.'],
  [['Asynchronous transmission', 'Sending characters one at a time framed by start and stop bits.'], ['Synchronous transmission', 'Sending blocks of data timed by a shared clock.'], ['Full-duplex', 'Data in both directions at the same time.']],
  [
    { q: 'How long does 1200 characters take asynchronously at 9600 bit/s with 1 start and 1 stop bit?', steps: ['Each character is 10 bits: 12 000 bits.', '12 000 ÷ 9600 = 1.25 s.', '**1.25 seconds, of which 20 % is framing.**'] },
    { q: 'Classify: a TV broadcast, a phone call, a walkie-talkie.', steps: ['TV broadcast: simplex.', 'Phone call: full-duplex.', '**Walkie-talkie: half-duplex.**'] },
  ]),

  L('ait-dc-2', 'ait-u6-datacomm', '6.2', 'Multiplexing, baseband and broadband, and the reports lab', 18, ['Data communication'], [
    '**Multiplexing** lets many signals share one link. **Frequency division** (FDM) gives each signal its own frequency band, as radio stations do. **Time division** (TDM) gives each signal a repeating time slot; **statistical** TDM gives slots only to channels that have data. **Wavelength division** (WDM) sends different colours of light down one fibre.',
    '**Baseband** uses the whole capacity of the cable for one signal at a time, as Ethernet does. **Broadband** divides the capacity into many channels carried at once on different frequencies, as cable TV and ADSL do.',
    'A **multiplexer** combines the signals at one end and a **demultiplexer** separates them at the other.',
    '**Lab: database reports.** Use the Report Wizard to group records (payments by class), add totals with =Sum([Amount]), put the date and page numbers in the footer, and print to PDF to check the layout before printing on paper.',
  ], 'ait-mux', 'FDM shares frequency, TDM shares time, WDM shares colour of light.',
  ['Radio stations sharing the air on different frequencies use:', ['FDM', 'TDM', 'WDM', 'baseband'], 'Frequency division.'],
  [['Multiplexing', 'Sending several signals over one link.'], ['Time division multiplexing', 'Giving each signal a repeating time slot.'], ['Broadband', 'Carrying many channels at once on different frequencies.']],
  [
    { q: 'Four channels share a 64 kbit/s link by fixed TDM. What rate does each get, and what is the drawback?', steps: ['64 ÷ 4 = 16 kbit/s each.', 'An idle channel’s slots are wasted.', '**16 kbit/s; statistical TDM would give the idle slots to busy channels.**'] },
    { q: 'Design a report of fee payments for the bursar.', steps: ['Group by class, sorted by student name.', 'Show each payment, a subtotal per class and a grand total.', '**Footer: the date printed and "Page n of m".**'] },
  ]),

  // ---------- 7. Network devices ----------
  L('ait-nh-1', 'ait-u6-hardware', '7.1', 'Repeaters, bridges, switches, routers and gateways', 18, ['Networks'], [
    'A **repeater** regenerates a weakened signal to extend a cable or wireless link (physical layer). A **hub** is a multi-port repeater: everything goes to every port.',
    'A **bridge** joins two network segments and filters frames by MAC address (data link layer). A **switch** is a multi-port bridge: it learns which MAC address is on which port and sends each frame only there. A **managed switch** can also be configured: VLANs, port security, link speeds and monitoring.',
    'A **router** joins different networks and forwards packets by IP address, using its routing table (network layer); it separates broadcast domains. A **gateway** joins networks that use different protocols and translates between them; the router a computer sends other networks’ traffic to is called its **default gateway**.',
    'Each switch port is its own **collision domain**; each router interface (or VLAN) is its own **broadcast domain**.',
  ], 'acs-switch', 'Repeater and hub: layer 1. Bridge and switch: layer 2 (MAC). Router: layer 3 (IP).',
  ['A device that learns MAC addresses and sends frames only to the right port is a:', ['switch', 'hub', 'repeater', 'modem'], 'A multi-port bridge.'],
  [['Repeater', 'A device that regenerates a weakened signal.'], ['Managed switch', 'A switch that can be configured, for example with VLANs.'], ['Collision domain', 'The part of a network where frames can collide.']],
  [
    { q: 'Choose a device: (i) extend Wi-Fi to the far end of a building, (ii) join the school LAN to the Internet, (iii) keep staff and student traffic apart on one switch.', steps: ['(i) A repeater (wireless extender) or a second access point.', '(ii) A router, with a firewall.', '**(iii) A managed switch with VLANs.**'] },
    { q: 'Three switches each with 8 PCs connect to one router. How many broadcast domains are there?', steps: ['Switches do not separate broadcasts.', 'If all three switches are on one router interface, there is one broadcast domain.', '**One; three if each switch is on its own router interface or VLAN.**'] },
  ]),

  L('ait-nh-2', 'ait-u6-hardware', '7.2', 'Lab: mapping routes and testing gateway links', 17, ['Networks'], [
    'A computer has its own small **routing table**. In Windows, **route print** shows it; in Linux, **ip route**. The line with destination 0.0.0.0 and mask 0.0.0.0 is the **default route**, through the default gateway.',
    '**ipconfig** (or ip addr) shows the computer’s address, mask and gateway. **ping** the gateway to test the first link, then an address outside, such as 8.8.8.8.',
    '**tracert** (traceroute) lists each router a packet passes through, with the time to each: where the replies stop is where the fault lies.',
    'In the lab, draw a map: your PC, the switch, the school router (gateway), the provider’s router and beyond, with the addresses and times found.',
  ], 'ait-route-print', 'Test outwards: your PC, the gateway, the Internet by number, then by name.',
  ['In route print, the destination 0.0.0.0 with mask 0.0.0.0 is:', ['the default route', 'an error', 'the loopback address', 'a broadcast'], 'It matches every address.'],
  [['Routing table', 'A list of destinations and where to send packets for them.'], ['Default route', 'The route used when no other matches, through the default gateway.'], ['Hop', 'One router on the path to a destination.']],
  [
    { q: 'ping to the gateway works, ping 8.8.8.8 fails. Where is the fault?', steps: ['The PC, cable, switch and gateway work.', 'Packets do not get beyond the school’s router.', '**At the router’s Internet connection or the provider: check the router and its link.**'] },
    { q: 'tracert shows 1 ms to hop 1, 3 ms to hop 2, then 250 ms to hop 3. What does it suggest?', steps: ['Hops 1 and 2 are local and quick.', 'Hop 3 is far away or congested, such as a satellite link or busy provider router.', '**The delay is on the provider’s link, not in the school.**'] },
  ]),

  // ---------- 8. Network security ----------
  L('ait-sec-1', 'ait-u6-security', '8.1', 'Firewalls, proxies and intrusion detection', 18, ['Security'], [
    'A **firewall** applies rules to traffic between networks. A **packet-filtering** firewall checks each packet’s addresses, ports and protocol. A **stateful** firewall also tracks connections, letting in replies to requests made from inside and refusing unrequested traffic.',
    'Rules are checked in order and the first match decides, so specific rules come first and the last rule denies everything else.',
    'A **proxy server** makes requests for clients: the outside world sees only the proxy, which can filter websites and keep copies of popular pages.',
    'An **intrusion detection system** (IDS) watches traffic for signs of attack and raises alerts; an **intrusion prevention system** (IPS) also blocks it. Security comes in layers: firewall, updates, antivirus, strong passwords and multi-factor authentication, backups and trained users.',
  ], 'acs-firewall', 'Order matters: specific rules first, "deny everything else" last.',
  ['A firewall that lets in replies to requests made from inside, but not unrequested packets, is:', ['stateful', 'a hub', 'a proxy only', 'a repeater'], 'It tracks connections.'],
  [['Packet filtering', 'Allowing or blocking packets by addresses, ports and protocol.'], ['Proxy server', 'A server that makes requests on behalf of clients.'], ['Intrusion prevention system', 'A system that detects and blocks attacks.']],
  [
    { q: 'Write firewall rules so the school web server accepts HTTPS from anywhere, staff can reach it by SSH only from inside, and nothing else gets in.', steps: ['1 Allow TCP 443 to the web server from any address.', '2 Allow TCP 22 to the web server from 10.0.0.0/8 only.', '**3 Deny all other incoming traffic.**'] },
    { q: 'Why put the SSH rule before "deny all"?', steps: ['Rules are checked from the top and the first match decides.', 'Below "deny all", the SSH rule would never be reached.', '**Specific allows first, the general deny last.**'] },
  ]),

  L('ait-sec-2', 'ait-u6-security', '8.2', 'SSL/TLS, VPNs and the ports lab', 18, ['Security'], [
    '**TLS** (Transport Layer Security), the successor of the now insecure **SSL**, protects web pages (HTTPS), email and other traffic. The server proves its identity with a **certificate**; both sides agree a session key; the data is then encrypted and checked for tampering.',
    'A **VPN** (virtual private network) carries traffic through an encrypted tunnel across the Internet, so a member of staff at home or on public Wi-Fi can reach the school’s systems safely.',
    'Services listen on **ports**: 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS, 3306 MySQL. A port that is open but not needed is a way in for attackers.',
    '**Lab:** in Windows, Windows Defender Firewall with Advanced Security → Inbound Rules → New Rule lets you block or allow a port or program. **netstat -an** lists connections and listening ports (netstat -ano adds the process number, which Task Manager can name); in Linux use ss -tulpn. Close or block any listening port you cannot explain.',
  ], 'ait-netstat', 'Every listening port should belong to a program you can name and need.',
  ['netstat -an shows:', ['connections and listening ports', 'disk usage', 'the DNS cache', 'the routing protocol'], 'Which ports are open.'],
  [['TLS', 'Transport Layer Security, which encrypts and authenticates connections.'], ['VPN', 'An encrypted tunnel across an untrusted network.'], ['Listening port', 'A port where a program waits for incoming connections.']],
  [
    { q: 'netstat shows a program listening on port 3306 on the bursar’s PC, which should only use the fees app. What do you do?', steps: ['3306 is usually MySQL: find the process number with netstat -ano and name it in Task Manager.', 'If the fees app needs a local database, block 3306 from other computers in the firewall.', '**If nothing needs it, stop and remove the program.**'] },
    { q: 'A teacher marks scripts from a café’s Wi-Fi. How do TLS and a VPN protect the work?', steps: ['The school system uses HTTPS: pages and passwords are encrypted.', 'A VPN also hides which school servers are being used and protects other traffic.', '**Together they stop anyone on the café network reading the data.**'] },
  ]),

  // ---------- 9. Algorithms and data exchange ----------
  L('ait-alg-1', 'ait-u6-algorithms', '9.1', 'Algorithms in flowcharts and pseudocode', 18, ['Algorithms'], [
    'An **algorithm** is a precise series of steps that solves a problem. It is built from three structures: **sequence** (steps in order), **selection** (a choice, IF … THEN … ELSE) and **iteration** (repetition, loops).',
    '**Flowchart** symbols: oval for start and stop, parallelogram for input and output, rectangle for a process, diamond for a decision with yes and no exits, and arrows for the flow.',
    '**Pseudocode** writes the same steps in structured English: INPUT, OUTPUT, assignment (←), IF … THEN … ELSE … ENDIF, FOR … NEXT, WHILE … ENDWHILE, REPEAT … UNTIL.',
    'A **data transformation** algorithm reads records, changes them and writes them out: for example converting marks out of 20 to grades, or totals per class. Check it with a **trace table**.',
  ], 'flowchart-symbols', 'Every decision diamond needs both a yes exit and a no exit.',
  ['In a flowchart, reading a mark from the user is drawn as a:', ['parallelogram', 'diamond', 'oval', 'rectangle'], 'Input and output.'],
  [['Algorithm', 'A precise series of steps that solves a problem.'], ['Selection', 'Choosing between paths with a condition.'], ['Iteration', 'Repeating steps in a loop.']],
  [
    { q: 'Write pseudocode that reads 30 marks out of 20 and outputs how many are passes (10 or more) and the average.', steps: ['total ← 0; passes ← 0', 'FOR i ← 1 TO 30: INPUT mark; total ← total + mark; IF mark >= 10 THEN passes ← passes + 1 ENDIF; NEXT i', '**OUTPUT passes, total / 30**'] },
    { q: 'Trace the first three marks 12, 8 and 15.', steps: ['After 12: total 12, passes 1.', 'After 8: total 20, passes 1.', '**After 15: total 35, passes 2.**'] },
  ]),

  L('ait-alg-2', 'ait-u6-algorithms', '9.2', 'Lab: importing and exporting data in CSV, JSON and XML', 18, ['Algorithms'], [
    'Systems exchange data in plain-text formats. **CSV** (comma-separated values) has one record per line and commas between fields, with a heading line; a field containing a comma is put in double quotes: "Douala, Littoral". **Tab-separated** text uses tabs instead.',
    '**JSON** writes data as name and value pairs in braces, lists in square brackets: {"id": "S00123", "name": "Ngwa", "marks": [14, 12]}. It is used by most web services.',
    '**XML** marks up data with tags: <student id="S00123"><name>Ngwa</name></student>. It is verbose but self-describing and can be checked against a schema.',
    '**Lab:** export a table from Access or a spreadsheet as CSV, open it in a text editor to see its structure, import it into another program, and check that accented names (é, è), dates and leading zeros survived. Exporting loses formatting, formulas and relationships: only the values travel.',
  ], 'ait-formats', 'Open an exported file in a text editor: that is exactly what the other program will read.',
  ['A phone number 0677123456 imported from CSV into a spreadsheet shows 677123456 because:', ['it was read as a number, dropping the leading zero', 'CSV cannot hold numbers', 'the file was XML', 'the phone number was too long'], 'Import it as text.'],
  [['CSV', 'Comma-separated values: one record per line.'], ['JSON', 'A text format of name and value pairs, used by web services.'], ['XML', 'A format that marks up data with named tags.']],
  [
    { q: 'Write the record Ngwa Bih, S00123, Lower Sixth, marks 14 and 12 in CSV and in JSON.', steps: ['CSV header and line: id,name,class,mark1,mark2 then S00123,Ngwa Bih,Lower Sixth,14,12', 'JSON: {"id": "S00123", "name": "Ngwa Bih", "class": "Lower Sixth", "marks": [14, 12]}', '**JSON keeps the marks together as a list; CSV needs a column for each.**'] },
    { q: 'After importing, the town Douala, Littoral is split across two columns. Why, and how is it fixed?', steps: ['The value Douala, Littoral contains a comma, which CSV reads as a new field.', 'The exporting program should have put the value in double quotes.', '**Export again with quoting, or choose tab-separated text.**'] },
  ]),
];
