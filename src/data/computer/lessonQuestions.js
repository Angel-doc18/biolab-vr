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
};
