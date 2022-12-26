import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDrinkComponent } from './home-drink.component';

describe('HomeDrinkComponent', () => {
  let component: HomeDrinkComponent;
  let fixture: ComponentFixture<HomeDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
