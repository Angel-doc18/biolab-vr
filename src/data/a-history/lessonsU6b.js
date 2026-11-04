// A Level History lessons (0760), Upper Sixth, Terms 2 and 3: the federation
// and the unitary state, the New Deal and the liberty laws, the decolonisation
// of Africa, Pan-Africanism and the OAU/AU, the Arab-Israeli conflict,
// apartheid, essay strategy and the final GCE drills.

const PAPER = { Method: 'All papers', Essay: 'Papers 2 and 3', Sources: 'Papers 2 and 3', MCQ: 'Paper 1' };

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: PAPER[tags[0]] || 'All papers',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_HU6B = [
  // ---------- 10. Federation to unitary state ----------
  L('ahi-federal-1', 'ahi-u6-federal', '10.1', 'How the federation worked (1961 to 1972)', 17, ['Cameroon history'], [
    'The federal constitution gave the **federal government** control of defence, foreign affairs, finance, the currency, security, higher education and the main economic plans. The federated states kept primary education, local administration, agriculture and some public works, but depended on **federal grants** for most of their money.',
    'Power was concentrated in the **President**, Ahmadou Ahidjo. **Federal inspectors of administration** in Buea and Yaoundé represented the federal government in each state and soon outranked state ministers. The federal Vice-President, **John Ngu Foncha**, had little independent power.',
    'West Cameroon politics weakened the state further. In **1965** a constitutional change prevented Foncha from being both Vice-President and Prime Minister; **Augustine Ngom Jua** became Prime Minister of West Cameroon, and in **1968** Ahidjo replaced him with **Solomon Tandeng Muna**, who was also Vice-President from 1970. Rivalries among West Cameroon leaders (Foncha, Jua, Muna, Endeley) let the President arbitrate between them.',
    'Practical integration followed federal rules: the CFA franc replaced the pound in West Cameroon in 1962, followed by the metric system, driving on the right, and French-style administration and customs. Each change was presented as modernisation; many West Cameroonians felt their traditions being replaced.',
  ], 'ahi-federal', 'Federal money, federal inspectors and a strong President: the states were weak from the start.',
  ['In the federation, the federal inspectors of administration:', ['represented the federal government in each state and outranked state ministers', 'were elected by the House of Chiefs', 'ran only the schools', 'advised the UN'], 'A tool of central control.'],
  [['Federal grant', 'Money given by the federal government to a state.'], ['Federal inspector of administration', 'The federal government’s representative in each federated state.']],
  [
    { q: 'Explain why the federal government dominated West Cameroon between 1961 and 1972.', steps: ['Constitution: **defence, finance, security and economic planning were federal.**', 'Money: **West Cameroon depended on federal grants.**', 'Institutions: **federal inspectors and a powerful President.**', 'Politics: **rivalries among Foncha, Jua, Muna and Endeley let Ahidjo arbitrate.**', 'Judgement: **the constitution made dominance possible; West Cameroon’s divisions made it easy.**'] },
  ]),

  L('ahi-federal-2', 'ahi-u6-federal', '10.2', 'The single party and the unitary state of 1972', 17, ['Cameroon history'], [
    'On **1 September 1966** the main parties merged into a single party, the **Cameroon National Union (CNU)**: Ahidjo’s **Union Camerounaise**, the **KNDP**, the **CPNC** and Muna’s **Cameroon United Congress (CUC)**. Opponents who refused, in East Cameroon in particular, were arrested in 1962 or pushed out of politics; the UPC rebellion was defeated by 1970 and Ernest Ouandié executed in January 1971.',
    'On **6 May 1972** Ahidjo announced a referendum on a **unitary state**. On **20 May 1972** voters approved it by an official majority of over 99 per cent. The **constitution of 2 June 1972** created the **United Republic of Cameroon**, divided into seven provinces, each under a governor. Ahidjo called it a **"peaceful revolution"**. 20 May became the National Day.',
    'Reasons given: national unity; the cost of running a federal government and two state governments; national economic planning (critics add that oil had recently been found off the West Cameroon coast and the government wanted direct control of it); and the argument that the single party had already made federal structures unnecessary.',
    'Criticisms: Article 47 of 1961 had forbidden any revision impairing the unity and integrity of the Federation, and West Cameroon’s autonomy was ended by a vote in which East Cameroon’s far larger electorate decided the result. Many Anglophone grievances, and the "Anglophone problem" of later decades, are traced to 1972. Supporters argue that a unitary state prevented the regional divisions that tore apart other African federations.',
  ], 'ahi-unitary', 'CNU 1 September 1966; referendum 20 May 1972; constitution 2 June 1972; United Republic.',
  ['The parties that merged into the CNU in 1966 were the UC, the KNDP, the CPNC and the:', ['CUC', 'UPC', 'SDF', 'KNC alone'], 'Muna’s Cameroon United Congress.'],
  [['Unitary state', 'A state governed as one unit, with no federated states.'], ['Single party', 'A system in which only one political party is legal or active.'], ['Referendum', 'A direct vote of the people on a proposal.']],
  [
    { q: 'Why did Cameroon become a unitary state in 1972?', steps: ['Ahidjo’s aims: **national unity and a strong central government.**', 'Preparation: **the single party (1966) removed organised opposition.**', 'Economy: **the cost of three governments and the desire for national planning.**', 'Weak resistance: **West Cameroon leaders were divided and dependent on the President.**', 'Judgement: **the unitary state completed a centralisation that had begun in 1961.**'] },
    { q: '"The unitary state of 1972 was a betrayal of Foumban." Discuss.', steps: ['For: **Article 47 and the federal promise; West Cameroon had no separate vote.**', 'Against: **Ahidjo used the President’s power to consult the people by referendum; the vote was overwhelming and West Cameroon’s CNU leaders backed it.**', 'Consequences: **loss of autonomy and later Anglophone grievances.**', 'Judgement: **legally defended, politically contested: it broke the spirit of 1961 more than its letter.**'] },
  ]),

  // ---------- 11. The New Deal ----------
  L('ahi-newdeal-1', 'ahi-u6-newdeal', '11.1', 'From Ahidjo to Biya: the transfer of power and the crisis of 1983 to 1984', 17, ['Cameroon history'], [
    'On **4 November 1982** President Ahidjo announced his resignation, on grounds of health. Under the constitution the Prime Minister, **Paul Biya** (in office since 1975), was sworn in as President on **6 November 1982**. Ahidjo remained chairman of the CNU.',
    'Biya announced a **New Deal** (**Renouveau**), built on **rigour** and **moralisation** of public life, and promised more freedom of expression. Tension between the President and the party chairman grew. In **August 1983** the government announced a plot against the state; Ahidjo, accused of involvement, resigned as party chairman and went into exile in France. Biya became CNU chairman in September 1983 and was elected President in **January 1984**.',
    'In **February 1984** the country was renamed the **Republic of Cameroon**, and Ahidjo was sentenced to death in his absence (the sentence was later commuted). On **6 April 1984** members of the **Republican Guard** attempted a **coup d’état** in Yaoundé; loyal army units crushed it within days, and many of those involved were tried and executed. Ahidjo died in Dakar in 1989.',
    'At its congress in **Bamenda** on **24 March 1985** the CNU became the **Cameroon People’s Democratic Movement (CPDM)**. The congress promised internal democracy, with competitive elections inside the party.',
  ], 'ahi-newdeal', '4 and 6 November 1982; the 1983 plot; renamed 1984; 6 April 1984 coup attempt; CPDM 1985.',
  ['The CNU became the CPDM at a congress held in:', ['Bamenda, in March 1985', 'Foumban, in July 1961', 'Yaoundé, in 1966', 'Douala, in 1990'], 'Cameroon People’s Democratic Movement.'],
  [['New Deal (Renouveau)', 'Biya’s programme of rigour and moralisation from 1982.'], ['Coup d’état', 'An illegal seizure of power, usually by the army.']],
  [
    { q: 'Explain why the transfer of power from Ahidjo to Biya led to crisis between 1983 and 1984.', steps: ['Divided authority: **Biya held the state, Ahidjo the party.**', 'Ambition and suspicion: **each side feared the other’s supporters.**', 'The plot of 1983: **Ahidjo’s resignation and exile.**', 'Climax: **the coup attempt of 6 April 1984 by the Republican Guard.**', 'Judgement: **the constitution transferred the presidency, but not the party, and that split caused the crisis.**'] },
  ]),

  L('ahi-newdeal-2', 'ahi-u6-newdeal', '11.2', 'Economic crisis and the return of multi-party politics (1987 to 1992)', 17, ['Cameroon history'], [
    'Cameroon’s economy grew fast until the mid-1980s, helped by oil. Then prices for **oil, cocoa and coffee** fell sharply, the dollar weakened, and public debt grew. By **1987** the country was in **crisis**; in **1988** it signed its first programme with the IMF, and **structural adjustment** followed: spending cuts, privatisation, and later salary cuts for civil servants (1993) and the devaluation of the CFA franc (January 1994).',
    'At the same time, the end of the Cold War and the fall of one-party regimes in Eastern Europe (1989) encouraged demands for **democracy** across Africa. In Cameroon, the lawyer **Yondo Black** and others were arrested in February 1990 for trying to form a party.',
    'On **26 May 1990** **John Fru Ndi** launched the **Social Democratic Front (SDF)** in **Bamenda**; six people were killed when security forces fired on the crowd. Pressure mounted, and in **December 1990** the National Assembly passed the **liberty laws**, which allowed **freedom of association**, new **political parties** and a freer press.',
    'In 1991 the opposition organised "ghost town" campaigns demanding a national conference; the government held a **Tripartite meeting** instead (October to November 1991). The first multi-party legislative elections took place in **March 1992** and the first multi-party presidential election in **October 1992**, which Biya won ahead of Fru Ndi.',
  ], 'ahi-liberty-laws', 'Falling prices, debt, IMF 1988; SDF 26 May 1990; liberty laws December 1990; elections 1992.',
  ['The "liberty laws" of December 1990 allowed:', ['freedom of association and new political parties', 'a single party only', 'a federal constitution', 'the abolition of elections'], 'Multi-party politics returned.'],
  [['Structural adjustment', 'IMF and World Bank reforms: spending cuts, privatisation and market opening.'], ['Ghost town', 'A campaign in which shops and offices stay closed to put pressure on the government.']],
  [
    { q: 'Assess the reasons for the return of multi-party politics in Cameroon in 1990.', steps: ['Internal: **economic crisis, falling living standards and loss of trust in the single party.**', 'Popular pressure: **the Yondo Black affair, the SDF launch and the deaths of 26 May 1990.**', 'External: **the end of the Cold War and Western pressure for democracy (La Baule, June 1990).**', 'Government choice: **the New Deal had promised liberalisation.**', 'Judgement: **economic crisis and popular pressure were decisive; the international climate made reform unavoidable.**'] },
  ]),

  // ---------- 12. Factors in decolonisation ----------
  L('ahi-decolf-1', 'ahi-u6-decol-factors', '12.1', 'Internal forces: elites, ex-servicemen, workers and parties', 17, ['African history'], [
    '**Western-educated elites**, trained in mission schools and universities abroad, led the nationalist parties: Kwame Nkrumah (Gold Coast), Nnamdi Azikiwe (Nigeria), Léopold Senghor (Senegal), Jomo Kenyatta (Kenya), Julius Nyerere (Tanganyika), Ruben Um Nyobè (Cameroon). They used Europe’s own ideas of liberty and self-determination against it.',
    '**Ex-servicemen** returned from the Second World War having fought for freedom, seen Europeans defeated and travelled widely. Many found no jobs or pensions; in the Gold Coast their march in Accra on 28 February 1948, fired on by police, set off riots that sped up reform.',
    '**Workers and trade unions**: strikes such as the **Douala strike** (September 1945) and the **Dakar-Niger railway strike** (October 1947 to March 1948) showed the power of organised labour and won better pay and conditions.',
    '**Mass parties and the press**: the CPP, the RDA (1946, across French West and Equatorial Africa), the UPC, KANU, TANU. Newspapers such as Azikiwe’s West African Pilot carried their message. **Rural grievances** (land loss in Kenya, low crop prices, forced labour) gave them a mass following.',
  ], 'ahi-decol-factors', 'Elites led, ex-servicemen and workers pushed, parties and the press organised.',
  ['The Dakar-Niger railway strike (1947 to 1948) showed:', ['the power of organised African workers', 'that colonial rule was popular', 'the end of the Second World War', 'the success of apartheid'], 'Workers won concessions.'],
  [['Elite', 'A small group with education, wealth or influence.'], ['Mass party', 'A party organised among ordinary people.']],
  [
    { q: 'Explain the role of Western-educated elites in African nationalism after 1945.', steps: ['Leadership: **they founded and led parties (CPP, RDA, UPC, TANU).**', 'Ideas: **they turned self-determination and democracy against colonial rule.**', 'Skills: **they negotiated with colonial governments and spoke at the UN.**', 'Limits: **they needed mass support from workers, farmers and ex-servicemen.**', 'Judgement: **elites gave direction; popular grievances gave power.**'] },
  ]),

  L('ahi-decolf-2', 'ahi-u6-decol-factors', '12.2', 'External forces and the year of Africa', 17, ['African history', 'World history'], [
    'The **Second World War** weakened Britain and France, discredited claims of European superiority and spread the language of freedom. The **Atlantic Charter** (August 1941) affirmed the right of peoples to choose their government.',
    'The **UN** (trusteeship, petitions, and the **Declaration on decolonisation**, Resolution 1514 of 14 December 1960) and the **superpowers** (both opposed to European empires, and competing for influence in new states) put empires on the defensive.',
    '**Examples from Asia**: India and Pakistan (1947), Indonesia (1949), the French defeat at **Dien Bien Phu** (1954). The **Bandung Conference** (April 1955) of Asian and African states condemned colonialism. The **Fifth Pan-African Congress** in Manchester (1945) demanded independence. The **Suez Crisis** (1956) showed the limits of British and French power.',
    'Policy changes in Europe: Britain’s Prime Minister Harold Macmillan spoke in Cape Town (February 1960) of a **"wind of change"**; France’s Loi-cadre (1956) and the de Gaulle referendum of 1958, in which **Guinea** alone voted no and became independent (October 1958). In **1960**, the **year of Africa**, seventeen African states became independent, Cameroon first on 1 January.',
  ], 'ahi-decol-timeline', 'War, Charter, UN, superpowers, Asia, Bandung, Suez, wind of change: 1960.',
  ['The only French territory to vote no in the 1958 referendum and become independent at once was:', ['Guinea', 'Senegal', 'Cameroon', 'Côte d’Ivoire'], 'Under Sékou Touré.'],
  [['Year of Africa', '1960, when seventeen African states became independent.'], ['Wind of change', 'Macmillan’s phrase for the rise of African nationalism (1960).']],
  [
    { q: '"African independence was given, not won." How far do you agree?', steps: ['Given: **weakened empires, superpower and UN pressure, changing European policy.**', 'Won: **parties, strikes, riots and armed struggles (Algeria, Kenya, Cameroon) forced the pace.**', 'Interaction: **external pressure made colonial powers listen to internal demands.**', 'Judgement: **won by Africans in a world that made it hard to refuse.**'] },
  ]),

  // ---------- 13. Paths to independence ----------
  L('ahi-decolm-1', 'ahi-u6-decol-models', '13.1', 'The constitutional road: the Gold Coast to Ghana', 17, ['African history'], [
    'The **United Gold Coast Convention (UGCC)**, founded in 1947 by J.B. Danquah and other lawyers and merchants, invited **Kwame Nkrumah** home to be its secretary. After the **Accra riots** of February 1948 Britain set up the Watson Commission and the Coussey Committee to draft reforms.',
    'Nkrumah broke away and founded the **Convention People’s Party (CPP)** in **June 1949**, with the slogan **"Self-Government Now"** and a mass following of youth, workers and market women. His campaign of **Positive Action** (January 1950: strikes and boycotts) put him in prison.',
    'In the election of **February 1951** the CPP won a large majority; the Governor, Sir Charles Arden-Clarke, released Nkrumah to become **Leader of Government Business** (Prime Minister in 1952). After further elections in 1954 and 1956, the Gold Coast became independent as **Ghana** on **6 March 1957**, the first sub-Saharan colony to do so.',
    'Why it was peaceful: no large settler population, a strong educated class and cocoa wealth, a mass party able to win elections, and a British government willing to transfer power step by step to an elected leader.',
  ], 'ahi-ghana', 'UGCC 1947, Accra riots 1948, CPP 1949, Positive Action 1950, election 1951, Ghana 1957.',
  ['Nkrumah became Leader of Government Business after:', ['the CPP won the election of 1951', 'the Accra riots of 1948', 'independence in 1957', 'the Manchester Congress'], 'He was released from prison to take office.'],
  [['Positive Action', 'Nkrumah’s campaign of strikes and boycotts (1950).'], ['Constitutional road', 'Independence won through elections and negotiation.']],
  [
    { q: 'Explain why the Gold Coast was the first colony in sub-Saharan Africa to win independence.', steps: ['Society: **educated elite, cocoa wealth, no settlers.**', 'Leadership: **Nkrumah and the CPP’s mass organisation.**', 'British policy: **reform after 1948 and acceptance of the 1951 result.**', 'Judgement: **favourable conditions and an effective mass party made it the model.**'] },
  ]),

  L('ahi-decolm-2', 'ahi-u6-decol-models', '13.2', 'Armed struggle: Algeria and Kenya compared', 18, ['African history'], [
    '**Algeria**: treated as part of France, with about **a million European settlers** (pieds-noirs). After the repression at **Sétif** (May 1945), the **FLN** began the war on **1 November 1954**. French forces won the Battle of Algiers (1957) with torture and mass arrests; the crisis brought **de Gaulle** back to power (1958). He accepted self-determination; the **Evian Accords** (March 1962) ended the war, and Algeria became independent on **5 July 1962**. Hundreds of thousands died; most settlers left.',
    '**Kenya**: Kikuyu land in the **White Highlands** had been taken by settlers; squatters, landless youth and urban workers formed the movement known as **Mau Mau**. A **state of emergency** was declared in **October 1952**; Kenyatta was tried at Kapenguria and jailed, though he did not lead the fighters. Over 10,000 rebels were killed, about 32 European settlers died, and tens of thousands were detained; the fighter **Dedan Kimathi** was hanged in 1957, and the beating to death of detainees at **Hola** (1959) shocked Britain.',
    'Britain changed course: the **Lancaster House** conferences (from 1960) opened the way to African majority rule. Kenyatta was released (1961), **KANU** won the 1963 election, and Kenya became independent on **12 December 1963**.',
    'Comparison: **settlers** made both conflicts violent; in Ghana there were none. Each colonial power gave way once the cost (money, lives, international reputation) became too high. Armed struggle did not win military victory in either case, but made continued rule impossible.',
  ], 'ahi-decol-models', 'Settlers and land made Algeria and Kenya wars; Ghana had neither.',
  ['The main factor that made decolonisation violent in both Algeria and Kenya was:', ['the presence of large settler communities holding land', 'the absence of nationalists', 'the UN', 'the Berlin Conference'], 'Settlers resisted any transfer of power.'],
  [['Pieds-noirs', 'European settlers in Algeria.'], ['State of emergency', 'Special powers allowing detention without trial.']],
  [
    { q: 'Compare the decolonisation of Ghana with that of Kenya.', steps: ['Similarity: **both had nationalist leaders (Nkrumah, Kenyatta) jailed and then brought into government.**', 'Difference in method: **elections and Positive Action in Ghana; armed revolt and emergency in Kenya.**', 'Why: **no settlers in the Gold Coast; the land question in Kenya.**', 'Outcome: **Ghana in 1957; Kenya in 1963 after a costly emergency.**', 'Judgement: **settler land made the decisive difference.**'] },
  ]),

  // ---------- 14. Pan-Africanism, OAU and AU ----------
  L('ahi-panaf-1', 'ahi-u6-panafrica', '14.1', 'Pan-Africanism from the diaspora to the OAU', 17, ['African history'], [
    'Pan-Africanism began in the **diaspora**: **Henry Sylvester Williams** (Trinidad) organised the Pan-African Conference in **London in 1900**; **W.E.B. Du Bois** led the **Pan-African Congresses** from 1919 (Paris); **Marcus Garvey** (Jamaica) founded the **Universal Negro Improvement Association** and preached "Africa for the Africans". In Paris, Senghor, Aimé Césaire and Léon Damas created the **Négritude** movement in the 1930s.',
    'The **Fifth Pan-African Congress** (Manchester, 1945), with Nkrumah and Kenyatta, demanded independence. Once Ghana was free, Nkrumah hosted the **Conference of Independent African States** and the **All-African People’s Conference** in Accra (1958).',
    'After 1960 the new states divided: the radical **Casablanca group** (Ghana, Guinea, Mali, Egypt, Morocco and others) wanted rapid political union; the moderate **Monrovia group** (including the French-speaking **Brazzaville group**, to which Cameroon belonged, and Nigeria) wanted cooperation between sovereign states.',
    'The **Organisation of African Unity (OAU)** was founded at **Addis Ababa** on **25 May 1963** by **32 states**, on the moderate model. Its aims: unity and solidarity, defence of sovereignty, the end of colonialism, and cooperation. Cameroon was a founding member.',
  ], 'ahi-panafrica', 'Williams 1900, Du Bois 1919, Garvey, Manchester 1945, Accra 1958, OAU 1963.',
  ['The OAU was founded on the model favoured by the:', ['Monrovia group: cooperation between sovereign states', 'Casablanca group: immediate union', 'colonial powers', 'UN Security Council'], 'Sovereignty was protected.'],
  [['Pan-Africanism', 'The movement for the unity and liberation of Africans and people of African descent.'], ['Négritude', 'A movement affirming Black culture and identity.'], ['Diaspora', 'People of African descent living outside Africa.']],
  [
    { q: 'Explain why the OAU of 1963 favoured cooperation rather than union.', steps: ['New sovereignty: **leaders would not give up powers just won.**', 'Divisions: **Casablanca against Monrovia; French and English speakers.**', 'Fears: **suspicion of Nkrumah’s leadership ambitions.**', 'Judgement: **sovereignty mattered more to most leaders than union.**'] },
  ]),

  L('ahi-panaf-2', 'ahi-u6-panafrica', '14.2', 'The OAU’s record and the African Union', 17, ['African history'], [
    'OAU principles: sovereign equality, **non-interference in internal affairs**, peaceful settlement of disputes, and (Cairo, **1964**) respect for the **borders inherited at independence**. Its **Liberation Committee** in Dar es Salaam supported movements in the Portuguese colonies, Rhodesia, Namibia and South Africa.',
    'Achievements: support for liberation until 1994, the refugee convention (1969), the **African Charter on Human and Peoples’ Rights** (1981), a common African voice at the UN, and mediation in some border disputes. Cameroonian **William Eteki Mboumoua** was Secretary-General (1974 to 1978).',
    'Failures: non-interference let dictators abuse their people (Amin in Uganda), it could not stop civil wars (Nigeria, Chad) or the **genocide in Rwanda** (1994); members often did not pay; it had no army. Critics called it a "club of heads of state".',
    'The **Sirte Declaration** (9 September 1999) called for a new union; the **Constitutive Act** (Lomé, 2000) created it, and the **African Union** was launched in **Durban** on **9 July 2002**. Its organs include the Assembly, the AU Commission, the Pan-African Parliament and the Peace and Security Council. **Article 4(h)** allows intervention in a member state for **genocide, war crimes or crimes against humanity**: a break with strict non-interference.',
  ], 'ahi-oau-au', 'Non-interference and borders (OAU); Article 4(h) and new organs (AU, 2002).',
  ['A major weakness of the OAU was its principle of:', ['non-interference in members’ internal affairs', 'intervention for genocide', 'a single African army', 'majority voting'], 'It protected sovereignty but also abusive rulers.'],
  [['Non-interference', 'The rule that states do not intervene in each other’s internal affairs.'], ['Constitutive Act', 'The founding treaty of the African Union.']],
  [
    { q: 'Assess the achievements of the OAU between 1963 and 2002.', steps: ['Liberation: **support for the end of colonial and white-minority rule.**', 'Order: **acceptance of inherited borders limited territorial wars.**', 'Rights: **the 1981 Charter.**', 'Failures: **non-interference, Rwanda, lack of money and force.**', 'Judgement: **successful in liberation, weak in protecting Africans from their own governments; hence the AU.**'] },
  ]),

  // ---------- 15. The Middle East ----------
  L('ahi-mideast-1', 'ahi-u6-middleeast', '15.1', 'Roots of the conflict and the creation of Israel (1897 to 1949)', 17, ['World history'], [
    '**Zionism**, the movement for a Jewish homeland, was organised by **Theodor Herzl**, who called the first Zionist Congress at **Basle** in 1897. During the First World War Britain made conflicting promises: to the Arabs (the Hussein-McMahon letters, 1915 to 1916), to France (the Sykes-Picot agreement, 1916), and to the Zionists (the **Balfour Declaration**, **2 November 1917**, supporting "a national home for the Jewish people" in Palestine).',
    'Britain governed **Palestine** as a **League of Nations mandate** (from 1920, confirmed in 1922). Jewish immigration grew, especially after Nazi persecution began, and Arab opposition rose; an **Arab revolt** (1936 to 1939) led Britain to restrict immigration in the 1939 White Paper. After the **Holocaust** pressure for a Jewish state became overwhelming.',
    'Britain handed the problem to the UN. On **29 November 1947** the General Assembly voted for **partition** into Jewish and Arab states, with Jerusalem under international control (**Resolution 181**). The Jewish leaders accepted; the Arab states and Palestinian leaders rejected it.',
    'Israel was proclaimed by **David Ben-Gurion** on **14 May 1948**. Arab armies attacked; Israel won, enlarging its territory. About **700,000 Palestinians** fled or were expelled (the **Nakba**, "catastrophe"); Jordan held the West Bank and Egypt the Gaza Strip after the armistices of 1949.',
  ], 'ahi-middleeast', 'Basle 1897, Balfour 1917, mandate, partition 1947, Israel 1948, refugees.',
  ['Resolution 181 of 29 November 1947 proposed:', ['the partition of Palestine into Jewish and Arab states', 'a single Arab state', 'continued British rule', 'Egyptian rule over Palestine'], 'Jerusalem was to be international.'],
  [['Zionism', 'The movement to create a Jewish homeland in Palestine.'], ['Partition', 'Division of a territory into separate states.'], ['Nakba', 'The flight and expulsion of Palestinians in 1948.']],
  [
    { q: 'Explain why Britain could not solve the Palestine problem between 1917 and 1947.', steps: ['Contradictory promises: **to Arabs, French and Zionists during the war.**', 'Immigration: **growing Jewish settlement and Arab resistance (1936 to 1939).**', 'The Holocaust: **made a Jewish state an urgent international demand.**', 'Weakness after 1945: **Britain could not afford the cost and handed it to the UN.**', 'Judgement: **the mandate rested on promises that could not all be kept.**'] },
  ]),

  L('ahi-mideast-2', 'ahi-u6-middleeast', '15.2', 'Suez, the wars of 1967 and 1973, and Camp David', 17, ['World history'], [
    '**Suez (1956)**: Egypt’s President **Nasser** nationalised the Suez Canal (July 1956). Israel, Britain and France attacked Egypt (October to November); pressure from the USA and the USSR and the UN forced them to withdraw, and **UNEF** was deployed. Nasser became a hero of Arab nationalism.',
    'The **Palestine Liberation Organisation** was founded in **1964**; **Yasser Arafat** led it from 1969. In the **Six-Day War** (**5 to 10 June 1967**) Israel took **Sinai and Gaza** (from Egypt), the **West Bank and East Jerusalem** (from Jordan) and the **Golan Heights** (from Syria). **UN Resolution 242** (November 1967) called for withdrawal from occupied territories and recognition of every state’s right to live in peace.',
    'The **Yom Kippur War** (**October 1973**): Egypt and Syria attacked on the Jewish holy day; Israel recovered after early losses. Arab oil producers imposed an **oil embargo** on Israel’s supporters, and oil prices roughly **quadrupled**, hurting economies worldwide, African ones included.',
    'Peace with Egypt: Egypt’s President **Anwar Sadat** visited Jerusalem (1977); the **Camp David Accords** (**17 September 1978**), negotiated with Israel’s **Menachem Begin** and US President **Jimmy Carter**, led to the **peace treaty of 26 March 1979**; Israel returned Sinai. Other Arab states rejected it; Sadat was assassinated in 1981. The Palestinian question remained, and the first **Intifada** (uprising) began in December 1987.',
  ], 'ahi-arab-israeli', 'Suez 1956, PLO 1964, 1967 and Resolution 242, 1973 and oil, Camp David 1978.',
  ['After the Six-Day War, Resolution 242 called for:', ['Israeli withdrawal from occupied territories and recognition of all states’ right to peace', 'the creation of Israel', 'a British mandate', 'an oil embargo'], 'Adopted in November 1967.'],
  [['Intifada', 'A Palestinian uprising against Israeli occupation.'], ['Oil embargo', 'A refusal to sell oil to particular countries.']],
  [
    { q: 'Why did Egypt make peace with Israel in 1978 to 1979?', steps: ['War record: **1973 restored Egyptian pride, making compromise possible.**', 'Interest: **recovery of Sinai and its oil and the canal economy.**', 'US mediation: **Carter and the promise of aid.**', 'Sadat’s choice: **he judged that war could not free the occupied lands.**', 'Judgement: **national interest, made possible by the honour won in 1973.**'] },
  ]),

  // ---------- 16. Apartheid ----------
  L('ahi-apart-1', 'ahi-u6-apartheid', '16.1', 'Building apartheid (1948 to 1960s)', 17, ['African history'], [
    'Segregation was older than apartheid: the **Natives Land Act** (1913) kept most land for whites, and pass laws controlled African movement. The **African National Congress (ANC)** was founded in 1912 to defend African rights.',
    'The **National Party** under **D.F. Malan** won the election of **1948** and made **apartheid** ("separateness") law:\n- **Prohibition of Mixed Marriages Act** (1949)\n- **Population Registration Act** (1950): every person classified by race\n- **Group Areas Act** (1950): separate areas of towns; communities such as District Six in Cape Town were destroyed, and Sophiatown in Johannesburg was cleared under a related removals law\n- **Suppression of Communism Act** (1950), used against all opponents\n- **Bantu Education Act** (1953): inferior schooling for Africans\n- **Reservation of Separate Amenities Act** (1953) and stricter **pass laws**.',
    '**H.F. Verwoerd** (Prime Minister 1958 to 1966) developed **"separate development"**: the **Bantustans** or homelands, to which Africans were assigned whatever their place of birth (Promotion of Bantu Self-Government Act, 1959). Transkei was declared "independent" in 1976; no other country recognised it. Millions were forcibly removed.',
    'South Africa became a republic in 1961 and left the Commonwealth. Apartheid was defended as protection of Afrikaner identity and fear of the African majority, and it served the need for cheap, controlled labour in mines and farms.',
  ], 'ahi-apartheid', 'Population Registration, Group Areas, Bantu Education, Bantustans.',
  ['The law that classified every South African by race was the:', ['Population Registration Act (1950)', 'Group Areas Act (1950)', 'Bantu Education Act (1953)', 'Natives Land Act (1913)'], 'The basis of every other apartheid law.'],
  [['Apartheid', '"Separateness": legal racial segregation in South Africa from 1948.'], ['Bantustan', 'A homeland created for a Black African group.'], ['Pass laws', 'Laws requiring Africans to carry documents controlling movement.']],
  [
    { q: 'Explain why the National Party introduced apartheid after 1948.', steps: ['Ideology: **Afrikaner nationalism and belief in racial separation.**', 'Fear: **of the African majority and urbanisation during the war.**', 'Economy: **control of cheap African labour for mines and farms.**', 'Politics: **white voters rewarded a promise of security.**', 'Judgement: **fear and economic interest, organised by Afrikaner nationalism.**'] },
  ]),

  L('ahi-apart-2', 'ahi-u6-apartheid', '16.2', 'Resistance, sanctions and the end of apartheid (1952 to 1994)', 18, ['African history'], [
    'Non-violent resistance: the **ANC Youth League** (1944: Nelson Mandela, Walter Sisulu, Oliver Tambo) pushed the ANC to mass action: the **Defiance Campaign** (1952) and the **Freedom Charter** adopted at Kliptown (**June 1955**): "South Africa belongs to all who live in it". The Treason Trial (1956 to 1961) ended in acquittals. The **Pan Africanist Congress** (PAC, 1959, Robert Sobukwe) split away.',
    'At **Sharpeville** on **21 March 1960** police killed **69** people protesting against the pass laws. The ANC and PAC were **banned**. The ANC formed an armed wing, **Umkhonto we Sizwe** (1961); at the **Rivonia Trial** (1963 to 1964) Mandela and others were sentenced to **life imprisonment**.',
    'New resistance: **Steve Biko**’s **Black Consciousness** movement; the **Soweto uprising** of **16 June 1976** against Afrikaans in schools, in which hundreds of students were killed over the following months; Biko’s death in police custody (1977); the **United Democratic Front** (1983) and township revolts; states of emergency from 1985.',
    'International pressure: the UN **arms embargo** (mandatory from 1977), sports and cultural boycotts, disinvestment, the US Comprehensive Anti-Apartheid Act (1986), OAU and Commonwealth campaigns. With the economy in decline and the Cold War ending, President **F.W. de Klerk** unbanned the ANC (**2 February 1990**) and freed **Mandela** (**11 February 1990**). Negotiations (CODESA) led to the first democratic election on **27 April 1994**; Mandela became President on **10 May 1994**.',
  ], 'ahi-apartheid-end', 'Defiance 1952, Freedom Charter 1955, Sharpeville 1960, Soweto 1976, Mandela freed 1990, election 1994.',
  ['The Soweto uprising of 16 June 1976 began as a protest against:', ['the use of Afrikaans as a language of teaching in Black schools', 'the Freedom Charter', 'the release of Mandela', 'the 1994 election'], 'Students led it.'],
  [['Umkhonto we Sizwe', '"Spear of the Nation": the ANC’s armed wing from 1961.'], ['Sanctions', 'Economic or other penalties imposed to change a government’s policy.'], ['Black Consciousness', 'Biko’s movement for Black pride and self-reliance.']],
  [
    { q: 'Assess the reasons for the end of apartheid.', steps: ['Internal resistance: **Soweto, the UDF and township revolts made the country ungovernable.**', 'Economic pressure: **sanctions, disinvestment and recession.**', 'International change: **the end of the Cold War removed the "communist threat" argument.**', 'Leadership: **de Klerk’s decision to negotiate and Mandela’s willingness to reconcile.**', 'Judgement: **internal resistance was the foundation; sanctions and the end of the Cold War made change urgent.**'] },
  ]),

  // ---------- 17. Essay strategy ----------
  L('ahi-strategy-1', 'ahi-u6-strategies', '17.1', 'From question to thesis map', 17, ['Essay'], [
    'Step 1, **decode**: underline the command word, the topic, the dates and any key concept. "Assess the impact of the Second World War on nationalism in French Cameroun, 1945 to 1955" asks for a judgement (assess), on one effect (impact on nationalism), in one territory and period.',
    'Step 2, **list the factors**: brainstorm for two minutes, then group the points into three or four themes (political, economic, social, international), each a paragraph.',
    'Step 3, **decide the answer**: write a one-sentence thesis before you start, for example: "The war created the conditions for nationalism, but trusteeship and the trade unions gave it its organisation." The introduction then gives **context**, **definitions** and this **thesis map**: the argument and the order of factors.',
    'Step 4, **distribute evidence**: two or three precise items for each paragraph (names, dates, figures, events). Evidence from Cameroon, Africa and the world can be linked where the question allows, for example comparing the UPC with the CPP.',
  ], 'ahi-essay-map', 'Decode, list, decide, distribute: the essay is planned before it is written.',
  ['A thesis map in the introduction:', ['states the argument and the order of factors the essay will follow', 'tells the whole story', 'lists every date in the period', 'repeats the question word for word'], 'The examiner sees the plan.'],
  [['Thesis map', 'An introduction that states the argument and how the essay will develop it.'], ['Factor', 'A cause or influence that helps explain an event.']],
  [
    { q: 'Write a thesis map for: "How far was the UPC responsible for the independence of French Cameroun in 1960?"', steps: ['Context: **from trust territory (1946) to independence (1 January 1960).**', 'Thesis: **the UPC set the agenda of independence and reunification, but France, the UN and Ahidjo decided its timing and form.**', 'Order: **(1) the UPC’s mobilisation and UN petitions; (2) the Loi-cadre and French policy; (3) the UN decision of 1959; (4) Ahidjo’s leadership.**', 'Conclusion signposted: **the UPC was necessary but not sufficient.**'] },
  ]),

  L('ahi-strategy-2', 'ahi-u6-strategies', '17.2', 'Analytical paragraphs, counter-argument and judgement', 17, ['Essay'], [
    'An analytical paragraph: **Point** (one factor, answering the question), **Evidence** (precise), **Explanation** (how and why it mattered), **Link** (back to the question, with a mini-judgement: "this was the most important factor because…").',
    'Higher marks come from **linking factors** (economic hardship made political demands popular), **weighing** them (necessary, sufficient, short-term trigger, long-term cause) and using **historiography** where it helps (orthodox, revisionist and post-revisionist views of the Cold War).',
    'The **counter-argument** paragraph treats the other side seriously, then shows why your thesis still holds. The **conclusion** gives a clear answer, explains the criterion used (the most important factor is the one without which the outcome would not have happened) and adds no new material.',
    'Timing: read the rubric on the cover of each paper and divide the 3 hours equally between the questions required, keeping about five minutes per essay to plan and two to check. An unfinished last essay loses more marks than a shorter first one gains.',
  ], 'ahi-judgement', 'PEEL with a mini-judgement; weigh factors; counter-argue; conclude with a criterion.',
  ['A good conclusion:', ['gives a clear, justified answer and adds no new material', 'introduces a new factor', 'summarises the story', 'avoids taking a position'], 'Return to the question with a verdict.'],
  [['Historiography', 'The study of how historians have interpreted the past.'], ['Criterion', 'A standard used to make a judgement.']],
  [
    { q: 'Improve this conclusion: "In conclusion, there were many causes of the Cold War and all were important."', steps: ['Problem: **no judgement; it sits on the fence.**', 'Criterion: **which cause made the others dangerous?**', '**Improved: "Ideological rivalry made conflict likely, but it was Soviet control of Eastern Europe between 1945 and 1948, seen in Washington as expansion, that turned rivalry into a Cold War."**'] },
  ]),

  // ---------- 18. GCE drills and mock ----------
  L('ahi-drills-1', 'ahi-u6-papers', '18.1', 'Paper 1 drills: dates, treaties and acronyms', 16, ['MCQ'], [
    'Paper 1 tests precise knowledge quickly across the whole syllabus. Build **chains** rather than isolated facts:\n- Cameroon: **1884** treaty, **1916** partition, **1919** Milner-Simon, **1922** mandates, **1946** trusteeship, **1948** UPC, **1955** ban, **1960** independence, **1961** plebiscite and reunification, **1966** CNU, **1972** unitary state, **1982** Biya, **1985** CPDM, **1990** liberty laws\n- Africa: **1885** Berlin Act, **1896** Adwa, **1957** Ghana, **1960** year of Africa, **1963** OAU, **2002** AU\n- World: **1919** Versailles, **1929** Crash, **1939** to **1945** war, **1945** UN, **1947** Truman Doctrine, **1948** to **1949** Berlin, **1962** Cuba, **1989** Wall.',
    'Acronyms to expand exactly: UPC, KNC, KPP, KNDP, OK, CPNC, CUC, CNU, CPDM, SDF, ALCAM, ARCAM, UDEFEC, JDC, CPP, FLN, KANU, ANC, PAC, OAU, AU, PLO, NATO, COMECON.',
    'Technique: read the stem twice, cover the options and recall the answer, then look; eliminate options by **period** (an option from the wrong decade is wrong), by **place** and by **person**. Mark hard items, move on and return at the end. Never leave an answer blank.',
    'Matching items (person and event, treaty and date) are common traps: Lugard and indirect rule, Leclerc and the Free French in Douala, Defferre and the Loi-cadre, Foncha and the KNDP, Endeley and the KNC.',
  ], 'ahi-final-term', 'Chains of dates, exact acronyms, elimination by period, place and person.',
  ['A Paper 1 option dated in the wrong decade for the event asked about can be:', ['eliminated at once', 'chosen if it sounds familiar', 'kept as the safest answer', 'left until last only'], 'Chronology is the fastest filter.'],
  [['Stem', 'The question part of a multiple-choice item.'], ['Distractor', 'A wrong option designed to look plausible.']],
  [
    { q: 'Answer by elimination: "The Cameroon National Union was formed in: A 1948 B 1961 C 1966 D 1985."', steps: ['1948: **the UPC’s founding; eliminate.**', '1961: **reunification; parties still separate; eliminate.**', '1985: **the CNU became the CPDM; eliminate.**', '**Answer C, 1966 (1 September).**'] },
  ]),

  L('ahi-drills-2', 'ahi-u6-papers', '18.2', 'Essay clinics, the mock and examiners’ reports', 16, ['Method'], [
    '**Essay clinics**: write timed essays on the Cameroon section, exchange scripts, mark them against the criteria (knowledge, analysis, judgement, communication), and rewrite the weakest paragraph. Most marks are lost in the first and last paragraphs: a vague introduction and a fence-sitting conclusion.',
    '**The mock**: sit all three papers under GCE conditions, at the GCE times (Paper 1 for 1½ hours, Papers 2 and 3 for 3 hours each), with no notes. Use a watch and keep to your time plan.',
    '**Post-mock remediation**: list your errors under headings (misread questions, narrative, missing dates, irrelevance, timing) and fix the most frequent first. Rewrite one essay from each paper. Revisit topics where Paper 1 scores were lowest.',
    'Chief examiners’ reports repeat the same advice: answer the question set, not one prepared in advance; respect the dates in the question; use precise evidence; explain and judge rather than narrate; and attempt every part of a multi-part question.',
  ], 'ahi-mock-review', 'Clinic, mock, remediation: the last term turns knowledge into marks.',
  ['The most useful step after the mock is to:', ['group your errors by type and fix the most frequent first', 'forget the marks and start new topics', 'repeat the same mock unchanged', 'stop writing essays'], 'Remediation targets real weaknesses.'],
  [['Remediation', 'Targeted work to correct identified weaknesses.'], ['Examiners’ report', 'The chief examiner’s comments on how candidates answered.']],
  [
    { q: 'A candidate’s mock essays score well on knowledge but low on analysis. Plan their remediation.', steps: ['Diagnosis: **narrative paragraphs that do not answer the question.**', 'Fix 1: **begin every paragraph with a point that answers the question.**', 'Fix 2: **end every paragraph with a mini-judgement.**', 'Practice: **rewrite two mock paragraphs in PEEL form and re-mark them.**'] },
  ]),
];
