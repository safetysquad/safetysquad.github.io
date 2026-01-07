const cards = [
  {
    "id": 1,
    "question": "Was ist Recht?",
    "answer": "Recht ist die Gesamtheit aller Rechtstexte (Gesetze, Verordnungen, …), die das Leben der Menschen in der Gesellschaft untereinander regeln."
  },
  {
    "id": 2,
    "question": "Wie setzt sich ein Staat zusammen?",
    "answer": "Staatsgebiet + Staatsgewalt + Staatsvolk"
  },
  {
    "id": 3,
    "question": "Wie unterteilt sich das deutsche Recht?",
    "answer": "Öffentliches Recht, Privates Recht / Zivilrecht"
  },
  {
    "id": 4,
    "question": "Was regelt das öffentliche Recht?",
    "answer": "Es regelt die Rechtsbeziehung zwischen Staat und Bürger. Im öffentlichen Recht ist der Bürger dem Staat untergeordnet (Subordinationsprinzip: Über-/Unterordnungsprinzip). Beispiele: StGB, StPO, GewO."
  },
  {
    "id": 5,
    "question": "Was regelt das Private Recht?",
    "answer": "Es regelt die Rechtsbeziehung der Bürger (Firmen, Vereine, …) untereinander. Im privaten Recht sind die Bürger einander gleichgestellt (Koordinationsprinzip: Gleichstellungsprinzip). Beispiele: BGB, Mietrecht, Arbeitsrecht."
  },
  {
    "id": 6,
    "question": "Welche Verkehrsflächen kennen Sie? Wie sind dort die Zuständigkeiten verteilt (Polizei / Sicherheitsdienst)?",
    "answer": "Öffentlicher Bereich (Polizei), Privater Bereich (Sicherheitsdienst), Hausrechtsbereiche mit tatsächlichem öffentlichem Verkehr, z.B. Bahnhof, Flughafen (Polizei und Sicherheitsdienst)."
  },
  {
    "id": 7,
    "question": "Was bedeutet P.P.P?",
    "answer": "Public – Private – Partnership: Kooperationsvereinbarung zwischen privaten Sicherheitsdienst und der Polizei."
  },
  {
    "id": 8,
    "question": "Was bedeutet Gewaltmonopol?",
    "answer": "Grundsätzlich hat nur der Staat das Recht, zur Erfüllung seiner Aufgaben Gewalt anzuwenden. Bürger dürfen dies nur unter engen gesetzlichen Voraussetzungen (z.B. Notwehr oder übertragene Selbsthilferechte)."
  },
  {
    "id": 9,
    "question": "Was sind Grundrechte und wozu dienen sie?",
    "answer": "Grundrechte sind Abwehrrechte des Bürgers gegen den Staat (Schutz vor Willkür des Staates). Sie setzen dem Staat selbst Grenzen und dienen auch dem Schutz vor rechtswidrigen Eingriffen anderer Bürger."
  },
  {
    "id": 10,
    "question": "Worin unterteilen sich die Grundrechte?",
    "answer": "Menschenrechte und Bürgerrechte"
  },
  {
    "id": 11,
    "question": "Für wen gelten die Menschenrechte?",
    "answer": "Sie gelten für alle Menschen, die sich in Deutschland oder auf deutschem Hoheitsgebiet (z.B. deutsche Konsulate oder Botschaften) aufhalten."
  },
  {
    "id": 12,
    "question": "Für wen gelten die Bürgerrechte?",
    "answer": "Sie gelten für alle deutschen Staatsbürger, die sich in Deutschland oder auf deutschem Hoheitsgebiet aufhalten."
  },
  {
    "id": 13,
    "question": "Welche (der für uns relevanten) Grundrechte sind Bürgerrechte?",
    "answer": "Art. 8 GG Versammlungsfreiheit und Art. 12 GG Freiheit der Berufswahl"
  },
  {
    "id": 14,
    "question": "Nennen Sie 5 Menschenrechte?",
    "answer": "Art. 1 GG Menschenwürde, Art. 2 GG Persönlichkeitsrechte, Art. 3 GG Gleichheitsgrundsatz, Art. 5 GG Meinungs- und Informationsfreiheit, Art. 10 GG Brief-, Post- und Fernmeldegeheimnis"
  },
  {
    "id": 15,
    "question": "Welche Grundrechte dürfen NICHT eingeschränkt werden / in welche Grundrechte darf NICHT eingegriffen werden?",
    "answer": "Art. 1 GG Menschenwürde und Art. 3 GG Gleichheitsgrundsatz"
  },
  {
    "id": 16,
    "question": "Was versteht man unter Föderalismus?",
    "answer": "Machtaufteilung zwischen Bund und Ländern"
  },
  {
    "id": 17,
    "question": "Was sind die Staatsprinzipien?",
    "answer": "Republik, Bundesrepublik, Rechtsstaat, Sozialstaat, Demokratie, horizontale Gewaltenteilung, Widerstandsrecht"
  },
  {
    "id": 18,
    "question": "Was versteht man unter horizontaler Gewaltenteilung?",
    "answer": "Legislative: gesetzgebende Gewalt, Judikative: rechtsprechende Gewalt, Exekutive: ausführende / vollziehende Gewalt"
  },
  {
    "id": 19,
    "question": "Was versteht man unter Ewigkeitsklausel / verfassungsrechtliches Minimum?",
    "answer": "Art. 1 GG (Menschenwürde) + Art. 20 GG (Staatsprinzipien) dürfen nicht abgeändert werden (Art. 79 GG)"
  },
  {
    "id": 20,
    "question": "Welche Rechtfertigungsgründe kennen Sie (nach Rechtsgebieten unterteilt)?",
    "answer": "BGB: §227 Notwehr, §228 Verteidigender Notstand, §229 Selbsthilfe, §859/860 Selbsthilfe des Besitzers/Besitzdieners, §904 Angreifender Notstand; StGB: §32 Notwehr, §34 Rechtfertigender Notstand; StPO: §127 Vorläufige Festnahme"
  },
  {
    "id": 21,
    "question": "Was versteht man unter Beleihung?",
    "answer": "Übertragung hoheitlicher Befugnisse an Private unter staatlicher Aufsicht (z.B. Flughafen)"
  },
  {
    "id": 22,
    "question": "Auf welcher rechtlichen Grundlage arbeiten SMA?",
    "answer": "Sicherheitsmitarbeiter arbeiten auf Grundlage privatrechtlicher Verträge. Ihnen stehen nur die Rechte zu, die Jedermann zustehen, und die übertragenen Selbsthilferechte."
  },
  {
    "id": 23,
    "question": "Wer entscheidet über die Zulässigkeit und Dauer der Freiheitsentziehung?",
    "answer": "Der Richter"
  },
  {
    "id": 24,
    "question": "Nenne 2 übertragbare Selbsthilferechte?",
    "answer": "§229 BGB Selbsthilfe, §859/860 BGB Selbsthilfe des Besitzers/Besitzdieners"
  },
  {
    "id": 25,
    "question": "Nenne die 5 wichtigsten Rechtsgüter?",
    "answer": "Leben, Gesundheit, Freiheit, Ehre, Eigentum (Eselsbrücke: F.E.L.G.E.)"
  },
  {
    "id": 26,
    "question": "Was ist das Grundgesetz?",
    "answer": "Die Verfassung Deutschlands"
  },
  {
    "id": 27,
    "question": "Sinn der Gewaltenteilung?",
    "answer": "Gegenseitige Kontrolle und Vermeidung der Bildung z.B. eines Polizeistaats"
  },
  {
    "id": 28,
    "question": "Was ist Notwehr?",
    "answer": "Verteidigung, die erforderlich ist, um einen gegenwärtigen, rechtswidrigen Angriff von sich oder einem anderen abzuwenden"
  },
  {
    "id": 29,
    "question": "Was bedeutet in diesem Zusammenhang 'Nothilfe'?",
    "answer": "Notwehr für einen anderen"
  },
  {
    "id": 30,
    "question": "Wovor schützt die Notwehr in StGB?",
    "answer": "Schutz vor Strafverfolgung"
  },
  {
    "id": 31,
    "question": "Wovor schützt die Notwehr im BGB?",
    "answer": "Schutz vor Ansprüchen"
  },
  {
    "id": 32,
    "question": "Was bedeuten die Begriffe 'erforderlich', 'gegenwärtig' und 'rechtswidrig' bei der Notwehr?",
    "answer": "Erforderlich: Wahl des mildesten Mittels, Gegenwärtig: unmittelbar bevorstehend, andauernd, noch nicht beendet, Rechtswidrig: verstößt gegen geltendes Recht, kein Rechtfertigungsgrund vorhanden"
  },
  {
    "id": 33,
    "question": "Was versteht man unter dem verteidigenden (defensiven) Notstand?",
    "answer": "Von einer fremden Sache geht eine drohende Gefahr aus. Ich beschädige oder zerstöre diese Sache, um die Gefahr abzuwenden. Ich handle nicht widerrechtlich."
  },
  {
    "id": 34,
    "question": "Was ist der angreifende oder aggressive Notstand?",
    "answer": "Es droht Gefahr. Ich wirke auf die Sache eines anderen ein, um die Gefahr abzuwenden. Der Eigentümer darf die Einwirkung nicht verbieten, kann aber Schadenersatz verlangen."
  },
  {
    "id": 35,
    "question": "Was besagt der rechtfertigende Notstand?",
    "answer": "Wer in einer gegenwärtigen, nicht anders abwendbaren Gefahr eine Tat begeht, um die Gefahr von sich oder einem anderen abzuwenden, handelt nicht rechtswidrig. Rechtsgüterabwägung beachten!"
  },
  {
    "id": 36,
    "question": "Was versteht man unter der Selbsthilfe des Besitzers / Besitzdieners?",
    "answer": "Besitzwehr & Besitzkehr"
  },
  {
    "id": 37,
    "question": "Welche Voraussetzungen müssen erfüllt sein für die (allgemeine) Selbsthilfe?",
    "answer": "Jemand hat mir einen Anspruch verursacht, Obrigkeitliche Hilfe nicht rechtzeitig erreichbar, ohne sofortiges Handeln Gefahr, Sache wegnehmen, beschädigen oder Verpflichteten festnehmen"
  },
  {
    "id": 38,
    "question": "Welche Voraussetzungen müssen erfüllt sein für die vorläufige Festnahme gemäß §127 StPO?",
    "answer": "Auf frischer Tat betroffen oder verfolgt, Identität nicht feststellbar oder Fluchtverdacht"
  },
  {
    "id": 39,
    "question": "Was ist ein Gewerbe?",
    "answer": "Eine nach außen gerichtete, selbstständige Tätigkeit mit dem Zweck der Gewinnerzielung"
  },
  {
    "id": 40,
    "question": "Was muss angezeigt werden?",
    "answer": "Eröffnung des Gewerbes, Eröffnung einer Zweigniederlassung, Betriebsverlegung, geschäfts- oder unüblicher Gegenstandswechsel, Namensänderung, Aufgabe/Beendigung des Betriebs"
  },
  {
    "id": 41,
    "question": "Welche Rechte hat die Behörde bei einer Nachschau?",
    "answer": "Besichtigung der Grundstücke und Geschäftsräume zu üblichen Geschäftszeiten, Einsicht in Geschäftsunterlagen, unentgeltliche mündliche oder schriftliche Auskünfte"
  },
  {
    "id": 42,
    "question": "Was besagt der §34a GewO?",
    "answer": "Wer gewerbsmäßig Leben oder Eigentum fremder Personen bewachen will (Bewachungsgewerbe), bedarf der Erlaubnis der zuständigen Behörde"
  },
  {
    "id": 43,
    "question": "Was ist eine Bewachung im Sinne der Gewerbeordnung?",
    "answer": "Aktive Obhutstätigkeit durch Personen von gewisser Dauer oder mittels wiederkehrender Kontrollen. Menschliche Tätigkeit zum Schutz von Personen oder Eigentum."
  },
  {
    "id": 44,
    "question": "Welche Anforderungen muss der Gewerbetreibende erfüllen, um ein Sicherheitsgewerbe eröffnen zu dürfen?",
    "answer": "Erforderliche Zuverlässigkeit, geordnete Vermögensverhältnisse, Sachkundeprüfung gemäß §34a GewO, Haftpflichtversicherung"
  },
  {
    "id": 45,
    "question": "Wer gilt bezüglich der Zuverlässigkeit als nicht zuverlässig?",
    "answer": "Mitglied in verbotenen Vereinen/Parteien, Mitglied staatsgefährdender Vereinigung, Verurteilung zu bestimmten Geldstrafen oder Verbrechen (Fristen beachten)"
  },
  {
    "id": 46,
    "question": "Welche Anforderungen müssen Sicherheitsmitarbeiter erfüllen?",
    "answer": "18 Jahre, erforderliche Zuverlässigkeit, mind. 40-stündige IHK-Unterrichtung §34a GewO, körperliche und geistige Eignung"
  },
  {
    "id": 47,
    "question": "Was muss gemäß BewachV in der allgemeinen Dienstanweisung geregelt sein?",
    "answer": "Keine hoheitlichen Rechte, Waffenführung nur mit Genehmigung, Anzeige nach Gebrauch, Wahrung von Betriebs- und Geschäftsgeheimnissen"
  },
  {
    "id": 48,
    "question": "Welche Angaben muss der Dienstausweis enthalten?",
    "answer": "Name der Wachperson & Gewerbetreibender, Bewacherregister ID der Wachperson & Gewerbetreibender, Unterschriften"
  },
  {
    "id": 49,
    "question": "Wer muss ein Kennschild tragen?",
    "answer": "Mitarbeiter bei Kontrollgängen im öffentlichen Verkehrsraum, Türsteher, Mitarbeiter bei Bewachungen von Großveranstaltungen oder Asylunterkünften"
  },
  {
    "id": 50,
    "question": "Welche Angaben muss das Kennschild enthalten?",
    "answer": "Name/Dienstnummer der Wachperson, Bezeichnung des Gewerbebetriebs"
  },
  {
    "id": 51,
    "question": "Wann müssen Sicherheitsmitarbeiter gemäß BewachV Dienstkleidung tragen?",
    "answer": "Immer, wenn sie in Ausübung ihres Dienstes befriedetes Besitztum betreten"
  },
  {
    "id": 52,
    "question": "Was versteht man unter dem Recht auf informationelle Selbstbestimmung?",
    "answer": "Recht selbst zu entscheiden, welche Informationen man preisgibt; Recht zu erfahren, wer Daten erhebt oder speichert; Recht auf Löschung"
  },
  {
    "id": 53,
    "question": "Was sind personenbezogene Daten (Begriffsbestimmung + Beispiel)?",
    "answer": "Einzelangaben über persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren natürlichen Person. Beispiele: Name, Anschrift, Geburtsdatum"
  },
  {
    "id": 54,
    "question": "Was sind besondere personenbezogene Daten (nur Beispiel)?",
    "answer": "Krankendaten, Gewerkschaftszugehörigkeit"
  },
  {
    "id": 55,
    "question": "Welche Datenschutzgesetze gibt es in Deutschland?",
    "answer": "DSGVO, Bundesdatenschutzgesetz, Landesdatenschutzgesetz"
  },
  {
    "id": 56,
    "question": "Welche Pflichten hat der Unternehmer bzgl. der den Datenschutz betreffenden Sicherungsmaßnahmen?",
    "answer": "Sicherungsmaßnahmen dem Datenniveau anpassen, Sicherheitskonzept erstellen, Verstöße innerhalb von 72 Stunden melden"
  },
  {
    "id": 57,
    "question": "Welche Rechtsfolgen können bei Verstößen gegen das Datenschutzgesetz eintreten?",
    "answer": "Straftaten (Geld- oder Freiheitsstrafe), Ordnungswidrigkeiten (Geldbuße), Schadenersatz"
  },
  {
    "id": 58,
    "question": "Zu welchem Zweck dürfen öffentlich zugängliche Räume videoüberwacht werden?",
    "answer": "Aufgabenerfüllung öffentlicher Stellen, Wahrnehmung des Hausrechts, Wahrung berechtigter Interessen für konkret festgelegte Zwecke"
  },
  {
    "id": 59,
    "question": "Was muss dabei beachtet werden?",
    "answer": "Beobachtung und Verantwortlicher müssen erkennbar sein; Schutzwürdige Interessen der Betroffenen dürfen nicht überwiegen (z.B. Toilette, Umkleide)"
  },
  {
    "id": 60,
    "question": "Wann ist ein Datenschutzbeauftragter zu bestellen?",
    "answer": "Bei nicht öffentlichen Stellen mit mind. 20 Personen bei automatisierter Datenverarbeitung; oder unabhängig von Anzahl, wenn besonders sensible Daten verarbeitet werden"
  },
  {
    "id": 61,
    "question": "Welche Aufgaben hat der Datenschutzbeauftragte?",
    "answer": "Innerbetriebliche Organisation des Datenschutzes, Überwachung der Datenverarbeitung, Schulung und Sensibilisierung der Mitarbeiter, Vorabkontrolle sensibler Daten"
  },
  {
    "id": 62, 
    "question": "Welche Maßnahmen können bzgl. Des Datenschutzes zum Einsatz kommen?",
    "answer": "Zutrittskontrolle, Zugangskontrolle, Zugriffskontrolle, Trennungs-/ Zweckbindungskontrolle, Pseudonymisierung, Weitergabekontrolle, Eingabekontrolle, Verfügbarkeitskontrolle" 
  },
  {
  id: 63,
  question: "Was ist eine unerlaubte Handlung?",
  answer: "Eine unerlaubte Handlung ist eine widerrechtliche (rechtswidrige) und schuldhafte Verletzung eines Rechtsguts."
},
{
  id: 64,
  question: "Wie unterscheiden sich Eigentum und Besitz?",
  answer: "Der Eigentümer hat die rechtliche Verfügungsgewalt über eine Sache.\nDer Besitzer hat die tatsächliche Verfügungsgewalt über eine Sache."
},
{
  id: 65,
  question: "Was ist eine Sache?",
  answer: "Sachen sind körperliche Gegenstände, unabhängig davon, ob sie fest, flüssig oder gasförmig sind."
},
{
  id: 66,
  question: "Sind Tiere Sachen?",
  answer: "Tiere sind keine Sachen. Sie werden durch besondere Gesetze geschützt (Tierschutzgesetz). Auf Tiere sind jedoch die für Sachen geltenden Vorschriften entsprechend anzuwenden, soweit nichts anderes bestimmt ist."
},
{
  id: 67,
  question: "Wann ist man zum Schadenersatz verpflichtet?",
  answer: "Wer einem anderen vorsätzlich oder fahrlässig ein Rechtsgut verletzt, ist zum Schadenersatz verpflichtet."
},
{
  id: 68,
  question: "Welche Haftungsarten kennen wir?",
  answer: "Verschuldenshaftung\nGefährdungshaftung"
},
{
  id: 69,
  question: "Welche drei Pflichten gehören zum Fundrecht?",
  answer: "Anzeigepflicht\nVerwahrungspflicht\nAblieferungspflicht\n(Wert der Sache ab 10 €)"
},
{
  id: 70,
  question: "Was ist ein Anspruch?",
  answer: "Ein Anspruch ist das Recht, von einem anderen ein Tun oder ein Unterlassen zu verlangen (z. B. das Recht auf Zahlung von Schadenersatz)."
},
{
  id: 71,
  question: "Was ist verbotene Eigenmacht?",
  answer: "Verbotene Eigenmacht liegt vor, wenn jemand den Besitz eines anderen widerrechtlich entzieht oder stört.\nBesitzentziehung / Besitzstörung"
},
{
  id: 72,
  question: "Was ist Selbsthilfe des Besitzers?",
  answer: "Selbsthilfe des Besitzers ist:\nBesitzkehr gegen eine Besitzentziehung\nBesitzwehr gegen eine Besitzstörung"
},

];
