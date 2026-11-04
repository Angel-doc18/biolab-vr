// Extra questions for the end of the A Level History lessons (0760), so that
// every lesson ends with at least five questions on what it teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_U6 } from './lessonQuestionsU6';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, Term 1 ----------
  'ahi-method-1': [
    Q('A textbook written in 2010 about the German period is:', ['a secondary source', 'a primary source', 'an oral tradition', 'a treaty'], 'It interprets the past after the event.'),
    Q('Corroboration means:', ['checking a source against independent evidence', 'copying a source', 'rejecting every biased source', 'translating a source'], 'Agreement between independent sources raises confidence.'),
    Q('A biased source is still useful because it:', ['shows the views and purposes of its author', 'is always accurate', 'contains no opinions', 'replaces other evidence'], 'Bias is itself evidence.'),
    Q('The study of how historians’ interpretations change is called:', ['historiography', 'archaeology', 'chronology', 'genealogy'], 'Why historians disagree.'),
  ],
  'ahi-method-2': [
    Q('Causes that build up over many years are called:', ['long-term causes', 'triggers', 'consequences', 'short-term causes'], 'Distinguish them from the trigger.'),
    Q('The best answers on causation:', ['explain how causes interact and which mattered most', 'list causes in any order', 'describe only the trigger', 'avoid judgement'], 'Weighing is rewarded.'),
    Q('The partition of 1916 is a good example of:', ['an unintended long-term consequence', 'a trigger with no effects', 'a pre-colonial event', 'a consequence of independence'], 'A wartime convenience shaped the modern country.'),
    Q('A Level History Paper 1 consists of:', ['multiple-choice questions across the syllabus', 'one long essay', 'source questions only', 'map work only'], '1½ hours.'),
  ],
  'ahi-precol-1': [
    Q('The Fulani jihad that reached northern Cameroon was launched from:', ['Sokoto, by Usman dan Fodio', 'Foumban, by Njoya', 'Douala, by the Ngondo', 'Yaoundé, by Atangana'], '1804.'),
    Q('Modibo Adama’s emirate was called:', ['Adamawa', 'Bamum', 'Dahomey', 'Borno'], 'Its capital became Yola.'),
    Q('In a lamidat the Alkali was:', ['a judge applying Islamic law', 'the army commander', 'a tax collector only', 'a Christian missionary'], 'Sharia courts.'),
    Q('Sultan Njoya of Bamum is remembered for:', ['creating a script and building the palace at Foumban', 'signing the 1884 treaty', 'leading the UPC', 'founding Victoria'], 'Deposed by the French in 1931.'),
  ],
  'ahi-precol-2': [
    Q('Segmentary (acephalous) societies were governed by:', ['heads of lineages and assemblies of elders', 'a single king', 'a Lamido', 'European consuls'], 'The Beti, Bulu and Bassa, for example.'),
    Q('The assembly of the Duala chiefs was the:', ['Ngondo', 'Kwifon', 'Lukiko', 'Alkali'], 'Bell, Akwa and Deido.'),
    Q('"Trust" in the coastal trade meant:', ['goods advanced on credit to Duala middlemen', 'a church council', 'a land title', 'a peace treaty'], 'Repaid in palm oil or ivory.'),
    Q('Currencies used in pre-colonial markets included:', ['cowries, brass rods and manillas', 'euros and dollars', 'CFA francs', 'paper notes only'], 'Commodity money.'),
  ],
  'ahi-penetration-1': [
    Q('Britain signed anti-slave-trade treaties with the Duala kings in:', ['1840 and 1841', '1884 and 1885', '1914 and 1916', '1807 and 1808'], 'Goods in return for ending the trade.'),
    Q('Joseph Merrick opened a mission at Bimbia in 1844; he came from:', ['Jamaica', 'Germany', 'France', 'Portugal'], 'Baptist Missionary Society.'),
    Q('The Court of Equity at Douala (1856) settled:', ['trade disputes between traders and chiefs', 'land claims in Europe', 'religious disputes only', 'boundary disputes with Nigeria'], 'Credit and prices.'),
    Q('The Duala kings asked Queen Victoria to annex their country in:', ['1879 and 1881', '1840 and 1841', '1884 and 1885', '1858 and 1860'], 'Britain hesitated.'),
  ],
  'ahi-penetration-2': [
    Q('The Germano-Duala Treaty was signed on:', ['12 July 1884', '14 July 1884', '19 July 1884', '26 February 1885'], 'By Kings Bell and Akwa.'),
    Q('The German flag was raised on 14 July 1884 by:', ['Gustav Nachtigal', 'Edward Hewett', 'Alfred Saker', 'Jesko von Puttkamer'], 'He arrived on the Möwe.'),
    Q('Lock Priso of Hickory Town:', ['refused the treaty and favoured Britain', 'signed it first', 'became governor', 'founded the Basel Mission'], 'His town was attacked in December 1884.'),
    Q('In 1886 the Baptist missions in Cameroon passed to the:', ['Basel Mission', 'Catholic Pallottines only', 'Church of England', 'American Presbyterians only'], 'A German-speaking mission.'),
  ],
  'ahi-german-1': [
    Q('The governor most associated with harsh expansion from 1895 to 1907 was:', ['Jesko von Puttkamer', 'Julius von Soden', 'Theodor Seitz', 'Karl Ebermaier'], 'He moved the capital to Buea.'),
    Q('"New Kamerun" was added in 1911 after the:', ['second Moroccan (Agadir) crisis', 'Berlin Conference', 'First World War', 'Brazzaville Conference'], 'Ceded by France.'),
    Q('Concession companies such as Gesellschaft Süd-Kamerun received:', ['huge areas for rubber and ivory', 'the right to elect governors', 'control of schools', 'nothing'], 'Exclusive rights.'),
    Q('The Northern Railway built by the Germans ran from Douala to:', ['Nkongsamba', 'Garoua', 'Yaoundé', 'Kribi'], 'Completed in 1911.'),
  ],
  'ahi-german-2': [
    Q('Kuva Likenye led the resistance of the:', ['Bakweri', 'Bulu', 'Nso', 'Duala'], 'He defeated a German force at Buea in 1891.'),
    Q('The Bulu rose in 1899 to 1901 mainly because:', ['German traders took over their middleman trade', 'they wanted British rule', 'of the plebiscite', 'of the Depression'], 'Economic interest.'),
    Q('Rudolf Duala Manga Bell was hanged on:', ['8 August 1914', '12 July 1884', '27 September 1914', '1 January 1916'], 'With Adolf Ngoso Din.'),
    Q('A German ally against its neighbours in the Grassfields was the Fon of:', ['Bali-Nyonga', 'Nso', 'Kom', 'Bafut'], 'Divide and rule.'),
  ],
  'ahi-scramble-1': [
    Q('By 1914 the only independent African states were:', ['Ethiopia and Liberia', 'Egypt and Ghana', 'Morocco and Tunisia', 'Kamerun and Togo'], 'The rest was partitioned.'),
    Q('An enabling factor in the Scramble was:', ['quinine against malaria', 'the telephone', 'aircraft', 'the United Nations'], 'Europeans survived the tropics.'),
    Q('J.A. Hobson and Lenin explained imperialism mainly by:', ['capital seeking profitable investment', 'missionary zeal', 'African invitations', 'climate'], 'Economic interpretation.'),
    Q('France took Tunisia in:', ['1881', '1884', '1896', '1911'], 'One of the triggers.'),
  ],
  'ahi-scramble-2': [
    Q('The Berlin West Africa Conference was called by:', ['Bismarck', 'Queen Victoria', 'Napoleon III', 'King Leopold II'], 'With French support.'),
    Q('How many Africans took part in the Berlin Conference?', ['none', 'fourteen', 'one from each kingdom', 'all coastal kings'], 'Africa was decided without Africans.'),
    Q('The Berlin Act guaranteed free navigation on the:', ['Congo and Niger', 'Nile and Zambezi', 'Sanaga and Wouri', 'Rhine and Danube'], 'And free trade in the Congo basin.'),
    Q('The Anglo-French settlement after the Fashoda crisis came in:', ['1898', '1885', '1911', '1919'], 'Borders were drawn by bilateral treaties.'),
  ],
  'ahi-ww1-1': [
    Q('Douala fell to the Anglo-French force on:', ['27 September 1914', '1 January 1916', '18 February 1916', '4 March 1916'], 'Under General Dobell.'),
    Q('The French commander who converged on Yaoundé was:', ['General Joseph Aymerich', 'Philippe Leclerc', 'Charles Dobell', 'Carl Zimmermann'], 'Yaoundé was entered on 1 January 1916.'),
    Q('The last German post to surrender was:', ['Mora, on 18 February 1916', 'Garoua, in June 1915', 'Douala, in 1914', 'Buea, in 1915'], 'It held out on its hill.'),
    Q('The Ewondo chief who followed the Germans into exile was:', ['Charles Atangana', 'Sultan Njoya', 'Manga Bell', 'Lock Priso'], 'He returned after the war.'),
  ],
  'ahi-ww1-2': [
    Q('The provisional partition of 4 March 1916 gave France about:', ['four-fifths of the territory', 'half of the territory', 'only the north', 'one-fifth of the territory'], 'Including Douala and Yaoundé.'),
    Q('Germany renounced its overseas possessions under Article 119 of the:', ['Treaty of Versailles', 'Berlin Act', 'Lateran Treaty', 'UN Charter'], '28 June 1919.'),
    Q('Cameroon became a class B mandate, confirmed on:', ['20 July 1922', '10 July 1919', '13 December 1946', '4 March 1916'], 'Under the League.'),
    Q('The mandatory powers reported every year to the:', ['Permanent Mandates Commission', 'Trusteeship Council', 'Security Council', 'Reichstag'], 'League of Nations supervision.'),
  ],
  'ahi-europe19-1': [
    Q('The Industrial Revolution began in:', ['Britain, from about 1760', 'Germany, from about 1870', 'France, from about 1900', 'the USA, from about 1700'], 'Coal, iron and capital.'),
    Q('James Watt is associated with:', ['an improved steam engine', 'the spinning jenny', 'the Bessemer process', 'electricity'], 'Patented 1769.'),
    Q('The Communist Manifesto (1848) was written by:', ['Marx and Engels', 'Bismarck and Cavour', 'Hobson and Lenin', 'Watt and Arkwright'], 'A response to industrial society.'),
    Q('Palm oil was in demand in industrial Europe for:', ['soap and machine lubricants', 'steel making', 'building railways', 'paper money'], 'Link to the Duala trade.'),
  ],
  'ahi-europe19-2': [
    Q('The Italian unification was led politically by:', ['Count Cavour of Piedmont-Sardinia', 'Bismarck', 'Napoleon III', 'Metternich'], 'With Garibaldi and Victor Emmanuel II.'),
    Q('Garibaldi’s Thousand conquered:', ['Sicily and Naples in 1860', 'Rome in 1870', 'Venice in 1866', 'Lombardy in 1859'], 'Handed to Victor Emmanuel II.'),
    Q('Prussia’s three wars of unification were against:', ['Denmark, Austria and France', 'Russia, Britain and Italy', 'Spain, Portugal and Sweden', 'the Ottoman Empire, Greece and Serbia'], '1864, 1866, 1870 to 1871.'),
    Q('The German customs union led by Prussia was the:', ['Zollverein', 'Reichstag', 'Kulturkampf', 'Bund'], 'Founded in 1834.'),
  ],
  'ahi-resistance-1': [
    Q('Samori Touré was captured in:', ['1898', '1882', '1894', '1900'], 'He died in exile in Gabon in 1900.'),
    Q('Behanzin was King of:', ['Dahomey', 'Ashanti', 'Mali', 'Ethiopia'], 'From 1889.'),
    Q('Behanzin’s army was noted for including:', ['women soldiers', 'German officers', 'British cavalry', 'no firearms at all'], 'A standing army.'),
    Q('The African troops recruited by the French were called:', ['tirailleurs', 'askaris', 'squadristi', 'Schutztruppe'], 'They fought in the conquest.'),
  ],
  'ahi-resistance-2': [
    Q('The treaty whose Article 17 caused the war of 1895 to 1896 was the Treaty of:', ['Wuchale', 'Addis Ababa', 'Berlin', 'Versailles'], 'Amharic "could", Italian "must".'),
    Q('The Battle of Adwa was fought on:', ['1 March 1896', '12 July 1884', '1 March 1916', '3 October 1935'], 'An Italian defeat.'),
    Q('The Italian commander at Adwa was:', ['General Oreste Baratieri', 'Mussolini', 'Garibaldi', 'Badoglio'], 'His columns were separated.'),
    Q('Adwa’s wider significance was that it:', ['became a symbol of African dignity for Pan-Africanists', 'ended Italian ambitions for ever', 'created the League', 'gave Ethiopia Eritrea'], 'Italy invaded again in 1935.'),
  ],

  // ---------- Lower Sixth, Term 2 ----------
  'ahi-british-1': [
    Q('Britain governed its share of Cameroon:', ['as part of Nigeria', 'as part of the Gold Coast', 'from Yaoundé', 'as a separate colony from the start'], 'An administrative union.'),
    Q('Indirect rule is most associated with:', ['Lord Lugard', 'Félix Éboué', 'Jesko von Puttkamer', 'Gaston Defferre'], 'Nigeria.'),
    Q('Native treasuries under indirect rule:', ['kept part of the tax for local works', 'paid the British army', 'sent all money to London', 'were run by missions'], 'Local government finance.'),
    Q('A Cameroonian nominated to the Nigerian legislature in 1942 was:', ['Chief Manga Williams of Victoria', 'John Ngu Foncha', 'Ruben Um Nyobè', 'Ahmadou Ahidjo'], 'Representation was minimal.'),
  ],
  'ahi-british-2': [
    Q('The German-owned plantations in Southern Cameroons were confiscated again in:', ['1939', '1924', '1946', '1961'], 'As enemy property.'),
    Q('After the war the plantations passed to the:', ['Cameroon Development Corporation', 'Basel Mission', 'UPC', 'French state'], 'CDC.'),
    Q('The Cameroons Youth League was founded in 1940 in:', ['Lagos', 'Buea', 'Douala', 'London'], 'By students including P.M. Kale and E.M.L. Endeley.'),
    Q('A common complaint about British rule was:', ['neglect within Nigeria', 'too much investment', 'harsh forced labour like the French', 'too many Cameroonian ministers'], 'Few roads and schools.'),
  ],
  'ahi-french-1': [
    Q('Educated Africans who could become French citizens were called:', ['évolués', 'indigènes', 'pieds-noirs', 'tirailleurs'], 'Very few in Cameroun.'),
    Q('The indigénat allowed administrators to:', ['punish Africans without trial', 'elect deputies', 'abolish taxes', 'run schools'], 'Fines and short prison terms.'),
    Q('The railway from Douala to Yaoundé was completed in:', ['1927', '1911', '1946', '1960'], 'Built with forced labour.'),
    Q('Sultan Njoya was deposed by the French in:', ['1931', '1916', '1945', '1922'], 'Exiled to Yaoundé.'),
  ],
  'ahi-french-2': [
    Q('Under French rule, coffee was grown mainly in:', ['the west and the Littoral', 'the far north', 'the Sahara', 'Fernando Po'], 'Cocoa in the centre and south.'),
    Q('Dr Eugène Jamot used:', ['mobile teams to examine and treat people in villages', 'only hospitals in Paris', 'vaccines against polio', 'aircraft to spray towns'], 'Against sleeping sickness.'),
    Q('JEUCAFRA (1938) was organised to:', ['oppose Nazi claims for the return of Cameroon', 'demand independence', 'support Germany', 'run plantations'], 'French-sponsored.'),
    Q('Compared with the British zone, the French zone had:', ['more investment and harsher coercion', 'less investment and less coercion', 'indirect rule through emirs', 'no forced labour'], 'The usual comparison.'),
  ],
  'ahi-depression-1': [
    Q('Black Thursday, the start of the Wall Street Crash, was:', ['24 October 1929', '29 October 1931', '30 January 1933', '11 November 1918'], 'Followed by Black Tuesday, 29 October.'),
    Q('Buying shares "on the margin" meant:', ['buying with borrowed money', 'buying only gold', 'selling to the government', 'buying farmland'], 'Speculation.'),
    Q('The Austrian bank whose failure in 1931 spread the crisis was the:', ['Creditanstalt', 'Bank of England', 'Reichsbank', 'Banque de France'], 'German banks followed.'),
    Q('Roosevelt’s response to the Depression was the:', ['New Deal', 'Marshall Plan', 'Dawes Plan', 'Ottawa Agreement'], 'From 1933.'),
  ],
  'ahi-depression-2': [
    Q('Colonial governments lost revenue in the Depression because:', ['they lived on customs duties from falling trade', 'taxes were abolished', 'the League took their money', 'they had too many exports'], 'Spending was cut.'),
    Q('The cocoa hold-up of 1937 to 1938 took place in:', ['the Gold Coast', 'Cameroun', 'Kenya', 'Algeria'], 'Farmers refused to sell.'),
    Q('To keep public works going during the Depression, the French in Cameroun relied more on:', ['prestation and forced labour', 'paid European workers', 'American loans', 'machines'], 'Labour instead of money.'),
    Q('Dependence on one main export crop is called:', ['monoculture', 'diversification', 'industrialisation', 'protectionism'], 'It made colonies vulnerable.'),
  ],
  'ahi-dictators-1': [
    Q('Italians called the peace settlement a "mutilated victory" because:', ['their territorial claims were refused', 'they lost the war', 'they lost Rome', 'they gained too much'], 'Dalmatia and Fiume.'),
    Q('The Acerbo Law of 1923:', ['rigged the electoral system in Fascist favour', 'abolished the monarchy', 'made peace with the Pope', 'invaded Ethiopia'], 'Two-thirds of seats for the largest party.'),
    Q('The socialist deputy murdered by Fascists in 1924 was:', ['Giacomo Matteotti', 'Antonio Gramsci', 'Cavour', 'Garibaldi'], 'The Matteotti crisis.'),
    Q('The Lateran Treaty (1929) settled relations between Mussolini and the:', ['Pope', 'King', 'Germans', 'British'], 'The Vatican City.'),
  ],
  'ahi-dictators-2': [
    Q('Hitler became Chancellor on:', ['30 January 1933', '27 February 1933', '2 August 1934', '1 September 1939'], 'Appointed by Hindenburg.'),
    Q('German hyperinflation reached its peak in:', ['1923', '1929', '1933', '1919'], 'Savings were wiped out.'),
    Q('The Nuremberg Laws of 1935:', ['took citizenship from German Jews', 'gave women the vote', 'ended rearmament', 'restored the Weimar Republic'], 'Racial persecution.'),
    Q('Nazism was built on race; Stalinism was built on:', ['class', 'religion', 'monarchy', 'free markets'], 'Different ideologies, similar methods.'),
  ],
  'ahi-league-1': [
    Q('The League of Nations had its headquarters in:', ['Geneva', 'New York', 'Paris', 'London'], 'From 1920.'),
    Q('Article 16 of the Covenant provided for:', ['economic sanctions against an aggressor', 'mandates', 'disarmament of Germany', 'a League army'], 'In theory, also military action.'),
    Q('A League success in 1921 was the settlement of the:', ['Aaland Islands dispute', 'Manchurian crisis', 'Ethiopian crisis', 'Corfu incident'], 'Between Finland and Sweden.'),
    Q('The idea that members act together against any aggressor is:', ['collective security', 'appeasement', 'isolationism', 'the balance of power'], 'The League’s principle.'),
  ],
  'ahi-league-2': [
    Q('The Lytton Report concerned:', ['Japan’s seizure of Manchuria', 'Italy’s invasion of Ethiopia', 'the Rhineland', 'the Saar'], 'Japan left the League in 1933.'),
    Q('The secret plan of December 1935 offering Italy much of Ethiopia was the:', ['Hoare-Laval Pact', 'Munich Agreement', 'Locarno Treaty', 'Kellogg-Briand Pact'], 'It leaked and discredited Britain and France.'),
    Q('Italy invaded Ethiopia in:', ['October 1935', 'September 1931', 'March 1936', 'August 1939'], 'After the Walwal incident.'),
    Q('The League was formally dissolved in:', ['April 1946', 'September 1939', 'October 1945', 'June 1950'], 'Replaced by the UN.'),
  ],
  'ahi-ww2cam-1': [
    Q('The Governor who rallied Chad to Free France on 26 August 1940 was:', ['Félix Éboué', 'Philippe Leclerc', 'Pierre Boisson', 'Gaston Defferre'], 'First of French Africa.'),
    Q('Leclerc reached Douala by crossing:', ['by canoe from Victoria in British Cameroons', 'by train from Yaoundé', 'by air from London', 'overland from Chad'], 'With a few men.'),
    Q('Leclerc’s column, which included Cameroonians, took Kufra in Libya in:', ['1941', '1940', '1944', '1945'], 'An early Free French victory.'),
    Q('Cameroonians from the British zone served in the Nigeria Regiment as far away as:', ['Burma', 'Brazil', 'Canada', 'Norway'], 'The war against Japan.'),
  ],
  'ahi-ww2cam-2': [
    Q('Trade unions became legal in French Africa in:', ['1944', '1936', '1948', '1956'], 'A decree of August 1944.'),
    Q('Wartime pressures in Douala exploded in the:', ['strikes and riots of September 1945', 'UPC ban of 1955', 'plebiscite of 1961', 'coup of 1984'], 'Inflation and low wages.'),
    Q('The Atlantic Charter (1941) spoke of:', ['the right of peoples to choose their government', 'the return of German colonies', 'forced labour', 'apartheid'], 'Nationalists quoted it.'),
    Q('In the British zone after the war, the Bakweri began to claim back:', ['their land from the plantations', 'their German citizenship', 'the capital Buea from Nigeria', 'the port of Douala'], 'The Bakweri land question.'),
  ],
  'ahi-brazzaville-1': [
    Q('The Brazzaville Conference was opened by:', ['Charles de Gaulle', 'Philippe Pétain', 'Félix Houphouët-Boigny', 'Winston Churchill'], 'January 1944.'),
    Q('Who took part in the Brazzaville Conference?', ['the governors of French Africa, but no elected Africans', 'elected African deputies only', 'the UN Trusteeship Council', 'German officials'], 'Africans were absent.'),
    Q('Brazzaville recommended that forced labour and the indigénat should be:', ['ended over time', 'extended', 'kept for ever', 'given to the chiefs'], 'Ended in 1946.'),
    Q('Schools under the Brazzaville recommendations were to teach in:', ['French', 'local languages only', 'English', 'Arabic'], 'Assimilation in education.'),
  ],
  'ahi-brazzaville-2': [
    Q('The Lamine Guèye law of May 1946:', ['made all inhabitants of the overseas territories citizens', 'ended forced labour', 'created the UPC', 'banned trade unions'], 'Citizenship.'),
    Q('Cameroun’s elected Representative Assembly of 1946 was called:', ['ARCAM', 'ALCAM', 'ATCAM', 'CNU'], 'It became ATCAM in 1952.'),
    Q('FIDES was:', ['a development fund for roads, ports and schools', 'a political party', 'a trade union', 'a UN agency'], 'From 1946.'),
    Q('The double college meant that:', ['Europeans and Africans voted on separate rolls', 'two assemblies met together', 'there were two governors', 'every voter had two votes'], 'Small European minority, great weight.'),
  ],
  'ahi-trust-1': [
    Q('Article 76 of the UN Charter set the aim of:', ['progress towards self-government or independence', 'permanent colonial rule', 'return to Germany', 'union with Nigeria'], 'Trusteeship objectives.'),
    Q('Under trusteeship, petitions could be:', ['written or presented in person at the UN', 'only written through the governor', 'sent only to Paris', 'forbidden'], 'A key change.'),
    Q('UN visiting missions toured the Cameroons in:', ['1949, 1952, 1955 and 1958', '1922 and 1939', '1961 only', 'never'], 'Inspection on the ground.'),
    Q('Um Nyobè first spoke at the UN in:', ['1952', '1948', '1960', '1945'], 'Before the Fourth Committee.'),
  ],
  'ahi-trust-2': [
    Q('The mandate system rested on Article 22 of the:', ['League Covenant', 'UN Charter', 'Berlin Act', 'Atlantic Charter'], 'Trusteeship on chapter XII of the Charter.'),
    Q('Under both systems the administering powers in Cameroon were:', ['Britain and France', 'Germany and France', 'the USA and the USSR', 'Nigeria and Chad'], 'Continuity.'),
    Q('Unlike the mandate, trusteeship introduced:', ['regular visiting missions', 'annual reports', 'British rule with Nigeria', 'French rule'], 'Stronger supervision.'),
    Q('The body that supervised trust territories was the:', ['Trusteeship Council', 'Permanent Mandates Commission', 'Security Council', 'Reichstag'], 'A principal organ of the UN.'),
  ],

  // ---------- Lower Sixth, Term 3 ----------
  'ahi-unions-1': [
    Q('The French teacher whose study circle in Yaoundé trained future leaders was:', ['Gaston Donnat', 'Roland Pré', 'Eugène Jamot', 'Louis-Paul Aujoulat'], 'Um Nyobè attended.'),
    Q('The USCC was led by:', ['Jacques Ngom', 'Ahmadou Ahidjo', 'Paul Soppo Priso', 'E.M.L. Endeley'], 'Linked to the CGT.'),
    Q('The Douala riots of September 1945 took place on:', ['24 and 25 September', '10 and 11 April', '22 and 30 May', '1 and 2 October'], 'Settlers fired on Africans.'),
    Q('The Douala strike began among:', ['railway workers', 'cocoa farmers', 'soldiers', 'students'], 'Over pay and the cost of living.'),
  ],
  'ahi-unions-2': [
    Q('JEUCAFRA (1938) was led by men such as:', ['Paul Soppo Priso', 'Ruben Um Nyobè', 'John Ngu Foncha', 'Félix Moumié'], 'Sponsored by the French.'),
    Q('The Kumsze association (1947) was based in the:', ['Bamileke region', 'far north', 'Duala coast', 'Southern Cameroons'], 'Led by Mathias Djoumessi.'),
    Q('RACAM (1947) was:', ['a radical movement soon banned by the administration', 'the French governor’s council', 'a plantation company', 'the UN agency for Cameroon'], 'Rassemblement Camerounais.'),
    Q('The UPC affiliated to the:', ['Rassemblement Démocratique Africain', 'Convention People’s Party', 'Kamerun National Congress', 'Cameroon National Union'], 'The RDA.'),
  ],
  'ahi-essay-1': [
    Q('PEEL stands for:', ['Point, Evidence, Explanation, Link', 'Plan, Essay, End, Last', 'People, Events, Era, Legacy', 'Primary, External, Evidence, List'], 'A paragraph structure.'),
    Q('The judgement of an essay should be decided:', ['before you start writing', 'only in the last minute', 'never', 'by the examiner'], 'It shapes the order of paragraphs.'),
    Q('A conclusion that "sits on the fence":', ['loses marks because it gives no judgement', 'earns full marks', 'is required', 'is a counter-argument'], 'Answer the question.'),
    Q('A thesis is stated in the:', ['introduction', 'footnotes', 'title only', 'bibliography'], 'Your answer, up front.'),
  ],
  'ahi-essay-2': [
    Q('The usefulness of a source always depends on:', ['the question being asked', 'its length', 'its age only', 'its language'], 'Value is relative.'),
    Q('When comparing two sources you should explain differences by their:', ['authors, purposes, dates or audiences', 'length and paper', 'colour and font', 'number of words'], 'Origin and purpose.'),
    Q('Oral traditions are especially valuable for:', ['societies with few written records', 'modern government statistics', 'European treaties', 'nothing'], 'They can be tested by comparison.'),
    Q('"Biased, so useless" is a weak judgement because:', ['a biased source is good evidence of its author’s views', 'all sources are neutral', 'bias does not exist', 'examiners prefer it'], 'Use bias as evidence.'),
  ],

  ...QUESTIONS_U6,
};
