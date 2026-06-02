
import { WordCard } from "./types";

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  emoji: string;
  gradient: string; // Tailwind gradient classes
}

export const CATEGORIES_LIST: CategoryInfo[] = [
  { id: "Bollywood", name: "Bollywood", description: "Iconic movies, superstars, and epic songs", emoji: "🎬", gradient: "from-pink-500 to-rose-600" },
  { id: "Indian Food", name: "Indian Food", description: "Spicy street food, classic curries & sweets", emoji: "🍛", gradient: "from-amber-500 to-orange-600" },
  { id: "IPL & Cricket", name: "IPL & Cricket", description: "Sixes, teams, legendary stadiums & players", emoji: "🏏", gradient: "from-blue-500 to-sky-600" },
  { id: "Indian Memes", name: "Indian Memes", description: "Viral social clips, characters & classic quotes", emoji: "😂", gradient: "from-purple-500 to-indigo-600" },
  { id: "Indian Cities", name: "Indian Cities", description: "Nicknames, famous monuments & landmarks", emoji: "✨", gradient: "from-yellow-400 to-amber-600" },
  { id: "TV Serials", name: "TV Serials", description: "Dramatic daily soaps, famous mother-in-laws", emoji: "📺", gradient: "from-teal-500 to-emerald-600" },
  { id: "Indian Brands", name: "Indian Brands", description: "Household companies and legacy stores", emoji: "🛍️", gradient: "from-indigo-500 to-cyan-600" },
  { id: "Indian Celebrities", name: "Indian Celebrities", description: "Popular actors, streamers, and stars", emoji: "🌟", gradient: "from-fuchsia-500 to-pink-600" },
  { id: "Mythology", name: "Mythology", description: "Epics, festivals, gods and legends", emoji: "🪔", gradient: "from-orange-400 to-red-500" },
  { id: "Tech & Startup India", name: "Tech & Startups", description: "Unicorn companies, tech-hubs, and tech jargon", emoji: "🚀", gradient: "from-cyan-500 to-blue-600" },
  { id: "Gen-Z India Slang", name: "Gen-Z India Slang", description: "Colloquial phrases, modern texting slang", emoji: "💅", gradient: "from-violet-500 to-fuchsia-600" },
  { id: "Family-Safe Politics", name: "Local Politics & Civics", description: "Elections, PMs, parliament & state terms", emoji: "🗳️", gradient: "from-red-500 to-rose-700" }
];

export const WORD_CARDS_DATABASE: WordCard[] = [
  {
    "id": "w1",
    "word": "PK",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w2",
    "word": "Dangal",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w3",
    "word": "Bajrangi Bhaijaan",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w4",
    "word": "Sultan",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w5",
    "word": "Padmaavat",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w6",
    "word": "Sanju",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w7",
    "word": "War",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w8",
    "word": "Tiger Zinda Hai",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w9",
    "word": "Kabir Singh",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w10",
    "word": "Uri",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w11",
    "word": "Krrish 3",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w12",
    "word": "Chennai Express",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w13",
    "word": "Kick",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w14",
    "word": "Happy New Year",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w15",
    "word": "Ek Tha Tiger",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w16",
    "word": "Yeh Jawaani Hai Deewani",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w17",
    "word": "Bang Bang",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w18",
    "word": "Bodyguard",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w19",
    "word": "Prem Ratan Dhan Payo",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w20",
    "word": "Dilwale",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w21",
    "word": "Simmba",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w22",
    "word": "Race 3",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w23",
    "word": "Dhoom 3",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w24",
    "word": "Golmaal Again",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w25",
    "word": "Good Newwz",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w26",
    "word": "KGF",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w27",
    "word": "Baahubali",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w28",
    "word": "RRR",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w29",
    "word": "Pushpa",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w30",
    "word": "Chhichhore",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w31",
    "word": "Super 30",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w32",
    "word": "Gully Boy",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w33",
    "word": "Raazi",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w34",
    "word": "Andhadhun",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w35",
    "word": "Badhaai Ho",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w36",
    "word": "Pink",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w37",
    "word": "Queen",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w38",
    "word": "Kahaani",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w39",
    "word": "Barfi",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w40",
    "word": "Piku",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w41",
    "word": "Drishyam",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w42",
    "word": "Article 15",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w43",
    "word": "Tumbbad",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w44",
    "word": "Stree",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w45",
    "word": "Ludo",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w46",
    "word": "Mimi",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w47",
    "word": "Shershaah",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w48",
    "word": "Sardar Udham",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w49",
    "word": "Gangubai Kathiawadi",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w50",
    "word": "Brahmastra",
    "category": "Bollywood",
    "restricted": [
      "Movie",
      "Actor",
      "Song",
      "Hero",
      "Dance"
    ]
  },
  {
    "id": "w51",
    "word": "Samosa",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w52",
    "word": "Pakora",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w53",
    "word": "Aloo Tikki",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w54",
    "word": "Papdi Chaat",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w55",
    "word": "Dahi Puri",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w56",
    "word": "Bhel Puri",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w57",
    "word": "Pav Bhaji",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w58",
    "word": "Misal Pav",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w59",
    "word": "Vada Pav",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w60",
    "word": "Keema Pav",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w61",
    "word": "Kathi Roll",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w62",
    "word": "Frankie",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w63",
    "word": "Momos",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w64",
    "word": "Chowmein",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w65",
    "word": "Spring Roll",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w66",
    "word": "Manchurian",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w67",
    "word": "Chilli Chicken",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w68",
    "word": "Dhokla",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w69",
    "word": "Khandvi",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w70",
    "word": "Fafda",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w71",
    "word": "Thepla",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w72",
    "word": "Khakhra",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w73",
    "word": "Poha",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w74",
    "word": "Upma",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w75",
    "word": "Idli",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w76",
    "word": "Medu Vada",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w77",
    "word": "Uttapam",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w78",
    "word": "Appam",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w79",
    "word": "Puttu",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w80",
    "word": "Dosa",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w81",
    "word": "Rasam",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w82",
    "word": "Sambar",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w83",
    "word": "Dal Makhani",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w84",
    "word": "Palak Paneer",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w85",
    "word": "Shahi Paneer",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w86",
    "word": "Matar Paneer",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w87",
    "word": "Malai Kofta",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w88",
    "word": "Dum Aloo",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w89",
    "word": "Aloo Gobi",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w90",
    "word": "Bhindi Masala",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w91",
    "word": "Baingan Bharta",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w92",
    "word": "Chana Masala",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w93",
    "word": "Rajma Chawal",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w94",
    "word": "Kadhi Pakora",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w95",
    "word": "Khichdi",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w96",
    "word": "Pulao",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w97",
    "word": "Biryani",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w98",
    "word": "Naan",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w99",
    "word": "Roti",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w100",
    "word": "Paratha",
    "category": "Indian Food",
    "restricted": [
      "Eat",
      "Spicy",
      "Curry",
      "Sweet",
      "Dish"
    ]
  },
  {
    "id": "w101",
    "word": "Mumbai Indians",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w102",
    "word": "Chennai Super Kings",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w103",
    "word": "Royal Challengers Bangalore",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w104",
    "word": "Kolkata Knight Riders",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w105",
    "word": "Sunrisers Hyderabad",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w106",
    "word": "Delhi Capitals",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w107",
    "word": "Rajasthan Royals",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w108",
    "word": "Punjab Kings",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w109",
    "word": "Lucknow Super Giants",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w110",
    "word": "Gujarat Titans",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w111",
    "word": "Rohit Sharma",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w112",
    "word": "Virat Kohli",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w113",
    "word": "MS Dhoni",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w114",
    "word": "Jasprit Bumrah",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w115",
    "word": "Hardik Pandya",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w116",
    "word": "Ravindra Jadeja",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w117",
    "word": "KL Rahul",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w118",
    "word": "Rishabh Pant",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w119",
    "word": "Shreyas Iyer",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w120",
    "word": "Shikhar Dhawan",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w121",
    "word": "Shubman Gill",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w122",
    "word": "Suryakumar Yadav",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w123",
    "word": "Ishan Kishan",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w124",
    "word": "Sanju Samson",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w125",
    "word": "Ruturaj Gaikwad",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w126",
    "word": "Gautam Gambhir",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w127",
    "word": "Yuvraj Singh",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w128",
    "word": "Virender Sehwag",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w129",
    "word": "Zaheer Khan",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w130",
    "word": "Harbhajan Singh",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w131",
    "word": "Suresh Raina",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w132",
    "word": "Lasith Malinga",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w133",
    "word": "AB de Villiers",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w134",
    "word": "Chris Gayle",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w135",
    "word": "Kieron Pollard",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w136",
    "word": "Sunil Narine",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w137",
    "word": "Andre Russell",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w138",
    "word": "Rashid Khan",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w139",
    "word": "David Warner",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w140",
    "word": "Kane Williamson",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w141",
    "word": "Jos Buttler",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w142",
    "word": "Ben Stokes",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w143",
    "word": "Trent Boult",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w144",
    "word": "Kagiso Rabada",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w145",
    "word": "Pat Cummins",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w146",
    "word": "Mitchell Starc",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w147",
    "word": "Glenn Maxwell",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w148",
    "word": "Faf du Plessis",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w149",
    "word": "Quinton de Kock",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w150",
    "word": "Jofra Archer",
    "category": "IPL & Cricket",
    "restricted": [
      "Bat",
      "Ball",
      "Match",
      "Runs",
      "Wicket"
    ]
  },
  {
    "id": "w151",
    "word": "Babu Rao",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w152",
    "word": "Hera Pheri",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w153",
    "word": "Welcome",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w154",
    "word": "Majnu Bhai",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w155",
    "word": "Uday Shetty",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w156",
    "word": "Dhamaal",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w157",
    "word": "Golmaal",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w158",
    "word": "Mirzapur",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w159",
    "word": "Kaleen Bhaiya",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w160",
    "word": "Guddu Pandit",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w161",
    "word": "Munna Bhaiya",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w162",
    "word": "Sacred Games",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w163",
    "word": "Gaitonde",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w164",
    "word": "Family Man",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w165",
    "word": "Chellam Sir",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w166",
    "word": "Panchayat",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w167",
    "word": "Binod",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w168",
    "word": "Jal Lijiye",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w169",
    "word": "Pawri Ho Rahi Hai",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w170",
    "word": "Shweta Your Mic Is On",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w171",
    "word": "Rasode Mein Kaun Tha",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w172",
    "word": "Kya Karu Main Itni Sundar Hu",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w173",
    "word": "Gormint Aunty",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w174",
    "word": "Kamlesh",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w175",
    "word": "Land Kara De",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w176",
    "word": "O Bhai Maaro Mujhe Maaro",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w177",
    "word": "Aurat Ka Chakkar",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w178",
    "word": "Bhaisaab Ye Kis Line Mein Aa Gaye",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w179",
    "word": "Zor Zor Se Bolke",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w180",
    "word": "Chhoti Bachi Ho Kya",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w181",
    "word": "Samajh Rahe Ho",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w182",
    "word": "Control Uday Control",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w183",
    "word": "Aap Convince Ho Gaye Ya",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w184",
    "word": "Paisa Hi Paisa Hoga",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w185",
    "word": "Mast Plan Hai",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w186",
    "word": "Ye Baburao Ka Style Hai",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w187",
    "word": "Arre Kehna Kya Chahte Ho",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w188",
    "word": "Gajab Beizzati Hai",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w189",
    "word": "Jalwa Hai Hamara",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w190",
    "word": "Mera To Itna Life Kharab Ho Gaya",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w191",
    "word": "Tu Ja Re",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w192",
    "word": "Thukra Ke Mera Pyaar",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w193",
    "word": "Peeche Dekho",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w194",
    "word": "Dekh Rha Hai Binod",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w195",
    "word": "Moye Moye",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w196",
    "word": "Aayein",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w197",
    "word": "So Beautiful So Elegant",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w198",
    "word": "Just Looking Like A Wow",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w199",
    "word": "Bupender Jogi",
    "category": "Indian Memes",
    "restricted": [
      "Joke",
      "Funny",
      "Viral",
      "Laugh",
      "Video"
    ]
  },
  {
    "id": "w200",
    "word": "Mumbai",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w201",
    "word": "Delhi",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w202",
    "word": "Bengaluru",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w203",
    "word": "Kolkata",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w204",
    "word": "Chennai",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w205",
    "word": "Hyderabad",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w206",
    "word": "Pune",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w207",
    "word": "Ahmedabad",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w208",
    "word": "Surat",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w209",
    "word": "Jaipur",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w210",
    "word": "Lucknow",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w211",
    "word": "Kanpur",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w212",
    "word": "Nagpur",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w213",
    "word": "Indore",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w214",
    "word": "Thane",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w215",
    "word": "Bhopal",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w216",
    "word": "Visakhapatnam",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w217",
    "word": "Pimpri-Chinchwad",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w218",
    "word": "Patna",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w219",
    "word": "Vadodara",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w220",
    "word": "Ghaziabad",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w221",
    "word": "Ludhiana",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w222",
    "word": "Agra",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w223",
    "word": "Nashik",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w224",
    "word": "Faridabad",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w225",
    "word": "Meerut",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w226",
    "word": "Rajkot",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w227",
    "word": "Kalyan-Dombivli",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w228",
    "word": "Vasai-Virar",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w229",
    "word": "Varanasi",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w230",
    "word": "Srinagar",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w231",
    "word": "Aurangabad",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w232",
    "word": "Dhanbad",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w233",
    "word": "Amritsar",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w234",
    "word": "Navi Mumbai",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w235",
    "word": "Allahabad",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w236",
    "word": "Ranchi",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w237",
    "word": "Howrah",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w238",
    "word": "Coimbatore",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w239",
    "word": "Jabalpur",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w240",
    "word": "Gwalior",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w241",
    "word": "Vijayawada",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w242",
    "word": "Jodhpur",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w243",
    "word": "Madurai",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w244",
    "word": "Raipur",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w245",
    "word": "Kota",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w246",
    "word": "Guwahati",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w247",
    "word": "Chandigarh",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w248",
    "word": "Solapur",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w249",
    "word": "Hubli-Dharwad",
    "category": "Indian Cities",
    "restricted": [
      "State",
      "Capital",
      "Place",
      "Travel",
      "India"
    ]
  },
  {
    "id": "w250",
    "word": "Kyunki Saas Bhi Kabhi Bahu Thi",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w251",
    "word": "Kahaani Ghar Ghar Kii",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w252",
    "word": "Kasautii Zindagii Kay",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w253",
    "word": "Kumkum",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w254",
    "word": "Sanjivani",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w255",
    "word": "Jassi Jaissi Koi Nahin",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w256",
    "word": "Sarabhai vs Sarabhai",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w257",
    "word": "Khichdi",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w258",
    "word": "Baa Bahoo Aur Baby",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w259",
    "word": "Kasamh Se",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w260",
    "word": "Bidaai",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w261",
    "word": "Yeh Rishta Kya Kehlata Hai",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w262",
    "word": "Balika Vadhu",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w263",
    "word": "Pavitra Rishta",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w264",
    "word": "Uttaran",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w265",
    "word": "Bade Achhe Lagte Hain",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w266",
    "word": "Diya Aur Baati Hum",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w267",
    "word": "Sasural Simar Ka",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w268",
    "word": "Madhubala",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w269",
    "word": "Qubool Hai",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w270",
    "word": "Jodha Akbar",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w271",
    "word": "Ye Hai Mohabbatein",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w272",
    "word": "Kumkum Bhagya",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w273",
    "word": "Kundali Bhagya",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w274",
    "word": "Naagin",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w275",
    "word": "Anupamaa",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w276",
    "word": "Taarak Mehta Ka Ooltah Chashmah",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w277",
    "word": "Bhabiji Ghar Par Hain",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w278",
    "word": "CID",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w279",
    "word": "Aahat",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w280",
    "word": "Crime Patrol",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w281",
    "word": "Savdhaan India",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w282",
    "word": "Kaun Banega Crorepati",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w283",
    "word": "Bigg Boss",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w284",
    "word": "Indian Idol",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w285",
    "word": "Dance India Dance",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w286",
    "word": "Sa Re Ga Ma Pa",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w287",
    "word": "Khatron Ke Khiladi",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w288",
    "word": "Splitsvilla",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w289",
    "word": "Roadies",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w290",
    "word": "Comedy Nights with Kapil",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w291",
    "word": "Koffee With Karan",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w292",
    "word": "Shaktimaan",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w293",
    "word": "Mahabharat",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w294",
    "word": "Ramayan",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w295",
    "word": "Devon Ke Dev Mahadev",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w296",
    "word": "Chanakya",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w297",
    "word": "Byomkesh Bakshi",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w298",
    "word": "Malgudi Days",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w299",
    "word": "Flop Show",
    "category": "TV Serials",
    "restricted": [
      "Drama",
      "Episode",
      "Actor",
      "TV",
      "Show"
    ]
  },
  {
    "id": "w300",
    "word": "Tata",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w301",
    "word": "Reliance",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w302",
    "word": "Mahindra",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w303",
    "word": "Adani",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w304",
    "word": "Infosys",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w305",
    "word": "Wipro",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w306",
    "word": "TCS",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w307",
    "word": "HCL",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w308",
    "word": "L&T",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w309",
    "word": "Bajaj",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w310",
    "word": "Maruti Suzuki",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w311",
    "word": "Hero",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w312",
    "word": "TVS",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w313",
    "word": "Royal Enfield",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w314",
    "word": "Godrej",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w315",
    "word": "ITC",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w316",
    "word": "HUL",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w317",
    "word": "Amul",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w318",
    "word": "Parle",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w319",
    "word": "Britannia",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w320",
    "word": "Dabur",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w321",
    "word": "Patanjali",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w322",
    "word": "Haldiram's",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w323",
    "word": "Bikano",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w324",
    "word": "Bikanervala",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w325",
    "word": "Kissan",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w326",
    "word": "Maggi",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w327",
    "word": "Kurkure",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w328",
    "word": "Bingo",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w329",
    "word": "Paper Boat",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w330",
    "word": "Fabindia",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w331",
    "word": "Manyavar",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w332",
    "word": "Biba",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w333",
    "word": "W",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w334",
    "word": "Allen Solly",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w335",
    "word": "Peter England",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w336",
    "word": "Louis Philippe",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w337",
    "word": "Van Heusen",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w338",
    "word": "Raymond",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w339",
    "word": "Sabyasachi",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w340",
    "word": "Manish Malhotra",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w341",
    "word": "Lakme",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w342",
    "word": "Nykaa",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w343",
    "word": "Forest Essentials",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w344",
    "word": "Kama Ayurveda",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w345",
    "word": "Biotique",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w346",
    "word": "Himalaya",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w347",
    "word": "Vicco",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w348",
    "word": "Boroline",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w349",
    "word": "Fair & Lovely",
    "category": "Indian Brands",
    "restricted": [
      "Company",
      "Buy",
      "Product",
      "Shop",
      "Money"
    ]
  },
  {
    "id": "w350",
    "word": "Amitabh Bachchan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w351",
    "word": "Shah Rukh Khan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w352",
    "word": "Salman Khan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w353",
    "word": "Aamir Khan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w354",
    "word": "Akshay Kumar",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w355",
    "word": "Hrithik Roshan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w356",
    "word": "Ajay Devgn",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w357",
    "word": "Ranbir Kapoor",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w358",
    "word": "Ranveer Singh",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w359",
    "word": "Varun Dhawan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w360",
    "word": "Tiger Shroff",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w361",
    "word": "Kartik Aaryan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w362",
    "word": "Ayushmann Khurrana",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w363",
    "word": "Rajkummar Rao",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w364",
    "word": "Vicky Kaushal",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w365",
    "word": "Prabhas",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w366",
    "word": "Allu Arjun",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w367",
    "word": "Ram Charan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w368",
    "word": "Jr NTR",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w369",
    "word": "Yash",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w370",
    "word": "Rajnikanth",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w371",
    "word": "Kamal Haasan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w372",
    "word": "Vijay",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w373",
    "word": "Ajith",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w374",
    "word": "Suriya",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w375",
    "word": "Deepika Padukone",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w376",
    "word": "Priyanka Chopra",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w377",
    "word": "Katrina Kaif",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w378",
    "word": "Kareena Kapoor",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w379",
    "word": "Alia Bhatt",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w380",
    "word": "Anushka Sharma",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w381",
    "word": "Shraddha Kapoor",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w382",
    "word": "Kriti Sanon",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w383",
    "word": "Kiara Advani",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w384",
    "word": "Disha Patani",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w385",
    "word": "Samantha",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w386",
    "word": "Nayanthara",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w387",
    "word": "Trisha",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w388",
    "word": "Anushka Shetty",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w389",
    "word": "Keerthy Suresh",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w390",
    "word": "Lata Mangeshkar",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w391",
    "word": "Asha Bhosle",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w392",
    "word": "Kishore Kumar",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w393",
    "word": "Mohammed Rafi",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w394",
    "word": "Mukesh",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w395",
    "word": "Sonu Nigam",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w396",
    "word": "Shaan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w397",
    "word": "Udit Narayan",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w398",
    "word": "Kumar Sanu",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w399",
    "word": "Arijit Singh",
    "category": "Indian Celebrities",
    "restricted": [
      "Star",
      "Famous",
      "Actor",
      "Bollywood",
      "VIP"
    ]
  },
  {
    "id": "w400",
    "word": "Ram",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w401",
    "word": "Sita",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w402",
    "word": "Lakshman",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w403",
    "word": "Hanuman",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w404",
    "word": "Ravan",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w405",
    "word": "Bharat",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w406",
    "word": "Shatrughan",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w407",
    "word": "Dashrath",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w408",
    "word": "Kausalya",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w409",
    "word": "Kaikeyi",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w410",
    "word": "Sumitra",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w411",
    "word": "Urmila",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w412",
    "word": "Mandodari",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w413",
    "word": "Vibhishan",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w414",
    "word": "Kumbhakarna",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w415",
    "word": "Indrajit",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w416",
    "word": "Sugriva",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w417",
    "word": "Vali",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w418",
    "word": "Angad",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w419",
    "word": "Jambavan",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w420",
    "word": "Krishna",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w421",
    "word": "Arjun",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w422",
    "word": "Yudhishthir",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w423",
    "word": "Bhima",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w424",
    "word": "Nakul",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w425",
    "word": "Sahadev",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w426",
    "word": "Draupadi",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w427",
    "word": "Karna",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w428",
    "word": "Duryodhan",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w429",
    "word": "Dushasan",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w430",
    "word": "Bhisma",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w431",
    "word": "Drona",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w432",
    "word": "Kripa",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w433",
    "word": "Ashwatthama",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w434",
    "word": "Shakuni",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w435",
    "word": "Dhritarashtra",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w436",
    "word": "Gandhari",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w437",
    "word": "Kunti",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w438",
    "word": "Madri",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w439",
    "word": "Vidur",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w440",
    "word": "Brahma",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w441",
    "word": "Vishnu",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w442",
    "word": "Shiva",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w443",
    "word": "Saraswati",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w444",
    "word": "Lakshmi",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w445",
    "word": "Parvati",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w446",
    "word": "Ganesh",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w447",
    "word": "Kartikeya",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w448",
    "word": "Indra",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w449",
    "word": "Agni",
    "category": "Mythology",
    "restricted": [
      "God",
      "Demon",
      "Story",
      "Epic",
      "Temple"
    ]
  },
  {
    "id": "w450",
    "word": "Flipkart",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w451",
    "word": "Snapdeal",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w452",
    "word": "Myntra",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w453",
    "word": "Nykaa",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w454",
    "word": "Zomato",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w455",
    "word": "Swiggy",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w456",
    "word": "Ola",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w457",
    "word": "Uber",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w458",
    "word": "Paytm",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w459",
    "word": "PhonePe",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w460",
    "word": "Google Pay",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w461",
    "word": "BHIM",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w462",
    "word": "Cred",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w463",
    "word": "Zerodha",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w464",
    "word": "Groww",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w465",
    "word": "Upstox",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w466",
    "word": "PolicyBazaar",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w467",
    "word": "Digit",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w468",
    "word": "Acko",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w469",
    "word": "Oyo",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w470",
    "word": "MakeMyTrip",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w471",
    "word": "Yatra",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w472",
    "word": "ClearTrip",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w473",
    "word": "RedBus",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w474",
    "word": "Paytm Movies",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w475",
    "word": "BookMyShow",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w476",
    "word": "Inox",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w477",
    "word": "PVR",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w478",
    "word": "Cinepolis",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w479",
    "word": "Byjus",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w480",
    "word": "Unacademy",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w481",
    "word": "Vedantu",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w482",
    "word": "PhysicsWallah",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w483",
    "word": "UpGrad",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w484",
    "word": "Simplilearn",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w485",
    "word": "Eruditus",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w486",
    "word": "Delhivery",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w487",
    "word": "Dunzo",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w488",
    "word": "Zepto",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w489",
    "word": "Blinkit",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w490",
    "word": "BigBasket",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w491",
    "word": "Grofers",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w492",
    "word": "Licious",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w493",
    "word": "FreshToHome",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w494",
    "word": "CureFit",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w495",
    "word": "HealthifyMe",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w496",
    "word": "Practo",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w497",
    "word": "1mg",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w498",
    "word": "Netmeds",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w499",
    "word": "PharmEasy",
    "category": "Tech & Startup India",
    "restricted": [
      "App",
      "Company",
      "Tech",
      "Money",
      "Internet"
    ]
  },
  {
    "id": "w500",
    "word": "Lit",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w501",
    "word": "AF",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w502",
    "word": "GOAT",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w503",
    "word": "Savage",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w504",
    "word": "Slay",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w505",
    "word": "Yolo",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w506",
    "word": "Fomo",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w507",
    "word": "Jomo",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w508",
    "word": "OOTD",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w509",
    "word": "Vibe",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w510",
    "word": "Chill",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w511",
    "word": "Ghost",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w512",
    "word": "Simp",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w513",
    "word": "Flex",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w514",
    "word": "Salty",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w515",
    "word": "Cap",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w516",
    "word": "No Cap",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w517",
    "word": "Tea",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w518",
    "word": "Spill The Tea",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w519",
    "word": "Shade",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w520",
    "word": "Throw Shade",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w521",
    "word": "Stan",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w522",
    "word": "Cancel",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w523",
    "word": "Toxic",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w524",
    "word": "Red Flag",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w525",
    "word": "Green Flag",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w526",
    "word": "Catfish",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w527",
    "word": "Drip",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w528",
    "word": "Woke",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w529",
    "word": "Boomer",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w530",
    "word": "Millennial",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w531",
    "word": "Gen Z",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w532",
    "word": "Bruh",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w533",
    "word": "Dude",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w534",
    "word": "Bro",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w535",
    "word": "Bhai",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w536",
    "word": "Bantai",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w537",
    "word": "Machha",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w538",
    "word": "Maga",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w539",
    "word": "Mapla",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w540",
    "word": "Da",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w541",
    "word": "Poda",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w542",
    "word": "Dei",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w543",
    "word": "Otha",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w544",
    "word": "Goyya",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w545",
    "word": "Lmao",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w546",
    "word": "Lol",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w547",
    "word": "Rofl",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w548",
    "word": "Smh",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w549",
    "word": "Idk",
    "category": "Gen-Z India Slang",
    "restricted": [
      "Word",
      "Say",
      "Youth",
      "Cool",
      "Meaning"
    ]
  },
  {
    "id": "w550",
    "word": "Lok Sabha",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w551",
    "word": "Rajya Sabha",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w552",
    "word": "Vidhan Sabha",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w553",
    "word": "Vidhan Parishad",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w554",
    "word": "Parliament",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w555",
    "word": "Assembly",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w556",
    "word": "Panchayat",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w557",
    "word": "Municipality",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w558",
    "word": "Corporation",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w559",
    "word": "Mayor",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w560",
    "word": "Sarpanch",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w561",
    "word": "Pradhan",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w562",
    "word": "MLA",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w563",
    "word": "MP",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w564",
    "word": "CM",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w565",
    "word": "PM",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w566",
    "word": "President",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w567",
    "word": "Vice President",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w568",
    "word": "Governor",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w569",
    "word": "Lieutenant Governor",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w570",
    "word": "Election",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w571",
    "word": "Voting",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w572",
    "word": "Ballot",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w573",
    "word": "EVM",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w574",
    "word": "VVPAT",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w575",
    "word": "NOTA",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w576",
    "word": "Manifesto",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w577",
    "word": "Campaign",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w578",
    "word": "Rally",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w579",
    "word": "Protest",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w580",
    "word": "Strike",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w581",
    "word": "Bandh",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w582",
    "word": "Dharna",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w583",
    "word": "Gherao",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w584",
    "word": "Morcha",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w585",
    "word": "Chakka Jam",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w586",
    "word": "Fast",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w587",
    "word": "Hunger Strike",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w588",
    "word": "Curfew",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w589",
    "word": "Section 144",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w590",
    "word": "FIR",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w591",
    "word": "Police",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w592",
    "word": "Court",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w593",
    "word": "Judge",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w594",
    "word": "Lawyer",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w595",
    "word": "Jail",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w596",
    "word": "Bail",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w597",
    "word": "Acquittal",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w598",
    "word": "Conviction",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  },
  {
    "id": "w599",
    "word": "Appeal",
    "category": "Family-Safe Politics",
    "restricted": [
      "Government",
      "Vote",
      "Election",
      "Leader",
      "Party"
    ]
  }
];
