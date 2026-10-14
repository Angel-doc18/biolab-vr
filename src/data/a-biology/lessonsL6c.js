// A Level Biology lessons for Lower Sixth, term 3: infectious disease,
// immunity, classification and examination practice. Original text written
// for this app, with Cameroonian examples.

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

export const LESSONS_L6C = [
  // ---------- 18. Infectious disease ----------
  L('ab-malaria-6', 'ab-l6-disease', '18.1', 'Pathogens and malaria', 16, ['Health'], [
    'A **pathogen** is an organism that causes disease: **viruses** (HIV, measles, influenza), **bacteria** (cholera, tuberculosis, typhoid), **protozoa** (malaria, sleeping sickness), **fungi** (ringworm, thrush) and parasitic worms. An **infectious disease** passes from one host to another; a **vector** is an organism that carries a pathogen between hosts.',
    '**Malaria** is caused by the protozoan **Plasmodium** (P. falciparum causes most deaths in Cameroon) and carried by the female **Anopheles** mosquito. Life cycle:\n- an infected mosquito injects **sporozoites** with its saliva\n- they invade **liver** cells and multiply into thousands of **merozoites**\n- merozoites enter **red blood cells**, multiply and burst them every 48 hours, causing cycles of fever and anaemia\n- some form **gametocytes**; a mosquito taking blood picks them up; they fuse in its gut and develop into new sporozoites that move to its **salivary glands**.',
    'Control acts on each stage:\n- **treated bed nets** and indoor spraying stop bites; draining stagnant water and clearing bushes reduce breeding\n- prompt testing (rapid diagnostic tests) and treatment with **artemisinin-based combination therapy (ACT)**\n- preventive treatment for **pregnant women** and seasonal chemoprevention for children in the North and Far North regions\n- **vaccination**: in January 2024 Cameroon began giving a malaria vaccine (RTS,S) in routine childhood immunisation, one of the first countries to do so.\nResistance of Plasmodium to drugs and of mosquitoes to insecticides makes combined measures essential.',
  ], 'malaria-cycle', 'Liver first, then red cells; the mosquito carries gametocytes.',
  ['Why does malaria cause anaemia?', ['merozoites burst red blood cells', 'mosquitoes drink too much blood', 'the liver stops making cells', 'it blocks iron intake'], 'Repeated destruction of red cells.'],
  [['Pathogen', 'An organism that causes disease.'], ['Vector', 'An organism that carries a pathogen between hosts.'], ['Merozoite', 'The stage of Plasmodium that invades red blood cells.'], ['ACT', 'Artemisinin-based combination therapy against malaria.']],
  [
    { q: 'Explain why sleeping under a treated net protects both the sleeper and the community.', steps: ['**The net blocks the night-biting Anopheles from reaching the sleeper.**', '**The insecticide kills mosquitoes that land on it, so fewer survive to bite others.**', '**Fewer infected people and mosquitoes means less transmission in the community.**'] },
  ]),

  L('ab-cholera-hiv-6', 'ab-l6-disease', '18.2', 'Cholera and HIV/AIDS', 16, ['Health'], [
    '**Cholera** is caused by the bacterium **Vibrio cholerae**, spread by the **faecal-oral route** through contaminated water and food. In the small intestine the bacteria release a **toxin** that makes the lining secrete chloride ions; water follows by osmosis, causing severe **watery diarrhoea** ("rice-water stools") and dehydration that can kill within hours. Treatment: **oral rehydration solution** (water, salts and glucose; glucose helps sodium and water absorption by co-transport), intravenous fluids and antibiotics in severe cases. Prevention: safe drinking water, latrines, hand washing, food hygiene and **oral cholera vaccine** during outbreaks, such as those Cameroon faced from 2021 to 2023.',
    '**HIV** (human immunodeficiency virus) is a **retrovirus**: an RNA virus with the enzyme **reverse transcriptase**, which copies its RNA into DNA that joins the host’s DNA. A glycoprotein on its envelope binds the **CD4** receptor of **T helper lymphocytes**, which it destroys. As T helper cells fall, the immune system fails and **opportunistic infections** (tuberculosis, pneumonia, thrush, Kaposi’s sarcoma) appear: this is **AIDS**.',
    'HIV spreads through **unprotected sex**, **infected blood** (shared needles, unsafe transfusions) and from **mother to child** in pregnancy, birth or breastfeeding. Prevention: abstinence, faithfulness, **condoms**, screening blood, sterile instruments, testing in pregnancy and **antiretroviral therapy (ART)**, which keeps the virus low; a person on effective treatment with an undetectable virus does not pass it on through sex. There is no cure or vaccine yet.',
  ], 'hiv-structure', 'Cholera: water and salts. HIV: T helper cells and reverse transcriptase.',
  ['Oral rehydration solution contains glucose because:', ['glucose helps absorb sodium and therefore water by co-transport', 'it kills the bacteria', 'it neutralises the toxin', 'it gives energy only'], 'Sodium-glucose co-transport still works in cholera.'],
  [['Faecal-oral route', 'Spread of pathogens from faeces into the mouth through food or water.'], ['Retrovirus', 'An RNA virus that makes DNA from its RNA.'], ['Reverse transcriptase', 'The enzyme that copies RNA into DNA.'], ['Opportunistic infection', 'An infection that attacks when immunity is weak.']],
  [
    { q: 'Explain why a person with HIV can die of tuberculosis.', steps: ['**HIV destroys T helper cells, which coordinate the immune response.**', '**Without them, B cells and T killer cells are not activated properly.**', '**The body cannot control the TB bacteria, an opportunistic infection.**'] },
  ]),

  // ---------- 19. Immunity ----------
  L('ab-nonspecific-6', 'ab-l6-immunity', '19.1', 'Non-specific defences', 13, ['Immunity'], [
    'The first lines of defence act against **any** pathogen:\n- **physical barriers**: the skin (keratin layer); mucous membranes; cilia and mucus in the airways\n- **chemical barriers**: acid in the stomach; **lysozyme** in tears and saliva (digests bacterial walls); acid secretions on the skin\n- **blood clotting** seals wounds\n- friendly bacteria on the skin and in the gut compete with pathogens.',
    'If pathogens get in:\n- **inflammation**: damaged cells release **histamine**; blood vessels widen and become leaky, bringing fluid and white cells to the site (redness, heat, swelling, pain)\n- **phagocytosis**: **neutrophils** and **macrophages** are attracted, engulf the pathogen into a **phagosome**, which fuses with **lysosomes** whose enzymes digest it\n- **fever** slows the multiplication of many pathogens.',
    'Macrophages then **present antigens** of the digested pathogen on their surface, which starts the **specific** immune response.',
  ], 'immunity-types', 'Barriers, inflammation, phagocytosis: the same against every pathogen.',
  ['Lysozyme in tears protects the eyes by:', ['digesting bacterial cell walls', 'making antibodies', 'clotting blood', 'killing viruses inside cells'], 'A non-specific chemical defence.'],
  [['Non-specific defence', 'A defence that acts against any pathogen.'], ['Phagocytosis', 'Engulfing and digesting particles.'], ['Inflammation', 'Swelling, heat and redness that bring defences to an injured site.'], ['Antigen presentation', 'Displaying pathogen antigens on a cell surface.']],
  [
    { q: 'Describe how a neutrophil destroys a bacterium.', steps: ['**It moves towards chemicals released by the bacterium and damaged cells.**', '**It engulfs the bacterium by phagocytosis into a phagosome.**', '**Lysosomes fuse with the phagosome and their enzymes digest the bacterium.**'] },
  ]),

  L('ab-specific-6', 'ab-l6-immunity', '19.2', 'Lymphocytes and antibodies', 16, ['Immunity', 'Data analysis'], [
    'The **specific** response targets particular **antigens** (molecules, usually proteins, recognised as non-self). It is carried out by **lymphocytes**, made in the **bone marrow**:\n- **B lymphocytes** mature in the bone marrow; **T lymphocytes** mature in the **thymus**\n- each lymphocyte has receptors for **one** antigen; when it meets that antigen it is selected and divides by mitosis (**clonal selection and expansion**).',
    '**Humoral response** (B cells): activated B cells (helped by T helper cells) form **plasma cells**, which secrete **antibodies** into the blood, and **memory B cells**. An **antibody** is a Y-shaped protein of four polypeptide chains (two **heavy**, two **light**), held by disulfide bonds, with two identical **variable regions** that bind the antigen. Antibodies act by **agglutination** (clumping pathogens), **neutralising** toxins, marking pathogens for phagocytes (**opsonisation**) and activating proteins that burst them.\n**Cell-mediated response** (T cells): **T helper** cells release **cytokines** that activate B cells, T killer cells and macrophages; **T killer (cytotoxic)** cells destroy body cells infected with viruses or cancerous cells; **memory T cells** remain.',
    'The **primary response** to a first infection is slow (days to weeks) with few antibodies; the person may fall ill. In a second infection, **memory cells** give a **secondary response** that is faster, larger and longer, often destroying the pathogen before symptoms appear: the person is **immune**.',
  ], 'antibody-response', 'B cells make antibodies; T cells help and kill; memory gives immunity.',
  ['Plasma cells are derived from:', ['B lymphocytes', 'T killer cells', 'neutrophils', 'red blood cells'], 'They secrete antibodies.'],
  [['Antigen', 'A molecule that triggers an immune response.'], ['Clonal selection', 'Activation and multiplication of the lymphocyte that recognises an antigen.'], ['Plasma cell', 'A cell that secretes antibodies.'], ['Memory cell', 'A long-lived lymphocyte that gives a fast secondary response.']],
  [
    { q: 'A graph shows antibody levels peaking at 10 units on day 12 after a first infection, and at 100 units on day 5 after a second. Explain the difference.', steps: ['**The first (primary) response needs time for clonal selection and expansion from few B cells.**', '**Memory cells formed then are many and long-lived.**', '**On re-infection they divide quickly into plasma cells, giving more antibody sooner: the secondary response.**'] },
  ]),

  L('ab-vaccines-6', 'ab-l6-immunity', '19.3', 'Types of immunity and vaccination', 14, ['Immunity', 'Health'], [
    'Immunity is **active** when the body makes its own antibodies and memory cells (long-lasting) and **passive** when ready-made antibodies are received (immediate but short-lived, no memory):\n- **natural active**: after catching a disease\n- **artificial active**: after **vaccination**\n- **natural passive**: antibodies crossing the **placenta** or in **breast milk** (colostrum)\n- **artificial passive**: injection of antibodies (antiserum), for example **antivenom** after a snakebite or anti-tetanus serum.',
    'A **vaccine** contains antigens in a harmless form: killed or weakened (attenuated) pathogens, inactivated toxins (toxoids), parts of pathogens, or mRNA coding for an antigen. It causes a primary response and the formation of memory cells without the disease. When enough people are vaccinated, the pathogen cannot spread: **herd immunity** protects babies and the sick who cannot be vaccinated.',
    'Cameroon’s **Expanded Programme on Immunisation (EPI, PEV in French)** vaccinates children free of charge against tuberculosis (BCG), polio, diphtheria, tetanus, whooping cough, hepatitis B, Haemophilus influenzae type b, pneumococcus, rotavirus, measles and yellow fever, and since 2024 against malaria. Smallpox was eradicated worldwide in 1980 through vaccination.',
  ], 'immunity-types', 'Active makes memory; passive borrows antibodies.',
  ['A snakebite victim given antivenom receives:', ['artificial passive immunity', 'artificial active immunity', 'natural passive immunity', 'natural active immunity'], 'Ready-made antibodies, fast but short-lived.'],
  [['Active immunity', 'Immunity from antibodies and memory cells made by the body itself.'], ['Passive immunity', 'Immunity from antibodies received from outside.'], ['Vaccine', 'A preparation of harmless antigens that stimulates immunity.'], ['Herd immunity', 'Protection of a population when most people are immune.']],
  [
    { q: 'Explain why measles vaccination must reach most children, not only some.', steps: ['**Measles spreads very easily, so it needs only a few susceptible people to keep circulating.**', '**When most children are immune, the virus cannot find enough new hosts.**', '**This herd immunity also protects babies too young to be vaccinated.**'] },
  ]),

  // ---------- 20. Classification ----------
  L('ab-taxonomy-6', 'ab-l6-classification', '20.1', 'Taxonomy and binomial nomenclature', 13, ['Environment', 'Classification'], [
    '**Taxonomy** is the science of naming and classifying organisms into groups (**taxa**) on the basis of shared features, ideally reflecting evolutionary relationships. The hierarchy, from widest to narrowest:\n- **domain**, **kingdom**, **phylum**, **class**, **order**, **family**, **genus**, **species**.\nA **species** is a group of organisms that can interbreed to produce **fertile** offspring.',
    '**Binomial nomenclature**, introduced by **Carl Linnaeus** in the 18th century, gives each species a two-part Latin name: the **genus** (capital letter) and the **specific name** (small letter), written in *italics* or underlined when handwritten. Examples: humans, *Homo sapiens*; maize, *Zea mays*; the cocoa tree, *Theobroma cacao*; the malaria parasite, *Plasmodium falciparum*. The scientific name is the same in every language, avoiding confusion between local names.',
    'Example: the domestic cat: domain Eukarya; kingdom Animalia; phylum Chordata; class Mammalia; order Carnivora; family Felidae; genus *Felis*; species *Felis catus*.',
  ], 'classification-key', 'Domain, kingdom, phylum, class, order, family, genus, species.',
  ['In *Theobroma cacao*, "Theobroma" is the:', ['genus', 'species name alone', 'family', 'order'], 'It begins with a capital letter.'],
  [['Taxonomy', 'The science of naming and classifying organisms.'], ['Species', 'A group that can interbreed to produce fertile offspring.'], ['Binomial nomenclature', 'The two-part scientific naming system.']],
  [
    { q: 'A horse and a donkey can mate and produce a mule. Are they the same species? Explain.', steps: ['**No.**', '**The mule is sterile, so the offspring are not fertile.**', '**A species must produce fertile offspring, so horse and donkey are separate species.**'] },
  ]),

  L('ab-kingdoms-6', 'ab-l6-classification', '20.2', 'The five kingdoms and dichotomous keys', 15, ['Environment', 'Classification', 'Practical'], [
    'The **five-kingdom** system (Whittaker, 1969, later refined) uses cell type, cell number, nutrition and wall:\n- **Prokaryotae**: no nucleus; single cells; walls of peptidoglycan (bacteria)\n- **Protoctista**: eukaryotes, mostly single-celled, that do not fit elsewhere (Amoeba, Plasmodium, algae)\n- **Fungi**: eukaryotes with **chitin** walls; heterotrophic, feeding by **external digestion** (saprotrophs); bodies of hyphae (mushrooms, moulds, yeast)\n- **Plantae**: multicellular, photosynthetic, **cellulose** walls, chlorophyll\n- **Animalia**: multicellular heterotrophs with no cell walls, usually with nervous coordination.\nThe **three-domain** system (Woese, 1990), based on RNA sequences, places **Bacteria** and **Archaea** in separate domains and all eukaryotes in **Eukarya**.',
    'A **dichotomous key** identifies organisms by a series of paired, contrasting statements about **visible features**, each leading either to a name or to the next pair. Good keys use features that are easy to see and not variable (avoid size and colour where possible), and each step divides the group into two.',
    'Practical: to construct a key for local specimens (a hibiscus leaf, a fern, a grasshopper, a millipede, a snail), list their features, choose a feature that splits the group into two, and continue until each specimen is separated. Test the key by having another student use it.',
  ], 'ab-five-kingdoms', 'Fungi: chitin and external digestion; plants: cellulose and chlorophyll.',
  ['Yeast belongs to the kingdom:', ['Fungi', 'Prokaryotae', 'Plantae', 'Protoctista'], 'A single-celled fungus.'],
  [['Prokaryotae', 'The kingdom of organisms without a nucleus.'], ['Protoctista', 'The kingdom of mostly single-celled eukaryotes.'], ['Saprotroph', 'An organism that feeds on dead matter by external digestion.'], ['Dichotomous key', 'An identification key based on pairs of contrasting statements.']],
  [
    { q: 'Write the first two steps of a key to separate a grasshopper, a millipede, a spider and a snail.', steps: ['**1. Jointed legs present ... go to 2; no jointed legs (soft body, shell) ... snail.**', '**2. More than 10 legs ... millipede; 10 or fewer legs ... go to 3.**', '**3. Six legs and wings ... grasshopper; eight legs, no wings ... spider.**'] },
  ]),

  // ---------- 21. Exam drills ----------
  L('ab-paper1-6', 'ab-l6-papers', '21.1', 'The A Level Biology papers and multiple choice', 13, ['Examination'], [
    'GCE A Level **Biology (0710)** has three parts:\n- **Paper 1**: **multiple-choice** questions in **1½ hours**\n- **Paper 2**: **structured and essay questions** in **3 hours**\n- **Paper 3**: the **practical** examination, held in May before the written papers (11 to 15 May in 2026).\nThe course spans Lower and Upper Sixth; Lower Sixth topics are examined at the end of Upper Sixth, so keep notes and logbooks complete.',
    'Multiple-choice technique:\n- read the stem fully; watch for NOT, EXCEPT, LEAST\n- work out the answer before reading the options\n- for data and graph items, read axes and units carefully\n- eliminate options that are wrong in any part\n- answer every item, and keep a steady pace.',
    'Common traps in Lower Sixth topics: confusing water potential signs; mixing up the sites of the light and dark stages; forgetting that glycolysis is in the cytoplasm; calling the SAN a nerve; confusing active and passive immunity.',
  ], 'ab-gce-0710', 'Paper 1 1½ h; Paper 2 3 h; practical in May.',
  ['An item asks which is NOT a function of the Golgi apparatus. You should look for:', ['the one option the Golgi does not do', 'any Golgi function', 'the longest option', 'option A'], 'Read the negative.'],
  [['Stem', 'The question part of a multiple-choice item.'], ['Practical examination', 'The assessed laboratory paper.']],
  [
    { q: 'An item says: "Which process produces the most ATP per glucose?" Options: glycolysis, link reaction, Krebs cycle, oxidative phosphorylation. Reason it out.', steps: ['**Glycolysis: net 2; link reaction: none; Krebs: 2 per glucose.**', '**Oxidative phosphorylation: about 26 to 28 (most of the 30 to 32).**', '**Answer: oxidative phosphorylation.**'] },
  ]),

  L('ab-essay-6', 'ab-l6-papers', '21.2', 'Biological drawings and essays', 15, ['Examination'], [
    '**Biological drawings**:\n- use a sharp **pencil**, clear **continuous** lines, no shading\n- draw what you **see**, in correct proportions, large enough (at least half the space)\n- a **low-power plan** shows tissue outlines only, no cells; a **high-power drawing** shows a few cells in detail\n- label with **ruled lines** that do not cross and touch the structure; write labels horizontally away from the drawing\n- give a **title** and the **magnification**.',
    '**Structured and essay questions**:\n- read the command word: **describe** (what happens), **explain** (why or how), **compare** (similarities and differences, point by point), **outline** (main points briefly), **discuss** (several sides)\n- plan essays before writing: list the points in a logical order; for pathways (photosynthesis, respiration), follow the sequence and give the **site** of each stage, inputs and outputs\n- use precise terms (glycerate 3-phosphate, not "a 3-carbon thing"); add labelled diagrams where they save words.',
    'Use the **marks** as a guide: roughly one creditable point per mark. Keep to time in the 3-hour Paper 2, leaving time to check calculations and units.',
  ], 'ab-gce-0710', 'Plan, sequence, site, inputs, outputs.',
  ['A low-power plan of a stem section should show:', ['outlines of the tissues, without individual cells', 'every cell in detail', 'shading of each tissue', 'colours'], 'Cells are drawn only at high power.'],
  [['Low-power plan', 'A drawing showing the arrangement of tissues without cells.'], ['Command word', 'The word telling you what kind of answer is needed.']],
  [
    { q: 'Plan an essay: "Describe the light-independent stage of photosynthesis." (8 marks)', steps: ['**Site: stroma of the chloroplast.**', '**Fixation: CO₂ + RuBP, catalysed by rubisco, forms two GP.**', '**Reduction: GP to triose phosphate using ATP and reduced NADP from the light stage.**', '**Regeneration of RuBP using ATP; some TP used to make glucose, starch, amino acids and lipids.**'] },
  ]),
];
