/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CuisineGroupComponent } from './cuisine-group.component';
import { Cuisine } from '../viewModels';
import { RestaurantService } from '../services';

describe('CuisineGroupComponent', () => {
  let component: CuisineGroupComponent;
  let fixture: ComponentFixture<CuisineGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CuisineGroupComponent],
      providers: [RestaurantService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
