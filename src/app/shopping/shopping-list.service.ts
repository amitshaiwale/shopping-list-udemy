import { Ingredients } from '../shared/ingredient.model';

export class ShoppnigListService {
    private ingredients: Ingredients[] = [
        new Ingredients('apples', 5),
        new Ingredients('mango', 6)
      ];

      getIngredient(){
          return this.ingredients;
      }

      addIngredient(ing: Ingredients){
          this.ingredients.push(ing);
      }
}