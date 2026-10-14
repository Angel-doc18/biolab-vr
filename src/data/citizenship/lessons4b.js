// Citizenship Education lessons for Form 4, terms 2 and 3: decentralisation
// and local councils, citizen participation, traditional authority, juvenile
// delinquency, drugs, cybercrime, gender-based violence, road safety and
// digital citizenship. Original text written for this app.

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

export const LESSONS_4B = [
  // ---------- Decentralisation ----------
  L('ci-decentralisation-4', 'ci-f4-decentralisation', '8.1', 'Decentralisation in Cameroon', 14, ['Local governance'], [
    '**Decentralisation** is the transfer by the State of powers and resources to **regional and local authorities** that are run by **elected** bodies and enjoy administrative and financial autonomy. It brings decisions closer to the people and encourages local development and participation.',
    'Legal framework:\n- the **1996 Constitution** describes Cameroon as a **decentralised unitary State** and creates the regional and local authorities: **regions** and **councils**\n- the **General Code of Regional and Local Authorities** (law of **24 December 2019**) organises them in detail; it also gives the **North-West** and **South-West** regions a **special status**, recognising their anglophone heritage\n- a Ministry of Decentralisation and Local Development (created in 2018) oversees the process.',
    'Decentralisation differs from **deconcentration**, in which the State delegates tasks to its own appointed officials (governors, prefects, sub-prefects) who represent it in the regions. These officials also exercise **supervision** over the local authorities to check that they respect the law.',
  ], 'civ-decentralisation', 'Decentralisation gives power to elected local bodies; deconcentration to appointed state officials.',
  ['The 2019 law that organises regional and local authorities is the:', ['General Code of Regional and Local Authorities', 'Labour Code', 'Penal Code', 'Electoral Code'], 'Adopted on 24 December 2019.'],
  [['Decentralisation', 'Transfer of powers and resources from the State to elected regional and local authorities.'], ['Deconcentration', 'Delegation of state tasks to appointed officials in the regions.'], ['Special status', 'The particular arrangements for the North-West and South-West regions.']],
  [
    { q: 'Give three advantages of decentralisation for citizens.', steps: ['**Decisions are taken closer to the people, by leaders they elect.**', '**Local needs (markets, water, roads) are better known and met faster.**', '**Citizens can take part more easily in local affairs.**'] },
  ]),

  L('ci-councils-4', 'ci-f4-decentralisation', '8.2', 'Councils, city councils and regional councils', 15, ['Local governance'], [
    'The **council** (municipality) is the basic local authority. Its organs:\n- the **municipal council** (deliberative organ): councillors elected for **five years** by universal suffrage; it votes the budget and takes decisions\n- the **mayor** and deputy mayors (executive): elected by the councillors; the mayor executes decisions, manages staff and is also a **civil status registrar**.\nLarge towns have **city councils** grouping several councils, headed by an elected **city mayor**.',
    'Functions of councils: civil status registration (births, marriages, deaths), markets, local roads and street lighting, sanitation and waste, water supply, building and maintaining primary schools and health centres, urban planning and building permits, culture and sport.\nResources: local taxes and fees (market fees, business licences, parking), transfers from the State, support from **FEICOM** (the special fund that finances councils) and loans.',
    'The **region** is headed by a **regional council** made up of divisional delegates elected by municipal councillors and representatives of traditional rulers. Its **executive** is led by a **regional president**. Regional councils, first elected in **December 2020**, handle regional economic development, health, education, culture and sport. In the North-West and South-West, the regional assembly has a **House of Divisional Representatives** and a **House of Chiefs**, and a **Public Independent Conciliator** handles complaints.',
  ], 'civ-decentralisation', 'Council: municipal council (decides) and mayor (executes).',
  ['Births, marriages and deaths are registered at the:', ['council civil status centre', 'BEAC', 'Senate', 'customs office'], 'The mayor is a civil status registrar.'],
  [['Municipal council', 'The elected deliberative body of a council.'], ['Mayor', 'The elected head of a council’s executive.'], ['FEICOM', 'The special fund that finances councils.'], ['Regional president', 'The head of a region’s executive.']],
  [
    { q: 'Describe how a council is run and how it raises money.', steps: ['**Councillors are elected for five years and form the municipal council, which votes the budget and decisions; they elect a mayor who executes them.**', '**Money comes from local taxes and fees, transfers from the State, FEICOM support and loans.**'] },
  ]),

  // ---------- Participation ----------
  L('ci-humaninvestment-4', 'ci-f4-participation', '9.1', 'Human investment and local taxes', 13, ['Local governance'], [
    '**Human investment** is voluntary community work for the common good: cleaning markets and gutters, clearing roads, building classrooms or bridges, planting trees. It saves public money and builds solidarity; many Cameroonian towns organise regular cleaning days.',
    'Councils need money to provide services, so citizens have a duty to pay **council taxes and fees**: market and stall fees, business licences, parking fees, building permit fees. Paying them honestly funds roads, lighting, waste collection and schools.',
    'Citizens also protect **public property**: not damaging street lights, school furniture or water points, and reporting broken facilities.',
  ], 'civ-participation', 'Pay local fees and protect public property: they pay for local services.',
  ['Cleaning a market drain with neighbours on a community day is:', ['human investment', 'a tax', 'a court case', 'a crime'], 'Voluntary community work.'],
  [['Human investment', 'Voluntary community work for the common good.'], ['Council fees', 'Charges paid to the council for services and licences.'], ['Public property', 'Property owned by the community or State.']],
  [
    { q: 'Explain how paying council fees benefits a market trader.', steps: ['**The fees pay for cleaning, waste removal, lighting and security in the market.**', '**A clean, safe market attracts customers and protects the trader’s goods and health.**'] },
  ]),

  L('ci-municipalvote-4', 'ci-f4-participation', '9.2', 'Municipal elections and council sessions', 13, ['Local governance', 'Elections'], [
    'Municipal councillors are elected for **five years** by universal suffrage, using party lists. Every Cameroonian aged **20** or more who is registered on the electoral list may vote; ELECAM organises the elections.',
    'Council **sessions** are generally **public**: citizens may attend and follow debates on the budget and projects. Citizens can also write to the mayor, take part in **public consultations**, join neighbourhood committees and, where councils use it, **participatory budgeting**, in which residents help choose projects.',
    'Active local citizens hold leaders **accountable**: they ask how the budget is spent, check that projects are completed and vote according to performance.',
  ], 'civ-participation', 'Vote, attend sessions, ask questions, check projects.',
  ['Citizens may attend council sessions because they are:', ['generally public', 'secret', 'held abroad', 'for chiefs only'], 'Transparency.'],
  [['Accountability', 'The obligation of leaders to explain and answer for their actions.'], ['Participatory budgeting', 'Residents helping to decide how part of a budget is spent.']],
  [
    { q: 'Give four ways a young citizen can take part in council affairs.', steps: ['**Register and vote at 20 in municipal elections.**', '**Attend public council sessions.**', '**Join human investment days and youth associations.**', '**Report problems and suggest projects to the council.**'] },
  ]),

  // ---------- Traditional authority ----------
  L('ci-chiefdoms-4', 'ci-f4-traditional', '10.1', 'The classification of traditional chiefdoms', 13, ['Local governance', 'Tradition'], [
    'Traditional chiefdoms are organised by a **decree of 15 July 1977**. They are classified in three degrees:\n- **first-class** chiefdoms: whose territory covers at least two second-class chiefdoms; their boundaries generally do not exceed those of a division\n- **second-class** chiefdoms: covering at least two third-class chiefdoms; generally within a subdivision\n- **third-class** chiefdoms: a village in rural areas or a quarter in towns.',
    'A chief is designated according to **custom** by the community (kingmakers, notables) and then **recognised** by the administration: by the Prime Minister for first-class chiefs, the minister in charge of territorial administration for second-class chiefs and the prefect for third-class chiefs.',
    'Traditional rulers are **auxiliaries of the administration**: they help the State keep order, collect information and mobilise communities, and they receive allowances. They must remain neutral and respect the law.',
  ], 'civ-chiefdoms', 'First class covers second class, which covers third class (village or quarter).',
  ['A third-class chiefdom usually corresponds to:', ['a village or a town quarter', 'a region', 'a division', 'a country'], 'The smallest unit.'],
  [['Chiefdom', 'A traditional unit of authority headed by a chief.'], ['Auxiliary of the administration', 'A person who assists the State in local administration.'], ['Kingmakers', 'Notables who choose a new chief according to custom.']],
  [
    { q: 'Explain how a third-class chief comes to office.', steps: ['**The community designates the chief according to its custom, often through kingmakers and notables.**', '**The prefect then officially recognises the chief by an administrative act.**'] },
  ]),

  L('ci-chiefsrole-4', 'ci-f4-traditional', '10.2', 'The role of traditional rulers today', 13, ['Tradition'], [
    'Roles of traditional rulers:\n- **custodians of culture**: preserving language, customs, festivals, sacred sites and history\n- **peacekeepers**: settling family and land disputes through dialogue and customary law (within the law)\n- **links** between the administration and the people: passing on government information and community concerns\n- **development**: mobilising communities for roads, schools, health campaigns and human investment\n- **representation**: in regional councils and, in the North-West and South-West, in the House of Chiefs.',
    'Challenges: succession disputes, political pressures, land conflicts, and adapting tradition to human rights (for example, ending harmful practices such as forced marriage).',
    'Respected chiefs who act fairly strengthen national unity and local development.',
  ], 'civ-chiefdoms', 'Custodians of culture, peacekeepers, links and mobilisers.',
  ['A chief who settles a boundary dispute between two families acts as a:', ['peacekeeper (mediator)', 'tax collector', 'soldier', 'judge of the Supreme Court'], 'Dispute resolution.'],
  [['Customary law', 'Rules based on the traditions of a community, applied within national law.'], ['Mediation', 'Helping parties in a dispute reach agreement.']],
  [
    { q: 'How can a traditional ruler help a vaccination campaign succeed?', steps: ['**Announce the campaign at palace meetings and through notables.**', '**Encourage families by being vaccinated publicly and correcting rumours.**', '**Provide a meeting place and help health workers reach every quarter.**'] },
  ]),

  // ---------- Delinquency ----------
  L('ci-delinquency-4', 'ci-f4-delinquency', '11.1', 'Juvenile delinquency: signs, causes and consequences', 14, ['Social vices'], [
    '**Juvenile delinquency** means offences and serious antisocial behaviour by young people under **18**: theft, vandalism, violence, truancy, gang membership, drug use, extortion.',
    'Causes:\n- **peer pressure** and the wish to belong\n- **poverty** and unemployment\n- **family breakdown**, lack of supervision, violence at home\n- **media** that glamorise violence and easy money\n- dropping out of school, drug and alcohol abuse, and a lack of positive role models.',
    'Consequences: school failure, injury, imprisonment and a criminal record, broken families, insecurity in neighbourhoods, and loss of the young people a nation needs for its future.',
  ], 'civ-delinquency', 'Peer pressure, poverty, family breakdown, media, school dropout.',
  ['Truancy means:', ['staying away from school without permission', 'helping a teacher', 'taking an examination', 'being punctual'], 'An early sign of delinquency.'],
  [['Juvenile delinquency', 'Offences and antisocial behaviour by young people under 18.'], ['Peer pressure', 'Influence from friends of the same age.'], ['Truancy', 'Absence from school without permission.']],
  [
    { q: 'Explain three causes of juvenile delinquency in Cameroonian towns.', steps: ['**Poverty and youth unemployment push some young people towards theft.**', '**Weak family supervision when parents are absent or in conflict.**', '**Peer pressure in gangs and exposure to drugs and violent media.**'] },
  ]),

  L('ci-prevention-4', 'ci-f4-delinquency', '11.2', 'Preventing delinquency and rehabilitating offenders', 13, ['Social vices'], [
    'Prevention involves everyone:\n- **families**: supervision, dialogue, love and firm, fair discipline\n- **schools**: guidance counselling, clubs, sport and clear rules\n- **communities and religious bodies**: youth programmes, mentoring and role models\n- **the State**: education, vocational training, jobs for young people, and law enforcement.',
    'Young offenders are treated differently from adults: the law provides special procedures for minors and aims at **rehabilitation** (education, training and reintegration) rather than only punishment. Social workers and specialised institutions help young people rebuild their lives.',
    'Each young person also has a role: choosing friends carefully, saying no to crime and drugs, and using their talents positively.',
  ], 'civ-delinquency', 'Prevention by family, school, community and State; rehabilitation for offenders.',
  ['Rehabilitation of young offenders aims to:', ['help them return to a normal, lawful life', 'punish them forever', 'exclude them from society', 'make them adults'], 'Reintegration.'],
  [['Rehabilitation', 'Helping an offender return to a lawful, productive life.'], ['Mentoring', 'Guidance by an experienced, trusted person.']],
  [
    { q: 'Propose three activities your school could run to prevent delinquency.', steps: ['**Sports and arts clubs that keep students busy and give them a sense of belonging.**', '**Counselling and mentoring by older students and teachers.**', '**Talks by police and former offenders about the consequences of crime.**'] },
  ]),

  // ---------- Substance abuse ----------
  L('ci-drugs-4', 'ci-f4-substances', '12.1', 'Commonly abused substances and their effects', 14, ['Social vices', 'Health'], [
    'Substances commonly abused in Cameroon:\n- **tramadol**: a prescription painkiller taken in high doses by some young people for energy or "courage"; it causes dependence, seizures, liver damage and can kill\n- **cannabis**: affects memory, concentration and mental health\n- **illicit local alcohol**: home-distilled spirits that may contain toxic methanol, causing blindness or death\n- **tobacco** and shisha: cause cancer and heart and lung disease\n- solvents, glue and other drugs.',
    'Effects of abuse: **addiction**, physical illness, mental illness (anxiety, psychosis), poor school results and dropout, accidents, violence and crime, family conflict and poverty.',
    'Why young people start: curiosity, peer pressure, stress, the false belief that drugs help studying or work, and easy availability.',
  ], 'civ-drugs', 'Tramadol is a medicine, not a stimulant: abused, it can kill.',
  ['Illicit home-made spirits can be deadly because they may contain:', ['methanol', 'vitamins', 'water only', 'salt'], 'Methanol causes blindness and death.'],
  [['Addiction', 'Dependence on a substance or habit despite harm.'], ['Tramadol', 'A prescription painkiller often abused.'], ['Methanol', 'A toxic alcohol found in some illicit spirits.']],
  [
    { q: 'A friend says tramadol helps him study all night. How do you answer him?', steps: ['**Tramadol is a painkiller, not a study aid; high doses cause dependence, seizures and even death.**', '**Tiredness is better handled by sleep, planning and short breaks.**', '**Suggest he talks to the school counsellor or a health worker.**'] },
  ]),

  L('ci-drugcontrol-4', 'ci-f4-substances', '12.2', 'Fighting drug abuse', 13, ['Social vices'], [
    'The State fights drugs through:\n- **laws** that punish the production, trafficking and sale of illegal drugs and the illegal sale of medicines\n- the **National Drug Control Committee**, which coordinates prevention and awareness\n- **police, gendarmerie and customs** controls, including seizures of tramadol and cannabis\n- **health services** that treat addiction.',
    'Schools act through **guidance counselling**, health clubs, awareness campaigns, clear rules, and cooperation with parents and health workers; students who are dependent should be helped and referred for treatment, not only punished.',
    'Individuals protect themselves by refusing firmly ("No, thank you"), choosing friends wisely, finding healthy ways to cope with stress, and reporting dealers to adults or the authorities.',
  ], 'civ-drugs', 'Prevention, treatment and law enforcement together.',
  ['Students who are dependent on drugs should be:', ['helped and referred for treatment', 'ignored', 'sold more drugs', 'praised'], 'Addiction is a health problem too.'],
  [['National Drug Control Committee', 'The Cameroonian body coordinating the fight against drugs.'], ['Trafficking', 'Illegal trade in drugs or people.']],
  [
    { q: 'State three roles of the school in fighting drug abuse.', steps: ['**Awareness: talks, clubs and campaigns on the dangers of drugs.**', '**Counselling and referral of students who use drugs.**', '**Clear rules and cooperation with parents and the authorities to keep dealers away.**'] },
  ]),

  // ---------- Cybercrime ----------
  L('ci-cybercrime-4', 'ci-f4-cybercrime', '13.1', 'Forms of cybercrime', 14, ['Social vices', 'ICT'], [
    '**Cybercrime** is crime committed with computers, phones or the internet. Forms:\n- **identity theft**: stealing personal data (names, ID numbers, passwords) to commit fraud\n- **online scams** ("broutage"): fake sellers, fake jobs, fake lotteries, romance scams, asking victims to send money\n- **phishing**: messages that imitate banks or mobile money services to steal codes\n- **hacking** into accounts and systems\n- **cyberbullying** and harassment\n- spreading **fake news**, hate speech and private images without consent.',
    'Cameroon’s **law of 21 December 2010** on cybersecurity and cybercrime punishes these offences, and the Penal Code punishes spreading false news. **ANTIC**, the national agency for information and communication technologies, works on cybersecurity.',
    'Consequences: loss of money and reputation, emotional harm, imprisonment of offenders, and loss of trust in digital services that could help development.',
  ], 'civ-cybercrime', 'No real seller, bank or operator ever asks for your PIN.',
  ['A message claiming to be from your mobile money operator asking for your PIN is:', ['phishing', 'a normal request', 'a bank statement', 'a reward'], 'Operators never ask for PINs.'],
  [['Cybercrime', 'Crime committed using computers or the internet.'], ['Phishing', 'Fraudulent messages meant to steal personal data.'], ['Identity theft', 'Using someone’s personal data to commit fraud.']],
  [
    { q: 'Identify the cybercrime: (a) posting a classmate’s private photos to humiliate her; (b) selling non-existent phones online; (c) creating a fake profile in a teacher’s name.', steps: ['(a) **Cyberbullying and sharing private images without consent.**', '(b) **Online scam (broutage).**', '(c) **Identity theft (impersonation).**'] },
  ]),

  L('ci-responsibleict-4', 'ci-f4-cybercrime', '13.2', 'Safe, legal and responsible use of ICT', 13, ['ICT'], [
    'Protect yourself:\n- use **strong passwords** and never share PINs or codes\n- do not click unknown links or attachments\n- set **privacy settings** and think before posting personal information\n- verify sellers and offers; "too good to be true" usually is.',
    'Respect others and the law:\n- do not insult, threaten or harass\n- do not share **fake news**: check sources before sharing\n- do not share others’ photos or data without consent\n- respect **copyright**: credit sources and do not pirate.',
    'Use ICT positively: for learning, research, creativity, business and civic participation. If you are a victim, keep evidence (screenshots), block, and report to the platform, a trusted adult, the police or ANTIC.',
  ], 'civ-cybercrime', 'Think before you click, post or share.',
  ['Before sharing a shocking news story online, you should:', ['check whether reliable sources confirm it', 'share it at once', 'add your own exaggerations', 'send it to all contacts'], 'Stop fake news.'],
  [['Privacy settings', 'Controls that limit who can see your information.'], ['Copyright', 'The legal right of creators over their work.']],
  [
    { q: 'Write four rules for safe phone use for younger pupils.', steps: ['**Never share your PIN or passwords.**', '**Do not open links from unknown senders.**', '**Do not send photos to people you do not know.**', '**Tell a trusted adult if someone online scares or pressures you.**'] },
  ]),

  // ---------- GBV ----------
  L('ci-gbv-4', 'ci-f4-gbv', '14.1', 'Gender-based violence: types and causes', 14, ['Social vices', 'Human rights'], [
    '**Gender-based violence** (GBV) is harm done to a person because of their **sex or gender**, often rooted in unequal power between women and men. Women and girls are most often victims, but boys and men can also be affected. Types:\n- **physical**: beating, wounding\n- **sexual**: rape, sexual harassment, forced marriage\n- **emotional (psychological)**: insults, threats, humiliation, isolation\n- **economic**: denying money, preventing work, seizing property or inheritance\n- harmful practices such as FGM and widowhood rites that degrade women.',
    'Root causes: gender inequality and harmful social norms, alcohol and drug abuse, poverty, conflict and displacement, silence and impunity.',
    'Consequences: injury and death, trauma, unwanted pregnancy and disease, school dropout, poverty, and children who grow up seeing violence as normal.',
  ], 'civ-gbv', 'GBV is rooted in unequal power; silence lets it continue.',
  ['Preventing a wife from working or controlling all her money is:', ['economic violence', 'physical violence', 'legal protection', 'a gift'], 'Control of resources.'],
  [['Gender-based violence', 'Harm done to a person because of their sex or gender.'], ['Sexual harassment', 'Unwanted sexual behaviour that offends or intimidates.'], ['Impunity', 'Escaping punishment for wrongdoing.']],
  [
    { q: 'Explain why GBV harms the whole community, not only the victim.', steps: ['**Victims may be unable to work or study, increasing poverty.**', '**Children exposed to violence may repeat it.**', '**Health and justice services bear the costs, and trust in the community breaks down.**'] },
  ]),

  L('ci-gbvsupport-4', 'ci-f4-gbv', '14.2', 'Preventing GBV and supporting victims', 13, ['Human rights'], [
    'Prevention:\n- **education** on equality, consent and respect, from early age\n- challenging harmful norms in families, schools, churches and communities\n- **economic empowerment** of women\n- enforcing the **law**: the Penal Code punishes assault, rape, sexual harassment, forced marriage and genital mutilation.',
    'Support for victims in Cameroon: the **police and gendarmerie** (some have special units), **health centres** (urgent care within 72 hours after rape can prevent HIV and pregnancy), the **Ministry of Women’s Empowerment and the Family** and its women’s empowerment centres, **social services**, and NGOs that give counselling, shelter and legal aid.',
    'How to help a victim: listen without judging, believe them, protect their privacy, help them reach medical care and support services, and never blame them.',
  ], 'civ-gbv', 'Listen, believe, protect privacy, refer.',
  ['After a rape, urgent medical care is important within:', ['72 hours', 'one month', 'one year', 'it is never urgent'], 'Treatment can prevent HIV and pregnancy.'],
  [['Consent', 'Free and informed agreement.'], ['Survivor', 'A person who has lived through violence.'], ['Referral', 'Directing someone to a service that can help.']],
  [
    { q: 'A friend tells you she is being hit at home. What should you do?', steps: ['**Listen calmly and believe her; tell her it is not her fault.**', '**Encourage her to speak to a trusted adult, the school counsellor or social services.**', '**If she is in immediate danger, alert an adult or the police.**'] },
  ]),

  // ---------- Road safety ----------
  L('ci-roadaccidents-4', 'ci-f4-roadsafety', '15.1', 'The causes and prevention of road accidents', 14, ['Safety'], [
    'Road accidents kill and injure many people in Cameroon every year. Causes:\n- **human error** (the main cause): speeding, dangerous overtaking, drunk or drugged driving, fatigue, using a phone, overloading, not respecting the highway code, careless pedestrians\n- **mechanical failure**: worn tyres, bad brakes, faulty lights, old vehicles\n- **poor infrastructure**: potholes, narrow roads, missing signs and lighting\n- weather: rain, fog and dust.',
    'Prevention:\n- **seat belts** for all passengers; **helmets** for motorcycle riders and passengers\n- no alcohol or drugs before driving; rest on long journeys\n- respect speed limits and the highway code; do not use a phone while driving\n- maintain vehicles; avoid overloading\n- pedestrians: use crossings, walk facing traffic, wear visible clothing at night.',
    'Road safety is a shared responsibility of drivers, passengers, pedestrians, vehicle owners and the authorities that build and maintain roads.',
  ], 'civ-road-signs', 'Most accidents are caused by human behaviour, so behaviour can prevent them.',
  ['Overloading a vehicle is dangerous because it:', ['reduces control and braking ability', 'improves safety', 'saves lives', 'is required'], 'Heavier vehicles are harder to stop.'],
  [['Highway code', 'The rules for using roads safely.'], ['Overloading', 'Carrying more passengers or goods than allowed.']],
  [
    { q: 'You are a passenger in a bush taxi driven too fast. What can you do?', steps: ['**Wear a seat belt if available.**', '**Politely ask the driver to slow down, with other passengers.**', '**If he refuses, get off at a safe place and report the vehicle number to the police.**'] },
  ]),

  L('ci-roadsigns-4', 'ci-f4-roadsafety', '15.2', 'Road signs and the highway code', 13, ['Safety'], [
    'Road signs are grouped by **shape and colour**:\n- **warning signs**: triangles with a red border (danger ahead: bend, school, crossing, slippery road)\n- **prohibitory signs**: circles with a red border (no entry, no overtaking, speed limit, no parking)\n- **mandatory signs**: blue circles (turn right, roundabout, path for cyclists)\n- **information signs**: rectangles (directions, hospital, parking)\n- the **stop** sign is octagonal and red; **give way** is an inverted triangle.',
    'Traffic lights: **red** stop, **amber** prepare to stop, **green** go if the way is clear. Road markings: a continuous line must not be crossed; zebra crossings give priority to pedestrians.',
    'Knowing the highway code protects not only drivers but also pedestrians and cyclists, who must understand signals and drivers’ intentions.',
  ], 'civ-road-signs', 'Triangle warns, red circle forbids, blue circle orders, rectangle informs.',
  ['An octagonal red sign means:', ['stop', 'give way', 'parking', 'hospital'], 'Stop completely.'],
  [['Warning sign', 'A sign that warns of a danger ahead.'], ['Prohibitory sign', 'A sign that forbids an action.'], ['Mandatory sign', 'A sign that orders an action.']],
  [
    { q: 'Interpret: (a) a red-bordered triangle with children; (b) a red-bordered circle with "50"; (c) a blue circle with an arrow pointing right.', steps: ['(a) **Warning: school or children crossing ahead.**', '(b) **Prohibition: maximum speed 50 km/h.**', '(c) **Mandatory: turn right.**'] },
  ]),

  // ---------- Digital citizenship ----------
  L('ci-footprint-4', 'ci-f4-digital', '16.1', 'Digital footprint and digital etiquette', 13, ['ICT'], [
    'Your **digital footprint** is the trail of information you leave online: posts, photos, comments, likes, searches and messages. It can be **permanent**: what you post today may be seen by future employers, universities or communities. Others can screenshot and share it.',
    '**Digital etiquette** (netiquette) means behaving online as you would face to face: be polite, avoid insults and hate, respect others’ privacy, do not spam, think before you post, and use appropriate language.',
    'Respect **copyright**: credit authors of texts, music and images you use, and do not pirate software or films. Copying someone’s work and presenting it as your own is **plagiarism**.',
  ], 'civ-digital', 'Before posting, ask: would I be happy for my teacher or future employer to see this?',
  ['A digital footprint is:', ['the trail of information a person leaves online', 'a computer part', 'a password', 'a road sign'], 'It can last for years.'],
  [['Digital footprint', 'The record of a person’s online activity.'], ['Netiquette', 'Rules of polite behaviour online.'], ['Plagiarism', 'Presenting someone else’s work as one’s own.']],
  [
    { q: 'Give three ways a careless post can harm a student later.', steps: ['**An insulting post can lead to school discipline or legal action.**', '**Embarrassing photos may be seen by future employers or universities.**', '**Personal details shared publicly can be used by scammers.**'] },
  ]),

  L('ci-onlinesafety-4', 'ci-f4-digital', '16.2', 'Grooming, phishing and media literacy', 14, ['ICT'], [
    '**Online grooming**: an adult builds trust with a child online (gifts, flattery, secrecy) in order to abuse or exploit them. Warning signs: requests for private photos, pressure to keep secrets, offers of money, invitations to meet. Response: stop contact, keep evidence, block and tell a trusted adult or the police.',
    '**Phishing traps**: fake messages, websites or calls that imitate banks, mobile money operators, schools or exam bodies to steal passwords and codes, often with urgent threats ("your account will be closed"). Never give codes; check through official channels.',
    '**Media literacy** is the ability to analyse media critically: ask who made a message, why, what evidence it gives, and what is missing; distinguish facts from opinions and advertisements; check sources before believing or sharing.',
  ], 'civ-digital', 'Secrecy and pressure are warning signs online.',
  ['An online "friend" asks a 14-year-old for private photos and says "keep it our secret". This is:', ['grooming', 'friendship', 'education', 'advertising'], 'Warning signs: secrecy and pressure.'],
  [['Grooming', 'Building trust with a child online in order to abuse or exploit them.'], ['Media literacy', 'The ability to analyse and judge media messages.']],
  [
    { q: 'A message says: "GCE results leaked! Pay 5,000 FCFA by mobile money to receive them." Analyse it.', steps: ['**It is a scam: official results are published only by the GCE Board.**', '**Pressure and payment requests are warning signs of fraud.**', '**Do not pay or share it; report the number.**'] },
  ]),
];
