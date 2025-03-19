// 1. Animal Sounds
const farmAnimals = { moo: "cow", neigh: "horse", baa: "sheep", oink: "pig", cluck: "chicken" };
const { moo, neigh, baa, oink, cluck } = farmAnimals;

// 2. Animal Names
const animalNames = { bessie: "cow", dolly: "sheep", babe: "pig", little: "chicken" };
const { bessie, dolly, babe, little } = animalNames;

// 3. Animal Colors
const animalColors = { blackAndWhite: "cow", black: "sheep", pink: "pig" };
const { blackAndWhite, black, pink } = animalColors;

// 4. Rainbow Colors (by name)
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// 5. Rainbow Colors (Initials, without Indigo)
const [r, o, y, g, b, , v] = rainbowColors;

// 6. Assigning Only Indigo
const [, , , , , indg] = rainbowColors;


// 7. Muppet Object Destructuring
const muppet = {
  muppetName: "Miss Piggy", 
  color: "pink", 
  song: "Never Before, Never Again", 
  song1: "Bein' Green",
  song2: "Moving Right Along",
  song3: "Rainbow Connection",
  song4: "I Hope That Something Better Comes Along",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  nested: { 
    job: "Host of The Muppet Show",
    partner: "Miss Piggy", 
    song2: "Moving Right Along",
    song4: "I Hope That Something Better Comes Along"
  }
};


const { muppetName, color, song, song1, song2, song3, song4, job, partner } = muppet;


const { job: nestedJob, song2: secondSong, song4: fourthSong, partner: nestedPartner } = muppet.nested;






// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner