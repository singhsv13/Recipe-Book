import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe.model';
import { Ingredient } from '../models/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes : Recipe[] = [];
  // recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  // private recipes : Recipe[] = [
  //   new Recipe('Veg Biryani', 
  //   ' Veg biryani is an aromatic rice dish made with rice, veggies & spices.', 
  //   'https://www.livofy.com/health/wp-content/uploads/2023/03/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22-1024x576.jpg',
  //   [
  //     new Ingredient('Rice', 10),
  //     new Ingredient('Tomatoes',5),
  //     new Ingredient('Onions', 5),
  //     new Ingredient('Masala', 2)
  //   ]),
  //   new Recipe('Kheer', 
  //   'The Indian version of a sweet pudding is what we refer to as Kheer. It is basically a milk-based dessert, which has other ingredients, sweetener and flavorings added to it.',
  //   'https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Rice-Kheer-Indian-Rice-Pudding44.jpg',
  //   [
  //     new Ingredient('Rice', 10),
  //     new Ingredient('Milk',5),
  //     new Ingredient('Dry Fruits', 5),
  //     new Ingredient('Sugar', 2)
  //   ])
  // ];
  
  constructor(private slService : ShoppingListService) { }


  getRecipes(){
    return this.recipes.slice(); //return copy of the recipe array
  }

  addIngredientsToShoppingList(ingredientss : Ingredient[]){
    this.slService.addIngredientsHere(ingredientss);
  }

  getRecipe(index : number){
    return this.recipes[index];
  }

  addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index :number, newRecipe : Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  
  deleteRecipe(index : number){
    this.recipes.splice(index,1);//delete the recipe
    this.recipeChanged.next(this.recipes.slice()); //pass the copy of the new recipes array after deletion
  }

  setRecipes(recipes : Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
