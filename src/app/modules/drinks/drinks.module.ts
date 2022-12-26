import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinksRoutingModule } from './drinks-routing.module';
import { HomeDrinkComponent } from './pages/home-drink/home-drink.component';
import { DrinkDetailsComponent } from './pages/drink-details/drink-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeDrinkComponent,
    DrinkDetailsComponent
  ],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    HttpClientModule,
  ]
})
export class DrinksModule { }
