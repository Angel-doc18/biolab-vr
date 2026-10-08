// Form 5 Biology topics added from the 2026/2027 harmonised scheme of work
// (term 2: variation and evolution, infectious diseases, immunity and drugs;
// term 3: practical skills and the GCE examination). They sit beside the
// MINESEC Form 5 topics in units.js.
//
// Quiz convention: the correct option is written first in `a`; options are
// shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const UNITS_F5 = [
  {
    id: 'bi-f5-evolution',
    form: 'Form 5',
    n: 12,
    term: 2,
    seq: 4,
    group: 'living',
    icon: 'diversity_3',
    diagram: 'natural-selection',
    ask: 'Why did scientists reject Lamarck’s idea of evolution?',
    title: 'Variation and Evolution',
    short: 'Evolution',
    focus: 'Continuous and discontinuous variation and their causes, mutation, the evidence for evolution, natural selection (Darwin) and Lamarck’s theory',
    lessonIds: ['genetics-3', 'bi-variation-f5', 'bi-evolution-1'],
    vr: null,
    quiz: [
      Q('Height in a class of students is an example of:', ['Continuous variation', 'Discontinuous variation', 'A mutation', 'Natural selection'], 'Heights form a smooth range with many in-between values.'),
      Q('Discontinuous variation is mainly controlled by:', ['One or a few genes, with little effect of the environment', 'The environment only', 'Many genes and the environment', 'Exercise and diet'], 'Blood groups and tongue rolling are examples.'),
      Q('Which of these is a cause of variation?', ['Mutation', 'Mitosis', 'Photosynthesis', 'Excretion'], 'Genes, the environment and mutation all cause variation.'),
      Q('The arm of a human and the flipper of a whale are homologous structures because they:', ['Have the same bones arranged in the same way', 'Do exactly the same job', 'Are both used for swimming', 'Are made of different bones'], 'Homologous structures share a basic plan, suggesting a common ancestor.'),
      Q('Fossils are evidence for evolution because:', ['Rocks of different ages contain different organisms, showing change over time', 'All fossils are the same', 'They are still alive', 'They show acquired characteristics'], 'Older layers hold simpler forms and younger layers more complex ones.'),
      Q('In natural selection, the individuals that survive and breed are those that are:', ['Best adapted to their environment', 'Largest', 'Oldest', 'Born first'], 'They pass on the genes for their useful features.'),
      Q('Lamarck’s theory is not accepted because:', ['Features acquired during life are not passed on through the genes', 'Animals never change', 'Fossils do not exist', 'Darwin agreed with him'], 'A trained athlete’s muscles are not inherited by the children.'),
      Q('Malaria parasites becoming resistant to a drug is an example of:', ['Natural selection', 'Artificial selection', 'Inheritance of acquired characteristics', 'Vegetative propagation'], 'Resistant parasites survive the drug and multiply.'),
      Q('Breeding cows that give more milk by choosing the best parents is:', ['Artificial selection', 'Natural selection', 'Mutation', 'Cloning by grafting'], 'Humans choose which animals breed.'),
    ],
  },
  {
    id: 'bi-f5-disease',
    form: 'Form 5',
    n: 13,
    term: 2,
    seq: 4,
    group: 'health',
    icon: 'vaccines',
    diagram: 'pathogen-types',
    ask: 'Why do I need a second dose of some vaccines?',
    title: 'Infectious Diseases, Immunity and Drugs',
    short: 'Disease and Drugs',
    focus: 'Pathogens, infectious and non-infectious diseases, malaria, HIV/AIDS and cholera, active and passive immunity, vaccines, antibiotics and resistance, drug abuse',
    lessonIds: ['bi-pathogen-f5', 'bi-immunity-f5', 'bi-drugs-f5'],
    vr: null,
    quiz: [
      Q('Which of these is a non-infectious disease?', ['Diabetes', 'Cholera', 'Malaria', 'Tuberculosis'], 'Diabetes is not caught from other people.'),
      Q('Malaria is caused by:', ['A protoctist called Plasmodium', 'A virus', 'A bacterium', 'A fungus'], 'It is passed on by the female Anopheles mosquito.'),
      Q('The main danger of cholera is:', ['Rapid loss of water and salts (dehydration) from diarrhoea and vomiting', 'High blood sugar', 'Bleeding from the gums', 'Paralysis of the legs'], 'Oral rehydration solution replaces the water and salts.'),
      Q('HIV harms the body because it destroys:', ['The lymphocytes that defend the body', 'Red blood cells', 'The liver', 'The bones'], 'The body can then no longer fight other infections.'),
      Q('The secondary immune response is faster than the primary response because:', ['Memory cells are already present', 'The pathogen is weaker', 'Antibiotics are given', 'The body temperature is higher'], 'Memory cells make antibodies quickly when the same antigen returns.'),
      Q('Antibodies passing from mother to baby in breast milk give:', ['Passive natural immunity', 'Active natural immunity', 'Active artificial immunity', 'Passive artificial immunity'], 'The antibodies are ready-made, so the immunity is passive and short-lived.'),
      Q('A vaccine works by:', ['Causing the body to make antibodies and memory cells without causing the disease', 'Killing all bacteria in the body', 'Giving ready-made antibodies', 'Curing the disease after it starts'], 'It contains dead or weakened pathogens or their parts.'),
      Q('To slow the spread of antibiotic resistance, a patient should:', ['Finish the whole course of antibiotics as prescribed', 'Stop as soon as they feel better', 'Share antibiotics with friends', 'Take antibiotics for colds'], 'Stopping early lets the more resistant bacteria survive and multiply.'),
      Q('Alcohol is classed as a:', ['Depressant', 'Stimulant', 'Hallucinogen', 'Antibiotic'], 'It slows down the activity of the brain.'),
    ],
  },
  {
    id: 'bi-f5-exam',
    form: 'Form 5',
    n: 14,
    term: 3,
    seq: 5,
    group: 'living',
    icon: 'edit_note',
    diagram: 'drawing-rules',
    ask: 'How do I calculate the magnification of my drawing?',
    title: 'Practical Skills and the GCE Examination',
    short: 'Exam Skills',
    focus: 'Rules for biological drawings, magnification, command words, and how to answer Papers 1, 2 and 3',
    lessonIds: ['bi-drawing-f5', 'bi-gceprep-f5'],
    vr: null,
    quiz: [
      Q('Biological drawings should be made with:', ['A sharp HB pencil and clean single lines', 'A ballpoint pen and shading', 'Coloured pencils', 'Felt-tip pens'], 'Pencil lines can be corrected and look clean.'),
      Q('Which of these is a rule for labelling a drawing?', ['Label lines are ruled and do not cross', 'Label lines have arrowheads', 'Labels are written inside the drawing', 'Labels are not needed'], 'Labels go in a column beside the drawing.'),
      Q('A drawing is 12 cm long and the real object is 3 cm long. The magnification is:', ['× 4', '× 36', '× 9', '× 0.25'], 'Magnification = 12 ÷ 3 = 4.'),
      Q('A microscope has a ×10 eyepiece and a ×40 objective. Its total magnification is:', ['×400', '×50', '×4', '×30'], 'Multiply the two lenses: 10 × 40.'),
      Q('A question that asks you to "describe" a graph wants you to:', ['Say what the graph shows, with figures and the trend', 'Give only the reasons', 'Draw a new graph', 'Name the axes'], '"Explain" asks for reasons; "describe" asks what happens.'),
      Q('Paper 1 of GCE O Level Biology is made of:', ['50 multiple-choice questions', 'Essays only', 'A practical test', 'Three structured questions'], 'It lasts 1 hour 30 minutes.'),
      Q('A structured question is worth 3 marks. You should give:', ['At least three separate correct points', 'One word', 'A drawing only', 'As little as possible'], 'Each mark usually needs a separate point.'),
      Q('Which statement about enzymes would lose marks?', ['The enzyme was killed by the heat', 'The enzyme was denatured by the heat', 'The active site changed shape', 'The rate fell above the optimum'], 'Enzymes are not alive; say denatured.'),
    ],
  },
];
