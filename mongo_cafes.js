db.cafes.remove ({})

db.cafes.insertMany ([
  {
    _id: "bobs",
    name: "Bob's Cafe",
    seats: 16,
    vegan: false,
    open_late: true,
    hygiene_rating: 1,
    specials: ["sausages", "bacon", "cheese toasties"]
  },
  {
    _id: "daves",
    name: "Dave's Cafe",
    seats: 22,
    vegan: false,
    specials: ["spam", "lobster", "mushroom soup"]
  },
  {
    _id: "sandras",
    name: "Sandra's House of Vegan",
    seats: 36,
    vegan: true,
    town_centre: false,
    hygiene_rating: 5,
    specials: ["tofu", "beans", "vegan toasties", "leek pate"]
  },
  {
    _id: "big_steaks",
    name: "Big Steaks",
    seats: 320,
    vegan: false,
    town_centre: true,
    hygiene_rating: 4,
    specials: ["steak"]
  },
  {
    _id: "da_hudds",
    name: "Da Hudds Pizza",
    seats: 30,
    vegan: true,
    town_centre: true,
    specials: ["pizza", "pasta", "garlic bread", "cheese sticks"]
  },
  {
    _id: "geoffs",
    name: "Geoff's Greasey Spoon",
    seats: 12,
    vegan: false,
    town_centre: true,
    specials: ["breakfast", "tea"]
  },
  {
    _id: "pollys",
    name: "Polly's Pizza Parlour",
    seats: 50,
    vegan: false,
    town_centre: true,
    hygiene_rating: 3,
    specials: ["pizza", "garlic bread"]
  },
  {
    _id: "spicy",
    name: "Spicy Times",
    seats: 27,
    vegan: false,
    hygiene_rating: 3,
    specials: ["curry", "naan bread"]
  },
  {
    _id: "jades",
    name: "Jade's Chinese Corner Cafe",
    seats: 22,
    vegan: false,
    town_centre: true,
    specials: ["fried rice", "sweet and sour chicken"]
  },
  {
    _id: "mcdermotts",
    name: "McDermott Fast Food",
    seats: 300,
    vegan: true,
    town_centre: true,
    specials: ["hamburgers", "cheese burgers", "chicken burgers"]
  },
  {
    _id: "sams",
    name: "Sam's Sandwiches",
    vegan: false,
    town_centre: true,
    specials: ["sandwiches"]
  },
])
