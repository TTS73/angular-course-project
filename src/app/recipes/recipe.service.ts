import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 1)
      ]),
    new Recipe('Another test recipe',
      'This is simply a test',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppinLsiSercive: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {

  }
}
