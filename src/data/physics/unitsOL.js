// Form 5 Physics topics added from the harmonised scheme of work for Forms 3 to
// 5: basic electronics, appliances and energy, and practical skills and the GCE
// examination. They sit beside the MINESEC Form 5 topics.
//
// Quiz convention: the correct option is written first in `a`; options are
// shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const UNITS_OL = [
  {
    id: 'ph-f5-electronics',
    form: 'Form 5',
    n: 8,
    group: 'modern',
    icon: 'memory',
    diagram: 'diode-circuits',
    ask: 'How does a phone charger turn mains a.c. into d.c.?',
    title: 'Basic Electronics: Semiconductors, Diodes and Rectification',
    short: 'Electronics',
    focus: 'Conductors, semiconductors and insulators, doping, the diode and the LED, a.c. and d.c., half-wave and full-wave rectification, smoothing',
    lessonIds: ['ph-semi-1', 'ph-rectify-1'],
    vr: null,
    quiz: [
      Q('Which of these is a semiconductor?', ['Silicon', 'Copper', 'Rubber', 'Glass'], 'Germanium is another.'),
      Q('Unlike a metal, a semiconductor conducts:', ['Better when it is hotter', 'Worse when it is hotter', 'Only when it is cold', 'Never'], 'Heating frees more charge carriers.'),
      Q('A diode allows current to flow:', ['In one direction only', 'In both directions equally', 'Only when it is reverse biased', 'Only in a.c. circuits'], 'It has a very high resistance in the reverse direction.'),
      Q('An LED gives out light when it is:', ['Forward biased', 'Reverse biased', 'Disconnected', 'Heated'], 'A resistor in series limits the current.'),
      Q('Mains electricity in Cameroon has a frequency of:', ['50 Hz', '220 Hz', '1 Hz', '60 Hz'], 'Its voltage is 220 V.'),
      Q('Changing a.c. into d.c. is called:', ['Rectification', 'Transformation', 'Amplification', 'Induction'], 'It is done with diodes.'),
      Q('In half-wave rectification:', ['One half of each cycle is blocked', 'Both halves are used', 'Four diodes are needed', 'The voltage is increased'], 'One diode passes only the half-cycles in one direction.'),
      Q('A capacitor across the output of a rectifier is used to:', ['Smooth the output', 'Increase the frequency', 'Block d.c. completely', 'Step up the voltage'], 'It charges at the peaks and discharges between them.'),
    ],
  },
  {
    id: 'ph-f5-appliances',
    form: 'Form 5',
    n: 9,
    group: 'modern',
    icon: 'electrical_services',
    diagram: 'appliance-care',
    ask: 'What fuse should I use for a 1000 W kettle?',
    title: 'Electrical Appliances, Energy and the Environment',
    short: 'Appliances and Energy',
    focus: 'Rating plates, choosing fuses, voltage stabilisers, safe use and maintenance of appliances, renewable and non-renewable energy, efficiency, e-waste and sustainability',
    lessonIds: ['ph-appliance-1', 'ph-sustain-1'],
    vr: null,
    quiz: [
      Q('The rating plate of an appliance shows its:', ['Voltage, power and frequency', 'Price and shop', 'Colour and size', 'Owner’s name'], 'Use it to choose the correct supply and fuse.'),
      Q('A 1100 W iron works on 220 V. The current it takes is:', ['5 A', '0.2 A', '50 A', '1320 A'], 'I = P ÷ V = 1100 ÷ 220.'),
      Q('A voltage stabiliser protects appliances from:', ['Sudden rises and falls in the mains voltage', 'Dust', 'Water', 'Theft'], 'Voltage changes can damage fridges and televisions.'),
      Q('Before cleaning an appliance you should:', ['Unplug it', 'Switch it on', 'Wet it thoroughly', 'Remove the fuse while it is working'], 'This removes any risk of electric shock.'),
      Q('Which source of electricity provides most of Cameroon’s power?', ['Hydroelectric power', 'Coal', 'Nuclear power', 'Wind'], 'Edéa, Song Loulou, Nachtigal, Lagdo and Memve’ele are hydroelectric stations.'),
      Q('LED bulbs save energy because they:', ['Change more of the electrical energy into light and less into heat', 'Use a higher voltage', 'Never switch off', 'Use more current'], 'Filament bulbs waste most of their energy as heat.'),
      Q('Old batteries and phones should be:', ['Collected and recycled', 'Burned', 'Thrown into rivers', 'Buried in the garden'], 'They contain metals that poison soil and water.'),
      Q('Which of these is non-renewable?', ['Natural gas', 'Solar energy', 'Wind', 'Hydroelectric power'], 'Fossil fuels will run out.'),
    ],
  },
  {
    id: 'ph-f5-exam',
    form: 'Form 5',
    n: 10,
    group: 'modern',
    icon: 'edit_note',
    diagram: 'hooke-graph',
    ask: 'How do I find the gradient of a graph?',
    title: 'Practical Skills and the GCE Physics Examination',
    short: 'Exam Skills',
    focus: 'Tables of results, graphs and gradients, accuracy and errors, formulae and units, and how to answer Papers 1, 2 and 3',
    lessonIds: ['ph-practical-f5', 'ph-gceprep-f5'],
    vr: null,
    quiz: [
      Q('On a graph, the quantity you change on purpose goes on the:', ['x-axis', 'y-axis', 'title', 'key'], 'It is the independent variable.'),
      Q('A straight-line graph through the origin shows that the two quantities are:', ['Directly proportional', 'Inversely proportional', 'Unrelated', 'Equal'], 'Doubling one doubles the other.'),
      Q('The gradient of a line is found from:', ['A large triangle drawn on the line: rise ÷ run', 'The first point only', 'The area under the axes', 'The number of points'], 'A large triangle reduces reading errors.'),
      Q('Timing 20 swings of a pendulum instead of one reduces the effect of:', ['Reaction time', 'Gravity', 'Air resistance', 'Mass'], 'The reaction-time error is shared over 20 swings.'),
      Q('Reading a scale from an angle causes:', ['Parallax error', 'Zero error', 'Random motion', 'Refraction'], 'Keep the eye level with the mark.'),
      Q('The unit of pressure is the:', ['Pascal (Pa)', 'Newton (N)', 'Joule (J)', 'Watt (W)'], '1 Pa = 1 N/m².'),
      Q('In Paper 2 Section B of GCE O Level Physics you answer:', ['Two of three questions', 'All the questions', 'One question', 'Fifty multiple-choice questions'], 'Section A has three compulsory questions.'),
      Q('Before calculating, a mass given in grams should be:', ['Converted to kilograms', 'Left in grams always', 'Doubled', 'Ignored'], 'SI units give answers in standard units.'),
    ],
  },
];
