import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { DrinkUi } from '../../interfaces/drink-ui';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit,OnDestroy {

  sub = new Subscriber();
  drinkDetails:DrinkUi|null = null
  isAPiCallInProgress:boolean = false

  constructor(
    private route:ActivatedRoute
  ) { 
    this.sub.add(
      route.queryParams.subscribe(query =>{
        console.log(query);
      })

    )
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {
  }

}
