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
  // ISLAM
  { category: 'islam', difficulty: 1, type: 'mc',
    q: "In what year did the Prophet Muhammad receive the first revelation of the Quran?",
    options: ["570 CE", "610 CE", "622 CE", "632 CE"],
    a: 1, ext: "The revelations began in the Cave of Hira in 610 CE. Muhammad was 40 years old. The message was simple: There is no God but Allah."
  },
  { category: 'islam', difficulty: 1, type: 'mc',
    q: "The word 'Islam' literally means:",
    options: ["Peace", "Submission", "Prayer", "Holy"],
    a: 1, ext: "Islam comes from the root 'SLM,' meaning peace through submission to the will of God. A Muslim is 'one who submits.'"
  },
  { category: 'islam', difficulty: 1, type: 'tf',
    q: "TRUE OR FALSE: Muslims believe that Islam is a new religion started by Muhammad.",
    options: ["TRUE", "FALSE"],
    a: 1, ext: "Muslims believe Islam is the original, primordial faith of all prophets from Adam and Abraham to Jesus. Muhammad is seen as the 'Seal of the Prophets' who restored the pure message."
  },
  { category: 'islam', difficulty: 2, type: 'mc',
    q: "The 'Night Journey' (Isra and Mi'raj) describes Muhammad traveling to which city before ascending to heaven?",
    options: ["Medina", "Damascus", "Jerusalem", "Cairo"],
    a: 2, ext: "Muhammad is said to have traveled from Mecca to the 'Farthest Mosque' (Jerusalem) on the winged steed Buraq, then ascended through the seven heavens to meet God."
  },
  { category: 'islam', difficulty: 2, type: 'mc',
    q: "In Sufism (Islamic mysticism), what does the term 'Fana' mean?",
    options: ["The creation of a perfect society", "The annihilation of the false self (ego) in God", "The strict adherence to religious law", "A state of deep mourning"],
    a: 1, ext: "Fana-fi-Allah: 'annihilation in God.' Like a drop of water returning to the ocean, the ego is dissolved so that only the Divine remains."
  },
  { category: 'islam', difficulty: 2, type: 'mc',
    q: "The Islamic calendar begins with the 'Hijra.' What was the Hijra?",
    options: ["The birth of Muhammad", "The revelation of the first verse of the Quran", "The emigration of early Muslims from Mecca to Medina", "The conquest of Mecca"],
    a: 2, ext: "In 622 CE, to escape persecution, Muhammad and his followers moved to Medina. This marks 'Year 1' because it is when Islam became a community (Ummah) and a social force."
  },
  { category: 'islam', difficulty: 2, type: 'mc',
    q: "Sufi 'Dhikr' practices primarily involve:",
    options: ["Silent reading of history", "The rhythmic remembrance and repetition of the Names of God", "Studying complex mathematical formulas", "Traveling to distant lands"],
    a: 1, ext: "Dhikr (remembrance) is the core Sufi practice. By repeating 'Allah' or 'La ilaha illa Allah,' the heart is polished until it reflects the Divine light."
  },
  { category: 'islam', difficulty: 3, type: 'mc',
    q: "The secondary source of Islamic Law, which records the sayings and actions of the Prophet, is called:",
    options: ["The Torah", "The Hadith", "The Psalms", "The Vedas"],
    a: 1, ext: "The Quran is the verbatim word. The Hadith (traditions) provide the Sunnah (the example). Together, they form the basis of Shariah (the path)."
  },
  { category: 'islam', difficulty: 3, type: 'mc',
    q: "In Islamic cosmology, Jinn are sentient beings created from:",
    options: ["Clay", "Light", "Smokeless Fire", "Water"],
    a: 2, ext: "Angels are created from light (nur). Humans from clay (tin). Jinn from smokeless fire (marijin min nar). Jinn possess free will and can be good or bad."
  },
  { category: 'islam', difficulty: 3, type: 'mc',
    q: "The Religare reveals that Catholic 'Theosis,' Zoroastrian 'Frashokereti alignment,' and Islamic 'Fana' are functionally:",
    options: ["Opposing ideologies", "Three different names for the same functional goal: the transformation of the human being in union with the divine", "Purely political frameworks", "Scientific theories"],
    a: 1, ext: "Strip away the cultural paint. These are three high-precision paths toward the same ontological transformation."
  },
  { category: 'catholicism', difficulty: 3, type: 'mc',
    q: "In Catholic anthropology, 'Privatio Boni' (the privation of good) refers to:",
    options: ["A lack of financial resources in the early church", "The state of the soul under Original Sin as a 'wounded' nature", "The practice of fasting during Lent", "The removal of corrupt priests"],
    a: 1, ext: "Privatio Boni defines the human condition as entering the world in the 'negative' — not just neutral, but wounded. This creates the institutional necessity for the Church's remedial sacraments."
  },
  { category: 'zoroastrianism', difficulty: 3, type: 'mc',
    q: "How does Zoroastrian 'Frashokereti' functionally differ from the Christian 'Last Judgment'?",
    options: ["It occurs at the beginning of time instead of the end", "It focuses on a binary split of souls forever", "It is a Universal Restoration where ALL souls are eventually purified and evil is extinguished", "It has no concept of a savior figure"],
    a: 2, ext: "Christianity's apocalypse ends in a permanent divide; Zoroastrianism's Frashokereti ends in a 'Making Wonderful' of the entire cosmos, restoring it to a perfect, unified state."
  },
  { category: 'islam', difficulty: 3, type: 'mc',
    q: "The Islamic concept of 'Ghaflah' (Heedlessness) as the root of human error contrasts with the Catholic concept of:",
    options: ["Grace", "Scholasticism", "Original Sin", "Papal Infallibility"],
    a: 2, ext: "Religare Framework: In Catholicism, the problem is an ontological stain (Sin). In Islam, the problem is a cognitive/spiritual lapse (Heedlessness). One requires a cure; the other requires a reminder."
  }
];

const FLASHCARDS = [
  { f: "Avesta", b: "Sacred text of Zoroastrianism, written in ancient Avestan. Contains the Gathas (Zoroaster's own hymns). Much destroyed by Alexander." },
  { f: "Frashokereti", b: "Zoroastrian end-times event: the universal renovation where evil is destroyed and ALL souls are purified. 'Making Wonderful.'" },
  { f: "Ahura Mazda", b: "The Wise Lord. Zoroastrian supreme God. Creator. Source of light and truth. The car company Mazda is named after him." },
  { f: "Angra Mainyu", b: "The Destructive Spirit. Zoroastrian cosmic adversary of Ahura Mazda. The ancestor of the Jewish/Christian/Islamic Satan." },
  { f: "Kusti", b: "Zoroastrian sacred cord of 72 wool threads. Worn around waist. Ritually untied and retied 5+ times daily to release moral debt." },
  { f: "Atash Bahram", b: "Highest grade of Zoroastrian sacred fire. Created from 16 sources. Requires 32 priests and up to 1 year to consecrate." },
  { f: "Quran", b: "The central sacred text of Islam. Muslims believe it is the verbatim word of God revealed to Muhammad over 23 years." },
  { f: "Fana", b: "Islamic/Sufi concept of 'annihilation' of the ego or false self in God. The drop becoming the ocean." },
  { f: "Hadith", b: "The recorded sayings and actions of the Prophet Muhammad. The secondary source of Islamic law and ethical guidelines." },
  { f: "Tawhid", b: "The absolute Oneness of God in Islam. The defining doctrine that God has no partners, no equals, and no divisions." },
  { f: "Theosis", b: "Catholic doctrine: deification of the human person. Participating in divine nature while remaining a distinct creature." },
  { f: "Dark Night of the Soul", b: "John of the Cross. Bridge between Illuminative and Unitive Ways. ALL inner spiritual life goes dark. 'Purgatory before death.'" },
  { f: "Lectio Divina", b: "Sacred Reading. Benedictine practice. 4 steps: Lectio (read) → Meditatio (meditate) → Oratio (pray) → Contemplatio (rest)." },
  { f: "Saoshyant", b: "Zoroastrian Messiah. Savior figure prophesied to appear at end of time. Zoroastrian Magi followed this prophecy to Bethlehem." },
  { f: "Dhikr", b: "Islamic 'Remembrance.' Sufi practice of repeating the names of God or sacred phrases to purify the heart and achieve presence." },
  { f: "Nicene Creed", b: "325 AD. First official declaration of Christian faith at Council of Nicaea. Established Trinity doctrine." },
  { f: "Babylonian Exile", b: "586–538 BCE. Jews conquered by Babylon, freed by Zoroastrian King Cyrus. Jews absorbed Zoroastrian theology during this time." },
  { f: "Sufism", b: "The mystical dimension of Islam. Focuses on the inner, spiritual journey toward God through love, discipline, and direct experience." },
  { f: "Asha", b: "Zoroastrian cosmic principle of Truth, Righteousness, and Order. Opposed to Druj (the Lie). Represented by fire." },
  { f: "Scholasticism", b: "Catholic intellectual synthesis of Faith and Reason. Formulated by Aquinas to use logic (Aristotle) in service of theology." },
  { f: "Fitra", b: "Islamic concept of primordial natural goodness. Every human is born in a state of purity, as opposed to Original Sin." },
  { f: "Wahdat al-wujud", b: "Sufi 'Unity of Being.' Metaphysical doctrine that all existence is a single reality manifesting in diverse forms." },
  { f: "The Religare", b: "A telescope for belief systems. Latin: 'to bind back'. Neutral framework for extracting functional data from any belief system." },
  { f: "Shadows of Grace", b: "Digital or physical substitutes (social media, substances) that mimic the desire for presence/connection while producing isolation or biological lethargy." },
  { f: "Requirements of Choice", b: "The 5-point lens for evaluating true agency: Agency, Freedom, Options, Awareness, and Maturity." },
  { f: "Uncommon Sense", b: "Deliberate 30-day pilots (A→B→C→D) designed to challenge inherited frameworks and restore cognitive/spiritual agency." },
  { f: "Common Sense Framework", b: "The aggregate of inherited beliefs and practices that bypass conscious filters. Sources: Genealogy, Culture, Tradition." },
  { f: "Sabr", b: "Radical Islamic patience. The disciplined suspension of reactivity to allow for centered action in alignment with Divine decree." },
  { f: "Memento Mori", b: "Catholic practice of 'remembering death' not as morbidity, but as a grounding mechanism for reorienting toward immediate Grace." }
];

const INSIGHTS = [
  "Look here. Did you know the Japanese car company Mazda is named after Ahura Mazda, the Zoroastrian God of light and truth?",
  "Did you know the Catholic Church formally pardoned Galileo in 1975 — 365 years after they refused to look through his telescope?",
  "The 'Three Wise Men' in the Christmas story were Magi — Zoroastrian priests following their own 1,000-year-old prophecy of a coming Savior.",
  "Zoroastrianism invented the concept of Satan, angels, and a coming Messiah over 2,500 years ago.",
  "In 538 BCE, a Zoroastrian King (Cyrus the Great) freed the Jews from Babylon. He is praised in the Hebrew Bible as God's anointed.",
  "Islam is currently the second-largest religion in the world, yet it shares identical roots with Judaism and Christianity.",
  "The word 'Allah' is simply the Arabic word for 'God' — it is used by Arab Christians and Arab Jews as well as Muslims.",
  "Lectio Divina, the ancient Catholic prayer, is essentially a progressive relaxation into apophatic silence.",
  "In Zoroastrianism, the world is saved when the aggregate of all human 'Good Thoughts, Good Words, and Good Deeds' tips the cosmic scale.",
  "The Council of Nicaea (325 AD) was convened by a Roman Emperor who needed a unified religion to prevent his empire from splitting apart.",
  "During the Islamic Golden Age, scholars in Baghdad were translating and preserving the works of Aristotle and Plato while Europe was in the Dark Ages.",
  "Sufi whirling (Sema) is a moving meditation meant to symbolize the soul's movement in the cosmic dance around the Divine center.",
  "Every major Western religion's 'end of the world' scenario (resurrection, judgment, paradise) was mapped out intimately by Zoroaster first.",
  "Zoroastrianism has only 120,000 practitioners left today — but its doctrines are prayed by billions of Christians, Jews, and Muslims daily.",
  "The Quran was revealed over 23 years, with verses often answering specific ethical or social dilemmas faced by the early community.",
  "Ignation contemplation in Catholicism is basically guided active imagination — a technique psychology adopted 400 years later."
];
