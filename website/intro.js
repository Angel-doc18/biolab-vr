// What the tutor says on the home page's two speaking buttons, one sentence per
// clip (src/audio/intro-<lang>-<n>.mp3). The same sentences are the captions
// shown while it speaks and the transcript.
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
      'It follows the MINESEC syllabus for your class, term by term, in the subjects you take.',
      'I explain every lesson out loud, and I work out any question you photograph, step by step.',
      'Write your answers on paper, take a photo, and I mark them the way an examiner would.',
      'Your first month is free. Download Klass8 and start revising today.',
    ],
  },
  fr: {
    label: 'Écouter en français',
    lang: 'fr',
    lines: [
      'Bonjour, et bienvenue sur Klass8.',
      "Klass8 est l'application de révision des élèves du secondaire au Cameroun, pour toutes les classes.",
      'Elle suit le programme du MINESEC pour votre classe, trimestre après trimestre, dans les matières que vous suivez.',
      'Je vous explique chaque leçon à voix haute, et je résous pas à pas toute question que vous prenez en photo.',
      'Écrivez vos réponses sur papier, prenez-les en photo, et je les corrige comme un examinateur.',
      "Le premier mois est gratuit. Téléchargez Klass8 et commencez vos révisions dès aujourd'hui.",
    ],
  },
};
