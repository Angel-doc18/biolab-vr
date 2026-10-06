// Geography lessons for Form 2, following the MINESEC harmonised scheme: term 1
// the Earth in space and the physical framework of Africa; term 2 population
// dynamics and settlements; term 3 resource exploitation, trade and sustainable
// development. Examples are drawn from Cameroon and its neighbours. Original
// text written for this app. **double asterisks** mark key terms. `examples`
// are worked examples.

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

export const LESSONS_2 = [
  // ---------- The Earth's movements ----------
  L('ge-rotation-2', 'ge-f2-movements', '1.1', 'The rotation of the Earth', 9, ['Earth in space'], [
    'The Earth spins on its **axis**, an imaginary line through the North and South Poles. This spinning is called **rotation**. The Earth rotates from **west to east**, and makes one complete turn in about **24 hours** (one day). The axis is **tilted** at about 23½° from the upright.',
    'Rotation causes **day and night**: the half of the Earth facing the Sun has day, and the half turned away has night. As the Earth turns, places move from night into day (**sunrise**) and from day into night (**sunset**).',
    'Because the Earth turns from west to east, the Sun **appears** to rise in the east, cross the sky and set in the west, although it is the Earth that moves. For the same reason, places further **east** see the Sun rise **earlier**, so **time differs** from place to place.',
    'Rotation also **bends** the direction of winds and ocean currents (to the right in the Northern Hemisphere and to the left in the Southern Hemisphere), and together with the pull of the Moon it causes the daily rise and fall of the **tides**.',
  ], 'earth-orbit-seasons', 'Rotation = **spinning** on the axis (24 hours: **day and night**). Revolution = **moving round the Sun** (365¼ days: **seasons**).',
  ['Day and night are caused by:', ['The rotation of the Earth', 'The revolution of the Earth', 'The tilt of the Moon', 'The movement of the Sun round the Earth'], 'As the Earth spins, each place turns towards the Sun and then away from it.'],
  [['Axis', 'The imaginary line through the poles about which the Earth spins.'], ['Rotation', 'The spinning of the Earth on its axis, once in about 24 hours.']],
  [
    { q: 'Explain why the Sun rises earlier in Bertoua than in Douala.', steps: ['The Earth rotates from **west to east**.', 'Bertoua (about 13.7°E) lies **east** of Douala (about 9.7°E).', 'So Bertoua turns into the sunlight **before** Douala, and sunrise there is about 16 minutes earlier (4° × 4 minutes).'] },
  ]),

  L('ge-revolution-2', 'ge-f2-movements', '1.2', 'The revolution of the Earth and the seasons', 10, ['Earth in space'], [
    'While it spins, the Earth also moves round the Sun along an oval path, its **orbit**. One complete journey is a **revolution** and takes about **365¼ days** (one year). Calendars use 365 days, so every fourth year an extra day, **29 February**, is added: this is a **leap year**. A year divisible by 4 is a leap year, except century years, which must be divisible by 400 (2000 was a leap year, 1900 was not).',
    'Because the axis is **tilted** and always points the same way in space, each hemisphere leans **towards** the Sun for part of the year and **away** from it for another part. This, with revolution, causes the **seasons**, the changing **length of day and night**, and the change in the height of the midday Sun.',
    'On about **21 June** the Northern Hemisphere leans most towards the Sun: the Sun is overhead at noon on the **Tropic of Cancer**; it is the **summer solstice** in the north, with the longest day, and winter in the south. On about **22 December** the Sun is overhead on the **Tropic of Capricorn**: summer in the Southern Hemisphere and winter in the north.',
    'On about **21 March** and **23 September**, the **equinoxes**, the Sun is overhead at the **Equator** and day and night are **equal** (12 hours each) everywhere. Near the Equator, as in Cameroon, temperatures stay high all year and day length changes very little, so seasons are marked by **rainfall** (wet and dry seasons) rather than by summer and winter.',
  ], 'earth-orbit-seasons', 'Remember the four dates: **21 March** and **23 September** (equinoxes, Sun over the Equator), **21 June** (over Cancer), **22 December** (over Capricorn).',
  ['On about 21 June the midday Sun is overhead at the:', ['Tropic of Cancer', 'Tropic of Capricorn', 'Equator', 'Arctic Circle'], 'This is the June solstice, summer in the Northern Hemisphere.'],
  [['Revolution', 'The movement of the Earth round the Sun, once in about 365¼ days.'], ['Leap year', 'A year of 366 days, with an extra day on 29 February.'], ['Equinox', 'A date when day and night are equal everywhere, about 21 March and 23 September.'], ['Solstice', 'A date when the Sun is overhead at a tropic, about 21 June and 22 December.']],
  [
    { q: 'Which of these are leap years: 2028, 2030, 1900, 2000?', steps: ['2028 ÷ 4 = 507 exactly: **leap year**.', '2030 ÷ 4 = 507.5: **not** a leap year.', '1900 is a century year; 1900 ÷ 400 = 4.75: **not** a leap year.', '2000 ÷ 400 = 5 exactly: **leap year**.'] },
    { q: 'Explain why it is summer in South Africa in December.', steps: ['In December the **Southern Hemisphere leans towards the Sun**; on about 22 December the Sun is overhead on the Tropic of Capricorn.', 'South Africa receives the Sun’s rays more directly and has **longer days**.', 'So it is **warmer**: summer. At the same time it is winter in Europe, in the Northern Hemisphere.'] },
  ]),

  // ---------- Longitude and time ----------
  L('ge-time-2', 'ge-f2-time', '2.1', 'Longitude and local time', 11, ['Time', 'Calculation'], [
    'The Earth turns through **360°** of longitude in **24 hours**. So it turns **15° in one hour** (360 ÷ 24), and **1° in 4 minutes** (60 ÷ 15). **Local time** is the time shown by the Sun at a place: it is **12 noon** when the Sun is highest in the sky there.',
    'Because the Earth turns from west to east, places to the **east** have noon **earlier**, so their time is **ahead**; places to the **west** are **behind**. A short rule: "**East gains, West loses**". The time at the Prime Meridian (0°) is **Greenwich Mean Time (GMT)**.',
    'To find the time at another place: (1) find the **difference in longitude**: **subtract** if both places are on the same side of Greenwich, **add** if one is east and one is west; (2) change it to time at **4 minutes per degree** (or 1 hour per 15°); (3) **add** the time if the place is to the east, **subtract** if it is to the west.',
    'In daily life countries use **standard time** so that clocks in one country or zone agree. Cameroon uses **West Africa Time**, one hour ahead of GMT (GMT+1), although the Sun’s local time varies across the country. Near the **180°** meridian runs the **International Date Line**: travellers crossing it westwards add a day, and those crossing eastwards subtract one.',
  ], 'longitude-time', 'Write the three steps every time: **longitude difference → time difference (× 4 min) → add (east) or subtract (west)**.',
  ['How long does the Earth take to turn through 1° of longitude?', ['4 minutes', '15 minutes', '1 hour', '24 minutes'], '360° in 24 × 60 = 1440 minutes, so 1° takes 1440 ÷ 360 = 4 minutes.'],
  [['Local time', 'The time at a place according to the position of the Sun.'], ['GMT', 'Greenwich Mean Time: the local time at the Prime Meridian.'], ['Standard time', 'The official time used throughout a country or time zone.'], ['International Date Line', 'A line near 180° where the date changes by one day.']],
  [
    { q: 'When it is 12 noon at Greenwich (0°), what is the local time at Yaoundé (about 11.5°E)?', steps: ['Longitude difference = 11.5° − 0° = **11.5°**.', 'Time difference = 11.5 × 4 = **46 minutes**.', 'Yaoundé is east, so add: 12:00 + 46 min = **12:46 p.m.** local (Sun) time. (Clocks in Cameroon show 1:00 p.m., West Africa Time.)'] },
    { q: 'It is 10:00 a.m. at a place on 15°E. What is the local time at a place on 45°W?', steps: ['The places are on opposite sides of Greenwich, so add: 15° + 45° = **60°**.', 'Time difference = 60 ÷ 15 = **4 hours**.', 'The second place is west, so subtract: 10:00 − 4 h = **6:00 a.m.**'] },
    { q: 'When it is 10:00 a.m. at Greenwich, the local time at town X is 2:00 p.m. Find the longitude of X.', steps: ['X is 4 hours **ahead**, so it is **east** of Greenwich.', '4 hours × 15° per hour = **60°**.', 'The longitude of X is **60°E**.'] },
  ]),

  // ---------- Africa: position and regions ----------
  L('ge-africa-2', 'ge-f2-africa', '3.1', 'Africa: position, size, boundaries and regions', 10, ['Africa'], [
    '**Africa** is the **second largest continent**, with an area of about **30 million km²**, about one fifth of the Earth’s land. It is also the second most populous continent. It stretches from about **37°N** in Tunisia to about **35°S** at Cape Agulhas in South Africa, and from about **17°W** in Senegal to about **51°E** in Somalia.',
    'The **Equator** crosses the middle of Africa, and both the **Tropic of Cancer** and the **Tropic of Capricorn** pass through it, so most of Africa lies in the **tropics** and is hot. The **Prime Meridian** passes through Ghana. Africa is the only continent crossed by the Equator and both tropics.',
    'Africa is bounded by the **Mediterranean Sea** to the north, the **Atlantic Ocean** to the west, the **Indian Ocean** to the east and the **Red Sea** to the north-east. It is separated from Europe by the narrow **Strait of Gibraltar** and from Asia by the **Suez Canal**, opened in 1869, and the Red Sea.',
    'Africa has **54** independent countries, often grouped into five **regions**: **North**, **West**, **Central**, **East** and **Southern Africa**. Cameroon is in **Central Africa**; it is sometimes called "Africa in miniature" because it has almost every kind of African landscape and climate. Countries cooperate in **regional blocs**: **CEMAC** (Cameroon, the Central African Republic, Chad, Congo, Equatorial Guinea and Gabon), **ECCAS** (Central Africa), **ECOWAS** (West Africa), the **EAC** (East Africa) and **SADC** (Southern Africa). All belong to the **African Union**, whose headquarters is in Addis Ababa.',
  ], null, 'When describing the position of Africa, give its **latitudes**, **longitudes**, the **seas and oceans** around it and its **neighbouring continents**.',
  ['Which lines of latitude pass through Africa?', ['The Equator and both tropics', 'Only the Equator', 'Only the Tropic of Cancer', 'The Arctic Circle'], 'Africa is the only continent crossed by all three.'],
  [['Continent', 'One of the seven great land masses of the Earth.'], ['Suez Canal', 'A canal in Egypt linking the Mediterranean and Red Seas.'], ['CEMAC', 'The Economic and Monetary Community of Central Africa: six states including Cameroon.']],
  [
    { q: 'Name the water bodies that surround Africa on each side.', steps: ['**North:** the Mediterranean Sea.', '**West:** the Atlantic Ocean (including the Gulf of Guinea).', '**East:** the Indian Ocean.', '**North-east:** the Red Sea.'] },
  ]),

  // ---------- Africa: relief and drainage ----------
  L('ge-africarelief-2', 'ge-f2-relief', '4.1', 'The relief of Africa', 9, ['Africa', 'Relief'], [
    'Most of Africa is a vast **plateau**, higher in the **east and south** (often over 1 000 m) and lower in the north and west. Between the plateau and the sea there are usually only **narrow coastal plains**. At the edge of the plateau, rivers drop in **waterfalls and rapids**.',
    'Africa has few long mountain chains. The **Atlas Mountains** in the north-west are **fold mountains**. The **Drakensberg** lines the south-east edge of the plateau. Some of Africa’s highest peaks are **volcanoes**: **Kilimanjaro** in Tanzania (5 895 m), the highest mountain in Africa, **Mount Kenya** and **Mount Cameroon**. The **Ethiopian Highlands** form a high, rugged block.',
    'The **East African Rift Valley** is a long, deep valley formed where the Earth’s crust has cracked and sunk between **faults**. It runs from the Red Sea through Ethiopia, Kenya and Tanzania towards Mozambique, and contains long, deep lakes such as **Lake Tanganyika** and **Lake Malawi**.',
    'Parts of the plateau have sunk into large **basins**: the **Congo Basin**, the **Chad Basin** and the **Kalahari Basin**. The **Sahara** in the north is the largest hot desert in the world; the **Kalahari** and the **Namib** are in the south-west.',
  ], null, 'Africa is called a **plateau continent**: describe it as high plateaus, narrow coastal plains, basins, the Rift Valley and a few mountain ranges.',
  ['The highest mountain in Africa is:', ['Kilimanjaro', 'Mount Cameroon', 'Mount Kenya', 'Toubkal in the Atlas'], 'Kilimanjaro, in Tanzania, rises to 5 895 m.'],
  [['Plateau continent', 'A continent made mostly of high, fairly flat land.'], ['Rift valley', 'A long valley formed where land has sunk between faults.'], ['Basin', 'A large area of low land surrounded by higher land.']],
  [
    { q: 'Explain how the Rift Valley was formed.', steps: ['Forces inside the Earth **pulled the crust apart**, making long cracks called **faults**.', 'The block of land **between two faults sank**.', 'This left a long, deep valley with steep sides; some parts filled with water to form lakes such as Lake Tanganyika.'] },
  ]),

  L('ge-africadrainage-2', 'ge-f2-relief', '4.2', 'The rivers and lakes of Africa', 10, ['Africa', 'Drainage'], [
    'The **Nile**, about 6 650 km long, is the **longest river in Africa**. The **White Nile** flows out of the Lake Victoria region and the **Blue Nile** from **Lake Tana** in the Ethiopian Highlands; they meet at **Khartoum** in Sudan, and the Nile flows north through the desert to the **Mediterranean Sea**, forming a delta in Egypt. The **Aswan High Dam** controls its floods and produces electricity.',
    'The **Congo**, the second longest (about 4 700 km), carries **more water** than any other African river because it drains the rainy equatorial region; it crosses the Equator twice and reaches the Atlantic. The **Niger** rises in the Guinea Highlands near the Atlantic but flows inland, north-east and then south-east, to its **delta** in Nigeria; its main tributary, the **Benue**, rises in Cameroon. The **Zambezi** flows east to the Indian Ocean over the **Victoria Falls**, with the **Kariba** and **Cahora Bassa** dams.',
    'Many African rivers have **waterfalls and rapids** where they drop off the plateau near the coast, which makes them hard to navigate far inland but good for **hydroelectric power**. Their flow also changes with the wet and dry seasons.',
    '**Lake Victoria**, shared by Uganda, Kenya and Tanzania, is the largest lake in Africa. **Lake Tanganyika** is very long and deep, in the Rift Valley. **Lake Chad**, shared by Cameroon, Chad, Niger and Nigeria, is shallow and has shrunk greatly since the 1960s because of droughts and the use of its water for irrigation.',
  ], null, 'For each major river, learn its **source**, the **direction** it flows, the **sea** it reaches and one **dam or falls** on it.',
  ['Which African river carries the most water?', ['The Congo', 'The Nile', 'The Niger', 'The Zambezi'], 'The Nile is longer, but the Congo drains the wet equatorial region and carries far more water.'],
  [['Drainage', 'The pattern of rivers and lakes in an area.'], ['Delta', 'Land built of sediment at a river mouth, with many channels.'], ['Rapids', 'A stretch of a river where water flows fast over rocks.']],
  [
    { q: 'Give two reasons why many African rivers are difficult to use for navigation far inland.', steps: ['They have **waterfalls and rapids** where they drop from the plateau to the coastal plain.', 'Their **depth changes** with the seasons: in the dry season some parts become too shallow for boats.', '(Some also have sandbanks at their mouths.)'] },
  ]),

  // ---------- Africa: climate and vegetation ----------
  L('ge-africaclimate-2', 'ge-f2-climate', '5.1', 'Climate and vegetation zones of Africa', 11, ['Africa', 'Climate', 'Vegetation'], [
    'The Equator crosses the middle of Africa. So its climate and vegetation zones are arranged in **belts**, which are roughly the same north and south of the Equator.',
    'The **equatorial** climate (the Congo Basin and southern Cameroon) is **hot all year**, about 25 to 27 °C. It has **heavy rain** in every month, often over 1 500 mm a year, and a small temperature range. Its vegetation is **equatorial rainforest**.',
    'North and south of it is the **tropical** (savanna) climate. It has a **wet season** and a **dry season**. Further from the Equator, there is less rain and the dry season is longer. Its vegetation is **savanna**: tall grass with scattered trees, getting shorter and drier further from the Equator.',
    'Beyond the savanna is the **semi-arid Sahel**, with very little rain. Then come the **hot deserts**: the Sahara in the north, and the Namib and Kalahari in the south-west. They have:\n- less than about 250 mm of rain a year\n- very hot days and cold nights\n- only drought-resistant plants (**xerophytes**), such as cacti, acacias and date palms at oases',
    'At the far north and the south-west tip of Africa is the **Mediterranean** climate. It has hot, dry summers and mild, wet winters, with evergreen shrubs, olive and cork oak trees. On high land, such as the Ethiopian and East African highlands, a cooler **mountain** climate gives forests and grasslands.',
    'Climate is controlled by:\n- **latitude** (distance from the Equator)\n- **altitude**: it is cooler on high land\n- **distance from the sea**\n- **winds**: in West Africa and Cameroon, the moist **south-west monsoon** from the Atlantic brings the rainy season. In the dry season the **harmattan**, a dry, dusty north-east wind from the Sahara, blows across the region.\n- **ocean currents**: cold currents, such as the Benguela current off south-west Africa, make the coast next to them dry',
  ], null, 'Learn the zones in order from the Equator outwards: **rainforest → savanna → Sahel → desert → Mediterranean**.',
  ['The harmattan is a:', ['Dry, dusty north-east wind from the Sahara', 'Wet wind from the Atlantic', 'Cold wind from the Arctic', 'Storm from the Indian Ocean'], 'It blows across West Africa and northern Cameroon in the dry season.'],
  [['Equatorial climate', 'A climate that is hot and wet all year.'], ['Savanna', 'Tropical grassland with scattered trees and a dry season.'], ['Xerophyte', 'A plant adapted to survive with very little water.'], ['Harmattan', 'A dry, dusty north-east wind from the Sahara.']],
  [
    { q: 'A place has 28 °C all year, rain every month and over 2 000 mm of rain a year. Name its climate and natural vegetation, and give one way the vegetation is adapted.', steps: ['Climate: **equatorial**, because it is hot and wet all year.', 'Vegetation: **equatorial rainforest**.', 'Adaptation: the trees are **evergreen** and very tall, competing for light, and their leaves have **drip tips** so that rain runs off quickly.'] },
  ]),

  // ---------- Population ----------
  L('ge-popdistrib-2', 'ge-f2-population', '6.1', 'Where people live: population distribution and density', 9, ['Population', 'Calculation'], [
    'There are about **8 billion** people in the world. They are not spread evenly: **Asia** has the most people, and Africa is second. **Population distribution** describes where people live. **Population density** tells how crowded an area is.',
    '**Population density = number of people ÷ area** (in km²). It is given as **persons per km²**.',
    'Areas of **dense** population usually have a good climate, **fertile soils**, plenty of **water**, good **communications** (roads, railways) and **jobs**. Examples in Africa:\n- the **Nile valley** and delta in Egypt\n- the coasts of West Africa and **southern Nigeria**\n- the **Great Lakes** highlands (Rwanda, Burundi)\n- the **Western Highlands** of Cameroon\n- mining and industrial areas such as the Witwatersrand around Johannesburg',
    'Areas of **sparse** population are too dry, too wet, too cold or too high. Others have poor soils, pests or few jobs. Examples:\n- the **Sahara** and **Kalahari** deserts\n- the dense **Congo** forest\n- areas with tsetse flies, or a long history of insecurity',
    'In Cameroon, the East region has few people compared with the Western Highlands and the coast around Douala.',
  ], null, 'Explain distribution with **physical** factors (climate, relief, soil, water) and **human** factors (jobs, communications, history, security).',
  ['Population density is calculated as:', ['Population ÷ area', 'Area ÷ population', 'Births − deaths', 'Population × area'], 'It gives the number of people per km².'],
  [['Population distribution', 'The way people are spread over an area.'], ['Population density', 'The number of people per km² of land.'], ['Sparse', 'Thinly spread, with few people.']],
  [
    { q: 'A district has 240 000 people on an area of 1 600 km². Find its population density.', steps: ['Density = population ÷ area.', '= 240 000 ÷ 1 600.', '= **150 persons per km²**.'] },
    { q: 'Give two reasons why the Nile valley in Egypt is densely populated while most of Egypt is almost empty.', steps: ['The Nile provides **water** for drinking and **irrigation** in a desert country.', 'Its floods have left **fertile soils**, so crops grow well; the land around is desert, with almost no rain.'] },
  ]),

  L('ge-popgrowth-2', 'ge-f2-population', '6.2', 'Population growth: births, deaths and natural increase', 10, ['Population', 'Calculation'], [
    'A population changes through **births**, **deaths** and **migration**. The **birth rate** is the number of live births per **1 000** people in a year; the **death rate** is the number of deaths per 1 000 people in a year.',
    'The **rate of natural increase** = **birth rate − death rate**. It is given per 1 000 people, or as a **percentage** by dividing by 10. If more people arrive by migration than leave, the population grows even faster.',
    'Africa’s population is growing **fast** because **birth rates are high**: many people marry young, children are valued for help on the farm and in old age, and family planning is not widely used. At the same time **death rates have fallen** thanks to **vaccination**, better health care, clean water and more food.',
    'Rapid growth has **effects**: a **young population** with many dependants, pressure on schools, hospitals, jobs, housing and farmland, and movement to towns; but also a large future **workforce** and market.',
  ], null, 'Natural increase per 1 000 = **birth rate − death rate**; as a percentage, **divide by 10**.',
  ['A country has a birth rate of 36 per 1 000 and a death rate of 10 per 1 000. Its rate of natural increase is:', ['2.6%', '4.6%', '26%', '3.6%'], '36 − 10 = 26 per 1 000 = 2.6%.'],
  [['Birth rate', 'The number of live births per 1 000 people in a year.'], ['Death rate', 'The number of deaths per 1 000 people in a year.'], ['Natural increase', 'Birth rate minus death rate.']],
  [
    { q: 'In a year, a town of 50 000 people had 1 750 births and 450 deaths. Find the birth rate, death rate and rate of natural increase.', steps: ['Birth rate = 1 750 ÷ 50 000 × 1 000 = **35 per 1 000**.', 'Death rate = 450 ÷ 50 000 × 1 000 = **9 per 1 000**.', 'Natural increase = 35 − 9 = **26 per 1 000**, which is **2.6%** a year.'] },
  ]),

  // ---------- Migration ----------
  L('ge-migration-2', 'ge-f2-migration', '7.1', 'Migration: types, causes and effects', 9, ['Population', 'Migration'], [
    '**Migration** is the movement of people from one place to another to live, for a time or for good. **Internal** migration happens within one country, such as **rural–urban** migration from villages to towns. **International** migration crosses borders: leaving a country is **emigration**, and arriving is **immigration**.',
    'Migration may be:\n- **voluntary**: people choose to move, for work, study or marriage\n- **forced**: people must flee war, insecurity, persecution or disasters',
    'People who flee to another country are **refugees**. People forced from their homes but still in their own country are **internally displaced persons**. Cameroon has received refugees from neighbouring countries, and conflicts have displaced many people inside the country.',
    '**Seasonal** migration includes herders who move their cattle between dry-season and wet-season pastures. This is **transhumance**.',
    'Migration has **causes** (push and pull factors) and **effects**. In the **source area** (where migrants leave):\n- there is less pressure on land\n- migrants send money home (**remittances**)\n- but villages lose many young, active people, leaving mostly children and the old, and farms may be neglected',
    'In the **receiving area** (where migrants arrive), migrants provide labour and skills. But when many arrive quickly, there is **overcrowding**, **unemployment**, pressure on services and **slums**.',
  ], null, 'Write effects in two columns: **source area** (where people leave) and **receiving area** (where they arrive), with good and bad effects in each.',
  ['People forced to flee to another country because of war are:', ['Refugees', 'Tourists', 'Commuters', 'Emigrants for study'], 'Internally displaced persons stay inside their own country.'],
  [['Migration', 'The movement of people from one place to live in another.'], ['Emigration', 'Leaving one’s country to live in another.'], ['Refugee', 'A person forced to flee to another country.'], ['Remittances', 'Money sent home by migrants.']],
  [
    { q: 'Give two positive and two negative effects of rural–urban migration on a village.', steps: ['**Positive:** migrants send home **money**, which pays for school fees and houses; there is **less pressure** on farmland.', '**Negative:** the village **loses young, strong workers**, so farms are neglected and food production falls; mostly the **old and children** are left behind.'] },
  ]),

  // ---------- Urbanisation ----------
  L('ge-urban-2', 'ge-f2-urban', '8.1', 'Urbanisation and its problems', 10, ['Settlement', 'Urbanisation'], [
    '**Urbanisation** is the growth in the **proportion** (share) of people living in **towns and cities**. African towns are growing faster than those of any other continent. There are two main causes:\n- **rural–urban migration**: people moving from villages to towns\n- **natural increase** in the towns, where many young people have children',
    'Fast-growing cities such as **Douala** and **Yaoundé** face serious **problems**:\n- **slums**: unplanned houses built without permission, often in valleys that flood or on steep slopes\n- **unemployment**: many people work in the **informal sector**, as hawkers or motorcycle-taxi riders\n- **traffic jams**\n- shortages of **water, electricity and housing**\n- **waste** that is not collected, and **flooding** when drains are blocked\n- air and water **pollution**, and **crime**',
    'Solutions include:\n- **town planning**\n- building **affordable housing** (decent houses people can pay for)\n- better **roads and public transport**\n- extending water and electricity\n- better **waste collection**\n- creating jobs\n- developing smaller towns, so that growth is spread out',
    'At the same time, **rural depopulation** (people leaving the villages) weakens villages. **Rural development** can keep people in the countryside. It means roads to markets, schools, health centres, electricity, clean water, credit for farmers, and small industries that process local produce.',
  ], null, 'For a question on urban problems, give the **problem**, its **cause** and a **solution**, with an example from Douala or Yaoundé.',
  ['Urbanisation means:', ['An increase in the share of people living in towns', 'Building roads in villages', 'Moving from towns to villages', 'Farming in towns only'], 'It is the growth of the urban part of the population.'],
  [['Urbanisation', 'The increase in the proportion of people living in towns.'], ['Slum', 'An overcrowded area of poor, unplanned housing.'], ['Informal sector', 'Small, unregistered jobs such as street trading.'], ['Rural depopulation', 'The decline in the number of people living in the countryside.']],
  [
    { q: 'Explain two problems caused by the rapid growth of Douala and suggest a solution to each.', steps: ['**Flooding:** houses built in low valleys and drains blocked by refuse flood after heavy rain. Solution: **clear drains**, collect refuse and stop building on flood plains.', '**Traffic jams:** too many vehicles on narrow roads slow everyone down. Solution: **widen roads**, build bypasses and provide **public buses**.'] },
  ]),

  // ---------- Farming ----------
  L('ge-farming-2', 'ge-f2-farming', '9.1', 'Farming systems in Africa and Cameroon', 11, ['Agriculture'], [
    '**Shifting cultivation** is practised in the forest, where there is plenty of land and few people. The farmer **clears and burns** a patch of forest and farms it for two or three years. When the soil is **exhausted**, the farmer **moves** to a new patch, and the old one returns to bush.',
    'With more people and less land, shifting cultivation changes into **bush fallowing**. The farmer stays in one village but **rotates** the fields, leaving some to rest (**fallow**) for a few years. Both are mainly **subsistence** systems: the family grows food crops for itself, using hand tools.',
    '**Pastoralism** is the keeping of animals on natural pasture, in the savanna and the Sahel. Herders practise either:\n- **nomadism**: moving from place to place with their herds, or\n- **transhumance**: moving the herds with the seasons, between dry-season and wet-season pastures, as the Mbororo do on the Adamawa Plateau and in the north of Cameroon\n**Mixed farming** combines crops and animals on one farm.',
    '**Plantation agriculture** grows one **cash crop** for sale, often for export. It uses **large estates**, much **capital** (money) and many workers, with processing factories on the estate. In Cameroon, the **Cameroon Development Corporation (CDC)** grows bananas, oil palm and rubber in the South West region. Other companies grow oil palm and rubber in the Littoral and South, and sugar cane at Mbandjock.',
    'Cash crops depend on climate:\n- **cocoa** in the hot, wet south (Centre, South, South West, East)\n- **Arabica coffee** on the cool Western Highlands, **Robusta coffee** in lower areas such as the Moungo\n- **cotton** in the dry north, around Garoua and Maroua\n- **tea** at Tole near Buea and on the highlands',
    'Farming faces problems: poor roads to markets, low and changing prices, pests and diseases, old tools and soil exhaustion. Solutions include rural roads, credit, cooperatives, improved seeds and fertilisers, and training.',
  ], null, 'Compare farming systems on **size of farm**, **capital**, **labour**, **crops** and **market** (own use or sale).',
  ['Moving herds between dry-season and wet-season pastures is:', ['Transhumance', 'Shifting cultivation', 'Plantation farming', 'Bush fallowing'], 'Herders move with the seasons to find grass and water.'],
  [['Shifting cultivation', 'Clearing and farming a patch of land until it is exhausted, then moving to a new one.'], ['Bush fallowing', 'Rotating fields around a fixed village, leaving some to rest.'], ['Plantation', 'A large estate growing one cash crop with much capital and labour.'], ['Transhumance', 'Seasonal movement of herds between pastures.']],
  [
    { q: 'Give three differences between peasant (subsistence) farming and plantation farming.', steps: ['**Size:** peasant farms are **small**; plantations are **very large** estates.', '**Capital and tools:** peasant farmers use **hand tools** and little money; plantations use **machines**, fertilisers and much capital.', '**Crops and market:** peasant farms grow **mixed food crops** mainly for the family; plantations grow **one cash crop** for sale, often for export.'] },
  ]),

  // ---------- Minerals and energy ----------
  L('ge-minerals-2', 'ge-f2-resources', '10.1', 'Minerals and mining', 9, ['Resources', 'Mining'], [
    'A **mineral** is a natural substance found in the Earth’s crust, such as crude oil, gold, iron ore or bauxite. Africa is rich in minerals: **crude oil** in Nigeria, Angola, Algeria and Libya; **gold** in South Africa and Ghana; **diamonds** in Botswana and South Africa; **copper** and **cobalt** in the **Copperbelt** of Zambia and the Democratic Republic of Congo.',
    '**Cameroon** produces **crude oil** offshore, mainly from the **Rio del Rey** area near the Nigerian border and the **Douala/Kribi-Campo** basin; it is refined at **Limbe**. **Natural gas** from offshore fields near Kribi feeds a power station and is exported as liquefied gas. **Gold** is mined, much of it by small-scale (artisanal) miners, in the **East** region around Batouri and Bétaré-Oya. **Limestone** at Figuil is used to make cement. Large deposits of **bauxite** (Minim-Martap and Ngaoundal in the Adamawa) and **iron ore** (Mbalam in the East and near Kribi) are known.',
    'Mining brings **money** from exports, **jobs**, roads and other infrastructure. It also causes **problems**: land is scarred and forests cleared; rivers are polluted by mud and chemicals; open pits fill with water and are dangerous; and when the mineral runs out, mining towns may decline. Minerals are **non-renewable**, so they must be used wisely and the land restored after mining.',
  ], null, 'Minerals are **non-renewable**: once used, they are gone. Link each Cameroonian mineral to its **region**.',
  ['Cameroon’s crude oil is refined at:', ['Limbe', 'Garoua', 'Bertoua', 'Maroua'], 'The refinery is at Limbe, on the coast in the South West region.'],
  [['Mineral', 'A natural substance found in the Earth’s crust.'], ['Non-renewable resource', 'A resource that cannot be replaced once it is used.'], ['Artisanal mining', 'Small-scale mining with simple tools.']],
  [
    { q: 'Give two advantages and two problems of gold mining in the East region of Cameroon.', steps: ['**Advantages:** it gives **income and jobs** to many people, and the country earns money from gold.', '**Problems:** pits and forest clearing **destroy land**, and rivers are **polluted** by mud and chemicals such as mercury; open pits are **dangerous** and children may leave school to work in the mines.'] },
  ]),

  L('ge-energy-2', 'ge-f2-resources', '10.2', 'Sources of energy, including clean energy', 9, ['Resources', 'Energy'], [
    'Energy is needed for homes, industry and transport. **Non-renewable** sources will run out. They are:\n- **crude oil** (petrol, diesel, kerosene)\n- **natural gas**\n- **coal**, mined mostly in South Africa\nBurning them releases **carbon dioxide**, which adds to **climate change**, and smoke that pollutes the air.',
    '**Renewable** sources are not used up. **Hydroelectric power (HEP)** uses falling water to turn turbines. Africa has many rivers with falls and rapids, so it has great HEP potential. Examples are the **Aswan High Dam** on the Nile, **Kariba** on the Zambezi and **Akosombo** on the Volta in Ghana.',
    'In Cameroon, most electricity comes from HEP:\n- **Edéa** and **Song Loulou** on the Sanaga\n- **Lagdo** on the Benue\n- **Memve’ele** on the Ntem\nThe **Lom Pangar** reservoir regulates the flow of the Sanaga.',
    '**Solar energy** is plentiful in sunny Africa, especially in the dry north. Panels can bring electricity to villages far from the grid. **Wind** power, **geothermal** power from hot rocks (as at Olkaria in Kenya’s Rift Valley) and **biomass** are also used.',
    'Most rural households in Africa still cook with **firewood and charcoal**, which leads to deforestation. Improved cooking stoves and gas reduce this.',
    'Developing **clean energy** reduces pollution and dependence on imported fuel. But dams cost a lot of money, can flood farmland and villages, and depend on rainfall.',
  ], null, 'Renewable: **HEP, solar, wind, geothermal, biomass**. Non-renewable: **oil, gas, coal**.',
  ['Which is a renewable source of energy?', ['Solar energy', 'Crude oil', 'Coal', 'Natural gas'], 'Sunlight is not used up; the others are fossil fuels.'],
  [['Renewable energy', 'Energy from sources that are not used up, such as sunlight and running water.'], ['Hydroelectric power', 'Electricity made from the energy of falling water.'], ['Fossil fuel', 'A fuel formed from ancient plants and animals, such as coal, oil and gas.']],
  [
    { q: 'Give two advantages and two disadvantages of hydroelectric power in Cameroon.', steps: ['**Advantages:** it is **renewable** and cheap to run once the dam is built; it does **not pollute** the air.', '**Disadvantages:** dams are **very expensive** to build and flood farmland and villages; output **falls in the dry season** when rivers are low.'] },
  ]),

  // ---------- Trade ----------
  L('ge-trade-2', 'ge-f2-trade', '11.1', 'Trade, transport and regional cooperation', 10, ['Trade'], [
    '**Trade** is the buying and selling of goods and services. **Internal** trade takes place within a country. **International** trade is between countries. Goods sold to other countries are **exports**. Goods bought from them are **imports**.',
    'Cameroon exports **crude oil**, **cocoa**, **timber**, **cotton**, **coffee**, **bananas** and **aluminium**. It imports machinery, vehicles, fuel products, rice, fish and wheat.',
    'African countries trade **little with one another**. The reasons are:\n- poor **roads and railways** between countries\n- many **customs posts and checkpoints**, which cause delays and bribery\n- different **currencies** and **languages**\n- many countries produce **similar goods** (raw materials) and buy manufactured goods from outside Africa',
    'To increase trade, countries form **regional groupings** that remove barriers:\n- **CEMAC** members share one currency, the **CFA franc**, issued by the **Bank of Central African States (BEAC)**. They aim at free movement of goods and people.\n- **ECCAS** covers Central Africa more widely, and **ECOWAS** covers West Africa.\n- The **African Continental Free Trade Area (AfCFTA)** began trading in 2021. It aims to make one market for the whole continent.',
    'The **port of Douala** handles most of Cameroon’s trade. It also serves two **landlocked** countries (with no coast): **Chad** and the **Central African Republic**. Their goods travel along road and rail **transit corridors**. The deep-sea port at **Kribi** can receive very large ships. Better roads, faster customs clearance and fewer checkpoints would make trade cheaper.',
  ], null, 'Exports go **out**, imports come **in**. A landlocked country has **no coast** and needs a neighbour’s port.',
  ['Which neighbouring countries use the port of Douala because they are landlocked?', ['Chad and the Central African Republic', 'Nigeria and Gabon', 'Equatorial Guinea and Congo', 'Ghana and Togo'], 'Chad and the CAR have no coast.'],
  [['Export', 'A good sold to another country.'], ['Import', 'A good bought from another country.'], ['Landlocked', 'Having no coastline.'], ['Customs union', 'A group of countries that remove trade barriers between themselves.']],
  [
    { q: 'Give three reasons why trade between Cameroon and its CEMAC neighbours is still small, and one solution for each.', steps: ['**Poor transport links**: build and repair **roads and railways** between the countries.', '**Many checkpoints and slow customs**: reduce checkpoints and use **one-stop border posts**.', '**Similar products** (raw materials): develop **industries** that make manufactured goods to sell to neighbours.'] },
  ]),

  // ---------- Environmental problems ----------
  L('ge-envprob-2', 'ge-f2-environment', '12.1', 'Deforestation, desertification and soil exhaustion', 11, ['Environment', 'Sustainability'], [
    '**Deforestation** is the clearing of forests. Its causes are:\n- **logging** for timber\n- clearing land for **farms and plantations**\n- cutting **firewood** and making charcoal\n- **mining**, and building roads and towns\n- **bush fires**',
    'Deforestation leads to:\n- **soil erosion**\n- loss of **plants and animals**\n- less rainfall in the area\n- more **carbon dioxide** in the air, which adds to climate change\n- loss of food and medicines for forest people',
    '**Desertification** is the spread of **desert-like conditions** into dry areas next to deserts, such as the **Sahel** and the **Far North** of Cameroon. Its causes are **droughts** and human activities:\n- **overgrazing** by too many animals\n- **overcultivation** of poor soils\n- cutting trees for **firewood**\n- **bush fires**\nThe soil becomes bare and dry, and the wind blows it away.',
    '**Soil exhaustion** happens when the same land is farmed year after year without rest or manure. Its nutrients are used up and yields fall. **Soil erosion** removes the fertile top layer, especially on steep slopes and bare land.',
    'Solutions include:\n- **afforestation** and reforestation (planting trees)\n- the **Great Green Wall**, a belt of trees planted to restore land across the Sahel\n- **controlled logging** and **improved cooking stoves** that use less wood\n- **controlled grazing** and **crop rotation**\n- adding **manure** and **compost**\n- **contour ploughing** and **terraces** on slopes, and agroforestry\n- protected areas such as **Waza National Park**, **Korup National Park** and the **Dja Faunal Reserve**',
  ], null, 'For each problem give **causes** (natural and human), **effects** and **solutions**. Overgrazing and firewood cutting are key causes of desertification.',
  ['The spread of desert-like conditions into the Sahel is called:', ['Desertification', 'Deforestation', 'Urbanisation', 'Irrigation'], 'Droughts and human activities turn dry land into desert.'],
  [['Deforestation', 'The clearing of forests.'], ['Desertification', 'The spread of desert-like conditions into dry areas.'], ['Overgrazing', 'Keeping too many animals on a pasture, so the grass is destroyed.'], ['Afforestation', 'Planting trees on land without forest.']],
  [
    { q: 'Explain how overgrazing can lead to desertification in the Far North of Cameroon, and suggest two solutions.', steps: ['Too many cattle, sheep and goats **eat the grass** faster than it can grow back, and trample the ground.', 'The soil is left **bare**; in the dry season the wind **blows it away** and the little rain washes it off, so the land becomes desert-like.', 'Solutions: **limit herd sizes** and rotate grazing areas; **plant trees** and grasses to cover and hold the soil.'] },
  ]),
];
