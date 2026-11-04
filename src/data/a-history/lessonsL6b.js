// A Level History lessons (0760), Lower Sixth, Terms 2 and 3: the British and
// French mandates, the Great Depression, the dictatorships, the League of
// Nations, Cameroon in the Second World War, the Brazzaville Conference, UN
// trusteeship, the trade unions of 1945 and the road to the UPC, and the
// essay and source clinics. Source extracts in the examples are written for
// this app and marked as such.

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

export const LESSONS_HL6B = [
  // ---------- 9. British mandate ----------
  L('ahi-british-1', 'ahi-l6-british', '9.1', 'Indirect rule and the government of British Cameroons', 18, ['Cameroon history'], [
    'The mandate allowed Britain to govern its share as part of a neighbouring colony, and it chose **Nigeria**. **Northern Cameroons** was run with the Northern Provinces through the emirates of Adamawa and Dikwa (Borno); **Southern Cameroons**, the Cameroons Province with its headquarters at Buea, was part of the Southern Provinces and from 1939 of the **Eastern Provinces**, governed from Enugu.',
    '**Indirect rule**, as described by Lord **Lugard**, governed through existing rulers:\n- **Native Authorities** (chiefs and councils) kept order and collected tax\n- **native courts** judged by customary law\n- **native treasuries** kept part of the tax for local works\n- British Residents and District Officers supervised and advised.',
    'The system suited the northern emirates, with their courts and tax systems, and the Grassfields fondoms, whose Fons became Native Authorities. In forest areas without strong chiefs, the British grouped villages into councils or recognised headmen with little traditional authority, which caused resentment.',
    'Representation was minimal: until the 1940s Cameroonians had almost no voice in Lagos, apart from nominated members such as **Chief Manga Williams** of Victoria (from 1942). Indirect rule preserved traditional institutions and disrupted less than French rule, but it was conservative, slow to expand education and kept the territory a dependency of Nigeria.',
  ], 'ahi-british', 'Northern Cameroons with Northern Nigeria; Southern Cameroons with the Eastern Provinces; Native Authorities.',
  ['Under indirect rule, local government in British Cameroons was carried out by:', ['Native Authorities supervised by British officers', 'French administrators', 'elected regional assemblies', 'the League of Nations directly'], 'Lugard’s system.'],
  [['Indirect rule', 'Colonial government through traditional rulers under supervision.'], ['Native Authority', 'A chief or council recognised to run local government.'], ['Administrative union', 'Governing a territory as part of a neighbouring colony.']],
  [
    { q: 'How far did indirect rule preserve traditional authority in British Cameroons?', steps: ['Preserved: **emirs and Fons kept their courts, councils and prestige.**', 'Changed: **rulers now answered to British officers and could be deposed.**', 'Invented: **in forest areas the British created authorities that had no traditional basis.**', 'Judgement: **tradition was kept where it was useful and reshaped where it was not.**'] },
  ]),

  L('ahi-british-2', 'ahi-l6-british', '9.2', 'Economy and politics in British Cameroons (1922 to 1945)', 17, ['Cameroon history'], [
    'The German plantations on Mount Cameroon were put up for sale, and at the **London auction of 1924** most were bought back by their former German owners. By the late 1930s German planters again dominated the economy of the Southern Cameroons. In 1939 the estates were confiscated as enemy property; after the war they passed to the **Cameroon Development Corporation**.',
    'Neglect was the common complaint: revenue was merged with Nigeria’s, roads and schools were few, and most schooling was left to missions (Basel, Baptist and Catholic). Nigerians, especially from the east, took many clerical and trading jobs, a source of later resentment.',
    'Political awakening began among the educated abroad. In **1940** Cameroonian students in Lagos, including **P.M. Kale** and **E.M.L. Endeley**, founded the **Cameroons Youth League**, which called attention to the territory’s separate status and its neglect.',
    'Assessment: British rule was less violent than German rule and less centralising than French rule, but it treated the Cameroons as an appendage of Nigeria. That experience, and the separate identity it produced, explain the demands after 1945 for a region of their own and, for some, for reunification.',
  ], 'ahi-british-economy', 'Plantations bought back by Germans (1924), seized again (1939); neglect; the Youth League (1940).',
  ['At the London auction of 1924, the former German plantations in Southern Cameroons were mostly bought by:', ['their former German owners', 'Cameroonian farmers', 'the British government', 'French companies'], 'They were confiscated again in 1939.'],
  [['Neglect', 'Failure to invest in or care for a territory.'], ['Enemy property', 'Property of enemy nationals seized in wartime.']],
  [
    { q: '"British rule brought neglect rather than development to the Cameroons." Discuss.', steps: ['Neglect: **few roads and schools, revenue merged with Nigeria’s, little representation.**', 'Development: **limited: mission education, plantations (largely German-run), some roads.**', 'Context: **the Depression cut colonial budgets everywhere.**', 'Judgement: **the charge is largely fair; the Cameroons were an afterthought within Nigeria.**'] },
  ]),

  // ---------- 10. French mandate ----------
  L('ahi-french-1', 'ahi-l6-french', '10.1', 'Assimilation, association and direct rule', 18, ['Cameroon history'], [
    'French colonial thought moved between two ideas. **Assimilation** aimed to make Africans French in language, law and culture, with citizenship for the few who qualified (the **évolués**). **Association**, more practical, kept local institutions in place while France held control. In mandated Cameroun the French mostly practised association through **direct rule**.',
    'Administration: a Commissioner of the Republic in Yaoundé; regions and subdivisions run by French officers; **chiefs** (chefs de canton and village chiefs) as auxiliaries who collected tax, recruited labour and could be appointed or removed. Powerful rulers lost their independence: **Sultan Njoya** of Bamum was deposed in 1931 and exiled to Yaoundé.',
    'Coercion:\n- the **indigénat** let administrators punish "subjects" without trial, with fines or short prison terms\n- **prestation** obliged men to work unpaid on public works for a number of days each year, often far more in practice\n- forced labour built roads and the railway from Douala to **Yaoundé** (completed in **1927**), at great cost in lives.',
    'Few Cameroonians became French citizens. Advisory councils of notables gave chiefs a voice but no power. The system was centralised and demanding, and it left a stronger state and French-language elite than in the British zone.',
  ], 'ahi-french', 'Assimilation in theory, association and direct rule in practice; indigénat and prestation.',
  ['Under French rule in Cameroun, chiefs were mainly:', ['auxiliaries of the administration who could be appointed or removed', 'independent sovereigns', 'elected deputies', 'judges of French citizens'], 'They collected tax and recruited labour.'],
  [['Assimilation', 'A policy of making colonised peoples culturally French.'], ['Association', 'A policy of ruling through local institutions while keeping control.'], ['Indigénat', 'A code allowing administrators to punish Africans without trial.'], ['Prestation', 'Compulsory unpaid labour owed each year.']],
  [
    { q: 'Explain why the French used association rather than assimilation in Cameroun.', steps: ['Practical limits: **too few schools and officials to make millions of Africans French.**', 'Cost and control: **ruling through chiefs was cheaper and kept order.**', 'Mandate status: **Cameroun was not a French colony, so full integration was legally awkward.**', 'Judgement: **assimilation stayed an ideal for a small elite; association was the reality.**'] },
  ]),

  L('ahi-french-2', 'ahi-l6-french', '10.2', 'Development, health, and French and British rule compared', 18, ['Cameroon history'], [
    'The French built an export economy: **cocoa** in the centre and south, **coffee** in the west and the Littoral, **bananas** near the coast, palm products and timber, and later cotton in the north. The port of Douala and the railway to Yaoundé carried the crops, and French firms dominated trade.',
    'Health: **Dr Eugène Jamot** led a campaign against **sleeping sickness** from the 1920s, with mobile teams that examined and treated hundreds of thousands of people, especially in the centre of the country. Vaccination and dispensaries spread, though unevenly.',
    'Education was given in **French**, in state and mission schools, and produced an élite of clerks, teachers and later politicians. The French also mobilised this élite against Nazi demands for the return of the colony through **JEUCAFRA** (1938).',
    'British and French rule compared:\n- **method**: indirect rule through Native Authorities against direct rule through appointed chiefs\n- **integration**: Southern Cameroons inside Nigeria against Cameroun run as its own territory\n- **investment**: more roads, railways and ports in the French zone\n- **coercion**: forced labour and the indigénat were harsher in the French zone\n- **legacy**: different languages, laws and administrative cultures.',
  ], 'ahi-compare-mandates', 'French zone: more investment and more coercion; British zone: less of both.',
  ['Dr Eugène Jamot is remembered for his campaign against:', ['sleeping sickness', 'malaria in Europe', 'smallpox', 'cholera'], 'Mobile teams treated people in their villages.'],
  [['Export economy', 'An economy organised to produce crops and goods for sale abroad.'], ['Sleeping sickness', 'A disease spread by the tsetse fly (trypanosomiasis).']],
  [
    { q: 'Compare British and French administration of Cameroon under the mandate.', steps: ['Method: **British indirect rule through Native Authorities; French direct rule through appointed chiefs.**', 'Integration: **Southern Cameroons inside Nigeria; Cameroun governed separately.**', 'Economy and coercion: **more investment but harsher forced labour in the French zone.**', 'Judgement: **the French were more active and more oppressive; the British less oppressive and more neglectful.**'] },
  ]),

  // ---------- 11. The Great Depression ----------
  L('ahi-depression-1', 'ahi-l6-depression', '11.1', 'The Wall Street Crash and the world slump', 17, ['World history'], [
    'The **USA boomed** in the 1920s, but the boom had weak foundations: **overproduction** on farms and in factories, unequal incomes that limited demand, **speculation** in shares bought "on the margin" with borrowed money, thousands of small and weak banks, and high tariffs. Europe depended on American loans, which helped Germany pay reparations (the Dawes Plan of 1924).',
    'The crash: share prices collapsed on **Black Thursday, 24 October 1929**, and **Black Tuesday, 29 October**. Banks failed in their thousands, businesses closed, and by 1933 about a quarter of American workers were unemployed.',
    'Spread: American lenders called back their loans; Austria’s **Creditanstalt** bank failed in **1931**, followed by German banks; Britain left the gold standard in September 1931. Countries raised tariffs (the US **Smoot-Hawley tariff** of 1930), and world trade shrank dramatically.',
    'Responses: **Roosevelt’s New Deal** (from 1933) used public works, relief and reform; Britain created **imperial preference** at the **Ottawa Conference** (1932); Nazi Germany pursued rearmament and self-sufficiency. Mass unemployment, especially in Germany, opened the way to extremism.',
  ], 'ahi-depression', 'Weak boom, crash, bank failures, recalled loans, tariffs: a world slump.',
  ['The crisis spread from America to Europe mainly because:', ['American banks called back their loans', 'Europe had no factories', 'the League ordered tariffs', 'the USSR collapsed'], 'Austria and Germany depended on US loans.'],
  [['Speculation', 'Buying shares to profit from rising prices rather than from dividends.'], ['Protectionism', 'Using tariffs to protect home industry.'], ['Imperial preference', 'Lower tariffs within the British Empire than outside it.']],
  [
    { q: 'Explain why the Wall Street Crash of 1929 led to a world depression.', steps: ['American weakness: **bank failures and falling demand ended imports.**', 'Finance: **recalled US loans brought down Austrian and German banks.**', 'Trade: **tariffs such as Smoot-Hawley strangled world trade.**', 'Judgement: **the world depended on American lending; when it stopped, the crisis became global.**'] },
  ]),

  L('ahi-depression-2', 'ahi-l6-depression', '11.2', 'The Depression in colonial Africa and Cameroon', 17, ['African history', 'Cameroon history'], [
    'Colonial Africa sold raw materials, so the collapse of world prices struck it hard. **Cocoa, coffee, palm oil and palm kernels**, groundnuts and rubber fell sharply in price; colonial governments, which lived on customs duties, lost revenue and cut spending.',
    'In Cameroon:\n- farmers earned far less for the same crops, but the **head tax** was rarely reduced, so its real burden rose\n- the administration relied even more on **prestation** and forced labour to keep public works going\n- trading firms cut purchases and jobs in Douala and other towns\n- some farmers turned back to food crops.',
    'Africans protested where they could. In the Gold Coast, cocoa farmers organised a **hold-up** in 1937 to 1938, refusing to sell to European firms that fixed low prices. Elsewhere discontent was quieter but lasting.',
    'Consequences: the Depression exposed colonies’ dependence on a few exports, deepened grievances that fed nationalism after 1945, and through Hitler’s rise brought German demands for the return of colonies, including Kamerun. France answered by organising Cameroonian loyalty through JEUCAFRA in 1938.',
  ], 'ahi-depression-africa', 'Falling crop prices, fixed taxes, more forced labour: the colonies paid for the crisis.',
  ['During the Depression the head tax in Cameroon became more burdensome because:', ['crop prices fell while the tax was rarely reduced', 'the tax was doubled', 'all trade stopped', 'the League demanded it'], 'Farmers earned less to pay the same tax.'],
  [['Hold-up', 'Farmers refusing to sell their crop to force a better price.'], ['Monoculture', 'Dependence on one main crop.']],
  [
    { q: 'Assess the impact of the Great Depression on colonial Cameroon.', steps: ['Economic: **lower prices and incomes, less trade, fewer jobs.**', 'Political: **heavier taxes and forced labour increased resentment.**', 'International: **Nazi colonial claims made Cameroon’s status an issue in the late 1930s.**', 'Judgement: **a major shock whose grievances surfaced after 1945.**'] },
  ]),

  // ---------- 12. Dictatorships ----------
  L('ahi-dictators-1', 'ahi-l6-dictators', '12.1', 'Mussolini and Fascist Italy', 17, ['World history'], [
    'Italy left the war of 1914 to 1918 among the victors but felt cheated: its claims to Dalmatia and Fiume were refused (a "mutilated victory"). Inflation, unemployment, strikes and factory occupations in 1919 to 1920, weak coalition governments and fear of socialism made many accept a strong man.',
    '**Benito Mussolini** formed his fasci in 1919 and the Fascist Party in 1921; his black-shirted **squadristi** beat socialists and trade unionists. After the **March on Rome** (October 1922) King Victor Emmanuel III made him Prime Minister. The **Acerbo Law** (1923) rigged the electoral system, the socialist deputy Matteotti was murdered in 1924, and by 1926 Italy was a one-party state.',
    'Fascist rule: the cult of the **Duce**, the secret police (**OVRA**), censorship, youth movements, the corporate state, the "Battle for Grain", and the **Lateran Treaty** (1929) with the Pope. The monarchy, the Church and big business kept some independence, so control was never total.',
    'Foreign policy: the Corfu incident (1923), the conquest of **Ethiopia** (1935 to 1936), intervention in the Spanish Civil War (1936), the Rome-Berlin Axis (1936) and the occupation of Albania (1939).',
  ], 'ahi-dictators', 'Mutilated victory, fear of socialism, squadristi, March on Rome, one-party state.',
  ['Mussolini was appointed Prime Minister after:', ['the March on Rome in October 1922', 'winning a free election in 1919', 'the invasion of Ethiopia', 'the Lateran Treaty'], 'The king feared civil war.'],
  [['Fascism', 'An authoritarian nationalist ideology glorifying the state and the leader.'], ['Squadristi', 'Fascist armed squads.'], ['Corporate state', 'An economy organised in state-controlled corporations of employers and workers.']],
  [
    { q: 'Why did Mussolini come to power in 1922?', steps: ['Grievances: **the "mutilated victory" and economic crisis.**', 'Fear: **of socialism after the strikes and occupations of 1919 to 1920.**', 'Weakness of liberal governments and the king’s choice: **no one resisted the March on Rome.**', 'Judgement: **Fascism won by intimidation and by the elites’ decision to use it.**'] },
  ]),

  L('ahi-dictators-2', 'ahi-l6-dictators', '12.2', 'Hitler, Nazi Germany and the totalitarian state', 18, ['World history'], [
    'The Weimar Republic carried heavy burdens: resentment of **Versailles** and the "stab in the back" myth, reparations, the hyperinflation of **1923**, and after 1929 the Depression, with about **six million unemployed** by 1932. Proportional representation produced weak coalitions.',
    '**Hitler’s** Nazi Party failed in the Munich putsch (1923) but grew with the Depression; in July 1932 it was the largest party in the Reichstag. Conservative politicians persuaded President Hindenburg to appoint Hitler **Chancellor on 30 January 1933**. The Reichstag fire, the **Enabling Act** (March 1933), the banning of other parties, the Night of the Long Knives (1934) and Hindenburg’s death made him **Führer**.',
    'Nazi rule: the **Gestapo** and SS, concentration camps, Goebbels’ propaganda, the Hitler Youth, rearmament and public works that reduced unemployment, and racial persecution: the **Nuremberg Laws** (1935), Kristallnacht (1938) and later the Holocaust. Foreign policy overturned Versailles: the Rhineland (1936), Austria (1938), the Sudetenland (1938) and Prague (1939).',
    'The **totalitarian** model: one party, one leader, one ideology, terror, propaganda and control of the economy and society. Nazi Germany and Stalin’s USSR came closest to it; Fascist Italy less so. Ideologies differed: Nazism was built on race, Stalinism on class.',
  ], 'ahi-totalitarian', 'Versailles, inflation, Depression; 30 January 1933; Enabling Act; terror and propaganda.',
  ['Hitler gained legal power to make laws without the Reichstag through the:', ['Enabling Act of March 1933', 'Nuremberg Laws', 'Treaty of Versailles', 'Munich Agreement'], 'It ended parliamentary government.'],
  [['Totalitarianism', 'A system in which the state seeks control of every part of life.'], ['Propaganda', 'Information spread to shape opinion, often misleading.'], ['Lebensraum', '"Living space": Hitler’s aim of conquering land in the east.']],
  [
    { q: '"The Depression was the main reason for Hitler’s rise to power." How far do you agree?', steps: ['For: **unemployment turned the Nazis from a fringe party (1928) into the largest party (1932).**', 'Other factors: **Versailles resentment, weak Weimar institutions, Nazi propaganda and organisation.**', 'Decisive: **conservatives around Hindenburg chose to appoint Hitler in January 1933.**', 'Judgement: **the Depression gave Hitler his voters; the elites gave him power.**'] },
  ]),

  // ---------- 13. The League of Nations ----------
  L('ahi-league-1', 'ahi-l6-league', '13.1', 'The League’s organisation and its work in the 1920s', 17, ['World history'], [
    'The League came from **Woodrow Wilson’s Fourteen Points** (1918); its Covenant opened every peace treaty of 1919, and it began work in **1920** in **Geneva**. Its aims: **collective security**, disarmament, the peaceful settlement of disputes and better living and working conditions.',
    'Organs:\n- the **Assembly** of all members, one vote each, meeting yearly\n- the **Council**, with permanent members (Britain, France, Italy, Japan; Germany from 1926, the USSR from 1934) and elected members\n- the **Secretariat**\n- the **Permanent Court of International Justice** at The Hague\n- bodies such as the **Permanent Mandates Commission**, the International Labour Organisation and the Health Organisation.',
    'Its powers were moral condemnation, **economic sanctions** (Article 16) and, in theory, military action by members. Decisions usually needed **unanimity**, and it had no army.',
    'In the 1920s it settled the **Aaland Islands** dispute (1921), divided Upper Silesia (1921) and stopped a Greek invasion of Bulgaria (1925); its agencies helped refugees and fought disease. But it could not stop Poland seizing Vilna (1920) or Mussolini bullying Greece over Corfu (1923): it worked when great powers were not involved.',
  ], 'ahi-league', 'Assembly, Council, Secretariat, Court, Mandates Commission; strong on small disputes.',
  ['The League’s decisions were weakened by the need for:', ['unanimity', 'a two-thirds majority', 'a veto by the USA', 'approval by the UN'], 'Any member could block action.'],
  [['Collective security', 'The idea that members act together against any aggressor.'], ['Sanctions', 'Penalties, usually economic, imposed on a state.'], ['Covenant', 'The founding agreement of the League.']],
  [
    { q: 'Assess the successes of the League of Nations in the 1920s.', steps: ['Disputes: **Aaland Islands, Upper Silesia, the Greek-Bulgarian incident.**', 'Humanitarian: **refugees, health, labour standards and mandates supervision.**', 'Limits: **Vilna and Corfu showed it could not restrain stronger states.**', 'Judgement: **a real success with small states and welfare, an untested one against great powers.**'] },
  ]),

  L('ahi-league-2', 'ahi-l6-league', '13.2', 'Manchuria, Ethiopia and the collapse of collective security', 18, ['World history'], [
    '**Manchuria**: after the Mukden incident (September **1931**) Japan occupied Manchuria and set up the puppet state of Manchukuo. The **Lytton Report** condemned Japan, which simply left the League in **1933**. No sanctions followed; Britain and France would not act in the Far East.',
    'The Disarmament Conference (1932 to 1934) failed, and Germany left the League in 1933.',
    '**Ethiopia**: after a border clash at Walwal, Italy invaded in **October 1935**. The League named Italy the aggressor and imposed sanctions, but they excluded **oil**, and Britain left the **Suez Canal** open. The secret **Hoare-Laval Pact** (December 1935), which offered Italy much of Ethiopia, leaked and discredited both governments. Addis Ababa fell in May 1936; Haile Selassie’s appeal to the Assembly went unanswered, and sanctions were lifted.',
    'Why the League failed: the absence of the **USA** (and of the USSR until 1934); the departure of Japan, Germany and Italy; Britain and France putting their own interests first; no army; unanimity; and the Depression, which made states reluctant to impose sanctions. It was dissolved in April 1946, and its failures shaped the UN’s Security Council and veto.',
  ], 'ahi-league-failure', 'Manchuria 1931, Ethiopia 1935: aggression rewarded, collective security dead.',
  ['The sanctions against Italy in 1935 were ineffective mainly because they:', ['did not include oil, and the Suez Canal stayed open', 'were too harsh', 'were enforced by the USA', 'included all goods'], 'Britain and France feared driving Mussolini to Hitler.'],
  [['Appeasement', 'Giving in to an aggressor’s demands to avoid war.'], ['Puppet state', 'A state controlled by another power.']],
  [
    { q: '"The League failed because the great powers would not support it." Discuss.', steps: ['For: **Britain and France put interests first (Hoare-Laval, Suez left open); the USA never joined.**', 'Structural weaknesses: **no army, unanimity, slow procedures.**', 'Context: **the Depression and aggressive dictatorships.**', 'Judgement: **without great-power commitment, the League’s structure could not work.**'] },
  ]),

  // ---------- 14. Cameroon in the Second World War ----------
  L('ahi-ww2cam-1', 'ahi-l6-ww2cameroon', '14.1', 'Free France and Cameroon’s war effort', 17, ['Cameroon history', 'World history'], [
    'In the late 1930s Nazi Germany demanded the return of its former colonies, including Kamerun. When France fell in **June 1940**, most of its colonies obeyed the **Vichy** government of Marshal Pétain, which collaborated with Germany. In London **General de Gaulle** called on the French to fight on as **Free France**.',
    'Equatorial Africa answered first: **Félix Éboué** rallied **Chad** on **26 August 1940**; on **27 August** Colonel **Philippe Leclerc**, who had crossed by canoe from Victoria in British Cameroons with a handful of men, took control in **Douala**, and French Cameroun joined Free France; Brazzaville followed on 28 August. Cameroon became one of the bases from which Free France rebuilt its forces.',
    'The war effort:\n- Cameroonian soldiers served in Free French units; Leclerc’s column, which included Cameroonians, took **Kufra** in Libya in 1941\n- rubber, timber, palm products, food and gold were supplied to the Allies\n- **forced labour** and requisitions increased, and wages lagged behind prices.',
    'In **British Cameroons**, German residents were interned in 1939 and their plantations seized; Cameroonians served in the Nigeria Regiment, some as far away as **Burma**.',
  ], 'ahi-ww2cameroon', '26 August Chad (Éboué), 27 August Douala (Leclerc), 28 August Brazzaville: Free France in Africa.',
  ['French Cameroun rallied to Free France in August 1940 under:', ['Colonel Philippe Leclerc', 'Marshal Pétain', 'Admiral Darlan', 'Pierre Laval'], 'He took control in Douala on 27 August.'],
  [['Vichy', 'The French state that collaborated with Germany from 1940 to 1944.'], ['Free France', 'De Gaulle’s movement that continued the war.'], ['Requisition', 'An official demand for goods or labour.']],
  [
    { q: 'Explain the importance of Cameroon to Free France between 1940 and 1945.', steps: ['Territory and legitimacy: **French Cameroun gave de Gaulle a base and a population on French soil overseas.**', 'Men: **soldiers for Leclerc’s campaigns from Kufra onwards.**', 'Resources: **rubber, timber, gold and food for the Allies.**', 'Judgement: **French Equatorial Africa and Cameroon made Free France more than a London committee.**'] },
  ]),

  L('ahi-ww2cam-2', 'ahi-l6-ww2cameroon', '14.2', 'How the war changed Cameroon', 17, ['Cameroon history'], [
    'Economically, wartime demand brought shortages and **inflation**, while wages stayed low; Douala grew quickly as workers arrived. These pressures exploded in the **strikes of September 1945**.',
    'Politically, the war weakened France and Britain and changed the language of empire. The **Atlantic Charter** (1941) spoke of the right of peoples to choose their government; the **Brazzaville Conference** (1944) promised reforms; the new **UN** made Cameroon a trust territory in 1946.',
    'Socially, **ex-servicemen** came home having fought for freedom; a new educated class, trade unions (legal in French Africa from 1944) and urban workers formed the base of the movements after 1945.',
    'In the British zone the seized plantations were brought together under the **Cameroon Development Corporation**, and the Bakweri began to claim back their land. In both zones the war turned scattered grievances into organised demands.',
  ], 'ahi-war-effects', 'Inflation, ex-servicemen, the Atlantic Charter, Brazzaville, the UN: the war remade politics.',
  ['Ex-servicemen encouraged change after 1945 mainly because:', ['they had fought for freedom and expected rights at home', 'they supported forced labour', 'they stayed abroad', 'they opposed trade unions'], 'Their expectations were not met.'],
  [['Inflation', 'A general rise in prices that reduces what money can buy.'], ['Ex-serviceman', 'A former soldier.']],
  [
    { q: 'How far did the Second World War change Cameroon?', steps: ['Economic: **inflation, urban growth and the 1945 strikes.**', 'Political: **Brazzaville, the 1946 reforms and trusteeship opened new paths.**', 'Social: **ex-servicemen, unions and an educated élite organised.**', 'Continuity: **colonial rule and forced labour continued until 1946.**', 'Judgement: **the war did not end colonialism, but it made its end thinkable.**'] },
  ]),

  // ---------- 15. The Brazzaville Conference ----------
  L('ahi-brazzaville-1', 'ahi-l6-brazzaville', '15.1', 'The Brazzaville Conference and its recommendations', 17, ['Cameroon history', 'African history'], [
    'Free France needed Africa’s soldiers and resources, and the support of an anti-colonial United States. **Félix Éboué**, Governor-General of French Equatorial Africa, urged policies that respected African institutions. In **Brazzaville**, from **30 January to 8 February 1944**, **de Gaulle** opened a conference of the governors of French Africa; no elected Africans took part.',
    'Its recommendations:\n- **politics**: no self-government; the colonies would stay within the French bloc, but be represented in the future French constituent assembly and have local assemblies\n- **labour**: forced labour and the **indigénat** would be ended over time\n- **society**: better health care and schools (taught in French), and respect for customs\n- **economy**: development of agriculture and industry.',
    'The final declaration was blunt: any idea of autonomy, and any evolution outside the French bloc, even in the distant future, was to be set aside. The conference sought **reform to keep the empire**, not to end it.',
    'For Africans, Brazzaville raised hopes that it could not satisfy, and its promises became a standard against which they measured French actions after the war.',
  ], 'ahi-brazzaville', 'Reform yes, self-government no: Brazzaville, 30 January to 8 February 1944.',
  ['The Brazzaville Conference recommended that self-government for the colonies should be:', ['set aside, even in the distant future', 'granted at once', 'decided by referendum in 1945', 'given only to Cameroon'], 'Reform within the empire.'],
  [['Constituent assembly', 'An assembly elected to write a constitution.'], ['Autonomy', 'Self-government.']],
  [
    { q: '"The Brazzaville Conference was a turning point for French Africa." Discuss.', steps: ['For: **it led to the end of the indigénat and forced labour, representation in Paris and local assemblies.**', 'Against: **it rejected self-government and excluded Africans.**', 'Unintended: **its promises fed African demands after 1945.**', 'Judgement: **a turning point in method, not in aim: France meant to reform the empire, not dissolve it.**'] },
  ]),

  L('ahi-brazzaville-2', 'ahi-l6-brazzaville', '15.2', 'The reforms of 1946 and their limits in Cameroon', 17, ['Cameroon history'], [
    'Cameroon elected deputies to the French assemblies from 1945, among them **Prince Alexandre Douala Manga Bell**. In **1946** a series of laws changed the colonial order: the **indigénat** was abolished, the **Houphouët-Boigny law** (April 1946) ended forced labour, and the **Lamine Guèye law** (May 1946) made all inhabitants of the overseas territories citizens.',
    'The constitution of the Fourth Republic (October 1946) created the **French Union**; Cameroun became an **associated territory**, as a UN trust territory. It received an elected **Representative Assembly (ARCAM)**, which became the **Territorial Assembly (ATCAM)** in 1952. A development fund, **FIDES**, financed roads, ports and schools.',
    'Limits:\n- a **double college**: Europeans and Africans voted separately, giving a small European minority great weight\n- the assemblies had mainly financial and advisory powers\n- independence was not on the agenda.',
    'These limits help explain the radical demands of the **UPC** from 1948: for many Cameroonians, reform inside the French Union was not enough.',
  ], 'ahi-reforms-1946', '1946: indigénat abolished, forced labour ended, citizenship, French Union, ARCAM.',
  ['The law of April 1946 that abolished forced labour in French Africa is named after:', ['Félix Houphouët-Boigny', 'Lamine Guèye', 'Gaston Defferre', 'Charles de Gaulle'], 'He was a deputy from Côte d’Ivoire.'],
  [['French Union', 'The 1946 association of France and its overseas territories.'], ['Double college', 'Separate electoral rolls for Europeans and Africans.']],
  [
    { q: 'Assess the significance of the reforms of 1946 for French Cameroun.', steps: ['Gains: **an end to the indigénat and forced labour, citizenship, an elected assembly, development funds.**', 'Limits: **the double college, weak assemblies and no path to independence.**', 'Effect: **reform encouraged organisation and fuelled the UPC’s demands.**', 'Judgement: **the end of the harshest colonial practices, but not of colonial rule.**'] },
  ]),

  // ---------- 16. UN trusteeship ----------
  L('ahi-trust-1', 'ahi-l6-trusteeship', '16.1', 'The trusteeship system and Article 76', 17, ['Cameroon history'], [
    'The UN Charter (chapters XI to XIII) replaced the mandates with **trusteeship**. **Article 76** set its objectives: international peace; the political, economic, social and educational **advancement** of the inhabitants; their **progressive development towards self-government or independence**, according to their circumstances and freely expressed wishes; and respect for human rights.',
    'The trusteeship agreements for French Cameroun and British Cameroons were approved by the General Assembly on **13 December 1946**. Britain and France remained the **administering authorities**; Britain could still govern its share with Nigeria.',
    'Supervision was stronger than under the League:\n- the **Trusteeship Council** examined annual reports and sent questionnaires\n- **petitions** could be written or presented **in person**\n- **visiting missions** toured the territories (1949, 1952, 1955, 1958).',
    'Cameroonians used these channels intensively: the UPC and other groups sent thousands of petitions, and **Um Nyobè** spoke at the UN in 1952. Trusteeship made Cameroon’s future an international question and, in the end, led to independence for the French zone (1960) and the plebiscites in the British zone (1961).',
  ], 'ahi-trusteeship', 'Article 76: advancement towards self-government or independence; petitions and visiting missions.',
  ['The UN trusteeship agreements for the Cameroons were approved on:', ['13 December 1946', '20 July 1922', '24 October 1945', '1 January 1960'], 'By the General Assembly.'],
  [['Trust territory', 'A territory administered under UN supervision.'], ['Visiting mission', 'A UN team sent to inspect a trust territory.'], ['Petition', 'A written or spoken complaint or request to the UN.']],
  [
    { q: 'Explain how trusteeship helped Cameroonian nationalism.', steps: ['Goal: **Article 76 named self-government or independence as the aim.**', 'Voice: **petitions and hearings at the UN gave nationalists a platform.**', 'Pressure: **visiting missions and UN debates pushed the administering powers.**', 'Judgement: **trusteeship gave nationalism a legal basis and an international audience.**'] },
  ]),

  L('ahi-trust-2', 'ahi-l6-trusteeship', '16.2', 'Mandate and trusteeship compared', 16, ['Cameroon history'], [
    'Similarities: the same **administering powers** (Britain and France); international supervision through annual reports; the British share governed with Nigeria in both periods.',
    'Differences:\n- **legal basis**: Article 22 of the League Covenant against chapter XII of the UN Charter\n- **supervising body**: the Permanent Mandates Commission against the Trusteeship Council\n- **aim**: the "well-being and development" of the people against progress towards **self-government or independence**\n- **petitions**: written and sent through the mandatory power, against written or oral petitions to the UN\n- **inspection**: none against regular **visiting missions**.',
    'Why the differences mattered: they reflected a world changed by the Second World War, the Atlantic Charter and an anti-colonial USA and USSR. Under trusteeship, nationalists could argue that the UN itself demanded independence.',
    'An examiner will reward a comparison that does not stop at listing: explain which difference had the greatest effect on Cameroon, and why.',
  ], 'ahi-mandate-trust', 'Same powers, new goal, stronger supervision.',
  ['A key difference between mandate and trusteeship was that trusteeship:', ['stated the goal of self-government or independence', 'removed Britain and France', 'gave Cameroon back to Germany', 'had no supervision'], 'Article 76 of the UN Charter.'],
  [['Administering authority', 'The state governing a trust territory.'], ['Self-determination', 'The right of a people to choose its own government.']],
  [
    { q: 'Compare the mandate and trusteeship systems in Cameroon.', steps: ['Similar: **same powers, annual reports, British share governed with Nigeria.**', 'Different aim: **well-being against self-government or independence.**', 'Different supervision: **visiting missions and oral petitions under the UN.**', 'Judgement: **the new aim was the decisive difference: it made independence a matter of when, not whether.**'] },
  ]),

  // ---------- 17. Trade unions and early protest ----------
  L('ahi-unions-1', 'ahi-l6-unions', '17.1', 'Trade unions and the Douala strike of September 1945', 17, ['Cameroon history'], [
    'Wartime inflation, low wages and forced labour created deep grievances among workers. A decree of **August 1944** legalised trade unions in French Africa. In Yaoundé the French teacher **Gaston Donnat** ran a study circle where future leaders, among them **Ruben Um Nyobè**, discussed workers’ rights and colonialism.',
    'The **USCC** (Union des Syndicats Confédérés du Cameroun), linked to the French CGT and led by **Jacques Ngom**, organised railway workers, clerks and labourers. It campaigned for higher wages, an end to discrimination and the application of French labour law.',
    'In **September 1945** railway workers in **Douala** went on strike over pay and the cost of living. On **24 and 25 September** unrest spread to the unemployed of the town; armed European settlers fired on Africans, and many were killed, a number never established with certainty. Union leaders were arrested.',
    'Significance: the first mass urban protest in Cameroon showed the anger of workers and the hostility of settlers to reform. The union movement trained leaders and methods (meetings, strikes, petitions) that the nationalist party would use.',
  ], 'ahi-unions', '1944 unions legal, USCC, Douala strike and riots 24 to 25 September 1945.',
  ['The trade union federation linked to the French CGT in Cameroon was the:', ['USCC', 'KNDP', 'CNU', 'CDC'], 'Union des Syndicats Confédérés du Cameroun.'],
  [['Trade union', 'An organisation of workers defending their interests.'], ['Strike', 'A collective refusal to work to win demands.'], ['Settler', 'A European living permanently in a colony.']],
  [
    { q: 'Explain the causes of the Douala strike and riots of September 1945.', steps: ['Economic: **wartime inflation and low wages.**', 'Legal change: **unions were now legal and organised by the USCC.**', 'Social tension: **settlers’ hostility to African demands turned a strike into violence.**', 'Judgement: **economic hardship lit the fire; colonial racial tension spread it.**'] },
  ]),

  L('ahi-unions-2', 'ahi-l6-unions', '17.2', 'Early movements and the road to the UPC (1945 to 1948)', 17, ['Cameroon history'], [
    'Before 1945 the main organised group was **JEUCAFRA** (1938), sponsored by the French and led by men such as **Paul Soppo Priso**; it defended Cameroon against German claims but also asked for reforms. After the war new movements went further.',
    'Ethnic and traditional associations became political: the **Ngondo** of the Duala revived its claims to land, and the **Kumsze** association (1947) of the Bamileke region, led by Mathias Djoumessi, organised farmers and chiefs.',
    'In **1947** the **Rassemblement Camerounais (RACAM)** called for radical change and was soon banned by the administration. Its activists, many from the unions, regrouped.',
    'On **10 April 1948** the **Union des Populations du Cameroun (UPC)** was founded in Douala, with Ruben Um Nyobè as its leading figure; it affiliated to the **Rassemblement Démocratique Africain**. Trade unionism, wartime grievances, the reforms of 1946 and trusteeship had produced Cameroon’s first mass nationalist party.',
  ], 'ahi-road-upc', 'JEUCAFRA (1938), unions (1944), RACAM (1947), Kumsze (1947), UPC (1948).',
  ['The UPC was founded in Douala on:', ['10 April 1948', '24 September 1945', '13 July 1955', '1 January 1960'], 'Its leaders came largely from the unions.'],
  [['Nationalism', 'The movement of a people to govern themselves.'], ['Mass party', 'A party with wide popular membership, not only an élite.']],
  [
    { q: 'Assess the importance of trade unions in the rise of nationalism in French Cameroun to 1948.', steps: ['Leadership: **Um Nyobè and others learned organisation in the USCC.**', 'Methods: **meetings, strikes and petitions became nationalist tools.**', 'Other factors: **the war, trusteeship, the 1946 reforms and traditional associations.**', 'Judgement: **unions were the school of nationalism, though the UPC drew on wider grievances.**'] },
  ]),

  // ---------- 18. Essays and sources ----------
  L('ahi-essay-1', 'ahi-l6-papers', '18.1', 'Planning and writing an Advanced Level history essay', 18, ['Essay'], [
    'Decode the question: underline the **command word** (assess, explain, compare, how far, to what extent), the **topic**, the **dates** and any **key concept** (nationalism, collective security). An answer about the wrong period or task earns little, however accurate.',
    'Plan for three to five minutes: list the factors, choose evidence for each, decide your **judgement** before you write, and order the paragraphs to build towards it.',
    'Structure:\n- **introduction**: context, definitions and a clear **thesis** (your answer)\n- **analytical paragraphs** in PEEL form: Point, Evidence, Explanation, Link back to the question\n- a **counter-argument** paragraph that weighs the other side\n- **conclusion**: a reasoned judgement that follows from the paragraphs.',
    'Common faults: **narrative** (telling the story without explaining), irrelevance, **anachronism**, vague evidence, and a conclusion that sits on the fence. Precise names, dates, places and figures turn a general statement into an argument.',
  ], 'ahi-essay', 'Decode, plan, thesis, PEEL paragraphs, counter-argument, judgement.',
  ['A paragraph that describes events in order without explaining their importance is:', ['narrative, and earns few marks', 'analysis', 'a strong thesis', 'a counter-argument'], 'Analysis explains and judges.'],
  [['Thesis', 'The main argument of an essay, stated in the introduction.'], ['PEEL', 'Point, Evidence, Explanation, Link: a paragraph structure.'], ['Command word', 'The word that tells you what the question asks you to do.']],
  [
    { q: 'Plan an answer to: "To what extent was British hesitation responsible for the German annexation of Cameroon in 1884?"', steps: ['Thesis: **British hesitation was the decisive but not the only factor.**', 'Paragraph 1: **British delay over the requests of 1879 and 1881 (evidence: Hewett arriving on 19 July).**', 'Paragraph 2: **German initiative: traders’ lobbying and Bismarck’s policy change in 1884.**', 'Paragraph 3: **Duala politics: kings seeking protection and trade advantages.**', 'Conclusion: **Germany seized an opportunity that British hesitation created.**'] },
  ]),

  L('ahi-essay-2', 'ahi-l6-papers', '18.2', 'Evaluating and comparing sources', 17, ['Sources'], [
    'Evaluate each source by its **origin** (author, date, place), **purpose** (to inform, persuade, justify, record), **content** (what it says and omits), and so its **value** and **limitations** for a particular question. Usefulness always depends on the question asked.',
    'When comparing two sources:\n- identify where they **agree** and **disagree**\n- explain **why**: different authors, purposes, dates or audiences\n- test both against your **own knowledge**\n- judge which is more useful for the question, and why.',
    'Oral traditions and testimonies are valuable for societies with few written records, and for people the colonial archives ignored; they can be tested, like written sources, by comparison and context.',
    'Never treat a source as simply "biased so useless": a biased source is good evidence of its author’s views and of the attitudes of a time.',
  ], 'ahi-source-compare', 'Origin, purpose, content, value, limitations; then agree, disagree, explain why.',
  ['When two sources disagree, the best response is to:', ['explain the reasons for the difference and test both against other evidence', 'ignore both', 'always trust the older one', 'always trust the longer one'], 'Disagreement is evidence too.'],
  [['Value', 'What a source can tell you for a particular question.'], ['Limitation', 'What a source cannot reliably tell you.'], ['Oral tradition', 'History passed on by word of mouth.']],
  [
    { q: 'Two extracts written for this exercise: A (a Duala elder’s account, recorded in 1960): "The kings signed to protect our land and trade." B (a German trader’s memoir, 1900): "The chiefs gladly gave their country to Germany." Compare them as evidence on the treaty of 1884.', steps: ['Agreement: **both say the kings chose to sign.**', 'Disagreement: **A stresses conditions (land and trade); B presents an unconditional gift.**', 'Why: **A defends Duala rights after land seizures; B justifies German rule.**', 'Own knowledge: **the treaty’s land conditions support A.**', 'Judgement: **A is more useful on Duala intentions; B on German attitudes.**'] },
  ]),
];
