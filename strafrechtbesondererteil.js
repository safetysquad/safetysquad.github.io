const cards2 = [
  {
    "id": 1,
    "question": "§123 StGB Hausfriedensbruch",
    "answer": "Widerrechtliches Eindringen\n-In fremde Wohnungen / Geschäftsräume / befriedetes Besitztum / abgeschlossene Räume, die dem öffentlichen Dienst oder Verkehr bestimmt sind\noder\n-Dort verweilen und sich auf Aufforderung des Berechtigten nicht entfernen."
  },
  {
    "id": 2,
    "question": "§132 StGB Amtsanmaßung",
    "answer": "-wer sich unbefugt mit einem öffentlichen Amt befasst (z.B. „Ich bin Polizist!“)\noder eine Handlung vornehmen, die nur Kraft eines öffentlichen Amtes vorgenommen werden darf (durchsuchen, Verkehr regeln…)"
  },
  {
    "id": 3,
    "question": "§132a StGB Missbrauch von Titeln, Berufsbezeichnungen, Abzeichen",
    "answer": "unbefugt -Führen von in- oder ausländischen Titeln, akademischen Graden, Würden\nBerufsbezeichnungen: Rechtanwalt, Patentanwalt, Apotheker, Arzt, Zahnarzt…\n-Unbefugtes Tragen von in- und ausländischer Uniform, Amtsbekleidung, Abzeichen"
  },
  {
    "id": 4,
    "question": "§138 StGB Nichtanzeige geplanter Straftaten",
    "answer": "Glaubhafte Kenntnis erlangen von Vorhaben oder Ausführung von…\n-Mord, Totschlag, Raub, Brandstiftung, Völkermord, …\nUnd nicht zur Anzeige bringen"
  },
  {
    "id": 5,
    "question": "§145 StGB Missbrauch von Notruf und Beeinträchtigung von Unfallverhütungs- und Nothilfemitteln",
    "answer": "-Missbrauch von Notrufen\n-Vortäuschen, dass wegen eines Unglücksfalls Hilfe erforderlich ist\n-Beseitigen oder unkenntlich machen von Warn- oder Verbotszeichen\n-Entfernung von Rettungsgeräten"
  },
  {
    "id": 6,
    "question": "§153 StGB Falsche uneidliche Aussage",
    "answer": "-als Zeuge, - Vor Gericht, -unvereidigt, -falsch aussagen"
  },
  {
    "id": 7,
    "question": "§154 StGB Meineid",
    "answer": "-als Zeuge, -vor Gericht, -unter Eid, -falsch aussagen"
  },
  {
    "id": 8,
    "question": "§164 StGB Falsche Verdächtigung",
    "answer": "- wider besseres Wissen\n- einen anderen einer rechtswidrigen Tat verdächtigen\n- bei einer Behörde zur Anzeige bringen in der Absicht, dass ein behördliches Verfahren gegen ihn eingeleitet wird"
  },
  {
    "id": 9,
    "question": "§185 StGB Beleidigung",
    "answer": "- einen anderen beleidigen (Ehreverletzung) - verbal, - nonverbal - durch Tätlichkeit\n- durch Schrift und Bild"
  },
  {
    "id": 10,
    "question": "§202 StGB Verletzung des Briefgeheimnisses",
    "answer": "Unbefugt - einen verschlossenen Brief öffnen, der nicht zu seiner Kenntnis bestimmt ist\n- oder sich den Inhalt unter Anwendung mechanischer Mittel zugänglich machen"
  },
  {
    "id": 11,
    "question": "§202a StGB Ausspähen von Daten",
    "answer": "Unbefugt - sich oder einem anderen nicht für ihn bestimmte und vor unberechtigtem Zugang besonders gesicherte Daten verschaffen (unter Überwindung der Zugangssicherung)"
  },
  {
    "id": 12,
    "question": "§223 StGB Körperverletzung",
    "answer": "- einen anderen\n- körperlich misshandeln\n- oder an der Gesundheit schädigen"
  },
  {
    "id": 13,
    "question": "§224 StGB Gefährliche Körperverletzung",
    "answer": "Begehungsart!!!\n- Körperverletzung (Grundtatbestand)\n- durch Beibringen von Gift oder anderen gesundheitsschädigen Stoffen\n- mit Waffen\n- mit einem gefährlichen Werkzeug\n- mit einem anderen gemeinsam\n- durch einen hinterlistigen Überfall\n- mittels einer das Leben bedrohenden Behandlung"
  },
  {
    "id": 14,
    "question": "§226 StGB Schwere Körperverletzung",
    "answer": "Verbrechen!!!\n- Körperverletzung (Grundtatbestand)\n- Verlust eines Sinnes, Verlust oder dauerhafte Unbrauchbarkeit eines wichtigen Körpergliedes\n- Verlust eines Auges oder des Sehvermögens\n- Verlust der Fortpflanzungsfähigkeit\n- Körperliche oder geistige Behinderung"
  },
  {
    "id": 15,
    "question": "§229 StGB Fahrlässige Körperverletzung",
    "answer": "- Körperverletzung\n- Fahrlässigkeit (gebotene Sorgfalt nicht beachten)"
  },
  {
    "id": 16,
    "question": "§239 StGB Freiheitsberaubung",
    "answer": "- einen anderen einsperren\n- auf andere Weise der Freiheit berauben (z.B. fesseln)"
  },
  {
    "id": 17,
    "question": "§240 StGB Nötigung",
    "answer": "- Androhung von Gewalt oder einem empfindlichen Übel\n- zwecks Duldung, Handlung oder Unterlassung\n- Verwerflichkeit der Tat (ausschließlich dazu gedacht dem anderen zu schaden)"
  },
  {
    "id": 18,
    "question": "§241 StGB Bedrohung",
    "answer": "- Bedrohung mit einem Verbrechen („Ich bringe dich um!“)"
  },
  {
    "id": 19,
    "question": "§242 StGB Diebstahl",
    "answer": "- Wegnehme - fremde, bewegliche Sache\n- rechtswidrige Zueignungsabsicht für sich oder einen anderen"
  },
  {
    "id": 20,
    "question": "§244 StGB Diebstahl mit Waffen, Bandendiebstahl, Wohnungseinbruchdiebstahl",
    "answer": "- Diebstahl (Grundtatbestand)\n- währenddessen eine Waffe oder ein anderes gefährliches Werkzeug bei sich führen\n- als Mitglied einer Bande stehlen, die sich zur fortgesetzten Begehung verbunden hat\n- zur Ausführung der Tat in eine Wohnung einbrechen oder einsteigen\n Achtung: Wenn die Wohnung dauerhaft bewohnt ist, dann ist es sogar ein Verbrechen!"
  },
  {
    "id": 21,
    "question": "§243 StGB Besonders schwerer Fall des Diebstahls",
    "answer": "- Diebstahl (Grundtatbestand)\n- zum Zwecke des Diebstahls eindringen, mittels eines falschen Schlüssels, einbrechen, einsteigen, sich verborgen halten in Gebäude, Dienst- oder Geschäftsräume, umschlossene Räume\n- durch ein verschlossenes Behältnis oder eine andere Schutzvorrichtung gegen Wegnahme besonders gesichert\n- gewerblich stehlen\n- die Hilflosigkeit einer Person ausnutzen\n- Diebstahl eines der Religionsausübung dienenden Gegenstandes aus z.B. einer Kirche (gilt auch für ausgestellte Kunst in Museen, Gegenstände von Bedeutung für die Forschung…)\n- Diebstahl von Sprengstoff oder einer Handfeuerwaffe, zu deren Erwerb man eine behördliche Erlaubnis braucht"
  },
  {
    "id": 22,
    "question": "§246 StGB Unterschlagung",
    "answer": "- fremde, bewegliche Sache\n- rechtswidrige Zueignungsabsicht für sich oder einen anderen\nACHTUNG:!! Wegnahme fehlt! Der Täter hat die Sache bereits in seinem Besitz"
  },
  {
    "id": 23,
    "question": "§248a StGB Diebstahl / Unterschlagung geringwertiger Sachen",
    "answer": "- Diebstahl / Unterschlagung\n- Geringwertigkeit der Sache (Wert unter 50€)"
  },
  {
    "id": 24,
    "question": "§249 StGB Raub",
    "answer": "(Verbrechen) - Anwendung von Gewalt oder Androhung von Gefahr für Leib oder Leben\n- Diebstahl"
  },
  {
    "id": 25,
    "question": "§252 StGB Räuberischer Diebstahl",
    "answer": "(Verbrechen)\n- Diebstahl (vollendet)\n- auf frischer Tat betroffen\n- Sicherung des Diebesgutes durch Anwendung von Gewalt oder Androhung von Gefahr für Leib oder Leben"
  },
  {
    "id": 26,
    "question": "§253 StGB Erpressung",
    "answer": "- Androhung von Gewalt oder einem empfindlichen Übel\n- zwecks Duldung / Handlung / Unterlassung\n- rechtswidrige Bereicherungsabsicht"
  },
  {
    "id": 27,
    "question": "§255 StGB Räuberische Erpressung",
    "answer": "- Anwendung von Gewalt oder Androhung von Gefahr für Leib oder Leben - Erpressung"
  },
  {
    "id": 28,
    "question": "§257 StGB Begünstigung",
    "answer": "- einem anderen Hilfe leisten\n- die rechtswidrig erlangten Vorteile aus dessen zuvor begangener rechtswidriger Tat zu sichern"
  },
  {
    "id": 29,
    "question": "§259 StGB Hehlerei",
    "answer": "- Ankauf / Verkauf / Weitergabe\n- von Diebesgut (oder einer Sache die rechtswidrig durch eine Unterschlagung erlangt wurde)"
  },
  {
    "id": 30,
    "question": "§263 StGB Betrug",
    "answer": "- Täuschungshandlung – Irrtumserregung – Vermögensverfügung - Vermögensschaden\n- rechtswidrige Bereicherungsabsicht  Kausalität"
  },
  {
    "id": 31,
    "question": "§263a StGB Computerbetrug",
    "answer": "- Ergebnisse eines Datenverarbeitungsvorgangs durch Verwendung unrichtiger Daten beeinflussen\n- Vermögensschaden\n- rechtswidriger Vermögensvorteil"
  },
  {
    "id": 32,
    "question": "§265a StGB Erschleichen von Leistungen",
    "answer": "- Erschleichen\n- der Leistung eines Automaten, eines öffentlichen Telefonnetzes\n- des Transports mit einem Verkehrsmittel\n- des Eintritts zu einer Veranstaltung oder in eine Einrichtung"
  },
  {
    "id": 33,
    "question": "§267 StGB Urkundenfälschung",
    "answer": "- Herstellen einer falschen Urkunde\n- Fälschen einer echten Urkunde\n- zwecks Einführung und Täuschung im Rechtsverkehr\n(Urkunde: Eine Urkunde ist eine verkörperte Gedankenerklärung, die den Austeller erkennen lässt und zum Beweis im Rechtsverkehr dient.)"
  },
  {
    "id": 34,
    "question": "§303 StGB Sachbeschädigung",
    "answer": "- rechtswidrig beschädigen oder zerstören fremder Sachen\n- im äußeren Erscheinungsbild dauerhaft und nicht unerheblich verändern"
  },
  {
    "id": 35,
    "question": "§306 StGB Brandstiftung",
    "answer": "Verbrechen! - in Brand setzen fremder Gebäude oder Hütten, Betriebsstätten, Warenlager, \nKFZ, Boote, Flugzeuge, Züge, Wälder"
  },
  {
    "id": 36,
    "question": "§306 f StGB Verursachen einer Brandgefahr",
    "answer": "- fremde, feuergefährdete Betriebe\n- Wälder, bestellte Felder \n- durch Rauchen, offenes Feuer, Wegwerfen brennender oder glimmender Gegenstände in Brandgefahr bringen"
  },
  {
    "id": 37,
    "question": "§323c StGB Unterlassene Hilfeleistung",
    "answer": "- wer es unterlässt einer Person in Not Hilfe zu leisten\n- Hilfeleistung muss erforderlich und zumutbar sein"
  },
];
