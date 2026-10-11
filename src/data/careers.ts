export interface QuizQuestion {
  q: string;
  choices: string[];
  answer: number;
  why: string;
}

export type Mission =
  | { type: 'code'; goal: string; wallLabel: string }
  | { type: 'quiz'; questions: QuizQuestion[]; chart?: { labels: string[]; values: number[]; unit: string } }
  | { type: 'order'; prompt: string; items: string[]; why: string }
  | { type: 'sort'; bins: { id: string; label: string; hint: string }[]; items: { emoji?: string; name: string; bin: string }[]; why: string };

export interface Career {
  id: string;
  name: string;
  emoji: string;
  tag: string;
  blurb: string;
  intro: string;
  mission: Mission;
  learn: {
    does: string;
    classes: string[];
    fact: string;
    link: { label: string; url: string };
  };
}

export const careers: Career[] = [
  {
    id: 'rover',
    name: 'Mars Rover Driver',
    emoji: '🛰️',
    tag: 'Code mission',
    blurb: 'Plans every move a rover makes on Mars, one day at a time.',
    intro:
      "Mars is too far away to drive a rover with a joystick, so drivers write a full day's plan of moves and send it all at once. Program the rover around the boulders to reach the rock sample.",
    mission: { type: 'code', goal: 'rock sample', wallLabel: 'boulder' },
    learn: {
      does: 'Studies 3D maps of the ground, plans safe routes, and writes the commands the rover runs the next day.',
      classes: ['Geometry', 'Computer science', 'Physics'],
      fact: 'A radio signal takes between about 3 and 22 minutes to travel between Earth and Mars, depending on where the planets are.',
      link: { label: 'NASA Space Place', url: 'https://spaceplace.nasa.gov' },
    },
  },
  {
    id: 'volcano',
    name: 'Volcanologist',
    emoji: '🌋',
    tag: 'Chart mission',
    blurb: 'Watches volcanoes for warning signs so people can stay safe.',
    intro:
      'Your seismometer counted small earthquakes under a volcano each day this week. Read the chart to decide whether the volcano is waking up.',
    mission: {
      type: 'quiz',
      chart: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], values: [3, 5, 9, 14, 22], unit: 'small earthquakes' },
      questions: [
        {
          q: 'Which day had the most earthquakes?',
          choices: ['Mon', 'Wed', 'Thu', 'Fri'],
          answer: 3,
          why: "Friday's bar is the tallest, with 22 earthquakes.",
        },
        {
          q: 'What is happening to the number of earthquakes?',
          choices: ['Going down', 'Staying the same', 'Going up every day', 'Jumping around randomly'],
          answer: 2,
          why: 'Every day had more than the day before. A steady rise like this is a pattern volcanologists watch closely.',
        },
        {
          q: 'What should the volcanologist do next?',
          choices: ['Ignore it', 'Warn local officials and keep watching', 'Climb into the crater', 'Turn off the seismometer'],
          answer: 1,
          why: 'Rising earthquakes can mean magma is moving underground. Scientists share their data so officials can prepare.',
        },
      ],
    },
    learn: {
      does: 'Sets up sensors, measures gases and ground movement, and works with officials to plan for eruptions.',
      classes: ['Earth science', 'Chemistry', 'Statistics'],
      fact: 'Some volcanoes swell up like a balloon before they erupt, and satellites can measure the bulge from space.',
      link: { label: 'USGS Volcano Hazards Program', url: 'https://www.usgs.gov/programs/VHP' },
    },
  },
  {
    id: 'glacier',
    name: 'Glaciologist',
    emoji: '🧊',
    tag: 'Order mission',
    blurb: 'Studies glaciers and ice sheets to learn about Earth’s past climate.',
    intro:
      'You drilled a long ice core out of Antarctica. Snow piles up in layers each year, so the deeper you go, the older the ice. Tap the layers in order from the top of the core to the bottom.',
    mission: {
      type: 'order',
      prompt: 'Top of the core → bottom',
      items: ['Last winter', '100 years ago', '1,000 years ago', '10,000 years ago', '100,000 years ago'],
      why: 'The newest snow is on top and the oldest ice is at the bottom. Bubbles trapped in each layer hold tiny samples of ancient air.',
    },
    learn: {
      does: 'Travels to icy places, drills ice cores, and uses satellites to measure how glaciers are changing.',
      classes: ['Earth science', 'Chemistry', 'Math'],
      fact: 'The oldest ice cores from Antarctica contain air that is around 800,000 years old.',
      link: { label: 'NASA Climate Kids', url: 'https://climatekids.nasa.gov' },
    },
  },
  {
    id: 'myco',
    name: 'Mycologist',
    emoji: '🍄',
    tag: 'Sort mission',
    blurb: 'Studies fungi, from mushrooms to the yeast that makes bread rise.',
    intro: 'You found six things on a forest walk and in the kitchen. Sort each one: is it a fungus or not?',
    mission: {
      type: 'sort',
      bins: [
        { id: 'fungus', label: 'Fungus', hint: 'mushrooms, molds, yeasts' },
        { id: 'not', label: 'Not a fungus', hint: 'plants, algae, and others' },
      ],
      items: [
        { emoji: '🍄', name: 'Mushroom', bin: 'fungus' },
        { emoji: '🍞', name: 'Bread yeast', bin: 'fungus' },
        { emoji: '🧀', name: 'Blue mold in cheese', bin: 'fungus' },
        { emoji: '🌿', name: 'Fern', bin: 'not' },
        { emoji: '🌊', name: 'Seaweed', bin: 'not' },
        { emoji: '🌱', name: 'Moss', bin: 'not' },
      ],
      why: 'Fungi are not plants. They can’t make their own food from sunlight, so they break down other things to eat.',
    },
    learn: {
      does: 'Identifies fungi, grows them in the lab, and studies how they help make medicine, food, and healthy soil.',
      classes: ['Biology', 'Chemistry', 'Environmental science'],
      fact: 'One honey fungus in Oregon spreads underground across more than 2,000 acres, making it one of the largest living things on Earth. (Never eat a wild mushroom unless an expert says it’s safe!)',
      link: { label: 'iNaturalist', url: 'https://www.inaturalist.org' },
    },
  },
  {
    id: 'herp',
    name: 'Herpetologist',
    emoji: '🦎',
    tag: 'Sort mission',
    blurb: 'Studies reptiles and amphibians, like snakes, turtles, and frogs.',
    intro: 'Your field team spotted six animals near a pond. Sort each one into reptile or amphibian.',
    mission: {
      type: 'sort',
      bins: [
        { id: 'reptile', label: 'Reptile', hint: 'dry, scaly skin' },
        { id: 'amphibian', label: 'Amphibian', hint: 'moist skin, starts life in water' },
      ],
      items: [
        { name: 'Frog', bin: 'amphibian' },
        { name: 'Turtle', bin: 'reptile' },
        { name: 'Snake', bin: 'reptile' },
        { name: 'Lizard', bin: 'reptile' },
        { name: 'Salamander', bin: 'amphibian' },
        { name: 'Newt', bin: 'amphibian' },
      ],
      why: 'Amphibians usually start life in water and have moist skin. Reptiles have dry, scaly skin.',
    },
    learn: {
      does: 'Surveys animals in the wild, tracks their health, and helps protect habitats like wetlands.',
      classes: ['Biology', 'Ecology', 'Statistics'],
      fact: 'Wood frogs can freeze almost solid in winter, then thaw out and hop away in spring.',
      link: { label: 'National Geographic Kids: Animals', url: 'https://kids.nationalgeographic.com/animals' },
    },
  },
  {
    id: 'crypto',
    name: 'Cryptographer',
    emoji: '🔐',
    tag: 'Code-breaking mission',
    blurb: 'Invents secret codes that keep messages and passwords safe.',
    intro:
      'A Caesar cipher hides a message by shifting every letter forward in the alphabet. With a shift of 1, A becomes B and B becomes C. Crack these messages.',
    mission: {
      type: 'quiz',
      questions: [
        {
          q: 'With a shift of 1, what does CAT become?',
          choices: ['BZS', 'DBU', 'CAT', 'ECV'],
          answer: 1,
          why: 'C→D, A→B, T→U. So CAT becomes DBU.',
        },
        {
          q: 'This message used a shift of 3: KHOOR. What does it say?',
          choices: ['HELLO', 'HAPPY', 'HOUSE', 'KNOWS'],
          answer: 0,
          why: 'Shift each letter back by 3: K→H, H→E, O→L, O→L, R→O. HELLO!',
        },
        {
          q: 'Why are Caesar ciphers easy to break?',
          choices: ['They use numbers', 'There are only 25 possible shifts to try', 'They are written backwards', 'They need a computer'],
          answer: 1,
          why: 'You can just try every shift. Modern codes use math so hard that even supercomputers can’t guess them.',
        },
      ],
    },
    learn: {
      does: 'Designs and tests the math behind encryption, which protects things like online banking and messaging apps.',
      classes: ['Math (especially number theory)', 'Computer science', 'Logic puzzles'],
      fact: 'During World War II, Navajo Code Talkers sent messages in a code based on the Navajo language that was never broken.',
      link: { label: 'Khan Academy: Cryptography', url: 'https://www.khanacademy.org/computing/computer-science/cryptography' },
    },
  },
  {
    id: 'acoustic',
    name: 'Acoustical Engineer',
    emoji: '🔊',
    tag: 'Quiz mission',
    blurb: 'Designs how spaces sound, from concert halls to quiet classrooms.',
    intro: 'A school wants its new music room to sound great without loud echoes. Answer the sound questions to finish the design.',
    mission: {
      type: 'quiz',
      questions: [
        {
          q: 'Which surface reduces echoes the most?',
          choices: ['Bare concrete', 'Glass windows', 'Soft foam panels', 'Metal sheets'],
          answer: 2,
          why: 'Soft, squishy materials soak up sound waves instead of bouncing them back.',
        },
        {
          q: 'Where does sound travel fastest?',
          choices: ['Air', 'Water', 'Outer space', 'It’s the same everywhere'],
          answer: 1,
          why: 'Sound travels about four times faster in water than in air, because the particles are packed closer together.',
        },
        {
          q: 'What unit measures how loud a sound is?',
          choices: ['Meters', 'Watts', 'Decibels', 'Hertz'],
          answer: 2,
          why: 'Decibels (dB) measure loudness. Hertz measures pitch, or how high or low a sound is.',
        },
      ],
    },
    learn: {
      does: 'Measures noise, builds computer models of rooms, and picks materials that make spaces sound right.',
      classes: ['Physics', 'Math', 'Music'],
      fact: 'Space is completely silent, because there’s no air to carry sound waves.',
      link: { label: 'Exploratorium Science Snacks', url: 'https://www.exploratorium.edu/snacks' },
    },
  },
  {
    id: 'dendro',
    name: 'Dendrochronologist',
    emoji: '🌳',
    tag: 'Quiz mission',
    blurb: 'Reads tree rings to uncover the history of climate, fires, and droughts.',
    intro: 'You took a thin core sample from an old tree without hurting it. Use the rings to answer the questions.',
    mission: {
      type: 'quiz',
      questions: [
        {
          q: 'A tree grows one ring each year. Your sample has 85 rings. How old is the tree?',
          choices: ['8 years', '85 years', '170 years', '850 years'],
          answer: 1,
          why: 'One ring per year, so 85 rings means the tree is about 85 years old.',
        },
        {
          q: 'One ring is much wider than the others. What does that probably mean?',
          choices: ['A great growing year with lots of rain', 'A very dry year', 'The tree was cut', 'Nothing at all'],
          answer: 0,
          why: 'Trees grow more in good years, so wide rings usually mean plenty of water and sunlight.',
        },
        {
          q: 'A group of very thin rings in a row probably shows…',
          choices: ['A flood', 'A drought', 'A heat wave in winter', 'A new forest'],
          answer: 1,
          why: 'Thin rings mean the tree barely grew, which often happens during dry years.',
        },
      ],
    },
    learn: {
      does: 'Collects tree samples, measures rings under a microscope, and matches patterns to date old wood and past climates.',
      classes: ['Biology', 'Earth science', 'Statistics'],
      fact: 'Some bristlecone pines in California are more than 4,800 years old, older than the Egyptian pyramids.',
      link: { label: 'UCAR Center for Science Education', url: 'https://scied.ucar.edu' },
    },
  },
];
