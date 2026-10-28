// Extra questions for the end of the A Level Computer Science lessons (0795),
// so that every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_B } from './lessonQuestionsB';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, Term 1 ----------
  'acs-rep-1': [
    Q('In 8-bit two’s complement, −1 is written:', ['11111111', '10000001', '00000001', '01111111'], 'Invert 00000001 to 11111110 and add 1.'),
    Q('The largest positive number in 8-bit two’s complement is:', ['127', '128', '255', '256'], '01111111.'),
    Q('Adding two negative numbers gives a positive result in 8 bits. This shows:', ['overflow', 'a carry that can be ignored', 'a correct answer', 'underflow of a stack'], 'The true result is below −128.'),
    Q('A weakness of sign and magnitude is that:', ['it has two forms of zero', 'it cannot store negatives', 'it uses 16 bits', 'it is the same as two’s complement'], '00000000 and 10000000.'),
  ],
  'acs-rep-2': [
    Q('Giving the exponent more bits, with the same total, gives:', ['a greater range but less precision', 'more precision', 'a smaller range', 'no change'], 'Fewer bits remain for the mantissa.'),
    Q('A normalised positive mantissa begins:', ['0.1', '1.0', '0.0', '1.1'], 'No wasted leading zeros.'),
    Q('Shifting a mantissa two places left to normalise it means the exponent must:', ['decrease by 2', 'increase by 2', 'stay the same', 'double'], 'The value must not change.'),
    Q('0.1 cannot be stored exactly in binary floating point, so programs should:', ['not test two real numbers for exact equality', 'never use real numbers', 'store it as text', 'use more exponent bits'], 'Compare within a small tolerance.'),
  ],
  'acs-rep-3': [
    Q('A single parity bit cannot detect:', ['two bits changed in the same byte', 'one bit changed', 'any error', 'a byte with odd parity'], 'Two changes keep the count’s parity.'),
    Q('A parity block can correct a single error because:', ['the wrong bit lies where the failing row and column cross', 'it re-sends every byte', 'it uses a check digit', 'it encrypts the data'], 'Row and column parity locate it.'),
    Q('An ISBN-13 check digit makes the weighted sum, with weights 1 and 3, a multiple of:', ['10', '11', '13', '2'], 'Weights alternate 1, 3, 1, 3.'),
    Q('In ARQ, data is re-sent when:', ['no acknowledgement arrives before the time-out', 'the receiver is busy', 'the sender is idle', 'the parity is even'], 'Automatic repeat request.'),
  ],
  'acs-cpu-1': [
    Q('The address bus carries addresses:', ['from the processor to memory only', 'in both directions', 'from memory to the processor only', 'to the keyboard'], 'It is one-way.'),
    Q('The first step of the fetch is:', ['MAR ← [PC]', 'CIR ← [MDR]', 'PC ← [PC] + 1', 'MDR ← [[MAR]]'], 'The address of the next instruction goes to the MAR.'),
    Q('The current instruction register holds:', ['the instruction being decoded and executed', 'the next address', 'the result of the ALU', 'the stack pointer'], 'Copied from the MDR.'),
    Q('Read, write and clock signals travel on the:', ['control bus', 'data bus', 'address bus', 'USB bus'], 'It carries timing and control signals.'),
  ],
  'acs-cpu-2': [
    Q('LDA 20 with direct addressing loads:', ['the contents of address 20', 'the number 20', 'the address held in 20', 'address 21'], 'The operand is the address.'),
    Q('Indexed addressing adds the operand to:', ['the index register', 'the program counter', 'the accumulator', 'the stack'], 'Used to step through arrays.'),
    Q('BRZ LOOP jumps to LOOP when:', ['the accumulator is zero', 'the accumulator is positive', 'always', 'the input is empty'], 'Branch if zero.'),
    Q('An assembler translates:', ['assembly language into machine code, one for one', 'a high-level program line by line', 'machine code into Python', 'source code into bytecode'], 'Each mnemonic becomes one instruction.'),
  ],
  'acs-cpu-3': [
    Q('With a 4-stage pipeline and no hazards, 20 instructions take:', ['23 cycles', '80 cycles', '20 cycles', '24 cycles'], 'n + k − 1 = 20 + 3.'),
    Q('A branch that is taken causes a:', ['control hazard', 'data hazard', 'structural hazard', 'overflow'], 'The instructions already started are wrong.'),
    Q('An instruction needing a result not yet calculated causes a:', ['data hazard', 'control hazard', 'structural hazard', 'cache miss only'], 'It must wait or be forwarded.'),
    Q('RISC processors are suited to pipelining because:', ['their instructions are simple and take similar times', 'they have no registers', 'they are always slower', 'they have no clock'], 'Even stages keep the pipeline full.'),
  ],
  'acs-os-1': [
    Q('A page table maps:', ['page numbers to frame numbers', 'files to folders', 'processes to users', 'ports to programs'], 'Logical to physical memory.'),
    Q('With 4096-byte pages, logical address 5000 has offset:', ['904', '5000', '1', '4096'], '5000 − 4096.'),
    Q('Thrashing happens when:', ['pages are swapped between RAM and disk so often that little work gets done', 'the disk is full', 'the cache is empty', 'a program ends'], 'Too little RAM for the programs running.'),
    Q('Segmentation can leave gaps of unused memory between segments, called:', ['external fragmentation', 'internal fragmentation', 'virtual memory', 'paging'], 'Segments differ in size.'),
  ],
  'acs-os-2': [
    Q('A process waiting for a disk read is in the state:', ['blocked', 'running', 'ready', 'finished'], 'It cannot use the processor yet.'),
    Q('Shortest job first gives the lowest average waiting time but can cause:', ['starvation of long jobs', 'deadlock', 'overflow', 'thrashing'], 'Short jobs keep going first.'),
    Q('Ageing prevents starvation by:', ['raising the priority of processes that have waited long', 'stopping old processes', 'reducing the time slice', 'deleting files'], 'Eventually they run.'),
    Q('Round robin suits interactive systems because:', ['every process gets a turn quickly', 'long jobs finish first', 'no time slice is needed', 'it never switches processes'], 'Users see quick responses.'),
  ],
  'acs-os-3': [
    Q('Registers are saved on a stack during interrupts because:', ['interrupts can be nested, and the last saved must be restored first', 'stacks are the largest memory', 'queues are not allowed', 'it is quicker to print'], 'Last in, first out.'),
    Q('The address of each interrupt service routine is found in:', ['the interrupt vector table', 'the page table', 'the FAT', 'the routing table'], 'Indexed by the interrupt number.'),
    Q('Which is a software interrupt?', ['a program dividing by zero', 'a key press', 'the printer running out of paper', 'a power failure'], 'It comes from the running program.'),
    Q('A timer interrupt is used in round robin to:', ['end a process’s time slice', 'print a document', 'restart the computer', 'save a file'], 'The scheduler then picks the next process.'),
  ],
  'acs-os-4': [
    Q('A lock (mutual exclusion) stops a race condition by:', ['letting only one process use the shared data at a time', 'speeding up the processor', 'deleting the data', 'adding more memory'], 'The second process waits.'),
    Q('Which is not one of the four conditions for deadlock?', ['round robin scheduling', 'circular wait', 'hold and wait', 'no pre-emption'], 'The fourth is mutual exclusion.'),
    Q('Journaling helps a file system to:', ['recover after a power cut', 'compress files', 'encrypt files', 'run faster on every read'], 'Changes are recorded before they are made.'),
    Q('FAT32 is still used on memory cards because:', ['almost every device can read it', 'it allows files of any size', 'it has user permissions', 'it is journaled'], 'It limits files to 4 GB.'),
  ],
  'acs-net-1': [
    Q('Going down the layers, each layer adds:', ['a header to the data from the layer above', 'nothing', 'a password', 'a new IP address'], 'This is encapsulation.'),
    Q('MAC addresses are used at the:', ['link layer', 'transport layer', 'application layer', 'internet layer'], 'Within one local network.'),
    Q('TCP sets up a connection with:', ['a three-way handshake', 'a broadcast', 'a DNS query', 'no messages'], 'SYN, SYN-ACK, ACK.'),
    Q('DNS queries usually use UDP because:', ['they are small and a quick answer matters', 'UDP is more reliable', 'UDP encrypts', 'TCP cannot carry names'], 'A lost query is simply asked again.'),
  ],
  'acs-net-2': [
    Q('Twisting the pairs of copper cable:', ['reduces interference', 'increases attenuation', 'makes it optical', 'removes the need for a switch'], 'Noise affects both wires alike.'),
    Q('Fibre-optic cable is not affected by:', ['electrical interference', 'distance at all', 'bending', 'cost'], 'It carries light.'),
    Q('Wi-Fi traffic should be protected with:', ['WPA2 or WPA3 encryption', 'a longer cable', 'a static IP address', 'parity'], 'Radio can be picked up by anyone nearby.'),
    Q('Attenuation is:', ['the weakening of a signal with distance', 'the speed of the link', 'the number of users', 'an error check'], 'Repeaters boost the signal.'),
  ],
  'acs-net-3': [
    Q('For 10.0.5.200/24, the network address is:', ['10.0.5.0', '10.0.0.0', '10.0.5.255', '10.0.5.200'], 'AND with 255.255.255.0.'),
    Q('A /26 subnet has how many usable host addresses?', ['62', '64', '126', '30'], '2⁶ − 2.'),
    Q('Splitting a /24 into /26 subnets gives:', ['4 subnets', '2 subnets', '8 subnets', '26 subnets'], '2 bits borrowed.'),
    Q('The mask /20 is:', ['255.255.240.0', '255.255.255.240', '255.240.0.0', '255.255.224.0'], '11110000 = 240 in the third byte.'),
  ],
  'acs-net-4': [
    Q('NAT lets many devices share:', ['one public IP address', 'one MAC address', 'one password', 'one cable'], 'The router keeps a translation table.'),
    Q('A device sends packets for other networks to its:', ['default gateway', 'DNS server', 'printer', 'switch only'], 'Its router.'),
    Q('A router chooses the next hop using its:', ['routing table', 'page table', 'FAT', 'symbol table'], 'Destination networks and next hops.'),
    Q('IPv6 was introduced mainly because:', ['IPv4 addresses were running out', 'IPv4 was too fast', 'IPv6 needs no routers', 'IPv4 cannot carry email'], '2³² is about 4.3 billion.'),
  ],
  'acs-net-5': [
    Q('The servers that point a resolver to the .cm servers are the:', ['root servers', 'DHCP servers', 'mail servers', 'web servers'], 'The top of the hierarchy.'),
    Q('A DNS answer is kept in a cache for its:', ['TTL', 'lease', 'port', 'mask'], 'Time to live.'),
    Q('DORA stands for:', ['Discover, Offer, Request, Acknowledge', 'Domain, Offer, Route, Address', 'Data, Order, Reply, Accept', 'Discover, Open, Read, Answer'], 'The four DHCP messages.'),
    Q('A network printer is usually given:', ['a static or reserved address', 'a new address every hour', 'no address', 'a public address'], 'So devices can always find it.'),
  ],
  'acs-net-6': [
    Q('SSH normally uses port:', ['22', '21', '23', '443'], 'Secure remote login.'),
    Q('POP3 usually:', ['downloads mail and removes it from the server', 'keeps all mail on the server', 'sends mail', 'encrypts web pages'], 'IMAP keeps it on the server.'),
    Q('A socket is:', ['an IP address with a port number', 'a cable', 'a MAC address', 'a web page'], 'For example 203.0.113.5:443.'),
    Q('FTP is unsafe on open networks because:', ['it sends passwords as plain text', 'it is too slow', 'it uses UDP', 'it needs DNS'], 'Use SFTP over SSH.'),
  ],
  'acs-sec-1': [
    Q('AES is a:', ['symmetric cipher', 'hash function', 'public-key cipher', 'protocol for email'], 'One shared key.'),
    Q('Asymmetric encryption solves:', ['the problem of sharing a secret key', 'the need for keys', 'slow networks', 'parity errors'], 'The public key can be shared openly.'),
    Q('HTTPS encrypts the page data itself with:', ['a symmetric session key', 'the server’s private key', 'a hash', 'no key'], 'Agreed using public-key methods.'),
    Q('A Caesar cipher can be broken by trying:', ['all 25 shifts', 'every AES key', 'nothing: it is unbreakable', 'one guess'], 'There are very few keys.'),
  ],
  'acs-sec-2': [
    Q('RSA is secure because:', ['factorising a very large n into p and q is extremely hard', 'its keys are short', 'it uses no mathematics', 'it is symmetric'], 'n has hundreds of digits.'),
    Q('A small change in a message changes its SHA-256 hash:', ['completely', 'by one bit only', 'not at all', 'only at the end'], 'Hashes spread every change.'),
    Q('A digital signature is checked with the sender’s:', ['public key', 'private key', 'password', 'session key'], 'Anyone can check it.'),
    Q('Passwords should be stored as:', ['salted hashes', 'plain text', 'encrypted with a key on the same server', 'images'], 'They cannot be read back.'),
  ],
  'acs-sec-3': [
    Q('A proxy server can:', ['filter websites and cache popular pages', 'replace the processor', 'assign MAC addresses', 'store passwords in plain text'], 'It makes requests for clients.'),
    Q('A distributed denial-of-service attack uses:', ['many infected computers, a botnet', 'one stolen password', 'a single cable', 'a firewall'], 'Traffic from thousands of sources.'),
    Q('Typing \' OR 1=1 -- into a login box is an attempt at:', ['SQL injection', 'phishing', 'DoS', 'a virus'], 'It changes the database query.'),
    Q('An intrusion prevention system differs from an IDS because it:', ['also blocks the suspicious traffic', 'only logs traffic', 'needs no rules', 'encrypts all data'], 'Detection plus action.'),
  ],
  'acs-sec-4': [
    Q('Cameroon’s law on cybersecurity and cybercriminality is:', ['Law No. 2010/012', 'Law No. 2024/017', 'Law No. 2000/011', 'Law No. 2010/013'], 'Of 21 December 2010.'),
    Q('Law No. 2024/017 deals with:', ['the protection of personal data', 'copyright', 'telecom licences', 'electricity'], 'Of 23 December 2024.'),
    Q('A password and a code sent by SMS together are:', ['two-factor authentication', 'a firewall', 'encryption', 'a backup'], 'Something you know and something you have.'),
    Q('The body that regulates telecommunications operators in Cameroon is:', ['ART', 'ANTIC', 'MINESEC', 'GCE Board'], 'The Telecommunications Regulatory Board.'),
  ],
  ...QUESTIONS_B,
};
