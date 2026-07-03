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

const extraFoods = [
  { name: "Raženi hljeb", category: "grain", serving: 100, carbs: 48, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Integralni hljeb", category: "grain", serving: 100, carbs: 41, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Tost hljeb", category: "grain", serving: 100, carbs: 50, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Somun", category: "grain", serving: 100, carbs: 50, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Lepinja", category: "grain", serving: 100, carbs: 49, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kifla", category: "grain", serving: 100, carbs: 52, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Pecivo", category: "grain", serving: 100, carbs: 50, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kroasan", category: "grain", serving: 100, carbs: 46, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Pita sa sirom", category: "grain", serving: 100, carbs: 31, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Burek", category: "grain", serving: 100, carbs: 28, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Pita sa krompirom", category: "grain", serving: 100, carbs: 32, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Palenta", category: "grain", serving: 100, carbs: 15, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kukuruzno brašno", category: "grain", serving: 100, carbs: 76, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Griz", category: "grain", serving: 100, carbs: 73, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Zobene pahuljice", category: "grain", serving: 100, carbs: 66, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Musli", category: "grain", serving: 100, carbs: 63, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Cornflakes", category: "grain", serving: 100, carbs: 84, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Keks", category: "grain", serving: 100, carbs: 70, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Čokoladni keks", category: "grain", serving: 100, carbs: 65, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kolač", category: "grain", serving: 100, carbs: 55, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Torta", category: "grain", serving: 100, carbs: 45, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Palačinke", category: "grain", serving: 100, carbs: 28, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Pizza", category: "grain", serving: 100, carbs: 33, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Hamburger pecivo", category: "grain", serving: 100, carbs: 49, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Pomfrit", category: "veg", serving: 100, carbs: 35, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Pire krompir", category: "veg", serving: 100, carbs: 16, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Grah kuhani", category: "protein", serving: 100, carbs: 21, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Bijeli grah", category: "protein", serving: 100, carbs: 22, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Slanutak", category: "protein", serving: 100, carbs: 27, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Grašak", category: "veg", serving: 100, carbs: 14, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kukuruz kuhani", category: "veg", serving: 100, carbs: 21, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Cvekla", category: "veg", serving: 100, carbs: 10, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Luk", category: "veg", serving: 100, carbs: 9, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Bijeli luk", category: "veg", serving: 100, carbs: 33, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Paprika", category: "veg", serving: 100, carbs: 6, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kupus", category: "veg", serving: 100, carbs: 6, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Karfiol", category: "veg", serving: 100, carbs: 5, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Tikvica", category: "veg", serving: 100, carbs: 3, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Patlidžan", category: "veg", serving: 100, carbs: 6, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Gljive", category: "veg", serving: 100, carbs: 3, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Zelena salata", category: "veg", serving: 100, carbs: 3, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Avokado", category: "fruit", serving: 100, carbs: 9, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kruška", category: "fruit", serving: 100, carbs: 15, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Breskva", category: "fruit", serving: 100, carbs: 10, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Nektarina", category: "fruit", serving: 100, carbs: 11, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Šljiva", category: "fruit", serving: 100, carbs: 11, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kajsija", category: "fruit", serving: 100, carbs: 11, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Trešnje", category: "fruit", serving: 100, carbs: 16, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Višnje", category: "fruit", serving: 100, carbs: 12, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Maline", category: "fruit", serving: 100, carbs: 12, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kupine", category: "fruit", serving: 100, carbs: 10, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Lubenica", category: "fruit", serving: 100, carbs: 8, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Dinja", category: "fruit", serving: 100, carbs: 8, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Ananas", category: "fruit", serving: 100, carbs: 13, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kivi", category: "fruit", serving: 100, carbs: 15, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Limun", category: "fruit", serving: 100, carbs: 9, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Mandarina", category: "fruit", serving: 100, carbs: 13, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Suhe šljive", category: "fruit", serving: 100, carbs: 64, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Grožđice", category: "fruit", serving: 100, carbs: 79, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Hurme", category: "fruit", serving: 100, carbs: 75, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Smokve suhe", category: "fruit", serving: 100, carbs: 64, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Marmelada", category: "grain", serving: 100, carbs: 65, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Džem", category: "grain", serving: 100, carbs: 60, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Nutella", category: "grain", serving: 100, carbs: 57, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Čokolada mliječna", category: "grain", serving: 100, carbs: 59, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Čokolada tamna", category: "grain", serving: 100, carbs: 46, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sladoled", category: "grain", serving: 100, carbs: 24, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Puding", category: "grain", serving: 100, carbs: 22, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sok jabuka", category: "fruit", serving: 100, carbs: 11, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sok narandža", category: "fruit", serving: 100, carbs: 10, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Coca-Cola", category: "grain", serving: 100, carbs: 11, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Ledeni čaj", category: "grain", serving: 100, carbs: 8, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Jogurt voćni", category: "protein", serving: 100, carbs: 14, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kefir", category: "protein", serving: 100, carbs: 4, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sirni namaz", category: "protein", serving: 100, carbs: 4, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kajmak", category: "protein", serving: 100, carbs: 3, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Pavlaka", category: "protein", serving: 100, carbs: 4, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kiselo mlijeko", category: "protein", serving: 100, carbs: 5, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Svježi sir", category: "protein", serving: 100, carbs: 3, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Feta sir", category: "protein", serving: 100, carbs: 4, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Mozzarella", category: "protein", serving: 100, carbs: 3, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Gauda sir", category: "protein", serving: 100, carbs: 2, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Pileći file", category: "protein", serving: 100, carbs: 0, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Pureći file", category: "protein", serving: 100, carbs: 0, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Junetina", category: "protein", serving: 100, carbs: 0, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Teletina", category: "protein", serving: 100, carbs: 0, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Ćevapi", category: "protein", serving: 100, carbs: 2, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kobasica", category: "protein", serving: 100, carbs: 2, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Hrenovka", category: "protein", serving: 100, carbs: 3, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Tunjevina", category: "protein", serving: 100, carbs: 0, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sardina", category: "protein", serving: 100, carbs: 0, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Oslić", category: "protein", serving: 100, carbs: 0, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Škampi", category: "protein", serving: 100, carbs: 1, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kuhano jaje", category: "protein", serving: 100, carbs: 1, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Prženo jaje", category: "protein", serving: 100, carbs: 1, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Integralna riža suha", category: "grain", serving: 100, carbs: 76, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Basmati riža kuhana", category: "grain", serving: 100, carbs: 28, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Jasmin riža kuhana", category: "grain", serving: 100, carbs: 28, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kuskus kuhani", category: "grain", serving: 100, carbs: 23, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Bulgur kuhani", category: "grain", serving: 100, carbs: 19, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Quinoa kuhana", category: "grain", serving: 100, carbs: 21, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Heljda kuhana", category: "grain", serving: 100, carbs: 20, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Ječam kuhani", category: "grain", serving: 100, carbs: 28, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Njoke", category: "grain", serving: 100, carbs: 33, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Rezanci kuhani", category: "grain", serving: 100, carbs: 25, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Makaroni kuhani", category: "grain", serving: 100, carbs: 31, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Lasagne", category: "grain", serving: 100, carbs: 18, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Tortilja", category: "grain", serving: 100, carbs: 49, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Dvopek", category: "grain", serving: 100, carbs: 74, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Krekeri", category: "grain", serving: 100, carbs: 67, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Štapići slani", category: "grain", serving: 100, carbs: 75, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Čips", category: "grain", serving: 100, carbs: 53, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kokice", category: "grain", serving: 100, carbs: 78, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Musaka", category: "grain", serving: 100, carbs: 10, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sarma", category: "grain", serving: 100, carbs: 7, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Đuveč", category: "grain", serving: 100, carbs: 12, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sataraš", category: "veg", serving: 100, carbs: 6, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Tarhana čorba", category: "grain", serving: 100, carbs: 8, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Begova čorba", category: "protein", serving: 100, carbs: 4, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Gulaš", category: "protein", serving: 100, carbs: 5, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Krompiruša", category: "grain", serving: 100, carbs: 32, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sirnica", category: "grain", serving: 100, carbs: 31, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Zeljanica", category: "grain", serving: 100, carbs: 28, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Baklava", category: "grain", serving: 100, carbs: 55, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Hurmašica", category: "grain", serving: 100, carbs: 62, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Tufahija", category: "fruit", serving: 100, carbs: 35, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Krempita", category: "grain", serving: 100, carbs: 34, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Oblatne", category: "grain", serving: 100, carbs: 66, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Eurokrem", category: "grain", serving: 100, carbs: 58, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Medeno srce", category: "grain", serving: 100, carbs: 70, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Bananko", category: "grain", serving: 100, carbs: 76, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Smoki", category: "grain", serving: 100, carbs: 56, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Plazma keks", category: "grain", serving: 100, carbs: 72, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Petit keks", category: "grain", serving: 100, carbs: 74, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Majoneza", category: "protein", serving: 100, carbs: 1, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kečap", category: "veg", serving: 100, carbs: 25, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Senf", category: "veg", serving: 100, carbs: 6, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Ajvar", category: "veg", serving: 100, carbs: 9, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Humus", category: "protein", serving: 100, carbs: 14, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Masline", category: "veg", serving: 100, carbs: 6, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kiseli krastavci", category: "veg", serving: 100, carbs: 2, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Kiseli kupus", category: "veg", serving: 100, carbs: 4, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Borovnice", category: "fruit", serving: 100, carbs: 14, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Ribizle", category: "fruit", serving: 100, carbs: 14, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Brusnice suhe", category: "fruit", serving: 100, carbs: 82, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Nar", category: "fruit", serving: 100, carbs: 19, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Grejp", category: "fruit", serving: 100, carbs: 11, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Batat", category: "veg", serving: 100, carbs: 20, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Repa", category: "veg", serving: 100, carbs: 6, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Rotkvica", category: "veg", serving: 100, carbs: 3, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Poriluk", category: "veg", serving: 100, carbs: 14, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Celer", category: "veg", serving: 100, carbs: 3, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Bundeva", category: "veg", serving: 100, carbs: 7, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Tikva", category: "veg", serving: 100, carbs: 7, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sojino mlijeko", category: "protein", serving: 100, carbs: 4, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Bademovo mlijeko", category: "protein", serving: 100, carbs: 1, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Rižino mlijeko", category: "grain", serving: 100, carbs: 10, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Proteinski puding", category: "protein", serving: 100, carbs: 8, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Energetsko piće", category: "grain", serving: 100, carbs: 11, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Fanta", category: "grain", serving: 100, carbs: 11, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Sprite", category: "grain", serving: 100, carbs: 10, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" },
  { name: "Cedevita napitak", category: "grain", serving: 100, carbs: 9, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source: "Built-in" }
];

const blockedPreparedFoodNames = new Set([
  "burek", "pita sa sirom", "pita sa krompirom", "krompiruša", "sirnica", "zeljanica",
  "pizza", "palačinke", "kolač", "torta", "baklava", "hurmašica", "tufahija",
  "krempita", "oblatne", "medeno srce", "bananko", "musaka", "sarma", "đuveč",
  "sataraš", "tarhana čorba", "begova čorba", "gulaš", "lasagne"
]);

const ingredientGroups = [
  {
    category: "veg",
    forms: ["svježi", "sirovi", "oguljeni", "narezani", "na kockice", "rendani", "kuhani", "pečeni", "smrznuti"],
    items: [
      ["Krompir", 17], ["Mladi krompir", 16], ["Batat", 20], ["Mrkva", 10], ["Paradajz", 4], ["Cherry paradajz", 4],
      ["Krastavac", 4], ["Paprika crvena", 6], ["Paprika zelena", 5], ["Paprika žuta", 6], ["Luk crveni", 9],
      ["Luk bijeli", 9], ["Bijeli luk", 33], ["Poriluk", 14], ["Mladi luk", 7], ["Kupus", 6], ["Crveni kupus", 7],
      ["Kiseli kupus", 4], ["Karfiol", 5], ["Brokula", 7], ["Tikvica", 3], ["Patlidžan", 6], ["Cvekla", 10],
      ["Repa", 6], ["Rotkvica", 3], ["Celer korijen", 9], ["Celer stabljika", 3], ["Peršun korijen", 10],
      ["Paštrnjak", 18], ["Bundeva", 7], ["Tikva", 7], ["Špinat", 4], ["Blitva", 4], ["Kelj", 9],
      ["Prokulice", 9], ["Zelena salata", 3], ["Rukola", 4], ["Endivija", 3], ["Radič", 4], ["Šparoge", 4],
      ["Mahune", 7], ["Grašak", 14], ["Kukuruz", 21], ["Gljive šampinjoni", 3], ["Bukovače", 6],
      ["Vrganji", 7], ["Artičoka", 11], ["Komorač", 7], ["Đumbir korijen", 18], ["Hren", 11]
    ]
  },
  {
    category: "fruit",
    forms: ["svježa", "sirova", "oguljena", "narezana", "na kockice", "pasirana", "smrznuta", "bez košpica"],
    items: [
      ["Jabuka", 14], ["Kruška", 15], ["Banana", 23], ["Narandža", 12], ["Mandarina", 13], ["Limun", 9],
      ["Limeta", 11], ["Grejp", 11], ["Breskva", 10], ["Nektarina", 11], ["Kajsija", 11], ["Šljiva", 11],
      ["Trešnje", 16], ["Višnje", 12], ["Jagode", 8], ["Maline", 12], ["Kupine", 10], ["Borovnice", 14],
      ["Ribizle", 14], ["Brusnice", 12], ["Grožđe", 18], ["Lubenica", 8], ["Dinja", 8], ["Ananas", 13],
      ["Mango", 15], ["Papaja", 11], ["Kivi", 15], ["Nar", 19], ["Smokva", 19], ["Hurme", 75],
      ["Suhe šljive", 64], ["Grožđice", 79], ["Suhe smokve", 64], ["Suhe kajsije", 63], ["Kokos", 15],
      ["Avokado", 9]
    ]
  },
  {
    category: "grain",
    forms: ["sirovi", "suhi", "kuhani", "mljeveni", "integralni", "u zrnu", "u pahuljicama", "brašno", "krupica"],
    items: [
      ["Riža bijela", 80], ["Riža integralna", 76], ["Riža basmati", 78], ["Riža jasmin", 79], ["Riža arborio", 79],
      ["Tjestenina pšenična", 75], ["Tjestenina integralna", 70], ["Makaroni", 75], ["Rezanci", 74],
      ["Špageti", 75], ["Kuskus", 77], ["Bulgur", 76], ["Quinoa", 64], ["Heljda", 71], ["Ječam", 73],
      ["Zob", 66], ["Zobene pahuljice", 66], ["Raž", 76], ["Proso", 73], ["Kukuruz", 74],
      ["Pšenica", 71], ["Griz", 73], ["Palenta", 76], ["Kukuruzno brašno", 76], ["Pšenično brašno", 76],
      ["Integralno brašno", 68], ["Raženo brašno", 76], ["Heljdino brašno", 71], ["Rižino brašno", 80],
      ["Slanutkovo brašno", 58], ["Krompirov škrob", 83], ["Kukuruzni škrob", 91], ["Tapioka škrob", 88]
    ]
  },
  {
    category: "protein",
    forms: ["svježi", "sirovi", "kuhani", "pečeni", "mljeveni", "file", "bez kože", "na kockice"],
    items: [
      ["Pileća prsa", 0], ["Pileći batak", 0], ["Pileće krilo", 0], ["Pureća prsa", 0], ["Pureći batak", 0],
      ["Junetina", 0], ["Mljevena junetina", 0], ["Teletina", 0], ["Govedina", 0], ["Janjetina", 0],
      ["Svinjetina", 0], ["Svinjski file", 0], ["Losos", 0], ["Tuna", 0], ["Tunjevina", 0], ["Sardina", 0],
      ["Oslić", 0], ["Pastrmka", 0], ["Bakalar", 0], ["Skuša", 0], ["Škampi", 1], ["Kozice", 1],
      ["Lignje", 3], ["Jaje", 1], ["Bjelance", 1], ["Žumance", 1], ["Tofu", 2], ["Tempeh", 9]
    ]
  },
  {
    category: "protein",
    forms: ["obični", "svježi", "punomasni", "nemasni", "gusti", "tečni", "rendani", "kockice"],
    items: [
      ["Mlijeko", 5], ["Jogurt", 5], ["Grčki jogurt", 4], ["Kiselo mlijeko", 5], ["Kefir", 4],
      ["Pavlaka", 4], ["Vrhnje za kuhanje", 4], ["Kajmak", 3], ["Svježi sir", 3], ["Mladi sir", 3],
      ["Feta sir", 4], ["Mozzarella", 3], ["Gauda sir", 2], ["Edamer sir", 2], ["Parmezan", 4],
      ["Sirni namaz", 4], ["Maslac", 1], ["Margarin", 1], ["Sojino mlijeko", 4], ["Bademovo mlijeko", 1],
      ["Rižino mlijeko", 10], ["Kokosovo mlijeko", 3]
    ]
  },
  {
    category: "protein",
    forms: ["sirovi", "suhi", "kuhani", "ocijeđeni", "konzervirani", "mljeveni", "pire", "namaz"],
    items: [
      ["Grah bijeli", 22], ["Grah crveni", 23], ["Grah šareni", 22], ["Crni grah", 24], ["Leća crvena", 20],
      ["Leća zelena", 20], ["Slanutak", 27], ["Soja", 30], ["Bob", 20], ["Kikiriki", 16], ["Badem", 22],
      ["Orah", 14], ["Lješnjak", 17], ["Indijski orah", 30], ["Pistacije", 28], ["Suncokret sjemenke", 20],
      ["Bundevine sjemenke", 11], ["Lanene sjemenke", 29], ["Chia sjemenke", 42], ["Sezam", 23]
    ]
  },
  {
    category: "grain",
    forms: ["suhi", "mljeveni", "u prahu", "sitni", "krupni", "bez dodatka", "za marinadu", "za kuhanje"],
    items: [
      ["So", 0], ["Biber crni", 64], ["Biber bijeli", 64], ["Biber zeleni", 64], ["Paprika slatka", 54],
      ["Paprika ljuta", 50], ["Čili", 50], ["Kurkuma", 65], ["Kari", 58], ["Kim", 44], ["Kumin", 44],
      ["Korijander", 55], ["Cimet", 81], ["Klinčić", 66], ["Muškatni oraščić", 49], ["Origano", 69],
      ["Bosiljak", 48], ["Majčina dušica", 64], ["Ruzmarin", 64], ["Peršun", 6], ["Kopar", 7],
      ["Lovor", 75], ["Menta", 15], ["Žalfija", 61], ["Estragon", 50], ["Bijeli luk u prahu", 73],
      ["Luk u prahu", 79], ["Đumbir u prahu", 72], ["Vanilija", 13], ["Prašak za pecivo", 28],
      ["Soda bikarbona", 0], ["Kvasac suhi", 41], ["Želatin", 0]
    ]
  },
  {
    category: "grain",
    forms: ["obični", "bijeli", "smeđi", "u prahu", "sirup", "granule", "za kremu", "za tijesto"],
    items: [
      ["Šećer", 100], ["Med", 82], ["Javorov sirup", 67], ["Agava sirup", 76], ["Melasa", 75],
      ["Dekstroza", 100], ["Fruktoza", 100], ["Kakao", 58], ["Čokolada za kuhanje", 46],
      ["Kokos brašno", 24], ["Prezla", 72], ["Krušne mrvice", 72], ["Marmelada", 65], ["Džem", 60],
      ["Nutella", 57], ["Puding prah", 88], ["Gustin", 91], ["Vanilin šećer", 98]
    ]
  },
  {
    category: "veg",
    forms: ["hladno cijeđeno", "rafinisano", "za prženje", "za salatu", "tečno", "sprej", "kašika", "kašičica"],
    items: [
      ["Maslinovo ulje", 0], ["Suncokretovo ulje", 0], ["Kokosovo ulje", 0], ["Repičino ulje", 0],
      ["Susamovo ulje", 0], ["Bučino ulje", 0], ["Ocat jabukov", 1], ["Ocat alkoholni", 0],
      ["Balzamični ocat", 17], ["Soja sos", 5], ["Worcester sos", 19], ["Kečap", 25], ["Majoneza", 1],
      ["Senf", 6], ["Ajvar", 9], ["Paradajz sos", 8], ["Paradajz pire", 19], ["Koncentrat paradajza", 19]
    ]
  }
];

function makeFood(name, category, carbs, source = "Sastojak na 100g") {
  return { name, category, serving: 100, carbs, fiber: 0, calories: 0, protein: 0, fat: 0, sugar: 0, sodium: 0, source };
}

function generateIngredientFoods() {
  const generated = [];
  ingredientGroups.forEach((group) => {
    group.items.forEach(([baseName, carbs]) => {
      generated.push(makeFood(baseName, group.category, carbs));
      group.forms.forEach((form) => {
        generated.push(makeFood(`${baseName} ${form}`, group.category, carbs));
      });
    });
  });
  return generated;
}

function uniqueFoods(list) {
  const seen = new Set();
  return list.filter((food) => {
    const key = food.name.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const ingredientFoods = uniqueFoods([
  ...pdfFoods,
  ...extraFoods.filter((food) => !blockedPreparedFoodNames.has(food.name.toLowerCase())),
  ...generateIngredientFoods()
]);

const allFoods = uniqueFoods([...ingredientFoods, ...foods]);
foods.length = 0;
foods.push(...allFoods);

const pdfPreferredNames = new Set([
  "pasta, cooked",
  "white bread",
  "white rice, cooked",
  "potato",
  "broccoli",
  "apple",
  "banana",
  "orange",
  "egg"
]);

function searchName(food) {
  return food.name.toLowerCase();
}

function shouldHideDuplicate(food) {
  if (food.source === "PDF per 100g") return false;
  const name = searchName(food);
  if (pdfPreferredNames.has(name)) return true;
  if (name === "brown rice, cooked") return true;
  return false;
}

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
  savedMeals: JSON.parse(localStorage.getItem("carbCompassSavedMeals") || "[]"),
  period: "month",
  lang: "bs"
};

const $ = (selector) => document.querySelector(selector);
const resultsEl = $("#results");
const mealBody = $("#mealBody");
const emptyMeal = $("#emptyMeal");

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
  renderResults();
  renderMeal();
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
  const hasSearch = Boolean($("#foodSearch").value.trim());
  resultsEl.classList.toggle("is-empty-search", !hasSearch);
  document.querySelector(".restaurants-mobile")?.classList.toggle("is-hidden-by-search", hasSearch);
  const filtered = state.results.filter((food) => state.filter === "all" || food.category === state.filter);

  if (!filtered.length) {
    resultsEl.innerHTML = `<p class="hint">${t("noMatches")}</p>`;
    return;
  }

  filtered.slice(0, 36).forEach((food) => {
    const template = $("#resultTemplate").content.cloneNode(true);
    const card = template.querySelector(".result-card");
    card.querySelector("strong").textContent = displayFoodName(food);
    card.querySelector("span").textContent = `${formatGrams(food.carbs)} ${t("carbs").toLowerCase()} ${t("perServing")} ${food.serving}g`;
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
      <td><strong>${displayFoodName(food)}</strong></td>
      <td>
        <div class="amount-cell">
          <input type="number" min="1" step="1" value="${round(food.amount, 0)}" aria-label="${t("amount")} ${displayFoodName(food)}" />
          <span>g</span>
        </div>
      </td>
      <td><strong>${formatGrams(scaled(food, "carbs"))}</strong></td>
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

  $("#totalCarbs").textContent = formatGrams(totals.carbs);
  $("#totalCalories").textContent = round(totals.calories, 0);
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

function addFood(food) {
  state.meal.push(normalizeFood(food));
  persistCurrentMeal();
  renderMeal();
}

function searchLocal(query) {
  const normalized = query.trim().toLowerCase();
  const searchableFoods = foods.filter((food) => !shouldHideDuplicate(food));
  if (!normalized) return [...searchableFoods];
  return searchableFoods.filter((food) => {
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

$("#restaurantsToggle").addEventListener("click", () => {
  const panel = $("#restaurantsPanel");
  panel.hidden = !panel.hidden;
});

applyLanguage();
