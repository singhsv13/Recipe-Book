import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') slForm: any;
  // @ViewChild('nameInput') nameInputRef : ElementRef = {
  //   nativeElement: undefined
  // }
  // @ViewChild('amountInput') amountInputRef : ElementRef = {
  //   nativeElement: undefined
  // }
  mySubscription : Subscription = new Subscription;
  editMode : boolean = false;
  editNumberIndex : number = 0;
  editedItem : Ingredient = {
    name: '',
    amount: 0
  }

  constructor(private shopListService : ShoppingListService){}
  
  ngOnInit(): void {
    //here we recieve the number of the item we want to edit
    this.mySubscription=this.shopListService.startedEditting.subscribe(
      (index : number)=>{
        this.editNumberIndex = index;
        this.editMode = true;
        this.editedItem = this.shopListService.getMyIngredient(index);
        this.slForm.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form : NgForm){
    // const ingreName = this.nameInputRef.nativeElement.value;
    // const ingreAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shopListService.updateIngredient(this.editNumberIndex,newIngredient);
    }
    else{
      this.shopListService.addIngredients(newIngredient); 
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shopListService.deleteIngredient(this.editNumberIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
      this.mySubscription.unsubscribe(); 
  }
}
