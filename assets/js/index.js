const questions = [
  {
    topic: "general knowledge",
    questions: [
      {
        question: "What is the capital of the Ireland?",
        possibilities: [" Dublin ", "Cork", "Belfast", "Galway"],
        answer: "Dublin",
      },
      {
        question: "Which currency is used in the Republic of Ireland?",
        possibilities: ["Pound", "Euro", "Dollar", "Yen"],
        answer: "Euro",
      },
      {
        question: "What is the national symbol of Ireland?",
        possibilities: ["Leprechaun", "Shamrock", "Harp", "Claddagh"],
        answer: "Harp",
      },
      {
        question: "What is the colour of the carpet in the Dáil chamber?",
        possibilities: ["red", "green", "blue", "yellow"],
        answer: "blue",
      },
      {
        question: "How many counties are there on the island of Ireland?",
        possibilities: ["12", "26", "32", "40"],
        answer: "32",
      },
      {
        question: "What is the Irish name for Ireland?",
        possibilities: ["Madra", "Eire", "Teach", "Ceathair"],
        answer: "Eire",
      },
      {
        question: "What is the most popular sport in Ireland?",
        possibilities: ["Tennis", "Gaelic Football", "Hurling", "Rugby"],
        answer: "Gaelic Football",
      },
      {
        question: "Which song by Ed Sheeran mentions an Irish city?",
        possibilities: [
          "Castle on the Hill",
          "Galway Girl",
          "Perfect",
          "Shape of You",
        ],
        answer: "Galway Girl",
      },
      {
        question: "What is Ireland’s biggest airline?",
        possibilities: [
          "Air France",
          "Ryanair",
          "Aer Lingus",
          "British Airways",
        ],
        answer: "Ryanair",
      },
      {
        question: "Who is the Saint Patron of Ireland?",
        possibilities: [
          "St. Bridget",
          "St. Patrick",
          "St. Brigid",
          "St. Peter",
        ],
        answer: "St. Patrick",
      },
    ],
  },
  {
    topic: "geography",
    questions: [
      {
        question: "What is the highest mountain in Ireland called?",
        possibilities: ["Aconcagua", "Denali", "Carrauntoohil", "Kilimanjaro"],
        answer: "Carrauntoohil",
      },
      {
        question: "Which is the name of the river in the centre of Dublin?",
        possibilities: ["Poddle", "Boyne", "River Liffey", "Barrow"],
        answer: "River Liffey",
      },
      {
        question: "What is the name of the largest lake in Ireland?",
        possibilities: [
          "Lough Corrib",
          "Lough Neagh",
          "Lough Derg",
          "Lower Lough Erne",
        ],
        answer: "Lough Neagh",
      },
      {
        question: "What is the longest river in Ireland?",
        possibilities: [
          "River Blackwater",
          "River Bann",
          "River Nore",
          "River Shannon",
        ],
        answer: "River Shannon",
      },
      {
        question:
          "Waht is the name of the longest drive in Ireland, which is 40km long?",
        possibilities: [
          "Causeway Coastal Route",
          "Wild Atlantic Way",
          "Pacific Coast Highway",
          "7 Route1",
        ],
        answer: "Wild Atlantic Way",
      },
      {
        question: "What is the tallest building on the island of Ireland?",
        possibilities: ["Liberty Hall", "Big Ben", "Obel Tower", "Elysian"],
        answer: "Obel Tower",
      },
      {
        question: "In what county is Newgrange located?",
        possibilities: ["Cavan", "Meath", "Westmeath", "Mayo"],
        answer: "Meath",
      },
      {
        question: "In which County is the Giants Causeway?",
        possibilities: ["Antrim", "Derry", "Armagh", "Fermanagh"],
        answer: "Antrim",
      },
      {
        question: "What are the Twelve Bens? ",
        possibilities: ["Mountains", "Rivers", "Lakes", "Books"],
        answer: "Mountains",
      },
      {
        question: "",
        possibilities: ["", "", "", ""],
        answer: "",
      },
    ],
  },
  {
    topic: "history",
    questions: [
      {
        question: "Which famous ship was built in Belfast?",
        possibilities: [
          "Queen Mary",
          "Titanic",
          "Queen Elizabeth",
          "Queen Victoria",
        ],
        answer: "Titanic",
      },
      {
        question: "Where was St. Patrick from? ",
        possibilities: ["Scotland", "England", "Wales", "Ireland"],
        answer: "Wales",
      },
      {
        question: "The Great Famine was caused by a shortage of which crops?",
        possibilities: [, "Wheat", "Potatoes", "Barley", "Rice"],
        answer: "Potatoes",
      },
      {
        question: "Which popular autumn celebration originated in Ireland?",
        possibilities: [
          "Halloween",
          "Christmas",
          "St. Patrick's Day",
          "Easter",
        ],
        answer: "Halloween",
      },
      {
        question: "What is Irelands nickname? ",
        possibilities: [
          "Emerald Isle",
          "The Emerald Island",
          "The Emerald Country",
          "The Emerald Republic",
        ],
        answer: "Emerald Isle",
      },
      {
        question: "What colours are in the flag of the Republic Of Ireland?",
        possibilities: [
          "Orange, White & Green",
          "Green, White & Orange",
          "Green, White & Blue",
          "Orange, White & Blue",
        ],
        answer: "Orange, White & Green",
      },
      {
        question: "How many players are in a gaelic football team?",
        possibilities: ["15", "11", "13", "17"],
        answer: "15",
      },
      {
        question: " Which Irish city is also known as the city of the tribes?",
        possibilities: ["Galway", "Dublin", "Cork", "Limerick"],
        answer: "Galway",
      },
      {
        question:
          "What does the circle in the centre of the Celtic cross represent? ",
        possibilities: ["The Moon", "The Sun", "The Earth", "The Stars"],
        answer: "The Sun",
      },
      {
        question: "By what other name is the Liffey Bridge in Dublin known as?",
        possibilities: [
          "The Penny Bridge",
          "The Ha'penny Bridge",
          "The Half Penny Bridge",
          "The Quarter Penny Bridge",
        ],
        answer: "The Ha'penny Bridge",
      },
    ],
  },
  {
    topic: "food",
    questions: [
      {
        question: "Which is the best selling Irish Whiskey in the world?",
        possibilities: ["Bushmills", "Jemeson", "Tullamore Dew", "Jameson"],
        answer: "Jemeson",
      },
      {
        question: "In which city can you find the Guinness Storehouse?",
        possibilities: ["Cork", "Galway", "Dublin", "Belfast"],
        answer: "Dublin",
      },
      {
        question: "What is the main ingredient in a boxty?",
        possibilities: ["Onion", "Carrot", "Potato", "Cabbage"],
        answer: "Potato",
      },
      {
        question: "What’s a turnover in Irish cuisine?",
        possibilities: ["bread", "roll", "pastry", "cake"],
        answer: "bread",
      },
      {
        question: "A traditional Irish stew contains which meat?",
        possibilities: ["Lamb", "Beef", "Pork", "Chicken"],
        answer: "Lamb",
      },
      {
        question:
          "To make an Irish coffee , what alcohol ingredient would you use? ",
        possibilities: ["vodka", "whiskey", "rum", "gin"],
        answer: "whiskey",
      },
      {
        question: "How many pints of Guinness are sold per day world wide?",
        possibilities: ["20 million", "10 million", "30 million", "40 million"],
        answer: "10 million",
      },
      {
        question: "What flavoured potato based snack was invented in Ireland?",
        possibilities: ["Chips", "Crisps", "Fries", "Bacon"],
        answer: "Crisps",
      },
      {
        question: "What fruit is Ireland the highest importer of in Europe?",
        possibilities: ["Bananas", "Apples", "Oranges", "Pears"],
        answer: "Bananas",
      },
      {
        question: "What colour is the pudding in Ireland?",
        possibilities: [
          "Black & White",
          "Green & White",
          "Red & White",
          "Blue & White",
        ],
        answer: "Black & White",
      },
    ],
  },
  {
    topic: "culture",
    questions: [
      {
        question:
          "In the legend of the Fianna, what was the Land of Eternal Youth?",
        possibilities: [
          "France",
          "Tír Na Nóg",
          "Lough Gur",
          "Kilcashel Stone Fort",
        ],
        answer: "Tír Na Nóg",
      },
      {
        question: "Which bird is said to be king of the birds?",
        possibilities: ["Owl", "Hawk", "Wren", "Eagle"],
        answer: "Wren",
      },
      {
        question: "Where do Leprechauns hide their pot of gold? ",
        possibilities: [
          "In a tree",
          "In a river",
          "At the end of a rainbow",
          "In a cave",
        ],
        answer: "At the end of a rainbow",
      },
      {
        question: "What is Irish Folklore called in Irish?",
        possibilities: ["Banshee", "Béaloideas", "Pooka", "Sí"],
        answer: "Béaloideas",
      },
      {
        question: "What is an Irish fairy called?",
        possibilities: ["Fear Gorta", "Aos Sí", "Leprechaun", "Banshee"],
        answer: "Aos Sí",
      },
      {
        question: "What does the Irish slang word Craic mean?",
        possibilities: ["Fun", "Party", "Misery", "Great"],
        answer: "Fun",
      },
      {
        question: "Who is U2 lead singer? ",
        possibilities: ["Bono", "The Edge", "Adam Clayton", "Larry Mullen"],
        answer: "Bono",
      },
      {
        question: "Where can you find the Book of Kells?",
        possibilities: [
          "Dublin Castle",
          "Trinity College",
          "The National Museum",
          "The National Library",
        ],
        answer: "Trinity College",
      },
      {
        question: "9. What did St Patrick chased them into the sea? ",
        possibilities: ["Snakes", "Leprechauns", "Wolves", "Bears"],
        answer: "Snakes",
      },
      {
        question: "What was Dublins Original Name? ",
        possibilities: ["Dubh Linn", "Dublin", "Dún Laoghaire", "Dún Dealgan"],
        answer: "Dubh Linn",
      },
    ],
  },
];

let wrongAnswers = 0;
let correctAnswers = 0;
let currentTopic = "general knowledge";

// Add topics to the DOM
const categoryList = document.querySelector("nav ul");
const questionArea = document.querySelector("#questions-area");
const scoreArea = document.querySelector("#score-area");
let correctBox = scoreArea.children[0];
let incorrectBox = scoreArea.children[1];
const question = questionArea.children[0];
const possibilities = questionArea.children[1];
