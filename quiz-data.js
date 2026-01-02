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
  ]
};
