// Form 5 Biology lessons added from the 2026/2027 harmonised scheme of work:
// homeostasis, asexual reproduction, cell division and nucleic acids, more
// genetics (incomplete dominance, sex linkage), variation and evolution,
// infectious diseases, immunity and drugs, and practical and examination skills.
// They sit beside the MINESEC Form 5 lessons. Original text written for this
// app. **double asterisks** mark key terms and *single asterisks* scientific
// names (italics).

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 & 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_F5 = [
  // ---------- Homeostasis ----------
  L(
    'bi-homeo-f5',
    'bi-f5-endocrine',
    '8.4',
    'Homeostasis: negative feedback, body temperature and blood sugar',
    12,
    ['Homeostasis', 'Practical'],
    [
      '**Homeostasis** is keeping the conditions inside the body steady, whatever happens outside. Cells work well only when their temperature, water content and glucose level stay close to the right value, called the **set point** or **norm**.',
      'The body does this by **negative feedback**:\n- a **receptor** detects a change away from the norm\n- a **control centre** (often the brain) receives the message\n- **effectors** (muscles or glands) act to reverse the change\n- when the condition is back to normal, the response is switched off\nIt is called negative because the response always works against the change.',
      'Body temperature is kept near **37 °C**. The **hypothalamus** in the brain checks the temperature of the blood. When you are **too hot**, for example after running:\n- **sweat glands** produce sweat; it evaporates and takes heat from the skin\n- blood vessels in the skin **widen** (vasodilation), so more blood flows near the surface and loses heat\n- hairs lie flat',
      'When you are **too cold**:\n- skin blood vessels **narrow** (vasoconstriction), keeping warm blood deep inside\n- muscles **shiver**: these quick contractions release heat from respiration\n- sweating stops and hairs stand up\n- you also choose warm clothes and shelter',
      '**Blood glucose** is controlled by the **pancreas**. After a meal the level rises, so the pancreas releases **insulin**. Insulin makes the liver and muscles take in glucose and store it as **glycogen**. When the level falls, for example between meals or during exercise, the pancreas releases **glucagon**, which makes the liver turn glycogen back into glucose.',
      'In **diabetes** this control fails, because the pancreas makes too little insulin or the body stops responding to it. Blood glucose rises too high and glucose appears in the urine. It is managed with a careful diet, exercise and, for some people, insulin injections.',
      '**Practical: sweating after exertion.** Press a strip of dry blue **cobalt chloride paper** on the forehead at rest, then again after two minutes of running on the spot. Time how long it takes to turn **pink** (it turns pink with water). After exercise it turns pink much faster, because more sweat is produced to cool the body.',
    ],
    ['feedback-temperature', 'feedback-glucose'],
    'In a negative feedback answer, give the full sequence: the change, what detects it, the response, and how the response brings the condition back to normal.',
    ['When the body is too hot, blood vessels in the skin:', ['Widen, so more heat is lost from the blood near the surface', 'Narrow, to keep heat in', 'Close completely', 'Make more sweat'], 'This is vasodilation. In the cold the vessels narrow (vasoconstriction).'],
    [
      ['Homeostasis', 'Keeping the internal conditions of the body steady.'],
      ['Negative feedback', 'A control system in which a change from the norm causes a response that reverses the change.'],
      ['Vasodilation', 'Widening of blood vessels in the skin, which increases heat loss.'],
      ['Vasoconstriction', 'Narrowing of blood vessels in the skin, which reduces heat loss.'],
      ['Insulin', 'A hormone from the pancreas that lowers blood glucose by making the liver and muscles store it as glycogen.'],
      ['Glucagon', 'A hormone from the pancreas that raises blood glucose by turning glycogen back into glucose.'],
    ]
  ),

  // ---------- Asexual reproduction ----------
  L(
    'bi-asexual-f5',
    'reproduction',
    '1.3',
    'Asexual reproduction and vegetative propagation',
    12,
    ['Reproduction', 'Practical'],
    [
      '**Asexual reproduction** needs only **one parent**. There are no gametes and no fertilisation, so the offspring are genetically **identical** to the parent and to one another. A group of identical offspring is called a **clone**.',
      'Many plants reproduce from parts of their stem, root or leaves. This is **vegetative propagation**. In **natural** vegetative propagation the plant does it by itself, using a food store and buds:\n- **stem tubers**: yam and Irish potato; each "eye" is a bud\n- **bulbs**: onion, with fleshy leaves storing food\n- **corms**: cocoyam, a short swollen underground stem\n- **rhizomes**: ginger, a stem growing sideways under the ground\n- **suckers**: plantain and banana, new shoots from the base',
      'In **artificial** vegetative propagation, farmers do it on purpose:\n- **stem cuttings**: cassava and sugar cane stems planted in the ground grow roots and shoots\n- **grafting**: a shoot (the **scion**) of a good variety is joined onto a rooted plant (the **stock**). Mango, orange and avocado are grafted so they fruit early and true to type.\n- **layering**: a low branch is bent down and covered with soil until it roots, then cut free, as with hibiscus and bougainvillea\n- **tissue culture**: tiny pieces of a plant are grown on sterile jelly with nutrients and hormones. Thousands of healthy, disease-free plantlets come from one plant, as is done for plantain.',
      'Advantages of asexual reproduction:\n- good qualities, such as sweet fruit or high yield, are kept exactly\n- it is quicker; plants grown from cuttings or grafts mature and fruit sooner\n- only one parent is needed, and no pollination',
      'Disadvantages:\n- there is **no variation**, so a new disease or pest can wipe out all the plants\n- crowding: offspring grow close to the parent and compete\n- diseases in the parent pass on to the offspring',
      '**Practical: looking at storage organs.** Cut an onion bulb lengthways. Find the short flat stem at the base, the fleshy storage leaves, the dry outer leaves and the buds, and the roots growing from the stem. Plant cassava stem cuttings in moist soil and watch which way up they must be to grow.',
    ],
    'vegetative-propagation',
    'Learn one Cameroonian example for each method of vegetative propagation, and always mention that the offspring are identical (no variation).',
    ['In grafting, the rooted plant onto which a shoot is joined is called the:', ['Stock', 'Scion', 'Sucker', 'Tuber'], 'The scion is the shoot of the variety you want; the stock provides the roots.'],
    [
      ['Asexual reproduction', 'Reproduction with one parent and no gametes; the offspring are identical to the parent.'],
      ['Clone', 'A group of genetically identical organisms produced asexually.'],
      ['Vegetative propagation', 'Asexual reproduction of plants from stems, roots or leaves.'],
      ['Scion', 'The shoot of a chosen variety that is grafted onto a stock.'],
      ['Tissue culture', 'Growing many new plants from tiny pieces of tissue on a sterile nutrient jelly.'],
    ]
  ),

  // ---------- Cell division and nucleic acids ----------
  L(
    'bi-division-f5',
    'genetics',
    '5.4',
    'Mitosis and meiosis step by step, and the structure of DNA and RNA',
    14,
    ['Cell division', 'Practical'],
    [
      'Before a cell divides, during **interphase**, it grows and makes a copy of each chromosome. The two copies, called **chromatids**, stay joined at a point called the **centromere**.',
      '**Mitosis** has four stages:\n- **Prophase**: the chromosomes coil up, becoming short and thick, so they can be seen; the nuclear membrane breaks down and a **spindle** forms.\n- **Metaphase**: the chromosomes line up across the middle (the **equator**) of the spindle.\n- **Anaphase**: the spindle fibres pull the two chromatids of each chromosome apart, to opposite ends of the cell.\n- **Telophase**: a new nuclear membrane forms around each set, and the cytoplasm divides. Two identical cells result.',
      'Mitosis keeps the **diploid** number (46 in humans) and makes cells **identical** to the parent cell. It is used for **growth**, **repair** of damaged tissue and **asexual reproduction**. It goes on all the time in root and shoot tips.',
      '**Meiosis** happens only in the sex organs (testes, ovaries, anthers and ovules). It has **two divisions**, one after the other:\n- In the first division, the chromosomes pair up with their partners (homologous pairs) and the pairs are separated. This **halves** the chromosome number.\n- In the second division, the chromatids are separated, as in mitosis.\nThe result is **four haploid cells** (23 chromosomes in humans), all different from each other.',
      'Meiosis is important because:\n- it keeps the chromosome number the same from one generation to the next: haploid gametes fuse to give a diploid zygote\n- it causes **variation**: the pairs separate in random combinations and partners swap pieces (crossing over)',
      '**DNA** (deoxyribonucleic acid) is the chemical that genes are made of:\n- two long strands twisted into a **double helix**, like a twisted ladder\n- each strand is a chain of units called **nucleotides**, each with a sugar (deoxyribose), a phosphate and a **base**\n- there are four bases: adenine (A), thymine (T), cytosine (C) and guanine (G)\n- the bases pair across the ladder: **A with T**, and **C with G**\nThe order of the bases is the genetic code: it tells the cell which proteins to make.',
      '**RNA** (ribonucleic acid) carries copies of the code from the DNA in the nucleus to the ribosomes, where proteins are made. RNA has **one strand**, the sugar **ribose**, and the base **uracil (U)** instead of thymine.',
      '**Practical: mitosis in an onion root tip.** Grow onion roots in water for a few days. Cut off the last few millimetres of a root tip, where cells are dividing, warm it in a stain such as acetic orcein, squash it gently under a coverslip and look at it under high power. Find cells in prophase, metaphase, anaphase and telophase.',
    ],
    ['mitosis-stages', 'mitosis-meiosis', 'dna-rna'],
    'In comparisons of mitosis and meiosis, write matching points side by side: number of divisions, number of cells made, chromosome number, whether the cells are identical, and where it happens.',
    ['During which stage of mitosis do the chromosomes line up across the middle of the cell?', ['Metaphase', 'Prophase', 'Anaphase', 'Telophase'], 'In anaphase the chromatids are then pulled to opposite ends.'],
    [
      ['Chromatid', 'One of the two identical copies of a chromosome, joined at the centromere before division.'],
      ['Diploid', 'Having two sets of chromosomes (46 in human body cells).'],
      ['Haploid', 'Having one set of chromosomes (23 in human gametes).'],
      ['Double helix', 'The shape of DNA: two strands twisted around each other.'],
      ['Base pairing', 'The rule that A pairs with T and C pairs with G in DNA.'],
    ],
    [
      {
        q: 'One strand of DNA has the bases A T T C G A. Write the bases on the other strand.',
        steps: ['A pairs with T, and C pairs with G.', 'A → T, T → A, T → A, C → G, G → C, A → T.', 'The other strand reads T A A G C T.'],
      },
    ]
  ),

  // ---------- Dominance ----------
  L(
    'bi-dominance-f5',
    'genetics',
    '5.6',
    'Mendel’s first law, the test cross and incomplete dominance',
    12,
    ['Genetics'],
    [
      'Gregor **Mendel**, an Austrian monk, crossed pea plants in the 1860s and counted the offspring. His **first law**, the **law of segregation**, says: the two alleles of a gene **separate** when gametes are made, so each gamete carries **only one** allele of each gene.',
      'This is why a heterozygous tall plant (Tt) makes two kinds of gamete in equal numbers, T and t, and why crossing two of them gives a 3 : 1 ratio of tall to short.',
      'A **test cross** finds out whether an organism showing the dominant feature is homozygous (TT) or heterozygous (Tt). Cross it with a **homozygous recessive** organism (tt):\n- if all the offspring show the dominant feature, the parent was probably **TT**\n- if about half show the recessive feature, the parent was **Tt**',
      'Alleles do not always have one dominant over the other:\n- **Complete dominance**: the dominant allele hides the recessive one (Tt is tall).\n- **Incomplete dominance**: neither allele is dominant, and the heterozygote is **in between**. In four o’clock flowers and snapdragons, red (RR) crossed with white (WW) gives all **pink** (RW) flowers.\n- **Codominance**: both alleles show fully in the heterozygote, as in blood group AB, where both A and B are made.',
      'With incomplete dominance, the heterozygote has its own appearance, so the phenotype ratio is the same as the genotype ratio. Crossing two pink flowers (RW × RW) gives 1 red : 2 pink : 1 white.',
    ],
    'incomplete-dominance',
    'With incomplete dominance or codominance, use two different capital letters (such as R and W, or IA and IB) so the examiner can see that neither allele is recessive.',
    ['A red snapdragon is crossed with a white one and all the offspring are pink. This shows:', ['Incomplete dominance', 'Complete dominance', 'Sex linkage', 'Mutation'], 'The heterozygote is in between the two parents because neither allele is dominant.'],
    [
      ['Law of segregation', 'Mendel’s first law: the two alleles of a gene separate into different gametes.'],
      ['Test cross', 'Crossing an individual with the dominant phenotype with a homozygous recessive one to find its genotype.'],
      ['Incomplete dominance', 'Neither allele is dominant, so the heterozygote shows an intermediate phenotype.'],
      ['Codominance', 'Both alleles are fully expressed in the heterozygote.'],
    ],
    [
      {
        q: 'A black guinea pig could be BB or Bb (black is dominant to white, b). How can a farmer find out, and what results would show each genotype?',
        steps: ['Cross it with a white guinea pig, bb (a test cross).', 'If it is BB, every gamete carries B, so all the young are Bb and black.', 'If it is Bb, half its gametes carry b, so about half the young are bb and white.'],
      },
      {
        q: 'Red four o’clock flowers (RR) are crossed with white ones (WW). Give the F1 and the F2 obtained by crossing two F1 plants.',
        steps: ['F1: all gametes from one parent are R and from the other W, so all F1 are RW, which are pink.', 'F2: RW × RW gives RR, RW, RW and WW.', 'Ratio: 1 red : 2 pink : 1 white.'],
      },
    ]
  ),

  // ---------- Sex determination and sex linkage ----------
  L(
    'bi-sexlink-f5',
    'genetics',
    '5.7',
    'Sex determination and sex-linked inheritance',
    12,
    ['Genetics'],
    [
      'Humans have 23 pairs of chromosomes. One pair, the **sex chromosomes**, decides whether a baby is a boy or a girl:\n- females are **XX**, so every egg carries an X\n- males are **XY**, so half the sperm carry X and half carry Y\nIf an X sperm fertilises the egg, the baby is a girl (XX); if a Y sperm does, it is a boy (XY). There is a 1 in 2 chance of each at every birth, and it is the father’s sperm that decides.',
      'Some genes are carried on the X chromosome but not on the shorter Y chromosome. Characteristics controlled by these genes are **sex-linked**. Two well-known examples are caused by **recessive** alleles on the X chromosome:\n- **haemophilia**: the blood does not clot properly, so cuts and bruises bleed for a long time\n- **red-green colour blindness**: difficulty telling red from green',
      'We write the alleles on the X chromosome: **XH** carries the normal allele (H, normal clotting) and **Xh** carries the haemophilia allele (h). A male has only one X, so a single recessive allele makes him affected (XhY). A female needs two (XhXh). A female with one (XHXh) is a **carrier**: she is healthy but can pass the allele on.',
      'This is why sex-linked conditions are much more common in **males**. A son always gets his X from his mother, so an affected boy usually has a carrier mother. A father cannot pass the allele to his sons, because he gives them his Y.',
      'A **mutation** is a sudden change in the genetic material:\n- a **gene mutation** changes the code of one gene, as in the sickle cell allele\n- a **chromosome mutation** changes the number or structure of chromosomes, as in Down’s syndrome (an extra chromosome 21)\nMutations happen at random, but their rate is raised by **mutagens** such as X-rays, nuclear radiation, ultraviolet light and some chemicals, including those in tobacco smoke.',
    ],
    ['sex-determination', 'sex-linkage'],
    'In sex-linkage crosses always write the alleles on the X chromosome (XH, Xh) and show the Y with no allele. Marks are lost for writing H and h alone.',
    ['Why are sex-linked recessive conditions more common in males?', ['Males have only one X chromosome, so one recessive allele is enough', 'Males have two X chromosomes', 'The Y chromosome carries the dominant allele', 'Females cannot inherit them'], 'A female with one recessive allele is a carrier; a male with one is affected.'],
    [
      ['Sex chromosomes', 'The X and Y chromosomes, which decide sex: XX female, XY male.'],
      ['Sex-linked', 'Describes a characteristic controlled by a gene on the X chromosome.'],
      ['Carrier', 'A heterozygous individual who does not show a recessive condition but can pass it on.'],
      ['Mutation', 'A sudden change in a gene or chromosome.'],
      ['Mutagen', 'Something that increases the rate of mutation, such as radiation or certain chemicals.'],
    ],
    [
      {
        q: 'A carrier mother (XHXh) and a normal father (XHY) have children. What are the chances of a haemophiliac child?',
        steps: ['Mother’s eggs: XH or Xh. Father’s sperm: XH or Y.', 'Children: XHXH (normal girl), XHXh (carrier girl), XHY (normal boy), XhY (haemophiliac boy).', 'So 1 in 4 children, or 1 in 2 of the sons, would have haemophilia; no daughter would.'],
      },
    ]
  ),

  // ---------- Variation and evolution ----------
  L(
    'bi-variation-f5',
    'bi-f5-evolution',
    '12.2',
    'Variation: its kinds and causes',
    10,
    ['Variation', 'Practical'],
    [
      '**Variation** is the differences between individuals of the same species. No two people are exactly alike, except identical twins, and even they differ a little.',
      'There are two kinds of variation:\n- **Continuous variation**: a smooth range of values with many in-between forms, such as height, mass, hand span and skin colour. It is controlled by **many genes** and is affected by the **environment**.\n- **Discontinuous variation**: a few clear groups with nothing in between, such as the ABO blood groups, tongue rolling, sex and albinism. It is controlled by **one or a few genes** and the environment has little or no effect.',
      'Variation has three causes:\n- **genes**: the alleles inherited from the parents\n- **the environment**: food, climate, disease, exercise and training. A child with poor food may not reach the height their genes allow.\n- **mutation**: new alleles that appear by chance',
      'Sexual reproduction mixes genes in three ways, which is why brothers and sisters differ:\n- meiosis shuffles the chromosomes\n- crossing over swaps pieces between partner chromosomes\n- any sperm can fertilise the egg',
      '**Practical: a class survey.** Measure the height of everyone in the class and record whether each person can roll the tongue:\n- Group the heights into classes (for example 140 to 144 cm, 145 to 149 cm) and draw a **histogram**. It is bell-shaped, with most students near the middle: continuous variation.\n- Draw a **bar chart** of rollers and non-rollers. There are just two separate groups: discontinuous variation.',
    ],
    'variation-graphs',
    'When asked to say which kind of variation a feature shows, give the reason: continuous variation has a range of values with in-between forms; discontinuous variation has distinct groups.',
    ['Which of these shows discontinuous variation?', ['ABO blood group', 'Height', 'Body mass', 'Hand span'], 'A person is in one blood group or another, with no in-between forms.'],
    [
      ['Variation', 'Differences between individuals of the same species.'],
      ['Continuous variation', 'Variation with a range of in-between values, such as height.'],
      ['Discontinuous variation', 'Variation in which individuals fall into distinct groups, such as blood groups.'],
    ]
  ),
  L(
    'bi-evolution-1',
    'bi-f5-evolution',
    '12.3',
    'Evolution: the evidence, natural selection and Lamarck’s idea',
    14,
    ['Evolution'],
    [
      '**Evolution** is the slow change in living things over many generations, by which new species arise from earlier ones.',
      'The **evidence** for evolution includes:\n- **Fossils**: the remains or traces of organisms preserved in rock. Older rock layers hold simpler organisms, and newer layers more complex ones, showing change over time.\n- **Comparative anatomy**: the arm of a human, the wing of a bat and the flipper of a whale have the same bones (humerus, radius, ulna, wrist bones and five digits) used for different jobs. These **homologous structures** suggest a common ancestor.\n- Similar early **embryos** in fish, birds and mammals, and similar **DNA** in related species.',
      'Charles **Darwin** explained how evolution happens in his book *On the Origin of Species* (1859). His theory of **natural selection** runs like this:\n- individuals of a species **vary**\n- more young are produced than can survive\n- they **compete** for food, space and mates, and many die\n- those with features best suited to the environment **survive** and breed: the "survival of the fittest"\n- they pass on these useful **genes** to their young\n- over many generations, the useful features become common and the species changes',
      'Examples we can see today:\n- **antibiotic resistance**: a few bacteria survive an antibiotic and multiply, so the drug stops working\n- **insecticide resistance** in mosquitoes\n- the **sickle cell** allele is common in malaria regions of Africa, because carriers survive malaria better',
      'Jean-Baptiste **Lamarck** had an earlier idea, the **inheritance of acquired characteristics**. He thought that features developed during life by use or disuse are passed on: for example, giraffes stretching to reach leaves would have young with longer necks.',
      'Lamarck’s idea is **rejected** today. Changes during a lifetime do not change the genes in the gametes. A man who builds big muscles by lifting weights does not have children born with big muscles.',
    ],
    ['natural-selection', 'homologous-limbs'],
    'In a natural selection answer, use the key words in order: variation, competition (struggle for survival), survival of the best adapted, reproduction, passing on genes, change over many generations.',
    ['According to Darwin, which individuals survive and pass on their genes?', ['Those best adapted to their environment', 'The largest ones only', 'Those that acquired new features during life', 'All of them equally'], 'This is natural selection, sometimes called survival of the fittest.'],
    [
      ['Evolution', 'Gradual change in species over many generations.'],
      ['Fossil', 'The preserved remains or traces of an organism in rock.'],
      ['Homologous structures', 'Structures with the same basic plan but different functions, suggesting a common ancestor.'],
      ['Natural selection', 'The survival and reproduction of the individuals best adapted to their environment.'],
      ['Acquired characteristic', 'A feature developed during an individual’s life, which is not passed on to its young.'],
    ]
  ),

  // ---------- Infectious diseases, immunity and drugs ----------
  L(
    'bi-pathogen-f5',
    'bi-f5-disease',
    '13.1',
    'Infectious and non-infectious diseases: malaria, HIV/AIDS and cholera',
    14,
    ['Disease'],
    [
      'An **infectious disease** is caused by a **pathogen** that passes from one person to another, such as malaria, cholera, tuberculosis and HIV/AIDS. A **non-infectious disease** is not caught from others: it is caused by the genes, diet, lifestyle or ageing, such as diabetes, high blood pressure, sickle cell anaemia and cancer.',
      'Pathogens belong to four groups:\n- **viruses**: the smallest; they can multiply only inside living cells (HIV, measles, polio, Ebola)\n- **bacteria**: single cells without a nucleus (cholera, typhoid, tuberculosis)\n- **fungi**: threads and spores (ringworm, athlete’s foot)\n- **protoctists**: single cells with a nucleus (malaria, amoebic dysentery)',
      '**Malaria** is caused by the protoctist *Plasmodium*:\n- spread by the bite of an infected female *Anopheles* mosquito\n- the parasites multiply in the liver, then burst red blood cells\n- signs: repeated fever, chills and sweating, headache, body pains and anaemia; it can kill young children and pregnant women\n- prevention: sleep under treated bed nets, remove still water, spray, take preventive treatment in pregnancy, and the malaria vaccine for young children',
      '**HIV/AIDS** is caused by the human immunodeficiency **virus**:\n- spread through unprotected sex, infected blood and from mother to child\n- the virus destroys the white cells (lymphocytes) that defend the body\n- signs: after years without symptoms, weight loss, long fever and diarrhoea, and infections such as tuberculosis\n- prevention: abstinence and faithfulness, condoms, testing, safe blood and sterile instruments, and treatment of infected mothers. Antiretroviral drugs control it but do not cure it.',
      '**Cholera** is caused by the **bacterium** *Vibrio cholerae*:\n- spread through water and food contaminated by the faeces of infected people\n- signs: sudden, severe watery diarrhoea (like rice water) and vomiting, which quickly dehydrate the body\n- treatment: replace water and salts at once with **oral rehydration solution** (ORS)\n- prevention: safe drinking water, latrines, hand washing with soap, and covered, well-cooked food',
      '**Practical: looking at pathogens.** On a prepared blood smear from a malaria patient, the ring-shaped *Plasmodium* parasites can be seen inside some red blood cells. Laboratories use such slides to confirm malaria.',
    ],
    'pathogen-types',
    'For each disease, organise your answer as: cause (the pathogen), how it spreads, the signs, and how to prevent or treat it.',
    ['Cholera is caused by a:', ['Bacterium', 'Virus', 'Fungus', 'Protoctist'], 'Vibrio cholerae is a bacterium spread in water and food contaminated by faeces.'],
    [
      ['Infectious disease', 'A disease caused by a pathogen that can pass from one person to another.'],
      ['Non-infectious disease', 'A disease that is not passed from person to person, such as diabetes.'],
      ['Oral rehydration solution', 'A drink of water with sugar and salts that replaces what is lost in diarrhoea.'],
    ]
  ),
  L(
    'bi-immunity-f5',
    'bi-f5-disease',
    '13.2',
    'Active and passive immunity, and how vaccines protect us',
    12,
    ['Immunity'],
    [
      'An **antigen** is a molecule on the surface of a pathogen that the body recognises as foreign. **Lymphocytes** respond by making **antibodies**, proteins that fit the antigen and help destroy the pathogen. Some lymphocytes remain as **memory cells**.',
      'The **primary response** happens the first time the body meets an antigen: antibodies are made slowly and in small amounts, so you may fall ill. The **secondary response** happens if the same antigen returns: memory cells make antibodies much faster and in much greater amounts, so the pathogen is destroyed before you feel ill. You are now **immune**.',
      '**Active immunity**: your own body makes the antibodies and memory cells. It is slow to develop but **long-lasting**.\n- **natural**: after catching the disease, as with measles\n- **artificial**: after a **vaccine**',
      '**Passive immunity**: ready-made antibodies are given to you. It acts **at once** but is **short-lived**, because no memory cells are made.\n- **natural**: from the mother, across the placenta and in breast milk, protecting the baby in its first months\n- **artificial**: an injection of antibodies (a **serum**), such as anti-tetanus or anti-snake-venom serum after a bite',
      'A **vaccine** contains dead or weakened pathogens, or parts of them, that cannot cause the disease but carry their antigens. It causes a primary response, so a later real infection meets a fast secondary response. Cameroon’s Expanded Programme on Immunisation protects children against tuberculosis (BCG), polio, measles, tetanus, diphtheria, whooping cough, yellow fever and other diseases. In January 2024 Cameroon began giving the malaria vaccine to young children as part of routine immunisation, one of the first countries in the world to do so.',
      'When most people in a community are vaccinated, the pathogen cannot spread easily, which also protects those who cannot be vaccinated. This is **herd immunity**.',
    ],
    ['immunity-types', 'antibody-response'],
    'On a graph of antibody concentration, the secondary response is faster, higher and lasts longer than the primary response. Say why: memory cells are already present.',
    ['Immunity gained from a vaccine is:', ['Active artificial immunity', 'Passive natural immunity', 'Passive artificial immunity', 'Active natural immunity'], 'Your own body makes the antibodies, so it is active; the vaccine is given on purpose, so it is artificial.'],
    [
      ['Antigen', 'A foreign molecule, for example on a pathogen, that triggers the making of antibodies.'],
      ['Antibody', 'A protein made by lymphocytes that attaches to a specific antigen.'],
      ['Memory cells', 'Lymphocytes that remain after an infection and respond quickly to the same antigen.'],
      ['Vaccine', 'A preparation of dead or weakened pathogens, or their parts, that causes active immunity.'],
      ['Herd immunity', 'Protection of a whole community when most of its members are immune.'],
    ]
  ),
  L(
    'bi-drugs-f5',
    'bi-f5-disease',
    '13.3',
    'Antibiotics, resistance and the dangers of drug abuse',
    14,
    ['Drugs', 'Practical'],
    [
      'A **drug** is any chemical that changes the way the body works. Medicinal drugs treat or prevent disease. **Antibiotics** are medicines that kill bacteria or stop them multiplying. The first, **penicillin**, was discovered by Alexander Fleming in 1928, from a mould.',
      'How antibiotics work:\n- they attack parts of bacteria that human cells do not have, such as the **cell wall**, so they harm the bacteria and not us\n- they have **no effect on viruses**, because viruses have no cell wall and live inside our cells. Antibiotics do not cure colds, flu or HIV.',
      '**Antibiotic resistance** grows when antibiotics are misused. If a few bacteria are a little resistant, they survive the drug and multiply, so the drug stops working. To slow this:\n- take antibiotics only when a health worker prescribes them\n- **finish the whole course**, even when you feel better\n- never share them or buy them by the roadside\n- do not use them for viral infections',
      '**Drug abuse** is taking a drug for a reason other than medicine, or in harmful amounts. Drugs commonly abused in Cameroon include **alcohol**, **tobacco**, **cannabis**, **tramadol** (a painkiller taken without prescription), solvents such as glue, and other narcotics. They act on the brain:\n- **stimulants** speed it up\n- **depressants**, such as alcohol, slow it down\n- **hallucinogens** distort what a person sees and hears',
      'Many of these drugs cause **addiction** (dependence): the user feels unable to stop. Effects on the body include liver and brain damage, lung cancer from smoking, mental illness and death from overdose.',
      'The **social and economic** effects reach everyone:\n- school drop-out and lost jobs\n- crime, violence and road accidents\n- broken families and poverty\n- money spent on drugs and treatment instead of food and school fees\nSaying no, choosing good friends, sport and clubs, and seeking help from counsellors or health workers protect young people.',
      '**Practical: do garlic and onion kill bacteria?** On an agar plate spread with harmless bacteria, place small paper discs soaked in garlic extract, onion extract and sterile water (the **control**). After incubation, measure the **clear zone** around each disc where bacteria did not grow. A wider clear zone means a stronger antibacterial effect. Garlic often gives a wide zone; the water disc gives none.',
    ],
    'agar-diffusion',
    'Explain resistance as natural selection: the antibiotic kills the sensitive bacteria, the resistant ones survive and multiply, and they pass on their resistance.',
    ['Antibiotics do not cure influenza because:', ['It is caused by a virus, and antibiotics act only on bacteria', 'It is caused by a fungus', 'The body is already immune', 'Antibiotics only work on the skin'], 'Viruses have no cell wall and multiply inside our own cells.'],
    [
      ['Antibiotic', 'A medicine that kills bacteria or stops them multiplying.'],
      ['Resistance', 'The ability of bacteria to survive an antibiotic that used to kill them.'],
      ['Drug abuse', 'Taking a drug for a non-medical reason or in harmful amounts.'],
      ['Addiction', 'Dependence on a drug, with a strong need to keep taking it.'],
      ['Control', 'The part of an experiment without the factor being tested, used for comparison.'],
    ]
  ),

  // ---------- Practical skills and the examination ----------
  L(
    'bi-drawing-f5',
    'bi-f5-exam',
    '14.1',
    'Biological drawings and magnification',
    10,
    ['Practical skills'],
    [
      'Drawings are marked in the practical paper and in many structured questions. A good biological drawing:\n- is made with a **sharp HB pencil**, with **clean, continuous lines**, not sketchy ones\n- is **large**, using most of the space, and in the right **proportions**\n- has **no shading** and no colouring\n- shows only what you can actually see',
      'Labels:\n- written outside the drawing, in a neat **column**, and in pencil or ink as the paper says\n- joined to the part by **ruled lines** that touch the part and **do not cross** each other\n- no arrowheads on the label lines',
      'Every drawing needs a **title** (what it is and the view, such as "transverse section of a dicotyledonous stem") and its **magnification**.',
      '**Magnification** tells how many times larger the drawing is than the real object:\n- magnification = length of the drawing ÷ real length\n- both lengths must be in the **same units**\n- write it as, for example, × 4',
      'To find the real size: real length = length of the drawing ÷ magnification. Under a microscope, the total magnification = eyepiece lens × objective lens, for example ×10 × ×40 = ×400.',
    ],
    'drawing-rules',
    'Measure in millimetres for both lengths. Many students lose the magnification mark by mixing centimetres and millimetres.',
    ['A label line on a biological drawing should:', ['Be ruled, touch the part and not cross other lines', 'Have an arrowhead', 'Be drawn freehand', 'Cross the drawing to reach the label'], 'Labels are placed in a column beside the drawing with ruled lines.'],
    [
      ['Magnification', 'How many times larger an image or drawing is than the real object.'],
      ['Proportion', 'The correct size of each part compared with the others.'],
    ],
    [
      {
        q: 'A leaf is 6 cm long. A student’s drawing of it is 15 cm long. Find the magnification.',
        steps: ['Magnification = drawing length ÷ real length.', '= 15 cm ÷ 6 cm.', '= × 2.5.'],
      },
      {
        q: 'A drawing of a cell is 48 mm wide and the magnification is × 400. Find the real width in micrometres.',
        steps: ['Real width = 48 mm ÷ 400 = 0.12 mm.', '1 mm = 1000 micrometres, so 0.12 mm = 120 micrometres.'],
      },
    ]
  ),
  L(
    'bi-gceprep-f5',
    'bi-f5-exam',
    '14.2',
    'Answering the GCE Ordinary Level Biology papers',
    12,
    ['Examination'],
    [
      'The GCE Ordinary Level Biology examination has three papers:\n- **Paper 1**: 50 multiple-choice questions in 1 hour 30 minutes\n- **Paper 2**: structured and essay questions in 2 hours 30 minutes. Section A has compulsory structured questions; in Section B you choose essay questions from a list.\n- **Paper 3**: the practical paper, which tests observation, drawing, recording, measuring and drawing conclusions',
      'For **Paper 1**:\n- read every option before choosing; cover the options and think of the answer first\n- you have under two minutes per question; do not get stuck, come back to hard ones\n- answer every question before time runs out',
      'For **Paper 2**, read the **command word** carefully:\n- **state** or **name**: a short answer, no explanation\n- **describe**: say what happens or what you see, step by step\n- **explain**: give the reason why, using biology\n- **suggest**: apply your knowledge to a new situation\n- **compare**: give similarities and differences, side by side',
      'The marks shown tell you how many points are needed. For 4 marks, give at least four separate correct points.',
      'In **essays**, plan first: list the points, then write them in a logical order with key terms. Draw labelled diagrams where they help. Keep to the question.',
      'With **graphs and tables**:\n- quote figures with their units\n- describe the trend, then any change in the trend\n- explain using the science you know',
      'Common mistakes to avoid:\n- writing "the enzyme is killed" (say **denatured**)\n- confusing **respiration** with **breathing**\n- forgetting units\n- giving one point when the question is worth several marks',
    ],
    null,
    'Practise with past papers under timed conditions, then mark them with the marking guide. Note every topic where you lost marks and revise it.',
    ['In a question that says "Explain", you should:', ['Give the reasons why, using biological knowledge', 'Only name the structure', 'Draw a diagram without labels', 'Write one word'], '"State" needs a short answer; "explain" needs reasons.'],
    [
      ['Command word', 'The word in a question, such as state, describe or explain, that tells you what kind of answer is needed.'],
    ]
  ),
];
