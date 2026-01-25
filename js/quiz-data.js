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
        { id: "a", text: "Sie setzt eine mit Strafe bedrohte Handlung voraus, durch die der Vortäter Vorteile erhält oder noch erhalten wird, z. B. durch eine Unterschlagung" },
        { id: "b", text: "Sie liegt dann vor, wenn der Vortäter sich selbst begünstigt, also wenn er sein Diebesgut selbst versteckt" },
        { id: "c", text: "Sie ist vollendet, wenn der Täter dem Vortäter Hilfe geleistet hat, um die Vorteile der Tat zu sichern. Die Hilfeleistung muss nicht erfolgreich sein" }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 3,
      question: "Welche Aussage zu den echten Unterlassungsdelikten ist aus strafrechtlicher Sicht richtig?",
      answers: [
        { id: "a", text: "Der Täter bleibt untätig, obwohl er gesetzlich verpflichtet ist zu handeln" },
        { id: "b", text: "Der Gast G wird vom Hausrechtsinhaber H aufgefordert, seine Wohnung zu verlassen. G weigert sich jedoch, die Wohnung des H zu verlassen. G begeht damit ein echtes Unterlassungsdelikt gemäß § 123 StGB Hausfriedensbruch" },
        { id: "c", text: "Der Täter muss eine Garantenstellung haben" }
      ],
      correct: ["a", "b"],
      points: 2
    },
    {
      id: 4,
      question: "Die Brandstiftung gemäß § 306 StGB beinhaltet Tatobjekte, deren Inbrandsetzung besonders hohe Schäden verursacht. Welche Tatobjekte zählen dazu?",
      answers: [
        { id: "a", text: "Fahrräder und Kinderwagen" },
        { id: "b", text: "Einkaufstaschen" },
        { id: "c", text: "freistehende Mülleimer" },
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
        { id: "a", text: "Sie darf auch bei schuldunfähigen Kindern unter 14 Jahren vorgenommen werden." },
        { id: "b", text: "Sie setzt unter anderem voraus, dass eine verfolgbare Straftat begangen wurde, z. B. ein versuchter Diebstahl gemäß § 242 StGB." },
        { id: "c", text: "Sie ist ein Rechtfertigungsgrund und darf auch von Privatpersonen vorgenommen werden." }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 6,
      question: "In welchem Fall liegt eine fahrlässige Körperverletzung gemäß § 229 StGB vor?",
      answers: [
        { id: "a", text: "Eine Person wird in einer Schlägerei durch einen gezielten Faustschlag im Gesicht verletzt. Ihre Unterlippe blutet stark" },
        { id: "b", text: "Ein Fahrradfahrer wird bei einem Verkehrsunfall verletzt. Der Unfall wurde unabsichtlich verursacht" },
        { id: "c", text: "Ein Angreifer verwendet eine Hiebwaffe. Die Wucht des Schlages führt beim Opfer zu einem Kieferbruch" }
      ],
      correct: ["b"],
      points: 1
    },
    {
      id: 7,
      question: "Ein Passant beobachtet, wie eine Frau einer Mutter den Kinderwagen entreißt. Der Passant greift ein und verhindert die Entführung des Babys. Der Passant kann die Täterin bis zum Eintreffen der Polizei festhalten, obwohl sie ihm einige Faustschläge versetzt. Welche Aussagen zu diesem Fall sind richtig?",
      answers: [
        { id: "a", text: "Der Passant hat hier strafrechtlich korrekt im Sinn des Angriffsnotstandes gehandelt." },
        { id: "b", text: "Der Passant hat widerrechtlich gehandelt. Er hätte sich die Rechte der Mutter vorher schriftlich übertragen lassen müssen" },
        { id: "c", text: "Der Passant war nicht befugt, die Täterin festzuhalten, weil sich die versuchte Freiheitsberaubung nicht gegen ihn richtete" },
        { id: "d", text: "Es lag ein gegenwärtiger, rechtswidriger Angriff auf die Freiheit des Babys vor. Der Passant durfte vom Rechtfertigungsgrund der Notwehr in Form der Nothilfe Gebrauch machen" },
        { id: "e", text: "Der Passant durfte das Baby aus einer gegenwärtigen Gefahrenlage retten, Rechtfertigungsgrund ist hier der rechtfertigende Notstand" },
        { id: "f", text: "Der Passant durfte die Täterin gemäß StPO vorläufig festnehmen, weil er sie auf frischer Tat verfolgte und ihre Identität nicht sofort feststellbar war" }
      ],
      correct: ["d", "f"],
      points: 2
    },
    {
      id: 8,
      question: "Sie sehen als Türsteher, wie auf der anderen Straßenseite eine Person von zwei Jugendlichen brutal verprügelt wird. Welche Optionen haben Sie?",
      answers: [
        { id: "a", text: "Sie ignorieren den Vorfall, da Sie Ihre Arbeitsplatz niemals verlassen dürfen." },
        { id: "b", text: "Sie müssen der angegriffenen Person durch sofortiges tätiges Eingreifen helfen. Ansonsten verletzt er seine Garantenstellung" },
        { id: "c", text: "Wenn Sie ihren Aufgabenbereich nicht verlassen können, rufen Sie umgehend die Polizei." },
        { id: "d", text: "Sie sichern den Eingang, so dass niemand unbefugt die Diskothek betreten kann und helfen der angegriffenen Person" }
      ],
      correct: ["c", "d"],
      points: 2
    },
    {
      id: 9,
      question: "Wann liegt Diebstahl gemäß § 242 StGB vor?",
      answers: [
        { id: "a", text: "Wenn eine Person einen Wandtresor aufbricht und den darin befindlichen wertvollen Schmuck stiehlt" },
        { id: "b", text: "Wenn eine Person in Diebstahlabsicht in einem Juweliergeschäft mit Zueignungsabsicht eine goldene Armbanduhr an sich nimmt und in ihrer Kleidung versteckt" },
        { id: "c", text: "Wenn eine Person aus einem Museum besonders schutzwürdige Sachen stiehlt, z. B. historische Waffen" }
      ],
      correct: ["b"],
      points: 1
    },
    {
      id: 10,
      question: "Wann ist die Begehung einer Tat strafbar?",
      answers: [
        { id: "a", text: "...wenn der Täter die Tat begangen hat, immer" },
        { id: "b", text: "…wenn der Täter fahrlässig gehandelt hat und das Gesetz fahrlässiges Handeln unter Strafe stellt" },
        { id: "c", text: "…wenn der Täter eine Straftat begangen hat und einen Rechtfertigungsgrund dafür hat" },
        { id: "d", text: "…wenn der Täter eine Straftat begangen hat und keinen Rechtfertigungsgrund dafür hat" }
      ],
      correct: ["b", "d"],
      points: 2
    },
    {
      id: 11,
      question: "A wird von C, der mit einem Messer bewaffnet ist, angegriffen. A entreißt dem unbeteiligten B den Gehstock, um damit den Angriff des C abzuwehren. Die Verteidigungshandlung ist erforderlich und geboten. Welche der Aussagen sind gemäß StGB richtig?",
      answers: [
        { id: "a", text: "Die Wegnahme des Gehstockes ist im Sinne des rechtfertigenden Notstandes gerechtigt. A will den Gehstock einsetzen, um die Gefahr eines Körperschadens durch Messerstiche zu verhindern" },
        { id: "b", text: "A kann sich entweder auf die Notwehr oder auf den rechtfertigenden Notstand berufen. Er muss vor Gericht nur einen von beiden nachweisen um seine gesamte Handlung im Sachverhalt zu entschuldigen." },
        { id: "c", text: "Da C mit einem Messer angreift, handelt es sich bei A um eine Überschreitung der Notwehr gemäß § 33 StGB" },
        { id: "d", text: "Die Notwehr erlaubt die Wegnahme des Gehstockes. Denn nur so kann A sein Leben und seine körperliche Unversehrtheit gegen C verteidigen" },
        { id: "e", text: "A handelt im Gesamten auf Grundlage der Rechtfertigenden Notstandes. Ab dem Moment der Nutzung des Gehstockes wird aus der Notwehr automatisch ein rechtfertigender Notstand aus dem Zugriff auf den Gehstock und der Abwehr des Angriffes von C." },
        { id: "f", text: "Die Notwehrhandlung darf sich nur gegen den Angreifer richten. Eingriffe in die Rechtsgüter unbeteiligter Dritter werden durch die Notwehr nicht gedeckt" }
      ],
      correct: ["a", "f"],
      points: 2
    },
    {
      id: 12,
      question: "Welche Aussagen zur Strafbarkeit des Versuchs sind gemäß StGB richtig?",
      answers: [
        { id: "a", text: "Der Versuch eines Verbrechens ist stets strafbar." },
        { id: "b", text: "Der Versuch eines Vergehens ist nur dann strafbar, wenn es das Gesetz ausdrücklich bestimmt." },
        { id: "c", text: "Der Versuch ist nur bei Verbrechen strafbar." }
      ],
      correct: ["a", "b"],
      points: 2
    },
    {
      id: 13,
      question: "Was sind besonders schwere Fälle des Diebstahls gemäß §§ 242, 243 StGB?",
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
      question: "Welche Straftaten sind gemäß StGB Offizialdelikte?",
      answers: [
        { id: "a", text: "Hausfriedensbruch gemäß § 123 StGB" },
        { id: "b", text: "Unterschlagung gemäß § 246 StGB" },
        { id: "c", text: "Diebstahl gemäß § 242 StGB" },
        { id: "d", text: "Körperverletzung gemäß § 223 StGB" },
        { id: "e", text: "Sachbeschädigung gemäß § 303 StGB" }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 15,
      question: "Wann dürfen Wachpersonen gemäß § 127 Abs. 1 StPO eine Person vorläufig festnehmen?",
      answers: [
        { id: "a", text: "Wenn sie Hinweise auf eine bevorstehende Straftat erhalten" },
        { id: "b", text: "Wenn sie einen Täter bei der Vollendung einer Ordnungswidrigkeit auf frischer Tat betreffen" },
        { id: "c", text: "Wenn sie die Vollendung einer Straftat unterbinden wollen, deren Versuch strafbar ist" },
        { id: "d", text: "Wenn sie einen unbekannten Straftäter auf frischer Tat verfolgen und dessen Identität nicht sofort feststellbar ist" }
      ],
      correct: ["d"],
      points: 1
    },
    {
      id: 16,
      question: "Welche Aussagen zu Straftatbeständen nach dem Strafgesetzbuch (StGB) treffen zu?\n\n1. Die Unterschlagung (§ 246 StGB) liegt nur dann vor, wenn man eine Sache wegnimmt.\n2. Beim räuberischen Diebstahl (§ 252 StGB) wird Gewalt angewendet, um eine bereits gestohlene Sache zu behalten.\n3. Hehlerei (§ 259 StGB) bedeutet, dass man Ware die ein anderer gestohlen hat verkauft oder ankauft.\n4. Der Tatbestand des Erschleichens von Leistungen (§ 265a StGB) ist z. B. erfüllt, wenn man ohne Fahrschein Bus fährt.\n5. Bei der Urkundenfälschung (§ 267 StGB) reicht es bereits, eine unechte Urkunde herzustellen oder zu gebrauchen.",
      answers: [
        { id: "a", text: "nur 1, 3, 4 und 5 sind richtig" },
        { id: "b", text: "nur 1 und 2 sind richtig" },
        { id: "c", text: "alle Aussagen sind richtig" },
        { id: "d", text: "nur 2, 3 und 4 sind richtig" },
        { id: "e", text: "nur 2, 3, 4 und 5 sind richtig" }
      ],
      correct: ["d"],
      points: 1
    },
    {
      id: 17,
      question: "Die Fahrlässigkeit ist durch sorgfaltswidriges Verhalten gekennzeichnet. Welche Merkmale machen die objektive Sorgfaltswidrigkeit aus?",
      answers: [
        { id: "a", text: "Hätte der Täter sich im Laufe seines Lebens Kenntnisse oder Fähigkeiten aneignen können, um einen Schaden zu vermeiden." },
        { id: "b", text: "Besitzt der Täter überdurchschnittliche Kenntnisse oder Fähigkeiten, so muss er diese zur Abwendung von Schäden einsetzen." },
        { id: "c", text: "Als Maßstab dient die Frage, wie sich ein besonnener und gewissenhafter Mensch in einer solchen Situation verhalten hätte." },
        { id: "d", text: "Besitzt der Täter überdurchschnittliche Kenntnisse oder Fähigkeiten, so ist es seine freie Entscheidung, ob er diese eingesetzt um Schäden zu vermeiden." },
        { id: "e", text: "Es gibt keine Merkmale für fahrlässiges Handeln." },
        { id: "f", text: "Als Maßstab dient die Frage, wie sich ein überdurchschnittlich befähigter Mensch in einer solchen Situation verhalten hätte." }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 18,
      question: "Welche Aussagen zum Diebstahl gemäß § 242 StGB und zur Unterschlagung gemäß § 246 StGB sind richtig?",
      answers: [
        { id: "a", text: "Beim Diebstahl und bei der Unterschlagung handelt es sich bei den Tatobjekten um fremde bewegliche Sachen" },
        { id: "b", text: "Diebstahl ist ein Offizialdelikt, Unterschlagung ein Antragsdelikt" },
        { id: "c", text: "Beim Diebstahl ist der Versuch strafbar, bei der Unterschlagung nicht" },
        { id: "d", text: "Diebstahl und Unterschlagung sind Eigentums Delikte. Aber sie unterscheiden sich in der Ausführung der Tat" }
      ],
      correct: ["a", "d"],
      points: 2
    },
    {
      id: 19,
      question: "Wann liegt der Versuch einer Straftat gemäß StGB vor?",
      answers: [
        { id: "a", text: "wenn eine Person damit beginnt, eine Straftat zu planen" },
        { id: "b", text: "Ein Mitarbeiter eines Betriebes begeht einen Diebstahl. Ein zufälliger Zeuge beobachtet die Tat und informiert den Sicherheitsdienst. Man findet das Diebesgut im verschlossenen Fahrzeug des Mitarbeiters." },
        { id: "c", text: "Eine Straftat versucht, wer nach seiner Vorstellung von der Tat zur Verwirklichung des Tatbestandes unmittelbar ansetzt." },
        { id: "d", text: "wenn eine Person in ein Geschäftshaus eindringt, um zu stehlen" }
      ],
      correct: ["c", "d"],
      points: 2
    },
    {
      id: 20,
      question: "Wann liegt eine „tätliche Beleidigung\" gemäß § 185 StGB vor?",
      answers: [
        { id: "a", text: "Wenn der Täter eine Person mit den Worten „Du faules Schwein!\" beschimpft" },
        { id: "b", text: "Wenn der Täter einer Person in das Gesicht spuckt" },
        { id: "c", text: "Wenn der Täter einer Person den sogenannten „Stinkefinger\" zeigt" },
        { id: "d", text: "Wenn der Täter Unwahrheiten über eine Person verbreitet" }
      ],
      correct: ["b"],
      points: 1
    },
    {
      id: 21,
      question: "Wann liegt gemäß § 22 StGB der Versuch einer Straftat vor?",
      answers: [
        { id: "a", text: "Wenn eine Person damit beginnt, eine Straftat zu planen" },
        { id: "b", text: "Wenn sich eine Person Kfz-Nachschlüssel beschafft, um später die Kfz zu stehlen" },
        { id: "c", text: "Wenn eine Person in ein Geschäftshaus eindringt, um zu stehlen" }
      ],
      correct: ["c"],
      points: 1
    },
    {
      id: 22,
      question: "Wer begeht eine Amtsanmaßung gemäß § 132 StGB?",
      answers: [
        { id: "a", text: "…wer einen anderen nach dem Ausweis fragt." },
        { id: "b", text: "…wer eine vertraglich vereinbarte Taschenkontrolle durchführt" },
        { id: "c", text: "…wer als Sicherheitsmitarbeiter ein Bußgeld erhebt" },
        { id: "d", text: "…wer sich als Hilfspolizist ausgibt und einen anderen gegen seinen Willen durchsucht" }
      ],
      correct: ["c", "d"],
      points: 2
    },
    {
      id: 23,
      question: "Ein SMA entdeckt einen Einbrecher, der den SMA mit einer Eisenstange angreift. Welche Aussagen dazu sind richtig?",
      answers: [
        { id: "a", text: "Die Handlung des Einbrechers stellt eine Straftat dar. Der SMA darf den Einbrecher gemäß StPO vorläufig festnehmen." },
        { id: "b", text: "Das Verhalten des Einbrechers stellt eine gefährliche Körperverletzung dar. Der SMA kann im Rahmen der Notwehr hendeln, muss auf Grund der Eisenstange den Grundsatz der Verhältnismäßigkeit aber nicht beachten." },
        { id: "c", text: "Der Angriff des Einbrechers stellt im strafrechtlichen Sinne eine Besitzstörung dar. Der SMA kann sich deshalb wegen dieser strafrechtlichen Besitzstörung mit Notwehr erwehren." },
        { id: "d", text: "Der SMA wird durch einen bewaffneten Mann bedrängt. Dadurch liegt ein Angriff vor. Der SMA kann sich deswegen auf die Notwehr berufen und darf sich mit erforderlichen und geeigneten Mitteln verteidigen." },
        { id: "e", text: "Der SMA wird mit einem gefährlichen Gegenstand angegriffen. Dadurch liegt eine Gefahr vor. Der SMA kann sich deswegen auf den Verteidigungsnotstand berufen, um die Gefahr abzuwehren." },
        { id: "f", text: "Der SMA hat keine Rechtfertigungsmöglichkeit für eine Verteidigungshandlung." }
      ],
      correct: ["a", "d"],
      points: 2
    },
    {
      id: 24,
      question: "Was sind gemäß Strafgesetzbuch Antragsdelikte?",
      answers: [
        { id: "a", text: "Der Diebstahl gemäß § 242 StGB" },
        { id: "b", text: "Die Sachbeschädigung gemäß § 303 StGB" },
        { id: "c", text: "Die Amtsanmaßung gemäß § 132 StGB" },
        { id: "d", text: "Die vorsätzliche Körperverletzung gemäß § 223 StGB" }
      ],
      correct: ["b", "d"],
      points: 2
    },
    {
      id: 25,
      question: "Welche Aussagen zur Unterschlagung gemäß § 246 StGB sind richtig?",
      answers: [
        { id: "a", text: "Unterschlagung liegt z. B. vor, wenn eine Person eine auf der Straße gefundene Sache in der Absicht einsteckt, diese zu behalten" },
        { id: "b", text: "Bei der Unterschlagung nimmt der Täter einem anderen eine bewegliche Sache mit Gewalt weg" },
        { id: "c", text: "Die Unterschlagung schützt das Rechtsgut Eigentum" },
        { id: "d", text: "Die Unterschlagung ist auch bei fahrlässiger Begehung strafbar" }
      ],
      correct: ["a", "c"],
      points: 2
    }
  ],
  quiz2: [
    {
      id: 1,
      question: "Wann liegt eine \"tätliche Beleidigung” gemäß § 185 StGB vor?",
      answers: [
        { id: "a", text: "Wenn der Täter eine Person mit den Worten \"Du faules Schwein!” beschimpft" },
        { id: "b", text: "Wenn der Täter Unwahrheiten über eine Person verbreitet" },
        { id: "c", text: "Wenn der Täter einer Person in das Gesicht spuckt" },
        { id: "d", text: "Wenn der Täter einer Person den sogenannten \"Stinkefinger” zeigt" }
      ],
      correct: ["c"],
      points: 1
    },
    {
      id: 2,
      question: "Welche Aussagen zum Vorsatz und zur Fahrlässigkeit sind gemäß StGB richtig?",
      answers: [
        { id: "a", text: "Vorsätzliches Handeln ist grundsätzlich bei Vergehen und Verbrechen strafbar." },
        { id: "b", text: "Fahrlässiges Handeln ist bei Verbrechen stets strafbar." },
        { id: "c", text: "Fahrlässiges Handeln ist nur in den gesetzlich bestimmten Fällen strafbar." },
        { id: "d", text: "Vorsätzliches Handeln ist nur bei Vergehen strafbar." }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 3,
      question: "Wie lautet der „dreistufige DeIiktsaufbau\" (in richtiger Prüfungsreihenfolge) für eine Straftat?",
      answers: [
        { id: "a", text: "Schuld, Rechtswidrigkeit, Tatbestand" },
        { id: "b", text: "Straftat, Schuld, Rechtswidrigkeit" },
        { id: "c", text: "Handlung, Rechtswidrigkeit, Schuld" },
        { id: "d", text: "Tatbestand, Rechtswidrigkeit, Schuld" }
      ],
      correct: ["d"],
      points: 1
    },
    {
      id: 4,
      question: "Fahrlässiges Handeln ist gemäß StGB nur dann strafbar, wenn es das Gesetz ausdrücklich mit Strafe bedroht. Bei welchem Delikt ist dies der Fall?",
      answers: [
        { id: "a", text: "Bei der Unterschlagung." },
        { id: "b", text: "Beim Diebstahl." },
        { id: "c", text: "Bei der Sachbeschädigung." },
        { id: "d", text: "Bei der Körperverletzung." }
      ],
      correct: ["d"],
      points: 1
    },
    {
      id: 5,
      question: "Strafrechtlich werden Begehungsdelikte und Unterlassungsdelikte unterschieden. Welche Aussagen hierzu sind richtig?",
      answers: [
        { id: "a", text: "Im Strafrecht gibt es nur Unterlassungsdelikte, die durch Garanten begangen werden können." },
        { id: "b", text: "Wenn eine Garantenpflicht besteht, kann das Unterlassen strafbar sein." },
        { id: "c", text: "Wenn aktives Tun den Tatbestand eines Gesetzes erfüllt, kann dies strafbar sein." }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 6,
      question: "Was sind gemäß StGB echte Unterlassungsdelikte?",
      answers: [
        { id: "a", text: "Die Amtsanmaßung" },
        { id: "b", text: "Die Nichtanzeige geplanter Straftaten" },
        { id: "c", text: "Die unterlassene Hilfeleistung" },
        { id: "d", text: "Die Begünstigung" }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 7,
      question: "Welche Aussagen zur Notwehr gemäß § 32 StGB sind richtig?",
      answers: [
        { id: "a", text: "Die Notwehr erlaubt nur die Verletzung von Rechtsgütern des Angreifers, z. B. die körperliche Unversehrtheit" },
        { id: "b", text: "Die Notwehr ist zulässig gegen Angriffe von gefährlichen Tieren" },
        { id: "c", text: "Die Notwehr ist ein Rechtfertigungsgrund" },
        { id: "d", text: "Die Notwehr ist ein Entschuldigungsgrund" }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 8,
      question: "Was sind die Merkmale einer Straftat?",
      answers: [
        { id: "a", text: "Die tatbestandsmäßige Handlung eines Menschen." },
        { id: "b", text: "Der Eintritt einer Rechtsgutverletzung." },
        { id: "c", text: "Die Rechtswidrigkeit und die Schuld." }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 9,
      question: "Welche Aussagen zur Strafbarkeit des Versuchs sind gemäß StGB richtig?",
      answers: [
        { id: "a", text: "Der Versuch ist nur bei Verbrechen strafbar." },
        { id: "b", text: "Der Versuch eines Vergehens ist nur dann strafbar, wenn es das Gesetz ausdrücklich bestimmt." },
        { id: "c", text: "Der Versuch eines Verbrechens ist stets strafbar." }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 10,
      question: "Wann liegt gefährliche Körperverletzung gemäß §§ 223, 224 StGB vor?",
      answers: [
        { id: "a", text: "Wenn jemand mittels einer Waffe oder eines anderen gefährlichen Werkzeugs die Körperverletzung begeht" },
        { id: "b", text: "Wenn jemand die Körperverletzung mittels eines hinterlistigen Überfalls begeht" },
        { id: "c", text: "Wenn jemand durch die Körperverletzung, z. B. eine Ohrfeige, das körperliche Wohlbefinden für kurze Zeit beeinträchtigt" },
        { id: "d", text: "Wenn jemand durch die Körperverletzung den Verlust des Sehvermögens auf einem Auge verursacht" }
      ],
      correct: ["a", "b"],
      points: 2
    },
    {
      id: 11,
      question: "Wann liegt Hausfriedensbruch gemäß StGB vor?",
      answers: [
        { id: "a", text: "Wenn jemand auf einen öffentlich zugänglichen Parkplatz fährt, auf den nur Anwohner mit Berechtigungsausweis parken dürfen." },
        { id: "b", text: "Wenn jemand einen Supermarkt nach Ladenschluss nicht verlässt, obwohl er dazu vom Geschäftsführer aufgefordert worden ist." },
        { id: "c", text: "Wenn jemand in einen Supermarkt geht, Ware an sich nimmt und das Geschäft verlässt, ohne zu bezahlen." },
        { id: "d", text: "Wenn jemand einen Supermarkt trotz Hausverbots betritt." }
      ],
      correct: ["b", "d"],
      points: 2
    },
    {
      id: 12,
      question: "Während des Dienstes wird die Wachperson S von dem unbekannten 16-jährigen Einbrecher E angegriffen. Welche Aussagen hierzu sind richtig?",
      answers: [
        { id: "a", text: "S darf den E gemäß § 127 Abs. 1 StPO vorläufig festnehmen. S hat E auf frischer Tat betroffen und dessen Identität war nicht sofort feststellbar." },
        { id: "b", text: "S darf den Angriff auf sich in Notwehr abwehren. Die vorläufige Festnahme ist aber nicht zulässig, da E noch nicht volljährig ist." },
        { id: "c", text: "S darf den gegenwärtigen und rechtswidrigen Angriff des E auf sich, mit erforderlichen Mitteln im Sinne der Notwehr abwehren." }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 13,
      question: "Wer macht sich wegen \"Erschleichen von Leistungen\" gemäß § 265a StGB strafbar?",
      answers: [
        { id: "a", text: "Wer absichtlich in einem Zug in der 1. Klasse fährt, obwohl er nur für die 2. Klasse bezahlt hat" },
        { id: "b", text: "Wer mit Absicht eine funktionsfähige Parkuhr nicht mit Geldeinwurf bedient" },
        { id: "c", text: "Wer mit Vorsatz einen Zigarettenautomaten aufbricht und die Zigarettenschachteln an sich nimmt" },
        { id: "d", text: "Wer, weil er kein Eintrittsgeld zahlen will, den Türsteher einer Diskothek weglockt und sich so unkontrolliert Zugang zur Diskothek verschafft" }
      ],
      correct: ["a", "d"],
      points: 2
    },
    {
      id: 14,
      question: "Welche Aussagen zu den Unterlassungsdelikten sind richtig?",
      answers: [
        { id: "a", text: "Das unechte Unterlassungsdelikt kann nur von einer Person begangen werden, die eine Garantenstellung innehat" },
        { id: "b", text: "Der gesetzliche Tatbestand eines echten Unterlassungsdelikts beschreibt eine Gebotsnorm" },
        { id: "c", text: "Das unechte Unterlassungsdelikt kann nur von einer Person begangen werden, bei der sich die Garantenstellung aus einem Gesetz ergibt" },
        { id: "d", text: "Der gesetzliche Tatbestand eines echten Unterlassungsdelikts beschreibt eine Verbotsnorm" }
      ],
      correct: ["a", "b"],
      points: 2
    },
    {
      id: 15,
      question: "Sicherheitsmitarbeiter Z ist in einem Strafverfahren Zeuge und soll zur Sache vernommen werden. Welche Aussagen hierzu sind richtig?",
      answers: [
        { id: "a", text: "Z ist berechtigt, sich bei der Vernehmung schriftlicher Notizen zu bedienen" },
        { id: "b", text: "Z darf nicht über die Person des Beschuldigten informiert werden" },
        { id: "c", text: "Z ist grundsätzlich mündlich zu vernehmen" },
        { id: "d", text: "Z muss zur Sache aussagen, auch wenn er sich selbst wegen einer Straftat belastet" }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 16,
      question: "Welche Beschreibung trifft auf den Begriff „Rechtfertigungsgrund“ zu?",
      answers: [
        { id: "a", text: "Rechtfertigungsgründe schließen bei rechtmäßiger Anwendung die Rechtswidrigkeit aus." },
        { id: "b", text: "Rechtfertigungsgründe schließen bei rechtmäßiger Anwendung die Rechtswidrigkeit nur dann aus, wenn der Täter auch schuldhaft handelt." },
        { id: "c", text: "Eine Handlung die normalerweise sowohl den objektiven als auch subjektiven Tatbestand einer Straftat erfüllt, ist bei vorliegen der Voraussetzungen eines Rechtfertigungsgrundes nicht strafbar." },
        { id: "d", text: "Er gestattet in beliebiger Form die Anwendung privaten Zwangs, um eigene Interessen zu schützen." },
        { id: "e", text: "Es wird eine bestimmte Handlung durch ein Gesetz entschuldigt." }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 17,
      question: "Was enthält der „Besondere Teil\" des Strafgesetzbuches?",
      answers: [
        { id: "a", text: "Er enthält Bestimmungen über den Geltungsbereich des deutschen Strafrechts" },
        { id: "b", text: "Er enthält einen großen Teil der Verbrechen und Vergehen des deutschen Strafrechts und die dafür vorgesehenen Strafandrohungen" },
        { id: "c", text: "Er enthält Tatbestände, die die Ahndung mit einer Geldbuße zulassen" },
        { id: "d", text: "Er enthält sämtliche Straftatbestände des deutschen Strafrechts, deren Verwirklichung mit Strafe bedroht ist" }
      ],
      correct: ["b"],
      points: 1
    },
    {
      id: 18,
      question: "Wer begeht einen Hausfriedensbruch?",
      answers: [
        { id: "a", text: "…wer trotz Hausverbot in eine Diskothek geht;" },
        { id: "b", text: "…wer einen Supermarkt während der Öffnungszeiten betritt, um etwas zu stehlen" },
        { id: "c", text: "…wer ein Einkaufszentrum betritt, obwohl er gar nichts kaufen will." },
        { id: "d", text: "…wer trotz Aufforderung eines Sicherheitsmitarbeiters ein Kaufhaus bei Geschäftsschluss nicht verlässt" }
      ],
      correct: ["a", "d"],
      points: 2
    },
    {
      id: 19,
      question: "Schwere Körperverletzung liegt vor, wenn durch eine vorsätzlich begangene Körperverletzung gemäß §§ 223, 226 StGB bestimmte Folgen eingetreten sind. Bei welchen Verletzungen liegt eine schwere Körperverletzung vor?",
      answers: [
        { id: "a", text: "Verlust des Sehvermögens auf einem Auge" },
        { id: "b", text: "Vorübergehende Schwellung eines Auges" },
        { id: "c", text: "Ein ausgeschlagener Backenzahn" },
        { id: "d", text: "Verlust eines Armes" }
      ],
      correct: ["a", "d"],
      points: 2
    },
    {
      id: 20,
      question: "Sicherheitsmitarbeiter S führt mit Einverständnis eines 10-jährigen Jungen beim Einlass in ein Fußballstadion eine Taschenkontrolle durch. S entdeckt ein Butterflymesser",
      answers: [
        { id: "a", text: "Der Junge begeht keine Straftat, da er das 14. Lebensjahr noch nicht vollendet hat und folglich schuldunfähig ist." },
        { id: "b", text: "Der Junge begeht eine Straftat, durch den Verstoß gegen das Umgangsverbot gemäß WaffG." },
        { id: "c", text: "Der Sicherheitsmitarbeiter kann das abnehmen, Rechtsgrundlage ist der Rechtfertigende Notstand." },
        { id: "d", text: "Der Sicherheitsmitarbeiter darf das Messer im Rahmen der Notwehr beschlagnahmen." }
      ],
      correct: ["a", "c"],
      points: 2
    },
    {
      id: 21,
      question: "Zu welchem Zeitpunkt ist die Begünstigung gemäß § 257 StGB möglich?",
      answers: [
        { id: "a", text: "während der Begehung einer rechtswidrigen Straftat eines anderen" },
        { id: "b", text: "nach der Begehung einer rechtswidrigen Straftat eines anderen" },
        { id: "c", text: "vor der Begehung einer rechtswidrigen Straftat eines anderen" },
        { id: "d", text: "nach der Begehung einer rechtswidrigen Ordnungswidrigkeit eines anderen" }
      ],
      correct: ["b"],
      points: 1
    },
    {
      id: 22,
      question: "Welche Aussagen zur Freiheitsberaubung gemäß § 239 StGB sind richtig?",
      answers: [
        { id: "a", text: "Freiheitsberaubung ist nur durch das Einsperren eines Menschen möglich, z. B. durch Einschließen in einen Raum" },
        { id: "b", text: "Tatopfer kann jeder Mensch sein, der in der Lage ist, seinen Aufenthaltsort nach Belieben zu verändern" },
        { id: "c", text: "Bei der Freiheitsberaubung ist nur die vollendete Tat strafbar. Der Versuch ist straflos" },
        { id: "d", text: "Der Tatbestand schützt die persönliche Bewegungsfreiheit und die allgemeine Handlungsfreiheit eines Menschen" }
      ],
      correct: ["b", "d"],
      points: 2
    },
    {
      id: 23,
      question: "Nennen Sie Fälle eines besonders schweren Falles des Diebstahls § 243 StGB!",
      answers: [
        { id: "a", text: "…wenn der Täter das Opfer beim Diebstahl mit einem Messer bedroht;" },
        { id: "b", text: "…wenn der Täter in einer Lagerhalle einbricht, um einen Diebstahl zu begehen;" },
        { id: "c", text: "…wenn der Täter gewerbsmäßig stiehlt;" },
        { id: "d", text: "…wenn der Wert der Beute über 5.000,- € liegt" }
      ],
      correct: ["b", "c"],
      points: 2
    },
    {
      id: 24,
      question: "Welche Aussage zum Vergehen ist gemäß StGB richtig?",
      answers: [
        { id: "a", text: "Vergehen sind mit Geldstrafe oder Freiheitsstrafe ab einem Jahr bedroht." },
        { id: "b", text: "Vergehen sind im Mindestmaß mit einer Freiheitsstrafe unter einem Jahr oder mit einer Geldstrafe bedroht." },
        { id: "c", text: "Vergehen sind mit Geldbuße oder Freiheitsstrafe unter einem Jahr bedroht." },
        { id: "d", text: "Vergehen sind ausschließlich mit Geldstrafen bedroht." }
      ],
      correct: ["b"],
      points: 1
    },
    {
      id: 25,
      question: "Eine Verteidigungshandlung im Sinne des Notwehrrechts kann gegen...",
      answers: [
        { id: "a", text: "...unbewegliche Sachen erfolgen." },
        { id: "b", text: "...herrenlose Tiere erfolgen." },
        { id: "c", text: "...bedrohliche Unwetterlagen erfolgen" },
        { id: "d", text: "...Menschen erfolgen." },
        { id: "e", text: "...aufgehetzte Hunde erfolgen." },
        { id: "f", text: "...ausschließlich jede Gefahr für meine eigenen Rechtsgüter erfolgen" }
      ],
      correct: ["d", "e"],
      points: 2
    }
  ]
};
