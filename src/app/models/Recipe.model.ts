import { Ingredient } from './Ingredient.model';

export class Recipe{
    name : string = '';
    description : string = '';
    imagePath : string = '';
    ingredients : Ingredient[] = [];

    constructor(name : string, desc : string, imgPath : string,ingredients : Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingredients = ingredients;
    }
}