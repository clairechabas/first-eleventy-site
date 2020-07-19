const vibes = [
  'Have a great day !',
  'Sun is out go get it!',
  'There is never enough salmon',
  'The world is your oyster',
];

// Randomly select a vibe
var vibe = vibes[Math.floor(Math.random() * vibes.length)];

// Display the random vibe to the DOM
document.querySelector('.vibe').append(vibe);
