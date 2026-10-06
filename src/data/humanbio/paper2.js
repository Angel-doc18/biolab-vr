// Paper 2 bank for GCE Ordinary Level Human Biology (0565): 2½ hours; Section A,
// three compulsory questions; Section B, two of four; every question 20 marks.
// PAPER2 holds the Human Biology questions written for this subject; SHARED lists
// the Biology Paper 2 questions on the human body that Human Biology also uses.
// Written for this app, each with a full mark scheme.

const pt = (point, marks = 1) => ({ point, marks });

export const PAPER2 = [
  {
    id: 'ha-teeth-diet',
    section: 'A',
    unit: 'hb-nutrition',
    topic: 'Diet, deficiency and teeth',
    stem: 'A school nurse in the Far North region is planning a talk on diet and dental health.',
    hint: 'For each nutrient give its source, its use in the body and the effect of a shortage.',
    figure: 'tooth',
    parts: [
      { label: 'a', title: 'Balanced diet', prompt: 'What is a balanced diet? Name two foods eaten in Cameroon that are rich in protein and two rich in carbohydrate.', marks: 4, kind: 'text', scheme: [pt('All the nutrients in the right amounts/proportions (and enough energy)'), pt('Plus water and fibre'), pt('Protein: beans, groundnuts, fish, meat, eggs, milk (any two)'), pt('Carbohydrate: cassava, rice, maize, plantain, yam, millet (any two)')] },
      { label: 'b', title: 'Deficiency diseases', prompt: 'Name the deficiency disease caused by a shortage of each of: protein in young children, vitamin C, iron and iodine. Give one sign of each.', marks: 8, kind: 'text', scheme: [pt('Protein: kwashiorkor'), pt('Swollen belly/oedema, wasting, reddish hair (any one)'), pt('Vitamin C: scurvy'), pt('Bleeding gums, slow healing'), pt('Iron: anaemia'), pt('Tiredness, pale skin, breathlessness'), pt('Iodine: goitre'), pt('Swollen thyroid gland in the neck')] },
      { label: 'c', title: 'Tooth decay', prompt: 'Explain how eating sugary foods causes tooth decay, and give three ways to prevent it.', marks: 5, kind: 'text', scheme: [pt('Bacteria in plaque feed on sugar'), pt('Producing acid'), pt('The acid dissolves the enamel and then the dentine'), pt('Brush teeth with fluoride toothpaste twice a day'), pt('Eat fewer sugary snacks / visit a dentist regularly / use a chewing stick')] },
      { label: 'd', title: 'Types of teeth', prompt: 'Name the four types of human teeth and give the function of incisors and molars.', marks: 3, kind: 'text', scheme: [pt('Incisors, canines, premolars, molars'), pt('Incisors: cut/bite food'), pt('Molars: crush and grind food')] },
    ],
  },
  {
    id: 'ha-blood-immunity',
    section: 'A',
    unit: 'hb-blood',
    topic: 'Blood groups and immunity',
    stem: 'A patient injured in a road accident at Douala needs a blood transfusion.',
    hint: 'Think about which antibodies are in the recipient’s plasma and which antigens are on the donor’s cells.',
    figure: 'blood-cells',
    parts: [
      { label: 'a', title: 'Blood components', prompt: 'Name the four components of blood and give one function of each.', marks: 8, kind: 'text', scheme: [pt('Plasma'), pt('Carries dissolved food, hormones, CO₂ and urea / heat'), pt('Red cells'), pt('Carry oxygen (haemoglobin)'), pt('White cells'), pt('Fight infection: phagocytosis or antibodies'), pt('Platelets'), pt('Help blood to clot')] },
      { label: 'b', title: 'Blood groups', prompt: 'The patient is blood group A. Explain why group B blood must not be given, and which groups can safely be given.', marks: 6, kind: 'text', scheme: [pt('Group A plasma contains anti-B antibodies'), pt('These react with the B antigens on the donor’s red cells'), pt('The cells clump together (agglutination)'), pt('Blocking blood vessels, which can kill'), pt('Group A can be given'), pt('Group O (universal donor) can also be given')] },
      { label: 'c', title: 'Immunity', prompt: 'Distinguish between active and passive immunity, with an example of each.', marks: 6, kind: 'text', scheme: [pt('Active: the body makes its own antibodies'), pt('Example: after vaccination or infection'), pt('Long-lasting, because memory cells are made'), pt('Passive: antibodies are received from outside'), pt('Example: from the mother across the placenta or in breast milk, or by injection'), pt('Short-lived')] },
    ],
  },
  {
    id: 'ha-pregnancy',
    section: 'A',
    unit: 'hb-reproduction',
    topic: 'Pregnancy and birth',
    stem: 'Antenatal clinics in health centres help mothers to have healthy pregnancies.',
    hint: 'Link each structure (placenta, cord, amnion) to what it does for the fetus.',
    figure: 'placenta',
    parts: [
      { label: 'a', title: 'The placenta', prompt: 'Describe how the structure of the placenta suits its function, and name two substances that pass from mother to fetus and one that passes from fetus to mother.', marks: 7, kind: 'text', scheme: [pt('Villi give a large surface area'), pt('Thin membranes give a short diffusion distance'), pt('Rich blood supply on both sides'), pt('The two bloods do not mix'), pt('Mother to fetus: oxygen, glucose, amino acids, antibodies (any two)', 2), pt('Fetus to mother: carbon dioxide or urea')] },
      { label: 'b', title: 'Protecting the fetus', prompt: 'Give the functions of the amniotic fluid and the umbilical cord.', marks: 3, kind: 'text', scheme: [pt('Amniotic fluid cushions the fetus against knocks'), pt('And allows it to move / keeps the temperature steady'), pt('Umbilical cord carries the fetal blood vessels between fetus and placenta')] },
      { label: 'c', title: 'Healthy pregnancy', prompt: 'Explain why a pregnant woman should not smoke or drink alcohol, and why she should take iron and folic acid tablets.', marks: 6, kind: 'text', scheme: [pt('Nicotine and carbon monoxide cross the placenta'), pt('Leading to low birth weight / premature birth'), pt('Alcohol crosses the placenta and can damage the developing brain'), pt('Iron is needed to make extra haemoglobin for the mother and fetus'), pt('Preventing anaemia'), pt('Folic acid helps prevent defects of the spine (neural tube)')] },
      { label: 'd', title: 'Birth', prompt: 'Describe what happens during the birth of a baby.', marks: 4, kind: 'text', scheme: [pt('The muscles of the uterus contract strongly (labour)'), pt('The cervix widens'), pt('The amnion bursts and the baby is pushed out head first through the vagina'), pt('The umbilical cord is cut and the placenta (afterbirth) is expelled')] },
    ],
  },
  {
    id: 'ha-hormones-drugs',
    section: 'A',
    unit: 'hb-hormones',
    topic: 'Hormones, drugs and alcohol',
    stem: 'Students preparing for examinations often feel the effects of adrenaline, and some young people are tempted to use drugs.',
    hint: 'Compare nervous and hormonal control on speed, how the message travels and how long the effect lasts.',
    figure: 'endocrine-glands',
    parts: [
      { label: 'a', title: 'Endocrine glands', prompt: 'Name the gland that makes each hormone: insulin, thyroxine, adrenaline, testosterone. State one effect of thyroxine.', marks: 5, kind: 'text', scheme: [pt('Insulin: pancreas'), pt('Thyroxine: thyroid gland'), pt('Adrenaline: adrenal glands'), pt('Testosterone: testes'), pt('Thyroxine controls the rate of metabolism / growth and development')] },
      { label: 'b', title: 'Adrenaline', prompt: 'Describe three effects of adrenaline and explain how they prepare the body for action.', marks: 6, kind: 'text', scheme: [pt('Heart beats faster'), pt('Breathing rate increases'), pt('Liver releases glucose into the blood'), pt('Pupils widen / blood diverted to muscles'), pt('More glucose and oxygen reach the muscles'), pt('For faster respiration and more energy: fight or flight')] },
      { label: 'c', title: 'Nerves and hormones', prompt: 'Give three differences between nervous and hormonal control.', marks: 3, kind: 'text', scheme: [pt('Nervous: electrical impulses along neurones; hormonal: chemicals in the blood'), pt('Nervous: very fast; hormonal: slower'), pt('Nervous: short-lived and localised; hormonal: long-lasting and may be widespread')] },
      { label: 'd', title: 'Drugs and alcohol', prompt: 'Describe the effects of alcohol on the body, and explain what is meant by drug dependence.', marks: 6, kind: 'text', scheme: [pt('Alcohol is a depressant: slows reactions'), pt('Impairs judgement and coordination; dangerous when driving'), pt('Long-term heavy drinking damages the liver (cirrhosis)'), pt('And the brain / causes addiction'), pt('Dependence: the body comes to need the drug'), pt('Stopping causes withdrawal symptoms')] },
    ],
  },
  {
    id: 'ha-malaria-water',
    section: 'A',
    unit: 'hb-health',
    topic: 'Malaria and water-borne diseases',
    stem: 'Malaria and cholera are still serious health problems in many parts of Cameroon.',
    hint: 'For each disease, name the pathogen, how it is transmitted and a way to break the chain.',
    figure: 'malaria-cycle',
    parts: [
      { label: 'a', title: 'Malaria', prompt: 'Name the organism that causes malaria and its vector, and describe how the disease is transmitted.', marks: 5, kind: 'text', scheme: [pt('Plasmodium (a protoctist)'), pt('Vector: the female Anopheles mosquito'), pt('The mosquito bites an infected person and takes up the parasite'), pt('It develops in the mosquito'), pt('And is injected with saliva when the mosquito bites another person')] },
      { label: 'b', title: 'Controlling malaria', prompt: 'Describe four ways to control malaria, explaining how each works.', marks: 8, kind: 'text', scheme: [pt('Sleep under insecticide-treated nets'), pt('Stops night-time bites'), pt('Drain standing water / clear blocked gutters and old tins'), pt('Removes breeding sites for the larvae'), pt('Spray insecticides or use repellents'), pt('Kills or keeps away adult mosquitoes'), pt('Early diagnosis and treatment with antimalarial drugs'), pt('Kills the parasite so it is not passed on; prevents deaths')] },
      { label: 'c', title: 'Cholera', prompt: 'Name the type of pathogen that causes cholera, explain how it spreads, and give three ways to prevent it.', marks: 7, kind: 'text', scheme: [pt('A bacterium (Vibrio cholerae)'), pt('Spread in water or food contaminated with faeces'), pt('Causes severe diarrhoea and dehydration'), pt('Drink treated, boiled or chlorinated water'), pt('Use latrines/toilets; good sanitation'), pt('Wash hands with soap after the toilet and before eating'), pt('Wash fruit and vegetables / cover food from flies')] },
    ],
  },
];

// Biology questions on the human body, used in the Human Biology papers too.
export const SHARED = ['a-cells', 'b-heart', 'b-digestion', 'b-respiration', 'b-skin', 'b-kidney', 'b-coordination', 'b-reproduction', 'b-genetics', 'b-health'];
