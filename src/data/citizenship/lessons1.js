// Citizenship Education lessons for Form 1: the family, marriage, civil status,
// the school, school hazards and the road (term 1); human rights, the rights
// of the child, child abuse and juvenile delinquency, conflicts and their
// peaceful resolution (term 2); the State and its symbols, the duties of
// citizens and national integration, then integration tasks and revision
// (term 3). Original text written for this app. **double asterisks** mark key
// terms; `examples` are worked examples.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Class work',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_1 = [
  // ---------- 1. Citizenship and the family ----------
  L('ci-what-1', 'ci-f1-family', '1.1', 'What Citizenship Education is', 10, ['Citizenship'], [
    '**Citizenship Education** teaches the knowledge, values and attitudes a person needs to live as a good member of the family, the school, the community and the nation. A **citizen** is a member of a state who has **rights** (things they are entitled to) and **duties** (things they must do).',
    '**Goals**: to help learners know their rights and duties; respect others, the law and public property; love their country (**patriotism**); live in peace with people who are different (**tolerance**); take part in community life; and solve real problems responsibly. The values of the course include patriotism, integrity, civic responsibility, solidarity and mutual respect.',
    'Method: the course starts from **real-life situations** (a quarrel, a child without a birth certificate, bullying at school) and asks learners to use what they learn to act well.',
  ], 'civ1-citizen', 'A good citizen knows their rights, does their duties and respects others.',
  ['A duty is:', ['something a person must do', 'something a person is entitled to', 'a reward', 'a punishment'], 'Rights and duties go together.'],
  [['Citizen', 'A member of a state, with rights and duties.'], ['Right', 'Something a person is entitled to have or do.'], ['Duty', 'Something a person must do.'], ['Patriotism', 'Love of and loyalty to one’s country.']],
  [
    { q: 'Give two rights and two duties of a Form 1 student.', steps: ['Rights: **to be taught**; **to be treated with respect**.', 'Duties: **to obey the school rules**; **to respect teachers and classmates**.'] },
  ]),

  L('ci-family-1', 'ci-f1-family', '1.2', 'The family: definition, types and roles', 10, ['Family'], [
    'A **family** is a group of people linked by **blood**, **marriage** or **adoption** who live together or support one another. It is the **basic unit of society**: children first learn love, values and good behaviour in the family.',
    '**Types of family**:\n- the **nuclear family**: father, mother and their children\n- the **extended family**: the nuclear family plus grandparents, uncles, aunts and cousins, common in Cameroon\n- the **single-parent family**: one parent and the children\n- the **polygamous family**: a man, his wives and their children\n- the **adoptive** or foster family.',
    '**Roles**: traditionally, fathers were providers and protectors, mothers cared for the home and children, and children helped with chores. Today roles are more **shared**: both parents may earn money and care for the children, and boys and girls share household chores.',
  ], 'civ1-family-types', 'Nuclear: parents and children. Extended: the whole kin.',
  ['A family made of one parent and children is a:', ['single-parent family', 'nuclear family', 'extended family', 'polygamous family'], 'One parent heads it.'],
  [['Family', 'A group linked by blood, marriage or adoption.'], ['Nuclear family', 'Father, mother and children.'], ['Extended family', 'The nuclear family plus other relatives.']],
  [
    { q: 'Compare the traditional and modern roles of parents.', steps: ['Traditional: the **father provides and protects**; the **mother keeps the home**.', 'Modern: **both parents** may work and care for the children; chores are **shared**.'] },
  ]),

  // ---------- 2. Family rights and protection ----------
  L('ci-family-duties-1', 'ci-f1-family-rights', '2.1', 'Rights and duties of family members', 10, ['Family'], [
    '**Parents’ duties**: to feed, clothe, house and protect their children; to send them to school and care for their health; to guide them with love and good example; to register their birth. **Parents’ rights**: to be respected and obeyed, and to receive help from their children, especially in old age.',
    '**Children’s rights**: to love and care, a name, education, health, protection from violence and the right to be heard. **Children’s duties**: to respect and obey their parents and elders, to help with household chores, to work hard at school and to care for their parents when they grow old.',
    '**Solidarity**: family members help each other in joy and difficulty, at births, marriages, illnesses and funerals.',
  ], 'civ1-family-duties', 'Every right in the family is matched by a duty.',
  ['Registering a child’s birth is a duty of the:', ['parents', 'child', 'teacher', 'neighbour'], 'Right after the birth.'],
  [['Solidarity', 'Mutual help and support among members of a group.'], ['Household chores', 'Daily tasks in the home.']],
  [
    { q: 'Match a right of the child with a duty of the parents.', steps: ['Right to **education** ↔ duty to **send the child to school**.', 'Right to **health** ↔ duty to **take the child for care and vaccinations**.'] },
  ]),

  L('ci-family-protection-1', 'ci-f1-family-rights', '2.2', 'Protecting the family: wills, inheritance and widowhood', 10, ['Family'], [
    'Families protect their members and property through:\n- **family meetings**, where elders and members discuss problems and make decisions\n- a **will**, a document in which a person says how their property should be shared after death, which helps prevent quarrels\n- **inheritance** (succession): the passing of property to the heirs (children, spouse) according to the law or custom.',
    '**Widowhood**: when a husband dies, his wife becomes a **widow**; when a wife dies, her husband becomes a **widower**. In some places, widows suffer harmful practices or are driven from their homes and property by relatives. The law protects the **rights of widows and orphans** to the family home and to a share of the inheritance.',
    '**Institutions** that protect the family include the courts, the social affairs services (social workers), traditional authorities and religious bodies.',
  ], 'civ1-family-protection', 'A written will and respect for widows prevent many family conflicts.',
  ['Why is it wise to write a will?', ['to say how property is shared and prevent quarrels', 'to avoid paying taxes', 'to sell children', 'to stop marriages'], 'Clarity after death.'],
  [['Will', 'A document stating how a person’s property is to be shared after death.'], ['Inheritance', 'Property passed on to heirs after a death.'], ['Widow', 'A woman whose husband has died.']],
  [
    { q: 'What should be done if relatives try to drive a widow from her home?', steps: ['Hold a **family meeting** to remind everyone of her rights.', 'Seek help from **traditional authorities** or a **social worker**.', 'If necessary, go to **court**, which protects widows and orphans.'] },
  ]),

  // ---------- 3. Marriage ----------
  L('ci-marriage-types-1', 'ci-f1-marriage', '3.1', 'Types and stages of marriage', 10, ['Family'], [
    '**Marriage** is a union between a man and a woman, recognised by law and custom, to found a family.',
    '**Types in Cameroon**:\n- the **civil marriage**, celebrated by a **civil status registrar** at the council: this is the marriage recognised by the State\n- the **traditional (customary) marriage**, according to the customs of the families, often with the **bride price** (dowry or bride wealth)\n- the **religious marriage**, in a church or mosque.\nAt the civil marriage, the couple chooses the **monogamous** option (one wife) or the **polygamous** option (the husband may later take other wives).',
    '**Stages** of a traditional marriage often include: the introduction and knocking on the door, the visits and negotiations between families, the payment of the bride price and gifts, and the celebration. A couple may do all three marriages: traditional, civil and religious.',
  ], 'civ1-marriage', 'Civil, traditional, religious; monogamous or polygamous option.',
  ['The marriage recognised by the State is the:', ['civil marriage', 'religious marriage only', 'traditional marriage only', 'engagement'], 'Celebrated by the registrar.'],
  [['Bride price', 'Gifts or money given by the groom’s family to the bride’s family in a traditional marriage.'], ['Monogamy', 'Marriage to one spouse only.'], ['Polygamy', 'Marriage of a man to more than one wife.']],
  [
    { q: 'Describe the three types of marriage in Cameroon.', steps: ['**Civil**: before the registrar at the council; recognised by law.', '**Traditional**: according to custom, with the bride price.', '**Religious**: in a church or mosque.'] },
  ]),

  L('ci-marriage-valid-1', 'ci-f1-marriage', '3.2', 'A valid marriage and the duties of spouses', 10, ['Family'], [
    '**Conditions for a valid (legal) marriage** include: the **free consent** of both the man and the woman (a forced marriage is not valid and is punished by the Penal Code); the **minimum age** fixed by law (international conventions, such as the African Charter on the Rights and Welfare of the Child, set **18** as the minimum age of marriage); not being already married under the monogamous option; not being close relatives; and celebration or registration at the **civil status centre** before witnesses. The registrar then issues a **marriage certificate**. The bride price is a custom: it is not what makes a marriage legal.',
    '**Rights and duties of spouses**: faithfulness, mutual help and respect; living together; caring for and educating their children; managing the family together; and settling disputes by dialogue.',
  ], 'civ1-valid-marriage', 'No consent, no marriage: forced marriage is a crime.',
  ['A marriage without the free consent of both spouses is:', ['not valid and is a crime', 'valid', 'a civil marriage', 'a religious marriage'], 'Consent is essential.'],
  [['Consent', 'Free agreement.'], ['Marriage certificate', 'The document that proves a civil marriage.']],
  [
    { q: 'Give three conditions for a valid civil marriage in Cameroon.', steps: ['The **free consent** of both spouses.', 'The **legal minimum age**.', 'Celebration before the **civil status registrar** with witnesses (and a marriage certificate).'] },
  ]),

  // ---------- 4. Civil status ----------
  L('ci-birth-1', 'ci-f1-civil-status', '4.1', 'Birth registration', 10, ['Family', 'Citizenship'], [
    '**Birth registration** is the official recording of a child’s birth by the State. It gives the child a **legal identity**: a name, a nationality, a date and place of birth and recognised parents.',
    '**How**: the parents (or a person present at the birth, or the health centre) **declare** the birth at the **civil status centre** (at the council or a secondary centre) with the birth notice from the hospital or witnesses. The **civil status registrar** records it and issues a **birth certificate**. It should be done **as soon as possible** after the birth, within the time limit set by law; ask your council for the current rule.',
    '**Why it matters**: the birth certificate is needed to enrol in school and register for **official examinations**, to obtain a **national identity card** and passport, to vote, to marry, to inherit and to prove one’s age and nationality.',
  ], 'civ1-civil-status', 'No birth certificate, no official identity.',
  ['Who records births at the civil status centre?', ['the civil status registrar', 'the headmaster', 'the bursar', 'the market chief'], 'Officier d’état civil.'],
  [['Birth certificate', 'The official document recording a person’s birth.'], ['Civil status', 'A person’s official legal situation: birth, marriage, death.'], ['Registrar', 'The official who records civil status events.']],
  [
    { q: 'List four things a person cannot easily do without a birth certificate.', steps: ['**Register for official examinations**.', 'Obtain a **national identity card**.', '**Vote** or **marry** legally.', 'Prove their **age and nationality**.'] },
  ]),

  L('ci-civilstatus-1', 'ci-f1-civil-status', '4.2', 'Civil status documents and late registration', 10, ['Family', 'Citizenship'], [
    'The three main **civil status documents** are:\n- the **birth certificate**\n- the **marriage certificate**\n- the **death certificate**, which records a death and is needed for burial formalities, inheritance and pensions.\nThe national body that coordinates civil status registration in Cameroon is **BUNEC** (the National Civil Status Bureau).',
    '**Late registration**: if a birth was not declared within the legal time limit, the parents must go to **court** to obtain a **supplementary judgment** (jugement supplétif), on the basis of which the birth certificate is issued.',
    '**Consequences of having no civil status documents**: the person may be denied schooling, examinations, identity papers, voting, employment and inheritance, and becomes vulnerable to exploitation. A **false** certificate is a crime. Keep documents safe and make certified copies.',
  ], 'civ1-documents', 'Birth, marriage, death: three certificates for three life events.',
  ['A birth that was not declared in time can be registered through:', ['a supplementary court judgment', 'a school certificate', 'a market receipt', 'a church letter only'], 'Jugement supplétif.'],
  [['Death certificate', 'The official record of a death.'], ['Supplementary judgment', 'A court decision that allows a late birth registration.']],
  [
    { q: 'A 12-year-old has no birth certificate. What should the family do?', steps: ['Gather **witnesses** and any hospital or school papers.', 'Apply to **court** for a **supplementary judgment**.', 'Take the judgment to the **civil status centre**, which issues the **birth certificate**.'] },
  ]),

  // ---------- 5. School community ----------
  L('ci-school-structure-1', 'ci-f1-school', '5.1', 'The structure of a secondary school', 10, ['School life'], [
    'A secondary school is a **community** with several groups:\n- the **administration**: the **principal**, vice-principals, the discipline master or mistress, the bursar, the guidance counsellor, the senior staff\n- the **teaching staff**: teachers and heads of departments\n- the **support staff**: secretaries, librarians, laboratory attendants, cleaners and watchmen\n- the **student body**: students, class prefects and the student government\n- the **parents**, organised in the **Parent-Teacher Association (PTA)**.',
    'The **school council**, with representatives of the administration, staff, parents and students, helps manage the school. Schools also have **co-curricular activities** (clubs, sports, cultural groups) that develop talents and teamwork. Schools work under the authority of the **Ministry of Secondary Education (MINESEC)**.',
  ], 'civ1-school', 'A school is a community: administration, teachers, support staff, students and parents.',
  ['Parents take part in school life mainly through the:', ['PTA', 'student government', 'staffroom', 'discipline office'], 'Parent-Teacher Association.'],
  [['School council', 'A body of administration, staff, parents and students that helps manage a school.'], ['PTA', 'The Parent-Teacher Association.']],
  [
    { q: 'Draw the structure of your school as a simple chart.', steps: ['Top: **the principal**.', 'Next: **vice-principals, discipline master, bursar, guidance counsellor**.', 'Then: **teachers** and **support staff**.', 'Base: **students** (with prefects); beside them, **parents (PTA)** and the **school council**.'] },
  ]),

  L('ci-student-rights-1', 'ci-f1-school', '5.2', 'Rights and duties of a student; the internal rules', 10, ['School life'], [
    '**Rights of a student**: to be taught and evaluated fairly; to be treated with respect and dignity; to be safe at school; to use the school facilities (library, laboratory, sports field); to take part in clubs; to be heard and to complain through the proper channels.',
    '**Duties of a student**: to attend regularly and be punctual; to wear the correct uniform; to work hard and do homework; to respect teachers, staff and classmates; to protect school property; to obey the **internal rules**.',
    'The **internal rules and regulations** (règlement intérieur) say what is allowed and forbidden (lateness, absences, uniform, phones, fighting, drugs, cheating) and the sanctions (warning, detention, suspension, exclusion). They protect order, safety and learning for everyone.',
  ], 'civ1-student-rights', 'Rights at school come with duties: you cannot claim one without the other.',
  ['The document that lists what is allowed and forbidden in a school is the:', ['internal rules and regulations', 'Constitution', 'highway code', 'marriage certificate'], 'Règlement intérieur.'],
  [['Internal rules', 'The regulations of a school.'], ['Sanction', 'A punishment for breaking a rule.']],
  [
    { q: 'Why does a school need internal rules?', steps: ['To keep **order and discipline**.', 'To ensure **safety** for all.', 'To create good conditions for **learning**, so everyone’s rights are protected.'] },
  ]),

  // ---------- 6. School hazards ----------
  L('ci-drugs-bullying-1', 'ci-f1-hazards', '6.1', 'Drug abuse and bullying', 10, ['Social ills'], [
    '**Drug abuse** is the use of substances such as cannabis, tramadol (a painkiller misused without prescription), glue, alcohol or tobacco in harmful ways. **Causes**: peer pressure, curiosity, stress, bad example and easy access. **Consequences**: damage to the brain and health, addiction, poor results, violence, crime and school exclusion. **Prevention**: say **no**, choose good friends, take part in sports and clubs, talk to a counsellor, and report drug sellers.',
    '**Bullying** is repeated hurtful behaviour against a weaker person: hitting, threats, insults, mockery, exclusion, or harassment online (cyberbullying). **Consequences**: fear, sadness, absence and poor work for the victim. **What to do**: speak out to a teacher, parent or guidance counsellor; support victims; never join bullies.',
  ], 'civ1-hazards', 'Say no to drugs; speak out against bullying.',
  ['A common cause of drug abuse among young people is:', ['peer pressure', 'good sleep', 'sport', 'reading'], 'Pressure from friends.'],
  [['Drug abuse', 'The harmful use of drugs or alcohol.'], ['Bullying', 'Repeated hurtful behaviour against a weaker person.'], ['Peer pressure', 'Influence from people of your own age.']],
  [
    { q: 'A friend offers you tramadol "to feel strong". What do you do and why?', steps: ['**Refuse** firmly: "No, thank you."', 'Explain the **dangers**: addiction, damage to health, school problems.', '**Tell a trusted adult** so that your friend can be helped.'] },
  ]),

  L('ci-malpractice-vandalism-1', 'ci-f1-hazards', '6.2', 'Examination malpractice and vandalism', 10, ['Social ills'], [
    '**Examination malpractice** is any form of cheating: copying, bringing notes or phones, buying "leaked" papers, impersonation or bribing examiners. **Causes**: laziness, fear of failure, pressure for good results and dishonest adults. **Consequences**: results cancelled, exclusion from examinations, certificates without real knowledge, and a society of incompetent workers. **Prevention**: regular study, good preparation, strict invigilation and honesty.',
    '**Vandalism** is the deliberate destruction of property: breaking benches, windows and taps, writing on walls, tearing books. It wastes public money and harms everyone who uses the school. **Prevention**: respect for public property, school clubs that care for the environment, and reporting vandals.',
  ], 'civ1-malpractice', 'Honest work earns real knowledge; cheating earns nothing.',
  ['Using a phone to get answers during an examination is:', ['examination malpractice', 'revision', 'research', 'allowed'], 'A serious offence.'],
  [['Examination malpractice', 'Cheating in an examination.'], ['Vandalism', 'Deliberate destruction of property.']],
  [
    { q: 'Explain why examination malpractice harms society.', steps: ['Students who cheat get **certificates without real knowledge**.', 'They later become **incompetent workers** (nurses, engineers, teachers).', 'Society suffers from **poor services and dishonesty**.'] },
  ]),

  // ---------- 7. The road ----------
  L('ci-road-1', 'ci-f1-road', '7.1', 'The road and the highway code', 10, ['Safety'], [
    'A **road** is a way for vehicles, cyclists and pedestrians. Its parts include the **carriageway** (for vehicles), the **pavement** or footpath (for pedestrians), the shoulders, **pedestrian (zebra) crossings**, junctions and roundabouts. Roads may be tarred or earth roads, highways, streets and paths.',
    'The **highway code** is the set of rules for all road users. **In Cameroon, vehicles drive on the right.** Rules for **pedestrians**: use the pavement; where there is none, walk facing the oncoming traffic; cross at zebra crossings or where you can see well; **look left, right and left again**; never play on the road. For **passengers**: wear a **seat belt** in cars and a **helmet** on motorbikes; do not overload. Respect **traffic lights** (red: stop; amber: get ready to stop; green: go) and **road signs** (warning, prohibition and information signs).',
  ], 'civ1-road', 'Look left, right and left again before you cross.',
  ['An amber traffic light means:', ['get ready to stop', 'go faster', 'turn left only', 'stop and park'], 'Between green and red.'],
  [['Highway code', 'The rules for using the road.'], ['Pedestrian', 'A person walking on the road.'], ['Zebra crossing', 'A striped crossing place for pedestrians.']],
  [
    { q: 'Give four rules a student should follow on the way to school.', steps: ['**Walk on the pavement**, or facing traffic where there is none.', '**Cross at a zebra crossing**, looking left, right and left again.', '**Wear a helmet** on a motorbike taxi.', '**Never play** on the road.'] },
  ]),

  L('ci-accidents-1', 'ci-f1-road', '7.2', 'Road accidents: causes, prevention and first steps', 10, ['Safety'], [
    '**Causes of road accidents**: excessive **speed**; **drink-driving** and drugs; dangerous overtaking; overloading; poor vehicle condition (bad brakes, worn tyres); tiredness; using phones while driving; bad roads and poor visibility; and careless pedestrians.',
    '**Prevention**: respect speed limits and the highway code; never drink and drive; maintain vehicles; wear seat belts and helmets; rest on long journeys; and educate all road users.',
    '**What to do at an accident**: keep yourself safe and warn other drivers; **call for help** (the police, the fire brigade or emergency services); do not move seriously injured people unless there is danger such as fire; give simple first aid if you know how; and give information to the police. Do not loot or crowd the scene.',
  ], 'civ1-accidents', 'Speed, alcohol and carelessness cause most accidents.',
  ['Which is a cause of road accidents?', ['drink-driving', 'wearing a seat belt', 'respecting traffic lights', 'vehicle maintenance'], 'Alcohol slows reactions.'],
  [['Road accident', 'A collision or crash on the road.'], ['First aid', 'Simple help given to an injured person before medical care.']],
  [
    { q: 'You see a motorbike accident on your way home. What do you do?', steps: ['**Stay safe** and warn other vehicles.', '**Call for help**: the police or emergency services.', '**Do not move** a badly injured person unless there is danger; comfort them.', 'Tell the police **what you saw**.'] },
  ]),

  // ---------- 8. Human rights ----------
  L('ci-rights-intro-1', 'ci-f1-human-rights', '8.1', 'Human dignity and human rights', 10, ['Human rights'], [
    '**Human dignity** is the worth that every person has simply because they are a human being. **Human rights** are the rights every person has because they are human, without distinction of race, sex, language, religion, ethnic group, wealth or opinion.',
    '**Characteristics**: human rights are **universal** (for everyone everywhere), **inalienable** (they cannot be taken away or given up), **indivisible** and **interdependent** (all are equally important and linked), and they come with **duties**: to respect the rights of others.',
    '**Examples**: the right to life; freedom from torture and slavery; equality before the law; freedom of thought, religion and expression; the right to education, health, work and to take part in government.',
  ], 'civ1-rights', 'Universal, inalienable, indivisible: rights that come with being human.',
  ['Freedom from slavery is an example of:', ['a human right', 'a duty', 'a tax', 'a school rule'], 'A fundamental right.'],
  [['Human dignity', 'The worth every person has as a human being.'], ['Universal', 'Applying to everyone everywhere.'], ['Inalienable', 'Impossible to take away or give up.']],
  [
    { q: 'Explain the characteristic "universal" with an example.', steps: ['Universal means **everyone has these rights**, everywhere.', 'Example: a child in Cameroon and a child in Brazil both have the **right to education**.', 'No one loses rights because of **sex, tribe, religion or wealth**.'] },
  ]),

  L('ci-udhr-1', 'ci-f1-human-rights', '8.2', 'The Universal Declaration and other instruments', 10, ['Human rights'], [
    'After the horrors of the Second World War, the UN General Assembly adopted the **Universal Declaration of Human Rights (UDHR)** on **10 December 1948** in Paris. Its **30 articles** state civil, political, economic, social and cultural rights. 10 December is **Human Rights Day**.',
    'Other **instruments**: the **African Charter on Human and Peoples’ Rights** (adopted in **1981**, which also lists duties); the **Convention on the Rights of the Child** (1989); the African Charter on the Rights and Welfare of the Child (1990); and the **Constitution of Cameroon**, whose preamble affirms attachment to these rights.',
    '**Protectors** in Cameroon: the courts, the **Cameroon Human Rights Commission** (created in **2019**, replacing the former National Commission on Human Rights and Freedoms), the police and gendarmerie, social workers and human rights associations.',
  ], 'civ1-instruments', '1948 UDHR, 1981 African Charter, 1989 Children’s Convention.',
  ['Human Rights Day is celebrated on:', ['10 December', '20 May', '1 May', '16 June'], 'The anniversary of the UDHR.'],
  [['Instrument', 'A legal document such as a declaration, charter or convention.'], ['Preamble', 'The introduction of a constitution, stating its principles.']],
  [
    { q: 'Put these instruments in order of date: Convention on the Rights of the Child; UDHR; African Charter on Human and Peoples’ Rights.', steps: ['**1948**: UDHR.', '**1981**: African Charter on Human and Peoples’ Rights.', '**1989**: Convention on the Rights of the Child.'] },
  ]),

  // ---------- 9. Rights of the child ----------
  L('ci-uncrc-1', 'ci-f1-child-rights', '9.1', 'The Convention on the Rights of the Child', 10, ['Human rights', 'Child protection'], [
    'The **United Nations Convention on the Rights of the Child** (UNCRC) was adopted on **20 November 1989**; Cameroon ratified it in **1993**. A **child** is anyone **under 18**. The **African Charter on the Rights and Welfare of the Child** (1990) adds African concerns and the child’s duties.',
    'The rights of the child are often grouped in four:\n- **survival**: life, food, health care, clean water, shelter\n- **development**: education, play, rest, culture, information\n- **protection**: from violence, abuse, neglect, exploitation, child labour, trafficking and early marriage\n- **participation**: to express opinions, be heard and take part in decisions that affect them.',
    'Guiding principles: **non-discrimination**, the **best interests of the child**, and respect for the child’s views.',
  ], 'civ1-child-rights', 'Survival, development, protection, participation.',
  ['The right to play and rest belongs to the group of:', ['development rights', 'survival rights', 'protection rights', 'duties'], 'Children grow through play.'],
  [['Convention', 'A formal agreement between states.'], ['Best interests of the child', 'The principle that decisions must put the child’s welfare first.'], ['Ratify', 'To formally approve a treaty.']],
  [
    { q: 'Give one example of each of the four groups of children’s rights.', steps: ['Survival: **health care**.', 'Development: **education**.', 'Protection: **protection from child labour**.', 'Participation: **being heard** in decisions that concern them.'] },
  ]),

  L('ci-child-duties-1', 'ci-f1-child-rights', '9.2', 'The duties of the child', 10, ['Child protection'], [
    'The **African Charter on the Rights and Welfare of the Child** says that children also have **duties**, according to their age and ability:\n- to **respect** their parents, elders and teachers and help them in case of need\n- to work for the **cohesion of the family** and the good of the community\n- to **serve the nation** with their physical and intellectual abilities\n- to preserve and strengthen **social and national solidarity**\n- to preserve and strengthen **positive African cultural values**\n- to contribute to the **moral well-being** of society.',
    'In daily life this means: working hard at school, helping at home, respecting others’ rights, protecting public property and the environment, and rejecting violence and discrimination.',
  ], 'civ1-child-duties', 'Rights and duties are two sides of one coin.',
  ['Which is a duty of the child?', ['respecting parents and elders', 'refusing all chores', 'skipping school', 'insulting others'], 'African Charter.'],
  [['Cohesion', 'Unity and togetherness.'], ['Solidarity', 'Mutual help and support.']],
  [
    { q: 'Write a short pledge listing three duties of a Form 1 student.', steps: ['"**I will respect my parents, teachers and elders.**"', '"**I will work hard at school and help at home.**"', '"**I will protect public property and live in peace with all.**"'] },
  ]),

  // ---------- 10. Abuse and delinquency ----------
  L('ci-child-abuse-1', 'ci-f1-abuse', '10.1', 'Child abuse and exploitation', 10, ['Child protection'], [
    '**Child abuse** is any harm done to a child. Forms:\n- **physical abuse**: beating, burning, wounding\n- **emotional abuse**: insults, threats, humiliation, rejection\n- **neglect**: failing to give food, care, schooling or protection\n- **sexual abuse**: any sexual act with a child\n- **exploitation**: **child labour** (heavy or dangerous work, or work that keeps a child from school), **child trafficking** (recruiting and moving children to exploit them), begging, and **early and forced marriage**.',
    '**Reporting**: a child who is abused, or anyone who knows of abuse, should tell a **trusted adult**, a teacher or the guidance counsellor, a **social worker** (social affairs services), the **police** or **gendarmerie**, or a traditional or religious leader. Reporting abuse is a duty, not a betrayal.',
  ], 'civ1-abuse', 'If a child is harmed, tell a trusted adult or the authorities.',
  ['Failing to give a child food, care and schooling is:', ['neglect', 'protection', 'education', 'solidarity'], 'A form of abuse.'],
  [['Child abuse', 'Any harm done to a child.'], ['Child trafficking', 'Recruiting and moving children to exploit them.'], ['Neglect', 'Failing to provide what a child needs.']],
  [
    { q: 'Explain the difference between a household chore and child labour.', steps: ['A **chore** is a light task suited to the child’s age (sweeping, washing plates) that does not stop schooling.', '**Child labour** is heavy, dangerous or long work that harms health or keeps the child **out of school**.'] },
  ]),

  L('ci-delinquency-1', 'ci-f1-abuse', '10.2', 'Juvenile delinquency', 10, ['Social ills'], [
    '**Juvenile delinquency** is the committing of offences by **young people under 18**: theft, violence, vandalism, drug use and trafficking, gang activity, cybercrime and examination fraud.',
    '**Causes**: lack of parental care and broken families; poverty; **bad company** and peer pressure; drugs; school failure and dropping out; violent films and games; and the bad example of adults.',
    '**Consequences**: arrest, punishment, and a criminal record; dropping out of school; danger to the young person and to society. **Solutions**: good family care and dialogue; guidance and counselling at school; sports, clubs and youth activities; job training; and centres that help young offenders return to society (rehabilitation).',
  ], 'civ1-delinquency', 'Care, guidance and good company prevent delinquency.',
  ['A young person under 18 who commits an offence is a:', ['juvenile delinquent', 'citizen of honour', 'prefect', 'registrar'], 'A young offender.'],
  [['Juvenile delinquency', 'Offences committed by young people under 18.'], ['Rehabilitation', 'Helping an offender return to normal life.']],
  [
    { q: 'Suggest three ways a school can prevent juvenile delinquency.', steps: ['**Guidance and counselling** for students in difficulty.', '**Clubs and sports** that keep students busy and give good friends.', '**Dialogue with parents** about their children’s behaviour.'] },
  ]),

  // ---------- 11. Conflicts ----------
  L('ci-conflict-causes-1', 'ci-f1-conflict', '11.1', 'Causes and consequences of conflicts', 10, ['Conflict and peace'], [
    'A **conflict** is a serious disagreement between people or groups whose needs, interests or ideas are opposed. Conflicts happen in the **family** (between spouses, parents and children, brothers and sisters), at **school** (between students, or students and teachers) and in the **community** (between neighbours, villages or groups).',
    '**Causes**: misunderstanding and poor communication; **discrimination** (by tribe, religion, sex); **selfishness** and jealousy; disputes over **land**, boundaries and **inheritance**; money; gossip and rumours; injustice; and the abuse of alcohol or drugs.',
    '**Consequences**: anger, broken relationships, violence, injuries and even death; children suffering; loss of property; division of families and communities. Conflicts are normal, but they must be managed **peacefully**.',
  ], 'civ1-conflict', 'Find the cause first; then you can solve the conflict.',
  ['A conflict between two villages over a farm boundary is a:', ['land conflict', 'school conflict', 'religious festival', 'trade fair'], 'A common community conflict.'],
  [['Conflict', 'A serious disagreement between opposed people or groups.'], ['Rumour', 'Unchecked information passed from person to person.']],
  [
    { q: 'Identify the cause of this conflict: two brothers stop speaking after their father’s death.', steps: ['A likely cause is a dispute over **inheritance** (the father’s land or house).', 'There may have been **no will**.', 'A solution: a **family meeting** with elders to share the property fairly.'] },
  ]),

  L('ci-divorce-1', 'ci-f1-conflict', '11.2', 'Divorce: causes, procedure and consequences', 10, ['Family', 'Conflict and peace'], [
    '**Divorce** is the legal ending of a marriage, pronounced by a **court**. **Causes**: unfaithfulness; violence; abandonment; lack of dialogue; financial problems; alcoholism; interference by relatives; infertility disputes.',
    '**Procedure** (in outline): one or both spouses file a request with the court; the judge tries to **reconcile** them; if reconciliation fails, the court examines the case, decides on the divorce, the **custody** of the children, the **right of visit** of the other parent, **maintenance** (alimony) for the children and the sharing of property.',
    '**Consequences**: suffering for children and spouses, changes of home and school, financial difficulties. Families and friends should first encourage **dialogue and reconciliation**; when divorce happens, both parents keep the duty to care for their children.',
  ], 'civ1-divorce', 'Even after divorce, both parents remain responsible for their children.',
  ['Who pronounces a divorce?', ['a court (judge)', 'a church', 'the family alone', 'the children'], 'A legal decision.'],
  [['Divorce', 'The legal ending of a marriage by a court.'], ['Custody', 'The right and duty to look after a child.'], ['Alimony (maintenance)', 'Money ordered by a court for the support of a spouse or children.']],
  [
    { q: 'Give three consequences of divorce for children.', steps: ['**Emotional suffering**: sadness, worry.', '**Change of home** and sometimes of school.', '**Financial difficulties** if maintenance is not paid.'] },
  ]),

  // ---------- 12. Peaceful resolution ----------
  L('ci-resolution-1', 'ci-f1-peace', '12.1', 'Dialogue, negotiation, mediation and arbitration', 10, ['Conflict and peace'], [
    'Conflicts can be solved **without violence**:\n- **dialogue**: the people concerned talk calmly, listen to each other and try to understand\n- **negotiation**: each side states its needs and they look for an agreement, often with compromise (each gives up something)\n- **mediation**: a **neutral third person** (an elder, a teacher, a chief, a peer mediator) helps the two sides talk and find their own agreement\n- **arbitration**: a third person (an arbiter, a chief’s council or a court) hears both sides and **decides** the solution, which they agree to accept.',
    'Traditional institutions (family meetings, the chief’s court, councils of elders) and modern ones (courts, social workers) help resolve conflicts in Cameroon.',
  ], 'civ1-peace', 'Mediator helps them agree; arbiter decides for them.',
  ['A teacher helps two students talk and find their own agreement. This is:', ['mediation', 'arbitration', 'violence', 'revenge'], 'The mediator does not decide.'],
  [['Negotiation', 'Discussion to reach an agreement.'], ['Mediation', 'Help from a neutral person to reach agreement.'], ['Arbitration', 'A decision made by a neutral person after hearing both sides.'], ['Compromise', 'An agreement in which each side gives up something.']],
  [
    { q: 'Two students fight over a seat in class. Show how mediation could solve it.', steps: ['A **peer mediator** or teacher meets both students calmly.', 'Each **explains** their side without interruption.', 'They **find a solution** together (taking turns, or new seating) and **shake hands**.'] },
  ]),

  L('ci-tolerance-1', 'ci-f1-peace', '12.2', 'Steps to resolve a conflict; tolerance and forgiveness', 10, ['Conflict and peace'], [
    '**Steps to resolve a conflict**:\n1. **calm down**: stop and avoid violence\n2. **identify the problem** and its cause\n3. **listen** to each side and express feelings respectfully ("I feel… when…")\n4. **look for solutions** together\n5. **choose** a fair solution both accept\n6. **apply** it and **follow up**.',
    '**Values for peace**: **tolerance** (accepting that others may think, believe or live differently), **forgiveness** (letting go of anger and revenge), **respect**, **patience** and **empathy** (understanding how others feel). A **culture of peace** means choosing dialogue over violence in daily life.',
  ], 'civ1-peace-steps', 'Calm, identify, listen, find, choose, apply.',
  ['The first step in resolving a conflict is to:', ['calm down', 'take revenge', 'gossip', 'call friends to fight'], 'Avoid violence first.'],
  [['Tolerance', 'Accepting differences in others.'], ['Empathy', 'Understanding how another person feels.'], ['Forgiveness', 'Letting go of anger against someone who hurt you.']],
  [
    { q: 'Rewrite this angry sentence as an "I feel" statement: "You always take my pen, you thief!"', steps: ['Name your **feeling**: "**I feel upset**"', 'Name the **behaviour**: "**when my pen is taken without asking,**"', 'State a **request**: "**please ask me first next time.**"'] },
  ]),

  // ---------- 13. The State ----------
  L('ci-state-nation-1', 'ci-f1-state', '13.1', 'The State and the nation', 10, ['The State'], [
    'A **state** is an organised political community with four **elements**: a **territory** with borders; a **population**; a **government** that makes and applies laws; and **sovereignty** (independence: it governs itself without outside control and is recognised by other states).',
    'A **nation** is a people who feel they belong together because of a shared history, values, culture or destiny. A state may contain several peoples; building a **nation** means uniting them.',
    '**Cameroon** is a state: territory of about 475 000 km² in Central Africa; a population of many peoples; a government with the President of the Republic, Parliament and the courts; and sovereignty since independence (French Cameroun on 1 January 1960 and reunification with Southern Cameroons on 1 October 1961).',
  ], 'civ1-state', 'Territory, population, government, sovereignty: no element, no state.',
  ['Which is NOT one of the four elements of a state?', ['a national football team', 'territory', 'population', 'sovereignty'], 'The fourth is government.'],
  [['State', 'An organised political community with territory, population, government and sovereignty.'], ['Nation', 'A people with a shared history and sense of belonging.'], ['Sovereignty', 'Supreme, independent authority.']],
  [
    { q: 'Show that Cameroon has the four elements of a state.', steps: ['**Territory**: about 475 000 km² with recognised borders.', '**Population**: many peoples who are Cameroonian citizens.', '**Government**: the President, Parliament and the courts.', '**Sovereignty**: independent since 1960 and 1961, a member of the UN.'] },
  ]),

  L('ci-symbols-1', 'ci-f1-state', '13.2', 'The symbols of the State and public property', 10, ['The State'], [
    'The **Constitution** names the symbols of the State of Cameroon:\n- the **flag**: three vertical bands of green, red and yellow, with a yellow five-pointed **star** in the centre of the red band\n- the **national anthem**, which in English begins "O Cameroon, Thou Cradle of our Fathers"\n- the **motto**: "**Peace – Work – Fatherland**"\n- the **seal** and the **coat of arms**.',
    'Citizens show **respect** for the symbols by standing still during the anthem and the raising of the flag, and by never damaging them.',
    '**Public property** (schools, hospitals, roads, bridges, street lights, water points, public buildings) is paid for with public money and belongs to **all citizens**. Protecting it is a civic duty; vandalism is an offence.',
  ], 'en1-symbols', 'Respect the symbols; protect what belongs to all.',
  ['The star on the flag of Cameroon is in the:', ['red band', 'green band', 'yellow band', 'top left corner'], 'A yellow star.'],
  [['State symbols', 'Official emblems that represent the State.'], ['Public property', 'Property paid for with public money and used by all.']],
  [
    { q: 'Explain why damaging a public water point is wrong.', steps: ['It was paid for with **public money** (taxes).', 'It serves **the whole community**.', 'Damaging it deprives **everyone** of water and is an **offence**.'] },
  ]),

  // ---------- 14. Duties of a citizen ----------
  L('ci-citizen-duties-1', 'ci-f1-duties', '14.1', 'The duties of a citizen', 10, ['The State', 'Citizenship'], [
    'The **Constitution** of Cameroon gives citizens rights, and also **duties**:\n- to **respect the Constitution and the laws**\n- to **pay taxes** and contribute to public expenses\n- to **defend the fatherland** and its territorial integrity\n- to **vote** (from the age of 20, after registering) and take part in public life\n- to **protect public property** and the environment\n- to respect the rights of others and live in **peace** with all.',
    '**Civic participation** also includes taking part in community work (clean-up campaigns, road repair), joining associations, respecting national days and helping those in need. A good citizen is **honest**, **hard-working** and **law-abiding**.',
  ], 'civ1-duties', 'Respect laws, pay taxes, defend the nation, vote, protect what is common.',
  ['In Cameroon, the age at which citizens may vote is:', ['20', '18', '16', '25'], 'After registration on the electoral list.'],
  [['Law-abiding', 'Obeying the law.'], ['Civic participation', 'Taking part in the life of the community and the nation.']],
  [
    { q: 'Give one duty of a citizen and explain why it matters.', steps: ['Duty: **paying taxes**.', 'Why: taxes give the State money for **schools, hospitals, roads** and the salaries of teachers and nurses.', 'Without taxes, there are **no public services**.'] },
  ]),

  L('ci-taxes-1', 'ci-f1-duties', '14.2', 'Taxes and public services', 10, ['The State'], [
    'A **tax** is money that citizens and businesses must pay to the State or to the councils. Examples: income tax on salaries, **value added tax (VAT)** on goods and services, business licences, property tax and council taxes such as market fees.',
    'Taxes form the State’s **budget**, voted each year by **Parliament**. They pay for **public services**: schools and teachers, hospitals and nurses, roads and bridges, water and electricity projects, security (police, gendarmerie, army) and justice.',
    '**Tax evasion** (not paying taxes that are due) and **corruption** (stealing or misusing public money) deprive the people of services. Good citizens pay their taxes, and they have the right to ask that public money is used honestly.',
  ], 'civ1-taxes', 'Taxes in, public services out: honesty on both sides.',
  ['The State’s budget is voted each year by:', ['Parliament', 'the PTA', 'the school council', 'the market'], 'The National Assembly and the Senate.'],
  [['Tax', 'Money citizens and businesses must pay to the State or councils.'], ['Budget', 'The State’s plan of income and spending for a year.'], ['Tax evasion', 'Illegally avoiding paying taxes.']],
  [
    { q: 'Trace how a tax paid at the market can become a service.', steps: ['A trader pays **market fees** to the council.', 'The council adds them to its **budget**.', 'The money pays for **cleaning the market** or building a **water point**.'] },
  ]),

  // ---------- 15. National integration ----------
  L('ci-bilingualism-1', 'ci-f1-integration', '15.1', 'Bilingualism and multiculturalism', 10, ['The State', 'National integration'], [
    'The **Constitution** makes **English** and **French** the two official languages of Cameroon, with **equal status**. This **bilingualism** comes from the country’s history (British and French rule after 1916, then reunification in 1961). Cameroon also has more than 250 national languages and many cultures: this is **multiculturalism**.',
    'The State promotes bilingualism through bilingual schools and classes, the use of both languages in official documents, and bilingual programmes on radio and television. In **2017** it created the **National Commission for the Promotion of Bilingualism and Multiculturalism**.',
    'Bilingualism is an **advantage**: it opens Cameroon to the English- and French-speaking worlds and helps citizens work and study everywhere in the country. Learning the other official language and respecting all cultures are civic duties.',
  ], 'civ1-integration', 'Two official languages, more than 250 national languages, one nation.',
  ['The two official languages of Cameroon have:', ['equal status', 'different status', 'no status', 'status only in schools'], 'In the Constitution.'],
  [['Bilingualism', 'The use of two languages.'], ['Multiculturalism', 'The presence and respect of many cultures in one society.']],
  [
    { q: 'Give two advantages of bilingualism for a young Cameroonian.', steps: ['Ability to **study and work** in any part of Cameroon.', 'Access to **opportunities abroad** in English- and French-speaking countries.'] },
  ]),

  L('ci-living-together-1', 'ci-f1-integration', '15.2', 'Rejecting tribalism; living together', 10, ['National integration'], [
    '**National integration** is the process of uniting all the peoples of a country into one nation, while respecting their differences. Its enemies are **tribalism** (favouring one’s own ethnic group and rejecting others), **regionalism**, religious intolerance, **hate speech** and discrimination.',
    '**Living together** (vivre-ensemble) means peaceful coexistence among all Cameroonians: respecting other cultures and religions, speaking both official languages, marrying and working across groups, sharing national celebrations (11 February, 20 May), and treating everyone equally.',
    'What a student can do: make friends from other regions; learn about other cultures; refuse and report hate speech, online and offline; and work in mixed groups. Unity in diversity makes the nation strong.',
  ], 'civ1-living-together', 'Different peoples, one nation: refuse tribalism and hate speech.',
  ['Which action promotes living together?', ['making friends from other regions', 'mocking other tribes', 'spreading hate speech', 'refusing to work in groups'], 'Openness builds unity.'],
  [['Tribalism', 'Favouring one’s own ethnic group and rejecting others.'], ['Hate speech', 'Words that attack people because of their group.'], ['National integration', 'Uniting all the peoples of a country into one nation.']],
  [
    { q: 'A classmate posts an insult against another tribe online. What should you do?', steps: ['**Do not share** or like the post.', 'Calmly tell the classmate that **hate speech harms national unity**.', '**Report** the post and inform a teacher if it continues.'] },
  ]),

  // ---------- 16. Revision ----------
  L('ci-integration-tasks-1', 'ci-f1-review', '16.1', 'Solving integration situations', 10, ['Revision'], [
    'An **integration situation** is a real-life problem in which you must use the knowledge, skills and values of the course. Method:\n1. **read** the situation and identify the problem\n2. **find** the rights, duties, laws and values involved\n3. **propose actions**: what to do, who to contact, in what order\n4. **justify** your actions\n5. say what **result** you expect.',
    'Example situations: a neighbour’s child sells in the market during school hours (child labour); two families quarrel over a boundary (conflict); a student is bullied (school hazard); a family has not registered a baby’s birth (civil status); a student damages a school tap (public property).',
  ], 'civ1-integration-steps', 'Problem, rights and values, actions, reasons, result.',
  ['In an integration situation, after identifying the problem you should:', ['find the rights, duties and values involved', 'ignore it', 'copy the question', 'give up'], 'Then propose actions.'],
  [['Integration situation', 'A real-life problem solved using the knowledge and values of the course.']],
  [
    { q: 'Solve: "Your 10-year-old neighbour sells groundnuts in the market instead of going to school."', steps: ['Problem: **child labour**, which violates the **right to education**.', 'Actions: talk kindly to the **parents** about the child’s right and duty to attend school; if nothing changes, inform the **social affairs services**.', 'Result: the child **returns to school**.'] },
  ]),

  L('ci-review-1', 'ci-f1-review', '16.2', 'Revision of the year', 10, ['Revision'], [
    'Key points of Form 1 Citizenship Education:\n- **family**: types, rights and duties, protection (will, inheritance, widowhood); **marriage**: civil, traditional, religious; monogamy and polygamy; conditions for a valid marriage\n- **civil status**: birth, marriage and death certificates; late registration by court judgment\n- **school**: structure, rights and duties of students, internal rules; hazards (drugs, bullying, malpractice, vandalism); **road safety**\n- **human rights**: dignity, characteristics, UDHR (1948), African Charter (1981); **rights of the child** (1989, 1990) and duties; **abuse**, exploitation and juvenile delinquency\n- **conflicts**: causes, divorce, peaceful resolution (dialogue, negotiation, mediation, arbitration), tolerance\n- **the State**: elements, nation, symbols, public property; **duties of citizens** (laws, taxes, defence, voting); **national integration** (bilingualism, multiculturalism, living together).',
  ], 'civ1-review', 'One mind map per term revises the whole year.',
  ['Which pair matches correctly?', ['1948: Universal Declaration of Human Rights', '1989: African Charter on Human and Peoples’ Rights', '2019: Convention on the Rights of the Child', '1981: Universal Declaration'], '1948 UDHR.'],
  [['Mind map', 'A diagram linking ideas around a central topic.']],
  [
    { q: 'Make a mind map of term 1.', steps: ['Centre: **Family and school life**.', 'Branches: **family types and roles**; **marriage**; **civil status**; **school community**; **school hazards**; **road safety**.'] },
  ]),
];
