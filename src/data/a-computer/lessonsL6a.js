// A Level Computer Science lessons (0795), Lower Sixth, Term 1: data
// representation, processor architecture, operating systems, networks and
// security. Original text written for this app.

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

export const LESSONS_CL6A = [
  // ---------- 1. Data representation ----------
  L('acs-rep-1', 'acs-l6-datarep', '1.1', 'Two’s complement: signed integers, subtraction and overflow', 18, ['Data representation'], [
    'In **two’s complement** the most significant bit has a negative place value. In 8 bits the place values are −128, 64, 32, 16, 8, 4, 2 and 1, so the range is **−128 to +127**. Positive numbers start with 0 and negative numbers with 1.',
    'To find −x, write x in binary, **invert every bit and add 1**. 6 = 00000110; inverted 11111001; plus 1 gives 11111010 = −6. Check: −128 + 64 + 32 + 16 + 8 + 2 = −6.',
    '**Subtraction** is addition of the negative: 9 − 6 = 00001001 + 11111010 = (1)00000011. The carry out of the top bit is discarded, leaving 3.',
    '**Overflow** happens when the true result is outside the range: two positives that add to a negative, or two negatives to a positive. 01100100 (100) + 00110010 (50) = 10010110, which reads −106. The processor sets an overflow flag in its status register. **Sign and magnitude** (a sign bit and the size) is easier to read but has two zeros and needs separate circuits to subtract, so processors use two’s complement.',
  ], 'acs-twos-complement', 'Check every two’s complement answer by adding up the place values, with −128 for the top bit.',
  ['In 8-bit two’s complement, 11111010 is:', ['−6', '250', '−122', '6'], '−128 + 64 + 32 + 16 + 8 + 2.'],
  [['Two’s complement', 'A way of storing signed integers in which the top bit has a negative place value.'], ['Overflow', 'A result too large or too small for the number of bits available.'], ['Sign and magnitude', 'A sign bit followed by the size of the number.']],
  [
    { q: 'Convert −45 to 8-bit two’s complement.', steps: ['45 = 00101101.', 'Invert: 11010010; add 1: 11010011.', '**11010011**. Check: −128 + 64 + 16 + 2 + 1 = −45.'] },
    { q: 'Work out 00110101 − 01001000 in two’s complement and give the answer in denary.', steps: ['00110101 = 53 and 01001000 = 72; −72 is 10110111 + 1 = 10111000.', '00110101 + 10111000 = 11101101.', '11101101 = −128 + 64 + 32 + 8 + 4 + 1 = **−19**, which is 53 − 72.'] },
    { q: 'Explain what happens when 01110000 and 00100000 are added in 8-bit two’s complement.', steps: ['They are 112 and 32; the true sum, 144, is above +127.', 'The bits give 10010000, which reads −112.', '**Overflow**: two positives have given a negative, so the overflow flag is set.'] },
  ]),

  L('acs-rep-2', 'acs-l6-datarep', '1.2', 'Floating-point numbers: mantissa, exponent and normalisation', 18, ['Data representation'], [
    'A **floating-point** number is stored as a **mantissa** and an **exponent**, both in two’s complement: value = mantissa × 2^exponent. The mantissa is a binary fraction with the binary point after its first (sign) bit: 0.1011000 means ½ + ⅛ + 1/16 = 0.6875.',
    'With an 8-bit mantissa and a 4-bit exponent, mantissa 0.1011000 and exponent 0011 (3) give 0.1011000 × 2³ = 101.1 = 5.5: moving the point three places right.',
    '**Normalisation** gives the most precision: a positive mantissa must start 0.1 and a negative one 1.0. To normalise, shift the mantissa left until it does, and reduce the exponent by the number of places shifted.',
    '**Range and precision**: more exponent bits give a greater range; more mantissa bits give more precision. Some values, such as 0.1, cannot be stored exactly in binary, so small rounding errors appear; a program should never test two floating-point values for exact equality.',
  ], 'acs-float', 'Normalised: positive mantissas start 0.1, negative ones 1.0. Each place you shift left lowers the exponent by 1.',
  ['With an 8-bit mantissa 0.1011000 and exponent 0011, the value is:', ['5.5', '0.6875', '11', '2.75'], '0.1011 × 2³ = 101.1.'],
  [['Mantissa', 'The fractional part of a floating-point number, holding its significant digits.'], ['Exponent', 'The power of 2 by which the mantissa is multiplied.'], ['Normalisation', 'Shifting the mantissa so that it starts 0.1 (or 1.0), for the greatest precision.']],
  [
    { q: 'Mantissa 0.1101000 and exponent 0010 (8-bit mantissa, 4-bit exponent). Find the denary value.', steps: ['0.1101000 = ½ + ¼ + 1/16 = 0.8125.', 'Exponent 0010 = 2, so multiply by 2² = 4.', '**3.25** (0.1101 × 2² = 11.01).'] },
    { q: 'Write 6.75 in normalised form with an 8-bit mantissa and a 4-bit exponent.', steps: ['6.75 = 110.11 in binary.', 'Move the point three places left: 0.11011 × 2³.', '**Mantissa 0.1101100, exponent 0011**.'] },
    { q: 'Normalise the mantissa 0.0011010 with exponent 0101.', steps: ['Shift the mantissa two places left: 0.1101000.', 'Lower the exponent by 2: 5 − 2 = 3, that is 0011.', '**0.1101000 with exponent 0011**: both are 6.5.'] },
  ]),

  L('acs-rep-3', 'acs-l6-datarep', '1.3', 'Detecting errors: parity, checksums and check digits', 16, ['Data representation'], [
    'Data can be corrupted in transmission, for example by electrical interference. With **parity**, an extra bit is added so that the number of 1s is even (**even parity**) or odd (**odd parity**). The receiver counts the 1s; the wrong count shows an error. One parity bit detects an odd number of changed bits, but not two, and cannot say which bit changed.',
    'A **parity block** sends several bytes, each with its parity bit, followed by a parity byte for each bit position. A single wrong bit lies where the failing row and the failing column cross, so it can even be corrected.',
    'A **checksum**: the sender adds up the bytes of a block (for example modulo 256) and sends the total; the receiver recalculates it and asks for the block again if the two differ. A **check digit** is calculated from the other digits of a code typed by people (ISBNs, bar codes): ISBN-13 weights the digits 1, 3, 1, 3, …, and the check digit makes the weighted sum a multiple of 10.',
    'Other methods: an **echo check** (the receiver sends the data back to be compared), **ARQ**, automatic repeat request (acknowledgements and time-outs, with data re-sent when it is not acknowledged), and the cyclic redundancy check (CRC) used in networks.',
  ], 'acs-parity', 'Parity finds single-bit errors, check digits find typing errors, and ARQ re-sends data that fails a check.',
  ['Using odd parity, the seven bits 1000001 get the parity bit:', ['1', '0', '2', 'it depends on the sender'], 'They have two 1s; one more makes three.'],
  [['Parity bit', 'An extra bit that makes the number of 1s even or odd.'], ['Checksum', 'A value calculated from a block of data and sent with it.'], ['Check digit', 'A digit calculated from the others in a code, to catch typing errors.']],
  [
    { q: 'Using even parity, give the parity bit for 1101001, and say what the receiver concludes if 11010011 arrives.', steps: ['1101001 has four 1s, already even, so the parity bit is 0: 11010010 is sent.', '11010011 has five 1s, which is odd.', '**An error is detected**, and the byte is sent again.'] },
    { q: 'Find the ISBN-13 check digit for 978-0-306-40615-?', steps: ['Weighted sum: 9×1 + 7×3 + 8×1 + 0×3 + 3×1 + 0×3 + 6×1 + 4×3 + 0×1 + 6×3 + 1×1 + 5×3 = 93.', 'The next multiple of 10 is 100.', '**Check digit 7**.'] },
  ]),

  // ---------- 2. Processor architecture ----------
  L('acs-cpu-1', 'acs-l6-processor', '2.1', 'Registers, buses and the fetch–decode–execute cycle', 18, ['Architecture'], [
    'In the **von Neumann architecture**, instructions and data share one memory and one set of buses. The processor has a control unit, an arithmetic logic unit (ALU) and **registers**: the program counter (**PC**), memory address register (**MAR**), memory data register (**MDR**), current instruction register (**CIR**), the accumulator (**ACC**) and the status register with its flags.',
    'Three **buses** link the processor and memory: the **address bus**, one-way, carries addresses from the MAR; the **data bus**, two-way, carries data to and from the MDR; the **control bus** carries the read, write, clock and interrupt signals.',
    'The **fetch–decode–execute cycle** in register transfer notation: MAR ← [PC]; PC ← [PC] + 1; MDR ← [[MAR]]; CIR ← [MDR]. The control unit then decodes the instruction in the CIR and executes it, for example ACC ← [ACC] + [[address]].',
    'Performance depends on the **clock speed**, the number of **cores**, the size of the **cache**, and the widths of the buses: a 32-bit address bus can address 2³² locations.',
  ], 'acs-registers', 'Learn the fetch as four register transfers: MAR ← PC, PC ← PC + 1, MDR ← memory, CIR ← MDR.',
  ['Which bus is two-way?', ['the data bus', 'the address bus', 'neither', 'both'], 'Data is read and written; addresses only go out.'],
  [['Register', 'A very fast storage location inside the processor.'], ['Bus', 'A set of parallel wires carrying addresses, data or control signals.'], ['Fetch–decode–execute cycle', 'The repeated steps by which the processor runs each instruction.']],
  [
    { q: 'Describe, with register transfers, the fetch of the instruction stored at address 120.', steps: ['MAR ← 120, copied from the PC; then PC ← 121.', 'MDR ← the contents of location 120, read along the data bus.', '**CIR ← MDR**: the instruction is ready to be decoded.'] },
    { q: 'How many memory locations can a 24-bit address bus address?', steps: ['Each extra bit doubles the number of addresses.', '2²⁴ = 16 777 216.', '**16 777 216 locations** (16 Mi).'] },
  ]),

  L('acs-cpu-2', 'acs-l6-processor', '2.2', 'Assembly language and addressing modes', 18, ['Architecture'], [
    'Each processor has an **instruction set**. A machine-code instruction has an **opcode** (what to do) and an **operand** (what to do it to). **Assembly language** writes them as mnemonics, and an **assembler** translates them one for one.',
    'A simple instruction set, as used in examinations: LDA x (load the accumulator), STA x (store it), ADD x, SUB x, INP and OUT, BRA x (branch always), BRZ x (branch if zero), BRP x (branch if zero or positive) and HLT (halt). Labels name addresses so that branches are easy to write.',
    '**Addressing modes** say how the operand is used. **Immediate**: the operand is the value itself (LDA #5 loads 5). **Direct**: the operand is the address of the value (LDA 20 loads the contents of 20). **Indirect**: the operand is an address that holds the address of the value. **Indexed**: the address is the operand plus an index register, used to step through an array.',
    'Assembly gives complete control and very compact, fast code, which is why it is used for device drivers and small embedded systems; but it is tied to one processor family and slow to write and debug.',
  ], 'acs-addressing', 'Immediate: the number itself. Direct: look in that address. Indirect: look in that address for another address.',
  ['LDA #30 loads into the accumulator:', ['the number 30', 'the contents of address 30', 'the contents of the address held in 30', 'nothing'], 'The # marks immediate addressing.'],
  [['Opcode', 'The part of an instruction that says which operation to perform.'], ['Operand', 'The part of an instruction that gives the data or its address.'], ['Addressing mode', 'The way the operand is used to find the data.']],
  [
    { q: 'Write assembly code that inputs two numbers and outputs the larger.', steps: ['INP, STA A, INP, STA B: store the two numbers.', 'SUB A leaves B − A in the accumulator; BRP BIG jumps if it is zero or positive, that is if B ≥ A.', 'Otherwise LDA A, OUT, HLT; at BIG: LDA B, OUT, HLT. **The larger number is output.**'] },
    { q: 'Location 30 holds 50 and location 50 holds 7. What is in the accumulator after an immediate, a direct and an indirect load using 30?', steps: ['Immediate: the value 30 itself.', 'Direct: the contents of 30, which is 50.', 'Indirect: 30 holds 50, and location 50 holds 7. **30, 50 and 7.**'] },
  ]),

  L('acs-cpu-3', 'acs-l6-processor', '2.3', 'Pipelining and processor performance', 16, ['Architecture'], [
    'Without pipelining, a processor finishes one instruction before fetching the next. In a **pipeline**, while one instruction is being executed the next is decoded and the one after that is fetched, so several instructions are in progress at once.',
    'With k stages of one clock cycle each, n instructions take **n + k − 1** cycles in a full pipeline instead of kn: nearly k times as fast for long runs of instructions.',
    '**Hazards** interrupt the flow: a **control hazard** when a branch changes the PC, so the instructions already started must be flushed; a **data hazard** when an instruction needs a result not yet produced; a **structural hazard** when two stages need the same hardware. Branch prediction and forwarding results directly between stages reduce the delays.',
    'Other features: **multiple cores** run separate instruction streams in parallel; **cache** keeps recently used data close to the processor; **RISC** processors have simple instructions that pipeline well, while **CISC** processors have complex instructions that each do more.',
  ], 'acs-pipeline', 'A k-stage pipeline finishes n instructions in n + k − 1 cycles if nothing stalls it.',
  ['With a 3-stage pipeline and no hazards, 10 instructions take:', ['12 cycles', '30 cycles', '10 cycles', '13 cycles'], 'n + k − 1 = 10 + 2.'],
  [['Pipeline', 'Overlapping the stages of successive instructions.'], ['Hazard', 'A situation that stops the next instruction entering the pipeline on time.'], ['Multi-core processor', 'A processor with several cores that run instructions in parallel.']],
  [
    { q: 'How many clock cycles do 10 instructions take with and without a 3-stage pipeline?', steps: ['Without: 3 cycles each, 30 cycles.', 'With: the first takes 3 cycles and each of the other 9 finishes one cycle later.', '**12 cycles**, against 30.'] },
    { q: 'In a 3-stage pipeline, instruction 4 is a branch, taken to instruction 9. What happens?', steps: ['Instruction 4 is executed in cycle 6, while instruction 5 is being decoded and instruction 6 fetched.', 'Those two are the wrong instructions, so they are flushed.', '**Fetching restarts at instruction 9, and two cycles are lost.**'] },
  ]),

  // ---------- 3. Memory and scheduling ----------
  L('acs-os-1', 'acs-l6-memory-scheduling', '3.1', 'Memory management: paging, segmentation and virtual memory', 18, ['Operating systems'], [
    'The operating system shares main memory between programs and keeps each out of the others’ space. **Paging** divides memory into fixed-size **frames** and each program into **pages** of the same size; any page can go into any free frame, and a **page table** maps page numbers to frame numbers.',
    'A logical address is a page number and an **offset**; the physical address is the frame number × the page size + the offset. With 4 KB (4096-byte) pages, logical address 9000 is in page 2 (8192 to 12 287) at offset 808.',
    '**Segmentation** divides a program into logical **segments** of different sizes (code, data, stack). It follows the program’s structure but leaves gaps of free memory between segments (**external fragmentation**); paging wastes only part of each program’s last page (**internal fragmentation**).',
    '**Virtual memory** uses part of the disk as an extension of RAM: pages not needed now are swapped out. More, or larger, programs can then run than RAM alone allows, but the disk is far slower, and if pages are swapped constantly the computer **thrashes**.',
  ], 'acs-paging', 'Split the logical address into page and offset first: the offset never changes.',
  ['With 4 KB pages, logical address 9000 lies in page:', ['2', '1', '3', '9'], '8192 ≤ 9000 < 12 288.'],
  [['Page and frame', 'Equal-sized blocks of a program and of physical memory.'], ['Segment', 'A logical block of a program, of any size.'], ['Virtual memory', 'Disk space used as an extension of main memory.']],
  [
    { q: 'Pages are 4 KB (4096 bytes); the page table maps page 0 → frame 3, page 1 → frame 7, page 2 → frame 5. Find the physical address of logical address 9000.', steps: ['9000 ÷ 4096: page 2, offset 9000 − 8192 = 808.', 'Page 2 is in frame 5, which starts at 5 × 4096 = 20 480.', '**Physical address 20 480 + 808 = 21 288**.'] },
    { q: 'A program of 10 500 bytes is loaded with 4 KB pages. How many pages does it need, and how much memory is wasted?', steps: ['10 500 ÷ 4096 = 2.56, so 3 pages are needed.', '3 × 4096 = 12 288 bytes are allocated.', '**3 pages; 1788 bytes are wasted** in the last page (internal fragmentation).'] },
  ]),

  L('acs-os-2', 'acs-l6-memory-scheduling', '3.2', 'Processor scheduling', 18, ['Operating systems'], [
    'In a multitasking system the **scheduler** decides which ready process uses the processor next. Processes move between the states **ready**, **running** and **blocked** (waiting for input or output).',
    '**First come, first served** (FCFS) runs processes in order of arrival: simple, but a long job holds up short ones. **Round robin** (RR) gives each process a fixed **time slice**, or quantum, in turn, then sends it to the back of the queue: fair and responsive.',
    '**Shortest job first** (SJF) runs the waiting process with the shortest burst time. It gives the lowest average waiting time, but needs the burst times and can **starve** long jobs. **Priority** scheduling runs the highest-priority process first; **ageing**, raising the priority of processes that have waited long, prevents starvation.',
    'Schedules are compared with a **Gantt chart** and the **average waiting time**, the time each process spends in the ready queue.',
  ], 'acs-scheduling', 'Draw the Gantt chart first; a process’s waiting time is its finishing time minus its arrival time and its burst time.',
  ['Which method gives each process a fixed time slice in turn?', ['round robin', 'first come, first served', 'shortest job first', 'priority'], 'Then it goes to the back of the queue.'],
  [['Scheduler', 'The part of the operating system that chooses the next process to run.'], ['Time slice', 'The fixed period a process may run under round robin.'], ['Starvation', 'A process waiting indefinitely because others keep going first.']],
  [
    { q: 'P1 (8 ms), P2 (4 ms) and P3 (2 ms) all arrive at time 0, in that order. Find the average waiting time under FCFS and under SJF.', steps: ['FCFS: P1, P2, P3 wait 0, 8 and 12 ms: average 20 ÷ 3 ≈ 6.67 ms.', 'SJF: P3, P2, P1 wait 0, 2 and 6 ms: average 8 ÷ 3 ≈ 2.67 ms.', '**FCFS 6.67 ms; SJF 2.67 ms.**'] },
    { q: 'Schedule the same processes by round robin with a 3 ms quantum.', steps: ['P1 0–3, P2 3–6, P3 6–8 (finished), P1 8–11, P2 11–12 (finished), P1 12–14 (finished).', 'Waiting = finish − burst: P1 14 − 8 = 6, P2 12 − 4 = 8, P3 8 − 2 = 6.', '**P3 finishes at 8 ms, P2 at 12 ms, P1 at 14 ms; average wait 6.67 ms.**'] },
  ]),

  // ---------- 4. Interrupts and files ----------
  L('acs-os-3', 'acs-l6-interrupts-files', '4.1', 'Interrupts and interrupt service routines', 16, ['Operating systems'], [
    'An **interrupt** is a signal to the processor that a device or a program needs attention: a key press, a printer out of paper, a timer marking the end of a time slice, or a program error such as division by zero.',
    'At the end of each fetch–execute cycle the processor checks for interrupts. If one is waiting with a higher priority than the current task, it **saves its registers on a stack**, finds the address of the right **interrupt service routine** (ISR) in the interrupt vector table, and runs it.',
    'When the ISR finishes, the saved registers are restored from the stack and the interrupted program carries on exactly where it stopped. A higher-priority interrupt may interrupt an ISR, which is why a stack, last in first out, is used.',
    'Interrupts avoid **polling** (asking each device again and again whether it needs attention), which wastes processor time.',
  ], 'acs-interrupt', 'Interrupt order: finish the current cycle, save the registers on the stack, run the ISR, restore the registers, carry on.',
  ['Interrupts are better than polling because:', ['the processor does not waste time repeatedly checking devices', 'they use no memory', 'devices never need attention', 'they are slower'], 'Devices signal only when they need attention.'],
  [['Interrupt', 'A signal that makes the processor stop and deal with an event.'], ['Interrupt service routine', 'The program that handles one kind of interrupt.'], ['Polling', 'Checking each device in turn to see whether it needs attention.']],
  [
    { q: 'A user presses a key while a program is calculating. Describe what happens.', steps: ['The keyboard sends an interrupt signal on the control bus; the processor finishes its current cycle and finds the interrupt waiting.', 'It saves the PC and the other registers on the stack and loads the keyboard ISR, which puts the key into the keyboard buffer.', '**The registers are restored from the stack and the calculation carries on where it stopped.**'] },
    { q: 'During the keyboard ISR, a power-failure interrupt arrives. What happens?', steps: ['Power failure has a higher priority, so the keyboard ISR is itself interrupted: its registers are pushed onto the stack.', 'The power-failure ISR runs, saving work before the power goes.', '**If the power holds, the keyboard ISR is resumed from the stack, and then the original program.**'] },
  ]),

  L('acs-os-4', 'acs-l6-interrupts-files', '4.2', 'Concurrency, deadlock and file systems', 18, ['Operating systems'], [
    'When processes run **concurrently** and share data, the result can depend on their timing: a **race condition**. If two cashiers both read a balance of 50 000 FCFA and each adds a deposit of 10 000 FCFA, both write 60 000 and one deposit is lost. A **lock** (mutual exclusion) lets only one process use the shared data at a time.',
    '**Deadlock** happens when processes each hold a resource and wait for one held by another. It needs four conditions together: **mutual exclusion**, **hold and wait**, **no pre-emption** and **circular wait**. Remove any one, for example by always requesting resources in a fixed order, and deadlock cannot occur.',
    'A **file system** organises the clusters (blocks) of a disk into files and folders. **FAT** (File Allocation Table) has one entry per cluster, giving the next cluster of the file or an end-of-file marker; the folder entry gives each file’s first cluster. FAT32 is simple and readable by almost every device, so it is used on memory cards and flash drives, but it limits files to 4 GB and has no permissions.',
    '**NTFS** (Windows) and **ext4** (Linux) add **journaling**, which records each change before making it so the disk can be repaired after a power cut, access **permissions** for users and groups, and support for very large files and disks.',
  ], 'acs-deadlock', 'Deadlock needs all four conditions at once: breaking any one prevents it.',
  ['Two cashiers each add 10 000 FCFA to a balance of 50 000 FCFA at the same moment, and it ends at 60 000. This is:', ['a race condition', 'deadlock', 'thrashing', 'overflow'], 'One update overwrote the other.'],
  [['Race condition', 'An error that depends on the timing of processes sharing data.'], ['Deadlock', 'Processes each waiting for a resource another holds, so none can continue.'], ['Journaling', 'Recording changes before making them, so a file system can recover after a crash.']],
  [
    { q: 'Process A holds the printer and wants the scanner; process B holds the scanner and wants the printer. Explain the deadlock and one way to prevent it.', steps: ['Each holds one resource and waits for the other’s: a circular wait, so neither can continue.', 'If every process must request the printer before the scanner, B would ask for the printer first and wait without holding the scanner.', '**Requesting resources in a fixed order removes circular wait, so deadlock cannot happen.**'] },
    { q: 'A file starts at cluster 4. The FAT has 4 → 7, 7 → 5 and 5 → end of file. Which clusters hold the file, in order?', steps: ['Start at cluster 4; its entry says 7.', 'Cluster 7’s entry says 5; cluster 5’s entry marks the end.', '**Clusters 4, 7 and 5.**'] },
  ]),

  // ---------- 5. Network models ----------
  L('acs-net-1', 'acs-l6-network-models', '5.1', 'The OSI and TCP/IP models', 17, ['Networks'], [
    'Networks are described in **layers**, each with its own job and its own protocols, so any layer can change without affecting the others. The **OSI reference model** has seven: physical, data link, network, transport, session, presentation and application.',
    'The **TCP/IP suite** used on the Internet has four: **link** (network access: Ethernet, Wi-Fi, MAC addresses), **internet** (IP addressing and routing), **transport** (TCP or UDP, port numbers) and **application** (HTTP, DNS, SMTP and others). The OSI session and presentation jobs are done within the TCP/IP application layer.',
    '**Encapsulation**: going down the layers, each adds a header. Application data becomes a TCP segment (ports, sequence numbers), then an IP packet (IP addresses), then a frame (MAC addresses and an error check). The receiver removes them in reverse order.',
    '**TCP** sets up a connection with a three-way handshake, numbers the segments, acknowledges them and re-sends any that are lost: reliable, for web pages and email. **UDP** sends datagrams with no connection or acknowledgement: quicker, for live voice and video and for DNS queries.',
  ], 'osi-tcpip', 'Remember TCP/IP from the top: application, transport, internet, link.',
  ['In TCP/IP, port numbers belong to the:', ['transport layer', 'internet layer', 'link layer', 'application layer'], 'They pick out the program on the host.'],
  [['Protocol', 'A set of rules for communication.'], ['Encapsulation', 'Each layer wrapping the data from the layer above in its own header.'], ['Three-way handshake', 'The exchange that sets up a TCP connection.']],
  [
    { q: 'Name the TCP/IP layer that deals with: (i) choosing a route, (ii) port numbers, (iii) MAC addresses, (iv) HTTP.', steps: ['Routes and IP addresses: the internet layer.', 'Ports: the transport layer; MAC addresses: the link layer.', '**(i) internet, (ii) transport, (iii) link, (iv) application.**'] },
    { q: 'Why does a video call use UDP rather than TCP?', steps: ['A late packet of speech or picture is useless once the moment has passed.', 'TCP would hold up the stream while it re-sent lost segments.', '**UDP keeps the call smooth; losing an occasional packet barely shows.**'] },
  ]),

  L('acs-net-2', 'acs-l6-network-models', '5.2', 'Transmission media', 16, ['Networks'], [
    '**Twisted-pair** copper cable (such as Cat 6) is cheap and easy to fit; twisting the pairs reduces interference. It is used in most local networks, for runs of up to about 100 m. **Coaxial** cable has a central core and a metal shield, and carries cable television and some older networks.',
    '**Fibre-optic** cable carries pulses of light through glass by total internal reflection. It has a very high bandwidth and low **attenuation** over long distances, and is not affected by electrical interference, but costs more and is harder to join. Undersea fibre-optic cables landing on Cameroon’s coast link the country to the rest of the world.',
    '**Wireless** links use radio (Wi-Fi in the 2.4 GHz and 5 GHz bands, mobile 4G and 5G), microwave links between towers, or satellites. They need no cables and let users move, but are slower, open to interference and easier to intercept, so they must be encrypted (WPA2 or WPA3).',
    'Choosing a medium means comparing **bandwidth** (bits per second), the **distance** before the signal must be boosted, **cost**, **security** and **interference**.',
  ], 'acs-media', 'Bandwidth is in bits per second: multiply bytes by 8 before dividing.',
  ['Which medium has the lowest attenuation over long distances?', ['fibre-optic cable', 'twisted pair', 'Wi-Fi', 'coaxial cable'], 'Light in glass travels far before it needs boosting.'],
  [['Bandwidth', 'The amount of data a link can carry per second.'], ['Attenuation', 'The weakening of a signal with distance.'], ['Interference', 'Unwanted signals that corrupt the data on a link.']],
  [
    { q: 'Recommend a medium for: (i) a school computer laboratory, (ii) a link between two campuses 5 km apart, (iii) a staff room where people bring laptops.', steps: ['(i) Twisted-pair cable: cheap, fast enough, short runs.', '(ii) Fibre-optic cable: long distance with no loss of speed (or a microwave link if cables cannot be laid).', '**(iii) Wi-Fi with WPA2 or WPA3 encryption**, so people can move around.'] },
    { q: 'How long does a 4 GB file take on a 100 Mbit/s link, ignoring overheads?', steps: ['4 GB ≈ 4 × 10⁹ bytes = 32 × 10⁹ bits.', '32 × 10⁹ ÷ 100 × 10⁶ = 320 s.', '**About 320 seconds, over 5 minutes.**'] },
  ]),

  // ---------- 6. IP addressing ----------
  L('acs-net-3', 'acs-l6-ip', '6.1', 'IPv4 addressing and subnetting', 18, ['Networks'], [
    'An **IPv4 address** is 32 bits, written as four bytes in denary: 192.168.10.37. A **subnet mask** marks the **network** bits (1s) and the **host** bits (0s): 255.255.255.0, written **/24** in CIDR notation, means 24 network bits.',
    'The **network address** is the address AND the mask (all host bits 0). The **broadcast address** has all host bits 1. The usable host addresses lie between them, so there are **2ʰ − 2** for h host bits.',
    '**Subnetting** borrows host bits to make several smaller networks. 192.168.10.0/24 split into four /26 subnets gives 192.168.10.0, .64, .128 and .192, each with 62 hosts.',
    'In the old **classful** scheme, class A (first bit 0) used /8, class B (first bits 10) /16 and class C (first bits 110) /24. CIDR replaced it so networks can be any size.',
  ], 'acs-subnet', 'Work in the byte the mask splits: the block size is 256 minus that byte of the mask.',
  ['For 192.168.10.37/26, the broadcast address is:', ['192.168.10.63', '192.168.10.255', '192.168.10.64', '192.168.10.127'], 'Blocks of 64: from 0 to 63.'],
  [['Subnet mask', 'The bits that mark the network part of an address.'], ['CIDR notation', 'Writing the mask as the number of network bits, such as /24.'], ['Broadcast address', 'The address with all host bits 1, which reaches every host on the network.']],
  [
    { q: 'For 192.168.10.37/26, find the network address, the broadcast address and the range of host addresses.', steps: ['/26 is 255.255.255.192, so the last byte goes in blocks of 64.', '37 lies in the block 0 to 63.', '**Network 192.168.10.0, broadcast 192.168.10.63, hosts .1 to .62.**'] },
    { q: 'A school needs 5 subnets of at least 25 hosts each from 172.16.4.0/24. Choose the mask.', steps: ['25 hosts need 5 host bits (2⁵ − 2 = 30).', 'That leaves 27 network bits: 8 subnets of 30 hosts.', '**/27, that is 255.255.255.224**, with subnets .0, .32, .64, ….'] },
    { q: 'Are 172.16.4.70 and 172.16.4.90 in the same /27 subnet?', steps: ['/27 makes blocks of 32: 64 to 95 is one block.', 'Both 70 and 90 lie between 64 and 95.', '**Yes: both are in 172.16.4.64/27.**'] },
  ]),

  L('acs-net-4', 'acs-l6-ip', '6.2', 'Private addresses, NAT, routing and IPv6', 16, ['Networks'], [
    'Some address ranges are **private**, used inside homes, schools and businesses and never routed on the Internet: 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16.',
    '**NAT** (network address translation) in the router replaces the private source address of each outgoing packet with the router’s single public address, and keeps a table so that replies return to the right device. NAT saves public IPv4 addresses and hides the inside network.',
    'A **router** joins networks. It reads each packet’s destination address and uses its **routing table** to choose the next hop; routers exchange route information with routing protocols. A device’s **default gateway** is the router it uses for destinations outside its own network.',
    '**IPv6** uses 128-bit addresses written as eight groups of four hexadecimal digits, such as 2001:0db8:0000:0000:0000:ff00:0042:8329, shortened to 2001:db8::ff00:42:8329. With about 3.4 × 10³⁸ addresses every device can have its own; IPv4 and IPv6 run side by side while the world changes over.',
  ], 'acs-nat', 'In IPv6, :: may replace only one run of zero groups in an address.',
  ['Which of these ranges is private?', ['192.168.0.0/16', '8.8.0.0/16', '41.0.0.0/8', '102.0.0.0/8'], 'Never routed on the Internet.'],
  [['Private address', 'An address used only inside a local network.'], ['NAT', 'Network address translation: sharing one public address among many private ones.'], ['Default gateway', 'The router a device uses for destinations outside its network.']],
  [
    { q: 'A phone at 192.168.1.20 requests a web page through a router whose public address is 203.0.113.5. Explain the part played by NAT.', steps: ['The phone sends a packet from 192.168.1.20, port 50000.', 'The router rewrites the source as 203.0.113.5, port 62001, and records the pair in its NAT table.', '**The reply comes to 203.0.113.5:62001; the router looks it up and forwards it to 192.168.1.20:50000.**'] },
    { q: 'Shorten the IPv6 address 2001:0db8:0000:0000:0000:ff00:0042:8329.', steps: ['Drop the leading zeros in each group: 2001:db8:0:0:0:ff00:42:8329.', 'Replace the one run of zero groups with ::.', '**2001:db8::ff00:42:8329**.'] },
  ]),

  // ---------- 7. Protocols ----------
  L('acs-net-5', 'acs-l6-protocols', '7.1', 'DNS and DHCP', 17, ['Networks'], [
    'People use names such as www.example.cm; computers need IP addresses. The **Domain Name System** is a worldwide hierarchy of servers: the **root** servers, the **top-level domain** servers (.cm, .com, .org) and the **authoritative** servers of each domain.',
    'To **resolve** a name, a device asks its local DNS resolver. If the answer is not cached, the resolver asks a root server (which points to the .cm servers), then a .cm server (which points to the domain’s own server), then the authoritative server, which gives the IP address. The answer is cached for a time, its **TTL**, so later requests are quick.',
    '**DHCP** gives a device joining a network its IP address, subnet mask, default gateway and DNS server automatically, for a limited **lease**. It takes four messages: **Discover** (broadcast: is there a DHCP server?), **Offer**, **Request** and **Acknowledge**: DORA.',
    'Servers and network printers usually keep **static** addresses, set by hand or reserved in DHCP, so other devices can always find them.',
  ], 'acs-dns', 'DORA: Discover, Offer, Request, Acknowledge.',
  ['A device sends its DHCP Discover message as:', ['a broadcast, since it does not yet know the server', 'a private message to the router', 'an email', 'a DNS query'], 'It has no address yet.'],
  [['Domain Name System', 'The worldwide system that turns names into IP addresses.'], ['Resolver', 'The DNS server a device asks first, which finds the answer for it.'], ['DHCP lease', 'An address lent to a device for a limited time.']],
  [
    { q: 'Describe how a laptop new to a school’s Wi-Fi gets an IP address.', steps: ['Discover: the laptop broadcasts a request for a DHCP server.', 'Offer: the server offers an address and settings; Request: the laptop asks to take it.', '**Acknowledge: the server confirms the lease, and the laptop uses the address, mask, gateway and DNS server.**'] },
    { q: 'Describe how the name www.example.cm is resolved when nothing is cached.', steps: ['The laptop asks its resolver, which asks a root server and is sent to the .cm servers.', 'A .cm server sends it to the authoritative server for example.cm.', '**That server gives the IP address; the resolver caches it and passes it back.**'] },
  ]),

  L('acs-net-6', 'acs-l6-protocols', '7.2', 'Application protocols and ports', 16, ['Networks'], [
    'Each application protocol has a standard **port number**, so the transport layer can hand data to the right program. An IP address with a port, such as 203.0.113.5:443, is a **socket**.',
    '**HTTP** (port 80) fetches web pages with requests such as GET and POST; **HTTPS** (port 443) does the same inside an encrypted **TLS** connection, shown by the padlock in the browser.',
    'Email: **SMTP** (port 25, or 587 from a mail program) sends mail to and between servers; **POP3** (110) downloads mail and usually removes it from the server; **IMAP** (143) keeps mail on the server and keeps every device in step.',
    '**FTP** (ports 20 and 21) transfers files but sends passwords as plain text; **SSH** (port 22) gives encrypted remote login and command-line control of servers, and SFTP sends files over it.',
  ], 'acs-ports', 'Ports to know: 20/21 FTP, 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 110 POP3, 143 IMAP, 443 HTTPS.',
  ['HTTPS normally uses port:', ['443', '80', '22', '25'], 'HTTP uses 80.'],
  [['Port number', 'A number that identifies a program or service on a host.'], ['Socket', 'An IP address together with a port number.'], ['TLS', 'Transport Layer Security, which encrypts HTTPS and other connections.']],
  [
    { q: 'A student reads email on a phone and a laptop and wants both to show the same folders. Which protocol should be used, and why?', steps: ['POP3 downloads mail to one device and usually removes it from the server.', 'IMAP keeps the mail and folders on the server.', '**IMAP**, so every device shows the same mailbox.'] },
    { q: 'Explain what happens when https://www.example.cm/results is entered in a browser.', steps: ['DNS turns www.example.cm into an IP address; the browser opens a TCP connection to port 443.', 'A TLS handshake checks the server’s certificate and agrees a session key.', '**The browser sends GET /results inside the encrypted connection and the page comes back encrypted.**'] },
  ]),

  // ---------- 8. Cryptography ----------
  L('acs-sec-1', 'acs-l6-crypto', '8.1', 'Symmetric and asymmetric encryption', 18, ['Security'], [
    '**Encryption** turns plaintext into ciphertext using an algorithm and a **key**; only someone with the right key can turn it back. A Caesar cipher (shift each letter k places) shows the idea, but is broken by trying all 25 shifts.',
    '**Symmetric** encryption uses one shared secret key for both. **DES** (a 56-bit key) is now too weak; **AES** (128, 192 or 256-bit keys) is the modern standard. It is fast, so it encrypts bulk data, but the key must reach the other side secretly.',
    '**Asymmetric** (public-key) encryption uses a **key pair**: a **public key** anyone may have and a **private key** kept secret. Data encrypted with a person’s public key can be decrypted only with their private key. It solves the key-sharing problem but is much slower.',
    'In practice the two are combined: HTTPS uses asymmetric encryption to agree a fresh symmetric **session key**, then AES for the data itself.',
  ], 'acs-rsa', 'Secrecy: encrypt with the receiver’s public key. Proof of sender: sign with the sender’s private key.',
  ['To send Amadou a secret file, Brenda encrypts it with:', ['Amadou’s public key', 'Amadou’s private key', 'her own private key', 'her own public key'], 'Only Amadou’s private key can then decrypt it.'],
  [['Plaintext and ciphertext', 'The readable message and its encrypted form.'], ['Symmetric encryption', 'Encryption with one shared key for both directions.'], ['Public and private keys', 'The two keys of a pair in asymmetric encryption.']],
  [
    { q: 'Encrypt CODE with a Caesar shift of 3 and explain why this cipher is weak.', steps: ['C → F, O → R, D → G, E → H.', 'There are only 25 possible shifts to try, and letter frequencies give it away.', '**FRGH: easily broken.**'] },
    { q: 'Brenda wants to send Amadou a confidential file. Which keys are used?', steps: ['Brenda encrypts the file with Amadou’s public key, which anyone may have.', 'Only the matching private key can decrypt it.', '**Amadou decrypts it with his private key**, which never leaves him.'] },
    { q: 'How long would trying every DES key take at 10¹² keys per second? And every AES-128 key?', steps: ['DES: 2⁵⁶ ≈ 7.2 × 10¹⁶ keys, about 7.2 × 10⁴ s, roughly 20 hours.', 'AES-128: 2¹²⁸ ≈ 3.4 × 10³⁸ keys, about 3.4 × 10²⁶ s.', '**About 20 hours for DES, but about 10¹⁹ years for AES-128.**'] },
  ]),

  L('acs-sec-2', 'acs-l6-crypto', '8.2', 'RSA, hashing, digital signatures and certificates', 18, ['Security'], [
    '**RSA** builds a key pair from two large primes p and q: n = pq, φ = (p − 1)(q − 1), a public exponent e with no common factor with φ, and a private exponent d with ed ≡ 1 (mod φ). Encrypt: c = mᵉ mod n; decrypt: m = cᵈ mod n. It is safe because finding p and q from n is extremely hard when n has hundreds of digits.',
    'A **hash function** (such as SHA-256) turns any message into a fixed-length digest. A tiny change in the message changes the digest completely, and the message cannot be recovered from it. Passwords are stored as hashes, with a random salt, never as plain text.',
    'A **digital signature**: the sender hashes the message and encrypts the hash with their **private key**. The receiver decrypts it with the sender’s **public key** and compares it with their own hash of the message. A match proves who sent it (**authentication**) and that it was not changed (**integrity**), and the sender cannot deny sending it (**non-repudiation**).',
    'A **digital certificate**, issued by a **certificate authority**, binds a public key to its owner, so you know the key really belongs to that bank or website. In Cameroon, ANTIC acts as the root certification authority.',
  ], 'acs-signature', 'A signature uses the sender’s private key to sign and the sender’s public key to check.',
  ['With p = 5, q = 11 and e = 3, the private exponent d is:', ['27', '3', '40', '13'], '3 × 27 = 81 = 2 × 40 + 1.'],
  [['Hash', 'A fixed-length digest of a message, from which the message cannot be recovered.'], ['Digital signature', 'A hash encrypted with the sender’s private key.'], ['Certificate authority', 'A trusted body that issues certificates linking public keys to their owners.']],
  [
    { q: 'Toy RSA: p = 5, q = 11, e = 3. Find n, φ and d, encrypt m = 9 and decrypt the result.', steps: ['n = 55, φ = 40, and d = 27 since 3 × 27 = 81 ≡ 1 (mod 40).', 'c = 9³ mod 55 = 729 mod 55 = 14.', '14²⁷ mod 55: 14² ≡ 31, 14⁴ ≡ 26, 14⁸ ≡ 16, 14¹⁶ ≡ 36, and 36 × 16 × 31 × 14 ≡ 9. **c = 14, which decrypts to 9.**'] },
    { q: 'A bank signs a message to a customer. Describe how it is signed and checked.', steps: ['The bank hashes the message and encrypts the hash with its private key: the signature.', 'The customer decrypts the signature with the bank’s public key (from its certificate) and hashes the message itself.', '**If the two hashes match, the message came from the bank and was not changed.**'] },
  ]),

  // ---------- 9. Network security ----------
  L('acs-sec-3', 'acs-l6-threats', '9.1', 'Firewalls, attacks and intrusion detection', 17, ['Security'], [
    'A **firewall** stands between a network and the outside and applies rules. A **packet-filtering** firewall checks each packet’s source and destination addresses, ports and protocol: fast, but it cannot tell whether a packet belongs to a real conversation. A **stateful** firewall also tracks each connection, letting in replies to requests made from inside and blocking unrequested packets.',
    'A **proxy server** makes requests on behalf of clients: the outside world sees only the proxy, which can filter websites, scan downloads and cache popular pages.',
    'Attacks: **denial of service** (DoS) floods a server with requests; **distributed** DoS uses thousands of infected computers, a **botnet**. **Malware** includes viruses, worms, trojans, spyware and ransomware. **Phishing** and other **social engineering** trick people rather than machines; **SQL injection** puts database commands into input boxes.',
    '**Intrusion detection systems** (IDS) watch traffic for the signatures of known attacks or for unusual behaviour and raise alerts; intrusion prevention systems (IPS) also block it. **Defence in depth** combines firewalls, updates, antivirus, strong authentication, backups and user training.',
  ], 'acs-firewall', 'Firewall rules are checked in order; end with a rule that blocks everything not allowed.',
  ['A stateful firewall lets a packet in when:', ['it belongs to a connection started from inside', 'its port is above 1000', 'it is large', 'it arrives at night'], 'It keeps a table of connections.'],
  [['Firewall', 'Hardware or software that filters traffic between networks by rules.'], ['Botnet', 'Many infected computers controlled together by an attacker.'], ['Intrusion detection system', 'A system that watches traffic and warns of attacks.']],
  [
    { q: 'A school’s web server should accept web traffic from outside but no remote logins. Write the firewall rules.', steps: ['Allow TCP to the server on ports 443 (and 80).', 'Deny TCP to port 22 from outside.', '**End with a rule that denies everything else.**'] },
    { q: 'How does a stateful firewall treat a reply from a website a student asked for, and an unrequested packet to the same port?', steps: ['The reply matches a connection the student opened, recorded in the state table.', 'The unrequested packet matches no connection.', '**The reply is allowed in; the unrequested packet is dropped.**'] },
  ]),

  L('acs-sec-4', 'acs-l6-threats', '9.2', 'Security policy and the law in Cameroon', 16, ['Security'], [
    'A **security policy** sets an organisation’s rules: who may reach which data, password rules, backups (for example daily, with a copy kept off site), updates, acceptable use and what to do after an incident. Authentication can use passwords, one-time codes sent by SMS, or biometrics; two of them together (**two-factor authentication**) is much stronger.',
    '**Law No. 2010/012 of 21 December 2010** on cybersecurity and cybercriminality punishes illegal access to computer systems, intercepting or damaging data, online fraud and spreading false information. **Law No. 2010/013** governs electronic communications.',
    '**Law No. 2024/017 of 23 December 2024** protects personal data: it must be collected for a stated purpose, with consent, kept secure and for no longer than needed, and people may see and correct their data.',
    '**ANTIC**, the National Agency for Information and Communication Technologies, regulates electronic security, audits systems, responds to incidents and is the **root certification authority**. **ART** regulates telecommunications operators, and **MINPOSTEL** sets the government’s ICT policy.',
  ], 'cyber-laws', 'Three laws: 2010/012 cybercrime, 2024/017 personal data, 2000/011 copyright.',
  ['Which body regulates electronic security and is the root certification authority in Cameroon?', ['ANTIC', 'ART', 'MINPOSTEL', 'MINESEC'], 'The National Agency for ICT.'],
  [['Security policy', 'An organisation’s written rules for protecting its systems and data.'], ['Two-factor authentication', 'Proving identity with two different kinds of evidence.'], ['Personal data', 'Information about an identifiable person.']],
  [
    { q: 'A school stores students’ names, dates of birth and parents’ phone numbers. Give three of its duties under Law No. 2024/017.', steps: ['Collect the data only for a stated purpose, such as contacting parents, with consent.', 'Keep it secure: passwords, access levels, encrypted backups.', '**Keep it no longer than needed, and let families see and correct it.**'] },
    { q: 'A student logs into a teacher’s account without permission and changes marks. Which law is broken, and how could the school prevent it?', steps: ['Illegal access and altering data are offences under Law No. 2010/012.', 'Strong passwords and two-factor authentication stop a guessed password being enough.', '**Also give each user only the access they need, and keep logs of who changes marks.**'] },
  ]),
];
