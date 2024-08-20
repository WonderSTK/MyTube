let nameList = [
  "Nova",
  "Ace",
  "Blaze",
  "Echo",
  "Jade",
  "Zephyr",
  "Quinn",
  "Kai",
  "Lux",
  "Raven",
  "Zara",
  "Ryder",
  "Phoenix",
  "Skye",
  "Storm",
  "Vega",
  "Lyric",
  "Ember",
  "Jett",
  "Sage",
  "River",
  "Aria",
  "Finn",
  "Luna",
  "Rogue",
  "Sable",
  "Axel",
  "Ash",
  "Nyx",
  "Orion",
  "Falcon",
  "Ivy",
  "Drake",
  "Maverick",
  "Willow",
  "Zane",
  "Hunter",
  "Briar",
  "Talon",
  "Celeste",
  "Rune",
  "Harper",
  "Onyx",
  "Zion",
  "Raiden",
  "Aurora",
  "Cypress",
  "Dax",
  "Emery",
  "Haven",
  "Juno",
  "Mistral",
  "Nyra",
  "Stormy",
  "Winter",
  "Zelda",
  "Aspen",
  "Frost",
  "Sparrow",
];

let complimentList = [
  "Nice one!",
  "Well done!",
  "Great job!",
  "Keep it up!",
  "Awesome!",
  "Fantastic!",
  "Brilliant!",
  "You're amazing!",
  "Cool!",
  "Love it!",
  "You rock!",
  "Nice work!",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomCompliment() {
  return complimentList[Math.floor(Math.random() * complimentList.length)];
}

export function generateRandomId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
