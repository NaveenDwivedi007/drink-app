import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { DrinkUi } from '../../interfaces/drink-ui';
import { DrinkClientService } from '../../services/drink-client.service';

@Component({
  selector: 'app-home-drink',
  templateUrl: './home-drink.component.html',
  styleUrls: ['./home-drink.component.scss']
})
export class HomeDrinkComponent implements OnInit,OnDestroy {

  sub = new Subscriber()
  drinks:DrinkUi[] = []
  constructor(
    private drinkClient:DrinkClientService,
    private router:Router
  ) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {
    this.sub.add(
      this.drinkClient.getAllDrinks().subscribe(res=>{
        console.log(res);
        this.drinks = res
      })
    )
  }


  getDrinkDetails(searchStr:string){
    this.router.navigate(['drink'],{
      queryParams:{
        searchStr
      }
    })

  }

}
