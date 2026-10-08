// Form 4 Biology topics added from the 2026/2027 harmonised scheme of work
// (term 3: pests and disease vectors, human impact and conservation). They sit
// beside the MINESEC Form 4 topics in units.js.
//
// Quiz convention: the correct option is written first in `a`; options are
// shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const UNITS_F4 = [
  {
    id: 'bi-f4-vectors',
    form: 'Form 4',
    n: 10,
    term: 3,
    seq: 5,
    group: 'health',
    icon: 'pest_control',
    diagram: 'housefly-cycle',
    ask: 'Why are mosquitoes easiest to control at the larva stage?',
    title: 'Pests and Disease Vectors',
    short: 'Vectors',
    focus: 'Vectors of disease in Cameroon, the life cycles of the mosquito and the housefly, and chemical, biological and environmental control',
    lessonIds: ['bi-vector-1', 'bi-vector-2'],
    vr: null,
    quiz: [
      Q('An organism that carries a pathogen from one host to another is called a:', ['Vector', 'Parasite', 'Predator', 'Decomposer'], 'The mosquito is a vector of malaria: it carries Plasmodium from person to person.'),
      Q('Which disease is spread by the female Anopheles mosquito?', ['Malaria', 'Cholera', 'Sleeping sickness', 'Typhoid'], 'Sleeping sickness is spread by the tsetse fly; cholera and typhoid can be spread by houseflies.'),
      Q('The stages in the life cycle of the housefly, in order, are:', ['Egg, larva, pupa, adult', 'Egg, nymph, adult', 'Larva, egg, pupa, adult', 'Egg, pupa, larva, adult'], 'Like the mosquito, the housefly has a complete metamorphosis with four stages.'),
      Q('Houseflies lay their eggs mainly in:', ['Rubbish, dung and rotting food', 'Clean running water', 'Tree bark', 'Dry sand'], 'The maggots feed on decaying matter, so covering refuse and latrines stops flies breeding.'),
      Q('The housefly is called a mechanical vector because it:', ['Carries germs on its legs and body hairs', 'Has germs that multiply inside its gut as part of their life cycle', 'Bites people', 'Lives in water'], 'Germs picked up from faeces are left on food when the fly lands on it.'),
      Q('Draining puddles and covering water pots controls mosquitoes because it:', ['Removes the still water where they lay eggs and the larvae live', 'Kills adult mosquitoes with poison', 'Makes the female stop biting', 'Feeds mosquito predators'], 'Mosquito eggs, larvae and pupae all need water, so removing still water stops breeding.'),
      Q('A disadvantage of using insecticides is that:', ['Insects can become resistant and useful insects are killed', 'They work too slowly', 'They are a natural enemy', 'They never pollute'], 'Chemical control is fast, but it causes resistance, pollution and the death of bees and predators.'),
      Q('Putting fish that eat larvae into ponds is an example of:', ['Biological control', 'Chemical control', 'Environmental control', 'Quarantine'], 'A living natural enemy is used to reduce the pest.'),
      Q('Which insect spreads river blindness among people living near fast-flowing rivers?', ['The blackfly', 'The housefly', 'The Culex mosquito', 'The tsetse fly'], 'Blackflies breed in fast rivers; the tsetse fly spreads sleeping sickness.'),
    ],
  },
  {
    id: 'bi-f4-environment',
    form: 'Form 4',
    n: 11,
    term: 3,
    seq: 5,
    group: 'env',
    icon: 'forest',
    diagram: 'conservation-methods',
    ask: 'What is the difference between in situ and ex situ conservation?',
    title: 'Human Impact on Ecosystems and Conservation',
    short: 'Conservation',
    focus: 'Deforestation, overfishing, habitat destruction and loss of biodiversity in Cameroon; conservation, national parks, laws and sustainable development',
    lessonIds: ['bi-impact-1', 'bi-conserve-f4'],
    vr: null,
    quiz: [
      Q('Which of these is a direct effect of deforestation?', ['Soil erosion on the bare land', 'More rainfall in the area', 'Less carbon dioxide in the air', 'More animal habitats'], 'Without trees the soil is exposed, so rain washes it away; rainfall falls and carbon dioxide rises.'),
      Q('A loss of biodiversity is serious because:', ['Food webs are damaged and useful species are lost for ever', 'It gives animals more space', 'It increases rainfall', 'It makes soil more fertile'], 'Every species plays a part in its ecosystem, and many give us food, medicines and income.'),
      Q('Fishing with dynamite or poison is harmful because it:', ['Kills all the fish and other animals in the water, young and old', 'Catches only large fish', 'Makes fish grow faster', 'Is the only legal method'], 'It destroys whole populations and food webs, so fishing cannot continue.'),
      Q('Protecting animals in a national park where they naturally live is called:', ['In situ conservation', 'Ex situ conservation', 'Ecotourism', 'Afforestation'], 'In situ means in the natural place; zoos and seed banks are ex situ.'),
      Q('Which of these is an example of ex situ conservation?', ['A seed bank', 'Korup National Park', 'The Dja Faunal Reserve', 'A community forest'], 'A seed bank keeps plants safe away from their habitat.'),
      Q('Sustainable development means:', ['Meeting our needs now without harming the needs of future generations', 'Using all resources as quickly as possible', 'Stopping all farming', 'Building as many towns as possible'], 'Resources are used at a rate at which they can be replaced.'),
      Q('Ecotourism helps conservation because:', ['Visitors pay to see wildlife, so animals are worth more alive', 'Tourists hunt the animals', 'It clears forests for hotels', 'It stops all visitors'], 'The money pays for protection and gives local people a reason to protect wildlife.'),
      Q('Planting trees on land that was cleared of forest is called:', ['Reforestation', 'Deforestation', 'Overgrazing', 'Desertification'], 'Afforestation is planting trees where there was no forest before.'),
      Q('CITES is an international agreement that:', ['Controls trade in endangered species', 'Sets fishing seasons in Cameroon only', 'Builds national parks', 'Bans all farming'], 'For example, it controls trade in ivory and in grey parrots.'),
    ],
  },
];
