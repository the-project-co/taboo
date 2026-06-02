const fs = require('fs');

const categories = [
  "Bollywood", "Indian Food", "IPL & Cricket", "Indian Memes", "Indian Cities",
  "TV Serials", "Indian Brands", "Indian Celebrities", "Mythology", "Tech & Startup India",
  "Gen-Z India Slang", "Family-Safe Politics"
];

const wordsDB = [];
let idCounter = 1;

const catRestricted = {
  "Bollywood": ["Movie", "Actor", "Song", "Hero", "Dance"],
  "Indian Food": ["Eat", "Spicy", "Curry", "Sweet", "Dish"],
  "IPL & Cricket": ["Bat", "Ball", "Match", "Runs", "Wicket"],
  "Indian Memes": ["Joke", "Funny", "Viral", "Laugh", "Video"],
  "Indian Cities": ["State", "Capital", "Place", "Travel", "India"],
  "TV Serials": ["Drama", "Episode", "Actor", "TV", "Show"],
  "Indian Brands": ["Company", "Buy", "Product", "Shop", "Money"],
  "Indian Celebrities": ["Star", "Famous", "Actor", "Bollywood", "VIP"],
  "Mythology": ["God", "Demon", "Story", "Epic", "Temple"],
  "Tech & Startup India": ["App", "Company", "Tech", "Money", "Internet"],
  "Gen-Z India Slang": ["Word", "Say", "Youth", "Cool", "Meaning"],
  "Family-Safe Politics": ["Government", "Vote", "Election", "Leader", "Party"]
};

function gen(category, words) {
  words.forEach(w => {
    wordsDB.push({
      id: "w" + idCounter++,
      word: w,
      category,
      restricted: catRestricted[category] || ["Word1", "Word2", "Word3", "Word4", "Word5"]
    });
  });
}

// 50 words per category
gen("Bollywood", ["PK", "Dangal", "Bajrangi Bhaijaan", "Sultan", "Padmaavat", "Sanju", "War", "Tiger Zinda Hai", "Kabir Singh", "Uri", "Krrish 3", "Chennai Express", "Kick", "Happy New Year", "Ek Tha Tiger", "Yeh Jawaani Hai Deewani", "Bang Bang", "Bodyguard", "Prem Ratan Dhan Payo", "Dilwale", "Simmba", "Race 3", "Dhoom 3", "Golmaal Again", "Good Newwz", "KGF", "Baahubali", "RRR", "Pushpa", "Chhichhore", "Super 30", "Gully Boy", "Raazi", "Andhadhun", "Badhaai Ho", "Pink", "Queen", "Kahaani", "Barfi", "Piku", "Drishyam", "Article 15", "Tumbbad", "Stree", "Ludo", "Mimi", "Shershaah", "Sardar Udham", "Gangubai Kathiawadi", "Brahmastra"]);
gen("Indian Food", ["Samosa", "Pakora", "Aloo Tikki", "Papdi Chaat", "Dahi Puri", "Bhel Puri", "Pav Bhaji", "Misal Pav", "Vada Pav", "Keema Pav", "Kathi Roll", "Frankie", "Momos", "Chowmein", "Spring Roll", "Manchurian", "Chilli Chicken", "Dhokla", "Khandvi", "Fafda", "Thepla", "Khakhra", "Poha", "Upma", "Idli", "Medu Vada", "Uttapam", "Appam", "Puttu", "Dosa", "Rasam", "Sambar", "Dal Makhani", "Palak Paneer", "Shahi Paneer", "Matar Paneer", "Malai Kofta", "Dum Aloo", "Aloo Gobi", "Bhindi Masala", "Baingan Bharta", "Chana Masala", "Rajma Chawal", "Kadhi Pakora", "Khichdi", "Pulao", "Biryani", "Naan", "Roti", "Paratha"]);
gen("IPL & Cricket", ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore", "Kolkata Knight Riders", "Sunrisers Hyderabad", "Delhi Capitals", "Rajasthan Royals", "Punjab Kings", "Lucknow Super Giants", "Gujarat Titans", "Rohit Sharma", "Virat Kohli", "MS Dhoni", "Jasprit Bumrah", "Hardik Pandya", "Ravindra Jadeja", "KL Rahul", "Rishabh Pant", "Shreyas Iyer", "Shikhar Dhawan", "Shubman Gill", "Suryakumar Yadav", "Ishan Kishan", "Sanju Samson", "Ruturaj Gaikwad", "Gautam Gambhir", "Yuvraj Singh", "Virender Sehwag", "Zaheer Khan", "Harbhajan Singh", "Suresh Raina", "Lasith Malinga", "AB de Villiers", "Chris Gayle", "Kieron Pollard", "Sunil Narine", "Andre Russell", "Rashid Khan", "David Warner", "Kane Williamson", "Jos Buttler", "Ben Stokes", "Trent Boult", "Kagiso Rabada", "Pat Cummins", "Mitchell Starc", "Glenn Maxwell", "Faf du Plessis", "Quinton de Kock", "Jofra Archer"]);
gen("Indian Memes", ["Babu Rao", "Hera Pheri", "Welcome", "Majnu Bhai", "Uday Shetty", "Dhamaal", "Golmaal", "Mirzapur", "Kaleen Bhaiya", "Guddu Pandit", "Munna Bhaiya", "Sacred Games", "Gaitonde", "Family Man", "Chellam Sir", "Panchayat", "Binod", "Jal Lijiye", "Pawri Ho Rahi Hai", "Shweta Your Mic Is On", "Rasode Mein Kaun Tha", "Kya Karu Main Itni Sundar Hu", "Gormint Aunty", "Kamlesh", "Land Kara De", "O Bhai Maaro Mujhe Maaro", "Aurat Ka Chakkar", "Bhaisaab Ye Kis Line Mein Aa Gaye", "Zor Zor Se Bolke", "Chhoti Bachi Ho Kya", "Samajh Rahe Ho", "Control Uday Control", "Aap Convince Ho Gaye Ya", "Paisa Hi Paisa Hoga", "Mast Plan Hai", "Ye Baburao Ka Style Hai", "Arre Kehna Kya Chahte Ho", "Gajab Beizzati Hai", "Jalwa Hai Hamara", "Mera To Itna Life Kharab Ho Gaya", "Tu Ja Re", "Thukra Ke Mera Pyaar", "Peeche Dekho", "Dekh Rha Hai Binod", "Moye Moye", "Aayein", "So Beautiful So Elegant", "Just Looking Like A Wow", "Bupender Jogi"]);
gen("Indian Cities", ["Mumbai", "Delhi", "Bengaluru", "Kolkata", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubli-Dharwad"]);
gen("TV Serials", ["Kyunki Saas Bhi Kabhi Bahu Thi", "Kahaani Ghar Ghar Kii", "Kasautii Zindagii Kay", "Kumkum", "Sanjivani", "Jassi Jaissi Koi Nahin", "Sarabhai vs Sarabhai", "Khichdi", "Baa Bahoo Aur Baby", "Kasamh Se", "Bidaai", "Yeh Rishta Kya Kehlata Hai", "Balika Vadhu", "Pavitra Rishta", "Uttaran", "Bade Achhe Lagte Hain", "Diya Aur Baati Hum", "Sasural Simar Ka", "Madhubala", "Qubool Hai", "Jodha Akbar", "Ye Hai Mohabbatein", "Kumkum Bhagya", "Kundali Bhagya", "Naagin", "Anupamaa", "Taarak Mehta Ka Ooltah Chashmah", "Bhabiji Ghar Par Hain", "CID", "Aahat", "Crime Patrol", "Savdhaan India", "Kaun Banega Crorepati", "Bigg Boss", "Indian Idol", "Dance India Dance", "Sa Re Ga Ma Pa", "Khatron Ke Khiladi", "Splitsvilla", "Roadies", "Comedy Nights with Kapil", "Koffee With Karan", "Shaktimaan", "Mahabharat", "Ramayan", "Devon Ke Dev Mahadev", "Chanakya", "Byomkesh Bakshi", "Malgudi Days", "Flop Show"]);
gen("Indian Brands", ["Tata", "Reliance", "Mahindra", "Adani", "Infosys", "Wipro", "TCS", "HCL", "L&T", "Bajaj", "Maruti Suzuki", "Hero", "TVS", "Royal Enfield", "Godrej", "ITC", "HUL", "Amul", "Parle", "Britannia", "Dabur", "Patanjali", "Haldiram's", "Bikano", "Bikanervala", "Kissan", "Maggi", "Kurkure", "Bingo", "Paper Boat", "Fabindia", "Manyavar", "Biba", "W", "Allen Solly", "Peter England", "Louis Philippe", "Van Heusen", "Raymond", "Sabyasachi", "Manish Malhotra", "Lakme", "Nykaa", "Forest Essentials", "Kama Ayurveda", "Biotique", "Himalaya", "Vicco", "Boroline", "Fair & Lovely"]);
gen("Indian Celebrities", ["Amitabh Bachchan", "Shah Rukh Khan", "Salman Khan", "Aamir Khan", "Akshay Kumar", "Hrithik Roshan", "Ajay Devgn", "Ranbir Kapoor", "Ranveer Singh", "Varun Dhawan", "Tiger Shroff", "Kartik Aaryan", "Ayushmann Khurrana", "Rajkummar Rao", "Vicky Kaushal", "Prabhas", "Allu Arjun", "Ram Charan", "Jr NTR", "Yash", "Rajnikanth", "Kamal Haasan", "Vijay", "Ajith", "Suriya", "Deepika Padukone", "Priyanka Chopra", "Katrina Kaif", "Kareena Kapoor", "Alia Bhatt", "Anushka Sharma", "Shraddha Kapoor", "Kriti Sanon", "Kiara Advani", "Disha Patani", "Samantha", "Nayanthara", "Trisha", "Anushka Shetty", "Keerthy Suresh", "Lata Mangeshkar", "Asha Bhosle", "Kishore Kumar", "Mohammed Rafi", "Mukesh", "Sonu Nigam", "Shaan", "Udit Narayan", "Kumar Sanu", "Arijit Singh"]);
gen("Mythology", ["Ram", "Sita", "Lakshman", "Hanuman", "Ravan", "Bharat", "Shatrughan", "Dashrath", "Kausalya", "Kaikeyi", "Sumitra", "Urmila", "Mandodari", "Vibhishan", "Kumbhakarna", "Indrajit", "Sugriva", "Vali", "Angad", "Jambavan", "Krishna", "Arjun", "Yudhishthir", "Bhima", "Nakul", "Sahadev", "Draupadi", "Karna", "Duryodhan", "Dushasan", "Bhisma", "Drona", "Kripa", "Ashwatthama", "Shakuni", "Dhritarashtra", "Gandhari", "Kunti", "Madri", "Vidur", "Brahma", "Vishnu", "Shiva", "Saraswati", "Lakshmi", "Parvati", "Ganesh", "Kartikeya", "Indra", "Agni"]);
gen("Tech & Startup India", ["Flipkart", "Snapdeal", "Myntra", "Nykaa", "Zomato", "Swiggy", "Ola", "Uber", "Paytm", "PhonePe", "Google Pay", "BHIM", "Cred", "Zerodha", "Groww", "Upstox", "PolicyBazaar", "Digit", "Acko", "Oyo", "MakeMyTrip", "Yatra", "ClearTrip", "RedBus", "Paytm Movies", "BookMyShow", "Inox", "PVR", "Cinepolis", "Byjus", "Unacademy", "Vedantu", "PhysicsWallah", "UpGrad", "Simplilearn", "Eruditus", "Delhivery", "Dunzo", "Zepto", "Blinkit", "BigBasket", "Grofers", "Licious", "FreshToHome", "CureFit", "HealthifyMe", "Practo", "1mg", "Netmeds", "PharmEasy"]);
gen("Gen-Z India Slang", ["Lit", "AF", "GOAT", "Savage", "Slay", "Yolo", "Fomo", "Jomo", "OOTD", "Vibe", "Chill", "Ghost", "Simp", "Flex", "Salty", "Cap", "No Cap", "Tea", "Spill The Tea", "Shade", "Throw Shade", "Stan", "Cancel", "Toxic", "Red Flag", "Green Flag", "Catfish", "Drip", "Woke", "Boomer", "Millennial", "Gen Z", "Bruh", "Dude", "Bro", "Bhai", "Bantai", "Machha", "Maga", "Mapla", "Da", "Poda", "Dei", "Otha", "Goyya", "Lmao", "Lol", "Rofl", "Smh", "Idk"]);
gen("Family-Safe Politics", ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Vidhan Parishad", "Parliament", "Assembly", "Panchayat", "Municipality", "Corporation", "Mayor", "Sarpanch", "Pradhan", "MLA", "MP", "CM", "PM", "President", "Vice President", "Governor", "Lieutenant Governor", "Election", "Voting", "Ballot", "EVM", "VVPAT", "NOTA", "Manifesto", "Campaign", "Rally", "Protest", "Strike", "Bandh", "Dharna", "Gherao", "Morcha", "Chakka Jam", "Fast", "Hunger Strike", "Curfew", "Section 144", "FIR", "Police", "Court", "Judge", "Lawyer", "Jail", "Bail", "Acquittal", "Conviction", "Appeal"]);

const output = `
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

export const WORD_CARDS_DATABASE: WordCard[] = ${JSON.stringify(wordsDB, null, 2)};
`;

fs.writeFileSync('./src/categoriesData.ts', output);
