// A Level ICT lessons (0796), Lower Sixth, Terms 2 and 3: information systems,
// investigation and feasibility, DFDs and ERDs, database management, data
// models, advanced spreadsheets, web forms, simulation, programming paradigms,
// artificial intelligence, implementation and the examination drills. Each
// lesson includes the week's practical lab. Original text written for this app.

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

export const LESSONS_IL6B = [
  // ---------- 10. Information systems ----------
  L('ait-mis-1', 'ait-l6-mis', '10.1', 'Data, information and the levels of information systems', 18, ['Information systems'], [
    '**Data** are raw facts, such as 14, 16, 9. **Information** is data processed so that it has meaning: "Bih’s average is 13". Good information is **accurate**, **relevant**, **timely**, **complete**, easy to understand and worth what it costs.',
    'An **information system** is made of hardware, software, data, procedures and people. It **collects** data (forms, bar codes, sensors, online forms), **processes** it (sorting, calculating, summarising), **stores** it and **distributes** information (reports, screens, dashboards, SMS), with **feedback** used to improve decisions.',
    'Organisations have three levels of decision. **Operational** staff make routine daily decisions, supported by **transaction processing systems** (TPS) that record every sale, payment or booking. **Tactical** (middle) managers use **management information systems** (MIS), which summarise TPS data into regular reports. **Strategic** (top) managers use **decision support systems** (DSS) for "what if" analysis and **executive information systems** (EIS) that show key figures at a glance.',
    'For a supermarket in Douala: the tills are a TPS; the weekly sales report by branch comes from the MIS; deciding where to open a new branch uses a DSS; and the managing director’s dashboard is an EIS.',
  ], 'ait-mis', 'Match the system to the decision: daily (TPS), monthly (MIS), unusual (DSS), at a glance for the top (EIS).',
  ['A monthly report of absences by class, for the principal’s deputy, comes from:', ['a management information system', 'a transaction processing system', 'an embedded system', 'a compiler'], 'A regular summary for middle management.'],
  [['Information', 'Data that has been processed to have meaning.'], ['Transaction processing system', 'A system that records the day-to-day transactions of an organisation.'], ['Decision support system', 'A system that helps managers explore options for decisions that are not routine.']],
  [
    { q: 'Classify: (i) a pharmacy till, (ii) a weekly stock report, (iii) a model of the profit from opening on Sundays, (iv) a director’s dashboard.', steps: ['(i) TPS: each sale is recorded.', '(ii) MIS: a regular summary. (iii) DSS: a "what if" question.', '**(iv) EIS: key figures at a glance.**'] },
    { q: 'A report of last month’s fees reaches the bursar three months late. Which quality of information is missing, and what is the cost?', steps: ['It is not timely.', 'Parents who owe fees cannot be reminded in time.', '**Late information can be accurate but useless for the decision.**'] },
  ]),

  L('ait-mis-2', 'ait-l6-mis', '10.2', 'Lab: context diagrams for enterprise systems', 17, ['Information systems'], [
    'A **context diagram** shows a whole system as **one process** in the middle, with the **external entities** (people, organisations or other systems outside it) around it and **labelled data flows** between them. It shows no data stores and no internal detail.',
    'To draw one: name the system; list everyone outside it who sends or receives data; list each input and output; draw and label every flow; and check that no flow goes directly between two entities.',
    'For a supermarket stock system, the entities could be Customer (sends purchases, receives receipts), Supplier (receives orders, sends deliveries and invoices), Manager (receives stock reports, sends prices) and Bank (receives payments, sends confirmations).',
    '**Lab:** draw the diagram with a tool such as diagrams.net (draw.io), LibreOffice Draw or Dia, using rectangles for entities and a rounded box for the system; export it as an image for your logbook.',
  ], 'ait-context', 'Every arrow on a context diagram needs a noun label: "order", not "send".',
  ['A context diagram shows:', ['the system as one process with its external entities and flows', 'every table in the database', 'the internal processes in detail', 'the network cabling'], 'Detail comes in lower levels.'],
  [['Context diagram', 'A diagram of the whole system as one process with its external entities.'], ['External entity', 'A person, organisation or system outside the system that exchanges data with it.'], ['Data flow', 'A labelled arrow showing data moving.']],
  [
    { q: 'List the flows for a supermarket stock system’s context diagram.', steps: ['Customer → purchase details; system → Customer: receipt.', 'System → Supplier: order; Supplier → system: delivery note and invoice.', '**System → Manager: stock report; Manager → system: new prices. System → Bank: payment; Bank → system: confirmation.**'] },
    { q: 'A student’s context diagram has an arrow "invoice" from Supplier straight to Bank. Is it correct?', steps: ['Both are external entities.', 'Flows between entities are outside the system and are not shown.', '**Remove it; show only flows between the system and each entity.**'] },
  ]),

  // ---------- 11. Investigation and feasibility ----------
  L('ait-inv-1', 'ait-l6-investigation', '11.1', 'The SDLC, problem identification and fact-finding', 18, ['Systems development'], [
    'The **system development life cycle**: preliminary investigation, feasibility study, analysis, design, development, testing, implementation, review and maintenance.',
    'The investigation separates **symptoms** (stock runs out, customers wait) from **causes** (stock is counted by hand once a month). The **terms of reference**, agreed with the client, set the scope, objectives, constraints, budget and deadline.',
    '**Fact-finding**: **interviews** give detail and allow follow-up questions, but take time; **questionnaires** reach many people quickly, but answers are short and many are not returned; **observation** shows how work is really done, though people may change their behaviour when watched; **document inspection** of forms, receipts and reports shows exactly what data is used; **sampling** studies a fair part when there is too much to examine.',
    'The facts found become the **requirements specification**: what the new system must do and how well.',
  ], 'ait-fact-finding', 'Use more than one fact-finding method: each covers the others’ weaknesses.',
  ['To find exactly which data appears on the receipts now used, use:', ['document inspection', 'a questionnaire', 'observation only', 'guessing'], 'Read the documents themselves.'],
  [['Terms of reference', 'The agreed scope, objectives, constraints and deadline of an investigation.'], ['Fact-finding', 'Collecting information about the current system and what users need.'], ['Requirements specification', 'A statement of what the new system must do and how well.']],
  [
    { q: 'A pharmacy keeps running out of popular medicines. Give two symptoms and a likely cause.', steps: ['Symptoms: empty shelves; customers sent elsewhere.', 'Cause: stock is counted by hand monthly, so reorders are late.', '**The new system should track stock with every sale and warn at a reorder level.**'] },
    { q: 'Choose fact-finding methods for a hospital records project with 3 managers and 120 nurses.', steps: ['Interview the 3 managers for detail.', 'Give the nurses a questionnaire, and observe a ward at work.', '**Inspect the current patient forms and registers.**'] },
  ]),

  L('ait-inv-2', 'ait-l6-investigation', '11.2', 'Feasibility, cost-benefit analysis and the feasibility report', 18, ['Systems development'], [
    'A **feasibility study** asks whether a proposed system should go ahead. **Technical**: do the hardware, software and skills exist? **Economic**: do the benefits outweigh the costs? **Operational**: will people use it, and does it fit how the organisation works? **Legal**: does it obey laws such as Law No. 2024/017 on personal data? **Schedule**: can it be ready in time?',
    '**Costs**: development (hardware, software, staff, data conversion, training) and running costs (maintenance, licences, power, internet). **Benefits**: tangible savings (less paper, fewer staff hours, less stock lost) and intangible gains (better service, faster decisions).',
    'The **payback period** is the time until the total savings equal the cost; **return on investment** is the net gain as a percentage of the cost.',
    '**Lab:** a feasibility report has an introduction and terms of reference, the current system and its problems, the options considered, the feasibility of each, costs and benefits, and a **recommendation**.',
  ], 'ait-payback', 'For payback with uneven savings, add up the savings year by year until they reach the cost.',
  ['A system costs 6 000 000 FCFA and saves 1 500 000 FCFA a year. Its payback period is:', ['4 years', '1.5 years', '6 years', '9 years'], '6 000 000 ÷ 1 500 000.'],
  [['Feasibility study', 'An assessment of whether a proposed system should go ahead.'], ['Payback period', 'The time for savings to equal the cost.'], ['Intangible benefit', 'A gain that is real but hard to measure in money.']],
  [
    { q: 'A system costs 5 000 000 FCFA and saves 1 000 000 in year 1, 2 000 000 in year 2 and 2 500 000 in year 3. Find the payback period.', steps: ['After year 2 the savings total 3 000 000; 2 000 000 is still needed.', 'Year 3 saves 2 500 000, so 2 000 000 ÷ 2 500 000 = 0.8 of year 3.', '**Payback after about 2.8 years.**'] },
    { q: 'Over 5 years the same system saves 9 000 000 FCFA. Find the return on investment.', steps: ['Net gain = 9 000 000 − 5 000 000 = 4 000 000.', '4 000 000 ÷ 5 000 000 = 0.8.', '**ROI = 80 %.**'] },
  ]),

  // ---------- 12. DFDs and ERDs ----------
  L('ait-ad-1', 'ait-l6-analysis-design', '12.1', 'Data flow diagrams', 18, ['Systems development'], [
    'A **data flow diagram** (DFD) shows how data moves through a system. The **context diagram** (level 0) shows the whole system as one process; **level 1** opens it into its main processes; **level 2** opens a level 1 process further.',
    'Symbols: an **external entity** (rectangle), a **process** (a numbered rounded box named with a verb, such as 2 Book appointment), a **data store** (an open-ended box, such as D2 Appointments) and a **data flow** (a labelled arrow).',
    'Rules: every flow is labelled; data cannot go directly between two entities, between two stores, or between an entity and a store; every process has an input and an output; and the levels must **balance**, so every flow in and out of a process appears when it is opened up.',
    '**Lab:** build the diagrams with a drawing tool, starting from the context diagram and keeping the same entity names at every level.',
  ], 'acs-dfd', 'Number processes at level 1 (1, 2, 3) and their parts at level 2 (2.1, 2.2).',
  ['In a DFD, which flow is NOT allowed?', ['Patient → D1 Patients', 'Patient → 1 Register patient', '1 Register patient → D1 Patients', 'D1 Patients → 2 Book appointment'], 'An entity cannot write to a store directly.'],
  [['Data flow diagram', 'A diagram showing how data moves through a system.'], ['Process', 'A step that transforms data, named with a verb.'], ['Balancing', 'Keeping the flows of a process the same when it is shown in more detail.']],
  [
    { q: 'Describe a level 1 DFD for a clinic.', steps: ['Entities: Patient, Doctor, Cashier. Processes: 1 Register patient, 2 Book appointment, 3 Record consultation, 4 Bill patient.', 'Stores: D1 Patients, D2 Appointments, D3 Consultations, D4 Bills.', '**Patient → 1 → D1; Patient → 2 → D2; Doctor → 3 → D3; 3 → 4 (treatment given) → D4; 4 → Cashier (bill).**'] },
    { q: 'Open process 2 Book appointment at level 2.', steps: ['2.1 Check doctor’s free times (reads D2).', '2.2 Record the booking (writes D2); 2.3 Send a confirmation SMS to the Patient.', '**The flows in and out still match those of process 2 at level 1.**'] },
  ]),

  L('ait-ad-2', 'ait-l6-analysis-design', '12.2', 'Entity-relationship diagrams', 18, ['Systems development'], [
    'An **entity-relationship diagram** (ERD) models the data a system stores. An **entity** is a thing about which data is kept (Patient, Doctor, Appointment); its **attributes** describe it; its **identifier** (primary key) picks out each one.',
    'Relationships have a **cardinality**: one-to-one (a school has one principal), one-to-many (a doctor has many appointments) or many-to-many (patients see many doctors and doctors see many patients). In crow’s foot notation, a bar marks "one" and a crow’s foot marks "many"; a circle shows that the link is optional.',
    'A **many-to-many** relationship is resolved with a **link entity** that takes part in two one-to-many relationships: Patient and Doctor are linked through Appointment.',
    'Each entity becomes a table; each one-to-many relationship becomes a **foreign key** in the table on the "many" side.',
  ], 'erd-school', 'Put the foreign key on the "many" side of every one-to-many relationship.',
  ['Patients see many doctors and doctors see many patients. This is resolved with:', ['a link entity such as Appointment', 'one table for both', 'a data store', 'a one-to-one link'], 'Two one-to-many relationships.'],
  [['Entity', 'A thing about which data is stored.'], ['Cardinality', 'How many of one entity relate to another: one or many.'], ['Link entity', 'An entity that resolves a many-to-many relationship.']],
  [
    { q: 'Draw, in words, the ERD for patients, doctors and appointments.', steps: ['PATIENT (one) to APPOINTMENT (many): a patient has many appointments.', 'DOCTOR (one) to APPOINTMENT (many): a doctor has many appointments.', '**APPOINTMENT holds PatientID and DoctorID as foreign keys, plus the date and time.**'] },
    { q: 'Turn the ERD into tables.', steps: ['PATIENT(PatientID, Name, Phone).', 'DOCTOR(DoctorID, Name, Speciality).', '**APPOINTMENT(AppointmentID, PatientID, DoctorID, Date, Time).**'] },
  ]),

  // ---------- 13. DBMS ----------
  L('ait-dbms-1', 'ait-l6-dbms', '13.1', 'File processing systems and the database approach', 17, ['Databases'], [
    'In a **file processing system**, each department keeps its own files and programs: the bursar, the examinations office and the library each store students’ names and classes.',
    'Problems: **data redundancy** (the same data stored many times, wasting space); **data inconsistency** (copies disagree after one is changed); **program-data dependence** (changing a file’s layout means changing every program that uses it); difficulty combining data from different files; and weak security and sharing.',
    'In the **database approach**, the data is stored once, in related tables, and shared by every department through a **database management system** (DBMS).',
    'A DBMS provides a **data dictionary** (data about the data), a query language (SQL), **security** with user accounts and rights, **integrity** rules (validation, keys, referential integrity), **concurrency control** for many users at once, and **backup and recovery** after failures.',
  ], 'ait-files-dbms', 'Redundancy leads to inconsistency: store each fact once.',
  ['A parent’s new phone number is updated in the bursar’s file but not the examinations file. This is:', ['data inconsistency', 'data independence', 'concurrency control', 'a backup'], 'Copies disagree.'],
  [['Data redundancy', 'The same data stored in more than one place.'], ['Database management system', 'Software that stores, protects and gives shared access to a database.'], ['Concurrency control', 'Stopping simultaneous users from spoiling each other’s updates.']],
  [
    { q: 'A school stores student details separately in the bursary, the examinations office and the library. Name three problems.', steps: ['Redundancy: the same names and classes typed three times.', 'Inconsistency: a change of class made in one office only.', '**Combining data, such as "students with fees owing and books overdue", needs all three files.**'] },
    { q: 'Which DBMS features deal with (i) two secretaries editing at once, (ii) a power cut during an update?', steps: ['(i) Concurrency control: record locking.', '(ii) Backup and recovery: the log is used to undo or complete the update.', '**Both protect the integrity of the data.**'] },
  ]),

  L('ait-dbms-2', 'ait-l6-dbms', '13.2', 'Lab: creating tables, keys and relationships', 18, ['Databases'], [
    'Use a DBMS such as Microsoft Access, LibreOffice Base, SQLite or MySQL with phpMyAdmin. For each table, choose the **fields** and their **data types**: text (VARCHAR), whole number (INTEGER), decimal or currency, date, and yes/no (Boolean).',
    'Set a **primary key** for each table; an AutoNumber or AUTO_INCREMENT key numbers new records automatically.',
    'Create the **relationships** by linking each foreign key to the primary key it refers to, and tick **Enforce referential integrity**. **Cascade update** changes foreign keys when a primary key changes; **cascade delete** removes related records when a record is deleted, so use it with care.',
    'The same structure in SQL: CREATE TABLE Purchase (PurchaseID INTEGER PRIMARY KEY, StudentID CHAR(6) NOT NULL, MealID INTEGER NOT NULL, Date DATE, FOREIGN KEY (StudentID) REFERENCES Student(StudentID), FOREIGN KEY (MealID) REFERENCES Meal(MealID));',
  ], 'ait-schema', 'Phone numbers and codes are text, not numbers: they are never added and may start with + or 0.',
  ['With referential integrity enforced and no cascade, deleting a student who has purchases is:', ['refused', 'allowed, leaving the purchases', 'allowed, deleting the purchases', 'ignored'], 'Orphan records are not allowed.'],
  [['Data type', 'The kind of value a field holds, such as text, number or date.'], ['AutoNumber', 'A key field numbered automatically by the DBMS.'], ['Cascade delete', 'Deleting related records automatically when a record is deleted.']],
  [
    { q: 'Design tables for a school canteen that records students’ meal purchases.', steps: ['STUDENT(StudentID, Name, Class).', 'MEAL(MealID, Name, Price).', '**PURCHASE(PurchaseID, StudentID, MealID, Date): two foreign keys, one-to-many from each of STUDENT and MEAL.**'] },
    { q: 'Choose data types: StudentID S00123, Price 500, Date 12/03/2027, Paid yes or no, Phone 677123456.', steps: ['StudentID: text (6). Price: currency or integer.', 'Date: date. Paid: yes/no.', '**Phone: text (it is never used in a calculation).**'] },
  ]),

  // ---------- 14. Data models ----------
  L('ait-dm-1', 'ait-l6-data-models', '14.1', 'Three levels of a database and three data models', 18, ['Databases'], [
    'The **three-level architecture** separates how users see data from how it is stored. The **external level** gives each user group its own **view** (a teacher sees marks, the bursar sees fees). The **conceptual level** describes all the organisation’s data and relationships. The **internal level** describes physical storage: files, records, indexes.',
    'This gives **data independence**: **physical** independence (storage can change without changing the conceptual design) and **logical** independence (the conceptual design can grow without changing users’ views).',
    'Design moves through three **data models**: **conceptual** (an ERD of entities and relationships, with no technical detail), **logical** (tables, attributes and keys, normalised, for any relational DBMS) and **physical** (data types, field sizes, indexes and storage for one particular DBMS).',
    'Each step adds detail, so mistakes are cheapest to fix at the conceptual stage.',
  ], 'ait-three-level', 'Conceptual: what data. Logical: what tables. Physical: how stored.',
  ['A teacher’s screen showing only marks for her classes is part of the:', ['external level', 'internal level', 'physical model', 'operating system'], 'A user view.'],
  [['External level', 'The views of the data seen by different users.'], ['Data independence', 'Changing one level of a database without affecting the others.'], ['Physical data model', 'The design for one DBMS: types, sizes, indexes and storage.']],
  [
    { q: 'Say which level or model each describes: (i) "Mark is stored as a 1-byte integer with an index", (ii) "A student takes many subjects", (iii) "The bursar sees name, class and fees owed".', steps: ['(i) Internal level, physical model.', '(ii) Conceptual model.', '**(iii) External level: the bursar’s view.**'] },
    { q: 'The school moves its database to a faster disk and adds an index. Must the teachers’ screens change?', steps: ['Only the internal level changed.', 'Physical data independence protects the views.', '**No: the screens stay the same.**'] },
  ]),

  L('ait-dm-2', 'ait-l6-data-models', '14.2', 'Lab: indexes, validation rules and access control', 18, ['Databases'], [
    'An **index** lets the DBMS find records by a field quickly, like the index of a book. Index fields that are searched or sorted often, such as Surname; a **unique index** also stops duplicates. Indexes take space and slow inserts slightly, so do not index everything.',
    '**Validation rules** in the table stop bad data at the source: in Access, a Mark rule of Between 0 And 20 with a validation text "Marks are from 0 to 20"; Required = Yes for a presence check; a field size; an **input mask** for a pattern such as a student number; and a default value.',
    '**Access control**: give each user an account and only the rights they need. In SQL: GRANT SELECT ON Result TO clerk; GRANT SELECT, UPDATE ON Result TO teacher; REVOKE removes rights. **Views** show users only certain columns or rows.',
    'Back up the database regularly and test that the backup can be restored.',
  ], 'ait-db-controls', 'Give every validation rule a message that tells the user what to type instead.',
  ['Which SQL statement lets a clerk read, but not change, the Result table?', ['GRANT SELECT ON Result TO clerk', 'GRANT UPDATE ON Result TO clerk', 'REVOKE SELECT ON Result FROM clerk', 'DROP TABLE Result'], 'SELECT only.'],
  [['Index', 'A structure that speeds up finding records by a field.'], ['Validation rule', 'A rule a value must obey before it is stored.'], ['GRANT', 'The SQL statement that gives a user rights on a table.']],
  [
    { q: 'Write validation rules for Mark (0 to 20), Gender (M or F) and StudentID (S followed by 5 digits).', steps: ['Mark: Between 0 And 20, "Marks are from 0 to 20".', 'Gender: "M" Or "F", "Type M or F".', '**StudentID: Like "S#####" (an input mask), "Use S and five digits, such as S00123".**'] },
    { q: 'The library searches books by title thousands of times a day but adds only a few books a week. Should Title be indexed?', steps: ['Searches are frequent and would be much faster.', 'The small cost on inserts hardly matters.', '**Yes, index Title.**'] },
  ]),

  // ---------- 15. Spreadsheets ----------
  L('ait-ss-1', 'ait-l6-spreadsheets', '15.1', 'Financial, logical and statistical functions', 18, ['Applications'], [
    '**Financial**: =PMT(rate, periods, present value) gives the regular payment on a loan; =FV(rate, periods, payment) gives the future value of regular savings; =NPV(rate, values) gives the net present value of future cash flows. Use the rate per period: 12 % a year is 1 % a month. Money paid out is negative, so put a minus before the loan or the payment to get a positive answer.',
    '**Logical**: =IF(test, value if true, value if false); nested IF or IFS for several bands; AND and OR to combine tests, such as =IF(AND(B2>=10, C2>=10), "Promoted", "Repeat").',
    '**Statistical**: AVERAGE, MEDIAN, MODE, STDEV, MIN and MAX; COUNTIF, SUMIF and AVERAGEIF with one condition; COUNTIFS and SUMIFS with several; =RANK(B2, $B$2:$B$41) for positions.',
    'Use **absolute references** ($B$2) for cells that must not move when a formula is copied, such as a tax rate or a range.',
  ], 'ait-sheet-functions', 'Before copying a formula down, ask which references must stay fixed and add the $ signs.',
  ['=COUNTIFS(C2:C41, "L6", D2:D41, ">=10") counts:', ['Lower Sixth students with at least 10', 'all students', 'marks above 10 only', 'Lower Sixth students only'], 'Both conditions.'],
  [['PMT', 'The spreadsheet function giving the regular payment on a loan.'], ['Nested IF', 'An IF inside another IF, to choose among several outcomes.'], ['Absolute reference', 'A cell reference with $ signs that does not change when copied.']],
  [
    { q: 'A shop borrows 1 000 000 FCFA at 12 % a year, repaid monthly over a year. Find the payment.', steps: ['Monthly rate 1 %, 12 payments.', '=PMT(1%, 12, -1000000)', '**About 88 849 FCFA a month.**'] },
    { q: 'Write a formula for grades: 16 or more A, 14 or more B, 10 or more C, otherwise F.', steps: ['Test the highest band first.', '=IF(B2>=16,"A",IF(B2>=14,"B",IF(B2>=10,"C","F")))', '**Or =IFS(B2>=16,"A",B2>=14,"B",B2>=10,"C",TRUE,"F").**'] },
    { q: 'Saving 10 000 FCFA a month at 0.5 % a month, how much is there after a year?', steps: ['=FV(0.5%, 12, -10000)', '10 000 × (1.005¹² − 1) ÷ 0.005 ≈ 10 000 × 12.336.', '**About 123 356 FCFA.**'] },
  ]),

  L('ait-ss-2', 'ait-l6-spreadsheets', '15.2', 'Lookups, pivot tables and what-if analysis', 18, ['Applications'], [
    '**VLOOKUP** looks down the first column of a table and returns a value from the same row: =VLOOKUP(A2, Prices!$A$2:$C$50, 3, FALSE) finds the code in A2 and returns the third column; FALSE asks for an exact match. **XLOOKUP** can return from any column, left or right, and give a message if nothing is found: =XLOOKUP(A2, Prices!A2:A50, Prices!C2:C50, "Not found"). **INDEX with MATCH** does the same in older spreadsheets.',
    'A **pivot table** summarises a large table: drag a field such as Region to Rows, Month to Columns and Amount to Values (as a sum) to see sales by region and month at once; filters and grouping refine it.',
    '**What-if analysis** changes inputs to see the effect on results. **Goal Seek** works backwards: set the result you want and let the spreadsheet find the input needed. **Scenarios** store sets of inputs (best case, worst case) to compare.',
    'Check lookups for codes typed with extra spaces, and keep source data as a clean table with one heading row.',
  ], 'ait-pivot', 'Use exact match (FALSE, or XLOOKUP’s default) for codes; approximate match is for bands such as tax rates.',
  ['To see total sales for each region and month from 5000 rows, use:', ['a pivot table', 'VLOOKUP', 'Goal Seek', 'a pie chart only'], 'It groups and sums.'],
  [['VLOOKUP', 'A function that finds a value in the first column of a table and returns a value from the same row.'], ['Pivot table', 'A summary table that groups and totals data.'], ['Goal Seek', 'A tool that finds the input needed to reach a chosen result.']],
  [
    { q: 'Price list: column A codes, column C prices. Find the price of the code in A2 with VLOOKUP and with XLOOKUP.', steps: ['=VLOOKUP(A2, Prices!$A$2:$C$50, 3, FALSE)', '=XLOOKUP(A2, Prices!$A$2:$A$50, Prices!$C$2:$C$50, "Not found")', '**Both return the price; XLOOKUP also handles missing codes.**'] },
    { q: 'Profit = units × (price − 1500) − 200 000. With 400 units, what price gives a profit of 500 000 FCFA? (Goal Seek)', steps: ['400 × (price − 1500) = 700 000.', 'price − 1500 = 1750.', '**Price 3250 FCFA.**'] },
  ]),

  // ---------- 16. Web forms ----------
  L('ait-web-1', 'ait-l6-web-forms', '16.1', 'HTML form elements', 18, ['Web'], [
    'A **form** collects data and sends it to a server: <form action="/register" method="post"> … </form>. Each control has a **name**, which is sent with its value.',
    'Controls: <input type="text">, "email", "number", "password" and "date"; **radio buttons** (<input type="radio">, sharing one name, so only one can be chosen); **check boxes** (any number can be ticked); a **drop-down menu** (<select> with <option> items); a **text area** (<textarea>) for several lines; and a **submit button** (<button type="submit">).',
    'Every control should have a **label**: <label for="email">Email</label> <input type="email" id="email" name="email">. Clicking the label selects the field, and screen readers read it aloud.',
    'Choose the control to suit the data: one of a few options, radio buttons; one of many, a drop-down; several, check boxes; free text, a text box or text area.',
  ], 'ait-html-form', 'Radio buttons in a group must share the same name, or several can be chosen at once.',
  ['To let a student choose any number of clubs, use:', ['check boxes', 'radio buttons', 'a password field', 'a single text box'], 'Several can be ticked.'],
  [['Form', 'A part of a web page that collects data and sends it to a server.'], ['Radio button', 'A control for choosing exactly one option of a group.'], ['Label', 'Text linked to a form control, describing it.']],
  [
    { q: 'Choose controls for: full name, class (Lower or Upper Sixth), series (one of 8), clubs, comments.', steps: ['Name: text input. Class: two radio buttons.', 'Series: a drop-down menu. Clubs: check boxes.', '**Comments: a text area.**'] },
    { q: 'Write the HTML for the class choice.', steps: ['<input type="radio" id="l6" name="form" value="L6"> <label for="l6">Lower Sixth</label>', '<input type="radio" id="u6" name="form" value="U6"> <label for="u6">Upper Sixth</label>', '**Both share name="form", so only one can be chosen.**'] },
  ]),

  L('ait-web-2', 'ait-l6-web-forms', '16.2', 'Lab: styling forms with CSS and validating input', 18, ['Web'], [
    '**CSS** makes a form clear and easy to use, for example: label { display: block; margin-top: 12px; font-weight: bold; } input, select, textarea { width: 100%; padding: 8px; border: 1px solid #999; border-radius: 4px; } button { padding: 10px 20px; }. Keep labels close to their fields and use enough contrast.',
    '**Validation in the browser**: required (a presence check), min and max for numbers and dates, minlength and maxlength, type="email", and pattern for a format: pattern="6[0-9]{8}" accepts a 9-digit Cameroon mobile number starting with 6. The selector input:invalid can colour a wrong field.',
    'The **method**: **GET** adds the data to the address (/search?q=biology&form=L6), which suits searches that can be bookmarked; **POST** sends it inside the request, which suits personal data and passwords. Use HTTPS so the data is encrypted.',
    'Browser checks can be switched off by anyone, so the server must **validate again** before storing anything.',
  ], 'ait-get-post', 'Validate in the browser for the user’s convenience, and on the server for safety.',
  ['A search form with method="get" sends the search words:', ['in the address (URL)', 'hidden in the request body', 'by email', 'nowhere'], 'They can be bookmarked.'],
  [['CSS', 'Cascading Style Sheets, the language that styles web pages.'], ['pattern attribute', 'A rule giving the format a field’s value must match.'], ['POST', 'Sending form data inside the body of the request.']],
  [
    { q: 'Write an input for a Cameroon mobile number that must be filled in.', steps: ['type="tel" for a phone keypad on mobiles.', 'pattern="6[0-9]{8}" for 9 digits starting with 6; required for presence.', '**<input type="tel" id="phone" name="phone" pattern="6[0-9]{8}" required>**'] },
    { q: 'A search form with fields q and form uses GET. What address is requested for "biology" and "L6"?', steps: ['GET adds name=value pairs after a ?.', 'Pairs are joined with &.', '**/search?q=biology&form=L6**'] },
  ]),

  // ---------- 17. Simulation ----------
  L('ait-sim-1', 'ait-l6-simulation', '17.1', 'What simulation is and where it is used', 17, ['Applications'], [
    'A **model** represents a real system with **variables** (inputs and outputs), **rules** linking them and **assumptions** that simplify reality. A **simulation** runs the model, often over time, to see how the system behaves and to ask "what if?".',
    'A **deterministic** model always gives the same output for the same inputs; a **stochastic** model uses **random numbers** for chance events, so it is run many times. **Discrete** simulations jump from event to event (customers arriving at a counter); **continuous** ones change smoothly (temperature, water level).',
    'Simulations are used where real tests would be dangerous, costly, slow or impossible: flight and driving simulators, nuclear reactor safety, weather and climate forecasting, traffic and road junctions, the spread of epidemics, car crash tests, bridges and dams, and business forecasts.',
    'Advantages: safe, cheaper than the real thing, repeatable, and time can be sped up or slowed down. Limitations: a model simplifies reality and is only as good as its data and assumptions; good models can be costly to build and need a lot of computing power; results must be **validated** against real data.',
  ], 'ait-simulation', 'Always list a model’s assumptions: they are where its results can go wrong.',
  ['Which suits a simulation best?', ['testing how a dam behaves in a hundred-year flood', 'recording today’s sales', 'printing report cards', 'sending an email'], 'Too dangerous to wait for or test for real.'],
  [['Model', 'A set of variables and rules representing a real system.'], ['Stochastic model', 'A model that uses random numbers for chance events.'], ['Validation of a model', 'Checking its results against real data.']],
  [
    { q: 'List the variables, rules and assumptions of a simple epidemic model.', steps: ['Variables: people susceptible, infected and recovered; the infection and recovery rates.', 'Rules: each day new infections = rate × susceptible × infected ÷ population; recoveries = recovery rate × infected.', '**Assumptions: everyone mixes equally; nobody is born or moves; immunity lasts.**'] },
    { q: 'Give two reasons for training pilots in simulators.', steps: ['Emergencies such as engine failure can be practised safely.', 'It is far cheaper than flying a real aircraft.', '**Situations can be repeated until the pilot handles them well.**'] },
  ]),

  L('ait-sim-2', 'ait-l6-simulation', '17.2', 'Lab: building a simulation in a spreadsheet', 18, ['Applications'], [
    'Steps: state the purpose; choose the variables; write the rules as formulas; record the assumptions; build the model; **validate** it against real data; then run **what-if** experiments.',
    'A **deterministic** example: a town of 50 000 people growing at 3 % a year. Put 50 000 in B2 and the rate in E1; in B3 write =B2*(1+$E$1) and copy it down. Changing E1 shows the effect of a different growth rate.',
    'A **stochastic** example: a queue at the bursar’s window. Each minute 0, 1 or 2 students arrive: =RANDBETWEEN(0,2). The cashier serves one student a minute when anyone is waiting: served =MIN(1, previous queue + arrivals), and the new queue = previous queue + arrivals − served. For an event with a set chance, use RAND(): =IF(RAND()<0.3,1,0) gives 1 about 30 % of the time. Press F9 to run the model again with new random numbers.',
    'Because each run differs, a stochastic model is run many times (**Monte Carlo** simulation) and the results averaged, or their spread studied.',
  ], 'ait-sim-sheet', 'Keep each input in one labelled cell and refer to it with $ signs, so a what-if test changes one cell only.',
  ['=IF(RAND()<0.3, 1, 0) gives 1 about:', ['30 % of the time', '3 % of the time', 'always', 'never'], 'RAND is spread evenly from 0 to 1.'],
  [['RAND', 'A spreadsheet function giving a random decimal from 0 up to 1.'], ['Monte Carlo simulation', 'Running a random model many times and studying the results.'], ['What-if analysis', 'Changing inputs to see how outputs change.']],
  [
    { q: 'A town of 50 000 grows by 3 % a year. Find its size after 3 years.', steps: ['50 000 × 1.03 = 51 500; × 1.03 = 53 045.', '53 045 × 1.03 = 54 636.35.', '**About 54 636 people.**'] },
    { q: 'In the queue model, why might the bursar want to know the longest queue rather than the average?', steps: ['Students may miss classes or leave if the queue is long.', 'The longest queue shows the worst moments.', '**Run the model many times and record the longest queue, then test a second window as a what-if.**'] },
  ]),

  // ---------- 18. Paradigms ----------
  L('ait-par-1', 'ait-l6-paradigms', '18.1', 'Programming paradigms and generations of languages', 17, ['Programming'], [
    '**Imperative** (procedural) programming gives the computer steps that change variables, grouped into procedures: C, Pascal, BASIC, and Python used this way. **Object-oriented** programming builds programs from classes and objects: Java, C++, C#, Python.',
    '**Declarative** programming states what is wanted. **Logic** languages such as Prolog hold facts and rules and answer queries; **functional** languages such as Haskell build programs from functions that do not change variables; **query languages** such as SQL describe the data wanted from a database.',
    'Generations: **1GL** machine code (binary); **2GL** assembly language (mnemonics); **3GL** high-level languages (C, Python, Java); **4GL** languages closer to the problem, such as SQL and report generators; **5GL** languages where the problem is described by constraints and rules, such as Prolog, used in AI research.',
    'HTML and CSS are **markup and style languages**: they describe documents but are not programming languages.',
  ], 'acs-paradigms', 'Ask "does it say how, or what?": how is imperative, what is declarative.',
  ['SQL is usually classed as:', ['a fourth-generation, declarative query language', 'machine code', 'an assembly language', 'a markup language'], 'It states the data wanted.'],
  [['Imperative programming', 'Programming with steps that change the program’s state.'], ['Declarative programming', 'Programming that states the result wanted, not the steps.'], ['Fourth-generation language', 'A language close to the problem, such as SQL.']],
  [
    { q: 'Find the average mark of Lower Sixth students, imperatively and with SQL.', steps: ['Imperative: total ← 0; count ← 0; for each student, if form = "L6", add the mark and 1 to count; average ← total ÷ count.', 'SQL: SELECT AVG(Mark) FROM Student WHERE Form = \'L6\';', '**The SQL says what is wanted; the DBMS decides how.**'] },
    { q: 'Classify: 10110000 01100001, MOV AL, 61h, print(total), SELECT Name FROM Student.', steps: ['Binary: 1GL. MOV AL, 61h: 2GL assembly.', 'print(total): 3GL (Python).', '**SELECT …: 4GL.**'] },
  ]),

  L('ait-par-2', 'ait-l6-paradigms', '18.2', 'Lab: compilers, interpreters and clean code', 18, ['Programming'], [
    'A **compiler** translates a whole program into machine code before it runs: in C, gcc hello.c -o hello makes an executable that runs with ./hello. An **interpreter** translates and runs one statement at a time: python hello.py. Java compiles to bytecode (javac Hello.java) that the Java Virtual Machine runs (java Hello).',
    'In the lab, put the same mistake into a C program and a Python program. The compiler lists all the errors and makes no executable; the interpreter runs up to the faulty line and stops there. Then time a long loop in both: the compiled program is usually much faster.',
    '**Clean code** is easy for others to read and change: meaningful names (total_fees, not t); small functions that do one thing; consistent indentation; named constants instead of "magic numbers"; comments that explain why, not what; and no repeated code.',
    'Cameroon’s standard VAT rate, 19.25 %, is a good example of a constant: VAT_RATE = 0.1925 is clearer and easier to update than 0.1925 scattered through a program.',
  ], 'compile-chain', 'If you have to explain a line with a comment, first try a better name.',
  ['A program with an error near the end is run with an interpreter. It:', ['runs the earlier lines, then stops at the error', 'produces no output at all', 'is compiled first', 'ignores the error'], 'Line by line.'],
  [['Compiler', 'A translator that turns a whole program into machine code before it runs.'], ['Interpreter', 'A translator that runs a program one statement at a time.'], ['Magic number', 'An unexplained number written directly in code.']],
  [
    { q: 'Make this clean: def f(a): return a + a * 0.1925', steps: ['Name the constant: VAT_RATE = 0.1925.', 'Name the function and parameter: def price_with_vat(price):', '**    return price * (1 + VAT_RATE)**'] },
    { q: 'Why might a company ship compiled code but use an interpreter while developing?', steps: ['While developing, the interpreter shows errors at once, line by line.', 'Customers get a fast executable and do not see the source.', '**Each translator suits a different stage.**'] },
  ]),

  // ---------- 19. Artificial intelligence ----------
  L('ait-ai-1', 'ait-l6-ai', '19.1', 'Artificial intelligence and expert systems', 18, ['Emerging technologies'], [
    '**Artificial intelligence** (AI) is the ability of computers to do tasks that need intelligence in people: reasoning, learning, understanding language, seeing. Today’s systems are **narrow AI**, each good at one kind of task. **Cognitive science** studies how minds think, drawing on psychology, neuroscience, linguistics and computing, and inspires AI methods.',
    'An **expert system** captures the knowledge of human experts. Its parts are a **knowledge base** of facts and IF … THEN rules; an **inference engine** that applies the rules; a **user interface** that asks questions; and an **explanation facility** that shows how a conclusion was reached. A **knowledge engineer** gathers the rules from experts.',
    '**Forward chaining** starts from the known facts and fires rules until a conclusion is reached (data-driven). **Backward chaining** starts from a possible conclusion and checks whether the facts support it, asking the user for missing facts (goal-driven).',
    'Expert systems give consistent advice at any time and keep scarce knowledge, but they cannot handle situations their rules do not cover and must be kept up to date. Medical diagnosis, fault-finding and loan approval have all used them.',
  ], 'ait-expert-system', 'Forward chaining: facts → conclusion. Backward chaining: conclusion → is it supported?',
  ['The part of an expert system that applies the rules to the facts is the:', ['inference engine', 'knowledge base', 'user interface', 'explanation facility'], 'It reasons.'],
  [['Expert system', 'A program that gives advice using rules gathered from human experts.'], ['Inference engine', 'The part that applies the rules to reach conclusions.'], ['Forward chaining', 'Reasoning from known facts towards a conclusion.']],
  [
    { q: 'Rules: R1 IF no power light AND fan silent THEN power supply fault. R2 IF power supply fault THEN check the cable and socket first. Facts: no power light, fan silent. Use forward chaining.', steps: ['Both conditions of R1 are true, so it fires: power supply fault.', 'That new fact makes R2 fire.', '**Advice: check the cable and socket first.**'] },
    { q: 'Using backward chaining, how would the system test the goal "power supply fault"?', steps: ['Find a rule that concludes it: R1.', 'Check its conditions: ask the user "Is the power light off?" and "Is the fan silent?".', '**If both are yes, the goal is proved; the explanation facility can show R1.**'] },
  ]),

  L('ait-ai-2', 'ait-l6-ai', '19.2', 'Machine learning, neural networks and robotics', 18, ['Emerging technologies'], [
    '**Machine learning** finds patterns in data instead of following rules written by hand. In **supervised** learning the training examples carry the right answers (photos of leaves labelled healthy or diseased); in **unsupervised** learning the system finds groups in unlabelled data (customers with similar buying habits); in **reinforcement** learning it learns by trial and error from rewards and penalties (playing games, controlling robots).',
    'A model is trained on one set of data and tested on another it has not seen; its **accuracy** is the fraction of test cases it gets right. **Neural networks** are layers of connected nodes whose connection weights are adjusted during training; many layers give **deep learning**, used for images and speech.',
    '**Robots** sense, decide and act. Sensors give **perception**: cameras and computer vision recognise objects, and touch and force sensors tell a gripper how hard to hold. Actuators such as motors then move the robot.',
    'Uses include spotting crop disease from phone photos, reading medical scans, detecting fraud in mobile money and voice assistants. The risks: **bias** from unbalanced training data, privacy, jobs and who is responsible when an AI is wrong.',
  ], 'ait-ml', 'A model is only as good as its training data: check that the data covers everyone it will be used on.',
  ['Training a model on photos already marked "healthy" or "diseased" is:', ['supervised learning', 'unsupervised learning', 'reinforcement learning', 'an expert system'], 'The answers are given.'],
  [['Machine learning', 'Computers learning patterns from data.'], ['Neural network', 'Layers of connected nodes whose weights are adjusted during training.'], ['Bias in AI', 'Unfair results caused by unbalanced data or design.']],
  [
    { q: 'A leaf-disease model gets 180 of 200 new test photos right. Find its accuracy. Why test on new photos?', steps: ['180 ÷ 200 = 0.9.', 'Photos used in training could simply be remembered.', '**90 %, measured on unseen photos to show how it will do in the field.**'] },
    { q: 'Which kind of learning: (i) grouping shoppers by habit, (ii) a robot learning to walk, (iii) recognising handwritten digits from labelled examples?', steps: ['(i) Unsupervised: no labels.', '(ii) Reinforcement: rewards for progress.', '**(iii) Supervised.**'] },
    { q: 'Why does a fruit-picking robot need touch sensors as well as cameras?', steps: ['The camera finds and recognises the fruit.', 'Touch and force sensors tell it how hard it is gripping.', '**Without them it would drop or crush the fruit.**'] },
  ]),

  // ---------- 20. Implementation ----------
  L('ait-imp-1', 'ait-l6-implementation', '20.1', 'Changeover methods, data conversion and training', 18, ['Systems development'], [
    '**Direct changeover**: the old system stops and the new one starts at once. It is quick and cheap, but if the new system fails there is nothing to fall back on.',
    '**Parallel running**: old and new systems run side by side for a time and their results are compared. It is the safest, but staff do every job twice.',
    '**Phased** implementation brings in the new system one part at a time (fees first, then examinations). A **pilot** brings in the whole system in one branch or department first, then everywhere once it works.',
    'Implementation also needs **data conversion** (moving old records into the new format, then checking them), **training** for each kind of user, and installing hardware and software. The choice of method depends on the risk of failure, the cost and the time available.',
  ], 'ait-changeover', 'The more costly a failure would be, the safer (and costlier) the changeover should be.',
  ['A bank introducing a new accounts system should usually use:', ['parallel running', 'direct changeover', 'no testing', 'random changeover'], 'Results can be checked against the old system.'],
  [['Direct changeover', 'Replacing the old system with the new one at once.'], ['Parallel running', 'Running the old and new systems together for a time.'], ['Pilot implementation', 'Trying the new system in one part of an organisation first.']],
  [
    { q: 'Choose a method: (i) a new fees system in one of a group’s five schools first, (ii) a small shop’s new till over a weekend, (iii) payroll for 3000 staff.', steps: ['(i) Pilot.', '(ii) Direct: small, simple, and the shop is closed.', '**(iii) Parallel running: mistakes in pay are costly.**'] },
    { q: 'Why is data conversion often the hardest part?', steps: ['Old records may be on paper, incomplete or in a different format.', 'Errors copied across spoil the new system from the start.', '**Plan it, check samples against the originals, and keep the old data until checked.**'] },
  ]),

  L('ait-imp-2', 'ait-l6-implementation', '20.2', 'Prototyping, user feedback and user documentation', 18, ['Systems development'], [
    'A **prototype** is an early working model shown to users. A **throwaway** prototype explores what users want and is then discarded while the real system is built properly; an **evolutionary** prototype is improved again and again until it becomes the final system.',
    'Collect **user feedback** by watching users try tasks, short questionnaires, interviews and bug reports. Record each request, decide which to act on, and show users what changed.',
    '**User documentation**: a **user guide** in plain language (installing, starting, each task step by step with screenshots, error messages and what to do); a **quick reference** or **support sheet** with the main tasks on one page; FAQs; and short video tutorials. **Technical documentation** is for those who maintain the system.',
    '**Lab:** write a support sheet for one task of your system, then give it to a classmate who has not seen the system and watch whether they can follow it.',
  ], 'ait-prototype', 'Test a user guide on someone who has never seen the system: where they hesitate, rewrite.',
  ['A prototype improved repeatedly until it becomes the final system is:', ['evolutionary', 'throwaway', 'a pilot', 'parallel'], 'It evolves.'],
  [['Prototype', 'An early working model used to explore and test ideas with users.'], ['User guide', 'A document explaining how to use a system.'], ['Support sheet', 'A one-page quick reference for the main tasks.']],
  [
    { q: 'Outline a user guide for a school fees system.', steps: ['Contents; installing and logging in.', 'Tasks: find a student, record a payment, print a receipt, run the daily report, each with numbered steps and screenshots.', '**Error messages and what to do, FAQs, and who to contact.**'] },
    { q: 'Users of a prototype say the payment screen has too many fields. What do you do?', steps: ['Watch several users record a payment and note where they slow down.', 'Remove or hide rarely used fields, and fill defaults such as today’s date.', '**Show the new version to the same users and check the time per payment falls.**'] },
  ]),

  // ---------- 21. Examination practice ----------
  L('ait-l6-paper1', 'ait-l6-papers', '21.1', 'Paper 1 drills: operating systems, normalisation and subnets', 20, ['Examination practice'], [
    'GCE A Level ICT is 0796 (0795 is Computer Science). In the 2026 session **Paper 1** (multiple choice, 1½ hours) and **Paper 2** (2½ hours) were both on Tuesday 9 June, and the **practical** ran from Thursday 7 to Saturday 9 May. Check the timetable for your year.',
    '**Operating systems**: link each type to its use (batch, time-sharing, real-time, transaction processing, distributed) and know scheduling, paging, page replacement and deadlock.',
    '**Normalisation**: a table is in 1NF when every field holds one value and there are no repeating groups; in 2NF when no field depends on only part of a composite key; in 3NF when no non-key field depends on another non-key field.',
    '**Subnets**: hosts = 2ʰ − 2 for h host bits; the block size is 256 minus the splitting byte of the mask.',
  ], 'ait-gce', 'Cross out options you know are wrong before choosing: two are usually easy to remove.',
  ['A /28 subnet has how many usable hosts?', ['14', '16', '28', '30'], '2⁴ − 2.'],
  [['Repeating group', 'Several values of the same kind stored in one record, not allowed in 1NF.'], ['Composite key', 'A primary key made of two or more fields.'], ['Block size', 'The number of addresses in each subnet.']],
  [
    { q: 'ORDER(OrderNo, CustomerName, {ItemCode, ItemName, Qty}). Normalise to 3NF.', steps: ['1NF: ORDER(OrderNo, CustomerName) and ORDERLINE(OrderNo, ItemCode, ItemName, Qty).', '2NF: ItemName depends on ItemCode alone: ITEM(ItemCode, ItemName); ORDERLINE(OrderNo, ItemCode, Qty).', '**3NF: no transitive dependencies remain. (With a customer ID, customer details would move to CUSTOMER.)**'] },
    { q: 'Give the network and broadcast addresses of 192.168.4.100/27.', steps: ['/27 makes blocks of 32: 96 to 127 holds 100.', 'Network 192.168.4.96, broadcast 192.168.4.127.', '**Hosts .97 to .126.**'] },
  ]),

  L('ait-l6-paper2', 'ait-l6-papers', '21.2', 'Paper 2 drills: scenarios, DFDs, queries and project timelines', 20, ['Examination practice'], [
    'Paper 2 sets **scenarios**: read the whole case, underline the people, organisations and documents (they become entities and flows), and answer in terms of that case, not in general.',
    'For **DFDs**, draw the context diagram first, then level 1, keeping names consistent and every flow labelled. For **database queries**, name the tables and keys, then write the SQL with the right WHERE conditions.',
    'For **project timelines**, a **Gantt chart** shows each task as a bar against time. Tasks that depend on others start only when those finish; the longest chain of dependent tasks is the **critical path**, and any delay on it delays the whole project. Tasks off the critical path have **slack**.',
    'Plan your time by the marks, and leave time to check diagrams and queries.',
  ], 'ait-gantt', 'Find the critical path by adding the durations along every chain of dependent tasks and taking the longest.',
  ['A task on the critical path is delayed by one week. The project:', ['finishes one week late', 'is not affected', 'finishes one week early', 'must restart'], 'There is no slack on the critical path.'],
  [['Gantt chart', 'A chart showing tasks as bars against time.'], ['Critical path', 'The longest chain of dependent tasks, which sets the project’s length.'], ['Slack', 'How long a task can be delayed without delaying the project.']],
  [
    { q: 'Tasks: A analysis 2 weeks; B design 3 (after A); C build 4 (after B); D user guide 2 (after B); E testing 1 (after C and D). Find the project length, critical path and the slack on D.', steps: ['A → B → C → E = 2 + 3 + 4 + 1 = 10 weeks; A → B → D → E = 2 + 3 + 2 + 1 = 8 weeks.', 'The critical path is A, B, C, E: 10 weeks.', '**D has 2 weeks of slack.**'] },
    { q: 'Write SQL for the names of students with fees owing above 50 000 FCFA, largest first.', steps: ['SELECT Name, Owing FROM Student', 'WHERE Owing > 50000', '**ORDER BY Owing DESC;**'] },
  ]),
];
