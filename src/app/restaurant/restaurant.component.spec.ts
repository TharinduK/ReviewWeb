/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from '../viewModels';
import { RestaurantService, RestaurantServiceStub } from '../services';

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;

  let expectedRestName = "Test Rest Name";
  let expectedCusineName = "Test Cusine Name";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RestaurantComponent
      ],
      providers: [RestaurantService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;

    //service injected to the component
    let restSvc = fixture.debugElement.injector.get(RestaurantService);

    //setup get restuarant method
    var rest = new Restaurant();
    rest.name = expectedRestName;
    rest.cuisineName = expectedCusineName;

    let spy = spyOn(restSvc, 'getRestaurant')
      .and.returnValue(rest);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define restaurant name', () => {

    let de = fixture.debugElement.nativeElement;
    let el = de.querySelector('h2');

    expect(el.textContent).toContain(expectedRestName);
    expect(el.textContent).toContain(expectedCusineName);
  });
});
