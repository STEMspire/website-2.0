export interface Chart {
  labels: string[];
  values: number[];
  unit: string;
}

export type Task =
  | { type: 'quiz'; q: string; choices: string[]; answer: number; why: string; chart?: Chart }
  | { type: 'order'; prompt: string; items: string[]; why: string }
  | {
      type: 'sort';
      prompt: string;
      bins: { id: string; label: string; hint: string }[];
      items: { name: string; bin: string; emoji?: string }[];
      why: string;
    }
  // Maze map rows: S = start, G = goal, # = obstacle, . = open
  | { type: 'code'; map: string[]; why: string };

export interface Career {
  id: string;
  name: string;
  emoji: string;
  blurb: string;
  intro: string;
  tasks: Task[];
  learn: {
    does: string;
    classes: string[];
    fact: string;
    link: { label: string; url: string };
  };
}

const quakeChart: Chart = { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], values: [3, 5, 9, 14, 22], unit: 'small earthquakes per day' };
const glacierChart: Chart = { labels: ['1980', '1990', '2000', '2010', '2020'], values: [10, 9.5, 8.8, 8, 7], unit: 'glacier length (km)' };
const ringChart: Chart = { labels: ['2016', '2017', '2018', '2019', '2020'], values: [4, 2, 1, 3, 5], unit: 'ring width (mm)' };
const noiseChart: Chart = { labels: ['Library', 'Class', 'Hall', 'Lunch', 'Gym'], values: [40, 60, 75, 85, 92], unit: 'noise level (dB)' };

export const careers: Career[] = [
  {
    id: 'rover',
    name: 'Robotics Engineer',
    emoji: '🛰️',
    blurb: 'Builds and programs robots, like the rovers exploring Mars.',
    intro:
      "At NASA, robotics engineers called rover planners program Mars rovers. Mars is too far away to steer with a joystick, so they write a full day's plan of moves and send it all at once. Program the rover through harder and harder terrain.",
    tasks: [
      {
        type: 'code',
        map: ['....G', '.#.#.', '.#.#.', '.....', 'S#...'],
        why: 'Rover planners map out the whole route before sending it, because they can’t steer in real time.',
      },
      {
        type: 'quiz',
        q: 'Why can’t engineers steer a Mars rover live with a joystick?',
        choices: ['Signals take minutes to reach Mars', 'The rover has no radio', 'Mars has no gravity', 'Joysticks don’t work in space'],
        answer: 0,
        why: 'A radio signal takes about 3 to 22 minutes to reach Mars. By the time the rover heard “stop,” it could already be over a cliff.',
      },
      {
        type: 'code',
        map: ['S.#...', '..#.#.', '.##.#.', '....#.', '##.##.', 'G.....'],
        why: 'Bigger maps mean more planning. Real rover planners study 3D maps made from the rover’s cameras.',
      },
      {
        type: 'quiz',
        q: 'Why does Mars look red?',
        choices: ['It’s very hot', 'Its soil has rusty iron in it', 'It’s covered in red plants', 'The Sun is red there'],
        answer: 1,
        why: 'Mars dust is full of iron oxide, which is basically rust.',
      },
      {
        type: 'code',
        map: ['G.#..', '.#...', '...#.', '#.#..', '...#S'],
        why: 'Sometimes the shortest-looking path is blocked, and you have to go the long way around.',
      },
      {
        type: 'quiz',
        q: 'What powers the Perseverance rover?',
        choices: ['Solar panels', 'Heat from a nuclear power source', 'Gasoline', 'Batteries charged on Earth'],
        answer: 1,
        why: 'Perseverance and Curiosity turn heat from radioactive plutonium into electricity, so dust storms can’t block their power like they can with solar panels.',
      },
      {
        type: 'order',
        prompt: 'Rovers that landed on Mars, oldest → newest',
        items: ['Sojourner (1997)', 'Spirit (2004)', 'Curiosity (2012)', 'Perseverance (2021)'],
        why: 'Each rover was bigger and smarter than the last. Perseverance is about the size of a car.',
      },
      {
        type: 'code',
        map: ['..#..G', '#.#.#.', '..#.#.', '.##.#.', '....#.', 'S##...'],
        why: 'Long routes take careful planning. Engineers double-check every command before sending it.',
      },
      {
        type: 'quiz',
        q: 'What was the name of the small helicopter that flew on Mars?',
        choices: ['Ingenuity', 'Falcon', 'Voyager', 'Hubble'],
        answer: 0,
        why: 'Ingenuity made the first powered flight on another planet in April 2021.',
      },
      {
        type: 'code',
        map: ['......', '.####.', '.#G...', '.###.#', '...#..', '#S.#..'],
        why: 'Final level! The sample is surrounded, so you have to find the one way in.',
      },
    ],
    learn: {
      does: 'Designs, builds, and programs robots. On a Mars mission, they study 3D maps, plan safe routes, and write the commands the rover runs the next day.',
      classes: ['Computer science', 'Physics', 'Engineering or robotics club'],
      fact: 'Rover teams sometimes work on “Mars time,” where each day is about 40 minutes longer than an Earth day.',
      link: { label: 'NASA Space Place', url: 'https://spaceplace.nasa.gov' },
    },
  },
  {
    id: 'volcano',
    name: 'Volcanologist',
    emoji: '🌋',
    blurb: 'Watches volcanoes for warning signs so people can stay safe.',
    intro: 'You’re on duty at a volcano observatory. Read the data, learn the rocks, and decide when to warn people.',
    tasks: [
      {
        type: 'quiz',
        chart: quakeChart,
        q: 'Your seismometer counted small earthquakes under the volcano. Which day had the most?',
        choices: ['Mon', 'Wed', 'Thu', 'Fri'],
        answer: 3,
        why: 'Friday’s bar is the tallest, with 22 earthquakes.',
      },
      {
        type: 'quiz',
        chart: quakeChart,
        q: 'What is happening to the number of earthquakes?',
        choices: ['Going down', 'Staying the same', 'Going up every day', 'Jumping around randomly'],
        answer: 2,
        why: 'Every day had more than the day before. A steady rise is a pattern volcanologists watch closely.',
      },
      {
        type: 'quiz',
        chart: quakeChart,
        q: 'What should the volcanologist do next?',
        choices: ['Ignore it', 'Warn local officials and keep watching', 'Climb into the crater', 'Turn off the seismometer'],
        answer: 1,
        why: 'Rising earthquakes can mean magma is moving underground. Scientists share data so officials can prepare.',
      },
      {
        type: 'quiz',
        q: 'What is melted rock called while it’s still underground?',
        choices: ['Lava', 'Magma', 'Ash', 'Basalt'],
        answer: 1,
        why: 'It’s magma underground. Once it comes out of the volcano, it’s called lava.',
      },
      {
        type: 'order',
        prompt: 'U.S. volcano alert levels, lowest → highest',
        items: ['Normal', 'Advisory', 'Watch', 'Warning'],
        why: 'The U.S. Geological Survey uses these four levels to tell people how worried to be about a volcano.',
      },
      {
        type: 'sort',
        prompt: 'Sort the rock samples you collected.',
        bins: [
          { id: 'volcanic', label: 'Volcanic rock', hint: 'formed from cooled lava' },
          { id: 'other', label: 'Other rock', hint: 'formed from layers or pressure' },
        ],
        items: [
          { name: 'Obsidian', bin: 'volcanic' },
          { name: 'Pumice', bin: 'volcanic' },
          { name: 'Basalt', bin: 'volcanic' },
          { name: 'Sandstone', bin: 'other' },
          { name: 'Limestone', bin: 'other' },
          { name: 'Marble', bin: 'other' },
        ],
        why: 'Obsidian, pumice, and basalt all form when lava cools. Sandstone and limestone form in layers, and marble forms under heat and pressure.',
      },
      {
        type: 'quiz',
        q: 'Which volcanic rock can float on water?',
        choices: ['Obsidian', 'Basalt', 'Pumice', 'Granite'],
        answer: 2,
        why: 'Pumice is full of tiny gas bubbles, which makes it light enough to float.',
      },
      {
        type: 'quiz',
        chart: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], values: [1, 2, 2, 4, 7], unit: 'ground rise (cm)' },
        q: 'GPS sensors show the ground near the volcano rising. How much did it rise from January to May?',
        choices: ['5 cm', '6 cm', '7 cm', '8 cm'],
        answer: 1,
        why: '7 − 1 = 6 cm. When magma pushes up from below, the ground can swell like a balloon.',
      },
      {
        type: 'quiz',
        q: 'Most of the world’s active volcanoes sit around which ocean, in the “Ring of Fire”?',
        choices: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
        answer: 3,
        why: 'The Ring of Fire circles the Pacific Ocean, where many of Earth’s plates meet.',
      },
      {
        type: 'quiz',
        q: 'Which volcano buried the Roman city of Pompeii in 79 CE?',
        choices: ['Mount Fuji', 'Mount Vesuvius', 'Kīlauea', 'Mount St. Helens'],
        answer: 1,
        why: 'Mount Vesuvius in Italy buried Pompeii in ash. It’s still active and closely watched today.',
      },
    ],
    learn: {
      does: 'Sets up sensors, measures gases and ground movement, and works with officials to plan for eruptions.',
      classes: ['Earth science', 'Chemistry', 'Statistics'],
      fact: 'Satellites can measure a volcano swelling by just a few centimeters from space.',
      link: { label: 'USGS Volcano Hazards Program', url: 'https://www.usgs.gov/programs/VHP' },
    },
  },
  {
    id: 'glacier',
    name: 'Glaciologist',
    emoji: '🧊',
    blurb: 'Studies glaciers and ice sheets to learn about Earth’s past climate.',
    intro: 'You’re heading to the poles to drill ice, track glaciers, and figure out what ice can tell us about Earth.',
    tasks: [
      {
        type: 'order',
        prompt: 'How a glacier forms, first → last',
        items: ['Snow falls', 'Snow piles up for many years', 'Lower layers squeeze into grainy firn', 'Firn turns into solid glacier ice', 'The ice starts to flow downhill'],
        why: 'It can take decades or even centuries for fresh snow to become glacier ice.',
      },
      {
        type: 'order',
        prompt: 'Ice core layers, top of the core → bottom',
        items: ['Last winter', '100 years ago', '1,000 years ago', '10,000 years ago', '100,000 years ago'],
        why: 'The newest snow is on top and the oldest ice is at the bottom.',
      },
      {
        type: 'quiz',
        q: 'What do the tiny bubbles in an ice core contain?',
        choices: ['Ancient air', 'Seawater', 'Dinosaur DNA', 'Nothing'],
        answer: 0,
        why: 'Each bubble is a tiny sample of the air from when that snow fell, so scientists can study the atmosphere from long ago.',
      },
      {
        type: 'quiz',
        q: 'About how much of Earth’s fresh water is frozen in ice and glaciers?',
        choices: ['About 10%', 'About 30%', 'About 70%', 'About 99%'],
        answer: 2,
        why: 'Roughly 70% of Earth’s fresh water is locked up in ice caps and glaciers.',
      },
      {
        type: 'sort',
        prompt: 'Sort these into the Arctic (north) or Antarctica (south).',
        bins: [
          { id: 'arctic', label: 'Arctic', hint: 'the far north' },
          { id: 'antarctica', label: 'Antarctica', hint: 'the far south' },
        ],
        items: [
          { emoji: '🐻‍❄️', name: 'Polar bear', bin: 'arctic' },
          { emoji: '🐧', name: 'Emperor penguin', bin: 'antarctica' },
          { emoji: '🦊', name: 'Arctic fox', bin: 'arctic' },
          { emoji: '🧭', name: 'South Pole', bin: 'antarctica' },
          { emoji: '🧭', name: 'North Pole', bin: 'arctic' },
          { emoji: '🧊', name: 'Greenland ice sheet', bin: 'arctic' },
        ],
        why: 'Polar bears live only in the Arctic, and wild penguins live in the Southern Hemisphere, so they never meet in the wild.',
      },
      {
        type: 'quiz',
        chart: glacierChart,
        q: 'You measured a mountain glacier every 10 years. How much shorter was it in 2020 than in 1980?',
        choices: ['1 km', '2 km', '3 km', '7 km'],
        answer: 2,
        why: '10 − 7 = 3 km shorter.',
      },
      {
        type: 'quiz',
        chart: glacierChart,
        q: 'What is happening to this glacier?',
        choices: ['Growing', 'Shrinking', 'Staying the same', 'Moving uphill'],
        answer: 1,
        why: 'Each measurement is shorter than the last. Many mountain glaciers around the world are shrinking.',
      },
      {
        type: 'quiz',
        q: 'Do glaciers move?',
        choices: ['Never', 'Yes, they slowly flow downhill', 'Only in summer', 'Only at night'],
        answer: 1,
        why: 'Glaciers are so heavy that the ice slowly flows downhill, like extremely thick syrup.',
      },
      {
        type: 'quiz',
        q: 'Which melting ice raises sea level more?',
        choices: ['Ice on land, like glaciers', 'Sea ice that’s already floating', 'Both the same', 'Neither'],
        answer: 0,
        why: 'Floating sea ice already takes up space in the ocean. Ice melting off land adds new water to the sea.',
      },
      {
        type: 'quiz',
        q: 'Which continent has the largest ice sheet?',
        choices: ['North America', 'Europe', 'Antarctica', 'Asia'],
        answer: 2,
        why: 'The Antarctic ice sheet is the biggest on Earth. In places it’s more than 4 km thick.',
      },
    ],
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
    blurb: 'Studies fungi, from mushrooms to the yeast that makes bread rise.',
    intro: 'Head into the forest and the kitchen to discover the hidden world of fungi.',
    tasks: [
      {
        type: 'sort',
        prompt: 'Is it a fungus or not?',
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
        why: 'Fungi aren’t plants. They can’t make food from sunlight, so they break down other things to eat.',
      },
      {
        type: 'quiz',
        q: 'Fungi are more closely related to…',
        choices: ['Plants', 'Animals', 'Bacteria', 'Rocks'],
        answer: 1,
        why: 'Surprise! DNA shows fungi are more closely related to animals than to plants.',
      },
      {
        type: 'quiz',
        q: 'How do mushrooms spread to new places?',
        choices: ['Seeds', 'Spores', 'Eggs', 'Flowers'],
        answer: 1,
        why: 'Mushrooms release millions of tiny spores that float away on the wind.',
      },
      {
        type: 'quiz',
        q: 'Under the cap of many mushrooms are thin folds that release spores. What are they called?',
        choices: ['Roots', 'Gills', 'Petals', 'Scales'],
        answer: 1,
        why: 'They’re called gills, like a fish’s, because of how they look.',
      },
      {
        type: 'order',
        prompt: 'A mushroom’s life cycle, first → last',
        items: ['A spore lands on the ground', 'It grows tiny threads', 'The threads form an underground network', 'A mushroom pops up above ground', 'The mushroom releases new spores'],
        why: 'The mushroom you see is only a small part. Most of the fungus lives underground as threads.',
      },
      {
        type: 'quiz',
        q: 'What is the underground network of fungus threads called?',
        choices: ['Roots', 'Mycelium', 'Veins', 'Vines'],
        answer: 1,
        why: 'Mycelium can connect to tree roots and help pass water and nutrients through a forest.',
      },
      {
        type: 'quiz',
        q: 'What important job do fungi do in a forest?',
        choices: ['Make sunlight', 'Break down dead leaves and wood', 'Scare away animals', 'Make it rain'],
        answer: 1,
        why: 'Fungi are nature’s recyclers. They turn dead material back into nutrients for new plants.',
      },
      {
        type: 'sort',
        prompt: 'Which foods are made with help from fungi?',
        bins: [
          { id: 'yes', label: 'Made with fungi', hint: 'yeast or mold helps make it' },
          { id: 'no', label: 'No fungi needed', hint: 'grown or made without fungi' },
        ],
        items: [
          { emoji: '🍞', name: 'Bread', bin: 'yes' },
          { emoji: '🥢', name: 'Soy sauce', bin: 'yes' },
          { emoji: '🧀', name: 'Blue cheese', bin: 'yes' },
          { emoji: '🥕', name: 'Carrot', bin: 'no' },
          { emoji: '🍿', name: 'Popcorn', bin: 'no' },
          { emoji: '🥛', name: 'Milk', bin: 'no' },
        ],
        why: 'Yeast makes bread rise, a mold helps ferment soy sauce, and blue cheese gets its veins from mold.',
      },
      {
        type: 'quiz',
        q: 'Which famous medicine was discovered from a mold?',
        choices: ['Aspirin', 'Penicillin', 'Insulin', 'Vitamin C'],
        answer: 1,
        why: 'In 1928 Alexander Fleming noticed a mold killing bacteria in his lab. That led to penicillin, the first antibiotic.',
      },
      {
        type: 'quiz',
        q: 'You find a wild mushroom on a hike. What should you do?',
        choices: ['Eat it if it looks normal', 'Never eat it unless an expert says it’s safe', 'Taste a tiny bit', 'Feed it to a pet'],
        answer: 1,
        why: 'Some poisonous mushrooms look almost exactly like safe ones. Mycologists take photos and notes instead.',
      },
    ],
    learn: {
      does: 'Identifies fungi, grows them in the lab, and studies how they help make medicine, food, and healthy soil.',
      classes: ['Biology', 'Chemistry', 'Environmental science'],
      fact: 'One honey fungus in Oregon spreads underground across more than 2,000 acres, making it one of the largest living things on Earth.',
      link: { label: 'iNaturalist', url: 'https://www.inaturalist.org' },
    },
  },
  {
    id: 'herp',
    name: 'Herpetologist',
    emoji: '🦎',
    blurb: 'Studies reptiles and amphibians, like snakes, turtles, and frogs.',
    intro: 'Your field team is surveying a wetland. Identify animals, learn how they live, and check the pond’s health.',
    tasks: [
      {
        type: 'sort',
        prompt: 'Reptile or amphibian?',
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
      {
        type: 'quiz',
        q: 'Which of these is NOT a reptile?',
        choices: ['Crocodile', 'Gecko', 'Salamander', 'Tortoise'],
        answer: 2,
        why: 'Salamanders look like lizards, but they’re amphibians with smooth, moist skin.',
      },
      {
        type: 'order',
        prompt: 'A frog’s life cycle, first → last',
        items: ['Egg', 'Tadpole', 'Tadpole with legs', 'Froglet', 'Adult frog'],
        why: 'This big change is called metamorphosis. Tadpoles breathe with gills, and adult frogs breathe with lungs and skin.',
      },
      {
        type: 'quiz',
        q: 'Why do snakes flick their tongues?',
        choices: ['To taste the air and smell', 'To scare enemies', 'To cool down', 'To drink'],
        answer: 0,
        why: 'A snake’s tongue picks up scent particles and brings them to a special organ in its mouth.',
      },
      {
        type: 'quiz',
        q: 'Reptiles are “cold-blooded.” What does that mean?',
        choices: ['Their blood is cold', 'Their body heat depends on their surroundings', 'They only live in cold places', 'They never get warm'],
        answer: 1,
        why: 'That’s why lizards bask on warm rocks in the morning before they get moving.',
      },
      {
        type: 'sort',
        prompt: 'Where does each animal lay its eggs?',
        bins: [
          { id: 'water', label: 'In water', hint: 'ponds and streams' },
          { id: 'land', label: 'On land', hint: 'nests, sand, or soil' },
        ],
        items: [
          { name: 'Frog', bin: 'water' },
          { name: 'Toad', bin: 'water' },
          { name: 'Newt', bin: 'water' },
          { name: 'Sea turtle', bin: 'land' },
          { name: 'Crocodile', bin: 'land' },
          { name: 'Python', bin: 'land' },
        ],
        why: 'Even sea turtles crawl onto beaches to lay eggs, because reptile eggs have shells that need air.',
      },
      {
        type: 'quiz',
        q: 'Why do scientists check frogs to learn if a pond is healthy?',
        choices: ['Frogs are loud', 'Their thin skin soaks up pollution', 'Frogs clean the water', 'Frogs only live in clean ponds by choice'],
        answer: 1,
        why: 'Amphibians absorb things through their skin, so they often show problems in the water before other animals do.',
      },
      {
        type: 'quiz',
        q: 'Which reptile can live more than 100 years?',
        choices: ['Gecko', 'Garter snake', 'Giant tortoise', 'Chameleon'],
        answer: 2,
        why: 'A giant tortoise named Jonathan, living on the island of Saint Helena, was hatched around 1832.',
      },
      {
        type: 'quiz',
        q: 'Why do chameleons change color?',
        choices: ['Only to hide', 'Mostly to communicate and control their temperature', 'Because they’re sick', 'They can’t really'],
        answer: 1,
        why: 'Scientists found chameleons change color mostly to signal other chameleons and to warm up or cool down.',
      },
      {
        type: 'quiz',
        q: 'A tadpole grows up to become a…',
        choices: ['Fish', 'Frog', 'Lizard', 'Snake'],
        answer: 1,
        why: 'Tadpoles are baby frogs and toads.',
      },
    ],
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
    blurb: 'Invents secret codes that keep messages and passwords safe.',
    intro:
      'A Caesar cipher hides a message by shifting every letter forward in the alphabet. With a shift of 1, A becomes B and B becomes C. Crack codes and learn how real security works.',
    tasks: [
      {
        type: 'quiz',
        q: 'With a shift of 1, what does CAT become?',
        choices: ['BZS', 'DBU', 'CAT', 'ECV'],
        answer: 1,
        why: 'C→D, A→B, T→U. So CAT becomes DBU.',
      },
      {
        type: 'quiz',
        q: 'With a shift of 1, what does Z become?',
        choices: ['Y', 'A', 'Z', 'AA'],
        answer: 1,
        why: 'The alphabet wraps around, so after Z comes A again.',
      },
      {
        type: 'quiz',
        q: 'Decode this message. It used a shift of 1: BQQMF',
        choices: ['APPLE', 'CRRNG', 'AMPLE', 'BAGEL'],
        answer: 0,
        why: 'Shift each letter back by 1: B→A, Q→P, Q→P, M→L, F→E. APPLE!',
      },
      {
        type: 'quiz',
        q: 'Encode DOG with a shift of 2.',
        choices: ['EPH', 'FQI', 'FPI', 'GRJ'],
        answer: 1,
        why: 'D→F, O→Q, G→I. DOG becomes FQI.',
      },
      {
        type: 'quiz',
        q: 'This message used a shift of 3: KHOOR. What does it say?',
        choices: ['HELLO', 'HAPPY', 'HOUSE', 'KNOWS'],
        answer: 0,
        why: 'Shift each letter back by 3: K→H, H→E, O→L, O→L, R→O. HELLO!',
      },
      {
        type: 'quiz',
        q: 'Why are Caesar ciphers easy to break?',
        choices: ['They use numbers', 'There are only 25 possible shifts to try', 'They are written backwards', 'They need a computer'],
        answer: 1,
        why: 'You can just try every shift. Modern codes use math so hard that even supercomputers can’t guess them.',
      },
      {
        type: 'quiz',
        q: 'Code breakers look for the most common letter in a secret message. In English, which letter is used most?',
        choices: ['A', 'E', 'S', 'Z'],
        answer: 1,
        why: 'E is the most common letter in English. This trick is called frequency analysis.',
      },
      {
        type: 'order',
        prompt: 'Sending a secret message, first → last',
        items: ['Write the message', 'Encrypt it with a secret key', 'Send the scrambled message', 'The receiver decrypts it with the key', 'The receiver reads the message'],
        why: 'Anyone who intercepts the message in the middle only sees scrambled letters.',
      },
      {
        type: 'sort',
        prompt: 'Safe or not safe online?',
        bins: [
          { id: 'safe', label: 'Safe habit', hint: 'keeps accounts secure' },
          { id: 'unsafe', label: 'Not safe', hint: 'makes accounts easy to break into' },
        ],
        items: [
          { name: 'Using a long passphrase', bin: 'safe' },
          { name: 'Turning on two-step login', bin: 'safe' },
          { name: 'A different password for each account', bin: 'safe' },
          { name: 'Sharing your password with friends', bin: 'unsafe' },
          { name: 'Using your pet’s name as a password', bin: 'unsafe' },
          { name: 'The same password everywhere', bin: 'unsafe' },
        ],
        why: 'Long, unique passwords and two-step login make accounts much harder to break into.',
      },
      {
        type: 'quiz',
        q: 'Which password is the strongest?',
        choices: ['password', '123456', 'Pizza-Rocket-Lamp-92', 'abc'],
        answer: 2,
        why: 'Long passphrases made of random words are strong and still easy to remember.',
      },
    ],
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
    blurb: 'Designs how spaces sound, from concert halls to quiet classrooms.',
    intro: 'A school hired you to fix its noisy spaces and design a new music room. Learn how sound works and pick the right materials.',
    tasks: [
      {
        type: 'quiz',
        q: 'What is sound?',
        choices: ['A kind of light', 'Vibrations traveling through a material', 'Electricity in the air', 'A type of heat'],
        answer: 1,
        why: 'Sound is made when something vibrates and pushes on the air (or water, or walls) around it.',
      },
      {
        type: 'quiz',
        q: 'Why is space completely silent?',
        choices: ['It’s too cold', 'There’s no air to carry sound', 'Astronauts wear helmets', 'Sound is too slow'],
        answer: 1,
        why: 'Sound needs something to travel through. Space is almost empty, so there’s nothing to vibrate.',
      },
      {
        type: 'quiz',
        q: 'Where does sound travel fastest?',
        choices: ['Air', 'Water', 'Outer space', 'It’s the same everywhere'],
        answer: 1,
        why: 'Sound travels about four times faster in water than in air, because the particles are packed closer together.',
      },
      {
        type: 'quiz',
        q: 'What unit measures how loud a sound is?',
        choices: ['Meters', 'Watts', 'Decibels', 'Hertz'],
        answer: 2,
        why: 'Decibels (dB) measure loudness.',
      },
      {
        type: 'quiz',
        q: 'What unit measures pitch, or how high or low a sound is?',
        choices: ['Hertz', 'Decibels', 'Volts', 'Grams'],
        answer: 0,
        why: 'Hertz counts vibrations per second. Higher numbers mean higher pitch.',
      },
      {
        type: 'order',
        prompt: 'Quietest → loudest',
        items: ['Whisper', 'Normal talking', 'Lawn mower', 'Rock concert', 'Jet engine up close'],
        why: 'Every 10 dB louder sounds about twice as loud to our ears.',
      },
      {
        type: 'sort',
        prompt: 'Does this material soak up sound or bounce it back?',
        bins: [
          { id: 'absorb', label: 'Absorbs sound', hint: 'soft and squishy' },
          { id: 'reflect', label: 'Reflects sound', hint: 'hard and smooth' },
        ],
        items: [
          { name: 'Curtains', bin: 'absorb' },
          { name: 'Carpet', bin: 'absorb' },
          { name: 'Foam panels', bin: 'absorb' },
          { name: 'Tile floor', bin: 'reflect' },
          { name: 'Glass window', bin: 'reflect' },
          { name: 'Concrete wall', bin: 'reflect' },
        ],
        why: 'Hard, smooth surfaces bounce sound and cause echoes. Soft materials soak it up.',
      },
      {
        type: 'quiz',
        q: 'The new music room has loud echoes. What should you add?',
        choices: ['More glass windows', 'Soft foam panels on the walls', 'A tile floor', 'Metal ceiling'],
        answer: 1,
        why: 'Soft, squishy materials soak up sound waves instead of bouncing them back.',
      },
      {
        type: 'quiz',
        chart: noiseChart,
        q: 'You measured noise around the school. Which space is the loudest?',
        choices: ['Library', 'Hall', 'Lunch', 'Gym'],
        answer: 3,
        why: 'The gym has the tallest bar at 92 dB.',
      },
      {
        type: 'quiz',
        chart: noiseChart,
        q: 'Hours of noise at 85 dB or more can harm hearing. Which spaces reach that level?',
        choices: ['Library and Class', 'Class and Hall', 'Lunch and Gym', 'Only the Library'],
        answer: 2,
        why: 'The lunchroom (85 dB) and gym (92 dB) are the spaces that most need sound treatment.',
      },
    ],
    learn: {
      does: 'Measures noise, builds computer models of rooms, and picks materials that make spaces sound right.',
      classes: ['Physics', 'Math', 'Music'],
      fact: 'Some concert halls are shaped and tuned so carefully that a musician playing softly on stage can be heard in the back row.',
      link: { label: 'Exploratorium Science Snacks', url: 'https://www.exploratorium.edu/snacks' },
    },
  },
  {
    id: 'dendro',
    name: 'Dendrochronologist',
    emoji: '🌳',
    blurb: 'Reads tree rings to uncover the history of climate, fires, and droughts.',
    intro: 'You took core samples from old trees without hurting them. Read the rings to uncover the forest’s history.',
    tasks: [
      {
        type: 'quiz',
        q: 'What tool takes a thin sample from a tree without cutting it down?',
        choices: ['Chainsaw', 'Increment borer', 'Hammer', 'Shovel'],
        answer: 1,
        why: 'An increment borer pulls out a pencil-thin core, and the tree keeps growing.',
      },
      {
        type: 'quiz',
        q: 'A tree grows one ring each year. Your sample has 85 rings. How old is the tree?',
        choices: ['8 years', '85 years', '170 years', '850 years'],
        answer: 1,
        why: 'One ring per year, so 85 rings means the tree is about 85 years old.',
      },
      {
        type: 'quiz',
        q: 'One ring is much wider than the others. What does that probably mean?',
        choices: ['A great growing year with lots of rain', 'A very dry year', 'The tree was cut', 'Nothing at all'],
        answer: 0,
        why: 'Trees grow more in good years, so wide rings usually mean plenty of water and sunlight.',
      },
      {
        type: 'quiz',
        q: 'A group of very thin rings in a row probably shows…',
        choices: ['A flood', 'A drought', 'A heat wave in winter', 'A new forest'],
        answer: 1,
        why: 'Thin rings mean the tree barely grew, which often happens during dry years.',
      },
      {
        type: 'quiz',
        chart: ringChart,
        q: 'You measured the last five rings. Which year was probably the driest?',
        choices: ['2016', '2017', '2018', '2020'],
        answer: 2,
        why: '2018 had the thinnest ring, at just 1 mm.',
      },
      {
        type: 'quiz',
        chart: ringChart,
        q: 'Which year did the tree grow the most?',
        choices: ['2016', '2018', '2019', '2020'],
        answer: 3,
        why: '2020 had the widest ring, at 5 mm.',
      },
      {
        type: 'quiz',
        q: 'A ring has a dark scar on one side. What probably happened that year?',
        choices: ['A wildfire', 'A snowstorm', 'A birthday', 'An earthquake'],
        answer: 0,
        why: 'Fires leave burn scars that the tree grows over, so scientists can count exactly when past fires happened.',
      },
      {
        type: 'sort',
        prompt: 'Can tree rings tell us this?',
        bins: [
          { id: 'can', label: 'Rings can tell us', hint: 'recorded in the wood' },
          { id: 'cant', label: 'Rings can’t tell us', hint: 'not recorded in the wood' },
        ],
        items: [
          { name: 'How old the tree is', bin: 'can' },
          { name: 'Which years were dry', bin: 'can' },
          { name: 'When past fires happened', bin: 'can' },
          { name: 'Who planted the tree', bin: 'cant' },
          { name: 'Next year’s weather', bin: 'cant' },
          { name: 'What color its leaves were', bin: 'cant' },
        ],
        why: 'Rings record what happened to the tree each year, but not things outside the wood or in the future.',
      },
      {
        type: 'quiz',
        q: 'Why do scientists match ring patterns between living trees and old wooden beams?',
        choices: ['To make furniture', 'To find out exactly when the old wood grew', 'To count leaves', 'To measure height'],
        answer: 1,
        why: 'Matching patterns, called cross-dating, lets scientists build timelines thousands of years long.',
      },
      {
        type: 'quiz',
        q: 'Which kind of tree includes some of the oldest living trees on Earth?',
        choices: ['Palm tree', 'Bristlecone pine', 'Apple tree', 'Birch'],
        answer: 1,
        why: 'Some bristlecone pines in California are more than 4,800 years old, older than the Egyptian pyramids.',
      },
    ],
    learn: {
      does: 'Collects tree samples, measures rings under a microscope, and matches patterns to date old wood and past climates.',
      classes: ['Biology', 'Earth science', 'Statistics'],
      fact: 'Tree rings helped scientists learn about long droughts in the American Southwest hundreds of years ago.',
      link: { label: 'UCAR Center for Science Education', url: 'https://scied.ucar.edu' },
    },
  },
];
