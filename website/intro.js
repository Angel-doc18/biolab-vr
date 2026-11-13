// What the tutor says on the home page's two speaking buttons, one sentence per
// clip (src/audio/intro-<lang>-<n>.mp3). The same sentences are the captions
// shown while it speaks and the transcript. It walks through what is in the
// app and ends by saying there is more, so no one takes it for the whole list.
// Keep each sentence under about 115 characters, so a caption never grows past
// three lines on a phone and the buttons below it stay still.
//
// To record them again after changing a sentence: send each one to the voice
// server exactly as the API does ({ text, lang } to $KOKORO_URL/tts, run inside
// the klass8-api container so the key never leaves it) and save the replies
// under the names below.
module.exports = {
  en: {
    label: 'Listen in English',
    lang: 'en',
    lines: [
      'Hello, and welcome to Klass8.',
      'Klass8 is the study app for secondary school students in Cameroon, from Form 1 to Upper Sixth.',
      'It follows the MINESEC syllabus for your class, term by term, in more than thirty subjects.',
      'I explain every lesson out loud, with worked examples, exam tips and labelled diagrams.',
      'In the Lab, you do practicals with real readings, tables and graphs.',
      'You can turn the heart, the lungs and other organs around in 3D.',
      'Photograph any question, and I work it out step by step.',
      'Write your answers on paper, and I mark them the way an examiner would, Paper 3 included.',
      'Practise with timed GCE papers and term tests, and see the topics you find hardest.',
      'Your parents get a report every week, and your teachers can set you work from the syllabus.',
      'And there is much more inside. Your first month is free, so download Klass8 and see it all.',
    ],
  },
  fr: {
    label: 'Écouter en français',
    lang: 'fr',
    lines: [
      'Bonjour, et bienvenue sur Klass8.',
      "Klass8 est l'application de révision des élèves du secondaire au Cameroun, pour toutes les classes.",
      'Elle suit le programme du MINESEC pour votre classe, trimestre après trimestre, dans plus de trente matières.',
      "Je vous explique chaque leçon à voix haute, avec des exemples, des conseils d'examen et des schémas annotés.",
      'Au laboratoire, vous faites des travaux pratiques avec de vraies mesures, des tableaux et des graphiques.',
      "Vous pouvez faire tourner le cœur, les poumons et d'autres organes en trois dimensions.",
      'Prenez une question en photo, et je la résous pas à pas.',
      'Écrivez vos réponses sur papier, et je les corrige comme un examinateur, épreuve pratique comprise.',
      'Entraînez-vous avec des épreuves chronométrées du GCE et des devoirs de séquence, et voyez vos points faibles.',
      'Vos parents reçoivent un rapport chaque semaine, et vos enseignants vous donnent du travail tiré du programme.',
      'Et il y a bien plus encore. Le premier mois est gratuit : téléchargez Klass8 et découvrez tout.',
    ],
  },
};
