// Citizenship Education for Form 1, in the order of the 2026/2027 national
// harmonised scheme of work for Form 1 (family life and the school in term 1;
// human rights, child protection and conflict resolution in term 2; the State,
// the duties of citizens and national integration in term 3), with the detail
// of the MINESEC curriculum for the observation sub-cycle (Form 1 modules: the
// family and school life, including civil status and the road; facing
// conflicts, including divorce; threats to human dignity, including juvenile
// delinquency). Where Cameroonian law sets exact ages or time limits that have
// changed over the years, lessons state the principle and send learners to the
// civil status centre or a teacher for the current rule.
//
// Quiz convention: the correct option is written first in `a`; options are
// shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });
const unit = (id, n, term, seq, group, icon, diagram, ask, title, short, focus, lessonIds, quiz) => ({
  id,
  form: 'Form 1',
  n,
  term,
  seq,
  group,
  icon,
  diagram,
  ask,
  title,
  short,
  focus,
  lessonIds,
  vr: null,
  quiz,
});

export const UNITS_1 = [
  // ============ Term 1, Module 1: family and social life (sequence 1) ============
  unit('ci-f1-family', 1, 1, 1, 'family', 'family_restroom', 'civ1-family-types', 'What makes a good citizen, and where does it begin?',
    'Citizenship Education and the Family', 'The Family', 'What Citizenship Education is (definition, goals); the family: definition, types (nuclear, extended, single-parent, polygamous) and the traditional and modern roles of its members',
    ['ci-what-1', 'ci-family-1'], [
      Q('Citizenship Education teaches learners to:', ['become responsible members of their family, school and nation', 'only pass examinations', 'avoid other people', 'learn foreign languages only'], 'Good citizenship.'),
      Q('A citizen is:', ['a member of a state with rights and duties', 'a tourist', 'a foreign visitor only', 'an animal'], 'Rights and duties.'),
      Q('A family made of a father, a mother and their children is a:', ['nuclear family', 'extended family', 'single-parent family', 'polygamous family'], 'The small family.'),
      Q('A family that includes grandparents, uncles, aunts and cousins is an:', ['extended family', 'nuclear family', 'adoptive family only', 'empty family'], 'The large family.'),
      Q('A family headed by one parent is a:', ['single-parent family', 'nuclear family', 'polygamous family', 'extended family'], 'Because of death, divorce or choice.'),
      Q('A family in which a man has more than one wife is:', ['polygamous', 'monogamous', 'single-parent', 'nuclear'], 'Allowed in Cameroon under the polygamy option.'),
      Q('In many modern families, household chores are:', ['shared between boys and girls, men and women', 'done only by girls', 'done only by servants', 'never done'], 'Changing roles.'),
      Q('Why is the family described as the first school of life?', ['it is where children first learn values and care', 'it is a school', 'it makes laws', 'it is the government'], 'The first school of life.'),
    ]),
  unit('ci-f1-family-rights', 2, 1, 1, 'family', 'diversity_1', 'civ1-family-duties', 'What do parents and children owe each other?',
    'Rights, Duties and Protection of the Family', 'Family Rights', 'The rights and duties of parents and children; solidarity and household chores; the protection of the family: family meetings, wills, inheritance and the rights of widows and orphans',
    ['ci-family-duties-1', 'ci-family-protection-1'], [
      Q('A duty of parents is to:', ['feed, care for and educate their children', 'make children work instead of school', 'abandon them', 'beat them severely'], 'Parental responsibility.'),
      Q('A duty of children is to:', ['respect and help their parents', 'insult their parents', 'refuse all chores', 'leave home'], 'Children’s duties.'),
      Q('A right of every child in the family is:', ['to be loved, fed and sent to school', 'to rule the house', 'to own all the property', 'to vote'], 'Children’s rights.'),
      Q('Helping one another in times of joy and difficulty is:', ['solidarity', 'selfishness', 'tribalism', 'greed'], 'A family value.'),
      Q('A document in which a person states how their property will be shared after death is a:', ['will', 'birth certificate', 'passport', 'receipt'], 'It prevents quarrels.'),
      Q('Property passed on to heirs after a person dies is an:', ['inheritance', 'tax', 'fine', 'loan'], 'Also called heritage.'),
      Q('A woman whose husband has died is a:', ['widow', 'spinster', 'bride', 'divorcee'], 'Her rights must be protected.'),
      Q('Family meetings help to:', ['settle disputes and make decisions together', 'start quarrels', 'sell children', 'avoid relatives'], 'Dialogue in the family.'),
    ]),
  unit('ci-f1-marriage', 3, 1, 1, 'family', 'favorite', 'civ1-marriage', 'Which marriages does the law recognise?',
    'Marriage', 'Marriage', 'The definition of marriage; types of marriage in Cameroon (civil, traditional and religious; monogamous and polygamous); the stages of marriage and the bride price; the conditions for a valid marriage and the marriage certificate; the rights and duties of spouses',
    ['ci-marriage-types-1', 'ci-marriage-valid-1'], [
      Q('Marriage is:', ['a union between a man and a woman recognised by law and custom', 'a friendship between classmates', 'a business contract only', 'a school event'], 'A family institution.'),
      Q('A marriage celebrated by a civil status registrar at the council is a:', ['civil marriage', 'traditional marriage', 'religious marriage', 'secret marriage'], 'The marriage recognised by the State.'),
      Q('A marriage celebrated in a church or mosque is a:', ['religious marriage', 'civil marriage', 'customary court', 'divorce'], 'Before religious leaders.'),
      Q('A marriage according to the customs of a people, often with the bride price, is a:', ['traditional (customary) marriage', 'civil marriage', 'religious marriage', 'court marriage'], 'Following custom.'),
      Q('A marriage between one man and one woman only is:', ['monogamous', 'polygamous', 'customary only', 'illegal'], 'Mono = one.'),
      Q('A condition for a valid marriage is:', ['the free consent of both spouses', 'the consent of the parents only', 'payment of a big bride price', 'the approval of friends'], 'No forced marriage.'),
      Q('The document that proves a civil marriage is the:', ['marriage certificate', 'birth certificate', 'school report', 'identity card only'], 'Issued by the civil status centre.'),
      Q('Spouses have a duty of:', ['faithfulness, assistance and respect to each other', 'violence', 'abandonment', 'secrecy'], 'Rights and duties of spouses.'),
    ]),

  unit('ci-f1-civil-status', 4, 1, 1, 'family', 'badge', 'civ1-civil-status', 'Why do I need a birth certificate?',
    'Birth Registration and Civil Status Documents', 'Civil Status', 'The importance of birth registration; how to obtain a birth certificate; the civil status documents (birth, marriage and death certificates); the consequences of having no civil status documents and how to correct them',
    ['ci-birth-1', 'ci-civilstatus-1'], [
      Q('A birth certificate proves a person’s:', ['name, date and place of birth and parents', 'school results', 'wealth', 'religion'], 'Legal identity.'),
      Q('A birth is declared at the:', ['civil status centre', 'market', 'police station only', 'church only'], 'At the council or a secondary centre.'),
      Q('The three main civil status documents are birth, marriage and:', ['death certificates', 'school reports', 'receipts', 'passports'], 'Records of a person’s life.'),
      Q('Without a birth certificate, a child may be unable to:', ['register for official examinations or get an identity card', 'play football', 'eat', 'sleep'], 'Serious consequences.'),
      Q('When a birth was not declared in time, it can be registered through a:', ['court judgment (supplementary judgment)', 'school meeting', 'market trader', 'newspaper'], 'Jugement supplétif.'),
      Q('The official who records civil status events is the:', ['civil status registrar', 'headmaster', 'bursar', 'doctor only'], 'Officier d’état civil.'),
      Q('Who should declare a child’s birth?', ['the parents or a person present at the birth', 'the child at 18', 'a teacher', 'nobody'], 'As soon as possible.'),
      Q('The national body that coordinates civil status registration in Cameroon is:', ['BUNEC (the National Civil Status Bureau)', 'ELECAM', 'the CDC', 'the UN'], 'Bureau National de l’État Civil.'),
    ]),

  // ============ Term 1, Module 2: adaptation to the school environment (sequence 2) ============
  unit('ci-f1-school', 5, 1, 2, 'school', 'school', 'civ1-school', 'What are my rights and duties as a student?',
    'The School Community', 'The School Community', 'The structure of a secondary school (administration, teaching staff, support staff, student body, school council, parents); the rights and duties of a student; the internal rules and regulations; co-curricular activities',
    ['ci-school-structure-1', 'ci-student-rights-1'], [
      Q('The head of a secondary school is the:', ['principal', 'bursar', 'class prefect', 'parent'], 'Head of the administration.'),
      Q('The body in which parents, staff and students take part in school decisions is the:', ['school council', 'Senate', 'market council', 'football club'], 'Shared management.'),
      Q('The association of parents and teachers is the:', ['PTA', 'UPC', 'ELECAM', 'CDC'], 'Parent-Teacher Association.'),
      Q('A right of a student is:', ['to be taught and treated with respect', 'to skip classes', 'to insult teachers', 'to damage property'], 'Rights at school.'),
      Q('A duty of a student is to:', ['respect the internal rules and work hard', 'come late every day', 'cheat in tests', 'fight classmates'], 'Duties at school.'),
      Q('The internal rules of a school are meant to:', ['keep order, safety and good learning', 'punish everyone', 'stop learning', 'help cheaters'], 'Rules protect all.'),
      Q('Clubs, sports and cultural groups are:', ['co-curricular activities', 'punishments', 'examinations', 'fees'], 'Beside lessons.'),
      Q('Support staff in a school include:', ['secretaries, cleaners and watchmen', 'only teachers', 'only students', 'ministers'], 'Non-teaching staff.'),
    ]),
  unit('ci-f1-hazards', 6, 1, 2, 'vices', 'warning', 'civ1-hazards', 'How can students stay away from drugs and cheating?',
    'Social Ills in School', 'School Hazards', 'Drug and alcohol abuse, bullying, examination malpractice and vandalism in schools: their causes, consequences and prevention',
    ['ci-drugs-bullying-1', 'ci-malpractice-vandalism-1'], [
      Q('Repeatedly hurting, threatening or mocking a weaker student is:', ['bullying', 'tutoring', 'mentoring', 'sport'], 'A school hazard.'),
      Q('Using substances such as cannabis or tramadol without medical need is:', ['drug abuse', 'medicine', 'nutrition', 'sport'], 'Dangerous for health.'),
      Q('Cheating in an examination is called:', ['examination malpractice', 'revision', 'research', 'homework'], 'It is punished.'),
      Q('Deliberately damaging school property is:', ['vandalism', 'maintenance', 'cleaning', 'decoration'], 'It harms everyone.'),
      Q('A consequence of drug abuse is:', ['damage to health and failure at school', 'better grades', 'more friends always', 'nothing'], 'Serious harm.'),
      Q('If you are bullied, you should:', ['tell a teacher, a parent or the guidance counsellor', 'keep quiet forever', 'bully someone else', 'leave school'], 'Seek help.'),
      Q('A punishment for examination malpractice can be:', ['cancellation of results and exclusion', 'a prize', 'extra marks', 'nothing'], 'It is a serious offence.'),
      Q('The best way to prevent malpractice is to:', ['study regularly and prepare well', 'buy leaked papers', 'copy from neighbours', 'skip exams'], 'Honest work.'),
    ]),
  unit('ci-f1-road', 7, 1, 2, 'safety', 'traffic', 'civ1-road', 'How do I cross the road safely on my way to school?',
    'The Road, the Highway Code and Road Accidents', 'Road Safety', 'The road from home to school: parts and kinds of road; the highway code for pedestrians, cyclists and passengers; the causes of road accidents and what to do in case of an accident',
    ['ci-road-1', 'ci-accidents-1'], [
      Q('The set of rules for using the road is the:', ['highway code', 'penal code only', 'school rules', 'civil code'], 'Rules for all road users.'),
      Q('In Cameroon, vehicles drive on the:', ['right side of the road', 'left side', 'middle', 'pavement'], 'Right-hand traffic.'),
      Q('Pedestrians should cross the road at a:', ['pedestrian (zebra) crossing', 'bend', 'hilltop', 'junction without looking'], 'Safe crossing points.'),
      Q('Where there is no pavement, a pedestrian should walk:', ['on the side facing the oncoming traffic', 'in the middle of the road', 'with their back to traffic', 'zigzagging'], 'To see vehicles coming.'),
      Q('A passenger on a motorbike should wear a:', ['helmet', 'cap', 'scarf', 'nothing'], 'It protects the head.'),
      Q('A major cause of road accidents is:', ['excessive speed', 'traffic lights', 'zebra crossings', 'road signs'], 'Speeding kills.'),
      Q('A red traffic light means:', ['stop', 'go', 'speed up', 'turn freely'], 'Wait for green.'),
      Q('At an accident scene, you should first:', ['call for help and keep yourself safe', 'take photos for fun', 'move the injured carelessly', 'run away'], 'Alert the emergency services.'),
    ]),

  // ============ Term 2: human rights and child protection (sequence 3) ============
  unit('ci-f1-human-rights', 8, 2, 3, 'rights', 'gavel', 'civ1-rights', 'What are human rights, and who protects them?',
    'Human Dignity and Human Rights', 'Human Rights', 'Human dignity; the definition and characteristics of human rights (universal, inalienable, indivisible); the Universal Declaration of Human Rights (1948) and other instruments; human rights in the Constitution of Cameroon',
    ['ci-rights-intro-1', 'ci-udhr-1'], [
      Q('Which statement best defines human rights?', ['rights every person has because they are human', 'rights only for adults', 'rights only for rich people', 'gifts from the government that can be removed'], 'Inborn rights.'),
      Q('Human rights are universal, which means they:', ['belong to everyone everywhere', 'belong to one country', 'belong to men only', 'can be sold'], 'For all people.'),
      Q('Inalienable means that human rights:', ['cannot be taken away or given up', 'can be sold', 'expire at 18', 'belong to the state'], 'They stay with us.'),
      Q('The Universal Declaration of Human Rights was adopted on:', ['10 December 1948', '1 January 1960', '20 May 1972', '11 February 1961'], 'Human Rights Day.'),
      Q('The Universal Declaration of Human Rights has:', ['30 articles', '3 articles', '300 articles', '1 article'], 'A short charter.'),
      Q('The African Charter on Human and Peoples’ Rights was adopted in:', ['1981', '1948', '1989', '2001'], 'At Nairobi.'),
      Q('The body that promotes and protects human rights in Cameroon today is the:', ['Cameroon Human Rights Commission', 'ELECAM', 'CDC', 'BUNEC'], 'Created in 2019.'),
      Q('Human dignity means that every person:', ['deserves respect as a human being', 'must obey the rich', 'is worth less if poor', 'can be sold'], 'Equal worth.'),
    ]),
  unit('ci-f1-child-rights', 9, 2, 3, 'rights', 'child_care', 'civ1-child-rights', 'What rights does a child have, and what duties?',
    'The Rights of the Child', 'Rights of the Child', 'The United Nations Convention on the Rights of the Child (1989) and the African Charter on the Rights and Welfare of the Child (1990); the fundamental rights of the child (survival, development, protection, participation) and the child’s corresponding duties',
    ['ci-uncrc-1', 'ci-child-duties-1'], [
      Q('In which year did the UN adopt the Convention on the Rights of the Child?', ['1989', '1948', '1990', '1960'], 'On 20 November.'),
      Q('According to the Convention, a child is anyone under the age of:', ['18', '12', '15', '21'], 'Unless the law sets majority earlier.'),
      Q('The right to go to school is the right to:', ['education', 'vote', 'drive', 'marry'], 'A fundamental right.'),
      Q('The right to medical care is the right to:', ['health', 'property', 'travel abroad', 'work'], 'Survival and development.'),
      Q('The right to give one’s opinion on matters that concern you is the right to:', ['participation', 'punishment', 'silence', 'labour'], 'Being heard.'),
      Q('In which year was the African Charter on the Rights and Welfare of the Child adopted?', ['1990', '1981', '1989', '1948'], 'By the OAU.'),
      Q('A duty of the child, according to the African Charter, is to:', ['respect parents, elders and the community', 'refuse all work', 'insult elders', 'avoid school'], 'Rights with duties.'),
      Q('Protection rights protect children from:', ['violence, abuse and exploitation', 'school', 'play', 'food'], 'Safety.'),
    ]),
  unit('ci-f1-abuse', 10, 2, 3, 'rights', 'report', 'civ1-abuse', 'What should I do if a child is being abused?',
    'Child Abuse, Exploitation and Juvenile Delinquency', 'Child Abuse', 'Forms of child abuse and exploitation (maltreatment, child labour, trafficking, early and forced marriage, sexual abuse); reporting mechanisms; juvenile delinquency: definition, causes, consequences and solutions',
    ['ci-child-abuse-1', 'ci-delinquency-1'], [
      Q('Making a child do dangerous or heavy work that keeps them from school is:', ['child labour', 'a household chore', 'homework', 'sport'], 'Exploitation.'),
      Q('Moving children from place to place to exploit them is:', ['child trafficking', 'tourism', 'migration for school', 'adoption by law'], 'A serious crime.'),
      Q('Forcing a girl to marry while still a child is:', ['early and forced marriage', 'a civil marriage', 'a religious marriage', 'engagement by choice'], 'A violation of rights.'),
      Q('A child who is abused should tell:', ['a trusted adult, teacher, social worker or the police', 'nobody', 'only friends on social media', 'the abuser'], 'Report abuse.'),
      Q('Offences committed by young people under 18 are called:', ['juvenile delinquency', 'civic duties', 'school projects', 'rights'], 'Young offenders.'),
      Q('A cause of juvenile delinquency is:', ['bad company and lack of parental care', 'good education', 'sport', 'reading'], 'Social causes.'),
      Q('A solution to juvenile delinquency is:', ['good education, guidance and family care', 'more drugs', 'leaving school', 'ignoring the young'], 'Prevention.'),
      Q('The Penal Code of Cameroon punishes forced marriage because it:', ['violates the free consent and rights of the person', 'is a custom', 'costs money', 'is religious'], 'Consent is essential.'),
    ]),

  // ============ Term 2: conflicts and their resolution (sequence 4) ============
  unit('ci-f1-conflict', 11, 2, 4, 'conflict', 'sentiment_dissatisfied', 'civ1-conflict', 'Why do conflicts happen in families and schools?',
    'Understanding Conflicts', 'Understanding Conflicts', 'The meaning and causes of conflicts in the family, the school and the community (misunderstanding, discrimination, selfishness, land, inheritance); their consequences; divorce: causes, procedure and consequences',
    ['ci-conflict-causes-1', 'ci-divorce-1'], [
      Q('A conflict is:', ['a serious disagreement between people or groups', 'a friendship', 'a party', 'a school subject'], 'Opposed interests.'),
      Q('A common cause of family conflicts is:', ['quarrels over land and inheritance', 'eating together', 'shared prayers', 'good communication'], 'Property disputes.'),
      Q('Treating someone unfairly because of their tribe or religion is:', ['discrimination', 'tolerance', 'dialogue', 'mediation'], 'A cause of conflict.'),
      Q('Thinking only of yourself and not of others is:', ['selfishness', 'solidarity', 'generosity', 'patience'], 'It causes conflicts.'),
      Q('The legal ending of a marriage by a court is:', ['divorce', 'engagement', 'widowhood', 'baptism'], 'Pronounced by a judge.'),
      Q('A consequence of divorce for children can be:', ['emotional suffering and changes of home', 'more parents always', 'nothing', 'better grades always'], 'Children suffer most.'),
      Q('Money paid to support a former spouse or children after divorce is:', ['alimony (maintenance)', 'bride price', 'a fine', 'a tax'], 'Ordered by the court.'),
      Q('Conflicts that are not resolved can lead to:', ['violence and broken relationships', 'peace', 'friendship', 'good grades'], 'Prevention matters.'),
    ]),
  unit('ci-f1-peace', 12, 2, 4, 'conflict', 'handshake', 'civ1-peace', 'How can two classmates settle a quarrel without fighting?',
    'Peaceful Resolution of Conflicts', 'Peaceful Resolution', 'Non-violent ways to resolve conflicts: dialogue, negotiation, mediation and arbitration; the steps of resolving a conflict; tolerance, forgiveness and the culture of peace',
    ['ci-resolution-1', 'ci-tolerance-1'], [
      Q('Talking calmly to understand each other is:', ['dialogue', 'violence', 'revenge', 'insult'], 'The first step.'),
      Q('When the two sides discuss and each gives up something to agree, this is:', ['negotiation', 'fighting', 'revenge', 'abandonment'], 'Give and take.'),
      Q('When a neutral third person helps two sides to agree, this is:', ['mediation', 'arbitration only', 'violence', 'gossip'], 'A peacemaker helps.'),
      Q('When a third person listens to both sides and decides the solution, this is:', ['arbitration', 'mediation', 'dialogue', 'silence'], 'The arbiter decides.'),
      Q('Accepting that other people may think differently is:', ['tolerance', 'tribalism', 'pride', 'jealousy'], 'A value of peace.'),
      Q('Letting go of anger against someone who hurt you is:', ['forgiveness', 'revenge', 'hatred', 'fear'], 'It heals relationships.'),
      Q('In school, students trained to help classmates settle quarrels are:', ['peer mediators', 'prefects of the market', 'bullies', 'bursars'], 'Peer mediation.'),
      Q('A culture of peace means:', ['choosing dialogue and respect instead of violence', 'avoiding all people', 'winning every fight', 'keeping quiet always'], 'Peaceful habits.'),
    ]),

  // ============ Term 3: national identity and citizenship (sequence 5) ============
  unit('ci-f1-state', 13, 3, 5, 'state', 'flag', 'civ1-state', 'What is the difference between a state and a nation?',
    'The State, the Nation and the Symbols of Cameroon', 'The State and Nation', 'The definition and elements of a state (territory, population, government, sovereignty); the nation; Cameroon as a state; the state symbols (flag, national anthem, seal, coat of arms, motto); respect for public property',
    ['ci-state-nation-1', 'ci-symbols-1'], [
      Q('The four elements of a state are territory, population, government and:', ['sovereignty', 'a football team', 'a market', 'a church'], 'Independent authority.'),
      Q('A nation is:', ['a people who share a history and a sense of belonging together', 'a building', 'a road', 'a school'], 'A community of people.'),
      Q('Sovereignty means that a state:', ['governs itself without outside control', 'is ruled by another country', 'has no laws', 'has no people'], 'Independence.'),
      Q('The state symbols of Cameroon include the flag, the anthem, the seal, the motto and the:', ['coat of arms', 'national stadium', 'currency note', 'school badge'], 'Five symbols.'),
      Q('The motto of Cameroon is:', ['Peace – Work – Fatherland', 'Unity – Faith – Discipline', 'Liberty – Equality – Fraternity', 'One people, one goal'], 'In the Constitution.'),
      Q('Public property, such as schools, roads and street lights, belongs to:', ['all citizens', 'nobody', 'only the mayor', 'only the rich'], 'So everyone must protect it.'),
      Q('Damaging a public school or bench is:', ['vandalism of public property', 'a civic duty', 'decoration', 'maintenance'], 'It harms the community.'),
      Q('Cameroon became independent on:', ['1 January 1960', '1 October 1961', '20 May 1972', '11 February 1961'], 'French Cameroun’s independence.'),
    ]),
  unit('ci-f1-duties', 14, 3, 5, 'state', 'volunteer_activism', 'civ1-duties', 'Why should citizens pay taxes?',
    'The Duties of a Citizen', 'Duties of a Citizen', 'Respect for the Constitution and the laws; paying taxes; defending the fatherland; voting and taking part in community life; protecting public property and the environment',
    ['ci-citizen-duties-1', 'ci-taxes-1'], [
      Q('The supreme law of Cameroon is the:', ['Constitution', 'school rules', 'highway code', 'penal code only'], 'All laws follow it.'),
      Q('Citizens pay taxes so that the State can:', ['build schools, roads and hospitals and pay its workers', 'make officials rich', 'punish people', 'close schools'], 'Public services.'),
      Q('In Cameroon, citizens may vote from the age of:', ['20', '16', '25', '30'], 'Registered voters.'),
      Q('Defending the fatherland is a duty in the:', ['Constitution', 'highway code', 'school timetable', 'marriage certificate'], 'Every citizen’s duty.'),
      Q('Taking part in community clean-up work is an example of:', ['civic participation', 'tax evasion', 'vandalism', 'corruption'], 'Active citizenship.'),
      Q('Refusing to pay taxes that are due is:', ['tax evasion, an offence', 'a right', 'a civic duty', 'a donation'], 'Against the law.'),
      Q('A good citizen respects:', ['the rights of others and the law', 'only their friends', 'nobody', 'only the rich'], 'Civic behaviour.'),
      Q('Protecting the environment is a civic duty because:', ['a clean, healthy environment belongs to all', 'it is a game', 'only foreigners need it', 'it costs nothing'], 'Shared heritage.'),
    ]),
  unit('ci-f1-integration', 15, 3, 5, 'state', 'diversity_3', 'civ1-integration', 'How can Cameroon’s many peoples live together in peace?',
    'National Integration and Living Together', 'National Integration', 'Cameroon’s bilingualism and multiculturalism; rejecting tribalism and discrimination; promoting national unity and living together (vivre-ensemble); the National Commission for the Promotion of Bilingualism and Multiculturalism',
    ['ci-bilingualism-1', 'ci-living-together-1'], [
      Q('The two official languages of Cameroon are:', ['English and French', 'English and Fulfulde', 'French and Duala', 'English and Arabic'], 'Equal in status.'),
      Q('Cameroon’s many cultures living side by side is called:', ['multiculturalism', 'tribalism', 'assimilation', 'segregation'], 'A national value.'),
      Q('Favouring people of your own tribe and rejecting others is:', ['tribalism', 'patriotism', 'bilingualism', 'tolerance'], 'A threat to unity.'),
      Q('National integration means:', ['uniting all the peoples of a country into one nation', 'dividing regions', 'closing borders', 'speaking one language only'], 'Unity in diversity.'),
      Q('The body created in 2017 to promote bilingualism and multiculturalism is the:', ['National Commission for the Promotion of Bilingualism and Multiculturalism', 'ELECAM', 'BUNEC', 'Cameroon Human Rights Commission'], 'A national commission.'),
      Q('"Living together" (vivre-ensemble) means:', ['peaceful coexistence among all Cameroonians', 'living in one house', 'living abroad', 'avoiding others'], 'Harmony.'),
      Q('Which activity promotes national integration?', ['learning the other official language and visiting other regions', 'mocking other tribes', 'refusing to speak to strangers', 'hate speech'], 'Openness.'),
      Q('Hate speech against a group should be:', ['rejected and reported', 'shared', 'praised', 'ignored always'], 'It harms unity.'),
    ]),

  // ============ Term 3: review and integration (sequence 6) ============
  unit('ci-f1-review', 16, 3, 6, 'exam', 'fact_check', 'civ1-review', 'How do I use what I learned to solve a real problem?',
    'Integration Situations and Revision', 'Revision', 'Integration situations in which learners apply the year’s values and knowledge to real-life problems (a child without a birth certificate, bullying, a land conflict, a broken school tap); revision for the end-of-year examination',
    ['ci-integration-tasks-1', 'ci-review-1'], [
      Q('A classmate has no birth certificate. You advise the family to:', ['go to the civil status centre or obtain a court judgment', 'buy a fake one', 'do nothing', 'leave school'], 'The legal way.'),
      Q('Two families quarrel over a farm boundary. The best first step is:', ['dialogue, then mediation by elders or the chief', 'fighting', 'destroying the farm', 'insults'], 'Peaceful resolution.'),
      Q('You see a student damaging a school tap. You should:', ['report it to a teacher or prefect', 'join in', 'take photos for fun', 'ignore it'], 'Protect public property.'),
      Q('A girl of 14 is being forced to marry. She has the right to:', ['protection and education; the case should be reported', 'be married', 'nothing', 'leave school'], 'Child protection.'),
      Q('Which value helps most in a multicultural class?', ['tolerance', 'tribalism', 'pride', 'jealousy'], 'Respect for differences.'),
      Q('Which document records the death of a person?', ['a death certificate', 'a birth certificate', 'a marriage certificate', 'a will'], 'Civil status.'),
      Q('An integration situation asks you to:', ['use what you learned to solve a real problem', 'copy notes', 'draw only', 'stay silent'], 'Competence in action.'),
      Q('Respect for the highway code mainly protects:', ['lives on the road', 'only drivers', 'only the police', 'nobody'], 'Road safety.'),
    ]),
];
