// Extra questions for the end of Human Biology lessons, so that every lesson ends
// with at least five questions on what it teaches (see src/lib/lessonQuiz.js).
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'hb-hygiene': [
    Q('Well water can be made safe to drink at home by:', ['Boiling it', 'Adding sugar', 'Leaving it uncovered in the sun', 'Adding salt'], 'Water-purifying tablets and filtering also help.'),
    Q('Pit latrines should be built:', ['Well away from, and downhill of, wells', 'Next to the well', 'Uphill of the water source', 'Inside the kitchen'], 'This stops sewage reaching drinking water.'),
    Q('Rubbish heaps are a health risk because they:', ['Attract flies and rats and hold water where mosquitoes breed', 'Clean the air', 'Make water safe', 'Kill germs'], 'Refuse should be collected and burnt, buried or recycled.'),
  ],
  'hb-teeth': [
    Q('How many milk teeth does a child have?', ['20', '32', '28', '16'], 'They are replaced by 32 permanent teeth.'),
    Q('The pulp cavity of a tooth contains:', ['Nerves and blood vessels', 'Enamel', 'Plaque', 'Fluoride'], 'They keep the tooth alive.'),
    Q('Gum disease happens when:', ['Plaque hardens along the gum line', 'Enamel becomes too thick', 'Teeth are brushed twice a day', 'Too much calcium is eaten'], 'The gums bleed and the teeth loosen.'),
  ],
  'hb-blood-groups': [
    Q('Group O is called the universal donor because its red cells:', ['Carry no A or B antigens', 'Carry both antigens', 'Have no haemoglobin', 'Never clump'], 'With no antigens, the cells are not attacked by the patient’s antibodies.'),
    Q('Lymph nodes swell during an infection because they:', ['Contain many lymphocytes fighting the germs', 'Fill with air', 'Store fat', 'Make red blood cells'], 'They filter the lymph.'),
  ],
  'hb-smoking': [
    Q('Nicotine in tobacco is:', ['Addictive and raises the heart rate', 'A cure for coughs', 'A source of vitamins', 'Harmless'], 'It also raises blood pressure.'),
    Q('Smoke destroys the cilia in the airways, so:', ['Mucus and trapped dirt are not swept away', 'Breathing becomes easier', 'More oxygen reaches the blood', 'The lungs grow bigger'], 'Smokers cough and get more chest infections.'),
    Q('Breathing in other people’s smoke is called:', ['Passive smoking', 'Respiration', 'Emphysema', 'Vaccination'], 'It harms non-smokers, especially children.'),
  ],
  'hb-posture': [
    Q('Bone is hard mainly because of:', ['Calcium phosphate', 'Collagen alone', 'Water', 'Fat'], 'Collagen makes bone slightly flexible.'),
    Q('To lift a heavy load safely, you should:', ['Bend your knees, keep your back straight and hold the load close', 'Bend your back and keep your legs straight', 'Hold the load at arm’s length', 'Twist as you lift'], 'The strong leg muscles then do the work.'),
    Q('A bone pushed out of its joint is a:', ['Dislocation', 'Sprain', 'Fracture', 'Cramp'], 'A sprain is a damaged ligament; a fracture is a broken bone.'),
  ],
  'hb-growth': [
    Q('Around day 14 of a 28-day cycle:', ['An egg is released (ovulation)', 'Menstruation begins', 'The lining is lost', 'Puberty starts'], 'Progesterone then keeps the lining thick.'),
    Q('Which gland makes the ovaries and testes start releasing sex hormones at puberty?', ['The pituitary gland', 'The pancreas', 'The thyroid gland', 'The adrenal gland'], 'Its hormones act on the sex organs.'),
  ],
  'hb-drugs': [
    Q('Antibiotics must be taken for the full course to:', ['Kill all the bacteria and reduce the risk of resistance', 'Make them taste better', 'Stop addiction', 'Cure viral infections'], 'Stopping early can leave the toughest bacteria alive.'),
    Q('Unpleasant feelings when a dependent person stops taking a drug are called:', ['Withdrawal symptoms', 'Immunity', 'Side effects of exercise', 'Reflexes'], 'They are a sign of dependence.'),
    Q('Sharing needles to inject drugs spreads:', ['HIV and hepatitis', 'Malaria only', 'Tooth decay', 'Short sight'], 'Blood left in the needle carries the viruses.'),
  ],
  'hb-ear': [
    Q('The Eustachian tube connects the middle ear to the:', ['Throat', 'Brain', 'Cochlea', 'Pinna'], 'It keeps the air pressure equal on both sides of the eardrum.'),
    Q('Very loud sounds can cause permanent deafness because they:', ['Damage the sensory hair cells in the cochlea', 'Block the Eustachian tube', 'Break the pinna', 'Fill the ear with fluid'], 'Damaged hair cells do not grow back.'),
  ],
};
