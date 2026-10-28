// Extra questions for the Upper Sixth A Level ICT lessons (0796).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const QUESTIONS_U6 = {
  // ---------- Term 1 ----------
  'ait-rdb-1': [
    Q('In a one-to-many relationship, the foreign key goes in the table on the:', ['many side', 'one side', 'both sides', 'neither side'], 'STUDENT holds ClassID.'),
    Q('A link table’s primary key is usually:', ['the two foreign keys together', 'a single new field only', 'the first field of each table', 'none'], 'A composite key.'),
    Q('A one-to-one relationship can be stored with:', ['a unique foreign key on one side', 'a link table only', 'two primary keys', 'nothing'], 'Unique keeps it one-to-one.'),
    Q('An attribute with several values, such as many phone numbers, is stored:', ['in its own table', 'as a comma list in one field', 'in the key', 'not at all'], 'One value per field.'),
  ],
  'ait-rdb-2': [
    Q('Entity integrity requires that a primary key is:', ['unique and never empty', 'a number', 'a foreign key', 'optional'], 'Each row can be identified.'),
    Q('Cascade delete:', ['removes related rows when a row is deleted', 'refuses all deletes', 'copies rows', 'encrypts rows'], 'Use it with care.'),
    Q('CHECK (Mark BETWEEN 0 AND 20) enforces a:', ['domain constraint', 'referential constraint', 'join', 'link table'], 'Allowed values.'),
    Q('In Access, relationships are set in:', ['Database Tools → Relationships', 'Print Preview', 'the Report Wizard', 'File → Save As'], 'Drag keys onto foreign keys.'),
  ],
  'ait-nf-1': [
    Q('A new club cannot be recorded until it has a member. This is an:', ['insertion anomaly', 'update anomaly', 'deletion anomaly', 'integrity rule'], 'Data depends on other data existing.'),
    Q('Deleting the only loan of a book also loses its title. This is a:', ['deletion anomaly', 'insertion anomaly', 'update anomaly', 'join'], 'Facts are lost.'),
    Q('BookID → Title means:', ['each book ID fixes one title', 'each title has one ID', 'they are equal', 'nothing'], 'A functional dependency.'),
    Q('Anomalies are caused mainly by:', ['repeated data', 'too many keys', 'small tables', 'indexes'], 'Store each fact once.'),
  ],
  'ait-nf-2': [
    Q('A table with a single-field key that is in 1NF is already in:', ['2NF', '3NF', 'no form', '4NF'], 'Partial dependency needs a composite key.'),
    Q('INSERT INTO Class SELECT DISTINCT ClassID, ClassTeacher FROM FlatFees:', ['fills CLASS with each class once', 'deletes the flat file', 'joins tables', 'creates an index'], 'DISTINCT removes repeats.'),
    Q('After normalising, the original data is rebuilt by:', ['joining the tables', 'deleting tables', 'sorting', 'printing'], 'No information is lost.'),
    Q('"The key, the whole key and nothing but the key" describes:', ['3NF', '1NF', '2NF only', 'a flat file'], 'A summary of 3NF.'),
  ],
  'ait-sql-1': [
    Q('A FULL OUTER JOIN returns:', ['all rows from both tables, matched where possible', 'only matching rows', 'only the left table', 'no rows'], 'Unmatched rows from both sides.'),
    Q('When two tables share a field name, write:', ['the table name before the field, such as Student.Name', 'only the field name', 'the field twice', 'nothing'], 'Avoid ambiguity.'),
    Q('A RIGHT OUTER JOIN keeps every row of:', ['the right table', 'the left table', 'neither', 'both always'], 'With NULLs on the left.'),
    Q('Three tables can be joined in one query by:', ['chaining JOIN … ON clauses', 'using three SELECTs only', 'GROUP BY', 'it is impossible'], 'Student JOIN Class JOIN School.'),
  ],
  'ait-sql-2': [
    Q('SELECT Mark * 5 AS Percent creates a:', ['calculated field', 'new table', 'join', 'parameter'], 'Worked out in the query.'),
    Q('A placeholder (?) in SQL run from a program:', ['is filled safely with the value later', 'is a syntax error', 'means any value', 'deletes rows'], 'Parameters prevent injection.'),
    Q('COUNT(*) returns:', ['the number of rows', 'the sum of a field', 'the largest value', 'the average'], 'Counts rows.'),
    Q('To show only groups with more than 40 students, use:', ['HAVING COUNT(*) > 40', 'WHERE COUNT(*) > 40', 'ORDER BY 40', 'JOIN 40'], 'HAVING filters groups.'),
  ],
  'ait-pm-1': [
    Q('The forward pass works out:', ['earliest start times', 'latest start times', 'costs', 'staff names'], 'From the beginning.'),
    Q('The backward pass works out:', ['latest start times', 'earliest start times', 'durations', 'dependencies'], 'From the end.'),
    Q('An activity on the critical path has a float of:', ['zero', 'one day', 'its duration', 'the project length'], 'No slack.'),
    Q('When an activity has two predecessors, its earliest start is the:', ['larger of their earliest finishes', 'smaller of their earliest finishes', 'sum of them', 'average'], 'It waits for both.'),
  ],
  'ait-pm-2': [
    Q('PERT expected time is:', ['(o + 4m + p) ÷ 6', '(o + m + p) ÷ 3', 'm only', '(o + p) ÷ 2'], 'The most likely counts four times.'),
    Q('A milestone on a Gantt chart is drawn as:', ['a diamond, with no duration', 'a long bar', 'a circle with a line', 'nothing'], 'A key point.'),
    Q('Gantt charts show clearly:', ['dates and progress', 'every dependency', 'costs only', 'the database'], 'Networks show dependencies better.'),
    Q('Two parallel activities needing the same person may need:', ['resource levelling', 'a new critical path always', 'cancelling', 'normalising'], 'One must wait.'),
  ],
  'ait-rad-1': [
    Q('The RAD phase in which users and developers shape prototypes together is:', ['user design', 'cutover', 'requirements planning', 'maintenance'], 'Joint design.'),
    Q('In MoSCoW, C stands for:', ['could have', 'cost', 'complete', 'critical'], 'Must, Should, Could, Won’t.'),
    Q('The scribe in a JAD session:', ['records decisions and requirements', 'leads the session', 'pays for it', 'writes the code'], 'The written record.'),
    Q('RAD suits poorly:', ['large safety-critical systems needing full documentation', 'interactive business apps', 'projects with available users', 'changing requirements'], 'Speed can cost rigour.'),
  ],
  'ait-rad-2': [
    Q('A command button that saves a record usually runs:', ['a macro or code', 'a report', 'a query only', 'nothing'], 'An action.'),
    Q('A good data entry form follows:', ['the order of the paper document it replaces', 'alphabetical order of fields', 'random order', 'the database key order only'], 'Easy to copy from.'),
    Q('A default value of today’s date:', ['saves typing and errors', 'blocks entry', 'deletes data', 'is never useful'], 'Sensible defaults.'),
    Q('Watching a user try the form shows:', ['what to change in the next prototype', 'nothing useful', 'the database size', 'the network speed'], 'User feedback.'),
  ],
  'ait-dc-1': [
    Q('Parallel transmission suits:', ['short distances', 'long distances', 'satellite links', 'the Internet'], 'Bits drift apart on long cables.'),
    Q('The start bit in asynchronous transmission is:', ['0', '1', 'a byte', 'a clock'], 'The line rests at 1.'),
    Q('Synchronous transmission is efficient for:', ['large blocks of data', 'single key presses', 'no data', 'only text'], 'Little overhead per byte.'),
    Q('Half-duplex means:', ['both directions, but not at the same time', 'one direction only', 'both at once', 'no direction'], 'Like a walkie-talkie.'),
  ],
  'ait-dc-2': [
    Q('Wavelength division multiplexing is used on:', ['fibre-optic cables', 'copper phone lines', 'keyboards', 'printers'], 'Different colours of light.'),
    Q('Statistical TDM gives time slots:', ['only to channels with data to send', 'equally to all channels', 'to no channel', 'randomly'], 'No wasted slots.'),
    Q('Ethernet uses:', ['baseband transmission', 'broadband only', 'FDM only', 'WDM'], 'One signal at a time on the cable.'),
    Q('=Sum([Amount]) in an Access report footer gives:', ['the total of the amounts', 'the number of rows', 'the average', 'the largest amount'], 'A report total.'),
  ],
  'ait-nh-1': [
    Q('A bridge joins:', ['two network segments, filtering by MAC address', 'two countries', 'a phone to a PC', 'two databases'], 'Layer 2.'),
    Q('A gateway is needed when networks:', ['use different protocols', 'are the same', 'are switched off', 'have no addresses'], 'It translates.'),
    Q('Each router interface or VLAN forms its own:', ['broadcast domain', 'collision domain only', 'cable', 'MAC address'], 'Broadcasts stop at routers.'),
    Q('A wireless extender works like a:', ['repeater', 'router', 'firewall', 'modem'], 'It boosts the signal.'),
  ],
  'ait-nh-2': [
    Q('In Linux, the routing table is shown by:', ['ip route', 'route print', 'ls', 'chmod'], 'route print is Windows.'),
    Q('tracert shows:', ['each router on the path, with times', 'the files on the disk', 'running programs', 'the MAC table'], 'Hop by hop.'),
    Q('If ping to the gateway fails, check first:', ['your cable, Wi-Fi and IP settings', 'the website', 'the DNS server in another country', 'the printer'], 'The first link.'),
    Q('A sudden jump in tracert times at one hop suggests:', ['a slow or busy link at that hop', 'your PC is broken', 'DNS failed', 'nothing'], 'Look where the delay starts.'),
  ],
  'ait-sec-1': [
    Q('Firewall rules are checked:', ['in order, and the first match decides', 'at random', 'only the last one', 'all at once with no order'], 'Order matters.'),
    Q('The last firewall rule is usually:', ['deny everything else', 'allow everything', 'delete logs', 'nothing'], 'Default deny.'),
    Q('An IDS:', ['raises alerts about suspicious traffic', 'blocks every packet', 'assigns addresses', 'stores files'], 'An IPS also blocks.'),
    Q('Security in layers means:', ['several defences together, so one failure is not fatal', 'one strong password only', 'one firewall only', 'no backups'], 'Defence in depth.'),
  ],
  'ait-sec-2': [
    Q('Port 3306 is usually used by:', ['MySQL', 'HTTPS', 'SSH', 'DNS'], 'A database server.'),
    Q('netstat -ano adds:', ['the process number for each connection', 'the routing table', 'the file sizes', 'the user names'], 'Find the program in Task Manager.'),
    Q('In Linux, listening ports are shown by:', ['ss -tulpn', 'ls -l', 'cd /', 'pwd'], 'Socket statistics.'),
    Q('A listening port no program needs should be:', ['closed or blocked', 'left open', 'shared', 'renamed'], 'Fewer ways in.'),
  ],
  'ait-alg-1': [
    Q('In pseudocode, ← means:', ['assignment', 'comparison', 'output', 'end of loop'], 'total ← total + mark.'),
    Q('A flowchart process box is a:', ['rectangle', 'diamond', 'oval', 'parallelogram'], 'A calculation or action.'),
    Q('REPEAT … UNTIL is a form of:', ['iteration', 'selection', 'sequence', 'output'], 'A loop.'),
    Q('A trace table checks:', ['what an algorithm does, step by step', 'the speed of the computer', 'the network', 'the file format'], 'A dry run.'),
  ],
  'ait-alg-2': [
    Q('A CSV field containing a comma must be:', ['put in double quotes', 'deleted', 'split', 'converted to a number'], 'Otherwise it becomes two fields.'),
    Q('In JSON, a list is written in:', ['square brackets', 'braces', 'angle brackets', 'quotes only'], '[14, 12].'),
    Q('XML is described as self-describing because:', ['each value is named by its tags', 'it has no structure', 'it is binary', 'it is compressed'], '<name>Ngwa</name>.'),
    Q('Leading zeros in codes survive import if the column is imported as:', ['text', 'a number', 'a date', 'currency'], 'Numbers drop leading zeros.'),
  ],

  // ---------- Terms 2 and 3 ----------
  'ait-prog-1': [
    Q('const double VAT_RATE = 0.1925; in C++ declares:', ['a constant', 'a loop', 'a function', 'an array'], 'Its value cannot change.'),
    Q('The data type for True or False is:', ['Boolean', 'string', 'integer', 'real'], 'Two values.'),
    Q('In Python, int(input("Mark: ")) is needed because input() returns:', ['a string', 'an integer', 'a Boolean', 'a list'], 'Convert text to a number.'),
    Q('Which identifier is valid?', ['total_marks', '2total', 'total marks', 'class'], 'No space, no leading digit, not a keyword.'),
  ],
  'ait-prog-2': [
    Q('A global variable can be used:', ['anywhere in the program', 'only in one function', 'only in loops', 'nowhere'], 'Use with care.'),
    Q('C++ reports a misspelt variable:', ['when compiling', 'only when the line runs', 'never', 'after the program ends'], 'Python reports it when the line runs.'),
    Q('Passing values as parameters makes subroutines:', ['independent and easy to test', 'slower always', 'global', 'impossible to reuse'], 'They state what they need.'),
    Q('print() in Python is an:', ['output statement', 'input statement', 'assignment', 'declaration'], 'It shows a value.'),
  ],
  'ait-ctl-1': [
    Q('In an ELSE IF chain, the conditions are tested:', ['in order, and the first true one runs', 'all at once', 'from the bottom', 'at random'], 'Order matters.'),
    Q('Python 3.10 and later has, like SWITCH:', ['match … case', 'select … when', 'switch … case', 'goto'], 'Structural pattern matching.'),
    Q('The default branch of a switch runs:', ['when no case matches', 'always', 'first', 'never'], 'Like ELSE.'),
    Q('To test grade boundaries, try marks of:', ['exactly 10, 12, 14 and 16', 'only 0', 'only 20', 'random values'], 'The edges.'),
  ],
  'ait-ctl-2': [
    Q('A WHILE loop whose condition is false at the start runs:', ['zero times', 'once', 'forever', 'twice'], 'It tests first.'),
    Q('for (int i = 0; i < 30; i++) runs:', ['30 times', '29 times', '31 times', 'forever'], 'i from 0 to 29.'),
    Q('An infinite loop happens when:', ['the condition never becomes false', 'there are too many variables', 'the loop is a FOR', 'the program is short'], 'Change the condition inside the loop.'),
    Q('Python imitates DO-WHILE with:', ['while True: … break', 'for i in range(0)', 'switch', 'do'], 'Test inside, then break.'),
  ],
  'ait-arr-1': [
    Q('In C++, int marks[30]; has the last element:', ['marks[29]', 'marks[30]', 'marks[31]', 'marks[0] only'], 'Indexes 0 to 29.'),
    Q('Reading marks[30] in that array is:', ['out of range, an error', 'the 30th mark', 'zero always', 'allowed'], 'Past the end.'),
    Q('In a 2-D mark sheet grid[row][col], grid[0][2] is:', ['the first row, third column', 'the third row, first column', 'the first column only', 'the sum'], 'Row first, then column.'),
    Q('len(marks) in Python gives:', ['the number of elements', 'the largest mark', 'the sum', 'the first mark'], 'Length.'),
  ],
  'ait-arr-2': [
    Q('A linear search of 50 items takes at most:', ['50 comparisons', '6 comparisons', '25 comparisons', '1 comparison'], 'Each item once.'),
    Q('After each bubble sort pass, the next largest value is:', ['in its final place at the end', 'at the start', 'removed', 'doubled'], 'It bubbles up.'),
    Q('Bubble sort can stop early when:', ['a pass makes no swaps', 'the first pass ends', 'the list is long', 'never'], 'Already sorted.'),
    Q('Good test cases for a search include:', ['an empty list and a one-item list', 'only long lists', 'only sorted lists', 'none'], 'Edge cases.'),
  ],
  'ait-webarch-1': [
    Q('The presentation tier of a web system is:', ['the browser', 'the database', 'the router', 'the server’s disk'], 'What the user sees.'),
    Q('HTTP status 301 means:', ['moved permanently', 'not found', 'server error', 'OK'], 'A redirect.'),
    Q('Database passwords belong:', ['on the server only', 'in JavaScript', 'in the HTML', 'in the URL'], 'Client code can be read.'),
    Q('An advantage of three tiers is that:', ['each layer can be changed or scaled separately', 'there is no database', 'no server is needed', 'pages load offline always'], 'Separation.'),
  ],
  'ait-webarch-2': [
    Q('$_POST in PHP holds:', ['the data sent by a POST form', 'the server’s files', 'the database password', 'cookies only'], 'Form fields.'),
    Q('htmlspecialchars() is used to:', ['show typed tags as text instead of running them', 'encrypt passwords', 'connect to MySQL', 'send email'], 'Escaping output.'),
    Q('The form tag action="contact.php" names:', ['the script that receives the data', 'the database', 'the stylesheet', 'the browser'], 'Where the data goes.'),
    Q('Typing \' OR 1=1 -- into a form is a test for:', ['SQL injection', 'spelling', 'speed', 'colour'], 'A classic attack string.'),
  ],
  'ait-cms-1': [
    Q('A CMS theme controls:', ['the look and layout', 'the database engine', 'the domain name', 'the users’ passwords'], 'Change it without touching content.'),
    Q('Old, unpatched plugins are:', ['a common way in for attackers', 'always safe', 'faster', 'required'], 'Keep them updated.'),
    Q('A meta description is shown:', ['under the page title in search results', 'nowhere', 'only to administrators', 'in the footer'], 'It invites clicks.'),
    Q('A WordPress Contributor can:', ['write drafts but not publish them', 'publish anyone’s posts', 'install plugins', 'change settings'], 'An Editor approves.'),
  ],
  'ait-cms-2': [
    Q('SFTP uses port:', ['22', '21', '80', '443'], 'Over SSH.'),
    Q('img { max-width: 100%; } stops images:', ['overflowing narrow screens', 'loading', 'being printed', 'being indexed'], 'Responsive images.'),
    Q('Designing for phones first means:', ['starting with the narrow layout and widening it', 'ignoring phones', 'desktop only', 'no CSS'], 'Mobile first.'),
    Q('Browser developer tools help by:', ['showing the page at different screen sizes', 'speeding up the internet', 'removing CSS', 'hosting the site'], 'Device toolbar.'),
  ],
  'ait-rel-1': [
    Q('Checking whether information is trying to sell something judges its:', ['purpose', 'currency', 'relevance', 'length'], 'Why it was written.'),
    Q('False information spread on purpose is:', ['disinformation', 'misinformation', 'metadata', 'a hash'], 'Misinformation is shared by mistake.'),
    Q('On Windows, a file’s SHA-256 hash is shown by:', ['certutil -hashfile file SHA256', 'dir', 'ping', 'ipconfig'], 'Compare it with the published one.'),
    Q('A digital signature on a file proves:', ['who published it and that it is unchanged', 'that it is free', 'that it is small', 'nothing'], 'Authenticity and integrity.'),
  ],
  'ait-rel-2': [
    Q('A fingerprint is a factor of the type:', ['something you are', 'something you know', 'something you have', 'something you buy'], 'Inherence.'),
    Q('Long-pressing a link on a phone lets you:', ['see its real address before opening it', 'open it faster', 'delete it', 'share it'], 'Check before clicking.'),
    Q('MFA backup codes should be kept:', ['offline in a safe place', 'in a public post', 'in the email they protect', 'nowhere'], 'For when the phone is lost.'),
    Q('An offer that is too good to be true in an email is:', ['a common sign of phishing', 'always real', 'from the school', 'safe to click'], 'Be wary.'),
  ],
  'ait-law-1': [
    Q('ART stands for the:', ['Telecommunications Regulatory Board', 'Agency for Radio and Television', 'Association of Retail Traders', 'Applied Research Team'], 'It regulates operators.'),
    Q('Law No. 2010/021 governs:', ['electronic commerce', 'personal data', 'copyright', 'cybercrime'], 'Online selling.'),
    Q('Copying and using unlicensed software is called:', ['piracy', 'phishing', 'spoofing', 'caching'], 'A copyright offence.'),
    Q('ANTIC is the root:', ['certification authority', 'DNS server', 'internet provider', 'bank'], 'It issues electronic certificates.'),
  ],
  'ait-law-2': [
    Q('A full backup:', ['copies all the chosen data each time', 'copies only changes', 'copies nothing', 'deletes old files'], 'Simplest to restore.'),
    Q('An offline backup copy protects against:', ['ransomware encrypting the backup too', 'power cuts only', 'slow networks', 'nothing'], 'It is disconnected.'),
    Q('The cron line 0 18 * * 5 runs:', ['every Friday at 18:00', 'every day at 5:18', 'on the 18th of each month', 'every 5 minutes'], 'Minute 0, hour 18, weekday 5.'),
    Q('With differential backups, a restore needs:', ['the last full backup and the latest differential', 'every backup ever made', 'only the latest differential', 'nothing'], 'Two sets.'),
  ],
  'ait-paper3-1': [
    Q('Good evidence in a logbook is:', ['labelled and referred to in the text', 'unlabelled', 'blurred', 'left out'], 'Figure numbers.'),
    Q('Before printing a report you should:', ['check it in print preview or as a PDF', 'print ten copies', 'delete the header', 'skip checking'], 'Page breaks and numbers.'),
    Q('The reflection part of an entry says:', ['what went wrong, how it was fixed and what was learned', 'only the mark', 'the teacher’s name', 'nothing'], 'Shows understanding.'),
    Q('Practical files should be named:', ['exactly as the instructions ask', 'freely', 'all the same', 'with your phone number'], 'So they can be found.'),
  ],
  'ait-u6-paper1': [
    Q('For /28, the block size in the last byte is:', ['16', '28', '8', '32'], '256 − 240.'),
    Q('A pacemaker needs:', ['a hard real-time system', 'batch processing', 'time-sharing', 'a spreadsheet'], 'Late is a failure.'),
    Q('Removing a partial dependency gives:', ['2NF', '1NF', '3NF', 'no change'], 'Whole key.'),
    Q('LRU page replacement removes:', ['the least recently used page', 'the oldest loaded page', 'the newest page', 'a random page'], 'Least recently used.'),
  ],
  'ait-u6-paper2': [
    Q('In a case-study answer, points should be:', ['applied to the organisation in the case', 'general notes only', 'copied from the case', 'left out'], 'Application earns marks.'),
    Q('The order of clauses in SQL is:', ['SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY', 'FROM, SELECT, ORDER BY, WHERE', 'WHERE, SELECT, FROM', 'any order'], 'Standard order.'),
    Q('PERT expected time with 1, 4 and 13 days is:', ['5 days', '6 days', '4 days', '18 days'], '(1 + 16 + 13) ÷ 6.'),
    Q('A system chart shows:', ['programs, files, inputs and outputs of a whole system', 'one loop only', 'a database table', 'a PERT network'], 'The big picture.'),
  ],
  'ait-u6-mock': [
    Q('A mark lost by misreading the question is best fixed by:', ['reading every question twice and underlining key words', 'learning more facts', 'writing faster', 'skipping questions'], 'Fix the cause.'),
    Q('A mistakes list is used to:', ['review your own errors before each practice paper', 'copy answers', 'count marks', 'nothing'], 'Personal revision.'),
    Q('Redoing wrong questions a week later:', ['tests whether the learning has stuck', 'wastes time', 'is cheating', 'is impossible'], 'Spaced practice.'),
    Q('Time left at the end of a paper is best used to:', ['check answers', 'leave early', 'rewrite everything', 'sleep'], 'Catch slips.'),
  ],
  'ait-u6-bootcamp': [
    Q('A loop inside a loop over n items takes about:', ['n² steps', 'n steps', '2n steps', 'log n steps'], 'Nested loops multiply.'),
    Q('In the last week before the exam, it is best to:', ['practise what you have learned and rest well', 'start new topics', 'stay up all night', 'stop revising'], 'Consolidate.'),
    Q('A trace table records:', ['the value of every variable at each step', 'only the output', 'only the code', 'nothing'], 'A dry run.'),
    Q('The first step of normalising any table is to:', ['write down its dependencies', 'delete fields', 'add indexes', 'print it'], 'Dependencies guide each split.'),
  ],
};
