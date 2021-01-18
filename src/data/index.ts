export const menuItemsList = [
  {
    link: '/',
    name: 'strona główna',

    submenu: [
      { link: '/#industries', name: 'dla jakich branż pracujemy' },
      { link: '/#brands', name: 'zaufali nam' },
    ],
  },
  ,
  {
    link: '/offer',
    name: 'oferta',
    submenu: [
      { link: '/offer#workflow', name: 'jak pracujemy' },
      { link: '/offer#contract-production', name: 'produkcja na zlecenie' },
      { link: '/offer#packing-services', name: 'usługi pakowania' },
      { link: '/offer#own-products', name: 'produkty własne' },
    ],
  },
  { link: '/technology', name: 'technologia', 
  submenu: [
    { link: '/technology#thermoforming', name: 'co to jest termoformowanie' },
    { link: '/technology#blister', name: 'co to jest blister' },
    { link: '/technology#speciality', name: 'nasza specjalizacja' },
    { link: '/technology#machine-park', name: 'park maszynowy' },
    { link: '/technology#plastics', name: 'rodzaje tworzyw sztucznych' },
  ], },
  { link: '/about-us', name: 'o nas', 
  submenu: [
    { link: '/about-us#news', name: 'aktualności' },
    { link: '/about-us#our-mision', name: 'misja firmy' },
    { link: '/about-us#history', name: 'historia firmy' },
    { link: '/about-us#iso9001', name: 'SYSTEM ZARZĄDZANIA JAKOŚCIĄ ISO 9001' },
    { link: '/about-us#quality-policy', name: 'NASZA POLITYKA JAKOŚCI' },
    { link: '/about-us#environment', name: 'Ekologia' },
    { link: '/about-us#work', name: 'Praca' },
  ], },
]
export const bottomMenuItemsList = [
  {
    link: '/',
    name: 'strona główna',
  },
  ,
  {
    link: '/offer',
    name: 'oferta',
  },
  { link: '/technology', name: 'technologia' },
  { link: '/about-us', name: 'o nas' },
]

export const hostname: string = 'www.adressklepu.pl'

export const workFlowList = [
  {title: 'Zapytanie', content: 'Klient przysyła zapytanie ofertowe z wymiarami zamawianego detalu, materiałem ilościami i pożądanym terminem dostawy. Na tym etapie dopytujemy Klientao szczegóły i wspieramy go naszym doświadczeniem.'},
  {title: 'Oferta', content: 'Przygotowujemy ofertę zawierającą koszt jednostkowy detalu, termin dostawy, koszt oprzyrządowania i transportu.'},
  {title: 'Zlecenie', content: 'Po zapoznaniu się z ofertą i akceptacją jej warunków klient przesyła zlecenie na realizację usługi'},
  {title: 'Prototyp', content: 'Po otrzymaniu zlecenia możemy wykonać prototyp wytłoczki, żeby Klient mógł ostatecznie zaakceptowaćzamawiany kształt wytłoczki. '},
  {title: 'Projektowanie I realizacja formy ', content: 'po akceptacji prototypu wykonujemy formę a następnie wykonujemy wytłoczkę do akceptacji.'},
  {title: 'Realizacja Zlecenia', content: 'po akceptacji wytłoczki docelowej realizujemy produkcję. '},
  {title: 'Dostawa ', content: 'po wyprodukowaniu zlecenia towar dostarczamy do Klienta. Możemy zorganizować transport lub skorzystać z firmy transportowej wskazanej przez Klienta.'},
]

export const inDustrySlugsOrder = [
  'motoryzacyjna',
  'przemyslowa',
  'kosmetyczna',
  'farmaceutyczna',
  'elektrotechniczna',
  'gier',
  'domIOgrod',
  'detaliczna',
  'spozywcza',
]