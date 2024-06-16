// pages/api/suggest-meals.js

const axios = require('axios');
const calculateNutrients = require('../../utils/nutrientCalculator');

const calculateTotalNutrients = (recipes) => {
  return recipes.reduce((totals, recipe) => {
    Object.keys(recipe.recipe.totalNutrients).forEach(nutrient => {
      if (totals[nutrient]) {
        totals[nutrient].quantity += recipe.recipe.totalNutrients[nutrient].quantity;
      } else {
        totals[nutrient] = {
          label: recipe.recipe.totalNutrients[nutrient].label,
          quantity: recipe.recipe.totalNutrients[nutrient].quantity,
          unit: recipe.recipe.totalNutrients[nutrient].unit,
        };
      }
    });
    return totals;
  }, {});
};

const isNutrientClose = (target, actual, margin = 0.33) => {
  return Math.abs(target - actual) / target < margin;
};

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { age, weight, height, gender, activityLevel, goal } = req.body;
  const nutrientGoals = calculateNutrients({ age, weight, height, gender, activityLevel, goal });

// Environment variables for the API keys
const apiId = process.env.APP_ID;
const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
      params: {
        type: 'public',
        q: 'breakfast,lunch,dinner',
        app_id: apiId,
        app_key: apiKey,
        calories: `0-${Math.ceil(nutrientGoals.calories)}`,
        ingr: '10'
      }
    });

    const recipes = response.data.hits;

    const mealCombinations = [];
    for (let i = 0; i < recipes.length - 2; i++) {
      for (let j = i + 1; j < recipes.length - 1; j++) {
        for (let k = j + 1; k < recipes.length; k++) {
          const mealCombination = [recipes[i], recipes[j], recipes[k]];
          const totalNutrients = calculateTotalNutrients(mealCombination);
          if (
            isNutrientClose(nutrientGoals.calories, totalNutrients.ENERC_KCAL.quantity) &&
            isNutrientClose(nutrientGoals.carbs, totalNutrients.CHOCDF.quantity) &&
            isNutrientClose(nutrientGoals.protein, totalNutrients.PROCNT.quantity) &&
            isNutrientClose(nutrientGoals.fat, totalNutrients.FAT.quantity) &&
            isNutrientClose(nutrientGoals.fiber, totalNutrients.FIBTG.quantity)
          ) {
            mealCombinations.push(mealCombination);
          }
        }
      }
    }
    
    res.json(mealCombinations); // Return the first three combinations
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/////
