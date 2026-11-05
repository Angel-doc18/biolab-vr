// History figures for Form 3: Africa before the scramble, explorers, the
// causes and tools of the scramble, the Berlin Conference, colonial methods,
// African reactions, the annexation of Cameroon, German administration,
// economy and social policy, the Kamerun campaign, the partition, the
// mandate, British and French rule compared, the First World War, Versailles,
// the League of Nations, the dictators, the Second World War, Brazzaville,
// the United Nations, trusteeship and a revision timeline.
import { columnsSpec, flowSpec, treeSpec } from './charts';

export const HISTORY_F3 = {
  'hist3-africa1800s': treeSpec('Africa in the nineteenth century', 'African states', [
    { name: 'Savanna', items: ['Sokoto', 'Bornu', 'lamidats'] },
    { name: 'Forest', items: ['Asante', 'Dahomey', 'Douala kings'] },
    { name: 'East, south', items: ['Ethiopia', 'Zulu', 'Buganda'] },
    { name: 'Grassfields', items: ['Bamum', 'Nso, Bafut', 'Bali-Nyonga'] },
  ], { colW: 96 }),
  'hist3-explorers': columnsSpec('Explorers of Africa', [
    { head: 'Explorer', items: ['Mungo Park', 'René Caillié', 'the Lander brothers', 'Heinrich Barth', 'David Livingstone'] },
    { head: 'Journey', items: ['the Niger, 1795 to 1806', 'Timbuktu, 1828', 'Niger mouth, 1830', 'Sahara, Chad, 1850s', 'south and centre, to 1873'] },
  ], { colW: 150, arrow: true }),
  'hist3-scramble': treeSpec('Causes of the scramble for Africa', 'The scramble (1880 to 1914)', [
    { name: 'Economic', items: ['raw materials', 'markets', 'investment'] },
    { name: 'Political', items: ['prestige', 'rivalry'] },
    { name: 'Strategic', items: ['Suez Canal', 'routes to India'] },
    { name: 'Humanitarian', items: ['missions', 'civilising claim'] },
  ], { colW: 96 }),
  'hist3-scramble-tools': columnsSpec('What made the scramble possible', [
    { head: 'Technology', items: ['quinine', 'steamships', 'Maxim gun', 'telegraph'] },
    { head: 'Triggers', items: ['Leopold, Congo', 'France, Tunisia 1881', 'Britain, Egypt 1882', 'Germany, 1884'] },
  ], { colW: 150 }),
  'hist3-berlin': columnsSpec('The Berlin Conference (1884 to 1885)', [
    { head: 'Who', items: ['Bismarck hosted', '14 states', 'no Africans'] },
    { head: 'Rules', items: ['effective occupation', 'notification', 'free navigation'] },
    { head: 'Decisions', items: ['Congo Free State', 'Niger, Congo open', 'end slave trade'] },
  ], { colW: 118 }),
  'hist3-berlin-impact': flowSpec('From Berlin to conquest', ['Rules agreed\nin Berlin', 'Rush to sign\ntreaties', 'Troops and\nofficials sent', 'Artificial\nborders drawn'], { boxW: 116, perRow: 2 }),
  'hist3-acquisition': treeSpec('How Europeans acquired colonies', 'Colonial acquisition', [
    { name: 'Treaties', items: ['protection', 'Germano-Duala'] },
    { name: 'Trickery', items: ['misleading', 'Rudd Concession'] },
    { name: 'Companies', items: ['Royal Niger', 'Company'] },
    { name: 'Conquest', items: ['Benin 1897', 'Sokoto 1903'] },
  ], { colW: 96 }),
  'hist3-conquest': columnsSpec('Why European armies won', [
    { head: 'Weapons', items: ['machine guns', 'rifles, artillery'] },
    { head: 'Means', items: ['steamships', 'telegraph'] },
    { head: 'People', items: ['African soldiers', 'African allies'] },
    { head: 'Tactics', items: ['divide and rule', 'punitive raids'] },
  ], { colW: 92 }),
  'hist3-reactions': columnsSpec('African reactions', [
    { head: 'Collaboration', items: ['Lewanika', 'Galega I of Bali', 'some Douala chiefs'] },
    { head: 'Resistance in Africa', items: ['Samori Touré', 'Menelik II, Adwa', 'Maji Maji'] },
    { head: 'Resistance in Cameroon', items: ['Lock Priso', 'Kuva Likenye', 'Manga Bell'] },
  ], { colW: 120 }),
  'hist3-resistance': columnsSpec('Why most resistance failed, and why it mattered', [
    { head: 'Failed because', items: ['European weapons', 'Africans divided', 'local, separate risings'] },
    { head: 'Mattered because', items: ['defended freedom', 'Ethiopia stayed free', 'inspired nationalists'] },
  ], { colW: 150 }),
  'hist3-annexation': flowSpec('The annexation of Cameroon', ['1879, 1881: kings\nwrite to Britain', 'Britain\ndelays', '12 July 1884:\nthe treaty', '14 July:\nNachtigal’s flag', '19 July:\nHewett too late'], { boxW: 108 }),
  'hist3-german-admin': flowSpec('The German governors', ['von Soden\n1885 to 1891', 'von Zimmerer\n1891 to 1895', 'von Puttkamer\n1895 to 1907', 'Seitz, Gleim\n1907 to 1912', 'Ebermaier\n1912 to 1916'], { boxW: 108 }),
  'hist3-german-chiefs': columnsSpec('The Germans and traditional rulers', [
    { head: 'Chiefs did', items: ['collect head tax', 'recruit labour', 'keep order'] },
    { head: 'Where', items: ['Lamibe in the north', 'Fons in Grassfields', 'appointed chiefs in forest'] },
  ], { colW: 150 }),
  'hist3-german-economy': columnsSpec('The German colonial economy', [
    { head: 'Plantations', items: ['cocoa, rubber', 'bananas, oil palm', 'Bakweri land taken'] },
    { head: 'Concessions', items: ['rubber, ivory', 'south and east'] },
    { head: 'Labour', items: ['forced labour', 'porterage', 'head tax'] },
  ], { colW: 118 }),
  'hist3-infrastructure': columnsSpec('German infrastructure', [
    { head: 'Railways', items: ['Northern: Bonaberi', 'to Nkongsamba (1911)', 'Central: towards', 'Yaoundé'] },
    { head: 'Ports, roads', items: ['Douala', 'Victoria', 'Kribi', 'roads, telegraph'] },
    { head: 'Research', items: ['Victoria botanic', 'garden (1892)'] },
  ], { colW: 118 }),
  'hist3-german-social': columnsSpec('Social developments under the Germans', [
    { head: 'Missions', items: ['Basel (1886)', 'Pallottines (1890)', 'Presbyterians'] },
    { head: 'Schools', items: ['first state school', 'Douala, 1888', 'German taught'] },
    { head: 'Health', items: ['hospitals', 'sleeping sickness', 'for workers'] },
  ], { colW: 118 }),
  'hist3-kamerun-campaign': flowSpec('The Kamerun campaign (1914 to 1916)', ['27 Sept 1914:\nDouala falls', 'June 1915:\nGaroua falls', '1 Jan 1916:\nYaoundé falls', 'Retreat to\nSpanish Guinea', '18 Feb 1916:\nMora surrenders'], { boxW: 108 }),
  'hist3-partition': columnsSpec('The partition of Cameroon (1916 to 1922)', [
    { head: 'French Cameroun', items: ['about four-fifths', 'Douala, Yaoundé', 'ruled directly'] },
    { head: 'British Cameroons', items: ['about one-fifth', 'Northern, Southern', 'ruled with Nigeria'] },
    { head: 'Milestones', items: ['1916 Picot line', '1919 Milner-Simon', '1922 mandates'] },
  ], { colW: 118 }),
  'hist3-mandate': columnsSpec('The mandate system (Article 22)', [
    { head: 'Class A', items: ['Iraq, Syria', 'Lebanon, Palestine', 'near independence'] },
    { head: 'Class B', items: ['Cameroon, Togo', 'Tanganyika', 'Ruanda-Urundi'] },
    { head: 'Class C', items: ['South-West Africa', 'Pacific islands', 'almost annexed'] },
  ], { colW: 118 }),
  'hist3-british-rule': treeSpec('Indirect rule in British Cameroons', 'British officers', [
    { name: 'Native authority', items: ['traditional', 'rulers'] },
    { name: 'Native courts', items: ['customary', 'law'] },
    { name: 'Native treasury', items: ['local taxes', 'and services'] },
  ], { colW: 112 }),
  'hist3-french-rule': columnsSpec('French rule in Cameroun', [
    { head: 'System', items: ['direct rule', 'from Yaoundé', 'chiefs as auxiliaries'] },
    { head: 'Policy', items: ['assimilation', 'citizens, subjects', 'évolués'] },
    { head: 'Burdens', items: ['indigénat', 'prestation', 'forced cultivation'] },
  ], { colW: 118 }),
  'hist3-compare': columnsSpec('British and French Cameroon compared', [
    { head: 'British Cameroons', items: ['indirect rule', 'part of Nigeria', 'milder', 'neglected', 'English, common law'] },
    { head: 'French Cameroun', items: ['direct rule', 'from Yaoundé', 'harsher', 'more investment', 'French, civil law'] },
  ], { colW: 150 }),
  'hist3-ww1': columnsSpec('The First World War (1914 to 1918)', [
    { head: 'Long-term causes', items: ['militarism', 'alliances', 'imperialism', 'nationalism'] },
    { head: 'Allies', items: ['Britain, France', 'Russia', 'Italy (1915)', 'USA (1917)'] },
    { head: 'Central Powers', items: ['Germany', 'Austria-Hungary', 'Ottoman Empire', 'Bulgaria'] },
  ], { colW: 118 }),
  'hist3-versailles': columnsSpec('The Treaty of Versailles (28 June 1919)', [
    { head: 'Blame and pay', items: ['war guilt (231)', 'reparations'] },
    { head: 'Disarm', items: ['army 100 000', 'no air force', 'Rhineland empty'] },
    { head: 'Lose land', items: ['Alsace-Lorraine', 'Polish Corridor', 'all colonies'] },
  ], { colW: 118 }),
  'hist3-league': columnsSpec('The League of Nations (1920 to 1946)', [
    { head: 'Organs', items: ['Assembly', 'Council', 'Secretariat', 'Court, ILO'] },
    { head: 'Successes', items: ['Åland Islands', 'refugees', 'health'] },
    { head: 'Failures', items: ['no USA, no army', 'Manchuria 1931', 'Abyssinia 1935'] },
  ], { colW: 118 }),
  'hist3-dictators': flowSpec('Hitler’s steps to war', ['1936:\nRhineland', 'March 1938:\nAnschluss', 'Sept 1938:\nMunich', 'March 1939:\nCzechoslovakia', '1 Sept 1939:\nPoland'], { boxW: 108 }),
  'hist3-ww2': columnsSpec('The Second World War (1939 to 1945)', [
    { head: 'Axis', items: ['Germany', 'Italy', 'Japan'] },
    { head: 'Key events', items: ['Poland, 1939', 'Pearl Harbor, 1941', 'D-Day, 1944', 'surrender, 1945'] },
    { head: 'Africa', items: ['tirailleurs, RWAFF', 'rubber, timber', 'Cameroun for Free', 'France (1940)'] },
  ], { colW: 118 }),
  'hist3-brazzaville': columnsSpec('The Brazzaville Conference (1944)', [
    { head: 'Recommended', items: ['end the indigénat', 'end forced labour', 'representation', 'development'] },
    { head: 'Rejected', items: ['self-government', 'independence'] },
    { head: 'Led to', items: ['1946 reforms', 'elections, ARCAM', 'unions, the UPC'] },
  ], { colW: 118 }),
  'hist3-uno': treeSpec('The main organs of the United Nations', 'The UN (1945)', [
    { name: 'General Assembly', items: ['all members'] },
    { name: 'Security Council', items: ['15 members', '5 with veto'] },
    { name: 'Secretariat', items: ['Secretary-', 'General'] },
    { name: 'Others', items: ['Court of Justice', 'ECOSOC', 'Trusteeship'] },
  ], { colW: 100 }),
  'hist3-trusteeship': columnsSpec('Mandate and trusteeship compared', [
    { head: 'Mandate', items: ['League of Nations', 'Mandates Commission', 'no goal of freedom', 'no visits', 'petitions via power'] },
    { head: 'Trusteeship', items: ['United Nations', 'Trusteeship Council', 'self-government', 'visiting missions', 'direct petitions'] },
  ], { colW: 150, arrow: true }),
  'hist3-review': flowSpec('Cameroon from 1884 to 1946', ['1884:\nGerman treaty', '1916:\npartition', '1922:\nmandates', '1940:\nFree France', '1946:\ntrusteeship'], { boxW: 104 }),
};
