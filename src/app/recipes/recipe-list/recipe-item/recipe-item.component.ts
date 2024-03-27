import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{

  @Input() recipe : Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: []
  }
  @Input() id : number = 0;
  

  constructor(private recipeService : RecipeService){}
  
  ngOnInit(): void {
    
  }


}
