export interface recipeData {
    list: Array<List>,
    ingredients: Array<String>
  }

  export interface List {
    category: String,
    recipes: Array<item>
  }

  export interface item {
    itemName: String,
    quantity: Number,
    ingredients: Array<Ingredient>,
    cost: Number
  }

  export interface Ingredient {
    ingredient: String,
    quantity: Number
  }