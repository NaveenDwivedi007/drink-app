import { Component, Input, OnInit } from '@angular/core';
import { DrinkUi } from '../../interfaces/drink-ui';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent implements OnInit {

  @Input() drinkDetails:Partial<DrinkUi>={}

  constructor() { }

  ngOnInit(): void {
  }

}
