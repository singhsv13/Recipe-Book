import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe !: Recipe;
  id : number = 0;
  constructor(private recipeService : RecipeService, private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
      this.route.params.subscribe(
        (params : Params)=>{
          this.id = +params['id'];//returns string but casted to number by adding +
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }
  onAddToShopList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo : this.route})
    // this.router.navigate(['../',this.id,'edit'],{relativeTo : this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
