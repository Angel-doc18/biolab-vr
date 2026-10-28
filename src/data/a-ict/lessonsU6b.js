// A Level ICT lessons (0796), Upper Sixth, Terms 2 and 3: programming,
// control structures, arrays, web system architecture, content management,
// reliable information and multi-factor authentication, ICT law and backups,
// the practical logbook, and the final drills. Each lesson includes the week's
// practical lab. Original text written for this app.

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

export const LESSONS_IU6B = [
  // ---------- 10. Programming basics ----------
  L('ait-prog-1', 'ait-u6-programming', '10.1', 'Variables, constants and data types', 18, ['Programming'], [
    'A **variable** is a named place in memory whose value can change while the program runs; a **constant** keeps one value, such as VAT_RATE = 0.1925 or PASS_MARK = 10. Named constants make programs easier to read and change.',
    'Every value has a **data type**: **integer** (whole numbers, such as 17), **real** or float (decimals, such as 13.5), **character** (one symbol), **string** (text, such as "Ngwa"), and **Boolean** (True or False).',
    'In **C++** variables are **declared** with their type before use: int age = 17; double average; string name = "Ngwa"; const double VAT_RATE = 0.1925;. In **Python** the type comes from the value assigned: age = 17, name = "Ngwa".',
    'Choose clear **identifiers**: letters, digits and underscores, not starting with a digit, no spaces and not a keyword: total_marks, not tm or 2total. Input arrives as text, so convert it: mark = int(input("Mark: ")).',
  ], 'ait-types', 'Store phone numbers and ID codes as strings: they are never added up and may start with 0.',
  ['The best data type for a student’s average mark such as 13.5 is:', ['real (float)', 'integer', 'Boolean', 'character'], 'It has a decimal part.'],
  [['Variable', 'A named memory location whose value can change.'], ['Constant', 'A named value that does not change while the program runs.'], ['Declaration', 'Stating a variable’s name and type before it is used.']],
  [
    { q: 'Choose data types for: number of students, price in FCFA with VAT, passed or not, initial of a name, a phone number.', steps: ['Students: integer. Price with VAT: real (or integer FCFA after rounding).', 'Passed: Boolean. Initial: character.', '**Phone number: string.**'] },
    { q: 'Write the same declarations in C++ and Python for a name, a mark and the pass mark.', steps: ['C++: string name = "Bih"; int mark = 14; const int PASS_MARK = 10;', 'Python: name = "Bih"; mark = 14; PASS_MARK = 10 (capitals show it is meant as a constant).', '**C++ checks the types when compiling; Python works them out when running.**'] },
  ]),

  L('ait-prog-2', 'ait-u6-programming', '10.2', 'Statements and scope: local and global', 18, ['Programming'], [
    'Statements are of a few kinds: **assignment** (total = total + mark), **input** and **output** (input(), print(); cin, cout), **control** statements that choose or repeat, and **calls** to subroutines.',
    'The **scope** of a variable is where it can be used. A **local** variable is created inside a subroutine and exists only there; a **global** variable is declared outside every subroutine and can be used anywhere.',
    'Prefer local variables and **parameters**: each subroutine then states what it needs and returns what it produces, can be tested alone and cannot accidentally change data used elsewhere. In Python, a function must say global x before it can change a global x.',
    '**Lab:** write a short script in Python and in C++ that reads three marks and prints their average, then deliberately misspell a variable and compare the error messages: C++ reports it when compiling, Python when the line runs.',
  ], 'ait-scope', 'If a subroutine needs a value, pass it in as a parameter rather than reading a global.',
  ['A variable declared inside a function exists:', ['only inside that function', 'everywhere in the program', 'in every file', 'after the program ends'], 'It is local.'],
  [['Scope', 'The part of a program in which a variable can be used.'], ['Local variable', 'A variable that exists only inside one subroutine.'], ['Parameter', 'A value passed into a subroutine when it is called.']],
  [
    { q: 'What does this Python print? count = 5; def add(): count = 10; print(count); add(); print(count)', steps: ['Inside add, count = 10 makes a new local variable.', 'add() prints 10; the global count is untouched.', '**10, then 5.**'] },
    { q: 'Rewrite a function that reads a global list marks to take it as a parameter.', steps: ['def average(marks):', '    return sum(marks) / len(marks)', '**Call it as average(class_marks): the function now works on any list.**'] },
  ]),

  // ---------- 11. Control structures ----------
  L('ait-ctl-1', 'ait-u6-control', '11.1', 'Selection: IF, nested IF and SWITCH', 18, ['Programming'], [
    '**IF … THEN … ELSE** chooses between two paths; **ELSE IF** (elif in Python) adds more conditions, tested in order, so the first true one runs.',
    'A **nested IF** is an IF inside another, used when one condition only matters after another is true: IF paid THEN IF mark >= 10 THEN …',
    'A **SWITCH** (CASE) statement chooses among many values of one variable. In C++: switch (term) { case 1: …; break; case 2: …; break; default: …; } Without break, the next case also runs (fall-through). Python 3.10 and later has match … case.',
    'Conditions combine with AND, OR and NOT; test the boundaries (exactly 10, exactly 20) to check the conditions are right.',
  ], 'nested-if', 'Test the highest grade band first in an ELSE IF chain, or every mark will fall into the first band.',
  ['In C++, forgetting break after a case:', ['lets the next case run too', 'causes no difference', 'stops the program', 'skips the default'], 'Fall-through.'],
  [['Selection', 'Choosing which statements run using a condition.'], ['Nested IF', 'An IF statement inside another.'], ['SWITCH statement', 'Choosing among many values of one variable.']],
  [
    { q: 'Write Python that prints the grade for a mark: 16+ A, 14+ B, 12+ C, 10+ D, otherwise F.', steps: ['if mark >= 16: grade = "A"', 'elif mark >= 14: grade = "B"\nelif mark >= 12: grade = "C"\nelif mark >= 10: grade = "D"', '**else: grade = "F"; then print(grade).**'] },
    { q: 'Write a C++ switch that prints the name of term 1, 2 or 3, and "unknown" otherwise.', steps: ['switch (term) {', 'case 1: cout << "First term"; break;  case 2: cout << "Second term"; break;  case 3: cout << "Third term"; break;', '**default: cout << "unknown"; }**'] },
  ]),

  L('ait-ctl-2', 'ait-u6-control', '11.2', 'Loops: FOR, WHILE and DO-WHILE, and validation loops', 18, ['Programming'], [
    'A **FOR** loop repeats a known number of times: for i in range(30) in Python; for (int i = 0; i < 30; i++) in C++.',
    'A **WHILE** loop tests its condition **before** each repetition, so it may run zero times: while balance > 0: … A **DO-WHILE** loop (REPEAT … UNTIL in pseudocode) tests **after** the body, so it always runs at least once: do { … } while (mark < 0 || mark > 20); in C++. Python has no DO-WHILE: it is written as while True: … with a break.',
    'A **validation loop** asks again until the input is acceptable, which suits DO-WHILE: the question must be asked at least once.',
    'Make sure each loop can end: something in the body must change the condition. A loop whose condition never becomes false is an **infinite loop**.',
  ], 'ait-loops', 'Known number of repeats: FOR. Unknown, maybe none: WHILE. Unknown, at least one: DO-WHILE.',
  ['A loop that must ask for a PIN at least once and repeat until it is right is best written as:', ['DO-WHILE (REPEAT … UNTIL)', 'FOR', 'WHILE with a false start', 'SWITCH'], 'It tests after the body.'],
  [['FOR loop', 'A loop that repeats a known number of times.'], ['WHILE loop', 'A loop that tests its condition before each repetition.'], ['DO-WHILE loop', 'A loop that tests its condition after each repetition, so it runs at least once.']],
  [
    { q: 'Write a C++ validation loop for a mark from 0 to 20.', steps: ['int mark;', 'do { cout << "Mark (0 to 20): "; cin >> mark; } while (mark < 0 || mark > 20);', '**The question is asked at least once and repeats until the mark is valid.**'] },
    { q: 'Write the same in Python, which has no DO-WHILE.', steps: ['while True:', '    mark = int(input("Mark (0 to 20): "))\n    if 0 <= mark <= 20:\n        break', '**print("Accepted", mark): the break ends the loop once the mark is valid.**'] },
  ]),

  // ---------- 12. Arrays ----------
  L('ait-arr-1', 'ait-u6-arrays', '12.1', 'One- and two-dimensional arrays', 18, ['Programming'], [
    'An **array** stores many values of the same type under one name, each reached by an **index**. In Python a list marks = [14, 9, 17] has marks[0] = 14; in C++ int marks[30]; holds 30 integers, marks[0] to marks[29].',
    '**Traversal** visits every element with a loop: total, average, largest, count of passes.',
    'A **two-dimensional** array is a table of rows and columns: grid[row][col]. A class mark sheet might have one row per student and one column per subject, so marks[2][1] is the third student’s mark in the second subject.',
    'Going outside the array (index 30 in an array of 30) is an error: Python raises IndexError; C++ may read garbage. Loop limits must match the array size.',
  ], 'array-2d', 'Indexes start at 0, so an array of n elements ends at n − 1.',
  ['For marks = [14, 9, 17, 11], marks[2] is:', ['17', '9', '11', '14'], 'Indexes start at 0.'],
  [['Array', 'Many values of one type stored under one name.'], ['Index', 'The position number of an element.'], ['Traversal', 'Visiting every element of an array in turn.']],
  [
    { q: 'Write Python to find the largest mark and its position in a list marks.', steps: ['best = marks[0]; where = 0', 'for i in range(1, len(marks)):\n    if marks[i] > best:\n        best = marks[i]; where = i', '**print(best, where)**'] },
    { q: 'marks is a 2-D list with a row per student and a column per subject. Write Python for each student’s total.', steps: ['for row in marks:', '    print(sum(row))', '**Each row is one student’s marks, so its sum is that student’s total.**'] },
  ]),

  L('ait-arr-2', 'ait-u6-arrays', '12.2', 'Linear search and bubble sort: dry runs', 18, ['Programming'], [
    '**Linear search** checks each element in turn until the item is found or the array ends: up to n comparisons, about n/2 on average.',
    '**Bubble sort** compares each pair of neighbours and swaps them if they are in the wrong order. After the first pass, the largest value is at the end; each pass needs one comparison fewer; if a pass makes no swaps, the list is sorted.',
    'A **dry run** follows the code by hand in a **trace table**: a column for each variable and for the array after each step.',
    '**Lab:** code both in Python, test them on a list of ten marks, then on an empty list and a list of one element: good code handles those too.',
  ], 'bubble-sort', 'Record the whole list after every swap in a bubble sort dry run.',
  ['After the first pass of bubble sort on 5, 3, 8, 1, the list is:', ['3, 5, 1, 8', '1, 3, 5, 8', '3, 5, 8, 1', '5, 3, 1, 8'], '5–3 swap, 5–8 stay, 8–1 swap.'],
  [['Linear search', 'Checking each element in turn.'], ['Bubble sort', 'Repeatedly swapping neighbours that are out of order.'], ['Pass', 'One run through the list in a sort.']],
  [
    { q: 'Write Python for a linear search that returns the position of a name, or −1.', steps: ['def find(names, target):', '    for i in range(len(names)):\n        if names[i] == target:\n            return i', '**    return -1**'] },
    { q: 'Dry-run bubble sort on 4, 2, 7, 1 to the end.', steps: ['Pass 1: 2, 4, 7, 1 → 2, 4, 1, 7.', 'Pass 2: 2, 1, 4, 7. Pass 3: 1, 2, 4, 7.', '**Pass 4 makes no swaps: sorted, 1, 2, 4, 7.**'] },
  ]),

  // ---------- 13. Web architecture ----------
  L('ait-webarch-1', 'ait-u6-web-arch', '13.1', 'Client side, server side and three-tier web systems', 18, ['Web systems'], [
    'In a web system, the **client** is the browser: **HTML** gives the structure, **CSS** the style and **JavaScript** the behaviour that runs on the user’s device (checking a form, updating part of a page).',
    'The **server side** runs on the web or application server: scripts in PHP, Python or Node.js receive requests, apply the rules, talk to the **database** and send back pages or data. Code and passwords on the server are not visible to users.',
    'This is a **three-tier** architecture: **presentation** (browser), **application** (server logic) and **data** (database server). Each tier can be changed or scaled separately.',
    'The browser sends an **HTTP request** (GET a page, POST a form); the server replies with a **status code** (200 OK, 301 moved, 404 not found, 500 server error) and the content.',
  ], 'ait-three-tier', 'Anything the user must not be able to change, such as prices or marks, is checked on the server.',
  ['A script that saves a form’s data in the database runs:', ['on the server', 'in the browser', 'on the router', 'in the CSS'], 'Server side, with the database.'],
  [['Client side', 'Code that runs in the user’s browser.'], ['Server side', 'Code that runs on the web or application server.'], ['Three-tier architecture', 'Presentation, application and data layers kept separate.']],
  [
    { q: 'Sort into client side or server side: checking that an email has an @, saving a message in MySQL, hiding the database password, showing a pop-up menu.', steps: ['Client: the @ check (for convenience) and the pop-up menu.', 'Server: saving in MySQL and keeping the password.', '**The email is checked again on the server, since browser checks can be bypassed.**'] },
    { q: 'What do these status codes mean: 200, 404, 500?', steps: ['200: OK, the page was sent.', '404: the page was not found.', '**500: an error on the server.**'] },
  ]),

  L('ait-webarch-2', 'ait-u6-web-arch', '13.2', 'Lab: a contact form that saves to a database', 20, ['Web systems'], [
    'The **form** (HTML): <form action="contact.php" method="post"> with inputs name, email and message, each required, and a submit button.',
    'The **server script** (PHP with PDO): connect to MySQL, read $_POST, check each field again (presence, length, email format), then insert with a **prepared statement**: $stmt = $pdo->prepare("INSERT INTO messages (name, email, body) VALUES (?, ?, ?)"); $stmt->execute([$name, $email, $body]);',
    'Prepared statements send the data separately from the SQL, which stops **SQL injection**. When the page shows the stored text again, escape it (htmlspecialchars) so that typed tags are shown, not run.',
    'Finish with a clear reply ("Thank you, your message was sent") and test with normal, empty, very long and tricky input such as \' OR 1=1 --.',
  ], 'ait-contact-form', 'Never build SQL by joining strings with what a user typed: use placeholders.',
  ['Prepared statements protect a database against:', ['SQL injection', 'power cuts', 'slow networks', 'spam email'], 'Data never becomes part of the SQL.'],
  [['Prepared statement', 'SQL sent with placeholders, the data supplied separately.'], ['SQL injection', 'An attack that slips SQL commands into input fields.'], ['Escaping output', 'Turning special characters into text so they are shown, not run.']],
  [
    { q: 'Why is "INSERT … VALUES (\'" + name + "\')" dangerous?', steps: ['A user could type a name containing a quote and SQL commands.', 'Joined into the query, those commands would run.', '**Use a prepared statement with placeholders instead.**'] },
    { q: 'List the server-side checks for the contact form.', steps: ['Name: present, at most 80 characters.', 'Email: present and a valid format (filter_var with FILTER_VALIDATE_EMAIL in PHP).', '**Message: present, at most 2000 characters; reject and explain anything else.**'] },
  ]),

  // ---------- 14. CMS and publishing ----------
  L('ait-cms-1', 'ait-u6-cms', '14.1', 'Content management systems and search engine indexing', 18, ['Web systems'], [
    'A **content management system** (CMS) such as WordPress, Joomla or Drupal stores a site’s content in a database and builds the pages from it, so staff can publish news and pages through a browser without writing code.',
    'A **theme** sets the look; **plugins** (extensions) add features such as contact forms, galleries or online payments. **User roles** limit what each person can do: in WordPress, Administrator, Editor, Author, Contributor and Subscriber. Keep the CMS, themes and plugins updated: old plugins are a common way in for attackers.',
    'Search engines **crawl** sites by following links, **index** the words on each page and rank them. Help them with a clear **title** and **meta description** on each page, headings that describe the content, a **sitemap** (sitemap.xml) listing the pages, and **robots.txt** asking crawlers to skip private areas (it is a request, not security).',
    'Fast pages that work on phones also rank better and keep visitors.',
  ], 'ait-cms', 'Give every page its own title and description: they are what people see in search results.',
  ['In WordPress, a person who may publish and edit anyone’s posts but not change settings is an:', ['Editor', 'Administrator', 'Subscriber', 'Contributor'], 'Editors manage content.'],
  [['Content management system', 'Software for building and updating a website without coding.'], ['Plugin', 'An add-on that gives a CMS a new feature.'], ['Crawling and indexing', 'How search engines find pages and record their words.']],
  [
    { q: 'Give roles for a school website: the ICT teacher, the principal’s secretary who writes news, and student journalists.', steps: ['ICT teacher: Administrator (settings, plugins, users).', 'Secretary: Editor (publishes and edits all news).', '**Student journalists: Contributors (write drafts that an Editor approves).**'] },
    { q: 'The school’s results page does not appear in search. Give three checks.', steps: ['Is it linked from other pages and listed in the sitemap?', 'Does robots.txt or a "noindex" setting block it?', '**Does it have a clear title and description with the words people search for?**'] },
  ]),

  L('ait-cms-2', 'ait-u6-cms', '14.2', 'Lab: publishing with SFTP and testing on different screens', 18, ['Web systems'], [
    'Files go to the web host with **SFTP** (secure file transfer over SSH), using a program such as FileZilla: the host name, user name and password or key, and port 22. Plain FTP sends passwords unencrypted and should not be used.',
    'A **responsive** page adapts to the screen. It needs <meta name="viewport" content="width=device-width, initial-scale=1"> in its head, flexible widths, images with max-width: 100%, and **media queries** that change the layout on narrow screens: @media (max-width: 600px) { .menu { display: none; } }.',
    'Test in the browser’s developer tools (device toolbar) at phone, tablet and desktop widths, then on real phones: check that text is readable without zooming, buttons are big enough to tap and nothing scrolls sideways.',
    'Most Cameroonian students reach websites on phones over mobile data, so keep pages light: compress images and avoid large videos on the home page.',
  ], 'ait-responsive', 'Design for the phone first, then let the layout widen for larger screens.',
  ['The tag that makes a page fit a phone’s width is:', ['<meta name="viewport" content="width=device-width, initial-scale=1">', '<title>', '<link rel="icon">', '<meta charset="utf-8">'], 'Without it, phones show a zoomed-out desktop page.'],
  [['SFTP', 'Secure file transfer over SSH.'], ['Responsive design', 'Pages that adapt their layout to the screen size.'], ['Media query', 'A CSS rule that applies only at certain screen sizes.']],
  [
    { q: 'Write CSS so that two side-by-side columns stack on screens narrower than 600 px.', steps: ['.cols { display: flex; gap: 16px; }', '@media (max-width: 600px) { .cols { flex-direction: column; } }', '**On phones the columns stack; on wider screens they sit side by side.**'] },
    { q: 'A home page photo is 4 MB. Why is that a problem, and what do you do?', steps: ['On mobile data it is slow and costs students money.', 'Resize it to the width shown (about 1200 px) and compress it.', '**Aim for under 200 KB; use a modern format such as WebP where possible.**'] },
  ]),

  // ---------- 15. Reliability and MFA ----------
  L('ait-rel-1', 'ait-u6-reliability', '15.1', 'Judging information and protecting its integrity', 18, ['Information'], [
    'Before using or sharing information, judge it: **currency** (is it up to date?), **relevance** (does it answer the question?), **authority** (who wrote it, and are they qualified?), **accuracy** (is it supported by evidence and other sources?) and **purpose** (is it trying to inform, sell or persuade?).',
    '**Misinformation** is false information shared by mistake; **disinformation** is false information spread on purpose. Check claims against reliable sources (MINESEC, the GCE Board, a recognised newspaper) and be wary of messages that ask you to forward them urgently.',
    '**Integrity** means data has not been changed. A **hash** (such as SHA-256) of a file is published beside it; if the hash of your download matches, the file is exactly the original. A **digital signature** also proves who published it.',
    '**Digital assets** (photos, documents, software, accounts) have value: keep licences and receipts, respect copyright, and back them up.',
  ], 'ait-sources', 'Check who wrote it, when, and what they want, before you trust it.',
  ['A message says exams are cancelled and to forward it to ten friends. The first thing to check is:', ['the official source, such as the GCE Board or MINESEC', 'how many people forwarded it', 'the colour of the text', 'nothing: forward it'], 'Authority and accuracy.'],
  [['Currency', 'How up to date information is.'], ['Disinformation', 'False information spread on purpose.'], ['Hash', 'A fixed-length fingerprint of data used to check it has not changed.']],
  [
    { q: 'Judge a blog post with no author or date claiming a herbal cure for malaria, with a link to buy it.', steps: ['Authority: no author; currency: no date.', 'Purpose: it sells the product; accuracy: no evidence or medical source.', '**Unreliable: check with health authorities and a doctor before believing or sharing it.**'] },
    { q: 'How do you check that a downloaded installer was not tampered with?', steps: ['Find the SHA-256 hash published on the maker’s official site.', 'Work out the hash of the download (certutil -hashfile file SHA256 on Windows).', '**If the two match, the file is the original.**'] },
  ]),

  L('ait-rel-2', 'ait-u6-reliability', '15.2', 'Phishing and multi-factor authentication', 18, ['Security'], [
    '**Phishing** tricks people into giving away passwords or codes, or into opening malicious links and files. Signs: urgency or threats ("your account will be closed today"), a sender address that does not match the organisation, links to look-alike sites (mtn-momo-secure.com), requests for a PIN or code, and offers too good to be true.',
    'Check by hovering over or long-pressing a link to see its real address, typing the official address yourself, or calling the organisation’s official number. Report phishing and delete it.',
    '**Multi-factor authentication** (MFA) asks for two or more kinds of proof: something you **know** (password, PIN), something you **have** (phone with an authenticator app or SMS code, security key) and something you **are** (fingerprint, face). A stolen password alone is then not enough.',
    '**Lab:** switch on 2-step verification for an email account using an authenticator app; save the backup codes offline; then sign in from another browser to see the second step.',
  ], 'ait-phishing', 'No bank, operator or school ever needs your PIN or one-time code.',
  ['A password plus a code from an authenticator app is:', ['two-factor authentication: something you know and something you have', 'one factor used twice', 'a phishing attack', 'encryption'], 'Two different kinds of proof.'],
  [['Phishing', 'Tricking people into revealing secrets or opening harmful links.'], ['Multi-factor authentication', 'Signing in with two or more kinds of proof.'], ['Backup codes', 'One-time codes kept for signing in when the phone is lost.']],
  [
    { q: 'An email from "service@mtn-mom0.net" says your Mobile Money will be blocked unless you confirm your PIN by a link. List the warning signs.', steps: ['The domain is a look-alike (a zero in "mom0").', 'It threatens and hurries you.', '**It asks for your PIN, which no operator ever needs: delete and report it.**'] },
    { q: 'A student’s password was stolen, but MFA was on. What happens, and what should they do?', steps: ['The thief cannot sign in without the second factor.', 'The student may get an unexpected code request.', '**Change the password at once and check the account’s recent activity.**'] },
  ]),

  // ---------- 16. ICT law and backups ----------
  L('ait-law-1', 'ait-u6-legislation', '16.1', 'ICT law and governance in Cameroon', 18, ['Law'], [
    '**MINPOSTEL**, the Ministry of Posts and Telecommunications, sets the government’s ICT policy. **ART**, the Telecommunications Regulatory Board, licenses and regulates the operators. **ANTIC**, the National Agency for Information and Communication Technologies, created in 2002, regulates electronic security: it audits systems, runs an incident response team, is the root certification authority and raises awareness.',
    'The main laws: **Law No. 2010/012** on cybersecurity and cybercriminality (illegal access, damaging data, online fraud, identity theft); **Law No. 2010/013** on electronic communications (networks and operators); **Law No. 2010/021** on electronic commerce (online contracts, sellers’ duties); **Law No. 2024/017** on personal data (consent, purpose, security, people’s rights); and **Law No. 2000/011** on copyright and neighbouring rights, which covers software, so copying or selling software without a licence (**piracy**) is an offence.',
    '**Financial hacking** includes breaking into mobile money or bank accounts, SIM swap fraud and fake payment pages: these are offences under the cybercrime law, and victims should report them to their operator and the police at once.',
    'Organisations protect themselves with policies, licensed software, audits and staff training.',
  ], 'acs-cybercrime', 'Match each case to the law: hacking 2010/012, networks 2010/013, online shops 2010/021, personal data 2024/017, piracy 2000/011.',
  ['Selling copied software without a licence breaks:', ['Law No. 2000/011 on copyright', 'Law No. 2024/017', 'Law No. 2010/013', 'no law'], 'Software is protected by copyright.'],
  [['MINPOSTEL', 'The ministry that sets Cameroon’s posts and telecommunications policy.'], ['Software piracy', 'Copying, using or selling software without a licence.'], ['SIM swap fraud', 'Taking over someone’s phone number to receive their codes.']],
  [
    { q: 'Name the law or body for each: (i) a cyber café installs unlicensed Windows, (ii) a hacker empties a Mobile Money account, (iii) a school publishes students’ phone numbers online without consent, (iv) an operator’s network licence.', steps: ['(i) Law No. 2000/011 (piracy). (ii) Law No. 2010/012 (cybercrime).', '(iii) Law No. 2024/017 (personal data).', '**(iv) ART, under Law No. 2010/013.**'] },
    { q: 'What should a victim of SIM swap fraud do?', steps: ['Call the operator from another phone to block the SIM and stop transfers.', 'Change passwords and PINs linked to that number.', '**Report it to the police with dates and amounts.**'] },
  ]),

  L('ait-law-2', 'ait-u6-legislation', '16.2', 'Lab: backup strategies and scheduling offline backups', 18, ['Security'], [
    'A **full backup** copies all the chosen data every time: simple to restore, but slow and large. An **incremental backup** copies only what changed since the last backup of any kind: quick and small, but restoring needs the last full backup and every incremental since. A **differential backup** copies everything changed since the last **full** backup: it grows each day, but restoring needs only the full backup and the latest differential.',
    'The **3-2-1 rule**: keep 3 copies of the data, on 2 different kinds of storage, with 1 copy off site (another building, or cloud storage). An **offline** copy, disconnected after the backup, cannot be encrypted by ransomware.',
    'A backup is only proven when a **restore** has been tested.',
    '**Lab:** in Windows, set up File History or a scheduled task; in Linux, a cron job such as 0 18 * * 5 rsync -a /home/school/ /mnt/backup/ (every Friday at 18:00). Then delete a test file and restore it.',
  ], 'ait-backups', 'Untested backups are hopes, not backups: restore a file to prove it.',
  ['Restoring from incremental backups needs:', ['the last full backup and every incremental since', 'only the last incremental', 'only the full backup', 'nothing'], 'Each incremental holds only one day’s changes.'],
  [['Incremental backup', 'Copying only what changed since the last backup.'], ['Differential backup', 'Copying everything changed since the last full backup.'], ['3-2-1 rule', 'Three copies, two kinds of storage, one off site.']],
  [
    { q: 'Full backup on Sunday, incrementals Monday to Thursday; the disk fails on Friday. What is restored, in what order?', steps: ['Sunday’s full backup first.', 'Then Monday’s, Tuesday’s, Wednesday’s and Thursday’s incrementals in order.', '**Five restores; with differentials it would be Sunday’s full and Thursday’s differential only.**'] },
    { q: 'Plan backups for a school office with one computer of fees records.', steps: ['Daily incremental to an external drive, weekly full on Friday.', 'A second drive taken home by the bursar each week, swapped with the first.', '**Test a restore each month and record it in the logbook.**'] },
  ]),

  // ---------- 17. The practical logbook ----------
  L('ait-paper3-1', 'ait-u6-logbook', '17.1', 'Paper 3: completing the practical logbook', 20, ['Examination practice'], [
    'The Upper Sixth **practical logbook** records every lab: for each one, the **task**, the **method** (what you did, in order), the **evidence** (screenshots, printouts, file names), the **results** and a short **reflection** (what went wrong, how you fixed it, what you learned). Your teacher signs it off before the end of the second term.',
    'Good evidence is labelled and referred to: "Figure 4: the query and its result". Crop screenshots to what matters; make sure text is readable; keep file names as the task asks.',
    'Check layouts before printing (print preview, PDF): page breaks, headers and footers, page numbers. Keep a backup of every file in a second place.',
    'For the **practical examination**, follow the instructions exactly, save often under the names asked for, and if something is unclear, state the assumption you make. Prepare short notes for presenting your work: the problem, what you built, how you tested it and what you would improve.',
  ], 'ait-logbook', 'Write the reflection the same day: what went wrong is the part examiners value most.',
  ['Each logbook entry should include:', ['the task, method, evidence, results and reflection', 'only screenshots', 'only the date', 'only the mark'], 'A complete record.'],
  [['Practical logbook', 'The record of every lab task, with evidence and reflection.'], ['Evidence', 'Screenshots, printouts or files proving the work was done.'], ['Reflection', 'What went wrong, how it was fixed and what was learned.']],
  [
    { q: 'Write a logbook entry for the backup lab.', steps: ['Task: schedule a weekly backup and prove a restore. Method: created a cron job (0 18 * * 5 rsync …), ran it, deleted test.txt, restored it.', 'Evidence: Figure 1 the crontab line; Figure 2 the restored file with its date.', '**Reflection: the first run failed because the drive was not mounted; I added a check that the drive is present.**'] },
    { q: 'During the practical a question is unclear about the file format. What do you do?', steps: ['Follow the paper as closely as you can.', 'Write your assumption on the answer sheet ("Saved as CSV, as the data is a table").', '**Carry on: examiners credit sensible, stated assumptions.**'] },
  ]),

  // ---------- 18. Paper drills ----------
  L('ait-u6-paper1', 'ait-u6-papers', '18.1', 'Paper 1 sprint drills: system software, subnets and normalisation', 20, ['Examination practice'], [
    'In the 2026 session, A Level ICT **Paper 1** (multiple choice, 1½ hours) and **Paper 2** (2½ hours) were on Tuesday 9 June, and the **practical** from Thursday 7 to Saturday 9 May. Check the timetable for your year.',
    '**System software**: types of operating system and their uses, scheduling, paging and page replacement, deadlock, utilities and translators.',
    '**Subnets**: hosts = 2ʰ − 2 for h host bits; the block size is 256 minus the splitting byte of the mask; network address = the multiple of the block at or below the host; broadcast = one less than the next block.',
    '**Normalisation**: repeating groups (1NF), partial dependencies on part of a composite key (2NF), transitive dependencies between non-key fields (3NF).',
  ], 'ait-u6-gce', 'Work out the answer before reading the options, then find it among them.',
  ['A /26 subnet has how many usable hosts?', ['62', '64', '26', '30'], '2⁶ − 2.'],
  [['Block size', 'The number of addresses in each subnet.'], ['Transitive dependency', 'A non-key field depending on another non-key field.'], ['Page replacement', 'Choosing which page to remove from memory when it is full.']],
  [
    { q: 'For 192.168.20.140/27, give the network and broadcast addresses.', steps: ['/27: blocks of 32 in the last byte; 140 lies in 128 to 159.', 'Network 192.168.20.128; broadcast 192.168.20.159.', '**Hosts .129 to .158: 30 hosts.**'] },
    { q: 'Which operating system type suits: (i) ATM withdrawals, (ii) monthly bills, (iii) a pacemaker?', steps: ['(i) Online transaction processing.', '(ii) Batch processing.', '**(iii) Hard real-time.**'] },
  ]),

  L('ait-u6-paper2', 'ait-u6-papers', '18.2', 'Paper 2 design clinics: case studies, PERT and SQL', 20, ['Examination practice'], [
    'Read the **case study** twice. Underline the people and organisations (entities), the documents and data (flows and stores) and the problems (requirements).',
    '**System charts**: draw the programs, files, inputs and outputs of the whole system clearly, with labelled arrows; keep names the same across diagrams.',
    '**PERT networks**: list activities with durations and dependencies, do the forward and backward passes, give the float of each and name the critical path; use te = (o + 4m + p) ÷ 6 for three estimates.',
    '**SQL**: name the tables and keys first, then write SELECT, FROM with the joins, WHERE, GROUP BY, HAVING and ORDER BY in that order, and check every field belongs to a named table.',
  ], 'ait-pert', 'Show the forward and backward pass values on the network itself: the method earns marks even if one number slips.',
  ['In SQL, conditions on totals per group go in:', ['HAVING', 'WHERE', 'ORDER BY', 'FROM'], 'After GROUP BY.'],
  [['Case study', 'An exam scenario that answers must be applied to.'], ['System chart', 'A diagram of a system’s programs, files, inputs and outputs.'], ['Forward pass', 'Working out earliest start times from the beginning of a network.']],
  [
    { q: 'Write SQL for the classes whose total fees owed are above 1 000 000 FCFA, largest first.', steps: ['SELECT ClassID, SUM(Owing) AS Total FROM Student', 'GROUP BY ClassID HAVING SUM(Owing) > 1000000', '**ORDER BY Total DESC;**'] },
    { q: 'Activities: P 4 days; Q 3 (after P); R 6 (after P); S 2 (after Q and R). Find the project length and critical path.', steps: ['P 0–4; Q 4–7; R 4–10; S starts at 10, ends 12.', 'Q’s float: S starts at 10, so Q may start at 7: float 3.', '**12 days; critical path P, R, S.**'] },
  ]),

  // ---------- 19. Final weeks ----------
  L('ait-u6-mock', 'ait-u6-final', '19.1', 'The mock examination and remediation', 18, ['Examination practice'], [
    'The **mock examination** covers Papers 1, 2 and 3 under real conditions and times. Its value lies in what you do afterwards.',
    'For every lost mark, find the **cause**: missing knowledge, a misread question, a slip, or running out of time. Each needs a different fix: relearn and practise, read the question twice, check your work, or plan your time.',
    'Keep a **mistakes list** and read it before every practice paper; redo the questions you got wrong a week later without looking at the answers.',
    '**Timing**: in a 2½-hour paper, divide the time by the marks, keep 10 minutes to check, and move on when a part runs over.',
  ], 'acs-u6-final', 'Fix the cause, not just the answer: a slip and a gap in knowledge need different cures.',
  ['After the mock, the most useful thing to do is:', ['find the cause of each lost mark and fix it', 'look only at the total', 'throw it away', 'compare marks with friends'], 'Remediation.'],
  [['Mock examination', 'A practice examination under real conditions.'], ['Remediation', 'Fixing the causes of mistakes.'], ['Mistakes list', 'A personal list of errors to review before each practice.']],
  [
    { q: 'Plan the time for a 2½-hour paper worth 100 marks.', steps: ['150 − 10 minutes for checking = 140 minutes.', '1.4 minutes a mark: a 20-mark question gets about 28 minutes.', '**Start with your strongest questions; move on when a part overruns.**'] },
    { q: 'You lost marks on SQL joins and PERT floats. Plan two weeks.', steps: ['Week 1: write ten join queries on a small database and run them.', 'Week 2: two PERT networks a day, with forward and backward passes.', '**Then a timed past Paper 2 to check the marks have come back.**'] },
  ]),

  L('ait-u6-bootcamp', 'ait-u6-final', '19.2', 'Final bootcamp: algorithms and normalisation', 18, ['Examination practice'], [
    '**Algorithms**: know how to write and trace loops (FOR, WHILE, DO-WHILE), selection (IF, SWITCH), totals, averages, maximums, linear search and bubble sort, with trace tables showing every variable.',
    '**Complexity**: a single loop over n items is about n steps; a loop inside a loop is about n²; linear search takes up to n comparisons; bubble sort up to about n²/2.',
    '**Normalisation**: take any flat table, write its dependencies, then show 1NF, 2NF and 3NF with the reason for each split, and check the tables join back to the original.',
    'In the last days, sleep well, revise from your mistakes list, and do short timed drills rather than long new topics.',
  ], 'acs-clinic', 'In the last week, practise what you have learned rather than starting new topics.',
  ['Bubble sort on 100 items makes up to about:', ['5000 comparisons', '100 comparisons', '10 comparisons', '1 000 000 comparisons'], 'About n²/2 = 4950.'],
  [['Trace table', 'A table of variable values at each step of a dry run.'], ['Linear search', 'Checking each item in turn.'], ['Third normal form', 'Every field depends on the key, the whole key and nothing but the key.']],
  [
    { q: 'Trace: total ← 0; FOR i ← 1 TO 4: IF i MOD 2 = 0 THEN total ← total + i; NEXT i; OUTPUT total.', steps: ['i = 1: odd, total 0. i = 2: total 2.', 'i = 3: odd, total 2. i = 4: total 6.', '**Output 6.**'] },
    { q: 'Normalise RESULT(StudentID, Name, SubjectCode, SubjectName, Mark) with key (StudentID, SubjectCode).', steps: ['Name depends on StudentID only; SubjectName on SubjectCode only: partial dependencies.', 'Split: STUDENT(StudentID, Name), SUBJECT(SubjectCode, SubjectName).', '**RESULT(StudentID, SubjectCode, Mark): now in 3NF.**'] },
  ]),
];
