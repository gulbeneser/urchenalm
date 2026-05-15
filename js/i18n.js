/* ============ BILINGUAL TRANSLATION SYSTEM ============
   German is the source language (in the HTML). English translations
   live in this dictionary. A DOM walker swaps text nodes and selected
   attributes when the user clicks the EN/DE switcher.
=========================================================== */

const I18N_LANG_KEY = 'urchenhof-lang';

const I18N_DICT = {
  /* ----- Meta / SEO ----- */
  'Frühstückspension Urchenhof · Maria Alm am Hochkönig': 'Urchenhof Bed & Breakfast · Maria Alm am Hochkönig',
  'Familiäre Frühstückspension mit Zimmern und Ferienwohnungen am Fuße des Hochkönigs in Maria Alm. Direkt am Natrun-Lift. Familie Herzog.': 'Family-run bed & breakfast pension with rooms and holiday apartments at the foot of the Hochkönig in Maria Alm. Right next to the Natrun lift. The Herzog family.',
  'Frühstückspension Urchenhof Logo': 'Urchenhof Bed & Breakfast Logo',
  'Frühstückspension Urchenhof': 'Urchenhof Bed & Breakfast',
  'Frühstückspension Urchenhof · Familie Herzog': 'Urchenhof Bed & Breakfast · The Herzog Family',
  'Zur Startseite der Frühstückspension Urchenhof': 'To the home page of the Urchenhof Bed & Breakfast',

  /* ----- Topbar / Navigation ----- */
  'Haus': 'House',
  'Zimmer': 'Rooms',
  'Apartments': 'Apartments',
  'Pauschalen': 'Packages',
  'Winter': 'Winter',
  'Sommer': 'Summer',
  'Anreise': 'Getting here',
  'Ferienhaus': 'Holiday house',
  'Preisrechner': 'Price calculator',
  'Anfrage': 'Inquiry',
  'Menu öffnen': 'Open menu',
  'seit 1962 · Familie Herzog': 'since 1962 · The Herzog Family',

  /* ----- Mobile menu ----- */
  'Willkommen': 'Welcome',
  'Das Haus': 'The House',

  /* ----- Home: hero ----- */
  'Maria Alm am Hochkönig · 5761': 'Maria Alm am Hochkönig · 5761',
  'Salzburger Land · Österreich': 'Salzburger Land · Austria',
  'Bergluft': 'Mountain air',
  '& Frühstück': '& breakfast',
  '& Frühstück': '& breakfast',
  'am Natrun.': 'at the Natrun.',
  'Eine kleine, familiengeführte Frühstückspension am Ortsrand von Maria Alm. Direkt neben dem Natrun-Lift, mit Blick auf das Steinerne Meer und einer warmen Stube, in die man am Abend gerne zurückkehrt.': 'A small, family-run bed & breakfast pension on the edge of Maria Alm. Right next to the Natrun lift, with a view of the Steinernes Meer and a warm guest room you’ll happily return to each evening.',
  'Komfortable Zimmer, drei eigenständige Ferienwohnungen und ein separates Ferienhaus in Hintermoos. Im Sommer fahren Sie unsere Bergbahnen gratis.': 'Comfortable rooms, three self-contained holiday apartments and a separate holiday house in Hintermoos. In summer, our cable cars are free for guests.',
  'Aufenthalt anfragen': 'Request a stay',

  /* ----- Home: calc banner ----- */
  'Direkt planen': 'Plan right away',
  'Urlaubspreis als': 'See your holiday price as a',
  'Richtwert': 'guideline',
  'sofort sehen.': 'right away.',
  'Geben Sie Anreise, Abreise und Personenzahl ein. Der Rechner nutzt die aktuellen Saisonpreise 2025/2026 für Zimmer und Apartments.': 'Enter arrival, departure and number of guests. The calculator uses the current 2025/2026 season rates for rooms and apartments.',
  'Schnell prüfen und danach direkt anfragen.': 'Check quickly and then send an inquiry.',

  /* ----- Home: teasers ----- */
  '02 · Zimmer': '02 · Rooms',
  'Drei Zimmer mit Balkon': 'Three rooms with balcony',
  'Doppel-, Drei- und Vierbettzimmer mit Frühstücksbuffet ab € 42 p.P.': 'Double, triple and quadruple rooms with breakfast buffet from € 42 p.p.',
  '03 · Apartments': '03 · Apartments',
  'Drei Ferienwohnungen': 'Three holiday apartments',
  'Eigene Küche, Bad, Balkon. Für 2 bis 6 Personen, ab € 69 pro Tag.': 'Private kitchen, bathroom, balcony. For 2 to 6 people, from € 69 per day.',
  '05 · Winter': '05 · Winter',
  'Hochkönigs Winterreich': 'Hochkönig’s Winter Realm',
  'Direkt am Natrun-Lift. 760 km Pisten im Ski-amadé-Verbund.': 'Right next to the Natrun lift. 760 km of slopes in the Ski amadé network.',
  '06 · Sommer': '06 · Summer',
  'Bergsommer im Pinzgau': 'Mountain summer in the Pinzgau',
  '350 km Wanderwege, Bergbahnen für Hausgäste kostenlos.': '350 km of hiking trails, cable cars free for house guests.',

  /* ----- Home: quickfacts ----- */
  'Auf einen Blick': 'At a glance',
  'Sechs Dinge, die unseren': 'Six things that make our',
  'ausmachen.': 'unique.',
  'Distanz zum': 'Distance to the',
  'Natrun-Lift': 'Natrun lift',
  'Jahre': 'years',
  'Familientradition': 'family tradition',
  'Zimmer &': 'rooms &',
  '3 Apartments': '3 apartments',
  'Wellness-': 'Wellness',
  'Stationen': 'stations',
  'Zum': 'To the',
  'Golfplatz': 'golf course',
  'Bergbahnen': 'Cable cars',
  'im Sommer': 'in summer',

  /* ----- Home: seasons split ----- */
  'Zwei Saisonen, ein Haus': 'Two seasons, one house',
  'Wann möchten Sie': 'When would you like to',
  'kommen': 'visit',
  'November – April': 'November – April',
  'Schnee, Skipass,': 'Snow, ski pass,',
  'Hüttenzauber': 'hut charm',
  'Hochkönigs Winterreich beginnt direkt am Lift vor unserer Tür. 150 km Pisten am Berg, 760 km im gesamten Ski amadé.': 'Hochkönig’s Winter Realm begins right at the lift outside our door. 150 km of slopes on the mountain, 760 km across all of Ski amadé.',
  'Winterurlaub entdecken →': 'Discover winter holidays →',
  'Mai – Oktober': 'May – October',
  'Berge, Almen,': 'Mountains, alpine pastures,',
  'klare Tage': 'clear days',
  '350 km Wanderwege, Klettersteige, Mountainbike-Routen und Bergbahnen, die für Hausgäste im Sommer kostenlos sind.': '350 km of hiking trails, via ferratas, mountain biking routes and cable cars that are free for house guests in summer.',
  'Bergsommer entdecken →': 'Discover the mountain summer →',

  /* ----- Home: pages grid ----- */
  'Alle Bereiche im Überblick': 'All sections at a glance',
  'Die Pension': 'Discover the',
  'entdecken': 'pension',
  'Familienbetrieb am Ortsrand mit Sonnenterrasse, Wellnessbereich und Liegewiese. Drei Gehminuten ins Zentrum.': 'Family-run pension on the edge of the village with sun terrace, spa area and lawn. Three minutes’ walk to the centre.',
  'Ausstattung →': 'Amenities →',
  'Zimmer mit Balkon': 'Rooms with balcony',
  'Doppelzimmer, Dreibett- und Vierbettzimmer mit reichhaltigem Frühstücksbuffet. Ab € 42 pro Person und Tag.': 'Double, triple and quadruple rooms with a rich breakfast buffet. From € 42 per person and day.',
  'Ab € 42 p.P. →': 'From € 42 p.p. →',
  'Ferienwohnungen': 'Holiday apartments',
  'Drei Apartments mit voll ausgestatteter Küche und Bergblick-Balkon. Für 2 bis 6 Personen, ab € 69 pro Tag.': 'Three apartments with fully equipped kitchen and mountain-view balcony. For 2 to 6 people, from € 69 per day.',
  'Ab € 69 / Tag →': 'From € 69 / day →',
  'Ski-Pauschalen': 'Ski packages',
  'Sieben Übernachtungen plus 6-Tages-Skipass Ski amadé. Drei Saisonpakete, Best-Ager-Week und Ladies Week.': 'Seven overnights plus 6-day Ski amadé pass. Three seasonal packages, Best Ager Week and Ladies Week.',
  'Ab € 357 p.P. →': 'From € 357 p.p. →',
  'Winter am Hochkönig': 'Winter on the Hochkönig',
  'Skifahren, Langlaufen, Nachtrodeln, Pferdeschlittenfahrten. 34 Lifte, 150 km Pisten in unmittelbarer Nähe.': 'Skiing, cross-country skiing, night tobogganing, horse-drawn sleigh rides. 34 lifts, 150 km of slopes nearby.',
  'Skigebiet →': 'Ski area →',
  'Sommer im Pinzgau': 'Summer in the Pinzgau',
  'Wandern, Biken, Klettern, Schwimmen, Bogenschießen, Tandemflüge. Aktivprogramm für jedes Alter.': 'Hiking, biking, climbing, swimming, archery, tandem flights. Active programme for every age.',
  'Aktivitäten →': 'Activities →',
  'Mit dem Auto über Lofer oder die Tauernautobahn, mit der Bahn nach Saalfelden, mit dem Flugzeug nach Salzburg.': 'By car via Lofer or the Tauern motorway, by train to Saalfelden, by plane to Salzburg.',
  'Anfahrt & Karte →': 'Directions & map →',
  '70 m² Ferienwohnung am Waldesrand. Zwei Schlafzimmer, Wintergarten, Terrasse. Ganzjährig buchbar.': '70 m² holiday apartment at the edge of the woods. Two bedrooms, conservatory, terrace. Bookable year-round.',
  'Auf Anfrage →': 'On request →',
  'Anfrage senden': 'Send inquiry',
  'Persönliche Antwort von Familie Herzog innerhalb von 24 Stunden. Telefonisch oder per Mail erreichbar.': 'Personal reply from the Herzog family within 24 hours. Reachable by phone or e-mail.',
  'Kontakt aufnehmen →': 'Get in touch →',

  /* ----- Home: tagesablauf ----- */
  'Ein Tag im Urchenhof': 'A day at the Urchenhof',
  'Von Sonnenaufgang bis': 'From sunrise to',
  'Sternenhimmel': 'starry sky',
  'Frühstücksbuffet': 'Breakfast buffet',
  'Hausgemachte Marmeladen, Pinzgauer Bauernbrot, Aufschnitt aus der Region, frischer Kaffee. Die Stube füllt sich, der Tag wird besprochen.': 'Homemade jams, Pinzgauer farmer’s bread, cold cuts from the region, fresh coffee. The dining room fills up, the day is planned.',
  'Berg oder Wanderweg': 'Mountain or hiking trail',
  'Im Winter direkt auf die Skier und mit dem Natrun-Lift hinauf. Im Sommer Wanderschuhe schnüren und Richtung Hochkönig oder Steinernes Meer aufbrechen.': 'In winter straight onto the skis and up with the Natrun lift. In summer, lace up your hiking boots and head for the Hochkönig or the Steinernes Meer.',
  'Jause auf der Hütte': 'A snack at the hut',
  'Pinzgauer Käsnocken, Kaiserschmarrn, ein kühles Radler oder eine Brettljause auf einer der vielen bewirteten Hütten in der Region.': 'Pinzgauer cheese dumplings, Kaiserschmarrn, a cold shandy or a Brettljause at one of the many catered huts in the region.',
  'Wellness oder Stube': 'Spa or living room',
  'Zurück im Haus erwartet Sie der Wellnessbereich: Sauna, Dampfbad, Infrarotkabine und Solarium. Wer es aktiv mag, bleibt im Hobby- und Tischtennisraum.': 'Back at the house the spa area awaits you: sauna, steam bath, infrared cabin and solarium. Those who like to stay active can use the hobby and table tennis room.',
  'Abendessen im Ort': 'Dinner in the village',
  'Direkt neben unserer Pension finden Sie ein Speiserestaurant. Im Ortskern weitere gutbürgerliche Gasthäuser zu Fuß erreichbar. Salzburger Nockerln zum Abschluss empfohlen.': 'There is a restaurant right next to our pension. More traditional inns can be reached on foot in the village centre. Salzburger Nockerln are recommended for dessert.',
  'Nachtskifahren oder Sterne': 'Night skiing or stars',
  'Zweimal die Woche dreht der Simmerlift am Abend seine Runden. An anderen Tagen ein Glas Wein auf der Sonnenterrasse, der Himmel über Maria Alm ist klar.': 'Twice a week the Simmer lift runs in the evening. On other days, a glass of wine on the sun terrace — the sky above Maria Alm is clear.',

  /* ----- Home: final CTA ----- */
  'Bereit für Ihren Urlaub?': 'Ready for your holiday?',
  'Familie Herzog freut sich,': 'The Herzog family looks forward',
  'von Ihnen zu hören': 'to hearing from you',
  'Anfrage senden →': 'Send inquiry →',
  '+43 6584 7893 →': '+43 6584 7893 →',

  /* ----- Haus page ----- */
  'Ruhig, sonnig, direkt': 'Quiet, sunny, right',
  'am': 'at the',
  'Unser Haus liegt am südlichen Ortsrand von Maria Alm, an der Talstation des Natrun-Liftes, dort wo die Wiesen in den Wald übergehen und der Blick frei wird auf das Steinerne Meer. Ein traditionelles Pinzgauer Stammhaus mit Sonnenterrasse, Liegewiese und genügend Parkplätzen direkt vor der Tür.': 'Our house lies on the southern edge of Maria Alm, at the base station of the Natrun lift, where the meadows give way to forest and the view opens onto the Steinernes Meer. A traditional Pinzgau house with sun terrace, lawn and ample parking right at the door.',
  'Wir sind eine Pension, kein Hotel und das mit Absicht. Für uns heißt das: persönliche Begegnung am Frühstücksbuffet, Tipps für die nächste Tour, eine warme Küche um die Ecke und Wege, die kurz sind. Drei Gehminuten ins Dorfzentrum, fünfzehn Minuten zum Erlebnisbad, ein Kilometer zum 18-Loch-Golfplatz.': 'We are a pension, not a hotel, and that’s on purpose. For us it means: personal contact at the breakfast buffet, tips for your next tour, a warm meal around the corner and short distances. Three minutes’ walk to the village centre, fifteen minutes to the adventure pool, one kilometre to the 18-hole golf course.',
  'Im hauseigenen Wellnessbereich finden Sie Sauna, Dampfbad, Solarium und eine Infrarotkabine, genau richtig nach einem langen Skitag oder einer Wanderung über die Almen. Wer es aktiv mag, bleibt im Hobby- und Tischtennisraum.': 'Our in-house spa area offers a sauna, steam bath, solarium and infrared cabin — just right after a long day skiing or a hike across the alpine meadows. Active guests will enjoy the hobby and table tennis room.',
  'Was Sie bei uns finden': 'What you’ll find with us',
  'Zentrale, ruhige Lage': 'Central, quiet location',
  'Sonnenterrasse & Liegewiese': 'Sun terrace & lawn',
  'Parkplätze direkt am Haus': 'Parking right at the house',
  'Sauna, Dampfbad, Infrarotkabine': 'Sauna, steam bath, infrared cabin',
  'Solarium': 'Solarium',
  'Hobby- & Tischtennisraum': 'Hobby & table tennis room',
  'Internetanschluss (WLAN)': 'Internet (Wi-Fi)',
  'Kabel-TV und Telefon': 'Cable TV and telephone',
  'Freibad & Tennis (15 Min. zu Fuß)': 'Outdoor pool & tennis (15 min on foot)',
  'Golfplatz nur 1 km entfernt': 'Golf course just 1 km away',

  /* Haus: wellness detail */
  '01 · Wellness': '01 · Wellness',
  'Wärme nach': 'Warmth after',
  'langen Tag': 'a long day',
  'Unser kleiner, hauseigener Wellnessbereich ist für Hausgäste kostenfrei nutzbar. Vier Stationen, die nach Skitag oder Bergtour besonders wohltun.': 'Our small in-house spa area is free for house guests. Four stations that feel particularly good after a day on the slopes or a mountain tour.',
  'Finnische Sauna': 'Finnish sauna',
  'Klassisch und heiß, mit Aufguss.': 'Classic and hot, with infusion.',
  'Dampfbad': 'Steam bath',
  'Sanfte Wärme für müde Atemwege.': 'Gentle warmth for tired airways.',
  'Infrarotkabine': 'Infrared cabin',
  'Tiefenwärme für Muskeln und Gelenke.': 'Deep warmth for muscles and joints.',
  'Für die Bräune zwischen den Wintertagen.': 'For a tan between winter days.',
  'Ruhezone': 'Relaxation zone',
  'Mit Liegen und Tee.': 'With loungers and tea.',
  'Liegewiese': 'Lawn',
  'Im Sommer im Garten.': 'In the garden in summer.',

  /* Haus: Frühstück */
  '02 · Frühstück': '02 · Breakfast',
  'Reichhaltiges': 'Rich',
  'Pensionsgäste finden am Morgen ein Frühstück, das den Tag trägt. Wir setzen auf Produkte aus der Region und auf das, was Familie Herzog selbst gerne isst.': 'In the morning our guests are welcomed with a breakfast that carries them through the day. We focus on regional products and the things the Herzog family itself loves to eat.',
  'Bauernbrot': 'Farmer’s bread',
  'Aus dem Pinzgau, knusprig.': 'From the Pinzgau, crusty.',
  'Hausmarmeladen': 'Homemade jams',
  'Selbst eingekocht, je nach Saison.': 'Made in-house, depending on the season.',
  'Käse & Aufschnitt': 'Cheese & cold cuts',
  'Aus der Region.': 'From the region.',
  'Frische Eier': 'Fresh eggs',
  'Auf Wunsch zubereitet.': 'Prepared on request.',
  'Joghurt & Müsli': 'Yoghurt & muesli',
  'Auch glutenfrei.': 'Gluten-free also available.',
  'Obst & Säfte': 'Fruit & juices',
  'Saisonal frisch gepresst.': 'Seasonally freshly squeezed.',
  'Kaffee & Tee': 'Coffee & tea',
  'Espresso aus der Maschine.': 'Espresso from the machine.',
  'Sonderwünsche': 'Special requests',
  'Einfach am Vorabend ansagen.': 'Just let us know the evening before.',

  /* Haus: distances */
  '03 · In der Umgebung': '03 · In the surroundings',
  'Alles': 'Everything',
  'Reichweite': 'reach',
  'Unsere Lage am Ortsrand bedeutet kurze Wege. Vom Lift direkt vor der Tür bis zum 18-Loch-Golfplatz, alles ist zu Fuß oder mit wenigen Minuten Fahrt erreichbar.': 'Our location on the edge of the village means short distances. From the lift outside our door to the 18-hole golf course, everything is within walking or a short drive.',
  'Ortszentrum': 'Village centre',
  'Min. zu Fuß': 'min on foot',
  'Min.': 'min',
  'Speiserestaurant': 'Restaurant',
  'nebenan': 'next door',
  'Supermarkt': 'Supermarket',
  'Erlebnisbad Sommerstein': 'Sommerstein adventure pool',
  'Tennisplätze': 'Tennis courts',
  'Bushaltestelle': 'Bus stop',
  'Bahnhof Saalfelden': 'Saalfelden train station',

  /* ----- Zimmer page ----- */
  'Schlafen, wo der Tag': 'Sleeping where the day',
  'sanft beginnt': 'gently begins',
  'In der Pension Urchenhof wählen Sie zwischen einem Doppelzimmer und zwei Mehrbettzimmern. Alle Zimmer haben Balkon mit Bergblick. Am Morgen erwartet Sie ein reichhaltiges Frühstücksbuffet mit hausgemachten Marmeladen, Pinzgauer Bauernbrot, Aufschnitt aus der Region und frischem Kaffee.': 'At the Urchenhof pension you can choose between a double room and two multi-bed rooms. All rooms have a balcony with a mountain view. In the morning a rich breakfast buffet awaits you with homemade jams, Pinzgauer farmer’s bread, cold cuts from the region and fresh coffee.',
  'No. 01': 'No. 01',
  'Doppelzimmer mit Balkon': 'Double room with balcony',
  '1 Doppelbett': '1 double bed',
  '· Balkon · Dusche/WC': '· Balcony · Shower/WC',
  'Belegung 1 – 2 Personen · inkl. Frühstücksbuffet': 'For 1 – 2 people · breakfast buffet included',
  'Pro Person/Tag': 'Per person/day',
  'ab € 42,00': 'from € 42.00',
  'p.P.': 'p.p.',
  'No. 02': 'No. 02',
  'Dreibettzimmer mit Balkon': 'Triple room with balcony',
  '1 Doppelbett · 1 Couchliege': '1 double bed · 1 sofa bed',
  'Belegung 2 – 3 Personen · inkl. Frühstücksbuffet': 'For 2 – 3 people · breakfast buffet included',
  'No. 03': 'No. 03',
  'Vierbettzimmer mit Balkon': 'Quadruple room with balcony',
  '1 Doppelbett · 1 Doppelcouch': '1 double bed · 1 double sofa bed',
  'Belegung 2 – 4 Personen · inkl. Frühstücksbuffet': 'For 2 – 4 people · breakfast buffet included',

  /* Zimmer: inclusive */
  'Im Zimmerpreis enthalten': 'Included in the room price',
  'Was Sie nicht': 'What you don’t',
  'extra zahlen': 'pay extra for',
  'müssen.': '.',
  'Reichhaltiges Frühstücksbuffet': 'Rich breakfast buffet',
  'Bettwäsche und Handtücher': 'Bed linen and towels',
  'Nutzung des Wellnessbereichs': 'Use of the spa area',
  'WLAN im gesamten Haus': 'Wi-Fi throughout the house',
  'Kabelfernsehen & Telefon': 'Cable TV & telephone',
  'Bergbahnen im Sommer (Hausgästekarte)': 'Cable cars in summer (guest card)',
  'Schwimmbad im Sommer (Hausgästekarte)': 'Pool in summer (guest card)',

  /* Zimmer: booking conditions */
  'Check-in': 'Check-in',
  'ab 14:00 Uhr': 'from 2:00 p.m.',
  'Frühere Anreise nach Absprache gerne möglich. Bitte vorab kurz anrufen.': 'Earlier check-in is gladly possible by arrangement. Please call ahead briefly.',
  'Check-out': 'Check-out',
  'bis 10:00 Uhr': 'until 10:00 a.m.',
  'Spätere Abreise auf Anfrage und nach Verfügbarkeit.': 'Later check-out on request and subject to availability.',
  'Mindestaufenthalt': 'Minimum stay',
  '3 Nächte': '3 nights',
  'In der Hauptsaison meist 7 Nächte (Samstag bis Samstag).': 'Usually 7 nights (Saturday to Saturday) in high season.',
  'Zahlung': 'Payment',
  'vor Ort': 'on site',
  'Bar oder per Bankomatkarte. Anzahlung bei Anfrage besprochen.': 'Cash or debit card. Deposit discussed on request.',

  /* ----- Apartments page ----- */
  'Eigene vier Wände,': 'Your own four walls,',
  'auf Zeit': 'for a while',
  'Die Ferienwohnungen im Urchenhof sind für Gäste, die ihre Tagesabläufe selbst gestalten möchten. Komfortabel eingerichtete Küche mit Essecke, eigenes Bad, Balkon mit Blick auf das Steinerne Meer und genügend Platz für Familien oder kleine Gruppen.': 'The holiday apartments at the Urchenhof are for guests who want to plan their days themselves. A comfortably furnished kitchen with dining nook, private bathroom, balcony with views of the Steinernes Meer and plenty of space for families or small groups.',
  'FEWO · I': 'APT · I',
  'Apartment für 2 – 4 Personen': 'Apartment for 2 – 4 people',
  'Schlafzimmer': 'Bedroom',
  '1 Raum': '1 room',
  'Diele & Küche': 'Hallway & kitchen',
  'komplett': 'complete',
  'Wohnzimmer mit Doppelcouch': 'Living room with double sofa bed',
  '2 Schlafplätze': '2 sleeping spaces',
  'Bad oder Dusche': 'Bath or shower',
  '2 WC': '2 toilets',
  'Balkon': 'Balcony',
  'Bergblick': 'Mountain view',
  'Pro Ferienwohnung/Tag': 'Per apartment/day',
  'ab € 69,00': 'from € 69.00',
  'ohne Verpflegung': 'no meals',
  'FEWO · II': 'APT · II',
  'Apartment für 4 – 6 Personen': 'Apartment for 4 – 6 people',
  'Zwei Schlafzimmer': 'Two bedrooms',
  '2 Räume': '2 rooms',
  'Diele & Wohnküche': 'Hallway & kitchen-living room',
  'Dusche/WC & Bad/WC': 'Shower/WC & bath/WC',
  '2 Bäder': '2 bathrooms',
  'Mansarde': 'Attic room',
  'zusätzlich': 'additional',
  'ab € 98,00': 'from € 98.00',

  /* Apartment: kitchen list */
  'Vollständig ausgestattet': 'Fully equipped',
  'Alles, was Sie zum': 'Everything you need',
  'Wohnen brauchen': 'to live comfortably',
  'Küche': 'Kitchen',
  'Elektroherd': 'Electric stove',
  'Backofen': 'Oven',
  'Kühlschrank': 'Refrigerator',
  'Geschirrspüler': 'Dishwasher',
  'Kaffeemaschine': 'Coffee machine',
  'Wasserkocher': 'Kettle',
  'Toaster': 'Toaster',
  'Essecke': 'Dining nook',
  'Geschirr': 'Tableware',
  'Teller & Schüsseln': 'Plates & bowls',
  'Gläser & Tassen': 'Glasses & cups',
  'Besteck komplett': 'Full cutlery set',
  'Kochtöpfe & Pfannen': 'Pots & pans',
  'Schneidebretter': 'Cutting boards',
  'Messer-Set': 'Knife set',
  'Servierbesteck': 'Serving cutlery',
  'Backformen': 'Baking tins',
  'Wohnen': 'Living',
  'Bettwäsche inkl.': 'Bed linen incl.',
  'Handtücher inkl.': 'Towels incl.',
  'Kabel-TV': 'Cable TV',
  'Telefon': 'Telephone',
  'WLAN': 'Wi-Fi',
  'Radio': 'Radio',
  'Stauraum': 'Storage space',
  'Bügeleisen': 'Iron',
  'Außen & Service': 'Outdoor & service',
  'Eigener Balkon': 'Private balcony',
  'Parkplatz am Haus': 'Parking at the house',
  'Waschmaschine': 'Washing machine',
  'Wellnessbereich': 'Spa area',
  'Endreinigung': 'Final cleaning',
  'Skikeller': 'Ski storage',

  /* Apartments inclusive + conditions */
  'Im Preis enthalten': 'Included in the price',
  'Was Sie': 'What you',
  'nicht mitbringen': 'don’t need to bring',
  'Strom & Heizung': 'Electricity & heating',
  'Wasser': 'Water',
  'Bettwäsche & Handtücher': 'Bed linen & towels',
  'Wellnessbereich (Sauna, Dampfbad, Solarium)': 'Spa area (sauna, steam bath, solarium)',
  'Kabel-TV & Telefon': 'Cable TV & telephone',
  'Skikeller im Winter': 'Ski storage in winter',
  'Tischtennis & Hobbyraum': 'Table tennis & hobby room',
  'ab 15:00 Uhr': 'from 3:00 p.m.',
  'Schlüsselübergabe persönlich durch Familie Herzog.': 'Keys handed over personally by the Herzog family.',
  'Apartment besenrein hinterlassen, Endreinigung übernehmen wir.': 'Leave the apartment broom-clean, final cleaning is on us.',
  'In der Hauptsaison Samstag bis Samstag.': 'Saturday to Saturday in high season.',
  'Haustiere': 'Pets',
  'auf Anfrage': 'on request',
  'Kleine Hunde nach vorheriger Absprache willkommen.': 'Small dogs welcome by prior arrangement.',

  /* ----- Pauschalen page ----- */
  'Eine Woche, ein Pass,': 'One week, one pass,',
  '865 Pisten': '865 slopes',
  'Pauschalen · Ski amadé': 'Packages · Ski amadé',
  'Im Skiverbund Ski amadé liegen fünf Regionen, 25 Orte, 270 Liftanlagen und 760 Pistenkilometer hinter einem einzigen Pass. Wir haben drei Saison-Pakete für Sie geschnürt, dazu eine Best-Ager-Woche, eine Ladies Week und unsere Oster-Familienaktion.': 'The Ski amadé network covers five regions, 25 villages, 270 lifts and 760 kilometres of slopes — all on a single pass. We have put together three seasonal packages, plus a Best Ager Week, a Ladies Week and our Easter family promotion.',
  'Alle Preise basieren auf 7 Übernachtungen und beinhalten den 6-Tages-Skipass Ski amadé. Alternativ buchbar in unserem 2-er Apartment (ohne Verpflegung, inkl. Strom und Abgaben).': 'All prices are based on 7 nights and include the 6-day Ski amadé pass. Alternatively bookable in our 2-person apartment (no meals, incl. electricity and taxes).',
  'Vorsaison · Ski amadé Start': 'Pre-season · Ski amadé Start',
  'Saison': 'Season',
  'auftakt': ' opener',
  'Buchbar von Saisonbeginn bis 21.12.2025': 'Bookable from the start of the season until 21 Dec 2025',
  '7 Übernachtungen inkl. aller Abgaben': '7 nights incl. all taxes',
  '6-Tages-Skipass Ski amadé': '6-day Ski amadé pass',
  'Reichhaltiges Frühstücksbuffet (im Doppelzimmer)': 'Rich breakfast buffet (in the double room)',
  'Doppelzimmer mit Frühstück': 'Double room with breakfast',
  '/Pers.': '/pers.',
  '2-er Apartment ohne Verpflegung': '2-person apartment, no meals',
  '/2 Pers.': '/2 pers.',
  'Hauptsaison · Ski amadé Live': 'High season · Ski amadé Live',
  'Königs': 'King’s',
  'tour': ' tour',
  '32 Pistenkilometer am Stück, 6.700 Höhenmeter': '32 km of slopes at a stretch, 6,700 m of vertical',
  'Frühstücksbuffet (im Doppelzimmer)': 'Breakfast buffet (in the double room)',
  'Nachsaison · Ski amadé Finale': 'Late season · Ski amadé Finale',
  'Frühlings': 'Spring',
  'schnee': ' snow',
  'Buchbar vom 07.03.2026 bis Saisonende': 'Bookable from 7 Mar 2026 until the end of the season',
  '60+ · Best Ager Week': '60+ · Best Ager Week',
  'Junggebliebene': 'The young at heart',
  'fahren gratis': 'ski for free',
  'Saisonbeginn bis 24.12.2025 & 14.03. – 21.03.2026': 'Start of season until 24 Dec 2025 & 14 Mar – 21 Mar 2026',
  '6-Tages-Skipass Ski amadé GRATIS': '6-day Ski amadé pass FREE',
  '1 Tag gratis Skiguiding': '1 day of free ski guiding',
  'Sammelpass für Stockwappen': 'Collector pass for pole badges',
  'Jahrgang 1966 oder früher': 'Born in 1966 or earlier',
  'Ladies Week · 1 + 1 gratis': 'Ladies Week · 1 + 1 free',
  'Bring a': 'Bring a',
  'Friend': 'Friend',
  '21.03. – 28.03.2026 · Jahrgang 2006 oder früher': '21 Mar – 28 Mar 2026 · Born in 2006 or earlier',
  '2 Stück 6-Tages-Skipässe (1 + 1 gratis)': '2 × 6-day ski passes (1 + 1 free)',
  '1 Tag gratis Skitest der neuesten Modelle': '1 day of free ski testing of the latest models',
  '1 Tag gratis Skiguiding für eine Person': '1 day of free ski guiding for one person',
  'Oster-Familienaktion': 'Easter family promotion',
  'Skispaß für die': 'Ski fun for the',
  'ganze Familie': 'whole family',
  'Auf Anfrage · zu Ostern': 'On request · at Easter',
  'Familienfreundliche Konditionen': 'Family-friendly conditions',
  'Ermäßigungen für Kinder': 'Discounts for children',
  'Sonnige Pistenkilometer im Frühling': 'Sunny kilometres of slopes in spring',
  'Bitte gewünschte Pauschalenvariante angeben': 'Please specify your preferred package variant',
  'Anfrage erforderlich': 'Inquiry required',

  /* Pauschalen: skipass inclusive */
  'Ski amadé · 5 Regionen': 'Ski amadé · 5 regions',
  'Was Ihr': 'What your',
  '6-Tages-Skipass': '6-day ski pass',
  'alles kann.': 'can do.',
  'Hochkönig (Maria Alm, Dienten, Mühlbach)': 'Hochkönig (Maria Alm, Dienten, Mühlbach)',
  'Salzburger Sportwelt (Flachau, Wagrain)': 'Salzburger Sportwelt (Flachau, Wagrain)',
  'Schladming-Dachstein (Planai, Hochwurzen)': 'Schladming-Dachstein (Planai, Hochwurzen)',
  'Gastein (Bad Hofgastein, Schlossalm)': 'Gastein (Bad Hofgastein, Schlossalm)',
  'Großarltal (Gartenkogel, Großeck)': 'Großarltal (Gartenkogel, Großeck)',
  '270 Liftanlagen insgesamt': '270 lifts in total',
  '760 km präparierte Pisten': '760 km of groomed slopes',
  'Ski-Safari zwischen den Gebieten': 'Ski safari between the areas',
  'Nachtskifahren am Simmerlift': 'Night skiing at the Simmer lift',
  'Gratis Skibus im Hochkönig-Gebiet': 'Free ski bus in the Hochkönig area',
  'Kinder bis 6 Jahre gratis': 'Children up to 6 years free',
  'Schladming-Dachstein WM-Pisten': 'Schladming-Dachstein World Cup slopes',

  /* Pauschalen: ski services */
  'Skischule': 'Ski school',
  'im Ort': 'in the village',
  'Drei Skischulen in Maria Alm. Kinderkurse, Erwachsenenkurse, Privatunterricht. Wir vermitteln gerne.': 'Three ski schools in Maria Alm. Children’s courses, adult courses, private lessons. We are happy to arrange this for you.',
  'Skiverleih': 'Ski rental',
  '3 Min. Weg': '3 min away',
  'Mehrere Verleihstationen direkt im Dorf. Ski, Snowboard, Helm und Schuhe für alle Niveaus.': 'Several rental stations right in the village. Skis, snowboards, helmets and boots for all levels.',
  'Skiguiding': 'Ski guiding',
  'in Pauschalen': 'in packages',
  'Bei Best Ager Week und Ladies Week ist ein Tag Skiguiding inkludiert. Geheimtipps vom Profi.': 'In Best Ager Week and Ladies Week one day of ski guiding is included. Insider tips from a professional.',
  'Skidepot': 'Ski depot',
  'am Berg': 'on the mountain',
  'Lassen Sie Ski und Stöcke direkt an der Bergstation des Natrun-Liftes über Nacht.': 'Leave your skis and poles overnight directly at the top station of the Natrun lift.',

  /* ----- Winter page ----- */
  'Schneesicher,': 'Snow-sure,',
  'seit': 'for',
  'Jahrzehnten': 'decades',
  'Winter · Hochkönigs Winterreich': 'Winter · Hochkönig’s Winter Realm',
  'Das Skigebiet Hochkönig reicht von Maria Alm über Aberg, Hintermoos und Hinterthal bis nach Dienten und Mühlbach. Direkt vor unserer Haustür,': 'The Hochkönig ski area stretches from Maria Alm via Aberg, Hintermoos and Hinterthal to Dienten and Mühlbach. Right outside our front door,',
  'der Natrun-Lift bringt Sie hinauf in eine der schönsten Skiregionen der Alpen': 'the Natrun lift takes you up into one of the most beautiful ski regions of the Alps',
  'Die Mischung macht\'s: zuverlässiger Naturschnee, modern präparierte Pisten, gemütliche Hütten zwischen den Abfahrten und Liftanlagen, an denen man selten ansteht. Wir liegen in einem familienfreundlichen Skigebiet auf 860 bis 1.900 Metern Seehöhe, also dort, wo der Winter noch ein Winter ist.': 'It’s the mix that does it: reliable natural snow, modern groomed pistes, cosy huts between the runs and lifts where you rarely have to queue. We sit in a family-friendly ski area at 860 to 1,900 metres above sea level — exactly where winter is still winter.',
  'Für Snowboarder und New-School-Fahrer warten mehrere Snowparks und Easy Parks. Die jährliche Hochkönig Style Championship findet ebenfalls hier statt. Zweimal die Woche dreht der Simmerlift am Abend seine Runden: Nachtskifahren unter dem Sternenhimmel.': 'For snowboarders and new-school riders, several snow parks and easy parks are waiting. The annual Hochkönig Style Championship also takes place here. Twice a week the Simmer lift runs in the evening — night skiing under the starry sky.',
  'Seilbahn- und Liftanlagen am Hochkönig': 'Cable cars and lifts on the Hochkönig',
  'Pisten zwischen 860 und 1.900 m': 'Slopes between 860 and 1,900 m',
  'Lifte im gesamten Ski-amadé-Verbund': 'Lifts in the whole Ski amadé network',
  'Pistenkilometer mit einem Skipass': 'Slope kilometres with one ski pass',
  'Langlauf': 'Cross-country',
  '30 km bestens präparierte Loipen mit Anschluss an das Pinzgauer Loipennetz.': '30 km of excellently groomed trails connected to the Pinzgau cross-country network.',
  'Winterwandern': 'Winter hiking',
  '85 km geräumte Wege in Maria Alm, Dienten und Mühlbach. Schneeschuhe inklusive.': '85 km of cleared paths in Maria Alm, Dienten and Mühlbach. Snowshoes included.',
  'Rodeln': 'Tobogganing',
  'Zahlreiche Bahnen, manche bis spät beleuchtet. Geheimtipp: Nachtrodeln nach dem Glühwein.': 'Several runs, some lit until late. Insider tip: night tobogganing after the mulled wine.',
  'Eisstock & Schlittenfahrt': 'Curling & sleigh rides',
  'Eisstockbahnen im Ort, Pferdeschlitten durch verschneite Wälder.': 'Curling lanes in the village, horse-drawn sleighs through snowy forests.',
  'Anfänger & Familien': 'Beginners & families',
  'Blaue Pisten': 'Blue slopes',
  'Sanfte Hänge und Übungslifte. Ideal für Einsteiger und Familien mit Kindern.': 'Gentle slopes and practice lifts. Ideal for beginners and families with children.',
  'Fortgeschrittene': 'Intermediate',
  'Rote Pisten': 'Red slopes',
  'Der Großteil des Skigebiets. Abwechslungsreiche Abfahrten mit Panoramablick.': 'The majority of the ski area. Varied runs with panoramic views.',
  'Könner & Profis': 'Advanced & experts',
  'Schwarze Pisten': 'Black slopes',
  'Steile Abfahrten und Tiefschnee. Wer Herausforderung sucht, findet sie hier.': 'Steep runs and deep snow. If you’re looking for a challenge, this is it.',
  'Hochkönigs Hütten': 'Hochkönig’s huts',
  'Zwischen den Abfahrten warten gemütliche Hütten mit Pinzgauer Spezialitäten. Eine Auswahl unserer Lieblinge auf dem Berg.': 'Between the runs, cosy huts with Pinzgau specialities are waiting. A selection of our favourites on the mountain.',
  'Stoißerhütte': 'Stoißerhütte',
  'Aberg': 'Aberg',
  'Hochkeilhaus': 'Hochkeilhaus',
  'Mühlbach': 'Mühlbach',
  'Königsalm': 'Königsalm',
  'Hinterthal': 'Hinterthal',
  'Erichhütte': 'Erichhütte',
  'Dientner Sattel': 'Dientner Sattel',
  'Schernthannerhütte': 'Schernthannerhütte',
  'Hochkönighaus': 'Hochkönighaus',
  'Bürglalm': 'Bürglalm',

  /* ----- Sommer page ----- */
  'lange Abende': 'long evenings',
  'Sommer · Bergsommer im Pinzgau': 'Summer · Mountain summer in the Pinzgau',
  'Das Bilderbuchdorf Maria Alm liegt zwischen dem mächtigen Steinernen Meer im Norden und den sanften Grasbergen im Süden.': 'The picture-book village of Maria Alm lies between the mighty Steinernes Meer in the north and the gentle grass mountains in the south.',
  'Ein ausgedehntes Wegenetz, 350 km gut markierte Pfade, Klettersteige, Mountainbike-Routen, ein Aktiv-Fitnesspark': 'An extensive network of trails: 350 km of well-marked paths, via ferratas, mountain biking routes, an active fitness park',
  ', und am Abend eine Jause auf der Hütte.': ', and a snack at a hut in the evening.',
  'Inklusive für Hausgäste': 'Included for house guests',
  'Bergbahnen und Schwimmbad in Maria Alm im Sommer kostenlos.': 'Cable cars and pool in Maria Alm free in summer.',
  'Wandern & Bergsteigen': 'Hiking & mountaineering',
  'Eine atemberaubende Kulisse': 'A breathtaking backdrop',
  '350 km markierte Wanderwege in einer der schönsten Wanderregionen Österreichs. Der Aktiv Fitness Park bietet Strecken für Anfänger und Fortgeschrittene, Nordic-Walking-Routen inklusive.': '350 km of marked hiking trails in one of the most beautiful hiking regions of Austria. The Active Fitness Park offers routes for beginners and advanced hikers, Nordic walking trails included.',
  'Für Kletterer und Klettersteig-Liebhaber ist der Hochkönig ein wahres Eldorado, einer der mächtigsten Gebirgsstöcke der nördlichen Kalkalpen.': 'For climbers and via ferrata enthusiasts, the Hochkönig is a true paradise — one of the most imposing massifs in the Northern Limestone Alps.',
  'Wanderkarten anfordern →': 'Request hiking maps →',
  'Radfahren & Biken': 'Cycling & biking',
  'Ein Bergabenteuer auf zwei Rädern': 'A mountain adventure on two wheels',
  'Vorbei an Hütten und entlang saftiger Almwiesen führen ausgeschilderte Touren aller Schwierigkeitsgrade durch die Ferienregion Hochkönig. Wer mehr will, plant die 10-Tages-Tour Watzmann-Hochkönig-Runde.': 'Marked tours of every difficulty lead through the Hochkönig holiday region, past huts and along lush alpine meadows. If you want more, plan the 10-day Watzmann-Hochkönig round.',
  'E-Bike-Verleih und Ladestationen im Ort, Service-Stationen entlang der Hauptrouten. Wir verraten Ihnen gerne unsere Lieblingstour.': 'E-bike rental and charging stations in the village, service stations along the main routes. We are happy to share our favourite tour with you.',
  'Touren-Tipps holen →': 'Get tour tips →',
  'Spaß für die Familie': 'Family fun',
  'Spiel, Spannung, Abkühlung': 'Play, thrills, cool-down',
  'Minigolf, Pinzgauer Ausritt, Tennis, Golf, Tandemflug mit dem Paragleiter, Sommerrodelbahn am Biberg in Saalfelden, Adventure-Park und Waldseilgarten oder Bogenparcours.': 'Mini golf, Pinzgau horse rides, tennis, golf, tandem paragliding, summer toboggan run on the Biberg in Saalfelden, adventure park and forest ropes course or archery trail.',
  'Für die heißen Tage: Erlebnisbad Sommerstein in Maria Alm, Freischwimmbad Mühlbach oder ein Sprung in den Ritzensee.': 'For hot days: Sommerstein adventure pool in Maria Alm, Mühlbach outdoor pool or a jump into Lake Ritzen.',
  'Kinderprogramm ansehen →': 'See the children’s programme →',
  'Top Wandertouren ab Maria Alm': 'Top hiking tours from Maria Alm',
  'Sechs Touren, die wir Ihnen': 'Six tours that we',
  'empfehlen': 'recommend',
  'Natrun-Runde': 'Natrun loop',
  'Sanfter Rundweg direkt ab dem Haus, für jedes Alter geeignet.': 'A gentle loop right from the house, suitable for any age.',
  'leicht': 'easy',
  'Hundstein-Gipfel': 'Hundstein summit',
  'Aussichtsberg mit 360-Grad-Panorama über das Pinzgauer Land.': 'A scenic peak with 360-degree panorama over the Pinzgau region.',
  'mittel': 'medium',
  'Hochkönig-Königsweg': 'Hochkönig Royal Path',
  'Mehrtägige Hüttenwanderung, der Klassiker der Region.': 'Multi-day hut-to-hut hike, the classic of the region.',
  '3 Tage': '3 days',
  'schwer': 'hard',
  'Steinerne Meer Plateau': 'Steinernes Meer plateau',
  'Karstlandschaft mit Riemannhaus, alpine Stimmung pur.': 'Karst landscape with the Riemannhaus, pure alpine atmosphere.',
  'Almenrunde Hinterthal': 'Hinterthal alpine loop',
  'Über drei bewirtete Almen, Käsejause inklusive.': 'Over three catered alpine huts, cheese snack included.',
  'Ritzensee & Biberg': 'Lake Ritzen & Biberg',
  'Familiäre Tour mit Badestop und Sommerrodelbahn.': 'Family-friendly tour with a swim stop and summer toboggan run.',
  'Schlechtes Wetter?': 'Bad weather?',
  'Auch bei Regen gibt es': 'Even in the rain there is',
  'genug zu tun': 'plenty to do',
  'Erlebnisbad Sommerstein mit Rutschen & Sauna': 'Sommerstein adventure pool with slides & sauna',
  'Festung Hohensalzburg (1 h Fahrt)': 'Hohensalzburg Fortress (1 h drive)',
  'Salzwelten Hallein (Salzbergwerk)': 'Hallein Salt Worlds (salt mine)',
  'Eisriesenwelt Werfen (Eishöhle)': 'Eisriesenwelt Werfen (ice cave)',
  'Museum Bramberg (Mineralien)': 'Bramberg Museum (minerals)',
  'Therme Amadé in Altenmarkt': 'Therme Amadé in Altenmarkt',
  'Outlet Center Salzburg': 'Outlet Center Salzburg',
  'Wellnessbereich im Urchenhof': 'Spa area at the Urchenhof',
  'Lese-Stube mit Kachelofen': 'Reading room with tiled stove',
  'Tischtennis im Hobbyraum': 'Table tennis in the hobby room',

  /* ----- Anreise page ----- */
  'Über die Tauern,': 'Over the Tauern,',
  'ins Tal': 'into the valley',
  '01 · Mit dem Auto': '01 · By car',
  'Aus Richtung München': 'Coming from Munich',
  'Autobahnabfahrt': 'Motorway exit',
  'Siegsdorf': 'Siegsdorf',
  '– Lofer – Saalfelden – Maria Alm. Etwa 1 Stunde 45 Minuten von München aus.': '– Lofer – Saalfelden – Maria Alm. About 1 hour 45 minutes from Munich.',
  '02 · Mit dem Auto': '02 · By car',
  'Aus Richtung Wien': 'Coming from Vienna',
  'Salzburg': 'Salzburg',
  '– A10 Tauernautobahn – Abfahrt Bischofshofen – Mühlbach – Dienten – Hinterthal – Maria Alm.': '– A10 Tauern motorway – Bischofshofen exit – Mühlbach – Dienten – Hinterthal – Maria Alm.',
  '03 · Mit der Bahn': '03 · By train',
  'Weiterreise nach Maria Alm bequem mit dem Bus oder per Taxi. Auf Wunsch organisieren wir gerne einen Transfer ab Bahnhof.': 'Onward travel to Maria Alm is easy by bus or taxi. On request we are happy to arrange a transfer from the station.',
  '04 · Mit dem Flugzeug': '04 · By plane',
  'Drei Flughäfen in der Nähe': 'Three airports nearby',
  'Salzburg (ca. 80 km), München (ca. 175 km) und der Kleinflugplatz Zell am See für allgemeine Luftfahrt.': 'Salzburg (approx. 80 km), Munich (approx. 175 km) and the small Zell am See airfield for general aviation.',
  'Adresse & Lage': 'Address & location',
  'Familie Herzog': 'The Herzog Family',
  'Urchen 11': 'Urchen 11',
  '5761 Maria Alm': '5761 Maria Alm',
  'Österreich': 'Austria',
  'Tel. +43 6584 7893': 'Tel. +43 6584 7893',
  'Fax +43 6584 7295 15': 'Fax +43 6584 7295 15',
  'München': 'Munich',
  'ca. 80 km': 'approx. 80 km',
  'ca. 175 km': 'approx. 175 km',
  'Zell am See': 'Zell am See',
  'Kleinflug': 'General aviation',
  'Im Ort unterwegs': 'Getting around the village',
  'Auch ohne Auto': 'Well connected',
  'gut bewegt': 'without a car',
  'Gratis Skibus': 'Free ski bus',
  'Skigebiet ohne Auto': 'Ski area without a car',
  'Mit der Hochkönig Card fahren Sie im Winter kostenlos zwischen Maria Alm, Hintermoos, Hinterthal, Dienten und Mühlbach. Bushaltestelle 200 m vom Haus.': 'With the Hochkönig Card you travel free in winter between Maria Alm, Hintermoos, Hinterthal, Dienten and Mühlbach. Bus stop 200 m from the house.',
  'Dorfbus & Wanderbus': 'Village bus & hiking bus',
  'Im Sommer': 'In summer',
  'Der Wanderbus bringt Sie in die Ausgangspunkte der schönsten Touren. Mit der Hochkönig Card im Sommer ebenfalls inkludiert.': 'The hiking bus brings you to the starting points of the most beautiful tours. Also included with the Hochkönig Card in summer.',
  'Taxi-Transfer': 'Taxi transfer',
  'Vom Bahnhof Saalfelden': 'From Saalfelden station',
  'Wir organisieren auf Wunsch einen Transfer ab Bahnhof Saalfelden (12 km) oder Flughafen Salzburg. Bitte vorab Bescheid geben.': 'On request we are happy to arrange a transfer from Saalfelden station (12 km) or Salzburg airport. Please let us know in advance.',
  'Parkplätze': 'Parking',
  'Direkt am Haus': 'Right at the house',
  'Kostenlose Parkplätze direkt vor der Pension, auch im Winter geräumt. Genügend Platz für Anhänger und Wohnmobile auf Anfrage.': 'Free parking right in front of the pension, cleared in winter as well. Enough space for trailers and motorhomes on request.',
  'E-Mobilität': 'E-mobility',
  'Ladestation im Ort': 'Charging station in the village',
  'Öffentliche E-Auto-Ladestationen befinden sich in 5 Gehminuten Entfernung im Ortskern. Adapter auf Anfrage.': 'Public e-car charging stations are 5 minutes’ walk away in the village centre. Adapter available on request.',
  'GPS-Koordinaten': 'GPS coordinates',
  'Für die Navigation': 'For navigation',
  'Breitengrad 47.4015° N, Längengrad 12.9000° E. Geben Sie in Ihr Navigationsgerät einfach "Urchen 11, 5761 Maria Alm" ein.': 'Latitude 47.4015° N, longitude 12.9000° E. Simply enter “Urchen 11, 5761 Maria Alm” into your navigation device.',

  /* ----- Ferienhaus ----- */
  'Unser Ferienhaus': 'Our holiday house',
  'in': 'in',
  'Hintermoos': 'Hintermoos',
  'Ferienhaus · Unabhängig wohnen': 'Holiday house · Independent living',
  'Am Waldesrand,': 'At the edge of the woods,',
  'für sich allein': 'all to yourself',
  'Wer den Urlaub gerne ganz für sich gestaltet, findet im Ferienhaus Hintermoos die richtige Adresse. Am Waldesrand, in ruhiger und sonniger Lage, mit eigenem Eingang und eigenem Garten.': 'For those who like to plan their holiday entirely on their own terms, the Hintermoos holiday house is the right address. At the edge of the woods, in a quiet, sunny location, with its own entrance and garden.',
  'Im Sommer ein idealer Ausgangspunkt für lange Wanderungen, im Winter eine heimelige Bleibe in unmittelbarer Nähe zum Skigebiet. Die 70 m² große Wohnung erstreckt sich über eine Haushälfte.': 'In summer an ideal starting point for long hikes, in winter a cosy retreat right next to the ski area. The 70 m² apartment spans one half of the house.',
  'Wohnfläche': 'Living area',
  'Wohnzimmer': 'Living room',
  'mit Wintergarten': 'with conservatory',
  'Bad': 'Bathroom',
  'Dusche/WC': 'Shower/WC',
  'Außenbereich': 'Outdoors',
  'Terrasse': 'Terrace',
  'Preis': 'Price',
  'Hintermoos im': 'Hintermoos in',
  'Der kleine Ortsteil von Maria Alm liegt direkt im Skigebiet Hochkönig. Mit der Hochkönig-Card oder dem Ski-amadé-Pass schwingen Sie sich morgens auf die Skier und kommen abends zurück zur Terrasse.': 'The small district of Maria Alm sits right inside the Hochkönig ski area. With the Hochkönig Card or the Ski amadé pass, you can hop onto your skis in the morning and return to the terrace in the evening.',
  'Die Pistenkilometer beginnen wenige hundert Meter entfernt. Wer lieber langläuft, findet direkt am Ort die Loipe in Richtung Maria Alm und Saalfelden.': 'The slopes begin just a few hundred metres away. If you prefer cross-country, the trail towards Maria Alm and Saalfelden starts right at the village.',
  'Im Sommer wird Hintermoos zum idealen Ausgangspunkt für Wanderungen ins Steinerne Meer und auf die Almen rund um den Hochkönig. Die Sommerbergbahnen sind für Hausgäste kostenlos.': 'In summer Hintermoos becomes the ideal starting point for hikes into the Steinernes Meer and onto the alpine pastures around the Hochkönig. Summer cable cars are free for house guests.',
  'Der Adventure-Park in Maria Alm und das Schwimmbad Sommerstein sind in wenigen Minuten erreichbar. Ein E-Bike-Verleih und Service-Stationen befinden sich im Ort.': 'The Adventure Park in Maria Alm and the Sommerstein pool are within a few minutes. An e-bike rental and service stations are in the village.',
  'Im Ferienhaus enthalten': 'Included with the holiday house',
  '70 m²': '70 m²',
  'ausgestattet.': 'equipped.',
  'Voll ausgestattete Küche': 'Fully equipped kitchen',
  'Strom, Heizung, Wasser': 'Electricity, heating, water',
  'Wintergarten': 'Conservatory',
  'Eigene Terrasse': 'Private terrace',
  'Privater Garten': 'Private garden',
  'Persönliche Schlüsselübergabe': 'Personal key handover',

  /* ----- Detail: Doppelzimmer ----- */
  '← Zimmerübersicht': '← Room overview',
  'No. 01 · Im ersten Stock': 'No. 01 · On the first floor',
  'Doppelzimmer mit': 'Double room with',
  'Südbalkon': 'south balcony',
  '1 – 2 Personen': '1 – 2 people',
  'Frühstücksbuffet inkl.': 'Breakfast buffet incl.',
  'ab € 42 p.P./Tag': 'from € 42 p.p./day',
  'Über das Zimmer': 'About the room',
  'Hell, gemütlich,': 'Bright, cosy,',
  'mit Blick nach': 'with views to the',
  'Süden': 'south',
  'Genießen Sie Ihren Aufenthalt in unserem gemütlichen Doppelzimmer, ausgestattet mit hellen "Voglauer"-Möbeln. Das Zimmer befindet sich im ersten Stock unserer Pension und verfügt über einen Südbalkon mit Blick auf die Pinzgauer Berge.': 'Enjoy your stay in our cosy double room, furnished with bright “Voglauer” furniture. The room is on the first floor of our pension and has a south-facing balcony with views of the Pinzgau mountains.',
  'Der morgendliche Sonnenschein kommt direkt durchs Fenster, am Abend genießen Sie die Ruhe am Ortsrand. Ideal für Paare oder Alleinreisende, die ihren Bergurlaub mit dem Frühstücksbuffet aus dem Haus beginnen möchten.': 'Morning sunshine streams in through the window, in the evening you enjoy the quiet on the edge of the village. Ideal for couples or solo travellers who like to start their mountain holiday with our breakfast buffet.',
  'Preise pro Person und Tag in': 'Prices per person and day in',
  'EUR': 'EUR',
  'Saison 2025 / 2026': 'Season 2025 / 2026',
  'Zeitraum': 'Period',
  'Belegung 1 Pers.': '1 person',
  'Belegung 2 Pers.': '2 people',
  'Geschlossen': 'Closed',
  'Vor': 'Pre',
  'Haupt': 'High',
  'Nach': 'Late',
  'Geschl.': 'Closed',
  'Es gelten die': 'The',
  'Österreichischen Hotelvertragsbedingungen': 'Austrian Hotel Contract Terms',
  '. Wir empfehlen den Abschluss einer Reisestornoversicherung. Alle Preise verstehen sich inklusive Frühstücksbuffet, Wellnessbereich und Ortstaxe.': ' apply. We recommend taking out travel cancellation insurance. All prices include the breakfast buffet, spa area and local tax.',
  '. Wir empfehlen den Abschluss einer Reisestornoversicherung. Alle Preise verstehen sich inklusive Frühstücksbuffet und Ortstaxe.': ' apply. We recommend taking out travel cancellation insurance. All prices include the breakfast buffet and local tax.',
  '. Wir empfehlen den Abschluss einer Reisestornoversicherung. Bettwäsche, Handtücher sowie Tisch- und Küchenwäsche sind im Preis enthalten.': ' apply. We recommend taking out travel cancellation insurance. Bed linen, towels as well as table and kitchen linen are included in the price.',
  '. Wir empfehlen den Abschluss einer Reisestornoversicherung.': ' apply. We recommend taking out travel cancellation insurance.',
  'Im Zimmer': 'In the room',
  'Ihre': 'Your',
  'Ausstattung': 'amenities',
  'Bett': 'Bed',
  'Südseitig': 'South-facing',
  'Stock': 'Floor',
  '1. Etage': '1st floor',
  'Verpflegung': 'Meals',
  'Frühstück': 'Breakfast',
  'Bad oder Dusche / WC': 'Bath or shower / WC',
  'WLAN (kostenlos)': 'Wi-Fi (free)',
  'Handtücher inklusive': 'Towels included',
  'Voglauer-Möbel': 'Voglauer furniture',
  'Sitzgruppe': 'Seating area',
  '← Zur Zimmerübersicht': '← Back to room overview',

  /* ----- Detail: Dreibettzimmer ----- */
  'No. 02 · Salzburger Stil': 'No. 02 · Salzburg style',
  'Dreibettzimmer mit': 'Triple room with',
  'Ohrenlehnsessel': 'wingback chair',
  '1 Doppelbett + 1 Couchliege': '1 double bed + 1 sofa bed',
  '2 – 3 Personen': '2 – 3 people',
  'Behagliche': 'Cosy',
  'Salzburger': 'Salzburg',
  'Atmosphäre.': 'atmosphere.',
  'Die helle Einrichtung im Salzburger Stil verleiht dem Zimmer eine besonders behagliche Atmosphäre. Neben der üblichen Ausstattung laden eine Sitzgruppe, ein wundervoller, bequemer Ohrenlehnsessel und ein südseitig ausgerichteter Sonnenbalkon zum Entspannen ein.': 'The bright furnishings in Salzburg style give the room a particularly cosy atmosphere. In addition to the usual amenities, a seating area, a wonderfully comfortable wingback chair and a south-facing sun balcony invite you to relax.',
  'Dieses Zimmer eignet sich besonders gut für eine kleine Familie oder Freunde, die gerne gemeinsam reisen, aber auf Komfort nicht verzichten möchten.': 'This room is particularly well suited to a small family or friends who like to travel together without sacrificing comfort.',
  '3. Person': '3rd person',
  'Familienfreundlich': 'Family-friendly',
  'Kinder': 'Children',
  'ermäßigung': ' discount',
  'im Zimmer der Eltern.': 'in the parents’ room.',
  'bis 2 Jahre': 'up to 2 years',
  'frei': 'free',
  '3 – 5 Jahre': '3 – 5 years',
  '50% Rabatt': '50% discount',
  '6 – 12 Jahre': '6 – 12 years',
  '30% Rabatt': '30% discount',
  '13 – 15 Jahre': '13 – 15 years',
  '20% Rabatt': '20% discount',
  'Schlafgelegenheit': 'Sleeping arrangement',
  'Doppelbett + Couchliege': 'Double bed + sofa bed',
  'Stil': 'Style',
  'Salzburger Tradition': 'Salzburg tradition',

  /* ----- Detail: Vierbettzimmer ----- */
  'No. 03 · Familienzimmer': 'No. 03 · Family room',
  'Vierbettzimmer mit': 'Quadruple room with',
  'Pinzgau-Blick': 'Pinzgau view',
  '1 Doppelbett + 1 Doppelcouch': '1 double bed + 1 double sofa bed',
  '2 – 4 Personen': '2 – 4 people',
  'Platz für die': 'Space for the',
  'Dieses helle Zimmer bietet genügend Platz für einen Aufenthalt mit der ganzen Familie. Entspannen Sie auf der gemütlichen Sitzgruppe oder genießen Sie vom Südbalkon aus den Blick auf die Pinzgauer Landschaft.': 'This bright room offers plenty of space for a stay with the whole family. Relax in the cosy seating area or enjoy the view of the Pinzgau landscape from the south balcony.',
  'Ideal für Familien mit zwei Kindern oder kleine Reisegruppen. Mit Doppelbett und ausziehbarer Doppelcouch bietet das Zimmer bequem Platz für bis zu vier Personen, ohne dabei an Komfort einzubüßen.': 'Ideal for families with two children or small travel groups. With a double bed and pull-out double sofa, the room comfortably sleeps up to four without compromising on comfort.',
  '2 Pers.': '2 pers.',
  '3 Pers.': '3 pers.',
  '4 Pers.': '4 pers.',
  '5 Pers.': '5 pers.',
  '6 Pers.': '6 pers.',
  '3. Pers.': '3rd pers.',
  '4. Pers.': '4th pers.',
  'Doppelbett + Doppelcouch': 'Double bed + double sofa bed',
  'Südseitig · Pinzgau-Blick': 'South-facing · Pinzgau view',
  'Belegung': 'Occupancy',
  'Bis 4 Personen': 'Up to 4 people',
  'Safe': 'Safe',

  /* ----- Detail: Apartment 2-4 ----- */
  '← Apartmentübersicht': '← Apartment overview',
  'FEWO · I · Mit Südbalkon': 'APT · I · With south balcony',
  'Apartment für': 'Apartment for',
  'Apartment für 2 bis 4 Personen': 'Apartment for 2 to 4 people',
  '1 Schlafzimmer + Wohnraum': '1 bedroom + living area',
  'Ohne Verpflegung': 'No meals',
  'ab € 69 / Tag': 'from € 69 / day',
  'Über das Apartment': 'About the apartment',
  'Hell, geräumig,': 'Bright, spacious,',
  'mit': 'with',
  'eigener Küche': 'private kitchen',
  'Hell und geräumig eingerichtet, lädt diese Ferienwohnung mit Südbalkon zum Wohlfühlen ein. Das Schlafzimmer ist mit einem Doppelbett, der Schlaf- bzw. Wohnraum mit einer Doppelcouch ausgestattet.': 'Bright and spaciously furnished, this holiday apartment with south balcony invites you to feel at home. The bedroom has a double bed, the living/sleeping room a double sofa bed.',
  'Die Küche, ausgestattet mit E-Herd, Geschirrspülmaschine, Kaffeemaschine, Kühlschrank und Mikrowelle, ist durch einen Rundbogen mit dem Wohnraum verbunden. Bad und WC sind getrennt, ein zweites WC sorgt für zusätzliche Privatsphäre.': 'The kitchen — equipped with an electric stove, dishwasher, coffee machine, fridge and microwave — is connected to the living area by an arched opening. Bathroom and WC are separate, and a second WC provides extra privacy.',
  'Ideal für Paare oder kleine Familien, die ihren Urlaub flexibel gestalten möchten - mit dem eigenen Kaffee am Morgen und einem gemütlichen Abend daheim nach dem Bergtag.': 'Ideal for couples or small families who like a flexible holiday — with their own coffee in the morning and a cosy evening in after a day on the mountain.',
  'Preise pro Tag in': 'Prices per day in',
  'Saison 2025 / 2026 · pro Ferienwohnung': 'Season 2025 / 2026 · per apartment',
  'Inklusive': 'Included',
  'Ortstaxe und Strom sind in den Preisen inbegriffen.': 'Local tax and electricity are included in the prices.',
  'Im Apartment': 'In the apartment',
  'Wohnraum': 'Living area',
  'Doppelcouch': 'Double sofa bed',
  'Voll ausgestattet': 'Fully equipped',
  'Bad und WC getrennt': 'Bath and WC separate',
  'Tisch- & Küchenwäsche': 'Table & kitchen linen',
  'Geschirr komplett': 'Complete tableware',
  'E-Herd, Backofen, Mikrowelle': 'Electric stove, oven, microwave',
  'Bettwäsche inklusive': 'Bed linen included',
  'Haarfön': 'Hairdryer',
  '← Zur Apartmentübersicht': '← Back to apartment overview',

  /* ----- Detail: Apartment 4-6 ----- */
  'FEWO · II · Mit Mansarde': 'APT · II · With attic room',
  'Apartment für 4 bis 6 Personen': 'Apartment for 4 to 6 people',
  '2 Schlafzimmer + Wohnküche': '2 bedrooms + kitchen-living room',
  '4 – 6 Personen': '4 – 6 people',
  'ab € 98 / Tag': 'from € 98 / day',
  'Großzügig, hell,': 'Spacious, bright,',
  'Hell und geräumig eingerichtet, lädt diese Ferienwohnung mit Südbalkon zum Wohlfühlen ein. Im Apartment befinden sich zwei Einzelbetten, zwei Doppelbetten und eine Doppelcouch - insgesamt Platz für bis zu sechs Personen.': 'Bright and spaciously furnished, this holiday apartment with south balcony invites you to feel at home. The apartment offers two single beds, two double beds and a double sofa bed — sleeping up to six people in total.',
  'Die Wohnküche ist mit E-Herd, Geschirrspülmaschine, Kaffeemaschine, Kühlschrank und Mikrowelle ausgestattet. Dazu gehören zwei separate Bäder: ein Duschbad mit WC und ein Vollbad mit WC. Die Mansarde im Dachgeschoss bietet zusätzlichen Schlaf- oder Spielraum für Kinder.': 'The kitchen-living room is equipped with an electric stove, dishwasher, coffee machine, fridge and microwave. There are two separate bathrooms: a shower room with WC and a full bathroom with WC. The attic room on the top floor provides extra sleeping or play space for children.',
  'Ideal für größere Familien, Mehrgenerationenurlaube oder befreundete Paare, die genug Raum für gemeinsame Stunden und eigene Rückzugsorte schätzen.': 'Ideal for larger families, multi-generation holidays or couples travelling together who value enough space for shared moments and private retreats.',
  'Betten': 'Beds',
  '2 Einzel · 2 Doppel + Couch': '2 single · 2 double + sofa bed',
  'Zusätzlich': 'Additional',
  'Bäder': 'Bathrooms',
  'Bad + Dusche': 'Bath + shower',
  'Dusche/WC & Bad/WC getrennt': 'Shower/WC & bath/WC separate',
  'Wohnküche': 'Kitchen-living room',

  /* ----- Kontakt ----- */
  'Schreiben Sie uns,': 'Write to us,',
  'wir': 'we',
  'antworten persönlich': 'reply personally',
  'Anfrage & Reservierung': 'Inquiry & reservation',
  'Familie': 'The',
  'Herzog': 'Herzog family',
  'Tel.': 'Tel.',
  '+43 6584 7893': '+43 6584 7893',
  'info@pension-urchenhof.at': 'info@pension-urchenhof.at',
  'www.pension-urchenhof.at': 'www.pension-urchenhof.at',
  'E-Mail senden →': 'Send e-mail →',
  'Direkt anrufen →': 'Call us directly →',
  'Name': 'Name',
  'Vor- und Nachname': 'First and last name',
  'E-Mail': 'E-mail',
  'ihre@email.com': 'your@email.com',
  'Abreise': 'Departure',
  'Anreisedatum': 'Arrival',
  'Abreisedatum': 'Departure',
  'Personen': 'people',
  'Person': 'person',
  'Nacht': 'night',
  'Nächte': 'nights',
  'Preise pro Person': 'Prices per person',
  'inkl. Frühstücksbuffet': 'incl. breakfast buffet',
  'Gesamtpreis für die Unterkunft': 'Total accommodation price',
  'inkl. Endreinigung': 'incl. final cleaning',
  'Gesamtpreis inkl. Endreinigung': 'Total incl. final cleaning',
  'Gesamtpreis': 'Total price',
  '1 Person': '1 person',
  '2 Personen': '2 people',
  '3 Personen': '3 people',
  '4 Personen': '4 people',
  '5+ Personen': '5+ people',
  'Unterkunft': 'Accommodation',
  'Doppelzimmer': 'Double room',
  'Dreibettzimmer': 'Triple room',
  'Vierbettzimmer': 'Quadruple room',
  'Apartment 2 – 4 Personen': 'Apartment 2 – 4 people',
  'Apartment 4 – 6 Personen': 'Apartment 4 – 6 people',
  'Nachricht': 'Message',
  'Ihre Wünsche oder Fragen': 'Your wishes or questions',

  /* FAQ */
  'Häufige': 'Frequently asked',
  'Fragen': 'questions',
  'Wie laufen Check-in und Check-out ab?': 'How do check-in and check-out work?',
  'Check-in bei den Zimmern ab 14:00 Uhr, bei den Apartments ab 15:00 Uhr. Check-out bis 10:00 Uhr. Frühere Anreise oder spätere Abreise gerne nach Absprache und Verfügbarkeit. Wir nehmen Sie persönlich in Empfang.': 'Check-in for rooms is from 2:00 p.m., for apartments from 3:00 p.m. Check-out by 10:00 a.m. Earlier arrival or later departure is gladly possible by arrangement and subject to availability. We welcome you personally.',
  'Sind die Bergbahnen wirklich im Sommer kostenlos?': 'Are the cable cars really free in summer?',
  'Ja, für unsere Hausgäste sind die örtlichen Bergbahnen sowie das örtliche Schwimmbad in Maria Alm im Sommer kostenlos. Sie erhalten dazu die Hochkönig Card bei der Anreise.': 'Yes — for our house guests the local cable cars and the local pool in Maria Alm are free in summer. You receive the Hochkönig Card on arrival.',
  'Welche Skipässe und Pauschalen bieten Sie an?': 'Which ski passes and packages do you offer?',
  'Wir haben drei Saisonpakete mit 6-Tages-Skipass (Ski amadé Start, Live und Finale) sowie spezielle Aktionen: 60+ Best Ager Week, Ladies Week mit 1+1-Skipass und Oster-Familienaktion. Details und Preise auf der Pauschalen-Seite.': 'We have three seasonal packages with a 6-day ski pass (Ski amadé Start, Live and Finale) as well as special offers: 60+ Best Ager Week, Ladies Week with a 1+1 pass and Easter family promotion. Details and prices on the Packages page.',
  'Sind Haustiere erlaubt?': 'Are pets allowed?',
  'Kleine Hunde sind in den Apartments nach vorheriger Absprache willkommen. Bitte geben Sie bei der Anfrage Rasse und Größe an, damit wir das passende Apartment reservieren können.': 'Small dogs are welcome in the apartments by prior arrangement. Please specify breed and size in your inquiry so we can reserve the right apartment.',
  'Gibt es WLAN im Haus?': 'Is there Wi-Fi at the house?',
  'Ja, kostenloses WLAN in allen Zimmern, Apartments und Gemeinschaftsbereichen. Der Zugang wird Ihnen bei der Anreise mitgeteilt.': 'Yes — free Wi-Fi in all rooms, apartments and common areas. Access is provided on arrival.',
  'Wie sicher ist die Schneelage am Hochkönig?': 'How reliable is the snow on the Hochkönig?',
  'Das Skigebiet Hochkönig liegt auf 860 bis 1.900 Metern Seehöhe und gilt als schneesicher. Zusätzlich sorgen moderne Beschneiungsanlagen für gleichbleibende Pistenqualität von Saisonbeginn bis Saisonende.': 'The Hochkönig ski area sits at 860 to 1,900 metres above sea level and is considered snow-sure. Modern snowmaking systems also ensure consistent piste quality from the start of the season to the end.',
  'Kann ich vor Ort bezahlen?': 'Can I pay on site?',
  'Ja, Zahlung bei Abreise in bar oder mit Bankomatkarte. Bei Buchungen über Pauschalen besprechen wir bei Anfrage eine kleine Anzahlung.': 'Yes — payment on departure in cash or by debit card. For package bookings we discuss a small deposit on inquiry.',
  'Wie reise ich am besten an?': 'What is the best way to get there?',
  'Mit dem Auto über Lofer (aus München kommend) oder die Tauernautobahn (aus Wien/Salzburg kommend). Mit der Bahn bis Saalfelden, von dort Bus oder Taxi. Auf Wunsch organisieren wir gerne einen Transfer.': 'By car via Lofer (coming from Munich) or the Tauern motorway (coming from Vienna/Salzburg). By train to Saalfelden, from there bus or taxi. On request we’re happy to arrange a transfer.',
  'In welchen Sprachen kann ich Sie kontaktieren?': 'In which languages can I contact you?',
  'Familie Herzog spricht Deutsch und Englisch. Schreiben Sie uns einfach in der Sprache, in der Sie sich wohlfühlen, wir antworten persönlich und in der Regel innerhalb von 24 Stunden.': 'The Herzog family speaks German and English. Just write to us in the language you prefer — we reply personally, usually within 24 hours.',

  /* ----- Kalkulator page ----- */
  'Ihr Preis,': 'Your price,',
  'sofort berechnet': 'instantly calculated',
  'Preisrechner · Saison 2025/2026': 'Price calculator · Season 2025/2026',
  'Preis sofort berechnen': 'Calculate price instantly',
  'Unterkunft wählen, Reisedaten eingeben, Personenzahl bestimmen – der Preis wird direkt auf Basis unserer Saisontarife berechnet.': 'Choose your accommodation, enter your travel dates and the number of guests — the price is calculated directly from our season rates.',
  'Saisonkalender': 'Season calendar',
  '2025 / 2026': '2025 / 2026',
  'Alle Preise verstehen sich inklusive Frühstücksbuffet (Zimmer) bzw. Ortstaxe und Strom (Apartments).': 'All prices include the breakfast buffet (rooms) or local tax and electricity (apartments).',
  'Vorsaison': 'Pre-season',
  'Hauptsaison': 'High season',
  'Nachsaison': 'Late season',
  'Sommersaison': 'Summer season',
  'Hochsaison': 'Peak season',
  'Sommerhochsaison': 'Summer peak season',

  /* Detail calculator titles */
  'Doppelzimmer-Preis berechnen': 'Calculate double-room price',
  'Für dieses Doppelzimmer sind Unterkunft und Personenrahmen bereits passend voreingestellt.': 'Accommodation and guest range are already preset for this double room.',
  'Dreibettzimmer-Preis berechnen': 'Calculate triple-room price',
  'Für dieses Dreibettzimmer sind Unterkunft und Personenrahmen bereits passend voreingestellt.': 'Accommodation and guest range are already preset for this triple room.',
  'Vierbettzimmer-Preis berechnen': 'Calculate quadruple-room price',
  'Für dieses Vierbettzimmer sind Unterkunft und Personenrahmen bereits passend voreingestellt.': 'Accommodation and guest range are already preset for this quadruple room.',
  'Apartment-Preis berechnen': 'Calculate apartment price',
  'Für dieses Apartment sind Unterkunft und Personenrahmen bereits passend voreingestellt.': 'Accommodation and guest range are already preset for this apartment.',
  'Großes Apartment berechnen': 'Calculate large apartment price',
  'Für dieses große Apartment sind Unterkunft und Personenrahmen bereits passend voreingestellt.': 'Accommodation and guest range are already preset for this large apartment.',

  /* ----- Footer ----- */
  'Adresse': 'Address',
  'Kontakt': 'Contact',
  'Schwesterhaus': 'Sister house',
  'Apartmenthaus': 'Apartment house',
  'Lärchenhof': 'Lärchenhof',
  'apartments-laerchenhof.at': 'apartments-laerchenhof.at',
  'Impressum': 'Imprint',
  'Datenschutz': 'Privacy',
  'Familienbetrieb am Fuße des Hochkönigs. Geführt von Familie Herzog. Direkt am Natrun-Lift in Maria Alm, Salzburger Land.': 'Family-run pension at the foot of the Hochkönig. Managed by the Herzog family. Right next to the Natrun lift in Maria Alm, Salzburger Land.',

  /* ----- Calculator-rendered strings ----- */
  'Unterkunft wählen': 'Choose accommodation',
  'Reisedaten & Personen': 'Travel dates & guests',
  'Reisedaten & Personen': 'Travel dates & guests',
  'Preis berechnen': 'Calculate price',
  'Preis schnell berechnen': 'Calculate price quickly',
  'Unterkunft, Zeitraum und Personenzahl wählen – der Richtpreis wird sofort aus den Saisontarifen berechnet.': 'Choose accommodation, period and number of guests — the indicative price is instantly calculated from the season rates.',
  'Ferienwohnung': 'Apartment',
  'Großes Apartment': 'Large apartment',
  '2 – 3 Personen · inkl. Frühstück': '2 – 3 people · breakfast included',
  '2 – 4 Personen · inkl. Frühstück': '2 – 4 people · breakfast included',
  '1 – 2 Personen · inkl. Frühstück': '1 – 2 people · breakfast included',
  '2 – 4 Personen · ohne Verpflegung': '2 – 4 people · no meals',
  '4 – 6 Personen · ohne Verpflegung': '4 – 6 people · no meals',
  'Apartment': 'Apartment',
  'Abreisedatum muss nach dem Anreisedatum liegen.': 'The departure date must be after the arrival date.',
  'Maximaler Aufenthalt: 365 Nächte.': 'Maximum stay: 365 nights.',
  'Ihr gewählter Zeitraum fällt ganz oder teilweise in eine Schließungszeit.': 'Your selected period falls fully or partly within a closure.',
  'Für diesen Zeitraum sind keine Preise verfügbar.': 'No prices are available for this period.',
  'Bitte Anreise- und Abreisedatum wählen.': 'Please select an arrival and departure date.',
  'Jetzt anfragen →': 'Inquire now →',
  'Details ansehen →': 'See details →',
};

/* ============ DOM walker / translator ============ */

const I18N_TRANSLATABLE_ATTRS = ['placeholder', 'alt', 'title', 'aria-label'];

function i18nTrim(str) {
  return str.replace(/ /g, ' ').trim();
}

function i18nLookup(text) {
  const t = i18nTrim(text);
  if (!t) return null;
  if (I18N_DICT[t]) return I18N_DICT[t];
  // Try with collapsed whitespace
  const collapsed = t.replace(/\s+/g, ' ');
  if (I18N_DICT[collapsed]) return I18N_DICT[collapsed];
  return null;
}

function translateTextNode(node, toEn) {
  if (!node.nodeValue) return;
  if (toEn) {
    if (node._urchenOrig != null) return; // already translated
    const en = i18nLookup(node.nodeValue);
    if (en != null) {
      const lead = node.nodeValue.match(/^\s*/)[0];
      const trail = node.nodeValue.match(/\s*$/)[0];
      node._urchenOrig = node.nodeValue;
      node.nodeValue = lead + en + trail;
    }
  } else {
    if (node._urchenOrig != null) {
      node.nodeValue = node._urchenOrig;
      node._urchenOrig = null;
    }
  }
}

function translateAttr(el, attr, toEn) {
  const cur = el.getAttribute(attr);
  if (cur == null) return;
  const stash = `_urchenOrig_${attr}`;
  if (toEn) {
    if (el[stash] != null) return;
    const en = i18nLookup(cur);
    if (en != null) {
      el[stash] = cur;
      el.setAttribute(attr, en);
    }
  } else {
    if (el[stash] != null) {
      el.setAttribute(attr, el[stash]);
      el[stash] = null;
    }
  }
}

function translateDataCalcAttrs(el, toEn) {
  ['data-calc-title', 'data-calc-text'].forEach(attr => {
    const cur = el.getAttribute(attr);
    if (cur == null) return;
    const stash = `_urchenOrig_${attr}`;
    if (toEn) {
      if (el[stash] != null) return;
      const en = i18nLookup(cur);
      if (en != null) {
        el[stash] = cur;
        el.setAttribute(attr, en);
      }
    } else {
      if (el[stash] != null) {
        el.setAttribute(attr, el[stash]);
        el[stash] = null;
      }
    }
  });
}

const I18N_SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT']);

function translateTree(root, toEn) {
  if (!root) return;
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root, toEn);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  if (I18N_SKIP_TAGS.has(root.tagName)) return;

  I18N_TRANSLATABLE_ATTRS.forEach(attr => translateAttr(root, attr, toEn));
  translateDataCalcAttrs(root, toEn);

  const children = Array.from(root.childNodes);
  for (const child of children) translateTree(child, toEn);
}

function translateMeta(toEn) {
  // <title>
  const titleEl = document.querySelector('title');
  if (titleEl) {
    if (toEn) {
      if (titleEl._urchenOrig == null) {
        const en = i18nLookup(titleEl.textContent);
        if (en != null) {
          titleEl._urchenOrig = titleEl.textContent;
          titleEl.textContent = en;
        }
      }
    } else if (titleEl._urchenOrig != null) {
      titleEl.textContent = titleEl._urchenOrig;
      titleEl._urchenOrig = null;
    }
  }
  // meta description
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) {
    const cur = descEl.getAttribute('content');
    if (cur != null) {
      if (toEn) {
        if (descEl._urchenOrig == null) {
          const en = i18nLookup(cur);
          if (en != null) {
            descEl._urchenOrig = cur;
            descEl.setAttribute('content', en);
          }
        }
      } else if (descEl._urchenOrig != null) {
        descEl.setAttribute('content', descEl._urchenOrig);
        descEl._urchenOrig = null;
      }
    }
  }
}

function applyLanguage(lang) {
  const toEn = lang === 'en';
  document.documentElement.lang = lang;
  translateTree(document.body, toEn);
  translateMeta(toEn);

  // Update language switcher UI
  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.setLang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.setLang === lang ? 'true' : 'false');
  });

  // Notify other modules (e.g. calculator)
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

function getLang() {
  return localStorage.getItem(I18N_LANG_KEY) || 'de';
}

function setLang(lang) {
  if (lang !== 'de' && lang !== 'en') return;
  localStorage.setItem(I18N_LANG_KEY, lang);
  applyLanguage(lang);
}

window.UrchenI18n = {
  getLang,
  setLang,
  applyLanguage,
  translateTree,
  lookup: i18nLookup,
  /* For calculator strings rendered dynamically */
  t(germanText) {
    if (getLang() === 'en') {
      const en = i18nLookup(germanText);
      if (en != null) return en;
    }
    return germanText;
  }
};

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-set-lang]');
  if (btn) {
    e.preventDefault();
    setLang(btn.dataset.setLang);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(getLang());
});
