const quizzes = {
  quiz1: [
    {
      id: 1,
      question: "Welche Angaben muss das Kennschild bzw. Namensschild enthalten?",
      answers: [
        { id: "a", text: "Name des Bewachungsgewerbetreibenden bzw. seiner Firma" },
        { id: "b", text: "Name und Anschrift des Bewachungsgewerbetreibenden" },
        { id: "c", text: "Name des Türstehers oder eine Kennnummer, die er vom Bewachungsgewerbetreibenden erhalten hat" },
        { id: "d", text: "Name und Anschrift des Türstehers" }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 2,
      question: "Welche Aussage zur Regelung von Dienstkleidung ist laut Bewachungsverordnung richtig?",
      answers: [
        { id: "a", text: "Sicherheitsmitarbeiter, die ein befriedetes Besitztum in Ausübung ihres Dienstes betreten sollen, müssen eine Dienstkleidung tragen" },
        { id: "b", text: "Sicherheitsmitarbeiter haben grundsätzlich die Pflicht, eine Uniform zu tragen, welche den Uniformen der behördlichen Vollzugsorgane ähnlich sein sollte" },
        { id: "c", text: "Sicherheitsmitarbeiter müssen nur dann Dienstkleidung tragen, wenn dies vom Auftraggeber ausdrücklich gefordert wird" },
        { id: "d", text: "Private Sicherheitsmitarbeiter müssen grundsätzlich überall und ausnahmslos eine Dienstkleidung tragen" }
      ],
      correct: ["a"],
      points: 1
    },
    {
      id: 3,
      question: "Für welche Bewachungstätigkeiten benötigen Wachpersonen die Bescheinigung über das Unterrichtungsverfahren gemäß § 34a GewO?",
      answers: [
        { id: "a", text: "Personenschutz, unabhängig von öffentlichem oder nicht-öffentlichem Verkehrsraum" },
        { id: "b", text: "Kontrollgänge auf U-Bahnhöfen und in S-Bahnen sowie in Empfangshallen von Flughäfen" },
        { id: "c", text: "Einsatz als sogenannte Wellenbrecher vor der Bühne zum Schutz der Musiker" },
        { id: "d", text: "Bewachung von zugangsgeschützten Großveranstaltungen in leitender Funktion" }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 4,
      question: "Welche Rechtsvorschriften gewährleisten in der Bundesrepublik Deutschland die Gewerbefreiheit?",
      answers: [
        { id: "a", text: "Das Bürgerliche Gesetzbuch" },
        { id: "b", text: "Die Bewachungsverordnung" },
        { id: "c", text: "Das Grundgesetz" },
        { id: "d", text: "Die Gewerbeordnung" }
      ],
      correct: ["c", "d"],
      points: 2
    },
    {
      id: 5,
      question: "Welche Angaben muss der Bewacherausweis von Sicherheitsmitarbeitern gemäß BewachV enthalten?",
      answers: [
        { id: "a", text: "Gültigkeitsdauer, Lichtbild des Gewerbetreibenden, Name, Vorname des Sicherheitsmitarbeiters sowie seine Zugehörigkeit zur Krankenkasse" },
        { id: "b", text: "Bezeichnung und Anschrift des Gewerbebetriebes, Bewacherregisteridentifikationsnummer des Gewerbebetriebes und der Wachperson" },
        { id: "c", text: "Name, Vorname und Unterschrift des Sicherheitsmitarbeiters, Name, Anschrift und Unterschrift des Gewerbetreibenden oder seines Vertreters" },
        { id: "d", text: "Name, Vorname des Sicherheitsmitarbeiters, Gültigkeitsdauer des Ausweises, Privatanschrift und Geburtsdatum des Sicherheitsmitarbeiters" }
      ],
      correct: ["b", "c"],
      points: 2
    },

    {
      id: 6,
      question: "Welche Aussagen zum Begriff „Bewachung\" sind gemäß § 34a GewO richtig?",
      answers: [
        { id: "a", text: "Bewachung liegt vor, wenn gewerbsmäßig das Leben oder das Eigentum fremder Personen vor Eingriffen Dritter geschützt wird" },
        { id: "b", text: "Bewachung liegt vor, wenn beispielsweise ein Ladendetektiv durch wiederkehrende Kontrollen fremdes Eigentum schützt" },
        { id: "c", text: "Bewachung liegt vor, wenn ein Unternehmer seinen Betrieb durch eigene Mitarbeiter bewachen lässt" },
        { id: "d", text: "Bewachung liegt selbst dann vor, wenn ausschließlich Alarmmeldungen entgegengenommen werden" }
      ],
      correct: ["a", "b"],
      points: 2
    },

    {
      id: 7,
      question: "Was ist gem. § 19 BewachV hinsichtlich der Dienstkleidung zu beachten?",
      answers: [
        { id: "a", text: "Ist nur im Objektschutz zu tragen" },
        { id: "b", text: "Darf nicht mit Polizei- oder Militäruniformen zu verwechseln sein" },
        { id: "c", text: "Ist stets im Dienst zu tragen" },
        { id: "d", text: "Es muss eine Dienstmütze getragen werden" }
      ],
      correct: ["b"],
      points: 1
    },

    {
      id: 8,
      question: "Was sind im Sinne von § 34a GewO keine Bewachungstätigkeiten?",
      answers: [
        { id: "a", text: "Einlasskontrollen durch Angestellte eines Fußballvereins" },
        { id: "b", text: "Aufklärungs- und Ermittlungstätigkeiten" },
        { id: "c", text: "Schutz vor Ladendieben" },
        { id: "d", text: "Revier- und Streifendienste (Citystreife)" }
      ],
      correct: ["a", "b"],
      points: 2
    },

    {
      id: 9,
      question: "Wozu sind die Wachpersonen gemäß BewachV im Umgang mit dem Bewacherausweis verpflichtet?",
      answers: [
        { id: "a", text: "Ausweis auf Verlangen der Vollzugsbehörden vorzeigen" },
        { id: "b", text: "Ausweis jeder Person vorzeigen" },
        { id: "c", text: "Ausweis und Identifikationsdokument während des Dienstes mitführen" },
        { id: "d", text: "Ausweis sichtbar tragen (außer Ladendetektive)" }
      ],
      correct: ["a", "c"],
      points: 2
    },

    {
      id: 10,
      question: "Welchen Inhalt muss ein Ausweis nach § 18 BewachV u.a. haben?",
      answers: [
        { id: "a", text: "Namen und Anschrift des Gewerbetreibenden" },
        { id: "b", text: "Bewacherregister-Identifikationsnummern" },
        { id: "c", text: "Stempel des Ordnungsamtes" },
        { id: "d", text: "Geburtsdatum, Gültigkeitsdauer" }
      ],
      correct: ["a", "b"],
      points: 2
    },

    {
      id: 11,
      question: "Welche Hinweise muss die Dienstanweisung zum Umgang mit Waffen enthalten?",
      answers: [
        { id: "a", text: "Waffen dürfen zur Eigensicherung geführt werden" },
        { id: "b", text: "Waffen nur mit Zustimmung des Gewerbetreibenden" },
        { id: "c", text: "Gebrauch unverzüglich der Gewerbebehörde melden" },
        { id: "d", text: "Gebrauch unverzüglich Polizei und Gewerbetreibendem melden" }
      ],
      correct: ["b", "d"],
      points: 2
    },

    {
      id: 12,
      question: "Wer erteilt die Bewachungserlaubnis gemäß § 34a GewO?",
      answers: [
        { id: "a", text: "Die nach Landesrecht zuständige Behörde" },
        { id: "b", text: "Die Berufsgenossenschaft" },
        { id: "c", text: "Die Polizei" },
        { id: "d", text: "Der Auftraggeber" }
      ],
      correct: ["a"],
      points: 1
    },

    {
      id: 13,
      question: "Wer gehört gemäß § 34a GewO zum Bewachungsgewerbe?",
      answers: [
        { id: "a", text: "Private Ermittler" },
        { id: "b", text: "Sicherheitsmitarbeiter im Geld- und Werttransport" },
        { id: "c", text: "Türsteher als Diskothekenangestellte" },
        { id: "d", text: "Ehrenamtliche Ordner" }
      ],
      correct: ["b"],
      points: 1
    },

    {
      id: 14,
      question: "Was muss der Gewerbetreibende jeder Wachperson gegen Empfangsbescheinigung aushändigen?",
      answers: [
        { id: "a", text: "Einen Abdruck der Dienstanweisung" },
        { id: "b", text: "Einen Abdruck der Bewachungsverordnung" },
        { id: "c", text: "Versicherungsnachweis" },
        { id: "d", text: "Unfallverhütungsvorschriften" }
      ],
      correct: ["a"],
      points: 1
    },

    {
      id: 15,
      question: "Was ist bei Kontrollgängen in einem Einkaufszentrum gewerberechtlich zu beachten?",
      answers: [
        { id: "a", text: "Namensschild oder Kennnummer sichtbar tragen" },
        { id: "b", text: "Qualifikation als Sicherheitskraft im Handel" },
        { id: "c", text: "IHK-Sachkundeprüfung nachweisen" },
        { id: "d", text: "Wächterkontrollgerät mitführen" }
      ],
      correct: ["a", "c"],
      points: 2
    },

    {
      id: 16,
      question: "Was muss unbedingt in der Dienstanweisung enthalten sein?",
      answers: [
        { id: "a", text: "Hinweis auf Unfallverhütungsvorschriften" },
        { id: "b", text: "Teilnahme an Dienstbesprechungen" },
        { id: "c", text: "Keine polizeilichen Befugnisse" },
        { id: "d", text: "Waffen nur mit Zustimmung des Gewerbetreibenden" }
      ],
      correct: ["c", "d"],
      points: 2
    },

    {
      id: 17,
      question: "Welche Hinweise müssen in der Dienstanweisung enthalten sein?",
      answers: [
        { id: "a", text: "Waffen nur mit Zustimmung des Gewerbetreibenden" },
        { id: "b", text: "Keine polizeilichen Befugnisse" },
        { id: "c", text: "Dienstkleidungspflicht außer Ladendetektive" },
        { id: "d", text: "Namensschildpflicht bei allen Tätigkeiten" }
      ],
      correct: ["a", "b"],
      points: 2
    },

    {
      id: 18,
      question: "Welche Aussagen zur Anzeigepflicht eines Gewerbes sind richtig?",
      answers: [
        { id: "a", text: "Gilt nur für Bewachungsgewerbe" },
        { id: "b", text: "Dient staatlicher Überwachung" },
        { id: "c", text: "Besteht nur bei Gewerbebeginn" },
        { id: "d", text: "Verstoß ist Ordnungswidrigkeit" }
      ],
      correct: ["b", "d"],
      points: 2
    },

    {
      id: 19,
      question: "Wer ist für die sichere Aufbewahrung von Waffen verantwortlich?",
      answers: [
        { id: "a", text: "Der diensthabende Mitarbeiter" },
        { id: "b", text: "Jeder bewaffnete Mitarbeiter" },
        { id: "c", text: "Der Sachkundige" },
        { id: "d", text: "Der Gewerbetreibende" }
      ],
      correct: ["d"],
      points: 1
    },

    {
      id: 20,
      question: "Wann müssen Wachpersonen bei der Behörde angemeldet werden?",
      answers: [
        { id: "a", text: "Bis Ende der Probezeit" },
        { id: "b", text: "Vier Wochen vorher" },
        { id: "c", text: "Am ersten Arbeitstag" },
        { id: "d", text: "Rechtzeitig vor Beschäftigungsbeginn" }
      ],
      correct: ["d"],
      points: 1
    },

    {
      id: 21,
      question: "Was legt die BewachV zur Dienstkleidung fest?",
      answers: [
        { id: "a", text: "Soll amtlichen Uniformen ähneln" },
        { id: "b", text: "Alle Sicherheitskräfte müssen Dienstkleidung tragen" },
        { id: "c", text: "Darf nicht mit amtlichen Uniformen verwechselt werden" },
        { id: "d", text: "Pflicht bei Betreten befriedeten Besitztums" }
      ],
      correct: ["c", "d"],
      points: 2
    },

    {
      id: 22,
      question: "Welche Angaben zur Wachperson müssen im Bewacherausweis enthalten sein?",
      answers: [
        { id: "a", text: "Lichtbild" },
        { id: "b", text: "Geburtsdatum und Wohnort" },
        { id: "c", text: "Familienname und Vorname" },
        { id: "d", text: "Bewacherregisteridentifikationsnummer" }
      ],
      correct: ["c", "d"],
      points: 2
    },

    {
      id: 23,
      question: "Wer ist gemäß BewachV von der Unterrichtung befreit?",
      answers: [
        { id: "a", text: "Mittlerer Zolldienst mit Waffenberechtigung" },
        { id: "b", text: "Rechtswissenschaftliches Hochschulstudium" },
        { id: "c", text: "Mittlerer Justizvollzugsdienst" },
        { id: "d", text: "Zwei Jahre Berufserfahrung" }
      ],
      correct: ["a", "c"],
      points: 2
    },

    {
      id: 24,
      question: "Welche Personen dürfen ohne Sachkundeprüfung tätig werden?",
      answers: [
        { id: "a", text: "IHK-Unterrichtung (40 Stunden)" },
        { id: "b", text: "Feldjäger der Bundeswehr" },
        { id: "c", text: "Zwei Jahre Berufserfahrung" },
        { id: "d", text: "Mittlerer Polizeivollzugsdienst" }
      ],
      correct: ["b", "d"],
      points: 2
    },

    {
      id: 25,
      question: "Welche Tätigkeitsbereiche müssen ein Namens- oder Kennschild tragen?",
      answers: [
        { id: "a", text: "Werkschutzmitarbeiter" },
        { id: "b", text: "Citystreifen im öffentlichen Raum" },
        { id: "c", text: "Kaufhausdetektive" },
        { id: "d", text: "Türsteher in Diskotheken" }
      ],
      correct: ["b", "d"],
      points: 2
    }
  ],
  
quiz2: [
  {
    id: 1,
    question: "Welche Rechte haben Wachpersonen bei der Durchführung von Bewachungsaufgaben?",
    answers: [
      { id: "a", text: "Sie dürfen als Beliehene vom Staat übertragene Befugnisse eigenverantwortlich ausüben." },
      { id: "b", text: "Sie dürfen eigenverantwortlich Polizeirechte ausüben, wenn sie die Grundsätze der Verhältnismäßigkeit und Zweckmäßigkeit beachten." },
      { id: "c", text: "Sie dürfen gegenüber Dritten z. B. nur die Rechte eigenverantwortlich ausüben, die jedermann zustehen, etwa die Notwehr oder den Notstand." }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 2,
    question: "Welche der folgenden Grundrechte des Grundgesetzes sind Bürgerrechte?",
    answers: [
      { id: "a", text: "Freie Berufswahl" },
      { id: "b", text: "Gleichheit vor dem Gesetz" },
      { id: "c", text: "Schutz der Menschenwürde" },
      { id: "d", text: "Versammlungsfreiheit" }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 3,
    question: "Was wird unter dem Privatrecht verstanden?",
    answers: [
      { id: "a", text: "Das Privatrecht beschreibt die Rechtsfolgen für Straftaten und Ordnungswidrigkeiten, z.B. Geld- oder Freiheitsstrafen, Geldbußen" },
      { id: "b", text: "Das Privatrecht ist ein Teil des öffentlichen Rechts und regelt die Rechtsbeziehung zwischen Staat und Bürger" },
      { id: "c", text: "Das Privatrecht legt im Wesentlichen fest, welche Freiheiten, Rechte und Pflichten die Menschen im Verhältnis zueinander haben" },
      { id: "d", text: "Das Privatrecht regelt die Rechtsbeziehungen zwischen gleichgestellten natürlichen und juristischen Personen" }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 4,
    question: "Welche Aussagen treffen auf private Sicherheitsdienste zu?",
    answers: [
      { id: "a", text: "Private Sicherheitsdienstleister und deren Mitarbeiter besitzen die Eigenschaft und die Befugnisse von Hilfspolizeibeamten" },
      { id: "b", text: "Private Sicherheitsdienstleister dürfen bei der Durchführung von Bewachungsaufgaben gegenüber Dritten bestimmte Rechte eigenverantwortlich ausüben. Dazu zählen Notwehr- und Notstandsrechte und vom Auftraggeber vertraglich übertragene Selbsthilferechte" },
      { id: "c", text: "Private Sicherheitsdienstleister gewährleisten bei Kontrollgängen im öffentlichen Verkehrsraum Sicherheit und Ordnung auf der Basis von privatrechtlichen Verträgen" },
      { id: "d", text: "Private Sicherheitsdienstleister sind für die öffentliche Sicherheit und Ordnung verantwortlich. Die Grundlage hierfür sind privatrechtliche Vereinbarungen" }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 5,
    question: "Was für Rechte dürfen Wachpersonen, die Kontrollgänge im öffentlichen Verkehrsraum durchführen, eigenverantwortlich ausüben?",
    answers: [
      { id: "a", text: "Sie dürfen zur Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung wie Polizeibeamte tätig werden, z. B. Platzverweise erteilen" },
      { id: "b", text: "Sie dürfen aufgrund eines privatrechtlichen Auftragsverhältnisses tätig werden d.h., sie dürfen Notwehr- und Notstandsrechte und übertragene Selbsthilferechte wahrnehmen" },
      { id: "c", text: "Sie dürfen bei Verkehrsordnungswidrigkeiten Verwarnungsgelder erheben, z. B. beim Parken im Parkverbot" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 6,
    question: "Welche Funktionen erfüllen die Grundrechte des Grundgesetzes?",
    answers: [
      { id: "a", text: "Sie schützen den Bürger gegen staatliche Eingriffe in seinen Freiheitsbereich. Es sind Abwehrrechte des Bürgers" },
      { id: "b", text: "Sie garantieren jedem Bürger auf dem Gebiet der Bundesrepublik Deutschland das Recht auf Arbeit" },
      { id: "c", text: "Sie begrenzen die Staatsgewalt. Dies bedeutet, dass der Staat die Grundrechte bei seinen Entscheidungen beachten muss" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 7,
    question: "Wer ist im Bereich der Judikative beschäftigt?",
    answers: [
      { id: "a", text: "Sachbearbeiter der Gewerbebehörde" },
      { id: "b", text: "Justizvollzugsbeamte" },
      { id: "c", text: "Polzeivollzugsbeamte" },
      { id: "d", text: "Richter" }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 8,
    question: "Welche Institutionen zählen zur \"gesetzgebenden Gewalt\"?",
    answers: [
      { id: "a", text: "Die Staatsanwaltschaft" },
      { id: "b", text: "Die Regierungen der Bundesländer" },
      { id: "c", text: "Der Bundestag" },
      { id: "d", text: "Der Bundesrat" }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 9,
    question: "Es gibt in Deutschland eine \"horizontale\" Gewaltenteilung. Welche der nachfolgenden Aussagen ist korrekt?",
    answers: [
      { id: "a", text: "die Antworten 1, 3 und 5 sind richtig" },
      { id: "b", text: "die Antworten 2, 4 und 6 sind richtig" },
      { id: "c", text: "die Antworten 1 , 2 und 5 sind richtig" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 10,
    question: "Welche Rechte haben SMA gegenüber anderen Bürgern bei der Durchführung von Bewachungsaufgaben?",
    answers: [
      { id: "a", text: "in Gefahrensituationen die Befugnisse eines Bediensteten von Sicherheitsbehör¬den" },
      { id: "b", text: "in Erfüllung des Auftrages die vom Auftraggeber vertraglich übertragenen Besitz¬- und Selbsthilferechte" },
      { id: "c", text: "in Ausnahmesituationen die Notwehr- und Notstandsrechte" }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 11,
    question: "In welchem Bereich ist die Polizei zuständig?",
    answers: [
      { id: "a", text: "Im privaten Bereich z.B. mit Durchsuchungsbeschluss oder bei Gefahr im Verzug" },
      { id: "b", text: "Immer in allen Bereichen" },
      { id: "c", text: "Grundsätzlich im öffentlichen Bereich" },
      { id: "d", text: "Nur im öffentlichen Bereich" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 12,
    question: "Welche der nachfolgenden Aussagen verstößt gegen die Rechtsordnung der Bundesrepublik Deutschland?",
    answers: [
      { id: "a", text: "Das Anspucken einer Wachperson, welche den Einlass eines Kaufhauses sichert." },
      { id: "b", text: "Die Durchsuchung einer Wohnung durch die Polizei, auf Grund eines Durchsuchungsbeschlusses." },
      { id: "c", text: "Die Bestrafung einer Person mit einer Geldstrafe ohne gesetzliche Grundlage" },
      { id: "d", text: "Die Untersagung einer Bewachungserlaubnis auf Grund von drei Vorstrafen, wegen verschiedener Verbrechen in den letzten drei Jahren" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 13,
    question: "Wer darf in der Bundesrepublik Deutschland Gesetze erlassen, die bundesweit gelten?",
    answers: [
      { id: "a", text: "Landtag" },
      { id: "b", text: "Bundesregierung" },
      { id: "c", text: "Bundestag" },
      { id: "d", text: "Landesregierung" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 14,
    question: "Welche Aussagen zu den Befugnissen einer Wachperson sind richtig?",
    answers: [
      { id: "a", text: "Wachpersonen dürfen bei der Durchführung von Bewachungsaufgaben gegenüber Dritten z.B. Notstandsrechte eigenverantwortlich ausüben" },
      { id: "b", text: "Wachpersonen haben die gleichen Befugnisse wie Polizeibeamte oder Hilfspolizeibeamte, z.B. die Durchsuchung eines Täters nach Waffen." },
      { id: "c", text: "Wachpersonen müssen bei der Inanspruchnahme ihrer Befugnisse den Grundsatz der Erforderlichkeit beachten" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 15,
    question: "Welche Maßnahme dürfen Wachpersonen durchführen?",
    answers: [
      { id: "a", text: "Sie dürfen Taschenkontrollen durchführen, wenn die von der Kontrolle betroffene Person damit einverstanden ist." },
      { id: "b", text: "Sie dürfen einen auf frischer Tat betroffenen Dieb ohne dessen Einwilligung durchsuchen, um ihm das Diebesgut abzunehmen." },
      { id: "c", text: "Sie dürfen als Türsteher bei Einlasskontrollen aufgefundene Reizstoffsprühgeräte beschlagnahmen." }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 16,
    question: "Welche grundsätzlichen Aufgaben hat die Polizei in Deutschland?",
    answers: [
      { id: "a", text: "Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung" },
      { id: "b", text: "Leitung des Ermittlungsverfahrens (Anklagebehörde)" },
      { id: "c", text: "Verfolgung von Straftaten und Ordnungswidrigkeiten" },
      { id: "d", text: "Durchsetzung privater Rechte (z.B. Hausverbot)" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 17,
    question: "Das Recht auf freie Entfaltung seiner Persönlichkeit (Art. 2 GG) ...",
    answers: [
      { id: "a", text: "beinhaltet auch das informationelle Selbstbestimmungsrecht" },
      { id: "b", text: "ist ein Bürgerrecht" },
      { id: "c", text: "ist ein Menschenrecht" },
      { id: "d", text: "stellt jedem Menschen frei, zu tun und zu lassen, was er möchte." },
      { id: "e", text: "erlaubt jedem Menschen in Deutschland seinen Wohnsitz und Aufenthaltsort frei zu bestimmen" },
      { id: "f", text: "ist ein Grundrecht, welches in keiner Weise eingeschränkt werden darf" }
    ],
    correct: ["a","c"],
    points: 1
  },
  {
    id: 18,
    question: "Was sind wesentliche Aufgaben der Polizei, des Bundes und der Länder?",
    answers: [
      { id: "a", text: "Bürger dabei zu unterstützen, ihre zivilrechtlichen Ansprüche gegen andere Bürger durchzusetzen" },
      { id: "b", text: "Die Gefahrenabwehr zum Wohle der öffentlichen Sicherheit und Ordnung" },
      { id: "c", text: "Straftaten zu erforschen und zu verfolgen" }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 19,
    question: "Welche Kooperationsmöglichkeit ist im Rahmen einer Public-Private-Partnership-Vereinbarung zwischen der Polizei und einem privaten Sicherheitsdienst denkbar?",
    answers: [
      { id: "a", text: "Gemeinschaftliche und arbeitsteilige Strafverfolgung, z.B. Verhaftung von Straftätern" },
      { id: "b", text: "Hilfeleistung und Informationsaustausch, z.B. bei Sach- und Personenfahndungen" },
      { id: "c", text: "Verkehrsüberwachung mit repressiven und präventiven Maßnahmen, z.B. durch Verkehrskontrollen" },
      { id: "d", text: "Verkehrslenkung und Verkehrsregelung im Einzelfall, z.B. bei Großveranstaltungen" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 20,
    question: "Welche Aufgaben hat die Staatsanwaltschaft?",
    answers: [
      { id: "a", text: "Lenkung des Ermittlungsverfahrens" },
      { id: "b", text: "Leitung des Strafverfahrens" },
      { id: "c", text: "Erlass von Haftbefehlen" },
      { id: "d", text: "Erhebung der Anklage" }
    ],
    correct: ["a","d"],
    points: 1
  },
  {
    id: 21,
    question: "Welche Begriffe sind dem Bürgerlichen Recht zuzuordnen?",
    answers: [
      { id: "a", text: "Unerlaubte Handlung" },
      { id: "b", text: "Gewaltmonopol" },
      { id: "c", text: "Exekutive" },
      { id: "d", text: "Besitzdiener" },
      { id: "e", text: "Bewacherregister" }
    ],
    correct: ["a","d"],
    points: 1
  },
  {
    id: 22,
    question: "In welchem Verhältnis stehen sich Staat und Bürger im öffentlichen Recht gegenüber?",
    answers: [
      { id: "a", text: "Staat und Bürger sind gleichberechtigt" },
      { id: "b", text: "Es gibt keinen Unterschied zwischen öffentlichem Recht und privatem Recht. In beiden Rechtsgebieten stehen sich Staat und Bürger gleich gegenüber." },
      { id: "c", text: "Der Staat ist dem Bürger übergeordnet" },
      { id: "d", text: "Unabhängig von den Rechtsgebieten, ist der Staat dem Bürger immer übergeordnet." },
      { id: "e", text: "Der Bürger ist dem Staat übergeordnet" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 23,
    question: "Kaufhausdetektiv Klaus hat den Auftrag, einen Diebstahl aufzuklären. Klaus soll den Täter befragen. Auf was sollte Klaus den Täter vor Beginn der Befragung hinweisen?",
    answers: [
      { id: "a", text: "Klaus sollte den Täter darauf hinweisen, dass er nur mit einer Geldstrafe zu rechnen habe, wenn er den Diebstahl zugibt." },
      { id: "b", text: "Klaus sollte den Täter darauf hinweisen, dass die Angabe seiner Personalien freiwillig ist." },
      { id: "c", text: "Klaus sollte den Täter darauf hinweisen, dass er nicht verpflichtet ist, zum Vorwurf des Diebstahls auszusagen." },
      { id: "d", text: "Klaus sollte den Täter darauf hinweisen, dass er seine Taschen nach einem Ausweis durchsuchen darf, wenn er seine Personalien nicht angeben will." }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 24,
    question: "Welche der folgenden Aussagen beschreibt die Anwendbarkeit des Opportunitätsprinzips bei Ordnungswidrigkeiten (Owi) im deutschen Recht am besten?",
    answers: [
      { id: "a", text: "Das Opportunitätsprinzip ist nur bei geringfügigen Ordnungswidrigkeiten anwendbar, bei denen die mögliche Geldbuße 50 Euro nicht übersteigt." },
      { id: "b", text: "Das Opportunitätsprinzip und das Legalitätsprinzip finden unabhängig voneinander im Ordnungswidrigkeitenrecht Anwendung, da beide im öffentlichen Recht dem Staat die Möglichkeit geben eine Ordnungswidrigkeit nicht zu verfolgen." },
      { id: "c", text: "Das Opportunitätsprinzip gilt grundsätzlich bei Ordnungswidrigkeiten, sodass die Verfolgungsbehörde nach pflichtgemäßem Ermessen entscheiden kann, ob sie eine Verfolgung aufnimmt." },
      { id: "d", text: "Das Opportunitätsprinzip ist bei Ordnungswidrigkeiten ausgeschlossen, es gilt ausschließlich das Legalitätsprinzip." },
      { id: "e", text: "Die Verfolgungsbehörde muss bei Ordnungswidrigkeiten immer ein Verfahren einleiten, hat aber Ermessen bei der Festsetzung der Geldbuße." }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 25,
    question: "Im deutschen Rechtssystem sind Rechtfertigungsgründe verankert. Was ist deren Sinn und Zweck?",
    answers: [
      { id: "a", text: "Sie können strafbares Handeln rechtfertigen" },
      { id: "b", text: "Sie können unerlaubtes Handeln rechtfertigen" },
      { id: "c", text: "Sie können verbotenes Handeln entschuldigen" },
      { id: "d", text: "Sie können ordnungswidriges Handeln entschuldigen" }
    ],
    correct: ["a","b"],
    points: 2
  }
  ],
  
quiz3: [
  {
    id: 1,
    question: "Ladendetektiv L soll im Dienst einen Teleskopschlagstock mitführen. Unter welchen Voraussetzungen ist dies gemäß BewachV zulässig?",
    answers: [
      { id: "a", text: "Wenn der Auftraggeber zustimmt" },
      { id: "b", text: "Wenn der Bewachungsgewerbetreibende dies durch seine Zustimmung genehmigt hat." },
      { id: "c", text: "Wenn L diese Hiebwaffe zur Eigensicherung benötigt" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 2,
    question: "Welche Rechtsvorschriften gewährleisten in der Bundesrepublik Deutschland die Gewerbefreiheit?",
    answers: [
      { id: "a", text: "Die Gewerbeordnung." },
      { id: "b", text: "Das Bürgerliche Gesetzbuch." },
      { id: "c", text: "Das Grundgesetz." },
      { id: "d", text: "Die Bewachungsverordnung." }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 3,
    question: "Für alle Arten des Bewachungsgewerbes müssen Wachpersonen Kenntnisse über fachspezifische Rechte, Pflichten und Befugnisse besitzen. Welche Sachgebiete fallen darunter?",
    answers: [
      { id: "a", text: "Arbeitsrecht" },
      { id: "b", text: "Umweltrecht" },
      { id: "c", text: "Datenschutzrecht" },
      { id: "d", text: "Bürgerliches Gesetzbuch" }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 4,
    question: "Wer muss gemäß BewachV ein Schild (Kennschild/Namensschild) tragen?",
    answers: [
      { id: "a", text: "Wachpersonen, die die Bewachungstätigkeit 'Schutz: vor Ladendieben' durchführen" },
      { id: "b", text: "Wachpersonen, die in nicht-leitender Funktion Asylunterkünfte bewachen, z.B. im Eingangsbereich" },
      { id: "c", text: "Wachpersonen, die die Bewachungstätigkeit 'Geld- und Werttransport' durchführen" },
      { id: "d", text: "Gewerbetreibende, die als Wachperson tätig werden und die Bewachungstätigkeit 'Kontrollgänge im öffentlichen Verkehrsraum' durchführen" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 5,
    question: "Ein SMA will als 'Ladendetektiv' arbeiten. Mit welchem Nachweis kann er diese Tätigkeit gemäß gewerberechtlicher Bestimmungen ausüben?",
    answers: [
      { id: "a", text: "mit dem Nachweis einer vor der IHK erfolgreich abgelegten Sachkundeprüfung gemäß § 34a GewO" },
      { id: "b", text: "mit dem Nachweis der Teilnahme am Unterrichtungsverfahren einer IHK gemäß §34a GewO" },
      { id: "c", text: "mit dem Nachweis des Abschlusses einer Berufsausbildung als Einzelhandelskaufmann" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 6,
    question: "Welche Voraussetzungen muss ein Sicherheitsmitarbeiter gemäß § 34a GewO und BewachV erfüllen, um im Sicherheitsgewerbe arbeiten zu dürfen?",
    answers: [
      { id: "a", text: "Er muss einen Berufsabschluss besitzen und mindestens 21 Jahre alt sein" },
      { id: "b", text: "Er muss zuverlässig sein und das 18. Lebensjahr vollendet haben" },
      { id: "c", text: "Er muss am Unterrichtungsverfahren für Bewachungspersonal teilgenommen haben" },
      { id: "d", text: "Er muss die deutsche Staatsangehörigkeit besitzen" }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 7,
    question: "Welche der folgenden Tätigkeiten erfordern die Ablegung der IHK-Sachkundeprüfung gemäß § 34a GewO?",
    answers: [
      { id: "a", text: "Parkplatzeinweisungen im öffentlichen Verkehrsraum" },
      { id: "b", text: "Bewachungen von gefährdeten Objekten" },
      { id: "c", text: "Kontrollgänge im öffentlichen Verkehrsraum" },
      { id: "d", text: "Tätigkeiten zum Schutz vor Ladendieben" }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 8,
    question: "Welche Pflicht muss der Gewerbetreibende gemäß BewachV erfüllen?",
    answers: [
      { id: "a", text: "Er muss dafür sorgen, dass seine Wachperson die Sachkundeprüfung erfolgreich ablegen, damit sie Bewachungstätigkeiten wie Geld- und Werttransporte durchführen dürfen" },
      { id: "b", text: "Er muss seine Wachpersonen spätestens vor der ersten Aufnahme der Bewachungstätigkeiten einen Ausweis ausstellen" },
      { id: "c", text: "Er muss zur Überprüfung der Zuverlässigkeit seiner Wachperson eine unbeschränkte Auskunft aus dem Bundeszentralregister einholen." },
      { id: "d", text: "Er muss seine Wachpersonen Dienstkleidung zur Verfügung stellen, die bei allen Bewachungstätigkeiten getragen werden muss" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 9,
    question: "Wer benötigt die bestandene Sachkundeprüfung?",
    answers: [
      { id: "a", text: "Geld- und Wertransporteure" },
      { id: "b", text: "So genannte 'Citystreifen'" },
      { id: "c", text: "Grundsätzlich alle Wachdienstmitarbeiter, die Einlasskontrollen durchführen (z. B. bei Veranstaltungen)" },
      { id: "d", text: "Türsteher im Einlassbereich gastgewerblicher Diskotheken" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 10,
    question: "Gemäß Bewachungsverordnung müssen Sie einen Bewacherausweis mitführen. Welche Informationen müssen zwingend hinterlegt sein?",
    answers: [
      { id: "a", text: "Antwort 1; 3 und 4 sind richtig" },
      { id: "b", text: "Antwort 2 und 4 sind richtig" },
      { id: "c", text: "Antwort 1; 3 und 5 sind richtig" },
      { id: "d", text: "Antwort 1; 2 und 3 sind richtig" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 11,
    question: "Welche Aussagen zur Anzeigepflicht eines selbstständigen Betriebes sind gemäß GewO richtig?",
    answers: [
      { id: "a", text: "Die Anzeigepflicht gilt nur für das erlaubnispflichtige Bewachungsgewerbe" },
      { id: "b", text: "Die Anzeigepflicht besteht nur, wenn das Gewerbe begonnen wird" },
      { id: "c", text: "Die Anzeigepflicht dient dem Zweck, die staatliche Überwachung der Gewerbeausübung zu ermöglichen, z. B. durch die Gewerbeaufsicht" },
      { id: "d", text: "Wer vorsätzlich oder fahrlässig seiner Anzeigepflicht nicht nachkommt, handelt gemäß GewO ordnungswidrig" }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 12,
    question: "Für welche Tätigkeiten ist gemäß § 34a GewO eine vor der Industrie- und Handelskammer erfolgreich abgelegte Sachkundeprüfung erforderlich?",
    answers: [
      { id: "a", text: "Für die Bewachung des Einlassbereiches eines Hotels, in dem ein Sommerball veranstaltet wird" },
      { id: "b", text: "Für die ausschließliche Entgegennahme und Weiterleitung von Alarmmeldungen durch Notrufzentralen" },
      { id: "c", text: "Für die Durchführung von Kontrollgängen in der Fußgängerzone einer Stadt" },
      { id: "d", text: "Für die Bewachung von Asyl- und Flüchtlingsunterkünften in leitender Funktion" }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 13,
    question: "Welche Aussage zur Regelung von Dienstkleidung ist laut Bewachungsverordnung richtig?",
    answers: [
      { id: "a", text: "Sicherheitsmitarbeiter, die ein befriedetes Besitztum in Ausübung ihres Dienstes betreten sollen, müssen eine Dienstkleidung tragen" },
      { id: "b", text: "Sicherheitsmitarbeiter müssen nur dann Dienstkleidung tragen, wenn dies vom Auftraggeber ausdrücklich gefordert wird" },
      { id: "c", text: "Sicherheitsmitarbeiter haben grundsätzlich die Pflicht, eine Uniform zu tragen, welche den Uniformen der behördlichen Vollzugsorgane ähnlich sein sollte" },
      { id: "d", text: "Private Sicherheitsmitarbeiter müssen grundsätzlich überall und ausnahmslos in jedem Tätigkeitsbereich eine Dienstkleidung tragen" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 14,
    question: "Welche Unterlagen benötigt die Erlaubnisbehörde unter anderem, um den Antrag auf Erteilung einer Bewachungserlaubnis gemäß § 34a GewO zu prüfen?",
    answers: [
      { id: "a", text: "Den Nachweis der erforderlichen Sachkundeprüfung für das Bewachungsgewerbe" },
      { id: "b", text: "Die Bescheinigung über die Teilnahme am Unterrichtungsverfahren" },
      { id: "c", text: "Ein persönliches Führungszeugnis zur Überprüfung der Zuverlässigkeit des Antragstellers" },
      { id: "d", text: "Eine unbeschränkte Auskunft aus dem Bundeszentralregister zur Überprüfung der Zuverlässigkeit des Antragstellers" }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 15,
    question: "Was besagt § 17 BewachV hinsichtlich der Dienstanweisung?",
    answers: [
      { id: "a", text: "Mitarbeiter dürfen nur mit ausdrücklicher Genehmigung der Firmenleitung im Dienst Waffen tragen." },
      { id: "b", text: "Jeder Mitarbeiter muss gegen Empfangsbescheinigung ein Exemplar der Dienstanweisung erhalten." },
      { id: "c", text: "Die Dienstanweisung ist immer zu befolgen." },
      { id: "d", text: "Die Dienstanweisung ist im Dienst bei sich zu führen." }
    ],
    correct: ["a","b"],
    points: 2
  },
  {
    id: 16,
    question: "Was legt die Bewachungsverordnung bezüglich der Dienstkleidung des Wachpersonals fest?",
    answers: [
      { id: "a", text: "Alle privaten Sicherheitskräfte haben die Pflicht eine erkennbare Dienstkleidung zu tragen" },
      { id: "b", text: "Wachpersonen, die eingefriedetes Besitztum in Ausübung ihres Dienstes betreten, müssen eine Dienstkleidung tragen" },
      { id: "c", text: "Die Dienstkleidung von Wachpersonal sollte den amtlichen Uniformen ähnlich sein, damit das Sicherheitspersonal besser zu erkennen ist" },
      { id: "d", text: "Die Dienstkleidung von Wachpersonal darf nicht mit amtlichen Uniformen verwechselt werden können" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 17,
    question: "Was muss ein Dienstausweis gemäß Bewachungsverordnung (BewachV) beinhalten?",
    answers: [
      { id: "a", text: "Namen und Anschrift des Gewerbetreibenden" },
      { id: "b", text: "Namen und Vornamen des Gewerbetreibenden" },
      { id: "c", text: "Namen und Anschrift des Ausweisinhabers" },
      { id: "d", text: "Namen und Vornamen des Ausweisinhabers" }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 18,
    question: "Wo sind die Pflichten für SMA beschrieben?",
    answers: [
      { id: "a", text: "in der DGUV 23" },
      { id: "b", text: "im Grundgesetz" },
      { id: "c", text: "in der BewachV" },
      { id: "d", text: "in der Strafprozessordnung (StPO)" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 19,
    question: "Wann besitzt eine Wachperson nicht die erforderliche Zuverlässigkeit gemäß § 34a GewO?",
    answers: [
      { id: "a", text: "Wenn sie vor drei Jahren rechtskräftig wegen Beleidigung zu einer Geldstrafe von 60 Tagessätzen verurteilt worden ist" },
      { id: "b", text: "Wenn sie wegen eines Verbrechens, z. B. Raub, vor zehn Jahren rechtskräftig verurteilt worden ist" },
      { id: "c", text: "Wenn sie Mitglied einer demokratisch legitimierten politischen Partei ist" },
      { id: "d", text: "Wenn sie Mitglied in einem Verein ist, der nach dem Vereinsgesetz als Organisation unanfechtbar verboten wurde" }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 20,
    question: "Wer benötigt zur Durchführung von Bewachungsaufgaben keine IHK-Unterrichtung gemäß § 34a Gewerbeordnung (GewO)?",
    answers: [
      { id: "a", text: "Personen mit bestandener Sachkundeprüfung gem. § 34a GewO" },
      { id: "b", text: "Sicherheitsmitarbeiter mit mindestens 3-jähriger Berufserfahrung" },
      { id: "c", text: "Alle Zeit- und Berufssoldaten mit mindestens 4-jähriger Dienstzeit" },
      { id: "d", text: "Polizeibeamte nach bestandener Laufbahnprüfung" }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 21,
    question: "Wozu ist ein Sicherheitsunternehmer nach der Bewachungsverordnung verpflichtet?",
    answers: [
      { id: "a", text: "Er muss eine Haftpflichtversicherung abschließen" },
      { id: "b", text: "Er hat eine Rechtsschutzversicherung abzuschließen" },
      { id: "c", text: "Er hat seinen Wachpersonen einen Dienstausweis auszustellen" },
      { id: "d", text: "Er darf grundsätzlich keine zuverlässigen Personen beschäftigen" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 22,
    question: "Welche Angaben muss der Bewacherausweis von Sicherheitsmitarbeitern gemäß BewachV enthalten?",
    answers: [
      { id: "a", text: "Name, Vorname des Sicherheitsmitarbeiters, Gültigkeitsdauer des Ausweises, Privatanschrift und Geburtsdatum des Sicherheitsmitarbeiters" },
      { id: "b", text: "Name, Vorname und Unterschrift des Sicherheitsmitarbeiters, Name, Anschrift und Unterschrift des Gewerbetreibenden oder seines Vertreters" },
      { id: "c", text: "Gültigkeitsdauer, Lichtbild des Gewerbetreibenden, Name, Vorname des Sicherheitsmitarbeiters sowie seine Zugehörigkeit zur Krankenkasse" },
      { id: "d", text: "Bezeichnung und Anschrift des Gewerbebetriebes, Bewacherregisteridentifikationsnummer des Gewerbebetriebes und der Wachperson" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 23,
    question: "Müssen Wachpersonen ihren Bewacherausweis gemäß BewachV sichtbar tragen?",
    answers: [
      { id: "a", text: "Ja, während des Wachdienstes. Ausgenommen davon ist der 'Personenschutz'. Personenschützer müssen den Ausweis nur mitführen" },
      { id: "b", text: "Nein, während des Wachdienstes müssen Wachpersonen den Ausweis mitführen und auf Verlangen den Beauftragten der Vollzugsbehörden vorzeigen" },
      { id: "c", text: "Ja, während des Wachdienstes. Dies gilt aber nur für sachkundepflichtige Bewachungstätigkeiten wie 'Kontrollgänge im öffentlichen Verkehrsraum'" },
      { id: "d", text: "Ja, während des Wachdienstes. Diese Tragepflicht entfällt allerdings, wenn die Wachpersonen ein Kennschild bzw. ein Namensschild sichtbar tragen" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 24,
    question: "Welche Regelung muss eine Dienstanweisung gemäß Bewachungsverordnung enthalten?",
    answers: [
      { id: "a", text: "Dienstanweisungen müssen die besonderen Eingriffsbefugnisse des Wachpersonals regeln" },
      { id: "b", text: "Dienstanweisungen müssen den Hinweis enthalten, dass die Wachpersonen nicht die Eigenschaft und die Befugnisse eines Polizeibeamten besitzen" },
      { id: "c", text: "Dienstanweisungen müssen Regelungen zum Führen von Waffen sowie zur Anzeige¬pflicht bei Waffengebrauch enthalten" },
      { id: "d", text: "Dienstkleidungen und Abzeichen der Wachpersonen dürfen nicht mit amtlichen Uniformen verwechselt werden können" }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 25,
    question: "Welche der nachfolgenden Tätigkeitsbereiche im Sicherheitsgewerbe haben die Pflicht sichtbar ein Schild mit ihrem Namen oder einer Kennnummer zu tragen?",
    answers: [
      { id: "a", text: "Türsteher - am Einlassbereich gastgewerblicher Diskotheken" },
      { id: "b", text: "Citystreifen - bei Kontrollgängen im öffentlichen Verkehrsraum" },
      { id: "c", text: "Kaufhausdetektive" },
      { id: "d", text: "Werkschutzmitarbeiter" }
    ],
    correct: ["a","b"],
    points: 2
  }
  ],
  
quiz4: [
  {
    id: 1,
    question: "Welche Aussagen zur Polizei und zum Bewachungsgewerbe sind richtig?",
    answers: [
      { id: "a", text: "Das Bewachungsgewerbe übt eine aktive Obhutsfunktion aus, die in menschlicher Tätigkeit besteht" },
      { id: "b", text: "Wesentliche Aufgaben der Polizei sind die Gefahrenabwehr und die Strafverfolgung" },
      { id: "c", text: "Wachpersonen besitzen die Befugnisse von Beauftragten der Vollzugsbehörden, z. B. der Polizeibehörden" },
      { id: "d", text: "Das Bewachungsgewerbe bewacht ausschließlich fremdes Eigentum" }
    ],
    correct: ["a", "b"],
    points: 2
  },

  {
    id: 2,
    question: "Was bedeutet „staatliches Gewaltmonopol“?",
    answers: [
      { id: "a", text: "Gewalt ist als äußerstes Mittel grundsätzlich nur den staatlichen Organen vorbehalten" },
      { id: "b", text: "Die Rechtsordnung verpflichtet jeden Bürger, Gefährdungen der Allgemeinheit auch mit Gewalt abzuwehren" },
      { id: "c", text: "Das staatliche Sicherheitsmonopol entspringt der Verpflichtung, Sicherheit zu garantieren" },
      { id: "d", text: "Gewaltanwendung durch Einzelne ist nur ausnahmsweise zulässig und auf Notsituationen beschränkt" }
    ],
    correct: ["a", "d"],
    points: 2
  },

  {
    id: 3,
    question: "Die Grundrechte (Art. 1–19 GG) sind in erster Linie Abwehrrechte …",
    answers: [
      { id: "a", text: "… der Polizei" },
      { id: "b", text: "… ausschließlich deutscher Staatsbürger" },
      { id: "c", text: "… des Privatrechts" },
      { id: "d", text: "… des Bürgers gegenüber staatlicher Machtentfaltung" }
    ],
    correct: ["d"],
    points: 1
  },

  {
    id: 4,
    question: "Welche Aussagen zur Gewaltenteilung sind korrekt?",
    answers: [
      { id: "a", text: "Die Antworten 1, 2 und 5 sind richtig" },
      { id: "b", text: "Die Antworten 1, 3 und 5 sind richtig" },
      { id: "c", text: "Die Antworten 2, 4 und 6 sind richtig" }
    ],
    correct: ["b"],
    points: 1
  },

  {
    id: 5,
    question: "Welche Funktionen erfüllen die Grundrechte des Grundgesetzes?",
    answers: [
      { id: "a", text: "Schutz des Bürgers gegen staatliche Eingriffe" },
      { id: "b", text: "Garantie eines Rechts auf Arbeit" },
      { id: "c", text: "Begrenzung der Staatsgewalt" }
    ],
    correct: ["a", "c"],
    points: 2
  },

  {
    id: 6,
    question: "Was bedeutet das Gewaltmonopol?",
    answers: [
      { id: "a", text: "Der Staat hat uneingeschränkte Gewalt ohne Ausnahmen" },
      { id: "b", text: "Nur der Chef der Wachfirma entscheidet" },
      { id: "c", text: "Der Staat überträgt Gewalt vollständig auf Private" },
      { id: "d", text: "Nur die Polizei darf Gewalt anwenden" },
      { id: "e", text: "Private dürfen im Rahmen der Jedermannsrechte ausnahmsweise handeln" }
    ],
    correct: ["e"],
    points: 1
  },

  {
    id: 7,
    question: "In welchem Bereich ist die Polizei zuständig?",
    answers: [
      { id: "a", text: "Immer in allen Bereichen" },
      { id: "b", text: "Im privaten Bereich bei Durchsuchungsbeschluss oder Gefahr im Verzug" },
      { id: "c", text: "Nur im öffentlichen Bereich" },
      { id: "d", text: "Grundsätzlich im öffentlichen Bereich" }
    ],
    correct: ["b", "d"],
    points: 2
  },

  {
    id: 8,
    question: "Welchen Zweck haben Rechtfertigungsgründe?",
    answers: [
      { id: "a", text: "Entschuldigung ordnungswidrigen Handelns" },
      { id: "b", text: "Entschuldigung verbotenen Handelns" },
      { id: "c", text: "Rechtfertigung strafbaren Handelns" },
      { id: "d", text: "Rechtfertigung unerlaubten Handelns" }
    ],
    correct: ["c", "d"],
    points: 2
  },

  {
    id: 9,
    question: "In welche Rechtsgebiete wird die deutsche Rechtsordnung eingeteilt?",
    answers: [
      { id: "a", text: "Öffentliches Recht" },
      { id: "b", text: "Politisches Recht" },
      { id: "c", text: "Privat- / Zivilrecht" },
      { id: "d", text: "Recht des Stärkeren" }
    ],
    correct: ["a", "c"],
    points: 2
  },

  {
    id: 10,
    question: "Was kennzeichnet das öffentliche Recht?",
    answers: [
      { id: "a", text: "Gleichordnung zwischen Staat und Bürger" },
      { id: "b", text: "Über- und Unterordnung zwischen Staat und Bürger" },
      { id: "c", text: "Gleichordnung zwischen Bürgern" }
    ],
    correct: ["b"],
    points: 1
  },

  {
    id: 11,
    question: "Welche Rechte dürfen SMA im öffentlichen Verkehrsraum ausüben?",
    answers: [
      { id: "a", text: "Notwehr-, Notstands- und übertragene Selbsthilferechte" },
      { id: "b", text: "Bußgelder erheben" },
      { id: "c", text: "Platzverweise wie die Polizei" }
    ],
    correct: ["a"],
    points: 1
  },

  {
    id: 12,
    question: "Welche Aussagen zur Freiheit der Person sind richtig?",
    answers: [
      { id: "a", text: "Eingriffe nur auf gesetzlicher Grundlage zulässig" },
      { id: "b", text: "Freie Ortswahl ohne Einschränkung" },
      { id: "c", text: "Nur Polizei darf eingreifen" },
      { id: "d", text: "Körperliche Bewegungsfreiheit ist geschützt" }
    ],
    correct: ["a", "d"],
    points: 2
  },

  {
    id: 13,
    question: "Was bedeutet Gewaltenteilung?",
    answers: [
      { id: "a", text: "Drei Gewalten: Gericht, Polizei, Staatsanwalt" },
      { id: "b", text: "Nicht jeder Polizist darf alles" },
      { id: "c", text: "Gewalten kontrollieren sich gegenseitig" },
      { id: "d", text: "Legislative, Exekutive, Judikative" }
    ],
    correct: ["c", "d"],
    points: 2
  },

  {
    id: 14,
    question: "Welche Institutionen zählen zur gesetzgebenden Gewalt?",
    answers: [
      { id: "a", text: "Regierungen der Bundesländer" },
      { id: "b", text: "Landtage" },
      { id: "c", text: "Bundestag" },
      { id: "d", text: "Staatsanwaltschaft" }
    ],
    correct: ["b", "c"],
    points: 2
  },

  {
    id: 15,
    question: "Worauf muss ein Kaufhausdetektiv vor einer Befragung hinweisen?",
    answers: [
      { id: "a", text: "Durchsuchung der Taschen bei Verweigerung" },
      { id: "b", text: "Nur Geldstrafe bei Geständnis" },
      { id: "c", text: "Angabe der Personalien ist freiwillig" },
      { id: "d", text: "Keine Aussagepflicht zum Tatvorwurf" }
    ],
    correct: ["c", "d"],
    points: 2
  },

  {
    id: 16,
    question: "Welche Rechtsvorschriften gelten als Gesetze?",
    answers: [
      { id: "a", text: "Bewachungsverordnung" },
      { id: "b", text: "Gewerbeordnung" },
      { id: "c", text: "Strafprozessordnung" },
      { id: "d", text: "DGUV Vorschrift 23" }
    ],
    correct: ["b", "c"],
    points: 2
  },

  {
    id: 17,
    question: "Art. 2 GG – Recht auf Leben und körperliche Unversehrtheit …",
    answers: [
      { id: "a", text: "Schützt nur psychische Unversehrtheit" },
      { id: "b", text: "Ist ein Menschenrecht" },
      { id: "c", text: "Ist ein Abwehrrecht gegen den Staat" },
      { id: "d", text: "Ist ein reines Bürgerrecht" }
    ],
    correct: ["b", "c"],
    points: 2
  },

  {
    id: 18,
    question: "Welche Aussage zur Zuständigkeit des Sicherheitsgewerbes ist richtig?",
    answers: [
      { id: "a", text: "Zuständig nach Auftrag des Auftraggebers" },
      { id: "b", text: "Zuständig für öffentliche Sicherheit" },
      { id: "c", text: "Zuständig nach Weisung der Polizei" }
    ],
    correct: ["a"],
    points: 1
  },

  {
    id: 19,
    question: "Welche Grundrechte sind Bürgerrechte?",
    answers: [
      { id: "a", text: "Menschenwürde" },
      { id: "b", text: "Gleichheit vor dem Gesetz" },
      { id: "c", text: "Freie Berufswahl" },
      { id: "d", text: "Versammlungsfreiheit" }
    ],
    correct: ["c", "d"],
    points: 2
  },

  {
    id: 20,
    question: "Welche Aussagen verstoßen gegen die Rechtsordnung?",
    answers: [
      { id: "a", text: "Durchsuchung mit Beschluss" },
      { id: "b", text: "Strafe ohne gesetzliche Grundlage" },
      { id: "c", text: "Untersagung bei Vorstrafen" },
      { id: "d", text: "Anspucken einer Wachperson" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  
  {
    id: 21,
    question: "In welche drei „Gewalten“ teilt sich unser Staat laut Grundgesetz auf?",
    answers: [
      { id: "a", text: "Staat, Volk, Medien" },
      { id: "b", text: "Judikative, Legislative, Richtersprechung" },
      { id: "c", text: "Legislative, Exekutive, Judikative" },
      { id: "d", text: "Gericht, Staatsanwaltschaft, Polizei" }
    ],
    correct: ["c"],
    points: 1
  },

  {
    id: 22,
    question: "Welche Voraussetzung kann eine Sonderregelung bei Zufahrtskontrollen im öffentlichen Bereich erlauben?",
    answers: [
      { id: "a", text: "Entscheidung des Bewachungsgewerbetreibenden" },
      { id: "b", text: "Nachweis eines Gewohnheitsrechts" },
      { id: "c", text: "Public-Private-Partnership-Vereinbarung" },
      { id: "d", text: "Genehmigung von Ordnungsamt und örtlicher Polizeibehörde" },
      { id: "e", text: "Entscheidung des Auftraggebers" },
      { id: "f", text: "Übertragene Besitzrechte durch die Polizei" }
    ],
    correct: ["c", "d"],
    points: 2
  },

  {
    id: 23,
    question: "Was wird unter dem Privatrecht verstanden?",
    answers: [
      { id: "a", text: "Rechtsfolgen für Straftaten und Ordnungswidrigkeiten" },
      { id: "b", text: "Rechtsbeziehungen zwischen gleichgestellten Personen" },
      { id: "c", text: "Teil des öffentlichen Rechts" },
      { id: "d", text: "Regelung von Rechten und Pflichten zwischen Bürgern" }
    ],
    correct: ["b", "d"],
    points: 2
  },

  {
    id: 24,
    question: "Welche Aussagen zum Privatrecht sind richtig?",
    answers: [
      { id: "a", text: "Es regelt Besitz- und Eigentumsrechte" },
      { id: "b", text: "Es regelt die rechtlichen Beziehungen der Bürger untereinander" },
      { id: "c", text: "Es umfasst die Gewerbeordnung" },
      { id: "d", text: "Es regelt Beziehungen zwischen Bürger und Staat" }
    ],
    correct: ["a", "b"],
    points: 2
  },

  {
    id: 25,
    question: "Welche Aussagen zum Grundrecht der Unverletzlichkeit der Wohnung (Art. 13 GG) sind richtig?",
    answers: [
      { id: "a", text: "Durchsuchungen sind nur strafprozessual zulässig" },
      { id: "b", text: "Gilt nicht für Nicht-Deutsche" },
      { id: "c", text: "Individuelles Abwehrrecht gegen staatliche Gewalt" },
      { id: "d", text: "Gilt nur für Eigentumswohnungen" },
      { id: "e", text: "Durchsuchungen nur mit richterlichem Beschluss, außer bei Gefahr im Verzug" },
      { id: "f", text: "Steht nur dem Eigentümer zu" }
    ],
    correct: ["c", "e"],
    points: 2
  }
  ], 
  
quiz5: [
  {
    id: 1,
    question: "Welche Aussagen zur DS-GVO sind richtig?",
    answers: [
      { id: "a", text: "Sie gilt für die familiäre Verarbeitung personenbezogener Daten, z.B. für das Führen von Anschriftenverzeichnissen, die keinen Bezug zu einer beruflichen Tätigkeit haben" },
      { id: "b", text: "Sie gilt für die ganz oder teilweise automatisierte Verarbeitung personenbezogener Daten" },
      { id: "c", text: "Sie gilt für die nichtautomatisierte Verarbeitung personenbezogener Daten, die in einem Dateisystem gespeichert sind oder gespeichert werden" },
      { id: "d", text: "Sie gilt für die Verarbeitung personenbezogener Daten durch die zuständigen Behörden zum Zwecke der Abwehr von Gefahren für die öffentliche Sicherheit" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 2,
    question: "Wann wird das BDSG angewendet?",
    answers: [
      { id: "a", text: "Wenn personenbezogene Daten von Teilnehmern einer betrieblichen Fortbildungsmaßnahme zu Übungszwecken anonymisiert genutzt werden" },
      { id: "b", text: "Wenn personenbezogene Daten erhoben werden sollen, obwohl der Betroffene keine Einwilligung gegeben hat" },
      { id: "c", text: "Wenn personenbezogene Daten durch Familienmitglieder zu familiären Zwecken erhoben, verarbeitet oder genutzt werden" },
      { id: "d", text: "Wenn personenbezogene Daten unter Einsatz von Datenverarbeitungsanlagen erhoben, verarbeitet oder genutzt werden" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 3,
    question: "Welche Aussagen zur Videoüberwachung öffentlich zugänglicher Räume sind gemäß BDSG richtig?",
    answers: [
      { id: "a", text: "Die durch die Videoüberwachung erhobenen Daten dürfen ein Jahr lang gespeichert oder verwendet werden. Danach müssen sie unverzüglich gelöscht werden" },
      { id: "b", text: "Sie ist zulässig, wenn sie zur Wahrnehmung des Hausrechts erforderlich ist und keine Anhaltspunkte bestehen, dass schutzwürdige Interessen der Betroffenen entgegenstehen" },
      { id: "c", text: "Sie ist nur erlaubt zur Überwachung von Fahrzeugen und öffentlich zugänglichen Einrichtungen des öffentlichen Schienen- und Busverkehrs" },
      { id: "d", text: "Wenn sich Personen in öffentlich zugänglichen Einkaufszentren aufhalten und von der Videoüberwachung betroffen sind, gilt der Schutz von Leben, Gesundheit oder Freiheit als besonders schutzwürdiges Interesse" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 4,
    question: "Welches ist ein wichtiger Grundsatz im Bundesdatenschutzgesetz?",
    answers: [
      { id: "a", text: "Grundsätzlich ist die Erhebung, Verarbeitung und Nutzung personenbezogener Daten verboten" },
      { id: "b", text: "Grundsätzlich ist die Erhebung, Verarbeitung und Nutzung personenbezogener Daten eine zivilrechtliche Angelegenheit und deshalb gesetzlich nicht geregelt" },
      { id: "c", text: "Grundsätzlich ist die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erlaubt, soweit kein Straftatbestand aus dem Strafgesetzbuch (StGB) erfüllt wird" }
    ],
    correct: ["a"],
    points: 0
  },
  {
    id: 5,
    question: "Welche allgemeinen Pflichten haben Unternehmen, in denen personenbezogene Daten bearbeitet werden?",
    answers: [
      { id: "a", text: "Verpflichtung zu technischen und organisatorischen Maßnahmen zur Einhaltung des Bundesdatenschutzgesetzes" },
      { id: "b", text: "Die mit Datenverarbeitung beschäftigen Personen müssen schriftlich auf das Datengeheimnis verpflichtet werden" },
      { id: "c", text: "Besondere Überwachungspflichten gegenüber den betroffenen Mitarbeitern, die mit personenbezogenen Daten arbeiten" },
      { id: "d", text: "Verpflichtung der betroffenen Beschäftigten auf die systematische und lückenlose Erfassung von personenbezogenen Daten" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 6,
    question: "In welchem Fall dürfen Sicherheitskräfte im Rahmen ihrer Dienstausübung personenbezogene Daten erheben und verarbeiten?",
    answers: [
      { id: "a", text: "Falls die Dienstanweisung dies festschreibt" },
      { id: "b", text: "Wenn der Betroffene eingewilligt hat" },
      { id: "c", text: "Wenn dieses durch eine Rechtsvorschrift eindeutig geregelt ist" },
      { id: "d", text: "Falls dadurch kein Tatbestand des Strafgesetzbuches erfüllt wird" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 7,
    question: "Die private Videoüberwachung öffentlich zugänglicher Räume ist nur zulässig, falls",
    answers: [
      { id: "a", text: "...die Beeinträchtigung der schutzwürdigen Interessen durch ein Jedermannsrecht gerechtfertigt ist." },
      { id: "b", text: "...sie zur Wahrnehmung berechtigter Interessen für konkret festgelegte Zwecke erforderlich ist." },
      { id: "c", text: "...die zuständige Polizeibehörde die Verhältnismäßigkeit geprüft und eine entsprechende Genehmigung erteilt hat." },
      { id: "d", text: "...keine Anhaltspunkte bestehen, dass schutzwürdige Interessen der Betroffenen überwiegen." }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 8,
    question: "Was ist eine 'nicht automatisierte Datei' im Sinne des BDSG?",
    answers: [
      { id: "a", text: "Disketten, Magnetbänder" },
      { id: "b", text: "Computerprogramm, das manuell bedient werden muss." },
      { id: "c", text: "Akten, Wachbücher" },
      { id: "d", text: "Karteikarten" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 9,
    question: "Was ist der Sinn des BDSG?",
    answers: [
      { id: "a", text: "Es schützt Daten des Bundes, deswegen heißt es ja Bundesdatenschutzgesetz." },
      { id: "b", text: "Es schützt die informationelle Selbstbestimmung." },
      { id: "c", text: "Es schützt nur geheime Firmendaten." },
      { id: "d", text: "Es soll Schutz vor Missbrauch personenbezognener Daten bieten." }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 10,
    question: "Darf eine Wachperson im Sinne der DS-GVO bei einer Zutrittskontrolle zu einem Wachobjekt die personenbezogenen Daten von Besuchern erheben?",
    answers: [
      { id: "a", text: "Nein, dies ist verboten" },
      { id: "b", text: "Ja, wenn der Besucher für diesen konkreten Fall freiwillig und nach ausreichender Information unmissverständlich zugestimmt hat" },
      { id: "c", text: "Ja, wenn der Auftraggeber die Datenerhebung zwingend als Voraussetzung für das Betreten des Wachobjekts vorschreibt" },
      { id: "d", text: "Ja, ohne Einschränkungen" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 11,
    question: "Welchem Prinzip unterliegt die Erhebung, Verarbeitung und Nutzung von personenbezogenen Daten nach dem Bundesdatenschutzgesetz?",
    answers: [
      { id: "a", text: "Prinzip der Datennutzung" },
      { id: "b", text: "Prinzip der Datensparsamkeit" },
      { id: "c", text: "Prinzip der Datenüberwachung" },
      { id: "d", text: "Prinzip der Datenvermeidung" }
    ],
    correct: ["b", "d"],
    points: 0
  },
  {
    id: 12,
    question: "Was sind personenbezogene Daten im Sinne des Bundesdatenschutzgesetz (BDSG)?",
    answers: [
      { id: "a", text: "Ausgefüllter Wahlzettel in der Wahlurne." },
      { id: "b", text: "Bewertung politischer Parteien im Rahmen einer anonymen Meinungsumfrage." },
      { id: "c", text: "Name, Vorname, Alter, Personalausweisnummer." }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 13,
    question: "Was ist ein Datenschutzbeauftragter, was darf er?",
    answers: [
      { id: "a", text: "Er wird benötigt, wenn mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind." },
      { id: "b", text: "Derjenige, der im Betrieb für den Datenschutz zuständig ist." },
      { id: "c", text: "Er ist nur für den Schutz von Betriebsgeheimnissen zuständig." },
      { id: "d", text: "In Bezug auf Daten hat er hoheitliche Rechte." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 14,
    question: "Gemäß DS-GVO ist die Verarbeitung „besonderer Kategorien personenbezogener Daten“ grundsätzlich verboten. Was sind solche Daten?",
    answers: [
      { id: "a", text: "Anschrift des Arbeitnehmers" },
      { id: "b", text: "Gesundheitsdaten" },
      { id: "c", text: "Gewerkschaftszugehörigkeit" },
      { id: "d", text: "Name, Vorname, Geburtsdatum" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 15,
    question: "Was sind gemäß DS-GVO 'besondere Kategorien personenbezogener Daten'?",
    answers: [
      { id: "a", text: "Geburtsort, Name, Vorname" },
      { id: "b", text: "Politische Meinungen, weltanschauliche Überzeugungen" },
      { id: "c", text: "Kennzeichen am Pkw, Kfz-Versicherung" },
      { id: "d", text: "Gewerkschaftszugehörigkeit, Gesundheitsdaten" }
    ],
    correct: ["b", "d"],
    points: 1
  },
  {
    id: 16,
    question: "Wann sind gemäß BDSG personenbezogene Daten zu löschen?",
    answers: [
      { id: "a", text: "Wenn ihre Speicherung unzulässig ist" },
      { id: "b", text: "Wenn die Speicherung der Daten nicht mehr erforderlich ist" },
      { id: "c", text: "Wenn die Speicherung länger als sechs Monate andauert" },
      { id: "d", text: "Wenn es der Betroffene ausdrücklich verlangt" }
    ],
    correct: ["a", "b"],
    points: 1
  },
  {
    id: 17,
    question: "Wann muss gemäß DS-GVO der Verantwortliche die personenbezogenen Daten des Betroffenen unverzüglich löschen?",
    answers: [
      { id: "a", text: "Wenn diese Daten zur Ausübung des Rechts auf freie Meinungsäußerung verwendet werden" },
      { id: "b", text: "Wenn die betroffene Person ihre Einwilligung widerruft und es an einer anderweitigen Rechtsgrundlage für die Verarbeitung fehlt" },
      { id: "c", text: "Wenn diese Daten von vornherein unrechtmäßig verarbeitet wurden" },
      { id: "d", text: "Wenn diese Daten verwendet werden, um Rechtsansprüche durchzusetzen" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 18,
    question: "Welche Rechte hat man u.a., wenn es um die eigenen, von jemand anderem gespeicherten Daten geht?",
    answers: [
      { id: "a", text: "Recht auf Speicherung" },
      { id: "b", text: "Recht auf Löschung" },
      { id: "c", text: "Recht auf Auskunft" },
      { id: "d", text: "Recht auf Weitergabe" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 19,
    question: "Welche Art von Datenverarbeitung schützt das BDSG?",
    answers: [
      { id: "a", text: "Jegliche Art von Erhebung, Verarbeitung und Nutzung personenbezogener Daten" },
      { id: "b", text: "Die nicht-automatisierten Dateien, die nach bestimmten Merkmalen erfasst, sortiert und ausgewertet werden" },
      { id: "c", text: "Lediglich die Verarbeitung von wichtigen Daten, z.B. Betriebs- und Geschäftsgeheimnisse" },
      { id: "d", text: "Die automatisierte Datenverarbeitung unter Einsatz von Datenverarbeitungsanlagen" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 20,
    question: "Welche Aussagen zum Recht auf Auskunft sind gemäß BDSG richtig?",
    answers: [
      { id: "a", text: "Jeder muss grundsätzlich Auskunft über die zu seiner Person gespeicherten Daten erhalten, wenn er dieses beantragt" },
      { id: "b", text: "Öffentliche Stellen dürfen die Auskunft im Einzelfall verweigern, wenn die Auskunft die öffentliche Sicherheit oder Ordnung gefährden würde" },
      { id: "c", text: "Verlangt jemand Auskunft über die Daten, die zu seiner Person gespeichert sind, muss er dafür die Kosten tragen" }
    ],
    correct: ["a", "b"],
    points: 1
  },
  {
    id: 21,
    question: "Wann ist die Videoüberwachung gemäß BDSG zulässig, sofern die schutzwürdigen Interessen der Betroffenen nicht überwiegen?",
    answers: [
      { id: "a", text: "Wenn es der Aufgabenerfüllung öffentlicher Stellen dient." },
      { id: "b", text: "Wenn es der Überwachung der Arbeitszeiten der Beschäftigten dient." },
      { id: "c", text: "Wenn es der Wahrnehmung des Hausrechts dient." },
      { id: "d", text: "Wenn es der Auswertung der Arbeitsleistung der Mitarbeiter dient." }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 22,
    question: "Das BDSG verpflichtet dazu, das Datengeheimnis zu beachten. Was ist damit gemeint?",
    answers: [
      { id: "a", text: "Das Datengeheimnis dient dem Schutz und der unbefugten Kenntnisnahme von Geschäftsgeheimnissen" },
      { id: "b", text: "Mit der Datenverarbeitung beauftragte Personen müssen auf das Datengeheimnis verpflichtet werden. Dies gilt in ganz Europa" },
      { id: "c", text: "Mit der Datenverarbeitung befasste Personen dürfen personenbezogene Daten nur befugt verarbeiten" },
      { id: "d", text: "Wenn die mit der Verarbeitung personenbezogener Daten betrauten Personen ihre Tätigkeit beenden, besteht das Datengeheimnis fort" }
    ],
    correct: ["c", "d"],
    points: 1
  },
  {
    id: 23,
    question: "Wann dürfen gemäß BDSG personenbezogene Daten erhoben, verarbeitet und genutzt werden?",
    answers: [
      { id: "a", text: "Wenn es das Bundesdatenschutzgesetz erlaub" },
      { id: "b", text: "Wenn der Betroffene seine schriftliche Zustimmung gibt" },
      { id: "c", text: "Wenn es der Datenschutzbeauftragte erlaubt" },
      { id: "d", text: "Wenn der Betroffene mündlich zustimmt" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 24,
    question: "Welche Rechtsfolgen können Verstöße gegen das BDSG bzw. DSGVO haben?",
    answers: [
      { id: "a", text: "Nur Geldstrafen bis 50.000,-EUR" },
      { id: "b", text: "Geldbuße" },
      { id: "c", text: "Freiheitsstrafe oder Geldstrafe" },
      { id: "d", text: "Keine" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 25,
    question: "Wann müssen gemäß DS-GVO personenbezogene Daten grundsätzlich gelöscht werden?",
    answers: [
      { id: "a", text: "Wenn es der Betroffene ausdrücklich verlangt" },
      { id: "b", text: "Wenn sie unrechtmäßig verarbeitet wurden" },
      { id: "c", text: "Wenn ihre Speicherung länger als sechs Monate andauert" },
      { id: "d", text: "Wenn sie für Direktwerbung verwendet werden sollen und der Betroffene widerspricht" }
    ],
    correct: ["b", "d"],
    points: 1
  }
],
  
  quiz6: [
  {
    id: 1,
    question: "Gemäß DS-GVO ist die Verarbeitung „besonderer Kategorien personenbezogener Daten“ grundsätzlich verboten. Was sind solche Daten?",
    answers: [
      { id: "a", text: "Anschrift des Arbeitnehmers" },
      { id: "b", text: "Gesundheitsdaten" },
      { id: "c", text: "Name, Vorname, Geburtsdatum" },
      { id: "d", text: "Gewerkschaftszugehörigkeit" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 2,
    question: "Was sind nicht automatisierte Dateien gemäß BDSG?",
    answers: [
      { id: "a", text: "Arbeitnehmerdaten in Personalakten, die Informationen über das Beschäftigungsverhältnis enthalten, z. B. über das Gehalt" },
      { id: "b", text: "Sammlungen von personenbezogenen Daten auf Datenträgern wie z. B CDs, USB-Sticks oder Festplatten" },
      { id: "c", text: "Sammlungen von personenbezogenen Daten in digitalen Akten, die gleichartig aufgebaut sind und nach bestimmten Merkmalen ausgewertet werden können, z. B. nach dem Alter" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 3,
    question: "Die EU-Datenschutz-Grundverordnung (DSGVO) enthält Vorschriften zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten und zum freien Verkehr solcher Daten. Welche der folgenden Aussagen dazu ist richtig?",
    answers: [
      { id: "a", text: "Der freie Verkehr personenbezogener Daten in der Europäischen Union soll durch die Verordnung eingeschränkt werden" },
      { id: "b", text: "Die EU-Bürger sollen durch die Verordnung vor übermäßiger Datentransparenz und Bürokratie geschützt werden" },
      { id: "c", text: "Zweck der Verordnung ist es, eine Harmonisierung und Vereinheitlichung der Datenschutzvorschriften innerhalb der Europäischen Union zu erreichen" },
      { id: "d", text: "Der Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten ist ein Grundrecht" }
    ],
    correct: ["c", "d"],
    points: 1
  },
  {
    id: 4,
    question: "Welche allgemeinen Pflichten haben Unternehmen, in denen personenbezogene Daten bearbeitet werden?",
    answers: [
      { id: "a", text: "Besondere Überwachungspflichten gegenüber den betroffenen Mitarbeitern, die mit personenbezogenen Daten arbeiten" },
      { id: "b", text: "Verpflichtung der betroffenen Beschäftigten auf die systematische und lückenlose Erfassung von personenbezogenen Daten" },
      { id: "c", text: "Die mit Datenverarbeitung beschäftigen Personen müssen schriftlich auf das Datengeheimnis verpflichtet werden" },
      { id: "d", text: "Verpflichtung zu technischen und organisatorischen Maßnahmen zur Einhaltung des Bundesdatenschutzgesetzes" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 5,
    question: "Für wen gelten die Bestimmungen des Bundesdatenschutzgesetzes?",
    answers: [
      { id: "a", text: "Für private Stellen (z.B. Unternehmen, Verbände, Vereine)" },
      { id: "b", text: "Für die öffentlichen Stellen (z.B. Behörden, Ämter)" },
      { id: "c", text: "Für Einzelpersonen und Familien (somit für Jedermann)" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 6,
    question: "Wann sind gemäß BDSG personenbezogene Daten zu löschen?",
    answers: [
      { id: "a", text: "Wenn nach Erhebung der Daten eine Frist von 12 Monaten vergangen ist." },
      { id: "b", text: "Wenn ihre Speicherung unzulässig ist." },
      { id: "c", text: "Wenn der Zweck, für den die Daten benötigt wurden, wegfällt." }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 7,
    question: "Wann darf grundsätzlich in einem privaten, befriedeten Besitztum eine Videoüberwachung durchgeführt werden?",
    answers: [
      { id: "a", text: "…wenn die Personen, die das Gelände betreten wollen, darauf hingewiesen werden." },
      { id: "b", text: "…wenn die Kameras sichtbar sind." },
      { id: "c", text: "…wenn die zuständige Behörde es genehmigt hat." },
      { id: "d", text: "…wenn der Besitzer zustimmt, immer ohne Einschränkungen." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 8,
    question: "Wann ist die Videoüberwachung öffentlich zugänglicher Räume gemäß Bundesdatenschutzgesetz (BDSG) zulässig?",
    answers: [
      { id: "a", text: "wenn im Zugangsbereich sichtbar auf die Überwachung und auf die überwachende Stelle hingewiesen wird" },
      { id: "b", text: "nur mit ausdrücklicher Genehmigung der zuständigen Datenschutzbeauftragten des Bundes und der Länder" },
      { id: "c", text: "mit schriftlicher Einwilligung der von der Videoüberwachung betroffenen Kunden in einem Warenhaus" },
      { id: "d", text: "wenn dies zur Wahrnehmung des Hausrechtes erforderlich ist und die schutzwürdigen Interessen der Betroffenen nicht überwiegen" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 9,
    question: "Welche Aussagen zur Videoüberwachung gemäß BDSG sind richtig?",
    answers: [
      { id: "a", text: "Die Vorschriften des BDSG gelten auch für die Videoüberwachung innerhalb der Wohnung natürlicher Personen" },
      { id: "b", text: "Die Videoüberwachung öffentlich zugänglicher Räume zur „Wahrnehmung des Hausrechts“ dient der Verhinderung und Aufklärung von Straftaten" },
      { id: "c", text: "Die Videoüberwachung ist zulässig zur Überwachung des Verhaltens und der Arbeitsleistung von Beschäftigten" },
      { id: "d", text: "Auf die Videoüberwachung muss hingewiesen werden. Ausreichend hierfür ist die Anbringung eines Bildsymbols „Videoüberwachung“ im Eingangsbereich" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 10,
    question: "Unter welchen Voraussetzungen ist gemäß DS-GVO und BDSG die Videoüberwachung zulässig?",
    answers: [
      { id: "a", text: "Wenn die Videoüberwachung ausschließlich auf umfriedetem Betriebsgelände zum Schutz vor Diebstahl stattfindet" },
      { id: "b", text: "Wenn am Ort der Videoüberwachung für betroffene Personen an einer zugänglichen Stelle Informationen zur Verfügung stehen, u. a. der Name und die Kontaktdaten der für die Videoüberwachung verantwortlichen Person bekannt gemacht werden" },
      { id: "c", text: "Wenn zur schnellen und eindeutigen Identifizierung natürlicher Personen Gesichtserkennungssoftware eingesetzt wird" },
      { id: "d", text: "Wenn die Videoüberwachung z. B. der Wahrnehmung des Hausrechts dient und keine schutzwürdigen Interessen der Betroffenen überwiegen" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 11,
    question: "Eine Wachperson hat einen Fahrgast ohne gültigen Fahrschein angetroffen. Die Wachperson will die personenbezogenen Daten des Fahrgastes erheben. Was muss die Wachperson gemäß DS-GVO beachten, damit diese Maßnahme rechtmäßig ist?",
    answers: [
      { id: "a", text: "Die Wachperson muss nachweisen können, dass der Fahrgast mit der Erhebung seiner Daten einverstanden war, z. B. durch eine schriftliche Erklärung" },
      { id: "b", text: "Für diese Maßnahme muss eine Erlaubnis der zuständigen Sicherheitsbehörde vorliegen" },
      { id: "c", text: "Der Fahrgast muss in die Erhebung seiner personenbezogenen Daten einwilligen" },
      { id: "d", text: "Diese Vorgehensweise muss mit dem Auftraggeber vertraglich vereinbart sein" }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 12,
    question: "Unter welchen Voraussetzungen dürfen gemäß DS-GVO und BDSG personenbezogene Daten verarbeitet werden?",
    answers: [
      { id: "a", text: "Wenn der Betroffene zugestimmt hat. Die Zustimmung ist selbst dann erforderlich, wenn die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, z. B. für die Anmeldung einer Wachperson über das Bewacherregister" },
      { id: "b", text: "Wenn der Verantwortliche nachweisen kann, dass die betroffene Person in die Verarbeitung ihrer personenbezogenen Daten eingewilligt hat" },
      { id: "c", text: "Wenn die Verarbeitung personenbezogener Daten automatisiert erfolgen soll, z. B. durch Computer. Die Einwilligung des Betroffenen ist nicht erforderlich, wenn die personenbezogenen Daten in Akten manuell verarbeitet werden" },
      { id: "d", text: "Wenn die betroffene Person ihre Einwilligung zur Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben hat" }
    ],
    correct: ["b", "d"],
    points: 1
  },
  {
    id: 13,
    question: "Wann ist das BDSG anzuwenden?",
    answers: [
      { id: "a", text: "wenn nicht öffentliche Stellen personenbezogene Daten mithilfe von Datenverarbeitungsanlagen verarbeiten, nutzen oder erheben" },
      { id: "b", text: "wenn jemand für familiäre Zwecke personenbezogene Daten erhebt, verarbeitet oder nutzt, z.B. um eine Geburtstagsliste zu erstellen" },
      { id: "c", text: "wenn öffentliche Stellen des Bundes personenbezogene Daten erheben, verarbeiten oder nutzen" }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 14,
    question: "Ein Ladendetektiv hat eine Person auf frischer Tat bei einem Diebstahl betroffen. Für die Sicherung der Strafverfolgung ist die Erhebung der personenbezogenen Daten der Person notwendig. Die Daten der Person und der Tathergang werden in einem Bericht verarbeitet. Ist die Verarbeitung der personenbezogenen Daten in dem Bericht sowie dessen Verwendung für die Strafanzeige gemäß DS-GVO zulässig?",
    answers: [
      { id: "a", text: "Nein, da für die Strafverfolgung, hier des Diebstahls, ausschließlich die Polizei zuständig ist." },
      { id: "b", text: "Ja, wenn die zuständige Datenschutz-Aufsichtsbehörde das Erstellen des Berichts und die Stellung der Strafanzeige erlaubt hat." },
      { id: "c", text: "Ja, wenn die Daten in rechtmäßiger Weise und in einer für den Dieb nachvollziehbaren Weise verarbeitet werden." },
      { id: "d", text: "Ja, wenn der Dieb in die Verarbeitung seiner Daten freiwillig einwilligt, z. B. in Form einer unmissverständlichen mündlichen Erklärung." }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 15,
    question: "Was ist gemäß BDSG unter Speichern von personenbezogenen Daten zu verstehen?",
    answers: [
      { id: "a", text: "Das Verwenden bzw. Verarbeiten von personenbezogenen Daten" },
      { id: "b", text: "Das Beschaffen von personenbezogenen Daten über den Betroffenen" },
      { id: "c", text: "Das Erfassen, Aufnehmen oder Aufbewahren solcher Daten auf einem Datenträger zum Zwecke ihrer weiteren Verarbeitung oder Nutzung" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 16,
    question: "Welchem Prinzip unterliegt die Erhebung, Verarbeitung und Nutzung von personenbezogenen Daten nach dem Bundesdatenschutzgesetz?",
    answers: [
      { id: "a", text: "Prinzip der Datenvermeidung" },
      { id: "b", text: "Prinzip der Datennutzung" },
      { id: "c", text: "Prinzip der Datenüberwachung" },
      { id: "d", text: "Prinzip der Datensparsamkeit" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 17,
    question: "Wann ist die Videoüberwachung öffentlich zugänglicher Räume gemäß BDSG zulässig?",
    answers: [
      { id: "a", text: "Nur mit Genehmigung der zuständigen Datenschutzbeauftragten des Bundes und der Länder" },
      { id: "b", text: "Mit schriftlicher Einwilligung der von der Videoüberwachung betroffenen Personen, z. B. den Kunden in einem Geschäft" },
      { id: "c", text: "Jederzeit und in allen Räumen, um Diebstähle zu verhindern, z. B. in Umkleideräumen eines Bekleidungsgeschäftes" },
      { id: "d", text: "Wenn dies zur Wahrnehmung des Hausrechts erforderlich ist und schutzwürdige Interessen der Betroffenen nicht überwiegen" }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 18,
    question: "Was sind gemäß DS-GVO besondere Kategorien personenbezogener Daten?",
    answers: [
      { id: "a", text: "Politische Meinungen, weltanschauliche Überzeugungen" },
      { id: "b", text: "Geburtsort, Name, Vorname, Geburtsort" },
      { id: "c", text: "Gewerkschaftszugehörigkeit, Gesundheitsdaten" },
      { id: "d", text: "Kennzeichen am Pkw, Kfz-Versicherung" }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 19,
    question: "Wann sind gemäß BDSG personenbezogene Daten zu löschen?",
    answers: [
      { id: "a", text: "Wenn die Speicherung länger als sechs Monate andauert" },
      { id: "b", text: "Wenn die Speicherung der Daten nicht mehr erforderlich ist" },
      { id: "c", text: "Wenn es der Betroffene ausdrücklich verlangt" },
      { id: "d", text: "Wenn ihre Speicherung unzulässig ist" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 20,
    question: "Darf eine Wachperson im Sinne der DS-GVO bei einer Zutrittskontrolle zu einem Wachobjekt die personenbezogenen Daten von Besuchern erheben?",
    answers: [
      { id: "a", text: "Ja, wenn der Besucher für diesen konkreten Fall freiwillig und nach ausreichender Information unmissverständlich zugestimmt hat" },
      { id: "b", text: "Nein, dies ist verboten" },
      { id: "c", text: "Ja, ohne Einschränkungen" },
      { id: "d", text: "Ja, wenn der Auftraggeber die Datenerhebung zwingend als Voraussetzung für das Betreten des Wachobjekts vorschreibt" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 21,
    question: "Auf der Festplatte eines Computers sind personenbezogene Daten gespeichert. Von welchem Straftatbestand des StGB wird der unbefugte Zugriff auf diese personenbezogenen Daten erfasst?",
    answers: [
      { id: "a", text: "Ausspähen von Daten (§ 202a StGB)" },
      { id: "b", text: "Verletzung des Briefgeheimnisses (§ 202 StGB)" },
      { id: "c", text: "Unterschlagung (246 StGB)" },
      { id: "d", text: "Diebstahl (§ 242 StGB)" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 22,
    question: "In welchem Fall dürfen Sicherheitskräfte im Rahmen ihrer Dienstausübung personenbezogene Daten erheben und verarbeiten?",
    answers: [
      { id: "a", text: "Falls die Dienstanweisung dies festschreibt" },
      { id: "b", text: "Falls dadurch kein Tatbestand des Strafgesetzbuches erfüllt wird" },
      { id: "c", text: "Wenn der Betroffene eingewilligt hat" },
      { id: "d", text: "Wenn dieses durch eine Rechtsvorschrift eindeutig geregelt ist" }
    ],
    correct: ["c", "d"],
    points: 1
  },
  {
    id: 23,
    question: "Was ist der Sinn des BDSG?",
    answers: [
      { id: "a", text: "Es schützt die informationelle Selbstbestimmung." },
      { id: "b", text: "Es schützt Daten des Bundes, deswegen heißt es ja Bundesdatenschutzgesetz." },
      { id: "c", text: "Es schützt nur geheime Firmendaten." },
      { id: "d", text: "Es soll Schutz vor Missbrauch personenbezognener Daten bieten." }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 24,
    question: "Was sind öffentliche Stellen des Bundes gemäß DS-GVO und BDSG?",
    answers: [
      { id: "a", text: "Bewachungsunternehmen" },
      { id: "b", text: "Automobilkonzerne" },
      { id: "c", text: "Bundeskriminalamt" },
      { id: "d", text: "Deutsche Rentenversicherung Bund" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 25,
    question: "Welche Aussagen zur DS-GVO sind richtig?",
    answers: [
      { id: "a", text: "Sie gilt für die familiäre Verarbeitung personenbezogener Daten, z. B. für das Führen eines Anschriftenverzeichnisses, die keinen Bezug zur beruflichen Tätigkeit haben" },
      { id: "b", text: "Sie gilt für die Verarbeitung personenbezogener Daten durch die zuständigen Behörden zum Zwecke der Abwehr von Gefahren für die öffentliche Sicherheit" },
      { id: "c", text: "Sie gilt für die ganz oder teilweise automatisierte Verarbeitung personenbezogener Daten" },
      { id: "d", text: "Sie gilt für die nichtautomatisierte Verarbeitung personenbezogener Daten, die in einem Dateisystem gespeichert sind oder gespeichert werden" }
    ],
    correct: ["c", "d"],
    points: 2
  }
],
  
quiz7: [
  {
    id: 1,
    question: "Wie lange ist die Gültigkeit der bestandenen Sachkundeprüfung nach §34a GewO?",
    answers: [
      { id: "a", text: "5 Jahre" },
      { id: "b", text: "2 Jahre" },
      { id: "c", text: "Unbegrenzt" },
      { id: "d", text: "Sie muss jährlich erneuert werden." }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 2,
    question: "Welche Daten einer Person sind besonders durch den Datenschutz in Deutschland geschützt?",
    answers: [
      { id: "a", text: "Anschrift" },
      { id: "b", text: "Name, Vorname" },
      { id: "c", text: "Gesundheitsdaten" },
      { id: "d", text: "Bankverbindung" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 3,
    question: "Wen muss man nach einem Arbeitsunfall grundsätzlich aufsuchen?",
    answers: [
      { id: "a", text: "Den Heilpraktiker" },
      { id: "b", text: "Den Hausarzt" },
      { id: "c", text: "Den Durchgangsarzt" },
      { id: "d", text: "Den Betriebsarzt" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 4,
    question: "Welche der folgenden Verhaltensweisen eines Sicherheitsmitarbeiters kann als unzulässig angesehen werden?",
    answers: [
      { id: "a", text: "Das Ansprechen von Personen im Rahmen der üblichen Sicherheitskontrollen." },
      { id: "b", text: "Eine Person ohne rechtliche Befugnis durchsuchen." },
      { id: "c", text: "Sich als Polizeibeamter ausgeben" },
      { id: "d", text: "Ruhiges und professionelles Verhalten gegenüber aggressiven Personen." }
    ],
    correct: ["b","c"],
    points: 1
  },
  {
    id: 5,
    question: "Welche Pflichten hat ein Sicherheitsmitarbeiter gegenüber seinem Auftraggeber?",
    answers: [
      { id: "a", text: "Geheimhaltungspflicht über vertrauliche Daten" },
      { id: "b", text: "Weitergabe von internen Firmeninformationen an Dritte" },
      { id: "c", text: "Private Nutzung von Überwachungstechnik während der Arbeitszeit" },
      { id: "d", text: "Pünktliches Erscheinen und ordnungsgemäße Dienstausführung" }
    ],
    correct: ["a","d"],
    points: 1
  },
  {
    id: 6,
    question: "Was bedeutet „aktives Zuhören“?",
    answers: [
      { id: "a", text: "Kein Interesse am Gespräch zeigen" },
      { id: "b", text: "Den Gesprächspartner durch permanenten Blickkontakt einzuschüchtern" },
      { id: "c", text: "Solange ich auch den Gesprächsinhalt verstehe, kann ich auch andere Dinge nebenbei machen." },
      { id: "d", text: "Dem Gesprächspartner aufmerksam zuhören und gegebenenfalls Fragen stellen." }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 7,
    question: "Welche der unten genannten Antworten ist eine 'Sache' nach §90 BGB?",
    answers: [
      { id: "a", text: "Mensch" },
      { id: "b", text: "Tier" },
      { id: "c", text: "Gebäude" },
      { id: "d", text: "Strom" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 8,
    question: "Welche der unten genannten Antworten ist laut Strafgesetzbuch (StGB) eine Straftat?",
    answers: [
      { id: "a", text: "Person A schlägt Person B ohne Grund in das Gesicht." },
      { id: "b", text: "Person A benutzt das Auto von Person B, welches dieser ihm ausgeliehen hat." },
      { id: "c", text: "Person A nimmt ohne Einwilligung den Laptop von Person B mit." },
      { id: "d", text: "Person A fährt Fahrrad ohne Licht bei Dunkelheit." }
    ],
    correct: ["a","c"],
    points: 1
  },
  {
    id: 9,
    question: "Welche Waffen sind laut Waffengesetz nicht verboten?",
    answers: [
      { id: "a", text: "Schießkugelschreiber" },
      { id: "b", text: "Butterflymesser" },
      { id: "c", text: "Schreckschuss-, Reizstoff-, Signalwaffen" },
      { id: "d", text: "Stahlrute, Totschläger, Schlagringe" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 10,
    question: "Wo können Bürger eine Strafanzeige erstatten?",
    answers: [
      { id: "a", text: "Bei der Feuerwehr" },
      { id: "b", text: "Amtsgericht" },
      { id: "c", text: "Polizei" },
      { id: "d", text: "Bei Sicherheitsmitarbeitern" }
    ],
    correct: ["b","c"],
    points: 1
  },
  {
    id: 11,
    question: "Welche Kategorien von Sicherheitsverglasung gibt es?",
    answers: [
      { id: "a", text: "Unzerstörbares Glas" },
      { id: "b", text: "Durchwurfhemmendes Glas" },
      { id: "c", text: "Durchschusshemmendes Glas" },
      { id: "d", text: "Doppelverglasung" }
    ],
    correct: ["b","c"],
    points: 1
  },
  {
    id: 12,
    question: "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
    answers: [
      { id: "a", text: "16" },
      { id: "b", text: "Keine, sie ist ein Einheitsstaat wie Frankreich" },
      { id: "c", text: "19" },
      { id: "d", text: "12" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 13,
    question: "Welche der folgenden Tätigkeiten gehören zu den Aufgaben eines Sicherheitsmitarbeiters?",
    answers: [
      { id: "a", text: "Anfertigen von Berichten über sicherheitsrelevante Vorkommnisse." },
      { id: "b", text: "Anwendung von Gewalt zur Durchsetzung von Vorschriften." },
      { id: "c", text: "Durchsetzung des Hausrechts im Auftrag des Eigentümers." },
      { id: "d", text: "Aufklärung von Straftaten." }
    ],
    correct: ["a","c"],
    points: 1
  },
  {
    id: 14,
    question: "Was ist ein Vorurteil?",
    answers: [
      { id: "a", text: "Vorurteile sind immer negativ behaftet." },
      { id: "b", text: "Vorurteile basieren auf ungeprüften Meinungen anderer Menschen." },
      { id: "c", text: "Vorurteile lassen sich nie wieder rückgängig machen." },
      { id: "d", text: "Es gibt positive und negative Vorurteile." }
    ],
    correct: ["b","d"],
    points: 1
  },
  {
    id: 15,
    question: "Was ist eine Notwehrhandlung?",
    answers: [
      { id: "a", text: "Eine Handlung, um sich für eine Beleidigung zu rächen" },
      { id: "b", text: "Eine Handlung, die immer erlaubt ist, wenn man sich bedroht fühlt." },
      { id: "c", text: "Eine Handlung, um sich oder andere vor einem rechtswidrigen Angriff zu schützen" },
      { id: "d", text: "Eine Handlung, die nur von Polizisten durchgeführt werden darf." }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 16,
    question: "Ein Sicherheitsunternehmen hat den Auftrag der Kasernenbewachung. Hierzu müssen die Sicherheitsmitarbeiter mit Schusswaffen und Munition ausgerüstet werden. Was ist im Umgang mit Schusswaffen und Munition zu beachten?",
    answers: [
      { id: "a", text: "Sicherheitsmitarbeiter dürfen diese in ihrer Freizeit benutzen" },
      { id: "b", text: "Die Sicherheitsmitarbeiter müssen nichts beachten." },
      { id: "c", text: "Die Sicherheitsmitarbeiter müssen sich an die geltenden waffenrechtlichen Gesetze halten (z.B. WaffG, SprengG)." },
      { id: "d", text: "Solange keine berauschenden Mittel konsumiert wurden, ist der Umgang bedenkenlos." }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 17,
    question: "Was sollte ein Sicherheitsmitarbeiter tun, wenn er auf eine Gefahrensituation stößt?",
    answers: [
      { id: "a", text: "Den Vorfall ignorieren und warten, bis sich die Situation von selbst regelt." },
      { id: "b", text: "Alle Personen aus dem Gefahrenbereich entfernen und die Polizei informieren." },
      { id: "c", text: "Sofort in die Situation eingreifen, ohne nach den gesetzlichen Vorgaben zu handeln." },
      { id: "d", text: "Ruhig bleiben, die Situation beobachten und gegebenenfalls Unterstützung anfordern." }
    ],
    correct: ["b","d"],
    points: 1
  },
  {
    id: 18,
    question: "Was beschreibt das Eisbergmodell?",
    answers: [
      { id: "a", text: "Ein Eisberg schmilzt in der Sonne und verändert dadurch seine Form." },
      { id: "b", text: "Alle Menschen verhalten sich immer gleich, egal in welcher Situation." },
      { id: "c", text: "Ein Eisberg ist eine Gefahr für Schiffe auf dem Meer." },
      { id: "d", text: "Nur ein kleiner Teil unseres Verhaltens ist sichtbar, der größte Teil bleibt verborgen." }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 19,
    question: "Was sind die Aufgaben des „Privaten Sicherheitsgewerbes“?",
    answers: [
      { id: "a", text: "Sie erfüllen meist Sicherheitsaufgaben im privaten Bereich." },
      { id: "b", text: "Sie erfüllen grundsätzlich hoheitliche Aufgaben." },
      { id: "c", text: "Es gibt kein “privates Sicherheitsgewerbe”." },
      { id: "d", text: "Kooperationen von privater und öffentlicher Sicherheit sind möglich." }
    ],
    correct: ["a","d"],
    points: 1
  },
  {
    id: 20,
    question: "Sie bewachen ein Objekt und stellen bei einem Rundgang fest, dass eine Person am Haupteingang sitzt und gerade dabei ist, sich eine Spritze in die Armbeuge zu setzen. Wie verhalten Sie sich?",
    answers: [
      { id: "a", text: "Ich störe die Person dabei und werfe sie direkt vom Gelände." },
      { id: "b", text: "Je nach Lage und Aggressivität der Person rufe ich Verstärkung - Polizei oder andere Sicherheitsmitarbeiter." },
      { id: "c", text: "Ich versuche der Person die Spritze zu entreißen." },
      { id: "d", text: "Ich lasse die Person zunächst in Ruhe ihre Rauschmittel konsumieren und spreche sie dann ruhig, mit ausreichendem Abstand, an." }
    ],
    correct: ["b","d"],
    points: 1
  }
],

  quiz8: [
  {
    id: 1,
    question: "Welches sind im Grundgesetz geschützte Rechtsgüter?",
    answers: [
      { id: "a", text: "Vertragsrechte" },
      { id: "b", text: "Freiheitsrechte" },
      { id: "c", text: "Ehre" },
      { id: "d", text: "Streitrechte" }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 2,
    question: "Das Grundrecht der Unverletzlichkeit der Wohnung ist in Art. 13 GG verankert. Welche der nachstehenden Antworten treffen auf dieses Grundrecht zu?",
    answers: [
      { id: "a", text: "Angeordnete Durchsuchungen sind nur zulässig im Sinne des Strafprozessrechtes, nicht aber im Sinne des Zivilrechtes." },
      { id: "b", text: "Menschen ohne deutsche Staatsbürgerschaft haben dieses Grundrecht gemäß Artikel 13 GG nicht." },
      { id: "c", text: "Es ist ein individuelles Abwehrrecht gegen alle Organe öffentlicher Gewalt. Es regelt also keine Mietverhältnisse und schafft auch keinen Wohnraumanspruch." },
      { id: "d", text: "Dieses Grundrecht gilt ausschließlich für Eigentumswohnungen, nicht jedoch für Mietwohnungen." },
      { id: "e", text: "Dieses Recht steht nur dem Eigentümer einer Wohnung zu." },
      { id: "f", text: "Durchsuchungen dürfen nur aufgrund eines richterlichen Beschlusses, bei Gefahr in Verzug aber auch durch die in den Gesetzen vorgesehenen Organe angeordnet und nur in der dort vorgeschriebenen Form durchgeführt." }
    ],
    correct: ["c","f"],
    points: 2
  },
  {
    id: 3,
    question: "Prüfen Sie die nachfolgenden Aussagen zu den Grundrechten und kreuzen Sie die richtigen Antwort(en) an.",
    answers: [
      { id: "a", text: "Der Bürger kann seine Grundrechte notfalls gerichtlich durchsetzen, weil die Staatsgewalten an die Grundrechte gebunden sind und diese achten sowie schützen müssen. So geschrieben zum Beispiel im Artikel 1 Absatz 1 des Grundgesetzes." },
      { id: "b", text: "Grundrechte gelten absolut und dürfen nicht eingeschränkt werden." },
      { id: "c", text: "Einige der Grundrechte zählen zu den Bürgerrechten. Zum Beispiel: Wahlrecht, Versammlungsfreiheit, freie Berufswahl, etc." }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 4,
    question: "Es gibt in Deutschland eine 'horizontale' Gewaltenteilung. Welche der nachfolgenden Aussagen ist in Bezug auf diese Gewalten korrekt?",
    answers: [
      { id: "a", text: "die Antworten 2, 4 und 6 sind richtig" },
      { id: "b", text: "die Antworten 1 , 2 und 5 sind richtig" },
      { id: "c", text: "die Antworten 1, 3 und 5 sind richtig" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 5,
    question: "Welche Institutionen zählen zur 'gesetzgebenden Gewalt'?",
    answers: [
      { id: "a", text: "Der Bundestag" },
      { id: "b", text: "Die Staatsanwaltschaft" },
      { id: "c", text: "Die Regierungen der Bundesländer" },
      { id: "d", text: "Der Bundesrat" }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 6,
    question: "Was bedeutet „staatliches Gewaltmonopol\"?",
    answers: [
      { id: "a", text: "Das staatliche Sicherheitsmonopol entspringt der rechtsstaatlichen Verpflichtung die Sicherheit aller Bürger zu garantieren" },
      { id: "b", text: "Gewalt ist als äußerstes Mittel grundsätzlich nur den staatlichen Organen vorbehalten" },
      { id: "c", text: "Die Rechtsordnung verpflichtet jeden Bürger Gefährdungen der Allgemeinheit auch mit Gewalt abwehren zu können" },
      { id: "d", text: "Gewaltanwendung durch Einzelne ist nur ausnahmsweise zulässig und auf Notsituationen beschränkt" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 7,
    question: "Das Recht auf freie Entfaltung seiner Persönlichkeit (Art. 2 GG) ...",
    answers: [
      { id: "a", text: "ist ein Grundrecht, welches in keiner Weise eingeschränkt werden darf" },
      { id: "b", text: "stellt jedem Menschen frei, zu tun und zu lassen, was er möchte." },
      { id: "c", text: "ist ein Menschenrecht" },
      { id: "d", text: "ist ein Bürgerrecht" },
      { id: "e", text: "beinhaltet auch das informationelle Selbstbestimmungsrecht" },
      { id: "f", text: "erlaubt jedem Menschen in Deutschland seinen Wohnsitz und Aufenthaltsort frei zu bestimmen" }
    ],
    correct: ["c","e"],
    points: 2
  },
  {
    id: 8,
    question: "Welche Begriffe sind dem Bürgerlichen Recht zuzuordnen?",
    answers: [
      { id: "a", text: "Besitzdiener" },
      { id: "b", text: "Bewacherregister" },
      { id: "c", text: "Gewaltmonopol" },
      { id: "d", text: "Unerlaubte Handlung" },
      { id: "e", text: "Exekutive" }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 9,
    question: "Was für Rechte dürfen Wachpersonen, die Kontrollgänge im öffentlichen Verkehrsraum durchführen, eigenverantwortlich ausüben?",
    answers: [
      { id: "a", text: "Sie dürfen bei Verkehrsordnungswidrigkeiten Verwarnungsgelder erheben, z. B. beim Parken im Parkverbot" },
      { id: "b", text: "Sie dürfen zur Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung wie Polizeibeamte tätig werden, z. B. Platzverweise erteilen" },
      { id: "c", text: "Sie dürfen aufgrund eines privatrechtlichen Auftragsverhältnisses tätig werden d.h., sie dürfen Notwehr- und Notstandsrechte und übertragene Selbsthilferechte wahrnehmen" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 10,
    question: "Welche Aussagen zu den Rechtfertigungsgründen sind richtig?",
    answers: [
      { id: "a", text: "Rechtfertigungsgründe sind z. B. Notwehr-und Notstandsrechte, die jeder Person zustehen" },
      { id: "b", text: "Rechtfertigungsgründe dürfen nur dann angewendet werden, wenn Hilfe des Staates nicht rechtzeitig zu erlangen ist" },
      { id: "c", text: "Rechtfertigungsgründe sind der Rechtsordnung zu entnehmen, z. B. dem StGB, der StPO und dem BGB" },
      { id: "d", text: "Rechtfertigungsgründe sind z. B. die Schuldunfähigkeit des Kindes und die Notwehrüberschreitung" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 11,
    question: "In welchem Verhältnis stehen sich Staat und Bürger im öffentlichen Recht gegenüber?",
    answers: [
      { id: "a", text: "Staat und Bürger sind gleichberechtigt" },
      { id: "b", text: "Der Staat ist dem Bürger übergeordnet" },
      { id: "c", text: "Unabhängig von den Rechtsgebieten, ist der Staat dem Bürger immer übergeordnet." },
      { id: "d", text: "Es gibt keinen Unterschied zwischen öffentlichem Recht und privatem Recht. In beiden Rechtsgebieten stehen sich Staat und Bürger gleich gegenüber." },
      { id: "e", text: "Der Bürger ist dem Staat übergeordnet" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 12,
    question: "Der Bewachungsgewerbetreibende und seine Sicherheitsmitarbeiter dürfen bei der Durchführung von Bewachungsaufgaben gegenüber Dritten bestimmte Rechte eigenverantwortlich ausüben. Welche Rechte sind dies?",
    answers: [
      { id: "a", text: "übertragene Selbsthilferechte" },
      { id: "b", text: "Verkehrsregelung nach Verkehrsunfällen" },
      { id: "c", text: "Notwehr- und Notstandsrechte z.B.: im Sinne des StGB und des BGB" },
      { id: "d", text: "Beschlagnahme von Diebesgut" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 13,
    question: "Im deutschen Rechtssystem sind Rechtfertigungsgründe festgelegt. Worin besteht deren Zweck?",
    answers: [
      { id: "a", text: "Sie können strafbares Handeln rechtfertigen . . . zum Beispiel die Notwehr gem. §32 StGB oder die vorläufige Festnahme gemäß § 127 Abs. 1 StPO" },
      { id: "b", text: "Sie können verbotenes Handeln entschuldigen" },
      { id: "c", text: "Sie können unerlaubtes Handeln rechtfertigen . . . zum Beispiel die Notwehr gemäß § 227 BGB oder der (verteidigende) Notstand gemäß § 228 BGB" },
      { id: "d", text: "Sie können ordnungswidriges Handeln entschuldigen" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 14,
    question: "Welche grundsätzlichen Aufgaben hat die Polizei in Deutschland?",
    answers: [
      { id: "a", text: "Verfolgung von Straftaten und Ordnungswidrigkeiten" },
      { id: "b", text: "Leitung des Ermittlungsverfahrens (Anklagebehörde)" },
      { id: "c", text: "Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung" },
      { id: "d", text: "Durchsetzung privater Rechte (z.B. Hausverbot)" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 15,
    question: "Im deutschen Rechtssystem sind Rechtfertigungsgründe verankert. Was ist deren Sinn und Zweck?",
    answers: [
      { id: "a", text: "Sie können strafbares Handeln rechtfertigen" },
      { id: "b", text: "Sie können verbotenes Handeln entschuldigen" },
      { id: "c", text: "Sie können unerlaubtes Handeln rechtfertigen" },
      { id: "d", text: "Sie können ordnungswidriges Handeln entschuldigen" }
    ],
    correct: ["a","c"],
    points: 2
  }
],

  quiz9: [
  {
    id: 1,
    question: "Welche Aussage zur Zuständigkeit des Sicherheitsgewerbes ist richtig?",
    answers: [
      { id: "a", text: "Das Sicherheitsgewerbe ist zuständig für das korrekte Abwiegen von Rinderhack an der Fleischtheke" },
      { id: "b", text: "Das Sicherheitsgewerbe ist zuständig für die Aufrechterhaltung der öffentlichen Sicherheit und Ordnung" },
      { id: "c", text: "Das Sicherheitsgewerbe ist zuständig in den Bereichen, die ihm vertraglich vom Auftraggeber zugewiesen werden" },
      { id: "d", text: "Das Sicherheitsgewerbe ist zuständig in den Bereichen, die ihm von den Sicherheitsbehörden zugewiesen werden" },
      { id: "e", text: "Das Sicherheitsgewerbe ist zuständig für die innere Sicherheit der Bundesländer" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 2,
    question: "Erklären Sie den Begriff 'Gewaltenteilung'!",
    answers: [
      { id: "a", text: "Die Gewalten kontrollieren sich gegenseitig." },
      { id: "b", text: "Die 3 Gewalten sind: Legislative , Exekutive, Judikative," },
      { id: "c", text: "Die Gewalten sind geteilt, das heißt nicht jeder Polizist darf alle Polizeirechte ausüben." },
      { id: "d", text: "Es gibt 3 Gewalten: Gericht, Staatsanwalt, Polizei." }
    ],
    correct: ["a","b"],
    points: 2
  },
  {
    id: 3,
    question: "Welche Aussagen zur Menschenwürde sind gemäß Art. 1 Grundgesetz richtig?",
    answers: [
      { id: "a", text: "Durch die Menschenwürde sind nur die höchsten Grundrechte 'Recht auf Leben' und 'Recht auf körperliche Unversehrtheit‘ geschützt." },
      { id: "b", text: "Geschützt ist jeder Mensch, der sich im Geltungsbereich des GG aufhält, z. B. Minderjährige Kinder, Straftäter und Ausländer" },
      { id: "c", text: "Geschützt sind ebenso juristische Personen und die Menschheit" },
      { id: "d", text: "Der Staat ist verpflichtet, die Menschenwürde zu achten und zu schützen" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 4,
    question: "Was sind wesentliche Aufgaben der Polizei, des Bundes und der Länder?",
    answers: [
      { id: "a", text: "Straftaten zu erforschen und zu verfolgen" },
      { id: "b", text: "Bürger dabei zu unterstützen, ihre zivilrechtlichen Ansprüche gegen andere Bürger durchzusetzen" },
      { id: "c", text: "Die Gefahrenabwehr zum Wohle der öffentlichen Sicherheit und Ordnung" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 5,
    question: "Erklären Sie den Begriff 'Gewaltmonopol'!",
    answers: [
      { id: "a", text: "Gewaltmonopol bedeutet, dass ausschließlich nur die Polizei Gewalt anwenden darf." },
      { id: "b", text: "Private können im Rahmen der Jedermannsrechte gegen das Gewaltmonopol des Staates ausnahmsweise verstoßen." },
      { id: "c", text: "Der Staat hat die absolute Herrschaft über jegliche Gewaltanwendung, es gibt keine Ausnahmen." },
      { id: "d", text: "Der Staat hat das Gewaltmonopol, kann seine Rechte aber voll auf Private übertragen" },
      { id: "e", text: "Gewaltmonopol bedeutet, nur der Chef der Wachfirma hat das Sagen." }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 6,
    question: "Welche der folgenden Grundrechte des Grundgesetzes sind Bürgerrechte?",
    answers: [
      { id: "a", text: "Versammlungsfreiheit" },
      { id: "b", text: "Gleichheit vor dem Gesetz" },
      { id: "c", text: "Schutz der Menschenwürde" },
      { id: "d", text: "Freie Berufswahl" }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 7,
    question: "Welche Rechtsbereiche werden dem privaten Recht zugeordnet?",
    answers: [
      { id: "a", text: "Arbeitsrecht" },
      { id: "b", text: "Sozialrecht" },
      { id: "c", text: "Handelsrecht" },
      { id: "d", text: "Gewerberecht" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 8,
    question: "In welchem Bereich ist die Polizei zuständig?",
    answers: [
      { id: "a", text: "Nur im öffentlichen Bereich" },
      { id: "b", text: "Grundsätzlich im öffentlichen Bereich" },
      { id: "c", text: "Immer in allen Bereichen" },
      { id: "d", text: "Im privaten Bereich z.B. mit Durchsuchungsbeschluss oder bei Gefahr im Verzug" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 9,
    question: "Was regelt das Privatrecht (bürgerliches Recht)?",
    answers: [
      { id: "a", text: "Es regelt die Folgen, wenn ein Bürger von einem anderen Schadensersatz fordert." },
      { id: "b", text: "Es regelt das rechtliche Verhältnis zwischen Bürger und Staat" },
      { id: "c", text: "Es regelt die Folgen, wenn ein Bürger eine Straftat begeht." },
      { id: "d", text: "Es regelt Verhältnisse zwischen Bürgern." }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 10,
    question: "Welche der nachfolgenden Aussagen, verstößt gegen die Rechtsordnung der Bundesrepublik Deutschland?",
    answers: [
      { id: "a", text: "Das Anspucken einer Wachperson, welche den Einlass eines Kaufhauses sichert." },
      { id: "b", text: "Die Durchsuchung einer Wohnung durch die Polizei, auf Grund eines Durchsuchungsbeschlusses." },
      { id: "c", text: "Die Bestrafung einer Person mit einer Geldstrafe ohne gesetzliche Grundlage" },
      { id: "d", text: "Die Untersagung einer Bewachungserlaubnis auf Grund von drei Vorstrafen, wegen verschiedener Verbrechen in den letzten drei Jahren" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 11,
    question: "Im deutschen Rechtssystem sind Rechtfertigungsgründe festgelegt. Worin besteht deren Zweck?",
    answers: [
      { id: "a", text: "Sie können strafbares Handeln rechtfertigen . . . zum Beispiel die Notwehr gem. §32 StGB oder die vorläufige Festnahme gemäß § 127 Abs. 1 StPO" },
      { id: "b", text: "Sie können verbotenes Handeln entschuldigen" },
      { id: "c", text: "Sie können unerlaubtes Handeln rechtfertigen . . . zum Beispiel die Notwehr gemäß § 227 BGB oder der (verteidigende) Notstand gemäß § 228 BGB" },
      { id: "d", text: "Sie können ordnungswidriges Handeln entschuldigen" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 12,
    question: "Welche Aussagen zum Grundrecht auf Leben sind gemäß Grundgesetz richtig?",
    answers: [
      { id: "a", text: "In das Grundrecht auf Leben kann aufgrund eines Gesetzes eingegriffen werden, z. B. durch Notwehr gemäß § 32 StGB" },
      { id: "b", text: "Das Recht auf Leben ist ein Bürgerrecht und steht deshalb nur deutschen Staatsbürgern zu" },
      { id: "c", text: "Es ist ein Menschenrecht, das für alle Menschen gilt, die sich auf dem Staatsgebiet der Bundesrepublik Deutschland aufhalten" },
      { id: "d", text: "In dieses Grundrecht darf nicht eingegriffen werden, weil es eines der höchsten Rechtsgüter des Menschen ist" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 13,
    question: "Das Recht auf Leben und körperliche Unversehrtheit (Art. 2 GG)…",
    answers: [
      { id: "a", text: "…ist ein Bürgerrecht." },
      { id: "b", text: "…ist ein Menschenrecht." },
      { id: "c", text: "…ist ein Abwehrrecht und richtet sich u.a. gegen Eingriffe des Staates." },
      { id: "d", text: "…schützt nur die psychische Unversehrtheit der Bürger." }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 14,
    question: "Wozu dienen die Grundrechte?",
    answers: [
      { id: "a", text: "Als Abwehrrechte der Bürger gegenüber dem Staat" },
      { id: "b", text: "Abschreckung der Allgemeinheit vor strafbaren Handlungen" },
      { id: "c", text: "Als Eingriffsrechte des Staates gegenüber dem Bürger" },
      { id: "d", text: "Regelung des Rechtsverhältnisses der Bürger untereinander" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 15,
    question: "Welche Rechte stehen den Wachpersonen im Bewachungsgewerbe zu ?",
    answers: [
      { id: "a", text: "Sie dürfen Taschen und Kleidung eines festgenommenen Straftäters nach einem Ausweis durchsuchen" },
      { id: "b", text: "Sie dürfen Notwehr- und Notstandsrechte zur Angriffs- bzw. Gefahrenabwehr anwenden." },
      { id: "c", text: "Sie dürfen Straftäter zur Identitätsfeststellung bis zu 12 Stunden festhalten." },
      { id: "d", text: "Sie dürfen vertraglich übertragene Selbsthilferechte ausüben." }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 16,
    question: "Im deutschen Rechtssystem sind Rechtfertigungsgründe verankert. Was ist deren Sinn und Zweck?",
    answers: [
      { id: "a", text: "Sie können unerlaubtes Handeln rechtfertigen" },
      { id: "b", text: "Sie können verbotenes Handeln entschuldigen" },
      { id: "c", text: "Sie können strafbares Handeln rechtfertigen" },
      { id: "d", text: "Sie können ordnungswidriges Handeln entschuldigen" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 17,
    question: "Der Bewachungsgewerbetreibende und seine Sicherheitsmitarbeiter dürfen bei der Durchführung von Bewachungsaufgaben gegenüber Dritten bestimmte Rechte eigenverantwortlich ausüben. Welche Rechte sind dies?",
    answers: [
      { id: "a", text: "Notwehr- und Notstandsrechte z.B.: im Sinne des StGB und des BGB" },
      { id: "b", text: "Verkehrsregelung nach Verkehrsunfällen" },
      { id: "c", text: "übertragene Selbsthilferechte" },
      { id: "d", text: "Beschlagnahme von Diebesgut" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 18,
    question: "Welche Kooperationsmöglichkeit ist im Rahmen einer Public-Private-Partnership-Vereinbarung zwischen der Polizei und einem privaten Sicherheitsdienst denkbar?",
    answers: [
      { id: "a", text: "Verkehrsüberwachung mit repressiven und präventiven Maßnahmen, z.B. durch Verkehrskontrollen" },
      { id: "b", text: "Gemeinschaftliche und arbeitsteilige Strafverfolgung, z.B. Verhaftung von Straftätern" },
      { id: "c", text: "Verkehrslenkung und Verkehrsregelung im Einzelfall, z.B. bei Großveranstaltungen" },
      { id: "d", text: "Hilfeleistung und Informationsaustausch, z.B. bei Sach- und Personenfahndungen" }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 19,
    question: "Welche Aussagen zu den Grundrechten im Grundgesetz sind richtig?",
    answers: [
      { id: "a", text: "Sie schützen die Rechte des Bürgers vor unzulässigen Eingriffen des Staates." },
      { id: "b", text: "Sie binden Gesetzgebung, vollziehende Gewalt und Rechtsprechung als unmittelbar geltendes Recht." },
      { id: "c", text: "Sie können jederzeit durch Sicherheitsbehörden zum Zwecke der Aufgabenerfüllung eingeschränkt werden." }
    ],
    correct: ["a","b"],
    points: 2
  },
  {
    id: 20,
    question: "Welche Aussage in Bezug auf sogenannte Public-Private-Partnership-Kooperationen (PPP-Kooperationen) ist richtig?",
    answers: [
      { id: "a", text: "Private Sicherheitsdienste, die eine sogenannte ‚PPP-Kooperation' eingehen, verfügen über besondere hoheitliche Befugnisse ohne die Aufsicht staatlicher Behörden" },
      { id: "b", text: "‚PPP-Kooperationen‘ zwischen Polizei und privaten Sicherheitsdiensten sind eine staatliche Maßnahme, bei welcher die Polizei durch Sicherheitsdienste ersetzt wird" },
      { id: "c", text: "‚PPP-Kooperationen‘ zwischen Polizei und privaten Sicherheitsdiensten beinhalten meistens lediglich einen gegenseitigen Informations- und Erfahrungsaustausch" },
      { id: "d", text: "‚PPP-Kooperationen‘ zwischen privaten Sicherheitsunternehmen und Behörden (z.B. der Polizei) sind uneinheitlich und regional sehr unterschiedlich geregelt" }
    ],
    correct: ["c","d"],
    points: 2
  }
],

  quiz10: [
  {
    id: 1,
    question: "Was regelt das Privatrecht?",
    answers: [
      { id: "a", text: "Es regelt die Rechtsbeziehungen der Bürger zum Staat und seinen Einrichtungen, z. B, zu Polizei und Verwaltungsbehörden" },
      { id: "b", text: "Es regelt die Schadensersatzpflicht nach unerlaubten Handlungen" },
      { id: "c", text: "Es regelt, unter welchen Voraussetzungen das Verhalten eines Menschen strafbar ist" },
      { id: "d", text: "Es regelt die Rechtsbeziehungen von natürlichen und juristischen Personen untereinander" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 2,
    question: "Welche Aussagen zur Menschenwürde sind gemäß Art. 1 Grundgesetz richtig?",
    answers: [
      { id: "a", text: "Geschützt ist jeder Mensch, der sich im Geltungsbereich des GG aufhält, z. B. Minderjährige Kinder, Straftäter und Ausländer" },
      { id: "b", text: "Geschützt sind ebenso juristische Personen und die Menschheit" },
      { id: "c", text: "Durch die Menschenwürde sind nur die höchsten Grundrechte 'Recht auf Leben' und 'Recht auf körperliche Unversehrtheit' geschützt." },
      { id: "d", text: "Der Staat ist verpflichtet, die Menschenwürde zu achten und zu schützen" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 3,
    question: "Welche Bedeutung hat das Grundgesetz?",
    answers: [
      { id: "a", text: "Das Grundgesetz gilt nur zwischen Bürgern." },
      { id: "b", text: "Das Grundgesetz müssen auch Sicherheitsmitarbeiter im Dienst beachten." },
      { id: "c", text: "Das Grundgesetz bietet nur Schutz des Bürgers vor dem Staat." },
      { id: "d", text: "Das Grundgesetz gilt auch zwischen Bürger und Bürger (so genannte Drittwirkung der Grundrechte)." }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 4,
    question: "Wer darf in der Bundesrepublik Deutschland Gesetze erlassen, die bundesweit gelten?",
    answers: [
      { id: "a", text: "Landtag" },
      { id: "b", text: "Bundesregierung" },
      { id: "c", text: "Landesregierung" },
      { id: "d", text: "Bundestag" }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 5,
    question: "Erklären Sie den Begriff 'Gewaltenteilung'!",
    answers: [
      { id: "a", text: "Die Gewalten sind geteilt, das heißt nicht jeder Polizist darf alle Polizeirechte ausüben." },
      { id: "b", text: "Es gibt 3 Gewalten: Gericht, Staatsanwalt, Polizei." },
      { id: "c", text: "Die 3 Gewalten sind: Legislative, Exekutive, Judikative" },
      { id: "d", text: "Die Gewalten kontrollieren sich gegenseitig." }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 6,
    question: "Im deutschen Rechtssystem sind Rechtfertigungsgründe verankert. Was ist deren Sinn und Zweck?",
    answers: [
      { id: "a", text: "Sie können unerlaubtes Handeln rechtfertigen" },
      { id: "b", text: "Sie können ordnungswidriges Handeln entschuldigen" },
      { id: "c", text: "Sie können verbotenes Handeln entschuldigen" },
      { id: "d", text: "Sie können strafbares Handeln rechtfertigen" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 7,
    question: "Die BRD ist gemäß Grundgesetz ein Bundesstaat. Was bedeutet dies im Sinne des Föderalismus?",
    answers: [
      { id: "a", text: "Die Bundesländer wirken über den Bundesrat bei der Gesetzgebung mit" },
      { id: "b", text: "Im Bundesstaat sind die staatlichen Aufgaben zwischen Bund und Ländern aufgeteilt. Die Länder haben z. B. im Polizei- und Sicherheitsrecht eigene Gesetzgebungskompetenzen" },
      { id: "c", text: "Der Bundesstaat wird zentral von der Hauptstadt Berlin aus regiert. Alle politischen Entscheidungen gelten einheitlich für die Bundesrepublik Deutschland" },
      { id: "d", text: "Nur der Bund als Zentralstaat darf Gesetze beschließen und verabschieden. Die Bundesländer müssen diese Gesetze ausführen" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 8,
    question: "Welche Aussagen treffen auf private Sicherheitsdienste zu?",
    answers: [
      { id: "a", text: "Private Sicherheitsdienstleister sind für die öffentliche Sicherheit und Ordnung verantwortlich. Die Grundlage hierfür sind privatrechtliche Vereinbarungen" },
      { id: "b", text: "Private Sicherheitsdienstleister und deren Mitarbeiter besitzen die Eigenschaft und die Befugnisse von Hilfspolizeibeamten" },
      { id: "c", text: "Private Sicherheitsdienstleister dürfen bei der Durchführung von Bewachungsaufgaben gegenüber Dritten bestimmte Rechte eigenverantwortlich ausüben. Dazu zählen Notwehr- und Notstandsrechte und vom Auftraggeber vertraglich übertragene Selbsthilferechte" },
      { id: "d", text: "Private Sicherheitsdienstleister gewährleisten bei Kontrollgängen im öffentlichen Verkehrsraum Sicherheit und Ordnung auf der Basis von privatrechtlichen Verträgen" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 9,
    question: "Bei Großveranstaltungen kann es notwendig sein, die Zufahrtskontrollen von Parkplätzen im öffentlichen Bereich durch privates Sicherheitspersonal zu regeln. Welche Voraussetzung kann eine solche Sonderregelung erlauben?",
    answers: [
      { id: "a", text: "Genehmigung von Ordnungsamt und örtl. Polizeibehörde" },
      { id: "b", text: "Nachweis eines vorliegenden Gewohnheitsrechts" },
      { id: "c", text: "Übertragene Besitzrechte durch die Polizei" },
      { id: "d", text: "Entscheidung des zuständigen Auftraggebers" },
      { id: "e", text: "Public-Private-Partnership-Vereinbarung" },
      { id: "f", text: "Entscheidung durch den Bewachungsgewerbetreibenden" }
    ],
    correct: ["a", "e"],
    points: 2
  },
  {
    id: 10,
    question: "Erklären Sie den Begriff 'Public Private Partnership' (PPP)",
    answers: [
      { id: "a", text: "Ein privater Sicherheitsmitarbeiter kann z.B. bei einer Veranstaltung dem Ordnungsamt helfen, wenn das so vereinbart wurde." },
      { id: "b", text: "Der Staat und eine private Wachfirma gründen einen Verein, dessen Mitarbeiter Hilfsbeamte sind." },
      { id: "c", text: "Sicherheitsmitarbeitern einer privaten Wachfirma werden hoheitliche Rechte eines Polizisten übertragen." },
      { id: "d", text: "Eine Zusammenarbeit von staatlichen und privaten Stellen. Ja, wie zum Beispiel im Rahmen von Bewachungen für staatliche Einrichtungen wie militärische Anlagen." }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 11,
    question: "Der Bewachungsgewerbetreibende und seine Sicherheitsmitarbeiter dürfen bei der Durchführung von Bewachungsaufgaben gegenüber Dritten bestimmte Rechte eigenverantwortlich ausüben. Welche Rechte sind dies?",
    answers: [
      { id: "a", text: "Verkehrsregelung nach Verkehrsunfällen" },
      { id: "b", text: "Beschlagnahme von Diebesgut" },
      { id: "c", text: "Notwehr- und Notstandsrechte z.B.: im Sinne des StGB und des BGB" },
      { id: "d", text: "übertragene Selbsthilferechte" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 12,
    question: "Was ist im Strafrecht, das dem öffentlichen Recht zugeordnet wird, geregelt?",
    answers: [
      { id: "a", text: "Die Schuldunfähigkeit des Kindes" },
      { id: "b", text: "Der Angriffsnotstand" },
      { id: "c", text: "Die Anwendung von Besitzschutzrechten" },
      { id: "d", text: "Das Stellen eines Strafantrags" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 13,
    question: "Welche Aussagen zu den Grundrechten im Grundgesetz sind richtig?",
    answers: [
      { id: "a", text: "Sie schützen die Rechte des Bürgers vor unzulässigen Eingriffen des Staates." },
      { id: "b", text: "Sie können jederzeit durch Sicherheitsbehörden zum Zwecke der Aufgabenerfüllung eingeschränkt werden." },
      { id: "c", text: "Sie binden Gesetzgebung, vollziehende Gewalt und Rechtsprechung als unmittelbar geltendes Recht." }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 14,
    question: "Welche der folgenden Rechte ist ein Grundrecht?",
    answers: [
      { id: "a", text: "Gleichheit vor dem Gesetz" },
      { id: "b", text: "Recht auf Strafverfolgung" },
      { id: "c", text: "Bürgerliches Recht" },
      { id: "d", text: "Unverletzlichkeit der Wohnung" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 15,
    question: "Wer ist im Bereich der Judikative beschäftigt?",
    answers: [
      { id: "a", text: "Richter" },
      { id: "b", text: "Polizeivollzugsbeamte" },
      { id: "c", text: "Sachbearbeiter der Gewerbebehörde" },
      { id: "d", text: "Justizvollzugsbeamte" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 16,
    question: "Welche der beschriebenen Handlungen darf ein Kaufhausdetektiv durchführen?",
    answers: [
      { id: "a", text: "Vorbeugende Beschlagnahme von mitgeführten Sachen, um einem Diebstahl vorab zu vermeiden" },
      { id: "b", text: "Festnahme eines auf frischer Tat betroffenen Straftäters, dessen Identität unbekannt ist, bis zum Eintreffen der gerufenen Polizei" },
      { id: "c", text: "Fesseln eines Ladendiebes mit Handfesseln, falls dies im Rahmen der Gewaltprävention notwendig ist" },
      { id: "d", text: "Vorläufige Festnahme eines bekannten Straftäters, nach wiederholter Begehung von Straftaten, um ein Hausverbot zu erteilen" },
      { id: "e", text: "Durchsuchung der mitgeführten Tasche eines Tatverdächtigen, falls sich darin die gestohlene Ware befindet" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 17,
    question: "Welche grundsätzlichen Aussagen zum Bundes- und Landesrecht in der Bundesrepublik Deutschland sind richtig?",
    answers: [
      { id: "a", text: "Das Bundesrecht betrifft nur das Straf- und Gewerberecht" },
      { id: "b", text: "Das Landesrecht umfasst z. B. das Polizeirecht" },
      { id: "c", text: "Das Bundesrecht bricht Länderrecht" },
      { id: "d", text: "Das Bundesrecht und das Landesrecht sind gleichgestellt" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 18,
    question: "Welche Aussagen zu den Befugnissen einer Wachperson sind richtig?",
    answers: [
      { id: "a", text: "Wachpersonen müssen bei der Inanspruchnahme ihrer Befugnisse den Grundsatz der Erforderlichkeit beachten" },
      { id: "b", text: "Wachpersonen dürfen bei der Durchführung von Bewachungsaufgaben gegenüber Dritten z.B. Notstandsrechte eigenverantwortlich ausüben" },
      { id: "c", text: "Wachpersonen haben die gleichen Befugnisse wie Polizeibeamte oder Hilfspolizeibeamte, z.B. die Durchsuchung eines Täters nach Waffen." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 19,
    question: "Bei der Durchführung von Bewachungsaufgaben dürfen Sicherheitsmitarbeiter eigenverantwortlich bestimmte Rechte ausüben. Welche Rechte gehören dazu?",
    answers: [
      { id: "a", text: "Sicherstellung von Fahrzeugen" },
      { id: "b", text: "Beschlagnahme von Beweismitteln" },
      { id: "c", text: "Notwehr- und Notstandsrechte" },
      { id: "d", text: "Vorläufige Festnahme" },
      { id: "e", text: "Durchsuchung von Sachen" },
      { id: "f", text: "Gewahrsamsnahme von Menschen" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 20,
    question: "Welche grundsätzlichen Aufgaben hat die Polizei in Deutschland?",
    answers: [
      { id: "a", text: "Leitung des Ermittlungsverfahrens (Anklagebehörde)" },
      { id: "b", text: "Durchsetzung privater Rechte (z.B. Hausverbot)" },
      { id: "c", text: "Verfolgung von Straftaten und Ordnungswidrigkeiten" },
      { id: "d", text: "Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 21,
    question: "Was sind Aufgaben der Polizei?",
    answers: [
      { id: "a", text: "Verhütung einer bevorstehenden Straftat" },
      { id: "b", text: "Strafverfolgung" },
      { id: "c", text: "Klageerhebung" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 22,
    question: "Welche Rechtsvorschriften sind als Gesetze eingestuft?",
    answers: [
      { id: "a", text: "Die Gewerbeordnung" },
      { id: "b", text: "Die Strafprozessordnung" },
      { id: "c", text: "Die Unfallverhütungsvorschrift DGUV Vorschrift 23" },
      { id: "d", text: "Die Bewachungsverordnung" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 23,
    question: "Was besagen die Gleichheitsgrundsätze gemäß Art. 3 Grundgesetz?",
    answers: [
      { id: "a", text: "Die Gleichberechtigung zwischen Mann und Frau kann durch Gesetze eingeschränkt werden" },
      { id: "b", text: "Alle Menschen sind vor dem Gesetz gleich" },
      { id: "c", text: "Ein generelles Nachtarbeitsverbot für Frauen ist mit den Gleichheitsgrundsätzen vereinbar" },
      { id: "d", text: "Männer und Frauen sind gleichberechtigt" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 24,
    question: "Im Grundgesetz steht, dass die 'Freiheit der Person' unverletzlich ist. Welche Aussagen dazu sind richtig?",
    answers: [
      { id: "a", text: "In der Regel ist bei jeder natürlichen Person deren körperliche Bewegungsfreiheit geschützt." },
      { id: "b", text: "Eingriffe in die Freiheit der Person sind nur aufgrund eines Gesetzes zulässig, z. B. der StPO." },
      { id: "c", text: "Eingriffe in die Freiheit der Person dürfen nur durch Hoheitsträger wie die Polizei vorgenommen werden." },
      { id: "d", text: "Dieses Grundrecht erlaubt es jeder Person, jeden beliebigen Ort in Deutschland aufzusuchen." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 25,
    question: "Welche Maßnahme dürfen Wachpersonen durchführen?",
    answers: [
      { id: "a", text: "Sie dürfen einen auf frischer Tat betroffenen Dieb ohne dessen Einwilligung durchsuchen, um ihm das Diebesgut abzunehmen." },
      { id: "b", text: "Sie dürfen als Türsteher bei Einlasskontrollen aufgefundene Reizstoffsprühgeräte beschlagnahmen." },
      { id: "c", text: "Sie dürfen Taschenkontrollen durchführen, wenn die von der Kontrolle betroffene Person damit einverstanden ist." }
    ],
    correct: ["c"],
    points: 1
  }
],
  
quiz11: [
  {
    id: 1,
    question: "Was regelt das Privatrecht?",
    answers: [
      { id: "a", text: "Es regelt die Rechtsbeziehungen von natürlichen und juristischen Personen untereinander" },
      { id: "b", text: "Es regelt die Schadensersatzpflicht nach unerlaubten Handlungen" },
      { id: "c", text: "Es regelt die Rechtsbeziehungen der Bürger zum Staat und seinen Einrichtungen, z. B, zu Polizei und Verwaltungsbehörden" },
      { id: "d", text: "Es regelt, unter welchen Voraussetzungen das Verhalten eines Menschen strafbar ist" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 2,
    question: "Welche der folgenden Grundrechte sind für die Wachbranche relevant?",
    answers: [
      { id: "a", text: "Keines" },
      { id: "b", text: "Recht auf Menschenwürde" },
      { id: "c", text: "Freizügigkeit" },
      { id: "d", text: "Unverletzlichkeit der Wohnung" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 3,
    question: "Welche Aussage in Bezug auf sogenannte Public-Private-Partnership-Kooperationen (PPP-Kooperationen) ist richtig?",
    answers: [
      { id: "a", text: "PPP-Kooperationen zwischen Polizei und privaten Sicherheitsdiensten sind eine staatliche Maßnahme, bei welcher die Polizei durch Sicherheitsdienste ersetzt wird" },
      { id: "b", text: "Private Sicherheitsdienste, die eine sogenannte PPP-Kooperation eingehen, verfügen über besondere hoheitliche Befugnisse ohne die Aufsicht staatlicher Behörden" },
      { id: "c", text: "PPP-Kooperationen zwischen Polizei und privaten Sicherheitsdiensten beinhalten meistens lediglich einen gegenseitigen Informations- und Erfahrungsaustausch" },
      { id: "d", text: "PPP-Kooperationen zwischen privaten Sicherheitsunternehmen und Behörden (z.B. der Polizei) sind uneinheitlich und regional sehr unterschiedlich geregelt" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 4,
    question: "Erklären Sie den Begriff 'Gewaltmonopol'!",
    answers: [
      { id: "a", text: "Private können im Rahmen der Jedermannsrechte gegen das Gewaltmonopol des Staates ausnahmsweise verstoßen." },
      { id: "b", text: "Gewaltmonopol bedeutet, nur der Chef der Wachfirma hat das Sagen." },
      { id: "c", text: "Gewaltmonopol bedeutet, dass ausschließlich nur die Polizei Gewalt anwenden darf." },
      { id: "d", text: "Der Staat hat die absolute Herrschaft über jegliche Gewaltanwendung, es gibt keine Ausnahmen." },
      { id: "e", text: "Der Staat hat das Gewaltmonopol, kann seine Rechte aber voll auf Private übertragen" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 5,
    question: "In welche Rechtsgebiete wird die deutsche Rechtsordnung grundsätzlich eingeteilt?",
    answers: [
      { id: "a", text: "Hoheitsrecht" },
      { id: "b", text: "Bürgerrechte" },
      { id: "c", text: "Privates Recht" },
      { id: "d", text: "Öffentliches Recht" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 6,
    question: "Welche Aussagen über die Grundrechte des GG treffen zu?",
    answers: [
      { id: "a", text: "Einige Grundrechte beinhalten Ansprüche gegenüber dem Staat, wie z. B. Art. 19 GG, Recht auf Rechtsschutz durch gerichtliche Verfahren." },
      { id: "b", text: "Einige Grundrechte sind Abwehrrechte und schützen gegen unzulässige Eingriffe des Staates wie z. B. Art. 13 GG, Unverletzlichkeit der Wohnung." },
      { id: "c", text: "Einige Grundrechte können gemäß Art. 19 GG eingeschränkt werden, wie z. B. die Würde des Menschen." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 7,
    question: "Was sind wesentliche Aufgaben der Polizei, des Bundes und der Länder?",
    answers: [
      { id: "a", text: "Straftaten zu erforschen und zu verfolgen" },
      { id: "b", text: "Die Gefahrenabwehr zum Wohle der öffentlichen Sicherheit und Ordnung" },
      { id: "c", text: "Bürger dabei zu unterstützen, ihre zivilrechtlichen Ansprüche gegen andere Bürger durchzusetzen" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 8,
    question: "Welche Grundrechte des Grundgesetzes sind Bürgerrechte?",
    answers: [
      { id: "a", text: "Freie Berufswahl" },
      { id: "b", text: "Schutz der Menschenwürde" },
      { id: "c", text: "Gleichheit vor dem Gesetz" },
      { id: "d", text: "Versammlungsfreiheit" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 9,
    question: "Welche Aussage zur Zuständigkeit des Sicherheitsgewerbes ist richtig?",
    answers: [
      { id: "a", text: "Das Sicherheitsgewerbe ist zuständig in den Bereichen, die ihm vertraglich vom Auftraggeber zugewiesen werden" },
      { id: "b", text: "Das Sicherheitsgewerbe ist zuständig für die innere Sicherheit der Bundesländer" },
      { id: "c", text: "Das Sicherheitsgewerbe ist zuständig in den Bereichen, die ihm von den Sicherheitsbehörden zugewiesen werden" },
      { id: "d", text: "Das Sicherheitsgewerbe ist zuständig für die Aufrechterhaltung der öffentlichen Sicherheit und Ordnung" },
      { id: "e", text: "Das Sicherheitsgewerbe ist zuständig für das korrekte Abwiegen von Rinderhack an der Fleischtheke" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 10,
    question: "Welche Aussagen zur Menschenwürde sind gemäß Art. 1 Grundgesetz richtig?",
    answers: [
      { id: "a", text: "Der Staat ist verpflichtet, die Menschenwürde zu achten und zu schützen" },
      { id: "b", text: "Durch die Menschenwürde sind nur die höchsten Grundrechte 'Recht auf Leben' und 'Recht auf körperliche Unversehrtheit' geschützt." },
      { id: "c", text: "Geschützt sind ebenso juristische Personen und die Menschheit" },
      { id: "d", text: "Geschützt ist jeder Mensch, der sich im Geltungsbereich des GG aufhält, z. B. Minderjährige Kinder, Straftäter und Ausländer" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 11,
    question: "Welche Institutionen zählen zur 'gesetzgebenden Gewalt'?",
    answers: [
      { id: "a", text: "Der Bundesrat" },
      { id: "b", text: "Die Regierungen der Bundesländer" },
      { id: "c", text: "Die Staatsanwaltschaft" },
      { id: "d", text: "Der Bundestag" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 12,
    question: "Vervollständigen Sie den folgenden Satz: Die Grundrechte (Artikel 1 bis 19 Grundgesetz) sind in erster Linie Abwehrrechte …",
    answers: [
      { id: "a", text: "... des öffentlichen Rechts gegenüber den Bürgern." },
      { id: "b", text: "... welche ausschließlich den deutschen Staatsbürgern zur Verfügung stehen." },
      { id: "c", text: "... des Privatrechts gegenüber unerlaubten Handlungen." },
      { id: "d", text: "... des Staates gegen Verletzung von Rechtsgütern durch Straftaten." },
      { id: "e", text: "... des Bürgers gegenüber staatlicher Machtentfaltung." },
      { id: "f", text: "... der Polizei, um bei ihren Einsätzen gegenüber dem Bürger geschützt zu sein" }
    ],
    correct: ["e"],
    points: 1
  },
  {
    id: 13,
    question: "Jugendliche Randalierer blockieren für Gäste den Zugang zu einer Diskothek. Welche Aussagen zu diesem Fall sind richtig?",
    answers: [
      { id: "a", text: "Die Türsteher können sich auf die Rechtfertigungsgründe Notwehr bzw. Besitzwehr stützen, um das Verhalten der Jugendlichen zu unterbinden." },
      { id: "b", text: "Das Verhalten der Jugendlichen erfüllt den Tatbestand der Nötigung; zivilrechtlich liegt verbotene Eigenmacht in Form der Besitzstörung vor." },
      { id: "c", text: "Der Betreiber der Diskothek muss die Polizei verständigen, da nur die Polizei befugt ist, das störende Verhalten der Jugendlichen zu beseitigen." },
      { id: "d", text: "Die Türsteher begehen Amtsanmaßung, wenn sie die Weisung des Diskotheken-Betreibers befolgen und die Jugendlichen entfernen." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 14,
    question: "Wie ist das rechtliche Verhältnis zwischen Staat und Bürger im Öffentlichen Recht?",
    answers: [
      { id: "a", text: "Es kommt auf den Einzelfall an." },
      { id: "b", text: "Der Staat ist übergeordnet." },
      { id: "c", text: "Beide Seiten sind gleichberechtigt." },
      { id: "d", text: "Der Bürger hat keine Rechte." }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 15,
    question: "Welche Aussagen zum Privatrecht sind richtig?",
    answers: [
      { id: "a", text: "Es regelt die rechtlichen Beziehungen der Bürger zum Staat und seinen Einrichtungen" },
      { id: "b", text: "Es regelt die rechtlichen Beziehungen der Bürger untereinander" },
      { id: "c", text: "Es regelt z. B. die Besitz- und Eigentumsrechte an Sachen" },
      { id: "d", text: "Es umfasst auch die Gewerbeordnung, die die Voraussetzungen für den Betrieb von Sicherheitsunternehmen regelt" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 16,
    question: "In welchem Bereich ist die Polizei zuständig?",
    answers: [
      { id: "a", text: "Immer in allen Bereichen" },
      { id: "b", text: "Im privaten Bereich z.B. mit Durchsuchungsbeschluss oder bei Gefahr im Verzug" },
      { id: "c", text: "Grundsätzlich im öffentlichen Bereich" },
      { id: "d", text: "Nur im öffentlichen Bereich" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 17,
    question: "Beenden Sie den Satz korrekt: Deutschland ist …",
    answers: [
      { id: "a", text: "... ein demokratischer und sozialistischer Einheitsstaat." },
      { id: "b", text: "... ist eine föderaldemokratische Einheitsrepublik mit 17 Bundesländer" },
      { id: "c", text: "... eine demokratisch orientierte Monarchie" },
      { id: "d", text: "... ein föderalistisch organisierter Bundesstaat." },
      { id: "e", text: "... ein demokratischer und sozialer Staat." },
      { id: "f", text: "... eine sozialdemokratische Volksrepublik." }
    ],
    correct: ["d", "e"],
    points: 2
  },
  {
    id: 18,
    question: "Welche der nachfolgenden Aussagen unterscheidet die Polizei vom Sicherheitsgewerbe?",
    answers: [
      { id: "a", text: "Das Sicherheitsgewerbe wird in privaten Bereichen nur tätig, wenn der Auftraggeber das verlangt" },
      { id: "b", text: "Die Polizei ist unter anderem Bundessache. Sie arbeitet auf der Grundlage des Polizeigesetzes des Bundes" },
      { id: "c", text: "Die Polizei verfügt über hoheitliche Sonderrechte, z.B. Sonderwegerecht durch Blaulicht und Martinshorn" },
      { id: "d", text: "Private Sicherheitsmitarbeiter haben den Status von Hilfsbeamten der Staatsanwaltschaft" },
      { id: "e", text: "Das Sicherheitsgewerbe erfüllt niemals Präventivaufgaben" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 19,
    question: "Bei der Durchführung von Bewachungsaufgaben dürfen Sicherheitsmitarbeiter eigenverantwortlich bestimmte Rechte ausüben. Welche Rechte gehören dazu?",
    answers: [
      { id: "a", text: "Beschlagnahme von Beweismitteln" },
      { id: "b", text: "Durchsuchung von Sachen" },
      { id: "c", text: "Vorläufige Festnahme" },
      { id: "d", text: "Gewahrsamsnahme von Menschen" },
      { id: "e", text: "Notwehr- und Notstandsrechte" },
      { id: "f", text: "Sicherstellung von Fahrzeugen" }
    ],
    correct: ["c", "e"],
    points: 2
  },
  {
    id: 20,
    question: "Das Recht auf Leben und körperliche Unversehrtheit (Art. 2 GG)…",
    answers: [
      { id: "a", text: "... ist ein Abwehrrecht und richtet sich u.a. gegen Eingriffe des Staates." },
      { id: "b", text: "... ist ein Bürgerrecht." },
      { id: "c", text: "... ist ein Menschenrecht." },
      { id: "d", text: "... schützt nur die psychische Unversehrtheit der Bürger." }
    ],
    correct: ["a", "c"],
    points: 2
  }
],

  quiz12: [
  {
    id: 1,
    question: "Welche Aussagen zum staatlichen Gewaltmonopol sind richtig?",
    answers: [
      { id: "a", text: "Die Anwendung staatlicher Gewalt ist nur unter engen gesetzlichen Vorausset-zungen zulässig." },
      { id: "b", text: "Der Bürger darf in keiner Situation Gewalt anwenden." },
      { id: "c", text: "Der Staat darf zur Aufrechterhaltung der öffentlichen Sicherheit und Ordnung willkürlich Gewalt anwenden." },
      { id: "d", text: "Die Anwendung von Gewalt ist grundsätzlich nur den staatlichen Organen erlaubt." }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 2,
    question: "Welche Angaben muss der Bewacherausweis von Sicherheitsmitarbeitern gemäß BewachV enthalten?",
    answers: [
      { id: "a", text: "Name, Vorname des Sicherheitsmitarbeiters, Gültigkeitsdauer des Ausweises, Privatanschrift und Geburtsdatum des Sicherheitsmitarbeiters" },
      { id: "b", text: "Bezeichnung und Anschrift des Gewerbebetriebes, Bewacherregisteridentifikationsnummer des Gewerbebetriebes und der Wachperson" },
      { id: "c", text: "Name, Vorname und Unterschrift des Sicherheitsmitarbeiters, Name, Anschrift und Unterschrift des Gewerbetreibenden oder seines Vertreters" },
      { id: "d", text: "Gültigkeitsdauer, Lichtbild des Gewerbetreibenden, Name, Vorname des Sicherheitsmitarbeiters sowie seine Zugehörigkeit zur Krankenkasse" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 3,
    question: "Welche Aufgaben hat die Staatsanwaltschaft?",
    answers: [
      { id: "a", text: "Leitung des Strafverfahrens" },
      { id: "b", text: "Erhebung der Anklage" },
      { id: "c", text: "Erlass von Haftbefehlen" },
      { id: "d", text: "Lenkung des Ermittlungsverfahrens" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 4,
    question: "Wer beabsichtigt, ein Bewachungsgewerbe auszuüben, bedarf einer Erlaubnis. Wann wird diese Erlaubnis gemäß GewO versagt?",
    answers: [
      { id: "a", text: "Wenn der Antragsteller in ungeordneten Vermögensverhältnissen lebt" },
      { id: "b", text: "Wenn der Antragsteller das 21. Lebensjahr noch nicht vollendet hat" },
      { id: "c", text: "Wenn der Antragsteller nicht die deutsche Staatsbürgerschaft besitzt" },
      { id: "d", text: "Wenn der Antragsteller nicht über die erforderliche Zuverlässigkeit verfügt" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 5,
    question: "Welches sind im Grundgesetz geschützte Rechtsgüter?",
    answers: [
      { id: "a", text: "Vertragsrechte" },
      { id: "b", text: "Ehre" },
      { id: "c", text: "Freiheitsrechte" },
      { id: "d", text: "Streitrechte" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 6,
    question: "Nach der BewachV sind SMA schriftlich zu verpflichten, auch nach ihrem Ausscheiden aus dem Betrieb Verschwiegenheit über Geschäfts- und Betriebsgeheimnisse einzuhalten. Was sind solche Geschäftsgeheimnisse?",
    answers: [
      { id: "a", text: "Betriebspläne von Bewachungsobjekten" },
      { id: "b", text: "Arbeitszeiten und Anschrift des Bewachungsobjektes" },
      { id: "c", text: "Inhalte des Arbeitsvertrages (z.B. Lohnvereinbarung)" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 7,
    question: "Das Recht auf freie Entfaltung seiner Persönlichkeit (Art. 2 GG) ...",
    answers: [
      { id: "a", text: "ist ein Bürgerrecht" },
      { id: "b", text: "ist ein Grundrecht, welches in keiner Weise eingeschränkt werden darf" },
      { id: "c", text: "beinhaltet auch das informationelle Selbstbestimmungsrecht" },
      { id: "d", text: "stellt jedem Menschen frei, zu tun und zu lassen, was er möchte." },
      { id: "e", text: "ist ein Menschenrecht" },
      { id: "f", text: "erlaubt jedem Menschen in Deutschland seinen Wohnsitz und Aufenthaltsort frei zu bestimmen" }
    ],
    correct: ["c", "e"],
    points: 2
  },
  {
    id: 8,
    question: "Nach § 17 der Bewachungsverordnung muss der Sicherheitsdienstleister (Gewerbetreibende) eine Dienstanweisung verfassen. Was muss aus rechtlicher Sicht unbedingt in der Dienstanweisung enthalten sein?",
    answers: [
      { id: "a", text: "Hinweis, dass die Sicherheitsmitarbeiter während des Dienstes nur mit Zustimmung des Sicherheitsdienstleisters (Gewerbetreibende) eine Schusswaffe, Hieb-und Stoßwaffen sowie Reizstoffsprühgeräte führen dürfen" },
      { id: "b", text: "Dass die Wachperson nicht die Eigenschaft und die Befugnisse eines Polizeivollzugsbeamten, oder eines sonstigen Bediensteten einer Behörde besitzt" },
      { id: "c", text: "Hinweis, dass die Sicherheitsmitarbeiter regelmäßig an Dienstbesprechungen teilnehmen müssen" },
      { id: "d", text: "Hinweis, dass die Unfallverhütungsvorschriften eingehalten werden müssen" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 9,
    question: "Auf Grund welcher rechtlichen Grundlagen werden private Sicherheitsmitarbeiter tätig?",
    answers: [
      { id: "a", text: "Besitzdienerrechte" },
      { id: "b", text: "Auf Grundlage der Jedermannsrechte sowie Rechtfertigungsgründe" },
      { id: "c", text: "Sicherheitsmitarbeiter benötigen keine Rechtsgrundlage, sie haben Sonderrechte und können alles notwendige einleiten um Gerechtigkeit walten zu lassen." },
      { id: "d", text: "Auf rechtlicher Grundlage der DSGVO der Europäischen Union" },
      { id: "e", text: "Hoheitliche Rechte" },
      { id: "f", text: "Anweisungen des Auftraggebers" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 10,
    question: "Wozu ist ein Sicherheitsunternehmer nach der Bewachungsverordnung verpflichtet?",
    answers: [
      { id: "a", text: "Er hat eine Rechtsschutzversicherung abzuschließen" },
      { id: "b", text: "Er darf grundsätzlich keine zuverlässigen Personen beschäftigen" },
      { id: "c", text: "Er muss eine Haftpflichtversicherung abschließen" },
      { id: "d", text: "Er hat seinen Wachpersonen einen Dienstausweis auszustellen" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 11,
    question: "Bei Großveranstaltungen kann es notwendig sein, die Zufahrtskontrollen von Parkplätzen im öffentlichen Bereich durch privates Sicherheitspersonal zu regeln. Welche Voraussetzung kann eine solche Sonderregelung erlauben?",
    answers: [
      { id: "a", text: "Public-Private-Partnership-Vereinbarung" },
      { id: "b", text: "Nachweis eines vorliegenden Gewohnheitsrechts" },
      { id: "c", text: "Entscheidung des zuständigen Auftraggebers" },
      { id: "d", text: "Übertragene Besitzrechte durch die Polizei" },
      { id: "e", text: "Entscheidung durch den Bewachungsgewerbetreibenden" },
      { id: "f", text: "Genehmigung von Ordnungsamt und örtl. Polizeibehörde" }
    ],
    correct: ["a", "f"],
    points: 2
  },
  {
    id: 12,
    question: "Wer benötigt zur Durchführung von Bewachungsaufgaben keine IHK- Unterrichtung gemäß § 34a GewO?",
    answers: [
      { id: "a", text: "Polizeibeamte nach bestandener Laufbahnprüfung" },
      { id: "b", text: "Alle Zeit- und Berufssoldaten mit mindestens 4-jähriger Dienstzeit" },
      { id: "c", text: "Personen mit bestandener Sachkundeprüfung gem. § 34a GewO" },
      { id: "d", text: "Sicherheitsmitarbeiter mit mindestens 3-jähriger Berufserfahrung" }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 13,
    question: "Welche Aussagen treffen auf das Grundrecht der Unverletzlichkeit der Wohnung gemäß GG zu?",
    answers: [
      { id: "a", text: "Es ist ein individuelles Abwehrrecht des Bürgers gegen die Staatsgewalt." },
      { id: "b", text: "Es schreibt vor, dass Durchsuchungen nur durch den Richter angeordnet werden dürfen, jedoch bei 'Gefahr im Verzug' auch durch die Staatsanwaltschaft und durch die Polizei eine Wohnung betreten werden darf." },
      { id: "c", text: "Es steht nur dem Eigentümer einer Wohnung zu." },
      { id: "d", text: "Es garantiert den rechtlichen Anspruch auf eine Wohnung." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 14,
    question: "Zu welchem Zeitpunkt hat der Gewerbetreibende die Wachpersonen, die er beschäftigen möchte, bei der zuständigen Behörde anzumelden?",
    answers: [
      { id: "a", text: "Rechtzeitig vor Beginn der Beschäftigung" },
      { id: "b", text: "Spätestens vier Wochen vor Arbeitsbeginn" },
      { id: "c", text: "Spätestens bis zum Ende der Probezeit" },
      { id: "d", text: "Frühestens am ersten Arbeitstag" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 15,
    question: "Was kennzeichnet das öffentliche Recht?",
    answers: [
      { id: "a", text: "Das Prinzip der Über- und Unterordnung zwischen Staat und Bürger" },
      { id: "b", text: "Das Prinzip der Gleichordnung zwischen Staat und Bürger" },
      { id: "c", text: "Das Prinzip der Über- und Unterordnung zwischen Bürger und Bürger" },
      { id: "d", text: "Das Prinzip der Gleichordnung zwischen Bürger und Bürger" },
      { id: "e", text: "Das Prinzip der Über- und Unterordnung zwischen natürliche und juristische Personen" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 16,
    question: "Welche Angaben muss der Bewacherausweis gemäß BewachV enthalten?",
    answers: [
      { id: "a", text: "Wohnanschrift und Geburtsdatum der Wachperson." },
      { id: "b", text: "Namen und Anschrift des Gewerbetreibenden." },
      { id: "c", text: "Unterschrift des Gewerbetreibenden und des Sachbearbeiters der zuständigen Gewerbebehörde." },
      { id: "d", text: "Lichtbild, Namen und Vornamen der Wachperson." }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 17,
    question: "Was verstößt gegen die Rechtsordnung der Bundesrepublik Deutschland?",
    answers: [
      { id: "a", text: "Die Bestrafung einer Person mit einer mehrjährigen Freiheitsstrafe ohne gesetzliche Grundlage" },
      { id: "b", text: "Die Erzwingung eines Geständnisses durch Anwendung von Folter, z.B. durch Schläge" },
      { id: "c", text: "Die Sicherstellung von Gegenständen zu Beweiszwecken durch die Polizei" },
      { id: "d", text: "Die Verweigerung der Erteilung einer Erlaubnis für das Bewachungsgewerbe aufgrund Unzuverlässigkeit des Antragstellers" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 18,
    question: "Für welche Tätigkeit ist der Nachweis der Sachkundeprüfung gemäß § 34a GewO erforderlich?",
    answers: [
      { id: "a", text: "Geld- und Werttransport" },
      { id: "b", text: "Schutz vor Ladendieben" },
      { id: "c", text: "Zugangskontrollen an Fußballstadien" },
      { id: "d", text: "Ordnungsdienst bei Veranstaltungen" },
      { id: "e", text: "Objekt- und Personenschutz" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 19,
    question: "Im deutschen Rechtssystem sind Rechtfertigungsgründe festgelegt. Worin besteht deren Zweck?",
    answers: [
      { id: "a", text: "Sie können ordnungswidriges Handeln entschuldigen" },
      { id: "b", text: "Sie können strafbares Handeln rechtfertigen" },
      { id: "c", text: "Sie können unerlaubtes Handeln rechtfertigen" },
      { id: "d", text: "Sie können verbotenes Handeln entschuldigen" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 20,
    question: "Welche Behörde kann gemäß GewO dem Gewerbetreibenden die Beschäftigung einer Wachperson mit Bewachungsaufgaben untersagen, wenn die Wachperson nicht die für ihre Tätigkeit erforderliche Zuverlässigkeit besitzt?",
    answers: [
      { id: "a", text: "Die nach Landesrecht zuständige Gewerbebehörde" },
      { id: "b", text: "Die Staatsanwaltschaft" },
      { id: "c", text: "Die Verwaltungs-Berufsgenossenschaft" },
      { id: "d", text: "Die Bundesagentur für Arbeit" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 21,
    question: "Was wird unter dem Privatrecht verstanden?",
    answers: [
      { id: "a", text: "Das Privatrecht regelt die Rechtsbeziehungen zwischen gleichgestellten natürlichen und juristischen Personen" },
      { id: "b", text: "Das Privatrecht ist ein Teil des öffentlichen Rechts und regelt die Rechtsbeziehung zwischen Staat und Bürger" },
      { id: "c", text: "Das Privatrecht beschreibt die Rechtsfolgen für Straftaten und Ordnungswidrigkeiten, z.B. Geld- oder Freiheitsstrafen, Geldbußen" },
      { id: "d", text: "Das Privatrecht legt im Wesentlichen fest, welche Freiheiten, Rechte und Pflichten die Menschen im Verhältnis zueinander haben" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 22,
    question: "Was ist gem. § 19 BewachV hinsichtlich der Dienstkleidung zu beachten?",
    answers: [
      { id: "a", text: "Darf nicht mit Polizei- oder Militäruniformen zu verwechseln sein." },
      { id: "b", text: "Es muss eine Dienstmütze getragen werden." },
      { id: "c", text: "Ist stets im Dienst zu tragen." },
      { id: "d", text: "Ist nur im Objektschutz zu tragen." }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 23,
    question: "Im deutschen Rechtssystem sind Rechtfertigungsgründe verankert. Was ist deren Sinn und Zweck?",
    answers: [
      { id: "a", text: "Sie können unerlaubtes Handeln rechtfertigen" },
      { id: "b", text: "Sie können strafbares Handeln rechtfertigen" },
      { id: "c", text: "Sie können ordnungswidriges Handeln entschuldigen" },
      { id: "d", text: "Sie können verbotenes Handeln entschuldigen" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 24,
    question: "Wann darf gemäß der BewachV der Bewachungsgewerbetreibende Wachpersonen mit der Durchführung von Bewachungsaufgaben beschäftigen?",
    answers: [
      { id: "a", text: "Wenn sie ein Abschlusszeugnis aus einem anderen Berufszweig besitzen, z. B. aus einem Handwerkerberuf." },
      { id: "b", text: "Wenn sie volljährig sind oder z. B. erfolgreich eine Ausbildung zur Fachkraft für Schutz und Sicherheit abgeschlossen haben." },
      { id: "c", text: "Wenn sie die erforderliche Zuverlässigkeit besitzen und fachkundig sind." },
      { id: "d", text: "Wenn sie die deutsche Staatsangehörigkeit besitzen und das 18. Lebensjahr vollendet haben." }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 25,
    question: "Erklären Sie den Begriff 'Public Private Partnership' (PPP)",
    answers: [
      { id: "a", text: "Ein privater Sicherheitsmitarbeiter kann z.B. bei einer Veranstaltung dem Ordnungsamt helfen, wenn das so vereinbart wurde." },
      { id: "b", text: "Eine Zusammenarbeit von staatlichen und privaten Stellen." },
      { id: "c", text: "Der Staat und eine private Wachfirma gründen einen Verein, dessen Mitarbeiter Hilfsbeamte sind." },
      { id: "d", text: "Sicherheitsmitarbeitern einer privaten Wachfirma werden hoheitliche Rechte eines Polizisten übertragen." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 26,
    question: "Wo sind die Pflichten für SMA beschrieben?",
    answers: [
      { id: "a", text: "in der BewachV" },
      { id: "b", text: "im Grundgesetz" },
      { id: "c", text: "in der Strafprozessordnung (StPO)" },
      { id: "d", text: "in der DGUV 23" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 27,
    question: "Welche Aussagen zum Privatrecht sind richtig?",
    answers: [
      { id: "a", text: "Es umfasst auch die Gewerbeordnung, die die Voraussetzungen für den Betrieb von Sicherheitsunternehmen regelt" },
      { id: "b", text: "Es regelt die rechtlichen Beziehungen der Bürger untereinander" },
      { id: "c", text: "Es regelt z. B. die Besitz- und Eigentumsrechte an Sachen" },
      { id: "d", text: "Es regelt die rechtlichen Beziehungen der Bürger zum Staat und seinen Einrichtungen" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 28,
    question: "Müssen Sicherheitsmitarbeiter einer Wachfirma ihren Dienstausweis gemäß § 18 BewachV sichtbar tragen?",
    answers: [
      { id: "a", text: "Bei Tätigkeiten, die eine Sachkunde nach § 34a GewO erfordern, außer Ladendetektive, ist ein Schild mit ihrem Namen oder einer Kennnummer sowie der Bezeichnung des Gewerbebetriebs sichtbar zu tragen." },
      { id: "b", text: "Ja, alle" },
      { id: "c", text: "Nur Türsteher, Ladendetektive und Citystreifen" },
      { id: "d", text: "Nein, er muss aber mitgeführt werden" }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 29,
    question: "Welche Aussagen zum Recht auf freie Entfaltung der Persönlichkeit gemäß Grundgesetz sind richtig?",
    answers: [
      { id: "a", text: "Das Recht auf freie Entfaltung der Persönlichkeit ist ein Bürgerrecht. Einschränkungen durch Gesetze sind unzulässig" },
      { id: "b", text: "Dieses Grundrecht beinhaltet den Schutz der Privatsphäre sowie das informationelle Selbstbestimmungsrecht" },
      { id: "c", text: "Solange keine Rechte anderer Personen verletzt werden oder gegen die Verfassung verstoßen wird, kann jeder frei tun und lassen, was er will" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 30,
    question: "Das Unterrichtungsverfahren braucht gemäß BewachV nicht absolviert werden, wenn ...",
    answers: [
      { id: "a", text: "die Person Abschlüsse im Rahmen einer Laufbahnprüfung besitzt, z.B. für den mittleren Polizeivollzugsdienst." },
      { id: "b", text: "die Person den Nachweis erbringt, dass sie in allen Sachgebieten des Unterrichtungsverfahrens über ausreichende Kenntnisse verfügt." },
      { id: "c", text: "die Person bei der Bundeswehr mindestens 3 Jahre im Wachdienst tätig war." }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 31,
    question: "Erklären Sie den Begriff 'Gewaltmonopol'!",
    answers: [
      { id: "a", text: "Private können im Rahmen der Jedermannsrechte gegen das Gewaltmonopol des Staates ausnahmsweise verstoßen." },
      { id: "b", text: "Der Staat hat das Gewaltmonopol, kann seine Rechte aber voll auf Private übertragen" },
      { id: "c", text: "Gewaltmonopol bedeutet, nur der Chef der Wachfirma hat das Sagen." },
      { id: "d", text: "Gewaltmonopol bedeutet, dass ausschließlich nur die Polizei Gewalt anwenden darf." },
      { id: "e", text: "Der Staat hat die absolute Herrschaft über jegliche Gewaltanwendung, es gibt keine Ausnahmen." }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 32,
    question: "Welche Unterlagen sind gemäß BewachV Sicherheitsmitarbeitern gegen Empfangsbestätigung auszuhändigen?",
    answers: [
      { id: "a", text: "Die Unfallverhütungsvorschrift Wach- und Sicherungsdienste einschließlich der dazu ergangenen Durchführungsanweisungen" },
      { id: "b", text: "Die Betriebsvereinbarungen des zu bewachenden Betriebes" },
      { id: "c", text: "Die Allgemeinen Geschäftsbedingungen des Arbeitgebers" },
      { id: "d", text: "Der Abdruck der Dienstanweisung" }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 33,
    question: "Welche der folgenden Grundrechte sind für die Wachbranche relevant?",
    answers: [
      { id: "a", text: "Recht auf Menschenwürde" },
      { id: "b", text: "Unverletzlichkeit der Wohnung" },
      { id: "c", text: "Keines" },
      { id: "d", text: "Freizügigkeit" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 34,
    question: "Wer ist gemäß BewachV von der Unterrichtung befreit?",
    answers: [
      { id: "a", text: "Personen mit einem Abschluss für die Laufbahnprüfung für den mittleren Justizvollzugsdienst." },
      { id: "b", text: "Personen mit einem Abschluss für die Laufbahnprüfung für den mittleren Zolldienst mit Berechtigung zum Führen einer Waffe." },
      { id: "c", text: "Personen, die über eine mindestens zweijährige Berufserfahrung im Sicherheitsgewerbe verfügen." },
      { id: "d", text: "Personen, die einen erfolgreichen Abschluss eines rechtswissenschaftlichen Hochschulstudiums besitzen." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 35,
    question: "Was ist im Strafrecht, das dem öffentlichen Recht zugeordnet wird, geregelt?",
    answers: [
      { id: "a", text: "Das Stellen eines Strafantrags" },
      { id: "b", text: "Der Angriffsnotstand" },
      { id: "c", text: "Die Anwendung von Besitzschutzrechten" },
      { id: "d", text: "Die Schuldunfähigkeit des Kindes" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 36,
    question: "Wann besitzt eine Wachperson nicht die erforderliche Zuverlässigkeit gemäß § 34a GewO?",
    answers: [
      { id: "a", text: "Wenn sie Mitglied in einem Verein ist, der nach dem Vereinsgesetz als Organisation unanfechtbar verboten wurde" },
      { id: "b", text: "Wenn sie Mitglied einer demokratisch legitimierten politischen Partei ist" },
      { id: "c", text: "Wenn sie wegen eines Verbrechens, z. B. Raub, vor zehn Jahren rechtskräftig verurteilt worden ist" },
      { id: "d", text: "Wenn sie vor drei Jahren rechtskräftig wegen Beleidigung zu einer Geldstrafe von 60 Tagessätzen verurteilt worden ist" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 37,
    question: "Was für Rechte dürfen Wachpersonen, die Kontrollgänge im öffentlichen Verkehrsraum durchführen, eigenverantwortlich ausüben?",
    answers: [
      { id: "a", text: "Sie dürfen zur Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung wie Polizeibeamte handeln." },
      { id: "b", text: "Sie dürfen die Jedermannsrechte ausüben, z. B. Wegweisung, Festhalten, Notwehr" },
      { id: "c", text: "Sie dürfen Anzeigen erstatten und Ordnungswidrigkeiten feststellen" },
      { id: "d", text: "Sie dürfen Durchsuchungen durchführen" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 38,
    question: "Welche der folgenden Pflichten sind Sicherheitsmitarbeiter bei der Aufnahme ihrer Tätigkeit zu beachten?",
    answers: [
      { id: "a", text: "Schweigepflicht über Geschäfts- und Betriebsgeheimnisse" },
      { id: "b", text: "Pflicht zur ordnungsgemäßen Führung von Einsatzberichten" },
      { id: "c", text: "Pflicht zur Meldung von Unfällen und Störungen" },
      { id: "d", text: "Recht zur Mitnahme von Fundgegenständen" }
    ],
    correct: ["a", "b", "c"],
    points: 3
  },
  {
    id: 39,
    question: "Wachpersonen dürfen Gewalt anwenden im Rahmen von …",
    answers: [
      { id: "a", text: "Notwehr gemäß § 32 StGB" },
      { id: "b", text: "Notstand gemäß § 34 StGB" },
      { id: "c", text: "Hoheitlicher Aufgabenübertragung durch die Polizei" },
      { id: "d", text: "Jedermannsrechten zur Selbsthilfe" }
    ],
    correct: ["a", "b", "d"],
    points: 3
  },
  {
    id: 40,
    question: "Welche Aussagen zum Umgang mit Daten von Kunden, Gästen und Besuchern sind richtig?",
    answers: [
      { id: "a", text: "Personenbezogene Daten müssen vertraulich behandelt werden" },
      { id: "b", text: "Daten dürfen nur für den jeweiligen Zweck verarbeitet werden" },
      { id: "c", text: "Es gilt die DSGVO der EU" },
      { id: "d", text: "Alle Sicherheitsmitarbeiter dürfen personenbezogene Daten für private Zwecke nutzen" }
    ],
    correct: ["a", "b", "c"],
    points: 3
  }
],

  quiz13: [
  {
    id: 1,
    question: "Was für Rechte dürfen Wachpersonen, die Kontrollgänge im öffentlichen Verkehrsraum durchführen, eigenverantwortlich ausüben?",
    answers: [
      { id: "a", text: "Sie dürfen bei Verkehrsordnungswidrigkeiten Verwarnungsgelder erheben, z. B. beim Parken im Parkverbot" },
      { id: "b", text: "Sie dürfen aufgrund eines privatrechtlichen Auftragsverhältnisses tätig werden d.h., sie dürfen Notwehr- und Notstandsrechte und übertragene Selbsthilferechte wahrnehmen" },
      { id: "c", text: "Sie dürfen zur Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung wie Polizeibeamte tätig werden, z. B. Platzverweise erteilen" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 2,
    question: "Die Wachperson S ist aktives Mitglied in einem Verein, der nach dem Vereinsgesetz als Organisation unanfechtbar verboten wurde. Was bedeutet dies gemäß § 34a GewO und BewachV?",
    answers: [
      { id: "a", text: "S gilt trotz seiner Mitgliedschaft als zuverlässig, wenn keine einschlägigen Verurteilungen in der unbeschränkten Auskunft aus dem Bundeszentralregister eingetragen sind, wie z. B. gefährliche Körperverletzung." },
      { id: "b", text: "Der Bewachungsgewerbetreibende darf S nicht mit Bewachungsaufgaben beschäftigen, wenn dies das zuständige Landesamt für Verfassungsschutz fordert." },
      { id: "c", text: "Die zuständige Gewerbebehörde kann dem Bewachungsgewerbetreibenden die Beschäftigung von S mit Bewachungsaufgaben untersagen, wenn S die erforderliche Zuverlässigkeit nicht besitzt." }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 3,
    question: "Welche Aussage zum Recht auf informationelle Selbstbestimmung ist richtig? Das Recht auf informationelle Selbstbestimmung...",
    answers: [
      { id: "a", text: "...wurde 1973 nach einer Grundgesetz-Änderung vom Bundesgerichtshof festgelegt und verabschiedet." },
      { id: "b", text: "...ist im Artikel 5 GG, dem Recht auf freie Meinungsäußerung, sowie der Versammlungsfreiheit in Artikel 8 GG, verankert." },
      { id: "c", text: "...geht aus dem Recht auf Menschenwürde Artikel 1 GG und dem allgemeinen Persönlichkeitsrecht Artikel 2 GG hervor." },
      { id: "d", text: "...wurde 1983 vom Bundesverfassungsgericht aus dem sogenannten „Volkszählungsurteil\" abgeleitet." }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 4,
    question: "Es gibt in Deutschland eine \"horizontale\" Gewaltenteilung. Welche der nachfolgenden Aussagen ist in Bezug auf diese Gewalten korrekt?",
    answers: [
      { id: "a", text: "die Antworten 2, 4 und 6 sind richtig" },
      { id: "b", text: "die Antworten 1, 3 und 5 sind richtig" },
      { id: "c", text: "die Antworten 1, 2 und 5 sind richtig" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 5,
    question: "Gemäß Bewachungsverordnung müssen Sie einen Bewacherausweis mitführen. In diesem Bewacherausweis müssen verschiedene Informationen zwingend hinterlegt sein:",
    answers: [
      { id: "a", text: "Antwort 1; 2 und 3 sind richtig" },
      { id: "b", text: "Antwort 2 und 4 sind richtig" },
      { id: "c", text: "Antwort 1; 3 und 4 sind richtig" },
      { id: "d", text: "Antwort 1; 3 und 5 sind richtig" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 6,
    question: "Wann ist die Videoüberwachung öffentlich zugänglicher Räume gemäß BDSG zulässig?",
    answers: [
      { id: "a", text: "Jederzeit und in allen Räumen, um Diebstähle zu verhindern, z. B. in Umkleideräumen eines Bekleidungsgeschäftes" },
      { id: "b", text: "Wenn dies zur Wahrnehmung des Hausrechts erforderlich ist und schutzwürdige Interessen der Betroffenen nicht überwiegen" },
      { id: "c", text: "Mit schriftlicher Einwilligung der von der Videoüberwachung betroffenen Personen, z. B. den Kunden in einem Geschäft" },
      { id: "d", text: "Nur mit Genehmigung der zuständigen Datenschutzbeauftragten des Bundes und der Länder" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 7,
    question: "Welche Aussagen zu den Grundrechten im Grundgesetz sind richtig?",
    answers: [
      { id: "a", text: "Sie können jederzeit durch Sicherheitsbehörden zum Zwecke der Aufgabenerfüllung eingeschränkt werden." },
      { id: "b", text: "Sie binden Gesetzgebung, vollziehende Gewalt und Rechtsprechung als unmittelbar geltendes Recht." },
      { id: "c", text: "Sie schützen die Rechte des Bürgers vor unzulässigen Eingriffen des Staates." }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 8,
    question: "Sicherheitsmitarbeiter, die im Einlassbereich von gastgewerblichen Diskotheken als Türsteher Bewachungen durchführen, müssen gemäß der BewachV gut sichtbar ein Kennschild bzw. Namensschild tragen. Welche Angaben muss das Kennschild bzw. Namensschild enthalten?",
    answers: [
      { id: "a", text: "Name und Anschrift des Türstehers" },
      { id: "b", text: "Name und Anschrift des Bewachungsgewerbetreibenden" },
      { id: "c", text: "Name des Türstehers oder eine Kennnummer, die er vom Bewachungsgewerbetreibenden erhalten hat" },
      { id: "d", text: "Name des Bewachungsgewerbetreibenden bzw. seiner Firma" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 9,
    question: "Welche Aussagen zur DS-GVO sind richtig?",
    answers: [
      { id: "a", text: "Sie gilt für die ganz oder teilweise automatisierte Verarbeitung personenbezogener Daten" },
      { id: "b", text: "Sie gilt für die nichtautomatisierte Verarbeitung personenbezogener Daten, die in einem Dateisystem gespeichert sind oder gespeichert werden" },
      { id: "c", text: "Sie gilt für die familiäre Verarbeitung personenbezogener Daten, z. B. für das Führen eines Anschriftenverzeichnisses, die keinen Bezug zur beruflichen Tätigkeit haben" },
      { id: "d", text: "Sie gilt für die Verarbeitung personenbezogener Daten durch die zuständigen Behörden zum Zwecke der Abwehr von Gefahren für die öffentliche Sicherheit" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 10,
    question: "Welche Aussage zur inneren Sicherheit ist richtig?",
    answers: [
      { id: "a", text: "Für die Abwehr von Gefahren ist jeder Bürger stets selber verantwortlich und hat die erforderlichen Gegenmaßnahmen zu treffen" },
      { id: "b", text: "Die innere Sicherheit basiert auf dem Sicherheitsmonopol des Staates" },
      { id: "c", text: "Die Gewährleistung der inneren Sicherheit, insbesondere die Abwehr von Gefahren, ist in erster Linie eine staatliche Angelegenheit" },
      { id: "d", text: "Der einzelne Bürger braucht für die Durchsetzung seiner Rechte die staatliche Hilfe nicht in Anspruch zu nehmen" },
      { id: "e", text: "Die Gewährleistung der inneren Sicherheit und Ordnung ist eine der wichtigsten Aufgaben von privaten Sicherheitsdiensten" }
    ],
    correct: ["c"],
    points: 1
  }
],
  quiz14: = [
  {
    id: 1,
    question: "Welche Aussagen treffen auf die Allgemeine Selbsthilfe gemäß § 229 BGB zu?",
    answers: [
      { id: "a", text: "Sie ist auch dann zulässig, wenn der Berechtigte seine Ansprüche in einem gerichtlichen Verfahren geltend machen könnte" },
      { id: "b", text: "Die Selbsthilfe darf nur vom Berechtigten durchgeführt werden. Er darf keine fremde Hilfe in Anspruch nehmen." },
      { id: "c", text: "Wer die Selbsthilfe irrtümlich vornimmt, ist zum Schadensersatz verpflichtet" },
      { id: "d", text: "Es muss ein einklagbarer, nicht verjährter Anspruch vorliegen." }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 2,
    question: "Ein Trickdieb entwendet eine Lederjacke aus einem Warenhaus. Wie ist sein Verhalten nach BGB zu beurteilen?",
    answers: [
      { id: "a", text: "Verbotene Eigenmacht in Form der Besitzstörung" },
      { id: "b", text: "Unerlaubte, schadensersatzpflichtige Handlung" },
      { id: "c", text: "Verbotene Eigenmacht durch Wegnahme gegen den Willen des Besitzers" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 3,
    question: "Ein Bauarbeiter erschlägt einen angreifenden Hund, um eine Person zu retten. Welche Aussagen sind richtig?",
    answers: [
      { id: "a", text: "Der Bauarbeiter hat rechtmäßig gehandelt und ist nicht schadensersatzpflichtig" },
      { id: "b", text: "Der Bauarbeiter durfte den Hund töten, da eine schwere Verletzung drohte" },
      { id: "c", text: "Der Verteidigungsnotstand erlaubt keine Tötung von Tieren" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 4,
    question: "Welche Aussage zum Angriffsnotstand gemäß § 904 BGB ist richtig?",
    answers: [
      { id: "a", text: "Der Begünstigte muss den Schaden ersetzen" },
      { id: "b", text: "Nur eigene Rechtsgüter sind notstandsfähig" },
      { id: "c", text: "Die Gefahr muss erfolgreich abgewehrt werden" },
      { id: "d", text: "Es wird auf eine fremde Sache eingewirkt, von der die Gefahr nicht ausgeht" }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 5,
    question: "Eine Person betritt widerrechtlich einen umzäunten Garten. Wie ist dies zu beurteilen?",
    answers: [
      { id: "a", text: "Verbotene Eigenmacht in Form der Besitzstörung" },
      { id: "b", text: "Verbotene Eigenmacht in Form des Besitzentzugs" },
      { id: "c", text: "Gegenwärtige Gefahr im Sinne des Verteidigungsnotstands" },
      { id: "d", text: "Gegenwärtiger, rechtswidriger Angriff im Sinne der Notwehr" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 6,
    question: "Kann ein Besitzdiener Graffiti durch Notwehr oder Selbsthilfe verhindern?",
    answers: [
      { id: "a", text: "Ja, durch Notwehr gegen den unmittelbar bevorstehenden Angriff" },
      { id: "b", text: "Ja, aber nur nach Beginn der Sachbeschädigung" },
      { id: "c", text: "Ja, durch Angriffsnotstand" },
      { id: "d", text: "Ja, durch das Selbsthilferecht des Besitzdieners" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 7,
    question: "Welche Aussagen zum Angriffsnotstand gemäß § 904 BGB sind richtig?",
    answers: [
      { id: "a", text: "Der Handelnde ersetzt in der Regel den Schaden selbst" },
      { id: "b", text: "Die Gefahr muss erfolgreich abgewehrt werden" },
      { id: "c", text: "Es wird zunächst auf eine fremde Sache eingewirkt" },
      { id: "d", text: "Nur eigene Rechtsgüter sind geschützt" }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 8,
    question: "Welche Aussagen zum Privatrecht sind richtig?",
    answers: [
      { id: "a", text: "Prinzip der Über- und Unterordnung" },
      { id: "b", text: "Regelt Beziehungen zwischen Bürgern" },
      { id: "c", text: "Prinzip der Gleichordnung" },
      { id: "d", text: "Regelt Beziehungen zwischen Staat und Bürger" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 9,
    question: "Welche Rechte hat der Hausrechtsinhaber?",
    answers: [
      { id: "a", text: "Entscheiden, wer bleiben oder gehen muss" },
      { id: "b", text: "Entscheiden, wer eintreten darf" },
      { id: "c", text: "Personen immer mit Gewalt entfernen" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 10,
    question: "Ist ein Sicherheitsmitarbeiter nach rechtmäßiger Notwehr schadensersatzpflichtig?",
    answers: [
      { id: "a", text: "Nein, wegen Verteidigungsnotstand" },
      { id: "b", text: "Nein, wegen Notwehr" },
      { id: "c", text: "Nein, Sicherheitsmitarbeiter sind befreit" },
      { id: "d", text: "Ja, wegen Sach- und Körperverletzung" },
      { id: "e", text: "Ja, er hätte auf Polizei warten müssen" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 11,
    question: "Besitzt der Besitzdiener ein eigenes Selbsthilferecht?",
    answers: [
      { id: "a", text: "Ja, er ist unmittelbarer Besitzer" },
      { id: "b", text: "Ja, ohne Einschränkung" },
      { id: "c", text: "Nein, er ist weisungsgebunden" },
      { id: "d", text: "Nein, er darf nur Rechte des Besitzers ausüben" },
      { id: "e", text: "Ja, wie ein Besitzer" },
      { id: "f", text: "Nein, weil er Eigentum übernimmt" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 12,
    question: "Wann verletzt ein Sicherheitsmitarbeiter das Schikaneverbot gemäß § 226 BGB?",
    answers: [
      { id: "a", text: "Meldung eines Regelverstoßes" },
      { id: "b", text: "Wiederholte unbeauftragte Taschenkontrollen" },
      { id: "c", text: "Zutrittsverweigerung bei Alterskontrolle" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 13,
    question: "Welche Aussagen zum Schikaneverbot sind richtig?",
    answers: [
      { id: "a", text: "Schikanöse Rechtsausübung ist rechtswidrig" },
      { id: "b", text: "Ein Recht darf nicht ausschließlich zur Schädigung ausgeübt werden" },
      { id: "c", text: "Nur bei Straftaten anwendbar" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 14,
    question: "Was ist verbotene Eigenmacht gemäß BGB?",
    answers: [
      { id: "a", text: "Grundloses Schlagen einer Person" },
      { id: "b", text: "Festhalten eines Schuldners" },
      { id: "c", text: "Unberechtigtes Betreten eines Veranstaltungsraums" },
      { id: "d", text: "Geschwindigkeitsüberschreitung" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 15,
    question: "Welche Aussage zum Wegnehmen eines Verbandskastens ist richtig?",
    answers: [
      { id: "a", text: "Nicht erlaubt" },
      { id: "b", text: "Der Fahrer darf sich mit Notwehr wehren" },
      { id: "c", text: "Erlaubt aufgrund Aggressivnotstands" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 16,
    question: "In welche Hauptgebiete ist das deutsche Recht aufgeteilt?",
    answers: [
      { id: "a", text: "Privat- bzw. Zivilrecht" },
      { id: "b", text: "Öffentliches Recht" },
      { id: "c", text: "Grundrechte" },
      { id: "d", text: "Gewerberecht" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 17,
    question: "Welche Aussagen zu Rechtfertigungsgründen im BGB sind richtig?",
    answers: [
      { id: "a", text: "Nur für eigene Rechtsgüter" },
      { id: "b", text: "Gewaltanwendung grundsätzlich nur für den Staat" },
      { id: "c", text: "Nur unter gesetzlichen Voraussetzungen erlaubt" },
      { id: "d", text: "Nie Schadensersatzpflicht" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 18,
    question: "Welche Aussagen zur Notwehr sind richtig?",
    answers: [
      { id: "a", text: "Keine Schadensersatzpflicht bei rechtmäßiger Notwehr" },
      { id: "b", text: "Notwehr dient nur Bestrafung" },
      { id: "c", text: "Notwehr nach StGB schließt Strafverfolgung aus" }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 19,
    question: "Welche Rechtfertigungsgründe sind im BGB geregelt?",
    answers: [
      { id: "a", text: "Notwehr" },
      { id: "b", text: "Defensivnotstand" },
      { id: "c", text: "Vorläufige Festnahme" },
      { id: "d", text: "Rechtfertigender Notstand" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 20,
    question: "Ein Kind beschädigt ein Fahrzeug. Welche Aussagen sind richtig?",
    answers: [
      { id: "a", text: "Kind haftet nicht, Eltern evtl. bei Aufsichtspflichtverletzung" },
      { id: "b", text: "Unternehmen trägt Schaden ohne Pflichtverletzung der Eltern" },
      { id: "c", text: "Eltern haften immer voll" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 21,
    question: "Welche Aussage zur Verteidigungshandlung bei Notwehr ist richtig?",
    answers: [
      { id: "a", text: "Verzicht auf Verteidigung bei Ausweichmöglichkeit" },
      { id: "b", text: "Nur gegen Angreifer und dessen Rechtsgüter" },
      { id: "c", text: "Erst nach Versuch fremder Hilfe" },
      { id: "d", text: "Angriff darf sofort beendet werden" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 22,
    question: "Welche Voraussetzungen gelten für allgemeine Selbsthilfe?",
    answers: [
      { id: "a", text: "Verfolgung auf frischer Tat" },
      { id: "b", text: "Gegenwärtige Gefahr durch Sache oder Tier" },
      { id: "c", text: "Gegenwärtiger rechtswidriger Angriff" },
      { id: "d", text: "Widerrechtliche Besitzstörung" },
      { id: "e", text: "Obrigkeitliche Hilfe nicht rechtzeitig möglich" },
      { id: "f", text: "Ohne sofortiges Einschreiten droht Anspruchsvereitelung" }
    ],
    correct: ["e", "f"],
    points: 2
  },
  {
    id: 23,
    question: "In welchen Fällen darf der Besitzdiener Rechte des Besitzers ausüben?",
    answers: [
      { id: "a", text: "Abwehr einer Besitzstörung mit Gewalt" },
      { id: "b", text: "Rücknahme einer Sache vom Täter" },
      { id: "c", text: "Abwehr einer gegenwärtigen Gefahr" },
      { id: "d", text: "Festnahme zur Anspruchsdurchsetzung" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 24,
    question: "Welche Grundsätze gelten für Schadensersatz gemäß BGB?",
    answers: [
      { id: "a", text: "Vorsatz oder Fahrlässigkeit sind unerheblich" },
      { id: "b", text: "Wiederherstellung des ursprünglichen Zustands" },
      { id: "c", text: "Vorsatz führt immer zu höherem Ersatz" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 25,
    question: "Auf welche Rechtsgrundlagen kann sich ein Sicherheitsmitarbeiter stützen, der einen Hund abwehrt?",
    answers: [
      { id: "a", text: "Angriffsnotstand (§ 904 BGB)" },
      { id: "b", text: "Verteidigungsnotstand (§ 228 BGB)" },
      { id: "c", text: "Notwehr (§ 227 BGB)" },
      { id: "d", text: "Allgemeine Selbsthilfe (§ 229 BGB)" }
    ],
    correct: ["a", "b"],
    points: 2
  }
    ],
    quiz15: = [
  {
    id: 1,
    question: "Wer handelt unerlaubt gemäß § 823 BGB?",
    answers: [
      { id: "a", text: "Wer im Rahmen der allgemeinen Selbsthilfe den Verpflichteten festnimmt" },
      { id: "b", text: "Wer durch eine Notwehrhandlung die Gesundheit eines anderen beschädigt" },
      { id: "c", text: "Wer schuldhaft Rechte oder Rechtsgüter anderer widerrechtlich verletzt" },
      { id: "d", text: "Wer durch eine Notstandshandlung Sachen anderer beschädigt" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 2,
    question: "Was regelt das BGB?",
    answers: [
      { id: "a", text: "Die Rechtsbeziehungen zwischen dem Bürger und dem Staat." },
      { id: "b", text: "z. B. das Sachenrecht und das Schadensersatzrecht." },
      { id: "c", text: "Die Rechtsbeziehungen der Bürger untereinander." },
      { id: "d", text: "Die Rechtsbeziehungen zwischen Bürgern und Behörden, z. B. zum Gewerbeamt." }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 3,
    question: "Wann darf man im Rahmen der Selbsthilfe (§ 229 BGB) einen anderen festhalten?",
    answers: [
      { id: "a", text: "nur wenn mich der andere angegriffen hat" },
      { id: "b", text: "wenn der andere bekannt ist" },
      { id: "c", text: "wenn Polizei nicht rechtzeitig vor Ort ist" },
      { id: "d", text: "wenn ein einklagbarer Anspruch vorliegt" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 4,
    question: "Was bedeutet die Erforderlichkeit der Notwehr?",
    answers: [
      { id: "a", text: "Das Verteidigungsmittel muss geeignet sein, den Angriff sofort zu beenden oder abzuschwächen" },
      { id: "b", text: "Es muss eine Rechtsgutabwägung vorgenommen werden" },
      { id: "c", text: "Das mildeste geeignete Mittel ist zu wählen, wenn mehrere geeignet sind" },
      { id: "d", text: "Notwehr ist gegenüber Kindern und Geisteskranken unzulässig" },
      { id: "e", text: "Eine Verteidigung ist unzulässig, wenn der Angreifer einen Grund hat" },
      { id: "f", text: "Die Verteidigung darf nach Beendigung des Angriffs fortgesetzt werden" }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 5,
    question: "Die verbotene Eigenmacht …",
    answers: [
      { id: "a", text: "… muss ohne den Willen des Besitzdieners erfolgen" },
      { id: "b", text: "… ist nur als Besitzentziehung geregelt" },
      { id: "c", text: "… erfolgt ohne oder gegen den Willen des Besitzers und ohne gesetzliche Gestattung" },
      { id: "d", text: "… ist die widerrechtliche Entziehung oder Störung des Besitzes" }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 6,
    question: "Was bedeutet die Erforderlichkeit der Verteidigungshandlung bei Notwehr?",
    answers: [
      { id: "a", text: "Die Erforderlichkeit reicht über den Angriff hinaus" },
      { id: "b", text: "Eine Schusswaffe darf immer eingesetzt werden" },
      { id: "c", text: "Die Verteidigung muss objektiv geeignet sein" },
      { id: "d", text: "Art und Schwere des Angriffs spielen keine Rolle" },
      { id: "e", text: "Jedes Mittel ist gegen Tiere erlaubt" },
      { id: "f", text: "Das mildeste geeignete Mittel ist zu wählen" }
    ],
    correct: ["c", "f"],
    points: 2
  },
  {
    id: 7,
    question: "Ist ein Sicherheitsmitarbeiter bei rechtmäßiger Notwehr schadensersatzpflichtig?",
    answers: [
      { id: "a", text: "Ja, weil Eigentum und Körper verletzt wurden" },
      { id: "b", text: "Ja, weil er auf die Polizei warten muss" },
      { id: "c", text: "Nein, Sicherheitsmitarbeiter sind befreit" },
      { id: "d", text: "Nein, wegen Verteidigungsnotstand" },
      { id: "e", text: "Nein, wegen Notwehr" }
    ],
    correct: ["e"],
    points: 1
  },
  {
    id: 8,
    question: "Was ist verbotene Eigenmacht in Form der Besitzentziehung?",
    answers: [
      { id: "a", text: "Entwendung eines Angriffsmittels zur Abwehr" },
      { id: "b", text: "Wegnahme einer beweglichen Sache ohne Einwilligung und Rechtfertigung" },
      { id: "c", text: "Parken auf einem fremdgemieteten Parkplatz" },
      { id: "d", text: "Parken zur Erste-Hilfe-Leistung" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 9,
    question: "Welche Grundsätze gelten für Art und Umfang des Schadensersatzes?",
    answers: [
      { id: "a", text: "Der ursprüngliche Zustand ist wiederherzustellen oder Geldersatz zu leisten" },
      { id: "b", text: "Vorsatz oder Fahrlässigkeit sind für Art und Umfang unerheblich" },
      { id: "c", text: "Bei Vorsatz ist der Schadensersatz immer höher" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 10,
    question: "Auf welche Rechtsgrundlagen kann S sein Handeln stützen?",
    answers: [
      { id: "a", text: "Allgemeine Selbsthilfe (§ 229 BGB)" },
      { id: "b", text: "Angriffsnotstand (§ 904 BGB)" },
      { id: "c", text: "Notwehr (§ 227 BGB)" },
      { id: "d", text: "Verteidigungsnotstand (§ 228 BGB)" }
    ],
    correct: ["b", "d"],
    points: 2
  },
      {
  id: 11,
  question: "Wann liegt verbotene Eigenmacht gemäß BGB vor?",
  answers: [
    { id: "a", text: "Wenn einer Person ohne ihre Zustimmung widerrechtlich Besitz entzogen wird" },
    { id: "b", text: "Wenn eine Person ohne ihre Zustimmung widerrechtlich festgehalten wird" },
    { id: "c", text: "Wenn aufgrund der StPO eine Tatwaffe beschlagnahmt wird" },
    { id: "d", text: "Wenn eine Person ohne ihre Zustimmung in ihrem Besitz widerrechtlich gestört wird" }
  ],
  correct: ["a", "d"],
  points: 2
},
{
  id: 12,
  question: "Welche Aussagen zur Besitzdienerschaft gemäß § 855 BGB sind richtig?",
  answers: [
    { id: "a", text: "B hat als Besitzdiener an den Fernsehern keinen Besitz. Besitzer ist der Marktleiter" },
    { id: "b", text: "Der Marktleiter verliert den Besitz durch die Beauftragung" },
    { id: "c", text: "B ist Besitzdiener, da er den Weisungen des Marktleiters unterworfen ist" }
  ],
  correct: ["a", "c"],
  points: 2
},
{
  id: 13,
  question: "Welche Aussage zum Hausrecht ist richtig?",
  answers: [
    { id: "a", text: "Hausrecht ist hoheitliches Recht" },
    { id: "b", text: "Hausrecht ist kein gesetzlicher Rechtfertigungsgrund" },
    { id: "c", text: "Hausrecht ist ein gesetzlicher Rechtfertigungsgrund" },
    { id: "d", text: "Hausrecht ist ein notwehrfähiges Rechtsgut" }
  ],
  correct: ["b", "d"],
  points: 2
},
{
  id: 14,
  question: "Ein Fan schleicht sich ohne Eintrittskarte auf ein abgesperrtes Konzertgelände. Welche Aussagen sind richtig?",
  answers: [
    { id: "a", text: "Es liegt ein Angriff gegen ein Rechtsgut im Sinne der Notwehr vor" },
    { id: "b", text: "Es liegt eine Gefahrensituation im Sinne des Verteidigungsnotstandes vor" },
    { id: "c", text: "Es liegt verbotene Eigenmacht in Form der Besitzstörung vor" }
  ],
  correct: ["a", "c"],
  points: 2
},
{
  id: 15,
  question: "Wann handelt der Besitzer gemäß BGB rechtmäßig?",
  answers: [
    { id: "a", text: "Wenn er dem Täter Tage später den Gegenstand wegnimmt" },
    { id: "b", text: "Wenn er dem Täter auf frischer Tat die Sache wegnimmt, notfalls mit Gewalt" },
    { id: "c", text: "Wenn er eine unbefugte Person aus seinem Hausrechtsbereich entfernt" }
  ],
  correct: ["b", "c"],
  points: 2
},
{
  id: 16,
  question: "Welche Aussagen zum Eigentümer und Besitzer sind richtig?",
  answers: [
    { id: "a", text: "Eigentümer und Besitzer sind immer verschiedene Personen" },
    { id: "b", text: "Eigentümer und Besitzer können verschiedene Personen sein" },
    { id: "c", text: "Eigentümer und Besitzer können dieselbe Person sein" },
    { id: "d", text: "Eigentümer und Besitzer sind immer dieselbe Person" }
  ],
  correct: ["b", "c"],
  points: 2
},
{
  id: 17,
  question: "Wann liegt verbotene Eigenmacht gemäß § 858 BGB vor?",
  answers: [
    { id: "a", text: "Beim Löschen eines Feuers mit fremdem Feuerlöscher" },
    { id: "b", text: "Beim unbefugten Betreten eines Firmengeländes" },
    { id: "c", text: "Bei unbefugter Wegnahme von Firmeneigentum" },
    { id: "d", text: "Bei einem Angriff auf Leib und Leben" }
  ],
  correct: ["b", "c"],
  points: 2
},
{
  id: 18,
  question: "Welche Aussagen zur Notwehr gemäß BGB sind richtig?",
  answers: [
    { id: "a", text: "Notwehr erfordert eine Rechtsgutabwägung" },
    { id: "b", text: "Der Angriff eines herrenlosen Tieres ist Notwehr" },
    { id: "c", text: "Der Angriff muss gegenwärtig und widerrechtlich sein" },
    { id: "d", text: "Notwehr ist ein Rechtfertigungsgrund" }
  ],
  correct: ["c", "d"],
  points: 2
},
{
  id: 19,
  question: "Was ist der Zweck der allgemeinen Selbsthilfe gemäß § 229 BGB?",
  answers: [
    { id: "a", text: "Unterstützung der Polizei" },
    { id: "b", text: "Durchsetzung oder Sicherung eines Anspruchs mit privater Gewalt" },
    { id: "c", text: "Besitzwehr bei verbotener Eigenmacht" },
    { id: "d", text: "Strafverfolgung" }
  ],
  correct: ["b"],
  points: 1
},
{
  id: 20,
  question: "Welche Voraussetzungen gelten für die allgemeine Selbsthilfe gemäß BGB?",
  answers: [
    { id: "a", text: "Widerrechtliche Besitzstörung oder Besitzentzug" },
    { id: "b", text: "Gegenwärtige Gefahr durch Sache oder Tier" },
    { id: "c", text: "Gegenwärtiger rechtswidriger Angriff" },
    { id: "d", text: "Obrigkeitliche Hilfe kann nicht rechtzeitig erlangt werden" },
    { id: "e", text: "Täter wird auf frischer Tat verfolgt" },
    { id: "f", text: "Ohne sofortiges Einschreiten droht Anspruchsvereitelung" }
  ],
  correct: ["d", "f"],
  points: 2
},
{
  id: 21,
  question: "Darf bei verbotener Eigenmacht Besitzkehr ausgeübt werden?",
  answers: [
    { id: "a", text: "Ja, auch Tage später bei Wiedererkennung" },
    { id: "b", text: "Ja, wenn der Täter auf frischer Tat betroffen wird" },
    { id: "c", text: "Ja, bei schuldhaftem Handeln des Täters" },
    { id: "d", text: "Ja, wenn der Täter auf frischer Tat verfolgt wird" }
  ],
  correct: ["b", "d"],
  points: 2
},
{
  id: 22,
  question: "Ist ein Sicherheitsmitarbeiter nach rechtmäßiger Notwehr schadensersatzpflichtig?",
  answers: [
    { id: "a", text: "Ja, wegen vorsätzlicher Verletzung" },
    { id: "b", text: "Nein, wegen Notwehr" },
    { id: "c", text: "Nein, wegen Verteidigungsnotstand" }
  ],
  correct: ["b"],
  points: 1
},
{
  id: 23,
  question: "In welchem Fall wird gegen das Schikaneverbot (§ 226 BGB) verstoßen?",
  answers: [
    { id: "a", text: "Zutrittsverweigerung wegen Alters" },
    { id: "b", text: "Meldung eines Sicherheitsverstoßes" },
    { id: "c", text: "Gezielte Rufschädigung eines Kollegen" }
  ],
  correct: ["c"],
  points: 1
},
{
  id: 24,
  question: "Wie ist das Verhalten eines Trickdiebs nach dem BGB zu beurteilen?",
  answers: [
    { id: "a", text: "Verbotene Eigenmacht durch Wegnahme" },
    { id: "b", text: "Unerlaubte schadensersatzpflichtige Handlung" },
    { id: "c", text: "Besitzstörung durch Betreten des Geschäfts" }
  ],
  correct: ["a", "b"],
  points: 2
},
{
  id: 25,
  question: "Welche Aussagen zum Hausrecht sind richtig?",
  answers: [
    { id: "a", text: "Hausrecht kann auf Sicherheitsmitarbeiter übertragen werden" },
    { id: "b", text: "Vermieter und Mieter besitzen gleichzeitig Hausrecht" },
    { id: "c", text: "Hausrecht kann durch Gesetze eingeschränkt werden" },
    { id: "d", text: "Nur der Eigentümer besitzt Hausrecht" }
  ],
  correct: ["a", "c"],
  points: 2
}
 ],
   quiz16: = [
  {
    id: 1,
    question: "Welche Rechte dürfen Sicherheitsmitarbeiter (SMA), die Kontrollgänge im öffentlichen Verkehrsraum durchführen, in eigener Verantwortung ausüben?",
    answers: [
      { id: "a", text: "Sie dürfen zur Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung wie Polizeibeamte tätig werden und z.B. Platzverweise erteilen." },
      { id: "b", text: "Sie dürfen bei Ordnungswidrigkeiten eingreifen und z.B. Bußgeldbescheinigungen ausstellen und Bußgelder entgegennehmen." },
      { id: "c", text: "Sie dürfen aufgrund eines privatrechtlichen Auftragsverhältnisses tätig werden und z.B. Notwehr- und Notstandsrechte sowie übertragene Selbsthilferechte wahrnehmen." }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 2,
    question: "Die BewachV schreibt vor, dass Türsteher sichtbar ein Schild mit ihrem Namen oder einer Kennnummer sowie mit dem Namen des Gewerbetreibenden tragen müssen. Türsteher X missachtet diese Vorschrift. Kann Türsteher X für sein Fehlverhalten aus rechtlicher Sicht belangt werden?",
    answers: [
      { id: "a", text: "Nein. Das Verhalten von X erfüllt weder den Tatbestand einer Straftat noch den einer Ordnungswidrigkeit" },
      { id: "b", text: "Ja. X begeht eine Straftat, die aber nur auf Antrag verfolgt wird" },
      { id: "c", text: "Ja. X begeht eine Ordnungswidrigkeit, die mit einem Bußgeld bedroht ist" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 3,
    question: "Was sind gemäß DS-GVO \"besondere Kategorien personenbezogener Daten\"?",
    answers: [
      { id: "a", text: "Kennzeichen am Pkw, Kfz-Versicherung" },
      { id: "b", text: "Politische Meinungen, weltanschauliche Überzeugungen" },
      { id: "c", text: "Geburtsort, Name, Vorname" },
      { id: "d", text: "Gewerkschaftszugehörigkeit, Gesundheitsdaten" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 4,
    question: "Welche Rechte haben Wachpersonen bei der Durchführung von Bewachungsaufgaben?",
    answers: [
      { id: "a", text: "Sie dürfen als Beliehene vom Staat übertragene Befugnisse eigenverantwortlich ausüben." },
      { id: "b", text: "Sie dürfen gegenüber Dritten z. B. nur die Rechte eigenverantwortlich ausüben, die jedermann zustehen, etwa die Notwehr oder den Notstand." },
      { id: "c", text: "Sie dürfen eigenverantwortlich Polizeirechte ausüben, wenn sie die Grundsätze der Verhältnismäßigkeit und Zweckmäßigkeit beachten." }
    ],
    correct: ["a","b"],
    points: 2
  },
  {
    id: 5,
    question: "Wer erteilt die Bewachungserlaubnis gemäß § 34a Gewerbeordnung?",
    answers: [
      { id: "a", text: "Der jeweilige Auftraggeber" },
      { id: "b", text: "Die nach Landesrecht zuständige Behörde" },
      { id: "c", text: "Die örtliche Polizeibehörde" },
      { id: "d", text: "Die Berufsgenossenschaft" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 6,
    question: "Was sind nicht automatisierte Dateien gemäß BDSG?",
    answers: [
      { id: "a", text: "Sammlungen von personenbezogenen Daten in digitalen Akten, die gleichartig aufgebaut sind und nach bestimmten Merkmalen ausgewertet werden können, z. B. nach dem Alter" },
      { id: "b", text: "Sammlungen von personenbezogenen Daten auf Datenträgern wie z. B CDs, USB-Sticks oder Festplatten" },
      { id: "c", text: "Arbeitnehmerdaten in Personalakten, die Informationen über das Beschäftigungsverhältnis enthalten, z. B. über das Gehalt" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 7,
    question: "Welche der nachfolgenden Aussagen verstößt gegen die Rechtsordnung der Bundesrepublik Deutschland?",
    answers: [
      { id: "a", text: "Das Anspucken einer Wachperson, welche den Einlass eines Kaufhauses sichert." },
      { id: "b", text: "Die Bestrafung einer Person mit einer Geldstrafe ohne gesetzliche Grundlage" },
      { id: "c", text: "Die Untersagung einer Bewachungserlaubnis auf Grund von drei Vorstrafen, wegen verschiedener Verbrechen in den letzten drei Jahren" },
      { id: "d", text: "Die Durchsuchung einer Wohnung durch die Polizei, auf Grund eines Durchsuchungsbeschlusses." }
    ],
    correct: ["a","b"],
    points: 2
  },
  {
    id: 8,
    question: "Nach der BewachV sind SMA schriftlich zu verpflichten, auch nach ihrem Ausscheiden aus dem Betrieb Verschwiegenheit über Geschäfts- und Betriebsgeheimnisse einzuhalten. Was sind solche Geschäftsgeheimnisse?",
    answers: [
      { id: "a", text: "Betriebspläne von Bewachungsobjekten" },
      { id: "b", text: "Arbeitszeiten und Anschrift des Bewachungsobjektes" },
      { id: "c", text: "Inhalte des Arbeitsvertrages (z.B. Lohnvereinbarung)" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 9,
    question: "Was sind personenbezogene Daten im Sinne des Bundesdatenschutzgesetz (BDSG)?",
    answers: [
      { id: "a", text: "Bewertung politischer Parteien im Rahmen einer anonymen Meinungsumfrage." },
      { id: "b", text: "Name, Vorname, Alter, Personalausweisnummer." },
      { id: "c", text: "Ausgefüllter Wahlzettel in der Wahlurne." }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 10,
    question: "Welche der folgenden Rechte ist ein Grundrecht?",
    answers: [
      { id: "a", text: "Unverletzlichkeit der Wohnung" },
      { id: "b", text: "Recht auf Strafverfolgung" },
      { id: "c", text: "Gleichheit vor dem Gesetz" },
      { id: "d", text: "Bürgerliches Recht" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 11,
    question: "Welche Unterlagen benötigt die Erlaubnisbehörde unter anderem, um den Antrag auf Erteilung einer Bewachungserlaubnis gemäß § 34a GewO zu prüfen?",
    answers: [
      { id: "a", text: "Den Nachweis der erforderlichen Sachkundeprüfung für das Bewachungsgewerbe" },
      { id: "b", text: "Eine unbeschränkte Auskunft aus dem Bundeszentralregister zur Überprüfung der Zuverlässigkeit des Antragstellers" },
      { id: "c", text: "Die Bescheinigung über die Teilnahme am Unterrichtungsverfahren" },
      { id: "d", text: "Ein persönliches Führungszeugnis zur Überprüfung der Zuverlässigkeit des Antragstellers" }
    ],
    correct: ["a","b"],
    points: 2
  },
  {
    id: 12,
    question: "Welche Gesetze stellen allgemeine datenschutzrechtliche Regeln im Umgang mit personenbezogenen Daten auf?",
    answers: [
      { id: "a", text: "Landesdatenschutzgesetze" },
      { id: "b", text: "Das Bürgerliche Gesetzbuch" },
      { id: "c", text: "Bundesdatenschutzgesetz" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 13,
    question: "Welches sind im Grundgesetz geschützte Rechtsgüter?",
    answers: [
      { id: "a", text: "Ehre" },
      { id: "b", text: "Vertragsrechte" },
      { id: "c", text: "Streitrechte" },
      { id: "d", text: "Freiheitsrechte" }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 14,
    question: "Wer ist für die sichere Aufbewahrung der Schusswaffen und Munition im Gewerbebetrieb gemäß BewachV verantwortlich?",
    answers: [
      { id: "a", text: "Die Mitarbeiter in der Notruf- und Serviceleitstelle" },
      { id: "b", text: "Jeder Schusswaffenträger" },
      { id: "c", text: "Der Bewachungs-Gewerbetreibende" },
      { id: "d", text: "Der Einsatzleiter" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 15,
    question: "Was ist die Aufgabe des Bundesdatenschutzgesetzes?",
    answers: [
      { id: "a", text: "Es soll sicherstellen, dass durch personelle und technische Maßnahmen Betriebs- und Geschäftsgeheimnisse eines Unternehmens nicht unbefugt an andere weitergegeben werden können" },
      { id: "b", text: "Der Einzelne soll davor geschützt werden, dass er durch den Umgang mit seinen personenbezogenen Daten in seinem Persönlichkeitsrecht beeinträchtigt wird" },
      { id: "c", text: "Es soll ermöglichen, dass der Arbeitgeber durch die Auswertung der personenbezogenen Daten seiner Mitarbeiter Informationen über deren Freizeitverhalten erhält" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 16,
    question: "Was regelt das Privatrecht?",
    answers: [
      { id: "a", text: "Es regelt die Rechtsbeziehungen der Bürger zum Staat und seinen Einrichtungen, z. B, zu Polizei und Verwaltungsbehörden" },
      { id: "b", text: "Es regelt die Rechtsbeziehungen von natürlichen und juristischen Personen untereinander" },
      { id: "c", text: "Es regelt die Schadensersatzpflicht nach unerlaubten Handlungen" },
      { id: "d", text: "Es regelt, unter welchen Voraussetzungen das Verhalten eines Menschen strafbar ist" }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 17,
    question: "Wozu ist ein Sicherheitsunternehmer nach der Bewachungsverordnung verpflichtet?",
    answers: [
      { id: "a", text: "Er hat eine Rechtsschutzversicherung abzuschließen" },
      { id: "b", text: "Er muss eine Haftpflichtversicherung abschließen" },
      { id: "c", text: "Er darf grundsätzlich keine zuverlässigen Personen beschäftigen" },
      { id: "d", text: "Er hat seinen Wachpersonen einen Dienstausweis auszustellen" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 18,
    question: "Welche Aussagen zur DS-GVO sind richtig?",
    answers: [
      { id: "a", text: "Sie gilt für die familiäre Verarbeitung personenbezogener Daten, z. B. für das Führen eines Anschriftenverzeichnisses, die keinen Bezug zur beruflichen Tätigkeit haben" },
      { id: "b", text: "Sie gilt für die nichtautomatisierte Verarbeitung personenbezogener Daten, die in einem Dateisystem gespeichert sind oder gespeichert werden" },
      { id: "c", text: "Sie gilt für die Verarbeitung personenbezogener Daten durch die zuständigen Behörden zum Zwecke der Abwehr von Gefahren für die öffentliche Sicherheit" },
      { id: "d", text: "Sie gilt für die ganz oder teilweise automatisierte Verarbeitung personenbezogener Daten" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 19,
    question: "In welche Rechtsgebiete wird die deutsche Rechtsordnung grundsätzlich eingeteilt?",
    answers: [
      { id: "a", text: "Öffentliches Recht" },
      { id: "b", text: "Privat- / Zivilrecht" },
      { id: "c", text: "Politisches Recht" },
      { id: "d", text: "Recht des Stärkeren" }
    ],
    correct: ["a","b"],
    points: 2
  },
  {
    id: 20,
    question: "Müssen Wachpersonen ihren Bewacherausweis gemäß BewachV sichtbar tragen?",
    answers: [
      { id: "a", text: "Nein, während des Wachdienstes müssen Wachpersonen den Ausweis mitführen und auf Verlangen den Beauftragten der Vollzugsbehörden vorzeigen" },
      { id: "b", text: "Ja, während des Wachdienstes. Ausgenommen davon ist der 'Personenschutz'. Personenschützer müssen den Ausweis nur mitführen" },
      { id: "c", text: "Ja, während des Wachdienstes. Diese Tragepflicht entfällt allerdings, wenn die Wachpersonen ein Kennschild bzw. ein Namensschild sichtbar tragen" },
      { id: "d", text: "Ja, während des Wachdienstes. Dies gilt aber nur für sachkundepflichtige Bewachungstätigkeiten wie 'Kontrollgänge im öffentlichen Verkehrsraum'" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 21,
    question: "Was sind öffentliche Stellen des Bundes gemäß DS-GVO und BDSG?",
    answers: [
      { id: "a", text: "Bewachungsunternehmen" },
      { id: "b", text: "Bundeskriminalamt" },
      { id: "c", text: "Automobilkonzerne" },
      { id: "d", text: "Deutsche Rentenversicherung Bund" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 22,
    question: "Welche Grundrechte können durch ein Gesetz eingeschränkt werden?",
    answers: [
      { id: "a", text: "Die Gleichheit vor dem Gesetz." },
      { id: "b", text: "Die Menschenwürde." },
      { id: "c", text: "Das Eigentum." },
      { id: "d", text: "Die Freiheit." }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 23,
    question: "Wer ist für die sichere Aufbewahrung der Schusswaffen und Munition im Gewerbebetrieb verantwortlich?",
    answers: [
      { id: "a", text: "Der Sicherheitsmitarbeiter, der gerade Dienst in der Sicherheitszentrale verrichtet." },
      { id: "b", text: "Jeder zur Führung bzw. Bereithaltung von Schusswaffen befugte Sicherheitsmitarbeiter." },
      { id: "c", text: "Nur der Sicherheitsmitarbeiter, der über einen Waffenschein verfügt bzw. als Sachkundiger tätig werden darf." },
      { id: "d", text: "Der Gewerbetreibende." }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 24,
    question: "Wann muss gemäß DS-GVO der Verantwortliche die personenbezogenen Daten des Betroffenen unverzüglich löschen?",
    answers: [
      { id: "a", text: "Wenn diese Daten von vornherein unrechtmäßig verarbeitet wurden" },
      { id: "b", text: "Wenn diese Daten zur Ausübung des Rechts auf freie Meinungsäußerung verwendet werden" },
      { id: "c", text: "Wenn die betroffene Person ihre Einwilligung widerruft und es an einer anderweitigen Rechtsgrundlage für die Verarbeitung fehlt" },
      { id: "d", text: "Wenn diese Daten verwendet werden, um Rechtsansprüche durchzusetzen" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 25,
    question: "Was besagen die Gleichheitsgrundsätze gemäß Art. 3 Grundgesetz?",
    answers: [
      { id: "a", text: "Die Gleichberechtigung zwischen Mann und Frau kann durch Gesetze eingeschränkt werden" },
      { id: "b", text: "Alle Menschen sind vor dem Gesetz gleich" },
      { id: "c", text: "Männer und Frauen sind gleichberechtigt" },
      { id: "d", text: "Ein generelles Nachtarbeitsverbot für Frauen ist mit den Gleichheitsgrundsätzen vereinbar" }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 26,
    question: "Der Betreiber einer gastgewerblichen Diskothek setzt als Türsteher eigenes Personal und Wachpersonen eines Bewachungsunternehmens ein. Benötigen die als Türsteher eingesetzten Personen eine Qualifikation im Sinne von § 34a GewO?",
    answers: [
      { id: "a", text: "Ja, die bei der Diskothek angestellten Mitarbeiter benötigen den Sachkundenachweis" },
      { id: "b", text: "Ja, die bei der Diskothek angestellten Mitarbeiter benötigen den Unterrichtungsnachweis" },
      { id: "c", text: "Ja, die Wachpersonen benötigen den Sachkundenachweis" },
      { id: "d", text: "Ja, die Wachpersonen benötigen den Unterrichtungsnachweis" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 27,
    question: "Welche Aussagen zum Recht auf Auskunft sind gemäß BDSG richtig?",
    answers: [
      { id: "a", text: "Jeder muss grundsätzlich Auskunft über die zu seiner Person gespeicherten Daten erhalten, wenn er dieses beantragt" },
      { id: "b", text: "Verlangt jemand Auskunft über die Daten, die zu seiner Person gespeichert sind, muss er dafür die Kosten tragen" },
      { id: "c", text: "Öffentliche Stellen dürfen die Auskunft im Einzelfall verweigern, wenn die Auskunft die öffentliche Sicherheit oder Ordnung gefährden würde" }
    ],
    correct: ["a","c"],
    points: 2
  },
  {
    id: 28,
    question: "Das Recht auf Leben und körperliche Unversehrtheit (Art. 2 GG)…",
    answers: [
      { id: "a", text: "…ist ein Bürgerrecht." },
      { id: "b", text: "…schützt nur die psychische Unversehrtheit der Bürger." },
      { id: "c", text: "…ist ein Abwehrrecht und richtet sich u.a. gegen Eingriffe des Staates." },
      { id: "d", text: "…ist ein Menschenrecht." }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 29,
    question: "Wer ist gemäß BewachV von der Unterrichtung befreit?",
    answers: [
      { id: "a", text: "Personen mit einem Abschluss für die Laufbahnprüfung für den mittleren Justizvollzugsdienst." },
      { id: "b", text: "Personen, die über eine mindestens zweijährige Berufserfahrung im Sicherheitsgewerbe verfügen." },
      { id: "c", text: "Personen, die einen erfolgreichen Abschluss eines rechtswissenschaftlichen Hochschulstudiums besitzen." },
      { id: "d", text: "Personen mit einem Abschluss für die Laufbahnprüfung für den mittleren Zolldienst mit Berechtigung zum Führen einer Waffe." }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 30,
    question: "Was fällt nicht unter den Begriff 'personenbezogene Daten'?",
    answers: [
      { id: "a", text: "Geburtsdatum" },
      { id: "b", text: "Wahlergebnis der Betriebsratswahl" },
      { id: "c", text: "Name, Vorname" },
      { id: "d", text: "Krankendaten" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 31,
    question: "Welche Aussagen zum Gewaltmonopol des Staates in der Bundesrepublik Deutschland sind richtig?",
    answers: [
      { id: "a", text: "Der Staat darf Gewalt nur als letztes Mittel anwenden, um den Frieden zu bewahren. Die Gewalt muss rechtmäßig und verhältnismäßig sein" },
      { id: "b", text: "Nur staatliche Stellen, wie z. B. die Polizei, dürfen zur Sicherung des inneren Friedens Gewalt anwenden" },
      { id: "c", text: "Das staatliche Gewaltmonopol lässt keine Ausnahmen zu. Privatpersonen müssen sich an staatliche Stellen wenden, z. B. an Polizei und Gerichte, wenn sie Hilfe benötigen" }
    ],
    correct: ["a","b"],
    points: 2
  },
  {
    id: 32,
    question: "Welche Voraussetzungen muss ein SMA gemäß §34a GewO und BewachV erfüllen, um im Bewachungsgewerbe arbeiten zu dürfen?",
    answers: [
      { id: "a", text: "Ihm muss die Zuverlässigkeit im Rahmen des §34a GewO erteilt worden sein." },
      { id: "b", text: "Er muss die deutsche Staatsangehörigkeit besitzen und darf nicht verschuldet sein." },
      { id: "c", text: "Er muss einen Berufsabschluss besitzen und mindestens 21 Jahre alt sein." },
      { id: "d", text: "Er muss eine individuelle Bewacherregister Identifikationsnummer gem. §11b GewO zugeteilt bekommen." }
    ],
    correct: ["a","d"],
    points: 2
  },
  {
    id: 33,
    question: "Ist es im Sinne der DS-GVO einer Wachperson gestattet, im Rahmen der Zutrittskontrolle zu einem Wachobjekt die personenbezogenen Daten von Besuchern zu erheben?",
    answers: [
      { id: "a", text: "Ja, ohne Einschränkungen" },
      { id: "b", text: "Nein, dies ist verboten" },
      { id: "c", text: "Ja, wenn der Besucher für diesen konkreten Fall freiwillig und nach ausreichender Information unmissverständlich zugestimmt hat" },
      { id: "d", text: "Ja, wenn der Auftraggeber die Datenerhebung zwingend als Voraussetzung für das Betreten des Wachobjektes vorschreibt" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 34,
    question: "In welchem Verhältnis stehen sich Staat und Bürger im öffentlichen Recht gegenüber?",
    answers: [
      { id: "a", text: "Der Staat ist dem Bürger übergeordnet" },
      { id: "b", text: "Der Bürger ist dem Staat übergeordnet" },
      { id: "c", text: "Es gibt keinen Unterschied zwischen öffentlichem Recht und privatem Recht. In beiden Rechtsgebieten stehen sich Staat und Bürger gleich gegenüber." },
      { id: "d", text: "Staat und Bürger sind gleichberechtigt" },
      { id: "e", text: "Unabhängig von den Rechtsgebieten, ist der Staat dem Bürger immer übergeordnet." }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 35,
    question: "Überprüfen Sie die Aussagen, welche in der Bewachungsverordnung geregelt sind.",
    answers: [
      { id: "a", text: "Ausstattung mit bestimmten Ausrüstungsgegenständen." },
      { id: "b", text: "Ausstellen von Dienstausweisen (Bewacherausweis)" },
      { id: "c", text: "Aufzeichnung aller Bewachungsverträge in deutscher Sprache." },
      { id: "d", text: "Festlegung einer Bekleidungsordnung." }
    ],
    correct: ["b","c"],
    points: 2
  },
  {
    id: 36,
    question: "Wo ist der Einsatz von Videoüberwachungsanlagen unter Beachtung des BDSG erlaubt?",
    answers: [
      { id: "a", text: "In Umkleidekabinen von Bekleidungsgeschäften" },
      { id: "b", text: "In Bussen und Bahnen des öffentlichen Personenverkehrs" },
      { id: "c", text: "In Duschräumen von Schwimmbädern" },
      { id: "d", text: "Im Besucherbereich von Rathäusern" }
    ],
    correct: ["b","d"],
    points: 2
  },
  {
    id: 37,
    question: "Welche generellen Unterschiede gibt es zwischen dem Tätigwerden der Polizei und gewerblicher Sicherheitsdienste?",
    answers: [
      { id: "a", text: "...dürfen Zwangsmittel nur im Rahmen der Verfolgung von schweren Straftaten und bei Gefahr im Verzug einsetzen." },
      { id: "b", text: "...dürfen ausschließlich auf privatem Gelände, die Polizei hingegen nur im öffentlichen Verkehrsraum tätig werden." },
      { id: "c", text: "...verfügen in Hausrechtsbereichen mit tatsächlich öffentlichem Verkehr über hoheitliche Befugnisse, wenn die Bediensteten die IHK- Sachkundeprüfung § 34a GewO mit Erfolg bestanden haben." },
      { id: "d", text: "...haben keine besonderen Eingriffsbefugnisse und dürfen ohne Einverständnis des Betroffenen z.B. keine Körperkontrollen oder Verwahrungen durchführen." }
    ],
    correct: ["d"],
    points: 1
  },
  {
    id: 38,
    question: "Welche Pflicht muss der Gewerbetreibende gemäß BewachV erfüllen?",
    answers: [
      { id: "a", text: "Er muss zur Überprüfung der Zuverlässigkeit seiner Wachperson eine unbeschränkte Auskunft aus dem Bundeszentralregister einholen." },
      { id: "b", text: "Er muss seine Wachpersonen spätestens vor der ersten Aufnahme der Bewachungstätigkeiten einen Ausweis ausstellen" },
      { id: "c", text: "Er muss dafür sorgen, dass seine Wachperson die Sachkundeprüfung erfolgreich ablegen, damit sie Bewachungstätigkeiten wie Geld- und Werttransporte durchführen dürfen" },
      { id: "d", text: "Er muss seine Wachpersonen Dienstkleidung zur Verfügung stellen, die bei allen Bewachungstätigkeiten getragen werden muss" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 39,
    question: "Wann dürfen gemäß BDSG personenbezogene Daten erhoben, verarbeitet und genutzt werden?",
    answers: [
      { id: "a", text: "Wenn der Betroffene mündlich zustimmt" },
      { id: "b", text: "Wenn es der Datenschutzbeauftragte erlaubt" },
      { id: "c", text: "Wenn der Betroffene seine schriftliche Zustimmung gibt" },
      { id: "d", text: "Wenn es das Bundesdatenschutzgesetz erlaubt" }
    ],
    correct: ["c","d"],
    points: 2
  },
  {
    id: 40,
    question: "Kaufhausdetektiv Klaus hat den Auftrag, einen Diebstahl aufzuklären. Klaus soll den Täter befragen. Auf was sollte Klaus den Täter vor Beginn der Befragung hinweisen?",
    answers: [
      { id: "a", text: "Klaus sollte den Täter darauf hinweisen, dass die Angabe seiner Personalien freiwillig ist." },
      { id: "b", text: "Klaus sollte den Täter darauf hinweisen, dass er nur mit einer Geldstrafe zu rechnen habe, wenn er den Diebstahl zugibt." },
      { id: "c", text: "Klaus sollte den Täter darauf hinweisen, dass er seine Taschen nach einem Ausweis durchsuchen darf, wenn er seine Personalien nicht angeben will." },
      { id: "d", text: "Klaus sollte den Täter darauf hinweisen, dass er nicht verpflichtet ist, zum Vorwurf des Diebstahls auszusagen." }
    ],
    correct: ["a","d"],
    points: 2
  },
],
  quiz17: [
  {
    id: 1,
    question: "Welches sind im Grundgesetz verankerte Verfassungsprinzipien Deutschlands?",
    answers: [
      { id: "a", text: "Rechtsstaat." },
      { id: "b", text: "Demokratie." },
      { id: "c", text: "Umweltschutz." },
      { id: "d", text: "Monarchie." }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 2,
    question: "Welche Unterlagen muss der Gewerbetreibende seinen Wachpersonen beim ersten Dienstantritt gegen Empfangsbescheinigung aushändigen?",
    answers: [
      { id: "a", text: "Dienstanweisung" },
      { id: "b", text: "DGUV Vorschrift 23" },
      { id: "c", text: "§ 34a Gewerbeordnung" },
      { id: "d", text: "Arbeitsvertrag" }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 3,
    question: "Unter welchen Voraussetzungen ist ein Sicherheitsunternehmen nach dem BDSG verpflichtet einen Beauftragten für Datenschutz schriftlich zu bestellen?",
    answers: [
      { id: "a", text: "Falls im Unternehmen mindestens drei Personen mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind" },
      { id: "b", text: "Falls im Unternehmen mehr als neunzehn Personen mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind" },
      { id: "c", text: "Alle Sicherheitsunternehmen sind ausnahmslos dazu verpflichtet einen Beauftragten für den Datenschutz zu bestellen" },
      { id: "d", text: "Sicherheitsunternehmen brauchen grundsätzlich keinen Beauftragten für den Datenschutz zu bestellen" }
    ],
    correct: ["b"],
    points: 1
  },
  {
    id: 4,
    question: "Der Revierfahrer „A\" überfährt mit dem Dienstwagen unabsichtlich die Katze von „B\", die ihm plötzlich vor das Fahrzeug läuft. Was liegt hier zivilrechtlich vor?",
    answers: [
      { id: "a", text: "Unerlaubtes Entfernen vom Unfallort gemäß § 142 StGB" },
      { id: "b", text: "Fahrlässige Tötung gemäß § 222 StGB" },
      { id: "c", text: "Sachbeschädigung gemäß § 303 StGB" },
      { id: "d", text: "Ein Sachmangel gemäß § 434 BGB" },
      { id: "e", text: "Schadenersatzpflicht gemäß § 823 BGB" }
    ],
    correct: ["e"],
    points: 1
  },
  {
    id: 5,
    question: "Welche Aussagen zur Menschenwürde sind gemäß Art. 1 Grundgesetz richtig?",
    answers: [
      { id: "a", text: "Geschützt ist jeder Mensch, der sich im Geltungsbereich des GG aufhält, z. B. Minderjährige Kinder, Straftäter und Ausländer" },
      { id: "b", text: "Der Staat ist verpflichtet, die Menschenwürde zu achten und zu schützen" },
      { id: "c", text: "Durch die Menschenwürde sind nur die höchsten Grundrechte 'Recht auf Leben' und 'Recht auf körperliche Unversehrtheit' geschützt." },
      { id: "d", text: "Geschützt sind ebenso juristische Personen und die Menschheit" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 6,
    question: "Aufgrund des § 34a Abs. 2 der Gewerbeordnung, hat das Bundesministerium des Inneren und für Heimat die Bewachungsverordnung erlassen. Welche Aussagen sind in der Bewachungsverordnung geregelt?",
    answers: [
      { id: "a", text: "Festlegung einer Bekleidungsordnung." },
      { id: "b", text: "Ausstattung mit bestimmten Ausrüstungsgegenständen." },
      { id: "c", text: "Ausstellen von Dienstausweisen (Bewacherausweis)" },
      { id: "d", text: "Aufzeichnung aller Bewachungsverträge in deutscher Sprache." }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 7,
    question: "Wann ist die Videoüberwachung gemäß BDSG zulässig, sofern die schutzwürdigen Interessen der Betroffenen nicht überwiegen?",
    answers: [
      { id: "a", text: "Wenn es der Auswertung der Arbeitsleistung der Mitarbeiter dient." },
      { id: "b", text: "Wenn es der Überwachung der Arbeitszeiten der Beschäftigten dient." },
      { id: "c", text: "Wenn es der Wahrnehmung des Hausrechts dient." },
      { id: "d", text: "Wenn es der Aufgabenerfüllung öffentlicher Stellen dient." }
    ],
    correct: ["c", "d"],
    points: 2
  },
  {
    id: 8,
    question: "Was verbietet das 'Schikaneverbot' gemäß § 226 BGB?",
    answers: [
      { id: "a", text: "jemanden nicht in eine Diskothek zu lassen, weil er einen Schnauzbart hat" },
      { id: "b", text: "einen Untergebenen eine berechtigte Abmahnung zu geben" },
      { id: "c", text: "einen gestellten Dieb nach dem Ausweis zu fragen" },
      { id: "d", text: "eine berechtigte Kontrolle unnötig in die Länge zu ziehen, um den anderen möglichst lange aufzuhalten" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 9,
    question: "Was wird unter dem Privatrecht verstanden?",
    answers: [
      { id: "a", text: "Das Privatrecht regelt die Rechtsbeziehungen zwischen gleichgestellten natürlichen und juristischen Personen" },
      { id: "b", text: "Das Privatrecht legt im Wesentlichen fest, welche Freiheiten, Rechte und Pflichten die Menschen im Verhältnis zueinander haben" },
      { id: "c", text: "Das Privatrecht beschreibt die Rechtsfolgen für Straftaten und Ordnungswidrigkeiten, z.B. Geld- oder Freiheitsstrafen, Geldbußen" },
      { id: "d", text: "Das Privatrecht ist ein Teil des öffentlichen Rechts und regelt die Rechtsbeziehung zwischen Staat und Bürger" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 10,
    question: "Gemäß BewachV muss der Gewerbetreibende den Wachdienst durch eine Dienstanweisung regeln. Welche Hinweise müssen in der Dienstanweisung enthalten sein?",
    answers: [
      { id: "a", text: "Der Hinweis, dass Wachpersonen nicht die Eigenschaft und die Befugnisse von Polizeivollzugsbeamten oder sonstigen Bediensteten einer Behörde besitzen" },
      { id: "b", text: "Der Hinweis, dass Wachpersonen bei allen Bewachungstätigkeiten ein Namensschild tragen müssen." },
      { id: "c", text: "Der Hinweis, dass Wachpersonen während des Dienstes nur mit Zustimmung des Gewerbetreibenden eine Schusswaffe, Hieb- und Stoßwaffen sowie Reizstoffsprühgeräte führen dürfen" },
      { id: "d", text: "Den Hinweis, dass Wachpersonen bei allen Bewachungstätigkeiten mit Ausnahme der Tätigkeit 'Schutz vor Ladendieben' Dienstkleidung tragen müssen" }
    ],
    correct: ["a", "c"],
    points: 2
  },
  {
    id: 11,
    question: "Was sind gemäß DS-GVO besondere Kategorien personenbezogener Daten?",
    answers: [
      { id: "a", text: "Politische Meinungen, weltanschauliche Überzeugungen" },
      { id: "b", text: "Geburtsort, Name, Vorname, Geburtsort" },
      { id: "c", text: "Kennzeichen am Pkw, Kfz-Versicherung" },
      { id: "d", text: "Gewerkschaftszugehörigkeit, Gesundheitsdaten" }
    ],
    correct: ["a", "d"],
    points: 1
  },
  {
    id: 12,
    question: "Dürfen Wachpersonen zur Aufrechterhaltung der betrieblichen Sicherheit und Ordnung und zum Schutz von Leib, Leben sowie weiterer Rechtsgüter in die Rechte Dritter eingreifen?",
    answers: [
      { id: "a", text: "Nein, weil Wachpersonen nicht die Eigenschaft und Befugnisse eines Polizeivollzugsbeamten besitzen" },
      { id: "b", text: "Ja, sie dürfen Befugnisse wie die Notwehr und Notstände zugunsten eines Auftraggegers unter Beachtung des Grundsatzes der Erforderlichkeit einsetzen" },
      { id: "c", text: "Ja, sie dürfen im Rahmen der Wahrnehmung des Hausrechts des Auftraggebers das unbefugte Betreten des Betriebsgeländes und der Betriebsgebäude untersagen" },
      { id: "d", text: "Ja, sie dürfen in die Rechte Dritter zur Durchsetzung von Sicherheitsinteressen des Auftraggebers uneingeschränkt eingreifen" }
    ],
    correct: ["b", "c"],
    points: 2
  },
  {
    id: 13,
    question: "Welche Aussage zur Zuständigkeit des Sicherheitsgewerbes ist richtig?",
    answers: [
      { id: "a", text: "Das Sicherheitsgewerbe ist zuständig in den Bereichen, die ihm von den Sicherheitsbehörden zugewiesen werden" },
      { id: "b", text: "Das Sicherheitsgewerbe ist zuständig für die innere Sicherheit der Bundesländer" },
      { id: "c", text: "Das Sicherheitsgewerbe ist zuständig für die Aufrechterhaltung der öffentlichen Sicherheit und Ordnung" },
      { id: "d", text: "Das Sicherheitsgewerbe ist zuständig für das korrekte Abwiegen von Rinderhack an der Fleischtheke" },
      { id: "e", text: "Das Sicherheitsgewerbe ist zuständig in den Bereichen, die ihm vertraglich vom Auftraggeber zugewiesen werden" }
    ],
    correct: ["e"],
    points: 1
  },
  {
    id: 14,
    question: "Wer ist für die sichere Aufbewahrung der Schusswaffen und Munition im Gewerbebetrieb verantwortlich?",
    answers: [
      { id: "a", text: "Der Gewerbetreibende." },
      { id: "b", text: "Jeder zur Führung bzw. Bereithaltung von Schusswaffen befugte Sicherheitsmitarbeiter." },
      { id: "c", text: "Nur der Sicherheitsmitarbeiter, der über einen Waffenschein verfügt bzw. als Sachkundiger tätig werden darf." },
      { id: "d", text: "Der Sicherheitsmitarbeiter, der gerade Dienst in der Sicherheitszentrale verrichtet." }
    ],
    correct: ["a"],
    points: 1
  },
  {
    id: 15,
    question: "Was sind wesentliche Prinzipien des Datenschutzrechts gemäß der DS-GVO?",
    answers: [
      { id: "a", text: "Personenbezogene Daten müssen sachlich richtig und erforderlichenfalls auf dem neuesten Stand sein" },
      { id: "b", text: "Personenbezogene Daten müssen nur dann vor unbefugter Verarbeitung geschützt werden, wenn dies der Betroffene verlangt" },
      { id: "c", text: "Personenbezogene Daten dürfen in beliebigem Umfang erhoben und verarbeitet werden" },
      { id: "d", text: "Personenbezogene Daten müssen auf rechtmäßige Weise und nach Treu und Glauben verarbeitet werden" }
    ],
    correct: ["a", "d"],
    points: 2
  },
  {
    id: 16,
    question: "Welche Aussagen zur Stellung des Besitzdieners sind gemäß § 855 BGB richtig?",
    answers: [
      { id: "a", text: "Der Besitzdiener begründet keinen eigenen Besitz an der Sache, über die er die tatsächliche Gewalt für den Besitzer ausübt. Dies gilt z. B. für die zur Verfügung gestellte Dienstkleidung der Wachperson." },
      { id: "b", text: "Der Besitzdiener hat ein eigenes Selbsthilferecht an der Sache, über die er die tatsächliche Gewalt für den Besitzer ausübt. Dies trifft auf alle Gegenstände zu, die ihm zur Durchführung des Dienstes überlassen wurden." },
      { id: "c", text: "Der Besitzdiener übt die tatsächliche Gewalt über eine Sache für den Besitzer aus. Er ist dabei an die Weisungen des Besitzers gebunden." }
    ],
    correct: ["a", "c"],
    points: 1
  },
  {
    id: 17,
    question: "Im deutschen Rechtssystem sind Rechtfertigungsgründe verankert. Was ist deren Sinn und Zweck?",
    answers: [
      { id: "a", text: "Sie können strafbares Handeln rechtfertigen" },
      { id: "b", text: "Sie können unerlaubtes Handeln rechtfertigen" },
      { id: "c", text: "Sie können verbotenes Handeln entschuldigen" },
      { id: "d", text: "Sie können ordnungswidriges Handeln entschuldigen" }
    ],
    correct: ["a", "b"],
    points: 2
  },
  {
    id: 18,
    question: "Müssen Wachpersonen ihren Bewacherausweis gemäß BewachV sichtbar tragen?",
    answers: [
      { id: "a", text: "Ja, während des Wachdienstes. Diese Tragepflicht entfällt allerdings, wenn die Wachpersonen ein Kennschild bzw. ein Namensschild sichtbar tragen" },
      { id: "b", text: "Ja, während des Wachdienstes. Dies gilt aber nur für sachkundepflichtige Bewachungstätigkeiten wie 'Kontrollgänge im öffentlichen Verkehrsraum'" },
      { id: "c", text: "Nein, während des Wachdienstes müssen Wachpersonen den Ausweis mitführen und auf Verlangen den Beauftragten der Vollzugsbehörden vorzeigen" },
      { id: "d", text: "Ja, während des Wachdienstes. Ausgenommen davon ist der 'Personenschutz'. Personenschützer müssen den Ausweis nur mitführen" }
    ],
    correct: ["c"],
    points: 1
  },
  {
    id: 19,
    question: "Das BDSG verpflichtet dazu, das Datengeheimnis zu beachten. Was ist damit gemeint?",
    answers: [
      { id: "a", text: "Mit der Datenverarbeitung beauftragte Personen müssen auf das Datengeheimnis verpflichtet werden. Dies gilt in ganz Europa" },
      { id: "b", text: "Wenn die mit der Verarbeitung personenbezogener Daten betrauten Personen ihre Tätigkeit beenden, besteht das Datengeheimnis fort" },
      { id: "c", text: "Das Datengeheimnis dient dem Schutz und der unbefugten Kenntnisnahme von Geschäftsgeheimnissen" },
      { id: "d", text: "Mit der Datenverarbeitung befasste Personen dürfen personenbezogene Daten nur befugt verarbeiten" }
    ],
    correct: ["b", "d"],
    points: 2
  },
  {
    id: 20,
    question: "Die nachstehenden Äußerungen nehmen Bezug auf die Ausübung und Durchsetzung von Rechten durch Staatsbürger. Entscheiden Sie sich für die richtige Aussage.",
    answers: [
      { id: "a", text: "Da Staatsbürger als Staatsvolk die eigentliche Staatsgewalt repräsentieren, dürfen sie auch ohne weitere Prüfung Gewalt im eigenen Interesse anwenden." },
      { id: "b", text: "Die Anwendung von privater Gewalt ist in Ausnahmefällen ohne Einschränkung möglich." },
      { id: "c", text: "Wer in Ausübung der ihm zustehenden Rechte, die Grenzen des zulässigen überschreitet, ist grundsätzlich entschuldigt." },
      { id: "d", text: "Private Gewaltanwendung zur Durchsetzung vermeintlicher oder wirklicher Rechtspositionen, ist mit den rechtsstaatlichen Prinzipien nicht vereinbar." },
      { id: "e", text: "Der Schutz und die Durchsetzung von Rechten ist, soweit sie den Einsatz von Zwangsmitteln erfordern, grundsätzlich Aufgabe des Staates." }
    ],
    correct: ["e"],
    points: 1
  }
];



};

