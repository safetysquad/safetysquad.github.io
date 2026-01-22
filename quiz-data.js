const quizzes = {
  quiz1: [
    {
      id: 1,
      question: "Welche Tatmittel kennzeichnen die Gefährliche Körperverletzung gemäß § 224 StGB?",
      answers: [
        { id: "a", text: "Körperverletzung durch einen Sportler" },
        { id: "b", text: "Körperverletzung mit schweren Folgen" },
        { id: "c", text: "Körperverletzung gemeinschaftlich durch mehrere Täter" },
        { id: "d", text: "Körperverletzung mittels einer Waffe" }
      ],
      correct: ["c", "d"],
      points: 2
    },
    {
      id: 2,
      question: "Welche Aussagen zur Begünstigung gemäß § 257 StGB sind richtig?",
      answers: [
        { id: "a", text: "Sie setzt eine mit Strafe bedrohte Handlung voraus, durch die der Vortäter Vorteile erhält oder noch erhalten wird" },
        { id: "b", text: "Sie liegt vor, wenn der Vortäter sich selbst begünstigt" },
        { id: "c", text: "Sie ist vollendet, wenn Hilfe geleistet wurde – unabhängig vom Erfolg" }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 3,
      question: "Welche Aussage zu den echten Unterlassungsdelikten ist richtig?",
      answers: [
        { id: "a", text: "Der Täter bleibt untätig, obwohl er gesetzlich verpflichtet ist zu handeln" },
        { id: "b", text: "Hausfriedensbruch durch Nichtverlassen einer Wohnung ist ein echtes Unterlassungsdelikt" },
        { id: "c", text: "Der Täter muss eine Garantenstellung haben" }
      ],
      correct: ["a", "b"],
      points: 2
    },
    {
      id: 4,
      question: "Welche Tatobjekte zählen zur Brandstiftung gemäß § 306 StGB?",
      answers: [
        { id: "a", text: "Fahrräder und Kinderwagen" },
        { id: "b", text: "Einkaufstaschen" },
        { id: "c", text: "Freistehende Mülleimer" },
        { id: "d", text: "Warenlager und Warenvorräte" },
        { id: "e", text: "Gebäude und Betriebsstätten wie Warenhäuser" },
        { id: "f", text: "Streichhölzer" }
      ],
      correct: ["d", "e"],
      points: 2
    },
    {
      id: 5,
      question: "Welche Aussagen zur vorläufigen Festnahme gemäß § 127 Abs. 1 StPO sind richtig?",
      answers: [
        { id: "a", text: "Sie darf auch bei schuldunfähigen Kindern unter 14 Jahren vorgenommen werden" },
        { id: "b", text: "Sie setzt eine verfolgbare Straftat voraus" },
        { id: "c", text: "Sie ist ein Rechtfertigungsgrund und darf von Privatpersonen vorgenommen werden" }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 6,
      question: "In welchem Fall liegt eine fahrlässige Körperverletzung gemäß § 229 StGB vor?",
      answers: [
        { id: "a", text: "Gezielter Faustschlag bei einer Schlägerei" },
        { id: "b", text: "Verletzung bei einem unabsichtlich verursachten Verkehrsunfall" },
        { id: "c", text: "Kieferbruch durch Schlag mit einer Waffe" }
      ],
      correct: ["b"],
      points: 1
    },
    {
      id: 7,
      question: "Welche Aussagen zum Eingreifen eines Passanten bei einer Kindesentführung sind richtig?",
      answers: [
        { id: "a", text: "Angriffsnotstand" },
        { id: "b", text: "Widerrechtliches Handeln" },
        { id: "c", text: "Keine Befugnis zum Festhalten" },
        { id: "d", text: "Notwehr in Form der Nothilfe" },
        { id: "e", text: "Rechtfertigender Notstand" },
        { id: "f", text: "Vorläufige Festnahme nach StPO" }
      ],
      correct: ["d", "f"],
      points: 2
    },
    {
      id: 8,
      question: "Welche Optionen haben Sie als Türsteher bei einer schweren Körperverletzung auf der Straße?",
      answers: [
        { id: "a", text: "Vorfall ignorieren" },
        { id: "b", text: "Immer sofort eingreifen" },
        { id: "c", text: "Polizei rufen, wenn Aufgabenbereich nicht verlassen werden kann" },
        { id: "d", text: "Eingang sichern und helfen" }
      ],
      correct: ["c", "d"],
      points: 2
    },
    {
      id: 9,
      question: "Wann liegt Diebstahl gemäß § 242 StGB vor?",
      answers: [
        { id: "a", text: "Aufbrechen eines Wandtresors" },
        { id: "b", text: "Zueignungsabsicht und Verbergen einer Uhr im Geschäft" },
        { id: "c", text: "Diebstahl historischer Waffen" }
      ],
      correct: ["b"],
      points: 1
    },
    {
      id: 10,
      question: "Wann ist die Begehung einer Tat strafbar?",
      answers: [
        { id: "a", text: "Immer" },
        { id: "b", text: "Bei fahrlässigem Handeln, wenn das Gesetz es unter Strafe stellt" },
        { id: "c", text: "Bei Vorliegen eines Rechtfertigungsgrundes" },
        { id: "d", text: "Bei Straftat ohne Rechtfertigungsgrund" }
      ],
      correct: ["b", "d"],
      points: 2
    },
    {
      id: 11,
      question: "Welche Aussagen zur Wegnahme eines Gehstockes zur Abwehr eines Messerangriffs sind richtig?",
      answers: [
        { id: "a", text: "Rechtfertigender Notstand" },
        { id: "b", text: "Notwehr oder Notstand frei wählbar" },
        { id: "c", text: "Notwehrüberschreitung" },
        { id: "d", text: "Notwehr erlaubt Wegnahme" },
        { id: "e", text: "Gesamtakt rechtfertigender Notstand" },
        { id: "f", text: "Notwehr darf sich nur gegen Angreifer richten" }
      ],
      correct: ["a", "f"],
      points: 2
    },
    {
      id: 12,
      question: "Welche Aussagen zur Strafbarkeit des Versuchs sind richtig?",
      answers: [
        { id: "a", text: "Versuch eines Verbrechens ist stets strafbar" },
        { id: "b", text: "Versuch eines Vergehens nur bei gesetzlicher Regelung" },
        { id: "c", text: "Versuch ist nur bei Verbrechen strafbar" }
      ],
      correct: ["a", "b"],
      points: 2
    },
    {
      id: 13,
      question: "Was sind besonders schwere Fälle des Diebstahls?",
      answers: [
        { id: "a", text: "Einbruchdiebstahl in einen Geschäftsraum" },
        { id: "b", text: "Diebstahl mit Waffen" },
        { id: "c", text: "Diebstahl eines Maschinengewehrs" },
        { id: "d", text: "Wohnungseinbruchdiebstahl" }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 14,
      question: "Welche Straftaten sind Offizialdelikte?",
      answers: [
        { id: "a", text: "Hausfriedensbruch" },
        { id: "b", text: "Unterschlagung" },
        { id: "c", text: "Diebstahl" },
        { id: "d", text: "Körperverletzung" },
        { id: "e", text: "Sachbeschädigung" }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 15,
      question: "Wann dürfen Wachpersonen gemäß § 127 Abs. 1 StPO vorläufig festnehmen?",
      answers: [
        { id: "a", text: "Bei bevorstehender Straftat" },
        { id: "b", text: "Bei Ordnungswidrigkeit" },
        { id: "c", text: "Zur Verhinderung einer Straftat" },
        { id: "d", text: "Bei Verfolgung eines unbekannten Straftäters" }
      ],
      correct: ["d"],
      points: 1
    },
    {
      id: 16,
      question: "Welche Aussagen zu Straftatbeständen nach dem StGB treffen zu?
1. Die Unterschlagung (§ 246 StGB) liegt nur dann vor, wenn man eine Sache wegnimmt.,
2. Beim räuberischen Diebstahl (§ 252 StGB) wird Gewalt angewendet, um eine bereits gestohlene Sache zu behalten.,
3. Hehlerei (§ 259 StGB) bedeutet, dass man Ware die ein anderer gestohlen hat verkauft oder ankauft.,
4. Der Tatbestand des Erschleichens von Leistungen (§ 265a StGB) ist z. B. erfüllt, wenn man ohne Fahrschein Bus fährt.,
5. Bei der Urkundenfälschung (§ 267 StGB) reicht es bereits, eine unechte Urkunde herzustellen oder zu gebrauchen.",
      answers: [
        { id: "a", text: "nur 1, 3, 4 und 5" },
        { id: "b", text: "nur 1 und 2" },
        { id: "c", text: "alle Aussagen" },
        { id: "d", text: "nur 2, 3 und 4" },
        { id: "e", text: "nur 2, 3, 4 und 5" }
      ],
      correct: ["d"],
      points: 1
    },
    {
      id: 17,
      question: "Welche Merkmale machen die objektive Sorgfaltswidrigkeit aus?",
      answers: [
        { id: "a", text: "Fehlende Kenntnisse" },
        { id: "b", text: "Überdurchschnittliche Fähigkeiten müssen eingesetzt werden" },
        { id: "c", text: "Maßstab: besonnener Mensch" },
        { id: "d", text: "Fähigkeiten frei einsetzbar" },
        { id: "e", text: "Keine Merkmale" },
        { id: "f", text: "Maßstab: überdurchschnittlicher Mensch" }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 18,
      question: "Welche Aussagen zu Diebstahl und Unterschlagung sind richtig?",
      answers: [
        { id: "a", text: "Fremde bewegliche Sachen" },
        { id: "b", text: "Diebstahl Offizialdelikt, Unterschlagung Antragsdelikt" },
        { id: "c", text: "Versuch nur beim Diebstahl strafbar" },
        { id: "d", text: "Beides Eigentumsdelikte mit unterschiedlicher Ausführung" }
      ],
      correct: ["a", "d"],
      points: 2
    },
    {
      id: 19,
      question: "Wann liegt der Versuch einer Straftat vor?",
      answers: [
        { id: "a", text: "Planung der Tat" },
        { id: "b", text: "Diebesgut im Auto gefunden" },
        { id: "c", text: "Unmittelbares Ansetzen" },
        { id: "d", text: "Eindringen zum Zwecke des Diebstahls" }
      ],
      correct: ["c", "d"],
      points: 2
    },
    {
      id: 20,
      question: "Wann liegt eine tätliche Beleidigung gemäß § 185 StGB vor?",
      answers: [
        { id: "a", text: "Beschimpfung" },
        { id: "b", text: "Anspucken" },
        { id: "c", text: "Stinkefinger zeigen" },
        { id: "d", text: "Unwahrheiten verbreiten" }
      ],
      correct: ["b"],
      points: 1
    },
    {
      id: 21,
      question: "Wann liegt gemäß § 22 StGB der Versuch einer Straftat vor?",
      answers: [
        { id: "a", text: "Planung" },
        { id: "b", text: "Beschaffung von Tatmitteln" },
        { id: "c", text: "Eindringen zum Diebstahl" }
      ],
      correct: ["c"],
      points: 1
    },
    {
      id: 22,
      question: "Wer begeht eine Amtsanmaßung gemäß § 132 StGB?",
      answers: [
        { id: "a", text: "Ausweiskontrolle" },
        { id: "b", text: "Vertragliche Taschenkontrolle" },
        { id: "c", text: "Bußgeld erheben" },
        { id: "d", text: "Als Hilfspolizist ausgeben" }
      ],
      correct: ["c", "d"],
      points: 2
    },
    {
      id: 23,
      question: "Welche Aussagen zum Angriff auf einen SMA mit einer Eisenstange sind richtig?",
      answers: [
        { id: "a", text: "Straftat, vorläufige Festnahme möglich" },
        { id: "b", text: "Gefährliche Körperverletzung, keine Verhältnismäßigkeit" },
        { id: "c", text: "Besitzstörung" },
        { id: "d", text: "Notwehr mit geeigneten Mitteln" },
        { id: "e", text: "Verteidigungsnotstand" },
        { id: "f", text: "Keine Rechtfertigung" }
      ],
      correct: ["a", "d"],
      points: 2
    },
    {
      id: 24,
      question: "Was sind Antragsdelikte?",
      answers: [
        { id: "a", text: "Diebstahl" },
        { id: "b", text: "Sachbeschädigung" },
        { id: "c", text: "Amtsanmaßung" },
        { id: "d", text: "Vorsätzliche Körperverletzung" }
      ],
      correct: ["b", "d"],
      points: 2
    },
    {
      id: 25,
      question: "Welche Aussagen zur Unterschlagung gemäß § 246 StGB sind richtig?",
      answers: [
        { id: "a", text: "Fundstück einstecken" },
        { id: "b", text: "Wegnahme mit Gewalt" },
        { id: "c", text: "Schützt Eigentum" },
        { id: "d", text: "Auch fahrlässig strafbar" }
      ],
      correct: ["a", "c"],
      points: 2
    }
  ]
};
