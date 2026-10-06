// Step-by-step processes, cycles, classification trees and comparisons used across
// subjects, built with the chart builders in charts.js.
import { columnsSpec, cycleSpec, flowSpec, treeSpec } from './charts';

export const FLOWS = {
  // ---------- Biology ----------
  'maize-steps': flowSpec('Growing maize step by step', ['Clear and\ntill the land', 'Plant good seed\nat the right spacing', 'Weed; add manure\nor fertiliser', 'Watch for pests\nand diseases', 'Harvest, dry\nand store']),
  'palm-oil-steps': flowSpec('Making red palm oil', ['Harvest ripe\npalm bunches', 'Separate\nthe fruits', 'Boil\nthe fruits', 'Pound the\nsoft fruits', 'Press out and\nclarify the oil']),
  'yoghurt-steps': flowSpec('Making yoghurt', ['Heat the milk\n(about 85 °C)', 'Cool it to\nabout 43 °C', 'Stir in a little\nlive yoghurt', 'Keep warm for\n4 to 8 hours', 'Cool and keep\nin a fridge'], { note: 'The bacteria in the live yoghurt turn milk sugar into lactic acid.' }),
  'disaster-cycle': cycleSpec('The disaster cycle', ['Prevention\nreduce the risk', 'Preparedness\nwarnings, plans', 'Response\nevacuate, rescue', 'Recovery\nrebuild, support']),
  'wild-harvest': columnsSpec('Using wild plants and animals', [
    { head: 'Unsustainable\nwipes them out', items: ['Hunting all year round', 'Killing young animals', 'Poison, very fine nets', 'Stripping all the bark', 'Cutting trees for fruit'] },
    { head: 'Sustainable\nleaves enough', items: ['Closed hunting seasons', 'Letting the young grow', 'Nets of legal mesh size', 'Taking bark from one side', 'Picking fruit; replanting'] },
  ], { colW: 138, arrow: true }),
  'puberty-changes': columnsSpec('Changes at puberty (about 10 to 16 years)', [
    { head: 'Girls', items: ['Breasts develop', 'Hips widen', 'Periods begin', 'Ovaries release eggs'] },
    { head: 'Both', items: ['Growth spurt', 'Hair in armpits, groin', 'More sweat; pimples', 'Strong new feelings'] },
    { head: 'Boys', items: ['Voice deepens', 'Shoulders broaden', 'Hair on the face', 'Testes make sperm'] },
  ]),
  'farm-health': columnsSpec('Keeping crops and farm animals healthy', [
    { head: 'Signs of a\nsick animal', items: ['Stops eating', 'Dull, stays apart', 'Rough coat, feathers', 'Diarrhoea, coughing', 'Losing weight'] },
    { head: 'Signs of a\nsick crop', items: ['Wilting', 'Yellow, spotted leaves', 'Rotting roots, fruit', 'Holes made by pests', 'Poor growth'] },
    { head: 'Control', items: ['Vaccinate on time', 'Quarantine new stock', 'Uproot sick plants', 'Clean pens and tools', 'Use chemicals safely'] },
  ], { colW: 116 }),
  'biodiversity-threats': columnsSpec('Threats to biodiversity in Cameroon and how to protect it', [
    { head: 'Threats', items: ['Clearing forest for farms', 'Illegal logging', 'Poaching for bushmeat', 'Bush fires', 'Pollution', 'Overfishing'] },
    { head: 'Protection', items: ['Parks: Korup, Waza', 'Laws on logging', 'Hunting laws, patrols', 'Controlled burning', 'Less waste, clean-ups', 'Fishing seasons, nets'] },
  ], { colW: 142 }),

  // ---------- Computer Science ----------
  'computer-generations': flowSpec('The generations of computers', ['1st: 1940s to 50s\nvacuum tubes', '2nd: late 1950s to 60s\ntransistors', '3rd: 1960s to 70s\nintegrated circuits', '4th: from the 1970s\nmicroprocessors', '5th: today\nartificial intelligence'], { boxW: 122 }),
  'boot-sequence': flowSpec('Booting a computer', ['Power on', 'POST checks\nthe hardware', 'Start-up program\nin ROM runs', 'Operating system\nloads into RAM', 'The desktop is\nready to use']),
  'dns-lookup': flowSpec('What happens when you open a web page', ['You type\nwww.example.com', 'DNS finds the\nIP address', 'The browser asks\nthe web server', 'The server sends\nthe page (HTTP)', 'The browser\nshows the page']),
  'software-types': treeSpec('Kinds of software', 'Software', [
    { name: 'System software\nruns the computer', items: ['Operating system', 'Utility programs', 'Device drivers'] },
    { name: 'Application software\ndoes jobs for users', items: ['Word processor', 'Spreadsheet', 'Web browser', 'Games'] },
  ], { colW: 150 }),
  'malware-protection': columnsSpec('Threats to a computer and how to protect it', [
    { head: 'Threats', items: ['Viruses and worms', 'Trojan horses', 'Spyware, ransomware', 'Dust and heat', 'Power surges', 'Theft'] },
    { head: 'Protection', items: ['Updated antivirus', 'Scan flash drives', 'Updates, firewall', 'Covers, ventilation', 'Stabiliser or UPS', 'Locks and backups'] },
  ], { colW: 140 }),

  // ---------- Geography ----------
  'geography-branches': treeSpec('The branches of geography', 'Geography', [
    { name: 'Physical', items: ['Relief', 'Weather, climate', 'Rivers, lakes', 'Soils, vegetation'] },
    { name: 'Human', items: ['Population', 'Settlement', 'Migration', 'Culture'] },
    { name: 'Economic', items: ['Farming', 'Mining, industry', 'Trade', 'Transport'] },
  ]),
  'economic-activities': columnsSpec('Kinds of economic activity', [
    { head: 'Primary\ntake from nature', items: ['Farming', 'Fishing', 'Lumbering', 'Mining'] },
    { head: 'Secondary\nmake goods', items: ['Factories', 'Tailoring', 'Carving, weaving', 'Bakeries'] },
    { head: 'Tertiary\nprovide services', items: ['Trading', 'Transport', 'Teaching', 'Health care'] },
  ]),
  'waste-3rs': flowSpec('Managing household waste', ['Sort it: organic,\nplastic, glass, metal', 'Reduce:\nuse less', 'Reuse: use\nthings again', 'Recycle: make\nnew things', 'Compost the\norganic waste'], { note: 'Reduce first; never burn plastic or dump refuse in gutters.' }),
  'push-pull': columnsSpec('Why people move from villages to towns', [
    { head: 'Push factors\nin the village', items: ['Few jobs', 'No electricity', 'Poor schools, clinics', 'Poor harvests', 'Insecurity'] },
    { head: 'Pull factors\nin the town', items: ['Paid work', 'Electricity, water', 'Schools, hospitals', 'Markets, services', 'Safety'] },
  ], { colW: 132, arrow: true }),
  'urban-problems': columnsSpec('Problems of big towns such as Douala and Yaoundé', [
    { head: 'Problems', items: ['Slums', 'Unemployment', 'Traffic jams', 'Flooding', 'Refuse in the streets'] },
    { head: 'Solutions', items: ['Planned, low-cost housing', 'Jobs, also in villages', 'Better roads, buses', 'Clean drains; avoid swamps', 'Regular refuse collection'] },
  ], { colW: 150, arrow: true }),
  'shifting-cultivation': cycleSpec('Shifting cultivation', ['Clear and burn\na forest patch', 'Farm it for\n2 or 3 years', 'Soil exhausted,\nyields fall', 'Move to a\nnew patch', 'Old patch\nreturns to bush']),
  'desertification-cycle': cycleSpec('How desertification spreads', ['Overgrazing and\ncutting trees', 'Bare soil', 'Wind and rain\nremove the soil', 'Fewer plants,\ndrier land', 'More pressure on\nthe land left']),

  // ---------- Home Economics ----------
  'fibre-chart': treeSpec('Textile fibres', 'Fibres', [
    { name: 'Natural:\nplant', items: ['Cotton', 'Linen'] },
    { name: 'Natural:\nanimal', items: ['Wool', 'Silk'] },
    { name: 'Man-made:\nregenerated', items: ['Viscose rayon', 'Acetate'] },
    { name: 'Man-made:\nsynthetic', items: ['Nylon', 'Polyester', 'Acrylic'] },
  ], { colW: 92 }),
  'baby-milestones': flowSpec('How most babies develop', ['About 3 months:\nholds head up', 'About 6 months:\nsits; first teeth', '8 to 9 months:\ncrawls', 'About 12 months:\nfirst steps, words'], { perRow: 2, boxW: 124, note: 'Each child develops at its own pace.' }),
};
