import { Component, OnInit } from '@angular/core';
import { DrinkClientService } from '../../services/drink-client.service';

@Component({
  selector: 'app-home-drink',
  templateUrl: './home-drink.component.html',
  styleUrls: ['./home-drink.component.scss']
})
export class HomeDrinkComponent implements OnInit {

  constructor(
    private drinkClient:DrinkClientService
  ) { }

  ngOnInit(): void {
    this.drinkClient.getAllDrinks().subscribe(res=>{
      console.log(res);
      
    })
  }

}
