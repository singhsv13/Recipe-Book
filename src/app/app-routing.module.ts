import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';

const routes: Routes = [
  {path : '', redirectTo : '/recipes', pathMatch : 'full'},
  {path : 'shoppinglist', component : ShoppingListComponent},
  {path : 'recipes', component : RecipesComponent, children : [
    {path : '', component: RecipeStartComponent},
    {path : 'new', component : RecipeEditComponent},
    {path : ':id', component : RecipeDetailComponent, resolve : [RecipesResolverService]},
    {path : ':id/edit', component : RecipeEditComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
