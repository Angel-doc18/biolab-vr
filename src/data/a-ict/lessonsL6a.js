// A Level ICT lessons (0796), Lower Sixth, Term 1: the evolution and range of
// computers, processor architecture, the history, types and management of
// operating systems, communication media, network topologies and IP
// networking. Each lesson ends with the week's practical lab. Original text
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

export const LESSONS_IL6A = [
  // ---------- 1. Evolution ----------
  L('ait-gen-1', 'ait-l6-evolution', '1.1', 'The five generations of computers', 17, ['Computing environments'], [
    '**First generation** (1940s to mid-1950s): **vacuum tubes** for switching and magnetic drums for memory, programmed in machine code with punched cards. The machines filled rooms, used huge amounts of power, gave off heat and failed often. ENIAC (1945) and UNIVAC I (1951) belong here.',
    '**Second generation** (late 1950s to mid-1960s): **transistors** replaced valves, and magnetic core memory was used. Computers became smaller, cheaper, cooler and more reliable, and were programmed in assembly language and early high-level languages such as FORTRAN and COBOL.',
    '**Third generation** (mid-1960s to 1970s): **integrated circuits** put many transistors on one silicon chip. Keyboards and monitors replaced punched cards, and operating systems ran several programs at once. IBM’s System/360 (1964) is an example.',
    '**Fourth generation** (from 1971): the **microprocessor**, a whole processor on one chip (the Intel 4004 in 1971), and very large-scale integration (VLSI) led to personal computers, graphical interfaces, networks and the Internet. The **fifth generation** aims at **artificial intelligence**, natural language and massive **parallel processing**. For decades the number of transistors on a chip roughly doubled every two years (**Moore’s observation**).',
  ], 'ait-generations', 'Link each generation to its switching device: valve, transistor, integrated circuit, microprocessor, then AI.',
  ['Computers built with integrated circuits belong to the:', ['third generation', 'first generation', 'second generation', 'fifth generation'], 'Many transistors on one chip.'],
  [['Vacuum tube', 'A glass valve used as a switch in first-generation computers.'], ['Integrated circuit', 'Many transistors made together on one silicon chip.'], ['Microprocessor', 'A complete processor on a single chip.']],
  [
    { q: 'Put in order of generation: microprocessor, transistor, vacuum tube, integrated circuit.', steps: ['Vacuum tube (1st), transistor (2nd).', 'Integrated circuit (3rd), microprocessor (4th).', '**Vacuum tube, transistor, integrated circuit, microprocessor.**'] },
    { q: 'Compare a first-generation computer with a fourth-generation laptop.', steps: ['Size and power: a room and many kilowatts, against a bag and a few tens of watts.', 'Reliability and speed: frequent valve failures and thousands of operations a second, against years of use and billions a second.', '**Cost and use: only governments and large firms, against ordinary people.**'] },
  ]),

  L('ait-gen-2', 'ait-l6-evolution', '1.2', 'Future trends, device drivers and disk utilities', 17, ['Computing environments'], [
    '**Trends**: transistors now measured in nanometres (**nanotechnology**); **quantum computers** using **qubits**, which can hold a superposition of 0 and 1 and may solve some problems, such as simulating molecules, far faster, though they are still experimental; cloud and edge computing; the Internet of Things; chips designed for AI; and greener, lower-power computing.',
    '**Lab: drivers.** A **device driver** lets the operating system control a device. In Windows, **Device Manager** shows each device; a yellow warning sign means a missing or faulty driver. Update a driver from the maker’s website or Windows Update, and use **Roll Back Driver** if an update causes trouble. Create a **restore point** first.',
    '**Lab: disk utilities.** **Disk Cleanup** removes temporary files. **Defragment and Optimise Drives** rearranges a hard disk’s files into continuous blocks; on a solid-state drive it sends **TRIM** instead, because defragmenting an SSD only wears it. **Check disk** (chkdsk) finds and repairs file system errors. **Disk Management** creates and resizes partitions.',
    'Keep a written log of every change you make in the lab: what, why, and the result.',
  ], 'ait-disk-tools', 'Never defragment an SSD; let the system optimise it with TRIM.',
  ['A printer stopped working after a driver update. The quickest fix to try is:', ['Roll Back Driver in Device Manager', 'formatting the disk', 'defragmenting', 'replacing the printer'], 'Return to the driver that worked.'],
  [['Device driver', 'Software that lets the operating system control a hardware device.'], ['Defragmentation', 'Rearranging a hard disk’s file pieces into continuous blocks.'], ['Qubit', 'A quantum bit, which can be in a superposition of 0 and 1.']],
  [
    { q: 'A laptop with a hard disk is slow and the disk is 95 % full. What should be done, in order?', steps: ['Run Disk Cleanup and uninstall programs that are not used.', 'Move large files, such as videos, to external storage.', '**Then defragment the hard disk, and check it with chkdsk if errors appear.**'] },
    { q: 'Why is an SSD not defragmented?', steps: ['An SSD reaches every block equally fast, so file pieces do not slow it.', 'Each write wears its memory cells a little.', '**Defragmenting would wear it for no gain; TRIM keeps it fast instead.**'] },
  ]),

  // ---------- 2. Range ----------
  L('ait-range-1', 'ait-l6-range', '2.1', 'Supercomputers, mainframes, servers, microcomputers and embedded systems', 17, ['Computing environments'], [
    '**Supercomputers** are the fastest computers, with many thousands of processors working in parallel. Their speed is measured in **FLOPS** (floating-point operations per second): a petaflop is 10¹⁵ and an exaflop 10¹⁸. They model weather and climate, design medicines and simulate nuclear reactions.',
    '**Mainframes** handle huge numbers of transactions and users reliably, around the clock: banks, airlines, insurers and governments. Their strengths are reliability, security and input and output volume rather than raw calculation.',
    '**Minicomputers** (midrange computers) once served departments and smaller firms; today that role is filled by **servers** in racks in data centres, providing files, email, web pages and databases to many users.',
    '**Microcomputers** have a microprocessor as their CPU: desktops, laptops, tablets and smartphones. **Embedded controllers** are computers built into other devices to do one job, often in real time: the engine control unit of a car, a washing machine, a traffic light, a microwave oven or a lift.',
  ], 'ait-range', 'Supercomputer: calculation speed. Mainframe: volume and reliability. Embedded: one job inside a device.',
  ['The computer inside a washing machine is:', ['an embedded controller', 'a mainframe', 'a supercomputer', 'a server'], 'Dedicated to one job.'],
  [['Supercomputer', 'The fastest kind of computer, using many processors in parallel.'], ['Mainframe', 'A large, very reliable computer for huge volumes of transactions.'], ['Embedded controller', 'A computer built into a device to control it.']],
  [
    { q: 'Classify: (i) a mobile network’s billing system, (ii) a car’s anti-lock brakes, (iii) a climate model, (iv) a school’s file server.', steps: ['(i) Mainframe or large servers: huge transaction volumes.', '(ii) Embedded controller, working in real time. (iii) Supercomputer.', '**(iv) A server.**'] },
    { q: 'A machine runs at 1.2 exaflops. How long does a task of 3.6 × 10²⁰ operations take?', steps: ['1.2 exaflops = 1.2 × 10¹⁸ operations per second.', '3.6 × 10²⁰ ÷ 1.2 × 10¹⁸ = 300.', '**300 seconds, 5 minutes.**'] },
  ]),

  L('ait-range-2', 'ait-l6-range', '2.2', 'Measuring performance and finding bottlenecks', 17, ['Computing environments'], [
    'Performance depends on the **processor** (clock speed in GHz, number of cores, cache), the **memory** (size and speed of RAM), the **storage** (an SSD is many times faster than a hard disk) and the **network**. Processors are compared with benchmark scores, MIPS or FLOPS rather than clock speed alone.',
    'A **bottleneck** is the slowest part, which holds the whole system back. Upgrading anything else gives little benefit.',
    '**Lab: system profiling.** In Windows, **Task Manager** (Ctrl + Shift + Esc) shows CPU, memory, disk and network use in its Performance tab, and each program’s use in the Processes tab; **Resource Monitor** gives more detail and **System Information** (msinfo32) lists the hardware. In Linux, use System Monitor, top or htop.',
    'Reading the signs: CPU near 100 % for long periods means too much work for the processor; memory near 100 % with the disk busy means the computer is **paging**, so more RAM helps most; disk at 100 % on a hard disk suggests an SSD; a busy network suggests more bandwidth.',
  ], 'ait-bottleneck', 'Measure before you upgrade: the bottleneck tells you what to buy.',
  ['Memory use is 97 % and the disk is constantly busy. The best upgrade is:', ['more RAM', 'a faster network', 'a bigger monitor', 'a new mouse'], 'The system is swapping pages to disk.'],
  [['Bottleneck', 'The slowest component, which limits the whole system.'], ['Benchmark', 'A standard test used to compare performance.'], ['Task Manager', 'The Windows tool showing the use of CPU, memory, disk and network.']],
  [
    { q: 'Task Manager shows CPU 22 %, memory 96 %, disk 100 % (hard disk), network 1 %. Diagnose and advise.', steps: ['Memory is full, so pages are swapped to the slow hard disk, which is why the disk is at 100 %.', 'The CPU and network are not the problem.', '**Add RAM first; replacing the hard disk with an SSD would help further.**'] },
    { q: 'A video editor’s CPU is at 100 % during exports while memory is at 40 %. What helps?', steps: ['The processor is the bottleneck.', 'Memory and disk are not limiting.', '**A processor with more cores (or using the graphics card for encoding) speeds up exports.**'] },
  ]),

  // ---------- 3. Architecture ----------
  L('ait-arch-1', 'ait-l6-architecture', '3.1', 'The processor, the buses and the machine cycle', 17, ['Hardware'], [
    'The processor has a **control unit**, which directs every operation; an **arithmetic logic unit** (ALU), which calculates and compares; **registers**, very fast storage such as the program counter, the accumulator and the memory address and data registers; and a **clock** that times each step.',
    'Three **buses** join the processor and memory. The **data bus** carries data both ways; its width (such as 64 bits) sets how much moves at once. The **address bus** carries addresses one way; with n lines it can address 2ⁿ locations. The **control bus** carries read, write, clock and interrupt signals.',
    'Each instruction goes through the **machine cycle**: **fetch** the instruction from memory, **decode** it, **execute** it, and **store** (write back) the result.',
    'Speed depends on the clock rate (a 3 GHz clock ticks 3 × 10⁹ times a second), the number of **cores**, the word length and the **cache**.',
  ], 'acs-registers', 'Data bus: two-way. Address bus: one-way, and its width fixes how much memory can be addressed.',
  ['A 32-bit address bus can address:', ['2³² locations', '32 locations', '2¹⁶ locations', '64 locations'], 'Each extra line doubles it.'],
  [['Control unit', 'The part of the processor that directs the other parts.'], ['Address bus', 'The lines carrying memory addresses from the processor.'], ['Machine cycle', 'Fetch, decode, execute and store.']],
  [
    { q: 'How many locations can a 32-bit address bus address, and how much memory is that if each holds one byte?', steps: ['2³² = 4 294 967 296 locations.', '4 294 967 296 bytes = 4 GiB.', '**4 GiB**, which is why 32-bit systems could not use more RAM.'] },
    { q: 'How long is one clock cycle at 3 GHz?', steps: ['3 GHz = 3 × 10⁹ cycles per second.', '1 ÷ (3 × 10⁹) s.', '**About 0.33 nanoseconds.**'] },
  ]),

  L('ait-arch-2', 'ait-l6-architecture', '3.2', 'The memory hierarchy, cache and virtual memory', 18, ['Hardware'], [
    'The **memory hierarchy**, from fastest and smallest to slowest and largest: registers, **L1 cache** (in each core, tens of kilobytes), **L2 cache** (per core, up to a few megabytes), **L3 cache** (shared by the cores, several megabytes or more), **RAM** (gigabytes), then SSD and hard disk storage. Faster memory costs more per byte.',
    'The processor looks in the cache first. A **hit** finds the data there; a **miss** means a slower trip to RAM. Caches work because programs reuse recent data (temporal **locality**) and use data stored nearby (spatial locality). A simple estimate of the average access time is: hit rate × cache time + miss rate × RAM time.',
    '**Virtual memory** uses part of the disk (the page file, or swap in Linux) as an extension of RAM.',
    '**Lab:** in Windows, System Properties → Advanced → Performance Settings → Advanced → Virtual memory → Change. Usually leave "Automatically manage" ticked; a custom size is set in megabytes, preferably on the SSD, and needs a restart. In Linux, free -h and swapon --show display the swap space.',
  ], 'ait-cache', 'Every step down the hierarchy is bigger, slower and cheaper per byte.',
  ['With a 90 % hit rate, 2 ns cache and 60 ns RAM, the average access time is about:', ['7.8 ns', '2 ns', '60 ns', '31 ns'], '0.9 × 2 + 0.1 × 60.'],
  [['Cache', 'Small, fast memory holding data the processor is likely to need.'], ['Hit rate', 'The fraction of memory requests found in the cache.'], ['Page file', 'The disk space Windows uses as virtual memory.']],
  [
    { q: 'Cache 2 ns, RAM 60 ns. Find the average access time for hit rates of 90 % and 95 %.', steps: ['90 %: 0.9 × 2 + 0.1 × 60 = 1.8 + 6 = 7.8 ns.', '95 %: 0.95 × 2 + 0.05 × 60 = 1.9 + 3 = 4.9 ns.', '**A small rise in hit rate cuts the average time by over a third.**'] },
    { q: 'Why is all memory not made of cache?', steps: ['Cache memory (SRAM) costs far more per byte than RAM.', 'It takes more space on the chip and produces more heat.', '**A small cache with a high hit rate gives most of the speed at a fraction of the cost.**'] },
  ]),

  // ---------- 4. OS history ----------
  L('ait-osh-1', 'ait-l6-os-history', '4.1', 'From serial processing to mobile operating systems', 17, ['System software'], [
    'The first computers (1940s and early 1950s) had **no operating system**. Programmers booked the machine, loaded their program with switches, plugboards or punched cards, and waited; the machine stood idle between jobs. This was **serial processing**.',
    '**Simple batch systems** (1950s and 1960s) used a resident monitor to load and run jobs one after another from cards or tape, controlled by a job control language. There was no interaction with the user.',
    '**Multiprogramming** kept several jobs in memory, so the processor could run one while another waited for input or output. **Time-sharing** then gave many users at terminals short turns of processor time. UNIX was created at Bell Labs in 1969.',
    'Personal computers brought single-user systems: MS-DOS (1981) with typed commands, then **graphical user interfaces** with the Apple Macintosh (1984) and Microsoft Windows. Network and distributed systems linked computers; Linux appeared in 1991; and smartphones brought mobile systems: iOS (2007) and Android (2008).',
  ], 'ait-os-history', 'Each step in OS history was made to keep the expensive processor busier or to serve more users.',
  ['Multiprogramming keeps the processor busy by:', ['running another job while one waits for input or output', 'turning off between jobs', 'using punched cards', 'having no memory'], 'No idle waiting.'],
  [['Serial processing', 'Running one program at a time by hand, with no operating system.'], ['Batch system', 'An OS that runs queued jobs one after another without interaction.'], ['Time-sharing', 'Giving many users turns of processor time so each seems to have the computer.']],
  [
    { q: 'Why was batch processing an improvement on serial processing?', steps: ['Serial: the machine stood idle while each programmer set up their job.', 'Batch: the monitor loaded the next job at once.', '**Far less idle time, so many more jobs were run each day.**'] },
    { q: 'A job uses the processor for 20 ms, then waits 80 ms for the disk, again and again. How busy is the processor with one job, and with four such jobs in memory?', steps: ['One job: busy 20 ms in every 100 ms, so 20 %.', 'Four jobs: while one waits, others run, up to 4 × 20 ms = 80 ms in every 100 ms.', '**About 20 % rises to up to 80 %: the point of multiprogramming.**'] },
  ]),

  L('ait-osh-2', 'ait-l6-os-history', '4.2', 'The command line: shells and basic commands', 18, ['System software'], [
    'A **shell** is a program that reads typed commands. Windows has **Command Prompt** (cmd) and **PowerShell**; Linux and macOS have the terminal with bash or zsh; and Windows can run a Linux terminal through WSL.',
    'Common commands (Windows / Linux): list files **dir / ls**; change directory **cd**; make a directory **mkdir**; copy **copy / cp**; move or rename **move / mv**; delete **del / rm**; show a file **type / cat**; clear the screen **cls / clear**; get help **help / man**.',
    'A **path** gives a file’s location. An absolute path starts at the root (C:\\Users\\Ama or /home/ama); a relative path starts from the current directory. **..** means the parent directory and **.** the current one. A **wildcard** such as *.txt matches many files.',
    'Work carefully: files deleted at the command line do not go to the Recycle Bin. Commands can be saved in a **script** and run again exactly, which is why administrators use them.',
  ], 'ait-commands', 'Before rm or del, list the files with ls or dir using the same pattern, so you see what will go.',
  ['In the Linux terminal, cd .. moves to:', ['the parent directory', 'the root directory', 'the home directory', 'a new directory'], '.. is the parent.'],
  [['Shell', 'A program that reads and runs typed commands.'], ['Absolute path', 'A path from the root of the file system.'], ['Wildcard', 'A symbol such as * that matches many file names.']],
  [
    { q: 'Create a folder Project with sub-folders data and docs, in Linux.', steps: ['mkdir Project', 'cd Project', '**mkdir data docs**, then ls to check.'] },
    { q: 'Copy all text files from the current folder into backup, in Windows and in Linux.', steps: ['Windows: copy *.txt backup\\', 'Linux: cp *.txt backup/', '**The wildcard *.txt selects every file ending .txt.**'] },
    { q: 'From /home/ama/docs, where does cd ../pictures lead?', steps: ['.. goes up to /home/ama.', 'Then into pictures.', '**/home/ama/pictures.**'] },
  ]),

  // ---------- 5. OS types ----------
  L('ait-ost-1', 'ait-l6-os-types', '5.1', 'Batch, multi-access, real-time, transaction processing and distributed systems', 18, ['System software'], [
    '**Batch processing** collects jobs or transactions and runs them together, with no user interaction: payroll, electricity bills, examination results. It uses the computer efficiently but results come later.',
    '**Multi-access (time-sharing)** systems serve many users at once from terminals, giving each a time slice so that all get quick responses. A **multi-user** server OS such as Linux works this way.',
    '**Real-time** systems must respond within a guaranteed time. In a **hard** real-time system a late answer is a failure (airbags, pacemakers, flight controls); in a **soft** real-time system lateness only lowers quality (video streaming). **Online transaction processing** handles each transaction as it happens, with records locked so that two clerks cannot sell the same seat: ticket booking, ATMs, mobile money.',
    'A **network operating system** manages users, files and printers for a network from servers. A **distributed** system makes many networked computers act as one, sharing work and storage. Systems can also be single- or multi-user, single- or multi-tasking, embedded or mobile.',
  ], 'ait-os-types', 'Ask how fast an answer must come: later (batch), seconds (interactive) or guaranteed (real-time).',
  ['Booking bus seats online, where two people must never get the same seat, needs:', ['online transaction processing with record locking', 'batch processing', 'a games console', 'serial processing'], 'Each booking is handled at once.'],
  [['Batch processing', 'Processing a collection of jobs together without user interaction.'], ['Real-time system', 'A system that must respond within a guaranteed time.'], ['Distributed system', 'Many networked computers working as one system.']],
  [
    { q: 'Choose the OS type for: (i) processing GCE results, (ii) bus ticket booking, (iii) a car airbag, (iv) a university’s student server.', steps: ['(i) Batch: all scripts processed together. (ii) Online transaction processing.', '(iii) Hard real-time: a late airbag fails.', '**(iv) Multi-access, multi-user network OS.**'] },
    { q: 'Is a live football stream hard or soft real-time? Explain.', steps: ['Late frames make the picture stutter.', 'Nothing dangerous happens and the stream carries on.', '**Soft real-time.**'] },
  ]),

  L('ait-ost-2', 'ait-l6-os-types', '5.2', 'Lab: Linux file permissions with chmod and chown', 18, ['System software'], [
    'ls -l lists files with their permissions, such as -rwxr-x--- 1 ama staff 2048 report.sh. The first character is the type (- a file, d a directory). Then come three groups of three: the **owner** (user), the **group** and **others**.',
    'Each group shows **r** (read), **w** (write) and **x** (execute), or - when not allowed. As numbers, r = 4, w = 2 and x = 1, added for each group: 7 = rwx, 6 = rw-, 5 = r-x, 4 = r-- and 0 = ---. So 750 means rwxr-x---.',
    '**chmod** changes permissions: chmod 755 script.sh, or by letters: chmod u+x script.sh, chmod g-w notes.txt, chmod o-r marks.csv; chmod -R applies to a directory and all it contains. **chown** changes the owner and group: sudo chown ama:staff report.sh (it needs administrator rights).',
    'On a directory, r lets you list it, w lets you create and delete files in it, and x lets you enter it. Give each user only the rights they need: the **principle of least privilege**.',
  ], 'ait-permissions', 'Read permissions in threes: owner, group, others; add 4, 2 and 1.',
  ['chmod 640 marks.csv gives the group:', ['read only', 'read and write', 'nothing', 'read, write and execute'], '4 = r--.'],
  [['chmod', 'The Linux command that changes a file’s permissions.'], ['chown', 'The Linux command that changes a file’s owner and group.'], ['Least privilege', 'Giving each user only the access they need.']],
  [
    { q: 'Decode -rw-r--r-- and give it as a number.', steps: ['Owner rw- = 4 + 2 = 6.', 'Group r-- = 4; others r-- = 4.', '**644**: the owner can read and write, everyone else can only read.'] },
    { q: 'Make marks.csv readable and writable by its owner only.', steps: ['Owner rw- = 6; group and others --- = 0.', 'chmod 600 marks.csv', '**ls -l now shows -rw-------.**'] },
    { q: 'Give the folder /srv/site and everything in it to the user web and group web.', steps: ['Ownership needs chown, with administrator rights.', '-R applies it to everything inside.', '**sudo chown -R web:web /srv/site**'] },
  ]),

  // ---------- 6. OS management ----------
  L('ait-osm-1', 'ait-l6-os-management', '6.1', 'Processes, scheduling and the Task Manager lab', 18, ['System software'], [
    'A **process** is a program being run. The operating system keeps a **process control block** for each: its ID, state, saved registers, priority and memory. A process moves between the states **new**, **ready**, **running**, **blocked** (waiting for an event, such as input) and **terminated**.',
    'The **scheduler** chooses which ready process runs next: first come first served, shortest job first, **round robin** (equal time slices in turn) or **priority**. Its aims are to keep the processor busy, finish many jobs, respond quickly and be fair. Switching between processes means saving one’s registers and loading another’s: a **context switch**, triggered by timer interrupts.',
    '**Lab:** Task Manager’s Processes and Details tabs show each process’s CPU and memory use; a frozen program can be closed with **End task**, and a priority changed from Details. In Linux, System Monitor, ps, top and kill do the same.',
    'Ending system processes can crash the computer: end only programs you recognise.',
  ], 'ait-process-states', 'A process that is waiting for something is blocked, not ready.',
  ['A process that could run but is waiting for its turn is:', ['ready', 'blocked', 'terminated', 'new'], 'Blocked means waiting for an event.'],
  [['Process', 'A program being run, with its own state and memory.'], ['Context switch', 'Saving one process’s state and loading another’s.'], ['Round robin', 'Giving each ready process an equal time slice in turn.']],
  [
    { q: 'P1 (5 ms), P2 (3 ms) and P3 (1 ms) arrive at time 0. Schedule them by round robin with a 2 ms time slice and find the average waiting time.', steps: ['P1 0–2, P2 2–4, P3 4–5 (done), P1 5–7, P2 7–8 (done), P1 8–9 (done).', 'Waiting = finish − run time: P1 9 − 5 = 4, P2 8 − 3 = 5, P3 5 − 1 = 4.', '**Average 13 ÷ 3 ≈ 4.33 ms.**'] },
    { q: 'A browser uses 95 % of the CPU and does not respond. What do you do in the lab?', steps: ['Open Task Manager with Ctrl + Shift + Esc.', 'Select the browser in Processes and choose End task.', '**If it happens again, check its extensions and update it.**'] },
  ]),

  L('ait-osm-2', 'ait-l6-os-management', '6.2', 'Memory management, page replacement and deadlock', 18, ['System software'], [
    'Memory is shared by **paging**: programs are split into pages placed in any free frames, and **virtual memory** keeps pages not in use on disk. When a program needs a page that is not in RAM, a **page fault** occurs and the page is loaded; if RAM is full, another page must be removed.',
    '**Page replacement algorithms**: **FIFO** removes the page loaded longest ago; **LRU** (least recently used) removes the page not used for the longest time; **optimal** removes the page that will not be needed for the longest time, which needs knowledge of the future and so serves as a benchmark.',
    'If memory is too small for the running programs, pages are swapped constantly and little work is done: **thrashing**.',
    '**Deadlock** needs mutual exclusion, hold and wait, no pre-emption and circular wait together. Operating systems **prevent** it (for example by fixing the order in which resources are requested), **avoid** it (granting a request only if the system stays in a safe state), or **detect** it and recover by stopping a process.',
  ], 'ait-page-replacement', 'Trace page replacement with a column per reference and mark each fault with F.',
  ['LRU removes the page that:', ['has not been used for the longest time', 'was loaded first', 'is used most', 'is newest'], 'Least recently used.'],
  [['Page fault', 'A request for a page that is not in main memory.'], ['LRU', 'Least recently used: the page replacement that removes the page unused for longest.'], ['Thrashing', 'Swapping pages so often that little useful work is done.']],
  [
    { q: 'With 3 frames, count the page faults for 7, 0, 1, 2, 0, 3, 0, 4 using FIFO.', steps: ['7, 0, 1 fill the frames: 3 faults. 2 replaces 7: fault. 0 is there: hit.', '3 replaces 0 (the oldest): fault. 0 replaces 1: fault. 4 replaces 2: fault.', '**7 faults.**'] },
    { q: 'Repeat with LRU.', steps: ['7, 0, 1: 3 faults. 2 replaces 7: fault. 0: hit.', '3 replaces 1 (least recently used): fault. 0: hit. 4 replaces 2: fault.', '**6 faults**, one fewer than FIFO.'] },
  ]),

  // ---------- 7. Media ----------
  L('ait-med-1', 'ait-l6-media', '7.1', 'Twisted pair, coaxial, fibre-optic and microwave links', 18, ['Networks'], [
    'Media are compared by **bandwidth** (bits per second), **attenuation** (loss over distance), resistance to **interference**, security and cost.',
    '**Twisted pair**: **UTP** (unshielded) is cheap and used in most LANs; Cat 5e carries 1 Gbit/s and Cat 6 up to 10 Gbit/s over short runs, with segments of up to 100 m. **STP** (shielded) resists electrical noise near motors and power cables. **Coaxial** cable has a copper core, insulation and a braided shield: used for cable television, CCTV and older networks.',
    '**Fibre optic** carries light. **Multi-mode** fibre suits shorter runs inside buildings and campuses; **single-mode** fibre, driven by lasers, carries data tens of kilometres. Fibre is immune to electrical interference, hard to tap and light, but costly to join.',
    '**Terrestrial microwave** links send data between dishes on towers in line of sight, typically tens of kilometres apart, where cables are hard to lay. **Satellite** links reach remote places, but signals to a geostationary satellite, about 35 786 km up, take about a quarter of a second to go up and down again.',
  ], 'acs-media', 'Long distance or electrical noise: fibre. Cheap and short: UTP. No cables possible: microwave or satellite.',
  ['The medium immune to electrical interference is:', ['fibre-optic cable', 'UTP', 'coaxial cable', 'STP'], 'It carries light.'],
  [['UTP', 'Unshielded twisted pair, the usual LAN cable.'], ['Single-mode fibre', 'Narrow-core fibre driven by lasers, for long distances.'], ['Latency', 'The delay before data arrives.']],
  [
    { q: 'Choose media for: (i) classroom PCs, (ii) two school buildings 400 m apart, (iii) a rural health centre far from any cable.', steps: ['(i) UTP Cat 6 to a switch.', '(ii) Fibre: copper runs are limited to 100 m.', '**(iii) A satellite link, or a microwave link to the nearest town if there is line of sight.**'] },
    { q: 'Estimate the delay for a signal going up to a geostationary satellite and back down.', steps: ['Distance about 2 × 35 786 km ≈ 71 600 km.', 'Radio travels at about 300 000 km/s: 71 600 ÷ 300 000 ≈ 0.24 s.', '**About a quarter of a second each way, noticeable in video calls.**'] },
  ]),

  L('ait-med-2', 'ait-l6-media', '7.2', 'Lab: making straight-through and crossover cables', 18, ['Networks'], [
    'You need Cat 5e or Cat 6 cable, RJ45 plugs (and boots), a crimping tool, a stripper and a cable tester.',
    'The **T568B** order, looking at the plug with the clip underneath and the pins towards you, from pin 1: white-orange, orange, white-green, blue, white-blue, green, white-brown, brown. **T568A** swaps the orange and green pairs: white-green, green, white-orange, blue, white-blue, orange, white-brown, brown.',
    'Steps: strip about 2 to 3 cm of the outer jacket; untwist the pairs and lay them in order; flatten and trim them straight to about 1.3 cm; push them into the plug until every wire reaches the end, with the jacket inside the plug; crimp firmly; repeat at the other end; then test.',
    'A **straight-through** cable has the same standard at both ends and joins a PC to a switch or a switch to a router. A **crossover** cable has T568A at one end and T568B at the other and was used to join two PCs or two switches directly. Most modern ports detect the cable type automatically (auto-MDI/MDIX), so straight-through cables now work almost everywhere.',
  ], 'ait-t568', 'Trim the wires straight and push until you can see every copper end at the front of the plug.',
  ['A cable with T568B at both ends is:', ['straight-through', 'crossover', 'rollover', 'coaxial'], 'The same at both ends.'],
  [['RJ45', 'The eight-pin connector used on Ethernet cables.'], ['Crimping', 'Pressing a plug onto a cable so its pins cut into the wires.'], ['Crossover cable', 'A cable with T568A at one end and T568B at the other.']],
  [
    { q: 'The tester lights 1 to 3, 2 to 6, 3 to 1 and 6 to 2, the rest straight. What cable is it?', steps: ['Pins 1 and 3 and pins 2 and 6 are swapped.', 'That is the orange and green pairs exchanged.', '**A crossover cable: T568A at one end, T568B at the other.**'] },
    { q: 'Pin 4 does not light on the tester. What is wrong and what do you do?', steps: ['The blue wire is not making contact, probably not pushed fully into the plug.', 'A plug cannot be crimped twice reliably.', '**Cut it off, strip again and fit a new plug, then retest.**'] },
  ]),

  // ---------- 8. Topologies ----------
  L('ait-top-1', 'ait-l6-topologies', '8.1', 'Peer-to-peer and client–server networks and topologies', 17, ['Networks'], [
    'In a **peer-to-peer** network every computer is equal and shares its own files and printers. It is cheap and simple for a few computers, but security, backups and management are left to each user.',
    'In a **client–server** network, **servers** provide services (files, printing, email, web, databases, logins) and **clients** use them. Management, security and backups are central, so it suits schools and businesses, but it costs more and the servers must not fail.',
    'Topologies: **star** (each device cabled to a central switch), **bus** (one shared backbone with terminators), **ring** (data passed round), **mesh** (several paths; n(n − 1)/2 links for a full mesh), **tree** (stars joined in a hierarchy) and **hybrid** (a mix, such as stars in each building joined by a fibre backbone).',
    'The choice depends on the number of users, cost, how reliable it must be and who will manage it.',
  ], 'network-topologies', 'Peer-to-peer for a handful of computers; client–server once security and backups matter.',
  ['A school with 400 students and shared files should use:', ['a client–server network', 'peer-to-peer', 'no network', 'a bus with no switch'], 'Central accounts and backups.'],
  [['Peer-to-peer', 'A network of equal computers that share their own resources.'], ['Client–server', 'A network where servers provide services to clients.'], ['Hybrid topology', 'A network combining two or more topologies.']],
  [
    { q: 'Recommend a network model for (i) a cyber café with 4 PCs and one printer, (ii) a school with three computer rooms.', steps: ['(i) Peer-to-peer: few machines and little to manage.', '(ii) Client–server: student logins, shared folders, central backups and filtering.', '**Size and the need for central control decide.**'] },
    { q: 'Four sites are joined by a full mesh. How many links, and what happens if one fails?', steps: ['4 × 3 ÷ 2 = 6 links.', 'Each pair has a direct link and other routes through the remaining sites.', '**6 links; traffic simply takes another path.**'] },
  ]),

  L('ait-top-2', 'ait-l6-topologies', '8.2', 'Lab: setting up a LAN through a switch', 18, ['Networks'], [
    'Connect each PC to the **switch** with straight-through cables; the port lights show a link.',
    'Give each PC an address on the same network, either automatically from a router’s DHCP or by hand: PC1 192.168.10.11, PC2 192.168.10.12 and so on, mask 255.255.255.0, gateway 192.168.10.1 if there is a router. In Windows: Settings → Network → Ethernet → IP assignment → Manual.',
    'Test with ipconfig to check each address, then **ping** the other PCs. The firewall may block ping replies; allow "File and Printer Sharing (Echo Request)" in the lab. **Share a folder** with read or change permission for the right users, and open it from another PC as \\\\PC1\\Shared.',
    'Troubleshooting order: link lights and cables, IP addresses and masks on the same network, duplicate addresses, then the firewall.',
  ], 'ait-lan', 'If ping fails, check in this order: cable, address, mask, firewall.',
  ['PC1 is 192.168.10.11/24 and PC2 is 192.168.20.12/24, both on one switch. Ping between them:', ['fails, because they are on different networks', 'works', 'works only once', 'needs a crossover cable'], 'A router would be needed.'],
  [['Static address', 'An IP address typed in by hand.'], ['ping', 'A tool that sends echo requests to test whether a host can be reached.'], ['Shared folder', 'A folder made available to other users on the network.']],
  [
    { q: 'Plan the addresses for 5 lab PCs on 192.168.10.0/24 with the router at .1.', steps: ['PCs 192.168.10.11 to 192.168.10.15.', 'Mask 255.255.255.0, gateway 192.168.10.1, DNS 192.168.10.1 or the ISP’s server.', '**Record the plan on the network map handed in at the end of the term.**'] },
    { q: 'Ping says "Request timed out" but the link lights are on and the addresses are correct. What next?', steps: ['The cable and addresses are fine, so the replies are being blocked.', 'Check the other PC’s firewall for echo requests.', '**Allow ICMP echo for the lab network and try again.**'] },
  ]),

  // ---------- 9. IP and network tools ----------
  L('ait-ip-1', 'ait-l6-ip', '9.1', 'IP addresses, subnet masks, DHCP and the default gateway', 18, ['Networks'], [
    'An **IPv4 address** has 32 bits, written as four numbers from 0 to 255. The **subnet mask** shows which bits are the network part: 255.255.255.0, or /24, means 24 network bits. The network address has all host bits 0 and the broadcast address all host bits 1; there are 2ʰ − 2 usable hosts for h host bits.',
    'Private ranges (10.x.x.x, 172.16.x.x to 172.31.x.x and 192.168.x.x) are used inside organisations and reach the Internet through NAT. IPv6 uses 128-bit addresses.',
    '**DHCP** gives each device an address, mask, gateway and DNS server for a **lease**; a client usually renews when half the lease has passed. A device that gets no answer gives itself an address starting 169.254: a sign that DHCP failed.',
    'To send a packet, a host ANDs the destination with its mask: if the network part matches its own, it delivers directly; otherwise it sends the packet to its **default gateway**, the router.',
  ], 'acs-subnet', 'Write the splitting byte in binary: the network address and broadcast follow at once.',
  ['A /26 mask is:', ['255.255.255.192', '255.255.255.0', '255.255.255.224', '255.255.0.0'], '11000000 = 192.'],
  [['Subnet mask', 'The bits that mark the network part of an address.'], ['DHCP lease', 'The period for which a device may use an address it was given.'], ['Default gateway', 'The router a host uses for other networks.']],
  [
    { q: 'For 172.16.5.70/26, give the network address, broadcast address and host range.', steps: ['/26 makes blocks of 64 in the last byte; 70 lies in 64 to 127.', 'Network 172.16.5.64; broadcast 172.16.5.127.', '**Hosts 172.16.5.65 to 172.16.5.126 (62 hosts).**'] },
    { q: 'A host at 192.168.1.20/25 sends to 192.168.1.130. Direct or through the gateway?', steps: ['/25 splits the last byte into 0 to 127 and 128 to 255.', '20 and 130 are in different halves.', '**Different networks: the packet goes to the default gateway.**'] },
  ]),

  L('ait-ip-2', 'ait-l6-ip', '9.2', 'DNS records and network utilities', 18, ['Networks'], [
    '**DNS records** for a domain: **A** (name → IPv4 address), **AAAA** (name → IPv6), **CNAME** (an alias for another name), **MX** (the mail servers, with priorities), **NS** (the domain’s name servers), **TXT** (text, for example to prove ownership) and **PTR** (address → name). Each has a **TTL** saying how long it may be cached.',
    '**ipconfig** (Windows) shows the address, mask and gateway; ipconfig /all adds the MAC address, DHCP and DNS servers; ipconfig /release and /renew get a new lease; ipconfig /flushdns clears the DNS cache. In Linux use ip addr and ip route.',
    '**ping** sends echo requests and reports the round-trip time and any loss. **tracert** (traceroute in Linux) lists every router on the way, with times. **nslookup** (or dig) asks DNS for a name’s records.',
    'Fault-finding order: check your own address with ipconfig, ping the gateway, ping an Internet address such as 8.8.8.8, ping a name, then tracert to see where packets stop.',
  ], 'ait-net-tools', 'If an IP address answers but a name does not, the fault is DNS.',
  ['ping 8.8.8.8 works but ping www.example.cm fails. The problem is most likely:', ['DNS', 'the cable', 'the switch', 'the network card'], 'Addresses work; names do not.'],
  [['A record', 'A DNS record giving a name’s IPv4 address.'], ['MX record', 'A DNS record naming a domain’s mail servers.'], ['tracert', 'A tool that lists the routers a packet passes through.']],
  [
    { q: 'Write DNS records for a school: website at 203.0.113.10, webmail as another name for the website, mail server mail.school.cm.', steps: ['www A 203.0.113.10', 'webmail CNAME www.school.cm', '**school.cm MX 10 mail.school.cm, and mail A pointing at the mail server’s address.**'] },
    { q: 'tracert shows replies from hops 1 to 3 and then only * * *. What does it tell you?', steps: ['The first three routers, including your own, are working.', 'Packets are lost after hop 3, outside the school network.', '**Report it to the Internet provider, giving the tracert output.**'] },
  ]),
];
