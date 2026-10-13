// History lessons for Form 5, term 1: the GCE examination, Cameroon from
// the federation to multi-party politics, the First World War, Versailles and
// the League, the dictatorships, the Second World War and the UN, and the
// Cold War. Original text written for this app.

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

export const LESSONS_5A = [
  // ---------- The GCE blueprint ----------
  L('hi-gceformat-5', 'hi-f5-blueprint', '1.1', 'The GCE History examination', 12, ['Exam skills'], [
    'Ordinary Level **History** is GCE subject **0560**. On the June 2026 timetable:\n- **Paper 1** (1½ hours): multiple-choice questions on dates, places, treaties, leaders and organisations\n- **Paper 2** (2½ hours): essays. As the scheme of work sets out, Paper 2 has **Section A (Cameroon history)**, **Section B (African history)** and **Section C (world history)**.\nAlways follow the instructions printed on your paper about how many questions to answer from each section.',
    'The Form 5 course covers Cameroon since reunification (1961 onwards), twentieth-century world history (the two world wars, the League and the UN, the dictators, the Cold War) and African history (decolonisation, Pan-Africanism, the OAU and AU). Form 4 work on Cameroon from the nineteenth century to 1961 is examined too.',
    'Term 3 is kept for Paper 1 drills, Paper 2 essay practice, the **mock examination** and remediation.',
  ], 'hist-gce-0560', 'Learn the paper times and the three sections before you start revising.',
  ['History Paper 2 in the scheme of work is divided into sections on:', ['Cameroon, Africa and the world', 'grammar and spelling', 'maps and graphs', 'drama, prose and poetry'], 'A Cameroon, B Africa, C world.'],
  [['Section', 'A part of an examination paper on one area of the syllabus.'], ['Mock examination', 'A practice examination under real conditions.']],
  [
    { q: 'Which Form 4 and Form 5 topics fall under each Paper 2 section?', steps: ['Section A, Cameroon: **pre-colonial societies, German rule, mandates and trusteeship, nationalism, reunification, the federation and the unitary state.**', 'Section B, Africa: **decolonisation (Ghana, Algeria, Kenya), Pan-Africanism, the OAU and AU.**', 'Section C, world: **the First World War, Versailles and the League, the dictators, the Second World War and the UN, the Cold War.**'] },
  ]),

  L('hi-skills-5', 'hi-f5-blueprint', '1.2', 'Historical skills: chronology, sources and thesis', 13, ['Study skills'], [
    '**Chronology mapping**: build timelines for each topic and one master timeline. Knowing the order of events lets you explain cause and effect and avoid errors such as placing the Foumban Conference before the plebiscite.',
    '**Sources** are the evidence of history. **Primary sources** come from the time studied: treaties, speeches, letters, photographs, newspapers. **Secondary sources** are later accounts, such as textbooks. Ask of any source: who made it, when, why, and can it be trusted? **Comparative data**, such as election or plebiscite results, should be read carefully and quoted accurately.',
    'A **thesis** is your answer to an essay question in one or two sentences. Generate it before you write: "The federation ended in 1972 mainly because Ahidjo wanted a centralised state, although the cost and complexity of two governments also played a part."',
  ], 'hist-gce-0560', 'Write your thesis before you write your essay.',
  ['A plebiscite result published in 1961 is:', ['a primary source', 'a secondary source', 'a novel', 'a map only'], 'It comes from the time studied.'],
  [['Primary source', 'Evidence from the time being studied.'], ['Secondary source', 'A later account based on evidence.'], ['Thesis', 'A short statement of your answer to an essay question.']],
  [
    { q: 'Write a thesis for "Why did Southern Cameroons vote to join the Republic of Cameroon in 1961?"', steps: ['Give the main reason and the supporting reasons.', '**"Southern Cameroons chose the Republic of Cameroon mainly out of fear of Nigerian domination, helped by the KNDP’s effective campaign and a shared memory of German Kamerun."**'] },
  ]),

  // ---------- The federation ----------
  L('hi-federal-5', 'hi-f5-federation', '2.1', 'How the federation worked', 14, ['Cameroon history'], [
    'The **Federal Republic of Cameroon** (1 October 1961 to 1972) had two federated states:\n- **West Cameroon**, capital **Buea**, with a Prime Minister and a House of Assembly (and a House of Chiefs)\n- **East Cameroon**, capital **Yaoundé**, with a Prime Minister and a Legislative Assembly.\nYaoundé was also the federal capital.',
    'Federal institutions: the **Federal President**, Ahmadou Ahidjo, and the Vice-President, John Ngu Foncha (replaced by Solomon Tandeng Muna in 1970); a **Federal National Assembly**; federal ministries for defence, foreign affairs, finance, external trade, higher education and other matters. West Cameroon’s Prime Ministers were Foncha (1961 to 1965), Augustine Ngom Jua (1965 to 1968) and S. T. Muna (1968 to 1972).',
    'Strengths: reunification, peace between two cultures, bilingualism. Weaknesses: unequal size (East Cameroon was far larger), strong federal powers in the President’s hands, the cost of several governments, and different laws, currencies at first, and school systems that made integration slow.',
  ], 'hist-federation', 'Two states, one federal government: know the capitals and the leaders.',
  ['Which state had its capital at Buea?', ['West Cameroon', 'East Cameroon', 'the federation', 'Northern Cameroons'], 'Yaoundé was the capital of East Cameroon and the federation.'],
  [['Federated state', 'A member state of a federation with its own government.'], ['Federal government', 'The central government of a federation.'], ['House of Chiefs', 'An assembly of traditional rulers in West Cameroon.']],
  [
    { q: 'Give two strengths and two weaknesses of the federal system.', steps: ['Strengths: **it achieved reunification peacefully; it respected the different traditions of the two states.**', 'Weaknesses: **power was concentrated in the Federal President; running three governments was costly and slowed integration.**'] },
  ]),

  L('hi-singleparty-5', 'hi-f5-federation', '2.2', 'The road to the single party (1966)', 13, ['Cameroon history'], [
    'At reunification there were many parties: Ahidjo’s **Union Camerounaise** (UC) in the East; the **KNDP**, the **CPNC** and later Muna’s **CUC** in the West. Ahidjo called for a "great national party" to build unity.',
    'Steps:\n- opposition parties in East Cameroon were weakened or absorbed after 1962, and laws against "subversion" limited criticism\n- leaders of the main parties agreed to merge\n- on **1 September 1966** the UC, KNDP, CPNC and CUC formed the **Cameroon National Union** (CNU, in French UNC), which became the single party.',
    'Reasons given: national unity, the fight against tribalism and regionalism, and stability. Results: an end to open political competition, stronger presidential power, and the weakening of West Cameroon’s separate political voice, which prepared the way for the unitary state in 1972.',
  ], 'hist-federation', 'CNU, 1 September 1966: four parties merged into one.',
  ['The CNU was formed on:', ['1 September 1966', '1 October 1961', '20 May 1972', '24 March 1985'], 'It merged four parties.'],
  [['Single-party state', 'A state where only one political party is allowed.'], ['Subversion', 'Activities aimed at undermining a government, a charge often used against critics.']],
  [
    { q: 'Explain how the single party of 1966 prepared the end of the federation.', steps: ['**Merging the West Cameroon parties into the CNU removed their independent political base.**', '**All power flowed through one party led by Ahidjo.**', '**With no organised opposition, the change to a unitary state in 1972 met little resistance.**'] },
  ]),

  // ---------- The unitary state ----------
  L('hi-1972-5', 'hi-f5-unitary', '3.1', 'The referendum of 20 May 1972', 14, ['Cameroon history'], [
    'On 6 May 1972 President Ahidjo announced a referendum on replacing the federation with a **unitary state**. On **20 May 1972** voters approved it by an overwhelming official majority. The new **United Republic of Cameroon** came into being with a new constitution in June 1972. The government called the change the "**Peaceful Revolution**"; 20 May became the National Day.',
    'Reasons given by the government: the high **cost** of several governments and assemblies, the need for **national unity** and efficiency, and the economic integration of the country.',
    'Consequences:\n- the federated states, their governments and assemblies were abolished; the country was divided into **provinces** run by governors appointed by the President\n- the post of Vice-President was abolished\n- power was further centralised in the presidency.\nIn West Cameroon, critics argued that the special status agreed in 1961 had been lost; these grievances later fed the "anglophone problem".',
  ], 'hist-constitutions', '20 May 1972: federation ended, United Republic of Cameroon created.',
  ['The government called the change of 1972 the:', ['Peaceful Revolution', 'Positive Action', 'Benevolent Neutrality', 'Liberty Laws'], 'It ended the federation without violence.'],
  [['Unitary state', 'A state with one central government and no federated states.'], ['Province', 'An administrative region run by an appointed governor.'], ['Centralisation', 'Concentrating power in a central authority.']],
  [
    { q: 'Explain the reasons for and the consequences of the 1972 referendum.', steps: ['Reasons: **cost of three governments, national unity, efficiency, Ahidjo’s wish for central control.**', 'Consequences: **the United Republic of Cameroon, provinces under appointed governors, no Vice-President, stronger presidential power, lasting grievance in West Cameroon.**'] },
  ]),

  L('hi-biya-5', 'hi-f5-unitary', '3.2', 'Paul Biya, 1984 and the return of multi-party politics', 15, ['Cameroon history'], [
    'Ahmadou Ahidjo resigned in November 1982, and **Paul Biya**, Prime Minister since 1975, became President on **6 November 1982**. Tensions between the two men followed; in **April 1984** an attempted coup by soldiers loyal to the former regime was defeated.',
    'Changes under the "New Deal":\n- a law of **February 1984** changed the country’s name from the United Republic of Cameroon to the **Republic of Cameroon**\n- in **March 1985**, at a congress in **Bamenda**, the CNU became the **Cameroon People’s Democratic Movement (CPDM)**.',
    'By 1990, economic crisis and the end of the Cold War encouraged demands for democracy. The **Social Democratic Front** (SDF) was launched in Bamenda by **John Fru Ndi** on 26 May 1990, despite a ban. In **December 1990**, new laws on freedom of association restored **multi-party politics**. After strikes and "ghost town" protests in 1991, the first multi-party legislative and presidential elections were held in **1992**, and a new constitution followed in **1996**.',
  ], 'hist-constitutions', 'Biya 1982; name change 1984; CPDM 1985; multi-party laws 1990.',
  ['The CNU became the CPDM in:', ['1985', '1966', '1972', '1990'], 'At the Bamenda congress.'],
  [['Multi-party system', 'A political system in which several parties compete for power.'], ['Ghost towns', 'The 1991 opposition campaign of shutting down economic activity.'], ['New Deal', 'The slogan of Paul Biya’s early government.']],
  [
    { q: 'Put in order: CPDM founded; Biya becomes President; multi-party laws; country renamed Republic of Cameroon.', steps: ['**Biya becomes President (November 1982).**', '**Country renamed Republic of Cameroon (February 1984).**', '**CPDM founded (March 1985).**', '**Multi-party laws (December 1990).**'] },
  ]),

  // ---------- First World War ----------
  L('hi-ww1causes-5', 'hi-f5-ww1', '4.1', 'The causes of the First World War', 15, ['World history'], [
    'Long-term causes (remembered as **MAIN**):\n- **Militarism**: an arms race, especially the Anglo-German naval race, and powerful military leaders\n- **Alliances**: the **Triple Alliance** (Germany, Austria-Hungary, Italy, 1882) against the **Triple Entente** (Britain, France, Russia, completed in 1907), which could turn a local quarrel into a general war\n- **Imperialism**: rivalry for colonies, as in the Moroccan crises of 1905 and 1911\n- **Nationalism**: French desire to recover Alsace-Lorraine, Slav nationalism in the Balkans, and German ambitions.',
    'The **Balkans** were the "powder keg of Europe": Serbia, backed by Russia, opposed Austria-Hungary, which had annexed Bosnia in 1908.',
    'The short-term cause: on **28 June 1914**, the Austrian heir, **Archduke Franz Ferdinand**, was assassinated at **Sarajevo** by Gavrilo Princip, a Bosnian Serb. Austria-Hungary declared war on Serbia; Russia mobilised; Germany declared war on Russia and France and invaded **Belgium**, which brought Britain into the war on 4 August 1914.',
  ], 'hist-ww1-causes', 'MAIN: Militarism, Alliances, Imperialism, Nationalism; then Sarajevo.',
  ['Britain entered the First World War after Germany invaded:', ['Belgium', 'Poland', 'Serbia', 'Morocco'], 'Britain had guaranteed Belgian neutrality.'],
  [['Arms race', 'Competition between states to build bigger armed forces.'], ['Alliance', 'An agreement between states to support each other.'], ['Mobilise', 'To prepare armed forces for war.']],
  [
    { q: 'Explain how the alliance system turned the Sarajevo assassination into a world war.', steps: ['**Austria-Hungary declared war on Serbia; Russia, Serbia’s protector, mobilised.**', '**Germany, Austria’s ally, declared war on Russia and on Russia’s ally France.**', '**Germany invaded Belgium to reach France, and Britain declared war; the colonies of each power were drawn in too.**'] },
  ]),

  L('hi-ww1course-5', 'hi-f5-ww1', '4.2', 'The course of the war and its new technologies', 15, ['World history'], [
    'The German **Schlieffen Plan** aimed to defeat France quickly through Belgium, then turn on Russia. It failed at the **Battle of the Marne** (September 1914). On the **Western Front** both sides dug **trenches** from the Channel to Switzerland, and battles such as Verdun and the Somme (1916) cost huge numbers of lives for little ground. On the Eastern Front, Russia suffered heavy defeats; after the revolution of 1917 it left the war by the Treaty of Brest-Litovsk (March 1918). The war was also fought at Gallipoli, at sea and in the colonies, including Cameroon.',
    'New technologies: **machine guns**, heavy artillery, **poison gas** (from 1915), **tanks** (first used in 1916), **aircraft** for reconnaissance and bombing, and **submarines** (U-boats).',
    'The **USA** entered the war in **April 1917**, angered by German **unrestricted submarine warfare** and the Zimmermann telegram, which proposed a German alliance with Mexico. American troops and resources, the naval blockade of Germany and the failure of Germany’s spring offensive of 1918 led to the **armistice of 11 November 1918**.',
  ], 'hist-ww1-causes', 'Schlieffen Plan fails, trench deadlock, USA joins in 1917, armistice in 1918.',
  ['The Schlieffen Plan failed at the Battle of:', ['the Marne', 'Stalingrad', 'El Alamein', 'Pearl Harbor'], 'In September 1914.'],
  [['Trench warfare', 'Fighting from long lines of dug-out trenches, causing deadlock.'], ['Armistice', 'An agreement to stop fighting.'], ['Unrestricted submarine warfare', 'Sinking ships without warning, including neutral ones.']],
  [
    { q: 'Explain why the USA entered the war in 1917 and the effect of its entry.', steps: ['Causes: **German unrestricted submarine warfare sank American ships; the Zimmermann telegram offered Mexico an alliance against the USA.**', 'Effects: **fresh American troops, money and supplies gave the Allies the advantage in 1918 and hastened the German defeat.**'] },
  ]),

  // ---------- Versailles and the League ----------
  L('hi-versailles-5', 'hi-f5-versailles', '5.1', 'The Paris Peace Conference and the Treaty of Versailles', 15, ['World history'], [
    'The victors met in Paris in 1919. The "**Big Three**" were President **Woodrow Wilson** (USA), who wanted a fair peace based on his **Fourteen Points**; Prime Minister **David Lloyd George** (Britain); and Prime Minister **Georges Clemenceau** (France), who wanted Germany punished and weakened. Germany was not invited to negotiate.',
    'The **Treaty of Versailles**, signed on **28 June 1919**, imposed punitive terms:\n- **war guilt** (Article 231) and **reparations**, later fixed at £6,600 million\n- the army limited to **100,000** men, no conscription, no tanks, no air force, a small navy, and a demilitarised **Rhineland**\n- loss of territory: **Alsace-Lorraine** to France, land to Poland (the Polish Corridor), Danzig a free city, the Saar under the League for 15 years\n- **all colonies** taken and made mandates, including Cameroon\n- union with Austria forbidden.',
    'Other treaties dealt with Austria, Hungary, Bulgaria and Turkey. Germans called Versailles a "**diktat**" (dictated peace). Its harshness created resentment that Hitler later exploited.',
  ], 'hist-league', 'Versailles: guilt, reparations, army of 100,000, lost land and colonies.',
  ['Which leader wanted the harshest punishment of Germany?', ['Clemenceau', 'Wilson', 'Lloyd George', 'Mussolini'], 'France had suffered most on its soil.'],
  [['Reparations', 'Payments for war damage imposed on a defeated state.'], ['Diktat', 'A peace imposed without negotiation.'], ['Fourteen Points', 'Wilson’s programme for a just peace, including a League of Nations.']],
  [
    { q: 'Explain why many Germans resented the Treaty of Versailles.', steps: ['**It was imposed without negotiation (a diktat).**', '**The war-guilt clause and huge reparations humiliated and burdened Germany.**', '**Germany lost land, all its colonies and most of its armed forces.**'] },
  ]),

  L('hi-league-5', 'hi-f5-versailles', '5.2', 'The League of Nations: organisation, successes and failure', 15, ['World history'], [
    'The **League of Nations** was set up in **1920** with its headquarters at **Geneva**. Its aims: to prevent war through **collective security**, settle disputes peacefully, and improve living and working conditions. Its organs were the **Assembly**, the **Council**, the **Secretariat** and the **Permanent Court of International Justice**, with bodies such as the **International Labour Organisation** and the Mandates Commission.',
    'Successes in the 1920s: it settled the dispute over the **Åland Islands** (1921) and Upper Silesia (1921), stopped a war between Greece and Bulgaria (1925), helped refugees and prisoners of war, and fought diseases and slavery.',
    'Failures in the 1930s: it could not stop Japan in **Manchuria** (1931) or Italy in **Abyssinia** (1935 to 1936); Germany left in 1933 and rearmed. Reasons: the **USA never joined**, the League had **no army**, decisions needed unanimity, Britain and France put their own interests first, and the **Great Depression** pushed states towards aggression.',
  ], 'hist-league', 'No USA, no army, unanimity, Depression: the League’s weaknesses.',
  ['The League of Nations settled the dispute over the Åland Islands between:', ['Sweden and Finland', 'Germany and France', 'Italy and Ethiopia', 'Japan and China'], 'In 1921, in Finland’s favour.'],
  [['Collective security', 'The idea that all members act together against an aggressor.'], ['Unanimity', 'Agreement by all members.'], ['Great Depression', 'The world economic crisis that began in 1929.']],
  [
    { q: 'Explain three reasons for the failure of the League of Nations.', steps: ['**The USA, the strongest power, never joined.**', '**It had no army, so it relied on sanctions and the goodwill of Britain and France.**', '**The Depression and the aggression of Japan, Italy and Germany in the 1930s exposed its weakness.**'] },
  ]),

  // ---------- Dictatorships ----------
  L('hi-mussolini-5', 'hi-f5-dictators', '6.1', 'Mussolini and Italian Fascism', 14, ['World history'], [
    'Why Fascism rose in Italy: anger at the "mutilated victory" (Italy gained less than promised in 1919), economic crisis, strikes and fear of communism, and weak governments. **Benito Mussolini** founded the Fascist movement in 1919, with its black-shirted squads.',
    'After the **March on Rome** in **October 1922**, the king appointed Mussolini Prime Minister. By 1926 he had made Italy a **dictatorship**: other parties were banned, the press censored, and opponents arrested; the socialist deputy Matteotti was murdered in 1924.',
    'Features of Fascism: one party and one leader (Il Duce), propaganda and the cult of the leader, control of youth and education, the **corporate state** organising employers and workers, extreme nationalism and the glorification of war. The **Lateran Treaty** (1929) made peace with the Catholic Church. Abroad, Mussolini invaded **Abyssinia** (1935) and allied with Hitler in the Rome-Berlin Axis (1936).',
  ], 'hist-totalitarian', 'March on Rome 1922; dictatorship by 1926; Abyssinia 1935.',
  ['Mussolini’s title as leader was:', ['Il Duce', 'Führer', 'Lamido', 'Kaiser'], 'Hitler was the Führer.'],
  [['Fascism', 'An authoritarian, extreme nationalist system with one party and one leader.'], ['Corporate state', 'Mussolini’s system organising employers and workers under state control.'], ['Propaganda', 'Information used to promote a political cause.']],
  [
    { q: 'Explain why Mussolini was able to take power in Italy.', steps: ['**Italians were angry at the peace settlement and suffered economic crisis.**', '**Fear of communism made the middle classes, landowners and industrialists support the Fascists.**', '**Weak governments and the king’s decision after the March on Rome let him take office legally in 1922.**'] },
  ]),

  L('hi-hitler-5', 'hi-f5-dictators', '6.2', 'Hitler and Nazi Germany', 15, ['World history'], [
    'Why the Nazis rose: resentment of Versailles, the weakness of the Weimar Republic, the hyperinflation of 1923 and above all the **Great Depression** after 1929, which brought mass unemployment. **Adolf Hitler** led the Nazi Party (NSDAP) from 1921; after the failed Munich Putsch (1923) he wrote **Mein Kampf** and chose to win power through elections and propaganda.',
    'Steps to dictatorship: Hitler became **Chancellor** on **30 January 1933**; after the Reichstag fire, the **Enabling Act** (March 1933) let him make laws without parliament; other parties were banned; in the Night of the Long Knives (1934) he purged rivals; on Hindenburg’s death in August 1934 he became **Führer**.',
    'Features of Nazism: one party and the **Führer** cult, the **Gestapo** and the SS, propaganda, control of youth, **racism and antisemitism** (the Nuremberg Laws of 1935, leading to the Holocaust), rearmament and expansion: the Rhineland (1936), Austria (1938), the Sudetenland after the **Munich Agreement** (1938), and Czechoslovakia (1939).',
  ], 'hist-totalitarian', 'Depression to Chancellor (1933) to Enabling Act to Führer (1934).',
  ['The Enabling Act of 1933 allowed Hitler to:', ['pass laws without the Reichstag', 'leave the Nazi Party', 'join the League', 'free all prisoners'], 'It made him a legal dictator.'],
  [['Totalitarianism', 'A system in which the state controls every part of life.'], ['Antisemitism', 'Hatred of and discrimination against Jews.'], ['Appeasement', 'Giving in to demands to avoid war, as at Munich in 1938.']],
  [
    { q: 'Compare Italian Fascism and German Nazism.', steps: ['Similarities: **one party, a cult of the leader, propaganda, secret police, extreme nationalism and expansion by force.**', 'Differences: **Nazism placed racism and antisemitism at its centre, leading to genocide; Mussolini’s regime came to terms with the Church through the Lateran Treaty and was less complete in its control.**'] },
  ]),

  // ---------- WWII and the UN ----------
  L('hi-ww2-5', 'hi-f5-ww2un', '7.1', 'The Second World War (1939 to 1945)', 15, ['World history'], [
    'Causes: the resentment of Versailles, the failure of the League, **appeasement** by Britain and France, Hitler’s expansion, and the **Nazi-Soviet Pact** (August 1939), which freed Germany to attack Poland. Germany invaded **Poland on 1 September 1939**; Britain and France declared war on 3 September.',
    'Main stages:\n- 1939 to 1940: German **Blitzkrieg** conquers Poland, Denmark, Norway, the Low Countries and **France** (June 1940); Britain resists in the Battle of Britain\n- 1941: Germany invades the **USSR** (June); Japan attacks **Pearl Harbor** (7 December), bringing the USA into the war\n- 1942 to 1943: turning points at **Midway**, **El Alamein** and **Stalingrad**\n- 1944: **D-Day** landings in Normandy (6 June)\n- 1945: Germany surrenders (**8 May**); atomic bombs on **Hiroshima** (6 August) and Nagasaki (9 August); Japan surrenders (formally on 2 September).',
    'Consequences: tens of millions dead, including six million Jews in the Holocaust; Europe ruined and divided; the USA and USSR emerged as superpowers; colonial powers were weakened; and the **United Nations** was created.',
  ], 'hist-un-organs', 'Poland 1939, Pearl Harbor 1941, Stalingrad 1943, D-Day 1944, end 1945.',
  ['The Nazi-Soviet Pact of August 1939 was important because it:', ['allowed Germany to invade Poland without fearing the USSR', 'ended the war', 'created the UN', 'freed the colonies'], 'Stalin and Hitler agreed not to fight each other.'],
  [['Blitzkrieg', '"Lightning war": fast attacks with tanks and aircraft.'], ['Holocaust', 'The Nazi genocide of six million Jews and other victims.'], ['Superpower', 'A state with overwhelming military and economic power.']],
  [
    { q: 'Explain how the Second World War encouraged decolonisation in Africa.', steps: ['**The colonial powers, especially Britain and France, were weakened.**', '**African soldiers fought for freedom abroad and came home with new ideas.**', '**The Atlantic Charter and the new UN, and the anti-colonial USA and USSR, supported self-determination.**'] },
  ]),

  L('hi-uno-5', 'hi-f5-ww2un', '7.2', 'The United Nations Organisation', 15, ['World history'], [
    'The UN grew from wartime plans: the Atlantic Charter (1941), the Dumbarton Oaks talks (1944) and the Yalta Conference (1945). The **UN Charter** was signed at **San Francisco** on **26 June 1945** and came into force on **24 October 1945** with 51 members. The headquarters is in **New York**.',
    'Principal organs:\n- the **General Assembly**: all members, one vote each\n- the **Security Council**: 5 permanent members with a **veto** (the USA, the USSR, now Russia, China, Britain and France) and 10 elected members; responsible for peace and security\n- the **Economic and Social Council**\n- the **Trusteeship Council** (which supervised territories such as Cameroon)\n- the **International Court of Justice** at The Hague\n- the **Secretariat**, headed by the Secretary-General.\nSpecialised agencies include the WHO, UNESCO, the FAO and the ILO, and funds such as UNICEF.',
    'Achievements: peacekeeping missions, the **Universal Declaration of Human Rights** (1948), support for decolonisation, the eradication of smallpox, and help for refugees and children. Challenges: the **veto**, which often paralysed the Security Council during the Cold War; dependence on members for money and troops; and failure to prevent some conflicts.',
  ], 'hist-un-organs', 'Six organs; five permanent members with a veto.',
  ['The UN Charter was signed at:', ['San Francisco', 'Geneva', 'Versailles', 'Addis Ababa'], 'On 26 June 1945.'],
  [['Veto', 'The right of a permanent member to block a Security Council decision.'], ['Peacekeeping', 'UN forces sent to keep peace between parties to a conflict.'], ['Specialised agency', 'A UN body for a specific field, such as health or education.']],
  [
    { q: 'Compare the UN with the League of Nations.', steps: ['Similarities: **both aimed at peace and cooperation, with an assembly, a council, a secretariat and a court.**', 'Differences: **the UN includes the USA and the USSR from the start, its Security Council can order military action, and permanent members hold a veto; the League had no army and needed unanimity.**', 'Judgement: **the UN is stronger, but the veto has often blocked action.**'] },
  ]),

  // ---------- Cold War ----------
  L('hi-coldwar-5', 'hi-f5-coldwar', '8.1', 'The origins and blocs of the Cold War', 15, ['World history'], [
    'The **Cold War** was a long rivalry (about 1947 to 1991) between the **USA** and the **USSR** and their allies, fought by propaganda, arms races, aid and proxy wars rather than direct war. Its roots were **ideological**: **capitalism** and liberal democracy against **communism** and one-party rule. Wartime allies fell out over the future of Europe at the Yalta and Potsdam conferences (1945). In 1946 Churchill spoke of an "**iron curtain**" dividing Europe.',
    'Rival networks:\n- the **Truman Doctrine** (1947): US support for countries resisting communism (**containment**)\n- the **Marshall Plan**: US aid to rebuild Western Europe, answered by the Soviet **COMECON** (1949)\n- **NATO** (1949): the Western military alliance, answered by the **Warsaw Pact** (1955).',
    'The world became **bipolar**, and many newly independent states, including in Africa, joined the **Non-Aligned Movement** to avoid taking sides, while some African conflicts became proxy wars.',
  ], 'hist-cold-war', 'Marshall Plan against COMECON; NATO against the Warsaw Pact.',
  ['The policy of preventing the spread of communism was called:', ['containment', 'appeasement', 'assimilation', 'indirect rule'], 'Announced in the Truman Doctrine.'],
  [['Cold War', 'The rivalry between the USA and the USSR without direct war, 1947 to 1991.'], ['Containment', 'The US policy of stopping the spread of communism.'], ['Bipolar world', 'A world dominated by two superpowers.'], ['Proxy war', 'A war fought by others on behalf of rival powers.']],
  [
    { q: 'Match each Western measure with the Soviet response.', steps: ['**Marshall Plan (1947 to 1948) → COMECON (1949).**', '**NATO (1949) → Warsaw Pact (1955).**', '**Truman Doctrine (1947) → Soviet tightening of control over Eastern Europe (the Cominform, 1947).**'] },
  ]),

  L('hi-coldwarcrises-5', 'hi-f5-coldwar', '8.2', 'Cold War crises and the end of the Cold War', 15, ['World history'], [
    'The **Berlin Blockade** (June 1948 to May 1949): the USSR cut road and rail links to West Berlin to force the Western powers out; they supplied the city by the **Berlin airlift** until the blockade was lifted. In 1961 East Germany built the **Berlin Wall** to stop people fleeing west.',
    'The **Cuban Missile Crisis** (October 1962): the USSR placed nuclear missiles in Cuba; President **John F. Kennedy** imposed a naval "quarantine"; after thirteen tense days **Nikita Khrushchev** agreed to remove the missiles, and the USA promised not to invade Cuba (and secretly to remove its missiles from Turkey). The world came close to nuclear war; a "hotline" was set up afterwards.',
    'Other conflicts: the **Korean War** (1950 to 1953), the Vietnam War, and proxy wars in Africa, such as in Angola. The Cold War ended as reforms under **Mikhail Gorbachev** loosened Soviet control: the **Berlin Wall fell in November 1989**, Germany reunified in 1990, and the **USSR dissolved in December 1991**.',
  ], 'hist-cold-war', 'Berlin 1948 to 1949, Cuba 1962, the Wall falls 1989, the USSR ends 1991.',
  ['The Cuban Missile Crisis ended when:', ['the USSR agreed to remove its missiles from Cuba', 'the USA invaded Cuba', 'a nuclear war began', 'the UN expelled the USSR'], 'Khrushchev withdrew the missiles.'],
  [['Airlift', 'Supplying a place by air.'], ['Quarantine', 'Kennedy’s naval blockade of Cuba in 1962.'], ['Détente', 'A period of relaxed tension between the superpowers.']],
  [
    { q: 'Explain why the Cuban Missile Crisis was so dangerous, and how it ended.', steps: ['Danger: **Soviet nuclear missiles in Cuba could strike the USA within minutes, and a clash at sea could have started nuclear war.**', 'End: **after negotiation, Khrushchev removed the missiles; Kennedy promised not to invade Cuba and secretly agreed to remove US missiles from Turkey.**'] },
  ]),
];
