import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditting = new Subject<number>();

  private ingredients : Ingredient[] = [
    new Ingredient('Rice',5),
    new Ingredient('Milk',10)
  ];
  
  getIngredients(){
    return this.ingredients.slice();
  }

  getMyIngredient(index : number){
    return this.ingredients[index];
  }

  addIngredients(ingredient:Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsHere(ingredients : Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredients(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index : number, newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index : number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
