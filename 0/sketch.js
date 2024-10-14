let seasonEmoji;
let seasonX, seasonY;
let seedValue = 0;
let lastClickTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Permanent Marker');
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  seasonEmoji = getSeasonEmoji(month());
  seasonX = random(width);
  seasonY = random(height);
}

function draw() {
  background(255,232,225);
  randomSeed(seedValue);

  let currentMonth = month();
  let monthtext = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let curmonth = monthtext[currentMonth - 1];
  fill(207, 113, 25);
  textSize(800);
  let monthX = random(100,width-100);
  let monthY = random(100,height-100);
  text(curmonth, monthX, monthY);

  fill(118, 60, 0);
  textSize(600);
  let dayX = random(300,width-300);
  let dayY = random(300,height-300);
  text(day() + 'th', dayX, dayY);

  fill(0, 0, 0, 200);
  textSize(400);
  let hourX = random(100,width-100);
  let hourY = random(100,height-100);
  text(hour(), hourX, hourY);

  let emoji = getEmojiForTime(hour());
  fill(50);
  textSize(200);
  let emojiX = random(100,width-100);
  let emojiY = random(100,height-100);
  text(emoji, emojiX, emojiY);

  fill(100);
  textSize(100);
  text(seasonEmoji, seasonX, seasonY);
}

function mousePressed() {
  seedValue = random(1,225);
  seasonX = mouseX;
  seasonY = mouseY;
  lastClickTime = millis();
  redraw();
}

function getEmojiForTime(hour) {
  if (hour >= 9 && hour < 10) {
    return '🍳'; 
  } else if (hour >= 12 && hour < 14) {
    return '🍜'; 
  } else if (hour >= 17 && hour < 19) {
    return '🍻'; 
  } else if (hour >= 10 && hour < 12) {
    return '🧑‍💻'; 
  } else if (hour >= 14 && hour < 17) {
    return '👏'; 
  } else if (hour >= 19 && hour < 24) {
    return '🎆'; 
  } else {
    return '🛌'; 
  }
}

function getSeasonEmoji(month) {
  if (month >= 3 && month <= 5) {
    return '🌷';
  } else if (month >= 6 && month <= 8) {
    return '🌞';
  } else if (month >= 9 && month <= 11) {
    return '🍂';
  } else {
    return '❄️';
  }
}