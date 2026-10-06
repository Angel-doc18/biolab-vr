// Computer Science lessons for Form 3, following the MINESEC annual progression:
// module 1 hardware, operating systems and networks; module 2 data
// representation, data processing (spreadsheets) and problem solving. Original
// text written for this app. **double asterisks** mark key terms. `examples`
// are worked examples.

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

export const LESSONS_3 = [
  // ---------- Networks ----------
  L('cs-netscale-3', 'cs-f3-networks', '1.1', 'Networks: LAN, MAN and WAN', 9, ['Networks'], [
    'A **computer network** is a group of computers and other devices linked together to **share resources** (files, printers, an Internet connection) and to **communicate**. A friendly comparison is a group of friends who share books and send each other messages: each friend is like a computer, and the paths between them are like the network links.',
    'Networks are classified by the **area** they cover. A **LAN (local area network)** links devices in a **small area**, such as a school, an office or a house; it is usually owned by one organisation and is fast. A **MAN (metropolitan area network)** covers a **town or city**, for example linking the campuses of a university, or the branches of a bank, across one city. A **WAN (wide area network)** covers a **very large area**, a country or the whole world, often using telephone lines, fibre-optic cables and satellites; the **Internet** is the largest WAN.',
    '**Advantages** of networks: sharing hardware and software saves money; files can be shared and backed up centrally; users communicate quickly; security and updates can be managed from one place. **Limitations**: setting up and maintaining a network is costly and needs skilled staff; viruses and hackers can spread through it; and if a central device fails, many users lose service.',
  ], 'lan-wan', 'From smallest to largest: **LAN** (a building) → **MAN** (a city) → **WAN** (a country or the world).',
  ['A network linking the offices of a company in different parts of Douala is best described as a:', ['MAN', 'LAN', 'WAN covering the world', 'Single computer'], 'It covers one city, the size of a metropolitan area network.'],
  [['LAN', 'Local area network: covers a small area such as a building.'], ['MAN', 'Metropolitan area network: covers a town or city.'], ['WAN', 'Wide area network: covers a country or the world.']],
  [
    { q: 'Classify each network: (a) the computers in a school’s laboratory, (b) a network joining a bank’s branches in Yaoundé, Douala, Garoua and Bamenda, (c) a network joining three hospitals in Bafoussam town.', steps: ['(a) One room in one school: **LAN**.', '(b) Towns far apart across the country: **WAN**.', '(c) Several sites within one town: **MAN**.'] },
  ]),

  L('cs-topology-3', 'cs-f3-topology', '2.1', 'Network topologies: star, bus and ring', 10, ['Networks', 'Topology'], [
    'A **topology** is the way the devices of a network are arranged and connected. The **physical topology** is the actual layout of the cables and devices; the **logical topology** is the way data travels between them.',
    'In a **star topology**, every computer is connected by its own cable to a **central device**, a **switch** (or an older hub). If one cable breaks, only that computer is cut off, and computers are easy to add. But if the **central switch fails**, the whole network stops, and much cable is needed. Most school and office LANs are stars.',
    'In a **bus topology**, all the computers are connected to **one main cable**, the **backbone**, with a **terminator** at each end to stop signals bouncing back. It is cheap and uses little cable, but if the backbone breaks, the whole network fails, and it slows down when many computers send data at once, because their signals **collide**.',
    'In a **ring topology**, each computer is connected to the **next one**, forming a **closed loop**, and data passes round the ring from computer to computer in one direction until it reaches the one it is meant for. There are no collisions, but **one broken cable or computer can stop the whole ring**, and adding a computer interrupts the network. A **mesh** topology, in which computers have many links to one another, is very reliable but costly; the Internet is partly a mesh.',
  ], 'network-topologies', 'For each topology learn its **shape**, one **advantage** and one **disadvantage**, especially what happens when one cable breaks.',
  ['In which topology does the failure of the central switch stop the whole network?', ['Star', 'Bus', 'Ring', 'Mesh'], 'Every computer in a star depends on the central device.'],
  [['Topology', 'The arrangement of the devices and links of a network.'], ['Backbone', 'The main cable to which all devices in a bus network are connected.'], ['Terminator', 'A device at each end of a bus cable that stops signals reflecting.']],
  [
    { q: 'A school with 30 computers must choose between a bus and a star topology. Recommend one and justify it.', steps: ['Recommend a **star** topology.', 'If one cable breaks, **only one computer** is affected, so lessons can continue; in a bus, a break in the backbone stops **all 30**.', 'Computers are **easy to add or remove** without stopping the network, and a switch sends data only to the computer it is meant for, so it stays fast.'] },
  ]),

  L('cs-nethw-3', 'cs-f3-topology', '2.2', 'Network hardware and transmission media', 10, ['Networks', 'Hardware'], [
    'A **network interface card (NIC)** connects a computer to a network, by cable or wirelessly. Each NIC has a unique hardware address, the **MAC address**. A **hub** connects several computers and sends every message it receives to **all** of them. A **switch** also connects computers but sends each message **only** to the computer it is addressed to, which makes it faster and more secure than a hub. A **router** connects **different networks** together, such as a school LAN to the Internet, and chooses the route data should take. A **wireless access point** lets devices join a network by Wi-Fi. A **modem** converts signals so that data can travel over telephone or cable lines.',
    'The **transmission medium** is what carries the signals. **Wired** media include **twisted-pair cable** (the common network cable with an **RJ45** plug), **coaxial cable** (like a television aerial cable) and **fibre-optic cable**, which carries data as **pulses of light** in thin glass fibres; fibre is the **fastest**, carries data over long distances and is not affected by electrical interference, but costs more. Cameroon is linked to other countries by undersea fibre-optic cables.',
    '**Wireless** media send data through the air: **radio waves** (Wi-Fi and Bluetooth), **microwaves** between towers, **satellites** for very long distances and remote areas, and **infrared** for very short distances, such as a television remote. Wireless is convenient and needs no cables, but it is usually slower, can be blocked by walls and is easier for others to intercept.',
  ], null, 'A **switch** connects devices **within** one network; a **router** connects **different** networks (for example, the LAN to the Internet).',
  ['Which device connects a school’s LAN to the Internet?', ['A router', 'A hub', 'A NIC only', 'A terminator'], 'A router links different networks and directs data between them.'],
  [['NIC', 'Network interface card: the part that connects a computer to a network.'], ['Switch', 'A device that sends each message only to the device it is meant for.'], ['Router', 'A device that connects different networks and directs data between them.'], ['Fibre-optic cable', 'Cable that carries data as pulses of light through glass fibres.']],
  [
    { q: 'Give two advantages and one disadvantage of fibre-optic cable compared with twisted-pair cable.', steps: ['**Advantage 1:** it carries data much **faster**.', '**Advantage 2:** it works over **long distances** and is **not affected by electrical interference**, because it carries light.', '**Disadvantage:** it is **more expensive** and harder to install and join.'] },
  ]),

  // ---------- Internet and intranet ----------
  L('cs-internet-3', 'cs-f3-internet', '3.1', 'The Internet, the Web, protocols and intranets', 10, ['Internet', 'Protocols'], [
    'The **Internet** began in **1969** as **ARPANET**, a network linking a few universities and research centres in the United States, and grew into the worldwide network of networks we use today. The **World Wide Web** was invented by **Tim Berners-Lee** around **1989 to 1991**. The Web is only one **service** of the Internet; others are **e-mail**, **file transfer**, **instant messaging**, **voice and video calls** and **online banking**.',
    'Computers on the Internet communicate using **protocols**: agreed sets of rules for sending data. **TCP/IP** is the basic protocol suite of the Internet: it breaks data into **packets**, addresses them and puts them back together. **HTTP** (HyperText Transfer Protocol) transfers **web pages**, and **HTTPS** does so **securely** by encrypting the data. **FTP** (File Transfer Protocol) uploads and downloads **files** between computers. **SMTP** sends e-mail, while **POP3** and **IMAP** are used to receive it.',
    'Every device on the Internet has an **IP address**, a number that identifies it, such as 192.168.1.10. Because numbers are hard to remember, websites have **domain names**, and the **DNS** (domain name system) translates a domain name into its IP address.',
    'An **intranet** is a **private** network inside an organisation that uses the same technology as the Internet (web pages, e-mail), but can be used **only by its members**, for example staff notices and records in a ministry or a large school. An **extranet** lets chosen outsiders, such as suppliers, into part of an intranet. The open Internet is public and anyone can use it, but it is less secure.',
  ], null, 'Match each protocol to its job: **HTTP/HTTPS** web pages, **FTP** files, **SMTP** sending e-mail, **POP3/IMAP** receiving e-mail, **TCP/IP** the basis of all.',
  ['Which protocol is used to upload files to a web server?', ['FTP', 'HTTP', 'SMTP', 'POP3'], 'FTP is the File Transfer Protocol.'],
  [['Protocol', 'A set of rules that computers follow to communicate.'], ['IP address', 'A number that identifies a device on a network.'], ['DNS', 'Domain name system: translates domain names into IP addresses.'], ['Intranet', 'A private network within an organisation using Internet technology.']],
  [
    { q: 'Give two differences between the Internet and an intranet.', steps: ['**Access:** the Internet is **public**, open to anyone; an intranet is **private**, open only to members of the organisation.', '**Size:** the Internet covers the **whole world**; an intranet covers only **one organisation**.', '**Security:** an intranet is **more secure**, because outsiders cannot reach it.'] },
  ]),

  // ---------- Computer architecture ----------
  L('cs-arch-3', 'cs-f3-architecture', '4.1', 'Computer architecture: the CPU, registers and memory', 10, ['Hardware', 'Architecture'], [
    'Most computers follow the **von Neumann architecture**: programs and data are both stored in the **same main memory**, and the **CPU** fetches instructions one at a time and carries them out.',
    'The CPU has three main parts. The **control unit (CU)** fetches each instruction, decodes it and sends signals that control the other parts. The **arithmetic and logic unit (ALU)** performs arithmetic (+, −, ×, ÷) and logic operations (comparisons such as =, <, >, and AND, OR, NOT). **Registers** are tiny, very fast storage locations inside the CPU. Important registers are the **program counter (PC)**, which holds the **address of the next instruction**; the **accumulator**, which holds the **result** of the ALU’s latest calculation; the **memory address register (MAR)**, which holds the address being read or written; and the **memory data register (MDR)**, which holds the data being moved to or from memory.',
    '**Primary memory** is directly reached by the CPU. **RAM** is volatile and holds the programs and data in use. **ROM** is non-volatile and holds start-up instructions (the **BIOS** or firmware); some kinds, such as **EEPROM** and flash, can be rewritten electrically to update it. **Cache** is a small, very fast memory between the CPU and RAM.',
    '**Secondary storage** keeps data permanently. Storage devices are compared by **capacity** (how much they hold), **access speed**, **cost per gigabyte**, **portability** and **durability**. A hard disk gives large capacity cheaply; an SSD is faster and tougher; a flash drive is very portable; optical discs are cheap to post but slow and small.',
  ], 'computer-system', 'Registers to know: **PC** = address of the **next** instruction; **accumulator** = **result** of the ALU; **MAR** = **address**; **MDR** = **data**.',
  ['Which register holds the address of the next instruction to be fetched?', ['The program counter', 'The accumulator', 'The memory data register', 'The cache'], 'After each fetch, the program counter moves on to the next address.'],
  [['Von Neumann architecture', 'A design in which programs and data share the same memory.'], ['Program counter', 'The register holding the address of the next instruction.'], ['Accumulator', 'The register holding the result of the ALU’s calculation.'], ['Cache', 'A small, very fast memory between the CPU and RAM.']],
  [
    { q: 'Describe how the CPU fetches one instruction, naming the registers used.', steps: ['The address in the **program counter (PC)** is copied to the **memory address register (MAR)**.', 'The instruction stored at that address is read from memory into the **memory data register (MDR)**.', 'The instruction goes to the **control unit** to be decoded, and the **PC** is increased to point to the next instruction.'] },
  ]),

  // ---------- Ports and data capture ----------
  L('cs-ports-3', 'cs-f3-ports', '5.1', 'Ports and interfaces', 8, ['Hardware', 'Ports'], [
    'A **port** is a socket on a computer where a device is plugged in. Through ports, data travels between the computer and its peripherals along **buses** inside the computer.',
    'The **USB** (universal serial bus) port is the most common: it connects flash drives, keyboards, mice, printers, phones and cameras, and can also supply power to charge small devices. **USB-C** is the newer, smaller, reversible plug.',
    'The **HDMI** port sends high-definition **video and sound** together to a monitor, television or projector. The older **VGA** port, usually blue with 15 pins, sends **video only** as an analogue signal. The **Ethernet (LAN)** port takes a network cable with an **RJ45** plug. The **audio jacks** (3.5 mm) connect headphones, speakers and microphones. Older computers also have **serial** and **parallel** ports, now replaced by USB.',
  ], null, 'Match each port to what it carries: **USB** devices and power, **HDMI** video with sound, **VGA** video only, **Ethernet** the network.',
  ['Which port carries both high-definition video and sound to a television?', ['HDMI', 'VGA', 'Ethernet', 'Audio jack'], 'VGA carries only analogue video; HDMI carries digital video and audio together.'],
  [['Port', 'A socket on a computer for connecting a device.'], ['USB', 'Universal serial bus: the common port for most peripherals.'], ['HDMI', 'A port that carries high-definition video and sound.']],
  [
    { q: 'A teacher wants to connect a laptop to a projector, a flash drive and the school network. Which port is used for each?', steps: ['Projector: **HDMI** (or **VGA** on an older projector).', 'Flash drive: **USB**.', 'School network by cable: the **Ethernet (LAN)** port with an RJ45 plug (or Wi-Fi without a cable).'] },
  ]),

  L('cs-capture-3', 'cs-f3-ports', '5.2', 'Methods of data capture', 9, ['Data capture'], [
    '**Data capture** is the collection of data and its entry into a computer. **Manual** methods use people: typing data from forms with a keyboard, or using a touch screen. They are flexible but **slow** and allow **typing errors**.',
    '**Automatic** methods use machines to read data directly, which is **faster** and more **accurate**. A **barcode reader** reads the black and white stripes on goods. **OMR** (optical mark recognition) reads pencil marks in fixed boxes, as on multiple-choice answer sheets and some forms. **OCR** (optical character recognition) turns a scanned page of printed text into **editable text**. **MICR** (magnetic ink character recognition) reads the numbers printed in magnetic ink at the bottom of **cheques**.',
    'Other methods: **RFID** (radio-frequency identification) tags are read by radio waves without contact, for example on goods or on access cards; **QR codes** are square codes read by a phone camera; **chip cards** (smart cards) such as bank cards hold data on a chip; **biometric** devices read fingerprints or faces; and **sensors** measure physical quantities such as temperature, light or pressure for a computer to record automatically.',
  ], null, 'OMR reads **marks**, OCR reads **characters** (text), MICR reads **magnetic ink** on cheques.',
  ['Multiple-choice answer sheets on which pupils shade boxes are read by:', ['OMR', 'OCR', 'MICR', 'RFID'], 'Optical mark recognition detects the position of marks in fixed boxes.'],
  [['Data capture', 'Collecting data and entering it into a computer.'], ['OMR', 'Optical mark recognition: reading marks in fixed positions.'], ['OCR', 'Optical character recognition: turning printed text into editable text.'], ['MICR', 'Magnetic ink character recognition: reading magnetic ink on cheques.']],
  [
    { q: 'Suggest the best data capture method for each and give a reason: (a) prices of goods at a supermarket till, (b) marking 10 000 multiple-choice answer sheets, (c) the cheque numbers in a bank.', steps: ['(a) **Barcode reader**: fast, and it avoids typing errors at the till.', '(b) **OMR**: it reads the shaded boxes of thousands of sheets quickly and accurately.', '(c) **MICR**: magnetic ink is hard to forge and can be read even if the cheque is stamped or written over.'] },
  ]),

  // ---------- Operating systems ----------
  L('cs-os-3', 'cs-f3-os', '6.1', 'Operating systems: purpose, types and functions', 10, ['Operating systems'], [
    'An **operating system (OS)** is system software that acts as the **link between the user and the hardware**. It starts when the computer boots and stays in control until it is shut down.',
    'Its main **functions** are: **process management** (deciding which program uses the processor, and when, so that several can run at once, which is **multitasking**); **memory management** (giving each program a part of RAM and taking it back); **file management** (organising files and folders on storage); **device management** (controlling input, output and storage devices through **drivers**); **security** (user accounts, passwords and **access rights**); and providing the **user interface**, either a **graphical user interface (GUI)** or a **command-line interface (CLI)**, where commands are typed.',
    'There are several **types** of OS: **single-user** systems such as most laptops; **multi-user** systems that serve many users at once, such as on a server; and **real-time** systems that must respond immediately, such as those controlling traffic lights, aircraft or medical machines.',
    'Common **desktop** systems are **Windows** (Microsoft), **macOS** (Apple) and **Linux** (free and open source, such as Ubuntu). Common **mobile** systems are **Android** (Google, based on Linux, the most widely used on phones) and **iOS** (Apple iPhones). Files are given **access privileges** such as **read** (open and view), **write** (change) and **execute** (run a program), set for each user or group. Keep the OS **updated**, use a **screen lock** and strong passwords, and leave the **firewall** switched on.',
  ], null, 'List OS functions with the word **management**: process, memory, file, device management, plus security and the user interface.',
  ['A system that controls traffic lights and must respond immediately is a:', ['Real-time operating system', 'Batch system', 'Word processor', 'Spreadsheet'], 'Real-time systems react to input at once.'],
  [['Multitasking', 'Running several programs at the same time.'], ['Command-line interface', 'An interface in which the user types commands.'], ['Access privileges', 'Permissions that control who can read, change or run a file.'], ['Real-time system', 'A system that responds to input immediately.']],
  [
    { q: 'Compare a graphical user interface with a command-line interface, giving one advantage of each.', steps: ['In a **GUI** the user clicks on **icons, menus and windows** with a pointer; in a **CLI** the user **types commands**.', 'GUI advantage: it is **easy to learn**, because users do not need to remember commands.', 'CLI advantage: it uses **less memory** and lets experts work **quickly** and repeat tasks by script.'] },
  ]),

  // ---------- Number systems ----------
  L('cs-bases-3', 'cs-f3-numbers', '7.1', 'Number systems: denary and binary', 11, ['Number systems', 'Calculation'], [
    'We count in **denary** (decimal), **base 10**, with the ten digits 0 to 9. Each place is worth ten times the place to its right: units, tens, hundreds and so on. Computers use **binary**, **base 2**, with only two digits, **0 and 1**, because their electronic switches are either **off** or **on**.',
    'In binary each place is worth **twice** the place to its right. For an 8-bit number the place values are **128, 64, 32, 16, 8, 4, 2, 1**. To change **binary to denary**, add up the place values under each 1. For example, 1011₂ = 8 + 2 + 1 = **11₁₀**.',
    'To change **denary to binary**, **divide by 2 repeatedly**, writing down each **remainder** (0 or 1), until the quotient is 0. Then read the remainders **from the bottom up**. Another way is to take away the largest place value you can, write 1 in that place, and continue.',
    'A small number written after a number shows its base: 101₂ is binary and 101₁₀ is denary. With **n bits** you can write 2ⁿ different numbers: 8 bits give 2⁸ = **256** values, from 0 to 255.',
  ], 'binary-places', 'Always check your conversion by changing the answer **back** again.',
  ['What is the binary number 11001₂ in denary?', ['25', '19', '11001', '9'], '16 + 8 + 1 = 25.'],
  [['Denary', 'The base-10 number system, with digits 0 to 9.'], ['Binary', 'The base-2 number system, with digits 0 and 1.'], ['Place value', 'The value of a position in a number, such as 16 in binary.']],
  [
    { q: 'Convert 101101₂ to denary.', steps: ['Write the place values under the digits: 32, 16, 8, 4, 2, 1 for the digits 1, 0, 1, 1, 0, 1.', 'Add the place values where there is a 1: 32 + 8 + 4 + 1.', '= **45₁₀**.'] },
    { q: 'Convert 13₁₀ to binary by repeated division.', steps: ['13 ÷ 2 = 6 remainder **1**.', '6 ÷ 2 = 3 remainder **0**.', '3 ÷ 2 = 1 remainder **1**.', '1 ÷ 2 = 0 remainder **1**.', 'Read the remainders from the bottom up: **1101₂**. Check: 8 + 4 + 1 = 13.'] },
    { q: 'Convert 200₁₀ to an 8-bit binary number by subtracting place values.', steps: ['200 − 128 = 72, so a **1** in the 128 place.', '72 − 64 = 8, so a **1** in the 64 place; 32 and 16 are too big: **0, 0**.', '8 − 8 = 0, so a **1** in the 8 place; then 4, 2, 1 are **0, 0, 0**.', 'Answer: **11001000₂**. Check: 128 + 64 + 8 = 200.'] },
  ]),

  L('cs-hex-3', 'cs-f3-numbers', '7.2', 'Octal and hexadecimal', 10, ['Number systems', 'Calculation'], [
    '**Octal** is **base 8** and uses the digits 0 to 7; its place values are 1, 8, 64, 512 and so on. **Hexadecimal** (hex) is **base 16** and uses sixteen symbols: the digits 0 to 9 and the letters **A = 10, B = 11, C = 12, D = 13, E = 14, F = 15**. Its place values are 1, 16, 256, 4096 and so on.',
    'Hexadecimal is used because it is a short, easy way to write binary: **one hex digit stands for exactly four bits** (a nibble). It is used in colour codes on web pages (#FF0000 is red), in **MAC addresses** and in error codes. In the same way, one octal digit stands for exactly three bits.',
    'To change **binary to hex**, split the binary number into groups of **four bits from the right**, and change each group to one hex digit. To change **hex to binary**, write each hex digit as four bits. To change **hex to denary**, multiply each digit by its place value and add. To change **denary to hex**, divide by 16 repeatedly and read the remainders from the bottom up, writing 10 to 15 as A to F.',
  ], null, 'Learn the table from 0000 = 0 to 1111 = F. Group binary in **fours** for hex and in **threes** for octal, always **from the right**.',
  ['What is the hexadecimal digit for the denary number 13?', ['D', 'C', 'E', '13'], 'A = 10, B = 11, C = 12, D = 13.'],
  [['Hexadecimal', 'The base-16 number system, with digits 0 to 9 and A to F.'], ['Octal', 'The base-8 number system, with digits 0 to 7.'], ['Nibble', 'A group of four bits, written as one hex digit.']],
  [
    { q: 'Convert 10110110₂ to hexadecimal.', steps: ['Split into groups of four from the right: **1011** and **0110**.', '1011 = 8 + 2 + 1 = 11 = **B**.', '0110 = 4 + 2 = 6 = **6**.', 'Answer: **B6₁₆**.'] },
    { q: 'Convert 2F₁₆ to denary.', steps: ['The place values are 16 and 1.', '2 × 16 = 32 and F = 15, so 15 × 1 = 15.', '32 + 15 = **47₁₀**.'] },
    { q: 'Convert 200₁₀ to hexadecimal.', steps: ['200 ÷ 16 = 12 remainder **8**.', '12 ÷ 16 = 0 remainder **12**, which is **C**.', 'Read from the bottom up: **C8₁₆**. Check: 12 × 16 + 8 = 200.'] },
    { q: 'Convert 101110₂ to octal.', steps: ['Split into groups of three from the right: **101** and **110**.', '101 = 4 + 1 = **5**; 110 = 4 + 2 = **6**.', 'Answer: **56₈**. Check: 5 × 8 + 6 = 46, and 101110₂ = 32 + 8 + 4 + 2 = 46.'] },
  ]),

  // ---------- Spreadsheets ----------
  L('cs-sheet-3', 'cs-f3-spreadsheet', '8.1', 'Spreadsheets: cells, formulas and references', 11, ['Spreadsheets', 'Practical'], [
    'A **spreadsheet** program arranges data in a grid so that calculations are done automatically: **Microsoft Excel**, **LibreOffice Calc** and **Google Sheets** are examples. A file is a **workbook** containing one or more **worksheets**. Columns are named by **letters** and rows by **numbers**, and each box is a **cell** named by its column and row, such as **B3**: its **cell reference**. A block of cells is a **range**, written with a colon: **A1:A10**.',
    'A cell can hold a **label** (text such as "Name"), a **value** (a number) or a **formula**, which **always begins with =**. Formulas use + − * (multiply) / (divide) and ^ (power), and follow the usual order of operations: =2+3*4 gives 14. When a value changes, every formula using it **recalculates** at once.',
    'Formatting makes a sheet clear: number formats (decimal places, percentage, currency such as FCFA), bold headings, borders, **merge and centre** for titles, and wider columns. **Data validation** limits what can be entered, for example only marks from 0 to 20, so mistakes are caught.',
    'When a formula is **copied**, its references change to match the new position: =B2+C2 copied down one row becomes =B3+C3. These are **relative references**. To keep a reference fixed, make it **absolute** with dollar signs: **$E$1** never changes when copied (press F4 to add the dollars). A **mixed** reference such as $E1 fixes only the column.',
  ], 'spreadsheet-grid', 'Use a **relative** reference for data that changes from row to row, and an **absolute** reference ($) for one fixed cell, such as a rate or a total, used by every row.',
  ['The formula =B2*$E$1 is copied from C2 to C3. What does it become?', ['=B3*$E$1', '=B3*$E$2', '=B2*$E$1', '=C3*$F$2'], 'The relative B2 becomes B3; the absolute $E$1 stays the same.'],
  [['Cell', 'The box where a row and a column meet, such as B3.'], ['Range', 'A block of cells, such as A1:A10.'], ['Formula', 'A calculation in a cell, beginning with =.'], ['Absolute reference', 'A cell reference with $ signs that does not change when copied.']],
  [
    { q: 'A shop sheet has prices in B2:B6 and quantities in C2:C6. The VAT rate (19.25%) is in E1. Write formulas for the cost of the first item in D2 and its VAT in F2, so they can be copied down.', steps: ['Cost in D2: **=B2*C2** (relative, so it becomes =B3*C3 on the next row).', 'VAT in F2: **=D2*$E$1** (E1 is absolute, because every row uses the same rate).', 'Copy D2 and F2 down to row 6.'] },
  ]),

  L('cs-functions-3', 'cs-f3-spreadsheet', '8.2', 'Spreadsheet functions and the IF function', 11, ['Spreadsheets', 'Functions'], [
    'A **function** is a ready-made formula. It is written as =NAME(argument), where the **argument** is usually a range. **=SUM(B2:B10)** adds the numbers in the range. **=AVERAGE(B2:B10)** finds their mean. **=MIN(B2:B10)** and **=MAX(B2:B10)** give the smallest and largest values.',
    '**=COUNT(B2:B10)** counts the cells that contain **numbers**, while **=COUNTA(B2:B10)** counts the cells that are **not empty**, whether they hold numbers or text. So if a pupil was absent and "ABS" is typed instead of a mark, COUNT leaves that cell out but COUNTA includes it.',
    'The **IF** function makes a decision: **=IF(condition, value if true, value if false)**. For example, **=IF(C2>=10,"Pass","Fail")** shows Pass when the mark in C2 is 10 or more, and Fail otherwise. Text results are written in quotation marks.',
    'Conditions use **comparison operators**: = (equal to), <> (not equal to), > (greater than), < (less than), >= (greater than or equal to) and <= (less than or equal to).',
  ], 'spreadsheet-grid', 'COUNT counts **numbers only**; COUNTA counts **all non-empty** cells. In IF, put text answers in **quotation marks**.',
  ['The cells B2:B6 contain 12, 15, ABS, 9 and 14. What does =COUNT(B2:B6) give?', ['4', '5', '50', '3'], 'COUNT includes only the four numbers; "ABS" is text.'],
  [['Function', 'A built-in formula such as SUM or AVERAGE.'], ['Argument', 'The value or range a function works on.'], ['Comparison operator', 'A symbol such as > or <> used to compare values.']],
  [
    { q: 'Marks out of 20 for five pupils are in C2:C6: 12, 8, 15, 10, 7. Give the result of each formula: =SUM(C2:C6), =AVERAGE(C2:C6), =MAX(C2:C6), =MIN(C2:C6).', steps: ['SUM: 12 + 8 + 15 + 10 + 7 = **52**.', 'AVERAGE: 52 ÷ 5 = **10.4**.', 'MAX: the largest is **15**; MIN: the smallest is **7**.'] },
    { q: 'Using the same marks, what does =IF(C3>=10,"Pass","Fail") show, and how many pupils would show Pass if it is copied to all five rows?', steps: ['C3 holds 8, and 8 >= 10 is false, so it shows **Fail**.', 'Copied down: 12 Pass, 8 Fail, 15 Pass, 10 Pass (10 >= 10 is true), 7 Fail.', '**3 pupils** show Pass.'] },
  ]),

  // ---------- Algorithms and flowcharts ----------
  L('cs-algo-3', 'cs-f3-algorithms', '9.1', 'Algorithms: solving problems step by step', 10, ['Algorithms', 'Problem solving'], [
    'An **algorithm** is a **finite**, **ordered** set of **clear** steps that solves a problem or carries out a task. A recipe for puff-puff and the directions to a friend’s house are everyday algorithms. A good algorithm has a clear **start** and **end**, takes **input**, gives **output**, and each step can be done and has only one meaning.',
    'Algorithms are written as **pseudocode**, a structured form of plain English with words such as INPUT, OUTPUT, IF, THEN, ELSE and REPEAT, or drawn as a **flowchart**. They are then turned into a **program** in a programming language.',
    'Every algorithm is built from three structures. **Sequence**: steps done one after the other. **Selection**: a choice between steps depending on a condition, IF … THEN … ELSE. **Iteration** (repetition or looping): steps repeated a number of times, or until a condition is met.',
    'Before writing an algorithm, identify the **inputs** (what is given), the **processing** (what must be done) and the **outputs** (what is required).',
  ], null, 'Start any algorithm question by listing **inputs**, **processing** and **outputs**; then write the steps in order.',
  ['Which structure makes a choice between two paths?', ['Selection', 'Sequence', 'Iteration', 'Input'], 'Selection uses IF … THEN … ELSE.'],
  [['Algorithm', 'A finite, ordered set of clear steps that solves a problem.'], ['Pseudocode', 'A structured form of English used to write algorithms.'], ['Selection', 'Choosing between steps depending on a condition.'], ['Iteration', 'Repeating steps; a loop.']],
  [
    { q: 'Write an algorithm in pseudocode to input the length and width of a rectangle and output its area.', steps: ['Inputs: length, width. Processing: area = length × width. Output: area.', '1. START', '2. INPUT length, width', '3. area ← length × width', '4. OUTPUT area', '5. STOP'] },
    { q: 'Write an algorithm to input a mark out of 20 and output "Pass" if it is 10 or more, otherwise "Fail".', steps: ['1. START', '2. INPUT mark', '3. IF mark >= 10 THEN OUTPUT "Pass"', '4. ELSE OUTPUT "Fail"', '5. STOP', 'This uses **selection**.'] },
  ]),

  L('cs-flowchart-3', 'cs-f3-algorithms', '9.2', 'Flowcharts', 10, ['Algorithms', 'Flowcharts'], [
    'A **flowchart** is a diagram that shows the steps of an algorithm using standard **symbols** joined by **flow lines** (arrows) that show the order.',
    'The symbols are: the **terminator**, an oval (rounded rectangle), for **Start** and **Stop**; the **process** box, a rectangle, for a calculation or action, such as area = length × width; the **input/output** box, a parallelogram, for INPUT or OUTPUT; the **decision** box, a diamond, for a question with a **yes or no** answer, which has two exits; and the **connector**, a small circle, used to join parts of a long flowchart.',
    'A flowchart is read from the top, following the arrows. A decision with an arrow going **back up** to an earlier step makes a **loop** (iteration), which repeats until the condition changes.',
    'To check that an algorithm works, **dry run** it: follow the steps by hand with test data and record the values of each variable in a **trace table**.',
  ], 'flowchart-symbols', 'A decision diamond **always** has two labelled exits: **Yes** and **No**.',
  ['Which flowchart symbol is used for a yes-or-no question?', ['A diamond', 'A rectangle', 'A parallelogram', 'An oval'], 'The decision symbol is a diamond with two exits.'],
  [['Flowchart', 'A diagram showing the steps of an algorithm with standard symbols.'], ['Terminator', 'The oval symbol for Start and Stop.'], ['Decision symbol', 'The diamond symbol for a yes-or-no question.'], ['Trace table', 'A table recording the values of variables during a dry run.']],
  [
    { q: 'Describe a flowchart that adds the numbers 1 to 5 using a loop, and dry run it.', steps: ['Start → process: total ← 0, n ← 1.', 'Process: total ← total + n; then n ← n + 1.', 'Decision: is n > 5? **No** → go back to "total ← total + n". **Yes** → output total → Stop.', 'Dry run: total becomes 1, 3, 6, 10, 15 as n goes 1, 2, 3, 4, 5; then n = 6 > 5, so the output is **15**.'] },
  ]),

  // ---------- Applications and society ----------
  L('cs-apps-3', 'cs-f3-society', '10.1', 'Computer applications, safety at work and the digital divide', 10, ['ICT in society', 'Health and safety'], [
    'Computers are applied in many fields. **CAD** (computer-aided design) lets architects and engineers draw and test plans of buildings, bridges and machines on screen, and **CAM** (computer-aided manufacturing) uses those designs to control machines that make the parts. **E-commerce** is buying and selling online, paid by card or mobile money. **Intelligent systems** imitate human skills: **expert systems** that suggest a diagnosis from symptoms, **robots** in factories, voice assistants, translation programs and systems that recognise faces.',
    'Computing affects **health**: long use can cause eye strain, repetitive strain injury, back and neck pain, and stress or addiction. Good ergonomics, breaks and limits on screen time prevent these.',
    'There are **safety** hazards at a computer workplace too: **electric shock** from damaged cables or wet hands; **fire** from overloaded sockets and overheating equipment; **tripping** over trailing cables; and heavy equipment falling from weak tables. Precautions: check and replace damaged cables, do not overload sockets, keep cables in trunking along the walls, keep drinks away, have a carbon dioxide **fire extinguisher**, and place equipment on strong desks.',
    'The **digital divide** is the gap between those who have access to computers and the Internet and those who do not, for example between towns and villages, rich and poor, or young and old. Its causes include **cost**, **no electricity**, **poor network coverage**, and **lack of skills**. It can be reduced by community **telecentres**, school computer laboratories, cheaper devices and data, rural electrification (including solar power), wider network coverage and ICT training.',
  ], null, 'For a hazard question, give the **hazard**, its **cause** and a **precaution**: fire, overloaded sockets, do not overload sockets.',
  ['Using a computer to design and test the plan of a bridge is:', ['CAD', 'CAM', 'OCR', 'E-commerce'], 'Computer-aided design; CAM is computer-controlled manufacturing.'],
  [['CAD', 'Computer-aided design: using computers to create and test designs.'], ['Expert system', 'A program that gives advice in a specialist field, such as medical diagnosis.'], ['Digital divide', 'The gap between people with and without access to ICT.']],
  [
    { q: 'Give two causes of the digital divide in rural Cameroon and suggest one solution for each.', steps: ['**No electricity** in many villages: provide **solar power** for schools and community centres.', '**Poor network coverage**: build more **mobile network towers** and community Wi-Fi points.', '(Another cause: **lack of skills**: run free ICT training in schools and telecentres.)'] },
  ]),
];
