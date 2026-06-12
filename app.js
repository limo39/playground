// ─── Data ────────────────────────────────────────────────────────────────────

const weatherData = {
  sunny: {
    label: "Sunny",
    icon: "☀️",
    color: "#facc15",
    activities: [
      { name: "Hiking", type: "outdoor", desc: "Perfect visibility and dry trails make this an ideal day to hit a local trail.", duration: "2–4 hrs", difficulty: "moderate" },
      { name: "Picnic in the Park", type: "outdoor", desc: "Grab a blanket and some food — sunshine makes every picnic better.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Cycling", type: "outdoor", desc: "Smooth roads and clear skies — great conditions for a long ride.", duration: "1–3 hrs", difficulty: "moderate" },
      { name: "Outdoor Photography", type: "outdoor", desc: "Golden light and clear skies produce stunning photos.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Beach / Swimming", type: "outdoor", desc: "Sun is out — a perfect excuse to cool off in the water.", duration: "2–5 hrs", difficulty: "easy" },
      { name: "Gardening", type: "outdoor", desc: "Ideal conditions for planting, weeding, or just tending your garden.", duration: "1–3 hrs", difficulty: "easy" },
    ],
    tips: [
      { icon: "🧴", text: "Apply SPF 30+ sunscreen, especially if you'll be out for more than 30 minutes." },
      { icon: "💧", text: "Stay hydrated — drink water every 20 minutes during outdoor activity." },
      { icon: "🕶️", text: "Wear UV-protective sunglasses to avoid eye strain." },
      { icon: "🧢", text: "A hat or cap helps prevent sunstroke on longer outings." },
    ],
    planning: "Great week ahead for outdoor events, sports, and travel. Book outdoor venues and activities now — sunny forecasts fill up fast.",
  },

  "partly-cloudy": {
    label: "Partly Cloudy",
    icon: "⛅",
    color: "#94a3b8",
    activities: [
      { name: "Jogging / Running", type: "outdoor", desc: "Clouds keep the temperature comfortable — great for a longer run.", duration: "30–90 min", difficulty: "moderate" },
      { name: "Outdoor Café Visit", type: "outdoor", desc: "Pleasant enough to sit outside without direct glare or heat.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Farmers Market", type: "outdoor", desc: "Mild weather makes browsing stalls enjoyable without overheating.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Sketching / Drawing Outside", type: "outdoor", desc: "Diffused light from clouds is actually ideal for artists.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Frisbee / Casual Sports", type: "outdoor", desc: "Cool enough to play without exhaustion, warm enough to enjoy.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Reading on the Porch", type: "adaptive", desc: "Comfortable temperatures with natural light — perfect reading weather.", duration: "1–3 hrs", difficulty: "easy" },
    ],
    tips: [
      { icon: "🌂", text: "Keep a compact umbrella handy in case clouds build into showers." },
      { icon: "🧥", text: "Bring a light layer — cloud cover can drop the temperature a few degrees." },
      { icon: "🌡️", text: "Conditions may shift. Check the forecast again around midday." },
    ],
    planning: "Mostly stable conditions over the next few days. Good time for outdoor plans with a flexible backup option indoors.",
  },

  cloudy: {
    label: "Cloudy / Overcast",
    icon: "☁️",
    color: "#64748b",
    activities: [
      { name: "Museum or Gallery", type: "indoor", desc: "Overcast days are perfect for exploring art, history, or science indoors.", duration: "2–4 hrs", difficulty: "easy" },
      { name: "Board Games / Card Games", type: "indoor", desc: "Gather friends or family for a relaxed game session.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Cooking / Baking", type: "indoor", desc: "Try a new recipe — overcast weather puts you in the mood for comfort food.", duration: "1–3 hrs", difficulty: "moderate" },
      { name: "Light Walk / Nature Stroll", type: "outdoor", desc: "Overcast skies diffuse light beautifully — great for a quiet walk.", duration: "30–60 min", difficulty: "easy" },
      { name: "Movie Marathon", type: "indoor", desc: "Grey skies are the perfect excuse for a film series or TV binge.", duration: "2–6 hrs", difficulty: "easy" },
      { name: "Yoga / Home Workout", type: "indoor", desc: "Use the calm mood to focus on stretching, breathing, or a home routine.", duration: "30–60 min", difficulty: "easy" },
    ],
    tips: [
      { icon: "☁️", text: "Overcast days can still have UV radiation — SPF is still worthwhile." },
      { icon: "🌧️", text: "Watch for rain developing later in the day if a front is moving in." },
      { icon: "💡", text: "Indoor lighting may feel dim — open blinds or use warm lamps to lift the mood." },
    ],
    planning: "Good time to tackle indoor projects, catch up on errands, or plan a day trip for when the sun returns.",
  },

  rainy: {
    label: "Rainy",
    icon: "🌧️",
    color: "#38bdf8",
    activities: [
      { name: "Read a Book", type: "indoor", desc: "Rain on the window and a good book — a classic combination.", duration: "1–4 hrs", difficulty: "easy" },
      { name: "Visit a Coffee Shop", type: "indoor", desc: "Find a cozy corner, a warm drink, and watch the rain from inside.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Indoor Rock Climbing", type: "indoor", desc: "A great workout that keeps you active regardless of the weather.", duration: "1–3 hrs", difficulty: "hard" },
      { name: "Journaling / Creative Writing", type: "indoor", desc: "Rainy days stir creativity — a great time to write.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Declutter / Organize", type: "indoor", desc: "Channel the productivity of being stuck inside into something useful.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Cooking a New Cuisine", type: "indoor", desc: "Spend the afternoon mastering a dish from a cuisine you've never tried.", duration: "2–4 hrs", difficulty: "moderate" },
    ],
    tips: [
      { icon: "☂️", text: "Carry a full-size umbrella if you must go out — compact ones lose to heavy rain." },
      { icon: "👟", text: "Wear waterproof shoes or have a dry pair to change into." },
      { icon: "🚗", text: "Allow extra commute time — roads are slower and visibility is reduced." },
      { icon: "📱", text: "Check flood alerts if your area is prone to pooling or runoff." },
    ],
    planning: "Plan any outdoor events for later in the week once the rain passes. Use this time to prep, plan, and rest up.",
  },

  thunderstorm: {
    label: "Thunderstorm",
    icon: "⛈️",
    color: "#818cf8",
    activities: [
      { name: "Stay Home & Relax", type: "indoor", desc: "The safest and most sensible plan — make it cozy and enjoyable.", duration: "As needed", difficulty: "easy" },
      { name: "Watch a Storm-Themed Film", type: "indoor", desc: "Lean into the atmosphere with a dramatic movie night.", duration: "2–3 hrs", difficulty: "easy" },
      { name: "Deep Work / Focus Session", type: "indoor", desc: "The ambient sound of thunder is surprisingly great for concentration.", duration: "1–4 hrs", difficulty: "moderate" },
      { name: "Learn Something New Online", type: "indoor", desc: "Take an online course or explore a new topic — great use of stuck-inside time.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Emergency Kit Check", type: "indoor", desc: "Use the storm as a reminder to review your household emergency supplies.", duration: "30–60 min", difficulty: "easy" },
    ],
    tips: [
      { icon: "⚡", text: "Stay indoors and away from windows during active lightning." },
      { icon: "🔌", text: "Unplug sensitive electronics to protect from power surges." },
      { icon: "📻", text: "Keep a charged device or radio available for weather updates." },
      { icon: "🚫", text: "Avoid outdoor activities, open water, and tall isolated trees." },
      { icon: "🕯️", text: "Have flashlights or candles ready in case of a power outage." },
    ],
    planning: "Postpone any outdoor plans until the storm system clears. Monitor forecasts closely for the next 24–48 hours.",
  },

  snowy: {
    label: "Snowy",
    icon: "❄️",
    color: "#bae6fd",
    activities: [
      { name: "Build a Snowman", type: "outdoor", desc: "Classic winter fun for all ages — get creative with the design.", duration: "30–90 min", difficulty: "easy" },
      { name: "Sledding", type: "outdoor", desc: "Find a good hill and enjoy one of winter's best thrills.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Snowshoeing", type: "outdoor", desc: "A peaceful, low-impact way to explore a snowy landscape.", duration: "1–3 hrs", difficulty: "moderate" },
      { name: "Hot Cocoa & Board Games", type: "indoor", desc: "Warm up inside with drinks, snacks, and games with company.", duration: "1–4 hrs", difficulty: "easy" },
      { name: "Ski / Snowboard", type: "outdoor", desc: "Fresh snow on the slopes — ideal conditions for a ski day.", duration: "3–6 hrs", difficulty: "hard" },
      { name: "Winter Photography", type: "outdoor", desc: "Snow transforms ordinary scenes into beautiful compositions.", duration: "1–2 hrs", difficulty: "easy" },
    ],
    tips: [
      { icon: "🧤", text: "Layer up: base layer (moisture-wicking), mid layer (insulation), outer layer (waterproof)." },
      { icon: "🥾", text: "Wear waterproof boots with good grip to prevent slipping." },
      { icon: "🚗", text: "Drive slowly, increase following distance, and avoid sudden braking." },
      { icon: "🏠", text: "Check that heating systems and pipes are functioning before a freeze." },
    ],
    planning: "Check road conditions before any travel. Great time to plan a ski trip or winter getaway while conditions are prime.",
  },

  windy: {
    label: "Windy",
    icon: "💨",
    color: "#a3e635",
    activities: [
      { name: "Fly a Kite", type: "outdoor", desc: "Wind is the main ingredient — take advantage and head to an open field.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Sailing / Wind Sports", type: "outdoor", desc: "Perfect conditions for sailboats, windsurfers, and kitesurfers.", duration: "2–5 hrs", difficulty: "hard" },
      { name: "Indoor Workout", type: "indoor", desc: "Strong gusts make outdoor exercise difficult — take it inside.", duration: "30–60 min", difficulty: "moderate" },
      { name: "Scenic Drive", type: "adaptive", desc: "Enjoy the windy landscape from the comfort of a car.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Wind Chime Making / Crafts", type: "indoor", desc: "Get inspired by the wind with a creative indoor craft project.", duration: "1–3 hrs", difficulty: "easy" },
    ],
    tips: [
      { icon: "🌬️", text: "Secure or bring in any loose outdoor furniture, umbrellas, or decorations." },
      { icon: "🧥", text: "Wind chill can make temperatures feel significantly colder — dress warmer." },
      { icon: "🌳", text: "Be cautious near large trees — falling branches are a real hazard in strong winds." },
      { icon: "🚲", text: "Cycling into headwinds is very tiring — plan routes with the wind at your back." },
    ],
    planning: "Wind conditions may affect travel and outdoor events. Plan accordingly and check for any wind advisories.",
  },

  foggy: {
    label: "Foggy",
    icon: "🌫️",
    color: "#cbd5e1",
    activities: [
      { name: "Atmospheric Photography", type: "outdoor", desc: "Fog creates a moody, cinematic quality that's hard to replicate.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Meditation / Mindful Walk", type: "outdoor", desc: "The quiet, muted world of fog is perfect for a contemplative stroll.", duration: "30–60 min", difficulty: "easy" },
      { name: "Reading / Journaling", type: "indoor", desc: "Fog outside, warm drink in hand — ideal conditions for reflection.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Yoga / Stretching", type: "indoor", desc: "Use the calm, quiet morning for a slow, focused movement session.", duration: "30–60 min", difficulty: "easy" },
    ],
    tips: [
      { icon: "🚗", text: "Use low-beam headlights when driving in fog — high beams reflect back and reduce visibility." },
      { icon: "🐢", text: "Slow down and increase following distance on the road." },
      { icon: "🚶", text: "Wear bright or reflective clothing if walking near traffic." },
    ],
    planning: "Fog typically burns off by mid-morning. Plan outdoor activities for later in the day when visibility clears.",
  },

  hot: {
    label: "Hot / Heatwave",
    icon: "🌡️",
    color: "#fb923c",
    activities: [
      { name: "Swimming / Water Park", type: "outdoor", desc: "The best way to beat the heat — get in the water.", duration: "2–5 hrs", difficulty: "easy" },
      { name: "Indoor Cinema", type: "indoor", desc: "Air-conditioned theaters are a great escape from the heat.", duration: "2–3 hrs", difficulty: "easy" },
      { name: "Early Morning Run", type: "outdoor", desc: "Exercise before 8 AM while temperatures are still manageable.", duration: "30–60 min", difficulty: "moderate" },
      { name: "Make Homemade Ice Cream", type: "indoor", desc: "Fun, delicious, and keeps you cool in the kitchen.", duration: "1–2 hrs", difficulty: "easy" },
      { name: "Visit a Library", type: "indoor", desc: "Cool, quiet, free — and full of things to read and explore.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Water Balloon Fight", type: "outdoor", desc: "A fun way for all ages to cool off and laugh.", duration: "30–60 min", difficulty: "easy" },
    ],
    tips: [
      { icon: "💧", text: "Drink at least 8–10 glasses of water throughout the day — more if active." },
      { icon: "🏠", text: "Stay indoors between 11 AM – 4 PM when heat is most intense." },
      { icon: "🧊", text: "Use fans with ice or cold water in front for a makeshift AC effect." },
      { icon: "👕", text: "Wear light-colored, loose-fitting, breathable clothing." },
      { icon: "🐾", text: "Check on pets, elderly neighbors, and children — they're most vulnerable to heat." },
    ],
    planning: "Schedule outdoor activities for early morning or evening. Plan any strenuous events for when the heatwave breaks.",
  },

  cold: {
    label: "Cold / Freezing",
    icon: "🥶",
    color: "#93c5fd",
    activities: [
      { name: "Ice Skating", type: "outdoor", desc: "Embrace the cold — find an outdoor rink and enjoy a classic winter activity.", duration: "1–3 hrs", difficulty: "moderate" },
      { name: "Soup / Stew Cooking", type: "indoor", desc: "Nothing beats a homemade warm soup on a freezing day.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Indoor Climbing Gym", type: "indoor", desc: "Intense, warming, and a great full-body workout to fight the chill.", duration: "1–3 hrs", difficulty: "hard" },
      { name: "Hot Spring / Spa Visit", type: "adaptive", desc: "Counter the cold with warmth — a perfect cold-weather activity.", duration: "2–4 hrs", difficulty: "easy" },
      { name: "Fireplace Reading", type: "indoor", desc: "Cold weather was invented for reading by a fire with a warm drink.", duration: "1–4 hrs", difficulty: "easy" },
    ],
    tips: [
      { icon: "🧣", text: "Cover extremities — hat, gloves, and scarf prevent most heat loss." },
      { icon: "🏠", text: "Keep indoor temperature above 68°F (20°C) to prevent hypothermia risk." },
      { icon: "🚗", text: "Warm up your car before driving and keep an emergency kit in the trunk." },
      { icon: "💊", text: "Cold weather can stress the cardiovascular system — take it easy if you have heart conditions." },
    ],
    planning: "Layer up and plan indoor-heavy days. A good time to tackle home projects or explore local indoor venues.",
  },

  humid: {
    label: "Humid",
    icon: "💦",
    color: "#67e8f9",
    activities: [
      { name: "Air-Conditioned Mall / Shopping", type: "indoor", desc: "Stay comfortable while browsing shops and getting errands done.", duration: "1–4 hrs", difficulty: "easy" },
      { name: "Yoga / Pilates", type: "indoor", desc: "Low-intensity, mindful movement is ideal when humidity drains energy.", duration: "30–60 min", difficulty: "easy" },
      { name: "Early Morning Walk", type: "outdoor", desc: "Humidity is lower in early morning before the heat builds.", duration: "30–60 min", difficulty: "easy" },
      { name: "Swimming", type: "outdoor", desc: "Humidity and water go hand in hand — a pool or lake is perfect.", duration: "1–3 hrs", difficulty: "easy" },
      { name: "Movie or Series Binge", type: "indoor", desc: "Humidity kills motivation to go out — lean into a cozy indoor day.", duration: "2–5 hrs", difficulty: "easy" },
    ],
    tips: [
      { icon: "💧", text: "Drink even more water than usual — you lose fluids faster in humid heat." },
      { icon: "👕", text: "Choose moisture-wicking fabrics to stay more comfortable." },
      { icon: "🏠", text: "Use a dehumidifier indoors to improve air quality and comfort." },
      { icon: "🌿", text: "Avoid heavy exercise outdoors — heat index can be dangerously high." },
    ],
    planning: "Plan intensive activities for early morning. Humidity often breaks after afternoon storms — evenings may be more comfortable.",
  },

  hail: {
    label: "Hail",
    icon: "🌨️",
    color: "#a5b4fc",
    activities: [
      { name: "Stay Indoors", type: "indoor", desc: "Hail can be dangerous — the best activity is staying safe inside.", duration: "As needed", difficulty: "easy" },
      { name: "Vehicle & Property Check", type: "indoor", desc: "After hail passes, inspect your car, roof, and windows for damage.", duration: "30–60 min", difficulty: "easy" },
      { name: "Board Games / Puzzles", type: "indoor", desc: "Make the most of being stuck inside with a satisfying game or puzzle.", duration: "1–4 hrs", difficulty: "easy" },
      { name: "Meal Prep for the Week", type: "indoor", desc: "Use the downtime productively to prepare healthy meals ahead.", duration: "1–3 hrs", difficulty: "moderate" },
    ],
    tips: [
      { icon: "🚗", text: "Move vehicles into a garage or under cover to prevent hail damage." },
      { icon: "🏠", text: "Stay away from windows and skylights during active hail." },
      { icon: "📋", text: "Document any property damage with photos for insurance claims." },
      { icon: "⛑️", text: "If caught outside, protect your head and seek shelter immediately." },
    ],
    planning: "Hail events are short but intense. Activities can resume once the storm passes — check the updated forecast before going out.",
  },
};

// ─── State ────────────────────────────────────────────────────────────────────

let currentUnit = "F";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toC(f) { return Math.round((f - 32) * 5 / 9); }
function toF(c) { return Math.round(c * 9 / 5 + 32); }

function formatTemp(value, unit) {
  if (!value && value !== 0) return "—";
  return `${value}°${unit}`;
}

function getTempContext(value, unit) {
  const celsius = unit === "C" ? value : toC(value);
  if (celsius >= 38) return { label: "Extreme Heat", color: "#ef4444" };
  if (celsius >= 30) return { label: "Very Hot", color: "#f97316" };
  if (celsius >= 22) return { label: "Warm", color: "#facc15" };
  if (celsius >= 15) return { label: "Comfortable", color: "#4ade80" };
  if (celsius >= 5)  return { label: "Cool", color: "#38bdf8" };
  if (celsius >= -5) return { label: "Cold", color: "#93c5fd" };
  return { label: "Freezing", color: "#bae6fd" };
}

function windLabel(wind) {
  return { calm: "Calm", light: "Light Breeze", moderate: "Moderate Wind", strong: "Strong Wind" }[wind] || wind;
}

function timeLabel(t) {
  return { morning: "Morning 🌅", afternoon: "Afternoon ☀️", evening: "Evening 🌆", night: "Night 🌙" }[t] || t;
}

// ─── Render ───────────────────────────────────────────────────────────────────

function renderForecast(condition, temperature, wind, timeOfDay) {
  const data = weatherData[condition];
  const tempValue = temperature !== "" ? Number(temperature) : null;
  const tempCtx = tempValue !== null ? getTempContext(tempValue, currentUnit) : null;

  const forecastDisplay = document.getElementById("forecastDisplay");
  forecastDisplay.innerHTML = `
    <div class="forecast-icon">${data.icon}</div>
    <div class="forecast-details">
      <div class="temp" style="color: ${tempCtx ? tempCtx.color : "var(--text)"}">
        ${formatTemp(tempValue, currentUnit)}
        ${tempCtx ? `<span class="temp-context" style="font-size:0.75rem; color:${tempCtx.color}; font-weight:600; margin-left:0.4rem;">${tempCtx.label}</span>` : ""}
      </div>
      <div class="condition-name">${data.label}</div>
      <div class="forecast-meta">
        <span>💨 ${windLabel(wind)}</span>
        <span>🕐 ${timeLabel(timeOfDay)}</span>
      </div>
    </div>
    <div class="planning-note">
      <div class="planning-label">📅 Planning Ahead</div>
      <div class="planning-text">${data.planning}</div>
    </div>
  `;
}

function renderActivities(condition, wind, timeOfDay) {
  const data = weatherData[condition];
  let activities = [...data.activities];

  // Adjust for wind: strong wind removes outdoor activities
  if (wind === "strong") {
    activities = activities.map(a =>
      a.type === "outdoor" ? { ...a, note: "⚠️ Strong winds — proceed with caution." } : a
    );
  }

  // Adjust for night: note outdoor activities have limited daylight
  if (timeOfDay === "night") {
    activities = activities.map(a =>
      a.type === "outdoor" ? { ...a, note: (a.note ? a.note + " " : "") + "🌙 Night: ensure adequate lighting and safety." } : a
    );
  }

  const grid = document.getElementById("activityGrid");
  grid.innerHTML = activities.map(a => `
    <div class="activity-card ${a.type}">
      <span class="activity-type-badge">${a.type}</span>
      <div class="activity-name">${a.name}</div>
      <div class="activity-desc">${a.desc}</div>
      ${a.note ? `<div class="activity-note">${a.note}</div>` : ""}
      <div class="activity-meta">
        <span>⏱ ${a.duration}</span>
        <span class="difficulty ${a.difficulty}">${a.difficulty}</span>
      </div>
    </div>
  `).join("");
}

function renderTips(condition) {
  const data = weatherData[condition];
  const tipsList = document.getElementById("tipsList");
  tipsList.innerHTML = data.tips.map(t => `
    <div class="tip-item">
      <span class="tip-icon">${t.icon}</span>
      <span class="tip-text">${t.text}</span>
    </div>
  `).join("");
}

// ─── Main Logic ───────────────────────────────────────────────────────────────

function getRecommendations() {
  const condition = document.getElementById("condition").value;
  const temperature = document.getElementById("temperature").value;
  const wind = document.getElementById("wind").value;
  const timeOfDay = document.getElementById("timeOfDay").value;

  renderForecast(condition, temperature, wind, timeOfDay);
  renderActivities(condition, wind, timeOfDay);
  renderTips(condition);

  const results = document.getElementById("results");
  results.classList.remove("hidden");
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── Event Listeners ──────────────────────────────────────────────────────────

document.getElementById("recommendBtn").addEventListener("click", getRecommendations);

// Unit toggle
document.querySelectorAll(".unit-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const newUnit = btn.dataset.unit;
    if (newUnit === currentUnit) return;

    const tempInput = document.getElementById("temperature");
    const val = tempInput.value;

    if (val !== "") {
      const num = Number(val);
      tempInput.value = newUnit === "C" ? toC(num) : toF(num);
    }

    currentUnit = newUnit;
    document.querySelectorAll(".unit-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Allow Enter key to trigger recommendations
document.getElementById("temperature").addEventListener("keydown", e => {
  if (e.key === "Enter") getRecommendations();
});
