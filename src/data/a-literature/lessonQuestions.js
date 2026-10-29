// Extra questions for the end of the A Level Literature in English lessons
// (0735), so that every lesson ends with at least five questions on what it
// teaches.
//
// Convention: the correct option is written first; options are shuffled when shown.
import { QUESTIONS_U6 } from './lessonQuestionsU6';

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  // ---------- Lower Sixth, Term 1 ----------
  'ali-tragic-1': [
    Q('Aristotle discussed tragedy in his:', ['Poetics', 'Republic', 'Odyssey', 'Canterbury Tales'], '4th century BC.'),
    Q('The tragic hero is usually:', ['of high rank, admirable but flawed', 'perfect in every way', 'a comic servant', 'a narrator'], 'Pity and fear.'),
    Q('According to Aristotle, tragedy arouses:', ['pity and fear', 'laughter and joy', 'boredom', 'anger only'], 'Catharsis.'),
    Q('Which term names the hero’s reversal of fortune?', ['peripeteia', 'catharsis', 'hamartia', 'anagnorisis'], 'Reversal.'),
  ],
  'ali-stage-1': [
    Q('"To be, or not to be" is spoken by:', ['Hamlet', 'Macbeth', 'Othello', 'Lear'], 'A soliloquy.'),
    Q('Dramatic irony often creates:', ['tension and pity', 'rhyme', 'a subplot', 'a happy ending'], 'Knowledge gap.'),
    Q('Pathos is most often produced by:', ['innocent suffering', 'clever jokes', 'stage machinery', 'long lists'], 'Pity.'),
    Q('"Fair is foul, and foul is fair" is spoken by:', ['the witches in Macbeth', 'Hamlet', 'Iago', 'Lear'], 'Act 1, Scene 1.'),
  ],
  'ali-globe-1': [
    Q('The Globe theatre was built in:', ['1599', '1499', '1699', '1799'], 'Shakespeare’s company.'),
    Q('The tiring house was:', ['the area behind the stage for costumes and entrances', 'the audience’s yard', 'a pub', 'the royal box'], 'Backstage.'),
    Q('The great chain of being expressed belief in:', ['a divinely ordered hierarchy of all things', 'equality of all people', 'evolution', 'democracy'], 'Order.'),
    Q('James I took a strong interest in:', ['witchcraft', 'steam engines', 'football', 'printing newspapers'], 'He wrote Daemonologie.'),
  ],
  'ali-exposition-1': [
    Q('A scene log records for each scene:', ['events, a key quotation and its importance', 'the actors’ names', 'ticket prices', 'the weather in London'], 'Revision tool.'),
    Q('Macbeth is first described by others as:', ['brave in battle', 'a coward', 'a fool', 'a traitor'], 'Before he appears.'),
    Q('Storms and darkness at the opening mainly create:', ['an uneasy mood', 'a comic mood', 'a happy ending', 'a subplot'], 'Atmosphere.'),
    Q('Reading Act I, you should ask:', ['who has power, what is wrong, and what will drive the action', 'how long the play is', 'who printed it', 'where the author was born'], 'Key questions.'),
  ],
  'ali-subplot-1': [
    Q('Gloucester’s family in King Lear:', ['parallels Lear’s family', 'has no role', 'is comic', 'replaces Lear'], 'Mirror plot.'),
    Q('Comic scenes in a tragedy can:', ['relieve tension and sharpen the tragedy by contrast', 'end the play', 'replace the climax', 'have no purpose'], 'Contrast.'),
    Q('A subplot can widen the play’s view of:', ['society', 'the stage size', 'the playwright’s life', 'the theatre’s location'], 'Breadth.'),
    Q('Cause and effect in a plot means:', ['each event leads to the next', 'events are random', 'nothing happens', 'the plot is circular'], 'Logic.'),
  ],
  'ali-themes-1': [
    Q('A theme map lists:', ['scenes, quotations and how a theme develops', 'actors and costumes', 'ticket sales', 'theatre locations'], 'Tracking.'),
    Q('Recurring images of sleep in Macbeth develop the theme of:', ['guilt and lost peace', 'comedy', 'nature’s beauty', 'travel'], '"Macbeth does murder sleep."'),
    Q('Appearance and reality is a theme about:', ['the gap between how things seem and how they are', 'costumes only', 'lighting', 'stage size'], 'Deception.'),
    Q('Fate and free will is a theme about:', ['whether events are destined or chosen', 'weather', 'money', 'education'], 'Responsibility.'),
  ],
  'ali-metre-1': [
    Q('"be-LOW" is:', ['an iamb', 'a trochee', 'a dactyl', 'a spondee'], 'x /.'),
    Q('"BEAU-ti-ful" is:', ['a dactyl', 'an anapaest', 'an iamb', 'a spondee'], '/ x x.'),
    Q('Tetrameter has:', ['four feet', 'five feet', 'six feet', 'three feet'], 'Tetra: four.'),
    Q('A metrical variation is worth discussing when:', ['you can explain its effect on meaning', 'it is present', 'the line is long', 'never'], 'Effect.'),
  ],
  'ali-stanza-1': [
    Q('A quatrain has:', ['four lines', 'two lines', 'six lines', 'eight lines'], 'Four.'),
    Q('A sestet has:', ['six lines', 'eight lines', 'four lines', 'three lines'], 'Six.'),
    Q('Milton’s Paradise Lost is written in:', ['blank verse', 'free verse', 'rhymed couplets', 'ballad stanzas'], 'Unrhymed pentameter.'),
    Q('Half-rhyme can suggest:', ['unease or something not quite resolved', 'perfect harmony', 'nothing', 'comedy only'], 'Discord.'),
  ],
  'ali-turning-1': [
    Q('Signs of intensification include:', ['short urgent lines and rapid events', 'long descriptions', 'songs', 'a prologue'], 'Pace.'),
    Q('At his height of power, a tragic hero may already be:', ['losing control and making enemies', 'perfectly safe', 'retired', 'comic'], 'Irony of power.'),
    Q('The catastrophe comes:', ['at the end of the falling action', 'in Act I', 'before the exposition', 'in the prologue'], 'Final disaster.'),
    Q('A turning point changes:', ['the direction of the hero’s fortune', 'the theatre', 'the cast', 'the costumes only'], 'Direction.'),
  ],
  'ali-character-1': [
    Q('A noble character who drops into broken prose may be:', ['losing control of reason', 'becoming king', 'getting married', 'telling a joke only'], 'Language shift.'),
    Q('An essay on character should make:', ['an argument supported by evidence', 'a list of adjectives', 'a plot summary', 'a biography'], 'Argument.'),
    Q('Stage directions about a character’s actions:', ['can reveal character', 'never matter', 'are spoken', 'replace dialogue'], 'Method.'),
    Q('What others say about a character:', ['can reveal their reputation or the speaker’s bias', 'is always true', 'is never relevant', 'is the narrator'], 'Perspective.'),
  ],
  'ali-narrative-1': [
    Q('Most African states gained independence in:', ['the 1950s and 1960s', 'the 1800s', 'the 1990s', 'the 1700s'], 'Decolonisation.'),
    Q('A griot is:', ['a West African oral storyteller and keeper of history', 'a novel', 'a king', 'a rhyme'], 'Oral tradition.'),
    Q('A chapter log helps you:', ['remember events, quotations and what each chapter sets up', 'count pages', 'choose a cover', 'write the author’s biography'], 'Revision.'),
    Q('A chronological structure:', ['tells events in time order', 'begins at the end', 'uses only flashbacks', 'has no time'], 'Order.'),
  ],
  'ali-african-1': [
    Q('The antagonist in an African novel may be:', ['a person, a group, a system or the hero’s weakness', 'only a monster', 'only the narrator', 'the publisher'], 'Opposing force.'),
    Q('Identity as a theme concerns:', ['who a person or people are and belong to', 'the weather', 'the price of books', 'grammar'], 'Belonging.'),
    Q('The place of women in African fiction is often explored through:', ['marriage, work and voice', 'the cover design', 'the index', 'the publisher'], 'Gender.'),
    Q('A thematic statement is:', ['a full sentence expressing an idea about life', 'a single word', 'a page number', 'a character’s name'], 'Idea.'),
  ],
  'ali-conceit-1': [
    Q('George Herbert and Andrew Marvell are:', ['metaphysical poets', 'Victorian novelists', 'modern playwrights', 'Romantic poets'], '17th century.'),
    Q('"Death, thou shalt die" is an example of:', ['paradox', 'simile', 'onomatopoeia', 'litotes'], 'Seeming contradiction.'),
    Q('Metaphysical poems often:', ['argue step by step and address someone directly', 'avoid argument', 'describe only flowers', 'have no speaker'], 'Reasoning.'),
    Q('A conceit draws its images from:', ['unexpected fields such as science and geography', 'only nature', 'only love letters', 'nothing'], 'Surprise.'),
  ],
  'ali-voice-1': [
    Q('Aimé Césaire and Léopold Sédar Senghor were leaders of:', ['Negritude', 'Romanticism', 'Imagism', 'Modernism in England'], 'Movement.'),
    Q('Call and response is a feature of:', ['oral and song traditions', 'sonnets only', 'blank verse', 'novels only'], 'Oral form.'),
    Q('The addressee of a poem is:', ['the person or thing spoken to', 'the poet', 'the publisher', 'the reader always'], 'Audience within the poem.'),
    Q('A poem’s turn is often marked by:', ['a shift in voice or tone', 'the title', 'the page number', 'the font'], 'Change.'),
  ],
  'ali-peel-1': [
    Q('The introduction of a literary essay should end with:', ['the thesis', 'a long plot summary', 'a quotation without comment', 'the author’s biography'], 'Argument.'),
    Q('Writing about a text uses mainly the:', ['present tense', 'future tense', 'past perfect', 'conditional'], 'Literary present.'),
    Q('A conclusion should not:', ['introduce new evidence', 'answer the question', 'sum up the argument', 'be clear'], 'No new material.'),
    Q('Key words of the question should appear:', ['in the thesis and the links', 'nowhere', 'only in the title', 'only at the end'], 'Relevance.'),
  ],
  'ali-quotes-1': [
    Q('A slash in a quotation of verse marks:', ['a line break', 'an omission', 'a pause in speech', 'a spelling error'], 'Verse quotation.'),
    Q('Long quotations are useful only when:', ['you analyse them closely', 'you want to fill space', 'you have no ideas', 'never'], 'Analysis.'),
    Q('Analysis explains:', ['how and why the text creates meaning', 'what happens next', 'who printed it', 'the price'], 'Method and effect.'),
    Q('"Full of scorpions is my mind" is spoken by:', ['Macbeth', 'Hamlet', 'Lear', 'Othello'], 'Act 3.'),
  ],

  // ---------- Lower Sixth, Terms 2 and 3 ----------
  'ali-modern-1': [
    Q('Henrik Ibsen and Anton Chekhov are known as founders of:', ['modern realist drama', 'Elizabethan tragedy', 'Greek comedy', 'Romantic poetry'], 'Late 19th century.'),
    Q('Bertolt Brecht’s epic theatre aimed to make the audience:', ['think critically rather than simply identify', 'cry only', 'sleep', 'sing'], 'Distance.'),
    Q('Samuel Beckett is associated with:', ['the theatre of the absurd', 'Romanticism', 'metaphysical poetry', 'the Victorian novel'], 'Waiting for Godot.'),
    Q('African drama often draws on:', ['ritual, music, dance and masquerade', 'only Greek myths', 'only radio', 'only film'], 'Performance traditions.'),
  ],
  'ali-staging-1': [
    Q('Stage directions are usually printed in:', ['italics', 'bold capitals', 'footnotes', 'another language'], 'Convention.'),
    Q('A blackout can create:', ['shock and confusion', 'comedy only', 'a rhyme', 'a narrator'], 'Effect.'),
    Q('A window onto the street in a set can suggest:', ['the outside world pressing on the family', 'nothing', 'the price of the house', 'the author’s address'], 'Symbol.'),
    Q('Treating a play as performance means discussing:', ['how scenes would work on stage', 'the printed font', 'the publisher', 'the book cover'], 'Theatre.'),
  ],
  'ali-pov-1': [
    Q('Third-person limited narration:', ['follows one character closely', 'knows every mind', 'uses "I"', 'has no narrator'], 'Close focus.'),
    Q('A child narrator can create:', ['dramatic irony', 'rhyme', 'blank verse', 'a chorus'], 'Innocent eye.'),
    Q('Multiple narrators give:', ['different perspectives on events', 'one view only', 'no story', 'a single voice'], 'Polyphony.'),
    Q('The narrator of a novel is:', ['not always the same as the author', 'always the author', 'always reliable', 'always a child'], 'Persona.'),
  ],
  'ali-victorian-1': [
    Q('The Brontë sisters wrote:', ['Jane Eyre and Wuthering Heights', 'Hamlet and Macbeth', 'Ulysses', 'Things Fall Apart'], 'Victorian novels.'),
    Q('Thomas Hardy’s novels are set mainly in:', ['rural Wessex in south-west England', 'London only', 'Africa', 'America'], 'Imagined region.'),
    Q('Context in an essay should be:', ['brief and used to explain the text', 'the main content', 'longer than the analysis', 'avoided always'], 'Use.'),
    Q('Serial publication encouraged:', ['cliffhangers at the end of instalments', 'shorter books', 'no plot', 'poetry'], 'Suspense.'),
  ],
  'ali-symbol-1': [
    Q('A symbol’s meaning comes mainly from:', ['context and repetition', 'the dictionary only', 'the cover', 'the font'], 'Use in the text.'),
    Q('Animal Farm retells, as allegory, the:', ['Russian Revolution', 'French Revolution', 'American Civil War', 'Fall of Rome'], 'Orwell, 1945.'),
    Q('A motif develops:', ['a theme through repetition', 'only the setting', 'the cover design', 'the index'], 'Recurrence.'),
    Q('A river in a novel often symbolises:', ['time, change or a boundary', 'a sandwich', 'a rhyme', 'a stage direction'], 'Common symbol.'),
  ],
  'ali-arc-1': [
    Q('A character arc traces:', ['how a character changes', 'the book’s sales', 'the cover', 'the narrator’s age'], 'Change.'),
    Q('Evidence of change is clearest when you:', ['compare early and late quotations', 'quote only the end', 'summarise the plot', 'list adjectives'], 'Contrast.'),
    Q('E. M. Forster distinguished characters as:', ['flat and round', 'good and bad', 'old and young', 'rich and poor'], 'Aspects of the Novel.'),
    Q('A fall from innocence to corruption is a kind of:', ['moral arc', 'subplot', 'rhyme', 'setting'], 'Decline.'),
  ],
  'ali-romantic-1': [
    Q('Samuel Taylor Coleridge is known for exploring:', ['the supernatural', 'industrial cities only', 'Victorian manners', 'war poetry'], 'The Rime of the Ancient Mariner.'),
    Q('The sublime is:', ['awe before vast or powerful nature', 'a type of rhyme', 'a stage', 'a narrator'], 'Romantic idea.'),
    Q('"I wandered lonely as a cloud" was written by:', ['William Wordsworth', 'John Keats', 'Percy Shelley', 'Lord Byron'], 'Daffodils.'),
    Q('Romantic poets often reacted against:', ['the industrial city and cold reason', 'nature', 'emotion', 'imagination'], 'Context.'),
  ],
  'ali-tone-1': [
    Q('A precise word for a regretful, longing tone about the past is:', ['nostalgic', 'sad', 'nice', 'bad'], 'Precision.'),
    Q('"My Last Duchess" was written by:', ['Robert Browning', 'Alfred Tennyson', 'John Donne', 'William Blake'], 'Dramatic monologue.'),
    Q('Christina Rossetti and Gerard Manley Hopkins were:', ['Victorian poets', 'Elizabethan playwrights', 'Romantic novelists', 'modern African poets'], 'Period.'),
    Q('Tone is shown through:', ['word choice, rhythm and punctuation', 'page numbers', 'the publisher', 'the title only'], 'Evidence.'),
  ],
  'ali-context-1': [
    Q('Before reading the extract, it helps to read:', ['the questions', 'the author’s biography', 'the cover', 'nothing'], 'Purpose.'),
    Q('A 1-mark "who is speaking" answer should be:', ['the correct name', 'a long paragraph', 'a quotation from elsewhere', 'a summary'], 'Precision.'),
    Q('Answers for 4 marks need:', ['a developed point with evidence', 'one word', 'a whole essay', 'nothing'], 'Scale.'),
    Q('Key speeches should be known by:', ['speaker, addressee, moment and purpose', 'page number only', 'colour', 'length'], 'Preparation.'),
  ],
  'ali-context-2': [
    Q('"I am not what I am" is spoken by:', ['Iago', 'Othello', 'Hamlet', 'Macbeth'], 'Othello, Act 1.'),
    Q('A timeline of key scenes helps you:', ['place extracts quickly', 'count pages', 'choose a cover', 'nothing'], 'Placing.'),
    Q('Paraphrasing a difficult line means:', ['restating it in plain modern English', 'copying it', 'deleting it', 'translating it into French'], 'Understanding.'),
    Q('An extract can be important because it:', ['reveals character, marks a turning point or develops a theme', 'is long', 'is printed in italics', 'has many commas'], 'Function.'),
  ],
  'ali-compare-1': [
    Q('"Unlike" introduces:', ['a contrast', 'a similarity', 'an example', 'a conclusion'], 'Difference.'),
    Q('"Likewise" introduces:', ['a similarity', 'a contrast', 'a cause', 'a time'], 'Likeness.'),
    Q('Differences between texts are often explained by:', ['their contexts', 'their page count', 'their covers', 'their prices'], 'Context.'),
    Q('Putting both texts in each topic sentence:', ['forces true comparison', 'is a mistake', 'wastes words', 'is forbidden'], 'Integration.'),
  ],
  'ali-compare-2': [
    Q('A comparative paragraph ends by:', ['weighing which difference matters most', 'adding a new text', 'retelling a plot', 'quoting the title'], 'Judgement.'),
    Q('"In contrast" belongs:', ['between contrasting points', 'at the start of the essay only', 'in the bibliography', 'nowhere'], 'Connective.'),
    Q('Balance means:', ['similar attention to each text', 'all attention to one', 'no evidence', 'only summaries'], 'Fairness.'),
    Q('Going beyond "both have" means explaining:', ['how and why they differ', 'their lengths', 'their covers', 'nothing'], 'Depth.'),
  ],
  'ali-l6-paper1': [
    Q('In 2026, Paper 1 of A Level Literature was on:', ['Thursday 11 June', 'Friday 12 June', 'Monday 15 June', 'Tuesday 2 June'], 'Afternoon.'),
    Q('A glossary entry should include:', ['a definition and an example', 'only the term', 'the page number', 'a drawing'], 'Usefulness.'),
    Q('Set-book details in Paper 1 may include:', ['plot milestones, characters and quotations', 'printing dates', 'cover colours', 'prices'], 'Knowledge.'),
    Q('Predicting the answer before reading options helps:', ['resist distractors', 'waste time', 'guess', 'nothing'], 'Method.'),
  ],
  'ali-figures-1': [
    Q('Assonance is:', ['repetition of vowel sounds', 'repetition of initial consonants', 'a pause', 'a run-on line'], 'Sound.'),
    Q('Antithesis is:', ['balancing opposite ideas', 'exaggeration', 'a comparison with like', 'a sound word'], 'Contrast.'),
    Q('"Buzz", "hiss" and "crash" are examples of:', ['onomatopoeia', 'metonymy', 'litotes', 'paradox'], 'Sound words.'),
    Q('A metaphor:', ['says one thing is another', 'uses "like" or "as"', 'exaggerates only', 'imitates sound'], 'Direct comparison.'),
  ],

  ...QUESTIONS_U6,
};
