// Computer Science lessons for Form 2, following the MINESEC annual progression:
// computer systems, storage and system software; networks, word processing and
// digital ethics; the Internet and ICT in society. Original text written for
// this app. **double asterisks** mark key terms. `examples` are worked examples.

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

export const LESSONS_2 = [
  // ---------- Devices and storage media ----------
  L('cs-devices-2', 'cs-f2-devices', '1.1', 'Peripherals and storage devices', 9, ['Hardware', 'Storage'], [
    'In Form 1 you met **input devices** (keyboard, mouse, scanner, microphone, webcam, barcode reader) and **output devices** (monitor, printer, speakers, projector). Devices that keep data permanently are **storage devices**, and the material on which the data is kept is the **storage medium**.',
    '**Internal storage** is fixed inside the system unit, such as the main **hard disk drive** or **solid-state drive**. **External storage** is connected from outside and can be carried about: external hard disks, **flash drives** (USB sticks), **memory cards** and **optical discs**.',
    'Storage devices work in three ways. **Magnetic** storage, such as the **hard disk drive (HDD)**, records data on spinning metal disks coated with magnetic material; it is cheap for large amounts of data. **Optical** storage, such as **CDs** (about 700 MB), **DVDs** (about 4.7 GB) and **Blu-ray discs** (25 GB or more), is read by a laser. **Solid-state** (flash) storage, such as **SSDs**, flash drives and memory cards, has **no moving parts**, so it is faster, lighter, quieter and less easily damaged when dropped.',
    'Data can also be kept on **cloud storage**: on the computers of a company, reached through the Internet, such as Google Drive. It can be opened from any device, but needs an Internet connection.',
  ], null, 'Group storage by **how it works**: magnetic (hard disk), optical (CD, DVD, Blu-ray), solid-state (SSD, flash drive, memory card).',
  ['Which storage device has no moving parts?', ['A flash drive', 'A hard disk drive', 'A DVD drive', 'A CD drive'], 'Flash drives use solid-state memory chips; hard disks and optical drives spin.'],
  [['Storage medium', 'The material on which data is stored, such as a disc or a chip.'], ['Solid-state storage', 'Storage on memory chips with no moving parts.'], ['Optical storage', 'Storage read and written by a laser, such as CDs and DVDs.'], ['Cloud storage', 'Storage on remote computers reached through the Internet.']],
  [
    { q: 'A pupil wants to carry a 3 GB video to a friend’s house. Which would hold it: a CD, a DVD or a 16 GB flash drive? Give reasons.', steps: ['A CD holds only about **700 MB**, less than 1 GB: **too small**.', 'A single-layer DVD holds about **4.7 GB**: **big enough**.', 'A **16 GB flash drive** is also big enough, and it is easier to write to, re-use and carry, so it is the best choice.'] },
  ]),

  // ---------- Storage units and the processor ----------
  L('cs-units-2', 'cs-f2-memory', '2.1', 'Measuring storage: bits, bytes and their multiples', 9, ['Data units', 'Calculation'], [
    'Computers store everything as **binary digits**, the 0s and 1s of electronic switches that are off or on. One binary digit is a **bit**, the smallest unit of data. **4 bits** make a **nibble**, and **8 bits** make a **byte**, which is enough to store **one character**, such as the letter A.',
    'Larger amounts use multiples of the byte. In computing each step is **1024** (2¹⁰), which is close to 1000: **1 kilobyte (KB) = 1024 bytes**; **1 megabyte (MB) = 1024 KB**; **1 gigabyte (GB) = 1024 MB**; **1 terabyte (TB) = 1024 GB**. Makers of disks and flash drives often use 1000 instead, so a drive may show a little less space than the number on its box.',
    'To change a **larger unit to a smaller** one, **multiply** by 1024 for each step down. To change a **smaller unit to a larger** one, **divide** by 1024 for each step up.',
    'Typical sizes: a page of plain text is a few KB, a phone photo about 2 to 5 MB, a song about 4 MB, a film 1 to 2 GB. Phones and computers today have memories of several GB and storage of hundreds of GB or a few TB.',
  ], null, 'Order of units from smallest: **bit, nibble, byte, KB, MB, GB, TB**. Multiply going down, divide going up.',
  ['How many bits are there in 3 bytes?', ['24', '3', '12', '1024'], '1 byte = 8 bits, so 3 bytes = 3 × 8 = 24 bits.'],
  [['Bit', 'A binary digit, 0 or 1: the smallest unit of data.'], ['Byte', 'A group of 8 bits, enough to store one character.'], ['Nibble', 'A group of 4 bits, half a byte.'], ['Kilobyte', '1024 bytes.']],
  [
    { q: 'Convert 2 GB into MB, and then into KB.', steps: ['1 GB = 1024 MB, so 2 GB = 2 × 1024 = **2048 MB**.', '1 MB = 1024 KB, so 2048 MB = 2048 × 1024 = **2 097 152 KB**.'] },
    { q: 'A memory card holds 16 GB. How many photos of 4 MB each can it store?', steps: ['Change the card size to MB: 16 × 1024 = 16 384 MB.', 'Divide by the size of one photo: 16 384 ÷ 4 = **4096 photos**.'] },
    { q: 'A text file has 6144 characters. What is its size in KB?', steps: ['One character takes 1 byte, so the file is 6144 bytes.', 'Divide by 1024 to change to KB: 6144 ÷ 1024 = **6 KB**.'] },
  ]),

  L('cs-buses-2', 'cs-f2-memory', '2.2', 'Inside the system unit: the processor and buses', 8, ['Hardware', 'Processor'], [
    'The **CPU** carries out instructions in a repeating cycle: it **fetches** an instruction from main memory, **decodes** it to work out what to do, and **executes** it. This is the **fetch–decode–execute cycle**, repeated billions of times a second. The **control unit** runs the cycle, and the **ALU** does the calculations and comparisons.',
    'The CPU holds the data it is working on in a few very fast storage places of its own, called **registers**. Data that is used often is kept in **cache memory**, which is faster than RAM and sits close to the processor.',
    'The parts on the **motherboard** are joined by sets of tiny parallel wires called **buses**. The **data bus** carries the data itself between the processor, memory and devices. The **address bus** carries the **address** of the memory location to be used, so the data goes to the right place. The **control bus** carries **control signals**, such as "read" or "write", and the clock signals that keep everything in step.',
  ], 'computer-system', 'Three buses, three jobs: **data** carries the data, **address** says **where**, **control** says **what to do** (read or write).',
  ['Which bus carries the location in memory where data is to be stored?', ['The address bus', 'The data bus', 'The control bus', 'The USB bus'], 'Each memory location has an address, sent along the address bus.'],
  [['Bus', 'A set of parallel wires that carries signals between parts of a computer.'], ['Register', 'A very fast storage location inside the CPU.'], ['Fetch–decode–execute cycle', 'The cycle by which a CPU runs each instruction.']],
  [
    { q: 'Describe what happens on the three buses when the CPU reads a number from memory.', steps: ['The CPU puts the **address** of the memory location on the **address bus**.', 'It sends a **"read"** signal on the **control bus**.', 'The memory puts the number on the **data bus**, which carries it to the CPU.'] },
  ]),

  // ---------- System software and utilities ----------
  L('cs-utilities-2', 'cs-f2-software', '3.1', 'System software: the operating system and utility programs', 9, ['Software', 'Utilities'], [
    '**System software** controls and looks after the computer, while **application software** does jobs for the user. The main system software is the **operating system**. Its functions include: **managing the processor and memory** so several programs can run, **managing files** on storage, **controlling input and output devices**, providing the **user interface**, and **security** through user accounts and passwords.',
    '**Utility programs** are small system programs that maintain and protect the computer. An **antivirus** program detects, blocks and removes viruses and other harmful programs; it must be **updated** often to recognise new ones.',
    'A **disk defragmenter** rearranges the parts of files that have been scattered across a hard disk so that each file is stored in one place, which makes the disk faster to read. (Solid-state drives do not need defragmenting.) A **file compression** utility, such as a ZIP program, makes files **smaller** so they take less space and are quicker to send; they are **extracted** (decompressed) before use.',
    'Other utilities include **backup** programs that copy important files to another device, **disk clean-up** programs that remove unwanted temporary files, and **device drivers**, small programs that let the operating system work with a particular printer, scanner or other device.',
  ], null, 'For each utility, give its **purpose** in one line: antivirus **protects**, defragmenter **speeds up a hard disk**, compression **reduces file size**, backup **makes copies**.',
  ['Which utility makes a large file smaller so it can be sent quickly by e-mail?', ['A file compression program', 'An antivirus', 'A disk defragmenter', 'A device driver'], 'Compression (for example, making a ZIP file) reduces the file size.'],
  [['Utility program', 'A small system program that maintains or protects the computer.'], ['Antivirus', 'A program that detects and removes harmful software.'], ['Defragmenter', 'A utility that joins up scattered parts of files on a hard disk.'], ['Device driver', 'A program that lets the operating system control a particular device.']],
  [
    { q: 'A school computer has become slow and shows strange messages. Which two utilities should be used, and why?', steps: ['Run an up-to-date **antivirus** scan, because strange messages and slowness are signs of a **virus**, which must be found and removed.', 'Run **disk clean-up** (and, on a hard disk, the **defragmenter**), to remove unwanted files and arrange the files so the disk is read faster.'] },
  ]),

  // ---------- Managing files ----------
  L('cs-paths-2', 'cs-f2-files', '4.1', 'Folder hierarchies, paths and file attributes', 9, ['File management'], [
    'Folders inside folders form a **hierarchy**, like the branches of a tree. The top level of a drive is its **root**, such as **C:**. A **path** shows exactly where a file is stored, by listing the folders from the root, separated by backslashes in Windows: **C:\\Users\\Ama\\Documents\\Form 2\\Geography.docx**.',
    'Every file has **properties**, such as its size, type and the date it was created or changed. It also has **attributes** that control how it is treated. A **read-only** file can be opened but not changed or saved over. A **hidden** file is not shown in the normal view of a folder. A **system** file belongs to the operating system and should never be moved or deleted. Attributes are set by right-clicking the file and choosing **Properties**.',
    'A good folder plan makes files easy to find: one folder per subject or per term, with clear names, and subfolders for big topics. Avoid saving everything on the desktop.',
  ], 'folder-tree', 'Read a path **from left to right**: drive, then each folder in turn, and the file name with its extension at the end.',
  ['A file that can be opened but not changed has the attribute:', ['Read-only', 'Hidden', 'System', 'Compressed'], 'Read-only protects a file from accidental changes.'],
  [['Path', 'The route to a file, listing the drive and folders that contain it.'], ['Root', 'The top level of a drive, such as C:.'], ['Read-only', 'An attribute that lets a file be opened but not changed.'], ['Hidden file', 'A file not shown in the normal folder view.']],
  [
    { q: 'A file has the path D:\\School\\Form 2\\Biology\\cells.pptx. Name the drive, the folders in order, the file name and the file type.', steps: ['Drive: **D:**.', 'Folders, from the top: **School**, then **Form 2**, then **Biology**.', 'File name: **cells**; extension **.pptx**, a **presentation** (PowerPoint) file.'] },
  ]),

  L('cs-custom-2', 'cs-f2-files', '4.2', 'Customising the desktop and user accounts', 7, ['Operating system', 'Settings'], [
    'The look of the desktop can be **customised** in the **Settings** (or Control Panel) of the operating system. You can change the **background** (wallpaper), the **theme** and colours, the **screen resolution** (how sharp the display is) and the **text size**, and set a **screen saver** or screen-off time to save power.',
    'A computer used by several people can have several **user accounts**, each with its own name, password, desktop and files. An **administrator** account can install programs and change settings for everyone; a **standard** account can use programs and change its own settings but cannot make changes that affect other users. In a school, pupils should use standard accounts.',
    'A **password** protects an account. A strong password is long and mixes capital and small letters, numbers and symbols; it is not a name or birthday that others can guess, and it is never shared. Always **log off** or **lock** the computer when you leave it.',
  ], null, 'Administrator = can change **everything**; standard user = can change only **their own** settings.',
  ['Which password is the strongest?', ['Ndole#2027!kmb', '123456', 'password', 'Paul'], 'It is long and mixes small and capital letters, numbers and symbols.'],
  [['User account', 'A personal space on a computer with its own name, password and settings.'], ['Administrator', 'A user account that can change settings for the whole computer.'], ['Screen resolution', 'The number of dots (pixels) on the screen, which sets how sharp it is.']],
  [
    { q: 'Explain why pupils in a school laboratory should use standard accounts, not administrator accounts.', steps: ['A **standard** account cannot install programs or change settings for everyone.', 'This prevents pupils from **accidentally or deliberately** installing harmful programs, deleting system files or changing settings.', 'The computers stay **safe and working** for all users.'] },
  ]),

  // ---------- Protection and maintenance ----------
  L('cs-malware-2', 'cs-f2-protect', '5.1', 'Threats to computers: viruses and other malware', 9, ['Security'], [
    '**Malware** (malicious software) is any program written to damage a computer, steal information or cause trouble. A **virus** attaches itself to files or programs and spreads when they are copied or opened, often on flash drives and e-mail attachments. A **worm** spreads by itself across networks. A **Trojan horse** pretends to be a useful program but does harm once installed. **Spyware** secretly collects information such as passwords. **Ransomware** locks a user’s files and demands payment to unlock them.',
    'Signs of infection include a computer that becomes **very slow**, files that **disappear** or change, strange **messages** or pop-ups, programs that will not open and a flash drive whose files have turned into shortcuts.',
    'To protect a computer: install an **antivirus** and **update** it regularly; **scan** flash drives before opening them; do not open attachments or links from unknown senders; download programs only from trusted sources; install **operating system updates**; use a **firewall**, which blocks unwanted network traffic; and keep **backups** of important files on another device.',
  ], null, 'Malware is the general name; virus, worm, Trojan, spyware and ransomware are **kinds** of malware.',
  ['A program that pretends to be a free game but secretly damages the computer is a:', ['Trojan horse', 'Worm', 'Firewall', 'Device driver'], 'Like the wooden horse of the old story, it hides harm inside something attractive.'],
  [['Malware', 'Software written to cause harm.'], ['Virus', 'Malware that attaches to files and spreads when they are copied or opened.'], ['Firewall', 'Software or hardware that blocks unwanted network traffic.'], ['Backup', 'A copy of data kept in another place in case the original is lost.']],
  [
    { q: 'Give four ways a pupil can protect a home computer from viruses.', steps: ['Install an **antivirus** and keep it **updated**.', '**Scan** every flash drive before opening its files.', 'Do not open **attachments or links** from unknown people.', 'Keep **backups** of important files, so they can be recovered if a virus destroys them.'] },
  ]),

  L('cs-care-2', 'cs-f2-protect', '5.2', 'Physical hazards and looking after a computer', 7, ['Maintenance'], [
    'Computers are also damaged by **physical hazards**. **Dust** blocks fans and air vents, so the machine **overheats**; keep the room clean and use dust covers. **Heat** shortens the life of parts; give computers space and ventilation, and keep them out of direct sunlight. **Water** and other liquids cause short circuits. **Power surges** and sudden power cuts damage parts and files; use a **stabiliser** or **UPS**. **Theft** is prevented with locks, burglar-proofing and keeping records of equipment.',
    'Regular **maintenance** keeps a computer working well: run **antivirus scans**; install **updates** to the operating system and programs; use disk clean-up; keep backups; and clean the screen and keyboard gently, only when the computer is **switched off**, with a dry or slightly damp soft cloth.',
    'Before pulling out a flash drive, use **Safely Remove Hardware** (Eject). Pulling it out while files are being written can **corrupt** them.',
  ], null, 'For each hazard, give the **damage** it causes and the **precaution** against it.',
  ['Why must a flash drive be ejected before it is removed?', ['Removing it while files are being written can corrupt them', 'It makes the drive bigger', 'It removes viruses', 'It charges the drive'], 'Ejecting makes sure all writing has finished.'],
  [['Overheating', 'Getting too hot, which damages computer parts.'], ['Power surge', 'A sudden rise in the mains voltage.'], ['Corrupt file', 'A file damaged so that it can no longer be opened correctly.']],
  [
    { q: 'A computer laboratory near a dusty road keeps having computers shut down by themselves. Explain the likely cause and two solutions.', steps: ['**Cause:** dust blocks the fans and vents, so the computers **overheat** and shut down to protect themselves.', '**Solution 1:** keep windows closed on the road side, clean the room regularly and use **dust covers** when the computers are off.', '**Solution 2:** have a technician **clean the fans** and vents, and improve ventilation or air conditioning.'] },
  ]),

  // ---------- Computer networks ----------
  L('cs-networks-2', 'cs-f2-networks', '6.1', 'Introduction to computer networks', 9, ['Networks'], [
    'A **computer network** is two or more computers **connected** together, by cables or by radio waves (wireless), so that they can **share resources** and **communicate**.',
    'Networks have many **benefits**: users can **share files** and data; one **printer**, scanner or Internet connection can serve many computers; people can **communicate** quickly by e-mail and messages; data can be **backed up** in one central place; and software can be installed for everyone at once. Their **disadvantages** are that viruses can spread quickly from one computer to others, data may be stolen if the network is not secure, setting it up costs money, and if the main computer fails, many users are affected.',
    'Networks are named by their size. A **local area network (LAN)** covers a **small area**, such as a computer laboratory, a school or an office building. A **wide area network (WAN)** covers a **large area**, such as a whole country or the world, and links LANs together; the **Internet** is the largest WAN.',
    'A computer that **provides** a service, such as storing shared files, managing printing or holding a website, is a **server**. A computer that **uses** these services is a **client**. Each computer, printer or other device connected to a network is called a **node**.',
  ], 'lan-wan', 'LAN = **local**, a small area such as one school; WAN = **wide**, linking places far apart.',
  ['The computers in one school laboratory joined together form a:', ['LAN', 'WAN', 'Internet', 'Server'], 'They are close together in one small area, so this is a local area network.'],
  [['Network', 'Two or more computers connected to share resources and communicate.'], ['LAN', 'Local area network: a network in a small area.'], ['WAN', 'Wide area network: a network covering a large area.'], ['Server', 'A computer that provides services to other computers on a network.'], ['Client', 'A computer that uses the services of a server.']],
  [
    { q: 'A school has 20 computers and one printer. Give three advantages of connecting them in a network.', steps: ['All 20 computers can **share the one printer**, so the school need not buy 20 printers.', 'Pupils and teachers can **share files**, for example a teacher sends a worksheet to every computer.', 'One **Internet connection** can be shared by all, and work can be **backed up** on a server.'] },
  ]),

  // ---------- Word processing: formatting and layout ----------
  L('cs-format-2', 'cs-f2-format', '7.1', 'Word processing: formatting text, paragraphs and pages', 10, ['Word processing', 'Practical'], [
    '**Character formatting** changes the look of letters: the **font** (typeface), **size** in points, **style** (bold, italic, underline), **colour** and effects such as superscript (x², used for powers) and subscript (H₂O, used in formulae).',
    '**Paragraph formatting** changes whole paragraphs: **alignment** (left, centre, right, justify); **line spacing**, the gap between lines (single, 1.5 or double); **spacing** before and after paragraphs; and **indentation**, moving text in from the margin, such as a **first-line indent**.',
    '**Lists** set out points clearly: a **bulleted list** for points in any order and a **numbered list** for steps in order. **Borders** put lines around text or a page, and **shading** colours the background behind a paragraph.',
    '**Page layout** sets the **margins** (the blank space at the top, bottom, left and right of the page), the **orientation** (**portrait**, taller than wide, or **landscape**, wider than tall) and the **paper size**, usually **A4**. Use **page breaks** to start a new page and **headers and footers** for text that repeats on every page, such as page numbers.',
  ], null, 'Character formatting affects **selected letters**; paragraph formatting affects **whole paragraphs**; page layout affects **the whole page**.',
  ['A pupil wants to type the formula of water correctly as H₂O. Which effect is used for the 2?', ['Subscript', 'Superscript', 'Bold', 'Underline'], 'Subscript lowers the character below the line; superscript raises it, as in x².'],
  [['Line spacing', 'The amount of space between lines of text.'], ['Indentation', 'Moving text in from the margin.'], ['Margin', 'The blank space around the edge of a page.'], ['Orientation', 'Whether the page is portrait (tall) or landscape (wide).']],
  [
    { q: 'A teacher wants a test paper on A4 paper, with the instructions as numbered steps, double line spacing and 2.5 cm margins. Which settings are used?', steps: ['**Page layout:** paper size **A4**, margins **2.5 cm** on all sides, orientation **portrait**.', '**Numbered list** for the instructions, because they follow an order.', '**Line spacing** set to **2.0 (double)** for the questions.'] },
  ]),

  L('cs-tables-2', 'cs-f2-tables', '8.1', 'Word processing: pictures, tables and printing', 10, ['Word processing', 'Practical'], [
    'A document can contain **objects** besides text: **pictures** (from a file or the Internet), **shapes** such as arrows and boxes, **WordArt** for decorative titles, and **charts**. They are added from the **Insert** menu. **Text wrapping** sets how text flows around a picture: in line with the text, square around it, or behind or in front of it. Pictures can be resized by dragging their **corner handles**, which keeps their shape.',
    'A **table** arranges information in **rows** (across) and **columns** (down). Each box is a **cell**. To insert one, choose Insert, Table and pick the number of columns and rows. Rows and columns can be **added** or **deleted**; two or more cells can be **merged** into one (for a heading across the top); and one cell can be **split** into several. Tables can be given **borders** and **shading**.',
    'Before printing, set up the page and check it with **print preview**, which shows exactly how it will look on paper. In the **Print** dialog choose the **printer**, the **number of copies** and the **pages** to print: all pages, the current page or a range such as **1-3, 5** (pages 1, 2, 3 and 5). Printing only what you need saves paper and ink.',
  ], null, 'Rows go **across**, columns go **down**. Merging joins cells; splitting divides one cell.',
  ['A table has 4 columns and 6 rows. How many cells does it have?', ['24', '10', '46', '2'], 'Cells = columns × rows = 4 × 6 = 24.'],
  [['Row', 'A horizontal line of cells in a table.'], ['Column', 'A vertical line of cells in a table.'], ['Merge cells', 'Join two or more cells into one.'], ['Print preview', 'A view showing how a document will look when printed.']],
  [
    { q: 'A class timetable needs 6 columns (the time and five days) and 8 rows (a heading row and seven periods), with a title across the top. How should the table be built?', steps: ['Insert a table with **6 columns** and **9 rows**: one extra row at the top for the title.', 'Select all the cells of the top row and **merge** them into one cell, then type the title there.', 'Type the days in the second row and the periods in the first column, and add **borders** so the table prints clearly.'] },
    { q: 'In the Print dialog a pupil types 2-4, 7 for the pages. Which pages print?', steps: ['"2-4" means pages **2, 3 and 4**.', '", 7" adds page **7**.', 'So pages **2, 3, 4 and 7** are printed: four pages.'] },
  ]),

  // ---------- The Web ----------
  L('cs-web-2', 'cs-f2-web', '9.1', 'Browsing the Web and searching well', 9, ['Internet', 'Searching'], [
    'A **web browser** opens web pages. Its main parts are the **address bar**, where the URL is typed; the **Back** and **Forward** buttons; **Refresh** (reload); **Home**; **tabs**, so several pages can be open at once; **bookmarks** (favourites), to save the addresses of useful pages; and the **history**, a list of pages visited. Words or pictures that open another page when clicked are **hyperlinks**.',
    'A **search engine** looks through a huge index of web pages and lists those that match the **keywords** you type. Search well by using a few **precise keywords** ("rainfall Cameroon"), putting **quotation marks** around an exact phrase ("balanced diet"), using a **minus sign** to leave out a word (jaguar -car), and using the search engine’s **filters** to show only images, news or recent pages.',
    'A **URL** has parts: the **protocol** (https:// for a secure connection, shown by a padlock), the **domain name** and the **path** to the page. The end of the domain, the **top-level domain**, gives a clue about the site: **.gov** for governments, **.edu** for universities, **.org** for organisations, **.com** for companies, and country codes such as **.cm** for **Cameroon**.',
    'Not everything online is true. Check **who wrote** a page, **when** it was written and whether other reliable sites agree, and prefer sites of governments, universities and well-known organisations.',
  ], 'url-parts', 'A browser **displays** pages; a search engine **finds** them. Quotation marks give an **exact phrase**; a minus sign **removes** a word.',
  ['Which search finds pages with the exact phrase balanced diet?', ['"balanced diet"', 'balanced -diet', 'balanced OR diet', 'diet balanced pages'], 'Quotation marks tell the search engine to keep the words together in that order.'],
  [['Hyperlink', 'Text or a picture that opens another page when clicked.'], ['Bookmark', 'A saved address of a web page for quick return.'], ['Keyword', 'A word typed into a search engine to describe what you want.'], ['Top-level domain', 'The last part of a domain name, such as .cm or .org.']],
  [
    { q: 'For the address https://www.example.cm/sport/football.html, state (a) the protocol, (b) the domain name, (c) the country, (d) the page being opened.', steps: ['(a) Protocol: **https**, a secure connection.', '(b) Domain name: **www.example.cm**.', '(c) **.cm** is the country code of **Cameroon**.', '(d) The page **football.html** in the **sport** folder.'] },
  ]),

  // ---------- ICT in daily life ----------
  L('cs-ict-2', 'cs-f2-ict', '10.1', 'ICT in daily life and a healthy workplace', 8, ['ICT in society', 'Health and safety'], [
    'ICT changes how we live and work. In **education**: online lessons, digital libraries and school management systems. In **health**: electronic patient records, **telemedicine** (a doctor advising a patient far away by video), and computer-controlled machines. In **commerce**: **e-commerce** (buying and selling online), **mobile money** and **e-banking**, and barcode systems in shops. In **communication**: e-mail, messaging, video calls and social media.',
    'ICT has **problems** too: **cybercrime** and scams, **addiction** to games and social media, the spread of **false information**, loss of **privacy**, and the **digital divide**, the gap between people who have access to ICT and those who do not.',
    'A healthy workplace follows **ergonomic** rules: an **adjustable chair** that supports the lower back; the screen at **arm’s length** (about 50 to 70 cm) with its top at **eye level**; the keyboard and mouse at elbow height, with **wrists straight**; **feet flat** on the floor or on a footrest; good lighting without **glare**; and regular **breaks** to rest the eyes and stretch.',
  ], 'good-posture', 'In "advantages and disadvantages" questions, give **specific** examples, such as mobile money saving journeys to the bank, or scams stealing money.',
  ['Buying goods from a website and paying online is called:', ['E-commerce', 'Telemedicine', 'E-learning', 'Defragmentation'], 'E-commerce is electronic commerce: trading over the Internet.'],
  [['E-commerce', 'Buying and selling goods and services over the Internet.'], ['Telemedicine', 'Giving medical advice or care at a distance using ICT.'], ['Digital divide', 'The gap between people who have access to ICT and those who do not.']],
  [
    { q: 'Give two advantages and two disadvantages of mobile money for a trader in a village market.', steps: ['**Advantages:** she can receive payments **without handling cash**, which is safer; she can pay suppliers in town **without travelling**.', '**Disadvantages:** she may lose money to **scammers** who send false messages; transfers fail when the **network** is down, and there are **fees**.'] },
  ]),
];
