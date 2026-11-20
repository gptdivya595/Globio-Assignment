'use strict';

const skills = ['Vocabulary', 'Grammar', 'Reading'];

const questions = [
  {
    skill: 'Vocabulary',
    prompt: 'Wo kann man Brot kaufen?',
    options: ['In der Apotheke.', 'In der Bäckerei.', 'In der Bibliothek.'],
    answer: 1,
    explanation: 'A Bäckerei is a bakery. An Apotheke is a pharmacy, and a Bibliothek is a library.',
    practice: ['Shops and what they sell', 'Match five shops to things you can buy there, such as Bäckerei → Brot.']
  },
  {
    skill: 'Vocabulary',
    prompt: 'Welcher Tag kommt nach Dienstag?',
    options: ['Montag', 'Donnerstag', 'Mittwoch'],
    answer: 2,
    explanation: 'Mittwoch (Wednesday) comes after Dienstag (Tuesday).',
    practice: ['Days of the week', 'Write the seven days in order, then say what day comes before and after each one.']
  },
  {
    skill: 'Vocabulary',
    prompt: 'Sie möchten Wasser trinken. Was sagen Sie?',
    options: ['Ein Glas Wasser, bitte.', 'Die Rechnung, bitte.', 'Wo ist der Bahnhof?'],
    answer: 0,
    explanation: 'Ein Glas Wasser, bitte means “A glass of water, please.”',
    practice: ['Ordering at a café', 'Say three orders aloud using …, bitte, then practise asking for the bill.']
  },
  {
    skill: 'Vocabulary',
    prompt: 'Was bedeutet „zu Fuß“?',
    options: ['Mit dem Auto.', 'Mit dem Zug.', 'Man geht.'],
    answer: 2,
    explanation: 'Zu Fuß means “on foot.” Man geht means “you walk” in this context.',
    practice: ['Getting around', 'Describe three journeys using zu Fuß, mit dem Bus and mit dem Zug.']
  },
  {
    skill: 'Grammar',
    prompt: 'Ich ___ in Berlin.',
    options: ['wohne', 'wohnst', 'wohnt'],
    answer: 0,
    explanation: 'Use wohne with ich. Compare du wohnst and er/sie wohnt.',
    practice: ['Present-tense endings', 'Write three sentences with wohnen, using ich, du and sie (she).']
  },
  {
    skill: 'Grammar',
    prompt: 'Welcher Satz ist richtig?',
    options: ['Heute ich arbeite zu Hause.', 'Heute arbeite ich zu Hause.', 'Heute ich zu Hause arbeite.'],
    answer: 1,
    explanation: 'In this statement the conjugated verb takes the second position. Heute comes first, then arbeite.',
    practice: ['Verb position in statements', 'Rewrite Ich arbeite zu Hause starting with Heute. Try the same pattern with Morgen and Am Montag.']
  },
  {
    skill: 'Grammar',
    prompt: '___ wohnst du? — In Wien.',
    options: ['Wer', 'Wann', 'Wo'],
    answer: 2,
    explanation: 'Wo asks about a place. Wer asks about a person and wann asks about a time.',
    practice: ['Question words', 'Write one question each about a person, place and time using wer, wo and wann.']
  },
  {
    skill: 'Grammar',
    prompt: 'Ich habe keinen Bruder und ___ Schwester.',
    options: ['keine', 'kein', 'keinen'],
    answer: 0,
    explanation: 'Schwester is feminine, so the form here is keine Schwester. Bruder is masculine, so it is keinen Bruder after habe.',
    practice: ['Negating nouns with kein', 'Practise saying what you don’t have using keinen Bruder, keine Schwester and kein Auto.']
  },
  {
    skill: 'Reading',
    passage: 'Apotheke\nMontag–Freitag: 9–18 Uhr\nSamstag: 9–12 Uhr\nSonntag geschlossen',
    prompt: 'Wann ist die Apotheke geöffnet?',
    options: ['Samstag um 15 Uhr.', 'Samstag um 11 Uhr.', 'Sonntag um 10 Uhr.'],
    answer: 1,
    explanation: 'On Saturday the pharmacy is open from 9 to 12. Sunday is closed.',
    practice: ['Opening hours', 'Read three opening-hours notices and answer “Is it open at this time?” for a weekday and a weekend.']
  },
  {
    skill: 'Reading',
    passage: 'Hallo Samira,\nder Deutschkurs beginnt heute um 18 Uhr in Raum 4. Bring bitte dein Buch mit.\nViele Grüße, Anna',
    prompt: 'Was soll Samira mitbringen?',
    options: ['Ihr Buch.', 'Ihr Handy.', 'Ihren Ausweis.'],
    answer: 0,
    explanation: 'Bring bitte dein Buch mit asks Samira to bring her book.',
    practice: ['Requests in short messages', 'Read three short messages and underline what the reader is asked to bring or do.']
  },
  {
    skill: 'Reading',
    passage: 'Hinweis: Heute fährt der Bus 12 nicht vom Bahnhof. Bitte steigen Sie am Rathaus ein.',
    prompt: 'Wo können Sie heute in den Bus 12 einsteigen?',
    options: ['Am Bahnhof.', 'Am Flughafen.', 'Am Rathaus.'],
    answer: 2,
    explanation: 'The notice says to board at the town hall (am Rathaus) today.',
    practice: ['Transport notices', 'Underline the old and new stop in a service notice. Look for words like nicht and heute.']
  },
  {
    skill: 'Reading',
    passage: 'Hallo Leo,\nich komme am Freitag um 17 Uhr am Bahnhof an. Können wir uns um 18 Uhr vor dem Kino treffen?\nMia',
    prompt: 'Wann möchte Mia Leo treffen?',
    options: ['Am Freitag um 17 Uhr.', 'Am Freitag um 18 Uhr.', 'Am Samstag um 18 Uhr.'],
    answer: 1,
    explanation: 'Mia arrives at 17:00 and suggests meeting at 18:00. The question asks for the meeting time.',
    practice: ['Times in invitations', 'Find the arrival time, meeting time and meeting place in three short invitations.']
  }
];
