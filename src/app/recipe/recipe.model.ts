import { Ingredients } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredient: Ingredients[];

    constructor(name: string, desc: string, imgp: string, ingredient: Ingredients[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imgp;
        this.ingredient = ingredient;
    }
}