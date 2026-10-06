// Computer Science lessons for Form 1, following the MINESEC annual progression
// (Computer Science / ICT, first cycle): the computing environment, hardware and
// software, and applied tools, digital safety and the Internet. Original text
// written for this app. **double asterisks** mark key terms. `examples` are
// worked examples.

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

export const LESSONS_1 = [
  // ---------- Basic computing concepts ----------
  L('cs-basics-1', 'cs-f1-basics', '1.1', 'Computers, data and information', 8, ['Basic concepts'], [
    'A **computer** is an **electronic** machine that **accepts data**, **processes** it according to a set of instructions, **stores** it, and **gives out** the results as information. The instructions that tell a computer what to do are called a **program**; all the programs together are the computer’s **software**. The parts of a computer that you can see and touch, such as the screen, keyboard and system unit, are its **hardware**.',
    '**Data** are raw facts and figures that have not yet been organised, such as a list of marks: 12, 15, 9, 14. **Information** is data that has been **processed** so that it has meaning and is useful, such as "the class average is 12.5" or a list of pupils in order of merit.',
    '**Computer science** is the study of computers and computing: how computers work, how they are programmed and how problems are solved with them. **Information and Communication Technology (ICT)** is the wider use of technology to collect, store, process and send information. It includes computers, mobile phones, the Internet, radio, television and satellites.',
    'Computers are used everywhere today: in schools for results and lessons, in banks and mobile money, in hospitals, in offices and at home. Learning to use them well and safely is an important skill for every pupil.',
  ], 'ipo-cycle', 'Data is what goes **in**; information is what comes **out** after processing. If it is raw and unorganised, it is data.',
  ['Which of these is information rather than data?', ['"Ngono came first in the class with 16.5"', '16.5, 12, 9.5, 14', 'A list of names in any order', 'A pile of unmarked test scripts'], 'A ranking with a meaning is the result of processing the raw marks.'],
  [['Computer', 'An electronic machine that accepts data, processes it, stores it and gives out information.'], ['Data', 'Raw facts and figures that have not been processed.'], ['Information', 'Processed data that is meaningful and useful.'], ['ICT', 'Information and Communication Technology: technologies used to handle and send information.']],
  [
    { q: 'The marks of five pupils are 8, 14, 11, 17 and 10. Show how this data is turned into information.', steps: ['The marks themselves are **data**: raw figures with no conclusion.', 'Processing: add them, 8 + 14 + 11 + 17 + 10 = 60, and divide by 5 to get an average of 12.', 'The results "**the class average is 12 out of 20**" and "**the highest mark is 17**" are **information**, because they have meaning.'] },
  ]),

  L('cs-ipo-1', 'cs-f1-basics', '1.2', 'Input, processing, output and storage', 7, ['Basic concepts'], [
    'Every computer task follows the same cycle, the **information processing cycle**. First, data is entered: this is **input**, for example typing on the keyboard or scanning a photo. Then the computer works on the data: this is **processing**, done by the processor. The results are shown or printed: this is **output**. Data and results can be kept for later: this is **storage**.',
    'Take a mobile money transfer. The amount and phone number you type are the **input**. The system checks your balance and subtracts the amount: **processing**. The message "transfer successful" is the **output**. Your new balance is kept in the company’s computers: **storage**.',
    'A computer system has four parts that work together: **hardware** (the machine), **software** (the programs), **data** (what is processed) and **people** (the users). Without software, hardware cannot do anything useful, and without hardware, software cannot run.',
  ], 'ipo-cycle', 'For any example, name all four stages in order: **input → processing → output**, with **storage** keeping data for later use.',
  ['Printing a report card is an example of:', ['Output', 'Input', 'Processing', 'Storage'], 'The printer gives out the processed results to the user, on paper.'],
  [['Input', 'Data entered into a computer.'], ['Processing', 'The work done on data by the computer to change it into information.'], ['Output', 'The results given out by a computer.'], ['Storage', 'Keeping data and programs so they can be used again.']],
  [
    { q: 'A shopkeeper uses a computer to find her total sales for the day. Identify the input, processing, output and storage.', steps: ['**Input:** the price of each item sold, typed in or scanned with a barcode reader.', '**Processing:** the computer adds up all the prices.', '**Output:** the total sales shown on the screen or printed.', '**Storage:** the day’s sales saved on the computer so she can compare them with other days.'] },
  ]),

  // ---------- History and classification ----------
  L('cs-history-1', 'cs-f1-history', '2.1', 'A short history of computers', 8, ['History'], [
    'People have always used tools to count. The **abacus**, a frame with beads on rods, was used thousands of years ago. In **1642** the French scientist **Blaise Pascal** built a mechanical calculator that could add and subtract. In the 1830s the English mathematician **Charles Babbage** designed the **Analytical Engine**, a machine with a memory and a "mill" for calculating; he is called the **father of the computer**. **Ada Lovelace** wrote steps for it to follow and is often called the first programmer.',
    'Electronic computers are grouped into **generations**. The **first generation** (1940s to 1950s) used **vacuum tubes**; they were huge, used a lot of electricity and broke down often. **ENIAC**, finished in 1945, filled a large room. The **second generation** (late 1950s to 1960s) used **transistors**, which were smaller, faster and more reliable.',
    'The **third generation** (1960s to 1970s) used **integrated circuits**, many transistors on one small chip of silicon. The **fourth generation** (from the 1970s) uses the **microprocessor**, a whole processor on a single chip; this made **personal computers**, laptops and later smartphones possible. The **fifth generation**, today and in the future, aims at **artificial intelligence**: computers that can understand speech, recognise images and learn.',
    'With each generation computers became **smaller**, **faster**, **cheaper**, **more reliable** and used **less power**.',
  ], null, 'Link each generation to its **main technology**: vacuum tubes, transistors, integrated circuits, microprocessors, artificial intelligence.',
  ['Computers of the second generation used:', ['Transistors', 'Vacuum tubes', 'Microprocessors', 'Integrated circuits'], 'Transistors replaced vacuum tubes in the late 1950s.'],
  [['Abacus', 'An ancient counting frame with beads on rods.'], ['Vacuum tube', 'An electronic switch in a glass tube, used in first-generation computers.'], ['Microprocessor', 'A complete processor on a single chip.']],
  [
    { q: 'Give three ways in which computers have changed from the first generation to today.', steps: ['**Size:** from machines that filled whole rooms to phones that fit in a pocket.', '**Speed:** from thousands of calculations per second to billions.', '**Cost and power:** they are far cheaper and use much less electricity, and they break down much less often.'] },
  ]),

  L('cs-types-1', 'cs-f1-history', '2.2', 'Kinds of computers', 8, ['Classification'], [
    'Computers can be classified by **size and power**. A **supercomputer** is the largest and fastest kind; it is used for very heavy work such as weather forecasting and scientific research. A **mainframe** is a large, powerful computer used by big organisations such as banks and airlines, where thousands of users connect to it at the same time. A **minicomputer** is a medium-sized computer for a company or department, smaller and cheaper than a mainframe.',
    'A **microcomputer** is a computer built around a microprocessor and used by one person at a time. Desktop computers, **laptops**, **tablets** and **smartphones** are microcomputers. They are the most common computers in homes, schools and offices.',
    'Computers can also be classified by the **type of data** they process. A **digital computer** works with data as separate numbers (digits), in the form of 0s and 1s; almost all computers today are digital. An **analogue computer** works with data that changes continuously, such as temperature, speed or pressure. A **hybrid computer** combines both: for example, machines in a hospital that measure a patient’s heartbeat (analogue) and show it as numbers (digital).',
    'Finally, computers can be classified by **purpose**: a **general-purpose** computer, such as a laptop, can do many different jobs; a **special-purpose** computer does one job only, such as the computer inside a washing machine or a car.',
  ], null, 'Remember the order of size, from largest to smallest: **super → mainframe → mini → micro**.',
  ['Which kind of computer is used by one person at a time?', ['A microcomputer', 'A mainframe', 'A supercomputer', 'A minicomputer'], 'Laptops, desktops, tablets and smartphones are microcomputers for personal use.'],
  [['Supercomputer', 'The largest and fastest kind of computer.'], ['Mainframe', 'A large computer that serves many users at once.'], ['Digital computer', 'A computer that processes data as separate digits (0 and 1).'], ['Hybrid computer', 'A computer that handles both analogue and digital data.']],
  [
    { q: 'Classify each computer by size: (a) the computer used to forecast the weather for the whole of Africa, (b) a smartphone, (c) the central computer of a national bank used by all its branches.', steps: ['(a) Weather forecasting needs enormous speed: **supercomputer**.', '(b) A smartphone is a personal computer built on a microprocessor: **microcomputer**.', '(c) A central computer serving thousands of users at once: **mainframe**.'] },
  ]),

  L('cs-traits-1', 'cs-f1-history', '2.3', 'Characteristics, advantages and limits of computers', 7, ['Characteristics'], [
    'Computers have special **characteristics**. **Speed:** they carry out millions or billions of instructions every second. **Accuracy:** they make no mistakes in calculation; errors come from wrong data or wrong instructions, which is summed up as "**garbage in, garbage out**". **Diligence:** they do not get tired or bored and can work for hours doing the same task. **Storage:** they can keep huge amounts of data and find it quickly. **Versatility:** one computer can do many different jobs.',
    'These bring **advantages**: work is done faster and more accurately, records are easy to store and find, people can communicate quickly across the world, and dangerous or boring jobs can be done by machines.',
    'Computers also have **limitations and disadvantages**. A computer **cannot think for itself**; it only follows instructions. It needs **electricity**, and work can be lost in a power cut. Computers are expensive to buy and repair. **Viruses** can destroy data, and criminals use computers for **fraud** and scams. Using them for too long can cause **health problems**, and some jobs are lost when machines replace people.',
  ], null, '"**Garbage in, garbage out**" (GIGO) means a computer’s output can only be as correct as the data and instructions given to it.',
  ['A teacher types a mark of 91 instead of 19, and the class average comes out wrong. This shows that:', ['A computer’s output depends on correct input (garbage in, garbage out)', 'Computers often make calculation errors', 'Computers get tired', 'The computer has a virus'], 'The computer calculated correctly with the wrong data it was given.'],
  [['Diligence', 'The ability to work for long periods without tiring or losing accuracy.'], ['Versatility', 'The ability to do many different kinds of task.'], ['GIGO', 'Garbage in, garbage out: wrong input gives wrong output.']],
  [
    { q: 'State two advantages and two disadvantages of using computers to keep school records.', steps: ['**Advantages:** report cards are produced **quickly and accurately**; records take little space and can be **found in seconds**.', '**Disadvantages:** records can be **lost** in a power cut or through a virus if there is no backup; the computers and electricity **cost money**.'] },
  ]),

  // ---------- The computer laboratory ----------
  L('cs-lab-1', 'cs-f1-lab', '3.1', 'Rules and safety in the computer laboratory', 7, ['Safety'], [
    'A **computer laboratory** is a room set aside for computers and their users. A good laboratory has strong **burglar-proofing**, enough **sockets** with **stabilisers** or a **UPS** (uninterruptible power supply) to protect against power cuts and surges, good **ventilation** or air conditioning to keep machines cool, **dust covers**, tidy **cables** along the walls and a **fire extinguisher** suitable for electrical fires.',
    'Rules protect both **users** and **equipment**: do not eat or drink near computers, because crumbs and liquids damage keyboards; do not run or play; enter only with permission; never touch cables or sockets with wet hands; do not open the system unit; do not overload sockets with many plugs.',
    'Look after the machines and data: use only flash drives allowed by the teacher, because they can carry **viruses**; do not change settings or delete files you do not own; shut computers down properly; report any fault or damage to the teacher immediately; and cover the computers after use.',
  ], null, 'Rules come in two kinds: those that keep **you** safe (electricity, cables) and those that keep the **computers and data** safe (food, viruses, dust).',
  ['Why should food and drinks be kept out of the computer laboratory?', ['Crumbs and spilled liquids can damage the computers', 'Computers need to be kept hungry', 'Food makes the screen brighter', 'Drinks slow down the Internet'], 'Liquids can cause short circuits and crumbs block keyboards.'],
  [['UPS', 'Uninterruptible power supply: a battery unit that keeps a computer running for a short time during a power cut.'], ['Stabiliser', 'A device that keeps the mains voltage steady to protect equipment.']],
  [
    { q: 'Give two reasons why a computer laboratory needs a UPS or a stabiliser.', steps: ['A **UPS** keeps the computers running for a few minutes during a **power cut**, so work can be saved and computers shut down properly.', 'A **stabiliser** protects the computers from **power surges** and changes in voltage that can damage them.'] },
  ]),

  L('cs-boot-1', 'cs-f1-lab', '3.2', 'Starting (booting) and shutting down a computer', 7, ['Basic operation'], [
    '**Booting** is the process of **starting** a computer and loading its **operating system** into memory so that it is ready for use. During booting the computer first checks that its main parts are working; this check is the **POST** (power-on self-test).',
    'A **cold boot** starts a computer that was completely **off**, by switching on the power and pressing the power button. A **warm boot** **restarts** a computer that is already on, without switching off the power, for example by choosing **Restart** from the Start menu. A warm boot is often used after installing new software or when the computer stops responding.',
    'To switch on: check that the cables are connected, switch on the socket (and the stabiliser or UPS), then press the power button on the system unit and on the monitor. Wait until the desktop appears.',
    'To **shut down** properly: **save** your work, **close** all programs, then click **Start**, **Power**, **Shut down**. Wait until the computer turns itself off, then switch off the monitor and the socket. Never switch off at the socket while the computer is working: this can **damage files** and the operating system.',
  ], null, 'Cold boot = from **off**; warm boot = **restart** while on.',
  ['Restarting a computer that is already switched on is called:', ['A warm boot', 'A cold boot', 'Shutting down', 'Logging off'], 'A cold boot starts from power off; a warm boot restarts without cutting the power.'],
  [['Booting', 'Starting a computer and loading its operating system.'], ['Cold boot', 'Starting a computer that was switched off.'], ['Warm boot', 'Restarting a computer that is already on.'], ['POST', 'Power-on self-test: the check of hardware when a computer starts.']],
  [
    { q: 'List, in order, the steps to shut down a computer correctly.', steps: ['1. **Save** all your work.', '2. **Close** all open programs.', '3. Click **Start**, then **Power**, then **Shut down**, and wait for the computer to turn off.', '4. Switch off the **monitor**, then the **socket** or stabiliser.'] },
  ]),

  // ---------- Keyboard and mouse ----------
  L('cs-keyboard-1', 'cs-f1-keyboard', '4.1', 'The keyboard', 9, ['Keyboard'], [
    'The **keyboard** is the main device for typing text and commands. Its keys are arranged in groups. The **alphanumeric keys** are the letters A to Z and the numbers 0 to 9, laid out in the **QWERTY** pattern named after the first six letters of the top letter row. The **function keys**, F1 to F12, are along the top; F1 usually opens **help**. The **numeric keypad** on the right is like a calculator. The **navigation (cursor) keys** are the four arrows, **Home**, **End**, **Page Up** and **Page Down**.',
    'Some keys have special jobs. **Enter** ends a paragraph or confirms a command. The **Space bar** puts a space between words. **Backspace** deletes the character to the **left** of the cursor, and **Delete** deletes the character to the **right**. **Shift**, held down, gives a capital letter or the upper symbol on a key, while **Caps Lock** keeps all letters in capitals until it is pressed again. **Tab** moves the cursor forward to the next stop, and **Esc** (escape) cancels.',
    '**Ctrl** (control) and **Alt** (alternate) do nothing alone but give **shortcuts** with other keys: **Ctrl + C** copy, **Ctrl + X** cut, **Ctrl + V** paste, **Ctrl + Z** undo, **Ctrl + S** save, **Ctrl + P** print and **Ctrl + A** select all.',
    'For fast typing, rest the fingers on the **home row**: the left hand on **A S D F** and the right hand on **J K L ;**. The F and J keys have small bumps so you can find them without looking.',
  ], 'keyboard-zones', 'Backspace deletes to the **left** of the cursor; Delete deletes to the **right**.',
  ['Which key combination pastes text that has been copied?', ['Ctrl + V', 'Ctrl + C', 'Ctrl + P', 'Ctrl + X'], 'Ctrl + C copies, Ctrl + X cuts and Ctrl + V pastes. Ctrl + P prints.'],
  [['Alphanumeric keys', 'The letter and number keys of a keyboard.'], ['Function keys', 'The keys F1 to F12 that carry out special tasks.'], ['Shortcut', 'A combination of keys that carries out a command quickly.']],
  [
    { q: 'A pupil has typed "computr" with the cursor just after the r. Which keys correct it to "computer"?', steps: ['Press **Backspace** once to delete the "r" to the left of the cursor, leaving "comput".', 'Type **e** then **r**.', 'The word now reads "**computer**". (Or move the cursor left with the arrow key and type "e" before the "r".)'] },
  ]),

  L('cs-mouse-1', 'cs-f1-keyboard', '4.2', 'The mouse and its actions', 7, ['Mouse'], [
    'The **mouse** is a **pointing device**. When you move it on a flat surface, the **pointer** (cursor) moves on the screen. Most mice have a **left button**, a **right button** and a **scroll wheel** between them. Modern mice are **optical**, using a light underneath, and many are **wireless**. A laptop has a **touchpad** that does the same job with a finger.',
    'The mouse actions are: **point**, moving the pointer onto an item; **click** (left click), pressing and releasing the left button once to **select** an item; **double-click**, two quick left clicks to **open** a file, folder or program; **right-click**, pressing the right button to show a **shortcut menu** of commands for that item; **drag and drop**, holding the left button down while moving the mouse, then releasing it, to **move** an item; and **scroll**, turning the wheel to move up or down a page.',
    'Hold the mouse lightly, with the palm resting on it, the index finger on the left button and the middle finger on the right. Keep the wrist straight and use a mouse pad for smooth movement.',
  ], null, 'Click **selects**, double-click **opens**, right-click shows a **menu**, drag **moves**.',
  ['To open a folder on the desktop with the mouse, you usually:', ['Double-click it', 'Right-click it once', 'Scroll the wheel', 'Point at it only'], 'A single click selects; a double-click opens.'],
  [['Pointer', 'The arrow on the screen that moves with the mouse.'], ['Double-click', 'Two quick clicks of the left button, used to open an item.'], ['Drag and drop', 'Moving an item by holding the left button down while moving the mouse.']],
  [
    { q: 'Describe how to move a file icon into a folder using only the mouse.', steps: ['**Point** at the file icon.', 'Press and **hold** the left button, and **drag** the icon on top of the folder.', 'When the folder is highlighted, **release** the button (drop). The file is now inside the folder.'] },
  ]),

  // ---------- Input and output devices ----------
  L('cs-io-1', 'cs-f1-io', '5.1', 'Input and output devices', 9, ['Hardware'], [
    '**Hardware** is every physical part of a computer. Devices connected to the system unit are called **peripherals**. They are grouped by what they do.',
    '**Input devices** put data and commands into the computer. The **keyboard** enters text; the **mouse** points and selects; a **scanner** copies pictures and documents into the computer; a **microphone** records sound; a **webcam** or **digital camera** captures pictures and video; a **barcode reader** reads the striped codes on goods in a shop; a **joystick** controls games.',
    '**Output devices** give out the results of processing. The **monitor** (screen) shows text and pictures; a **printer** puts them on paper; **speakers** and **headphones** give out sound; a **projector** shows the screen on a wall for a class. Output on a screen is called **soft copy**; printed output on paper is **hard copy**.',
    'Common printers are **inkjet** printers, which spray tiny drops of ink and are good for colour photos, and **laser** printers, which use toner powder and are fast and clear for documents. A **touch screen** on a phone or ATM is both an input and an output device.',
  ], 'computer-system', 'Ask: does the device send data **into** the computer (input) or **out of** it to the user (output)?',
  ['Which device is an output device?', ['A printer', 'A scanner', 'A microphone', 'A keyboard'], 'A printer gives out results on paper; the others put data into the computer.'],
  [['Peripheral', 'A device connected to the system unit, such as a printer or mouse.'], ['Soft copy', 'Output shown on a screen.'], ['Hard copy', 'Output printed on paper.']],
  [
    { q: 'A teacher scans a picture, types a caption under it, prints the page and shows it on the wall for the class. Name the devices used and say whether each is input or output.', steps: ['**Scanner**: copies the picture into the computer, **input**.', '**Keyboard**: types the caption, **input**.', '**Printer**: produces the paper copy, **output**.', '**Projector**: shows the page on the wall, **output**.'] },
  ]),

  // ---------- The system unit ----------
  L('cs-cpu-1', 'cs-f1-cpu', '6.1', 'The central processing unit', 8, ['Hardware', 'Processor'], [
    'The **system unit** is the case that holds the main parts of a desktop computer: the **motherboard** (the main circuit board), the **processor**, the **memory**, the **hard disk** and the **power supply**. In a laptop these are all inside the body under the keyboard.',
    'The **central processing unit (CPU)**, or **processor**, is often called the **brain** of the computer, because it carries out the instructions of programs. It has two main parts. The **control unit (CU)** controls and coordinates everything the computer does: it fetches each instruction, works out what it means and tells the other parts what to do. The **arithmetic and logic unit (ALU)** does the **calculations** (adding, subtracting, multiplying and dividing) and the **logical** operations, which are **comparisons** such as "is A greater than B?"',
    'The speed of a processor is measured in **hertz**; today’s processors work at several **gigahertz (GHz)**, that is, billions of cycles every second.',
  ], 'computer-system', 'The **CU controls**; the **ALU calculates and compares**.',
  ['Which part of the CPU decides whether one number is bigger than another?', ['The arithmetic and logic unit', 'The control unit', 'The monitor', 'The hard disk'], 'Comparisons are logical operations, done in the ALU.'],
  [['CPU', 'Central processing unit: the part that carries out program instructions.'], ['Control unit', 'The part of the CPU that directs and coordinates all operations.'], ['ALU', 'Arithmetic and logic unit: the part of the CPU that calculates and compares.']],
  [
    { q: 'A spreadsheet works out the total of 200 marks and then finds who scored above 15. Which part of the CPU does each job, and which part coordinates them?', steps: ['Adding the marks is **arithmetic**: done by the **ALU**.', 'Checking "is the mark above 15?" is a **logical comparison**: also done by the **ALU**.', 'The **control unit** fetches each instruction and tells the ALU and memory what to do and when.'] },
  ]),

  L('cs-memory-1', 'cs-f1-cpu', '6.2', 'Memory and storage: RAM, ROM and storage devices', 9, ['Hardware', 'Memory'], [
    '**Main memory** (primary memory) holds the data and instructions the processor needs. It has two kinds. **RAM** (random access memory) holds the programs and data **in use now**: your open document, the browser, the game. RAM is **volatile**: everything in it is **lost when the power goes off**. That is why you must save your work. Data can be both read from RAM and written to it.',
    '**ROM** (read-only memory) holds **permanent instructions** that the computer needs to start, such as the program that tests the hardware and begins booting. ROM is **non-volatile**: its contents stay when the power is off. Its contents can be read but not normally changed.',
    '**Secondary storage** keeps data and programs **permanently**, even when the computer is off. Examples are the **hard disk drive** inside the computer, the faster **solid-state drive (SSD)**, **flash drives** (USB sticks), **memory cards** used in phones and cameras, and **CDs and DVDs**. Saving a file copies it from RAM to secondary storage.',
  ], null, 'RAM is **temporary and changeable** (volatile); ROM is **permanent and read-only** (non-volatile).',
  ['A pupil types an essay but the power goes off before she saves it. Her work is lost because:', ['It was only in RAM, which is volatile', 'ROM was full', 'The flash drive was faulty', 'The printer was off'], 'Unsaved work is held in RAM, which loses its contents without power.'],
  [['RAM', 'Random access memory: volatile memory holding the programs and data in use.'], ['ROM', 'Read-only memory: non-volatile memory holding permanent start-up instructions.'], ['Volatile', 'Losing its contents when the power is switched off.'], ['Secondary storage', 'Devices that keep data permanently, such as hard disks and flash drives.']],
  [
    { q: 'Give two differences between RAM and ROM.', steps: ['**Volatility:** RAM is **volatile** (contents lost when power is off); ROM is **non-volatile** (contents kept).', '**Changing contents:** RAM can be **read and written**; ROM can only be **read**.', '**Use:** RAM holds the programs and data in use; ROM holds the start-up instructions.'] },
  ]),

  // ---------- Operating systems ----------
  L('cs-os-1', 'cs-f1-os', '7.1', 'The operating system and the desktop', 9, ['Software', 'Operating system'], [
    '**Software** is the set of programs that make a computer work. There are two main kinds. **System software** runs the computer itself; the most important is the **operating system**. **Application software** does jobs for the user: word processors, spreadsheets, games, web browsers.',
    'The **operating system (OS)** manages all the hardware and software and lets the user communicate with the computer. Without it, a computer cannot be used. Examples for computers are **Microsoft Windows**, **Linux** (such as Ubuntu) and **macOS**; for phones, **Android** and **iOS**.',
    'Most operating systems have a **graphical user interface (GUI)**: the user works with **windows**, **icons**, **menus** and a **pointer** instead of typing commands. After booting, the screen shows the **desktop**: the background, **icons** (small pictures that stand for programs, files and folders, such as the Recycle Bin) and the **taskbar** along the bottom.',
    'The taskbar holds the **Start button**, which opens the Start menu of programs and settings, buttons for the **open programs**, and the **notification area** with the clock, volume and network. Each program opens in a **window** with a title bar and buttons to **minimise** (hide it on the taskbar), **maximise** (fill the screen) and **close** it.',
  ], null, 'Operating system = **system software** that manages the computer. Word processors and games are **application software**.',
  ['Which of these is an operating system?', ['Linux', 'Microsoft Word', 'Google Chrome', 'Calculator'], 'Word, Chrome and Calculator are application programs that run on an operating system.'],
  [['Operating system', 'System software that manages the computer and lets the user communicate with it.'], ['GUI', 'Graphical user interface: windows, icons, menus and a pointer.'], ['Icon', 'A small picture that stands for a program, file or folder.'], ['Taskbar', 'The bar at the bottom of the desktop with the Start button and open programs.']],
  [
    { q: 'Classify each as system software or application software: (a) Windows 11, (b) a music player, (c) Android, (d) a spreadsheet program.', steps: ['(a) Windows 11 runs the computer: **system software** (an operating system).', '(b) A music player does a job for the user: **application software**.', '(c) Android runs a phone: **system software** (an operating system).', '(d) A spreadsheet does a job for the user: **application software**.'] },
  ]),

  // ---------- Files and folders ----------
  L('cs-files-1', 'cs-f1-files', '8.1', 'Files and folders: creating, naming and organising', 10, ['File management', 'Practical'], [
    'A **file** is a collection of data stored under one **name**: a letter, a photo, a song or a program. A file name usually ends with a dot and an **extension** that shows its type: **.docx** for a Word document, **.jpg** for a photo, **.mp3** for music, **.pdf** for a document to read and print.',
    'A **folder** (directory) is a container used to **organise** files, like a drawer in a cupboard. A folder can hold files and other folders, called **subfolders**. For example, a folder "Form 1" can hold subfolders "Mathematics" and "English", each with its own files.',
    'Good file names are **short and meaningful**, such as "Biology notes term 1". In Windows a name cannot contain these characters: \\ / : * ? " < > |.',
    'Common tasks: to **create** a folder, right-click an empty space, choose **New**, then **Folder**, type the name and press Enter. To **rename**, right-click and choose Rename (or press F2). To **copy**, select and press Ctrl + C, then open the destination and press Ctrl + V; the file is now in both places. To **move**, use **Ctrl + X** (cut) then Ctrl + V, or drag it. To **delete**, select it and press **Delete**: it goes to the **Recycle Bin**, from which it can be **restored** until the bin is emptied.',
  ], 'folder-tree', 'Copy leaves the file in **both** places; move (cut and paste) leaves it in **one**.',
  ['A file named "Essay.docx" is most likely:', ['A word-processing document', 'A photograph', 'A song', 'A program'], 'The extension .docx is used by Microsoft Word documents.'],
  [['File', 'A collection of data stored under one name.'], ['Folder', 'A container used to organise files and other folders.'], ['Extension', 'The letters after the dot in a file name that show its type.'], ['Recycle Bin', 'The place where deleted files are kept until it is emptied.']],
  [
    { q: 'Describe how to create a folder named "Geography" on the desktop and move a file called "Map.jpg" into it.', steps: ['Right-click an empty part of the desktop, point to **New** and click **Folder**.', 'Type **Geography** and press **Enter**.', 'Drag "Map.jpg" onto the Geography folder and release it (or select the file, press **Ctrl + X**, open the folder and press **Ctrl + V**).'] },
  ]),

  // ---------- Word processing ----------
  L('cs-word-1', 'cs-f1-word', '9.1', 'Word processing: typing, saving and formatting text', 10, ['Word processing', 'Practical'], [
    'A **word processor** is application software for typing, editing, formatting, saving and printing documents such as letters, notes and reports. Examples are **Microsoft Word**, **LibreOffice Writer** and **Google Docs**. The flashing line where text appears is the **insertion point** (cursor).',
    'Type text without pressing Enter at the end of each line: the program moves to the next line by itself (**word wrap**). Press Enter only to start a new **paragraph**. A red wavy line under a word shows a possible **spelling mistake**.',
    '**Editing** changes the content: **select** text by dragging over it, then delete, cut, copy or paste it. **Ctrl + Z** undoes the last action. **Formatting** changes the appearance: the **font** (typeface, such as Arial or Times New Roman), the **font size**, **bold** (Ctrl + B), *italic* (Ctrl + I), underline (Ctrl + U), the **font colour**, and the **alignment**: left, centre, right or justified (straight on both sides).',
    'To **save** a new document, click **File**, then **Save As**, choose the folder, type a name and click Save (or press Ctrl + S). After the first save, Ctrl + S saves the changes. **Save often** so that a power cut does not destroy your work.',
  ], null, 'Editing changes **what** the text says; formatting changes **how** it looks.',
  ['To make selected text bold, you press:', ['Ctrl + B', 'Ctrl + I', 'Ctrl + U', 'Ctrl + S'], 'B is for bold; I for italic; U for underline; S for save.'],
  [['Word processor', 'Application software for creating and formatting documents.'], ['Word wrap', 'Moving text to the next line automatically at the end of a line.'], ['Formatting', 'Changing the appearance of text, such as its font, size or alignment.'], ['Alignment', 'The position of text between the margins: left, centre, right or justified.']],
  [
    { q: 'A pupil types the title "MY VILLAGE" and wants it in the middle of the page, bold and in size 16. List the steps.', steps: ['**Select** the title by dragging over it.', 'Click **Centre** alignment (or press Ctrl + E).', 'Click **Bold** (or press Ctrl + B).', 'Choose **16** in the font size box.'] },
  ]),

  // ---------- Computers in society ----------
  L('cs-society-1', 'cs-f1-society', '10.1', 'Computers in school, home, business and health', 7, ['ICT in society'], [
    'In **education**, computers keep pupils’ records and print report cards, help teachers prepare lessons, let pupils learn with educational programs and do research on the Internet, and allow **e-learning** at a distance.',
    'At **home**, computers and phones are used to communicate with family by calls, messages and video, for entertainment such as music, films and games, to keep a family budget and to pay bills.',
    'In **business**, computers keep records of stock, sales and wages, produce invoices and accounts, run **ATMs** and **mobile money** services, and let shops sell online. In **health**, they keep patients’ records, control machines that monitor a patient’s heartbeat and breathing, and produce scans of the inside of the body.',
    'Computers are also used in **government** (national identity cards, tax records), **transport** (booking bus and flight tickets), **agriculture** (weather information and market prices sent to farmers’ phones) and **security** (cameras and alarm systems).',
  ], null, 'For each area, give a **specific** use, such as "printing report cards" rather than just "education".',
  ['Which is a use of computers in a hospital?', ['Monitoring a patient’s heartbeat', 'Printing report cards', 'Selling train tickets', 'Playing video games'], 'Patient monitors are computer-controlled machines that measure and display vital signs.'],
  [['E-learning', 'Learning with computers and the Internet, often at a distance.'], ['ATM', 'Automated teller machine: a computer that lets bank customers withdraw cash.']],
  [
    { q: 'Give one use of computers in each of: (a) a bank, (b) a secondary school, (c) a farm.', steps: ['(a) **Bank:** ATMs let customers withdraw money at any time, and computers keep every account up to date.', '(b) **School:** computers calculate averages and print report cards.', '(c) **Farm:** a phone receives weather forecasts and market prices, so the farmer knows when to plant and where to sell.'] },
  ]),

  L('cs-ergonomics-1', 'cs-f1-society', '10.2', 'Ergonomics: using computers without harming your health', 8, ['Health and safety'], [
    '**Ergonomics** is the study of how to arrange a workplace and equipment so that people can work **comfortably, safely and efficiently**. Using a computer for long hours in a bad position can harm the body.',
    '**Eye strain** causes tired, dry or sore eyes, blurred vision and headaches. To prevent it: keep the screen about an **arm’s length** away, adjust the brightness, avoid **glare** from windows and lamps, and rest the eyes regularly, for example by looking at something far away for about 20 seconds every 20 minutes.',
    '**Repetitive strain injury (RSI)** is pain in the fingers, wrists, arms or shoulders caused by repeating the same movements, such as typing and clicking, for long periods. To prevent it: keep the **wrists straight**, use a wrist rest and take short **breaks** to stretch.',
    '**Back and neck pain** come from poor **posture**. Sit upright with the **back supported** by the chair, **feet flat** on the floor, elbows bent at about a right angle and the top of the screen at about **eye level**. Get up and walk about every hour.',
  ], 'good-posture', 'For each health problem, give its **cause** and a **way to prevent** it.',
  ['Pain in the wrists of a secretary who types all day is most likely:', ['Repetitive strain injury', 'Eye strain', 'A virus infection', 'Short-sightedness'], 'Repeating the same small movements for hours strains the muscles and tendons of the hands and wrists.'],
  [['Ergonomics', 'Arranging equipment and the workplace so people can work safely and comfortably.'], ['RSI', 'Repetitive strain injury: pain caused by repeating the same movements.'], ['Glare', 'Bright light reflected from a screen that makes it hard to see.']],
  [
    { q: 'A pupil complains of headaches and sore eyes after using a computer. Suggest three things that would help.', steps: ['Set the **screen brightness** to match the room and move the screen so that light from the window does not cause **glare**.', 'Sit about an **arm’s length** from the screen, with its top at eye level.', 'Take regular **breaks**: every 20 minutes look at something far away for about 20 seconds.'] },
  ]),

  // ---------- The Internet ----------
  L('cs-internet-1', 'cs-f1-internet', '11.1', 'The Internet, browsers and searching safely', 10, ['Internet', 'Digital safety'], [
    'The **Internet** is a worldwide network of computer networks that lets computers exchange information. The **World Wide Web** (the Web) is the huge collection of linked **web pages** that you can reach through the Internet. Each page is stored on a computer called a **web server**.',
    'A **web browser** is the program used to open and view web pages: **Google Chrome**, **Mozilla Firefox**, **Microsoft Edge**, **Safari** and **Opera** are browsers. Each page has an address called a **URL** (uniform resource locator), typed in the browser’s **address bar**, such as https://www.example.com/news/index.html. It begins with the **protocol** (https), then the **domain name** (www.example.com), then the **path** to the page.',
    'A **search engine**, such as **Google** or **Bing**, finds pages for you. You type **keywords** that describe what you want, for example "causes of malaria", and it lists pages that match. Choose a few precise words; information from trusted sites, such as those of governments, universities and well-known organisations, is more reliable. Check facts in more than one place.',
    'Stay safe online: never share your **password**, home address or phone number with strangers; do not open links or attachments from people you do not know; beware of messages promising money or prizes, which are **scams**; be polite to others; and tell a parent or teacher if anyone upsets or threatens you (**cyberbullying**).',
  ], 'url-parts', 'A **browser** opens web pages; a **search engine** finds them. Google Chrome is a browser; Google Search is a search engine.',
  ['Which of these is a web browser?', ['Mozilla Firefox', 'Google Search', 'Windows', 'Microsoft Word'], 'Firefox opens web pages. Google Search is a search engine, Windows an operating system and Word a word processor.'],
  [['Internet', 'A worldwide network of computer networks.'], ['Web browser', 'A program used to view web pages.'], ['Search engine', 'A website that finds web pages that match keywords.'], ['URL', 'Uniform resource locator: the address of a web page.']],
  [
    { q: 'Name the parts of the URL https://www.example.com/news/index.html.', steps: ['**https** is the **protocol**: the rules for sending the page securely.', '**www.example.com** is the **domain name**: the website’s address.', '**/news/index.html** is the **path**: the folder (news) and the page (index.html) on that site.'] },
  ]),
];
