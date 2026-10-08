// Form 4 Biology lessons added from the 2026/2027 harmonised scheme of work:
// photosynthesis in detail, how enzymes work, disease vectors and their control,
// and human impact on ecosystems and conservation. They sit beside the MINESEC
// Form 4 lessons. Original text written for this app. **double asterisks** mark
// key terms and *single asterisks* scientific names (italics).

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

export const LESSONS_F4 = [
  // ---------- Nutrition in plants ----------
  L(
    'bi-photo-2',
    'bi-f4-plants',
    '1.6',
    'Photosynthesis in detail: the two stages, limiting factors and the starch test',
    12,
    ['Photosynthesis', 'Practical'],
    [
      'Photosynthesis happens in two stages, one after the other, inside the **chloroplasts** of leaf cells.',
      'The **light stage** needs light:\n- **Chlorophyll** traps light energy.\n- This energy splits water molecules into **hydrogen** and **oxygen**. This is called **photolysis** (splitting by light).\n- The oxygen is a by-product. It diffuses out of the leaf through the stomata.\n- The hydrogen and the trapped energy are passed on to the next stage.',
      'The **dark stage** does not need light directly, so it can go on in light or dark, but only while the light stage supplies it:\n- **Carbon dioxide** from the air joins with the **hydrogen** from the light stage.\n- Using the energy trapped in the light stage, this makes **glucose**.\n- Each step is controlled by **enzymes**, so this stage is affected by **temperature**.',
      'Word equations for the two stages:\n- Light stage: water → hydrogen + oxygen (using light energy and chlorophyll)\n- Dark stage: hydrogen + carbon dioxide → glucose\nTogether they give the overall equation: carbon dioxide + water → glucose + oxygen.',
      'A **limiting factor** is the factor in shortest supply, which holds the rate down. Three factors can limit photosynthesis:\n- **light intensity**, in the light stage\n- **carbon dioxide concentration**, in the dark stage\n- **temperature**, because the dark stage uses enzymes\nIf you increase the limiting factor, the rate rises. Once the rate stops rising, another factor has become limiting.',
      'Farmers use this. In a greenhouse, growers add light, warmth and extra carbon dioxide so that no factor limits growth. In Cameroon, crops grow fastest in the hot, sunny months when they also have enough water.',
      '**Practical: is light and chlorophyll needed for starch?** Use a plant with **variegated** leaves (green and white patches), such as a croton or a spider plant:\n- **Destarch** it: keep it in the dark for 48 hours, so it uses up its stored starch.\n- Put it in the light for a few hours. Cover part of one leaf with black paper or foil.\n- Pick the leaf. Boil it in water for one minute to kill the cells and stop the enzymes.\n- Put it in a test tube of **ethanol** standing in hot water, to remove the chlorophyll. Never heat ethanol over a flame: it catches fire easily.\n- Rinse the leaf in warm water to soften it, then spread it on a white tile and add **iodine solution**.',
      'Results: only the parts that were **green and in the light** turn **blue-black**. The white parts and the covered part stay **brown**, the colour of iodine. So starch was made only where there was both **chlorophyll** and **light**.',
    ],
    ['photosynthesis-stages', 'limiting-factors', 'starch-test-leaf'],
    'In the starch test, give a **reason** for every step: destarching removes old starch, boiling in water kills the cells, ethanol removes chlorophyll so the colour change can be seen, and warm water softens the brittle leaf.',
    ['Why is a leaf boiled in ethanol in the starch test?', ['To remove the chlorophyll so the iodine colour can be seen', 'To kill the cells', 'To add starch to the leaf', 'To make the leaf green'], 'Chlorophyll would hide the blue-black colour. Boiling in water, before the ethanol, is the step that kills the cells.'],
    [
      ['Light stage', 'The first stage of photosynthesis: chlorophyll traps light and water is split into hydrogen and oxygen.'],
      ['Dark stage', 'The second stage: hydrogen and carbon dioxide make glucose, using enzymes and the energy from the light stage.'],
      ['Photolysis', 'The splitting of water by light energy in the light stage.'],
      ['Limiting factor', 'The factor in shortest supply, which holds down the rate of a process.'],
      ['Destarching', 'Keeping a plant in the dark for about two days so it uses up its starch before an experiment.'],
      ['Variegated leaf', 'A leaf with green parts (with chlorophyll) and white parts (without).'],
    ],
    [
      {
        q: 'A plant in bright light gives off oxygen bubbles at the same rate whether the lamp is moved closer or further away. Then the student bubbles extra carbon dioxide into the water and the rate rises. What was the limiting factor at first? Explain.',
        steps: ['Moving the lamp changed the light intensity but not the rate, so light was not limiting.', 'Adding carbon dioxide raised the rate.', 'So carbon dioxide concentration was the limiting factor: it was in shortest supply and held the rate down.'],
      },
    ]
  ),

  // ---------- Nutrition in animals ----------
  L(
    'bi-enzyme-2',
    'nutrition',
    '2.4',
    'How enzymes work: the lock-and-key model and what changes their rate',
    12,
    ['Enzymes', 'Practical'],
    [
      'An enzyme works on its **substrate** in three steps, called the **lock-and-key model**:\n- The substrate fits into the **active site** of the enzyme, because their shapes match, like a key in a lock.\n- They form an **enzyme-substrate complex**, and the reaction takes place.\n- The **products** leave. The enzyme is **unchanged** and can take the next substrate molecule.',
      'Because only a substrate of the right shape fits, each enzyme is **specific**: amylase acts on starch but not on protein. Because the enzyme is not used up, a little enzyme can change a lot of substrate.',
      'Four things change how fast an enzyme works:\n- **Temperature**: the rate rises up to the **optimum** (about 37 °C for human enzymes), because molecules move faster and meet more often. Above it the active site loses its shape and the enzyme is **denatured**. This is permanent.\n- **pH**: each enzyme has an optimum pH. Pepsin works best at about pH 2 (in the acid stomach), salivary amylase at about pH 7, and trypsin at about pH 8 (in the small intestine). Too much acid or alkali changes the active site.\n- **Substrate concentration**: more substrate means more collisions, so the rate rises. When every active site is busy, adding more substrate makes no difference: the enzyme is now limiting.\n- **Enzyme concentration**: more enzyme means more active sites, so the rate rises, as long as there is plenty of substrate.',
      'Cold does not destroy enzymes: they work very slowly but recover when warmed. This is why a fridge slows the spoiling of food, while cooking (high heat) destroys the enzymes for good.',
      '**Practical: the effect of pH on catalase.** Catalase in potato breaks down hydrogen peroxide into water and oxygen:\n- Put equal discs of fresh potato in tubes of buffer solution at pH 3, 5, 7, 9 and 11.\n- Add the same volume of hydrogen peroxide to each.\n- Measure the height of the froth (oxygen bubbles) after two minutes, or count the bubbles.\n- Keep everything else the same: the size and number of discs, the volume of peroxide, the temperature and the time.',
      'Results: the most froth forms near **pH 7**, the optimum for potato catalase, and much less in strong acid or alkali. This shows that catalase has an optimum pH: away from it, the shape of the active site changes.',
    ],
    ['lock-and-key', 'enzyme-graphs'],
    'When asked why the rate falls above the optimum temperature, say that the **active site changes shape** (the enzyme is **denatured**), so the substrate no longer fits. Do not write that the enzyme is "killed": enzymes are not alive.',
    ['What is the enzyme-substrate complex?', ['The enzyme and its substrate joined at the active site, while the reaction takes place', 'The product of the reaction', 'An enzyme that has been denatured', 'Two enzymes joined together'], 'In the lock-and-key model the substrate fits into the active site to form the complex; then the products leave and the enzyme is free again.'],
    [
      ['Active site', 'The part of an enzyme with the shape into which its substrate fits.'],
      ['Enzyme-substrate complex', 'The enzyme and substrate joined at the active site during the reaction.'],
      ['Lock-and-key model', 'The idea that a substrate fits an enzyme’s active site like a key fits a lock.'],
      ['Denatured', 'Describes an enzyme whose active site has lost its shape, so it no longer works; this is permanent.'],
      ['Optimum', 'The temperature or pH at which an enzyme works fastest.'],
    ],
    [
      {
        q: 'Amylase is added to starch at 10 °C, 37 °C and 80 °C. At which temperature is starch digested fastest, and what happens at 80 °C?',
        steps: ['37 °C is close to the optimum for human amylase, so digestion is fastest there.', 'At 10 °C the molecules move slowly, so the reaction is slow but the enzyme is not harmed.', 'At 80 °C the active site loses its shape: the amylase is denatured and the starch is not digested.'],
      },
    ]
  ),

  // ---------- Pests and disease vectors ----------
  L(
    'bi-vector-1',
    'bi-f4-vectors',
    '10.1',
    'Disease vectors: the mosquito and the housefly',
    12,
    ['Vectors', 'Life cycles'],
    [
      'A **vector** is an animal that carries a **pathogen** (a germ) from one host to another without suffering from the disease itself. Many serious diseases in Cameroon are spread by insect vectors.',
      'Important vectors in Cameroon:\n- the female *Anopheles* **mosquito**: malaria\n- the *Aedes* mosquito: yellow fever and dengue fever\n- the *Culex* mosquito: elephantiasis (filariasis)\n- the **housefly**: cholera, typhoid, dysentery and other diarrhoeal diseases\n- the **tsetse fly**: sleeping sickness\n- the **blackfly** near fast rivers: river blindness',
      'The **mosquito** has a **complete metamorphosis** with four stages, and the first three need water:\n- **Eggs** are laid on still water: puddles, tins, old tyres, blocked gutters.\n- The **larva** hangs below the surface and breathes air through a tube.\n- The **pupa** is comma-shaped. It does not feed but still breathes at the surface.\n- The **adult** comes out after about one to two weeks. Only the female sucks blood, because she needs it to make her eggs. This is how she passes on *Plasmodium*.',
      'The **housefly** also has a complete metamorphosis:\n- **Eggs** are laid in rubbish, dung and rotting food.\n- The **larva** is a white **maggot** that feeds on this decaying matter.\n- The **pupa** forms inside a hard brown case.\n- The **adult** fly comes out. In hot weather the whole cycle takes only about a week, so flies multiply very fast where refuse is left lying about.',
      'The housefly is a **mechanical** vector. It does not carry the germs inside its body as part of their life cycle. Instead, germs stick to its hairy legs and body when it lands on faeces. When it lands on our food, it leaves them there. It also spits saliva on food to dissolve it and passes faeces as it feeds.',
      'Knowing the life cycle shows where to attack: mosquitoes are easiest to stop at the **larva** stage in water, and flies at the **egg and larva** stages in refuse.',
    ],
    ['insect-life-cycles', 'housefly-cycle'],
    'When describing how a housefly spreads disease, mention all three ways: germs carried on its **legs and body hairs**, its **saliva** spread on food, and its **faeces** left on food.',
    ['Why does only the female mosquito pass on malaria?', ['Only the female sucks blood, which she needs to make her eggs', 'Only the female has wings', 'The male lives in water', 'The male kills the parasite'], 'Males feed on plant juices. A female that sucks blood from an infected person can pass Plasmodium to the next person she bites.'],
    [
      ['Vector', 'An organism that carries a pathogen from one host to another.'],
      ['Pathogen', 'An organism that causes disease, such as a bacterium, virus or protoctist.'],
      ['Complete metamorphosis', 'A life cycle with four stages: egg, larva, pupa and adult.'],
      ['Mechanical vector', 'A vector that carries germs on the outside of its body, like the housefly.'],
    ]
  ),
  L(
    'bi-vector-2',
    'bi-f4-vectors',
    '10.2',
    'Controlling pests and vectors: chemical, biological and environmental methods',
    12,
    ['Vectors', 'Control'],
    [
      'There are three main ways to control pests and vectors. The best results come from using them together.',
      '**Chemical control** uses poisons called **pesticides**:\n- **insecticides** sprayed in houses or on crops\n- **insecticide-treated bed nets**, which protect sleepers and kill mosquitoes that land on them\n- **larvicides** added to water where mosquitoes breed',
      'Chemical control works fast, but it has dangers:\n- Insects can become **resistant**, so the chemical stops working.\n- It also kills **useful insects**, such as bees and the predators that eat pests.\n- It **pollutes** soil, rivers and food, and can build up along food chains.\n- It can poison people if it is not used and stored with care.',
      '**Biological control** uses a living **natural enemy** to reduce a pest:\n- fish such as *Tilapia* and *Gambusia* that eat mosquito larvae in ponds\n- bacteria such as *Bacillus thuringiensis* that kill mosquito larvae but not fish or people\n- predators such as birds, frogs, spiders and ladybirds that eat insects',
      'Biological control does not pollute and often lasts, but it is slow. The enemy must be chosen carefully, so that it does not become a pest itself.',
      '**Environmental (cultural) control** removes the places where vectors breed:\n- drain puddles and blocked gutters, and fill holes\n- cover water drums and pots; throw away old tins and tyres\n- clear tall grass and bush around homes\n- collect refuse in covered bins and keep latrines covered\n- keep food covered so flies cannot land on it',
      'This is the cheapest method and anyone can do it. Using all three methods together is called **integrated pest management**.',
    ],
    'vector-control',
    'In a comparison question, give one **advantage** and one **disadvantage** of each method. For example, chemical control is fast but leads to resistance and pollution.',
    ['Putting fish that eat mosquito larvae into a pond is an example of:', ['Biological control', 'Chemical control', 'Environmental control', 'Vaccination'], 'Using a living natural enemy to reduce a pest is biological control.'],
    [
      ['Pesticide', 'A chemical that kills pests; insecticides kill insects.'],
      ['Resistance', 'When a pest population is no longer killed by a chemical that used to kill it.'],
      ['Biological control', 'Using a natural enemy, such as a predator or a pathogen, to reduce a pest.'],
      ['Integrated pest management', 'Combining chemical, biological and environmental methods to control pests.'],
    ]
  ),

  // ---------- Human impact and conservation ----------
  L(
    'bi-impact-1',
    'bi-f4-environment',
    '11.1',
    'How human activities damage ecosystems in Cameroon',
    12,
    ['Ecology', 'Conservation'],
    [
      'An **ecosystem** is a community of living things together with their non-living surroundings. People depend on ecosystems for food, water, wood, medicines and clean air, but many human activities damage them.',
      '**Deforestation** is the clearing of forest:\n- causes: farming, logging for timber, firewood and charcoal, roads, towns and mining\n- effects: loss of habitats and species, **soil erosion** on bare land, less rainfall in the area, and more carbon dioxide in the air, which adds to global warming',
      '**Overfishing** is catching fish faster than they can breed:\n- fishing with nets that have very small holes, which catch young fish before they breed\n- fishing with poison or dynamite, which kills everything in the water\n- result: fish become scarce in rivers, lakes and the sea, and fishermen lose their living',
      '**Habitat destruction** happens when towns grow, swamps are drained, mangroves are cut and dams flood valleys. The plants and animals that lived there lose their homes and food.',
      'Other damage comes from **poaching** (illegal hunting) and the **bushmeat** trade, **bush fires**, and **pollution** of water and soil by refuse, oil, pesticides and fertilisers.',
      'All of this leads to a **loss of biodiversity**: fewer species, and fewer animals in each species. In Cameroon, the forest elephant, the gorilla (including the rare Cross River gorilla), the chimpanzee, the pangolin and the grey parrot are threatened. When a species becomes **extinct**, it is gone for ever, and the food webs it was part of are damaged.',
      '**Practical: study a damaged plot.** Visit a cleared or eroded piece of land near school and compare it with land that still has trees:\n- Look for gullies, exposed roots and bare soil.\n- Count the kinds of plants in a quadrat on each plot.\n- Note where rainwater runs off fast.\nThe bare plot usually has fewer species and more erosion, which shows the value of plant cover.',
    ],
    'biodiversity-threats',
    'For "effects" questions, link each cause to a clear effect: for example, deforestation leaves the soil bare, so heavy rain washes the topsoil away (soil erosion).',
    ['Fishing with nets that have very small holes is harmful because it:', ['Catches young fish before they can breed', 'Catches only old fish', 'Pollutes the water', 'Makes the fish grow bigger'], 'If young fish are caught, fewer survive to breed, so the fish population falls year after year.'],
    [
      ['Ecosystem', 'A community of organisms and their non-living environment, interacting together.'],
      ['Deforestation', 'The cutting down or clearing of forests.'],
      ['Overfishing', 'Catching fish faster than the population can replace itself.'],
      ['Biodiversity', 'The variety of living things in an area.'],
      ['Extinct', 'Describes a species that no longer exists anywhere.'],
    ]
  ),
  L(
    'bi-conserve-f4',
    'bi-f4-environment',
    '11.2',
    'Conservation and sustainable development in Cameroon',
    12,
    ['Conservation'],
    [
      '**Conservation** means protecting and managing living things and their habitats so that they survive for the future. **Sustainable development** means meeting our needs today without spoiling the ability of future generations to meet theirs.',
      '**In situ** conservation protects species where they live:\n- **national parks** and reserves, such as Korup, Waza, Campo Ma’an, Lobéké, Benoué and Mount Cameroon national parks\n- the **Dja Faunal Reserve**, a World Heritage Site\n- **community forests**, managed by villages that also benefit from them',
      '**Ex situ** conservation protects species away from where they live:\n- the **Limbe Wildlife Centre**, which cares for rescued gorillas, chimpanzees and other animals\n- the **Limbe Botanic Garden**, tree nurseries and **seed banks**, which keep plants and seeds safe',
      '**Laws** also protect wildlife:\n- Cameroon’s **forestry, wildlife and fisheries law of 1994** controls logging and hunting.\n- Protected species may not be hunted, and hunting has closed seasons.\n- **CITES** is an international agreement that controls trade in endangered species, such as ivory.',
      'Ways of using resources **sustainably**:\n- **reforestation** (replanting cleared forest) and **afforestation** (planting new forest)\n- **agroforestry**: growing crops among trees\n- fishing with legal nets and respecting closed seasons\n- **ecotourism**: visitors pay to see wildlife, so the animals are worth more alive\n- using improved stoves that need less firewood',
      'Everyone can help. A school can make an **environmental management plan**:\n- plant trees and keep a tree nursery\n- sort and reduce refuse\n- save water\n- run a wildlife or environment club that teaches the community',
    ],
    'conservation-methods',
    'Learn two named examples of each kind of conservation, such as Korup National Park (in situ) and the Limbe Wildlife Centre (ex situ). Examiners reward real examples.',
    ['The Limbe Wildlife Centre, which cares for rescued gorillas, is an example of:', ['Ex situ conservation', 'In situ conservation', 'Deforestation', 'A seed bank'], 'The animals are cared for away from their natural habitat, so it is ex situ conservation.'],
    [
      ['Conservation', 'Protecting and managing living things and habitats so that they survive.'],
      ['Sustainable development', 'Development that meets present needs without harming future generations’ ability to meet theirs.'],
      ['In situ conservation', 'Protecting species in their natural habitat, for example in a national park.'],
      ['Ex situ conservation', 'Protecting species away from their natural habitat, for example in a zoo or seed bank.'],
      ['Ecotourism', 'Tourism to natural areas that earns money for conservation and local people.'],
    ]
  ),
];
