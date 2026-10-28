// Extra questions for the end of the A Level ICT lessons (0796), so that every
// lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_B } from './lessonQuestionsB';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, Term 1 ----------
  'ait-gen-1': [
    Q('ENIAC belongs to the:', ['first generation', 'second generation', 'third generation', 'fourth generation'], 'Vacuum tubes, 1945.'),
    Q('FORTRAN and COBOL first appeared with the:', ['second generation', 'first generation', 'fourth generation', 'fifth generation'], 'Early high-level languages.'),
    Q('The Intel 4004 of 1971 was the first:', ['microprocessor', 'transistor', 'vacuum tube', 'mainframe'], 'A whole CPU on one chip.'),
    Q('Compared with valves, transistors were:', ['smaller, cooler and more reliable', 'larger and hotter', 'slower and costlier', 'the same'], 'Second generation.'),
  ],
  'ait-gen-2': [
    Q('A yellow warning sign in Device Manager means:', ['a driver is missing or faulty', 'the device is new', 'the disk is full', 'the network is fast'], 'Update or reinstall it.'),
    Q('chkdsk is used to:', ['find and repair file system errors', 'clean the screen', 'install drivers', 'browse the web'], 'Check disk.'),
    Q('Before changing drivers, it is wise to:', ['create a restore point', 'format the disk', 'remove the RAM', 'switch off the firewall'], 'So you can go back.'),
    Q('TRIM is used by:', ['solid-state drives', 'printers', 'monitors', 'keyboards'], 'Instead of defragmenting.'),
  ],
  'ait-range-1': [
    Q('An exaflop is:', ['10¹⁸ floating-point operations per second', '10¹⁵', '10⁹', '10¹²'], 'A petaflop is 10¹⁵.'),
    Q('Mainframes are valued most for:', ['reliability and huge transaction volumes', 'small size', 'low price', 'games'], 'Banks and airlines.'),
    Q('A smartphone is a kind of:', ['microcomputer', 'mainframe', 'supercomputer', 'minicomputer'], 'It has a microprocessor.'),
    Q('An embedded controller usually:', ['does one dedicated job, often in real time', 'runs many office programs', 'serves a network', 'needs a keyboard'], 'Inside another device.'),
  ],
  'ait-range-2': [
    Q('Replacing a hard disk with an SSD mainly speeds up:', ['starting the computer and opening files', 'the network', 'the printer', 'the screen resolution'], 'Storage access.'),
    Q('msinfo32 shows:', ['the computer’s hardware and system details', 'running processes only', 'the network map', 'the Recycle Bin'], 'System Information.'),
    Q('In Linux, a live view of processes and CPU use is given by:', ['top or htop', 'ls', 'cd', 'chmod'], 'Or System Monitor.'),
    Q('Upgrading a part that is not the bottleneck:', ['gives little improvement', 'always doubles the speed', 'removes the bottleneck', 'damages the computer'], 'Fix the slowest part first.'),
  ],
  'ait-arch-1': [
    Q('The ALU:', ['performs calculations and comparisons', 'stores files', 'directs the buses', 'connects to the network'], 'Arithmetic logic unit.'),
    Q('The data bus is:', ['two-way', 'one-way', 'wireless', 'only for addresses'], 'Data is read and written.'),
    Q('Read and write signals travel on the:', ['control bus', 'data bus', 'address bus', 'USB'], 'Control signals.'),
    Q('A 64-bit data bus moves at once:', ['64 bits', '8 bits', '32 bits', '64 bytes'], 'Its width.'),
  ],
  'ait-arch-2': [
    Q('A cache miss means:', ['the data was not in the cache and must come from RAM', 'the cache is broken', 'the data is lost', 'the program ends'], 'A slower trip.'),
    Q('Spatial locality means programs tend to use:', ['data stored near data they have just used', 'only new data', 'random data', 'data on other computers'], 'So caches load blocks.'),
    Q('Which is largest?', ['RAM', 'L1 cache', 'L2 cache', 'registers'], 'Gigabytes.'),
    Q('In Linux, the free -h command shows:', ['memory and swap use', 'disk files', 'network speed', 'users'], 'Human-readable sizes.'),
  ],
  'ait-osh-1': [
    Q('UNIX was created in:', ['1969', '1981', '1991', '2007'], 'At Bell Labs.'),
    Q('MS-DOS, from 1981, used:', ['typed commands', 'a touch screen', 'punched cards', 'voice'], 'A command-line interface.'),
    Q('Linux first appeared in:', ['1991', '1969', '2008', '1984'], 'Open source.'),
    Q('A job control language was used in:', ['batch systems', 'smartphones', 'web browsers', 'GUIs'], 'To tell the monitor what to run.'),
  ],
  'ait-osh-2': [
    Q('In Windows, the command to list files is:', ['dir', 'ls', 'list', 'show'], 'ls in Linux.'),
    Q('mkdir:', ['makes a directory', 'moves a file', 'deletes a folder', 'mounts a disk'], 'Make directory.'),
    Q('Files deleted with rm in Linux:', ['do not go to a Recycle Bin', 'can always be restored', 'are moved to Documents', 'are printed'], 'Be careful.'),
    Q('An absolute path starts from:', ['the root of the file system', 'the current folder', 'the desktop always', 'the internet'], 'Such as /home/ama.'),
  ],
  'ait-ost-1': [
    Q('Electricity bills printed once a month suit:', ['batch processing', 'hard real-time', 'time-sharing', 'a mobile OS'], 'All accounts together.'),
    Q('Video streaming is an example of:', ['soft real-time', 'hard real-time', 'batch processing', 'serial processing'], 'Lateness lowers quality only.'),
    Q('A network operating system manages:', ['users, files and printers for a network', 'only one computer', 'nothing', 'only games'], 'From servers.'),
    Q('Record locking in transaction processing stops:', ['two clerks selling the same seat', 'printing', 'backups', 'logins'], 'One update at a time.'),
  ],
  'ait-ost-2': [
    Q('In ls -l output, a first character d means:', ['a directory', 'a deleted file', 'a device', 'a driver'], '- is an ordinary file.'),
    Q('chmod u+x script.sh:', ['lets the owner run the script', 'deletes it', 'gives everyone write access', 'changes its owner'], 'Add execute for the user.'),
    Q('rwx as a number is:', ['7', '6', '5', '4'], '4 + 2 + 1.'),
    Q('Execute permission on a directory lets a user:', ['enter it', 'delete it', 'rename it', 'print it'], 'cd into it.'),
  ],
  'ait-osm-1': [
    Q('A process control block holds:', ['a process’s ID, state, registers and priority', 'the program’s source code', 'the user’s files', 'the screen image'], 'Used in context switches.'),
    Q('A context switch is:', ['saving one process’s state and loading another’s', 'changing the screen', 'switching off', 'moving files'], 'Triggered by interrupts.'),
    Q('The state of a process that has finished is:', ['terminated', 'ready', 'blocked', 'new'], 'It is removed.'),
    Q('In Linux, kill is used to:', ['stop a process', 'delete a file', 'list users', 'change permissions'], 'By its process ID.'),
  ],
  'ait-osm-2': [
    Q('FIFO page replacement removes:', ['the page loaded longest ago', 'the least recently used page', 'the most used page', 'a random page'], 'First in, first out.'),
    Q('The optimal algorithm is used mainly:', ['as a benchmark, since it needs to know the future', 'in every computer', 'for printers', 'for networks'], 'It cannot be built.'),
    Q('Too little RAM for the running programs causes:', ['thrashing', 'deadlock', 'overflow', 'compilation'], 'Constant swapping.'),
    Q('Granting a request only if the system stays in a safe state is deadlock:', ['avoidance', 'detection', 'prevention by ordering', 'recovery'], 'As in the Banker’s algorithm.'),
  ],
  'ait-med-1': [
    Q('Cat 5e cable carries up to about:', ['1 Gbit/s', '10 Mbit/s', '100 Gbit/s', '1 Mbit/s'], 'Gigabit Ethernet.'),
    Q('The maximum length of a twisted-pair Ethernet segment is about:', ['100 m', '10 m', '1 km', '10 km'], 'Then a switch is needed.'),
    Q('Multi-mode fibre suits:', ['shorter runs inside buildings and campuses', 'links between countries', 'satellites', 'phones'], 'Single-mode goes further.'),
    Q('Coaxial cable is still used for:', ['cable television and CCTV', 'keyboards', 'fibre networks', 'Wi-Fi'], 'Shielded copper.'),
  ],
  'ait-med-2': [
    Q('In T568A, pin 1 is:', ['white-green', 'white-orange', 'blue', 'brown'], 'A swaps orange and green.'),
    Q('Pins 4 and 5 in both standards are:', ['blue and white-blue', 'orange pair', 'green pair', 'brown pair'], 'The blue pair is in the middle.'),
    Q('Auto-MDI/MDIX means a port:', ['adjusts to straight or crossover cables', 'needs fibre', 'works only with crossover', 'has no cable'], 'So straight cables work.'),
    Q('Before crimping, the wires should be:', ['in order, flattened and trimmed straight', 'twisted tightly', 'left long', 'cut at different lengths'], 'So all reach the pins.'),
  ],
  'ait-top-1': [
    Q('A disadvantage of peer-to-peer networks is:', ['no central security or backup', 'high cost', 'the need for a server', 'complex setup'], 'Each user manages their own.'),
    Q('A file server:', ['stores files for clients on the network', 'prints documents', 'routes packets', 'assigns MAC addresses'], 'Client–server.'),
    Q('In a bus topology, terminators:', ['stop signals reflecting at the cable ends', 'speed up the network', 'connect to the Internet', 'store data'], 'At both ends.'),
    Q('Stars in each building joined by a fibre backbone form a:', ['hybrid (tree) topology', 'ring', 'bus only', 'full mesh'], 'A mix.'),
  ],
  'ait-top-2': [
    Q('Port lights on a switch show:', ['a working link', 'the IP address', 'the DNS server', 'the user’s name'], 'Check them first.'),
    Q('Two PCs given the same IP address cause:', ['an address conflict', 'faster speed', 'better security', 'nothing'], 'Each address must be unique.'),
    Q('\\\\PC1\\Shared opens:', ['a shared folder on PC1', 'a website', 'a printer driver', 'a USB drive'], 'A network path.'),
    Q('Allowing echo requests in the firewall lets:', ['ping replies through', 'all traffic in', 'files be deleted', 'DHCP work'], 'For testing.'),
  ],
  'ait-ip-1': [
    Q('A /24 network has how many usable host addresses?', ['254', '256', '255', '24'], '2⁸ − 2.'),
    Q('A device usually renews its DHCP lease when:', ['half the lease time has passed', 'it is switched off', 'the lease has ended', 'never'], 'Early, to keep the address.'),
    Q('Which address is private?', ['10.4.2.1', '8.8.8.8', '41.202.1.1', '203.0.113.5'], '10.x.x.x is private.'),
    Q('An IPv6 address has:', ['128 bits', '32 bits', '64 bits', '48 bits'], 'Written in hexadecimal.'),
  ],
  'ait-ip-2': [
    Q('ipconfig /renew:', ['asks DHCP for a lease again', 'clears the DNS cache', 'shows the MAC address', 'tests a cable'], 'After /release.'),
    Q('ipconfig /flushdns:', ['clears the computer’s DNS cache', 'renews the address', 'deletes files', 'resets the router'], 'For stale names.'),
    Q('A PTR record maps:', ['an IP address to a name', 'a name to an address', 'a name to a mail server', 'an alias'], 'Reverse lookup.'),
    Q('ping reports packet loss when:', ['some echo requests get no reply', 'the network is fast', 'DNS works', 'the cable is new'], 'A sign of a poor link.'),
  ],
  ...QUESTIONS_B,
};
