// Extra end-of-lesson questions for the Citizenship Education lessons, by
// lesson id. The correct option is written first; options are shuffled when
// shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Form 4, term 1 ----------
  'ci-udhr-4': [
    Q('The UDHR was adopted in which city?', ['Paris', 'New York', 'Yaoundé', 'Geneva'], 'At the UN General Assembly in 1948.'),
    Q('"Inalienable" rights are rights that:', ['cannot be taken away', 'can be sold', 'belong to the State', 'expire at 18'], 'They belong to the person.'),
    Q('The two International Covenants were adopted in:', ['1966', '1948', '1989', '2002'], 'Binding treaties.'),
    Q('Cameroon’s Constitution affirms its attachment to human rights in its:', ['Preamble', 'Penal Code', 'Labour Code', 'budget'], 'The opening part of the Constitution.'),
  ],
  'ci-rightscategories-4': [
    Q('Freedom of religion is a:', ['civil right', 'economic right', 'collective right', 'duty'], 'First generation.'),
    Q('The right to work and fair wages is an:', ['economic right', 'political right', 'civil right only', 'environmental right'], 'Second generation.'),
    Q('Economic and social rights mainly require the State to:', ['act and provide services', 'do nothing', 'restrict freedom', 'close schools'], 'Positive obligations.'),
    Q('The right of peoples to peace is a:', ['collective (solidarity) right', 'civil right', 'cultural right only', 'duty'], 'Third generation.'),
  ],
  'ci-violations-4': [
    Q('Denying a job to a qualified woman because she is a woman is:', ['discrimination', 'equality', 'a right', 'a duty'], 'Sex-based unfairness.'),
    Q('Forced labour of trafficked persons violates the right to:', ['freedom from slavery and servitude', 'vote', 'own property only', 'travel abroad'], 'A grave violation.'),
    Q('Violations of rights may be committed by:', ['the State or private persons', 'only the State', 'only foreigners', 'nobody'], 'Both must be stopped.'),
    Q('The first step in dealing with a violation is to:', ['recognise which right is affected', 'take revenge', 'keep silent', 'blame the victim'], 'Identify the issue.'),
  ],
  'ci-redress-4': [
    Q('The Cameroon Human Rights Commission can:', ['receive complaints and visit places of detention', 'make national laws', 'run elections', 'issue money'], 'Protection and investigation.'),
    Q('The African Court on Human and Peoples’ Rights is a:', ['regional human rights court', 'national court', 'UN agency', 'NGO'], 'African level.'),
    Q('Legal aid helps victims who:', ['cannot afford a lawyer', 'are rich', 'have no complaint', 'are judges'], 'Access to justice.'),
    Q('Evidence such as a medical certificate is useful to:', ['support a complaint in court', 'hide the problem', 'avoid the police', 'delay justice'], 'Proof matters.'),
  ],
  'ci-familytypes-4': [
    Q('The biological function of the family is:', ['having and raising children', 'collecting taxes', 'making laws', 'trading'], 'Reproduction and care.'),
    Q('A family that adopts a child is an:', ['adoptive family', 'extended family only', 'illegal family', 'nuclear family always'], 'Adoption creates family ties.'),
    Q('Extended families are common in Cameroon because of:', ['strong kinship ties and solidarity', 'small houses', 'no children', 'laws forbidding them'], 'Cultural values.'),
    Q('The emotional function of the family provides:', ['love, security and support', 'taxes', 'roads', 'exams'], 'Well-being.'),
  ],
  'ci-familyvalues-4': [
    Q('Hospitality to visitors is a:', ['cultural value', 'crime', 'tax', 'law'], 'Valued in Cameroonian communities.'),
    Q('Children learn values mainly through:', ['the example of parents and elders', 'television only', 'punishment only', 'luck'], 'Imitation.'),
    Q('A threat to family values is:', ['alcohol and drug abuse', 'dialogue', 'love', 'education'], 'It destroys family life.'),
    Q('Patriotism is:', ['love and loyalty to one’s country', 'hatred of others', 'tribalism', 'disobedience'], 'A civic value.'),
  ],
  'ci-childconventions-4': [
    Q('The UNCRC was adopted on:', ['20 November 1989', '10 December 1948', '1 January 1960', '20 May 1972'], 'Universal Children’s Day.'),
    Q('Respect for the child’s views means:', ['children are heard on matters affecting them, according to age', 'children decide everything', 'children are never heard', 'adults ignore children'], 'Participation.'),
    Q('The right to play and leisure is:', ['a right of the child', 'forbidden', 'only for adults', 'a duty'], 'Recognised in the UNCRC.'),
    Q('Non-discrimination means rights apply to:', ['all children without exception', 'boys only', 'rich children only', 'city children only'], 'Equality.'),
  ],
  'ci-childduties-4': [
    Q('Protecting school property is a:', ['duty of the student', 'right of the bully', 'teacher’s crime', 'tax'], 'Responsibility.'),
    Q('The African Charter asks children to preserve:', ['African cultural values in a spirit of tolerance', 'violence', 'colonial rule', 'tribalism'], 'Positive values.'),
    Q('A child who enjoys protection should also:', ['respect the rights of others', 'abuse others', 'ignore rules', 'leave school'], 'Rights and duties go together.'),
    Q('Assisting parents in need is:', ['a duty of the child', 'forbidden', 'a crime', 'a right of the State'], 'Family solidarity.'),
  ],
  'ci-abuseforms-4': [
    Q('A sign that a child may be abused is:', ['unexplained injuries and sudden fear', 'good marks and joy', 'regular attendance', 'healthy appetite'], 'Warning signs.'),
    Q('Sexual exploitation of children is:', ['a serious crime', 'a tradition', 'legal work', 'a game'], 'Punished by law.'),
    Q('Not providing food or medical care to a child is:', ['neglect', 'discipline', 'education', 'protection'], 'A form of abuse.'),
    Q('A long-term effect of child abuse can be:', ['trauma and school dropout', 'better health', 'higher income', 'nothing'], 'Lasting harm.'),
  ],
  'ci-abuselaws-4': [
    Q('The Penal Code revised in 2016 punishes:', ['forcing a person into marriage and genital mutilation', 'school attendance', 'voting', 'trading'], 'Child protection offences.'),
    Q('MINAS is the Ministry of:', ['Social Affairs', 'Agriculture', 'Mines', 'Arts'], 'It protects vulnerable people.'),
    Q('A neighbour who suspects child abuse should:', ['report it to the authorities or social services', 'ignore it', 'spread rumours', 'punish the child'], 'Protection is a shared duty.'),
    Q('Dangerous work for minors is:', ['forbidden by the Labour Code', 'encouraged', 'required', 'unregulated'], 'Child protection.'),
  ],
  'ci-vulnerablegroups-4': [
    Q('Refugees in Cameroon include people who fled from:', ['neighbouring countries in conflict', 'Douala to Yaoundé', 'one quarter to another', 'school'], 'They crossed a border.'),
    Q('The elderly may be vulnerable because of:', ['illness, loss of income and isolation', 'too much wealth', 'youth', 'strength'], 'Ageing brings risks.'),
    Q('Stigma against people living with HIV causes:', ['exclusion and discrimination', 'better care', 'inclusion', 'nothing'], 'Fight stigma.'),
    Q('Vulnerability often results from:', ['circumstances such as conflict, illness or disability', 'personal laziness only', 'luck only', 'education'], 'Not a personal failing.'),
  ],
  'ci-inclusion-4': [
    Q('A cash transfer to poor families is a form of:', ['social assistance', 'taxation', 'fraud', 'loan'], 'Social protection.'),
    Q('Braille materials help:', ['visually impaired learners', 'deaf learners only', 'all teachers', 'no one'], 'Inclusive education.'),
    Q('Social insurance includes:', ['pensions and health insurance', 'bribes', 'fines', 'tolls'], 'Protection against risk.'),
    Q('True inclusion aims to help vulnerable people:', ['take part fully and support themselves', 'stay dependent forever', 'be hidden', 'leave society'], 'Empowerment.'),
  ],
  'ci-campaign-4': [
    Q('The target audience of a campaign is:', ['the group it is meant to reach', 'the organisers only', 'everyone in the world', 'nobody'], 'Know your audience.'),
    Q('A campaign should protect victims by:', ['not naming or exposing them', 'publishing their names', 'blaming them', 'ignoring them'], 'Privacy.'),
    Q('Drama and songs in a campaign help to:', ['make messages memorable', 'confuse people', 'hide the problem', 'waste time only'], 'Engaging methods.'),
    Q('Before a school campaign, students should get:', ['permission from the school authorities', 'nothing', 'a bank loan', 'a passport'], 'Follow rules.'),
  ],
  'ci-bullying-4': [
    Q('Taking a classmate’s money by threats is:', ['extortion (bullying)', 'a loan', 'a gift', 'a game'], 'A form of bullying.'),
    Q('Bullying is characterised by:', ['repetition and an imbalance of power', 'one friendly joke', 'equal play', 'teamwork'], 'Key features.'),
    Q('Schools reduce bullying by:', ['clear rules, supervision and counselling', 'ignoring it', 'rewarding bullies', 'closing playgrounds only'], 'Prevention.'),
    Q('Victims of bullying should:', ['tell a trusted adult and keep evidence', 'fight back with weapons', 'stay silent forever', 'change schools secretly'], 'Seek help.'),
  ],

  // ---------- Form 4, terms 2 and 3 ----------
  'ci-decentralisation-4': [
    Q('Regional and local authorities enjoy:', ['administrative and financial autonomy', 'their own armies', 'their own currencies', 'no powers'], 'Within the law.'),
    Q('Governors, prefects and sub-prefects are:', ['appointed representatives of the State', 'elected mayors', 'traditional chiefs', 'senators'], 'Deconcentration.'),
    Q('The ministry overseeing decentralisation was created in:', ['2018', '1960', '1990', '2022'], 'Decentralisation and Local Development.'),
    Q('Supervision of local authorities by state officials ensures that they:', ['respect the law', 'stop working', 'leave the country', 'print money'], 'Legality control.'),
  ],
  'ci-councils-4': [
    Q('FEICOM is:', ['the special fund that finances councils', 'a political party', 'a court', 'a school'], 'Support for councils.'),
    Q('The mayor is elected by:', ['the municipal councillors', 'the President', 'the governor', 'the Senate'], 'Indirect election.'),
    Q('In the North-West and South-West, complaints against regional and council services go to a:', ['Public Independent Conciliator', 'Supreme Court only', 'customs officer', 'bank'], 'Special status institution.'),
    Q('Building and maintaining primary schools is a function of:', ['councils', 'the Senate', 'ELECAM', 'embassies'], 'Local services.'),
  ],
  'ci-humaninvestment-4': [
    Q('Human investment saves public money because:', ['citizens give free labour for public works', 'it raises taxes', 'it costs more', 'it is paid by banks'], 'Voluntary work.'),
    Q('A business licence fee is paid to the:', ['council', 'church', 'school', 'football club'], 'Local revenue.'),
    Q('Damaging street lights harms:', ['the whole community', 'nobody', 'only the mayor', 'only the State abroad'], 'Public property.'),
    Q('Reporting a broken water point to the council is an act of:', ['civic participation', 'crime', 'laziness', 'fraud'], 'Active citizenship.'),
  ],
  'ci-municipalvote-4': [
    Q('Municipal elections are organised by:', ['ELECAM', 'the mayor', 'the chief', 'the bank'], 'Election management body.'),
    Q('Councillors are elected using:', ['party lists', 'random draw', 'appointment by the governor', 'inheritance'], 'List system.'),
    Q('Holding leaders accountable means:', ['asking them to explain how they use power and money', 'insulting them', 'ignoring them', 'paying them'], 'Accountability.'),
    Q('Public consultations allow citizens to:', ['give their views on local projects', 'avoid taxes', 'appoint the mayor directly', 'cancel elections'], 'Participation.'),
  ],
  'ci-chiefdoms-4': [
    Q('A second-class chiefdom covers at least:', ['two third-class chiefdoms', 'one family', 'a whole region', 'ten divisions'], 'Middle level.'),
    Q('First-class chiefs are recognised by:', ['the Prime Minister', 'the mayor', 'the governor only', 'ELECAM'], 'Highest level of recognition.'),
    Q('Third-class chiefs are recognised by the:', ['prefect', 'President', 'Senate', 'Supreme Court'], 'Local administrative act.'),
    Q('Traditional rulers should remain:', ['neutral and respectful of the law', 'party campaigners', 'above the law', 'armed'], 'Their role is to unite.'),
  ],
  'ci-chiefsrole-4': [
    Q('A challenge facing chiefdoms is:', ['succession disputes', 'too much rain', 'no culture', 'no people'], 'Conflicts over the throne.'),
    Q('Traditional rulers preserve culture by:', ['protecting festivals, languages and sacred sites', 'banning traditions', 'selling heritage abroad', 'ignoring youth'], 'Custodians.'),
    Q('Adapting tradition to human rights means:', ['ending harmful practices such as forced marriage', 'abolishing all culture', 'ignoring rights', 'returning to slavery'], 'Respect for rights.'),
    Q('Chiefs link the administration and the people by:', ['passing on information in both directions', 'collecting customs duties', 'running courts of appeal', 'printing money'], 'Intermediaries.'),
  ],
  'ci-delinquency-4': [
    Q('Vandalism is:', ['deliberately damaging property', 'repairing property', 'studying', 'voting'], 'An act of delinquency.'),
    Q('Lack of positive role models can lead young people to:', ['imitate bad behaviour', 'study harder always', 'become leaders automatically', 'avoid friends'], 'Influence matters.'),
    Q('A consequence of delinquency for the individual is:', ['a criminal record and lost opportunities', 'better jobs', 'more friends always', 'nothing'], 'Long-term harm.'),
    Q('Gang membership often begins through:', ['peer pressure and the wish to belong', 'homework', 'sport clubs', 'church choirs'], 'Belonging.'),
  ],
  'ci-prevention-4': [
    Q('Firm but fair discipline at home helps to:', ['prevent delinquency', 'cause delinquency', 'end schooling', 'raise taxes'], 'Guidance and limits.'),
    Q('Vocational training reduces delinquency by:', ['giving young people skills and jobs', 'keeping them idle', 'raising crime', 'closing schools'], 'Opportunity.'),
    Q('Special procedures for minors aim at:', ['rehabilitation and reintegration', 'permanent exclusion', 'harsher punishment than adults', 'no response'], 'Second chances.'),
    Q('A young person resists delinquency by:', ['choosing friends carefully and saying no to crime', 'joining gangs', 'skipping school', 'using drugs'], 'Personal responsibility.'),
  ],
  'ci-drugs-4': [
    Q('Cannabis mainly affects:', ['memory, concentration and mental health', 'eyesight only', 'hair growth', 'nothing'], 'Brain effects.'),
    Q('Addiction means:', ['dependence on a substance despite harm', 'occasional use of medicine', 'healthy eating', 'exercise'], 'Loss of control.'),
    Q('Shisha smoking is:', ['harmful to the lungs and heart like tobacco', 'safe', 'a medicine', 'a sport'], 'Tobacco harms.'),
    Q('A reason young people start using drugs is:', ['peer pressure and curiosity', 'good grades', 'healthy hobbies', 'family support'], 'Risk factors.'),
  ],
  'ci-drugcontrol-4': [
    Q('Customs and police seizures of tramadol aim to:', ['cut the supply of illegal drugs', 'sell more drugs', 'raise taxes', 'support dealers'], 'Law enforcement.'),
    Q('Treatment of addiction is provided by:', ['health services', 'drug dealers', 'gangs', 'market sellers'], 'Health response.'),
    Q('Saying "No, thank you" firmly is a way to:', ['resist pressure to use drugs', 'accept drugs', 'sell drugs', 'start fights'], 'Refusal skills.'),
    Q('Selling medicines in the street is dangerous because:', ['they may be fake or misused', 'they are always safe', 'they are free', 'they are tested'], 'Illegal medicine sales.'),
  ],
  'ci-cybercrime-4': [
    Q('Hacking is:', ['gaining unauthorised access to computers or accounts', 'typing fast', 'charging a phone', 'buying a laptop'], 'A cybercrime.'),
    Q('Romance scams trick victims into:', ['sending money to fake partners', 'getting married legally', 'studying', 'voting'], 'Online fraud.'),
    Q('Sharing private images without consent is:', ['a punishable offence', 'harmless', 'required', 'a compliment'], 'Violation of privacy.'),
    Q('Cybercrime damages development by:', ['reducing trust in digital services', 'creating jobs', 'raising exports', 'improving roads'], 'Loss of trust.'),
  ],
  'ci-responsibleict-4': [
    Q('A safe password should be:', ['long, mixed and secret', 'your birthday', '0000', 'shared with friends'], 'Hard to guess.'),
    Q('If you are a victim of online fraud, you should:', ['keep evidence and report it', 'delete everything', 'pay again', 'stay silent'], 'Evidence helps investigation.'),
    Q('Piracy of films and software:', ['violates copyright', 'is legal', 'helps creators', 'is required'], 'Respect creators.'),
    Q('ICT can be used positively for:', ['learning, research and business', 'scams only', 'bullying', 'fake news'], 'Positive use.'),
  ],
  'ci-gbv-4': [
    Q('Forced marriage is a form of:', ['gender-based violence', 'education', 'tradition to protect', 'legal contract always'], 'Sexual and psychological harm.'),
    Q('Widowhood rites that degrade women are:', ['harmful practices', 'human rights', 'legal duties', 'health care'], 'A form of GBV.'),
    Q('GBV can affect:', ['women, girls, men and boys', 'only men', 'only children', 'nobody'], 'Women and girls most often.'),
    Q('Impunity encourages GBV because:', ['offenders are not punished', 'victims are protected', 'laws are enforced', 'education improves'], 'Enforcement matters.'),
  ],
  'ci-gbvsupport-4': [
    Q('Economic empowerment of women helps to prevent GBV because:', ['women can leave abusive situations and decide for themselves', 'it increases violence', 'it is illegal', 'it has no effect'], 'Independence.'),
    Q('Helping a survivor means:', ['listening without judging and referring to services', 'blaming them', 'telling everyone', 'ignoring them'], 'Supportive response.'),
    Q('Consent means:', ['free and informed agreement', 'silence', 'pressure', 'payment'], 'Required in relationships.'),
    Q('Women’s empowerment centres are run by:', ['MINPROFF', 'MINDEF', 'ELECAM', 'BEAC'], 'Ministry for women and the family.'),
  ],
  'ci-roadaccidents-4': [
    Q('Worn tyres and bad brakes are examples of:', ['mechanical failure', 'human error', 'good maintenance', 'road signs'], 'A cause of accidents.'),
    Q('Pedestrians walking on roads without pavements should walk:', ['facing the oncoming traffic', 'with their backs to traffic', 'in the middle', 'at night without lights'], 'See vehicles coming.'),
    Q('Fatigue on long journeys is prevented by:', ['regular rest stops', 'driving faster', 'drinking alcohol', 'using the phone'], 'Rest saves lives.'),
    Q('Road safety is the responsibility of:', ['drivers, passengers, pedestrians and authorities', 'drivers only', 'police only', 'nobody'], 'Shared responsibility.'),
  ],
  'ci-roadsigns-4': [
    Q('An inverted triangle sign means:', ['give way', 'stop', 'no entry', 'hospital'], 'Yield to others.'),
    Q('An amber traffic light means:', ['prepare to stop', 'go faster', 'park', 'turn left only'], 'Caution.'),
    Q('A continuous white line in the middle of the road:', ['must not be crossed', 'may be crossed freely', 'marks parking', 'means stop'], 'No overtaking across it.'),
    Q('A rectangular sign showing "Hospital" is:', ['an information sign', 'a warning sign', 'a prohibitory sign', 'a mandatory sign'], 'It informs.'),
  ],
  'ci-footprint-4': [
    Q('Netiquette is:', ['polite behaviour online', 'hacking', 'a virus', 'a password'], 'Online manners.'),
    Q('Your digital footprint can be seen by:', ['future employers and universities', 'nobody ever', 'only you', 'only your phone'], 'It is often public.'),
    Q('Crediting the author of an image you use respects:', ['copyright', 'piracy', 'hacking', 'spam'], 'Recognise creators.'),
    Q('Before posting, it is wise to ask:', ['would I be happy for a teacher or employer to see this?', 'how many insults can I add?', 'can I post my password?', 'who can I mock?'], 'Think before posting.'),
  ],
  'ci-onlinesafety-4': [
    Q('A warning sign of grooming is:', ['a request to keep secrets and send private photos', 'a teacher’s homework message', 'a family group chat', 'a school announcement'], 'Secrecy and pressure.'),
    Q('Phishing messages often use:', ['urgent threats to make you act fast', 'calm official procedures', 'no links', 'your teacher’s voice'], 'Pressure tactics.'),
    Q('Distinguishing fact from opinion is part of:', ['media literacy', 'hacking', 'piracy', 'spam'], 'Critical thinking.'),
    Q('Official GCE results are published only by:', ['the GCE Board', 'anonymous WhatsApp groups', 'street vendors', 'any website'], 'Beware of scams.'),
  ],

  // ---------- Form 5, term 1 ----------
  'ci-gceformat-5': [
    Q('Citizenship Paper 1 lasts:', ['1½ hours', '2½ hours', '1 hour', '3 hours'], 'Multiple choice.'),
    Q('Section B of the scheme’s Paper 2 consists of:', ['essays', 'case studies only', 'multiple choice', 'maps'], 'Section A is compulsory.'),
    Q('Citizenship theory in Form 5 ends by week:', ['13', '1', '20', '30'], 'Then revision.'),
    Q('Form 4 topics such as human rights are:', ['also examined at the GCE', 'never examined', 'only for Form 4', 'optional'], 'The GCE covers both years.'),
  ],
  'ci-casestudy-5': [
    Q('The first step in answering a case study is to:', ['read it carefully and identify the civic issue', 'write a conclusion', 'copy the questions', 'skip it'], 'Understand first.'),
    Q('A 2-mark part usually requires:', ['a point with an explanation or two short points', 'a full essay', 'nothing', 'a diagram'], 'Marks guide length.'),
    Q('When suggesting measures, say:', ['what should be done and who should do it', 'only "the government must act"', 'nothing specific', 'only opinions'], 'Specific actors.'),
    Q('Retelling the case without analysis:', ['earns few marks', 'earns full marks', 'is required', 'is ideal'], 'Analyse and apply.'),
  ],
  'ci-statedef-5': [
    Q('Recognition of a State by others:', ['confirms its statehood internationally', 'is never needed', 'creates its population', 'abolishes sovereignty'], 'International acceptance.'),
    Q('A nation is:', ['a community sharing a sense of common identity', 'a building', 'a court', 'a bank'], 'Different from a State.'),
    Q('Nigeria is an example of a:', ['federal State', 'unitary State', 'monarchy', 'city-state'], 'Federation of states.'),
    Q('Internal sovereignty means:', ['supreme authority over people and territory within the State', 'control by foreign powers', 'no government', 'only local rule'], 'Authority at home.'),
  ],
  'ci-cameroonstate-5': [
    Q('Cameroon’s flag has:', ['green, red and yellow vertical stripes with a star', 'blue and white stripes', 'a red cross', 'no colours'], 'With a gold star on red.'),
    Q('The 1996 Constitution created:', ['the Senate, regions and the Constitutional Council', 'the federation', 'the single party', 'the League of Nations'], 'New institutions.'),
    Q('The name "Republic of Cameroon" has been used since:', ['1984', '1961', '1972', '2002'], 'Change from United Republic.'),
    Q('Cameroon’s official languages are of:', ['equal value', 'unequal value', 'no value', 'regional value only'], 'Constitution, Article 1.'),
  ],
  'ci-president-5': [
    Q('The President may ask Parliament for a:', ['second reading of a law', 'new constitution every year', 'closing of schools', 'currency change'], 'Before promulgation.'),
    Q('The right to reduce or cancel a criminal sentence is the:', ['right of pardon', 'right to vote', 'right of appeal', 'veto'], 'A presidential power.'),
    Q('The President is elected by:', ['direct universal suffrage', 'Parliament', 'the Senate', 'chiefs'], 'All voters.'),
    Q('Who appoints ambassadors?', ['the President of the Republic', 'the mayor', 'ELECAM', 'the Senate President'], 'Foreign relations power.'),
  ],
  'ci-government-5': [
    Q('Ministers are appointed by the President on the proposal of the:', ['Prime Minister', 'Senate', 'Supreme Court', 'governors'], 'Constitutional procedure.'),
    Q('The State’s representative in a division is the:', ['prefect', 'mayor', 'chief', 'deputy'], 'Deconcentration.'),
    Q('The Government is responsible to the:', ['National Assembly', 'Supreme Court', 'chiefs', 'ELECAM'], 'Parliamentary control.'),
    Q('Ministries each manage:', ['a sector of government, such as health or education', 'a political party', 'a court', 'a region alone'], 'Sectoral responsibility.'),
  ],
  'ci-parliament-5': [
    Q('Deputies are elected for:', ['five years', 'seven years', 'two years', 'life'], 'National Assembly term.'),
    Q('Each house of Parliament works through:', ['committees', 'markets', 'chiefdoms', 'embassies'], 'Detailed study of bills.'),
    Q('Parliamentary immunity protects MPs for:', ['opinions expressed in their duties', 'any crime', 'tax evasion', 'violence'], 'Free debate.'),
    Q('The Senate mainly represents the:', ['regional and local authorities', 'army', 'courts', 'foreign states'], 'Territorial representation.'),
  ],
  'ci-lawmaking-5': [
    Q('A bill from the Government is called a:', ['government bill', 'court ruling', 'treaty', 'decree of pardon'], 'Members may also propose bills.'),
    Q('After adoption, a law comes into force when it is:', ['promulgated and published', 'debated only', 'proposed', 'rejected'], 'Final step.'),
    Q('The legislature makes laws; the judiciary:', ['interprets laws and settles disputes', 'makes laws too', 'runs ministries', 'collects taxes'], 'Separation of powers.'),
    Q('Commissions of inquiry allow Parliament to:', ['investigate government action', 'arrest citizens', 'appoint judges', 'print money'], 'Oversight.'),
  ],
  'ci-courts-5': [
    Q('The Supreme Court is located in:', ['Yaoundé', 'Douala', 'Buea', 'Garoua'], 'The capital.'),
    Q('Disputes between citizens and the administration may go to:', ['administrative courts', 'customary courts', 'military tribunals', 'ELECAM'], 'Administrative justice.'),
    Q('Constitutional Council members serve a term of:', ['nine years', 'five years', 'two years', 'life'], '11 members.'),
    Q('Magistrates are appointed by the President assisted by the:', ['Higher Judicial Council', 'Senate', 'ELECAM', 'CONAC'], 'Judicial appointments.'),
  ],
  'ci-ruleoflaw-5': [
    Q('The presumption of innocence means:', ['a person is innocent until proved guilty', 'all suspects are guilty', 'the police decide guilt', 'no trials are needed'], 'Fair trial principle.'),
    Q('A threat to the rule of law is:', ['corruption of judges', 'independent courts', 'public laws', 'equal treatment'], 'Undermines justice.'),
    Q('Citizens support the rule of law by:', ['using courts and refusing mob justice', 'taking revenge', 'bribing judges', 'ignoring laws'], 'Lawful behaviour.'),
    Q('Security of tenure for judges protects:', ['judicial independence', 'corruption', 'political pressure', 'delays'], 'Judges cannot be removed arbitrarily.'),
  ],
  'ci-voting-5': [
    Q('"One person, one vote" expresses:', ['equal suffrage', 'secret ballot', 'transparency', 'periodicity'], 'Equality of votes.'),
    Q('Elections held at fixed intervals are:', ['periodic', 'random', 'permanent', 'secret'], 'Regular renewal.'),
    Q('Multiple voting is:', ['an electoral offence', 'a civic duty', 'allowed', 'encouraged'], 'Fraud.'),
    Q('Regional councillors in Cameroon are elected:', ['indirectly', 'by the President', 'by chiefs only', 'never'], 'Indirect suffrage.'),
  ],
  'ci-elecam-5': [
    Q('The Electoral Board of ELECAM mainly:', ['supervises and ensures respect for the law', 'counts votes alone', 'runs schools', 'judges disputes in court'], 'Oversight organ.'),
    Q('Voter cards are issued by:', ['ELECAM', 'the mayor’s market', 'the bank', 'the police only'], 'Registration.'),
    Q('Disputes over legislative election results are settled by the:', ['Constitutional Council', 'ELECAM', 'municipal council', 'chief'], 'Final authority.'),
    Q('Citizens can help ELECAM by:', ['registering early and checking their names on the lists', 'avoiding registration', 'voting twice', 'tearing posters'], 'Participation.'),
  ],
  'ci-pluralism-5': [
    Q('The CNU became the CPDM in:', ['1985', '1966', '1990', '1972'], 'Bamenda congress.'),
    Q('The SDF was founded in:', ['1990', '1966', '1985', '2002'], 'After the liberty laws.'),
    Q('The liberty laws restored freedom of:', ['association, press and public meetings', 'the single party', 'colonial rule', 'censorship'], 'Civil liberties.'),
    Q('Pluralism requires:', ['respect for election results and fair rules', 'banning opposition', 'violence', 'one opinion'], 'Peaceful competition.'),
  ],
  'ci-partyroles-5': [
    Q('Political parties in Cameroon may not be based on:', ['tribe or religion', 'ideas', 'programmes', 'membership'], 'Constitutional principle.'),
    Q('Internal democracy in a party means:', ['members choose leaders and decisions democratically', 'one leader decides all', 'no members', 'no rules'], 'Democratic practice.'),
    Q('The opposition in Parliament:', ['criticises and proposes alternatives', 'runs the government', 'appoints judges', 'has no role'], 'Accountability.'),
    Q('Citizens should judge parties by:', ['their programmes and conduct', 'gifts given at rallies', 'ethnic origin', 'rumours'], 'Informed choice.'),
  ],
  'ci-publicservice-5': [
    Q('Equality of access means public services are:', ['open to all users on the same terms', 'reserved for officials', 'sold to the highest bidder', 'closed'], 'Equal treatment.'),
    Q('Demanding money for a free birth certificate is:', ['professional misconduct and corruption', 'a legal fee', 'a tip', 'a tax'], 'Illegal.'),
    Q('Confidentiality means officials:', ['protect citizens’ private information', 'publish private data', 'ignore privacy', 'sell data'], 'Professional ethics.'),
    Q('Adaptability of public service means:', ['services improve to meet new needs', 'services never change', 'services close', 'services favour friends'], 'Modernisation.'),
  ],
  'ci-anticorruption-5': [
    Q('CONSUPE is the:', ['Supreme State Audit', 'electoral body', 'central bank', 'standards agency'], 'Audits public bodies.'),
    Q('The Special Criminal Court was created in:', ['2011', '1990', '2006', '2019'], 'For large embezzlement cases.'),
    Q('Nepotism is:', ['favouring relatives in appointments', 'merit-based hiring', 'transparency', 'a tax'], 'A form of favouritism.'),
    Q('A citizen fights corruption by:', ['refusing bribes and reporting abuse through official channels', 'paying bribes', 'hiding information', 'ignoring abuse'], 'Integrity.'),
  ],

  // ---------- Form 5, terms 2 and 3 ----------
  'ci-bilateral-5': [
    Q('A grant is aid that:', ['does not have to be repaid', 'must be repaid with interest', 'is always military', 'is a tax'], 'A gift.'),
    Q('Scholarships to study abroad are a form of:', ['technical and educational cooperation', 'military aid', 'trade sanctions', 'debt'], 'Skills transfer.'),
    Q('A risk of heavy foreign borrowing is:', ['debt and dependence', 'more independence', 'no repayments', 'lower taxes always'], 'Repayment burden.'),
    Q('Cooperation between Cameroon and the African Development Bank is:', ['multilateral', 'bilateral', 'domestic', 'private only'], 'Many member states.'),
  ],
  'ci-diplomacy-5': [
    Q('Cameroon’s foreign relations are managed by the Ministry of:', ['External Relations', 'Finance', 'Sports', 'Agriculture'], 'Under the President.'),
    Q('Diplomatic immunities are set out in the:', ['Vienna Convention of 1961', 'Banjul Charter', 'Penal Code', 'Labour Code'], 'International law.'),
    Q('The Greentree Agreement was signed in:', ['2006', '2002', '1961', '1990'], 'On Bakassi.'),
    Q('A visa is issued by a:', ['consulate or embassy', 'council', 'school', 'market'], 'Permission to enter a country.'),
  ],
  'ci-unorgans-5': [
    Q('The UN was founded in:', ['1945', '1919', '1960', '1963'], 'After the Second World War.'),
    Q('UNDP works mainly on:', ['development', 'refugees only', 'labour only', 'children only'], 'United Nations Development Programme.'),
    Q('The FAO deals with:', ['food and agriculture', 'aviation', 'health only', 'weather'], 'Food security.'),
    Q('Cameroon contributes to the UN by:', ['paying dues and sending personnel to peacekeeping missions', 'nothing', 'leaving the UN', 'vetoing resolutions'], 'Membership duties.'),
  ],
  'ci-commonwealth-5': [
    Q('The Commonwealth secretariat is in:', ['London', 'Paris', 'Addis Ababa', 'Geneva'], 'United Kingdom.'),
    Q('Rwanda and Mozambique are Commonwealth members although they were:', ['never British territories', 'British colonies', 'French colonies only', 'not African'], 'Voluntary association.'),
    Q('A Commonwealth benefit for Cameroonian students is:', ['scholarships and training', 'free cars', 'no exams', 'military service'], 'Education links.'),
    Q('Commonwealth members commit to:', ['democracy, human rights and the rule of law', 'one-party rule', 'colonial rule', 'war'], 'Shared values.'),
  ],
  'ci-oif-5': [
    Q('La Francophonie began in:', ['1970', '1945', '1995', '2002'], 'As a cooperation agency.'),
    Q('TV5Monde is linked to:', ['La Francophonie', 'the Commonwealth', 'the AU', 'ECOWAS'], 'A French-language channel.'),
    Q('The OIF promotes:', ['democracy and cultural diversity', 'one language only', 'war', 'trade bans'], 'Its aims.'),
    Q('The OIF is headed by a:', ['Secretary-General', 'king', 'President of Cameroon', 'governor'], 'Its chief official.'),
  ],
  'ci-africanalliances-5': [
    Q('The AU replaced the:', ['OAU', 'UN', 'Commonwealth', 'CEMAC'], 'In 2002.'),
    Q('The CEMAC’s central bank, the BEAC, is headquartered in:', ['Yaoundé', 'Bangui', 'Libreville', 'Abuja'], 'Cameroon.'),
    Q('ECCAS stands for:', ['Economic Community of Central African States', 'Economic Council of Cameroon Assemblies', 'East Cameroon Agricultural Society', 'Electoral Commission of Central Africa'], 'Wider Central African community.'),
    Q('Regional cooperation helps fight insecurity such as:', ['Boko Haram and piracy in the Gulf of Guinea', 'football', 'tourism', 'farming'], 'Joint security.'),
  ],
  'ci-mcq-5': [
    Q('The National Assembly has how many members?', ['180', '100', '360', '70'], 'Deputies.'),
    Q('Refugees differ from IDPs because refugees:', ['have crossed an international border', 'stay at home', 'are citizens abroad on holiday', 'are never protected'], 'A common trap.'),
    Q('The Court of Appeal is found in each:', ['region', 'village', 'quarter', 'school'], 'Regional level.'),
    Q('The President’s term of office is:', ['seven years', 'five years', 'four years', 'ten years'], 'Under the 1996 Constitution.'),
  ],
  'ci-acronyms-5': [
    Q('ACRWC stands for:', ['African Charter on the Rights and Welfare of the Child', 'African Court of Rights and War Crimes', 'Association of Central Regional Women’s Councils', 'Agency for Child Registration'], '1990.'),
    Q('ANTIC is Cameroon’s:', ['national ICT agency', 'anti-drug unit', 'electoral body', 'audit office'], 'Cybersecurity work.'),
    Q('The Banjul Charter was adopted in:', ['1981', '1948', '1989', '1990'], 'African Charter on Human and Peoples’ Rights.'),
    Q('The decentralisation code dates from:', ['2019', '1996', '2006', '2012'], 'General Code of Regional and Local Authorities.'),
  ],
  'ci-sectiona-5': [
    Q('Section A of the scheme’s Paper 2 must be:', ['answered by everyone', 'skipped', 'answered only by some', 'done orally'], 'Compulsory.'),
    Q('Which authority is responsible for a dirty municipal market?', ['the council', 'the Senate', 'ELECAM', 'the embassy'], 'Local services.'),
    Q('"State" questions require:', ['short, precise points', 'long essays', 'diagrams only', 'nothing'], 'Brief answers.'),
    Q('A good answer uses examples from:', ['Cameroon', 'nowhere', 'fiction only', 'other planets'], 'Relevance.'),
  ],
  'ci-essays-5': [
    Q('An essay introduction should:', ['define key terms and give the main answer', 'tell a story only', 'list acronyms', 'be skipped'], 'Clear start.'),
    Q('Each body paragraph should contain:', ['one main point explained with evidence', 'many unrelated points', 'only questions', 'only dates'], 'Organisation.'),
    Q('"Examine the benefits of Commonwealth membership" requires:', ['several benefits explained with examples', 'only the date of joining', 'a map', 'a list of members'], 'Explanation.'),
    Q('Before finishing, you should check:', ['names, numbers and dates', 'nothing', 'only handwriting', 'only the title'], 'Accuracy.'),
  ],
  'ci-mock-5': [
    Q('Citizenship Paper 2 lasts:', ['2½ hours', '1½ hours', '1 hour', '4 hours'], 'Case studies and essays.'),
    Q('Doubtful Paper 1 items should be:', ['marked and returned to later', 'left blank', 'answered last only', 'ignored'], 'Keep moving.'),
    Q('The mock exam helps you to:', ['find and fix weaknesses before the GCE', 'avoid revision', 'replace the GCE', 'choose new subjects'], 'A rehearsal.'),
    Q('Time in Paper 2 should be shared according to:', ['the marks', 'the length of the question text', 'the order only', 'mood'], 'Equal marks, equal time.'),
  ],
  'ci-remediation-5': [
    Q('Which body has 100 members?', ['the Senate', 'the National Assembly', 'the Constitutional Council', 'ELECAM’s board'], 'Common confusion.'),
    Q('"The rule of law means the government does whatever it wants" is:', ['wrong', 'correct', 'partly correct', 'the definition'], 'Everyone is subject to the law.'),
    Q('Under the UNCRC, a 17-year-old is:', ['a child', 'an adult', 'a voter', 'a senator'], 'Under 18.'),
    Q('Decentralisation transfers powers to:', ['elected regional and local authorities', 'appointed governors', 'foreign states', 'political parties'], 'Not deconcentration.'),
  ],
};
