// K-Pop Battle Questions Database
// Each question has an answer pool. Each answer has aliases for fuzzy matching.
// Format: { q: "question text", answers: [["primary", "alias1", "alias2", ...], ...] }
// IMPORTANT: This answer key was generated based on knowledge through early 2026.
// You should review and edit before going live. Some recent debuts may be missing
// or inaccurate. Add/remove answers freely — the format is straightforward.

const QUESTIONS = [
  // ========== GROUP MEMBER QUESTIONS ==========
  {
    q: "Name members of BTS",
    answers: [
      ["RM", "Kim Namjoon", "Namjoon", "Rap Monster"],
      ["Jin", "Kim Seokjin", "Seokjin"],
      ["Suga", "Min Yoongi", "Yoongi", "Agust D"],
      ["J-Hope", "Jung Hoseok", "Hoseok", "JHope", "Hobi"],
      ["Jimin", "Park Jimin"],
      ["V", "Kim Taehyung", "Taehyung", "Tae"],
      ["Jungkook", "Jeon Jungkook", "JK", "Kookie"]
    ]
  },
  {
    q: "Name members of BLACKPINK",
    answers: [
      ["Jisoo", "Kim Jisoo"],
      ["Jennie", "Kim Jennie"],
      ["Rosé", "Park Chaeyoung", "Chaeyoung", "Rose"],
      ["Lisa", "Lalisa Manoban", "Lalisa"]
    ]
  },
  {
    q: "Name members of TWICE",
    answers: [
      ["Nayeon", "Im Nayeon"],
      ["Jeongyeon", "Yoo Jeongyeon"],
      ["Momo", "Hirai Momo"],
      ["Sana", "Minatozaki Sana"],
      ["Jihyo", "Park Jihyo"],
      ["Mina", "Myoui Mina"],
      ["Dahyun", "Kim Dahyun"],
      ["Chaeyoung", "Son Chaeyoung"],
      ["Tzuyu", "Chou Tzuyu"]
    ]
  },
  {
    q: "Name members of NewJeans",
    answers: [
      ["Minji", "Kim Minji"],
      ["Hanni", "Hanni Pham"],
      ["Danielle", "Danielle Marsh"],
      ["Haerin", "Kang Haerin"],
      ["Hyein", "Lee Hyein"]
    ]
  },
  {
    q: "Name members of LE SSERAFIM",
    answers: [
      ["Sakura", "Miyawaki Sakura"],
      ["Chaewon", "Kim Chaewon"],
      ["Yunjin", "Huh Yunjin", "Jenny Huh"],
      ["Kazuha", "Nakamura Kazuha"],
      ["Eunchae", "Hong Eunchae"]
    ]
  },
  {
    q: "Name members of IVE",
    answers: [
      ["Yujin", "An Yujin"],
      ["Gaeul", "Kim Gaeul"],
      ["Rei", "Naoi Rei"],
      ["Wonyoung", "Jang Wonyoung"],
      ["Liz", "Kim Jiwon"],
      ["Leeseo", "Lee Hyunseo"]
    ]
  },
  {
    q: "Name members of aespa",
    answers: [
      ["Karina", "Yoo Jimin"],
      ["Giselle", "Aeri Uchinaga"],
      ["Winter", "Kim Minjeong", "Minjeong"],
      ["Ningning", "Ning Yizhuo"]
    ]
  },
  {
    q: "Name members of (G)I-DLE",
    answers: [
      ["Miyeon", "Cho Miyeon"],
      ["Minnie", "Nicha Yontararak"],
      ["Soyeon", "Jeon Soyeon"],
      ["Yuqi", "Song Yuqi"],
      ["Shuhua", "Yeh Shuhua"]
    ]
  },
  {
    q: "Name members of Stray Kids",
    answers: [
      ["Bang Chan", "Chan", "Christopher Bang"],
      ["Lee Know", "Lee Minho", "Minho"],
      ["Changbin", "Seo Changbin"],
      ["Hyunjin", "Hwang Hyunjin"],
      ["Han", "Han Jisung", "Jisung"],
      ["Felix", "Felix Lee", "Lee Felix"],
      ["Seungmin", "Kim Seungmin"],
      ["I.N", "Yang Jeongin", "IN", "Jeongin"]
    ]
  },
  {
    q: "Name members of SEVENTEEN",
    answers: [
      ["S.Coups", "Choi Seungcheol", "Seungcheol", "SCoups"],
      ["Jeonghan", "Yoon Jeonghan"],
      ["Joshua", "Hong Jisoo"],
      ["Jun", "Wen Junhui", "Junhui"],
      ["Hoshi", "Kwon Soonyoung", "Soonyoung"],
      ["Wonwoo", "Jeon Wonwoo"],
      ["Woozi", "Lee Jihoon", "Jihoon"],
      ["DK", "Lee Seokmin", "Seokmin", "Dokyeom"],
      ["Mingyu", "Kim Mingyu"],
      ["The8", "Xu Minghao", "Minghao"],
      ["Seungkwan", "Boo Seungkwan"],
      ["Vernon", "Hansol Vernon Chwe", "Hansol"],
      ["Dino", "Lee Chan", "Chan"]
    ]
  },
  {
    q: "Name members of EXO",
    answers: [
      ["Xiumin", "Kim Minseok", "Minseok"],
      ["Suho", "Kim Junmyeon", "Junmyeon"],
      ["Lay", "Zhang Yixing", "Yixing"],
      ["Baekhyun", "Byun Baekhyun"],
      ["Chen", "Kim Jongdae", "Jongdae"],
      ["Chanyeol", "Park Chanyeol"],
      ["D.O.", "Do Kyungsoo", "Kyungsoo", "DO"],
      ["Kai", "Kim Jongin", "Jongin"],
      ["Sehun", "Oh Sehun"]
    ]
  },
  {
    q: "Name members of Red Velvet",
    answers: [
      ["Irene", "Bae Joohyun", "Joohyun"],
      ["Seulgi", "Kang Seulgi"],
      ["Wendy", "Son Seungwan", "Seungwan"],
      ["Joy", "Park Sooyoung"],
      ["Yeri", "Kim Yerim", "Yerim"]
    ]
  },
  {
    q: "Name members of MAMAMOO",
    answers: [
      ["Solar", "Kim Yongsun", "Yongsun"],
      ["Moonbyul", "Moon Byulyi", "Byulyi"],
      ["Wheein", "Jung Wheein"],
      ["Hwasa", "Ahn Hyejin", "Hyejin"]
    ]
  },
  {
    q: "Name members of ITZY",
    answers: [
      ["Yeji", "Hwang Yeji"],
      ["Lia", "Choi Jisu", "Jisu"],
      ["Ryujin", "Shin Ryujin"],
      ["Chaeryeong", "Lee Chaeryeong"],
      ["Yuna", "Shin Yuna"]
    ]
  },
  {
    q: "Name members of ATEEZ",
    answers: [
      ["Hongjoong", "Kim Hongjoong"],
      ["Seonghwa", "Park Seonghwa"],
      ["Yunho", "Jeong Yunho"],
      ["Yeosang", "Kang Yeosang"],
      ["San", "Choi San"],
      ["Mingi", "Song Mingi"],
      ["Wooyoung", "Jung Wooyoung"],
      ["Jongho", "Choi Jongho"]
    ]
  },
  {
    q: "Name members of TXT (Tomorrow X Together)",
    answers: [
      ["Soobin", "Choi Soobin"],
      ["Yeonjun", "Choi Yeonjun"],
      ["Beomgyu", "Choi Beomgyu"],
      ["Taehyun", "Kang Taehyun"],
      ["Hueningkai", "Huening Kai", "Kai Kamal Huening"]
    ]
  },
  {
    q: "Name members of ENHYPEN",
    answers: [
      ["Heeseung", "Lee Heeseung"],
      ["Jay", "Park Jongseong", "Jongseong"],
      ["Jake", "Sim Jaeyun", "Jaeyun"],
      ["Sunghoon", "Park Sunghoon"],
      ["Sunoo", "Kim Sunoo"],
      ["Jungwon", "Yang Jungwon"],
      ["Ni-ki", "Nishimura Riki", "Niki", "Riki"]
    ]
  },
  {
    q: "Name members of NMIXX",
    answers: [
      ["Lily", "Lily Morrow"],
      ["Haewon", "Kim Haewon"],
      ["Sullyoon", "Seol Yoonah"],
      ["Jinni", "Park Jinni"],
      ["Bae", "Bae Jinsol", "Jinsol"],
      ["Jiwoo", "Kim Jiwoo"],
      ["Kyujin", "Jin Kyujin"]
    ]
  },
  {
    q: "Name members of fromis_9",
    answers: [
      ["Saerom", "Lee Saerom"],
      ["Hayoung", "Song Hayoung"],
      ["Jiwon", "Lee Jiwon"],
      ["Jisun", "Roh Jisun"],
      ["Seoyeon", "Park Jiwon"],
      ["Chaeyoung", "Lee Chaeyoung"],
      ["Nagyung", "Lee Nagyung"],
      ["Jiheon", "Baek Jiheon"]
    ]
  },
  {
    q: "Name members of NCT 127",
    answers: [
      ["Taeyong", "Lee Taeyong"],
      ["Taeil", "Moon Taeil"],
      ["Johnny", "Seo Youngho"],
      ["Yuta", "Nakamoto Yuta"],
      ["Doyoung", "Kim Dongyoung"],
      ["Jaehyun", "Jung Jaehyun"],
      ["Jungwoo", "Kim Jungwoo"],
      ["Mark", "Mark Lee"],
      ["Haechan", "Lee Donghyuck", "Donghyuck"]
    ]
  },

  // ========== NATIONALITY / ORIGIN ==========
  {
    q: "Name K-pop idols who are Japanese",
    answers: [
      ["Sana", "Minatozaki Sana"],
      ["Mina", "Myoui Mina"],
      ["Momo", "Hirai Momo"],
      ["Sakura", "Miyawaki Sakura"],
      ["Kazuha", "Nakamura Kazuha"],
      ["Rei", "Naoi Rei"],
      ["Yuta", "Nakamoto Yuta"],
      ["Ni-ki", "Nishimura Riki", "Niki"],
      ["Shotaro", "Osaki Shotaro"],
      ["Yuna", "Mashiro Yuna"],
      ["Iroha"],
      ["Moka"],
      ["Karin"],
      ["Riko"]
    ]
  },
  {
    q: "Name K-pop idols who are Chinese",
    answers: [
      ["Lay", "Zhang Yixing", "Yixing"],
      ["Yuqi", "Song Yuqi"],
      ["The8", "Xu Minghao", "Minghao"],
      ["Jun", "Wen Junhui", "Junhui"],
      ["WinWin", "Dong Sicheng", "Sicheng"],
      ["Renjun", "Huang Renjun"],
      ["Chenle", "Zhong Chenle"],
      ["Hendery", "Wong Kunhang"],
      ["Xiaojun", "Xiao Dejun"],
      ["YangYang", "Liu Yangyang"]
    ]
  },
  {
    q: "Name K-pop idols who are Thai",
    answers: [
      ["Lisa", "Lalisa Manoban"],
      ["Bambam"],
      ["Nichkhun"],
      ["Sorn", "Chonnasorn Sajakul"],
      ["Ten", "Chittaphon Leechaiyapornkul"],
      ["Minnie", "Nicha Yontararak"],
      ["Natty"]
    ]
  },
  {
    q: "Name K-pop idols who are American",
    answers: [
      ["Vernon", "Hansol Vernon Chwe"],
      ["Mark", "Mark Tuan"],
      ["Jessica", "Jessica Jung"],
      ["Krystal", "Krystal Jung"],
      ["Tiffany", "Tiffany Young"],
      ["Eric", "Eric Nam"],
      ["Amber", "Amber Liu"],
      ["Jeno"],
      ["Johnny", "Seo Youngho"]
    ]
  },
  {
    q: "Name K-pop idols who are Australian",
    answers: [
      ["Felix", "Felix Lee"],
      ["Bang Chan", "Chan"],
      ["Rosé", "Park Chaeyoung", "Rose"],
      ["Hanni", "Hanni Pham"],
      ["Danielle", "Danielle Marsh"],
      ["Lily", "Lily Morrow"]
    ]
  },
  {
    q: "Name K-pop idols who are Taiwanese",
    answers: [
      ["Tzuyu", "Chou Tzuyu"],
      ["Shuhua", "Yeh Shuhua"]
    ]
  },

  // ========== SOLO ARTISTS ==========
  {
    q: "Name K-pop female soloists",
    answers: [
      ["IU", "Lee Jieun"],
      ["Taeyeon", "Kim Taeyeon"],
      ["Sunmi", "Lee Sunmi"],
      ["Hyuna", "Kim Hyuna"],
      ["Chungha", "Kim Chungha"],
      ["Jessi"],
      ["BoA", "Kwon Boa"],
      ["Lee Hi"],
      ["Hwasa", "Ahn Hyejin"],
      ["Solar", "Kim Yongsun"],
      ["Jihyo", "Park Jihyo"],
      ["Yeji", "Hwang Yeji"],
      ["Whee In", "Wheein"],
      ["Ailee"],
      ["Jennie", "Kim Jennie"],
      ["Jisoo", "Kim Jisoo"],
      ["Rosé", "Rose"],
      ["Lisa"]
    ]
  },
  {
    q: "Name K-pop male soloists",
    answers: [
      ["Rain", "Bi Rain", "Jung Jihoon"],
      ["Taeyang", "Dong Youngbae"],
      ["G-Dragon", "Kwon Jiyong", "GD"],
      ["Zico", "Woo Jiho"],
      ["Crush", "Shin Hyoseob"],
      ["Dean", "Kwon Hyuk"],
      ["Eric Nam"],
      ["Jay Park"],
      ["Henry", "Henry Lau"],
      ["Suga", "Agust D"],
      ["RM", "Kim Namjoon"],
      ["Jin", "Kim Seokjin"],
      ["Jungkook"],
      ["V", "Kim Taehyung"],
      ["J-Hope", "JHope"],
      ["Jimin"],
      ["Baekhyun", "Byun Baekhyun"],
      ["Kai", "Kim Jongin"]
    ]
  },
  {
    q: "Name former BTS soloists with solo albums",
    answers: [
      ["RM", "Kim Namjoon", "Namjoon"],
      ["Jin", "Kim Seokjin"],
      ["Suga", "Agust D", "Min Yoongi"],
      ["J-Hope", "JHope", "Jung Hoseok"],
      ["Jimin", "Park Jimin"],
      ["V", "Kim Taehyung"],
      ["Jungkook", "Jeon Jungkook"]
    ]
  },

  // ========== COMPANY / AGENCY ==========
  {
    q: "Name K-pop groups under HYBE (or its labels)",
    answers: [
      ["BTS"],
      ["TXT", "Tomorrow X Together"],
      ["ENHYPEN"],
      ["LE SSERAFIM"],
      ["NewJeans"],
      ["SEVENTEEN"],
      ["fromis_9", "fromis 9", "fromis"],
      ["ZEROBASEONE", "ZB1"],
      ["ILLIT"],
      ["KATSEYE"],
      ["BOYNEXTDOOR"],
      ["&TEAM", "and TEAM"]
    ]
  },
  {
    q: "Name K-pop groups under SM Entertainment",
    answers: [
      ["NCT"],
      ["NCT 127"],
      ["NCT Dream"],
      ["WayV"],
      ["NCT Wish"],
      ["aespa"],
      ["Red Velvet"],
      ["EXO"],
      ["Super Junior"],
      ["Girls Generation", "SNSD"],
      ["SHINee"],
      ["TVXQ", "DBSK"],
      ["RIIZE"],
      ["Hearts2Hearts"]
    ]
  },
  {
    q: "Name K-pop groups under JYP Entertainment",
    answers: [
      ["TWICE"],
      ["Stray Kids"],
      ["ITZY"],
      ["NMIXX"],
      ["DAY6"],
      ["GOT7"],
      ["2PM"],
      ["NiziU"],
      ["NEXZ"]
    ]
  },
  {
    q: "Name K-pop groups under YG Entertainment",
    answers: [
      ["BLACKPINK"],
      ["BIGBANG"],
      ["TREASURE"],
      ["WINNER"],
      ["iKON"],
      ["BABYMONSTER"],
      ["MEOVV"],
      ["2NE1"]
    ]
  },

  // ========== POSITIONS / SPECIFIC ==========
  {
    q: "Name K-pop group leaders",
    answers: [
      ["RM", "Kim Namjoon"],
      ["Jisoo", "Kim Jisoo"],
      ["Jihyo", "Park Jihyo"],
      ["Bang Chan", "Chan"],
      ["S.Coups", "Choi Seungcheol", "SCoups"],
      ["Suho", "Kim Junmyeon"],
      ["Karina", "Yoo Jimin"],
      ["Soyeon", "Jeon Soyeon"],
      ["Yeji", "Hwang Yeji"],
      ["Hongjoong", "Kim Hongjoong"],
      ["Soobin", "Choi Soobin"],
      ["Jungwon", "Yang Jungwon"],
      ["Irene", "Bae Joohyun"],
      ["Solar", "Kim Yongsun"],
      ["Yujin", "An Yujin"],
      ["Chaewon", "Kim Chaewon"],
      ["Minji", "Kim Minji"],
      ["Taeyong", "Lee Taeyong"]
    ]
  },
  {
    q: "Name K-pop maknaes (youngest members)",
    answers: [
      ["Jungkook"],
      ["Lisa"],
      ["Tzuyu"],
      ["Yuna", "Shin Yuna"],
      ["I.N", "Yang Jeongin", "IN"],
      ["Dino", "Lee Chan"],
      ["Sehun", "Oh Sehun"],
      ["Ningning", "Ning Yizhuo"],
      ["Shuhua", "Yeh Shuhua"],
      ["Hyein", "Lee Hyein"],
      ["Eunchae", "Hong Eunchae"],
      ["Leeseo", "Lee Hyunseo"],
      ["Ni-ki", "Niki"],
      ["Jongho", "Choi Jongho"],
      ["Hueningkai"],
      ["Yeri", "Kim Yerim"],
      ["Jiheon", "Baek Jiheon"]
    ]
  },

  // ========== SONGS ==========
  {
    q: "Name BTS songs",
    answers: [
      ["Dynamite"],
      ["Butter"],
      ["Boy With Luv"],
      ["DNA"],
      ["Fake Love"],
      ["Idol"],
      ["Mic Drop"],
      ["Spring Day"],
      ["Blood Sweat and Tears", "Blood Sweat & Tears"],
      ["Permission to Dance"],
      ["Life Goes On"],
      ["Black Swan"],
      ["ON"],
      ["Yet to Come"],
      ["Save Me"],
      ["Fire"],
      ["Run"],
      ["I Need U"],
      ["Not Today"],
      ["Boy in Luv"],
      ["No More Dream"],
      ["Dope"]
    ]
  },
  {
    q: "Name BLACKPINK songs",
    answers: [
      ["Ddu-Du Ddu-Du", "DDU-DU DDU-DU"],
      ["How You Like That"],
      ["Kill This Love"],
      ["Boombayah"],
      ["Whistle"],
      ["Playing with Fire"],
      ["As If Its Your Last", "As If It's Your Last"],
      ["Pink Venom"],
      ["Shut Down"],
      ["Lovesick Girls"],
      ["Ice Cream"],
      ["Pretty Savage"],
      ["Jump"]
    ]
  },
  {
    q: "Name TWICE songs",
    answers: [
      ["Cheer Up"],
      ["TT"],
      ["Likey"],
      ["Heart Shaker"],
      ["What is Love"],
      ["Dance the Night Away"],
      ["Yes or Yes"],
      ["Fancy"],
      ["Feel Special"],
      ["More and More"],
      ["I Cant Stop Me", "I Can't Stop Me"],
      ["Alcohol-Free", "Alcohol Free"],
      ["The Feels"],
      ["Scientist"],
      ["Talk that Talk"],
      ["Set Me Free"],
      ["One Spark"],
      ["Knock Knock"],
      ["Signal"],
      ["Likey"]
    ]
  },
  {
    q: "Name NewJeans songs",
    answers: [
      ["Attention"],
      ["Hype Boy"],
      ["Cookie"],
      ["Ditto"],
      ["OMG"],
      ["Super Shy"],
      ["ETA"],
      ["Cool With You"],
      ["Get Up"],
      ["New Jeans"],
      ["How Sweet"],
      ["Bubble Gum"],
      ["Supernatural"]
    ]
  },
  {
    q: "Name aespa songs",
    answers: [
      ["Black Mamba"],
      ["Next Level"],
      ["Savage"],
      ["Girls"],
      ["Spicy"],
      ["Drama"],
      ["Supernova"],
      ["Armageddon"],
      ["Whiplash"],
      ["Better Things"],
      ["Dreams Come True"]
    ]
  },
  {
    q: "Name LE SSERAFIM songs",
    answers: [
      ["Fearless"],
      ["Antifragile"],
      ["Unforgiven"],
      ["Eve Psyche and the Bluebeards Wife", "Eve Psyche & the Bluebeards Wife"],
      ["Perfect Night"],
      ["Easy"],
      ["Smart"],
      ["Crazy"],
      ["Chasing Lightning"]
    ]
  },
  {
    q: "Name IVE songs",
    answers: [
      ["Eleven"],
      ["Love Dive"],
      ["After Like"],
      ["I Am"],
      ["Kitsch"],
      ["Baddie"],
      ["Heya"],
      ["Accendio"],
      ["Rebel Heart"],
      ["Either Way"]
    ]
  },
  {
    q: "Name Stray Kids songs",
    answers: [
      ["Gods Menu", "God's Menu"],
      ["Back Door"],
      ["Thunderous"],
      ["Maniac"],
      ["Case 143"],
      ["S-Class", "S Class"],
      ["Lalalala"],
      ["Megaverse"],
      ["Chk Chk Boom"],
      ["Walkin On Water"],
      ["Top"],
      ["Easy"],
      ["Miroh"],
      ["Hellevator"],
      ["My Pace"]
    ]
  },
  {
    q: "Name SEVENTEEN songs",
    answers: [
      ["Adore U"],
      ["Mansae"],
      ["Pretty U"],
      ["Very Nice"],
      ["Boom Boom"],
      ["Don't Wanna Cry", "Dont Wanna Cry"],
      ["Clap"],
      ["Home"],
      ["Hit"],
      ["Fear"],
      ["Left & Right", "Left and Right"],
      ["Hot"],
      ["Rock with you"],
      ["God of Music"],
      ["Maestro"],
      ["Love Letter"],
      ["Super"],
      ["F*ck My Life", "FML"]
    ]
  },
  {
    q: "Name (G)I-DLE songs",
    answers: [
      ["Latata"],
      ["Hann"],
      ["Senorita"],
      ["Uh-Oh", "Uh Oh"],
      ["Lion"],
      ["Oh My God"],
      ["Dumdi Dumdi"],
      ["Hwaa"],
      ["Tomboy"],
      ["Nxde"],
      ["Queencard"],
      ["Super Lady"],
      ["Klaxon"],
      ["Fate"]
    ]
  },
  {
    q: "Name ITZY songs",
    answers: [
      ["Dalla Dalla"],
      ["Icy"],
      ["Wannabe"],
      ["Not Shy"],
      ["Mafia in the Morning"],
      ["Loco"],
      ["Sneakers"],
      ["Cheshire"],
      ["Cake"],
      ["Born to Be"],
      ["Untouchable"],
      ["Algorhythm"],
      ["Gold"]
    ]
  },
  {
    q: "Name BIGBANG songs",
    answers: [
      ["Fantastic Baby"],
      ["Bang Bang Bang"],
      ["Lies"],
      ["Last Farewell"],
      ["Haru Haru"],
      ["Loser"],
      ["Bae Bae"],
      ["Sober"],
      ["If You"],
      ["Flower Road"],
      ["Still Life"]
    ]
  },
  {
    q: "Name EXO songs",
    answers: [
      ["Growl"],
      ["Wolf"],
      ["Call Me Baby"],
      ["Love Shot"],
      ["Monster"],
      ["Lucky One"],
      ["Ko Ko Bop"],
      ["Power"],
      ["Tempo"],
      ["Obsession"],
      ["Don't Mess Up My Tempo"],
      ["Overdose"],
      ["Universe"],
      ["Lotto"]
    ]
  },
  {
    q: "Name songs by IU",
    answers: [
      ["Good Day"],
      ["Eight"],
      ["Through the Night"],
      ["Blueming"],
      ["Lilac"],
      ["Celebrity"],
      ["Love Poem"],
      ["Bbibbi"],
      ["Palette"],
      ["You and I"],
      ["Twenty-three"],
      ["Strawberry Moon"],
      ["Holssi"]
    ]
  },

  // ========== GENERATIONS ==========
  {
    q: "Name 1st generation K-pop groups",
    answers: [
      ["H.O.T", "HOT"],
      ["Sechs Kies", "SechsKies"],
      ["S.E.S", "SES"],
      ["Fin.K.L", "Finkl", "FinKL"],
      ["Shinhwa"],
      ["NRG"],
      ["Click-B"],
      ["g.o.d", "god"],
      ["Baby Vox"],
      ["Diva"]
    ]
  },
  {
    q: "Name 2nd generation K-pop groups",
    answers: [
      ["TVXQ", "DBSK"],
      ["Super Junior", "SuJu"],
      ["Big Bang", "BIGBANG"],
      ["SHINee"],
      ["2PM"],
      ["2AM"],
      ["Wonder Girls"],
      ["Girls Generation", "SNSD"],
      ["KARA"],
      ["T-ara", "Tara"],
      ["After School"],
      ["4Minute"],
      ["miss A"],
      ["Sistar"],
      ["Infinite"],
      ["FT Island", "FTIsland"],
      ["CNBLUE"],
      ["Beast", "Highlight"],
      ["Brown Eyed Girls"],
      ["f(x)", "fx"],
      ["2NE1"]
    ]
  },
  {
    q: "Name 3rd generation K-pop groups",
    answers: [
      ["BTS"],
      ["EXO"],
      ["Seventeen"],
      ["GOT7"],
      ["Monsta X"],
      ["NCT"],
      ["NCT 127"],
      ["NCT Dream"],
      ["WayV"],
      ["Stray Kids"],
      ["TWICE"],
      ["Red Velvet"],
      ["Mamamoo"],
      ["Gfriend"],
      ["BLACKPINK"],
      ["Oh My Girl"],
      ["WJSN", "Cosmic Girls"],
      ["Lovelyz"],
      ["Apink"],
      ["Astro"],
      ["The Boyz"],
      ["ATEEZ"],
      ["Pentagon"],
      ["Loona"]
    ]
  },
  {
    q: "Name 4th generation K-pop groups",
    answers: [
      ["aespa"],
      ["ITZY"],
      ["IVE"],
      ["LE SSERAFIM"],
      ["NewJeans"],
      ["NMIXX"],
      ["(G)I-DLE", "GIDLE", "G I-DLE"],
      ["TXT", "Tomorrow X Together"],
      ["ENHYPEN"],
      ["TREASURE"],
      ["Stayc"],
      ["Kep1er", "Kepler"],
      ["Billlie"],
      ["Kiss of Life"],
      ["Purple Kiss"],
      ["Fifty Fifty"],
      ["VIVIZ"],
      ["Lightsum"]
    ]
  },

  // ========== SHOWS / DEBUT FROM ==========
  {
    q: "Name K-pop idols who came from Produce 101 / Produce 48 / I-LAND etc.",
    answers: [
      ["Wonyoung", "Jang Wonyoung"],
      ["Yujin", "An Yujin"],
      ["Sakura", "Miyawaki Sakura"],
      ["Chaewon", "Kim Chaewon"],
      ["Hyewon", "Kang Hyewon"],
      ["Eunbi", "Kwon Eunbi"],
      ["Yena", "Choi Yena"],
      ["Chaeyeon", "Lee Chaeyeon"],
      ["Nako", "Yabuki Nako"],
      ["Hitomi", "Honda Hitomi"],
      ["Heeseung", "Lee Heeseung"],
      ["Jay", "Park Jongseong"],
      ["Jake", "Sim Jaeyun"],
      ["Sunghoon", "Park Sunghoon"],
      ["Sunoo", "Kim Sunoo"],
      ["Jungwon", "Yang Jungwon"],
      ["Niki", "Ni-ki"],
      ["Daniel", "Kang Daniel"],
      ["Jihoon", "Park Jihoon"],
      ["Minhyun", "Hwang Minhyun"]
    ]
  },

  // ========== AGENCIES (more) ==========
  {
    q: "Name K-pop groups under Starship Entertainment",
    answers: [
      ["Monsta X"],
      ["Cosmic Girls", "WJSN"],
      ["IVE"],
      ["Cravity"]
    ]
  },
  {
    q: "Name K-pop groups under Cube Entertainment",
    answers: [
      ["(G)I-DLE", "GIDLE"],
      ["BTOB"],
      ["Pentagon"],
      ["Lightsum"],
      ["Beast", "Highlight"],
      ["4Minute"]
    ]
  },
  {
    q: "Name K-pop groups under Pledis Entertainment",
    answers: [
      ["SEVENTEEN"],
      ["fromis_9"],
      ["TWS"],
      ["After School"],
      ["NU'EST", "NUEST"]
    ]
  },
  {
    q: "Name K-pop groups under RBW",
    answers: [
      ["Mamamoo"],
      ["Oneus"],
      ["Onewe"],
      ["Purple Kiss"]
    ]
  },

  // ========== UNITS / SUBGROUPS ==========
  {
    q: "Name BTS sub-units or solo album personas",
    answers: [
      ["Agust D"],
      ["Jhope", "J-Hope"],
      ["RM"],
      ["Jin"],
      ["Jimin"],
      ["V"],
      ["Jungkook"]
    ]
  },
  {
    q: "Name NCT sub-units",
    answers: [
      ["NCT 127"],
      ["NCT Dream"],
      ["WayV"],
      ["NCT U"],
      ["NCT Wish"]
    ]
  },
  {
    q: "Name SEVENTEEN units (Vocal/Performance/Hiphop)",
    answers: [
      ["Vocal Team"],
      ["Performance Team"],
      ["Hip-hop Team", "Hiphop Team", "Hip Hop Team"],
      ["BSS", "Booseoksoon"]
    ]
  },

  // ========== DISBANDED / OLDER ==========
  {
    q: "Name Girls' Generation (SNSD) members",
    answers: [
      ["Taeyeon", "Kim Taeyeon"],
      ["Sunny", "Lee Soonkyu"],
      ["Tiffany", "Tiffany Young"],
      ["Hyoyeon", "Kim Hyoyeon"],
      ["Yuri", "Kwon Yuri"],
      ["Sooyoung", "Choi Sooyoung"],
      ["Yoona", "Im Yoona"],
      ["Seohyun", "Seo Joohyun"],
      ["Jessica", "Jessica Jung"]
    ]
  },
  {
    q: "Name 2NE1 members",
    answers: [
      ["CL", "Lee Chaerin"],
      ["Park Bom", "Bom"],
      ["Dara", "Sandara Park"],
      ["Minzy", "Gong Minzy"]
    ]
  },
  {
    q: "Name BIGBANG members",
    answers: [
      ["G-Dragon", "Kwon Jiyong", "GD"],
      ["Taeyang", "Dong Youngbae"],
      ["T.O.P", "Choi Seunghyun", "TOP"],
      ["Daesung", "Kang Daesung"],
      ["Seungri", "Lee Seunghyun"]
    ]
  },
  {
    q: "Name SHINee members",
    answers: [
      ["Onew", "Lee Jinki"],
      ["Key", "Kim Kibum"],
      ["Minho", "Choi Minho"],
      ["Taemin", "Lee Taemin"],
      ["Jonghyun", "Kim Jonghyun"]
    ]
  },
  {
    q: "Name f(x) members",
    answers: [
      ["Victoria", "Song Qian"],
      ["Amber", "Amber Liu"],
      ["Luna", "Park Sunyoung"],
      ["Krystal", "Krystal Jung"],
      ["Sulli", "Choi Jinri"]
    ]
  },
  {
    q: "Name Wonder Girls members",
    answers: [
      ["Sunye", "Min Sunye"],
      ["Yeeun", "Park Yeeun", "Ha:tfelt"],
      ["Sunmi", "Lee Sunmi"],
      ["Yubin", "Kim Yubin"],
      ["Hyerim", "Lim Hyerim", "Lim"],
      ["Sohee", "Ahn Sohee"]
    ]
  },
  {
    q: "Name KARA members",
    answers: [
      ["Park Gyuri", "Gyuri"],
      ["Han Seungyeon", "Seungyeon"],
      ["Nicole", "Nicole Jung"],
      ["Goo Hara", "Hara"],
      ["Kang Jiyoung", "Jiyoung"],
      ["Heo Youngji", "Youngji"]
    ]
  },
  {
    q: "Name 2PM members",
    answers: [
      ["Jun.K", "Junho Kim"],
      ["Nichkhun"],
      ["Taecyeon", "Ok Taecyeon"],
      ["Wooyoung", "Jang Wooyoung"],
      ["Junho", "Lee Junho"],
      ["Chansung", "Hwang Chansung"]
    ]
  },
  {
    q: "Name TVXQ / DBSK members (original lineup)",
    answers: [
      ["U-Know Yunho", "Yunho", "Jung Yunho"],
      ["Max", "Changmin", "Shim Changmin"],
      ["Hero", "Jaejoong", "Kim Jaejoong"],
      ["Micky", "Yoochun", "Park Yoochun"],
      ["Xiah", "Junsu", "Kim Junsu"]
    ]
  },

  // ========== MORE GROUPS ==========
  {
    q: "Name members of GOT7",
    answers: [
      ["JB", "Jay B", "Im Jaebeom"],
      ["Mark", "Mark Tuan"],
      ["Jackson", "Jackson Wang"],
      ["Jinyoung", "Park Jinyoung"],
      ["Youngjae", "Choi Youngjae"],
      ["Bambam"],
      ["Yugyeom", "Kim Yugyeom"]
    ]
  },
  {
    q: "Name members of Monsta X",
    answers: [
      ["Shownu", "Son Hyunwoo"],
      ["Minhyuk", "Lee Minhyuk"],
      ["Kihyun", "Yoo Kihyun"],
      ["Hyungwon", "Chae Hyungwon"],
      ["Joohoney", "Lee Jooheon", "Jooheon"],
      ["I.M", "Im Changkyun", "Changkyun"],
      ["Wonho", "Lee Hoseok"]
    ]
  },
  {
    q: "Name members of The Boyz",
    answers: [
      ["Sangyeon", "Lee Sangyeon"],
      ["Jacob", "Jacob Bae"],
      ["Younghoon", "Kim Younghoon"],
      ["Hyunjae", "Lee Jaehyun"],
      ["Juyeon", "Lee Juyeon"],
      ["Kevin", "Kevin Moon"],
      ["New", "Choi Chanhee"],
      ["Q", "Ji Changmin"],
      ["Haknyeon", "Ju Haknyeon"],
      ["Sunwoo", "Kim Sunwoo"],
      ["Eric", "Eric Sohn"]
    ]
  },
  {
    q: "Name members of NCT Dream",
    answers: [
      ["Mark", "Mark Lee"],
      ["Renjun", "Huang Renjun"],
      ["Jeno", "Lee Jeno"],
      ["Haechan", "Lee Donghyuck"],
      ["Jaemin", "Na Jaemin"],
      ["Chenle", "Zhong Chenle"],
      ["Jisung", "Park Jisung"]
    ]
  },
  {
    q: "Name members of Day6",
    answers: [
      ["Sungjin", "Park Sungjin"],
      ["Jae", "Jae Park"],
      ["Young K", "Kang Younghyun"],
      ["Wonpil", "Kim Wonpil"],
      ["Dowoon", "Yoon Dowoon"]
    ]
  },
  {
    q: "Name members of Apink",
    answers: [
      ["Park Chorong", "Chorong"],
      ["Yoon Bomi", "Bomi"],
      ["Jung Eunji", "Eunji"],
      ["Son Naeun", "Naeun"],
      ["Kim Namjoo", "Namjoo"],
      ["Oh Hayoung", "Hayoung"]
    ]
  },
  {
    q: "Name members of Oh My Girl",
    answers: [
      ["Hyojung", "Choi Hyojung"],
      ["Mimi", "Kim Mihyun"],
      ["YooA", "Yoo Shiah"],
      ["Seunghee", "Hyun Seunghee"],
      ["Jiho", "Kim Jiho"],
      ["Binnie", "Bae Yubin"],
      ["Arin", "Choi Yewon"]
    ]
  },
  {
    q: "Name members of Stayc",
    answers: [
      ["Sumin", "Park Sumin"],
      ["Sieun", "Shin Sieun"],
      ["Isa", "Lee Chaeyeong"],
      ["Seeun", "Yoon Seeun"],
      ["Yoon", "Shim Jaeyoon"],
      ["J", "Jeong Jaehee"]
    ]
  },
  {
    q: "Name members of Kiss of Life",
    answers: [
      ["Julie"],
      ["Natty"],
      ["Belle"],
      ["Haneul", "Kim Haneul"]
    ]
  },
  {
    q: "Name members of BABYMONSTER",
    answers: [
      ["Ruka"],
      ["Pharita"],
      ["Asa"],
      ["Ahyeon"],
      ["Rami"],
      ["Rora"],
      ["Chiquita"]
    ]
  },
  {
    q: "Name members of RIIZE",
    answers: [
      ["Shotaro", "Osaki Shotaro"],
      ["Eunseok", "Lee Eunseok"],
      ["Sungchan", "Jung Sungchan"],
      ["Wonbin", "Park Wonbin"],
      ["Seunghan", "Hong Seunghan"],
      ["Sohee", "Sung Sohee"],
      ["Anton", "Anton Lee"]
    ]
  },
  {
    q: "Name members of ZEROBASEONE (ZB1)",
    answers: [
      ["Sung Hanbin", "Hanbin"],
      ["Kim Jiwoong", "Jiwoong"],
      ["Zhang Hao"],
      ["Seok Matthew", "Matthew"],
      ["Kim Taerae", "Taerae"],
      ["Ricky"],
      ["Kim Gyuvin", "Gyuvin"],
      ["Park Gunwook", "Gunwook"],
      ["Han Yujin", "Yujin"]
    ]
  },
  {
    q: "Name members of TREASURE",
    answers: [
      ["Choi Hyunsuk", "Hyunsuk"],
      ["Jihoon", "Park Jihoon"],
      ["Yoshi"],
      ["Junkyu", "Kim Junkyu"],
      ["Jaehyuk", "Yoon Jaehyuk"],
      ["Asahi"],
      ["Yedam"],
      ["Doyoung", "Park Jeongwoo"],
      ["Haruto"],
      ["Jeongwoo", "Park Jeongwoo"]
    ]
  },
  {
    q: "Name members of ILLIT",
    answers: [
      ["Yunah"],
      ["Minju"],
      ["Moka"],
      ["Wonhee"],
      ["Iroha"]
    ]
  },
  {
    q: "Name members of TWS",
    answers: [
      ["Shinyu"],
      ["Dohoon"],
      ["Youngjae"],
      ["Hanjin"],
      ["Jihoon"],
      ["Kyungmin"]
    ]
  },
  {
    q: "Name members of NCT WISH",
    answers: [
      ["Sion"],
      ["Riku"],
      ["Yushi"],
      ["Jaehee"],
      ["Ryo"],
      ["Sakuya"]
    ]
  },
  {
    q: "Name members of KATSEYE",
    answers: [
      ["Lara"],
      ["Sophia"],
      ["Daniela"],
      ["Manon"],
      ["Megan"],
      ["Yoonchae"]
    ]
  },
  {
    q: "Name members of NiziU",
    answers: [
      ["Mako"],
      ["Rio"],
      ["Maya"],
      ["Riku"],
      ["Ayaka"],
      ["Mayuka"],
      ["Rima"],
      ["Miihi"],
      ["Nina"]
    ]
  },
  {
    q: "Name members of NEXZ",
    answers: [
      ["Tomoya"],
      ["Yu"],
      ["Hyuga"],
      ["Sō", "So"],
      ["Yuki"],
      ["Haru"],
      ["Seita"]
    ]
  },
  {
    q: "Name members of BOYNEXTDOOR",
    answers: [
      ["Sungho"],
      ["Riwoo"],
      ["Jaehyun"],
      ["Taesan"],
      ["Leehan"],
      ["Woonhak"]
    ]
  },
  {
    q: "Name members of Cravity",
    answers: [
      ["Serim", "Im Serim"],
      ["Allen", "Allen Ma"],
      ["Jungmo", "Koo Jungmo"],
      ["Woobin", "Ham Woobin"],
      ["Wonjin", "Park Wonjin"],
      ["Minhee", "Kang Minhee"],
      ["Hyeongjun", "Song Hyeongjun"],
      ["Taeyoung", "Seongmin"],
      ["Seongmin", "Ahn Seongmin"]
    ]
  },
  {
    q: "Name members of TripleS or sub-units (any member is fine)",
    answers: [
      ["S1", "Seoyeon"],
      ["Hyerin"],
      ["Jiwoo"],
      ["Chaeyeon"],
      ["Yooyeon"],
      ["Soomin"],
      ["Nakyoung"],
      ["Yubin"],
      ["Kaede"],
      ["Dahyun"],
      ["Kotone"],
      ["Yeonji"],
      ["Nien"],
      ["Sohyun"],
      ["Xinyu"],
      ["Mayu"],
      ["Lynn"],
      ["Joobin"],
      ["Hayeon"],
      ["Shion"],
      ["Chaewon"],
      ["Sullin"],
      ["Seoah"],
      ["Jiyeon"]
    ]
  },

  // ========== INSTRUMENTS / RAPPERS / VOCALISTS ==========
  {
    q: "Name K-pop main rappers",
    answers: [
      ["RM", "Kim Namjoon"],
      ["Suga", "Min Yoongi"],
      ["J-Hope", "JHope"],
      ["Soyeon", "Jeon Soyeon"],
      ["CL", "Lee Chaerin"],
      ["Mino", "Song Mingho"],
      ["Bobby"],
      ["Hanbin", "BI", "Kim Hanbin"],
      ["Zico"],
      ["Hyuna"],
      ["Jessi"],
      ["Lisa"],
      ["Jennie"],
      ["Yoongi"],
      ["Vernon"],
      ["Mark", "Mark Lee"],
      ["Hongjoong"],
      ["Mingi"],
      ["Yeji"],
      ["Ryujin"]
    ]
  },
  {
    q: "Name K-pop main vocalists (well known)",
    answers: [
      ["Taeyeon"],
      ["IU"],
      ["Ailee"],
      ["Wendy"],
      ["Jin"],
      ["Jungkook"],
      ["Baekhyun"],
      ["D.O.", "Kyungsoo"],
      ["Onew"],
      ["Jonghyun"],
      ["Jihyo"],
      ["Nayeon"],
      ["Solar"],
      ["Rosé", "Rose"],
      ["Hwasa"],
      ["Wheein"],
      ["Whee In"],
      ["Eunji", "Jung Eunji"],
      ["Lia"],
      ["Yuju"],
      ["Seohyun"]
    ]
  },
  {
    q: "Name K-pop main dancers",
    answers: [
      ["Lisa"],
      ["Momo"],
      ["Kai"],
      ["Taemin"],
      ["Hoshi"],
      ["The8"],
      ["Hyunjin"],
      ["Felix"],
      ["Eunhyuk"],
      ["Jimin"],
      ["J-Hope"],
      ["Sehun"],
      ["Yoona"],
      ["Hyoyeon"],
      ["Seulgi"],
      ["BoA"],
      ["Yeji"],
      ["Karina"],
      ["Sana"]
    ]
  },

  // ========== AWARDS / SUCCESSES ==========
  {
    q: "Name K-pop groups with a #1 Billboard Hot 100 song",
    answers: [
      ["BTS"],
      ["Jungkook"],
      ["Jimin"],
      ["BLACKPINK"],
      ["Jennie"],
      ["Rosé", "Rose"]
    ]
  },
  {
    q: "Name K-pop groups that have won Daesangs (Grand Prizes)",
    answers: [
      ["BTS"],
      ["BLACKPINK"],
      ["TWICE"],
      ["EXO"],
      ["Seventeen"],
      ["Stray Kids"],
      ["Bigbang", "BIGBANG"],
      ["Girls Generation", "SNSD"],
      ["IU"],
      ["NewJeans"],
      ["Mamamoo"],
      ["Red Velvet"],
      ["aespa"],
      ["IVE"],
      ["Le Sserafim", "LE SSERAFIM"],
      ["NCT"],
      ["NCT 127"],
      ["NCT Dream"],
      ["Tomorrow X Together", "TXT"],
      ["Enhypen", "ENHYPEN"]
    ]
  },

  // ========== MISC ==========
  {
    q: "Name K-pop ships / famous duos",
    answers: [
      ["Vmin"],
      ["Jikook"],
      ["Taekook"],
      ["Namjin"],
      ["Yoonmin"],
      ["Sope"],
      ["Yoonkook"],
      ["Jinkook"],
      ["Saida"],
      ["Mimo"],
      ["Michaeng"],
      ["Jensoo"],
      ["Chaesoo"],
      ["Jenlisa"],
      ["Chaennie"]
    ]
  },
  {
    q: "Name K-pop survival / audition shows",
    answers: [
      ["Produce 101"],
      ["Produce 48"],
      ["Produce X 101"],
      ["I-Land", "ILand"],
      ["I-Land 2", "ILand 2"],
      ["Boys Planet"],
      ["Girls Planet 999"],
      ["R U Next?", "R U Next"],
      ["Sixteen"],
      ["Mix Nine"],
      ["Idol School"],
      ["Universe Ticket"],
      ["My Teenage Girl"],
      ["Miss Back"],
      ["Loud"],
      ["Queendom"],
      ["Road to Kingdom"],
      ["Kingdom"],
      ["Show Me the Money"],
      ["Unpretty Rapstar"],
      ["Nizi Project"]
    ]
  },
  {
    q: "Name K-pop reality shows / variety shows featuring idols",
    answers: [
      ["Run BTS"],
      ["In the Soop"],
      ["Bon Voyage"],
      ["BLACKPINK House"],
      ["TWICE TV"],
      ["TimeToTwice"],
      ["EXO Ladder"],
      ["Knowing Bros"],
      ["Weekly Idol"],
      ["Idol Room"],
      ["Mamamoo Show Time"],
      ["Going Seventeen"],
      ["Stray Kids 2 Kids Room"],
      ["NCT Life"],
      ["Suchwita"]
    ]
  },
  {
    q: "Name K-pop music shows",
    answers: [
      ["Music Bank"],
      ["Show Champion"],
      ["The Show"],
      ["M Countdown"],
      ["Inkigayo"],
      ["Show! Music Core", "Music Core"],
      ["Simply K-Pop"]
    ]
  },
  {
    q: "Name K-pop awards shows",
    answers: [
      ["MAMA Awards", "MAMA"],
      ["Golden Disc Awards", "GDA"],
      ["Seoul Music Awards", "SMA"],
      ["Melon Music Awards", "MMA"],
      ["Asia Artist Awards", "AAA"],
      ["Gaon Chart Music Awards"],
      ["Circle Chart Music Awards"],
      ["Korea Music Awards"],
      ["The Fact Music Awards", "TMA"],
      ["KBS Song Festival"]
    ]
  },
  {
    q: "Name K-pop fandom names",
    answers: [
      ["ARMY"],
      ["BLINK"],
      ["ONCE"],
      ["Bunnies", "Bunny"],
      ["MY", "MY (LE SSERAFIM)"],
      ["DIVE"],
      ["MY (aespa)", "MY"],
      ["NEVERLAND", "Neverland"],
      ["Stay"],
      ["Carat"],
      ["EXO-L", "EXOL"],
      ["VIP"],
      ["Sone", "S♡NE"],
      ["BLACKJACK"],
      ["Reveluv", "ReVeluv"],
      ["Moomoo"],
      ["UAENA"],
      ["Midzy"],
      ["ATINY"],
      ["MOA"],
      ["ENGENE"],
      ["NCTzen", "NCTizen"]
    ]
  },
  {
    q: "Name BTS members born in 1995",
    answers: [
      ["RM", "Kim Namjoon"],
      ["Jimin", "Park Jimin"],
      ["V", "Kim Taehyung"]
    ]
  },
  {
    q: "Name TWICE members born in Japan",
    answers: [
      ["Sana", "Minatozaki Sana"],
      ["Mina", "Myoui Mina"],
      ["Momo", "Hirai Momo"]
    ]
  },
  {
    q: "Name K-pop idols who are also actors",
    answers: [
      ["IU"],
      ["Suzy", "Bae Suzy"],
      ["Yoona"],
      ["Krystal"],
      ["Sulli"],
      ["Seohyun"],
      ["V", "Kim Taehyung"],
      ["Lee Joon"],
      ["Im Siwan", "Siwan"],
      ["D.O.", "Doh Kyungsoo"],
      ["Cha Eunwoo", "Eunwoo"],
      ["Jisoo"],
      ["Rowoon"],
      ["Lee Junho", "Junho"],
      ["Taecyeon"],
      ["Hyeri"],
      ["Sooyoung"],
      ["Minho", "Choi Minho"],
      ["Park Hyungsik", "Hyungsik"],
      ["Seolhyun", "Kim Seolhyun"],
      ["Nayeon"]
    ]
  },
  {
    q: "Name K-pop groups with debut year 2016",
    answers: [
      ["NCT 127"],
      ["NCT Dream"],
      ["Twice"],
      ["Cosmic Girls", "WJSN"],
      ["Black Pink", "BLACKPINK"],
      ["I.O.I", "IOI"],
      ["Gugudan"],
      ["KNK"],
      ["Pentagon"],
      ["Astro"],
      ["Pristin"],
      ["Snuper"]
    ]
  },
  {
    q: "Name K-pop groups with debut year 2018",
    answers: [
      ["Stray Kids"],
      ["IZ*ONE", "IZONE"],
      ["(G)I-DLE", "GIDLE"],
      ["ATEEZ"],
      ["Iz", "IZ"],
      ["The Boyz"],
      ["Loona", "LOONA"],
      ["fromis_9"],
      ["Nature"]
    ]
  },
  {
    q: "Name K-pop groups with debut year 2020",
    answers: [
      ["Treasure"],
      ["aespa"],
      ["Cravity"],
      ["Enhypen"],
      ["Stayc"],
      ["P1Harmony"],
      ["Weeekly"],
      ["Secret Number"]
    ]
  },
  {
    q: "Name K-pop groups with debut year 2022",
    answers: [
      ["Le Sserafim", "LE SSERAFIM"],
      ["NewJeans"],
      ["Ive", "IVE"],
      ["NMIXX"],
      ["Kep1er", "Kepler"],
      ["Tempest"],
      ["Class:y"],
      ["Lapillus"],
      ["Viviz"],
      ["Mimiirose"],
      ["TNX"],
      ["Trendz"],
      ["Xikers"],
      ["NiziU (KR debut)"]
    ]
  },
  {
    q: "Name K-pop groups with debut year 2023",
    answers: [
      ["RIIZE"],
      ["Boynextdoor", "BOYNEXTDOOR"],
      ["TWS"],
      ["NCT Wish"],
      ["Zerobaseone", "ZB1", "ZEROBASEONE"],
      ["Lun8"],
      ["Triples", "TripleS"],
      ["Loossemble"],
      ["Younite"],
      ["Evnne"]
    ]
  },

  // ========== MORE NICHE ==========
  {
    q: "Name famous K-pop variety show hosts who are idols",
    answers: [
      ["Eric Nam"],
      ["Heechul", "Kim Heechul"],
      ["Hyeri"],
      ["Yook Sungjae", "Sungjae"],
      ["Leeteuk", "Park Jungsu"],
      ["Suho"],
      ["P.O", "Pyo Jihoon", "PO"],
      ["Hwasa"],
      ["Hong Eunchae"]
    ]
  },
  {
    q: "Name BTS dance songs (anything choreographed energetically)",
    answers: [
      ["Dynamite"],
      ["Butter"],
      ["Idol"],
      ["DNA"],
      ["Boy with Luv"],
      ["Mic Drop"],
      ["Fire"],
      ["Not Today"],
      ["ON"],
      ["Run"],
      ["Save Me"],
      ["Boy in Luv"],
      ["Dope"]
    ]
  },
  {
    q: "Name groups whose name starts with the letter B",
    answers: [
      ["BTS"],
      ["BLACKPINK"],
      ["BIGBANG"],
      ["BABYMONSTER"],
      ["BTOB"],
      ["BAP", "B.A.P"],
      ["Block B"],
      ["BoyNextDoor"],
      ["BoA"],
      ["Brave Girls"],
      ["Brown Eyed Girls"],
      ["BSS"],
      ["Beast"],
      ["Berry Good"],
      ["Boyfriend"]
    ]
  },
  {
    q: "Name groups whose name starts with the letter S",
    answers: [
      ["Seventeen"],
      ["Stray Kids"],
      ["SHINee"],
      ["Super Junior"],
      ["Sistar"],
      ["S.E.S", "SES"],
      ["Sechskies", "Sechs Kies"],
      ["Stayc"],
      ["Snuper"],
      ["Secret Number"],
      ["Secret"],
      ["Spica"]
    ]
  },
  {
    q: "Name K-pop groups that have disbanded",
    answers: [
      ["I.O.I", "IOI"],
      ["IZ*ONE", "IZONE"],
      ["GFRIEND", "GFriend"],
      ["2NE1"],
      ["Wonder Girls"],
      ["Sistar"],
      ["KARA (original)", "KARA"],
      ["4Minute"],
      ["Miss A"],
      ["F(x)", "f(x)"],
      ["After School"],
      ["Big Bang (full lineup)", "Bigbang"],
      ["Pristin"],
      ["Loona", "LOONA"],
      ["GOT7 (left JYP)", "GOT7"],
      ["AOA"],
      ["Block B"],
      ["B.A.P", "BAP"],
      ["Highlight (original Beast)", "Beast"],
      ["Apink (some left)"],
      ["T-ara", "Tara"],
      ["EXID"]
    ]
  },
  {
    q: "Name members of LOONA",
    answers: [
      ["Heejin", "Jeon Heejin"],
      ["Hyunjin", "Kim Hyunjin"],
      ["Haseul", "Jo Haseul"],
      ["Yeojin", "Im Yeojin"],
      ["Vivi", "Wong Gaheei"],
      ["Kim Lip", "Kim Jungeun"],
      ["Jinsoul", "Jung Jinsoul"],
      ["Choerry", "Choi Yerim"],
      ["Yves", "Ha Sooyoung"],
      ["Chuu", "Kim Jiwoo"],
      ["Go Won", "Park Chaewon"],
      ["Olivia Hye", "Son Hyeju"]
    ]
  },
  {
    q: "Name members of GFriend",
    answers: [
      ["Sowon", "Kim Sojung"],
      ["Yerin", "Jung Yerin"],
      ["Eunha", "Jung Eunbi"],
      ["Yuju", "Choi Yuna"],
      ["SinB", "Hwang Eunbi"],
      ["Umji", "Kim Yewon"]
    ]
  },
  {
    q: "Name members of Super Junior",
    answers: [
      ["Leeteuk", "Park Jungsu"],
      ["Heechul", "Kim Heechul"],
      ["Yesung", "Kim Jongwoon"],
      ["Kangin", "Kim Youngwoon"],
      ["Shindong", "Shin Donghee"],
      ["Sungmin", "Lee Sungmin"],
      ["Eunhyuk", "Lee Hyukjae"],
      ["Donghae", "Lee Donghae"],
      ["Siwon", "Choi Siwon"],
      ["Ryeowook", "Kim Ryeowook"],
      ["Kibum", "Kim Kibum"],
      ["Kyuhyun", "Cho Kyuhyun"],
      ["Henry", "Henry Lau"],
      ["Zhoumi"]
    ]
  },
  {
    q: "Name members of Mamamoo+ (full)",
    answers: [
      ["Solar"],
      ["Moonbyul"],
      ["Wheein"],
      ["Hwasa"]
    ]
  },
  {
    q: "Name K-pop idols who served in the military (mandatory enlistment)",
    answers: [
      ["Jin", "Kim Seokjin"],
      ["J-Hope", "Jhope"],
      ["Jimin"],
      ["RM"],
      ["V", "Kim Taehyung"],
      ["Suga"],
      ["Jungkook"],
      ["Yunho"],
      ["Changmin"],
      ["G-Dragon"],
      ["Taeyang"],
      ["Daesung"],
      ["T.O.P"],
      ["Onew"],
      ["Minho"],
      ["Key"],
      ["Taemin"],
      ["Suho"],
      ["Xiumin"],
      ["Chen"],
      ["D.O.", "DO"],
      ["Baekhyun"],
      ["Chanyeol"],
      ["Sehun"],
      ["Kai"],
      ["Lay"],
      ["Leeteuk"],
      ["Heechul"],
      ["Yesung"],
      ["Donghae"],
      ["Siwon"],
      ["Ryeowook"]
    ]
  },
  {
    q: "Name OST artists (idols famous for K-drama OSTs)",
    answers: [
      ["IU"],
      ["Taeyeon"],
      ["Baekhyun"],
      ["Chen"],
      ["Punch"],
      ["Gummy"],
      ["Davichi"],
      ["Jung Eunji", "Eunji"],
      ["Lyn"],
      ["Heize"],
      ["Wendy"],
      ["Suho"],
      ["D.O.", "DO"],
      ["Doyoung"],
      ["Onew"],
      ["Yesung"],
      ["Joy"],
      ["Hwasa"],
      ["K. Will"]
    ]
  },
  {
    q: "Name K-pop groups featured in Kingdom: Legendary War",
    answers: [
      ["Stray Kids"],
      ["The Boyz"],
      ["ATEEZ"],
      ["iKON"],
      ["BTOB"],
      ["SF9"]
    ]
  },
  {
    q: "Name K-pop groups featured in Queendom 2",
    answers: [
      ["WJSN", "Cosmic Girls"],
      ["LOONA"],
      ["Brave Girls"],
      ["Hyolyn"],
      ["Viviz", "VIVIZ"],
      ["Kep1er", "Kepler"]
    ]
  },
  {
    q: "Name SM Entertainment artists/groups (any)",
    answers: [
      ["BoA"],
      ["TVXQ"],
      ["Super Junior"],
      ["Girls Generation", "SNSD"],
      ["SHINee"],
      ["f(x)"],
      ["EXO"],
      ["Red Velvet"],
      ["NCT"],
      ["NCT 127"],
      ["NCT Dream"],
      ["WayV"],
      ["NCT Wish"],
      ["aespa"],
      ["RIIZE"],
      ["Hearts2Hearts"],
      ["Taemin"],
      ["Taeyeon"],
      ["Tiffany"],
      ["Jessica"]
    ]
  },
  {
    q: "Name LOONA sub-units",
    answers: [
      ["1/3", "LOONA 1/3"],
      ["Odd Eye Circle"],
      ["yyxy", "YYXY"]
    ]
  },
  {
    q: "Name TWICE Japanese songs / Japanese single titles",
    answers: [
      ["One More Time"],
      ["Candy Pop"],
      ["Wake Me Up"],
      ["Be as One"],
      ["Brand New Girl"],
      ["I Want You Back"],
      ["Happy Happy"],
      ["Breakthrough"],
      ["Fanfare"],
      ["Better"],
      ["Kura Kura"],
      ["Perfect World"],
      ["Doughnut"],
      ["Hare Hare"]
    ]
  },
  {
    q: "Name K-pop groups with 4 members",
    answers: [
      ["BLACKPINK"],
      ["MAMAMOO"],
      ["aespa"],
      ["2NE1"],
      ["KARA"],
      ["Brave Girls"],
      ["Wonder Girls (later)"],
      ["FT Island"],
      ["WINNER"],
      ["Kiss of Life"]
    ]
  },
  {
    q: "Name K-pop groups with 5 members",
    answers: [
      ["NewJeans"],
      ["Le Sserafim", "LE SSERAFIM"],
      ["Red Velvet"],
      ["BIGBANG"],
      ["SHINee"],
      ["TVXQ (original)"],
      ["TXT"],
      ["Tomorrow X Together"],
      ["Apink (currently)"],
      ["NMIXX"],
      ["Day6"],
      ["ITZY"],
      ["f(x)"]
    ]
  },
  {
    q: "Name K-pop groups with 7 members",
    answers: [
      ["BTS"],
      ["GOT7"],
      ["Monsta X"],
      ["Apink (original)"],
      ["NCT Dream"],
      ["Enhypen"],
      ["Sonamoo"],
      ["Babymonster"]
    ]
  },
  {
    q: "Name K-pop groups with 9 members",
    answers: [
      ["Twice"],
      ["Girls Generation", "SNSD"],
      ["Cosmic Girls", "WJSN"],
      ["Pristin"],
      ["Fromis_9"],
      ["NiziU"],
      ["After School (original)"],
      ["NCT 127 (originally)"],
      ["IZ*ONE", "IZONE"],
      ["Loona (original sub-units)"],
      ["ZEROBASEONE", "ZB1"]
    ]
  },
  {
    q: "Name BLACKPINK songs in Korean",
    answers: [
      ["Whistle"],
      ["Boombayah"],
      ["Playing With Fire"],
      ["Stay"],
      ["As If Its Your Last"],
      ["Ddu-Du Ddu-Du"],
      ["Forever Young"],
      ["Kill This Love"],
      ["How You Like That"],
      ["Lovesick Girls"],
      ["Pretty Savage"],
      ["Pink Venom"],
      ["Shut Down"],
      ["Tally"],
      ["Hard to Love"],
      ["Jump"]
    ]
  },
  {
    q: "Name TXT songs",
    answers: [
      ["Crown"],
      ["Cat & Dog"],
      ["9 and Three Quarters"],
      ["Can't You See Me?"],
      ["Blue Hour"],
      ["LO$ER=LO♡ER"],
      ["0X1=Lovesong"],
      ["Sugar Rush Ride"],
      ["Good Boy Gone Bad"],
      ["Tinnitus"],
      ["Devil by the Window"],
      ["Chasing That Feeling"],
      ["Deja Vu"],
      ["Anti-Romantic"]
    ]
  },
  {
    q: "Name ENHYPEN songs",
    answers: [
      ["Given-Taken"],
      ["Drunk-Dazed"],
      ["Tamed-Dashed"],
      ["Polaroid Love"],
      ["Future Perfect"],
      ["Bite Me"],
      ["Sweet Venom"],
      ["XO"],
      ["No Doubt"],
      ["Loose"],
      ["Brought the Heat Back"],
      ["Bills"]
    ]
  },
  {
    q: "Name aespa members' alter egos in their MV universe (ae- versions)",
    answers: [
      ["ae-Karina"],
      ["ae-Giselle"],
      ["ae-Winter"],
      ["ae-Ningning"]
    ]
  },
  {
    q: "Name famous BTS songs in Japanese",
    answers: [
      ["Lights"],
      ["Let Go"],
      ["Crystal Snow"],
      ["For You"],
      ["Don't Leave Me"],
      ["Black Swan"],
      ["Stay Gold"],
      ["Film Out"],
      ["Your Eyes Tell"],
      ["Spring Day"],
      ["Fake Love"],
      ["No More Dream"]
    ]
  },
  {
    q: "Name famous male K-pop dancers",
    answers: [
      ["Taemin"],
      ["Kai"],
      ["Hoshi"],
      ["Jimin"],
      ["J-Hope"],
      ["Eunhyuk"],
      ["Hyunjin"],
      ["Felix"],
      ["The8"],
      ["Yugyeom"],
      ["Jackson"],
      ["Sehun"],
      ["Lay"],
      ["Bobby"],
      ["Mino"],
      ["Mark Lee"]
    ]
  },
  {
    q: "Name K-pop groups whose color is associated with pink",
    answers: [
      ["BLACKPINK"],
      ["Apink"],
      ["Pink Fantasy"],
      ["IVE"],
      ["NewJeans"]
    ]
  },
  {
    q: "Name K-pop choreographers (famous ones working with idols)",
    answers: [
      ["Lia Kim"],
      ["May J Lee"],
      ["Bada Lee"],
      ["Bailey Sok"],
      ["Kiel Tutin"],
      ["Sienna Lalau"],
      ["Hoshi"],
      ["Rie Hata"],
      ["Sori Na"],
      ["Mihawk Back"]
    ]
  },
  {
    q: "Name K-pop idols known for their visuals (face of the group)",
    answers: [
      ["Tzuyu"],
      ["V", "Kim Taehyung"],
      ["Cha Eunwoo"],
      ["Jin"],
      ["Jisoo"],
      ["Jihyo"],
      ["Yoona"],
      ["Suzy"],
      ["Sehun"],
      ["Karina"],
      ["Wonyoung"],
      ["Sakura"],
      ["Hyunjin"],
      ["Mingyu"],
      ["Sana"],
      ["Mina"],
      ["Irene"],
      ["Joy"],
      ["Naeun"]
    ]
  },
  {
    q: "Name famous K-pop English songs / English releases",
    answers: [
      ["Dynamite"],
      ["Butter"],
      ["Permission to Dance"],
      ["My Universe"],
      ["Ice Cream"],
      ["Bet You Wanna"],
      ["Sour Candy"],
      ["The Feels"],
      ["MOONLIGHT SUNRISE"],
      ["Love Dive (English ver)"],
      ["Smart"],
      ["Perfect Night"],
      ["Super Shy"],
      ["Cookie"],
      ["ETA"],
      ["Get Up"],
      ["Whiplash"]
    ]
  },
  {
    q: "Name K-pop idols famous for high notes",
    answers: [
      ["Ailee"],
      ["Sohyang", "So Hyang"],
      ["Park Hyoshin"],
      ["Taeyeon"],
      ["Wendy"],
      ["IU"],
      ["Jungkook"],
      ["Baekhyun"],
      ["Jonghyun"],
      ["Jin"],
      ["Hwasa"],
      ["Solar"],
      ["Lia"],
      ["Whee In"],
      ["Onew"]
    ]
  },
  {
    q: "Name K-pop groups that have performed at Coachella",
    answers: [
      ["BLACKPINK"],
      ["2NE1"],
      ["Le Sserafim", "LE SSERAFIM"],
      ["Aespa"],
      ["Epik High"],
      ["Atarashii Gakko", "ATARASHII GAKKO"],
      ["XG"]
    ]
  },
  {
    q: "Name foreign cities famous for hosting K-pop world tours",
    answers: [
      ["Los Angeles"],
      ["New York"],
      ["London"],
      ["Tokyo"],
      ["Paris"],
      ["Singapore"],
      ["Bangkok"],
      ["Manila"],
      ["Jakarta"],
      ["Kuala Lumpur"],
      ["Sydney"],
      ["Mexico City"],
      ["Sao Paulo"],
      ["Berlin"],
      ["Amsterdam"],
      ["Dubai"],
      ["Las Vegas"],
      ["Chicago"],
      ["Toronto"],
      ["Hong Kong"]
    ]
  },
  {
    q: "Name TWICE title tracks",
    answers: [
      ["Like Ooh-Ahh"],
      ["Cheer Up"],
      ["TT"],
      ["Knock Knock"],
      ["Signal"],
      ["Likey"],
      ["Heart Shaker"],
      ["What Is Love?"],
      ["Dance the Night Away"],
      ["Yes or Yes"],
      ["Fancy"],
      ["Feel Special"],
      ["More & More"],
      ["I Cant Stop Me"],
      ["Alcohol-Free"],
      ["The Feels"],
      ["Scientist"],
      ["Talk that Talk"],
      ["Set Me Free"],
      ["I Got You"],
      ["One Spark"],
      ["Strategy"]
    ]
  },
  {
    q: "Name BTS albums",
    answers: [
      ["Dark & Wild"],
      ["Wings"],
      ["Love Yourself: Tear"],
      ["Love Yourself: Answer"],
      ["Map of the Soul: Persona"],
      ["Map of the Soul: 7"],
      ["BE"],
      ["Proof"],
      ["Most Beautiful Moment in Life Pt 1"],
      ["Most Beautiful Moment in Life Pt 2"],
      ["Young Forever"],
      ["You Never Walk Alone"],
      ["Skool Luv Affair"],
      ["The Most Beautiful Moment in Life Young Forever"]
    ]
  },
  {
    q: "Name K-pop YouTube reaction channels (famous ones)",
    answers: [
      ["DKDKtv", "DKDK TV"],
      ["Form of Therapy"],
      ["Reaction Time"],
      ["Bias List"],
      ["The Kelly Clarkson reaction"],
      ["Jay Reacts"],
      ["Reqectt"]
    ]
  },
  {
    q: "Name BLACKPINK members' solo song titles",
    answers: [
      ["Solo"],
      ["On the Ground"],
      ["Gone"],
      ["Lalisa"],
      ["Money"],
      ["You & Me"],
      ["Flower"],
      ["All Eyes On Me"],
      ["Apt", "APT."],
      ["Number One Girl"],
      ["Toxic Till the End"],
      ["Like Jennie"],
      ["Mantra"],
      ["Rockstar"],
      ["New Woman"],
      ["Spot!"],
      ["ZEN"]
    ]
  },
  {
    q: "Name idols in BTS sub-unit collaborations or features",
    answers: [
      ["Halsey"],
      ["Steve Aoki"],
      ["Coldplay"],
      ["Charli XCX"],
      ["Nicki Minaj"],
      ["Megan Thee Stallion"],
      ["Lauv"],
      ["Snoop Dogg"],
      ["Becky G"],
      ["Latto"],
      ["Sia"],
      ["Juice Wrld"]
    ]
  },
  {
    q: "Name members of Pristin",
    answers: [
      ["Nayoung", "Im Nayoung"],
      ["Roa", "Kim Minkyung"],
      ["Yuha", "Kang Kyungwon"],
      ["Eunwoo", "Jung Eunwoo"],
      ["Rena", "Kim Yebin"],
      ["Kyulkyung", "Zhou Jieqiong", "Pinky"],
      ["Yehana", "Kim Yewon"],
      ["Sungyeon", "Bae Sungyeon"],
      ["Xiyeon", "Park Siyeon"],
      ["Kyla", "Kyla Massie"]
    ]
  },
  {
    q: "Name members of IZ*ONE",
    answers: [
      ["Jang Wonyoung", "Wonyoung"],
      ["Sakura", "Miyawaki Sakura"],
      ["Jo Yuri", "Yuri"],
      ["Choi Yena", "Yena"],
      ["An Yujin", "Yujin"],
      ["Nako", "Yabuki Nako"],
      ["Kwon Eunbi", "Eunbi"],
      ["Kang Hyewon", "Hyewon"],
      ["Hitomi", "Honda Hitomi"],
      ["Kim Chaewon", "Chaewon"],
      ["Kim Minju", "Minju"],
      ["Lee Chaeyeon", "Chaeyeon"]
    ]
  },
  {
    q: "Name members of GFRIEND who later debuted in VIVIZ",
    answers: [
      ["Eunha"],
      ["SinB"],
      ["Umji"]
    ]
  },
  {
    q: "Name K-pop groups managed by Source Music",
    answers: [
      ["Le Sserafim", "LE SSERAFIM"],
      ["GFRIEND", "GFriend"]
    ]
  },
  {
    q: "Name songs by Taeyeon",
    answers: [
      ["I"],
      ["Rain"],
      ["Why"],
      ["Fine"],
      ["Make Me Love You"],
      ["Spark"],
      ["Four Seasons"],
      ["Weekend"],
      ["INVU"],
      ["Can't Control Myself"],
      ["Heaven"],
      ["What Do I Call You"],
      ["This Christmas"]
    ]
  },
  {
    q: "Name K-pop idols who left their groups",
    answers: [
      ["Sulli"],
      ["Kris", "Wu Yifan"],
      ["Luhan"],
      ["Tao"],
      ["Jessica", "Jessica Jung"],
      ["Hyuna"],
      ["E'Dawn", "EDawn", "Dawn"],
      ["Jonghyun (CNBLUE)"],
      ["Soojin", "Seo Soojin"],
      ["Mina (AOA)"],
      ["Jimin (AOA)"],
      ["Sojin (AOA)"],
      ["Choa", "ChoA"],
      ["Hyolyn"],
      ["Bora"],
      ["Soyou"],
      ["Dasom"],
      ["Hara", "Goo Hara"],
      ["Nicole", "Nicole Jung"],
      ["Jiyoung"],
      ["Hyuna (4Minute)"],
      ["Chuu"]
    ]
  },
  {
    q: "Name K-pop subunits / projects (any)",
    answers: [
      ["TVXQ"],
      ["JYJ"],
      ["EXO-K"],
      ["EXO-M"],
      ["EXO-CBX"],
      ["EXO-SC"],
      ["BSS", "Booseoksoon"],
      ["Got7 JJ Project", "JJ Project"],
      ["Super Junior-K.R.Y", "Super Junior KRY"],
      ["Super Junior M"],
      ["Super Junior-T"],
      ["Super Junior Donghae & Eunhyuk"],
      ["Red Velvet IRENE & SEULGI", "IRENE & SEULGI"],
      ["aespa Karina + Winter"],
      ["BTS Vmin"],
      ["TripleS Acid Angel from Asia"],
      ["TripleS LoveLution"],
      ["TripleS Aria"],
      ["NCT U"]
    ]
  },
  {
    q: "Name K-pop reality dating / friendship shows",
    answers: [
      ["Single's Inferno"],
      ["His Man"],
      ["Heart Signal"],
      ["Transit Love", "EXchange"],
      ["Pink Lie"]
    ]
  },
  {
    q: "Name K-pop idols who have appeared in Running Man",
    answers: [
      ["Lee Kwangsoo"],
      ["Jihyo (TWICE)"],
      ["Jennie"],
      ["Jisoo"],
      ["Lisa"],
      ["Rosé"],
      ["IU"],
      ["Suzy"],
      ["Yoona"],
      ["Nayeon"],
      ["Sana"],
      ["Hyuna"],
      ["Hwasa"],
      ["G-Dragon"],
      ["BTS"],
      ["Kai"],
      ["Tzuyu"]
    ]
  },
  {
    q: "Name SHINee songs",
    answers: [
      ["Replay"],
      ["Lucifer"],
      ["Sherlock"],
      ["Dream Girl"],
      ["View"],
      ["1 of 1"],
      ["Don't Call Me"],
      ["Atlantis"],
      ["Hard"],
      ["Ring Ding Dong"],
      ["Why So Serious?"],
      ["Hello"],
      ["Everybody"],
      ["Tell Me What to Do"],
      ["Married to the Music"]
    ]
  },
  {
    q: "Name K-pop concerts / tour names (BTS / BLACKPINK / TWICE)",
    answers: [
      ["Permission to Dance on Stage"],
      ["Speak Yourself World Tour"],
      ["Love Yourself World Tour"],
      ["Wings Tour"],
      ["Yet to Come"],
      ["Yet to Come in Cinemas"],
      ["Born Pink World Tour"],
      ["In Your Area"],
      ["Ready to Be"],
      ["TwiceLights"],
      ["TwicelightS World Tour"],
      ["III"],
      ["Twice 5th World Tour"],
      ["Map of the Soul Tour"]
    ]
  },
  {
    q: "Name iconic K-pop dances / viral dance moves",
    answers: [
      ["Boy with Luv point dance"],
      ["TT"],
      ["Cheer Up"],
      ["How You Like That"],
      ["Next Level"],
      ["Hype Boy"],
      ["Super Shy"],
      ["Tomboy"],
      ["Queencard"],
      ["Smart"],
      ["Perfect Night"],
      ["Magnetic"],
      ["Whiplash"],
      ["Spicy"],
      ["Drama"]
    ]
  },
  {
    q: "Name idols who debuted before age 16",
    answers: [
      ["BoA"],
      ["Taemin"],
      ["Krystal"],
      ["Sulli"],
      ["Mark", "Mark Lee"],
      ["Renjun"],
      ["Jeno"],
      ["Jaemin"],
      ["Haechan"],
      ["Chenle"],
      ["Jisung", "Park Jisung"],
      ["Tzuyu"],
      ["Yeji"],
      ["Wonyoung"],
      ["Leeseo"],
      ["Hyein"]
    ]
  },
  {
    q: "Name K-pop idols who are also producers",
    answers: [
      ["Soyeon"],
      ["RM"],
      ["Suga"],
      ["J-Hope"],
      ["Bang Chan"],
      ["Changbin"],
      ["Han"],
      ["Woozi"],
      ["Bumzu"],
      ["Zico"],
      ["GD", "G-Dragon"],
      ["Mino"],
      ["Bobby"],
      ["Hanbin", "BI"],
      ["Park Jinyoung", "JYP"],
      ["Crush"]
    ]
  },
  {
    q: "Name K-pop idols who started YouTube channels (vlog/cooking/etc)",
    answers: [
      ["Eric Nam"],
      ["Bambam"],
      ["Hwasa"],
      ["Wendy"],
      ["Joy"],
      ["Sandara Park", "Dara"],
      ["Hyuna"],
      ["Heechul"],
      ["Onew"],
      ["Yook Sungjae"]
    ]
  },
  {
    q: "Name idols famous for fashion icon status",
    answers: [
      ["G-Dragon"],
      ["Jennie"],
      ["Lisa"],
      ["Rosé"],
      ["Jisoo"],
      ["V", "Kim Taehyung"],
      ["RM"],
      ["Jimin"],
      ["Karina"],
      ["Wonyoung"],
      ["Hyuna"],
      ["Hwasa"],
      ["Taeyong"],
      ["Mingyu"],
      ["Sandara Park"],
      ["CL"],
      ["Sehun"],
      ["Cha Eunwoo"]
    ]
  },
  {
    q: "Name idols who have hosted Music Bank, Inkigayo, or M Countdown",
    answers: [
      ["Jin"],
      ["Jungkook"],
      ["Doyoung"],
      ["Jaehyun"],
      ["Yeri"],
      ["Joy"],
      ["Irene"],
      ["Eunwoo", "Cha Eunwoo"],
      ["Mingyu"],
      ["Suho"],
      ["Sungjae"],
      ["Wonyoung"],
      ["Sunghoon"],
      ["Sungchan"],
      ["Solar"],
      ["Hwasa"],
      ["Lily"]
    ]
  },
  {
    q: "Name K-pop groups whose name has only one word",
    answers: [
      ["Twice"],
      ["BLACKPINK"],
      ["BTS"],
      ["EXO"],
      ["GOT7"],
      ["BIGBANG"],
      ["aespa"],
      ["IVE"],
      ["ITZY"],
      ["NMIXX"],
      ["NewJeans"],
      ["ATEEZ"],
      ["Treasure"],
      ["Babymonster"],
      ["Riize", "RIIZE"],
      ["Stayc"],
      ["Boynextdoor"],
      ["TXT"],
      ["Enhypen", "ENHYPEN"],
      ["Cravity"],
      ["Pentagon"],
      ["Astro"],
      ["Apink"],
      ["Mamamoo"]
    ]
  },
  {
    q: "Name K-pop variety shows hosted by groups themselves",
    answers: [
      ["Run BTS"],
      ["Going Seventeen"],
      ["TimeToTwice"],
      ["NCT Life"],
      ["Stray Kids 2 Kids Room"],
      ["BLACKPINK Diaries"],
      ["EXO Ladder"],
      ["Bon Voyage"],
      ["BTS Bon Voyage"],
      ["Got7's Hard Carry", "Hard Carry"],
      ["Synchronize"],
      ["IVE on"]
    ]
  },
  {
    q: "Name English-fluent K-pop idols",
    answers: [
      ["RM"],
      ["Mark Tuan"],
      ["Mark Lee"],
      ["Jackson"],
      ["Bambam"],
      ["Eric Nam"],
      ["Tiffany"],
      ["Jessica"],
      ["Krystal"],
      ["Amber"],
      ["Felix"],
      ["Bang Chan"],
      ["Rosé"],
      ["Lisa"],
      ["Jennie"],
      ["Vernon"],
      ["Joshua"],
      ["Hanni"],
      ["Danielle"],
      ["Lily"],
      ["Anton"],
      ["Johnny"],
      ["Yuna (XG)"]
    ]
  },
  {
    q: "Name K-pop labels under HYBE",
    answers: [
      ["Big Hit Music"],
      ["Pledis Entertainment"],
      ["Source Music"],
      ["Belift Lab"],
      ["Ador", "ADOR"],
      ["KOZ Entertainment"],
      ["HYBE Labels Japan"],
      ["HYBE America"],
      ["QC Media"]
    ]
  },
  {
    q: "Name well-known idol-actor crossovers (idols who are very known as actors)",
    answers: [
      ["Suzy"],
      ["IU"],
      ["Yoona"],
      ["Krystal"],
      ["D.O.", "Doh Kyungsoo"],
      ["V", "Kim Taehyung"],
      ["Cha Eunwoo"],
      ["Im Siwan"],
      ["Park Hyungsik"],
      ["Lee Junho"],
      ["Hyeri"],
      ["Joy"],
      ["Bae Suzy"],
      ["Seohyun"],
      ["Sulli"],
      ["Yook Sungjae"],
      ["Jisoo"],
      ["Rowoon"],
      ["Doyoung"]
    ]
  },
  {
    q: "Name famous K-pop comeback songs of 2024",
    answers: [
      ["Smart"],
      ["Easy"],
      ["Crazy"],
      ["Heya"],
      ["Magnetic"],
      ["Supernova"],
      ["Armageddon"],
      ["Drama"],
      ["Spicy"],
      ["How Sweet"],
      ["Bubble Gum"],
      ["Supernatural"],
      ["Whiplash"],
      ["Maestro"],
      ["Klaxon"],
      ["Lalalala"],
      ["Chk Chk Boom"],
      ["Sticky"],
      ["Standing Next to You"],
      ["Seven"]
    ]
  },
  {
    q: "Name K-pop idols who released a solo song called something with 'Love' in the title",
    answers: [
      ["Polaroid Love"],
      ["Love Poem"],
      ["Love Scenario"],
      ["Lovesick Girls"],
      ["Lovesong"],
      ["Through the Night"],
      ["Crazy in Love"],
      ["Lonely"],
      ["Love Letter"],
      ["Hate That I Love You"],
      ["Love Shot"],
      ["Bad Love"],
      ["Done For Me"]
    ]
  },
  {
    q: "Name idols famous for their abs (often-mentioned)",
    answers: [
      ["Jungkook"],
      ["Kai"],
      ["Sehun"],
      ["Taemin"],
      ["Mingyu"],
      ["Wonho"],
      ["Hwasa"],
      ["Jay Park"],
      ["San"],
      ["Eunhyuk"],
      ["Donghae"],
      ["Siwon"],
      ["Taeyang"],
      ["Hoshi"],
      ["Bambam"]
    ]
  },
  {
    q: "Name K-pop idols who can speak Japanese fluently",
    answers: [
      ["Sana"],
      ["Mina"],
      ["Momo"],
      ["Sakura"],
      ["Kazuha"],
      ["Rei"],
      ["Yuta"],
      ["Ni-ki"],
      ["Shotaro"],
      ["Iroha"],
      ["Karin"],
      ["Moka"],
      ["Niki"],
      ["Yuna (XG)"],
      ["Mayu"],
      ["Kotone"]
    ]
  },
  {
    q: "Name groups with 6 members",
    answers: [
      ["IVE"],
      ["Apink"],
      ["Oh My Girl"],
      ["Mamamoo+"],
      ["TWS"],
      ["NCT WISH"],
      ["KATSEYE"],
      ["Stayc"],
      ["GFRIEND"],
      ["Brown Eyed Girls"],
      ["Boynextdoor"]
    ]
  },
  {
    q: "Name K-pop groups whose name has a number in it",
    answers: [
      ["2NE1"],
      ["2PM"],
      ["2AM"],
      ["4Minute"],
      ["fromis_9"],
      ["NCT 127"],
      ["Apink (no)"],
      ["B1A4"],
      ["B.A.P (no)"],
      ["g.o.d (no)"],
      ["EXID (no)"],
      ["Block B (no)"],
      ["A1"],
      ["IZ*ONE", "IZONE"],
      ["NCT U (no)"],
      ["100%"],
      ["TripleS"],
      ["1TYM"],
      ["UNB"],
      ["X1"],
      ["WJSN"],
      ["ZB1"],
      ["Kep1er"],
      ["TWS (no)"],
      ["XG (no)"]
    ]
  },
  {
    q: "Name K-pop idols who are vegetarian or have spoken about it",
    answers: [
      ["Sooyoung"],
      ["Suzy"],
      ["IU"],
      ["Wendy"],
      ["Yook Sungjae"],
      ["Mark Tuan"],
      ["Lay"],
      ["Hwasa"]
    ]
  },
  {
    q: "Name K-pop idols who have a tattoo (publicly known)",
    answers: [
      ["Jungkook"],
      ["Jimin"],
      ["RM"],
      ["Suga"],
      ["J-Hope"],
      ["V"],
      ["Hwasa"],
      ["Hyuna"],
      ["Dawn"],
      ["G-Dragon"],
      ["CL"],
      ["Park Bom"],
      ["Jay Park"],
      ["Bambam"],
      ["Jackson"],
      ["Sehun"],
      ["Taemin"],
      ["Solar"],
      ["Lia"],
      ["Yeji"],
      ["Hyunjin"],
      ["Felix"],
      ["Han"],
      ["Bang Chan"]
    ]
  },
  {
    q: "Name K-pop idols famous for cute/aegyo concepts",
    answers: [
      ["Sana"],
      ["Nayeon"],
      ["Tzuyu"],
      ["Dahyun"],
      ["Chaeyoung"],
      ["Wendy"],
      ["Jin"],
      ["Jimin"],
      ["Hueningkai"],
      ["Sunoo"],
      ["Sungwoon"],
      ["Renjun"],
      ["Hoshi"],
      ["DK"],
      ["Seungkwan"],
      ["Oh My Girl Arin"]
    ]
  },
  {
    q: "Name K-pop idols who have ever ranked #1 on Boys/Girls Planet or Produce",
    answers: [
      ["Sung Hanbin"],
      ["Daniel", "Kang Daniel"],
      ["Wonyoung"],
      ["Yujin", "An Yujin"],
      ["Sakura"],
      ["Kim Yohan"],
      ["Lai Kuanlin"],
      ["Kim Chaewon"],
      ["Kim Doyoung"]
    ]
  },
  {
    q: "Name K-pop idols who attended SOPA, Hanlim or famous performing arts schools",
    answers: [
      ["Karina"],
      ["Wonyoung"],
      ["Yujin"],
      ["Tzuyu"],
      ["Mina (TWICE)"],
      ["Chaeyoung (TWICE)"],
      ["Dahyun"],
      ["Yeri"],
      ["Lisa"],
      ["Yeonjun"],
      ["Heeseung"],
      ["Ni-ki"],
      ["Hyein"],
      ["Eunchae"],
      ["Sunoo"],
      ["Mingyu"]
    ]
  },
  {
    q: "Name songs with a member's name in the title",
    answers: [
      ["Lalisa"],
      ["Like Jennie"],
      ["I Got You"],
      ["Solo (Jennie)"],
      ["Mantra"],
      ["INVU"],
      ["Sticky"]
    ]
  },
  {
    q: "Name K-pop idols who are Korean-Canadian or Korean-American",
    answers: [
      ["Mark Tuan"],
      ["Eric Nam"],
      ["Henry Lau"],
      ["Tiffany Young"],
      ["Jessica Jung"],
      ["Krystal Jung"],
      ["Vernon"],
      ["Amber"],
      ["Mark Lee"],
      ["Joshua"],
      ["Johnny"],
      ["Jay (Enhypen)"],
      ["Anton"],
      ["Lily"],
      ["Daniel Kang"],
      ["Sohee (RIIZE)"]
    ]
  },
  {
    q: "Name K-pop idols who have walked Paris Fashion Week",
    answers: [
      ["Jennie"],
      ["Rosé"],
      ["Jisoo"],
      ["Lisa"],
      ["V", "Kim Taehyung"],
      ["Jimin"],
      ["RM"],
      ["Karina"],
      ["Winter"],
      ["Wonyoung"],
      ["Sakura"],
      ["Hwasa"],
      ["Hyuna"],
      ["G-Dragon"],
      ["Dara"],
      ["CL"],
      ["Jung Hoyeon"],
      ["Mingyu"]
    ]
  },
  {
    q: "Name K-pop idols famous for being multi-talented (sing, dance, rap)",
    answers: [
      ["IU"],
      ["Hwasa"],
      ["CL"],
      ["Soyeon"],
      ["Yeji"],
      ["Hoshi"],
      ["Taemin"],
      ["Jimin"],
      ["Lisa"],
      ["Jennie"],
      ["Karina"],
      ["Hyuna"],
      ["Sunmi"],
      ["Chungha"],
      ["Felix"]
    ]
  }
];

// Sanity check: count
console.log("Total questions:", QUESTIONS.length);

// Expose to window so the ES module can read it
if (typeof window !== 'undefined') {
  window.QUESTIONS = QUESTIONS;
}
