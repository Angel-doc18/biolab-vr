// Citizenship Education lessons for Form 4, term 1: human rights and
// redress, the family, the rights and duties of the child, child abuse,
// vulnerable groups and a civic project. Original text written for this app.

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

export const LESSONS_4A = [
  // ---------- Human rights ----------
  L('ci-udhr-4', 'ci-f4-humanrights', '1.1', 'Human rights and the Universal Declaration', 13, ['Human rights'], [
    '**Human rights** are the basic rights and freedoms that belong to every person simply because they are human. They are **universal** (for everyone, everywhere), **inalienable** (they cannot be taken away, though some may be lawfully limited), **indivisible** and **interdependent** (all rights matter together).',
    'After the horrors of the Second World War, the United Nations adopted the **Universal Declaration of Human Rights** (UDHR) in Paris on **10 December 1948**, now celebrated as **Human Rights Day**. Its 30 articles set a common standard for all peoples: the right to life, liberty and security; freedom from slavery and torture; equality before the law; freedom of thought, religion and expression; the right to work, education and an adequate standard of living.',
    'The UDHR inspired binding treaties: the two **International Covenants** of 1966 (on civil and political rights, and on economic, social and cultural rights) and, in Africa, the **African Charter on Human and Peoples’ Rights** (the Banjul Charter, 1981). The **Preamble of Cameroon’s Constitution** affirms the country’s attachment to these texts.',
  ], 'civ-rights-generations', 'UDHR: 10 December 1948, UN General Assembly, Paris, 30 articles.',
  ['The UDHR has:', ['30 articles', '10 articles', '100 articles', '5 articles'], 'A common standard for all peoples.'],
  [['Human rights', 'Basic rights and freedoms belonging to every person.'], ['Universal', 'Applying to all people everywhere.'], ['Inalienable', 'Not able to be taken away or given up.'], ['Banjul Charter', 'The African Charter on Human and Peoples’ Rights (1981).']],
  [
    { q: 'Explain why the UDHR was adopted in 1948.', steps: ['**The Second World War and the Holocaust showed how states could destroy human dignity.**', '**The new United Nations wanted a common standard of rights to prevent such abuses and promote peace.**'] },
  ]),

  L('ci-rightscategories-4', 'ci-f4-humanrights', '1.2', 'Categories of human rights', 13, ['Human rights'], [
    'Rights are often grouped in three "generations":\n- **civil and political rights** (first generation): life, liberty, a fair trial, freedom of expression, religion, association and movement, the right to vote and to stand for election\n- **economic, social and cultural rights** (second generation): work and fair wages, education, health, housing, social security, taking part in cultural life\n- **collective (solidarity) rights** (third generation): the right of peoples to development, peace, a healthy environment and self-determination.',
    'Civil and political rights mainly require the State **not to interfere** (no arbitrary arrest, no censorship); economic and social rights require the State to **act** and provide services (schools, hospitals), progressively, within its resources.',
    'Rights go with **duties**: the African Charter stresses duties towards the family, society, the State and the international community, such as respecting others, paying taxes and defending the nation.',
  ], 'civ-rights-generations', 'Civil and political, economic social and cultural, collective: three generations.',
  ['The right to a healthy environment is a:', ['collective (third-generation) right', 'civil right', 'political right', 'duty only'], 'A solidarity right.'],
  [['Civil rights', 'Rights protecting individual freedom, such as a fair trial.'], ['Political rights', 'Rights to take part in government, such as voting.'], ['Economic, social and cultural rights', 'Rights to work, education, health and culture.'], ['Collective rights', 'Rights of peoples, such as development and peace.']],
  [
    { q: 'Classify each right: (a) to vote; (b) to free primary education; (c) to a fair trial; (d) to development.', steps: ['(a) **Political.**', '(b) **Social (and cultural).**', '(c) **Civil.**', '(d) **Collective (third generation).**'] },
  ]),

  // ---------- Violations ----------
  L('ci-violations-4', 'ci-f4-violations', '2.1', 'Recognising human rights violations', 13, ['Human rights'], [
    'A **human rights violation** occurs when a right is denied or abused, by the State or by private persons. Examples:\n- **torture** and cruel, inhuman or degrading treatment\n- **arbitrary arrest** and detention without legal grounds or trial\n- **discrimination** on grounds of sex, ethnicity, religion, disability or opinion\n- **human trafficking**: recruiting, moving or holding people by force or deceit for exploitation (forced labour, sexual exploitation)\n- child labour, forced marriage, denial of education, violence against women, restriction of free expression.',
    'Violations harm victims’ dignity, health and livelihoods; they create fear, conflict and poverty, and damage a country’s reputation and development.',
    'Recognising a violation is the first step. Ask: Which right is affected? Who is responsible? Is there a lawful reason, and was the correct procedure followed?',
  ], 'civ-redress', 'Name the right affected, the person responsible and whether the law was followed.',
  ['Keeping a suspect in a cell for weeks without charge or trial is:', ['arbitrary detention', 'a fair trial', 'a civic duty', 'a right'], 'Liberty is violated.'],
  [['Violation', 'A breach or denial of a right.'], ['Discrimination', 'Unfair treatment because of a characteristic such as sex or ethnicity.'], ['Human trafficking', 'Moving or holding people by force or deceit for exploitation.']],
  [
    { q: 'A girl is withdrawn from school to work as a house help in town without pay. Which rights are violated?', steps: ['**The right to education.**', '**The right to protection from economic exploitation (child labour).**', '**Possibly trafficking, if she was moved by deceit for exploitation.**'] },
  ]),

  L('ci-redress-4', 'ci-f4-violations', '2.2', 'Bodies that protect human rights', 14, ['Human rights'], [
    'National protection in Cameroon:\n- the **courts**, which can punish offenders and award compensation\n- the **Cameroon Human Rights Commission**, created by a law of July 2019 to replace the National Commission on Human Rights and Freedoms; it receives complaints, investigates, visits places of detention, educates the public and advises the government\n- the **Public Independent Conciliators** of the North-West and South-West regions, the police and gendarmerie, ministries (Justice, Social Affairs, Women’s Empowerment and the Family), and the Bar (lawyers)\n- **civil society**: human rights NGOs, churches, associations and the media.',
    'Regional and international protection:\n- the **African Commission** and **African Court** on Human and Peoples’ Rights\n- **UN** bodies: the Human Rights Council and treaty committees that review states’ reports\n- international NGOs that investigate and publish reports.',
    'To seek **redress**: gather evidence, report to the police or a lawyer, file a complaint with the Human Rights Commission, and use NGOs for legal aid.',
  ], 'civ-redress', 'National courts and the Human Rights Commission first; regional and UN bodies after.',
  ['The national body that receives human rights complaints in Cameroon today is the:', ['Cameroon Human Rights Commission', 'ELECAM', 'BEAC', 'CONAC'], 'Created in 2019.'],
  [['Redress', 'A remedy or compensation for a wrong.'], ['Civil society', 'Non-governmental groups such as NGOs, churches and associations.'], ['Legal aid', 'Free or low-cost legal help for those who cannot pay.']],
  [
    { q: 'A trader is beaten by an official at a market. Outline the steps he can take to obtain redress.', steps: ['**Get medical treatment and a medical certificate as evidence; note witnesses.**', '**Report to the police or gendarmerie and consult a lawyer or a legal-aid NGO.**', '**File a complaint with the Cameroon Human Rights Commission and, if needed, take the case to court.**'] },
  ]),

  // ---------- The family ----------
  L('ci-familytypes-4', 'ci-f4-family', '3.1', 'Types and functions of the family', 13, ['Family'], [
    'A **family** is a group of people related by blood, marriage or adoption. Types:\n- **nuclear** family: parents and their children\n- **extended** family: several generations and relatives (grandparents, uncles, aunts, cousins), common in Cameroon\n- **single-parent** family: one parent and children\n- **polygamous** family: a husband with more than one wife (allowed in Cameroon when chosen at marriage registration)\n- foster and adoptive families.',
    'Functions of the family:\n- **biological**: having and raising children\n- **economic**: providing food, shelter, clothing and income\n- **educational and socialising**: teaching language, values, behaviour and skills\n- **emotional**: love, security and support\n- **protective** and **cultural**: passing on traditions and identity.',
    'Because every person grows up in a family and society is made of families, the family is called the **basic unit of society**.',
  ], 'civ-family', 'Nuclear, extended, single-parent, polygamous: know an example of each.',
  ['Teaching children language, values and behaviour is the family’s:', ['socialising (educational) function', 'economic function', 'biological function only', 'political function'], 'The first school.'],
  [['Nuclear family', 'Parents and their children.'], ['Extended family', 'A family including several generations and relatives.'], ['Socialisation', 'Learning the values and behaviour of society.']],
  [
    { q: 'Give four functions of the family with an example of each.', steps: ['**Economic: parents pay school fees and buy food.**', '**Educational: elders teach children greetings and respect.**', '**Emotional: comforting a child who is sick or sad.**', '**Cultural: passing on the mother tongue and traditional festivals.**'] },
  ]),

  L('ci-familyvalues-4', 'ci-f4-family', '3.2', 'Values transmitted in the family', 12, ['Family'], [
    'The family passes on **moral values** (honesty, respect, kindness, responsibility, hard work), **cultural values** (language, customs, respect for elders, hospitality, solidarity) and **civic values** (respect for the law and public property, tolerance, patriotism, participation in community life).',
    'Parents and elders teach by **example** and by guidance: a child who sees parents pay taxes, vote, help neighbours and settle disputes peacefully learns good citizenship.',
    'Threats to family values include poverty, conflict and violence, alcohol and drug abuse, absent parents and harmful media. Schools, religious bodies and communities support families in their role.',
  ], 'civ-family', 'Children learn values more from example than from words.',
  ['Respect for public property is a:', ['civic value', 'biological need', 'economic loss', 'cultural costume'], 'A value of citizenship.'],
  [['Moral value', 'A principle of right behaviour, such as honesty.'], ['Civic value', 'A value of good citizenship, such as respect for the law.']],
  [
    { q: 'Explain how a family can teach a child to be a good citizen.', steps: ['**By example: parents obey the law, pay taxes and vote.**', '**By guidance: discussing right and wrong and correcting behaviour.**', '**By involvement: taking children to community work and teaching respect for others and for public property.**'] },
  ]),

  // ---------- Rights of the child ----------
  L('ci-childconventions-4', 'ci-f4-childrights', '4.1', 'The conventions on the rights of the child', 14, ['Child protection'], [
    'Two key treaties protect children:\n- the **UN Convention on the Rights of the Child** (UNCRC), adopted on **20 November 1989**, the most widely ratified human rights treaty\n- the **African Charter on the Rights and Welfare of the Child** (ACRWC), adopted by the OAU in **1990**.\nBoth define a **child** as a person **under 18**. Cameroon has ratified both.',
    'Guiding principles: **non-discrimination**; the **best interests of the child**; the right to **life, survival and development**; and **respect for the child’s views** according to age and maturity.',
    'Fundamental rights include: a **name and nationality** (birth registration), **education**, **health care** and **nutrition**, play and leisure, protection from **violence, abuse and exploitation**, protection in armed conflict, and special care for children with disabilities.',
  ], 'civ-child-rights', 'A child is anyone under 18; the best interests of the child come first.',
  ['Registering a baby’s birth protects the right to:', ['a name and nationality', 'vote', 'drive', 'marry'], 'Legal identity.'],
  [['UNCRC', 'The UN Convention on the Rights of the Child (1989).'], ['ACRWC', 'The African Charter on the Rights and Welfare of the Child (1990).'], ['Best interests of the child', 'The principle that children’s welfare comes first in decisions about them.']],
  [
    { q: 'State four rights of the child and say who must protect each.', steps: ['**Education: parents and the State (schools).**', '**Health: parents and health services (vaccination).**', '**A name and nationality: parents, by registering the birth at the civil status centre.**', '**Protection from abuse: family, community, police and social services.**'] },
  ]),

  L('ci-childduties-4', 'ci-f4-childrights', '4.2', 'The duties of the child', 12, ['Child protection'], [
    'The African Charter on the Rights and Welfare of the Child is notable because it sets out the child’s **duties** as well as rights. According to age and ability, a child should:\n- work for the cohesion of the family, **respect parents**, superiors and elders and assist them in need\n- serve the national community with physical and intellectual abilities\n- preserve and strengthen **social and national solidarity**\n- preserve **African cultural values** in a spirit of tolerance and dialogue\n- contribute to the moral well-being of society and to African unity.',
    'At school, duties include being punctual, studying, obeying school rules, respecting teachers and classmates and protecting school property.',
    'Rights and duties go together: a child who claims the right to education also has the duty to attend and work; a child who enjoys protection should respect the rights of others.',
  ], 'civ-child-rights', 'Every right comes with a duty.',
  ['Which is a duty of the child under the African Charter?', ['to respect parents and elders', 'to work in a mine', 'to leave school early', 'to vote'], 'Family cohesion.'],
  [['Duty', 'Something a person is obliged to do.'], ['Solidarity', 'Unity and mutual support within a community.']],
  [
    { q: 'Pair two rights of a student with a matching duty.', steps: ['**Right to education → duty to attend school and study.**', '**Right to safety → duty to respect others and not bully or fight.**'] },
  ]),

  // ---------- Child abuse ----------
  L('ci-abuseforms-4', 'ci-f4-childabuse', '5.1', 'Forms of child abuse and exploitation', 14, ['Child protection'], [
    '**Child abuse** is any action or failure to act that harms a child’s health, development or dignity. Forms:\n- **physical abuse**: beating, burning, injuring\n- **sexual abuse** and sexual exploitation\n- **emotional abuse**: insults, threats, humiliation\n- **neglect**: failing to provide food, care, health or education\n- **child labour**: work that is dangerous or prevents schooling\n- **child trafficking**: moving children for exploitation\n- **early and forced marriage**\n- **female genital mutilation** (FGM), which causes lasting physical and psychological harm.',
    'Signs that a child may be abused: unexplained injuries, fear, withdrawal, sudden changes in behaviour or school performance, frequent absence, signs of hunger.',
    'Effects: injury and disability, trauma and depression, school dropout, early pregnancy, poverty, and the risk of becoming abusive later.',
  ], 'civ-child-abuse', 'Physical, sexual, emotional, neglect, labour, trafficking, early marriage, FGM.',
  ['Repeatedly insulting and humiliating a child is:', ['emotional abuse', 'neglect', 'education', 'discipline required by law'], 'It harms mental health.'],
  [['Child abuse', 'Any act or omission that harms a child’s health, development or dignity.'], ['Neglect', 'Failure to meet a child’s basic needs.'], ['FGM', 'Female genital mutilation, a harmful practice.']],
  [
    { q: 'A 12-year-old sells goods in the market every school day and is beaten if she sells too little. Identify the forms of abuse.', steps: ['**Child labour: work that prevents schooling.**', '**Physical abuse: beating.**', '**Neglect of her right to education.**'] },
  ]),

  L('ci-abuselaws-4', 'ci-f4-childabuse', '5.2', 'The law against child abuse in Cameroon', 14, ['Child protection', 'Law'], [
    'Cameroon’s legal framework includes:\n- the **Constitution**, which guarantees protection of the family and of children\n- the **Penal Code** (revised in 2016), which punishes assault, sexual offences against minors, forcing a person into marriage, **genital mutilation**, child trafficking and the abandonment of children\n- the **Labour Code**, which forbids employing children under **14** and bans dangerous work for minors\n- laws against human trafficking and the international conventions Cameroon has ratified.',
    'Institutions: the Ministry of Social Affairs (MINAS), the Ministry of Women’s Empowerment and the Family (MINPROFF), the police and gendarmerie, the courts, social welfare services and child protection NGOs.',
    'Everyone has a role: parents and teachers should protect and listen; neighbours and community leaders should report abuse; children should know their rights and speak to a trusted adult.',
  ], 'civ-child-abuse', 'Report abuse: protecting a child is everyone’s duty.',
  ['The Cameroon Labour Code forbids employing children under:', ['14', '18 for any light task', '10', '6'], 'Minimum working age.'],
  [['Penal Code', 'The law that defines crimes and their punishments.'], ['Labour Code', 'The law governing work and employment.']],
  [
    { q: 'A teacher suspects a pupil is being abused at home. What should the teacher do?', steps: ['**Listen to the child calmly and reassure them; do not promise secrecy.**', '**Inform the head teacher and the school counsellor, and report to social services or the police.**', '**Keep notes of what was observed and said.**'] },
  ]),

  // ---------- Vulnerable groups ----------
  L('ci-vulnerablegroups-4', 'ci-f4-vulnerable', '6.1', 'Who is vulnerable?', 13, ['Social inclusion'], [
    '**Vulnerable groups** are people more exposed to poverty, abuse or exclusion and less able to defend their rights. They include:\n- **orphans** and children without parental care\n- **street children**\n- **persons with disabilities** (physical, sensory, intellectual)\n- **internally displaced persons** (IDPs): people forced from their homes who remain inside the country, for example because of the crises in the North-West, South-West and Far North\n- **refugees**: people who have crossed an international border to escape danger\n- the **elderly**, especially those living alone\n- people living with HIV, and the very poor.',
    'Their difficulties: lack of income and shelter, barriers to school, health care and jobs, discrimination and stigma, and higher risk of abuse and exploitation.',
    'Vulnerability is not a personal failing; it often results from circumstances such as conflict, illness or disability, which society can reduce.',
  ], 'civ-vulnerable', 'IDPs stay inside the country; refugees cross a border.',
  ['A family that fled fighting in Bamenda to live in Douala are:', ['internally displaced persons', 'refugees', 'tourists', 'migrants for work'], 'They remain inside Cameroon.'],
  [['Vulnerable group', 'People more exposed to harm and less able to defend their rights.'], ['Internally displaced person', 'Someone forced from home who stays inside the country.'], ['Stigma', 'Negative attitudes that mark a group as inferior.']],
  [
    { q: 'Give three problems faced by persons with disabilities and one solution for each.', steps: ['**Inaccessible buildings → ramps and accessible toilets.**', '**Exclusion from school → inclusive education with trained teachers and materials such as Braille.**', '**Unemployment → vocational training and fair hiring.**'] },
  ]),

  L('ci-inclusion-4', 'ci-f4-vulnerable', '6.2', 'Social protection and inclusion', 13, ['Social inclusion'], [
    '**Social protection** means measures that protect people against poverty and risk: social assistance (food aid, cash transfers), social insurance (pensions, health insurance), and special services for vulnerable people.',
    'In Cameroon, the **Ministry of Social Affairs** (MINAS) cares for vulnerable groups through social centres and welfare services; a **2010 law** protects and promotes **persons with disabilities**; humanitarian agencies and NGOs support IDPs and refugees; religious bodies run orphanages and homes for the elderly.',
    '**Inclusion** and **empowerment** go beyond charity: inclusive education, vocational training, access to credit, accessible public buildings and transport, and fighting stigma so that vulnerable people can take part fully and support themselves.',
  ], 'civ-vulnerable', 'Inclusion and empowerment, not only charity.',
  ['Vocational training for street children is an example of:', ['empowerment', 'stigma', 'exclusion', 'punishment'], 'Skills for independence.'],
  [['Social protection', 'Measures that protect people against poverty and risk.'], ['Empowerment', 'Giving people skills and means to control their lives.'], ['Inclusive education', 'Schooling in which all children, including those with disabilities, learn together.']],
  [
    { q: 'Suggest three ways your school can include pupils with disabilities.', steps: ['**Build ramps and adapt toilets and classrooms.**', '**Seat pupils with visual or hearing difficulties near the board and use suitable materials.**', '**Fight teasing and stigma through clubs and talks.**'] },
  ]),

  // ---------- Civic project ----------
  L('ci-campaign-4', 'ci-f4-project', '7.1', 'Planning a sensitisation campaign', 15, ['Civic project'], [
    'A **sensitisation campaign** raises awareness and changes behaviour. Steps:\n- **identify the problem** (for example, bullying or child labour) and gather facts\n- define the **target audience** (pupils, parents, traders) and the **aims** (what should change)\n- choose **messages**: short, clear, positive, in the right languages\n- choose **methods**: talks, drama, posters, songs, radio, social media, a march or a debate\n- plan **resources**, partners (school counsellor, social services, NGOs, local radio) and a timetable\n- carry out the campaign\n- **evaluate**: did knowledge or behaviour change?',
    'Respect rules: get permission from the school authorities, protect victims’ privacy, and avoid blaming or naming individuals.',
    'A campaign is an act of active citizenship: young people using their voice to improve their community.',
  ], 'civ-campaign', 'Problem, audience, aims, messages, methods, partners, action, evaluation.',
  ['Evaluating a campaign means:', ['checking whether its aims were achieved', 'starting it', 'printing posters', 'choosing colours'], 'Measure the results.'],
  [['Sensitisation', 'Raising awareness of an issue.'], ['Target audience', 'The group a campaign is meant to reach.'], ['Evaluation', 'Judging how well an activity achieved its aims.']],
  [
    { q: 'Plan a one-week school campaign against child labour.', steps: ['**Aim: pupils and parents understand that child labour harms education and is illegal.**', '**Activities: a short play at assembly, posters with the message "Children belong in school", a talk by a social worker.**', '**Evaluation: a short quiz before and after, and a count of pupils who know where to report abuse.**'] },
  ]),

  L('ci-bullying-4', 'ci-f4-project', '7.2', 'Bullying in schools', 13, ['Civic project', 'Child protection'], [
    '**Bullying** is repeated, deliberate behaviour meant to hurt, frighten or humiliate someone who finds it hard to defend themselves. Forms: **physical** (hitting, pushing), **verbal** (insults, threats, mocking), **social** (excluding, spreading rumours), **cyberbullying** (messages, posts or photos online), and **extortion** of money or food.',
    'Effects on victims: fear, low self-esteem, poor marks, absence, depression and, in extreme cases, self-harm. Bullies who are not stopped may move on to violence and crime.',
    'Responses: victims should tell a trusted adult and keep evidence; **bystanders** should refuse to join in, support the victim and report; schools should have clear rules, supervise breaks, involve parents, and use counselling and fair sanctions.',
  ], 'civ-campaign', 'Bystanders hold the power to stop bullying.',
  ['Spreading rumours to exclude a classmate is:', ['social bullying', 'physical bullying', 'a joke', 'school discipline'], 'Exclusion hurts.'],
  [['Bullying', 'Repeated, deliberate behaviour meant to hurt or intimidate.'], ['Bystander', 'A person who witnesses an event.'], ['Extortion', 'Obtaining money or goods by threats.']],
  [
    { q: 'You see an older student taking a younger one’s food money every day. What should you do?', steps: ['**Do not join in or laugh; support the younger student.**', '**Report it to a teacher, the discipline master or the counsellor, with details of when and where.**', '**Encourage the victim to speak up too.**'] },
  ]),
];
