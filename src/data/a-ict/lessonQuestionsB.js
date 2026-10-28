// Extra questions for the A Level ICT lessons (0796), Lower Sixth Terms 2 and
// 3: information systems, databases, applications, programming, AI and
// implementation.
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const QUESTIONS_B = {
  // ---------- Lower Sixth, Terms 2 and 3 ----------
  'ait-mis-1': [
    Q('"14, 16, 9" without any context is:', ['data', 'information', 'knowledge', 'a report'], 'Raw facts.'),
    Q('Supermarket tills that record each sale form a:', ['transaction processing system', 'decision support system', 'executive information system', 'expert system'], 'Day-to-day transactions.'),
    Q('Tactical decisions are made by:', ['middle managers', 'customers', 'top managers only', 'clerks only'], 'Medium-term, using MIS reports.'),
    Q('Feedback in an information system is used to:', ['adjust and improve decisions', 'delete data', 'print faster', 'turn off the system'], 'Outputs guide future inputs.'),
  ],
  'ait-mis-2': [
    Q('A context diagram contains how many processes?', ['one', 'one per department', 'none', 'one per entity'], 'The whole system.'),
    Q('Data stores on a context diagram are:', ['not shown', 'shown at the edges', 'shown as entities', 'required'], 'They are inside the system.'),
    Q('A supplier who receives orders from the system is:', ['an external entity', 'a process', 'a data store', 'a data flow'], 'Outside the system.'),
    Q('Which tool can draw context diagrams?', ['diagrams.net (draw.io)', 'Task Manager', 'ping', 'chmod'], 'A drawing tool.'),
  ],
  'ait-inv-1': [
    Q('"Customers wait a long time" is:', ['a symptom', 'a cause', 'a solution', 'a requirement'], 'Look for what causes it.'),
    Q('A drawback of questionnaires is that:', ['answers are short and many are not returned', 'they take one person hours each', 'they cannot reach many people', 'they show how work is done'], 'Low detail, low return.'),
    Q('Interviews are best for:', ['detailed answers and follow-up questions', 'reaching hundreds quickly', 'counting documents', 'watching work'], 'Depth.'),
    Q('Sampling is used when:', ['there is too much to examine everything', 'there is nothing to examine', 'users refuse interviews', 'the system is new'], 'Study a fair part.'),
  ],
  'ait-inv-2': [
    Q('Schedule feasibility asks whether:', ['the system can be ready in time', 'it is legal', 'users like it', 'it is cheap'], 'Deadlines.'),
    Q('Training staff is a:', ['development cost', 'tangible benefit', 'intangible benefit', 'running saving'], 'Paid to introduce the system.'),
    Q('Better customer satisfaction is a:', ['intangible benefit', 'tangible benefit', 'cost', 'constraint'], 'Hard to measure in money.'),
    Q('A cost of 8 000 000 FCFA with savings of 2 000 000 FCFA a year pays back in:', ['4 years', '2 years', '8 years', '10 years'], '8 ÷ 2.'),
  ],
  'ait-ad-1': [
    Q('Processes at level 2 opened from process 3 are numbered:', ['3.1, 3.2, …', '1, 2, 3', 'A, B, C', 'D1, D2'], 'Following their parent.'),
    Q('A data store is named with:', ['an ID and a noun, such as D2 Appointments', 'a verb', 'a person’s name', 'a number only'], 'Data at rest.'),
    Q('Two data stores linked by a flow with no process is:', ['an error', 'correct', 'a context diagram', 'balancing'], 'A process must move the data.'),
    Q('A DFD does not show:', ['the order or timing of steps', 'data flows', 'processes', 'data stores'], 'Use a flowchart for that.'),
  ],
  'ait-ad-2': [
    Q('A school has one principal and a principal leads one school. This is:', ['one-to-one', 'one-to-many', 'many-to-many', 'none'], 'One each way.'),
    Q('An attribute that identifies each entity occurrence is its:', ['identifier (primary key)', 'foreign key', 'relationship', 'data flow'], 'Such as PatientID.'),
    Q('In crow’s foot notation, a circle on a line means the link is:', ['optional', 'compulsory', 'many-to-many', 'deleted'], 'Zero is allowed.'),
    Q('The foreign key of a one-to-many relationship goes in the table on the:', ['many side', 'one side', 'both sides', 'neither side'], 'Appointment holds PatientID.'),
  ],
  'ait-dbms-1': [
    Q('The database approach stores each fact:', ['once, shared by all departments', 'once per department', 'on paper only', 'in every program'], 'No redundancy.'),
    Q('Program-data independence is provided by:', ['the DBMS', 'separate files', 'spreadsheets', 'printers'], 'Programs do not depend on storage details.'),
    Q('Backup and recovery protect against:', ['loss of data after failures', 'slow queries', 'bad passwords', 'redundancy'], 'Restore from copies and logs.'),
    Q('Integrity rules in a DBMS include:', ['validation and referential integrity', 'screen colours', 'printer settings', 'network cables'], 'Keeping data correct.'),
  ],
  'ait-dbms-2': [
    Q('A Price field of 500 FCFA suits the data type:', ['currency or number', 'text', 'date', 'yes/no'], 'It is used in sums.'),
    Q('A Paid field that is either yes or no suits:', ['Boolean (yes/no)', 'text', 'date', 'currency'], 'Two values.'),
    Q('Cascade update:', ['changes matching foreign keys when a primary key changes', 'deletes records', 'backs up the table', 'adds an index'], 'Keeps links correct.'),
    Q('AUTO_INCREMENT in MySQL:', ['numbers new records automatically', 'speeds up the server', 'encrypts data', 'deletes duplicates'], 'Like Access AutoNumber.'),
  ],
  'ait-dm-1': [
    Q('The internal level is also called the:', ['physical level', 'external level', 'view level', 'user level'], 'Storage.'),
    Q('Logical data independence lets:', ['the conceptual design grow without changing users’ views', 'the disk change', 'users delete tables', 'the network change'], 'Views are protected.'),
    Q('Choosing field sizes and indexes belongs to the:', ['physical data model', 'conceptual model', 'external level', 'context diagram'], 'For one DBMS.'),
    Q('Mistakes are cheapest to fix at the:', ['conceptual stage', 'physical stage', 'after building', 'after release'], 'Least detail to change.'),
  ],
  'ait-dm-2': [
    Q('A unique index:', ['prevents duplicate values in a field', 'allows any duplicates', 'deletes records', 'encrypts the field'], 'As well as speeding searches.'),
    Q('Indexes slow down:', ['inserting and updating records slightly', 'searching', 'sorting', 'reading'], 'The index must be updated too.'),
    Q('REVOKE in SQL:', ['removes rights from a user', 'gives rights', 'deletes a table', 'creates a view'], 'The opposite of GRANT.'),
    Q('A view can be used to:', ['show users only certain columns or rows', 'delete the database', 'back up data', 'change the disk'], 'Part of access control.'),
  ],
  'ait-ss-1': [
    Q('A 12 % yearly rate for monthly payments is entered in PMT as:', ['1 % (12 % ÷ 12)', '12 %', '0.12 %', '144 %'], 'Rate per period.'),
    Q('=SUMIF(C2:C41, "L6", E2:E41) adds:', ['the E values of rows where C is L6', 'all E values', 'the C values', 'nothing'], 'One condition.'),
    Q('=MEDIAN(B2:B6) of 4, 9, 7, 2, 12 is:', ['7', '6.8', '9', '2'], 'Sorted: 2, 4, 7, 9, 12.'),
    Q('Copying =B2*$E$1 down one row gives:', ['=B3*$E$1', '=B3*$E$2', '=B2*$E$1', '=C2*$E$1'], 'Only the relative part moves.'),
  ],
  'ait-ss-2': [
    Q('In VLOOKUP, the last argument FALSE asks for:', ['an exact match', 'an approximate match', 'a sorted table', 'an error'], 'Use for codes.'),
    Q('VLOOKUP cannot return a value from:', ['a column to the left of the search column', 'the same row', 'a column to the right', 'another sheet'], 'XLOOKUP can.'),
    Q('In a pivot table, the field placed in Values is usually:', ['summed or counted', 'sorted only', 'deleted', 'hidden'], 'The figures to summarise.'),
    Q('Scenarios in a spreadsheet store:', ['sets of input values to compare', 'charts', 'passwords', 'macros only'], 'Best case, worst case.'),
  ],
  'ait-web-1': [
    Q('The name attribute of a form control:', ['is sent with its value to the server', 'sets its colour', 'is shown to the user', 'is optional for submitted data'], 'name=value pairs.'),
    Q('type="password" makes a field:', ['hide the characters typed', 'encrypt the data', 'check the password', 'required'], 'Shown as dots.'),
    Q('<option> items go inside a:', ['<select>', '<textarea>', '<input>', '<label>'], 'A drop-down list.'),
    Q('The action attribute of a form gives:', ['the address the data is sent to', 'the button text', 'the page title', 'the method'], 'The server program.'),
  ],
  'ait-web-2': [
    Q('min="0" max="20" on a number input:', ['limits the value to 0 to 20', 'sets the width', 'hides the field', 'sends it by email'], 'A range check.'),
    Q('Personal data should be sent with:', ['POST over HTTPS', 'GET over HTTP', 'email', 'a cookie only'], 'Not in the address, and encrypted.'),
    Q('input:invalid in CSS styles:', ['fields whose current value breaks their rules', 'all inputs', 'buttons', 'labels'], 'For example a red border.'),
    Q('Server-side validation is needed because:', ['browser checks can be bypassed', 'browsers have no validation', 'it is faster', 'HTML forbids it'], 'Never trust the client alone.'),
  ],
  'ait-sim-1': [
    Q('A discrete simulation moves:', ['from event to event', 'smoothly all the time', 'never', 'only backwards'], 'Such as arrivals.'),
    Q('Speeding up time is an advantage of simulation because:', ['years of change can be studied in minutes', 'it is always accurate', 'it removes assumptions', 'it needs no data'], 'For example climate.'),
    Q('Checking a model’s results against real data is:', ['validation', 'compilation', 'normalisation', 'encryption'], 'Does it match reality?'),
    Q('A car crash test simulation saves:', ['cost and the destruction of real cars', 'all physical testing ever', 'nothing', 'fuel only'], 'Fewer real tests are needed.'),
  ],
  'ait-sim-2': [
    Q('=RANDBETWEEN(1, 6) simulates:', ['rolling a die', 'tossing a coin', 'a fixed value', 'the date'], 'Whole numbers 1 to 6.'),
    Q('Pressing F9 in a spreadsheet with RAND():', ['recalculates with new random numbers', 'deletes the sheet', 'prints', 'saves'], 'A new run.'),
    Q('A deterministic growth model of 3 % a year uses the formula:', ['=B2*(1+$E$1) with 3 % in E1', '=RAND()', '=B2+3', '=VLOOKUP(B2)'], 'The same every run.'),
    Q('A stochastic model is run many times because:', ['each run gives a different result', 'it always crashes', 'it is deterministic', 'the formulas are wrong'], 'Average the results.'),
  ],
  'ait-par-1': [
    Q('Prolog programs consist of:', ['facts and rules', 'classes', 'machine code', 'cells'], 'Logic programming.'),
    Q('HTML is:', ['a markup language, not a programming language', 'a 3GL', 'machine code', 'a query language'], 'It describes documents.'),
    Q('Haskell is a:', ['functional language', 'query language', 'assembly language', 'markup language'], 'Built from functions.'),
    Q('A 3GL is translated into machine code by:', ['a compiler or an interpreter', 'nothing', 'a web browser', 'a printer'], 'High-level languages need translators.'),
  ],
  'ait-par-2': [
    Q('gcc hello.c -o hello:', ['compiles a C program into the executable hello', 'runs Python', 'deletes hello.c', 'opens a browser'], 'Then ./hello runs it.'),
    Q('javac produces:', ['bytecode for the Java Virtual Machine', 'machine code for one CPU', 'HTML', 'a database'], 'Then java runs it.'),
    Q('A good variable name for the total fees paid is:', ['total_fees_paid', 'x', 't1', 'data'], 'Meaningful names.'),
    Q('A comment should usually explain:', ['why the code does something', 'what each line obviously does', 'nothing', 'the author’s mood'], 'The reason, not the obvious.'),
  ],
  'ait-ai-1': [
    Q('The knowledge base of an expert system holds:', ['facts and IF … THEN rules', 'the user’s photos', 'drivers', 'the network map'], 'Expert knowledge.'),
    Q('A knowledge engineer:', ['gathers rules from human experts', 'repairs engines', 'builds networks', 'writes user guides only'], 'Builds the knowledge base.'),
    Q('Backward chaining is:', ['goal-driven', 'data-driven', 'random', 'a network protocol'], 'Starts from the conclusion.'),
    Q('A limitation of expert systems is that they:', ['cannot handle cases their rules do not cover', 'never give the same advice twice', 'need no updating', 'work without rules'], 'Brittle outside their domain.'),
  ],
  'ait-ai-2': [
    Q('Deep learning uses:', ['neural networks with many layers', 'only IF … THEN rules', 'spreadsheets', 'relational tables'], 'For images and speech.'),
    Q('A model is tested on data it has not seen in order to:', ['measure how it will perform on new cases', 'make it faster', 'train it more', 'remove bias completely'], 'Fair testing.'),
    Q('Actuators in a robot:', ['move it, such as motors', 'sense light', 'store data', 'connect to Wi-Fi'], 'Sensors sense; actuators act.'),
    Q('Detecting unusual mobile money transfers is an AI use for:', ['fraud detection', 'printing', 'normalisation', 'compiling'], 'Spotting patterns.'),
  ],
  'ait-imp-1': [
    Q('The riskiest changeover method is:', ['direct', 'parallel', 'pilot', 'phased'], 'No fallback.'),
    Q('Phased implementation brings in:', ['one part of the system at a time', 'everything at once', 'the system in one branch', 'nothing'], 'Module by module.'),
    Q('A drawback of parallel running is:', ['staff do the work twice', 'there is no fallback', 'it is the riskiest', 'it needs no staff'], 'Costly in effort.'),
    Q('Training should be planned for:', ['each kind of user', 'managers only', 'nobody', 'programmers only'], 'Different users do different tasks.'),
  ],
  'ait-imp-2': [
    Q('A throwaway prototype is:', ['discarded after it has shown what users want', 'the final product', 'never shown to users', 'a pilot'], 'Then the real system is built.'),
    Q('FAQs in documentation are:', ['answers to frequently asked questions', 'file allocation queries', 'fast access queues', 'formal agreements'], 'Common problems.'),
    Q('Technical documentation is written for:', ['the people who maintain the system', 'customers only', 'the examiner only', 'nobody'], 'Design and code details.'),
    Q('The best test of a user guide is to:', ['watch a new user follow it', 'count its pages', 'print it in colour', 'check its spelling only'], 'Real use shows the gaps.'),
  ],
  'ait-l6-paper1': [
    Q('A table in 1NF with a single-field key is already in:', ['2NF', '3NF', 'no form', '4NF'], 'Partial dependency needs a composite key.'),
    Q('Removing a transitive dependency gives:', ['3NF', '1NF', '2NF', 'an unnormalised table'], 'Non-key to non-key.'),
    Q('A /29 subnet has how many usable hosts?', ['6', '8', '14', '29'], '2³ − 2.'),
    Q('Page replacement by least recent use is:', ['LRU', 'FIFO', 'optimal', 'round robin'], 'Least recently used.'),
  ],
  'ait-l6-paper2': [
    Q('Slack is:', ['how long a task can slip without delaying the project', 'the project’s total length', 'a type of DFD', 'unused memory'], 'Tasks on the critical path have none.'),
    Q('In a Gantt chart, each task is drawn as:', ['a bar against time', 'a circle', 'a table row only', 'an arrow'], 'Its length is its duration.'),
    Q('In a scenario, the people and organisations mentioned usually become:', ['external entities', 'processes', 'data stores', 'indexes'], 'Read the case carefully.'),
    Q('To list results largest first, SQL uses:', ['ORDER BY … DESC', 'GROUP BY', 'WHERE', 'HAVING'], 'Descending order.'),
  ],
};
