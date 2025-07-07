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

function findHighestScreenTime(data) 
{
  let highest = data[0];
  for (let entry of data) 
  {
    if (entry.screenTime > highest.screenTime) 
    {
      highest = entry;
    }
  }
  return highest.day + " (" + highest.screenTime + " hrs)";
}

function averageSleep(data) 
{
  let total = 0;
  for (let entry of data) 
  {
    total += entry.sleepHours;
  }
  return (total / data.length).toFixed(1);
}

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
  return `"${maxMood}"`;
}

function correlateCaffeineToFocus(data) 
{
  let highCaffeineFocus = [];
  let lowCaffeineFocus = [];

  for (let entry of data) 
  {
    if (entry.caffeineIntake > 1) {
      highCaffeineFocus.push(entry.focusLevel);
    }
    else
    {
      lowCaffeineFocus.push(entry.focusLevel);
    }
  }

  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  return avg(highCaffeineFocus) > avg(lowCaffeineFocus) ? "Yes" : "Nope!";
}
