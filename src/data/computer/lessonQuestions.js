// Extra questions for the end of Computer Science lessons, so that every lesson
// ends with at least five questions on what it teaches (see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'cs-history-1': [
    Q('Who built a mechanical calculator in 1642 that could add and subtract?', ['Blaise Pascal', 'Charles Babbage', 'Ada Lovelace', 'Tim Berners-Lee'], 'Babbage designed the Analytical Engine in the 1830s.'),
    Q('Fourth-generation computers are built around:', ['The microprocessor', 'Vacuum tubes', 'Transistors only', 'The abacus'], 'A whole processor on one chip made personal computers possible.'),
  ],
  'cs-types-1': [
    Q('A computer that works with data that changes continuously, such as temperature, is:', ['An analogue computer', 'A digital computer', 'A microcomputer', 'A word processor'], 'Digital computers work with separate digits.'),
    Q('The computer inside a washing machine, which does one job only, is a:', ['Special-purpose computer', 'General-purpose computer', 'Supercomputer', 'Mainframe'], 'A laptop is general-purpose: it does many jobs.'),
  ],
  'cs-traits-1': [
    Q('A computer can work for hours on the same task without tiring. This is its:', ['Diligence', 'Versatility', 'Accuracy', 'Storage'], 'Versatility means doing many different jobs.'),
    Q('Which is a disadvantage of computers?', ['Viruses can destroy data', 'They work quickly', 'They store a lot of data', 'They are accurate'], 'The other three are advantages.'),
  ],
  'cs-lab-1': [
    Q('A computer laboratory needs good ventilation or air conditioning to:', ['Keep the machines cool', 'Make the screens brighter', 'Speed up the Internet', 'Charge the batteries'], 'Heat damages computer parts.'),
    Q('Plugging many machines into one socket is dangerous because it:', ['Overloads the socket and can cause a fire', 'Makes the computers faster', 'Saves electricity', 'Removes viruses'], 'Too much current overheats the wiring.'),
  ],
  'cs-mouse-1': [
    Q('On a laptop, the part that does the job of a mouse is the:', ['Touchpad', 'Keyboard', 'Screen', 'Speaker'], 'You move a finger on it to move the pointer.'),
    Q('Turning the mouse wheel:', ['Scrolls the page up or down', 'Prints the page', 'Deletes a file', 'Shuts down the computer'], 'This is the scroll action.'),
  ],
  'cs-memory-1': [
    Q('Saving a file copies it from RAM to:', ['Secondary storage such as the hard disk', 'ROM', 'The control unit', 'The monitor'], 'Secondary storage keeps it when the power is off.'),
    Q('Which storage device has no moving parts and is faster than a hard disk drive?', ['A solid-state drive (SSD)', 'A CD', 'A DVD', 'A floppy disk'], 'SSDs use memory chips.'),
  ],
  'cs-society-1': [
    Q('Learning with computers and the Internet, often at a distance, is called:', ['E-learning', 'E-commerce', 'Telemedicine', 'Booting'], 'E-commerce is buying and selling online.'),
    Q('Weather forecasts and market prices sent to a farmer’s phone are a use of computers in:', ['Agriculture', 'Banking', 'Transport', 'Mining'], 'They help the farmer decide when to plant and where to sell.'),
  ],
  'cs-buses-2': [
    Q('Which bus carries signals such as "read" and "write"?', ['The control bus', 'The data bus', 'The address bus', 'A USB cable'], 'The address bus carries the location; the data bus the data.'),
    Q('Fast memory close to the processor that holds data used often is:', ['Cache memory', 'A hard disk', 'A flash drive', 'A DVD'], 'Cache is faster than RAM.'),
  ],
  'cs-care-2': [
    Q('Screens and keyboards should be cleaned only when the computer is:', ['Switched off', 'Running a program', 'Connected to the Internet', 'Printing'], 'This avoids shocks and accidental key presses.'),
    Q('Theft of computers is reduced by:', ['Locks, burglar-proofing and keeping records of the equipment', 'Leaving the doors open', 'Removing the antivirus', 'Adding more sockets'], 'Records also help recover stolen machines.'),
  ],
  'cs-topology-3': [
    Q('The devices at each end of a bus cable that stop signals bouncing back are:', ['Terminators', 'Switches', 'Routers', 'Modems'], 'Without them signals reflect and cause errors.'),
    Q('A network in which computers have many links to one another is a:', ['Mesh topology', 'Bus topology', 'Star topology', 'Ring topology'], 'It is very reliable but costly; the Internet is partly a mesh.'),
  ],
  'cs-ports-3': [
    Q('The newer, smaller USB plug that fits either way round is:', ['USB-C', 'VGA', 'HDMI', 'RJ45'], 'RJ45 is the network plug.'),
    Q('Headphones and microphones connect through the:', ['Audio jacks (3.5 mm)', 'Ethernet port', 'VGA port', 'Power socket'], 'Many also connect by USB or Bluetooth.'),
  ],
  'cs-sheet-3': [
    Q('In a spreadsheet, the block of cells from A1 down to A10 is written:', ['A1:A10', 'A1-A10', 'A1;A10', 'A1/A10'], 'A colon joins the first and last cells of a range.'),
    Q('Data validation is used to:', ['Limit what can be entered in a cell', 'Delete the workbook', 'Make text bold', 'Print the sheet'], 'For example, only marks from 0 to 20.'),
  ],
  // ---------- Form 4 ----------
  'cs-review-f4': [
    Q('Water must never be used on an electrical fire because:', ['Water conducts electricity and can give a deadly shock', 'Water is too cold', 'Water makes more smoke than fire', 'Water is expensive'], 'Use CO₂ or dry powder instead.'),
    Q('The rules you agree to when you log on to a school network are its:', ['Acceptable use policy', 'Truth table', 'Data source', 'Driver'], 'They say what you may and may not do.'),
    Q('Form 3 check-up: which device joins a school LAN to the Internet?', ['A router', 'A monitor', 'A keyboard', 'A scanner'], 'Routers join different networks.'),
    Q('Form 3 check-up: every spreadsheet formula starts with:', ['=', '#', '$', '@'], 'For example =SUM(B2:B10).'),
  ],
  'cs-sequence-f4': [
    Q('In a sequence, each step runs:', ['Once, in order', 'Many times', 'Only if a condition is true', 'In any order'], 'Selection and iteration change this.'),
    Q('What is 17 DIV 5?', ['3', '2', '3.4', '85'], 'DIV gives the whole number of times 5 goes into 17.'),
    Q('What is 17 MOD 5?', ['2', '3', '12', '0'], '17 = 5 × 3 + 2; MOD gives the remainder.'),
    Q('The pseudocode symbol <> means:', ['Not equal to', 'Less than or equal to', 'Assignment', 'Multiply'], '5 <> 6 is true.'),
    Q('A value that does not change while a program runs, such as PI, is a:', ['Constant', 'Variable', 'Loop', 'Record'], 'A variable can change.'),
  ],
  'cs-select-f4': [
    Q('In IF ... THEN ... ELSE ... ENDIF, how many of the two branches run?', ['Exactly one', 'Both', 'Neither', 'It depends on the loop'], 'The condition is either true or false.'),
    Q('In a nested IF for grades, which band should be tested first?', ['The highest, such as mark >= 15', 'The lowest', 'Any band', 'The middle one'], 'Testing mark >= 10 first would give Pass to a mark of 17.'),
    Q('In a CASE statement, OTHERWISE handles:', ['Every value not listed', 'The first value only', 'Errors in the program', 'Loops'], 'It is the default branch.'),
    Q('IF age >= 13 AND age <= 19 is true for age:', ['16', '12', '20', '25'], 'Both parts must be true.'),
  ],
  'cs-for-f4': [
    Q('FOR i ← 2 TO 10 STEP 2 gives i the values:', ['2, 4, 6, 8, 10', '2, 3, 4 ... 10', '1, 3, 5, 7, 9', '10, 8, 6, 4, 2'], 'STEP 2 adds 2 each time.'),
    Q('Before a totalling loop, total must be:', ['Set to 0', 'Set to the last mark', 'Left empty', 'Set to 100'], 'This is initialising.'),
    Q('count ← count + 1 inside a loop is used for:', ['Counting', 'Totalling', 'Sorting', 'Searching the web'], 'It adds one each time something happens.'),
    Q('How many times does FOR i ← 1 TO 10 run its body?', ['10', '9', '11', '1'], '10 − 1 + 1 = 10.'),
  ],
  'cs-while-f4': [
    Q('A WHILE loop keeps going:', ['While its condition is true', 'Until its condition is true', 'Exactly ten times', 'For ever'], 'It stops when the condition becomes false.'),
    Q('REPEAT ... UNTIL stops:', ['When its condition becomes true', 'When its condition is false', 'Before running once', 'Never'], 'It is a post-test loop.'),
    Q('A loop that never stops is called:', ['An infinite loop', 'A nested loop', 'A count-controlled loop', 'A trace table'], 'Something in the body must change the condition.'),
    Q('A value such as −1 used only to stop the input of marks is a:', ['Rogue value', 'Boundary value', 'Constant', 'Field'], 'It can never be a real mark.'),
  ],
  'cs-gates-f4': [
    Q('With two inputs, a truth table has:', ['4 rows', '2 rows', '8 rows', '3 rows'], '2 × 2 = 4.'),
    Q('Logic gates are built from:', ['Transistors', 'Light bulbs', 'Magnets', 'Optical discs'], 'Millions of them are on one chip.'),
    Q('The gate whose symbol is a triangle with a bubble is:', ['NOT', 'AND', 'OR', 'NOR'], 'It inverts its single input.'),
    Q('NAND and NOR are called universal gates because:', ['Any other gate can be built from them alone', 'They are used in every country', 'They have no inputs', 'They never change'], 'For example, a NOT gate is a NAND with both inputs joined.'),
  ],
  'cs-boolean-f4': [
    Q('Unless brackets say otherwise, which is worked out first?', ['NOT', 'AND', 'OR', 'They are all equal'], 'NOT, then AND, then OR.'),
    Q('In a truth table for three inputs, the first row of inputs is:', ['000', '111', '100', '001'], 'Rows are listed in binary counting order.'),
    Q('An alarm X sounds if window W or door D is open while the system S is armed. X =', ['(W OR D) AND S', 'W AND D AND S', '(W AND D) OR S', 'NOT S'], 'Either opening counts, but only when armed.'),
    Q('For P = (NOT T) AND M, when is P equal to 1?', ['When T = 0 and M = 1', 'When T = 1 and M = 1', 'When T = 0 and M = 0', 'Always'], 'NOT T must be 1 and M must be 1.'),
    Q('An AND gate with inputs A and B feeds an OR gate whose other input is C. The output is:', ['(A AND B) OR C', 'A AND (B OR C)', 'A OR B OR C', 'NOT (A AND B)'], 'Follow the gates from the inputs to the output.'),
  ],
  'cs-fde-f4': [
    Q('At the start of the fetch stage, the address in the PC is copied into the:', ['MAR', 'MDR', 'CIR', 'ALU'], 'The MAR holds the address to be read.'),
    Q('The address bus carries addresses:', ['From the CPU to memory, one way only', 'In both directions', 'From the keyboard to the screen', 'Only to the printer'], 'The data bus carries data both ways.'),
    Q('Signals such as read, write and the clock travel on the:', ['Control bus', 'Address bus', 'Data bus', 'USB port'], 'They control the other parts.'),
    Q('During the execute stage of an ADD instruction, the result goes to the:', ['Accumulator', 'Program counter', 'MAR', 'Hard disk'], 'The ALU puts its results there.'),
  ],
  'cs-storage-f4': [
    Q('The start-up firmware of a computer (BIOS or UEFI) is stored in:', ['ROM', 'RAM', 'Cache only', 'A DVD'], 'ROM keeps it without power.'),
    Q('Virtual memory is:', ['Part of the disk used as extra memory when RAM is full', 'Memory inside the keyboard', 'A kind of ROM', 'Cloud storage'], 'It is much slower than RAM.'),
    Q('A DVD stores about:', ['4.7 GB', '700 MB', '25 GB', '1 TB'], 'A CD holds about 700 MB and a single-layer Blu-ray 25 GB.'),
    Q('A hard disk drive stores data:', ['Magnetically on spinning platters', 'In flash memory chips', 'With a laser on a disc', 'In the cloud only'], 'Its moving parts can be damaged by knocks.'),
  ],
  'cs-maint-f4': [
    Q('Cleaning, updates and regular backups are examples of:', ['Preventive maintenance', 'Corrective maintenance', 'Piracy', 'Social engineering'], 'They stop problems before they start.'),
    Q('If a new driver makes a device stop working, you can:', ['Roll back the driver', 'Format the disk at once', 'Remove the RAM', 'Ignore it'], 'Rolling back returns the previous version.'),
    Q('"No bootable device" at start-up usually means:', ['The disk with the operating system was not found', 'The printer is out of paper', 'The mouse is broken', 'The Internet is slow'], 'Check the disk and its connection.'),
  ],
  'cs-restore-f4': [
    Q('The 3-2-1 backup rule says keep 3 copies, on 2 kinds of storage, with:', ['1 copy away from the computer', '1 copy on the desktop', '1 printed copy', '1 copy in RAM'], 'An off-site copy survives fire or theft.'),
    Q('An incremental backup copies:', ['Only the files changed since the last backup', 'Every file each time', 'Only the operating system', 'Nothing'], 'It is quicker than a full backup.'),
    Q('Why should an SSD not be defragmented?', ['It has no moving parts, and the operating system keeps it fast another way', 'It is too small', 'It is read only', 'It has no files'], 'Defragmenting helps hard disks, whose heads must move.'),
  ],
  'cs-tools-f4': [
    Q('Assembly language uses short words such as LDA and ADD called:', ['Mnemonics', 'Merge fields', 'Macros', 'Records'], 'Each stands for one machine instruction.'),
    Q('Which of these is a high-level language?', ['Python', 'Machine code', 'Binary', 'Assembly language'], 'High-level languages are close to English.'),
    Q('Syntax highlighting in an IDE means:', ['Keywords are shown in colour', 'The screen is brighter', 'The program runs faster', 'Errors are deleted'], 'It makes code easier to read.'),
  ],
  'cs-python-f4': [
    Q('In Python, input() always gives:', ['Text', 'A whole number', 'A decimal', 'Nothing'], 'Use int() or float() to get a number.'),
    Q('In Python, 7 // 2 gives:', ['3', '3.5', '1', '14'], '// is whole-number division.'),
    Q('In Python, 7 % 2 gives:', ['1', '3', '3.5', '0'], '% gives the remainder.'),
    Q('Which Python symbol tests whether two values are equal?', ['==', '=', '!=', ':'], 'A single = assigns a value.'),
    Q('average = total + count runs without an error but gives a wrong result. It is a fault of:', ['Semantics (meaning)', 'Syntax (grammar)', 'Hardware', 'The keyboard'], 'The grammar is correct; the meaning is wrong.'),
  ],
  'cs-debug-f4': [
    Q('A missing colon after if mark >= 10 is a:', ['Syntax error', 'Logic error', 'Runtime error', 'Boundary error'], 'It breaks Python’s grammar rules.'),
    Q('In Python, runtime errors are called:', ['Exceptions', 'Comments', 'Variables', 'Modules'], 'For example ZeroDivisionError.'),
    Q('A breakpoint in a debugger:', ['Pauses the program at a chosen line', 'Deletes a line', 'Breaks the computer', 'Ends the loop'], 'You can then watch the variables.'),
    Q('With a long list of compiler errors, you should start with:', ['The first error', 'The last error', 'The shortest message', 'A random one'], 'One mistake can cause several messages.'),
  ],
  'cs-testing-f4': [
    Q('For a mark from 0 to 20, which value is normal test data?', ['12', '0', '21', '"twelve"'], 'Normal data is ordinary and valid.'),
    Q('A test plan compares the expected result with the:', ['Actual result', 'Data source', 'Clock speed', 'File name'], 'If they differ, there is a fault.'),
    Q('Checking that a number lies between two limits is a:', ['Range check', 'Type check', 'Presence check', 'Length check'], 'For example 0 to 20.'),
    Q('Checking that a field has not been left empty is a:', ['Presence check', 'Range check', 'Length check', 'Spell check'], 'Something must be entered.'),
    Q('Following a program on paper before running it is a:', ['Dry run', 'Mail merge', 'Backup', 'Compilation'], 'A trace table records the values.'),
  ],
  'cs-wordadv-f4': [
    Q('To change the look of every heading at once, you:', ['Modify the heading style', 'Retype each heading', 'Insert a page break', 'Use mail merge'], 'Every heading with that style changes.'),
    Q('Changes recorded with Track Changes are finally:', ['Accepted or rejected by the author', 'Printed automatically', 'Deleted at once', 'Sent by e-mail'], 'Each change can be judged one by one.'),
    Q('A section break is used to:', ['Give part of a document different page settings', 'Count words', 'Insert a comment', 'Check spelling'], 'For example one landscape page.'),
  ],
  'cs-merge-f4': [
    Q('In mail merge, the document holding the text that is the same for everyone is the:', ['Main document', 'Data source', 'Record', 'Footer'], 'Merge fields are placed in it.'),
    Q('In a data source, each column is a:', ['Field', 'Record', 'Page', 'Style'], 'Each row is a record.'),
    Q('Which step lets you check several merged letters before printing?', ['Preview Results', 'Start Mail Merge', 'Select Recipients', 'Insert Page Break'], 'Always preview before finishing.'),
  ],
  'cs-formulas-f4': [
    Q('In Excel, which key switches a reference between relative and absolute?', ['F4', 'F1', 'Esc', 'Tab'], 'It cycles B2, $B$2, B$2, $B2.'),
    Q('=VLOOKUP(F2,$A$2:$C$41,3,FALSE) returns a value from:', ['Column 3 of the table, in the row where F2 is found', 'Cell F3', 'Row 3 of the sheet', 'The last column of the sheet'], 'The 3 is the column number in the table.'),
    Q('The error #DIV/0! means:', ['A number was divided by zero', 'A function name is misspelt', 'The column is too narrow', 'A cell was deleted'], '#NAME? is a misspelt function.'),
    Q('COUNTA counts:', ['Cells that are not empty', 'Only cells holding numbers', 'Only empty cells', 'Pages'], 'COUNT counts only numbers.'),
  ],
  'cs-analysis-f4': [
    Q('Arranging a list from Z to A is sorting in:', ['Descending order', 'Ascending order', 'Random order', 'Filter order'], 'Ascending is A to Z.'),
    Q('Freeze Panes is used to:', ['Keep the header row in view while scrolling', 'Stop formulas working', 'Lock the file', 'Print faster'], 'The top row stays on screen.'),
    Q('Colouring marks below 10 red automatically is:', ['Conditional formatting', 'Filtering', 'Mail merge', 'Sorting'], 'The colour changes when the value changes.'),
  ],
  'cs-cloud-f4': [
    Q('Which permission should a classmate get if they must only read a file?', ['Viewer', 'Editor', 'Owner', 'Commenter'], 'Give the lowest permission that does the job.'),
    Q('Version history lets you:', ['See who changed what and restore an earlier version', 'Delete every version', 'Print in colour', 'Increase storage'], 'Mistakes can be undone.'),
    Q('Which is a cloud storage service?', ['Google Drive', 'Notepad', 'Device Manager', 'A flash drive'], 'Files are kept on the provider’s servers.'),
  ],
  'cs-iot-f4': [
    Q('Which part of an IoT system compares sensor readings with stored limits?', ['The microcontroller', 'The actuator', 'The phone screen', 'The power cable'], 'It decides what to do.'),
    Q('Which is an example of the Internet of Things?', ['A smart meter that sends electricity readings to the supplier', 'A printed book', 'A pencil', 'A blackboard'], 'It measures and sends data by itself.'),
    Q('To make an IoT camera safer, you should first:', ['Change its default password', 'Paint it', 'Keep the default password', 'Turn off all updates'], 'Default passwords are widely known to hackers.'),
  ],
  'cs-models-f4': [
    Q('Which of these is an advantage of a client-server network?', ['Files are backed up centrally', 'There is no cost', 'No skilled staff are needed', 'If the server fails nothing is lost'], 'Central storage makes backups easy.'),
    Q('Which is a disadvantage of a peer-to-peer network?', ['Files are scattered, so backups are hard', 'It needs an expensive server', 'It cannot share printers', 'It only works with fibre'], 'Every computer keeps its own files.'),
    Q('How many links does a full mesh of 4 devices need?', ['6', '4', '8', '12'], 'n(n − 1) ÷ 2 = 4 × 3 ÷ 2 = 6.'),
  ],
  'cs-ip-f4': [
    Q('How many bits are in an IPv4 address?', ['32', '128', '8', '64'], 'Four bytes of 8 bits.'),
    Q('A network printer that everyone must always find should have:', ['A static IP address', 'A dynamic IP address', 'No IP address', 'Two domain names'], 'A static address never changes.'),
    Q('The padlock in a browser shows that:', ['The connection to the site is encrypted', 'The site is always honest', 'The site is free', 'The site has no adverts'], 'Fake sites can use HTTPS too.'),
    Q('192.168.1.10 is an example of:', ['A private IP address used inside a local network', 'A domain name', 'A MAC address', 'An IPv6 address'], 'Addresses beginning 192.168 are private.'),
  ],
  'cs-credibility-f4': [
    Q('False information spread on purpose to deceive is:', ['Disinformation', 'Misinformation', 'Netiquette', 'A backup'], 'Misinformation is shared by people who believe it.'),
    Q('A deepfake is:', ['A fake video or voice recording made with AI to imitate a real person', 'A very deep website', 'A backup copy', 'A kind of cable'], 'Check the source before believing it.'),
    Q('Where should you check news about the GCE examinations?', ['The official channels of the GCE Board or the Ministry', 'An anonymous WhatsApp message', 'A comment under a video', 'A friend of a friend'], 'Official sources are accountable.'),
  ],
  'cs-netiquette-f4': [
    Q('Which is good netiquette?', ['Asking before sharing someone’s photo', 'Typing everything in capitals', 'Posting a friend’s phone number', 'Flooding a class group with stickers'], 'Respect other people’s privacy.'),
    Q('Making a fake account in someone’s name to embarrass them is:', ['Cyberbullying', 'Netiquette', 'Digital wellness', 'Encryption'], 'Impersonation is a form of cyberbullying.'),
    Q('Which habit supports digital wellness?', ['Keeping the phone out of the bedroom at night', 'Gaming until 3 a.m.', 'Checking the phone during every lesson', 'Never going outside'], 'Good sleep depends on it.'),
  ],
  'cs-ergo-f4': [
    Q('People get dry eyes at a screen mainly because they:', ['Blink less', 'Blink more', 'Sit too far away', 'Use a mouse'], 'Blink often and take eye breaks.'),
    Q('Carpal tunnel syndrome affects the:', ['Wrist', 'Eyes', 'Ears', 'Knees'], 'It is a form of RSI.'),
    Q('The top of a screen should be:', ['At or slightly below eye level', 'High above the head', 'At knee level', 'Behind the user'], 'This keeps the neck straight.'),
    Q('When sitting at a computer, your feet should be:', ['Flat on the floor or on a footrest', 'Crossed under the chair', 'On the desk', 'Hanging in the air'], 'This supports good posture.'),
  ],
  'cs-threats-f4': [
    Q('A phishing message sent by SMS is called:', ['Smishing', 'Vishing', 'Baiting', 'Tailgating'], 'Vishing uses phone calls.'),
    Q('Leaving an infected flash drive where someone will pick it up is:', ['Baiting', 'Phishing', 'Netiquette', 'Encryption'], 'Curiosity makes people plug it in.'),
    Q('Watching someone type their PIN is called:', ['Shoulder surfing', 'Tailgating', 'Smishing', 'Mail merge'], 'Cover the keypad when typing a PIN.'),
    Q('The best protection against losing files to ransomware is:', ['Backups kept away from the computer', 'Paying the ransom', 'Turning off updates', 'Using one short password'], 'Paying does not guarantee recovery.'),
  ],
  'cs-cyberlaw-f4': [
    Q('Which law protects personal data in Cameroon?', ['Law No. 2024/017 of 23 December 2024', 'Law No. 2000/011', 'Law No. 2010/021', 'There is no such law'], 'It gives people rights over their data.'),
    Q('ANTIC acts as Cameroon’s root certification authority. This means it:', ['Issues and controls digital certificates', 'Sells computers', 'Sets the GCE examinations', 'Supplies electricity'], 'Certificates prove who owns a website or signature.'),
    Q('Open-source software such as LibreOffice may be:', ['Used, studied, changed and shared', 'Used only after paying each year', 'Never copied', 'Used only by its maker'], 'Its source code is open to all.'),
    Q('OAPI, the African Intellectual Property Organisation, has its headquarters in:', ['Yaoundé', 'Douala', 'Abidjan', 'Dakar'], 'It registers patents and trademarks for its member states.'),
  ],
  'cs-mcq-f4': [
    Q('In a multiple-choice question, a wrong option written to look right is a:', ['Distractor', 'Stem', 'Key', 'Field'], 'Eliminate distractors first.'),
    Q('The question part of a multiple-choice item is called the:', ['Stem', 'Key', 'Footer', 'Record'], 'Read it slowly and fully.'),
    Q('A question asks "Which of these is NOT a protocol?" The answer is:', ['HTML', 'HTTP', 'FTP', 'SMTP'], 'HTML is a language for writing web pages, not a protocol.'),
    Q('If a question is taking too long, you should:', ['Mark it and come back later', 'Leave the room', 'Stop the paper', 'Shade every box'], 'Time is shared across all the questions.'),
  ],
  'cs-dryrun-f4': [
    Q('A trace table needs a column for:', ['Each variable and the output', 'Each line of the page', 'Each student in the class', 'Nothing: it has one column'], 'Then every change can be recorded.'),
    Q('An OUTPUT that should happen once after a loop is placed inside it by mistake. The result is:', ['The output is repeated every time round', 'Nothing is output', 'The loop stops at once', 'A syntax error'], 'Check where each OUTPUT belongs.'),
    Q('What is 352 MOD 10?', ['2', '35', '3', '0'], 'MOD 10 gives the last digit.'),
    Q('What is 352 DIV 10?', ['35', '2', '3', '3.52'], 'DIV 10 removes the last digit.'),
  ],
};
