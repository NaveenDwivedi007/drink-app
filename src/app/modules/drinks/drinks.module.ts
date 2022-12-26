import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinksRoutingModule } from './drinks-routing.module';
import { HomeDrinkComponent } from './pages/home-drink/home-drink.component';
import { DrinkDetailsComponent } from './pages/drink-details/drink-details.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeDrinkComponent,
    DrinkDetailsComponent,
    DrinkCardComponent
  ],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class DrinksModule { }
