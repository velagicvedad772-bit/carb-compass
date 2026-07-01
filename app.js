const foods = [
  { name: "White rice, cooked", category: "grain", serving: 100, carbs: 28.2, fiber: 0.4, calories: 130, protein: 2.7, fat: 0.3, sugar: 0.1, sodium: 1, source: "Built-in" },
  { name: "Brown rice, cooked", category: "grain", serving: 100, carbs: 25.6, fiber: 1.8, calories: 123, protein: 2.7, fat: 1.0, sugar: 0.2, sodium: 4, source: "Built-in" },
  { name: "Pasta, cooked", category: "grain", serving: 100, carbs: 30.9, fiber: 1.8, calories: 158, protein: 5.8, fat: 0.9, sugar: 0.6, sodium: 1, source: "Built-in" },
  { name: "Whole wheat bread", category: "grain", serving: 40, carbs: 17.0, fiber: 2.4, calories: 98, protein: 4.0, fat: 1.4, sugar: 2.0, sodium: 170, source: "Built-in" },
  { name: "White bread", category: "grain", serving: 40, carbs: 19.6, fiber: 1.1, calories: 106, protein: 3.6, fat: 1.3, sugar: 2.0, sodium: 196, source: "Built-in" },
  { name: "Tortilla, flour", category: "grain", serving: 49, carbs: 24.0, fiber: 1.5, calories: 144, protein: 4.0, fat: 3.5, sugar: 1.2, sodium: 331, source: "Built-in" },
  { name: "Oatmeal, cooked", category: "grain", serving: 100, carbs: 12.0, fiber: 1.7, calories: 71, protein: 2.5, fat: 1.5, sugar: 0.3, sodium: 4, source: "Built-in" },
  { name: "Granola", category: "grain", serving: 55, carbs: 35.0, fiber: 4.0, calories: 260, protein: 6.0, fat: 9.0, sugar: 12.0, sodium: 75, source: "Built-in" },
  { name: "Apple", category: "fruit", serving: 182, carbs: 25.1, fiber: 4.4, calories: 95, protein: 0.5, fat: 0.3, sugar: 18.9, sodium: 2, source: "Built-in" },
  { name: "Banana", category: "fruit", serving: 118, carbs: 27.0, fiber: 3.1, calories: 105, protein: 1.3, fat: 0.4, sugar: 14.4, sodium: 1, source: "Built-in" },
  { name: "Orange", category: "fruit", serving: 131, carbs: 15.4, fiber: 3.1, calories: 62, protein: 1.2, fat: 0.2, sugar: 12.2, sodium: 0, source: "Built-in" },
  { name: "Blueberries", category: "fruit", serving: 100, carbs: 14.5, fiber: 2.4, calories: 57, protein: 0.7, fat: 0.3, sugar: 10.0, sodium: 1, source: "Built-in" },
  { name: "Strawberries", category: "fruit", serving: 100, carbs: 7.7, fiber: 2.0, calories: 32, protein: 0.7, fat: 0.3, sugar: 4.9, sodium: 1, source: "Built-in" },
  { name: "Grapes", category: "fruit", serving: 100, carbs: 18.1, fiber: 0.9, calories: 69, protein: 0.7, fat: 0.2, sugar: 15.5, sodium: 2, source: "Built-in" },
  { name: "Mango", category: "fruit", serving: 100, carbs: 15.0, fiber: 1.6, calories: 60, protein: 0.8, fat: 0.4, sugar: 13.7, sodium: 1, source: "Built-in" },
  { name: "Potato, baked", category: "veg", serving: 173, carbs: 36.6, fiber: 3.8, calories: 161, protein: 4.3, fat: 0.2, sugar: 2.0, sodium: 17, source: "Built-in" },
  { name: "Sweet potato, baked", category: "veg", serving: 114, carbs: 23.6, fiber: 3.8, calories: 103, protein: 2.3, fat: 0.2, sugar: 7.4, sodium: 41, source: "Built-in" },
  { name: "Corn", category: "veg", serving: 100, carbs: 21.0, fiber: 2.4, calories: 96, protein: 3.4, fat: 1.5, sugar: 4.5, sodium: 1, source: "Built-in" },
  { name: "Carrots", category: "veg", serving: 100, carbs: 9.6, fiber: 2.8, calories: 41, protein: 0.9, fat: 0.2, sugar: 4.7, sodium: 69, source: "Built-in" },
  { name: "Broccoli", category: "veg", serving: 100, carbs: 6.6, fiber: 2.6, calories: 34, protein: 2.8, fat: 0.4, sugar: 1.7, sodium: 33, source: "Built-in" },
  { name: "Spinach", category: "veg", serving: 100, carbs: 3.6, fiber: 2.2, calories: 23, protein: 2.9, fat: 0.4, sugar: 0.4, sodium: 79, source: "Built-in" },
  { name: "Chicken breast, cooked", category: "protein", serving: 100, carbs: 0, fiber: 0, calories: 165, protein: 31.0, fat: 3.6, sugar: 0, sodium: 74, source: "Built-in" },
  { name: "Salmon, cooked", category: "protein", serving: 100, carbs: 0, fiber: 0, calories: 206, protein: 22.1, fat: 12.4, sugar: 0, sodium: 59, source: "Built-in" },
  { name: "Egg", category: "protein", serving: 50, carbs: 0.4, fiber: 0, calories: 72, protein: 6.3, fat: 4.8, sugar: 0.2, sodium: 71, source: "Built-in" },
  { name: "Black beans, cooked", category: "protein", serving: 100, carbs: 23.7, fiber: 8.7, calories: 132, protein: 8.9, fat: 0.5, sugar: 0.3, sodium: 1, source: "Built-in" },
  { name: "Lentils, cooked", category: "protein", serving: 100, carbs: 20.1, fiber: 7.9, calories: 116, protein: 9.0, fat: 0.4, sugar: 1.8, sodium: 2, source: "Built-in" },
  { name: "Greek yogurt, plain", category: "protein", serving: 170, carbs: 6.0, fiber: 0, calories: 100, protein: 17.0, fat: 0.7, sugar: 5.5, sodium: 61, source: "Built-in" },
  { name: "Milk, 2 percent", category: "protein", serving: 244, carbs: 12.0, fiber: 0, calories: 122, protein: 8.1, fat: 4.8, sugar: 12.0, sodium: 115, source: "Built-in" },
  { name: "Peanut butter", category: "protein", serving: 32, carbs: 7.1, fiber: 1.6, calories: 190, protein: 7.0, fat: 16.0, sugar: 3.0, sodium: 136, source: "Built-in" },
  { name: "Almonds", category: "protein", serving: 28, carbs: 6.1, fiber: 3.5, calories: 164, protein: 6.0, fat: 14.2, sugar: 1.2, sodium: 0, source: "Built-in" }
];

const pdfFoods = [
  { name: "Sugar", category: "grain", serving: 100, carbs: 100, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Honey", category: "grain", serving: 100, carbs: 82, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "White flour", category: "grain", serving: 100, carbs: 76, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Rice, raw", category: "grain", serving: 100, carbs: 80, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Rice, cooked", category: "grain", serving: 100, carbs: 28, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Pasta, cooked", category: "grain", serving: 100, carbs: 31, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "White bread", category: "grain", serving: 100, carbs: 49, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Potato", category: "veg", serving: 100, carbs: 17, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Carrot", category: "veg", serving: 100, carbs: 10, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Tomato", category: "veg", serving: 100, carbs: 4, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Cucumber", category: "veg", serving: 100, carbs: 3.6, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Broccoli", category: "veg", serving: 100, carbs: 7, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Apple", category: "fruit", serving: 100, carbs: 14, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Banana", category: "fruit", serving: 100, carbs: 23, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Orange", category: "fruit", serving: 100, carbs: 12, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Milk", category: "protein", serving: 100, carbs: 5, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Yogurt", category: "protein", serving: 100, carbs: 5, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Egg", category: "protein", serving: 100, carbs: 1, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Almond", category: "protein", serving: 100, carbs: 22, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Walnut", category: "protein", serving: 100, carbs: 14, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" },
  { name: "Peanut", category: "protein", serving: 100, carbs: 16, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "PDF per 100g" }
];

foods.unshift(...pdfFoods);

const foodNameTranslations = {
  "Sugar": "Šećer",
  "Honey": "Med",
  "White flour": "Bijelo brašno",
  "Rice, raw": "Riža (sirova)",
  "Rice, cooked": "Riža (kuhana)",
  "Potato": "Krompir",
  "Carrot": "Mrkva",
  "Tomato": "Paradajz",
  "Cucumber": "Krastavac",
  "Almond": "Badem",
  "Walnut": "Orah",
  "Peanut": "Kikiriki",
  "White rice, cooked": "Bijela riža, kuhana",
  "Brown rice, cooked": "Smeđa riža, kuhana",
  "Pasta, cooked": "Tjestenina, kuhana",
  "Whole wheat bread": "Integralni pšenični hljeb",
  "White bread": "Bijeli hljeb",
  "Tortilla, flour": "Tortilja od brašna",
  "Oatmeal, cooked": "Zobena kaša, kuhana",
  "Granola": "Granola",
  "Apple": "Jabuka",
  "Banana": "Banana",
  "Orange": "Narandža",
  "Blueberries": "Borovnice",
  "Strawberries": "Jagode",
  "Grapes": "Grožđe",
  "Mango": "Mango",
  "Potato, baked": "Pečeni krompir",
  "Sweet potato, baked": "Pečeni batat",
  "Corn": "Kukuruz",
  "Carrots": "Mrkva",
  "Broccoli": "Brokula",
  "Spinach": "Špinat",
  "Chicken breast, cooked": "Pileća prsa, kuhana",
  "Salmon, cooked": "Losos, kuhan",
  "Egg": "Jaje",
  "Black beans, cooked": "Crni grah, kuhan",
  "Lentils, cooked": "Leća, kuhana",
  "Greek yogurt, plain": "Grčki jogurt, obični",
  "Milk, 2 percent": "Mlijeko, 2 posto",
  "Peanut butter": "Puter od kikirikija",
  "Almonds": "Bademi"
};

const translations = {
  en: {
    appKicker: "Diabetes meal planning",
    carbTarget: "Carbohydrate target",
    mealTarget: "Meal target",
    gramsCarbs: "g carbs",
    mealTotals: "Meal nutrition totals",
    totalCarbs: "Total carbs",
    netCarbs: "Net carbs",
    carbChoices: "Carb choices",
    calories: "Calories",
    foodSearch: "Food search",
    findFood: "Find food or ingredient",
    searchPlaceholder: "rice, apple, yogurt, barcode...",
    search: "Search",
    searchHint: "Searches the built-in list first, then Open Food Facts for packaged foods when online.",
    foodFilters: "Food category filters",
    all: "All",
    grains: "Grains",
    fruit: "Fruit",
    proteinCategory: "Protein",
    veg: "Veg",
    addCustomFood: "Add custom food",
    foodName: "Food name",
    customNamePlaceholder: "Homemade soup",
    servingGrams: "Serving grams",
    carbsPerServing: "Carbs per serving",
    fiberPerServing: "Fiber per serving",
    caloriesPerServing: "Calories per serving",
    addToMeal: "Add to meal",
    currentMeal: "Current meal",
    ingredients: "Ingredients",
    saveMeal: "Save meal",
    clear: "Clear",
    emptyMeal: "Build a meal to see carbohydrate totals, net carbs, calories, protein, fat, sugar, sodium, and fiber.",
    food: "Food",
    amount: "Amount",
    carbs: "Carbs",
    nutrition: "Nutrition",
    insulinEstimate: "Insulin estimate",
    carbRatio: "Carb ratio, 1 unit per",
    mealNotes: "Meal notes",
    notesPlaceholder: "Example: pre-meal glucose, timing, recipe notes",
    savedTracker: "Saved meal tracker",
    dailyTracker: "Daily tracker",
    today: "Today",
    longView: "Long view",
    trackerPeriod: "Tracker period",
    month: "Month",
    year: "Year",
    savedMeals: "Saved meals",
    dailyAverage: "Daily average",
    footerNote: "Nutrition data can vary by brand, preparation, and serving size. Use this for planning support, not medical dosing advice.",
    language: "Language",
    languageSwitch: "Language switch",
    builtIn: "Built-in",
    custom: "Custom",
    pdfPer100g: "PDF per 100g",
    openFoodFacts: "Open Food Facts per 100g",
    perServing: "per",
    serving: "serving",
    noMatches: "No matching foods yet. Try a broader search or add a custom food.",
    remoteFail: "Could not reach the live food database. Add a custom food or check the connection.",
    net: "net",
    cal: "cal",
    protein: "protein",
    fat: "fat",
    sugar: "sugar",
    fiber: "fiber",
    sodium: "sodium",
    units: "units",
    ofTarget: "of target",
    savedFromToday: "Saved meals from today will appear here.",
    trackerEmpty: "Your saved meal totals will build up here.",
    thisMonth: "This month",
    thisYear: "This year",
    meals: "meals",
    meal: "meal",
    more: "more",
    deleteSavedMeal: "Delete saved meal",
    remove: "Remove"
  },
  bs: {
    appKicker: "Planiranje obroka za dijabetes",
    carbTarget: "Cilj ugljikohidrata",
    mealTarget: "Cilj obroka",
    gramsCarbs: "g ugljikohidrata",
    mealTotals: "Ukupna nutritivna vrijednost obroka",
    totalCarbs: "Ukupno ugljikohidrata",
    netCarbs: "Neto ugljikohidrati",
    carbChoices: "Porcije ugljikohidrata",
    calories: "Kalorije",
    foodSearch: "Pretraga hrane",
    findFood: "Pronađi hranu ili sastojak",
    searchPlaceholder: "riža, jabuka, jogurt, barkod...",
    search: "Traži",
    searchHint: "Prvo pretražuje ugrađenu listu, zatim Open Food Facts za pakovanu hranu kada je internet dostupan.",
    foodFilters: "Filteri kategorija hrane",
    all: "Sve",
    grains: "Žitarice",
    fruit: "Voće",
    proteinCategory: "Proteini",
    veg: "Povrće",
    addCustomFood: "Dodaj svoju hranu",
    foodName: "Naziv hrane",
    customNamePlaceholder: "Domaća supa",
    servingGrams: "Porcija u gramima",
    carbsPerServing: "Ugljikohidrati po porciji",
    fiberPerServing: "Vlakna po porciji",
    caloriesPerServing: "Kalorije po porciji",
    addToMeal: "Dodaj u obrok",
    currentMeal: "Trenutni obrok",
    ingredients: "Sastojci",
    saveMeal: "Sačuvaj obrok",
    clear: "Očisti",
    emptyMeal: "Sastavi obrok da vidiš ukupne ugljikohidrate, neto ugljikohidrate, kalorije, proteine, masti, šećer, natrij i vlakna.",
    food: "Hrana",
    amount: "Količina",
    carbs: "Ugljikohidrati",
    nutrition: "Nutritivno",
    insulinEstimate: "Procjena inzulina",
    carbRatio: "Omjer ugljikohidrata, 1 jedinica na",
    mealNotes: "Bilješke obroka",
    notesPlaceholder: "Primjer: šećer prije obroka, vrijeme, bilješke recepta",
    savedTracker: "Praćenje sačuvanih obroka",
    dailyTracker: "Dnevno praćenje",
    today: "Danas",
    longView: "Dugi pregled",
    trackerPeriod: "Period praćenja",
    month: "Mjesec",
    year: "Godina",
    savedMeals: "Sačuvani obroci",
    dailyAverage: "Dnevni prosjek",
    footerNote: "Nutritivne vrijednosti mogu se razlikovati po brendu, pripremi i veličini porcije. Koristi ovo kao pomoć za planiranje, ne kao medicinski savjet za doziranje.",
    language: "Jezik",
    languageSwitch: "Prekidač jezika",
    builtIn: "Ugrađeno",
    custom: "Ručno dodano",
    pdfPer100g: "PDF na 100g",
    openFoodFacts: "Open Food Facts na 100g",
    perServing: "na",
    serving: "porciju",
    noMatches: "Nema pronađene hrane. Probaj širu pretragu ili dodaj svoju hranu.",
    remoteFail: "Nije moguće dohvatiti online bazu hrane. Dodaj svoju hranu ili provjeri internet.",
    net: "neto",
    cal: "kal",
    protein: "proteini",
    fat: "masti",
    sugar: "šećer",
    fiber: "vlakna",
    sodium: "natrij",
    units: "jedinica",
    ofTarget: "od cilja",
    savedFromToday: "Sačuvani obroci od danas će se pojaviti ovdje.",
    trackerEmpty: "Ovdje će se graditi ukupni rezultati sačuvanih obroka.",
    thisMonth: "Ovaj mjesec",
    thisYear: "Ova godina",
    meals: "obroka",
    meal: "obrok",
    more: "još",
    deleteSavedMeal: "Obriši sačuvani obrok",
    remove: "Ukloni"
  }
};

const state = {
  filter: "all",
  results: [...foods],
  meal: JSON.parse(localStorage.getItem("carbCompassMeal") || "[]"),
  notes: localStorage.getItem("carbCompassNotes") || "",
  savedMeals: JSON.parse(localStorage.getItem("carbCompassSavedMeals") || "[]"),
  period: "month",
  lang: localStorage.getItem("carbCompassLang") || "en"
};

const $ = (selector) => document.querySelector(selector);
const resultsEl = $("#results");
const mealBody = $("#mealBody");
const emptyMeal = $("#emptyMeal");
const notesEl = $("#mealNotes");

notesEl.value = state.notes;

function t(key) {
  return translations[state.lang]?.[key] || translations.en[key] || key;
}

function sourceLabel(source) {
  if (source === "Built-in") return t("builtIn");
  if (source === "Custom") return t("custom");
  if (source === "PDF per 100g") return t("pdfPer100g");
  if (source === "Open Food Facts per 100g") return t("openFoodFacts");
  return source;
}

function displayFoodName(food) {
  if (state.lang === "bs") {
    return foodNameTranslations[food.name] || food.name;
  }
  return food.name;
}

function savedMealTitle(meal) {
  if (!meal.items?.length) return meal.title;
  const mealName = meal.items.slice(0, 3).map((food) => displayFoodName(food).split(",")[0]).join(", ");
  const extraCount = Math.max(0, meal.items.length - 3);
  return extraCount ? `${mealName} + ${extraCount} ${t("more")}` : mealName;
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "bs" ? "bs" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  const languageToggle = $("#languageToggle");
  languageToggle.classList.toggle("is-bs", state.lang === "bs");
  languageToggle.setAttribute("aria-checked", state.lang === "bs" ? "true" : "false");
  languageToggle.setAttribute("aria-label", t("languageSwitch"));
  renderResults();
  renderMeal();
  renderTracker();
}

function round(value, digits = 1) {
  return Number.isFinite(value) ? Number(value.toFixed(digits)) : 0;
}

function perGram(food, field) {
  return (food[field] || 0) / food.serving;
}

function scaled(food, field) {
  return perGram(food, field) * food.amount;
}

function formatGrams(value) {
  return `${round(value)}g`;
}

function persistCurrentMeal() {
  localStorage.setItem("carbCompassMeal", JSON.stringify(state.meal));
}

function persistSavedMeals() {
  localStorage.setItem("carbCompassSavedMeals", JSON.stringify(state.savedMeals));
}

function normalizeFood(food) {
  return {
    ...food,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    amount: food.serving || 100
  };
}

function renderResults() {
  resultsEl.innerHTML = "";
  resultsEl.classList.toggle("is-empty-search", !$("#foodSearch").value.trim());
  const filtered = state.results.filter((food) => state.filter === "all" || food.category === state.filter);

  if (!filtered.length) {
    resultsEl.innerHTML = `<p class="hint">${t("noMatches")}</p>`;
    return;
  }

  filtered.slice(0, 36).forEach((food) => {
    const template = $("#resultTemplate").content.cloneNode(true);
    const card = template.querySelector(".result-card");
    card.querySelector("strong").textContent = displayFoodName(food);
    card.querySelector("span").textContent = `${formatGrams(food.carbs)} ${t("carbs").toLowerCase()}, ${formatGrams(food.fiber)} ${t("fiber")} ${t("perServing")} ${food.serving}g ${t("serving")} - ${sourceLabel(food.source)}`;
    card.querySelector("button").addEventListener("click", () => addFood(food));
    card.querySelector("button").textContent = t("addToMeal").replace(" to meal", "").replace(" u obrok", "");
    resultsEl.appendChild(template);
  });
}

function renderMeal() {
  mealBody.innerHTML = "";
  emptyMeal.style.display = state.meal.length ? "none" : "grid";

  state.meal.forEach((food) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${displayFoodName(food)}</strong><span>${sourceLabel(food.source)}</span></td>
      <td>
        <div class="amount-cell">
          <input type="number" min="1" step="1" value="${round(food.amount, 0)}" aria-label="${t("amount")} ${displayFoodName(food)}" />
          <span>g</span>
        </div>
      </td>
      <td><strong>${formatGrams(scaled(food, "carbs"))}</strong><span>${formatGrams(Math.max(0, scaled(food, "carbs") - scaled(food, "fiber")))} ${t("net")}</span></td>
      <td>
        <div class="nutrition-pills">
          <span>${round(scaled(food, "calories"), 0)} ${t("cal")}</span>
          <span>${formatGrams(scaled(food, "protein"))} ${t("protein")}</span>
          <span>${formatGrams(scaled(food, "fat"))} ${t("fat")}</span>
          <span>${formatGrams(scaled(food, "sugar"))} ${t("sugar")}</span>
          <span>${formatGrams(scaled(food, "fiber"))} ${t("fiber")}</span>
          <span>${round(scaled(food, "sodium"), 0)}mg ${t("sodium")}</span>
        </div>
      </td>
      <td><button type="button" class="remove-button" aria-label="${t("remove")} ${displayFoodName(food)}">x</button></td>
    `;

    row.querySelector("input").addEventListener("input", (event) => {
      food.amount = Math.max(1, Number(event.target.value) || 1);
      persistCurrentMeal();
      renderMeal();
    });
    row.querySelector(".remove-button").addEventListener("click", () => {
      state.meal = state.meal.filter((item) => item.id !== food.id);
      persistCurrentMeal();
      renderMeal();
    });
    mealBody.appendChild(row);
  });

  updateTotals();
}

function updateTotals() {
  const totals = calculateTotals(state.meal);

  const target = Math.max(1, Number($("#targetCarbs").value) || 1);
  const percent = Math.min(160, (totals.carbs / target) * 100);
  const ratio = Math.max(1, Number($("#ratio").value) || 1);

  $("#totalCarbs").textContent = formatGrams(totals.carbs);
  $("#netCarbs").textContent = formatGrams(Math.max(0, totals.carbs - totals.fiber));
  $("#carbChoices").textContent = round(totals.carbs / 15);
  $("#totalCalories").textContent = round(totals.calories, 0);
  $("#targetStatus").textContent = `${round((totals.carbs / target) * 100, 0)}% ${t("ofTarget")}`;
  $("#targetProgress").style.width = `${percent}%`;
  $("#insulinEstimate").textContent = `${round(totals.carbs / ratio, 2)} ${t("units")}`;
}

function calculateTotals(items) {
  return items.reduce((acc, food) => {
    ["carbs", "fiber", "calories", "protein", "fat", "sugar", "sodium"].forEach((field) => {
      acc[field] += scaled(food, field);
    });
    return acc;
  }, { carbs: 0, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0 });
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatMealTime(iso) {
  const locale = state.lang === "bs" ? "bs-BA" : "en-US";
  return new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit" }).format(new Date(iso));
}

function formatShortDate(dateKey) {
  const locale = state.lang === "bs" ? "bs-BA" : "en-US";
  return new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" }).format(new Date(`${dateKey}T12:00:00`));
}

function saveMealToTracker() {
  if (!state.meal.length) return;

  const now = new Date();
  const totals = calculateTotals(state.meal);
  const mealName = state.meal.slice(0, 3).map((food) => displayFoodName(food).split(",")[0]).join(", ");
  const extraCount = Math.max(0, state.meal.length - 3);

  state.savedMeals.unshift({
    id: `${now.getTime()}-${Math.random().toString(16).slice(2)}`,
    createdAt: now.toISOString(),
    dateKey: getDateKey(now),
    title: extraCount ? `${mealName} + ${extraCount} ${t("more")}` : mealName,
    notes: notesEl.value.trim(),
    items: state.meal.map((food) => ({ ...food })),
    totals
  });

  persistSavedMeals();
  renderTracker();
}

function renderTracker() {
  const todayKey = getDateKey();
  const todayMeals = state.savedMeals.filter((meal) => meal.dateKey === todayKey);
  const todayCarbs = todayMeals.reduce((sum, meal) => sum + meal.totals.carbs, 0);

  $("#todayCarbs").textContent = formatGrams(todayCarbs);
  renderTodayMeals(todayMeals);
  renderPeriodSummary();
}

function renderTodayMeals(todayMeals) {
  const container = $("#todayMeals");
  container.innerHTML = "";

  if (!todayMeals.length) {
    container.innerHTML = `<p class="hint">${t("savedFromToday")}</p>`;
    return;
  }

  todayMeals.forEach((meal) => {
    const card = document.createElement("article");
    card.className = "saved-meal";
    card.innerHTML = `
      <div>
        <strong>${savedMealTitle(meal)}</strong>
        <span>${formatMealTime(meal.createdAt)} - ${formatGrams(meal.totals.carbs)} ${t("carbs").toLowerCase()}, ${round(meal.totals.calories, 0)} ${t("cal")}</span>
      </div>
      <button type="button" class="remove-button" aria-label="${t("deleteSavedMeal")}">x</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      state.savedMeals = state.savedMeals.filter((item) => item.id !== meal.id);
      persistSavedMeals();
      renderTracker();
    });
    container.appendChild(card);
  });
}

function renderPeriodSummary() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const prefix = state.period === "month" ? `${year}-${month}` : `${year}`;
  const meals = state.savedMeals.filter((meal) => meal.dateKey.startsWith(prefix));
  const totalCarbs = meals.reduce((sum, meal) => sum + meal.totals.carbs, 0);
  const totalDays = new Set(meals.map((meal) => meal.dateKey)).size || 1;

  $("#periodTitle").textContent = state.period === "month" ? t("thisMonth") : t("thisYear");
  $("#periodMeals").textContent = meals.length;
  $("#periodCarbs").textContent = formatGrams(totalCarbs);
  $("#periodAverage").textContent = formatGrams(totalCarbs / totalDays);

  const byDate = meals.reduce((acc, meal) => {
    acc[meal.dateKey] ||= { meals: 0, carbs: 0 };
    acc[meal.dateKey].meals += 1;
    acc[meal.dateKey].carbs += meal.totals.carbs;
    return acc;
  }, {});

  const breakdown = $("#periodBreakdown");
  breakdown.innerHTML = "";

  const rows = Object.entries(byDate).sort((a, b) => b[0].localeCompare(a[0])).slice(0, 12);
  if (!rows.length) {
    breakdown.innerHTML = `<p class="hint">${t("trackerEmpty")}</p>`;
    return;
  }

  rows.forEach(([dateKey, entry]) => {
    const row = document.createElement("div");
    row.className = "period-row";
    row.innerHTML = `<strong>${formatShortDate(dateKey)}</strong><span>${entry.meals} ${entry.meals === 1 ? t("meal") : t("meals")} - ${formatGrams(entry.carbs)}</span>`;
    breakdown.appendChild(row);
  });
}

function addFood(food) {
  state.meal.push(normalizeFood(food));
  persistCurrentMeal();
  renderMeal();
}

function searchLocal(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [...foods];
  return foods.filter((food) => {
    const englishName = food.name.toLowerCase();
    const bosnianName = (foodNameTranslations[food.name] || "").toLowerCase();
    return englishName.includes(normalized) || bosnianName.includes(normalized);
  });
}

function isBarcode(query) {
  return /^[0-9]{8,14}$/.test(query.trim());
}

function productToFood(product) {
  const nutriments = product.nutriments || {};
  const name = product.product_name || product.generic_name || "Packaged food";
  return {
    name: product.brands ? `${name} (${product.brands})` : name,
    category: "all",
    serving: 100,
    carbs: Number(nutriments.carbohydrates_100g) || 0,
    fiber: Number(nutriments.fiber_100g) || 0,
    calories: Number(nutriments["energy-kcal_100g"]) || Number(nutriments.energy_100g) / 4.184 || 0,
    protein: Number(nutriments.proteins_100g) || 0,
    fat: Number(nutriments.fat_100g) || 0,
    sugar: Number(nutriments.sugars_100g) || 0,
    sodium: (Number(nutriments.sodium_100g) || 0) * 1000,
    source: "Open Food Facts per 100g"
  };
}

async function searchOpenFoodFacts(query) {
  const fields = "product_name,generic_name,brands,nutriments";
  const url = isBarcode(query)
    ? `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(query)}.json?fields=${fields}`
    : `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=12&fields=${fields}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Food lookup failed");
  const data = await response.json();
  const products = data.product ? [data.product] : data.products || [];
  return products
    .map(productToFood)
    .filter((food) => food.name && (food.carbs || food.calories || food.protein || food.fat));
}

async function runSearch() {
  const query = $("#foodSearch").value;
  const local = searchLocal(query);
  state.results = local;
  renderResults();

  if (!query.trim()) return;

  try {
    const remote = await searchOpenFoodFacts(query);
    const seen = new Set(local.map((food) => food.name.toLowerCase()));
    state.results = [...local, ...remote.filter((food) => !seen.has(food.name.toLowerCase()))];
    renderResults();
  } catch {
    if (!local.length) {
      resultsEl.innerHTML = `<p class="hint">${t("remoteFail")}</p>`;
    }
  }
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.filter = button.dataset.filter;
    renderResults();
  });
});

$("#searchButton").addEventListener("click", runSearch);
$("#foodSearch").addEventListener("input", () => {
  state.results = searchLocal($("#foodSearch").value);
  renderResults();
});
$("#foodSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") runSearch();
});

$("#customForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addFood({
    name: $("#customName").value.trim(),
    category: "all",
    serving: Number($("#customServing").value) || 100,
    carbs: Number($("#customCarbs").value) || 0,
    fiber: Number($("#customFiber").value) || 0,
    calories: Number($("#customCalories").value) || 0,
    protein: 0,
    fat: 0,
    sugar: 0,
    sodium: 0,
    source: "Custom"
  });
  event.target.reset();
  $("#customServing").value = 100;
});

$("#clearMeal").addEventListener("click", () => {
  state.meal = [];
  persistCurrentMeal();
  renderMeal();
});

$("#saveMealButton").addEventListener("click", saveMealToTracker);
$("#languageToggle").addEventListener("click", () => {
  state.lang = state.lang === "en" ? "bs" : "en";
  localStorage.setItem("carbCompassLang", state.lang);
  applyLanguage();
});

document.querySelectorAll(".period-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".period-tab").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.period = button.dataset.period;
    renderTracker();
  });
});

$("#targetCarbs").addEventListener("input", updateTotals);
$("#ratio").addEventListener("input", updateTotals);
notesEl.addEventListener("input", () => {
  localStorage.setItem("carbCompassNotes", notesEl.value);
});

applyLanguage();
