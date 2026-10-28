// A Level Computer Science lessons (0795), Upper Sixth, Terms 2 and 3:
// computability, recursion, subnet design and routing, network hardware, PKI
// and TLS, Cameroon’s cyber laws, the second phase of the project, how the
// layers work together, and the final examination drills. Original text
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

export const LESSONS_CU6B = [
  // ---------- 10. Computability ----------
  L('acs-comp-1', 'acs-u6-computability', '10.1', 'Turing machines', 18, ['Computability'], [
    'In 1936 Alan Turing described an imaginary machine to pin down what "computing" means. A **Turing machine** has an unlimited **tape** of cells, each holding a symbol such as 0, 1 or blank; a **read/write head** over one cell; a finite set of **states**, including a start state and a halting state; and a set of **transition rules**.',
    'Each rule says: in this state, reading this symbol, **write** a symbol, **move** one cell left or right, and go to the **next state**. The rules are written as a table or drawn as a state transition diagram.',
    'A machine that adds 1 to a binary number starts on the rightmost digit in state S: reading 1, write 0, move left, stay in S; reading 0, write 1 and halt; reading blank, write 1 and halt.',
    'A **universal Turing machine** reads the description of any other Turing machine from its tape and simulates it: the idea behind the stored-program computer. The **Church–Turing thesis** says that anything an algorithm can compute, a Turing machine can compute.',
  ], 'acs-turing', 'Trace a Turing machine with a row per step: state, head position, tape.',
  ['Each Turing machine rule gives, for a state and symbol read:', ['the symbol to write, the move and the next state', 'only the next state', 'the output on a screen', 'the time taken'], 'Write, move, next state.'],
  [['Turing machine', 'An abstract machine with a tape, a head, states and rules, used to define computation.'], ['Transition rule', 'What the machine does for a given state and symbol.'], ['Universal Turing machine', 'A Turing machine that can simulate any other from its description.']],
  [
    { q: 'Run the binary increment machine on 1011.', steps: ['Rightmost 1: write 0, move left: 1010. Next 1: write 0, move left: 1000.', 'Next 0: write 1 and halt.', '**1100**, which is 11 + 1 = 12.'] },
    { q: 'Run it on 111.', steps: ['Each 1 becomes 0 as the head moves left: 000.', 'The head reaches the blank before the number: write 1 and halt.', '**1000**, which is 7 + 1 = 8.'] },
    { q: 'Write the rules for a machine that flips every bit of a binary string, moving right, and halts at the blank.', steps: ['(S, 0) → write 1, move right, stay in S.', '(S, 1) → write 0, move right, stay in S.', '**(S, blank) → halt.** 1011 becomes 0100.'] },
  ]),

  L('acs-comp-2', 'acs-u6-computability', '10.2', 'Decidability, the halting problem and intractable problems', 18, ['Computability'], [
    'A **decision problem** has a yes or no answer. It is **decidable** if some algorithm always halts with the right answer for every input, such as "is n prime?". It is **undecidable** if no such algorithm can exist.',
    'The **halting problem** asks: given any program P and input I, will P stop? Turing proved it undecidable. Suppose a program H could always answer. Build D, which runs H on a program given to it with itself as input, then loops for ever if H says "halts" and halts if H says "loops". Run D on D: if it halts, it loops, and if it loops, it halts. This contradiction shows H cannot exist.',
    'A problem is **tractable** if it has an algorithm that runs in **polynomial time**, such as O(n²). It is **intractable** if the only known algorithms take exponential or factorial time: the exact **travelling salesman problem** must check (n − 1)!/2 routes for n towns.',
    'For intractable problems we use **heuristics**, which give a good answer quickly but not always the best, such as always visiting the nearest unvisited town. Whether every problem whose answer can be checked quickly can also be solved quickly (P = NP?) is still unknown.',
  ], 'acs-halting', 'Undecidable means impossible for any algorithm; intractable means possible but far too slow for large inputs.',
  ['The halting problem is:', ['undecidable', 'tractable', 'solved by testing', 'decidable but slow'], 'Proved by contradiction.'],
  [['Decidable problem', 'A yes or no problem that an algorithm always answers correctly in finite time.'], ['Halting problem', 'Deciding whether a program halts on a given input; it is undecidable.'], ['Heuristic', 'A method that finds a good answer quickly, without guaranteeing the best.']],
  [
    { q: 'How many different round trips must be checked for 5, 10 and 20 towns?', steps: ['5 towns: 4!/2 = 12. 10 towns: 9!/2 = 181 440.', '20 towns: 19!/2 ≈ 6.1 × 10¹⁶.', '**Factorial growth**: exact answers become impossible for large n.'] },
    { q: 'Classify: (i) sorting a list, (ii) deciding whether any program halts, (iii) the exact shortest tour of 50 towns.', steps: ['(i) Tractable: O(n log n).', '(ii) Undecidable.', '**(iii) Intractable: only factorial or exponential algorithms are known; use a heuristic.**'] },
  ]),

  // ---------- 11. Recursion ----------
  L('acs-rec-1', 'acs-u6-recursion', '11.1', 'Recursion and the call stack', 18, ['Algorithms'], [
    'A **recursive** subroutine calls itself on a smaller version of the problem. It needs a **base case**, which returns without another call, and a **recursive case**, which moves towards the base case.',
    'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)',
    'Each call pushes a **stack frame** onto the call stack, holding its parameters, local variables and return address. When a call returns, its frame is popped and the caller carries on: the stack **unwinds**.',
    'Without a base case, or with too deep a recursion, the stack runs out of space: **stack overflow**. Python stops after about 1000 nested calls with a RecursionError.',
  ], 'acs-call-stack', 'Trace recursion in two directions: the calls going down, then the returns coming back up.',
  ['factorial(4) returns:', ['24', '4', '10', '256'], '4 × 3 × 2 × 1.'],
  [['Recursion', 'A subroutine calling itself on a smaller problem.'], ['Base case', 'The case that returns without a further recursive call.'], ['Stack frame', 'The data of one call: parameters, locals and return address.']],
  [
    { q: 'Trace factorial(4).', steps: ['Calls go down: factorial(4) → factorial(3) → factorial(2) → factorial(1), which returns 1.', 'Returns come up: factorial(2) = 2 × 1 = 2, factorial(3) = 3 × 2 = 6.', '**factorial(4) = 4 × 6 = 24**; at the deepest point there were 4 frames on the stack.'] },
    { q: 'Write a recursive function for the sum of the digits of a number and find digit_sum(472).', steps: ['def digit_sum(n):\n    if n < 10:\n        return n\n    return n % 10 + digit_sum(n // 10)', '472 → 2 + digit_sum(47) → 2 + 7 + digit_sum(4) → 2 + 7 + 4.', '**13.**'] },
    { q: 'What happens if the base case of factorial is removed?', steps: ['factorial(1) calls factorial(0), which calls factorial(−1), and so on.', 'A frame is pushed each time and none is ever popped.', '**The stack overflows: Python raises RecursionError.**'] },
  ]),

  L('acs-rec-2', 'acs-u6-recursion', '11.2', 'The Tower of Hanoi, recursive search and recursion versus iteration', 18, ['Algorithms'], [
    'The **Tower of Hanoi**: move n discs from peg A to peg C, one at a time, never putting a larger disc on a smaller one. Recursively: move n − 1 discs to the spare peg, move the largest disc, then move the n − 1 discs on top of it.\ndef hanoi(n, src, dst, via):\n    if n == 0:\n        return\n    hanoi(n - 1, src, via, dst)\n    print("Move disc", n, "from", src, "to", dst)\n    hanoi(n - 1, via, dst, src)\nIt takes **2ⁿ − 1** moves.',
    '**Recursive binary search** calls itself on one half: if Low > High the item is absent; otherwise compare with the middle and search the left or right half.',
    'Any recursion can be rewritten as a loop, using a stack where needed. Recursion is often shorter and natural for trees and divide and conquer; iteration uses less memory and has no call overhead.',
    'Some recursions repeat work: fib(n) = fib(n − 1) + fib(n − 2) recalculates the same values and takes O(2ⁿ) time, while a loop takes O(n). Storing answers already found (**memoisation**) removes the repetition.',
  ], 'acs-hanoi', 'For Hanoi, trust the recursion: to move n discs, move n − 1, move one, move n − 1.',
  ['Moving 4 discs takes at least:', ['15 moves', '8 moves', '16 moves', '12 moves'], '2⁴ − 1.'],
  [['Tower of Hanoi', 'A puzzle solved recursively in 2ⁿ − 1 moves.'], ['Iteration', 'Repeating with a loop instead of recursive calls.'], ['Memoisation', 'Storing results already calculated so they are not worked out again.']],
  [
    { q: 'List the moves for 3 discs from A to C.', steps: ['Move 2 discs to B: A→C, A→B, C→B.', 'Move the largest disc: A→C.', '**Move 2 discs from B to C: B→A, B→C, A→C. Seven moves.**'] },
    { q: 'At one move a second, how long would 64 discs take?', steps: ['2⁶⁴ − 1 ≈ 1.8 × 10¹⁹ moves, so about 1.8 × 10¹⁹ s.', 'A year is about 3.2 × 10⁷ s.', '**About 5.8 × 10¹¹ years: hundreds of billions of years.**'] },
    { q: 'Rewrite factorial with a loop.', steps: ['def factorial(n):\n    result = 1', '    for k in range(2, n + 1):\n        result = result * k\n    return result', '**One frame only, whatever n is.**'] },
  ]),

  // ---------- 12. Subnet design and routing ----------
  L('acs-route-1', 'acs-u6-routing', '12.1', 'Designing subnets with VLSM', 18, ['Networks'], [
    'Fixed subnetting gives every subnet the same size, wasting addresses where few hosts are needed. **Variable-length subnet masking** (VLSM) gives each subnet the smallest block that fits: for h hosts, choose b host bits with 2ᵇ − 2 ≥ h.',
    'Allocate the **largest subnets first**, each block starting at a multiple of its own size, so the blocks never overlap and no gaps are left.',
    'The router’s interface in each subnet usually takes the first usable address; it is the **default gateway** of the hosts in that subnet.',
    '**Route summarisation** (supernetting) advertises neighbouring blocks with a common prefix as one route, keeping routing tables small: 192.168.4.0/24 and 192.168.5.0/24 become 192.168.4.0/23.',
  ], 'acs-vlsm', 'Sort the subnets by size, largest first, before you allocate any addresses.',
  ['A subnet for 20 hosts needs at least:', ['/27, with 30 hosts', '/28, with 14 hosts', '/26', '/24'], '2⁵ − 2 = 30.'],
  [['VLSM', 'Using subnet masks of different lengths so each subnet fits its needs.'], ['Default gateway', 'The router address that hosts send other networks’ traffic to.'], ['Route summarisation', 'Advertising several neighbouring networks as one shorter-prefix route.']],
  [
    { q: 'Split 192.168.5.0/24 for 100 hosts, 50 hosts, 20 hosts and a link between two routers.', steps: ['100 hosts: /25 at 192.168.5.0 (hosts .1 to .126). 50 hosts: /26 at .128 (.129 to .190).', '20 hosts: /27 at .192 (.193 to .222).', '**The link: /30 at .224 (.225 and .226). Addresses .228 to .255 are left for later.**'] },
    { q: 'Give the gateway and broadcast address of the 50-host subnet.', steps: ['It runs from 192.168.5.128 to 192.168.5.191.', 'Gateway: the first usable address.', '**Gateway 192.168.5.129, broadcast 192.168.5.191.**'] },
    { q: 'Can 10.1.0.0/24, 10.1.1.0/24, 10.1.2.0/24 and 10.1.3.0/24 be summarised as one route?', steps: ['Third bytes 0 to 3 are 000000 00 to 000000 11: they share the first 6 bits of that byte.', '16 + 6 = 22 bits in common.', '**Yes: 10.1.0.0/22.**'] },
  ]),

  L('acs-route-2', 'acs-u6-routing', '12.2', 'Routing tables, routing protocols and Dijkstra’s algorithm', 18, ['Networks'], [
    'A **routing table** lists destination networks with their prefixes, the next hop, the interface and a metric. When several entries match a packet, the router uses the **longest prefix match**, the most specific route. The **default route** 0.0.0.0/0 matches everything else.',
    '**Static routes** are typed in by an administrator: simple and predictable, but they do not adapt when a link fails. **Dynamic routing protocols** let routers share routes and adapt.',
    '**Distance-vector** protocols such as **RIP** send their tables to their neighbours and count **hops**; 16 hops means unreachable, and changes spread slowly. **Link-state** protocols such as **OSPF** give every router a map of the whole network; each runs **Dijkstra’s algorithm** using costs based on bandwidth, and they adapt quickly. Between organisations on the Internet, **BGP** is used.',
    '**Dijkstra’s algorithm**: give the start 0 and every other vertex ∞. Repeatedly take the unvisited vertex with the smallest distance, mark it visited, and lower its neighbours’ distances if a shorter path through it is found.',
  ], 'acs-dijkstra', 'In Dijkstra, a vertex’s distance is final once it is visited; record the previous vertex so the path can be traced back.',
  ['A router has routes 10.0.0.0/8 and 10.1.0.0/16. A packet for 10.1.4.4 goes by:', ['10.1.0.0/16, the longer prefix', '10.0.0.0/8', 'the default route', 'both'], 'The most specific match wins.'],
  [['Longest prefix match', 'Choosing the most specific matching route.'], ['Distance-vector protocol', 'A routing protocol that shares tables with neighbours and counts hops.'], ['Link-state protocol', 'A routing protocol in which each router maps the whole network and runs Dijkstra.']],
  [
    { q: 'Routes: 10.0.0.0/8 → R1, 10.1.0.0/16 → R2, 0.0.0.0/0 → R3. Where do packets for 10.1.2.3, 10.9.9.9 and 8.8.8.8 go?', steps: ['10.1.2.3 matches /8 and /16: the /16 is longer, so R2.', '10.9.9.9 matches only the /8: R1.', '**8.8.8.8 matches only the default: R3.**'] },
    { q: 'Edges A–B 4, A–C 2, B–D 5, C–D 8, C–E 10, D–E 2. Use Dijkstra from A.', steps: ['Visit A (0): C = 2, B = 4. Visit C: D = 10, E = 12. Visit B: D = min(10, 4 + 5) = 9.', 'Visit D: E = min(12, 9 + 2) = 11. Visit E.', '**B 4, C 2, D 9, E 11; the path to E is A → B → D → E.**'] },
  ]),

  // ---------- 13. Network hardware ----------
  L('acs-hw-1', 'acs-u6-hardware', '13.1', 'Network devices and the layers they work at', 18, ['Networks'], [
    'A **network interface card** (NIC) connects a device and has a 48-bit **MAC address** set by its maker. A **hub** works at the physical layer: it repeats every signal to every port, so all devices share one collision domain and can see each other’s traffic.',
    'A **switch** works at the data link layer. It learns which MAC address is on which port from the source address of each frame, storing them in its **MAC address table**, and sends each frame only to the port of its destination; a frame for an unknown address is sent to all ports (flooded). A **bridge** joins two network segments and filters frames by MAC address in the same way.',
    'A **router** works at the network layer: it joins different networks and forwards packets by IP address, and it separates **broadcast domains**. A **gateway** joins networks that use different protocols and translates between them.',
    'A **wireless access point** connects Wi-Fi devices to the wired network. A **modem** turns digital data into signals for a telephone or cable line and back. A home "router" usually combines a router, a switch, an access point and a modem in one box.',
  ], 'acs-switch', 'Hub: layer 1, everyone hears. Switch: layer 2, MAC addresses. Router: layer 3, IP addresses.',
  ['A switch learns MAC addresses from:', ['the source address of each frame it receives', 'the DNS server', 'the router’s table', 'the user'], 'And stores them in its MAC table.'],
  [['MAC address', 'The 48-bit hardware address of a network interface.'], ['MAC address table', 'A switch’s list of which MAC address is on which port.'], ['Broadcast domain', 'The devices that receive one another’s broadcasts; routers separate them.']],
  [
    { q: 'PC1 (MAC …:AA, port 1) sends to PC3 (MAC …:CC, port 3) through a new switch, and PC3 replies. What does the switch do?', steps: ['It records AA on port 1. CC is unknown, so the frame is flooded to all other ports.', 'PC3 replies: the switch records CC on port 3.', '**The reply goes only to port 1, and later frames between them go only to their own ports.**'] },
    { q: 'Choose devices for a school with two computer laboratories, a staff room with laptops and an Internet connection.', steps: ['A switch in each laboratory for the wired PCs.', 'A wireless access point for the staff room.', '**A router, with a firewall, joining the school network to the Internet modem or fibre link.**'] },
  ]),

  L('acs-hw-2', 'acs-u6-hardware', '13.2', 'Topologies, VLANs and securing a network', 18, ['Networks'], [
    'In a **star** topology every device has its own cable to a central switch: one faulty cable affects one device, but the switch is a single point of failure. A **bus** uses one backbone cable with terminators: cheap, but a break stops the whole network. In a **ring** data passes from device to device: a single break stops it unless there is a second ring. In a **mesh** devices have several routes; a full mesh of n devices has n(n − 1)/2 links, very reliable but costly. The Internet’s core is a partial mesh.',
    'A **VLAN** groups switch ports into separate logical networks, each its own broadcast domain: one for staff, one for students, one for cameras. Traffic between VLANs must pass through a router, where rules can be applied.',
    '**Securing switches**: disable unused ports, use **port security** to limit the MAC addresses allowed on each port, change default passwords, update the firmware, manage the switches from a separate VLAN, and lock them in cabinets.',
    '**Securing Wi-Fi**: use WPA3 or WPA2 with a long passphrase, give visitors a separate guest network, and switch off WPS. Hiding the network name or filtering MAC addresses gives little protection on its own.',
  ], 'network-topologies', 'Ask of each topology: what happens when one cable breaks?',
  ['A full mesh of 6 devices needs:', ['15 links', '6 links', '30 links', '36 links'], '6 × 5 ÷ 2.'],
  [['Topology', 'The layout of the connections in a network.'], ['VLAN', 'A virtual LAN: switch ports grouped into a separate logical network.'], ['Port security', 'Limiting which or how many MAC addresses may use a switch port.']],
  [
    { q: 'Compare a star and a full mesh for 5 devices.', steps: ['Star: 5 cables to one switch; the switch is a single point of failure.', 'Full mesh: 5 × 4 ÷ 2 = 10 links; any single link can fail without cutting anyone off.', '**The mesh is more reliable but needs twice the links and more ports.**'] },
    { q: 'Plan VLANs for a school network.', steps: ['VLAN 10 staff (marks, finance), VLAN 20 students, VLAN 30 cameras and printers.', 'The router allows students only to the Internet and the printers.', '**Students can no longer reach the staff computers, even on the same switch.**'] },
  ]),

  // ---------- 14. PKI and TLS ----------
  L('acs-pki-1', 'acs-u6-pki', '14.1', 'Public-key infrastructure and digital certificates', 18, ['Security'], [
    'A public key is only useful if you know whose it is. **Public-key infrastructure** (PKI) is the system of **certificate authorities** (CAs), certificates and rules that makes public keys trustworthy.',
    'A **digital certificate** (X.509) contains the owner’s name, such as www.bank.cm, the owner’s public key, the issuing CA, the dates it is valid between, a serial number, and the CA’s **digital signature** over all of it.',
    'The **chain of trust**: root CA certificates are self-signed and come built into browsers and operating systems; a root signs intermediate CAs, and an intermediate signs the server’s certificate. The browser checks each signature up to a trusted root, and also checks the name and the dates.',
    'If a private key is stolen, the CA **revokes** the certificate; browsers check revocation lists (CRLs) or ask the CA online (OCSP). In Cameroon, ANTIC is the root certification authority.',
  ], 'acs-chain', 'To forge a certificate an attacker would need a CA’s private key, which is why CAs guard theirs so carefully.',
  ['A root CA certificate is trusted because:', ['it is built into the browser or operating system', 'it is the longest', 'it is signed by the website', 'it never expires'], 'It is self-signed.'],
  [['Certificate authority', 'A trusted body that signs certificates.'], ['Digital certificate', 'A signed document linking a public key to its owner.'], ['Chain of trust', 'Signatures linking a certificate back to a trusted root.']],
  [
    { q: 'Describe how a browser checks the certificate of www.example.cm.', steps: ['It reads the certificate and checks the name matches and today is within the dates.', 'It checks the intermediate CA’s signature on it, then the root’s signature on the intermediate.', '**The root is in its trust store, so the chain is trusted and the padlock is shown.**'] },
    { q: 'A certificate expired last week. What does the visitor see and why?', steps: ['The date check fails.', 'The browser cannot be sure the key is still controlled by the right owner.', '**A security warning instead of the padlock.**'] },
  ]),

  L('acs-pki-2', 'acs-u6-pki', '14.2', 'The TLS handshake, Diffie–Hellman and VPNs', 18, ['Security'], [
    '**TLS** (Transport Layer Security) protects HTTPS, email and many other protocols. It replaced **SSL**, whose versions are all insecure now.',
    'The **handshake**, simplified: the client says hello with the versions and ciphers it supports and its key share; the server replies with its choice and its key share, sends its **certificate**, and signs the handshake with its private key to prove it owns the certificate; both compute the same **session key**; both send "finished". From then on, data is encrypted with the symmetric session key (such as AES) and checked for tampering.',
    '**Diffie–Hellman key exchange**: the numbers p and g are public. Alice picks a secret a and sends A = gᵃ mod p; Bob picks a secret b and sends B = gᵇ mod p. Alice computes Bᵃ mod p and Bob computes Aᵇ mod p: the same secret. An eavesdropper sees p, g, A and B but cannot find a or b when p is very large. Fresh keys for each session mean a stolen key cannot unlock old sessions.',
    'A **VPN** (virtual private network) carries traffic through an encrypted tunnel, so staff working from home or on public Wi-Fi can reach the school’s server safely. TLS and VPNs protect data in transit; they do not stop malware, so firewalls and updates are still needed.',
  ], 'acs-tls', 'Public-key methods agree the key; symmetric encryption carries the data.',
  ['After a TLS handshake, the web page is encrypted with:', ['a symmetric session key', 'the server’s private key', 'the CA’s key', 'no key'], 'Fast symmetric encryption.'],
  [['TLS handshake', 'The messages that authenticate the server and agree a session key.'], ['Session key', 'A temporary symmetric key used for one connection.'], ['VPN', 'An encrypted tunnel carrying traffic across an untrusted network.']],
  [
    { q: 'Diffie–Hellman with p = 23, g = 5, Alice’s a = 4 and Bob’s b = 3. Find A, B and the shared secret.', steps: ['A = 5⁴ mod 23 = 625 mod 23 = 4. B = 5³ mod 23 = 125 mod 23 = 10.', 'Alice: 10⁴ mod 23 = 10 000 mod 23 = 18. Bob: 4³ mod 23 = 64 mod 23 = 18.', '**Both have the secret 18, which was never sent.**'] },
    { q: 'Why does TLS not encrypt the whole conversation with RSA?', steps: ['Public-key encryption is far slower than symmetric encryption.', 'It is used only to authenticate the server and agree a key.', '**The bulk data then goes with a fast symmetric cipher such as AES.**'] },
    { q: 'What can an eavesdropper on café Wi-Fi learn from your HTTPS banking session?', steps: ['The bank’s server address and the amount and timing of traffic.', 'Not the pages, passwords or amounts: they are encrypted.', '**With a VPN, even the server address is hidden inside the tunnel.**'] },
  ]),

  // ---------- 15. Cyber law ----------
  L('acs-law-1', 'acs-u6-cyberlaw', '15.1', 'Cybercrime, electronic fraud and the law in Cameroon', 18, ['Security and law'], [
    '**ANTIC**, the National Agency for Information and Communication Technologies, created in 2002, regulates electronic security under **Law No. 2010/012 of 21 December 2010** on cybersecurity and cybercriminality. It carries out security audits, runs an incident response team, issues electronic certificates as the root certification authority, raises public awareness and helps the police and courts with cybercrime.',
    'Law No. 2010/012 makes it an offence to access or stay in a computer system without the right to, to intercept, damage or delete data, to hinder a system’s working, to commit fraud or identity theft online, and to spread false news or abusive content electronically. Network operators and service providers have duties to keep certain records and to help lawful investigations.',
    '**Law No. 2010/021 of 21 December 2010** governs **electronic commerce**: it recognises electronic contracts, and requires online sellers to identify themselves, show clear prices and terms, and confirm orders.',
    'Common **electronic fraud** in Cameroon: fake "wrong transfer" messages asking you to send money back, callers posing as mobile money agents asking for a PIN or code, SIM swap, phishing links, fake job or scholarship offers, and advance-fee scams. Never share a PIN or code, check your balance in the official app, call the operator’s official number, and report fraud to the operator and the police.',
  ], 'acs-cybercrime', 'Name the law and the offence: 2010/012 for cybercrime, 2010/021 for e-commerce, 2024/017 for personal data.',
  ['A caller says he is a mobile money agent and asks for your PIN to "unblock" your account. You should:', ['refuse and call the operator’s official number', 'give the PIN', 'send a small amount first', 'ignore all calls from now on'], 'No real agent asks for your PIN.'],
  [['Cybercrime', 'A crime committed using computers or networks.'], ['ANTIC', 'The National Agency for Information and Communication Technologies.'], ['Electronic commerce', 'Buying and selling goods and services online.']],
  [
    { q: 'A student guesses a teacher’s password and changes marks. Which offences and which law?', steps: ['Accessing a system without the right to.', 'Altering data without the right to.', '**Both are offences under Law No. 2010/012.**'] },
    { q: 'You receive an SMS: "I sent you 15 000 FCFA by mistake, please send it back." What do you do?', steps: ['Check your balance in the operator’s official app, not by trusting the message.', 'If no money arrived, it is a scam: do not send anything.', '**If it really arrived, contact the operator to reverse it; report the scam number.**'] },
    { q: 'An online shop in Douala shows no address and no total price before payment. What is wrong?', steps: ['Law No. 2010/021 requires online sellers to identify themselves.', 'It also requires clear prices and terms before the order.', '**The shop breaks the e-commerce rules; buyers should avoid it.**'] },
  ]),

  L('acs-law-2', 'acs-u6-cyberlaw', '15.2', 'Personal data, privacy rights and professional ethics', 17, ['Security and law'], [
    '**Law No. 2024/017 of 23 December 2024** protects **personal data**: any information about a person who can be identified, such as a name, phone number, photograph, ID card number, location or health record. Sensitive data, such as health or religion, needs extra care.',
    'The principles: collect data **lawfully**, with **consent** or another legal basis, for a **stated purpose**; collect only what is needed; keep it **accurate**; keep it no longer than necessary; keep it **secure**; and tell people what is done with it.',
    'People have **rights**: to be informed, to see the data held about them, to have it corrected, to object to its use and to have it erased. Organisations are responsible for the data they hold and for those who process it for them.',
    '**Professional ethics** go beyond the law: act in the public interest, work only within your competence, be honest about what a system can do, keep clients’ information confidential, and think about surveillance, bias in automated decisions, the digital divide and e-waste.',
  ], 'acs-data-rights', 'For any data you collect, ask: why do we need it, who can see it, and when will we delete it?',
  ['A student asks the school to correct a wrong date of birth in its records. This is the right of:', ['rectification', 'erasure', 'objection', 'portability'], 'Correcting inaccurate data.'],
  [['Personal data', 'Information about an identified or identifiable person.'], ['Consent', 'A person’s free, informed agreement to the use of their data.'], ['Data minimisation', 'Collecting only the data needed for the purpose.']],
  [
    { q: 'A school app collects parents’ names, phone numbers, religion and home GPS location to send fee reminders. Comment.', steps: ['Names and phone numbers are needed to send reminders.', 'Religion and GPS location are not needed for that purpose, and religion is sensitive.', '**Collect only names and numbers, say why, keep them secure, and delete them when the student leaves.**'] },
    { q: 'You see the bursar’s password on a note stuck to the screen. What should you do?', steps: ['Do not use it: that would be unauthorised access.', 'Tell the bursar or the head of ICT privately.', '**The password should be changed and the bursar shown a safer way to manage it.**'] },
  ]),

  // ---------- 16. Project phase II ----------
  L('acs-proj-2', 'acs-u6-project-final', '16.1', 'Testing, documentation and evaluation of the project', 20, ['Project'], [
    'Carry out the **test plan**: run each test, record the actual result and keep **evidence** such as a screenshot. Test every success criterion. Use **trace tables** to show that key algorithms, such as working out a fee balance, give the right results.',
    'Keep a **bug log**: the fault, its cause, the fix and the retest. Interface bugs are common: a button saving to the wrong field, a wrong tab order, unclear messages, or a layout that breaks on a small screen.',
    '**Technical documentation** is for whoever maintains the system: the design, data dictionary, structure charts, annotated code and how to make changes. The **user guide** is for the users: installing, starting, each task step by step with screenshots, and what to do when something goes wrong.',
    'The **evaluation** takes each success criterion in turn: met, partly met or not met, with evidence. Include the user’s real feedback, state the limitations honestly, suggest improvements, and finish with the user’s **sign-off**.',
  ], 'acs-test-plan', 'An evaluation without evidence is only an opinion: point to the test that proves each criterion.',
  ['A user guide is written for:', ['the people who will use the system', 'the programmers who maintain it', 'the examiner only', 'the compiler'], 'Technical documentation is for maintainers.'],
  [['Test evidence', 'Proof that a test was run, such as a screenshot of the result.'], ['Bug log', 'A record of each fault, its cause, its fix and its retest.'], ['Evaluation', 'Judging the finished system against its success criteria.']],
  [
    { q: 'Write a test plan row for the mark field.', steps: ['Test 7: reject a mark above 20. Data: 25. Type: erroneous.', 'Expected: message "The mark must be from 0 to 20" and nothing saved.', '**Actual: as expected. Evidence: screenshot 7.**'] },
    { q: 'The criterion was "find any student in under 2 seconds". How is it evaluated?', steps: ['Time searches for students at the start, middle and end of 1200 records.', 'Report the times: all under 0.5 s.', '**Criterion met, with the timing table as evidence.**'] },
  ]),

  // ---------- 17. Integration ----------
  L('acs-int-1', 'acs-u6-integration', '17.1', 'From key press to server and back: a mobile money fee payment', 20, ['Revision'], [
    'A parent pays 25 000 FCFA of school fees in a mobile money app. Touching the screen raises an **interrupt**; the operating system’s handler passes the touch to the app, which the **scheduler** is giving its share of processor time. The amount is **validated** and stored in **binary**, and the app’s machine code runs through the **fetch–decode–execute cycle**, with its memory managed by **paging**.',
    'The app needs the server’s address: **DNS** resolves its name. The phone, which got its own address from **DHCP** or the mobile network, opens a **TCP** connection, and a **TLS handshake** checks the server’s **certificate** and agrees a session key.',
    'The request travels as segments, packets and frames over 4G or Wi-Fi, through routers choosing routes by **longest prefix match**, through **NAT** and **firewalls**, to the operator’s server.',
    'The server runs a **transaction**: debit the parent, credit the school, record the payment, then **COMMIT**. If anything fails, it rolls back. The reply returns the same way, and an SMS receipt follows.',
  ], 'acs-layers', 'When a question mixes topics, follow the data from the user to the server and name each layer it passes.',
  ['If the connection drops after the debit but before the credit, the server:', ['rolls back the transaction', 'keeps the debit', 'charges twice', 'deletes the account'], 'Atomicity.'],
  [['Interrupt', 'A signal that makes the processor deal with an event.'], ['TLS handshake', 'Authenticating the server and agreeing a session key.'], ['Transaction', 'Database operations that succeed or fail together.']],
  [
    { q: 'List, in order, the networking steps before the payment request reaches the server.', steps: ['DNS resolves the server name to an IP address.', 'TCP connection (three-way handshake), then the TLS handshake.', '**The HTTPS request is sent, routed hop by hop, through NAT and firewalls.**'] },
    { q: 'Name three places where security protects this payment.', steps: ['TLS encrypts the data and proves the server’s identity.', 'The app asks for the PIN: authentication.', '**The server’s firewall and the database’s transaction rules protect the accounts.**'] },
  ]),

  // ---------- 18. Paper drills ----------
  L('acs-u6-paper1', 'acs-u6-papers', '18.1', 'Paper 1 drills: floating point, logic circuits and masks', 20, ['Examination practice'], [
    'GCE A Level Computer Science is 0795. In the 2026 session **Paper 1** (multiple choice, 1½ hours) and **Paper 2** (2½ hours) were both on Tuesday 9 June, and the **practical** on Friday 15 May. Check the current timetable for your year.',
    '**Floating point**: write the mantissa’s place values (−1, ½, ¼, …), add them, then move the binary point by the exponent. For a negative normalised mantissa, the first two bits are 1.0.',
    '**Logic circuits**: write the expression gate by gate from the inputs, then simplify it with Boolean algebra or check it with a truth table.',
    '**Network masks**: the block size is 256 minus the splitting byte of the mask; the network address is the multiple of the block size at or below the host’s address, and the broadcast address is one less than the next block.',
  ], 'acs-u6-gce', 'In multiple choice, work out the answer first, then find it among the options.',
  ['The mantissa 0.1010000 with exponent 0011 represents:', ['5', '0.625', '10', '2.5'], '0.625 × 2³.'],
  [['Block size', 'The number of addresses in each subnet.'], ['Normalised mantissa', 'A mantissa starting 0.1 (positive) or 1.0 (negative).'], ['Truth table', 'A table of a circuit’s output for every combination of inputs.']],
  [
    { q: 'Write −0.75 as a normalised 8-bit mantissa with a 4-bit exponent.', steps: ['−0.75 = −1 + 0.25: mantissa 1.0100000.', 'It starts 1.0, so it is normalised with exponent 0.', '**Mantissa 1.0100000, exponent 0000.**'] },
    { q: 'A circuit computes (A AND B) OR (A AND NOT B). Simplify it.', steps: ['A·B + A·B′ = A·(B + B′).', 'B + B′ = 1.', '**A**: one wire replaces three gates.'] },
    { q: 'Find the network and broadcast addresses for 10.0.0.77/29.', steps: ['/29 leaves 3 host bits: blocks of 8.', '77 lies in the block 72 to 79.', '**Network 10.0.0.72, broadcast 10.0.0.79, 6 usable hosts.**'] },
  ]),

  L('acs-u6-paper2', 'acs-u6-papers', '18.2', 'Paper 2 drills: relational algebra, SQL, normalisation and OOP traces', 20, ['Examination practice'], [
    'Turn **relational algebra** into SQL and back: σ is WHERE, π is the column list, a join is JOIN … ON. Write the innermost operation first.',
    'For **SQL setups**, create tables with their keys and foreign keys, then write the queries asked for. Check that every column you select is in a table you have named.',
    'For **normalisation**, show each normal form separately and say which dependency you removed and why.',
    'For **OOP traces**, find the class of the object, then look for the method in that class first, then in its superclass. Track each object’s attributes in a table as the code runs.',
  ], 'acs-relalg', 'Show the reason for each step: examiners give marks for "partial dependency on SubjectID", not only for the final tables.',
  ['π Name (σ Mark ≥ 15 (Result JOIN Student)) in SQL ends with:', ['WHERE Mark >= 15', 'ORDER BY Name', 'GROUP BY Mark', 'HAVING Mark >= 15'], 'σ becomes WHERE.'],
  [['Relational algebra', 'Operations on tables: selection, projection, join, union, difference.'], ['Composite key', 'A primary key made of two or more attributes.'], ['Method resolution', 'Looking for a method in the object’s class, then its superclasses.']],
  [
    { q: 'Write CREATE TABLE for RESULT(StudentID, SubjectID, Mark) with its keys.', steps: ['CREATE TABLE Result (StudentID CHAR(6), SubjectID CHAR(4), Mark INTEGER,', 'PRIMARY KEY (StudentID, SubjectID),', '**FOREIGN KEY (StudentID) REFERENCES Student(StudentID), FOREIGN KEY (SubjectID) REFERENCES Subject(SubjectID));**'] },
    { q: 'class A: def f(self): return "A". class B(A): def f(self): return "B" + super().f(). class C(B): pass. What is C().f()?', steps: ['C has no f, so Python looks in B.', 'B.f returns "B" + A.f() = "B" + "A".', '**"BA".**'] },
    { q: 'Write π Name, Mark (σ SubjectID = \'CS\' (Result JOIN Student)) in SQL.', steps: ['FROM Result INNER JOIN Student ON Result.StudentID = Student.StudentID', 'WHERE SubjectID = \'CS\'', '**SELECT Name, Mark** at the front.'] },
  ]),

  // ---------- 19. Final clinics ----------
  L('acs-u6-clinic', 'acs-u6-final-clinic', '19.1', 'Final clinic: data structures and Big-O', 20, ['Examination practice'], [
    'Know the cost of each operation: reading an array element by index is O(1), but inserting at the start of an array is O(n); inserting at the start of a linked list is O(1), but finding an item is O(n); stack push and pop and queue enqueue and dequeue are O(1); searching a balanced binary search tree is O(log n); a hash table look-up is about O(1) when collisions are few.',
    '**Deleting from a binary search tree**: a leaf is simply removed; a node with one child is replaced by that child; a node with two children is replaced by its **in-order successor**, the smallest value in its right subtree.',
    '**Big-O from code**: a loop that multiplies or divides its counter by 2 each time runs O(log n) times; nested loops multiply; loops one after another add.',
    'In the examination, draw the structure before and after each operation, with every pointer, and write the Big-O with a one-line reason.',
  ], 'acs-clinic', 'Draw first, then answer: most data structure marks are lost to a missed pointer.',
  ['i ← 1; WHILE i < n: i ← i × 2; ENDWHILE runs about:', ['log₂ n times, so O(log n)', 'n times', 'n² times', 'twice'], 'i doubles each time.'],
  [['In-order successor', 'The next value in in-order traversal: the smallest in the right subtree.'], ['Hash table', 'A structure that stores items at addresses calculated from their keys.'], ['Time complexity', 'How the number of steps grows with the size of the input.']],
  [
    { q: 'In the tree 50 (30 (20, 40), 70 (60, 80)), delete 30.', steps: ['30 has two children, so find its in-order successor: the smallest value in its right subtree, 40.', 'Copy 40 into 30’s place and remove the old 40, a leaf.', '**50 (40 (20), 70 (60, 80)).**'] },
    { q: 'Find the complexity of: FOR i ← 1 TO n: j ← n; WHILE j > 1: j ← j DIV 2.', steps: ['The inner loop halves j: about log₂ n times.', 'It runs once for each of the n values of i.', '**O(n log n).**'] },
  ]),

  L('acs-u6-paper3', 'acs-u6-final-clinic', '19.2', 'The mock examination and the practical paper', 18, ['Examination practice'], [
    'The **mock examination** covers Papers 1, 2 and 3 under real conditions. Its value is in the **correction**: for each lost mark, find whether it was missing knowledge, a slip or poor timing, and fix the cause.',
    'For the **practical** (Paper 3), follow the GCE Board’s instructions for that year exactly. Practise writing, running and testing programs and database queries against the clock, save your work often under the file names asked for, and produce the evidence requested.',
    'Be ready to **explain your project**: the problem, the user, the design, how you tested it and what you would improve.',
    '**Timing**: in a 2½-hour paper, divide the minutes by the marks available, leave 10 minutes to check, and never spend long on one part while easier marks wait elsewhere.',
  ], 'acs-u6-final', 'After the mock, keep a list of your own mistakes and read it before every practice paper.',
  ['The most useful thing to do with a marked mock paper is to:', ['find the cause of every lost mark and fix it', 'look only at the total', 'throw it away', 'copy a friend’s answers'], 'Remediation.'],
  [['Mock examination', 'A practice examination under real conditions.'], ['Remediation', 'Correcting the causes of mistakes.'], ['Practical paper', 'The examination done at the computer.']],
  [
    { q: 'Plan the time for a 2½-hour paper worth 100 marks.', steps: ['150 minutes − 10 for checking = 140 minutes.', '140 ÷ 100 = 1.4 minutes a mark: a 15-mark question gets about 21 minutes.', '**Start with the questions you are surest of, and move on when a part runs over.**'] },
    { q: 'In the mock you lost marks on normalisation and on SQL joins. Make a plan for the next two weeks.', steps: ['Week 1: redo the normalisation examples, naming each dependency; one past question a day.', 'Week 2: write ten join queries on a small database and run them.', '**Then a timed past paper to check that the marks have come back.**'] },
  ]),
];
