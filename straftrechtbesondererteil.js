const cards2 = [
  {
    "id": 1,
    "question": "§123 StGB Hausfriedensbruch",
    "answer": "Widerrechtliches Eindringen in fremde Wohnungen, Geschäftsräume, befriedetes Besitztum oder abgeschlossene Räume, die dem öffentlichen Dienst oder Verkehr bestimmt sind, oder dort verweilen und sich auf Aufforderung des Berechtigten nicht entfernen."
  },
  {
    "id": 2,
    "question": "§132 StGB Amtsanmaßung",
    "answer": "Wer sich unbefugt mit einem öffentlichen Amt befasst (z.B. \"Ich bin Polizist!\") oder eine Handlung vornimmt, die nur kraft eines öffentlichen Amtes vorgenommen werden darf (z.B. durchsuchen, Verkehr regeln)."
  },
  {
    "id": 3,
    "question": "§132a StGB Missbrauch von Titeln, Berufsbezeichnungen, Abzeichen",
    "answer": "Unbefugtes Führen von in- oder ausländischen Titeln, akademischen Graden oder Würden sowie unbefugtes Tragen von Berufsbezeichnungen (z.B. Rechtsanwalt, Arzt) oder Uniformen, Amtsbekleidung oder Abzeichen."
  },
  {
    "id": 4,
    "question": "§138 StGB Nichtanzeige geplanter Straftaten",
    "answer": "Glaubhafte Kenntnis von der Planung oder Ausführung schwerer Straftaten (z.B. Mord, Totschlag, Raub, Brandstiftung) erlangen und diese nicht zur Anzeige bringen."
  },
  {
    "id": 5,
    "question": "§145 StGB Missbrauch von Notrufen",
    "answer": "Missbrauch von Notrufen, Vortäuschen eines Unglücksfalls, Beseitigen oder Unkenntlichmachen von Warn- oder Verbotszeichen oder Entfernen von Rettungsgeräten."
  },
  {
    "id": 6,
    "question": "§153 StGB Falsche uneidliche Aussage",
    "answer": "Als Zeuge vor Gericht unvereidigt vorsätzlich falsch aussagen."
  },
  {
    "id": 7,
    "question": "§154 StGB Meineid",
    "answer": "Als Zeuge vor Gericht unter Eid vorsätzlich falsch aussagen (Verbrechen)."
  },
  {
    "id": 8,
    "question": "§164 StGB Falsche Verdächtigung",
    "answer": "Wider besseres Wissen einen anderen einer rechtswidrigen Tat verdächtigen und bei einer Behörde anzeigen, um ein Verfahren gegen ihn einzuleiten."
  },
  {
    "id": 9,
    "question": "§185 StGB Beleidigung",
    "answer": "Verletzung der Ehre eines anderen durch Worte, Gesten, Tätlichkeiten, Schrift oder Bild."
  },
  {
    "id": 10,
    "question": "§202 StGB Verletzung des Briefgeheimnisses",
    "answer": "Unbefugtes Öffnen eines verschlossenen Briefes oder Sichverschaffen des Inhalts mittels technischer Hilfsmittel."
  },
  {
    "id": 11,
    "question": "§202a StGB Ausspähen von Daten",
    "answer": "Unbefugtes Verschaffen besonders gesicherter Daten unter Überwindung der Zugangssicherung."
  },
  {
    "id": 12,
    "question": "§223 StGB Körperverletzung",
    "answer": "Einen anderen körperlich misshandeln oder an der Gesundheit schädigen."
  },
  {
    "id": 13,
    "question": "§224 StGB Gefährliche Körperverletzung",
    "answer": "Körperverletzung durch Gift, Waffen, gefährliche Werkzeuge, gemeinschaftlich, durch hinterlistigen Überfall oder lebensbedrohende Behandlung."
  },
  {
    "id": 14,
    "question": "§226 StGB Schwere Körperverletzung",
    "answer": "Körperverletzung mit schweren Folgen wie Verlust eines Sinnes, eines wichtigen Körpergliedes, Sehvermögens, Fortpflanzungsfähigkeit oder dauerhafte Behinderung."
  },
  {
    "id": 15,
    "question": "§229 StGB Fahrlässige Körperverletzung",
    "answer": "Körperverletzung durch Fahrlässigkeit aufgrund der Nichtbeachtung der gebotenen Sorgfalt."
  },
  {
    "id": 16,
    "question": "§239 StGB Freiheitsberaubung",
    "answer": "Einen anderen einsperren oder auf andere Weise der Freiheit berauben (z.B. fesseln)."
  },
  {
    "id": 17,
    "question": "§240 StGB Nötigung",
    "answer": "Androhung von Gewalt oder eines empfindlichen Übels zur Erzwingung einer Handlung, Duldung oder Unterlassung in verwerflicher Weise."
  },
  {
    "id": 18,
    "question": "§241 StGB Bedrohung",
    "answer": "Bedrohung eines anderen mit der Begehung eines Verbrechens."
  },
  {
    "id": 19,
    "question": "§242 StGB Diebstahl",
    "answer": "Wegnahme einer fremden beweglichen Sache in der Absicht, sie sich oder einem Dritten rechtswidrig zuzueignen."
  },
  {
    "id": 20,
    "question": "§244 StGB Diebstahl mit Waffen / Wohnungseinbruchdiebstahl",
    "answer": "Diebstahl unter Mitführen von Waffen, als Bandenmitglied oder durch Einbruch in eine Wohnung; bei dauerhaft bewohnter Wohnung ein Verbrechen."
  },
  {
    "id": 21,
    "question": "§243 StGB Besonders schwerer Fall des Diebstahls",
    "answer": "Diebstahl unter erschwerenden Umständen wie Einbruch, falscher Schlüssel, Gewerbsmäßigkeit oder Ausnutzen der Hilflosigkeit."
  },
  {
    "id": 22,
    "question": "§246 StGB Unterschlagung",
    "answer": "Rechtswidrige Zueignung einer fremden beweglichen Sache ohne Wegnahme, da sich die Sache bereits im Besitz des Täters befindet."
  },
  {
    "id": 23,
    "question": "§248a StGB Geringwertiger Diebstahl / Unterschlagung",
    "answer": "Diebstahl oder Unterschlagung geringwertiger Sachen (unter 50 €)."
  },
  {
    "id": 24,
    "question": "§249 StGB Raub",
    "answer": "Diebstahl unter Anwendung von Gewalt oder Androhung von Gefahr für Leib oder Leben (Verbrechen)."
  },
  {
    "id": 25,
    "question": "§252 StGB Räuberischer Diebstahl",
    "answer": "Nach vollendetem Diebstahl auf frischer Tat Gewalt anwenden oder androhen, um das Diebesgut zu sichern (Verbrechen)."
  },
  {
    "id": 26,
    "question": "§253 StGB Erpressung",
    "answer": "Androhung von Gewalt oder eines empfindlichen Übels zur Erlangung einer rechtswidrigen Bereicherung."
  },
  {
    "id": 27,
    "question": "§255 StGB Räuberische Erpressung",
    "answer": "Erpressung unter Anwendung von Gewalt oder Androhung von Gefahr für Leib oder Leben."
  },
  {
    "id": 28,
    "question": "§257 StGB Begünstigung",
    "answer": "Hilfeleistung zur Sicherung der Vorteile aus einer zuvor begangenen rechtswidrigen Tat."
  },
  {
    "id": 29,
    "question": "§259 StGB Hehlerei",
    "answer": "Ankauf, Verkauf oder Weitergabe von Diebesgut oder unterschlagenen Sachen."
  },
  {
    "id": 30,
    "question": "§263 StGB Betrug",
    "answer": "Täuschung, Irrtum, Vermögensverfügung und Vermögensschaden mit rechtswidriger Bereicherungsabsicht."
  },
  {
    "id": 31,
    "question": "§263a StGB Computerbetrug",
    "answer": "Beeinflussung eines Datenverarbeitungsvorgangs durch unrichtige Daten zur Erlangung eines Vermögensvorteils."
  },
  {
    "id": 32,
    "question": "§265a StGB Erschleichen von Leistungen",
    "answer": "Erschleichen von Leistungen eines Automaten, Verkehrsmittels oder Eintritts zu Veranstaltungen."
  },
  {
    "id": 33,
    "question": "§267 StGB Urkundenfälschung",
    "answer": "Herstellen oder Verfälschen einer Urkunde zur Täuschung im Rechtsverkehr."
  },
  {
    "id": 34,
    "question": "§303 StGB Sachbeschädigung",
    "answer": "Rechtswidriges Beschädigen, Zerstören oder dauerhaftes Verändern fremder Sachen."
  },
  {
    "id": 35,
    "question": "§306 StGB Brandstiftung",
    "answer": "In Brand setzen fremder Gebäude, Fahrzeuge, Wälder oder Betriebe (Verbrechen)."
  },
  {
    "id": 36,
    "question": "§306f StGB Verursachen einer Brandgefahr",
    "answer": "In Brandgefahr bringen von Wäldern, Betrieben oder Feldern durch offenes Feuer oder glimmende Gegenstände."
  },
  {
    "id": 37,
    "question": "§323c StGB Unterlassene Hilfeleistung",
    "answer": "Unterlassen erforderlicher und zumutbarer Hilfeleistung bei Personen in Not."
  }
];
