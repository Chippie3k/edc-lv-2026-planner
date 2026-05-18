/* ============================================================
   EDC LV 2026 PLANNER — Supabase-backed shared crews
   ============================================================ */

// ===== Supabase config =====
const SUPABASE_URL = 'https://kkzubmmfxajrcvqeguvj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__X5jP37zh6kvsvaxpw-PvA_opHLRnMY';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  realtime: { params: { eventsPerSecond: 5 } },
});

// ===== STAGES =====
const STAGES = {
  kineticFIELD:   { key: 'kF', name: 'kineticFIELD',   color: '#ff3864', tier: 1, order: 1, x: 300, y: 90  },
  cosmicMEADOW:   { key: 'cM', name: 'cosmicMEADOW',   color: '#6ec1ff', tier: 1, order: 2, x: 95,  y: 470 },
  circuitGROUNDS: { key: 'cG', name: 'circuitGROUNDS', color: '#00d4ff', tier: 1, order: 3, x: 470, y: 760 },
  neonGARDEN:     { key: 'nG', name: 'neonGARDEN',     color: '#39ff14', tier: 1, order: 4, x: 505, y: 470 },
  bassPOD:        { key: 'bP', name: 'bassPOD',        color: '#c724b1', tier: 1, order: 5, x: 300, y: 790 },
  wasteLAND:      { key: 'wL', name: 'wasteLAND',      color: '#ff6b1a', tier: 1, order: 6, x: 130, y: 760 },
  quantumVALLEY:  { key: 'qV', name: 'quantumVALLEY',  color: '#b8b8ff', tier: 1, order: 7, x: 475, y: 215 },
  stereoBLOOM:    { key: 'sB', name: 'stereoBLOOM',    color: '#ff9ed8', tier: 1, order: 8, x: 215, y: 280 },
  bionicJUNGLE:   { key: 'bJ', name: 'bionicJUNGLE',   color: '#7dc14b', tier: 2, order: 9, x: 130, y: 200 },
};
const STAGE_ORDER = Object.keys(STAGES);

const HEADLINERS = new Set([
  'CHARLOTTE DE WITTE','PORTER ROBINSON','FISHER','THE CHAINSMOKERS','SOFI TUKKER',
  'ABOVE & BEYOND','KASKADE','SUBTRONICS','JOHN SUMMIT','HARDWELL','STEVE AOKI','SUB FOCUS',
  'ARMIN VAN BUUREN','MARTIN GARRIX','ZEDD','GRiZ B2B WOOLI','CLOONEE',
  'TIËSTO','PEGGY GOU','THE PRODIGY','BOYS NOIZE','SAMMY VIRJI',
  'SOLOMUN','VINTAGE CULTURE','ALISON WONDERLAND','SEVEN LIONS','VIRTUAL RIOT','PEEKABOO',
  'DOCTOR P B2B FLUX PAVILION B2B FUNTCASE','UNDERWORLD','MEDUZA','ARGY',
  'I HATE MODELS','ELI BROWN','JOSEPH CAPRIATI','ADRIATIQUE',
  'PAUL VAN DYK','GARETH EMERY','COSMIC GATE','DARUDE',
  'BLACK TIGER SEX MACHINE','SAN HOLO','DABIN','SKREAM','CHRIS LORENZO B2B BULLET TOOTH',
  'AUDIOFREQ B2B CODE BLACK B2B TONESHIFTERZ','DA TWEEKAZ','SUB ZERO PROJECT'
]);
const CEREMONY_KEYWORDS = ['CEREMONY','INTERMEZZO','MAIN FIREWORKS'];

// ===== SCHEDULE — 3 days × 9 stages =====
const SCHEDULE = {
  1: {
    kineticFIELD: [
      ['7:00 PM','8:00 PM','LAIDBACK LUKE B2B CHUCKIE'],
      ['8:00 PM','9:00 PM','KOROLOVA'],
      ['9:00 PM','10:00 PM','ARGY'],
      ['10:00 PM','10:07 PM','OPENING CEREMONY: KINETIC LAUNCH'],
      ['10:07 PM','11:15 PM','CHRIS LORENZO'],
      ['11:15 PM','11:19 PM','INTERMEZZO: KINETIC JOURNEY'],
      ['11:19 PM','12:28 AM','SOFI TUKKER'],
      ['12:28 AM','12:32 AM','INTERMEZZO: KINETIC JOURNEY'],
      ['12:32 AM','1:40 AM','THE CHAINSMOKERS'],
      ['1:40 AM','1:47 AM','MAIN FIREWORKS'],
      ['1:47 AM','2:57 AM','FISHER'],
      ['2:57 AM','3:01 AM','INTERMEZZO: KINETIC JOURNEY'],
      ['3:01 AM','4:10 AM','PORTER ROBINSON','DJ SET'],
      ['4:10 AM','4:14 AM','INTERMEZZO: KINETIC JOURNEY'],
      ['4:14 AM','5:28 AM','CHARLOTTE DE WITTE'],
      ['5:28 AM','5:30 AM','CLOSING CEREMONY: ASCENT'],
    ],
    cosmicMEADOW: [
      ['4:30 PM','5:00 PM','TOMMY PHILLIPS'],
      ['5:00 PM','6:55 PM','MAX DEAN B2B LUKE DEAN'],
      ['7:00 PM','7:55 PM','JACKIE HOLLANDER'],
      ['7:55 PM','8:55 PM','RODDY LIMA'],
      ['8:55 PM','9:55 PM','WESTEND'],
      ['9:55 PM','10:55 PM','WALKER & ROYCE B2B VNSSA'],
      ['11:10 PM','12:10 AM','UNDERWORLD'],
      ['12:25 AM','1:40 AM','MEDUZA'],
      ['1:40 AM','1:47 AM','MAIN FIREWORKS'],
      ['1:47 AM','2:47 AM','NOTION'],
      ['2:47 AM','4:02 AM','MPH'],
      ['4:02 AM','5:30 AM','SAN PACHO'],
    ],
    circuitGROUNDS: [
      ['7:00 PM','8:00 PM','1991'],
      ['8:00 PM','9:00 PM','BOU'],
      ['9:00 PM','10:00 PM','NICO MORENO'],
      ['10:00 PM','11:15 PM','I HATE MODELS'],
      ['11:15 PM','12:25 AM','LEVITY'],
      ['12:25 AM','1:35 AM','WOOLI'],
      ['1:35 AM','2:35 AM','THE OUTLAW'],
      ['2:35 AM','3:30 AM','HOLY PRIEST'],
      ['3:30 AM','4:30 AM','RAY VOLPE'],
      ['4:30 AM','5:30 AM','LEVEL UP'],
    ],
    neonGARDEN: [
      ['7:00 PM','8:30 PM','ANASTAZJA'],
      ['8:30 PM','10:00 PM','MÉSTIZA'],
      ['10:00 PM','11:30 PM','DJ TENNIS B2B CHLOÉ CAILLET'],
      ['11:30 PM','1:00 AM','PEGGY GOU'],
      ['1:00 AM','2:30 AM','ADRIATIQUE'],
      ['2:30 AM','4:00 AM','JOSEPH CAPRIATI'],
      ['4:00 AM','5:30 AM','ELI BROWN'],
    ],
    bassPOD: [
      ['7:00 PM','7:50 PM','RIOT'],
      ['7:50 PM','8:40 PM','HEYZ'],
      ['8:40 PM','9:30 PM','MUZZ'],
      ['9:30 PM','10:30 PM','GORILLAT'],
      ['10:30 PM','11:30 PM','GHENGAR'],
      ['11:30 PM','12:30 AM','DEATHPACT'],
      ['12:30 AM','1:30 AM','ATLIENS'],
      ['1:30 AM','2:30 AM','KAI WACHI'],
      ['2:30 AM','3:30 AM','ADVENTURE CLUB','THROWBACK'],
      ['3:30 AM','4:30 AM','CULTURE SHOCK'],
      ['4:30 AM','5:30 AM','CYCLOPS'],
    ],
    wasteLAND: [
      ['7:00 PM','8:30 PM','DÓMINA'],
      ['8:30 PM','9:30 PM','SERAFINA'],
      ['9:30 PM','10:30 PM','JOHANNES SCHUSTER'],
      ['10:30 PM','11:30 PM','ADRIÁN MILLS'],
      ['11:30 PM','12:30 AM','CLOUDY'],
      ['12:30 AM','1:30 AM','KUKO'],
      ['1:30 AM','2:30 AM','GRAVEDGR'],
      ['2:30 AM','3:30 AM','REBEKAH'],
      ['3:30 AM','4:30 AM','DYEN'],
      ['4:30 AM','5:30 AM','STAN CHRIST'],
    ],
    quantumVALLEY: [
      ['7:00 PM','8:00 PM','SARAH DE WARREN'],
      ['8:00 PM','9:00 PM','MATTY RALPH'],
      ['9:00 PM','10:00 PM','COLD BLUE'],
      ['10:00 PM','11:00 PM','PEGASSI'],
      ['11:00 PM','12:00 AM','DARUDE'],
      ['12:00 AM','1:00 AM','COSMIC GATE'],
      ['1:00 AM','2:00 AM','GARETH EMERY'],
      ['2:00 AM','3:00 AM','ILAN BLUESTONE'],
      ['3:00 AM','4:00 AM','PAUL VAN DYK'],
      ['4:00 AM','5:30 AM','DARREN PORTER'],
    ],
    stereoBLOOM: [
      ['7:00 PM','8:00 PM','ABANA B2B JULIET MENDOZA'],
      ['8:00 PM','9:00 PM','SLAMM'],
      ['9:00 PM','10:15 PM','LUUK VAN DIJK'],
      ['10:15 PM','11:30 PM','OMAR+'],
      ['11:30 PM','12:45 AM','LUKE DEAN'],
      ['12:45 AM','2:00 AM','JOSH BAKER'],
      ['2:00 AM','3:15 AM','MAX DEAN'],
      ['3:15 AM','4:30 AM','OBSKÜR'],
      ['4:30 AM','5:30 AM','TOMAN'],
    ],
    bionicJUNGLE: [
      ['5:00 PM','7:00 PM','HEIDI LAWDEN B2B MASHA MAR'],
      ['7:00 PM','8:00 PM','STACY CHRISTINE'],
      ['8:00 PM','9:30 PM','THE CARRY NATION'],
      ['9:30 PM','11:00 PM','MASSIMILIANO PAGLIARA'],
      ['11:00 PM','12:30 AM','PARAMIDA'],
      ['12:30 AM','2:30 AM','SALUTE B2B CHLOÉ CAILLET'],
      ['2:30 AM','4:00 AM','ROBERT HOOD'],
      ['4:00 AM','5:30 AM','AVALON EMERSON'],
    ],
  },
  2: {
    kineticFIELD: [
      ['7:00 PM','8:00 PM','AR/CO'],
      ['8:00 PM','9:00 PM','HAYLA'],
      ['9:00 PM','10:00 PM','SUB FOCUS'],
      ['10:00 PM','10:07 PM','OPENING CEREMONY: KINETIC LAUNCH'],
      ['10:07 PM','11:15 PM','STEVE AOKI'],
      ['11:15 PM','11:19 PM','INTERMEZZO: KINETIC JOURNEY'],
      ['11:19 PM','12:28 AM','HARDWELL'],
      ['12:28 AM','12:32 AM','INTERMEZZO: KINETIC JOURNEY'],
      ['12:32 AM','1:40 AM','JOHN SUMMIT'],
      ['1:40 AM','1:47 AM','MAIN FIREWORKS'],
      ['1:47 AM','2:57 AM','SUBTRONICS'],
      ['2:57 AM','3:01 AM','INTERMEZZO: KINETIC JOURNEY'],
      ['3:01 AM','4:10 AM','KASKADE'],
      ['4:10 AM','4:14 AM','INTERMEZZO: KINETIC JOURNEY'],
      ['4:14 AM','5:28 AM','ABOVE & BEYOND','SUNRISE'],
      ['5:28 AM','5:30 AM','CLOSING CEREMONY: SKYBOUND'],
    ],
    cosmicMEADOW: [
      ['7:00 PM','8:15 PM','FROST CHILDREN'],
      ['8:15 PM','9:25 PM','HANNAH LAING'],
      ['9:25 PM','10:15 PM','SNOW STRIPPERS'],
      ['10:15 PM','11:30 PM','VTSS','IN THE ROUND'],
      ['11:35 PM','12:35 AM','THE PRODIGY'],
      ['12:40 AM','2:10 AM','BUNT.','IN THE ROUND'],
      ['2:10 AM','3:30 AM','INTERPLANETARY CRIMINAL'],
      ['3:30 AM','4:30 AM','MALUGI'],
      ['4:30 AM','5:30 AM','DJ GIGOLA B2B MCR-T'],
    ],
    circuitGROUNDS: [
      ['7:00 PM','8:00 PM','DJ MANDY'],
      ['8:00 PM','9:15 PM','RÜZ'],
      ['9:15 PM','10:45 PM','KETTAMA'],
      ['10:45 PM','12:15 AM','SAMMY VIRJI'],
      ['12:15 AM','1:45 AM','TIËSTO'],
      ['1:45 AM','3:15 AM','PEGGY GOU B2B KI/KI'],
      ['3:15 AM','4:30 AM','BOYS NOIZE'],
      ['4:30 AM','5:30 AM','LILLY PALMER'],
    ],
    neonGARDEN: [
      ['7:00 PM','8:30 PM','MINK'],
      ['8:30 PM','10:00 PM','SILVIE LOTO'],
      ['10:00 PM','11:30 PM','AHMED SPINS'],
      ['11:30 PM','1:30 AM','LUCIANO'],
      ['1:30 AM','3:30 AM','PROSPA'],
      ['3:30 AM','5:30 AM','JOSH BAKER B2B KETTAMA B2B PROSPA'],
    ],
    bassPOD: [
      ['7:00 PM','7:50 PM','FALLEN WITH MC DINO'],
      ['7:50 PM','8:40 PM','AVELLO B2B DENNETT'],
      ['8:40 PM','9:30 PM','VIPERACTIVE'],
      ['9:30 PM','10:30 PM','HYBRID MINDS'],
      ['10:30 PM','11:30 PM','YDG'],
      ['11:30 PM','12:30 AM','DELTA HEAVY'],
      ['12:30 AM','1:30 AM','GETTER'],
      ['1:30 AM','2:30 AM','EPTIC B2B SPACE LACES'],
      ['2:30 AM','3:30 AM','DOCTOR P B2B FLUX PAVILION B2B FUNTCASE'],
      ['3:30 AM','4:30 AM','HOL!'],
      ['4:30 AM','5:30 AM','MARY DROPPINZ'],
    ],
    wasteLAND: [
      ['7:00 PM','8:30 PM','CUTDWN'],
      ['8:30 PM','9:30 PM','DEAD X'],
      ['9:30 PM','10:30 PM','THE SAINTS'],
      ['10:30 PM','11:30 PM','ROB GEE B2B LENNY DEE'],
      ['11:30 PM','12:30 AM','LADY FAITH B2B LNY TNZ'],
      ['12:30 AM','1:30 AM','AUDIOFREQ B2B CODE BLACK B2B TONESHIFTERZ'],
      ['1:30 AM','2:30 AM','DA TWEEKAZ'],
      ['2:30 AM','3:30 AM','LIL TEXAS'],
      ['3:30 AM','4:30 AM','MISH'],
      ['4:30 AM','5:30 AM','ALYSSA JOLEE'],
    ],
    quantumVALLEY: [
      ['7:00 PM','8:30 PM','MARIA HEALY'],
      ['8:30 PM','9:30 PM','SUPERSTRINGS'],
      ['9:30 PM','10:30 PM','BILLY GILLIES'],
      ['10:30 PM','11:30 PM','PAUL OAKENFOLD'],
      ['11:30 PM','12:30 AM','ANDREW RAYEL'],
      ['12:30 AM','1:30 AM','MADDIX'],
      ['1:30 AM','2:30 AM','MATHAME'],
      ['2:30 AM','3:30 AM','ASTRIX'],
      ['3:30 AM','4:30 AM','T78'],
      ['4:30 AM','5:30 AM','THOMAS SCHUMACHER'],
    ],
    stereoBLOOM: [
      ['7:00 PM','8:00 PM','SLUGG'],
      ['8:00 PM','9:00 PM','DREYA V'],
      ['9:00 PM','10:00 PM','DISCIP'],
      ['10:00 PM','11:15 PM','OMNOM'],
      ['11:15 PM','12:30 AM','NOIZU'],
      ['12:30 AM','1:45 AM','WAX MOTIF'],
      ['1:45 AM','3:00 AM','CID'],
      ['3:00 AM','4:15 AM','HNTR'],
      ['4:15 AM','5:30 AM','BOLO','SUNRISE'],
    ],
    bionicJUNGLE: [
      ['7:00 PM','8:00 PM','PLAYER DAVE'],
      ['8:00 PM','9:00 PM','SPRAY'],
      ['9:00 PM','10:30 PM','BASHKKA B2B SEDEF ADASI'],
      ['10:30 PM','12:00 AM','HAAi B2B LUKE ALESSI'],
      ['12:00 AM','1:15 AM','MCR-T'],
      ['1:15 AM','2:30 AM','BAD BOOMBOX B2B OLLIE LISHMAN'],
      ['2:30 AM','3:30 AM','BENWAL'],
      ['3:30 AM','4:30 AM','BAUGRUPPE90'],
      ['4:30 AM','5:30 AM','CLUB ANGEL'],
    ],
  },
  3: {
    kineticFIELD: [
      ['7:00 PM','8:00 PM','TRACE'],
      ['8:00 PM','9:00 PM','SHIP WREK'],
      ['9:00 PM','10:00 PM','LAYTON GIORDANI'],
      ['10:00 PM','10:07 PM','OPENING CEREMONY: KINETIC LAUNCH'],
      ['10:07 PM','11:15 PM','FUNK TRIBU'],
      ['11:15 PM','11:19 PM','INTERMEZZO: KINETIC JOURNEY'],
      ['11:19 PM','12:28 AM','GRiZ B2B WOOLI'],
      ['12:28 AM','12:32 AM','INTERMEZZO: KINETIC JOURNEY'],
      ['12:32 AM','1:40 AM','ZEDD'],
      ['1:40 AM','1:47 AM','MAIN FIREWORKS'],
      ['1:47 AM','2:57 AM','MARTIN GARRIX'],
      ['2:57 AM','3:01 AM','INTERMEZZO: KINETIC JOURNEY'],
      ['3:01 AM','4:10 AM','CLOONEE'],
      ['4:10 AM','4:14 AM','INTERMEZZO: KINETIC JOURNEY'],
      ['4:14 AM','5:28 AM','ARMIN VAN BUUREN','SUNRISE'],
      ['5:28 AM','5:30 AM','CLOSING CEREMONY: CELEBRATION'],
    ],
    cosmicMEADOW: [
      ['7:00 PM','8:00 PM','GRAVAGERZ'],
      ['8:00 PM','9:00 PM','NOSTALGIX'],
      ['9:00 PM','10:00 PM','WILLIAM BLACK'],
      ['10:00 PM','11:00 PM','SAN HOLO','WHOLESOME RIDDIM'],
      ['11:00 PM','12:05 AM','DABIN'],
      ['12:05 AM','1:05 AM','ALISON WONDERLAND'],
      ['1:05 AM','2:20 AM','SEVEN LIONS'],
      ['2:20 AM','3:20 AM','RESTRICTED'],
      ['3:20 AM','4:30 AM','BLACK TIGER SEX MACHINE'],
      ['4:30 AM','5:30 AM','NICO MORENO B2B HOLY PRIEST'],
    ],
    circuitGROUNDS: [
      ['7:00 PM','8:30 PM','LINSKA'],
      ['8:30 PM','10:00 PM','ANNA'],
      ['10:00 PM','11:30 PM','BELTRAN'],
      ['11:30 PM','1:00 AM','CHRIS STUSSY'],
      ['1:00 AM','2:30 AM','SOLOMUN'],
      ['2:30 AM','4:00 AM','VINTAGE CULTURE'],
      ['4:00 AM','5:30 AM','KEVIN DE VRIES'],
    ],
    neonGARDEN: [
      ['7:00 PM','8:15 PM','BAD BEAT'],
      ['8:15 PM','9:30 PM','FRANKIE BONES'],
      ['9:30 PM','10:50 PM','ADIEL'],
      ['10:50 PM','12:10 AM','DJ GIGOLA'],
      ['12:10 AM','1:30 AM','999999999'],
      ['1:30 AM','2:50 AM','INDIRA PAGANOTTO'],
      ['2:50 AM','4:10 AM','KI/KI'],
      ['4:10 AM','5:30 AM','KLANGKUENSTLER'],
    ],
    bassPOD: [
      ['7:00 PM','7:50 PM','NIGHTSTALKER W/ MC DINO'],
      ['7:50 PM','8:40 PM','SIPPY'],
      ['8:40 PM','9:30 PM','EAZYBAKED'],
      ['9:30 PM','10:30 PM','INFEKT B2B SAMPLIFIRE'],
      ['10:30 PM','11:30 PM','A.M.C W/ PHANTOM'],
      ['11:30 PM','12:30 AM','VIRTUAL RIOT'],
      ['12:30 AM','1:30 AM','PEEKABOO'],
      ['1:30 AM','2:30 AM','AHEE B2B LIQUID STRANGER'],
      ['2:30 AM','3:30 AM','WHETHAN'],
      ['3:30 AM','4:30 AM','BOOGIE T B2B DISTINCT MOTIVE'],
      ['4:30 AM','5:30 AM','ÆON:MODE','SUNRISE'],
    ],
    wasteLAND: [
      ['7:00 PM','8:30 PM','SIHK'],
      ['8:30 PM','9:30 PM','CLAWZ'],
      ['9:30 PM','10:30 PM','THE PURGE'],
      ['10:30 PM','11:30 PM','YOSUF'],
      ['11:30 PM','12:30 AM','DJ ISAAC'],
      ['12:30 AM','1:30 AM','VIEZE ASBAK'],
      ['1:30 AM','2:30 AM','SUB ZERO PROJECT'],
      ['2:30 AM','3:30 AM','ROOLER'],
      ['3:30 AM','4:30 AM','WARFACE'],
      ['4:30 AM','5:30 AM','MADGRRL B2B VESSEL'],
    ],
    quantumVALLEY: [
      ['7:00 PM','8:00 PM','WARUNG'],
      ['8:00 PM','9:00 PM','SHINGO NAKAMURA'],
      ['9:00 PM','10:00 PM','REBÜKE'],
      ['10:00 PM','11:00 PM','CRISTOPH'],
      ['11:00 PM','12:00 AM','ELI & FUR'],
      ['12:00 AM','1:00 AM','TINLICKER','DJ SET'],
      ['1:00 AM','2:15 AM','CASSIAN'],
      ['2:15 AM','3:30 AM','MASSANO'],
      ['3:30 AM','4:30 AM','INNELLEA'],
      ['4:30 AM','5:30 AM','KREAM'],
    ],
    stereoBLOOM: [
      ['7:00 PM','8:00 PM','KLO'],
      ['8:00 PM','9:15 PM',"MURPHY'S LAW"],
      ['9:15 PM','10:30 PM','SIDNEY CHARLES B2B BUSHBABY'],
      ['10:30 PM','11:45 PM','SKREAM'],
      ['11:45 PM','1:00 AM','HAMDI'],
      ['1:00 AM','2:15 AM','CHRIS LORENZO B2B BULLET TOOTH'],
      ['2:15 AM','3:30 AM','SILVA BUMPA'],
      ['3:30 AM','4:30 AM','MORGAN SEATREE'],
      ['4:30 AM','5:30 AM','LU.RE'],
    ],
    bionicJUNGLE: [
      ['7:00 PM','8:30 PM','ALVES'],
      ['8:30 PM','10:30 PM','ISABELLA'],
      ['10:30 PM','12:00 AM','KINAHAU'],
      ['12:00 AM','1:30 AM','TIGA'],
      ['1:30 AM','3:30 AM','DJ TENNIS B2B RED AXES'],
      ['3:30 AM','5:30 AM','BELTRAN B2B SIMAS'],
    ],
  },
};

// ===== ROUTES =====
const ROUTES = [
  ['kineticFIELD','circuitGROUNDS', 6, 'easy', 'Two main stages flanking each other. Direct walk down the main drag.'],
  ['kineticFIELD','cosmicMEADOW',   9, 'medium', 'Cut behind kF or loop around. Bottlenecks after sunrise sets.'],
  ['kineticFIELD','bassPOD',        11, 'medium', 'Bass crowd spills out hard. Leave 5 min before bassPOD set you want.'],
  ['kineticFIELD','neonGARDEN',     13, 'medium', 'Down through the carnival rides. Stop for food on the way.'],
  ['kineticFIELD','wasteLAND',      14, 'hard', 'Long haul. Hard crowd, hard route. Buffer 5 extra minutes.'],
  ['kineticFIELD','quantumVALLEY',  16, 'hard', 'Far corner. Skip if you have a tight transition.'],
  ['kineticFIELD','stereoBLOOM',    12, 'medium', 'Through the bloom paths. Pretty walk, slow at night.'],
  ['kineticFIELD','bionicJUNGLE',   15, 'hard', 'Hidden corner. Use map landmarks.'],
  ['circuitGROUNDS','cosmicMEADOW', 8, 'easy', 'Both on the inner ring. Straight shot.'],
  ['circuitGROUNDS','neonGARDEN',   7, 'easy', 'Quick connect through the techno corridor.'],
  ['circuitGROUNDS','bassPOD',      12, 'medium', 'Through the merch tents.'],
  ['circuitGROUNDS','wasteLAND',    11, 'medium', 'Heavy bass crowd between them.'],
  ['circuitGROUNDS','quantumVALLEY',14, 'hard', 'Cross-venue trek.'],
  ['circuitGROUNDS','stereoBLOOM',  10, 'medium', 'Past the carnival games.'],
  ['circuitGROUNDS','bionicJUNGLE', 13, 'hard', 'Tucked-away path.'],
  ['cosmicMEADOW','neonGARDEN',     9, 'medium', 'Both are open-format house stages. Easy transition vibe-wise.'],
  ['cosmicMEADOW','bassPOD',        10, 'medium', 'Quick cut across.'],
  ['cosmicMEADOW','wasteLAND',      12, 'medium', 'Skirt the perimeter.'],
  ['cosmicMEADOW','quantumVALLEY',  12, 'hard', 'Long crossover.'],
  ['cosmicMEADOW','stereoBLOOM',    8, 'easy', 'Closest neighbor for cM crowd.'],
  ['neonGARDEN','bassPOD',          10, 'medium', 'Through the campground side.'],
  ['neonGARDEN','wasteLAND',        9, 'medium', 'Easy back-route.'],
  ['neonGARDEN','quantumVALLEY',    11, 'medium', 'Both on the outer edge.'],
  ['neonGARDEN','stereoBLOOM',      10, 'medium', 'House to house.'],
  ['neonGARDEN','bionicJUNGLE',     7, 'easy', 'Closest pair. Underground house-heads paradise.'],
  ['bassPOD','wasteLAND',           7, 'easy', 'Heavy-music corner. Closest pair on this side.'],
  ['bassPOD','quantumVALLEY',       11, 'medium', 'Cross-vibe trek but doable.'],
  ['bassPOD','stereoBLOOM',         12, 'medium', 'Through the food court.'],
  ['bassPOD','bionicJUNGLE',        14, 'hard', 'Far edge.'],
  ['wasteLAND','quantumVALLEY',     10, 'medium', 'Hard-dance to trance pipeline. Quite a sound shift.'],
  ['wasteLAND','stereoBLOOM',       13, 'hard', 'Across the venue.'],
  ['wasteLAND','bionicJUNGLE',      13, 'hard', 'Far corner.'],
  ['quantumVALLEY','stereoBLOOM',   11, 'medium', 'Outer-ring connect.'],
  ['quantumVALLEY','bionicJUNGLE',  10, 'medium', 'Same back zone.'],
  ['stereoBLOOM','bionicJUNGLE',    8, 'easy', 'Both tucked in the blooming corner.'],
];

// ===== EDC MONUMENTS (meet location options) =====
const EDC_MONUMENTS = [
  { value: 'ferriswheel',  label: 'Ferris Wheel' },
  { value: 'entrance',     label: 'Main Entrance / Gate 1' },
  { value: 'owl',          label: 'The Owl (Gufo)' },
  { value: 'mushroom',     label: 'Mushroom Forest' },
  { value: 'totemfield',   label: 'Totem Forest / Infield' },
  { value: 'bridge',       label: 'The Bridge' },
  { value: 'artcar',       label: 'Art Car Zone' },
  { value: 'foodcourt',    label: 'Food Court / Snack Attack' },
  { value: 'merch',        label: 'Merch Tent' },
  { value: 'firstaid',     label: 'First Aid / Medical' },
  { value: 'carnival',     label: 'Carnival Rides / Swings' },
  { value: 'water',        label: 'Water Station' },
  { value: 'custom',       label: 'Custom Spot' },
];

function locationLabel(val) {
  if (!val) return '';
  const m = EDC_MONUMENTS.find(x => x.value === val);
  if (m) return m.label;
  const s = STAGES[val];
  if (s) return s.name;
  return val;
}

function meetLocationOptions(selected) {
  const stageOpts = STAGE_ORDER.map(s =>
    `<option value="${s}" ${selected === s ? 'selected' : ''}>${STAGES[s].name}</option>`
  ).join('');
  const monOpts = EDC_MONUMENTS.map(m =>
    `<option value="${m.value}" ${selected === m.value ? 'selected' : ''}>${m.label}</option>`
  ).join('');
  return `<option value="">-- Where to meet --</option><optgroup label="Stages">${stageOpts}</optgroup><optgroup label="Landmarks">${monOpts}</optgroup>`;
}

function meetAfterOptions(selected) {
  const stageOpts = STAGE_ORDER.map(s =>
    `<option value="${s}" ${selected === s ? 'selected' : ''}>${STAGES[s].name}</option>`
  ).join('');
  const monOpts = EDC_MONUMENTS.filter(m => m.value !== 'custom').map(m =>
    `<option value="${m.value}" ${selected === m.value ? 'selected' : ''}>${m.label}</option>`
  ).join('');
  return `<option value="">Then heading to... (optional)</option><optgroup label="Stages">${stageOpts}</optgroup><optgroup label="Landmarks">${monOpts}</optgroup>`;
}

// Meet extras (wait + after) stored locally — no schema migration required
const MEET_EXTRAS_KEY = 'edc-meet-extras-v1';
function getMeetExtras(groupId) {
  try { return JSON.parse(localStorage.getItem(MEET_EXTRAS_KEY) || '{}')[groupId] || {}; } catch(e) { return {}; }
}
function setMeetExtras(groupId, patch) {
  try {
    const all = JSON.parse(localStorage.getItem(MEET_EXTRAS_KEY) || '{}');
    all[groupId] = { ...(all[groupId] || {}), ...patch };
    localStorage.setItem(MEET_EXTRAS_KEY, JSON.stringify(all));
  } catch(e) {}
}

// Meet RSVPs — "I'll try to meet you there" per group, stored locally
const MEET_RSVP_KEY = 'edc-meet-rsvps-v1';
function getMeetRsvps() {
  try { return JSON.parse(localStorage.getItem(MEET_RSVP_KEY) || '{}'); } catch(e) { return {}; }
}
function getMeetRsvp(groupId) { return !!getMeetRsvps()[groupId]; }
function toggleMeetRsvp(groupId) {
  const all = getMeetRsvps();
  if (all[groupId]) delete all[groupId];
  else all[groupId] = true;
  localStorage.setItem(MEET_RSVP_KEY, JSON.stringify(all));
}

function renderMeetCallout(g) {
  if (!g.meeting_stage && !g.meeting_time) return '';
  const loc  = g.meeting_stage ? locationLabel(g.meeting_stage) : '';
  const time = g.meeting_time  || '';
  if (!loc && !time) return '';
  const waitVal  = g.meeting_wait ? parseInt(g.meeting_wait) : null;
  const waitLabel = waitVal === 999 ? 'Wait until they show' : waitVal ? `Wait up to ${waitVal} min` : '';
  const afterLabel = g.meeting_after ? `Then → ${locationLabel(g.meeting_after)}` : '';
  const meta = [waitLabel, afterLabel].filter(Boolean).join(' · ');
  const rsvpd = g.id ? getMeetRsvp(g.id) : false;
  return `<div class="meet-callout">
    <div class="meet-callout-loc">${loc ? `📍 ${escapeHtml(loc)}` : ''}${loc && time ? ' · ' : ''}${time ? escapeHtml(time) : ''}</div>
    ${meta ? `<div class="meet-callout-meta">${escapeHtml(meta)}</div>` : ''}
    ${rsvpd ? `<div class="meet-rsvp-badge">✓ You're planning to be here</div>` : ''}
  </div>`;
}

// ===== STATE =====
const LOCAL_KEY = 'edc-lv-2026-state-v2';
const COLORS = ['#ff006e','#00f5ff','#39ff14','#ffd60a','#a020f0','#ff9ed8','#ff6b1a','#7dc14b'];
const TODAY_DAY = 1;

let state = {
  user: null,            // { name }
  myGroupIds: [],        // [uuid]
  currentTab: 'schedule',
  currentDay: TODAY_DAY,
  activeStages: STAGE_ORDER.filter(s => STAGES[s].tier === 1),
  picks: {},             // personal picks (localStorage)
  groups: [],            // hydrated from supabase
  editingGroupId: null,
  mapImage: null,
  mapImageDims: null,
  stagePositions: {},
  mapEditMode: false,
  mapLayers: { paths: true, landmarks: true, gates: false, labels: true },
};

function saveLocal() {
  try {
    const toSave = {
      user: state.user, myGroupIds: state.myGroupIds, currentTab: state.currentTab,
      currentDay: state.currentDay, activeStages: state.activeStages, picks: state.picks,
      mapImage: state.mapImage, mapImageDims: state.mapImageDims,
      stagePositions: state.stagePositions, mapLayers: state.mapLayers,
      notifyPref: state.notifyPref, notified: state.notified,
    };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(toSave));
  } catch(e) {
    // localStorage quota or private-mode rejection. Toast once so the user knows state isn't sticking.
    if (!state._quotaWarned) {
      state._quotaWarned = true;
      try { toast('Storage full — picks may not persist', 'err'); } catch(_) {}
    }
  }
}
function loadLocal() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return;
    const loaded = JSON.parse(raw);
    const defaults = { paths: true, landmarks: true, gates: false, labels: true };
    state = { ...state, ...loaded };
    state.mapLayers = { ...defaults, ...(loaded.mapLayers || {}) };
    if (!state.activeStages?.length) state.activeStages = STAGE_ORDER.filter(s => STAGES[s].tier === 1);
    state.myGroupIds = Array.isArray(state.myGroupIds) ? state.myGroupIds : [];
  } catch(e){}
}

// ===== HELPERS =====
function timeToMinutes(t) {
  const m = t.match(/(\d+):(\d+)\s*(AM|PM)/);
  if (!m) return 0;
  let h = parseInt(m[1]), min = parseInt(m[2]), ampm = m[3];
  if (ampm === 'AM' && h === 12) h = 0;
  else if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM') h += 24;
  return h * 60 + min;
}
function makeSetId(day, stage, start) { return `d${day}-${stage}-${start}`; }
function isCeremony(name) { return CEREMONY_KEYWORDS.some(k => name.includes(k)); }
function isHeadliner(name) { return HEADLINERS.has(name); }
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
// All festival timing locked to Las Vegas (America/Los_Angeles) regardless of user's TZ.
// Otherwise a user opening the app from a different timezone sees wrong "NOW PLAYING",
// wrong reminder windows, and wrong LEAVE NOW warnings.
function nowPacific() {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', hour12: false,
    }).formatToParts(new Date());
    const p = Object.fromEntries(parts.map(x => [x.type, x.value]));
    return {
      year: parseInt(p.year),
      month: parseInt(p.month), // 1-indexed
      day: parseInt(p.day),
      hour: (parseInt(p.hour) === 24 ? 0 : parseInt(p.hour)),
      minute: parseInt(p.minute),
    };
  } catch (_) {
    // Fallback to local time if Intl.DateTimeFormat fails (very old browsers)
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate(), hour: d.getHours(), minute: d.getMinutes() };
  }
}
function nowMinutes() {
  const p = nowPacific();
  if (p.hour >= 12) return p.hour * 60 + p.minute;
  return (p.hour + 24) * 60 + p.minute;
}
function todayDay() {
  const p = nowPacific();
  // Festival is May 15–17, 2026 (Pacific). Rollover at noon since sets run to ~5:30 AM.
  if (p.year === 2026 && p.month === 5) {
    if (p.day === 15 && p.hour >= 12) return 1;
    if (p.day === 16 && p.hour < 12) return 1;
    if (p.day === 16 && p.hour >= 12) return 2;
    if (p.day === 17 && p.hour < 12) return 2;
    if (p.day === 17 && p.hour >= 12) return 3;
    if (p.day === 18 && p.hour < 12) return 3;
  }
  return TODAY_DAY;
}
function findNowPlaying() {
  const day = todayDay(); const now = nowMinutes();
  const dayData = SCHEDULE[day]; if (!dayData) return null;
  for (const stage of STAGE_ORDER) {
    for (const s of (dayData[stage] || [])) {
      const sM = timeToMinutes(s[0]), eM = timeToMinutes(s[1]);
      if (now >= sM && now < eM) return { stage, start: s[0], end: s[1], artist: s[2] };
    }
  }
  return null;
}
function genJoinCode() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

// ===== LIVE PLANNER (Up Next + LEAVE NOW + Festival Countdown + Reminders) =====

let _lastLeaveNowId = null;
function pulseHapticIfNew(leaveCellId) {
  if (!leaveCellId) { _lastLeaveNowId = null; return; }
  if (leaveCellId === _lastLeaveNowId) return;
  _lastLeaveNowId = leaveCellId;
  // First transition into LEAVE NOW for this pick — buzz the phone
  try { navigator.vibrate?.([80, 60, 120]); } catch (_) {}
}


function festivalStatus() {
  const day = todayDay();
  const now = nowMinutes();
  const dayData = SCHEDULE[day];
  if (!dayData) return { state: 'over' };
  let firstStart = Infinity, lastEnd = 0;
  for (const stage of STAGE_ORDER) {
    for (const s of (dayData[stage] || [])) {
      firstStart = Math.min(firstStart, timeToMinutes(s[0]));
      lastEnd = Math.max(lastEnd, timeToMinutes(s[1]));
    }
  }
  if (now < firstStart) return { state: 'pre', day, mins: firstStart - now };
  if (now < lastEnd) return { state: 'live', day, mins: lastEnd - now };
  return { state: 'over', day };
}

function formatCountdown(mins) {
  if (mins <= 0) return 'NOW';
  if (mins < 1) return '<1M';
  if (mins < 60) return `${Math.floor(mins)}M`;
  const h = Math.floor(mins / 60), m = Math.floor(mins % 60);
  return m === 0 ? `${h}H` : `${h}H ${m}M`;
}

function findRouteMin(fromStage, toStage) {
  if (!fromStage || !toStage || fromStage === toStage) return 0;
  const r = ROUTES.find(r => (r[0] === fromStage && r[1] === toStage) || (r[0] === toStage && r[1] === fromStage));
  return r ? r[2] : null;
}

function getTodayPickContext() {
  const day = todayDay();
  const now = nowMinutes();
  const picks = getAllPicks()
    .filter(p => p.day === day && !isCeremony(p.artist))
    .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
  const current = picks.find(p => {
    const s = timeToMinutes(p.start), e = timeToMinutes(p.end);
    return now >= s && now < e;
  });
  const upcoming = picks.filter(p => timeToMinutes(p.start) > now);
  return { day, now, picks, current, upcoming };
}

function renderUpNext() {
  const bar = document.getElementById('upnextBar');
  const stripEl = document.getElementById('upnextStrip');
  const statusEl = document.getElementById('upnextStatus');
  if (!bar || !stripEl || !statusEl) return;

  // Only show after onboarding completes
  if (!state.user?.name) { bar.style.display = 'none'; return; }
  bar.style.display = '';

  const { day, now, current, upcoming } = getTodayPickContext();
  const fs = festivalStatus();

  // --- Status line ---
  const dayLabel = { 1: 'NIGHT 1', 2: 'NIGHT 2', 3: 'NIGHT 3' }[day] || 'EDC LV 26';
  let statusHtml = '';
  if (fs.state === 'pre') {
    statusHtml = `<span class="ftv-state">DOORS IN ${formatCountdown(fs.mins)}</span><span class="ftv-sep">·</span><span>${dayLabel} · FRI 5/15</span>`;
  } else if (fs.state === 'live') {
    statusHtml = `<span class="live-dot"></span><span class="ftv-state">${dayLabel} LIVE</span><span class="ftv-sep">·</span><span>WRAPS IN ${formatCountdown(fs.mins)}</span>`;
  } else {
    statusHtml = `<span class="ftv-state">EDC 26 · WRAPPED</span>`;
  }
  // Reminder CTA (only if user has picks today and hasn't already enabled or denied)
  if (state.notifyPref === undefined && (current || upcoming.length > 0) && 'Notification' in window && Notification.permission === 'default') {
    statusHtml += `<button class="ftv-cta" data-action="enable-reminders" type="button">🔔 REMIND ME</button>`;
  }
  statusEl.innerHTML = statusHtml;

  // --- Cells ---
  if (!current && !upcoming.length) {
    if (fs.state === 'over') {
      stripEl.innerHTML = `<div class="upnext-empty"><span class="ue-big">EDC 26 IS A WRAP</span>See you in 2027.</div>`;
    } else if (fs.state === 'pre') {
      stripEl.innerHTML = `<div class="upnext-empty"><span class="ue-big">NO PICKS YET</span>Tap a daisy on Schedule to plan your night</div>`;
    } else {
      stripEl.innerHTML = `<div class="upnext-empty"><span class="ue-big">NOTHING QUEUED TONIGHT</span>Open Schedule & tap a daisy to pick a set</div>`;
    }
    return;
  }

  const cells = [];
  let prevStage = null;
  if (current) {
    const remaining = Math.max(0, timeToMinutes(current.end) - now);
    cells.push({ kind: 'now', pick: current, label: `${formatCountdown(remaining)} LEFT`, walkFrom: null });
    prevStage = current.stage;
  }
  for (let i = 0; i < Math.min(2, upcoming.length); i++) {
    const p = upcoming[i];
    const startsIn = timeToMinutes(p.start) - now;
    const walk = prevStage ? findRouteMin(prevStage, p.stage) : null;
    // LEAVE NOW: if next pick starts in ≤ walk + 3min buffer, flag it
    const buffer = 3;
    const leaveNow = walk != null && walk > 0 && startsIn <= (walk + buffer);
    cells.push({
      kind: i === 0 ? 'next' : 'then',
      tag: i === 0 ? 'UP NEXT' : 'THEN',
      pick: p,
      label: formatCountdown(startsIn),
      walkFrom: walk,
      leaveNow,
      startsIn,
    });
    prevStage = p.stage;
  }

  // Haptic on transition into LEAVE NOW for a given pick
  const leaveCell = cells.find(c => c.leaveNow);
  pulseHapticIfNew(leaveCell ? leaveCell.pick.id : null);

  stripEl.innerHTML = cells.map((c, i) => {
    const meta = STAGES[c.pick.stage];
    const tag = c.kind === 'now' ? 'NOW PLAYING' : c.tag;
    const cellClass = `upnext-cell ${c.kind === 'now' ? 'now' : ''} ${c.leaveNow ? 'leave-now' : ''}`.trim();
    const finalTag = c.leaveNow ? '🚶 LEAVE NOW' : tag;
    const walkHtml = i > 0 && c.walkFrom != null && c.walkFrom > 0
      ? `<span class="upnext-walk ${c.leaveNow ? 'tight' : ''}">→ ${c.walkFrom}M</span>`
      : '';
    return `${walkHtml}<button class="${cellClass}" data-action="jump-pick" data-id="${c.pick.id}" style="--stage-color:${meta.color}" aria-label="${escapeHtml(finalTag)}: ${escapeHtml(c.pick.artist)} at ${meta.name}, ${c.label}">
      <div class="upnext-tag">${finalTag}</div>
      <div class="upnext-artist">${escapeHtml(c.pick.artist)}</div>
      <div class="upnext-meta">
        <span class="upnext-stage">${meta.name}</span>
        <span class="upnext-countdown">${c.label}</span>
      </div>
    </button>`;
  }).join('');
}

// ===== REMINDERS =====
function requestReminders() {
  if (!('Notification' in window)) { toast('Reminders not supported here', 'err'); return; }
  if (Notification.permission === 'granted') {
    state.notifyPref = 'granted'; saveLocal(); toast('Reminders on'); renderUpNext(); return;
  }
  if (Notification.permission === 'denied') {
    toast('Notifications blocked in browser', 'err'); state.notifyPref = 'denied'; saveLocal(); return;
  }
  Notification.requestPermission().then(result => {
    state.notifyPref = result;
    saveLocal();
    if (result === 'granted') {
      toast('Reminders on');
      // Send a confirmation notification so the user sees what they'll look like
      new Notification('EDC LV 26 reminders enabled', { body: "You'll get a heads-up 10 minutes before each of your picks.", icon: '/icon.svg' });
    } else {
      toast('No worries — you can enable later');
    }
    renderUpNext();
  });
}

function checkReminders() {
  if (state.notifyPref !== 'granted') return;
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  if (!state.notified) state.notified = {};
  const { upcoming } = getTodayPickContext();
  const now = nowMinutes();
  let dirty = false;
  for (const p of upcoming) {
    const startsIn = timeToMinutes(p.start) - now;
    // Fire when set is starting in 9–11 min window (covers 60s tick latency)
    if (startsIn >= 9 && startsIn <= 11 && !state.notified[p.id]) {
      const meta = STAGES[p.stage];
      try {
        new Notification(`${p.artist} in 10 min`, {
          body: `${meta.name} · starts ${p.start}`,
          icon: '/icon.svg',
          tag: p.id,
        });
        state.notified[p.id] = Date.now();
        dirty = true;
      } catch (_) {}
    }
  }
  // Garbage-collect old notified entries (>24h)
  const cutoff = Date.now() - 86400000;
  for (const k in state.notified) if (state.notified[k] < cutoff) { delete state.notified[k]; dirty = true; }
  if (dirty) saveLocal();
}

// ===== TOAST =====
let toastTimer;
function toast(msg, type) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.toggle('err', type === 'err');
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

// ===== SUPABASE OPS =====
async function fetchAllGroups() {
  const { data, error } = await sb.from('edc_groups').select('*').order('created_at', { ascending: false }).limit(200);
  if (error) { console.error(error); return []; }
  return data || [];
}

async function fetchMyGroups() {
  if (!state.myGroupIds.length) { state.groups = []; return []; }
  const [g, m, p] = await Promise.all([
    sb.from('edc_groups').select('*').in('id', state.myGroupIds),
    sb.from('edc_group_members').select('*').in('group_id', state.myGroupIds),
    sb.from('edc_group_picks').select('*').in('group_id', state.myGroupIds),
  ]);
  if (g.error || m.error || p.error) {
    console.error(g.error || m.error || p.error);
    return state.groups;
  }
  const groups = (g.data || []).map(grp => ({
    ...grp,
    members: (m.data || []).filter(x => x.group_id === grp.id).sort((a,b) => new Date(a.joined_at) - new Date(b.joined_at)),
    picks: (p.data || []).filter(x => x.group_id === grp.id),
  }));
  state.groups = groups;
  // Prune myGroupIds for any that were deleted
  state.myGroupIds = state.myGroupIds.filter(id => groups.some(g => g.id === id));
  saveLocal();
  return groups;
}

async function pushMyPicksToGroup(groupId) {
  const setIds = Object.keys(state.picks || {});
  if (!setIds.length || !state.user?.name) return;
  const rows = setIds.map(set_id => ({ group_id: groupId, set_id, added_by: state.user.name }));
  // Use upsert to ignore duplicates (member might have already shared these)
  const { error } = await sb.from('edc_group_picks').upsert(rows, { onConflict: 'group_id,set_id,added_by', ignoreDuplicates: true });
  if (error) console.warn('seed crew picks failed', error);
}

async function createGroup(name, color) {
  let attempts = 0;
  while (attempts < 4) {
    const code = genJoinCode();
    const { data, error } = await sb.from('edc_groups').insert({
      name, color, join_code: code, created_by: state.user?.name || null,
    }).select().single();
    if (!error) {
      await sb.from('edc_group_members').insert({ group_id: data.id, name: state.user.name });
      state.myGroupIds = [...new Set([...state.myGroupIds, data.id])];
      saveLocal();
      // Push creator's existing picks into the new crew so Compare shows them immediately
      await pushMyPicksToGroup(data.id);
      return data;
    }
    if (error.code === '23505') { attempts++; continue; }
    throw error;
  }
  throw new Error('Could not generate unique join code, try again');
}

async function joinGroupById(groupId) {
  const { data: g } = await sb.from('edc_groups').select('*').eq('id', groupId).single();
  if (!g) throw new Error('Crew not found');
  const { error } = await sb.from('edc_group_members').insert({ group_id: g.id, name: state.user.name });
  if (error && error.code !== '23505') throw error;
  state.myGroupIds = [...new Set([...state.myGroupIds, g.id])];
  saveLocal();
  // Seed the crew with the new member's existing picks so Compare lights up right away
  await pushMyPicksToGroup(g.id);
  return g;
}

async function joinGroupByCode(code) {
  code = code.trim().toUpperCase();
  if (!code) throw new Error('Enter a join code');
  const { data: g, error } = await sb.from('edc_groups').select('*').eq('join_code', code).maybeSingle();
  if (error) throw error;
  if (!g) throw new Error('No crew found with that code');
  return joinGroupById(g.id);
}

async function leaveGroup(groupId) {
  if (!state.user?.name) return;
  // Clean up: remove user's picks from this crew along with membership
  await Promise.all([
    sb.from('edc_group_members').delete().eq('group_id', groupId).eq('name', state.user.name),
    sb.from('edc_group_picks').delete().eq('group_id', groupId).eq('added_by', state.user.name),
  ]);
  state.myGroupIds = state.myGroupIds.filter(id => id !== groupId);
  saveLocal();
}

async function updateGroup(id, patch) {
  const { error } = await sb.from('edc_groups').update(patch).eq('id', id);
  if (error) console.warn('updateGroup failed', error);
}

async function toggleGroupPick(groupId, setId) {
  if (!state.user?.name) return;
  const g = state.groups.find(g => g.id === groupId);
  const existing = g?.picks?.find(p => p.set_id === setId && p.added_by === state.user.name);
  if (existing) {
    await sb.from('edc_group_picks').delete().eq('id', existing.id);
  } else {
    await sb.from('edc_group_picks').insert({ group_id: groupId, set_id: setId, added_by: state.user.name });
  }
}

// Sync a personal pick to every crew the user is in (best-effort, parallel)
async function syncPickToCrews(setId, picked) {
  if (!state.user?.name || !state.groups.length) return;
  const member = state.user.name;
  await Promise.allSettled(state.groups.map(async g => {
    if (picked) {
      const { error } = await sb.from('edc_group_picks').insert({ group_id: g.id, set_id: setId, added_by: member });
      // 23505 = unique violation = already there, ignore
      if (error && error.code !== '23505') console.warn('crew-pick insert failed', g.id, error);
    } else {
      await sb.from('edc_group_picks').delete().eq('group_id', g.id).eq('set_id', setId).eq('added_by', member);
    }
  }));
}

// ===== REALTIME + POLL FALLBACK =====
let realtimeChannel = null;
let realtimeStatus = 'idle'; // idle | subscribing | connected | error
let pollTimer = null;

function setupRealtime() {
  if (realtimeChannel) {
    try { sb.removeChannel(realtimeChannel); } catch(_) {}
    realtimeChannel = null;
  }
  realtimeStatus = 'subscribing';
  const onChange = () => fetchMyGroups().then(rerenderAll).catch(e => console.warn('refresh failed', e));
  realtimeChannel = sb.channel('edc-public')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'edc_groups' }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'edc_group_members' }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'edc_group_picks' }, onChange)
    .subscribe((status, err) => {
      realtimeStatus = status === 'SUBSCRIBED' ? 'connected' : (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' ? 'error' : status.toLowerCase());
      if (err) console.warn('realtime error:', err);
      updateSyncIndicator();
    });
  startPolling();
}

function startPolling() {
  if (pollTimer) clearInterval(pollTimer);
  pollTimer = setInterval(() => {
    if (document.hidden) return;
    if (!state.myGroupIds.length) return;
    fetchMyGroups().then(rerenderAll).catch(() => {});
  }, 18000);
}

function manualRefresh() {
  const btn = document.getElementById('refreshGroupsBtn');
  if (btn) btn.classList.add('spinning');
  fetchMyGroups().then(() => {
    rerenderAll();
    toast('Synced');
  }).catch(() => {
    toast('Sync failed', 'err');
  }).finally(() => {
    setTimeout(() => btn?.classList.remove('spinning'), 400);
  });
}

function updateSyncIndicator() {
  const el = document.getElementById('refreshGroupsBtn');
  if (!el) return;
  el.dataset.status = realtimeStatus;
}

function rerenderAll() {
  if (state.currentTab === 'schedule') renderSchedule();
  if (state.currentTab === 'picks') renderPicks();
  if (state.currentTab === 'groups') renderGroups();
  if (state.currentTab === 'routes') renderRoutes();
  renderUpNext();
}

// Jump from up-next cell into the Schedule tab at that pick's day, scroll-into-view
function jumpToPickInSchedule(setId) {
  const m = setId.match(/^d(\d+)-/);
  if (!m) return;
  const day = parseInt(m[1]);
  switchTab('schedule');
  if (state.currentDay !== day) setDay(day);
  // Defer until DOM is laid out
  setTimeout(() => {
    const card = document.querySelector(`.set-card[data-id="${setId}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.transition = 'box-shadow 0.4s';
      card.style.boxShadow = '0 0 0 2px var(--neon-cyan), 0 0 20px #00f5ff60';
      setTimeout(() => { card.style.boxShadow = ''; }, 1400);
    }
  }, 80);
}

// Refresh when tab becomes visible again
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && state.myGroupIds.length) {
    fetchMyGroups().then(rerenderAll).catch(() => {});
  }
});
window.addEventListener('online', () => {
  if (state.myGroupIds.length) fetchMyGroups().then(rerenderAll).catch(() => {});
});

// ===== ONBOARDING =====
const STEP_PROGRESS = { name: 0, choice: 1, create: 1, join: 1, share: 2 };

function updateOnboardProgress(step) {
  const idx = STEP_PROGRESS[step] ?? 0;
  document.querySelectorAll('#onboardProgress .pdot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
    d.classList.toggle('done', i < idx);
  });
  // Hide progress entirely when triggered from in-app join (no name step)
  const prog = document.getElementById('onboardProgress');
  if (prog) prog.style.display = state._joinFromApp ? 'none' : '';
}

function focusFirst(step) {
  setTimeout(() => {
    const stepEl = document.querySelector(`.onboard-step[data-step="${step}"]`);
    if (!stepEl) return;
    const target = stepEl.querySelector('input:not([disabled]), button:not([disabled])');
    target?.focus({ preventScroll: true });
  }, 60);
}

function showOnboard(step) {
  const bg = document.getElementById('onboardBg');
  bg.classList.add('show');
  document.querySelectorAll('.onboard-step').forEach(s => s.classList.toggle('active', s.dataset.step === step));
  updateOnboardProgress(step);
  if (step === 'choice') {
    document.getElementById('choiceGreeting').textContent = `Hey ${state.user.name}`;
  }
  if (step === 'join') {
    document.getElementById('joinList').innerHTML = '<div class="join-list-empty">Loading crews…</div>';
    fetchAllGroups().then(renderJoinList);
  }
  if (step === 'create') {
    renderCreateSwatches();
    document.getElementById('createNameInput').value = '';
    document.getElementById('createSubmit').disabled = true;
  }
  focusFirst(step);
}
function hideOnboard() {
  document.getElementById('onboardBg').classList.remove('show');
  state._joinFromApp = false;
}

function renderCreateSwatches() {
  const el = document.getElementById('createSwatches');
  const initial = COLORS[Math.floor(Math.random() * COLORS.length)];
  el.innerHTML = COLORS.map(c => `<div class="swatch" data-color="${c}" data-active="${c === initial}" style="background:${c}"></div>`).join('');
  el.dataset.selected = initial;
}

function renderJoinList(groups) {
  const el = document.getElementById('joinList');
  const available = (groups || []).filter(g => !state.myGroupIds.includes(g.id));
  if (!available.length) {
    el.innerHTML = '<div class="join-list-empty">No crews yet. Be the first — create one!</div>';
    return;
  }
  el.innerHTML = available.slice(0, 20).map(g => `
    <div class="join-list-item" data-join-id="${g.id}" style="--group-color:${g.color}">
      <div class="ga">${escapeHtml((g.name[0] || '?').toUpperCase())}</div>
      <div>
        <div class="gn">${escapeHtml(g.name)}</div>
        <div class="gm">Code: ${escapeHtml(g.join_code)}</div>
      </div>
      <div class="arr">›</div>
    </div>
  `).join('');
}

function wireOnboarding() {
  const nameInput = document.getElementById('onboardNameInput');
  const nameNext = document.getElementById('onboardNameNext');

  nameInput.addEventListener('input', () => {
    nameNext.disabled = nameInput.value.trim().length < 1;
  });
  nameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !nameNext.disabled) nameNext.click();
  });

  nameNext.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) return;
    state.user = { name };
    saveLocal();
    updateUserChip();
    showOnboard('choice');
  });

  document.querySelectorAll('[data-back]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state._joinFromApp) { hideOnboard(); return; }
      showOnboard(btn.dataset.back);
    });
  });

  document.getElementById('choiceCreate').addEventListener('click', () => showOnboard('create'));
  document.getElementById('choiceJoin').addEventListener('click', () => showOnboard('join'));
  document.getElementById('skipCrew').addEventListener('click', () => {
    hideOnboard();
    initApp();
  });

  // Create flow
  const createName = document.getElementById('createNameInput');
  const createSubmit = document.getElementById('createSubmit');
  const createSwatchesEl = document.getElementById('createSwatches');
  createName.addEventListener('input', () => {
    createSubmit.disabled = createName.value.trim().length < 1;
  });
  createName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !createSubmit.disabled) createSubmit.click();
  });
  createSwatchesEl.addEventListener('click', (e) => {
    const sw = e.target.closest('.swatch');
    if (!sw) return;
    createSwatchesEl.querySelectorAll('.swatch').forEach(s => s.dataset.active = (s === sw).toString());
    createSwatchesEl.dataset.selected = sw.dataset.color;
  });
  createSubmit.addEventListener('click', async () => {
    const name = createName.value.trim();
    const color = createSwatchesEl.dataset.selected || COLORS[0];
    if (!name) return;
    createSubmit.disabled = true;
    createSubmit.textContent = 'CREATING…';
    try {
      const g = await createGroup(name, color);
      await fetchMyGroups();
      document.getElementById('shareGroupName').textContent = g.name;
      document.getElementById('shareJoinCode').textContent = g.join_code;
      showOnboard('share');
    } catch(err) {
      toast(err.message || 'Failed to create', 'err');
    } finally {
      createSubmit.disabled = false;
      createSubmit.innerHTML = 'CREATE CREW <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
    }
  });

  // Join flow
  document.getElementById('joinList').addEventListener('click', async (e) => {
    const item = e.target.closest('[data-join-id]');
    if (!item) return;
    const id = item.dataset.joinId;
    try {
      const g = await joinGroupById(id);
      await fetchMyGroups();
      document.getElementById('shareGroupName').textContent = g.name;
      document.getElementById('shareJoinCode').textContent = g.join_code;
      showOnboard('share');
    } catch(err) {
      toast(err.message || 'Failed to join', 'err');
    }
  });

  const joinCodeInput = document.getElementById('joinCodeInput');
  const joinByCodeBtn = document.getElementById('joinByCodeBtn');
  joinCodeInput.addEventListener('input', () => { joinCodeInput.value = joinCodeInput.value.toUpperCase(); });
  joinCodeInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') joinByCodeBtn.click(); });
  joinByCodeBtn.addEventListener('click', async () => {
    try {
      const g = await joinGroupByCode(joinCodeInput.value);
      await fetchMyGroups();
      document.getElementById('shareGroupName').textContent = g.name;
      document.getElementById('shareJoinCode').textContent = g.join_code;
      showOnboard('share');
    } catch(err) {
      toast(err.message || 'Failed to join', 'err');
    }
  });

  // Share/done — use native share sheet when available
  document.getElementById('shareJoinCode').addEventListener('click', () => {
    shareCrewCode(document.getElementById('shareJoinCode').textContent);
  });
  document.getElementById('onboardDone').addEventListener('click', () => {
    hideOnboard();
    initApp();
  });
}

// ===== USER CHIP =====
function updateUserChip() {
  const chip = document.getElementById('userChip');
  if (!state.user) { chip.style.display = 'none'; return; }
  chip.style.display = '';
  document.getElementById('userChipText').textContent = state.user.name.toUpperCase();
  document.getElementById('userAvatar').textContent = (state.user.name[0] || '?').toUpperCase();
}

function changeName() {
  const name = prompt('Your name:', state.user?.name || '');
  if (!name || !name.trim()) return;
  state.user = { name: name.trim() };
  saveLocal();
  updateUserChip();
  rerenderAll();
}

// ===== SCHEDULE RENDER =====
function renderStageFilters() {
  const el = document.getElementById('stageFilters');
  el.innerHTML = STAGE_ORDER.map(stage => {
    const meta = STAGES[stage];
    const active = state.activeStages.includes(stage);
    return `<button class="stage-chip ${meta.key}" data-stage="${stage}" data-active="${active}"><span class="chip-label">${meta.name}</span></button>`;
  }).join('');
}

function renderSchedule() {
  const el = document.getElementById('scheduleGrid');
  const day = state.currentDay;
  const dayData = SCHEDULE[day];
  const now = nowMinutes();
  const isToday = todayDay() === day;

  el.innerHTML = state.activeStages.map(stage => {
    const meta = STAGES[stage];
    const sets = dayData[stage] || [];
    return `<div class="stage-column ${meta.key}">
      <div class="stage-header"><div class="stage-bar"></div><div class="stage-name">${meta.name}</div><div class="stage-count">${sets.length} SETS</div></div>
      <div class="set-list">${sets.map(s => renderSetCard(day, stage, s, now, isToday)).join('')}</div>
    </div>`;
  }).join('');
}

function renderSetCard(day, stage, set, now, isToday) {
  const [start, end, artist, tag] = set;
  const id = makeSetId(day, stage, start);
  const startM = timeToMinutes(start);
  const endM = timeToMinutes(end);
  const isPicked = !!state.picks[id];
  const ceremony = isCeremony(artist);
  const headliner = isHeadliner(artist);
  const isNow = isToday && now >= startM && now < endM;
  const isPast = isToday && now >= endM;
  const conflict = isPicked && hasConflict(id);

  // Crews that picked this set (user's own groups)
  const crewDots = state.groups
    .filter(g => g.picks?.some(p => p.set_id === id))
    .map(g => `<div class="crew-dot" style="background:${g.color};color:#0a0518" title="${escapeHtml(g.name)}">${escapeHtml((g.name[0] || '?').toUpperCase())}</div>`)
    .join('');

  // Platform crew count badge (all groups on the platform)
  let platBadge = '';
  if (_platformSetMap) {
    const platGs = _platformSetMap.get(id);
    const platCount = platGs ? platGs.size : 0;
    if (platCount > 0) {
      const expanded = state._expandedPlatformSet === id;
      let chips = '';
      if (expanded && _platformCache) {
        chips = `<div class="plat-crew-chips">${[...platGs].map(gid => {
          const gr = _platformCache.groups.find(x => x.id === gid);
          return gr ? `<span class="plat-crew-chip" style="background:${gr.color}" title="${escapeHtml(gr.name)}">${escapeHtml((gr.name[0]||'?').toUpperCase())}</span>` : '';
        }).join('')}</div>`;
      }
      platBadge = `<button class="plat-set-badge${expanded ? ' open' : ''}" data-action="toggle-plat-set" data-id="${id}">👥 ${platCount}</button>${chips}`;
    }
  }

  let classes = 'set-card';
  if (isNow) classes += ' is-now';
  if (isPast) classes += ' is-past';
  if (headliner) classes += ' is-headliner';
  if (ceremony) classes += ' is-ceremony';

  const aria = `${isPicked ? 'Remove' : 'Add'} ${artist} from your picks`;
  return `<div class="${classes}" data-picked="${isPicked}" data-conflict="${conflict}" data-id="${id}">
    <div class="set-time">${start}<span class="end">${end}</span></div>
    <div class="set-info">
      <div class="set-artist">${escapeHtml(artist)}${tag ? `<span class="set-tag">${escapeHtml(tag)}</span>` : ''}</div>
      ${crewDots ? `<div class="set-crew-dots" aria-label="Crews who picked this set">${crewDots}</div>` : ''}
      ${platBadge}
    </div>
    <button class="star-btn" data-action="star" data-id="${id}" aria-label="${escapeHtml(aria)}" aria-pressed="${isPicked}">
      <svg viewBox="0 0 24 24" fill="${isPicked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5 12 2"/></svg>
    </button>
  </div>`;
}

// ===== PICKS LOGIC =====
function getAllPicks() {
  const picks = [];
  for (const id in state.picks) {
    const dayMatch = id.match(/^d(\d+)-/);
    if (!dayMatch) continue;
    const day = parseInt(dayMatch[1]);
    const after = id.slice(`d${day}-`.length);
    const stage = after.split('-')[0];
    const start = after.slice(stage.length + 1);
    const set = (SCHEDULE[day]?.[stage] || []).find(s => s[0] === start);
    if (set) picks.push({ id, day, stage, start: set[0], end: set[1], artist: set[2], tag: set[3] });
  }
  return picks;
}

function hasConflict(id) {
  const t = getAllPicks().find(p => p.id === id);
  if (!t) return false;
  const tS = timeToMinutes(t.start), tE = timeToMinutes(t.end);
  return getAllPicks().some(p => p.id !== id && p.day === t.day && tS < timeToMinutes(p.end) && timeToMinutes(p.start) < tE);
}

function findConflicts(day) {
  const picks = getAllPicks().filter(p => p.day === day).sort((a,b) => timeToMinutes(a.start) - timeToMinutes(b.start));
  const conflicts = [];
  for (let i = 0; i < picks.length; i++) {
    for (let j = i+1; j < picks.length; j++) {
      const aS = timeToMinutes(picks[i].start), aE = timeToMinutes(picks[i].end);
      const bS = timeToMinutes(picks[j].start), bE = timeToMinutes(picks[j].end);
      if (aS < bE && bS < aE) conflicts.push([picks[i], picks[j]]);
    }
  }
  return conflicts;
}

function renderPicks() {
  const picks = getAllPicks();
  const total = picks.length;

  const statsEl = document.getElementById('picksStats');
  const headliners = picks.filter(p => isHeadliner(p.artist)).length;
  const daysHit = new Set(picks.map(p => p.day)).size;
  statsEl.innerHTML = `
    <div class="stat-box"><div class="stat-num">${total}</div><div class="stat-label">SETS</div></div>
    <div class="stat-box"><div class="stat-num">${headliners}</div><div class="stat-label">HEADLINERS</div></div>
    <div class="stat-box"><div class="stat-num">${daysHit}/3</div><div class="stat-label">DAYS</div></div>
  `;

  const allConflicts = [1,2,3].flatMap(d => findConflicts(d));
  const conflictsEl = document.getElementById('conflictsContainer');
  conflictsEl.innerHTML = allConflicts.length ? `<div class="conflicts-banner">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    <div><div class="ct">${allConflicts.length} CONFLICT${allConflicts.length === 1 ? '' : 'S'}</div><div class="cd">You've picked overlapping sets. Conflicts are flagged below.</div></div>
  </div>` : '';

  const content = document.getElementById('picksContent');
  if (!total) {
    content.innerHTML = `<div class="picks-empty">
      <svg class="big-daisy" viewBox="0 0 100 100"><g transform="translate(50,50)"><g><ellipse cx="0" cy="-30" rx="9" ry="20" fill="#ff9ed8"/><ellipse cx="0" cy="-30" rx="9" ry="20" fill="#ff9ed8" transform="rotate(45)"/><ellipse cx="0" cy="-30" rx="9" ry="20" fill="#ff9ed8" transform="rotate(90)"/><ellipse cx="0" cy="-30" rx="9" ry="20" fill="#ff9ed8" transform="rotate(135)"/><ellipse cx="0" cy="-30" rx="9" ry="20" fill="#ff9ed8" transform="rotate(180)"/><ellipse cx="0" cy="-30" rx="9" ry="20" fill="#ff9ed8" transform="rotate(225)"/><ellipse cx="0" cy="-30" rx="9" ry="20" fill="#ff9ed8" transform="rotate(270)"/><ellipse cx="0" cy="-30" rx="9" ry="20" fill="#ff9ed8" transform="rotate(315)"/></g><circle r="13" fill="#ffd60a"/></g></svg>
      <h3>NO PICKS YET</h3><p>Tap the daisy on any set in the Schedule to add it to your picks.</p>
    </div>`;
    return;
  }

  const byDay = { 1: [], 2: [], 3: [] };
  picks.forEach(p => byDay[p.day].push(p));
  [1,2,3].forEach(d => byDay[d].sort((a,b) => timeToMinutes(a.start) - timeToMinutes(b.start)));

  const dayLabels = { 1: 'FRI · 5/15 · DAY 1', 2: 'SAT · 5/16 · DAY 2', 3: 'SUN · 5/17 · DAY 3' };
  let html = '';
  for (const d of [1,2,3]) {
    if (!byDay[d].length) continue;
    html += `<div class="picks-day-section"><div class="picks-day-header">${dayLabels[d]} · ${byDay[d].length} SETS</div>`;
    html += byDay[d].map(p => {
      const conflict = hasConflict(p.id);
      const meta = STAGES[p.stage];
      const inGroups = state.groups.filter(g => g.picks?.some(x => x.set_id === p.id));
      return `<div class="pick-row ${meta.key} ${conflict ? 'has-conflict' : ''}" style="color:${meta.color}">
        <div class="pick-time">${p.start}<span class="pick-end">to ${p.end}</span></div>
        <div class="pick-info">
          <div class="pick-artist">${escapeHtml(p.artist)}</div>
          <div class="pick-stage">${meta.name}</div>
          ${inGroups.length ? `<div class="pick-group-dots">${inGroups.map(g => `<div class="pick-group-dot" style="background:${g.color}" title="${escapeHtml(g.name)}">${escapeHtml((g.name[0] || '?').toUpperCase())}</div>`).join('')}</div>` : ''}
        </div>
        <button class="unstar" data-action="unstar" data-id="${p.id}" aria-label="Remove pick">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5 12 2"/></svg>
        </button>
      </div>`;
    }).join('');
    html += `</div>`;
  }
  content.innerHTML = html;
}

// ===== GROUPS =====

// Stable per-member color: hash name → palette index
const MEMBER_PALETTE = ['#ff006e','#00f5ff','#39ff14','#ffd60a','#a020f0','#ff9ed8','#ff6b1a','#7dc14b','#6ec1ff','#c724b1','#b8b8ff','#ff3864'];
function memberColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = ((h << 5) - h + name.charCodeAt(i)) | 0;
  return MEMBER_PALETTE[Math.abs(h) % MEMBER_PALETTE.length];
}

// Build comparison data for a single crew
function buildCompareData(group) {
  const currentMembers = new Set(group.members.map(m => m.name));
  // Map setId -> [member names who picked it] — current members only
  const setMembers = new Map();
  for (const p of (group.picks || [])) {
    if (!currentMembers.has(p.added_by)) continue;
    if (!setMembers.has(p.set_id)) setMembers.set(p.set_id, new Set());
    setMembers.get(p.set_id).add(p.added_by);
  }

  // Resolve each set_id back to its actual set info
  const rows = [];
  for (const [setId, memberSet] of setMembers) {
    const m = setId.match(/^d(\d+)-([^-]+)-(.+)$/);
    if (!m) continue;
    const day = parseInt(m[1]);
    const stage = m[2];
    const start = m[3];
    const set = (SCHEDULE[day]?.[stage] || []).find(s => s[0] === start);
    if (!set) continue;
    rows.push({
      setId, day, stage,
      start: set[0], end: set[1], artist: set[2], tag: set[3],
      members: [...memberSet],
    });
  }

  rows.sort((a, b) => a.day - b.day || timeToMinutes(a.start) - timeToMinutes(b.start));

  // Detect time-conflicts WITHIN the same member: same person, overlapping intervals on same day
  // Detect group-disagreements: same time window, different members at different stages
  const byDay = { 1: [], 2: [], 3: [] };
  rows.forEach(r => byDay[r.day].push(r));

  const allMembers = group.members.map(m => m.name);
  return { rows, byDay, allMembers };
}

function renderCompareForGroup(g) {
  const data = buildCompareData(g);
  if (!data.rows.length) {
    return `<div class="compare-empty">Nobody's picked any sets yet. Tap the daisy on any set in Schedule to share it with your crew.</div>`;
  }
  const memberCount = data.allMembers.length;
  const dayLabels = { 1: 'FRI · 5/15', 2: 'SAT · 5/16', 3: 'SUN · 5/17' };

  // Stats
  const overlapping = data.rows.filter(r => r.members.length >= 2 && r.members.length === memberCount).length;
  const partial = data.rows.filter(r => r.members.length >= 2 && r.members.length < memberCount).length;
  const solo = data.rows.filter(r => r.members.length === 1).length;

  let html = `<div class="compare-stats">
    <div class="compare-stat all"><div class="cs-num">${overlapping}</div><div class="cs-lbl">FULL CREW</div></div>
    <div class="compare-stat some"><div class="cs-num">${partial}</div><div class="cs-lbl">PARTIAL</div></div>
    <div class="compare-stat one"><div class="cs-num">${solo}</div><div class="cs-lbl">SOLO</div></div>
  </div>`;

  // Legend: who's who
  html += `<div class="compare-legend">${data.allMembers.map(n => `<span class="compare-legend-chip"><span class="cl-dot" style="background:${memberColor(n)}"></span>${escapeHtml(n)}</span>`).join('')}</div>`;

  for (const d of [1, 2, 3]) {
    const dayRows = data.byDay[d];
    if (!dayRows.length) continue;
    html += `<div class="compare-day"><div class="compare-day-head">${dayLabels[d]}</div>`;
    html += dayRows.map(r => {
      const meta = STAGES[r.stage];
      const fullCrew = r.members.length === memberCount && memberCount > 1;
      const partial = r.members.length >= 2 && !fullCrew;
      const dots = data.allMembers.map(name => {
        const picked = r.members.includes(name);
        return `<span class="compare-dot ${picked ? 'on' : 'off'}" style="${picked ? `background:${memberColor(name)};color:#0a0518;border-color:#0a0518` : ''}" title="${escapeHtml(name)}${picked ? '' : ' — not picked'}">${escapeHtml((name[0] || '?').toUpperCase())}</span>`;
      }).join('');
      return `<div class="compare-row ${fullCrew ? 'is-full' : partial ? 'is-partial' : 'is-solo'}" style="--stage-color:${meta.color}">
        <div class="compare-time">${r.start}</div>
        <div class="compare-info">
          <div class="compare-artist">${escapeHtml(r.artist)}</div>
          <div class="compare-stage">${meta.name}</div>
        </div>
        <div class="compare-dots">${dots}</div>
      </div>`;
    }).join('');
    html += `</div>`;
  }

  return html;
}

function renderGroups() {
  const list = document.getElementById('groupsList');
  if (!state.groups.length) {
    list.innerHTML = `<div class="empty-groups">
      <p>No crews yet. Create one for your bass heads, your trance trance fam — whatever. Share the code, get them in.</p>
      <button class="btn-primary" id="emptyCreateBtn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg> CREATE A CREW</button>
    </div>`;
    document.getElementById('emptyCreateBtn')?.addEventListener('click', () => showGroupModal());
    return;
  }
  list.innerHTML = state.groups.map(g => {
    // Count UNIQUE sets picked across all crew members
    const uniqueSetCount = new Set((g.picks || []).map(p => p.set_id)).size;
    const expanded = state._expandedCompare === g.id;
    const extras = getMeetExtras(g.id);
    const gx = { ...g, meeting_wait: extras.wait ?? null, meeting_after: extras.after ?? null };
    return `<div class="group-card" style="--group-color:${g.color}">
      <div class="group-card-head">
        <div class="group-avatar">${escapeHtml((g.name[0] || '?').toUpperCase())}</div>
        <div style="flex:1;min-width:0">
          <div class="group-name">${escapeHtml(g.name)}</div>
          <div class="group-meta">${g.members.length} MEMBER${g.members.length === 1 ? '' : 'S'} · ${uniqueSetCount} SET${uniqueSetCount === 1 ? '' : 'S'}</div>
        </div>
        <div class="group-actions">
          <button class="icon-btn" data-action="edit-group" data-id="${g.id}" aria-label="Edit crew">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="icon-btn" data-action="leave-group" data-id="${g.id}" aria-label="Leave crew">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      </div>
      <div class="group-identity">
        <button class="join-code-pill" data-action="copy-code" data-code="${escapeHtml(g.join_code)}" aria-label="Copy join code ${escapeHtml(g.join_code)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          ${escapeHtml(g.join_code)}
        </button>
        <div class="group-members">
          ${g.members.map(m => `<div class="member-chip ${m.name === state.user?.name ? 'is-me' : ''}"><div class="mdot" aria-hidden="true"></div>${escapeHtml(m.name)}</div>`).join('')}
        </div>
      </div>
      <div class="group-meeting">
        <div class="group-meeting-label">Meet Times</div>
        ${renderMeetCallout(gx)}
        <div class="meet-fields">
          <div class="meet-row">
            <select class="meet-select" data-action="set-meeting-stage" data-group="${g.id}" aria-label="Meeting location">
              ${meetLocationOptions(gx.meeting_stage)}
            </select>
            <input class="meet-input" type="text" data-action="set-meeting-time" data-group="${g.id}" placeholder="Time (e.g. 11 PM)" aria-label="Meeting time" value="${escapeHtml(gx.meeting_time || '')}">
          </div>
          <div class="meet-row">
            <select class="meet-select" data-action="set-meeting-wait" data-group="${g.id}" aria-label="How long to wait">
              <option value="">How long to wait?</option>
              ${[5,10,15,20,30,45,60].map(m => `<option value="${m}" ${gx.meeting_wait == m ? 'selected' : ''}>${m} min</option>`).join('')}
              <option value="999" ${gx.meeting_wait == 999 ? 'selected' : ''}>Until they show</option>
            </select>
            <select class="meet-select" data-action="set-meeting-after" data-group="${g.id}" aria-label="After meeting, heading to">
              ${meetAfterOptions(gx.meeting_after)}
            </select>
          </div>
        </div>
        ${gx.meeting_stage || gx.meeting_time ? `<button class="rsvp-btn ${getMeetRsvp(g.id) ? 'rsvp-confirmed' : ''}" data-action="toggle-meet-rsvp" data-id="${g.id}">
          ${getMeetRsvp(g.id) ? '✓ You\'re planning to make this meet' : '🤝 I\'ll try to meet you here'}
        </button>` : ''}
      </div>
      <button class="compare-toggle ${expanded ? 'open' : ''}" data-action="toggle-compare" data-id="${g.id}" aria-expanded="${expanded}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M6 12h12M10 18h4"/></svg>
        <span>${expanded ? 'HIDE' : 'COMPARE'} CREW PICKS</span>
        <span class="compare-chev" aria-hidden="true">${expanded ? '▾' : '▸'}</span>
      </button>
      ${expanded ? `<div class="compare-panel">${renderCompareForGroup(g)}</div>` : ''}
    </div>`;
  }).join('');
}

function showGroupModal(groupId = null) {
  state.editingGroupId = groupId;
  const modal = document.getElementById('groupModal');
  const title = document.getElementById('groupModalTitle');
  const nameInput = document.getElementById('groupNameInput');
  const swatches = document.getElementById('colorSwatches');
  let selectedColor;
  if (groupId) {
    const g = state.groups.find(x => x.id === groupId);
    title.textContent = 'Edit Crew';
    nameInput.value = g.name;
    selectedColor = g.color;
  } else {
    title.textContent = 'New Crew';
    nameInput.value = '';
    selectedColor = COLORS[state.groups.length % COLORS.length];
  }
  swatches.innerHTML = COLORS.map(c => `<div class="swatch" data-color="${c}" data-active="${c === selectedColor}" style="background:${c}"></div>`).join('');
  modal.classList.add('show');
  setTimeout(() => nameInput.focus(), 100);
}
function hideGroupModal() {
  document.getElementById('groupModal').classList.remove('show');
  state.editingGroupId = null;
}

async function saveGroupFromModal() {
  const name = document.getElementById('groupNameInput').value.trim();
  const swatch = document.querySelector('#colorSwatches .swatch[data-active="true"]');
  const color = swatch ? swatch.dataset.color : COLORS[0];
  if (!name) return;
  try {
    if (state.editingGroupId) {
      await updateGroup(state.editingGroupId, { name, color });
    } else {
      await createGroup(name, color);
    }
    await fetchMyGroups();
    hideGroupModal();
    renderGroups();
  } catch(err) {
    toast(err.message || 'Save failed', 'err');
  }
}

// Share crew code via native share sheet (Messages/WhatsApp/etc), with clipboard fallback
function shareCrewCode(code) {
  const g = state.groups.find(x => x.join_code === code);
  const crewName = g?.name || 'EDC crew';
  const url = location.origin;
  const text = `Join "${crewName}" on EDC LV 26 — code: ${code}\n${url}`;
  if (navigator.share) {
    navigator.share({ title: `Join ${crewName} on EDC LV 26`, text, url }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => toast('Code copied!')).catch(() => {});
  } else {
    toast('Code: ' + code);
  }
}

// ===== JOIN OTHERS DIALOG (from Groups tab) =====
function showJoinDialog() {
  state._joinFromApp = true;
  showOnboard('join');
}

// ===== ROUTES =====
function renderRoutes() {
  renderMap();
  const flowsEl = document.getElementById('dayFlows');
  const dayLabels = { 1: 'FRI · DAY 1', 2: 'SAT · DAY 2', 3: 'SUN · DAY 3' };
  let html = '';
  for (const d of [1,2,3]) {
    const dayPicks = getAllPicks().filter(p => p.day === d && !isCeremony(p.artist)).sort((a,b) => timeToMinutes(a.start) - timeToMinutes(b.start));
    html += `<div class="day-flow-card"><div class="day-flow-head"><div class="day-flow-name">${dayLabels[d]}</div><div class="group-meta">${dayPicks.length} STOPS</div></div>`;
    if (!dayPicks.length) {
      html += `<div class="day-flow-empty">No picks yet for this day.</div>`;
    } else {
      html += `<div class="day-flow-list">`;
      for (let i = 0; i < dayPicks.length; i++) {
        const p = dayPicks[i];
        const meta = STAGES[p.stage];
        html += `<div class="day-flow-leg"><div class="leg-time">${p.start}</div><div class="leg-desc">${escapeHtml(p.artist)}</div><div class="leg-meta" style="color:${meta.color}">${meta.name}</div></div>`;
        if (i < dayPicks.length - 1) {
          const next = dayPicks[i+1];
          if (next.stage !== p.stage) {
            const route = ROUTES.find(r => (r[0] === p.stage && r[1] === next.stage) || (r[0] === next.stage && r[1] === p.stage));
            const mins = route ? route[2] : '~';
            const gap = timeToMinutes(next.start) - timeToMinutes(p.end);
            const tight = route && gap < route[2];
            html += `<div class="day-flow-leg transit" data-route-from="${p.stage}" data-route-to="${next.stage}"><div class="leg-time">${mins} min</div><div class="leg-desc">→ ${STAGES[next.stage].name}</div><div class="leg-meta" style="color:${tight ? 'var(--wL)' : 'var(--ink-mute)'}">${tight ? 'TIGHT' : 'OK'}</div></div>`;
          }
        }
      }
      html += `</div>`;
    }
    html += `</div>`;
  }
  flowsEl.innerHTML = html;
  flowsEl.querySelectorAll('.day-flow-leg.transit').forEach(el => {
    el.addEventListener('click', () => {
      drawMapRoute(el.dataset.routeFrom, el.dataset.routeTo);
      flowsEl.querySelectorAll('.day-flow-leg.transit').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
      document.querySelectorAll('.route-card').forEach(x => x.classList.remove('selected'));
      scrollMapIntoView();
    });
  });

  const grid = document.getElementById('routesGrid');
  const sorted = [...ROUTES].sort((a,b) => a[2] - b[2]);
  grid.innerHTML = sorted.map(r => {
    const [a, b, mins, diff, tip] = r;
    const aM = STAGES[a], bM = STAGES[b];
    return `<div class="route-card" data-route-from="${a}" data-route-to="${b}">
      <div class="route-path">
        <span class="route-stage" style="color:${aM.color}"><span class="dot"></span>${aM.name}</span>
        <span class="route-arrow">→</span>
        <span class="route-stage" style="color:${bM.color}"><span class="dot"></span>${bM.name}</span>
      </div>
      <div class="route-info"><div class="route-time">${mins}<span class="unit">MIN</span></div><div class="route-difficulty">${diff}</div></div>
      <div class="route-tip">${escapeHtml(tip)}</div>
    </div>`;
  }).join('');
  grid.querySelectorAll('.route-card').forEach(el => {
    el.addEventListener('click', () => {
      drawMapRoute(el.dataset.routeFrom, el.dataset.routeTo);
      grid.querySelectorAll('.route-card').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
      document.querySelectorAll('.day-flow-leg.transit').forEach(x => x.classList.remove('selected'));
      scrollMapIntoView();
    });
  });

  const clearBtn = document.getElementById('mapClearBtn');
  if (clearBtn && !clearBtn._wired) {
    clearBtn._wired = true;
    clearBtn.addEventListener('click', () => {
      clearMapRoute();
      document.querySelectorAll('.route-card.selected, .day-flow-leg.transit.selected').forEach(x => x.classList.remove('selected'));
    });
  }
}

// ===== FESTIVAL MAP =====
let _mapEndpoints = null;
function getStageCoords(key) {
  const ov = state.stagePositions?.[key];
  if (ov) return { x: ov.x, y: ov.y };
  if (state.mapImage && state.mapImageDims) {
    const sx = state.mapImageDims.w / 600, sy = state.mapImageDims.h / 900;
    return { x: STAGES[key].x * sx, y: STAGES[key].y * sy };
  }
  return { x: STAGES[key].x, y: STAGES[key].y };
}
function getMapBounds() {
  if (state.mapImage && state.mapImageDims) return { w: state.mapImageDims.w, h: state.mapImageDims.h };
  return { w: 600, h: 900 };
}
function renderMap() {
  const svg = document.getElementById('festMap');
  const stageLayer = document.getElementById('mapStageLayer');
  const bgImage = document.getElementById('mapBgImage');
  const inner = document.querySelector('.map-inner');
  if (!stageLayer || !svg) return;
  const bounds = getMapBounds();
  if (state.mapImage) {
    bgImage.setAttribute('href', state.mapImage);
    bgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', state.mapImage);
    bgImage.setAttribute('width', bounds.w);
    bgImage.setAttribute('height', bounds.h);
    bgImage.style.display = '';
    svg.setAttribute('viewBox', `0 0 ${bounds.w} ${bounds.h}`);
    if (inner) inner.style.aspectRatio = `${bounds.w} / ${bounds.h}`;
    svg.classList.add('has-bg-image');
  } else {
    bgImage.style.display = 'none';
    svg.setAttribute('viewBox', `0 0 600 900`);
    if (inner) inner.style.aspectRatio = `600 / 900`;
    svg.classList.remove('has-bg-image');
  }
  svg.classList.toggle('edit-mode', !!state.mapEditMode);
  applyMapLayerClasses();

  const scale = Math.max(1, Math.min(bounds.w, bounds.h) / 600);
  const r_glow = 32 * scale, r_ring = 22 * scale, r_core = 16 * scale;
  const fs_key = 11 * scale, fs_label = 10 * scale;
  const labelOff = 30 * scale, labelDown = 40 * scale;
  const midY = bounds.h / 2;

  stageLayer.innerHTML = Object.entries(STAGES).map(([key, s]) => {
    const c = getStageCoords(key);
    const labelY = c.y > midY ? labelDown : -labelOff;
    return `<g class="map-stage" data-stage="${key}" transform="translate(${c.x},${c.y})">
      <circle class="stage-glow" r="${r_glow}" fill="${s.color}" filter="url(#neonBlur)"/>
      <circle class="stage-ring" r="${r_ring}" stroke="${s.color}"/>
      <circle class="stage-core" r="${r_core}" fill="${s.color}"/>
      <text class="stage-key" style="font-size:${fs_key}px">${s.key}</text>
      <text class="stage-label" y="${labelY}" fill="${s.color}" style="font-size:${fs_label}px">${s.name}</text>
    </g>`;
  }).join('');

  stageLayer.querySelectorAll('.map-stage').forEach(el => {
    const key = el.dataset.stage;
    el.addEventListener('pointerdown', (e) => {
      if (!state.mapEditMode) return;
      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      el._dragging = true;
    });
    el.addEventListener('pointermove', (e) => {
      if (!state.mapEditMode || !el._dragging) return;
      const pt = screenToSvg(svg, e.clientX, e.clientY);
      const b = getMapBounds();
      const pad = Math.min(20, b.w * 0.03);
      const x = Math.max(pad, Math.min(b.w - pad, pt.x));
      const y = Math.max(pad, Math.min(b.h - pad, pt.y));
      state.stagePositions[key] = { x, y };
      el.setAttribute('transform', `translate(${x},${y})`);
      const label = el.querySelector('.stage-label');
      if (label) label.setAttribute('y', y > b.h / 2 ? labelDown : -labelOff);
    });
    el.addEventListener('pointerup', (e) => {
      if (!el._dragging) return;
      el._dragging = false;
      try { el.releasePointerCapture(e.pointerId); } catch(_){}
      saveLocal();
      if (_mapEndpoints?.[0] && _mapEndpoints[1]) drawMapRoute(_mapEndpoints[0], _mapEndpoints[1]);
    });
    el.addEventListener('click', () => {
      if (state.mapEditMode) return;
      const k = el.dataset.stage;
      if (!_mapEndpoints) {
        _mapEndpoints = [k, null];
        applyMapHighlight();
      } else if (_mapEndpoints[0] && !_mapEndpoints[1]) {
        if (k === _mapEndpoints[0]) clearMapRoute();
        else drawMapRoute(_mapEndpoints[0], k);
      } else {
        _mapEndpoints = [k, null];
        applyMapHighlight();
      }
    });
  });

  if (_mapEndpoints?.[0] && _mapEndpoints[1]) drawMapRoute(_mapEndpoints[0], _mapEndpoints[1]);
  else if (_mapEndpoints?.[0]) applyMapHighlight();

  wireMapControls();
  updateMapControlsUI();
}
function screenToSvg(svg, cx, cy) {
  const pt = svg.createSVGPoint(); pt.x = cx; pt.y = cy;
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: cx, y: cy };
  return pt.matrixTransform(ctm.inverse());
}
function applyMapHighlight() {
  const stages = document.querySelectorAll('.map-stage');
  if (!_mapEndpoints) { stages.forEach(s => s.classList.remove('dimmed','active','endpoint')); return; }
  const [from, to] = _mapEndpoints;
  stages.forEach(s => {
    const k = s.dataset.stage;
    s.classList.remove('dimmed','active','endpoint');
    if (k === from || k === to) s.classList.add('endpoint');
    else s.classList.add('dimmed');
  });
}
function drawMapRoute(fromKey, toKey) {
  _mapEndpoints = [fromKey, toKey];
  const routeLayer = document.getElementById('mapRouteLayer');
  if (!routeLayer) return;
  const a = getStageCoords(fromKey), b = getStageCoords(toKey);
  const aM = STAGES[fromKey], bM = STAGES[toKey];
  if (!aM || !bM) { clearMapRoute(); return; }
  const route = ROUTES.find(r => (r[0] === fromKey && r[1] === toKey) || (r[0] === toKey && r[1] === fromKey));
  const mins = route ? route[2] : '~';
  const bounds = getMapBounds();
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  const d = state.mapImage
    ? `M ${a.x} ${a.y} Q ${mx + (bounds.w/2 - mx)*0.15} ${my + (bounds.h/2 - my)*0.15} ${b.x} ${b.y}`
    : `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
  const scale = Math.max(1, Math.min(bounds.w, bounds.h) / 600);
  const lblW = 58 * scale, lblH = 24 * scale, lblFs = 12 * scale, strokeW = 5 * scale;
  routeLayer.innerHTML = `
    <path class="map-route-glow" d="${d}" stroke="${aM.color}" style="stroke-width:${16 * scale}px"/>
    <path class="map-route-line" d="${d}" stroke="${aM.color}" style="stroke-width:${strokeW}px"/>
    <path class="map-route-line" d="${d}" stroke="${bM.color}" style="stroke-width:${strokeW}px; animation-delay:-0.6s; opacity:0.7"/>
    <g transform="translate(${mx},${my})">
      <rect class="map-route-label-bg" x="${-lblW/2}" y="${-lblH/2}" width="${lblW}" height="${lblH}" rx="${lblH/2}"/>
      <text class="map-route-label" y="${lblFs * 0.4}" style="font-size:${lblFs}px">${mins} MIN</text>
    </g>`;
  applyMapHighlight();
}
function clearMapRoute() {
  _mapEndpoints = null;
  const r = document.getElementById('mapRouteLayer');
  if (r) r.innerHTML = '';
  applyMapHighlight();
}
function scrollMapIntoView() {
  const wrap = document.querySelector('.map-wrap'); if (!wrap) return;
  const rect = wrap.getBoundingClientRect();
  if (rect.top < 0 || rect.bottom > window.innerHeight) wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let _mapControlsWired = false;
function wireMapControls() {
  if (_mapControlsWired) return;
  _mapControlsWired = true;
  const fileInput = document.getElementById('mapImageInput');
  const editBtn = document.getElementById('mapEditBtn');
  const resetBtn = document.getElementById('mapResetBtn');
  const layersBar = document.getElementById('mapLayers');
  layersBar?.querySelectorAll('.layer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!state.mapLayers) state.mapLayers = {};
      state.mapLayers[btn.dataset.layer] = !state.mapLayers[btn.dataset.layer];
      saveLocal();
      applyMapLayerClasses();
    });
  });
  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0]; if (!file) return;
    if (file.size > 4 * 1024 * 1024) { toast('Image too large (max 4MB)', 'err'); return; }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      const probe = new Image();
      probe.onload = () => {
        const maxDim = 1600;
        let w = probe.naturalWidth, h = probe.naturalHeight;
        if (w > maxDim || h > maxDim) {
          const r = Math.min(maxDim/w, maxDim/h);
          w = Math.round(w*r); h = Math.round(h*r);
        }
        state.mapImage = dataUrl;
        state.mapImageDims = { w, h };
        state.stagePositions = {};
        state.mapEditMode = true;
        saveLocal();
        renderMap();
      };
      probe.src = dataUrl;
    };
    reader.readAsDataURL(file);
    fileInput.value = '';
  });
  editBtn?.addEventListener('click', () => {
    state.mapEditMode = !state.mapEditMode;
    saveLocal();
    renderMap();
  });
  resetBtn?.addEventListener('click', () => {
    if (!confirm('Reset map? Removes uploaded image and position adjustments.')) return;
    state.mapImage = null;
    state.mapImageDims = null;
    state.stagePositions = {};
    state.mapEditMode = false;
    clearMapRoute();
    saveLocal();
    renderMap();
  });
}
function applyMapLayerClasses() {
  const svg = document.getElementById('festMap'); if (!svg) return;
  const l = state.mapLayers || {};
  svg.classList.toggle('show-paths', !!l.paths);
  svg.classList.toggle('show-landmarks', !!l.landmarks);
  svg.classList.toggle('show-gates', !!l.gates);
  svg.classList.toggle('show-labels', !!l.labels);
  const bar = document.getElementById('mapLayers'); if (!bar) return;
  bar.querySelectorAll('.layer-btn').forEach(btn => {
    btn.classList.toggle('active', !!l[btn.dataset.layer]);
    const isDecor = ['paths','landmarks','gates'].includes(btn.dataset.layer);
    btn.style.display = (state.mapImage && isDecor) ? 'none' : '';
  });
}
function updateMapControlsUI() {
  const editBtn = document.getElementById('mapEditBtn');
  const resetBtn = document.getElementById('mapResetBtn');
  const uploadBtn = document.querySelector('.map-ctrl-btn.upload');
  const uploadLabel = document.getElementById('uploadLabel');
  const editLabel = document.getElementById('editLabel');
  const footnote = document.getElementById('mapFootnote');
  const hasImg = !!state.mapImage;
  const hasOverrides = Object.keys(state.stagePositions || {}).length > 0;
  if (editBtn) editBtn.style.display = (hasImg || hasOverrides) ? '' : 'none';
  if (resetBtn) resetBtn.style.display = (hasImg || hasOverrides) ? '' : 'none';
  if (uploadBtn) uploadBtn.classList.toggle('has-image', hasImg);
  if (uploadLabel) uploadLabel.textContent = hasImg ? 'REPLACE MAP' : 'UPLOAD OFFICIAL MAP';
  if (editBtn) editBtn.classList.toggle('active', !!state.mapEditMode);
  if (editLabel) editLabel.textContent = state.mapEditMode ? 'DONE' : 'EDIT POSITIONS';
  if (footnote) footnote.textContent = hasImg
    ? (state.mapEditMode ? 'Drag the stage markers onto their real positions, then tap DONE.' : 'Tap stages or routes to draw paths.')
    : 'Approximate layout. Upload the official map for accuracy.';
  const inner = document.querySelector('.map-inner');
  let hint = document.querySelector('.edit-mode-hint');
  if (state.mapEditMode && !hint && inner) {
    hint = document.createElement('div');
    hint.className = 'edit-mode-hint';
    hint.textContent = 'DRAG STAGES TO ALIGN';
    inner.appendChild(hint);
  } else if (!state.mapEditMode && hint) hint.remove();
}

// ===== TAB SWITCHING =====
function switchTab(tab) {
  state.currentTab = tab;
  document.querySelectorAll('.tab-content').forEach(el => el.classList.toggle('active', el.id === `tab-${tab}`));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.toggle('active', el.dataset.tab === tab));
  saveLocal();
  if (tab === 'picks') renderPicks();
  if (tab === 'groups') renderGroups();
  if (tab === 'routes') renderRoutes();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function setDay(day) {
  state.currentDay = day;
  document.querySelectorAll('#dayToggle .day-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.day) === day));
  renderSchedule();
  saveLocal();
}
function toggleStage(stage) {
  const i = state.activeStages.indexOf(stage);
  if (i === -1) state.activeStages.push(stage);
  else if (state.activeStages.length > 1) state.activeStages.splice(i, 1);
  state.activeStages.sort((a,b) => STAGES[a].order - STAGES[b].order);
  renderStageFilters();
  renderSchedule();
  saveLocal();
}
// In-flight guard prevents rapid double-taps from fanning out duplicate writes
// across N crews in parallel and racing with realtime echoes.
const _pickInFlight = new Set();
function togglePick(id) {
  if (_pickInFlight.has(id)) return;
  _pickInFlight.add(id);
  const picked = !state.picks[id];
  if (picked) state.picks[id] = true; else delete state.picks[id];
  // When unpicked, clear any cached notify state so a future pick can re-fire
  if (!picked && state.notified?.[id]) { delete state.notified[id]; }
  saveLocal();
  renderSchedule();
  renderUpNext();
  if (state.currentTab === 'picks') renderPicks();
  syncPickToCrews(id, picked)
    .then(() => fetchMyGroups())
    .then(() => {
      if (state.currentTab === 'groups') renderGroups();
      if (state.currentTab === 'schedule') renderSchedule();
    })
    .catch(err => console.warn('crew sync failed', err))
    .finally(() => _pickInFlight.delete(id));
}

// ===== EVENT WIRING =====
function wireEvents() {
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-action], [data-tab], [data-day], [data-stage], [data-color]');
    if (!t) return;
    if (t.dataset.tab) { switchTab(t.dataset.tab); return; }
    if (t.dataset.day && t.closest('#dayToggle')) { setDay(parseInt(t.dataset.day)); return; }
    if (t.dataset.stage && t.closest('#stageFilters')) { toggleStage(t.dataset.stage); return; }
    if (t.dataset.color && t.closest('#colorSwatches')) {
      document.querySelectorAll('#colorSwatches .swatch').forEach(s => s.dataset.active = (s === t).toString());
      return;
    }
    const a = t.dataset.action;
    if (a === 'star' || a === 'unstar') { togglePick(t.dataset.id); return; }
    if (a === 'edit-group') { showGroupModal(t.dataset.id); return; }
    if (a === 'leave-group') {
      if (!confirm('Leave this crew? You can rejoin with the code anytime.')) return;
      leaveGroup(t.dataset.id).then(() => fetchMyGroups()).then(() => renderGroups());
      return;
    }
    if (a === 'copy-code') {
      shareCrewCode(t.dataset.code);
      return;
    }
    if (a === 'toggle-compare') {
      state._expandedCompare = state._expandedCompare === t.dataset.id ? null : t.dataset.id;
      renderGroups();
      return;
    }
    if (a === 'toggle-meet-rsvp') {
      toggleMeetRsvp(t.dataset.id);
      renderGroups();
      return;
    }
    if (a === 'toggle-plat-set') {
      state._expandedPlatformSet = state._expandedPlatformSet === t.dataset.id ? null : t.dataset.id;
      renderSchedule();
      return;
    }
    if (a === 'toggle-platform') {
      const panel = document.getElementById('platformPanel');
      const chev = document.querySelector('.platform-chev');
      const open = panel.style.display === 'none';
      panel.style.display = open ? 'block' : 'none';
      if (chev) chev.textContent = open ? '▾' : '▸';
      if (open) renderPlatformSection();
      return;
    }
    if (a === 'refresh-groups') {
      manualRefresh();
      return;
    }
    if (a === 'jump-pick') {
      jumpToPickInSchedule(t.dataset.id);
      return;
    }
    if (a === 'enable-reminders') {
      requestReminders();
      return;
    }
  });

  document.addEventListener('change', (e) => {
    const t = e.target;
    if (t.dataset.action === 'set-meeting-stage') {
      updateGroup(t.dataset.group, { meeting_stage: t.value || null })
        .then(() => fetchMyGroups()).then(() => renderGroups());
    }
    if (t.dataset.action === 'set-meeting-time') {
      // handled on blur/input — see below
    }
    if (t.dataset.action === 'set-meeting-wait') {
      setMeetExtras(t.dataset.group, { wait: t.value ? parseInt(t.value) : null });
      renderGroups();
    }
    if (t.dataset.action === 'set-meeting-after') {
      setMeetExtras(t.dataset.group, { after: t.value || null });
      renderGroups();
    }
  });

  // Meeting time: save on blur so the callout updates without re-fetching on every keystroke
  document.addEventListener('blur', (e) => {
    const t = e.target;
    if (t.dataset.action !== 'set-meeting-time') return;
    updateGroup(t.dataset.group, { meeting_time: t.value.trim() || null })
      .then(() => fetchMyGroups()).then(() => renderGroups());
  }, true);

  document.getElementById('addGroupBtn').addEventListener('click', () => showGroupModal());
  document.getElementById('joinGroupBtn').addEventListener('click', () => showJoinDialog());
  document.getElementById('modalCancel').addEventListener('click', hideGroupModal);
  document.getElementById('modalSave').addEventListener('click', saveGroupFromModal);
  document.getElementById('groupModal').addEventListener('click', (e) => { if (e.target.id === 'groupModal') hideGroupModal(); });
  document.getElementById('groupNameInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveGroupFromModal();
    if (e.key === 'Escape') hideGroupModal();
  });

  document.getElementById('userChip').addEventListener('click', changeName);

  // Global Escape: close any open modal
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const groupModal = document.getElementById('groupModal');
    if (groupModal.classList.contains('show')) { hideGroupModal(); return; }
    const onboard = document.getElementById('onboardBg');
    if (onboard.classList.contains('show') && state.user) {
      // Only allow Escape after name is set (don't trap user, but don't let them skip naming)
      if (state._joinFromApp) { hideOnboard(); return; }
    }
  });
}

// ===== PLATFORM COMPARISON =====
let _platformCache = null;
let _platformSetMap = null;   // Map<set_id, Set<group_id>>
let _platformGroupMap = null; // Map<group_id, Set<set_id>>
let _platformLoading = false;

async function fetchPlatformData() {
  if (_platformCache) return _platformCache;
  if (_platformLoading) return null;
  _platformLoading = true;
  try {
    const [{ data: groups, error: ge }, { data: picks, error: pe }] = await Promise.all([
      sb.from('edc_groups').select('id,name,color,meeting_stage,meeting_time').limit(500),
      sb.from('edc_group_picks').select('group_id,set_id').limit(10000),
    ]);
    if (ge) throw ge;
    if (pe) throw pe;
    // Pre-compute lookup maps
    const setMap = new Map();
    const groupMap = new Map();
    for (const p of (picks || [])) {
      if (!setMap.has(p.set_id)) setMap.set(p.set_id, new Set());
      setMap.get(p.set_id).add(p.group_id);
      if (!groupMap.has(p.group_id)) groupMap.set(p.group_id, new Set());
      groupMap.get(p.group_id).add(p.set_id);
    }
    _platformSetMap = setMap;
    _platformGroupMap = groupMap;
    _platformCache = { groups: groups || [], picks: picks || [] };
    return _platformCache;
  } catch(e) {
    console.warn('platform fetch failed', e);
    return null;
  } finally {
    _platformLoading = false;
  }
}

function resolvePlatformSetId(setId) {
  const m = setId.match(/^d(\d+)-([^-]+)-(.+)$/);
  if (!m) return null;
  const day = parseInt(m[1]);
  const stage = m[2];
  const start = m[3];
  const set = (SCHEDULE[day]?.[stage] || []).find(s => s[0] === start);
  if (!set) return null;
  return { day, stage, start: set[0], end: set[1], artist: set[2] };
}

async function renderPlatformSection() {
  const panel = document.getElementById('platformPanel');
  if (!panel) return;
  panel.innerHTML = `<div class="platform-loading">Scanning platform…</div>`;

  const data = await fetchPlatformData();
  if (!data) {
    panel.innerHTML = `<div class="platform-loading">Could not load. Check your connection.</div>`;
    return;
  }

  const { groups, picks } = data;
  // Use pre-computed maps
  const setGroupMap = _platformSetMap;
  const groupPicksMap = _platformGroupMap;

  // Top 15 hot sets
  const hotSets = [...setGroupMap.entries()]
    .map(([setId, gs]) => ({ setId, count: gs.size }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  const myPickIds = new Set(Object.keys(state.picks || {}));
  const myGroupIds = new Set(state.groups.map(g => g.id));

  // Crews with most overlap with my personal picks (exclude own crews)
  const crewOverlaps = groups
    .filter(g => !myGroupIds.has(g.id))
    .map(g => {
      const theirPicks = groupPicksMap.get(g.id) || new Set();
      let overlap = 0;
      for (const id of myPickIds) { if (theirPicks.has(id)) overlap++; }
      return { ...g, overlap, total: theirPicks.size };
    })
    .filter(g => g.total > 0 && g.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 10);

  // Groups that have a meet scheduled (other crews' public meet times)
  const scheduledMeets = groups
    .filter(g => g.meeting_stage || g.meeting_time)
    .sort((a, b) => (a.meeting_time || '').localeCompare(b.meeting_time || ''));

  const hotHTML = hotSets.map((h, i) => {
    const s = resolvePlatformSetId(h.setId);
    const artist = s ? s.artist : h.setId;
    const stageColor = s ? (STAGES[s.stage]?.color || '#888') : '#888';
    const inPicks = myPickIds.has(h.setId);
    return `<div class="plat-set-row">
      <span class="plat-rank">${i + 1}</span>
      <div class="plat-set-info">
        <span class="plat-artist${inPicks ? ' plat-in-picks' : ''}">${escapeHtml(artist)}${inPicks ? ' ✓' : ''}</span>
        ${s ? `<span class="plat-stage" style="color:${stageColor}">${s.stage} · Day ${s.day}</span>` : ''}
      </div>
      <span class="plat-count">${h.count} crew${h.count !== 1 ? 's' : ''}</span>
    </div>`;
  }).join('');

  const overlapHTML = crewOverlaps.length === 0
    ? (myPickIds.size > 0 ? `<p class="plat-empty">No other crews share your picks yet.</p>` : `<p class="plat-empty">Add picks first to find crews like yours.</p>`)
    : crewOverlaps.map(g => {
        const pct = myPickIds.size > 0 ? Math.round((g.overlap / myPickIds.size) * 100) : 0;
        return `<div class="plat-crew-row">
          <div class="plat-crew-dot" style="background:${g.color}">${escapeHtml((g.name[0] || '?').toUpperCase())}</div>
          <div class="plat-crew-info">
            <span class="plat-crew-name">${escapeHtml(g.name)}</span>
            <span class="plat-crew-stats">${g.overlap} shared · ${g.total} total picks</span>
          </div>
          <div class="plat-overlap-bar-wrap"><div class="plat-overlap-bar" style="width:${pct}%"></div></div>
        </div>`;
      }).join('');

  const meetsHTML = scheduledMeets.length === 0
    ? `<p class="plat-empty">No crews have set a meet time yet.</p>`
    : scheduledMeets.map(g => {
        const loc = g.meeting_stage ? locationLabel(g.meeting_stage) : '';
        const time = g.meeting_time || '';
        const rsvpd = getMeetRsvp(g.id);
        const isOwn = myGroupIds.has(g.id);
        return `<div class="plat-meet-row">
          <div class="plat-crew-dot" style="background:${g.color}">${escapeHtml((g.name[0]||'?').toUpperCase())}</div>
          <div class="plat-crew-info">
            <span class="plat-crew-name">${escapeHtml(g.name)}</span>
            <span class="plat-crew-stats">${loc ? `📍 ${escapeHtml(loc)}` : ''}${loc && time ? ' · ' : ''}${time ? escapeHtml(time) : ''}</span>
          </div>
          ${!isOwn ? `<button class="plat-rsvp-btn ${rsvpd ? 'rsvpd' : ''}" data-action="toggle-meet-rsvp" data-id="${g.id}">
            ${rsvpd ? '✓ In' : "I'll try"}
          </button>` : `<span class="plat-own-badge">YOUR CREW</span>`}
        </div>`;
      }).join('');

  panel.innerHTML = `
    <div class="plat-kpi-row">
      <div class="plat-kpi"><span class="plat-kpi-num">${groups.length}</span><span class="plat-kpi-label">Crews</span></div>
      <div class="plat-kpi"><span class="plat-kpi-num">${picks.length}</span><span class="plat-kpi-label">Total Picks</span></div>
      <div class="plat-kpi"><span class="plat-kpi-num">${myPickIds.size}</span><span class="plat-kpi-label">My Picks</span></div>
    </div>
    ${scheduledMeets.length > 0 ? `<div class="plat-section-head">📍 Scheduled Meets (${scheduledMeets.length})</div>
    <div class="plat-crew-list">${meetsHTML}</div>` : ''}
    <div class="plat-section-head">🔥 Hot Sets Across All Crews</div>
    <div class="plat-set-list">${hotHTML || '<p class="plat-empty">No picks on the platform yet.</p>'}</div>
    <div class="plat-section-head">🤝 Crews With Similar Taste</div>
    <div class="plat-crew-list">${overlapHTML}</div>
  `;
}

// ===== INIT =====
async function initApp() {
  await fetchMyGroups();
  setupRealtime();
  renderStageFilters();
  renderSchedule();
  rerenderAll();
}

function bootstrap() {
  loadLocal();
  state.currentDay = todayDay();
  updateUserChip();
  wireOnboarding();
  wireEvents();

  document.querySelectorAll('#dayToggle .day-btn').forEach(b => {
    const today = todayDay();
    const buttonDay = parseInt(b.dataset.day);
    b.classList.toggle('is-today', buttonDay === today);
    b.classList.toggle('active', buttonDay === state.currentDay);
  });

  setInterval(() => { if (state.currentTab === 'schedule') renderSchedule(); }, 60000);
  // Live planner refresh: 30s tick for up-next countdowns + reminder check
  renderUpNext();
  setInterval(() => { renderUpNext(); checkReminders(); }, 30000);

  if (!state.user || !state.user.name) {
    showOnboard('name');
    renderStageFilters();
    renderSchedule();
  } else {
    initApp();
  }
}

bootstrap();
