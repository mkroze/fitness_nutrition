// utils/nutrientCalculator.js

const calculateNutrients = ({ age, weight, height, gender, activityLevel, goal }) => {
    let bmr =
      gender === "male"
        ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
        : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  
    let tdee = bmr * Number(activityLevel);
  
    switch (goal) {
      case "lose":
        tdee -= 500;
        break;
      case "gain":
        tdee += 500;
        break;
      default:
        break;
    }
  
    const carbsPercentage = 0.50;
    const proteinPercentage = 0.20;
    const fatPercentage = 0.30;
  
    const carbsCalories = tdee * carbsPercentage;
    const proteinCalories = tdee * proteinPercentage;
    const fatCalories = tdee * fatPercentage;
  
    const carbsGrams = carbsCalories / 4;
    const proteinGrams = proteinCalories / 4;
    const fatGrams = fatCalories / 9;
  
    const fiberGrams = gender === "male" ? 38 : 25;
  
    return {
      calories: tdee,
      carbs: carbsGrams,
      protein: proteinGrams,
      fat: fatGrams,
      fiber: fiberGrams,
    };
  };
  
  module.exports = calculateNutrients;
  