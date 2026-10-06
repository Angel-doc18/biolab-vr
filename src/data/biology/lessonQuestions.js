// Extra questions for the end of Biology lessons, so that every lesson ends with
// at least five questions on what it teaches (with its check question and the
// topic-quiz questions that belong to it; see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'bi-science-1': [
    Q('In which order do scientists usually work?', ['Observe, ask a question, suggest a hypothesis, test it, draw a conclusion', 'Draw a conclusion, test, observe, ask a question', 'Test, observe, conclude, ask a question', 'Ask a question, conclude, observe, test'], 'The scientific method starts with an observation and ends with a conclusion that is shared with others.'),
    Q('A glass or wooden box in which snails or crickets are kept to be observed is a:', ['Vivarium', 'Aquarium', 'Nature calendar', 'Petri dish'], 'An aquarium does the same job for fish and water animals.'),
  ],
  'bi-wild-1': [
    Q('Which of these is a wild food collected in Cameroon’s forests?', ['Eru leaves (Gnetum)', 'Wheat', 'Apples', 'Barley'], 'Eru, bush mango and njansang are wild forest foods; wheat, apples and barley are not.'),
    Q('Which animal found in Cameroon is endangered?', ['The Cross River gorilla', 'The domestic goat', 'The house rat', 'The chicken'], 'Gorillas, forest elephants, pangolins and grey parrots could die out; farm animals are not endangered.'),
    Q('The first step in protecting the useful and endangered species around a school is to:', ['Make an inventory, a list of them', 'Cut down the trees around them', 'Sell them in the market', 'Hunt them all year'], 'You must know which species are there before you can protect them.'),
    Q('Medicinal plants should be used:', ['Only on the advice of a health worker', 'In any amount you like', 'Instead of every hospital treatment', 'Only by children'], 'Plant remedies can be strong or harmful; a health worker advises on safe use.'),
  ],
  'bi-grow-2': [
    Q('A pregnancy in a girl whose body is not yet fully grown is called:', ['An early pregnancy', 'Puberty', 'Abstinence', 'Menstruation'], 'It is risky for the young mother and her baby and often ends her schooling.'),
    Q('Besides preventing pregnancy, abstinence also protects young people from:', ['STIs and HIV', 'Malaria', 'Tooth decay', 'Short sight'], 'Without sexual intercourse, sexually transmitted infections cannot pass this way.'),
  ],
  'bi-smallstock-1': [
    Q('Which chickens are kept mainly because they grow quickly for meat?', ['Broilers', 'Layers', 'Laying ducks', 'Guinea fowl kept for eggs'], 'Layers are kept for eggs; broilers are kept for meat.'),
    Q('Goats and sheep are dewormed regularly to:', ['Get rid of worms that weaken them', 'Make them grow wool', 'Change their colour', 'Stop them chewing the cud'], 'Worms take their food and make them thin and sick.'),
  ],
  'bi-process-1': [
    Q('Yoghurt is made by adding special bacteria to:', ['Warm milk', 'Palm oil', 'Wheat flour', 'Cold water'], 'The bacteria make the milk thick and sour.'),
    Q('Selling flour, oil or yoghurt instead of raw produce helps the farmer because processing:', ['Adds value and reduces waste', 'Makes the food rot faster', 'Always lowers the price', 'Removes all the nutrients'], 'Processed food keeps longer and sells for more.'),
  ],
  'bi-reprohygiene-1': [
    Q('Which underwear is best for the health of the genitals?', ['Clean cotton underwear changed every day', 'Tight nylon underwear worn for several days', 'Damp underwear', 'Underwear shared with friends'], 'Cotton lets air through and absorbs sweat; daily changes keep germs away.'),
    Q('Washing inside the body with strong chemicals, perfumes or herbs is:', ['Harmful', 'Needed every day', 'A cure for infections', 'Good for growth'], 'It damages the delicate lining and its natural protection.'),
  ],
  'bi-branches-1': [
    Q('The study of animals is called:', ['Zoology', 'Botany', 'Ecology', 'Genetics'], 'Botany is the study of plants.'),
    Q('The branch of biology that studies how features are passed from parents to their young is:', ['Genetics', 'Anatomy', 'Microbiology', 'Botany'], 'Anatomy studies the structure of the body; microbiology studies tiny living things.'),
    Q('Unlike animals, plants:', ['Keep growing at the tips of their roots and shoots all their lives', 'Respond quickly using nerves', 'Move from place to place', 'Eat other living things'], 'Animals usually stop growing when they are adult.'),
  ],
  'bi-labsafety-1': [
    Q('A small, very sharp knife used to cut specimens is a:', ['Scalpel', 'Pair of forceps', 'Dropper', 'Petri dish'], 'Forceps pick things up; a dropper adds drops of liquid.'),
    Q('Small specimens are picked up with:', ['Forceps', 'A beaker', 'A scalpel', 'A measuring cylinder'], 'Forceps work like tweezers.'),
    Q('To use a hand lens correctly, you should:', ['Hold it close to your eye and bring the specimen towards it', 'Hold it at arm’s length and move it back and forth', 'Look at the Sun through it', 'Lay it on the specimen and look from far away'], 'Keep the lens near the eye and move the specimen until it is clear.'),
    Q('Why should you wash your hands after handling soil or specimens?', ['They may carry germs', 'Soil makes your hands grow', 'It is a rule with no reason', 'Soil is always poisonous to touch'], 'Germs on the hands can be swallowed later.'),
    Q('If you cut your finger in the laboratory, you should:', ['Tell the teacher at once', 'Hide it and carry on', 'Wash it in the specimen dish', 'Ignore it'], 'Every accident must be reported so it can be treated.'),
  ],
  'bi-microscope-1': [
    Q('The lens at the top of a microscope, where you look, is the:', ['Eyepiece', 'Objective lens', 'Condenser', 'Mirror'], 'The objectives are just above the specimen.'),
    Q('Which part controls how much light passes up through the specimen?', ['The diaphragm', 'The arm', 'The stage clips', 'The coarse adjustment knob'], 'Closing the diaphragm lets less light through.'),
    Q('The right way to carry a microscope is:', ['Upright, with one hand on the arm and the other under the base', 'By the eyepiece with one hand', 'Upside down', 'By the stage clips'], 'Two hands keep it steady so it is not dropped.'),
  ],
  'bi-levels-1': [
    Q('Living things made of only one cell, such as Amoeba, are:', ['Unicellular', 'Multicellular', 'Tissues', 'Organs'], 'Uni means one.'),
    Q('Which cell has a long, thin outgrowth that takes in water from the soil?', ['Root hair cell', 'Red blood cell', 'Sperm cell', 'Palisade cell'], 'The outgrowth gives a large surface for absorbing water.'),
    Q('The heart and blood vessels together form:', ['The circulatory system', 'The digestive system', 'A tissue', 'A single cell'], 'Organs working together form an organ system.'),
  ],
  'bi-kingdoms-2': [
    Q('Maize and palms are monocotyledons because their seeds have:', ['One seed leaf', 'Two seed leaves', 'No seed leaf', 'Cones'], 'Beans and mango, with two seed leaves, are dicotyledons.'),
    Q('Birds and mammals are warm-blooded, which means they:', ['Keep their body temperature steady', 'Take on the temperature of their surroundings', 'Always feel hot to touch', 'Live only in hot places'], 'Fish, amphibians and reptiles are cold-blooded.'),
  ],
  'bi-food-1': [
    Q('A herbivore, which eats plants, is a:', ['Primary consumer', 'Producer', 'Secondary consumer', 'Decomposer'], 'It is the first consumer in the chain, after the producer.'),
    Q('If all the snakes on a farm are killed, the farmer will most likely find:', ['More rats eating the grain', 'Fewer rats', 'More snakes', 'No change'], 'Snakes eat rats; without them the rats increase.'),
  ],
  'bi-water-1': [
    Q('About how much of the human body is water?', ['70%', '10%', '30%', '99%'], 'Water is the main substance in our bodies.'),
    Q('Ice floats on water because it is:', ['Less dense than liquid water', 'Heavier than water', 'Warmer than water', 'A different substance from water'], 'This lets fish survive under frozen ponds.'),
    Q('Rain water that flows over the ground back into rivers is called:', ['Run-off', 'Infiltration', 'Transpiration', 'Condensation'], 'Infiltration is water soaking into the soil.'),
  ],
  'cell-3': [
    Q('A plant cell placed in pure water becomes:', ['Turgid', 'Plasmolysed', 'Crenated', 'Burst'], 'Water enters by osmosis and the cell presses against its wall.'),
    Q('Plasmolysis happens when a plant cell is placed in:', ['A concentrated salt or sugar solution', 'Pure water', 'A very dilute solution', 'Air'], 'Water leaves by osmosis and the cytoplasm pulls away from the wall.'),
    Q('A plant cell does not burst in pure water because:', ['Its strong cell wall resists the pressure', 'It has no vacuole', 'It cannot take in water', 'It has no membrane'], 'A red blood cell has no wall, so it bursts.'),
  ],
  'bi-exchange-1': [
    Q('Which change makes diffusion faster?', ['A steeper concentration gradient', 'A longer distance', 'A smaller surface', 'A lower temperature'], 'A steep gradient, large surface, short distance and warmth all speed it up.'),
    Q('Hospital drips are made isotonic with blood so that:', ['There is no net movement of water into or out of the blood cells', 'Blood cells burst', 'Blood cells shrink', 'Water leaves the blood'], 'An isotonic solution has the same concentration as the cells.'),
  ],
  'locomotion-3': [
    Q('Young stems and leaves are held up mainly by:', ['Turgor pressure in their cells', 'A skeleton of bone', 'Lignin in every cell', 'Muscles'], 'Turgid cells press against each other and against their walls.'),
    Q('The substance that thickens and strengthens the walls of xylem vessels is:', ['Lignin', 'Starch', 'Chlorophyll', 'Protein'], 'Lignin makes woody tissue strong and rigid.'),
    Q('Sclerenchyma fibres are:', ['Dead cells with very thick walls', 'Living cells full of chloroplasts', 'Root hairs', 'Guard cells'], 'Their thick walls give strength.'),
    Q('A mango tree is supported mainly by:', ['Lignified tissues such as xylem and fibres', 'Turgor pressure alone', 'Air in its leaves', 'Its flowers'], 'Woody plants rely on lignin, not turgor.'),
  ],
  'bi-social-2': [
    Q('In a termite colony, defending the nest is the job of the:', ['Soldiers', 'Workers', 'Queen', 'Winged reproductives'], 'Soldiers have large heads and jaws or squirt sticky liquid.'),
    Q('A relationship in which one organism benefits and its host is harmed is:', ['Parasitism', 'Mutualism', 'Commensalism', 'Competition'], 'In mutualism both partners benefit.'),
  ],
  'bi-plantneeds-1': [
    Q('Carbon dioxide enters a leaf through the:', ['Stomata', 'Root hairs', 'Xylem', 'Flowers'], 'Guard cells open and close the stomata.'),
    Q('Plants need magnesium ions to make:', ['Chlorophyll', 'Cellulose only', 'Starch only', 'Water'], 'Without magnesium, leaves turn yellow.'),
    Q('Millions of root hairs help a plant because they give:', ['A large surface for absorbing water and minerals', 'Support against the wind', 'Food by photosynthesis', 'Protection from insects'], 'More surface means faster absorption.'),
  ],
  'transport-3': [
    Q('An instrument that measures how fast a leafy shoot takes up water is a:', ['Potometer', 'Thermometer', 'Barometer', 'Microscope'], 'Most of the water taken up is lost in transpiration.'),
    Q('Xylem vessels are:', ['Dead, hollow tubes strengthened with lignin', 'Living cells with sieve plates', 'Cells full of chloroplasts', 'Found only in flowers'], 'Phloem has living sieve tubes.'),
  ],
  'nutrition-1': [
    Q('Which is the balanced equation for photosynthesis?', ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O', 'CO₂ + H₂O → O₂', '6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂'], 'The second equation is respiration, the reverse process.'),
    Q('Most chloroplasts in a leaf are in the:', ['Palisade mesophyll', 'Lower epidermis', 'Xylem', 'Cuticle'], 'The palisade layer is near the upper surface, where light is strongest.'),
    Q('The factor in shortest supply, which limits the rate of photosynthesis, is the:', ['Limiting factor', 'Catalyst', 'Compensation point', 'By-product'], 'Light, carbon dioxide and temperature can each be limiting.'),
  ],
  'gas-3': [
    Q('Green plants respire:', ['All the time, day and night', 'Only at night', 'Only in the light', 'Never'], 'Respiration releases energy in every living cell at all times.'),
    Q('In bright light a green plant shows a net:', ['Uptake of carbon dioxide and release of oxygen', 'Release of carbon dioxide only', 'Uptake of oxygen only', 'No gas exchange'], 'Photosynthesis is faster than respiration in bright light.'),
    Q('Hydrogencarbonate indicator turns purple when:', ['Carbon dioxide falls', 'Carbon dioxide rises', 'Oxygen falls', 'It is heated'], 'It stays red at normal levels and turns yellow when carbon dioxide rises.'),
    Q('Insects take in air through openings in their body called:', ['Spiracles', 'Stomata', 'Gills', 'Alveoli'], 'The spiracles lead into tubes called tracheae.'),
  ],
  'bi-translocation-1': [
    Q('Before it is carried in the phloem, glucose is changed into:', ['Sucrose', 'Starch', 'Cellulose', 'Lactose'], 'Sucrose is the sugar transported in plants.'),
    Q('If a ring of bark is removed from a tree trunk, the roots eventually die because:', ['Food can no longer reach them through the phloem', 'Water can no longer reach the leaves', 'The xylem is cut', 'The tree stops transpiring'], 'The phloem is in the bark; the xylem in the wood still carries water.'),
    Q('Phloem differs from xylem because phloem:', ['Carries food both up and down the plant', 'Is made of dead cells', 'Carries only water', 'Has no sieve plates'], 'Xylem carries water only upwards.'),
  ],
  'bi-foodchem-1': [
    Q('Which reagent turns purple when protein is present?', ['Biuret reagent', 'Iodine solution', 'Benedict’s solution', 'Ethanol'], 'Iodine tests for starch and Benedict’s for reducing sugars.'),
    Q('Iodine solution turns blue-black with:', ['Starch', 'Fat', 'Protein', 'Glucose'], 'Its colour changes from brown to blue-black.'),
    Q('A fat molecule is made of glycerol joined to:', ['Three fatty acids', 'Amino acids', 'Glucose units', 'Nitrogen atoms'], 'Digestion splits fats back into fatty acids and glycerol.'),
    Q('Which polysaccharide is stored in animals?', ['Glycogen', 'Sucrose', 'Glucose', 'Lactose'], 'Plants store starch instead.'),
  ],
  'bi-teeth-1': [
    Q('How many teeth does an adult human have?', ['32', '28', '20', '36'], '8 incisors, 4 canines, 8 premolars and 12 molars.'),
    Q('Tooth decay happens when bacteria in plaque:', ['Turn sugar into acid that dissolves enamel', 'Eat the enamel directly', 'Add fluoride to it', 'Make the teeth grow'], 'Less sugar between meals and brushing with fluoride toothpaste prevent it.'),
  ],
  'bi-absorb-1': [
    Q('Glucose and amino acids are absorbed into the:', ['Blood capillaries of the villi', 'Lacteals only', 'Stomach wall', 'Large intestine'], 'Fatty acids and glycerol go into the lacteals.'),
    Q('Blood from the gut is carried to the liver in the:', ['Hepatic portal vein', 'Pulmonary artery', 'Aorta', 'Renal vein'], 'The liver controls what passes on to the rest of the body.'),
    Q('Using absorbed food to build or run the cells is called:', ['Assimilation', 'Egestion', 'Ingestion', 'Deamination'], 'Egestion is getting rid of undigested food.'),
  ],
  'bi-virus-1': [
    Q('Why are antibiotics not used to treat viral infections?', ['Antibiotics kill bacteria, not viruses', 'Viruses are too large', 'Viruses are plants', 'Viruses have no genes'], 'Viruses multiply inside our own cells, where antibiotics do not act.'),
    Q('Ebola spreads mainly through:', ['Contact with the blood and body fluids of infected people or animals', 'Mosquito bites', 'Drinking clean water', 'Sunlight'], 'Even the bodies of people who died of Ebola can pass it on.'),
  ],
  'bi-prevent-1': [
    Q('A vaccine gives long-lasting protection because:', ['The body makes its own antibodies and memory cells', 'It contains ready-made antibodies', 'It kills all bacteria at once', 'It replaces the blood'], 'A serum, with ready-made antibodies, protects only for a few weeks.'),
    Q('In an Ebola outbreak, utensils and floors are disinfected with:', ['Chlorine solution', 'Sugar water', 'Palm oil', 'Plain water'], 'Chlorine kills the virus on surfaces.'),
  ],
  'bi-circhygiene-1': [
    Q('Blood pressure above about 140/90 mmHg is called:', ['Hypertension', 'Anaemia', 'Haemorrhage', 'Oedema'], 'It often has no signs but damages the heart, kidneys and brain.'),
    Q('Which habit keeps the circulatory system healthy?', ['Regular exercise and little salt and fat in the diet', 'Smoking', 'Eating very salty food every day', 'Avoiding all exercise'], 'Exercise and a good diet lower blood pressure.'),
  ],
  'bi-resphygiene-1': [
    Q('A cough lasting more than two weeks, with night sweats and weight loss, may be a sign of:', ['Tuberculosis', 'Tonsillitis', 'A common cold', 'Hiccups'], 'Such a cough should always be checked at a health centre.'),
    Q('Which vaccine protects children against tuberculosis?', ['BCG', 'Polio vaccine', 'Measles vaccine', 'Tetanus vaccine'], 'BCG is given soon after birth.'),
    Q('In asthma:', ['The bronchioles narrow, causing wheezing', 'The alveoli fill with blood', 'The heart stops', 'The tonsils swell'], 'An inhaler widens the airways again.'),
    Q('Emphysema and lung cancer are caused mainly by:', ['Smoking', 'Drinking water', 'Exercise', 'Eating fruit'], 'Tobacco smoke damages the alveoli and cells of the lungs.'),
  ],
  'kidney-2': [
    Q('Normal human body temperature is about:', ['37 °C', '27 °C', '40 °C', '100 °C'], 'The body keeps it close to 37 °C by homeostasis.'),
    Q('The part of the brain that monitors blood temperature is the:', ['Hypothalamus', 'Cerebellum', 'Spinal cord', 'Cochlea'], 'It coordinates sweating, shivering and changes in skin blood flow.'),
  ],
  'bi-skinliver-1': [
    Q('The skin pigment that protects against ultraviolet light is:', ['Melanin', 'Chlorophyll', 'Haemoglobin', 'Bile'], 'People with albinism lack melanin and need extra sun protection.'),
    Q('Scabies, which causes intense itching at night, is caused by:', ['A tiny mite that burrows under the skin', 'A fungus', 'A virus in water', 'Too much sunlight'], 'Everyone in the household is treated at the same time.'),
    Q('Hepatitis B, common in Cameroon, is prevented by:', ['Vaccination', 'Eating more sugar', 'Wearing a hat', 'Drinking alcohol'], 'It spreads through blood, sex and from mother to baby.'),
  ],
  'bi-bone-1': [
    Q('How many bones does the adult human skeleton have?', ['206', '106', '306', '26'], 'Babies are born with more, some of which fuse as they grow.'),
    Q('A child with soft, bowed leg bones from lack of vitamin D or calcium has:', ['Rickets', 'Scurvy', 'Anaemia', 'Scoliosis'], 'Sunlight, milk and small fish help prevent it.'),
  ],
  'bi-muscle-1': [
    Q('Muscle attached to bones and under our control is:', ['Skeletal muscle', 'Smooth muscle', 'Cardiac muscle', 'Involuntary muscle'], 'Smooth and cardiac muscle work without our control.'),
    Q('During hard exercise, anaerobic respiration in the muscles makes:', ['Lactic acid', 'Alcohol', 'Starch', 'Oxygen'], 'Lactic acid build-up causes fatigue.'),
    Q('The extra oxygen taken in after exercise to break down lactic acid is the:', ['Oxygen debt', 'Tidal volume', 'Vital capacity', 'Compensation point'], 'That is why we keep breathing deeply after running.'),
  ],
  'genetics-1': [
    Q('The characteristic that can be seen, such as tall or short, is the:', ['Phenotype', 'Genotype', 'Allele', 'Chromosome'], 'The genotype is the pair of alleles.'),
    Q('An organism with the genotype tt is:', ['Homozygous recessive', 'Heterozygous', 'Homozygous dominant', 'A carrier'], 'Two identical recessive alleles.'),
  ],
  'reproduction-3': [
    Q('Mitosis produces:', ['Two cells genetically identical to the parent cell', 'Four haploid gametes', 'Cells with half the chromosomes', 'One cell with double the chromosomes'], 'Meiosis makes four haploid cells.'),
    Q('Which kind of cell division is used for growth and repair?', ['Mitosis', 'Meiosis', 'Fertilisation', 'Mutation'], 'Meiosis makes gametes.'),
  ],
  'genetics-2': [
    Q('In the cross Tt × Tt, what fraction of the offspring is tt?', ['1/4', '1/2', '3/4', 'None'], 'TT, Tt, Tt, tt: one in four.'),
    Q('A tall plant crossed with a short plant (tt) gives some short offspring. The tall parent was:', ['Heterozygous (Tt)', 'Homozygous (TT)', 'Short', 'A mutant'], 'This is a test cross: short offspring need a t from each parent.'),
    Q('A man is XY and a woman XX. The chance that their next child is a boy is:', ['1 in 2', '1 in 4', '3 in 4', 'Certain'], 'Half the sperm carry X and half carry Y.'),
  ],
  'genetics-3': [
    Q('Which is an example of continuous variation?', ['Height', 'Blood group', 'Tongue rolling', 'Being male or female'], 'Height shows a range of values, not separate groups.'),
    Q('A change in a gene or a chromosome is a:', ['Mutation', 'Selection', 'Variation in height', 'Fertilisation'], 'Radiation and some chemicals make mutations more likely.'),
    Q('Down’s syndrome is caused by:', ['An extra chromosome 21', 'Lack of vitamin A', 'A virus', 'Too much sunlight'], 'It is a chromosome mutation.'),
    Q('Breeding maize by choosing the best plants each year is:', ['Artificial selection', 'Natural selection', 'Mutation', 'Discontinuous variation'], 'People, not the environment, choose which plants breed.'),
  ],
  'bi-family-1': [
    Q('Which is the only completely reliable method of birth control?', ['Abstinence', 'The calendar method', 'Withdrawal', 'The pill used now and then'], 'The calendar method and withdrawal often fail.'),
    Q('Hormonal methods such as the pill and injections work by:', ['Stopping ovulation', 'Killing viruses', 'Protecting against STIs', 'Blocking the urethra'], 'They give no protection against STIs.'),
    Q('Cutting the sperm ducts as a permanent method of birth control is:', ['Vasectomy', 'Tubal ligation', 'Ovulation', 'Fertilisation'], 'Tubal ligation cuts the oviducts.'),
  ],
  'bi-sense-1': [
    Q('The three tiny bones in the middle ear are the:', ['Ossicles', 'Vertebrae', 'Semicircular canals', 'Cochlea'], 'The hammer, anvil and stirrup pass vibrations to the inner ear.'),
    Q('Which part of the ear helps us keep our balance?', ['The semicircular canals', 'The pinna', 'The eardrum', 'The Eustachian tube'], 'They detect movements of the head.'),
    Q('Long sight is corrected with a:', ['Converging (convex) lens', 'Diverging (concave) lens', 'Plain glass', 'Mirror'], 'Short sight needs a diverging lens.'),
  ],
  'ecology-1': [
    Q('A community of organisms together with their physical environment is:', ['An ecosystem', 'A habitat', 'A population', 'A trophic level'], 'A habitat is just the place where an organism lives.'),
    Q('Food chains rarely have more than four or five links because:', ['So much energy is lost at each level', 'Animals do not eat plants', 'There are no decomposers', 'Plants make too much food'], 'Only about 10% passes on each time.'),
  ],
  'ecology-2': [
    Q('Which process returns carbon dioxide to the air?', ['Respiration', 'Photosynthesis', 'Nitrogen fixation', 'Infiltration'], 'Decomposition and burning also release it.'),
    Q('Bacteria that change ammonium compounds into nitrites and then nitrates are:', ['Nitrifying bacteria', 'Denitrifying bacteria', 'Nitrogen-fixing bacteria', 'Pathogens'], 'Plants absorb the nitrates to make proteins.'),
    Q('Denitrifying bacteria in waterlogged soil:', ['Return nitrogen gas to the air', 'Make nitrates for plants', 'Live in root nodules', 'Carry out photosynthesis'], 'Draining soil reduces this loss of nitrogen.'),
    Q('Farmers grow beans or groundnuts in rotation with other crops because:', ['Their root nodules add nitrogen compounds to the soil', 'They use up all the nitrates', 'They kill all soil bacteria', 'They need no water'], 'Legumes keep the soil fertile without much fertiliser.'),
  ],
  'ecology-3': [
    Q('Malaria is caused by:', ['The protozoan Plasmodium', 'A virus', 'A bacterium in water', 'A fungus'], 'The female Anopheles mosquito carries it.'),
    Q('Removing stagnant water around homes helps control malaria because:', ['Mosquito larvae develop in it', 'It cools the air', 'It stops tsetse flies', 'It kills the parasite in the blood'], 'No stagnant water means fewer mosquitoes.'),
    Q('Sleeping sickness is spread by the:', ['Tsetse fly', 'Blackfly', 'Housefly', 'Anopheles mosquito'], 'Blackflies spread river blindness.'),
    Q('In eutrophication, fish die because:', ['Bacteria decomposing dead algae use up the oxygen', 'The water becomes too cold', 'The algae eat the fish', 'The fertiliser poisons them directly'], 'The water runs short of oxygen.'),
  ],
  'bi-pollution-1': [
    Q('Sulphur dioxide and nitrogen oxides from burning fuels form:', ['Acid rain', 'The ozone layer', 'Clean air', 'Compost'], 'Acid rain damages plants, buildings and lakes.'),
    Q('"The polluter pays" means that:', ['Whoever causes pollution is responsible for the damage', 'Everyone pays equally for pollution', 'Only the government pays', 'Polluting is free'], 'It is part of Cameroon’s 1996 environmental law.'),
  ],
  'bi-conserve-1': [
    Q('Protecting species where they live, for example in a national park, is called:', ['In situ conservation', 'Ex situ conservation', 'Deforestation', 'Poaching'], 'Zoos and botanic gardens are ex situ.'),
    Q('Which is a major threat to gorillas and pangolins in Cameroon?', ['Poaching and the bushmeat trade', 'Tree planting', 'School environment clubs', 'Seed banks'], 'Hunting and selling wild animals reduces their numbers fast.'),
    Q('The Dja Faunal Reserve is:', ['A UNESCO World Heritage Site', 'A zoo in Yaoundé', 'A botanic garden in Limbe', 'A seed bank'], 'It protects a large area of rainforest.'),
  ],
};
