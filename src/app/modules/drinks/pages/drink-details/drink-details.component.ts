import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { DrinkUi } from '../../interfaces/drink-ui';
import { DrinkClientService } from '../../services/drink-client.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit,OnDestroy {

  sub = new Subscriber();
  drinkDetails:Partial<DrinkUi> = {}
  isAPiCallInProgress:boolean = false

  constructor(
    private route:ActivatedRoute,
    private drinkClient:DrinkClientService
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {
    this.sub.add(
      this.route.queryParams.subscribe(query =>{
        const {searchStr}=query;
        this.getDrinkDetails(searchStr)
      })
    )
  }

  getDrinkDetails(drinkName:string){
    this.sub.add(
      this.drinkClient.getDrink(drinkName).subscribe(
        res=>{
          if (res && res.length) {
            this.drinkDetails = res[0]
            console.log(this.drinkDetails);
            
          }
          
        }
      )
    )
  }

}
