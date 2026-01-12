const cards = [
  {
    "id": 1,
    "question": "Erkläre die Notwehr gem. § 32 StGB.",
    "answer": "Notwehr ist die Verteidigung, die erforderlich ist, um einen gegenwärtigen rechtswidrigen Angriff von sich oder einem anderen abzuwenden."
  },
  {
    "id": 2,
    "question": "Erkläre die Putativnotwehr!",
    "answer": "Die Putativnotwehr ist eine irrtümlich angenommene Notwehrlage."
  },
  {
    "id": 3,
    "question": "Welche Voraussetzungen müssen für die allgemeine Selbsthilfe gem. § 229 BGB erfüllt sein?",
    "answer": "1. Einklagbarer Rechtsanspruch, 2. Obrigkeitliche Hilfe nicht rechtzeitig zu erlangen, 3. Ohne sofortiges Eingreifen besteht die Gefahr, dass die Durchsetzung des Anspruchs wesentlich erschwert oder vereitelt wird."
  },
  {
    "id": 4,
    "question": "Nenne die Voraussetzungen der vorläufigen Festnahme!",
    "answer": "1. Auf frischer Tat betroffen oder verfolgt, 2. Fluchtverdacht oder Identität nicht feststellbar, 3. Strafmündig (mindestens 14 Jahre alt)."
  },
  {
    "id": 5,
    "question": "Nenne mir alle 8 Rechtfertigungsgründe!",
    "answer": "§ 32 StGB Notwehr, § 34 StGB rechtfertigender Notstand, § 127 Abs. 1 StPO vorläufige Festnahme, § 227 BGB Notwehr, § 228 BGB Notstand (Defensivnotstand), § 229 BGB Selbsthilfe, §§ 859/860 BGB Selbsthilfe des Besitzers/Besitzdieners, § 904 BGB Notstand (Aggressivnotstand)."
  },
  {
    "id": 6,
    "question": "Was darf man gem. des Verteidigungsnotstandes beziehungsweise Defensivnotstandes tun?",
    "answer": "Ich darf eine Sache beschädigen oder zerstören, um eine durch diese Sache drohende Gefahr abzuwenden."
  },
  {
    "id": 7,
    "question": "Erkläre mir den Unterschied zwischen Defensivnotstand und Aggressivnotstand!",
    "answer": "Der Defensivnotstand gestattet die Beschädigung oder Zerstörung einer Sache, um eine durch sie drohende Gefahr abzuwenden. Der Aggressivnotstand gestattet den Eingriff in das Rechtsgut Eigentum eines unbeteiligten Dritten, um eine gegenwärtige Gefahr abzuwenden."
  },
  {
    "id": 8,
    "question": "Darfst du dich mit der Notwehr gegen den gegenwärtigen Angriff eines Tieres verteidigen?",
    "answer": "Nein, denn die Notwehr ist bestimmt, um sich gegen gegenwärtige und rechtswidrige Angriffe anderer Menschen zu erwehren."
  },
  {
    "id": 9,
    "question": "Darfst du dich gegen den gegenwärtigen Angriff eines auf dich gehetzten Hundes mittels Notwehr erwehren?",
    "answer": "Ja. Wenn ein Hund absichtlich von einem Menschen aufgehetzt wird, ist er als Waffe oder gefährliches Werkzeug des Menschen anzusehen."
  },
  {
    "id": 10,
    "question": "Wann ist ein Angriff gegenwärtig?",
    "answer": "Wenn der Angriff unmittelbar bevorsteht oder bereits begonnen hat und noch nicht beendet ist."
  },
  {
    "id": 11,
    "question": "Wann ist ein Angriff rechtswidrig?",
    "answer": "Grundsätzlich ist jeder Angriff rechtswidrig, es sei denn, der Angreifer hat einen Rechtfertigungsgrund."
  },
  {
    "id": 12,
    "question": "Bist du als Sicherheitsmitarbeiter immer dazu verpflichtet, einen Täter nach einer Straftat vorläufig festzunehmen?",
    "answer": "Nein, denn ich muss mich als Sicherheitsmitarbeiter nicht in erhebliche eigene Gefahr begeben."
  },
  {
    "id": 13,
    "question": "Wie lautet das Verteidigungsmittel gegen eine gegenwärtige Besitzstörung?",
    "answer": "Besitzwehr im Rahmen der Selbsthilfe des Besitzers."
  },
  {
    "id": 14,
    "question": "Wie lautet das Verteidigungsmittel gegen einen Besitzentzug?",
    "answer": "Besitzkehr im Rahmen der Selbsthilfe des Besitzers."
  },
  {
    "id": 15,
    "question": "Was besagt die Selbsthilfe des Besitzers?",
    "answer": "Der Besitzer darf sich gegen verbotene Eigenmacht mit Gewalt erwehren."
  },
  {
    "id": 16,
    "question": "Was besagt die Selbsthilfe des Besitzdieners?",
    "answer": "Der Besitzdiener darf sich im Auftrag des Besitzers bei verbotener Eigenmacht mit Gewalt erwehren."
  },
  {
    "id": 17,
    "question": "Was sind Jedermannsrechte oder Ausnahmerechte?",
    "answer": "Rechte, die allen Menschen in der Bundesrepublik Deutschland in Ausnahmefällen zur Verfügung stehen, um das eigene Recht durchzusetzen, wenn andere Abhilfe nicht möglich ist."
  },
  {
    "id": 18,
    "question": "Was bedeutet geboten im Sinne der Notwehr?",
    "answer": "Gebotenheit bezeichnet die rechtlichen und sittlichen, also sozial erträglichen Grenzen der Notwehr."
  },
  {
    "id": 19,
    "question": "Was bedeutet Verteidigung im Sinne der Notwehr?",
    "answer": "Die Handlung im Rahmen der Notwehr muss mit dem Willen zur Abwehr erfolgen und nicht aus Rache oder dergleichen stattfinden."
  },
  {
    "id": 20,
    "question": "Was bedeutet erforderlich im Sinne der Notwehr?",
    "answer": "Die Handlung muss objektiv geeignet sein, den Angriff zu beenden oder abzuschwächen und das mildeste unter allen wirksamen Mitteln darstellen."
  },
  {
    "id": 21,
    "question": "Wann ist eine Nothilfehandlung zulässig?",
    "answer": "Bei der Nothilfe muss der Angegriffene klar zu erkennen geben, dass die Nothilfe erwünscht und erforderlich ist."
  },
  {
    "id": 22,
    "question": "Darfst du ein 12-jähriges Kind nach einem Ladendiebstahl gem. § 127 Abs. 1 StPO vorläufig festnehmen?",
    "answer": "Nein. Das Kind ist gemäß § 19 StGB schuldunfähig und kann wegen begangener Straftaten nicht bestraft werden."
  },
  {
    "id": 23,
    "question": "Welche Rechtsgüter sind notwehrfähig?",
    "answer": "Notwehrfähig ist jedes sogenannte Individualrechtsgut."
  },
  {
    "id": 24,
    "question": "Was musst du beachten, wenn du einen Täter vorläufig festnimmst?",
    "answer": "Eine vorläufige Festnahme nach § 127 Abs. 1 StPO ist nur zulässig, wenn der Täter auf frischer Tat betroffen oder verfolgt wird, Fluchtgefahr besteht oder seine Identität nicht feststellbar ist."
  },
  {
    "id": 25,
    "question": "Darfst du einen Kunden mit Hausverbot gewaltsam des Hausrechtsbereiches verweisen?",
    "answer": "Ja. Du darfst den Kunden notfalls mit angemessener Gewalt vor die Tür begleiten."
  },
  {
    "id": 26,
    "question": "Für wen gelten die Jedermannsrechte in der Bundesrepublik Deutschland?",
    "answer": "Für alle Menschen uneingeschränkt gleich."
  },
  {
    "id": 27,
    "question": "Gibt es Spezialgesetze für das private Sicherheitsgewerbe?",
    "answer": "Nein, nur die Ausnahmerechte und die vertraglich übertragenen Selbsthilferechte."
  },
  {
    "id": 28,
    "question": "Dürfen Sicherheitsmitarbeiter von Bürgern vorläufig festgenommen werden?",
    "answer": "Ja, wenn alle Voraussetzungen für eine vorläufige Festnahme gegeben sind."
  },
  {
    "id": 29,
    "question": "In welchen gesetzlichen Grundlagen sind die Rechtfertigungsgründe aufgeführt?",
    "answer": "StPO, StGB, BGB, OWiG."
  },
  {
    "id": 30,
    "question": "Wann spricht man von einem Notwehrexzess?",
    "answer": "Wenn der Täter die Grenzen der Notwehr aus Verwirrung, Furcht oder Schrecken überschritten hat und ohne Schuld handelt."
  },
  {
    "id": 31,
    "question": "Auf welcher Rechtsgrundlage kannst du in das Eigentum eines anderen einwirken, ohne dass es dir verwehrt werden kann?",
    "answer": "Der Notstand (Aggressivnotstand) nach § 904 BGB."
  },
  {
    "id": 32,
    "question": "Musst du nach dem Aggressivnotstand und Defensivnotstand Schadenersatz leisten?",
    "answer": "Beim Defensivnotstand nur bei unverhältnismäßigem Schaden oder Eigenverschulden, beim Aggressivnotstand immer."
  },
  {
    "id": 33,
    "question": "Was ist der Unterschied zwischen einer drohenden und einer gegenwärtigen Gefahr?",
    "answer": "Der Unterschied liegt im Zeitfaktor. Bei einer gegenwärtigen Gefahr entsteht ohne Eingreifen in kürzester Zeit ein Schaden."
  },
  {
    "id": 34,
    "question": "Was musst du bei einer Handlung im Rahmen des rechtfertigenden Notstandes nach § 34 StGB beachten?",
    "answer": "Du darfst ein Rechtsgut verletzen, um ein höherwertiges Rechtsgut zu schützen. Es muss eine gegenwärtige und nicht anders abwendbare Gefahr bestehen."
  },
  {
    "id": 35,
    "question": "Was ist der Unterschied zwischen Rechtfertigungsgründen und Entschuldigungsgründen?",
    "answer": "Rechtfertigungsgründe rechtfertigen das Handeln, Entschuldigungsgründe entschuldigen das Handeln."
  },
  {
    "id": 36,
    "question": "Was ist der Unterschied zwischen Notwehr und Notstand?",
    "answer": "Notwehr: Angriff durch einen Menschen. Notstand: Gefahr durch Sachen, Tiere oder Menschen."
  },
  {
    "id": 37,
    "question": "In welchen gesetzlichen Grundlagen ist das Notwehrrecht aufgeführt?",
    "answer": "§ 32 StGB, § 15 OWiG, § 227 BGB."
  },
  {
    "id": 38,
    "question": "Welche Rechte hat die Polizei und welche Rechte haben Sicherheitsmitarbeiter?",
    "answer": "Polizei: Durchsuchen, Sicherstellen/Beschlagnahmen, Verhören. Sicherheitsmitarbeiter: Nachschau, Aufbewahren, Befragen."
  },
  {
    "id": 39,
    "question": "Wo sind Sicherheitsmitarbeiter tätig?",
    "answer": "Überwiegend im privaten Hausrechtsbereich, in Einzelfällen auch im öffentlichen Bereich."
  },
  {
    "id": 40,
    "question": "Was ist Hausrecht?",
    "answer": "Die Befugnis zu entscheiden, wer Gebäude und Grundstücke betreten, dort verweilen oder verlassen muss."
  },
  {
    "id": 41,
    "question": "Wer hat das Hausrecht?",
    "answer": "Der rechtmäßige Besitzer der Immobilie, kann vertraglich an Sicherheitsmitarbeiter übertragen werden."
  },
  {
    "id": 42,
    "question": "Was ist das Grundgesetz?",
    "answer": "Das Grundgesetz gilt als Verfassung der Bundesrepublik Deutschland."
  },
  {
    "id": 43,
    "question": "Was besagt die Ewigkeitsklausel?",
    "answer": "Änderungen von Art. 1 und Art. 20 GG sowie der Mitbestimmung der Länder bei der Gesetzgebung sind nicht möglich."
  },
  {
    "id": 44,
    "question": "Was ist Recht?",
    "answer": "Die Gesamtheit aller geltenden Rechtsvorschriften, die für einen bestimmten Personenkreis oder ein Gebiet gelten und Werte sowie Normen festlegen."
  },
  {
    "id": 45,
    "question": "Was sind Rechtsnormen?",
    "answer": "Vom Staat aufgestellte Regelungen wie Gesetze, Verordnungen und Satzungen."
  },
  {
    "id": 46,
    "question": "Was ist die horizontale Gewaltenteilung?",
    "answer": "Legislative: Gesetzgebung, Judikative: Rechtsprechung, Exekutive: Ausführung der Gesetze."
  },
  {
    "id": 47,
    "question": "Warum gibt es die Gewaltenteilung?",
    "answer": "Zur Verhinderung von Machtmissbrauch und gegenseitiger Kontrolle der Gewalten."
  },
  {
    "id": 48,
    "question": "Was bedeutet Föderalismus?",
    "answer": "Machtverteilung zwischen Bund und Ländern mit eigenen Kompetenzen."
  },
  {
    "id": 49,
    "question": "Wie lauten die Verfassungsprinzipien der Bundesrepublik Deutschland?",
    "answer": "Bundesstaat, Republik, Demokratie, Sozialstaat und Rechtsstaat."
  },
  {
    "id": 50,
    "question": "Wozu dienen die Grundrechte?",
    "answer": "Als Abwehrrechte der Bürger gegenüber dem Staat und zum Schutz vor rechtswidrigen Eingriffen."
  },
  {
    "id": 51,
    "question": "Was ist das Bundesstaatsprinzip?",
    "answer": "Die Aufteilung der Staatsgewalt zwischen Bund und Ländern."
  },
  {
    "id": 52,
    "question": "Was versteht man unter Republik?",
    "answer": "Das Staatsoberhaupt wird nicht durch Geburt, sondern durch Wahlen bestimmt."
  },
  {
    "id": 53,
    "question": "Was bedeutet Demokratie?",
    "answer": "Alle Staatsgewalt geht vom Volke aus."
  },
  {
    "id": 54,
    "question": "Was bedeutet, dass Deutschland ein Sozialstaat ist?",
    "answer": "Der Staat sorgt für soziale Gerechtigkeit, Sicherheit und Chancengleichheit."
  },
  {
    "id": 55,
    "question": "Was ist das Rechtsstaatsprinzip?",
    "answer": "Staatliches Handeln ist an Recht und Gesetz gebunden."
  },
  {
    "id": 56,
    "question": "Wer hat das Sicherheitsmonopol?",
    "answer": "Niemand, es gibt kein Sicherheitsmonopol."
  },
  {
    "id": 57,
    "question": "Was ist unter Gewaltmonopol zu verstehen und wer hat es?",
    "answer": "Das Vorrecht zur Anwendung von Gewalt liegt grundsätzlich beim Staat."
  },
  {
    "id": 58,
    "question": "Was sind hoheitliche Befugnisse?",
    "answer": "Befugnisse, die grundsätzlich nur staatlichen Organen zustehen."
  },
  {
    "id": 59,
    "question": "Wofür steht die Abkürzung P-P-P?",
    "answer": "Public Private Partnership."
  },
  {
    "id": 60,
    "question": "Was bedeutet das Opportunitätsprinzip?",
    "answer": "Die Staatsanwaltschaft kann bei geringer Schuld oder fehlendem öffentlichen Interesse von der Verfolgung absehen."
  },
  {
    "id": 61,
    "question": "In welche Rechtsgebiete teilt sich das Rechtssystem?",
    "answer": "Öffentliches Recht und Privates Recht."
  },
  {
    "id": 62,
    "question": "Woraus besteht ein Staat?",
    "answer": "Staatsgebiet, Staatsvolk, Staatsgewalt."
  },
  {
    "id": 63,
    "question": "Für wen gelten die Menschenrechte?",
    "answer": "Für alle Menschen auf deutschem Staatsgebiet."
  },
  {
    "id": 64,
    "question": "Für wen gelten die Bürgerrechte?",
    "answer": "Für Menschen mit deutscher Staatsangehörigkeit."
  },
  {
    "id": 65,
    "question": "Nenne Menschenrechte!",
    "answer": "Menschenwürde, Recht auf Leben und körperliche Unversehrtheit, Gleichheitsgrundsatz, Meinungsfreiheit, Unverletzlichkeit der Wohnung, Eigentum."
  },
  {
    "id": 66,
    "question": "Nenne Bürgerrechte!",
    "answer": "Versammlungsfreiheit, Vereinigungsfreiheit, Freizügigkeit, Berufsfreiheit."
  },
  {
    "id": 67,
    "question": "Nenne die wichtigsten Rechtsgüter!",
    "answer": "Leben, Leib, Freiheit, Eigentum, Ehre."
  },
  {
    "id": 68,
    "question": "Was ist befriedetes oder eingefriedetes Besitztum?",
    "answer": "Ein Grundstück, das durch Zäune, Mauern oder andere Barrieren klar abgegrenzt ist."
  },
  {
    "id": 69,
    "question": "Welche Voraussetzungen müssen erfüllt werden, um ein Bewachungsgewerbe zu eröffnen?",
    "answer": "Zuverlässigkeit, geordnete Vermögensverhältnisse, Sachkundeprüfung nach § 34a GewO, Betriebshaftpflichtversicherung, Auskunft aus dem Gewerbezentralregister."
  },
  {
    "id": 70,
    "question": "Wer muss einen Dienstausweis mit sich führen?",
    "answer": "Jeder Beschäftigte mit Bewachungsaufgaben während seines Dienstes."
  },
  {
    "id": 71,
    "question": "Was muss der Wachperson vor Beginn der Tätigkeit ausgehändigt werden?",
    "answer": "Die Dienstanweisung gegen Empfangsbestätigung und der Dienstausweis."
  },
  {
    "id": 72,
    "question": "Nenne die Mindestvoraussetzungen, um im Sicherheitsgewerbe beschäftigt zu werden!",
    "answer": "Unterrichtung oder Sachkunde nach § 34a GewO, mindestens 18 Jahre alt, Zuverlässigkeit, persönliche Eignung."
  },
  {
    "id": 73,
    "question": "Was muss auf dem Dienstausweis stehen?",
    "answer": "Name und Anschrift des Gewerbetreibenden, Name des Sicherheitsmitarbeiters, Bewacherregister-ID, Unterschriften."
  },
  {
    "id": 74,
    "question": "Wie muss die Arbeitskleidung beschaffen sein?",
    "answer": "Sie darf nicht mit behördlichen Uniformen oder Abzeichen verwechselt werden können."
  },
  {
    "id": 75,
    "question": "Wann und wo muss eine Dienstkleidung getragen werden?",
    "answer": "Immer bei Ausübung des Dienstes im befriedeten Besitztum."
  },
  {
    "id": 76,
    "question": "Was muss in einer Dienstanweisung stehen?",
    "answer": "Keine hoheitlichen Rechte, Waffen nur mit Zustimmung, Meldepflicht bei Waffengebrauch."
  },
  {
    "id": 77,
    "question": "Was regelt § 34a der Gewerbeordnung?",
    "answer": "Die Zugangsvoraussetzungen zum Bewachungsgewerbe."
  },
  {
    "id": 78,
    "question": "In welchen Rechtsnormen steht, wer bewachen darf?",
    "answer": "In der Bewachungsverordnung und der Gewerbeordnung."
  },
  {
    "id": 79,
    "question": "Wer ist von der Sachkundeprüfung befreit?",
    "answer": "Bestimmte Berufsgruppen wie Polizei, Bundeswehr, anerkannte Berufsabschlüsse sowie Bestandsschutz."
  },
  {
    "id": 80,
    "question": "Für welche Tätigkeiten benötigst du eine Sachkundeprüfung gem. § 34a GewO?",
    "answer": "Ladendetektiv, Türsteher, Citystreife, leitende Funktionen bei Großveranstaltungen oder Flüchtlingsunterkünften."
  },
  {
    "id": 81,
    "question": "Was sind die Mindestdeckungssummen einer Haftpflichtversicherung?",
    "answer": "Personenschäden 1.000.000 €, Sachschäden 250.000 €, Abhandenkommen bewachter Sachen 15.000 €, Vermögensschäden 12.500 €."
  },
  {
    "id": 82,
    "question": "Weshalb wird die Sachkundeprüfung gefordert?",
    "answer": "Weil es sich um konfliktträchtige Tätigkeitsfelder handelt."
  },
  {
    "id": 83,
    "question": "Was ist die Anzeigepflicht nach § 14 GewO?",
    "answer": "Meldung von Aufnahme, Änderung oder Aufgabe eines Gewerbes."
  },
  {
    "id": 84,
    "question": "Welche Pflichten hat ein Gewerbetreibender gegenüber Wachpersonen?",
    "answer": "Anmeldung im Bewacherregister, Prüfung der Unterlagen, Dienstanweisung, Verschwiegenheit, Einarbeitung."
  },
  {
    "id": 85,
    "question": "Was heißt Bewachung?",
    "answer": "Menschliche Tätigkeit, aktive Obhut und wiederkehrende Kontrolle."
  },
  {
    "id": 86,
    "question": "Was ist das Bewacherregister?",
    "answer": "Eine behördliche Datenbank zur Überprüfung von Zuverlässigkeit und fachlicher Eignung."
  },
  {
    "id": 87,
    "question": "Was ist eine Bewacherregisteridentifikationsnummer?",
    "answer": "Eine eindeutige Nummer zur Zuordnung einer Wachperson im Bewacherregister."
  },
  {
    "id": 88,
    "question": "Was bedeutet Auskunft und Nachschau nach § 29 GewO?",
    "answer": "Auskunftspflicht gegenüber Behörden und Nachschau während der Geschäftszeiten."
  },
  {
    "id": 89,
    "question": "Welche Pflichten hat der Gewerbetreibende beim Waffengebrauch?",
    "answer": "Sichere Aufbewahrung und unverzügliche Meldung an Behörden und Polizei."
  },
  {
    "id": 90,
    "question": "Welches Ereignis führte 1983 zur Einführung des Datenschutzes?",
    "answer": "Das Volkszählungsurteil."
  },
  {
    "id": 91,
    "question": "Welches Grundrecht wurde 1983 eingeführt?",
    "answer": "Das Recht auf informationelle Selbstbestimmung."
  },
  {
    "id": 92,
    "question": "Aus welchen Grundrechten wird die informationelle Selbstbestimmung abgeleitet?",
    "answer": "Aus Artikel 1 GG und Artikel 2 GG."
  },
  {
    "id": 93,
    "question": "Welche Rechtsnormen sind für den Datenschutz wichtig?",
    "answer": "DSGVO, BDSG, LDSG und das Grundgesetz."
  },
  {
    "id": 94,
    "question": "Wann muss ein Datenschutzbeauftragter bestellt werden?",
    "answer": "Bei mindestens 20 Personen mit automatisierter Datenverarbeitung oder besonderen Verarbeitungen."
  },
  {
    "id": 95,
    "question": "Was darf ein Datenschutzbeauftragter nicht mit personenbezogenen Daten tun?",
    "answer": "Nicht eigenwillig verarbeiten, weitergeben, löschen oder ändern."
  },
  {
    "id": 96,
    "question": "Wo darf keine Videoüberwachung erfolgen?",
    "answer": "In höchstpersönlichen Lebensbereichen wie Toiletten, Umkleiden oder Pausenräumen."
  },
  {
    "id": 97,
    "question": "Was sind personenbezogene Daten?",
    "answer": "Einzelangaben über sachliche oder persönliche Verhältnisse einer natürlichen Person."
  },
  {
    "id": 98,
    "question": "Was ist Datenverarbeitung?",
    "answer": "Der Umgang mit personenbezogenen Daten wie Erheben, Speichern oder Löschen."
  },
  {
    "id": 99,
    "question": "Was ist beim Datenschutz zu beachten?",
    "answer": "Datenminimierung, Integrität, Vertraulichkeit, Zweckbindung, Transparenz."
  },
  {
    "id": 100,
    "question": "Was ist bei der Bearbeitung fremder Daten zu beachten?",
    "answer": "Nicht an Unbefugte weitergeben und Datenschutzgrundsätze einhalten."
  },
   {
    "id": 101,
    "question": "Wo sind Sicherheitsmitarbeiter tätig?",
    "answer": "Überwiegend im privaten Hausrechtsbereich. In Einzelfällen auch im öffentlichen Bereich."
  },
  {
    "id": 102,
    "question": "Was ist Hausrecht?",
    "answer": "Befugnis zu entscheiden, wer Gebäude und Grundstücke betreten darf, in diesen verweilen darf oder diese verlassen muss."
  },
  {
    "id": 103,
    "question": "Wer hat das Hausrecht?",
    "answer": "Der rechtmäßige Besitzer der Immobilie, kann an Sicherheitsmitarbeiter vertraglich übertragen werden."
  },
  {
    "id": 104,
    "question": "Was ist das Grundgesetz?",
    "answer": "Das Grundgesetz gilt als Verfassung der Bundesrepublik Deutschland."
  },
  {
    "id": 105,
    "question": "Was besagt die Ewigkeitsklausel?",
    "answer": "Änderungen von Art. 1 und Art. 20 sowie der Mitbestimmung der Länder bei der Gesetzgebung sind nach Art. 79 Abs. 3 GG nicht möglich."
  },
  {
    "id": 106,
    "question": "Was ist Recht?",
    "answer": "1. Die Gesamtheit aller geltenden Rechtsvorschriften. 2. Recht gilt immer für einen bestimmten Personenkreis oder ein Gebiet. 3. Recht drückt aus, welche Werte und Normen zu beachten sind."
  },
  {
    "id": 107,
    "question": "Was sind Rechtsnormen?",
    "answer": "Vom Staat aufgestellte Regelungen wie Gesetze, Verordnungen und Satzungen."
  },
  {
    "id": 108,
    "question": "Was ist die horizontale Gewaltenteilung?",
    "answer": "Legislative: Gesetzgebung. Judikative: Rechtsprechung. Exekutive: Ausführung der Gesetze."
  },
  {
    "id": 109,
    "question": "Warum gibt es die Gewaltenteilung?",
    "answer": "Zur Verhinderung von Machtmissbrauch und zur gegenseitigen Kontrolle der Gewalten."
  },
  {
    "id": 110,
    "question": "Was bedeutet Föderalismus?",
    "answer": "Machtverteilung zwischen Bund und Ländern mit eigenen Kompetenzen."
  },
  {
    "id": 111,
    "question": "Wie lauten die Verfassungsprinzipien der Bundesrepublik Deutschland?",
    "answer": "Bundesstaat, Republik, Demokratie, Sozialstaat und Rechtsstaat."
  },
  {
    "id": 112,
    "question": "Wozu dienen die Grundrechte?",
    "answer": "In erster Linie als Abwehrrechte der Bürger gegenüber dem Staat und zum Schutz vor rechtswidrigen Eingriffen."
  },
  {
    "id": 113,
    "question": "Was ist das Bundesstaatsprinzip?",
    "answer": "Die Staatsgewalt ist zwischen Bund und Ländern aufgeteilt."
  },
  {
    "id": 114,
    "question": "Was versteht man unter Republik?",
    "answer": "Das Staatsoberhaupt wird nicht durch Geburt oder Erbe, sondern durch Wahlen bestimmt."
  },
  {
    "id": 115,
    "question": "Was bedeutet Demokratie?",
    "answer": "Jegliche Staatsgewalt geht vom Volke aus."
  },
  {
    "id": 116,
    "question": "Was bedeutet, dass Deutschland ein Sozialstaat ist?",
    "answer": "Der Staat ist verpflichtet, für soziale Gerechtigkeit, Sicherheit und Chancengleichheit zu sorgen."
  },
  {
    "id": 117,
    "question": "Was ist das Rechtsstaatsprinzip?",
    "answer": "Staatliches Handeln ist an Recht und Gesetz gebunden."
  },
  {
    "id": 118,
    "question": "Wer hat das Sicherheitsmonopol?",
    "answer": "Niemand, es gibt kein Sicherheitsmonopol."
  },
  {
    "id": 119,
    "question": "Was ist unter Gewaltmonopol zu verstehen und wer hat es?",
    "answer": "Das Vorrecht zur Anwendung von Gewalt liegt grundsätzlich beim Staat."
  },
  {
    "id": 120,
    "question": "Was sind hoheitliche Befugnisse?",
    "answer": "Befugnisse, die grundsätzlich nur staatlichen Organen zustehen, können aber übertragen werden."
  },
  {
    "id": 121,
    "question": "Wofür steht die Abkürzung P-P-P?",
    "answer": "Public Private Partnership – Zusammenarbeit öffentlicher Einrichtungen mit privaten Dienstleistern."
  },
  {
    "id": 122,
    "question": "Was bedeutet das Opportunitätsprinzip?",
    "answer": "Die Staatsanwaltschaft kann bei geringer Schuld oder fehlendem öffentlichen Interesse von der Verfolgung absehen."
  },
  {
    "id": 123,
    "question": "In welche Rechtsgebiete teilt sich das Rechtssystem?",
    "answer": "Öffentliches Recht und Privates Recht."
  },
  {
    "id": 124,
    "question": "Woraus besteht ein Staat?",
    "answer": "Staatsgebiet, Staatsvolk und Staatsgewalt."
  },
  {
    "id": 125,
    "question": "Für wen gelten die Menschenrechte?",
    "answer": "Für alle Menschen auf deutschem Staatsgebiet."
  },
  {
    "id": 126,
    "question": "Für wen gelten die Bürgerrechte?",
    "answer": "Für Menschen mit deutscher Staatsangehörigkeit."
  },
  {
    "id": 127,
    "question": "Nenne Menschenrechte!",
    "answer": "Menschenwürde, Recht auf Leben und körperliche Unversehrtheit, Gleichheit, Meinungsfreiheit, Unverletzlichkeit der Wohnung, Eigentum."
  },
  {
    "id": 128,
    "question": "Nenne Bürgerrechte!",
    "answer": "Versammlungsfreiheit, Vereinigungsfreiheit, Freizügigkeit, Berufsfreiheit."
  },
  {
    "id": 129,
    "question": "Nenne die wichtigsten Rechtsgüter!",
    "answer": "Leben, Leib, Freiheit, Eigentum, Ehre."
  },
  {
    "id": 130,
    "question": "Was ist befriedetes oder eingefriedetes Besitztum?",
    "answer": "Ein Grundstück, das durch Zäune, Mauern oder andere Barrieren klar abgegrenzt ist."
  },
  {
    "id": 131,
    "question": "Welche Voraussetzungen müssen erfüllt werden, um ein Bewachungsgewerbe zu eröffnen?",
    "answer": "Zuverlässigkeit, geordnete Vermögensverhältnisse, Sachkundeprüfung nach § 34a GewO, Betriebshaftpflichtversicherung, Auskunft aus dem Gewerbezentralregister."
  },
  {
    "id": 132,
    "question": "Wer muss einen Dienstausweis mit sich führen?",
    "answer": "Jeder Beschäftigte mit Bewachungsaufgaben während seines Dienstes."
  },
  {
    "id": 133,
    "question": "Was muss der Wachperson vor Beginn der Tätigkeit ausgehändigt werden?",
    "answer": "Die Dienstanweisung gegen Empfangsbestätigung und der Dienstausweis."
  },
  {
    "id": 134,
    "question": "Nenne die Mindestvoraussetzungen, um im Sicherheitsgewerbe beschäftigt zu werden!",
    "answer": "Unterrichtung oder Sachkunde nach § 34a GewO, mindestens 18 Jahre alt, Zuverlässigkeit, persönliche Eignung."
  },
  {
    "id": 135,
    "question": "Was muss auf dem Dienstausweis stehen?",
    "answer": "Name und Anschrift des Gewerbetreibenden, Name des Sicherheitsmitarbeiters, Bewacherregister-ID, Unterschriften."
  },
  {
    "id": 136,
    "question": "Wie muss die Arbeitskleidung beschaffen sein?",
    "answer": "Sie darf nicht mit behördlichen Uniformen oder Abzeichen verwechselt werden können."
  },
  {
    "id": 137,
    "question": "Wann und wo muss eine Dienstkleidung getragen werden?",
    "answer": "Immer bei Ausübung des Dienstes im befriedeten Besitztum."
  },
  {
    "id": 138,
    "question": "Was muss in einer Dienstanweisung stehen?",
    "answer": "Keine hoheitlichen Rechte, Waffen nur mit Zustimmung, Meldepflicht bei Waffengebrauch."
  },
  {
    "id": 139,
    "question": "Was regelt § 34a der Gewerbeordnung?",
    "answer": "Die Zugangsvoraussetzungen zum Bewachungsgewerbe."
  },
  {
    "id": 140,
    "question": "In welchen Rechtsnormen steht, wer bewachen darf?",
    "answer": "In der Bewachungsverordnung und der Gewerbeordnung."
  },
  {
    "id": 141,
    "question": "Wer ist von der Sachkundeprüfung befreit?",
    "answer": "Polizei, Bundeswehr, anerkannte Berufsabschlüsse sowie Bestandsschutz."
  },
  {
    "id": 142,
    "question": "Für welche Tätigkeiten benötigst du eine Sachkundeprüfung gem. § 34a GewO?",
    "answer": "Ladendetektiv, Türsteher, Citystreife, leitende Funktionen bei Großveranstaltungen oder Flüchtlingsunterkünften."
  },
  {
    "id": 143,
    "question": "Was sind die Mindestdeckungssummen einer Haftpflichtversicherung?",
    "answer": "Personenschäden 1.000.000 €, Sachschäden 250.000 €, Abhandenkommen 15.000 €, Vermögensschäden 12.500 €."
  },
  {
    "id": 144,
    "question": "Weshalb wird die Sachkundeprüfung gefordert?",
    "answer": "Weil es sich um konfliktträchtige Tätigkeitsfelder handelt."
  },
  {
    "id": 145,
    "question": "Was ist die Anzeigepflicht nach § 14 GewO?",
    "answer": "Meldung der Aufnahme, Änderung oder Aufgabe eines Gewerbes."
  },
  {
    "id": 146,
    "question": "Welche Pflichten hat ein Gewerbetreibender gegenüber Wachpersonen?",
    "answer": "Anmeldung im Bewacherregister, Prüfung der Unterlagen, Dienstanweisung, Verschwiegenheit, Einarbeitung."
  },
  {
    "id": 147,
    "question": "Was heißt Bewachung?",
    "answer": "Menschliche Tätigkeit, aktive Obhutstätigkeit und wiederkehrende Kontrolle."
  },
  {
    "id": 148,
    "question": "Was ist das Bewacherregister?",
    "answer": "Eine behördliche Datenbank zur Überprüfung von Zuverlässigkeit und fachlicher Eignung."
  },
  {
    "id": 149,
    "question": "Was ist eine Bewacherregisteridentifikationsnummer?",
    "answer": "Eine eindeutige Nummer zur Zuordnung einer Wachperson im Bewacherregister."
  },
  {
    "id": 150,
    "question": "Was bedeutet Auskunft und Nachschau nach § 29 GewO?",
    "answer": "Auskunftspflicht gegenüber Behörden und Nachschau während der Geschäftszeiten."
  },
  {
    "id": 151,
    "question": "Welche Pflichten hat der Gewerbetreibende beim Waffengebrauch?",
    "answer": "Sichere Aufbewahrung und unverzügliche Meldung an Behörden und Polizei."
  },
  {
    "id": 152,
    "question": "Welches Ereignis führte 1983 zur Einführung des Datenschutzes?",
    "answer": "Das Volkszählungsurteil."
  },
  {
    "id": 153,
    "question": "Welches Grundrecht wurde 1983 eingeführt?",
    "answer": "Das Recht auf informationelle Selbstbestimmung."
  },
  {
    "id": 154,
    "question": "Aus welchen Grundrechten wird die informationelle Selbstbestimmung abgeleitet?",
    "answer": "Aus Artikel 1 GG und Artikel 2 GG."
  },
  {
    "id": 155,
    "question": "Welche Rechtsnormen sind für den Datenschutz wichtig?",
    "answer": "DSGVO, BDSG, LDSG sowie Artikel 1, 2 und 10 GG."
  },
  {
    "id": 156,
    "question": "Wann muss ein Datenschutzbeauftragter bestellt werden?",
    "answer": "Bei mindestens 20 Personen mit automatisierter Datenverarbeitung oder besonderen Verarbeitungen."
  },
  {
    "id": 157,
    "question": "Was darf ein Datenschutzbeauftragter nicht mit personenbezogenen Daten tun?",
    "answer": "Nicht eigenwillig verarbeiten, weitergeben, löschen oder ändern."
  },
  {
    "id": 158,
    "question": "Wo darf keine Videoüberwachung erfolgen?",
    "answer": "In höchstpersönlichen Lebensbereichen wie Umkleiden, Toiletten oder Pausenräumen."
  },
  {
    "id": 159,
    "question": "Was sind personenbezogene Daten?",
    "answer": "Einzelangaben über sachliche oder persönliche Verhältnisse einer natürlichen Person."
  },
  {
    "id": 160,
    "question": "Was ist Datenverarbeitung?",
    "answer": "Der Umgang mit personenbezogenen Daten wie Erheben, Speichern, Verändern oder Löschen."
  },
  {
    "id": 161,
    "question": "Was ist zum Datenschutz zu beachten?",
    "answer": "Datenminimierung, Datensparsamkeit, Integrität, Vertraulichkeit, Zweckbindung und Transparenz."
  },
  {
    "id": 162,
    "question": "Was ist bei der Bearbeitung fremder Daten zu beachten?",
    "answer": "Nicht an Unbefugte weitergeben und Datenschutzgrundsätze einhalten."
  },
  {
    "id": 163,
    "question": "Was versteht man unter dem Recht auf informationelle Selbstbestimmung?",
    "answer": "Das Recht selbst zu entscheiden, welche personenbezogenen Daten preisgegeben werden."
  },
  {
    "id": 164,
    "question": "Wann und wo ist Videoüberwachung rechtlich erlaubt?",
    "answer": "In öffentlich zugänglichen Räumen zur Aufgabenerfüllung, Wahrung des Hausrechts oder aus berechtigtem Interesse."
  },
  {
    "id": 165,
    "question": "Was ist eine nicht-öffentliche Stelle?",
    "answer": "Natürliche oder juristische Personen des privaten Rechts."
  },
  {
    "id": 166,
    "question": "Was ist eine öffentliche Stelle?",
    "answer": "Behörden des öffentlichen Rechts."
  },
  {
    "id": 167,
    "question": "Wer ist eine natürliche Person?",
    "answer": "Jeder Mensch als Träger von Rechten und Pflichten."
  },
  {
    "id": 168,
    "question": "Was ist eine juristische Person?",
    "answer": "Zum Beispiel Unternehmen, Vereine oder Kapitalgesellschaften."
  },
  {
    "id": 169,
    "question": "Wie wird ein Verstoß gegen das BDSG geahndet?",
    "answer": "Als Ordnungswidrigkeit oder Straftat."
  },
  {
    "id": 170,
    "question": "Welche Rechte haben Betroffene gemäß DSGVO?",
    "answer": "Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch."
  },
  {
    "id": 171,
    "question": "Was sind wichtige Begriffsbestimmungen im Datenschutz?",
    "answer": "Erheben, Verarbeiten, Speichern, Verändern, Übermitteln, Sperren, Löschen."
  },
  {
    "id": 172,
    "question": "Welchen Zweck erfüllen Datenschutzvorschriften?",
    "answer": "Schutz des Einzelnen vor Missbrauch personenbezogener Daten."
  },
  {
    "id": 173,
    "question": "Was ist eine Datenverarbeitungsanlage?",
    "answer": "Ein System zur automatisierten Verarbeitung von Daten."
  },
  {
    "id": 174,
    "question": "Was sind besondere Kategorien personenbezogener Daten?",
    "answer": "Gesundheitsdaten, religiöse Überzeugungen, politische Meinungen, biometrische und genetische Daten."
  },
  {
    "id": 175,
    "question": "Wie hoch sind die Bußgelder bei DSGVO-Verstößen?",
    "answer": "Bis zu 20 Millionen Euro oder 4 Prozent des weltweiten Jahresumsatzes."
  },
  {
    "id": 176,
    "question": "Was ist das Privatrecht?",
    "answer": "Regelt Rechtsbeziehungen der Bürger untereinander."
  },
  {
    "id": 177,
    "question": "Was bedeutet verbotene Eigenmacht?",
    "answer": "Widerrechtliche Besitzstörung oder Besitzentzug ohne Willen des Besitzers."
  },
  {
    "id": 178,
    "question": "Nenne die Rechtfertigungsgründe aus dem BGB!",
    "answer": "Notwehr, verteidigender Notstand, Selbsthilfe, Selbsthilfe des Besitzers/Besitzdieners, aggressiver Notstand."
  },
  {
    "id": 179,
    "question": "Welcher Rechtfertigungsgrund darf auch Tage später angewendet werden?",
    "answer": "§ 229 BGB Selbsthilfe."
  },
  {
    "id": 180,
    "question": "Was versteht man unter Besitzwehr?",
    "answer": "Die notfalls gewaltsame Verteidigung des Besitzes."
  },
  {
    "id": 181,
    "question": "Was versteht man unter Besitzkehr?",
    "answer": "Die notfalls gewaltsame Wiedererlangung des Besitzes auf frischer Tat."
  },
  {
    "id": 182,
    "question": "Was regelt das Schikaneverbot?",
    "answer": "Ein Recht darf nicht gezielt genutzt werden, um anderen zu schaden."
  },
  {
    "id": 183,
    "question": "Was ist ein Eigentümer?",
    "answer": "Der Eigentümer hat die rechtliche Verfügungsgewalt über eine Sache."
  },
  {
    "id": 184,
    "question": "Was ist ein Besitzer?",
    "answer": "Der Besitzer hat die tatsächliche Verfügungsgewalt über eine Sache."
  },
  {
    "id": 185,
    "question": "Was ist ein Besitzdiener?",
    "answer": "Übt tatsächliche Gewalt über eine Sache im Auftrag des Besitzers aus."
  },
  {
    "id": 186,
    "question": "Was sind die Befugnisse eines Eigentümers?",
    "answer": "Mit der Sache nach Belieben verfahren, soweit keine Rechte Dritter entgegenstehen."
  },
  {
    "id": 187,
    "question": "Was sind die Befugnisse eines Besitzers?",
    "answer": "Befugnisse des Besitzschutzes, gebunden an die Vorgaben des Eigentümers."
  },
  {
    "id": 188,
    "question": "Was sind die Befugnisse eines Besitzdieners?",
    "answer": "Befugnisse werden vertraglich übertragen, Weisungsgebundenheit."
  },
  {
    "id": 189,
    "question": "Was regelt § 823 BGB?",
    "answer": "Schadenersatzpflicht bei vorsätzlicher oder fahrlässiger Rechtsgutverletzung."
  },
  {
    "id": 190,
    "question": "Ab welchem Lebensjahr ist man schadenersatzpflichtig?",
    "answer": "Ab dem vollendeten 7. Lebensjahr."
  },
  {
    "id": 191,
    "question": "Was fällt unter den Begriff der Sache?",
    "answer": "Körperliche Gegenstände im Sinne des § 90 BGB."
  },
  {
    "id": 192,
    "question": "Sind Tiere Sachen?",
    "answer": "Nein, Tiere sind keine Sachen, es gelten jedoch die Vorschriften für Sachen."
  },
  {
    "id": 193,
    "question": "Was ist die Gefährdungshaftung?",
    "answer": "Allein die Schaffung einer Gefahr ist haftungsbegründend."
  },
  {
    "id": 194,
    "question": "Was ist eine Verschuldenshaftung?",
    "answer": "Haftung bei schuldhafter und widerrechtlicher Schädigung."
  },
  {
    "id": 195,
    "question": "Was bedeutet Vorsatz?",
    "answer": "Handeln mit Wissen und Wollen."
  },
  {
    "id": 196,
    "question": "Was bedeutet Fahrlässigkeit?",
    "answer": "Die im Verkehr gebotene Sorgfalt außer Acht lassen."
  },
  {
    "id": 197,
    "question": "Ab wann beginnt die Rechtsfähigkeit eines Menschen?",
    "answer": "Mit Vollendung der Geburt."
  },
  {
    "id": 198,
    "question": "Wie lautet die Rechtsfolge der Notwehr aus dem BGB?",
    "answer": "Schutz vor Schadenersatz- und Schmerzensgeldansprüchen."
  },
  {
    "id": 199,
    "question": "Was ist fehlerhafter Besitz?",
    "answer": "Wenn der Besitz unrechtmäßig erlangt wurde."
  },
  {
    "id": 200,
    "question": "Was sind die Pflichten des Finders einer Sache?",
    "answer": "Anzeige, Aufbewahrung und Abgabe an Berechtigte oder Behörden."
  },
  {
    "id": 201,
    "question": "Was ist ein Finderlohn?",
    "answer": "Eine gesetzlich geregelte Belohnung für den Finder einer verlorenen Sache."
  },
  {
    "id": 202,
    "question": "Wie hoch ist der Finderlohn?",
    "answer": "5 % vom Wert der Sache bis 500 € und 3 % vom Mehrwert."
  },
  {
    "id": 203,
    "question": "Wann darf der Finder eine Sache behalten?",
    "answer": "Wenn sich innerhalb von sechs Monaten nach Anzeige kein Eigentümer meldet."
  },
  {
    "id": 204,
    "question": "Was ist Besitz?",
    "answer": "Die tatsächliche Sachherrschaft über eine Sache."
  },
  {
    "id": 205,
    "question": "Was ist Eigentum?",
    "answer": "Die rechtliche Herrschaft über eine Sache."
  },
  {
    "id": 206,
    "question": "Was ist eine Willenserklärung?",
    "answer": "Eine Äußerung, die auf den Eintritt einer Rechtsfolge gerichtet ist."
  },
  {
    "id": 207,
    "question": "Was ist ein Vertrag?",
    "answer": "Eine Einigung aus mindestens zwei übereinstimmenden Willenserklärungen."
  },
  {
    "id": 208,
    "question": "Was sind die Bestandteile eines Vertrages?",
    "answer": "Angebot und Annahme."
  },
  {
    "id": 209,
    "question": "Was bedeutet Geschäftsfähigkeit?",
    "answer": "Die Fähigkeit, Rechtsgeschäfte wirksam vorzunehmen."
  },
  {
    "id": 210,
    "question": "Wer ist geschäftsunfähig?",
    "answer": "Kinder unter 7 Jahren sowie Personen mit dauerhafter geistiger Störung."
  },
  {
    "id": 211,
    "question": "Wer ist beschränkt geschäftsfähig?",
    "answer": "Minderjährige zwischen 7 und 18 Jahren."
  },
  {
    "id": 212,
    "question": "Was ist ein Taschengeldparagraph?",
    "answer": "§ 110 BGB – Verträge sind wirksam, wenn sie mit eigenen Mitteln bezahlt werden."
  },
  {
    "id": 213,
    "question": "Was ist ein Kaufvertrag?",
    "answer": "Ein Vertrag, bei dem sich Verkäufer und Käufer über Ware und Preis einigen."
  },
  {
    "id": 214,
    "question": "Was ist ein Dienstvertrag?",
    "answer": "Ein Vertrag über die Erbringung einer Dienstleistung ohne Erfolgsgarantie."
  },
  {
    "id": 215,
    "question": "Was ist ein Werkvertrag?",
    "answer": "Ein Vertrag über die Herstellung eines bestimmten Erfolges."
  },
  {
    "id": 216,
    "question": "Was ist ein Mietvertrag?",
    "answer": "Ein Vertrag über die entgeltliche Überlassung einer Sache auf Zeit."
  },
  {
    "id": 217,
    "question": "Was ist eine unerlaubte Handlung?",
    "answer": "Eine rechtswidrige und schuldhafte Verletzung eines Rechtsgutes."
  },
  {
    "id": 218,
    "question": "Welche Rechtsgüter sind durch § 823 BGB geschützt?",
    "answer": "Leben, Körper, Gesundheit, Freiheit, Eigentum und sonstige Rechte."
  },
  {
    "id": 219,
    "question": "Was ist eine Ordnungswidrigkeit?",
    "answer": "Eine geringfügige Rechtsverletzung, die mit einer Geldbuße geahndet wird."
  },
  {
    "id": 220,
    "question": "Was ist eine Straftat?",
    "answer": "Eine rechtswidrige und schuldhafte Tat, die mit Strafe bedroht ist."
  },
  {
    "id": 221,
    "question": "Was ist Vorsatz?",
    "answer": "Das Wissen und Wollen der Tatbestandsverwirklichung."
  },
  {
    "id": 222,
    "question": "Was ist Fahrlässigkeit?",
    "answer": "Außerachtlassen der im Verkehr erforderlichen Sorgfalt."
  },
  {
    "id": 223,
    "question": "Ab welchem Alter ist man strafmündig?",
    "answer": "Ab dem vollendeten 14. Lebensjahr."
  },
  {
    "id": 224,
    "question": "Was ist Schuld?",
    "answer": "Vorwerfbarkeit einer rechtswidrigen Tat."
  },
  {
    "id": 225,
    "question": "Was ist eine Ordnungswidrigkeit nach dem OWiG?",
    "answer": "Eine rechtswidrige und vorwerfbare Handlung, die mit Geldbuße bedroht ist."
  },
  {
    "id": 226,
    "question": "Was ist der Unterschied zwischen Verbrechen und Vergehen?",
    "answer": "Verbrechen: Mindeststrafe ein Jahr Freiheitsstrafe. Vergehen: geringere Strafandrohung."
  },
  {
    "id": 227,
    "question": "Was ist Versuch?",
    "answer": "Wenn der Täter nach seiner Vorstellung zur Tat ansetzt, diese aber nicht vollendet."
  },
  {
    "id": 228,
    "question": "Ist der Versuch strafbar?",
    "answer": "Ja, wenn das Gesetz es ausdrücklich bestimmt."
  },
  {
    "id": 229,
    "question": "Was ist Täterschaft?",
    "answer": "Eigenhändige Verwirklichung eines Straftatbestandes."
  },
  {
    "id": 230,
    "question": "Was ist Teilnahme?",
    "answer": "Anstiftung oder Beihilfe zu einer Straftat."
  },
  {
    "id": 231,
    "question": "Was ist Anstiftung?",
    "answer": "Das vorsätzliche Bestimmen eines anderen zur Tat."
  },
  {
    "id": 232,
    "question": "Was ist Beihilfe?",
    "answer": "Das vorsätzliche Hilfeleisten zu einer Straftat."
  },
  {
    "id": 233,
    "question": "Was ist Notwehr?",
    "answer": "Die erforderliche Verteidigung gegen einen gegenwärtigen rechtswidrigen Angriff."
  },
  {
    "id": 234,
    "question": "Was ist rechtfertigender Notstand?",
    "answer": "Die Abwendung einer gegenwärtigen Gefahr zur Rettung höherwertiger Rechtsgüter."
  },
  {
    "id": 235,
    "question": "Was ist entschuldigender Notstand?",
    "answer": "Eine Tat, die zwar rechtswidrig ist, dem Täter aber nicht vorwerfbar ist."
  },
  {
    "id": 236,
    "question": "Was ist ein Verbotsirrtum?",
    "answer": "Der Täter weiß nicht, dass sein Handeln verboten ist."
  },
  {
    "id": 237,
    "question": "Was ist ein Tatbestandsirrtum?",
    "answer": "Der Täter irrt über tatsächliche Umstände des Tatbestandes."
  },
  {
    "id": 238,
    "question": "Was ist ein Erlaubnistatbestandsirrtum?",
    "answer": "Irrtum über das Vorliegen eines Rechtfertigungsgrundes."
  },
  {
    "id": 239,
    "question": "Was ist eine Garantenstellung?",
    "answer": "Rechtliche Pflicht, einen Erfolg abzuwenden."
  },
  {
    "id": 240,
    "question": "Was ist Unterlassen?",
    "answer": "Nichtvornahme einer gebotenen Handlung."
  },
  {
    "id": 241,
    "question": "Wann ist Unterlassen strafbar?",
    "answer": "Wenn eine Garantenstellung besteht."
  },
  {
    "id": 242,
    "question": "Was ist Fahrlässigkeitstat?",
    "answer": "Eine Tat, die durch sorgfaltswidriges Verhalten begangen wird."
  },
  {
    "id": 243,
    "question": "Was ist ein Delikt?",
    "answer": "Eine strafbare Handlung."
  },
  {
    "id": 244,
    "question": "Was ist ein Offizialdelikt?",
    "answer": "Eine Straftat, die von Amts wegen verfolgt wird."
  },
  {
    "id": 245,
    "question": "Was ist ein Antragsdelikt?",
    "answer": "Eine Straftat, die nur auf Strafantrag verfolgt wird."
  },
  {
    "id": 246,
    "question": "Was ist eine Anzeige?",
    "answer": "Mitteilung eines Sachverhaltes an die Strafverfolgungsbehörden."
  },
  {
    "id": 247,
    "question": "Was ist ein Strafantrag?",
    "answer": "Der ausdrückliche Wunsch des Verletzten nach Strafverfolgung."
  },
  {
    "id": 248,
    "question": "Was ist eine Ordnungsverfügung?",
    "answer": "Eine behördliche Maßnahme zur Gefahrenabwehr."
  },
  {
    "id": 249,
    "question": "Was ist Gefahrenabwehr?",
    "answer": "Maßnahmen zur Verhinderung von Gefahren für die öffentliche Sicherheit."
  },
  {
    "id": 250,
    "question": "Was ist öffentliche Sicherheit?",
    "answer": "Unverletzlichkeit der Rechtsordnung, Individualrechte und staatlicher Einrichtungen."
  },
  {
    "id": 251,
    "question": "Was ist öffentliche Ordnung?",
    "answer": "Ungeschriebene Regeln für das Verhalten in der Öffentlichkeit."
  },
  {
    "id": 252,
    "question": "Was ist der Unterschied zwischen öffentlicher Sicherheit und Ordnung?",
    "answer": "Sicherheit betrifft Rechtsgüter, Ordnung gesellschaftliche Normen."
  },
  {
    "id": 253,
    "question": "Was ist eine Gefahr?",
    "answer": "Eine Sachlage, bei der ein Schaden wahrscheinlich eintritt."
  },
  {
    "id": 254,
    "question": "Was ist eine gegenwärtige Gefahr?",
    "answer": "Ein Schaden tritt ohne sofortiges Eingreifen mit hoher Wahrscheinlichkeit ein."
  },
  {
    "id": 255,
    "question": "Was ist eine drohende Gefahr?",
    "answer": "Ein Schaden kann in absehbarer Zeit eintreten."
  },
  {
    "id": 256,
    "question": "Was ist eine abstrakte Gefahr?",
    "answer": "Eine generell gefährliche Situation ohne konkreten Schadenseintritt."
  },
  {
    "id": 257,
    "question": "Was ist eine konkrete Gefahr?",
    "answer": "Eine Situation, in der ein Schaden im Einzelfall wahrscheinlich ist."
  },
  {
    "id": 258,
    "question": "Was ist eine Störung?",
    "answer": "Eine bereits eingetretene Beeinträchtigung der öffentlichen Sicherheit."
  },
  {
    "id": 259,
    "question": "Was ist ein Störer?",
    "answer": "Die Person, die eine Gefahr verursacht oder verantwortet."
  },
  {
    "id": 260,
    "question": "Was ist ein Zustandsstörer?",
    "answer": "Verantwortlich aufgrund der Herrschaft über eine Sache."
  },
  {
    "id": 261,
    "question": "Was ist ein Verhaltensstörer?",
    "answer": "Verantwortlich durch eigenes Verhalten."
  },
  {
    "id": 262,
    "question": "Was ist Verhältnismäßigkeit?",
    "answer": "Geeignetheit, Erforderlichkeit und Angemessenheit einer Maßnahme."
  },
  {
    "id": 263,
    "question": "Was ist Ermessen?",
    "answer": "Der Entscheidungsspielraum der Behörde."
  },
  {
    "id": 264,
    "question": "Was ist eine Maßnahme?",
    "answer": "Ein staatliches Handeln zur Gefahrenabwehr."
  },
  {
    "id": 265,
    "question": "Was ist ein Platzverweis?",
    "answer": "Die Anordnung, einen bestimmten Ort zu verlassen."
  },
  {
    "id": 266,
    "question": "Was ist Gewahrsam?",
    "answer": "Freiheitsentziehung zur Gefahrenabwehr."
  },
  {
    "id": 267,
    "question": "Was ist unmittelbarer Zwang?",
    "answer": "Einwirkung auf Personen oder Sachen durch körperliche Gewalt oder Hilfsmittel."
  },
  {
    "id": 268,
    "question": "Was sind Hilfsmittel der körperlichen Gewalt?",
    "answer": "Handfesseln, Reizstoffe, Schlagstock."
  },
  {
    "id": 269,
    "question": "Was ist Schusswaffengebrauch?",
    "answer": "Der Einsatz von Schusswaffen durch staatliche Organe."
  },
  {
    "id": 270,
    "question": "Was ist eine Identitätsfeststellung?",
    "answer": "Feststellung der Personalien einer Person."
  },
  {
    "id": 271,
    "question": "Was ist eine Durchsuchung?",
    "answer": "Das gezielte Suchen nach Personen oder Sachen."
  },
  {
    "id": 272,
    "question": "Was ist eine Sicherstellung?",
    "answer": "Inverwahrungnahme einer Sache zur Gefahrenabwehr."
  },
  {
    "id": 273,
    "question": "Was ist eine Beschlagnahme?",
    "answer": "Sicherstellung zur Strafverfolgung."
  },
  {
    "id": 274,
    "question": "Was ist ein Zeugnisverweigerungsrecht?",
    "answer": "Das Recht, eine Aussage zu verweigern."
  },
  {
    "id": 275,
    "question": "Was ist Aussagefreiheit?",
    "answer": "Niemand ist verpflichtet, sich selbst zu belasten."
  },
  {
    "id": 276,
    "question": "Was ist ein Richtervorbehalt?",
    "answer": "Bestimmte Maßnahmen dürfen nur durch einen Richter angeordnet werden."
  },
  {
    "id": 277,
    "question": "Was ist eine Freiheitsstrafe?",
    "answer": "Entzug der persönlichen Freiheit durch Haft."
  },
  {
    "id": 278,
    "question": "Was ist eine Geldstrafe?",
    "answer": "Strafe in Form von Geldzahlungen."
  },
  {
    "id": 279,
    "question": "Was ist ein Strafbefehl?",
    "answer": "Schriftliches Verfahren ohne Hauptverhandlung."
  },
  {
    "id": 280,
    "question": "Was ist Bewährung?",
    "answer": "Aussetzung der Freiheitsstrafe unter Auflagen."
  },
  {
    "id": 281,
    "question": "Was ist ein Führungszeugnis?",
    "answer": "Auszug aus dem Bundeszentralregister."
  },
  {
    "id": 282,
    "question": "Was ist das Bundeszentralregister?",
    "answer": "Register über strafrechtliche Verurteilungen."
  },
  {
    "id": 283,
    "question": "Was ist das Erziehungsregister?",
    "answer": "Register über Maßnahmen nach dem Jugendstrafrecht."
  },
  {
    "id": 284,
    "question": "Was ist Jugendstrafrecht?",
    "answer": "Sonderstrafrecht für Jugendliche und Heranwachsende."
  },
  {
    "id": 285,
    "question": "Wann gilt Jugendstrafrecht?",
    "answer": "Für Jugendliche von 14 bis 17 Jahren und Heranwachsende bis 20 Jahre."
  },
  {
    "id": 286,
    "question": "Was ist ein Heranwachsender?",
    "answer": "Eine Person zwischen 18 und 20 Jahren."
  },
  {
    "id": 287,
    "question": "Was ist Erziehungsmaßnahme?",
    "answer": "Pädagogische Maßnahme zur Erziehung des Täters."
  },
  {
    "id": 288,
    "question": "Was ist Zuchtmittel?",
    "answer": "Verwarnung, Auflagen oder Jugendarrest."
  },
  {
    "id": 289,
    "question": "Was ist Jugendarrest?",
    "answer": "Kurzzeitiger Freiheitsentzug für Jugendliche."
  },
  {
    "id": 290,
    "question": "Was ist Sicherungsverwahrung?",
    "answer": "Unterbringung besonders gefährlicher Straftäter nach der Haft."
  },
  {
    "id": 291,
    "question": "Was ist Maßregel der Besserung und Sicherung?",
    "answer": "Maßnahmen zur Gefahrenabwehr bei Straftätern."
  },
  {
    "id": 292,
    "question": "Was ist Strafzumessung?",
    "answer": "Festlegung der konkreten Strafe."
  },
  {
    "id": 293,
    "question": "Was ist ein Rücktritt vom Versuch?",
    "answer": "Freiwilliges Aufgeben der weiteren Tatausführung."
  },
  {
    "id": 294,
    "question": "Was ist ein Unterlassungsdelikt?",
    "answer": "Eine Straftat durch Nichtstun."
  },
  {
    "id": 295,
    "question": "Was ist ein Begehungsdelikt?",
    "answer": "Eine Straftat durch aktives Handeln."
  },
  {
    "id": 296,
    "question": "Was ist ein Dauerdelikt?",
    "answer": "Eine Straftat mit fortdauerndem rechtswidrigem Zustand."
  },
  {
    "id": 297,
    "question": "Was ist ein Zustandsdelikt?",
    "answer": "Eine Straftat, die mit Eintritt des Erfolges beendet ist."
  },
  {
    "id": 298,
    "question": "Was ist ein Fahrlässigkeitsdelikt?",
    "answer": "Eine Straftat durch fahrlässiges Verhalten."
  },
  {
    "id": 299,
    "question": "Was ist ein Erfolgsdelikt?",
    "answer": "Eine Straftat, bei der ein bestimmter Erfolg eintreten muss."
  },
  {
    "id": 300,
    "question": "Was ist ein Tätigkeitsdelikt?",
    "answer": "Eine Straftat, bei der allein das Handeln strafbar ist."
  },
];


