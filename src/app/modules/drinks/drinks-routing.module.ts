import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkDetailsComponent } from './pages/drink-details/drink-details.component';
import { HomeDrinkComponent } from './pages/home-drink/home-drink.component';

const routes: Routes = [
  {
    path:'',
    component:HomeDrinkComponent
  },
  {
    path:'drink',
    component:DrinkDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinksRoutingModule { }
