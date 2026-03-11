const QUIZ = [
  // CATHOLICISM
  { category: 'catholicism', difficulty: 1, type: 'mc',
    q: "Who convened the Council of Nicaea in 325 AD?",
    options: ["Pope Urban", "Jesus of Nazareth", "Emperor Constantine", "Martin Luther"],
    a: 2, ext: "Constantine needed a unified religion to hold the Roman Empire together. 'Division in the Church,' he said, 'was worse than war.'"
  },
  { category: 'catholicism', difficulty: 1, type: 'mc',
    q: "What is the 'Dark Night of the Soul' in Catholic mysticism?",
    options: ["A period of grief after losing faith", "A purification stage where even spiritual consolation is withdrawn", "The hours before dawn when prayer is most powerful", "The moment of death"],
    a: 1, ext: "John of the Cross described it as 'like purgatory before death' — a total drying up of all spiritual feeling, leading ultimately to total union with God."
  },
  { category: 'catholicism', difficulty: 1, type: 'mc',
    q: "The word 'Catholic' comes from the Greek word meaning:",
    options: ["Holy", "Universal", "Roman", "Christian"],
    a: 1, ext: "Katholikos means universal. The Catholic Church claims to be the universal Christian church."
  },
  { category: 'catholicism', difficulty: 2, type: 'mc',
    q: "The Council of Nicaea's central debate was about which single Greek letter?",
    options: ["Alpha", "Omega", "Iota", "Lambda"],
    a: 2, ext: "Homoousios (same substance) vs homoiousios (similar substance) — the difference between Jesus being fully God or subordinate to God. One iota separated the positions that nearly split Christianity."
  },
  { category: 'catholicism', difficulty: 2, type: 'mc',
    q: "Lectio Divina has four steps. Which sequence is correct?",
    options: ["Read → Pray → Meditate → Contemplate", "Read → Meditate → Pray → Contemplate", "Meditate → Read → Contemplate → Pray", "Pray → Read → Meditate → Contemplate"],
    a: 1, ext: "Lectio (read) → Meditatio (meditate) → Oratio (pray) → Contemplatio (contemplate). Language is a ladder that is eventually set down."
  },
  { category: 'catholicism', difficulty: 2, type: 'mc',
    q: "Which mystic wrote 'The Interior Castle,' describing seven mansions of the soul's journey to God?",
    options: ["John of the Cross", "Thomas Aquinas", "Teresa of Ávila", "Ignatius Loyola"],
    a: 2, ext: "Teresa of Ávila's Interior Castle maps seven mansions — seven stages of deepening contemplative prayer from outer vocal prayer to the innermost chamber of Transforming Union with God."
  },
  { category: 'catholicism', difficulty: 2, type: 'mc',
    q: "The Ignatian method uses which primary technique?",
    options: ["Emptying the mind of all thoughts", "Repeating a sacred word until thoughts stop", "Imagining yourself inside a Gospel scene using all five senses", "Staring at a candle until vision blurs"],
    a: 2, ext: "Ignatian Imaginative Contemplation is fundamentally active imagination — enter the scene, see, hear, smell, touch, taste it — the same technique Carl Jung later developed in depth psychology."
  },
  { category: 'catholicism', difficulty: 3, type: 'mc',
    q: "The Catholic doctrine of Theosis teaches that:",
    options: ["God becomes human at the Incarnation", "The soul is annihilated in mystical union", "The human person is deified — transformed into the divine — while remaining a distinct creature", "Only priests can achieve spiritual perfection"],
    a: 2, ext: "Theosis (from the Greek, 'divinization') is the Orthodox and Catholic doctrine that humans can participate in divine nature — not losing their individuality but being transformed through it."
  },
  { category: 'catholicism', difficulty: 3, type: 'tf',
    q: "TRUE OR FALSE: The Bible was written as a single unified book by its authors.",
    options: ["TRUE", "FALSE"],
    a: 1, ext: "The Bible is a multi-century anthology. The Old Testament was compiled over hundreds of years before Jesus. The New Testament was assembled by church councils over 300+ years."
  },
  { category: 'catholicism', difficulty: 3, type: 'mc',
    q: "The Religare label 'Functional Purpose' would describe Catholicism's role in the Roman Empire as:",
    options: ["Purely spiritual — it had nothing to do with politics", "Political unification tool, social welfare system, psychological comfort provider, and wealth manager", "A grassroots movement that accidentally became powerful", "An Eastern mystical tradition misunderstood by Rome"],
    a: 1, ext: "The Church functioned simultaneously as government, bank, court, university, hospital, and spiritual authority for 2,000 years. It is the most successful institution in human history."
  },
  // ZOROASTRIANISM
  { category: 'zoroastrianism', difficulty: 1, type: 'mc',
    q: "What is the name of the supreme God in Zoroastrianism?",
    options: ["Angra Mainyu", "Ahura Mazda", "Zarathustra", "Asha Vahishta"],
    a: 1, ext: "Ahura Mazda means 'Wise Lord.' He is the one supreme God, representing all that is good, true, and wise. The Japanese car company Mazda is named after him."
  },
  { category: 'zoroastrianism', difficulty: 1, type: 'mc',
    q: "The three pillars of Zoroastrian ethics are:",
    options: ["Faith, Hope, Charity", "Prayer, Fasting, Pilgrimage", "Good Thoughts, Good Words, Good Deeds", "Fire, Water, Earth"],
    a: 2, ext: "Humata (Good Thoughts), Hukhta (Good Words), Huvarshta (Good Deeds). The universe runs on the aggregate of human thought, word, and deed. Your choices matter cosmically."
  },
  { category: 'zoroastrianism', difficulty: 1, type: 'mc',
    q: "What is the Kusti?",
    options: ["A Zoroastrian prayer book", "A sacred cord of 72 threads worn around the waist and ritually untied and retied", "The name for the Zoroastrian God of fire", "A fire temple in Iran"],
    a: 1, ext: "The Kusti is the foundation of every Zoroastrian ritual. 72 threads = 72 chapters of the Yasna. Untying = releasing accumulated moral debt. Retying = renewing the covenant with Ahura Mazda."
  },
  { category: 'zoroastrianism', difficulty: 2, type: 'mc',
    q: "The 'Three Wise Men' (Magi) in the Christmas story were historically:",
    options: ["Jewish priests following Hebrew prophecy", "Roman astrologers hired by King Herod", "Zoroastrian priest-astronomers following their own prophecy", "Egyptian scholars following a pharaonic tradition"],
    a: 2, ext: "The Magi were Zoroastrian priests. Their religion prophesied that a Saoshyant (Savior) would be born, heralded by a celestial sign. They came to Bethlehem following their own faith's predictions."
  },
  { category: 'zoroastrianism', difficulty: 2, type: 'mc',
    q: "Which Persian king freed the Jewish people from Babylonian captivity in 538 BCE?",
    options: ["Darius the Great", "Xerxes", "Cyrus the Great", "Artaxerxes"],
    a: 2, ext: "Cyrus the Great — a Zoroastrian — freed the Jews from Babylon. He is praised in the Hebrew Bible as God's 'anointed.' During their 50 years in Babylon, the Jews absorbed Zoroastrian concepts."
  },
  { category: 'zoroastrianism', difficulty: 2, type: 'mc',
    q: "The Zoroastrian end-times event 'Frashokereti' means:",
    options: ["The Day of Judgment", "'Making Wonderful' — universal renovation where evil is destroyed and ALL souls purified", "The coming of the Magi", "The eternal battle between fire and darkness"],
    a: 1, ext: "Frashokereti ('making wonderful') is the Zoroastrian equivalent of the Christian resurrection and Last Judgment — but notably, ALL souls are ultimately purified. It is universally redemptive."
  },
  { category: 'zoroastrianism', difficulty: 2, type: 'mc',
    q: "The concept of Satan (the Devil) as a real cosmic adversary of God is believed to originate in:",
    options: ["Ancient Egyptian mythology", "The Book of Job in the Hebrew Bible", "Zoroastrianism — the concept of Angra Mainyu", "The Book of Revelation"],
    a: 2, ext: "Angra Mainyu is the Zoroastrian cosmic adversary — a real, named evil force opposing the supreme good God. This concept entered Judaism during the Babylonian exile."
  },
  { category: 'zoroastrianism', difficulty: 3, type: 'mc',
    q: "How many distinct sources of fire must be combined to create an Atash Bahram?",
    options: ["3", "7", "12", "16"],
    a: 3, ext: "16 sources. 32 priests. Up to 1 year to consecrate. Some Atash Bahram fires have burned for 1,500+ years."
  },
  { category: 'zoroastrianism', difficulty: 3, type: 'mc',
    q: "The mainyu athra concept in Zoroastrianism refers to:",
    options: ["The prayer recited at sunset", "The 'mind-fire' — inner spiritual flame fed by good thoughts", "The highest grade of consecrated fire", "The Zoroastrian term for God's grace"],
    a: 1, ext: "Mainyu athra literally means 'mind, fire.' The physical flame is the external mirror of the inner spiritual fire. Both must burn bright."
  },
  { category: 'zoroastrianism', difficulty: 3, type: 'tf',
    q: "TRUE OR FALSE: Zoroastrianism invented the concept of a coming Messiah before Judaism did.",
    options: ["TRUE", "FALSE"],
    a: 0, ext: "The Zoroastrian Saoshyant (Savior) is a messianic prophecy pre-dating the Jewish Messianic tradition. It was absorbed by Judaism during the Babylonian exile (586–538 BCE)."
  },
  // ROSICRUCIANISM
  { category: 'rosicrucianism', difficulty: 1, type: 'mc',
    q: "The first Rosicrucian manifesto was published in:",
    options: ["1517", "1610", "1614", "1666"],
    a: 2, ext: "The Fama Fraternitatis appeared in 1614, in Germany, anonymously — exactly at the fault line between the Protestant Reformation and the Scientific Revolution."
  },
  { category: 'rosicrucianism', difficulty: 1, type: 'mc',
    q: "The Rosicrucian symbol combines:",
    options: ["A star and a crescent moon", "A rose and a cross", "A flame and a triangle", "A serpent and a staff"],
    a: 1, ext: "The Rose Cross: a blooming rose at the center of a cross. The rose = the soul blooming toward the divine. The cross = the material world, the path of purification."
  },
  { category: 'rosicrucianism', difficulty: 1, type: 'tf',
    q: "TRUE OR FALSE: The founder of Rosicrucianism, Christian Rosenkreuz, was a real historical person.",
    options: ["TRUE", "FALSE"],
    a: 1, ext: "Christian Rosenkreuz is regarded by scholars as a legendary, almost certainly fictional character. The probable real author was Johann Valentin Andreae."
  },
  { category: 'rosicrucianism', difficulty: 2, type: 'mc',
    q: "In Rosicrucian alchemy, 'Calcination' represents:",
    options: ["The final stage of spiritual perfection", "The creation of the Philosopher's Stone", "The first stage — burning off the ego, false identity, and worldly attachments", "The merging of opposites in the soul"],
    a: 2, ext: "Calcination is Stage 1 — the Nigredo. It burns off everything that is not essentially you. Often experienced as an ego-destroying crisis."
  },
  { category: 'rosicrucianism', difficulty: 2, type: 'mc',
    q: "The Rosicrucian doctrine of 'Two Books of God' states:",
    options: ["The Old and New Testaments are God's only books", "Scripture AND Nature are equally valid sources of divine truth", "Alchemy and Kabbalah are God's hidden books", "The Fama and the Confessio are the two sacred texts"],
    a: 1, ext: "This is the theological permission slip for scientific inquiry within a Christian framework. Studying nature is studying God's second book."
  },
  { category: 'rosicrucianism', difficulty: 2, type: 'mc',
    q: "Which famous movement was directly influenced by Rosicrucian ideas and helped shape the founding of the US?",
    options: ["The Jesuits", "Freemasonry", "The Dominican Order", "The Templars"],
    a: 1, ext: "Freemasonry absorbed Rosicrucian symbolism, structure, and philosophy extensively. Many of America's founding fathers were Freemasons."
  },
  { category: 'rosicrucianism', difficulty: 2, type: 'mc',
    q: "The Rose Cross Meditation (Rudolf Steiner) uses which primary technique?",
    options: ["Repeating a sacred word to achieve mental silence", "Reading Scripture and resting in its words", "Standing before a sacred flame reciting prayers", "Constructing a symbolic image through deliberate thought and feeling BEFORE using it"],
    a: 3, ext: "Steiner insists the symbol must be BUILT through living thought and feeling before it is used. A self-constructed symbol has 'soul-awakening power.'"
  },
  { category: 'rosicrucianism', difficulty: 3, type: 'mc',
    q: "The seven stages of the Rosicrucian Magnum Opus in correct order are:",
    options: ["Dissolution → Calcination → Separation...", "Calcination → Dissolution → Separation → Conjunction → Fermentation → Distillation → Coagulation", "Calcination → Separation → Dissolution...", "Distillation → Calcination..."],
    a: 1, ext: "Calcination (burn) → Dissolution (dissolve) → Separation (filter) → Conjunction (unite) → Fermentation (decay/rebirth) → Distillation (purify) → Coagulation (solidify)."
  },
  { category: 'rosicrucianism', difficulty: 3, type: 'mc',
    q: "The Chemical Wedding of Christian Rosenkreuz (1616) is primarily:",
    options: ["A literal account of a royal wedding ceremony", "A seven-day alchemical allegory representing stages of spiritual transformation", "A political pamphlet attacking the Catholic Church", "A collection of Hermetic philosophical essays"],
    a: 1, ext: "The mystical masterpiece of Rosicrucian literature. It is an alchemical allegory representing the Great Work."
  },
  { category: 'rosicrucianism', difficulty: 3, type: 'mc',
    q: "The Religare reveals that Catholic 'Theosis,' Zoroastrian 'Frashokereti alignment,' and Rosicrucian 'Coagulation' are functionally:",
    options: ["Completely different concepts", "Three different names for the same functional goal: complete transformation of human being in union with the divine", "Political concepts", "Sequential stages"],
    a: 1, ext: "Strip away the cultural paint. Three traditions. One discovery."
  }
];

const FLASHCARDS = [
  { f: "Avesta", b: "Sacred text of Zoroastrianism, written in ancient Avestan. Contains the Gathas (Zoroaster's own hymns). Much destroyed by Alexander." },
  { f: "Frashokereti", b: "Zoroastrian end-times event: the universal renovation where evil is destroyed and ALL souls are purified. 'Making Wonderful.'" },
  { f: "Ahura Mazda", b: "The Wise Lord. Zoroastrian supreme God. Creator. Source of light and truth. The car company Mazda is named after him." },
  { f: "Angra Mainyu", b: "The Destructive Spirit. Zoroastrian cosmic adversary of Ahura Mazda. The ancestor of the Jewish/Christian/Islamic Satan." },
  { f: "Kusti", b: "Zoroastrian sacred cord of 72 wool threads. Worn around waist. Ritually untied and retied 5+ times daily to release moral debt." },
  { f: "Atash Bahram", b: "Highest grade of Zoroastrian sacred fire. Created from 16 sources. Requires 32 priests and up to 1 year to consecrate." },
  { f: "Fama Fraternitatis", b: "1614. First Rosicrucian manifesto. Tells legend of Christian Rosenkreuz. Anonymous call for universal reformation." },
  { f: "Magnum Opus", b: "The Great Work. Rosicrucian alchemical process of complete self-transformation in 7 stages, ending in Coagulation." },
  { f: "Philosopher's Stone", b: "In Rosicrucian spiritual alchemy: NOT a physical substance. State of enlightened consciousness achieved at Stage 7." },
  { f: "Nigredo", b: "Alchemical 'blackening.' Stage 1 (Calcination) of the Magnum Opus. Necessary destruction of the ego and false identity." },
  { f: "Theosis", b: "Catholic doctrine: deification of the human person. Participating in divine nature while remaining a distinct creature." },
  { f: "Dark Night of the Soul", b: "John of the Cross. Bridge between Illuminative and Unitive Ways. ALL inner spiritual life goes dark. 'Purgatory before death.'" },
  { f: "Lectio Divina", b: "Sacred Reading. Benedictine practice. 4 steps: Lectio (read) → Meditatio (meditate) → Oratio (pray) → Contemplatio (rest)." },
  { f: "Saoshyant", b: "Zoroastrian Messiah. Savior figure prophesied to appear at end of time. Zoroastrian Magi followed this prophecy to Bethlehem." },
  { f: "Mainyu Athra", b: "Zoroastrian 'mind-fire.' Inner spiritual flame that mirrors external sacred fire. Fed by Good Thoughts." },
  { f: "Nicene Creed", b: "325 AD. First official declaration of Christian faith at Council of Nicaea. Established Trinity doctrine." },
  { f: "Babylonian Exile", b: "586–538 BCE. Jews conquered by Babylon, freed by Zoroastrian King Cyrus. Jews absorbed Zoroastrian theology during this time." },
  { f: "Rose Cross Meditation", b: "Core Rosicrucian practice (Rudolf Steiner). Build symbol of black cross + 7 red roses through living thought before meditating on it." },
  { f: "Asha", b: "Zoroastrian cosmic principle of Truth, Righteousness, and Order. Opposed to Druj (the Lie). Represented by fire." },
  { f: "The Religare", b: "A telescope for belief systems. Latin: 'to bind back'. Neutral framework for extracting functional data from any belief system." }
];

const INSIGHTS = [
  "Look here. Did you know the Japanese car company Mazda is named after Ahura Mazda, the Zoroastrian God of light and truth?",
  "Did you know the Catholic Church formally pardoned Galileo in 1975 — 365 years after they refused to look through his telescope?",
  "The 'Three Wise Men' in the Christmas story were Magi — Zoroastrian priests following their own 1,000-year-old prophecy of a coming Savior.",
  "Zoroastrianism invented the concept of Satan, angels, and a coming Messiah over 2,500 years ago.",
  "In 538 BCE, a Zoroastrian King (Cyrus the Great) freed the Jews from Babylon. He is praised in the Hebrew Bible as God's anointed.",
  "No one actually knows who wrote the Rosicrucian manifestos. Not a single true member ever came forward.",
  "Carl Jung, the founder of analytical psychology, built his entire model of the unconscious on Rosicrucian alchemical concepts.",
  "Lectio Divina, the ancient Catholic prayer, is essentially a progressive relaxation into apophatic silence.",
  "In Zoroastrianism, the world is saved when the aggregate of all human 'Good Thoughts, Good Words, and Good Deeds' tips the cosmic scale.",
  "The Council of Nicaea (325 AD) was convened by a Roman Emperor who needed a unified religion to prevent his empire from splitting apart.",
  "Rosicrucianism proposed that God wrote Two Books: Scripture and Nature. Therefore, doing science is doing theology.",
  "The 'Philosopher's Stone' of alchemy isn't a rock that turns lead into gold. Lead is the human ego. Gold is the enlightened soul.",
  "Every major Western religion's 'end of the world' scenario (resurrection, judgment, paradise) was mapped out intimately by Zoroaster first.",
  "Zoroastrianism has only 120,000 practitioners left today — but its doctrines are prayed by billions of Christians, Jews, and Muslims daily.",
  "The chemical wedding of Christian Rosenkreuz uses the metaphor of 'beheading' to describe the necessary death of the false self.",
  "Ignation contemplation in Catholicism is basically guided active imagination — a technique psychology adopted 400 years later."
];
