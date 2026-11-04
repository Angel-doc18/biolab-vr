// GCE Advanced Level Geology (0755) by class: the Lower Sixth and Upper Sixth
// topics of the 2026/2027 harmonised scheme of work, grouped as skills,
// minerals, petrology, structure, Earth history, applied geology and the
// geology of Cameroon. Where the scheme and the official syllabus or GCE
// timetable differ, the official documents win (the scheme writes the code as
// "746/747"; the GCE Board's code is 0755). Unit ids start with "agl-".
import { UNITS_L6 } from './unitsL6';
import { UNITS_U6 } from './unitsU6';

export const GROUPS = [
  { id: 'skills', en: 'Maps, practical work and examination skills', fr: 'Cartes, travaux pratiques et méthode' },
  { id: 'minerals', en: 'Crystallography and mineralogy', fr: 'Cristallographie et minéralogie' },
  { id: 'petrology', en: 'Igneous, sedimentary and metamorphic rocks', fr: 'Roches magmatiques, sédimentaires et métamorphiques' },
  { id: 'structure', en: 'Plate tectonics and structural geology', fr: 'Tectonique des plaques et géologie structurale' },
  { id: 'history', en: 'Stratigraphy, fossils and geological time', fr: 'Stratigraphie, fossiles et temps géologique' },
  { id: 'applied', en: 'Applied geology: water, resources and engineering', fr: 'Géologie appliquée : eau, ressources et génie' },
  { id: 'cameroon', en: 'The geology of Cameroon', fr: 'Géologie du Cameroun' },
];

export const units = [...UNITS_L6, ...UNITS_U6];
