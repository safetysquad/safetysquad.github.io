const cards = [
  {
    id: 1,
    question: "Was ist Recht?",
    answer: "Recht ist die Gesamtheit aller Rechtstexte (Gesetze, Verordnungen, …), die das Leben der Menschen in der Gesellschaft untereinander regeln."
  },
  {
    id: 2,
    question: "Wie setzt sich ein Staat zusammen?",
    answer: "Staatsgebiet + Staatsgewalt + Staatsvolk"
  },
  {
    id: 3,
    question: "Wie unterteilt sich das deutsche Recht?",
    answer: "Öffentliches Recht\nPrivates Recht / Zivilrecht"
  },
  {
    id: 4,
    question: "Was regelt das öffentliche Recht?",
    answer: "Es regelt die Rechtsbeziehung zwischen Staat und Bürger.\nIm öffentlichen Recht ist der Bürger dem Staat untergeordnet (Subordinationsprinzip: Über-/ Unterordnungsprinzip).\nBeispiele für das öffentliche Recht: StGB, StPO, GewO …"
  },
  {
    id: 5,
    question: "Was regelt das Private Recht?",
    answer: "Es regelt die Rechtsbeziehung der Bürger (Firmen, Vereine, …) untereinander.\nIm privaten Recht sind die Bürger einander gleichgestellt (Koordinationsprinzip: Gleichstellungsprinzip).\nBeispiele für das private Recht sind: BGB, Mietrecht, Arbeitsrecht …"
  },
  {
    id: 6,
    question: "Welche Verkehrsflächen kennen Sie? Wie sind dort die Zuständigkeiten verteilt (Polizei / Sicherheitsdienst)?",
    answer: "Öffentlicher Bereich (Polizei)\nPrivater Bereich (Sicherheitsdienst)\nHausrechtsbereiche mit tatsächlichem öffentlichem Verkehr, z.B. Bahnhof, Flughafen (Polizei und Sicherheitsdienst)"
  },
  {
    id: 7,
    question: "Was bedeutet P.P.P?",
    answer: "Public – Private – Partnership.\nEs handelt sich hierbei um eine Kooperationsvereinbarung zwischen privatem Sicherheitsdienst und der Polizei."
  },
  {
    id: 8,
    question: "Was bedeutet Gewaltmonopol?",
    answer: "Grundsätzlich hat nur der Staat das Recht zur Erfüllung seiner Aufgaben Gewalt anzuwenden. Bürger dürfen dies nur unter engen gesetzlichen Voraussetzungen (Ausnahmerechte, z.B. Notwehr oder übertragene Selbsthilferechte)."
  },
  {
    id: 9,
    question: "Was sind Grundrechte und wozu dienen sie?",
    answer: "Grundrechte sind Abwehrrechte des Bürgers gegen den Staat (Schutz vor Willkür des Staates).\nDurch sie setzt sich der Staat selbst Grenzen in seinem Handeln.\nSie dienen ebenso dem Schutz vor rechtswidrigen Eingriffen in die eigenen Grundrechte durch andere Bürger."
  },
  {
    id: 10,
    question: "Worin unterteilen sich die Grundrechte?",
    answer: "Menschenrechte und Bürgerrechte"
  },
  {
    id: 11,
    question: "Für wen gelten die Menschenrechte?",
    answer: "Sie gelten für alle Menschen, die sich in Deutschland oder auf deutschem Hoheitsgebiet (z.B. deutsche Konsulate oder deutsche Botschaften im Ausland) aufhalten."
  },
  {
    id: 12,
    question: "Für wen gelten die Bürgerrechte?",
    answer: "Sie gelten für alle deutschen Staatsbürger, die sich in Deutschland oder auf deutschem Hoheitsgebiet aufhalten."
  },
  {
    id: 13,
    question: "Welche (der für uns relevanten) Grundrechte sind Bürgerrechte?",
    answer: "Art. 8 GG Versammlungsfreiheit\nArt. 12 GG Freiheit der Berufswahl"
  },
  {
    id: 14,
    question: "Nennen Sie 5 Menschenrechte?",
    answer: "Art. 1 GG Menschenwürde\nArt. 2 GG Persönlichkeitsrechte\nArt. 3 GG Gleichheitsgrundsatz\nArt. 5 GG Meinungs- und Informationsfreiheit\nArt. 10 GG Brief-, Post- und Fernmeldegeheimnis"
  },
  {
    id: 15,
    question: "Welche Grundrechte dürfen NICHT eingeschränkt werden?",
    answer: "Art. 1 GG Menschenwürde\nArt. 3 GG Gleichheitsgrundsatz"
  },
  {
    id: 16,
    question: "Was versteht man unter Föderalismus?",
    answer: "Machtaufteilung zwischen Bund und Ländern."
  },
  {
    id: 17,
    question: "Was sind die Staatsprinzipien?",
    answer: "Republik\nBundesrepublik\nRechtsstaat\nSozialstaat\nDemokratie\nHorizontale Gewaltenteilung\nWiderstandsrecht"
  },
  {
    id: 18,
    question: "Was versteht man unter horizontaler Gewaltenteilung?",
    answer: "Legislative: gesetzgebende Gewalt\nJudikative: rechtsprechende Gewalt\nExekutive: ausführende / vollziehende Gewalt"
  },
  {
    id: 19,
    question: "Was versteht man unter Ewigkeitsklausel / verfassungsrechtliches Minimum?",
    answer: "Art. 1 GG (Menschenwürde) und Art. 20 GG (Staatsprinzipien) dürfen nicht abgeändert werden (Art. 79 GG)."
  },
  {
    id: 20,
    question: "Welche Rechtfertigungsgründe kennen Sie (nach Rechtsgebieten unterteilt)?",
    answer: "BGB:\n§227 Notwehr\n§228 Verteidigender Notstand\n§229 Selbsthilfe\n§859 Selbsthilfe des Besitzers\n§860 Selbsthilfe des Besitzdieners\n§904 Angreifender Notstand\n\nStGB:\n§32 Notwehr\n§34 Rechtfertigender Notstand\n\nStPO:\n§127 Vorläufige Festnahme"
  },
  {
    id: 21,
    question: "Was versteht man unter Beleihung?",
    answer: "Unter staatlicher Beleihung versteht man die Übertragung hoheitlicher Befugnisse an Private, die diese dann unter staatlicher Aufsicht wahrnehmen dürfen (z.B. Flughafen)."
  },
  {
    id: 22,
    question: "Auf welcher rechtlichen Grundlage arbeiten SMA?",
    answer: "Sicherheitsmitarbeiter arbeiten auf Grundlage privatrechtlicher Verträge. Ihnen stehen nur die Rechte zu, die Jedermann zustehen und die übertragenen Selbsthilferechte."
  },
  {
    id: 23,
    question: "Wer entscheidet über die Zulässigkeit und Dauer der Freiheitsentziehung?",
    answer: "Der Richter."
  },
  {
    id: 24,
    question: "Nenne 2 übertragbare Selbsthilferechte?",
    answer: "§229 BGB Selbsthilfe\n§859 / §860 BGB Selbsthilfe des Besitzers / Besitzdieners"
  },
  {
    id: 25,
    question: "Nenne die 5 wichtigsten Rechtsgüter?",
    answer: "Leben, Gesundheit, Freiheit, Ehre, Eigentum (Eselsbrücke: F.E.L.G.E.)"
  },
  {
    id: 26,
    question: "Was ist das Grundgesetz?",
    answer: "Die Verfassung Deutschlands."
  },
  {
    id: 27,
    question: "Sinn der Gewaltenteilung?",
    answer: "Gegenseitige Kontrolle.\nVermeidung der Bildung z.B. eines Polizeistaats."
  },
  {
    id: 28,
    question: "Was ist Notwehr?",
    answer: "Notwehr ist die Verteidigung, die erforderlich ist, um einen gegenwärtigen, rechtswidrigen Angriff von sich oder einem anderen abzuwenden."
  },
  {
    id: 29,
    question: "Was bedeutet Nothilfe?",
    answer: "Nothilfe ist die Notwehr für einen anderen."
  },
  {
    id: 30,
    question: "Wovor schützt die Notwehr im StGB?",
    answer: "Die Notwehr im StGB schützt vor Strafverfolgung."
  },
  {
    id: 31,
    question: "Wovor schützt die Notwehr im BGB?",
    answer: "Die Notwehr im BGB schützt vor Ansprüchen."
  },
  {
    id: 32,
    question: "Was bedeuten die Begriffe erforderlich, gegenwärtig und rechtswidrig bei der Notwehr?",
    answer: "Erforderlich: Wahl des mildesten Mittels.\nGegenwärtig: unmittelbar bevorstehend, andauernd oder noch nicht beendet.\nRechtswidrig: Verstoß gegen geltendes Recht, kein Rechtfertigungsgrund."
  },
  {
    id: 33,
    question: "Was versteht man unter dem verteidigenden (defensiven) Notstand?",
    answer: "Von einer fremden Sache geht eine drohende Gefahr aus.\nIch beschädige oder zerstöre diese Sache, um die Gefahr abzuwenden.\nIch handle nicht widerrechtlich."
  },
  {
    id: 34,
    question: "Was ist der angreifende oder aggressive Notstand?",
    answer: "Es droht eine Gefahr.\nIch wirke auf die Sache eines anderen ein, um die Gefahr abzuwenden.\nDer Eigentümer darf die Einwirkung nicht verbieten.\nSchadenersatz ist möglich."
  },
  {
    id: 35,
    question: "Was besagt der rechtfertigende Notstand?",
    answer: "Wer in einer gegenwärtigen, nicht anders abwendbaren Gefahr eine Tat begeht, handelt nicht rechtswidrig.\nRechtsgüterabwägung beachten."
  },
  {
    id: 36,
    question: "Was versteht man unter der Selbsthilfe des Besitzers / Besitzdieners?",
    answer: "Besitzwehr und Besitzkehr."
  },
  {
    id: 37,
    question: "Welche Voraussetzungen müssen erfüllt sein für die (allgemeine) Selbsthilfe?",
    answer: "Jemand hat mir einen Anspruch verursacht.\nObrigkeitliche Hilfe ist nicht rechtzeitig zu erlangen.\nGefahr des Anspruchsverlustes ohne sofortiges Handeln."
  },
  {
    id: 38,
    question: "Welche Voraussetzungen müssen erfüllt sein für die vorläufige Festnahme gemäß §127 StPO?",
    answer: "Auf frischer Tat betroffen oder verfolgt.\nIdentität nicht feststellbar oder Fluchtverdacht."
  },
  {
    id: 39,
    question: "Was ist ein Gewerbe?",
    answer: "Eine nach außen gerichtete, selbstständige Tätigkeit mit dem Zweck der Gewinnerzielung."
  },
  {
    id: 40,
    question: "Was muss angezeigt werden?",
    answer: "Eröffnung des Gewerbes.\nZweigniederlassung.\nVerlegung des Betriebs.\nNamensänderung.\nAufgabe des Betriebs."
  },
  {
    id: 41,
    question: "Welche Rechte hat die Behörde bei einer Nachschau?",
    answer: "Besichtigung der Grundstücke und Geschäftsräume.\nEinsicht in Geschäftsunterlagen.\nAuskunftsrecht."
  },
  {
    id: 42,
    question: "Was besagt der §34a GewO?",
    answer: "Wer gewerbsmäßig Leben oder Eigentum fremder Personen bewachen will, bedarf der Erlaubnis der zuständigen Behörde."
  },
  {
    id: 43,
    question: "Was ist eine Bewachung im Sinne der Gewerbeordnung?",
    answer: "Eine aktive Obhutstätigkeit durch Personen von gewisser Dauer oder mittels wiederkehrender Kontrollen."
  },
  {
    id: 44,
    question: "Welche Anforderungen muss der Gewerbetreibende erfüllen?",
    answer: "Zuverlässigkeit.\nSachkundeprüfung.\nGeordnete Vermögensverhältnisse.\nHaftpflichtversicherung."
  },
  {
    id: 45,
    question: "Wer gilt als nicht zuverlässig?",
    answer: "Mitglied verbotener oder staatsgefährdender Organisationen.\nBestimmte Vorstrafen."
  },
  {
    id: 46,
    question: "Welche Anforderungen müssen Sicherheitsmitarbeiter erfüllen?",
    answer: "Mindestalter 18 Jahre.\nZuverlässigkeit.\nUnterrichtung gemäß §34a GewO.\nKörperliche und geistige Eignung."
  },
  {
    id: 47,
    question: "Was muss gemäß BewachV in der allgemeinen Dienstanweisung geregelt sein?",
    answer: "Keine hoheitlichen Rechte.\nWaffenregelung.\nWahrung von Betriebs- und Geschäftsgeheimnissen."
  },
  {
    id: 48,
    question: "Welche Angaben muss der Dienstausweis enthalten?",
    answer: "Name der Wachperson.\nName und Anschrift des Gewerbetreibenden.\nBewacherregister-ID.\nUnterschriften."
  },
  {
    id: 49,
    question: "Wer muss ein Kennschild tragen?",
    answer: "Citystreife.\nTürsteher.\nGroßveranstaltungen.\nAsylunterkünfte."
  },
  {
    id: 50,
    question: "Welche Angaben muss das Kennschild enthalten?",
    answer: "Name oder Dienstnummer der Wachperson.\nBezeichnung des Gewerbebetriebs."
  },
  {
    id: 51,
    question: "Wann müssen Sicherheitsmitarbeiter Dienstkleidung tragen?",
    answer: "Immer dann, wenn sie in Ausübung ihres Dienstes befriedetes Besitztum betreten."
  }
];
