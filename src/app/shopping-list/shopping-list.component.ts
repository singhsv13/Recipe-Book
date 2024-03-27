import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../models/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingredients : Ingredient[] = [];
  private idChangedSub: Subscription = new Subscription;

  constructor(private shopListService : ShoppingListService){}

  ngOnInit(): void {
      this.ingredients = this.shopListService.getIngredients();
      this.idChangedSub=this.shopListService.ingredientsChanged.subscribe(
        (ingredients : Ingredient[])=>{
          this.ingredients = ingredients;
        }
      );
  }

  onEditItem(index : number){
    this.shopListService.startedEditting.next(index);
  }

  ngOnDestroy(): void {
      this.idChangedSub.unsubscribe();
  }

}
