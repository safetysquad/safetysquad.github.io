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
quizzes.quiz5 = [
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
  quizzes.quiz6 = [
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
]
};

