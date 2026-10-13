// History lessons for Form 4, terms 2 and 3: nationalism in French
// Cameroun, independence in 1960, political change in British Cameroons, the
// plebiscite and the Foumban Conference, and the chronology and essay
// clinics. Original text written for this app.

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
  // ---------- Nationalism and the UPC ----------
  L('hi-nationalcauses-4', 'hi-f4-upc', '8.1', 'The causes of nationalism after 1945', 14, ['Cameroon history'], [
    '**Nationalism** is the desire of a people to govern themselves. In Cameroon after 1945 it grew from several causes:\n- **the Second World War**: Cameroonian soldiers fought for freedom and returned expecting change; the Atlantic Charter (1941) spoke of the right of peoples to choose their government\n- **UN trusteeship**: Article 76 promised progress towards self-government or independence, and petitions gave nationalists a voice\n- **education**: a Western-educated elite of teachers, clerks and journalists led the movements\n- **economic grievances**: forced labour, low prices for cash crops and racial discrimination.',
    'Organisation grew quickly: **trade unions** such as the Union des Syndicats Confédérés du Cameroun (1945); strikes and the riots in Douala in **September 1945**; new assemblies created in 1946, with Cameroonian deputies such as Prince Alexandre Douala Manga Bell sitting in the French National Assembly.',
    'External influences: the independence of India in 1947, the **Pan-African Congress** in Manchester (1945), and African parties across French Africa such as the **Rassemblement Démocratique Africain** (RDA), founded in 1946, to which the UPC was first affiliated.',
  ], 'hist-nationalism', 'Group causes as war, UN, education, economic grievances and outside influences.',
  ['Article 76 of the UN Charter encouraged nationalism because it promised:', ['progress towards self-government or independence', 'German return', 'a single party', 'assimilation'], 'It gave nationalists a legal basis.'],
  [['Nationalism', 'The desire of a people to govern themselves.'], ['Trade union', 'An organisation of workers that defends their interests.'], ['Elite', 'A small, influential group, often the educated.']],
  [
    { q: 'Explain three causes of nationalism in French Cameroun after 1945.', steps: ['**The Second World War: ex-servicemen and the Atlantic Charter raised expectations of freedom.**', '**Trusteeship: Article 76 promised self-government, and petitions gave nationalists a voice at the UN.**', '**Grievances: forced labour, the indigénat (until 1946) and discrimination created anger that educated leaders organised into movements.**'] },
  ]),

  L('hi-upc-4', 'hi-f4-upc', '8.2', 'The UPC: programme, revolt and ban', 15, ['Cameroon history'], [
    'The **Union des Populations du Cameroun** (UPC) was founded on **10 April 1948** in Douala. Its leaders were **Ruben Um Nyobè** (secretary general), **Félix-Roland Moumié** (president from 1952), Ernest Ouandié and Abel Kingué. It organised women (UDEFEC) and youth (JDC) wings and became the first mass nationalist party.',
    'Its radical programme:\n- **reunification** of French and British Cameroons\n- **independence** within a fixed timetable\n- better living conditions and an end to colonial abuses.\nThe UPC used rallies, newspapers and **petitions**; Um Nyobè spoke before the UN in 1952 and again later.',
    'The French administration saw the UPC as a threat. After violent clashes and riots in **May 1955** in Douala, Yaoundé and other towns, the UPC was **banned on 13 July 1955**. Its leaders fled to British Cameroons, and from 1956 part of the movement waged an **armed struggle** (the maquis), especially in Sanaga-Maritime. Um Nyobè was killed on **13 September 1958**; Moumié was poisoned in Geneva and died in November 1960; Ernest Ouandié was executed in 1971. The UPC put reunification and independence on the agenda, but power at independence went to more moderate leaders.',
  ], 'hist-nationalism', 'UPC: 1948 founding, 1955 ban, 1958 death of Um Nyobè.',
  ['The UPC was banned after the riots of:', ['May 1955', 'September 1914', 'February 1961', 'May 1972'], 'The ban came on 13 July 1955.'],
  [['UPC', 'Union des Populations du Cameroun, the first mass nationalist party (1948).'], ['Maquis', 'The armed resistance hidden in the forest.'], ['Reunification', 'Bringing together the French and British parts of Cameroon.']],
  [
    { q: 'Assess the contribution of the UPC to Cameroon’s independence.', steps: ['Contribution: **it created mass awareness, demanded reunification and independence, and took the case to the UN.**', 'Limits: **it was banned in 1955, its leaders were killed or exiled, and the armed struggle cost many lives.**', 'Judgement: **the UPC forced the pace of change and made reunification a national goal, even though others led the country at independence.**'] },
  ]),

  // ---------- Independence ----------
  L('hi-loicadre-4', 'hi-f4-independence', '9.1', 'The Loi-cadre and self-government', 14, ['Cameroon history'], [
    'The **Loi-cadre** (framework law), or Defferre law, of **23 June 1956** reformed French Africa: it introduced **universal suffrage** with a single electoral college and gave territorial assemblies and local governments more power.',
    'Steps in French Cameroun:\n- **December 1956**: elections to the Territorial Assembly (**ATCAM**), boycotted by the banned UPC and marked by violence in Sanaga-Maritime\n- **April 1957**: a statute made French Cameroun a "State under trusteeship" with its own government; the assembly became the Legislative Assembly (ALCAM)\n- **May 1957**: **André-Marie Mbida** became the first Prime Minister\n- **February 1958**: Mbida resigned after disagreements, and **Ahmadou Ahidjo** became Prime Minister.',
    'Under Ahidjo, France agreed to independence. The UN approved the end of trusteeship, and French Cameroun became independent as the **Republic of Cameroon** on **1 January 1960**.',
  ], 'hist-road-1960', 'Loi-cadre 1956, Mbida 1957, Ahidjo 1958, independence 1 January 1960.',
  ['The first Prime Minister of French Cameroun was:', ['André-Marie Mbida', 'Ahmadou Ahidjo', 'Ruben Um Nyobè', 'Paul Biya'], 'Appointed in May 1957.'],
  [['Loi-cadre', 'The 1956 French framework law that introduced self-government reforms in Africa.'], ['Universal suffrage', 'The right of all adults to vote.'], ['Self-government', 'Running one’s own internal affairs.']],
  [
    { q: 'Put in order: Ahidjo becomes Prime Minister; independence; Loi-cadre; Mbida becomes Prime Minister.', steps: ['**Loi-cadre (June 1956).**', '**Mbida becomes Prime Minister (May 1957).**', '**Ahidjo becomes Prime Minister (February 1958).**', '**Independence (1 January 1960).**'] },
  ]),

  L('hi-ahidjo-4', 'hi-f4-independence', '9.2', 'The rise of Ahmadou Ahidjo', 13, ['Cameroon history'], [
    'Ahmadou Ahidjo was born in **Garoua** in 1924. A former radio operator, he entered politics as a member of the territorial assembly from 1947, became Vice-Prime Minister and Minister of the Interior under Mbida in 1957, and Prime Minister in February 1958. In 1958 he founded the **Union Camerounaise** (UC).',
    'Why he rose to power:\n- he was **moderate** and acceptable to France, which wanted a cooperative partner\n- he had a strong base in the **North**\n- the radical UPC was **banned** and divided\n- he negotiated independence peacefully while promising order.',
    'After independence on 1 January 1960, a new constitution was approved by **referendum on 21 February 1960**, and Ahidjo was elected **first President** of the Republic of Cameroon in May 1960. He then turned to reunification with the Southern Cameroons.',
  ], 'hist-road-1960', 'Ahidjo rose as a moderate trusted by France, with a northern base, while the UPC was banned.',
  ['Ahidjo’s party, founded in 1958, was the:', ['Union Camerounaise (UC)', 'UPC', 'KNDP', 'CPDM'], 'It later merged into the CNU in 1966.'],
  [['Moderate', 'Avoiding extreme views or methods.'], ['Referendum', 'A direct vote by the people on a single question.']],
  [
    { q: 'Explain why Ahidjo, rather than the UPC leaders, led Cameroon at independence.', steps: ['**France preferred a moderate partner and supported Ahidjo.**', '**The UPC was banned from 1955, its leaders killed or in exile.**', '**Ahidjo had a solid northern base and controlled the government from 1958, so he negotiated independence.**'] },
  ]),

  // ---------- British Cameroons ----------
  L('hi-easterncrisis-4', 'hi-f4-britishcameroons', '10.1', 'The 1953 crisis and a separate Southern Cameroons', 14, ['Cameroon history'], [
    'Under British rule, Southern Cameroons was attached to Nigeria’s **Eastern Region** and sent members to the **Eastern House of Assembly** at Enugu. Many Cameroonians complained of neglect and of domination by Nigerians in trade and administration.',
    'In **1953** a political crisis split the Eastern House of Assembly. The Cameroonian members, led by **Dr Emmanuel Endeley**, declared "**benevolent neutrality**" and withdrew. At the constitutional talks that followed, they demanded a separate status.',
    'Results:\n- the **Lyttleton Constitution** (1954) made Southern Cameroons a quasi-federal territory with its own **House of Assembly** at Buea\n- Endeley became Leader of Government Business, and in 1958 Premier\n- Northern Cameroons remained part of Northern Nigeria.\nThis separation was the first step towards the choice of 1961.',
  ], 'hist-parties-bc', '1953 crisis, 1954 own House of Assembly at Buea.',
  ['Southern Cameroons got its own House of Assembly at Buea under the:', ['Lyttleton Constitution of 1954', 'Loi-cadre of 1956', 'Treaty of 1884', 'Foumban Conference'], 'It became a quasi-federal territory.'],
  [['Benevolent neutrality', 'The 1953 stand of Southern Cameroons members who withdrew from the Eastern Nigerian crisis.'], ['Quasi-federal territory', 'A territory with some of the powers of a region in a federation.']],
  [
    { q: 'Explain why Southern Cameroonians wanted separation from the Eastern Region of Nigeria.', steps: ['**They felt neglected: few roads, schools and posts were provided for them.**', '**They resented Nigerian domination of trade and administration.**', '**The 1953 crisis gave them the occasion to demand their own institutions.**'] },
  ]),

  L('hi-parties-4', 'hi-f4-britishcameroons', '10.2', 'Political parties and the options for the future', 15, ['Cameroon history'], [
    'Main parties in Southern Cameroons:\n- **Kamerun National Congress (KNC)**, founded in 1953 and led by **Dr Emmanuel Endeley**\n- **Kamerun People’s Party (KPP)**, of P. M. Kale and N. N. Mbile\n- **Kamerun National Democratic Party (KNDP)**, founded in 1955 by **John Ngu Foncha**, who left the KNC\n- **One Kamerun (OK)**, founded in 1957 by Ndeh Ntumazah, close to the UPC.\nIn 1960 the KNC and KPP merged as the Cameroon People’s National Convention (CPNC).',
    'The options debated:\n- **integration** with Nigeria (favoured by Endeley by the late 1950s)\n- **secession** from Nigeria and **reunification** with French Cameroun (Foncha and the KNDP)\n- **independence** as a separate state, wanted by some but not offered by the UN.',
    'The KNDP won the elections of **January 1959**, and Foncha became Premier. The UN then decided that the people would choose by **plebiscite** between only two options: joining Nigeria or joining the Republic of Cameroon.',
  ], 'hist-parties-bc', 'KNC Endeley (Nigeria), KNDP Foncha (reunification).',
  ['Which party leader campaigned for reunification with French Cameroun?', ['John Ngu Foncha', 'Emmanuel Endeley', 'N. N. Mbile', 'Lord Lugard'], 'The KNDP favoured reunification.'],
  [['Integration', 'Joining fully with another country.'], ['Secession', 'Breaking away from a larger political unit.'], ['Plebiscite', 'A vote by the people of a territory on its future.']],
  [
    { q: 'Compare the KNC and the KNDP.', steps: ['Leaders: **Endeley (KNC), Foncha (KNDP).**', 'Policy: **the KNC came to favour association with Nigeria; the KNDP favoured secession and reunification.**', 'Outcome: **the KNDP won the 1959 election, and its option won the 1961 plebiscite in Southern Cameroons.**'] },
  ]),

  // ---------- Plebiscite and Foumban ----------
  L('hi-plebiscite-4', 'hi-f4-plebiscite', '11.1', 'The plebiscite of 11 February 1961', 15, ['Cameroon history'], [
    'Under UN supervision, plebiscites were held in the British Cameroons on **11 February 1961**. Voters had two choices: to achieve independence by **joining the Federation of Nigeria**, or by **joining the Republic of Cameroon**. (In a first plebiscite in November 1959, Northern Cameroons had voted to postpone its decision.)',
    'Results:\n- **Southern Cameroons**: **233,571** votes for the Republic of Cameroon and **97,741** for Nigeria\n- **Northern Cameroons**: **146,296** for Nigeria and **97,659** for the Republic of Cameroon.\nNorthern Cameroons became part of Nigeria on **1 June 1961**. The Republic of Cameroon protested and took the matter to the International Court of Justice, which declined to rule on it in 1963.',
    'Why the South chose Cameroon: fear of Igbo domination, the campaign of Foncha’s KNDP, and a sense of shared history going back to German Kamerun. Why the North chose Nigeria: close ties with the emirates of Northern Nigeria, a long period of administration with the North, and fear of the violence in the Republic of Cameroon.',
  ], 'hist-plebiscite', 'South: Cameroon (233,571 to 97,741). North: Nigeria (146,296 to 97,659).',
  ['In the 1961 plebiscite, Northern Cameroons voted to:', ['join Nigeria', 'join the Republic of Cameroon', 'remain British', 'become independent alone'], 'It joined Nigeria on 1 June 1961.'],
  [['Plebiscite', 'A direct vote by the people on the future of their territory.'], ['UN supervision', 'Oversight by the United Nations to ensure a fair vote.']],
  [
    { q: 'Give three reasons why Southern Cameroons voted to join the Republic of Cameroon.', steps: ['**Resentment of Nigerian (especially Igbo) domination and neglect.**', '**The effective campaign of Foncha and the KNDP for reunification.**', '**A sense of common identity from the German period and family and cultural ties across the boundary.**'] },
  ]),

  L('hi-foumban-4', 'hi-f4-plebiscite', '11.2', 'The Foumban Conference and the federal framework', 15, ['Cameroon history'], [
    'To prepare reunification, Southern Cameroons parties met at **Bamenda** in June 1961 to agree on proposals. Then, from **17 to 21 July 1961**, delegations met at **Foumban**: the Republic of Cameroon led by **President Ahidjo**, and Southern Cameroons led by **Premier Foncha**. Ahidjo’s government presented a draft constitution; the Southern Cameroons delegation proposed changes, many of which were not adopted.',
    'The federal constitution was adopted on **1 September 1961** and came into force on **1 October 1961**, the date of reunification. Its main features:\n- the **Federal Republic of Cameroon**, with two federated states: **West Cameroon** (capital Buea) and **East Cameroon** (capital Yaoundé)\n- a **Federal President** (Ahidjo) and **Vice-President** (Foncha)\n- federal powers over defence, foreign affairs, finance and others; each state had its own Prime Minister and assembly\n- **English and French** as official languages.',
    'Assessment: the federation achieved reunification, a major goal of the nationalists. But the West Cameroon side later complained that the constitution gave strong powers to the federal president and too little to the states, an imbalance that set the scene for the end of the federation in 1972.',
  ], 'hist-plebiscite', 'Foumban 17 to 21 July 1961; reunification 1 October 1961.',
  ['Under the federal constitution of 1961, the Vice-President was:', ['John Ngu Foncha', 'Emmanuel Endeley', 'André-Marie Mbida', 'Paul Biya'], 'Ahidjo was President.'],
  [['Federation', 'A union of states with a central government and state governments sharing powers.'], ['Constitution', 'The basic law that sets out how a state is governed.'], ['Federated state', 'A member state of a federation.']],
  [
    { q: 'Describe the structure of the Federal Republic of Cameroon in 1961.', steps: ['**Two federated states, West Cameroon (Buea) and East Cameroon (Yaoundé), each with a Prime Minister and an assembly.**', '**A federal government with a President (Ahidjo) and Vice-President (Foncha), and federal powers over defence, foreign affairs and finance.**', '**English and French as official languages.**'] },
  ]),

  // ---------- Review ----------
  L('hi-chronology-4', 'hi-f4-review', '12.1', 'Chronology: Cameroon from 1806 to 1961', 14, ['Revision'], [
    'History depends on **chronology**: putting events in the correct order shows cause and effect. Key dates for Form 4:\n- **1806** Modibo Adama receives a flag from Usman dan Fodio\n- **1858** Alfred Saker founds Victoria\n- **12 July 1884** Germano-Duala Treaty\n- **1901** Buea becomes the German capital\n- **1914 to 1916** the Kamerun campaign\n- **1916** provisional partition; **1919** Milner-Simon Declaration\n- **1922** League of Nations mandates\n- **1940** French Cameroun joins Free France\n- **1946** UN trusteeship agreements\n- **1948** founding of the UPC; **1955** UPC banned\n- **1954** Southern Cameroons House of Assembly\n- **1 January 1960** independence of French Cameroun\n- **11 February 1961** plebiscite; **July 1961** Foumban; **1 October 1961** reunification.',
    'Use a **timeline** to see links: the 1884 treaty led to German rule; German rule led to resistance; the First World War led to partition; partition led to two systems and, later, to the question of reunification.',
    'Make your own timeline on one page and test yourself by covering the dates.',
  ], 'hist-timeline-1884-1961', 'Learn dates in chains of cause and effect, not as a loose list.',
  ['Which pair is correctly matched?', ['1922: mandates confirmed', '1884: plebiscite', '1961: Germano-Duala Treaty', '1948: Foumban Conference'], 'The mandates were confirmed in 1922.'],
  [['Chronology', 'The order in which events happened.'], ['Timeline', 'A line showing events in date order.']],
  [
    { q: 'Build a cause-and-effect chain from 1914 to 1961 in four links.', steps: ['**The First World War (1914 to 1916) drove the Germans out.**', '**Britain and France partitioned Cameroon (1916, 1919) and ruled it as mandates (1922) and trust territories (1946).**', '**Trusteeship and nationalism led to independence for French Cameroun (1960).**', '**The plebiscite (1961) led Southern Cameroons to reunify with Cameroon on 1 October 1961.**'] },
  ]),

  L('hi-essay-4', 'hi-f4-review', '12.2', 'Writing a history essay', 15, ['Essay skills'], [
    'History essay questions use clear instruction words:\n- **describe** or **outline**: say what happened, in order\n- **explain why** or **account for**: give causes\n- **what were the results** or **consequences**: give effects\n- **how far** or **to what extent**: weigh evidence on both sides and judge\n- **compare**: give similarities and differences.',
    'Structure:\n- **introduction**: brief context (who, where, when) and your answer to the question\n- **body paragraphs**: one point per paragraph, each with **precise evidence** (names, dates, places, events) and an explanation of how it answers the question\n- **conclusion**: your judgement, for example which cause was most important and why.',
    'Common faults: telling the story instead of answering the question, wrong or missing dates, one-sided "how far" answers, and paragraphs of very different lengths. Plan for a few minutes, and give each point equal care.',
  ], 'hist-timeline-1884-1961', 'Every paragraph: a point, precise evidence, and a link to the question.',
  ['A question beginning "Account for" asks you to:', ['explain the causes', 'describe the results', 'list dates only', 'compare two leaders'], 'Account for means explain why.'],
  [['Cause', 'Something that makes an event happen.'], ['Consequence', 'A result of an event.'], ['Judgement', 'A reasoned conclusion on how far something is true.']],
  [
    { q: 'Plan an answer to "How far was the UPC responsible for the independence of French Cameroun?"', steps: ['For: **the UPC created mass nationalism, demanded independence and reunification, and petitioned the UN (1948 to 1955).**', 'Against: **other factors mattered: UN trusteeship, the Loi-cadre (1956), French policy, and Ahidjo’s negotiations; the UPC was banned from 1955.**', 'Judgement: **the UPC accelerated the demand for independence, but independence came through the reforms and negotiations of others.**'] },
  ]),
];
