// Week Data: Tracking my real or realistic habits over 7 days
const weekData = 
[
  { day: "Monday", sleepHours: 6, screenTime: 5, mood: "tired", caffeineIntake: 2, focusLevel: 6 },
  { day: "Tuesday", sleepHours: 7, screenTime: 6, mood: "productive", caffeineIntake: 1, focusLevel: 8 },
  { day: "Wednesday", sleepHours: 5.5, screenTime: 8, mood: "drained", caffeineIntake: 3, focusLevel: 5 },
  { day: "Thursday", sleepHours: 8, screenTime: 4, mood: "calm", caffeineIntake: 1, focusLevel: 9 },
  { day: "Friday", sleepHours: 6.5, screenTime: 6, mood: "productive", caffeineIntake: 2, focusLevel: 7 },
  { day: "Saturday", sleepHours: 9, screenTime: 7, mood: "relaxed", caffeineIntake: 0, focusLevel: 6 },
  { day: "Sunday", sleepHours: 8.5, screenTime: 3, mood: "relaxed", caffeineIntake: 0, focusLevel: 8 }
];

// Predictions:
// I think Wednesday had the most screen time.
// I think Thursday had the best focus.
// I don’t think caffeine helped much with focus.

/*
  Finds the day with the highest screen time.
  Input: weekData array
  Output: Day name and number of hours
*/
function findHighestScreenTime(data) 
{
  let highest = data[0]; // Start by assuming the first day has the highest screen time
  for (let entry of data) 
  {
    if (entry.screenTime > highest.screenTime) 
    {
      highest = entry;
    }
  }
  return highest.day + " (" + highest.screenTime + " hrs)";
}

/*
  Calculates the average number of hours of sleep across the week.
  Input: weekData array
  Output: Number representing the average sleep hours (rounded to 1 decimal)
*/
function averageSleep(data) 
{
  let total = 0;
  for (let entry of data) 
  {
    total += entry.sleepHours;
  }
  return (total / data.length).toFixed(1);
}

/*
  Determines which mood appears most often in the week.
  Input: weekData array
  Output: String name of the most frequent mood
*/
function mostFrequentMood(data) 
{
  const moodCounts = {};
  for (let entry of data) 
  {
    moodCounts[entry.mood] = (moodCounts[entry.mood] || 0) + 1;
  }

  let maxMood = "";
  let maxCount = 0;

  for (let mood in moodCounts) 
  {
    if (moodCounts[mood] > maxCount) 
    {
      maxMood = mood;
      maxCount = moodCounts[mood];
    }
  }

  return '"' + maxMood + '"';
}

/*
  Checks whether higher caffeine intake led to better focus.
  Input: weekData array
  Output: "Yes" or "Nope" based on comparison of average focus levels
*/
function correlateCaffeineToFocus(data) 
{
  let highCaffeineFocus = [];
  let lowCaffeineFocus = [];

  for (let entry of data) 
  {
    if (entry.caffeineIntake > 1) 
    {
      highCaffeineFocus.push(entry.focusLevel);
    } else {
      lowCaffeineFocus.push(entry.focusLevel);
    }
  }

  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  return avg(highCaffeineFocus) > avg(lowCaffeineFocus) ? "Yes" : "Nope";
}

// Output the results
console.log("Analyzing Nikki's Data Journal...");
console.log("Most screen time:", findHighestScreenTime(weekData));
console.log("Average sleep:", averageSleep(weekData), "hrs");
console.log("Most frequent mood:", mostFrequentMood(weekData));
console.log("Does more caffeine mean better focus? →", correlateCaffeineToFocus(weekData));
