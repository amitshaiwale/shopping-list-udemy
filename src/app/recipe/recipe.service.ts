import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
        'Batate Wade', 
        'do something', 
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new Ingredients('Onion', 1),
            new Ingredients('Fries', 20)
        ]),
        new Recipe(
        'Schezwan Chutney', 
        'do something', 
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new Ingredients('Onion', 1),
            new Ingredients('Fries', 20)
        ])
      ];  
      
      getRecipe() {
          return this.recipes.slice();
      }
}